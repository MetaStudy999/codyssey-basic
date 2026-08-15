#!/usr/bin/env python3
"""Browser smoke test for the static Growth OS V3 dashboard.

The test serves the repository root locally, loads site/index.html in Chromium,
and verifies the rendered Growth and Mission layers without calling the live
Mission telemetry endpoint.
"""
from __future__ import annotations

from contextlib import contextmanager
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import socket
import threading
import time

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
COOLDOWN_KEY = "codyssey-basic-live-last-poll-v1"


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

        # Verify the 5-minute cooldown UI without making live network requests.
        page.evaluate("([key, value]) => localStorage.setItem(key, value)", [COOLDOWN_KEY, str(int(time.time() * 1000))])
        page.reload(wait_until="networkidle")
        page.locator("#mission-control-grid .mission-control-card").first.wait_for()
        refresh = page.locator("#poll-live-status")
        if refresh.is_enabled():
            raise AssertionError("manual refresh button must be disabled during the 5-minute cooldown")

        page.evaluate("key => localStorage.removeItem(key)", COOLDOWN_KEY)

        if errors:
            raise AssertionError("browser console/page errors: " + " | ".join(errors))

        screenshot = ROOT / "browser-smoke.png"
        page.screenshot(path=str(screenshot), full_page=True)
        browser.close()

    print("V3 browser smoke test passed.")
    print("Screenshot: browser-smoke.png")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
