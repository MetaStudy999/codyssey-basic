#!/usr/bin/env python3
"""Browser smoke test for the 2026-08-16 new-baseline learner dashboard.

Expected current mission/step/progress are read from generated Control Tower
JSON so the smoke test advances with the learner instead of freezing step 1.
Legacy Mission repository .live telemetry is deliberately excluded.
"""
from __future__ import annotations

from contextlib import contextmanager
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
from pathlib import Path
import threading

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
REFRESH_KEY = "codyssey-basic-new-baseline-refresh-v2"


def load_expected() -> dict:
    cycle = json.loads((ROOT / "site/data/cycle.json").read_text(encoding="utf-8"))
    missions = json.loads((ROOT / "site/data/missions.json").read_text(encoding="utf-8"))
    current_id = cycle["cycle"]["current_mission"]
    current = next(item for item in missions["missions"] if item["id"] == current_id)
    current_gate = current["current_gate"]
    step = int(cycle["gate_display"][current_gate]["step"])
    summary = cycle["summary"]
    return {
        "current_id": current_id,
        "step": step,
        "required": f"{summary['required_clear']} / {summary['required_total']}",
        "optional": f"{summary['optional_clear']} / {summary['optional_total']}",
    }


EXPECTED = load_expected()


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


def verify_dashboard(page) -> None:
    page.wait_for_function("document.documentElement.dataset.newBaselineDashboard === 'ready'")
    if page.locator("#current-id").inner_text().strip() != EXPECTED["current_id"]:
        raise AssertionError(f"current mission must be {EXPECTED['current_id']}")
    if page.locator("#required-count").inner_text().strip() != EXPECTED["required"]:
        raise AssertionError(f"required mission progress must be {EXPECTED['required']}")
    if page.locator("#optional-count").inner_text().strip() != EXPECTED["optional"]:
        raise AssertionError(f"optional mission progress must be {EXPECTED['optional']}")
    expected_step = f"{EXPECTED['step']} / 8"
    if page.locator("#step-metric").inner_text().strip() != expected_step:
        raise AssertionError(f"current mission step must be {expected_step}")

    assert_count(page, "#step-grid .step-card", 8)
    assert_count(page, "#required-list .mission-card", 11)
    assert_count(page, "#optional-list .mission-card", 3)
    assert_count(page, "#extension-list .mission-card", 1)

    b2_1 = page.locator('#required-list .mission-card[data-mission="B2-1"]')
    text = b2_1.inner_text()
    if "이전 기록 PASS" not in text:
        raise AssertionError("B2-1 previous PASS must remain history")
    if "현재 진도 0/8" not in text:
        raise AssertionError("B2-1 current progress must remain reset until revalidated")

    for selector in ("#easy-help-button", "#stuck-button"):
        button = page.locator(selector)
        button.click()
        panel = page.locator("#easy-help" if selector == "#easy-help-button" else "#stuck-help")
        if not panel.is_visible():
            raise AssertionError(f"help panel did not open for {selector}")
        button.click()

    if page.locator("#poll-live-status").count() != 0:
        raise AssertionError("legacy live telemetry refresh must not appear on the current dashboard")
    if page.locator(".mission-control-card").count() != 0:
        raise AssertionError("legacy Mission Control cards must not be part of the default dashboard")


def verify_refresh(page) -> None:
    page.evaluate("key => localStorage.removeItem(key)", REFRESH_KEY)
    page.reload(wait_until="networkidle")
    page.wait_for_function("document.documentElement.dataset.newBaselineDashboard === 'ready'")
    refresh = page.locator("#refresh-button")
    if not refresh.is_enabled():
        raise AssertionError("current-data refresh must be available with clean localStorage")
    refresh.click()
    page.wait_for_timeout(200)
    if refresh.is_enabled():
        raise AssertionError("refresh must enter the 5-minute cooldown after use")
    if "다시 확인" not in refresh.inner_text():
        raise AssertionError("refresh cooldown label missing")


def verify_mobile(browser, url: str) -> None:
    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors: list[str] = []
    page.on("pageerror", lambda exc: errors.append(str(exc)))
    page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
    page.goto(url, wait_until="networkidle")
    page.wait_for_function("document.documentElement.dataset.newBaselineDashboard === 'ready'")
    if not page.locator("#current-title-heading").is_visible():
        raise AssertionError("current mission must be visible on mobile")
    overflow = page.locator("body").evaluate("el => el.scrollWidth - el.clientWidth")
    if overflow > 2:
        raise AssertionError(f"mobile dashboard has horizontal overflow: {overflow}px")
    if errors:
        raise AssertionError("mobile browser errors: " + " | ".join(errors))
    page.screenshot(path=str(ROOT / "browser-smoke-mobile.png"), full_page=True)
    context.close()


def main() -> int:
    with local_server() as port, sync_playwright() as pw:
        browser = pw.chromium.launch()
        context = browser.new_context(viewport={"width": 1440, "height": 1100})
        page = context.new_page()
        errors: list[str] = []
        page.on("pageerror", lambda exc: errors.append(str(exc)))
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        url = f"http://127.0.0.1:{port}/site/"
        page.goto(url, wait_until="networkidle")
        verify_dashboard(page)
        verify_refresh(page)
        if errors:
            raise AssertionError("browser errors: " + " | ".join(errors))
        page.screenshot(path=str(ROOT / "browser-smoke.png"), full_page=True)
        context.close()
        verify_mobile(browser, url)
        browser.close()

    print("New-baseline dashboard browser smoke passed.")
    print(
        f"Required {EXPECTED['required']} · Optional {EXPECTED['optional']} · "
        f"Current {EXPECTED['current_id']} · Step {EXPECTED['step']}/8"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
