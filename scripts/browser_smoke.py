#!/usr/bin/env python3
"""Browser smoke test for the Growth OS V3.1 Beginner First dashboard.

The test serves the repository root locally, loads site/index.html in Chromium,
verifies the beginner start experience plus Growth/Mission rendering, checks
the 5-minute manual refresh cooldown, optionally exercises the real Mission
telemetry network path, and performs a compact mobile overflow check.
"""
from __future__ import annotations

import argparse
from contextlib import contextmanager
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
import time

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
COOLDOWN_KEY = "codyssey-basic-live-last-poll-v1"
LIVE_CACHE_KEY = "codyssey-basic-live-telemetry-v1"


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:  # noqa: A003
        pass


@contextmanager
def local_server():
    class Handler(QuietHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(ROOT), **kwargs)

    server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield server.server_port
    finally:
        server.shutdown()
        server.server_close()
        thread.join(timeout=5)


def assert_count(page, selector: str, expected: int) -> None:
    actual = page.locator(selector).count()
    if actual != expected:
        raise AssertionError(f"{selector}: expected {expected}, got {actual}")


def verify_beginner_dashboard(page) -> None:
    page.locator("#beginner-current-title").wait_for()
    page.wait_for_function("document.documentElement.dataset.beginnerDashboard === 'ready'")

    if "B1-1" not in page.locator("#beginner-current-id").inner_text():
        raise AssertionError("Beginner dashboard must start from B1-1")
    if "컴퓨터가 알아서 자기 상태를 점검하게 만들기" not in page.locator("#beginner-current-title").inner_text():
        raise AssertionError("Beginner dashboard current mission title mismatch")
    if page.locator("#beginner-clear-count").inner_text().strip() != "0 / 15":
        raise AssertionError("New Mission Clear Cycle must start at 0 / 15")
    if "1 / 8" not in page.locator("#beginner-current-step-metric").inner_text():
        raise AssertionError("Beginner dashboard must start at step 1 / 8")

    assert_count(page, "#beginner-step-grid .beginner-step", 8)
    assert_count(page, "#beginner-journey .beginner-journey-card", 7)
    assert_count(page, "#beginner-mission-list .beginner-mission-card", 15)

    b2_1 = page.locator("#beginner-mission-list .beginner-mission-card").filter(has_text="B2-1")
    if "이전 수행 기록: PASS" not in b2_1.inner_text():
        raise AssertionError("B2-1 previous PASS must be shown as history, not current clear")
    if "새 도전 0/8 단계" not in b2_1.inner_text():
        raise AssertionError("B2-1 new cycle must remain at 0/8")

    help_button = page.locator("#beginner-help-button")
    help_button.click()
    if not page.locator("#beginner-help-box").is_visible():
        raise AssertionError("beginner easy-help panel did not open")
    help_button.click()

    stuck_button = page.locator("#beginner-stuck-button")
    stuck_button.click()
    if not page.locator("#beginner-stuck-box").is_visible():
        raise AssertionError("beginner stuck-help panel did not open")
    stuck_button.click()


def verify_mobile_readability(browser, url: str) -> None:
    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors: list[str] = []
    page.on("pageerror", lambda exc: errors.append(str(exc)))
    page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
    page.goto(url, wait_until="networkidle")
    page.wait_for_function("document.documentElement.dataset.beginnerDashboard === 'ready'")

    if not page.locator("#beginner-current-title").is_visible():
        raise AssertionError("current mission must be visible on mobile")
    overflow = page.locator("#beginner-dashboard").evaluate("el => el.scrollWidth - el.clientWidth")
    if overflow > 2:
        raise AssertionError(f"beginner mobile dashboard has horizontal overflow: {overflow}px")
    if not page.locator("#beginner-continue").is_visible():
        raise AssertionError("primary beginner action must be visible on mobile")
    if errors:
        raise AssertionError("mobile browser console/page errors: " + " | ".join(errors))

    page.screenshot(path=str(ROOT / "browser-smoke-mobile.png"), full_page=True)
    context.close()


def verify_live_telemetry(page, minimum_success: int) -> tuple[int, int]:
    page.evaluate("([cooldown, cache]) => { localStorage.removeItem(cooldown); localStorage.removeItem(cache); }", [COOLDOWN_KEY, LIVE_CACHE_KEY])
    page.reload(wait_until="networkidle")
    page.locator("#mission-control-grid .mission-control-card").first.wait_for()

    refresh = page.locator("#poll-live-status")
    if not refresh.is_enabled():
        raise AssertionError("manual refresh button must be enabled before live telemetry test")

    refresh.click()
    page.wait_for_function(
        "key => { const raw = localStorage.getItem(key); if (!raw) return false; try { const value = JSON.parse(raw); return Boolean(value.stats && Number.isFinite(value.stats.total)); } catch { return false; } }",
        arg=LIVE_CACHE_KEY,
        timeout=45_000,
    )
    stats = page.evaluate("key => JSON.parse(localStorage.getItem(key)).stats", LIVE_CACHE_KEY)
    success = int(stats.get("success", 0))
    total = int(stats.get("total", 0))
    if total != 15:
        raise AssertionError(f"live telemetry total must be 15, got {total}")
    if success < minimum_success:
        raise AssertionError(f"live telemetry expected at least {minimum_success} successful repositories, got {success}")

    if refresh.is_enabled():
        raise AssertionError("manual refresh button must be disabled immediately after a live poll")

    live_gate_groups = page.locator("#mission-control-grid .live-gates").count()
    if live_gate_groups < success:
        raise AssertionError(
            f"rendered live gate groups ({live_gate_groups}) must cover successful telemetry ({success})"
        )
    return success, total


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--live", action="store_true", help="exercise real raw.githubusercontent.com Mission telemetry")
    parser.add_argument("--minimum-live-success", type=int, default=4)
    args = parser.parse_args()

    live_result: tuple[int, int] | None = None

    with local_server() as port, sync_playwright() as pw:
        browser = pw.chromium.launch()
        context = browser.new_context(viewport={"width": 1440, "height": 1100})
        page = context.new_page()
        errors: list[str] = []
        page.on("pageerror", lambda exc: errors.append(str(exc)))
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)

        url = f"http://127.0.0.1:{port}/site/"
        page.goto(url, wait_until="networkidle")

        verify_beginner_dashboard(page)
        page.locator("#growth-stage-grid .growth-stage-card").first.wait_for()
        page.locator("#mission-control-grid .mission-control-card").first.wait_for()

        assert_count(page, "#growth-stage-grid .growth-stage-card", 5)
        assert_count(page, "#growth-skill-grid .skill-card", 12)
        assert_count(page, "#domain-grid .domain-card", 7)
        assert_count(page, "#mission-control-grid .mission-control-card", 15)
        assert_count(page, "#mission-control-grid .official-gates .gate-cell", 15 * 8)

        stages = page.locator("#growth-stage-grid .growth-stage-card")
        stage_text = "\n".join(stages.all_inner_texts())
        for required in ("CORE", "ACTIVE", "EXPLORE", "READY", "ADVANCED", "PRO", "EXPERT"):
            if required not in stage_text:
                raise AssertionError(f"Growth stage text missing: {required}")

        refresh = page.locator("#poll-live-status")
        if not refresh.is_enabled():
            raise AssertionError("manual refresh button must be enabled with a clean localStorage")

        page.evaluate("([key, value]) => localStorage.setItem(key, value)", [COOLDOWN_KEY, str(int(time.time() * 1000))])
        page.reload(wait_until="networkidle")
        page.locator("#mission-control-grid .mission-control-card").first.wait_for()
        page.wait_for_function("document.documentElement.dataset.beginnerDashboard === 'ready'")
        refresh = page.locator("#poll-live-status")
        if refresh.is_enabled():
            raise AssertionError("manual refresh button must be disabled during the 5-minute cooldown")

        page.evaluate("key => localStorage.removeItem(key)", COOLDOWN_KEY)

        if args.live:
            live_result = verify_live_telemetry(page, args.minimum_live_success)

        if errors:
            raise AssertionError("browser console/page errors: " + " | ".join(errors))

        page.screenshot(path=str(ROOT / "browser-smoke.png"), full_page=True)
        context.close()

        verify_mobile_readability(browser, url)
        browser.close()

    print("V3.1 Beginner First browser smoke test passed.")
    if live_result:
        print(f"Live telemetry: {live_result[0]}/{live_result[1]} repositories succeeded.")
    print("Screenshot: browser-smoke.png")
    print("Mobile screenshot: browser-smoke-mobile.png")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
