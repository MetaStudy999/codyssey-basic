#!/usr/bin/env python3
"""Validate the Codyssey Basic 2026-08-16 new-baseline contract.

This validates repository structure and current-state consistency only. Mission
runtime PASS still requires the mission-specific runtime/evidence gates.
"""
from __future__ import annotations

import json
from pathlib import Path
import re
import subprocess
import sys

import yaml

ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = [
    "README.md",
    "AGENTS.md",
    "config/missions.yaml",
    "config/cycles/current.yaml",
    "config/history/pre-restart-20260816.yaml",
    "config/growth.yaml",
    "config/skills.yaml",
    "config/activities.yaml",
    "config/projects.yaml",
    "config/opportunities.yaml",
    "config/resources.yaml",
    "scripts/sync_progress.py",
    "scripts/sync_growth.py",
    "scripts/browser_smoke.py",
    "site/index.html",
    "site/css/beginner-dashboard.css",
    "site/js/beginner-dashboard.js",
    "site/data/cycle.json",
    "site/data/missions.json",
    "docs/00-governance/README.md",
    "docs/01-master-map/README.md",
    "docs/01-master-map/mission-progress.md",
    "docs/01-master-map/mission-clear-cycle.md",
    "docs/02-missions/README.md",
    "docs/03-learning/README.md",
]

MISSION_SUMMARIES = [
    "docs/02-missions/b1-linux-os/b1-1.md",
    "docs/02-missions/b1-linux-os/b1-2.md",
    "docs/02-missions/b2-python-git/b2-1.md",
    "docs/02-missions/b2-python-git/b2-2.md",
    "docs/02-missions/b3-data-structures-algorithms/b3-1.md",
    "docs/02-missions/b3-data-structures-algorithms/b3-2.md",
    "docs/02-missions/b4-web-frontend/b4-1.md",
    "docs/02-missions/b4-web-frontend/b4-2.md",
    "docs/02-missions/b5-database-backend/b5-1.md",
    "docs/02-missions/b5-database-backend/b5-2.md",
    "docs/02-missions/b5-database-backend/b5-3.md",
    "docs/02-missions/b6-cloud-ai-api/b6-1.md",
    "docs/02-missions/b6-cloud-ai-api/b6-2.md",
    "docs/02-missions/b7-term-project/b7-1.md",
    "docs/02-missions/b7-term-project/b7-2.md",
]

EXPECTED_GATES = [
    "G1_SOURCE", "G2_BUILD", "G3_TEST", "G4_REVIEW",
    "G5_RUNTIME", "G6_EVIDENCE", "G7_LEARN", "G8_MERGE",
]
EXPECTED_REQUIRED = ["B1-1", "B1-2", "B2-1", "B2-2", "B3-1", "B3-2", "B4-1", "B5-1", "B6-1", "B6-2", "B7-1"]
EXPECTED_OPTIONAL = ["B4-2", "B5-2", "B5-3"]
EXPECTED_EXTENSION = ["B7-2"]
FORBIDDEN_STAGE_DIRS = ["docs/core", "docs/explore", "docs/advanced", "docs/pro", "docs/expert"]
MARKDOWN_LINK_RE = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")
LINK_ROOTS = [ROOT / "README.md", ROOT / "AGENTS.md", ROOT / "docs"]


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT)).replace("\\", "/")


def load_yaml(path: Path) -> dict:
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    if not isinstance(data, dict):
        raise ValueError(f"{rel(path)} must contain a mapping")
    return data


def load_json(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError(f"{rel(path)} must contain an object")
    return data


def mission_units() -> list[dict]:
    data = load_yaml(ROOT / "config/missions.yaml")
    return [unit for domain in data.get("domains", []) for unit in domain.get("units", [])]


def check_files(errors: list[str]) -> None:
    for item in REQUIRED_FILES + MISSION_SUMMARIES:
        if not (ROOT / item).is_file():
            errors.append(f"missing required file: {item}")
    for item in FORBIDDEN_STAGE_DIRS:
        if (ROOT / item).exists():
            errors.append(f"forbidden stage directory exists: {item}")


def check_mission_contract(errors: list[str]) -> None:
    data = load_yaml(ROOT / "config/missions.yaml")
    if data.get("gate_order") != EXPECTED_GATES:
        errors.append("config/missions.yaml must preserve G1~G8 order")
    units = mission_units()
    ids = [unit.get("id") for unit in units]
    if len(ids) != 15 or len(set(ids)) != 15:
        errors.append(f"mission catalog must contain 15 unique ids, got {len(ids)}")
    allowed_status = set(data.get("status_values", []))
    allowed_learning = set(data.get("learning_values", []))
    allowed_gate = set(data.get("gate_status_values", []))
    for unit in units:
        mid = unit.get("id", "UNKNOWN")
        if unit.get("status") not in allowed_status:
            errors.append(f"{mid}: invalid mission status")
        if unit.get("learning") not in allowed_learning:
            errors.append(f"{mid}: invalid learning status")
        if unit.get("current_gate") not in EXPECTED_GATES:
            errors.append(f"{mid}: invalid current gate")
        gates = unit.get("gates") or {}
        if list(gates) != EXPECTED_GATES:
            errors.append(f"{mid}: gate keys/order mismatch")
        elif any(value not in allowed_gate for value in gates.values()):
            errors.append(f"{mid}: invalid gate value")
    by_id = {unit["id"]: unit for unit in units}
    if by_id.get("B7-2", {}).get("official_requirement") != "mission-pdf-does-not-state-required-or-optional":
        errors.append("B7-2 official requirement must remain source-faithful and unclassified")


def check_cycle_contract(errors: list[str]) -> None:
    cycle = load_yaml(ROOT / "config/cycles/current.yaml")
    entries = cycle.get("missions") or {}
    ids = [unit["id"] for unit in mission_units()]
    if set(entries) != set(ids) or len(entries) != 15:
        errors.append("current cycle must contain all 15 mission ids")
    current = (cycle.get("cycle") or {}).get("current_mission")
    active = [mid for mid, entry in entries.items() if entry.get("state") == "ACTIVE"]
    if current not in ids or active != [current]:
        errors.append(f"cycle current/ACTIVE mismatch: current={current}, active={active}")

    plan = cycle.get("execution_plan") or {}
    if plan.get("required_first") != EXPECTED_REQUIRED:
        errors.append("required-first order mismatch")
    if plan.get("optional_after_required") != EXPECTED_OPTIONAL:
        errors.append("optional-after-required order mismatch")
    if plan.get("extension_after_optional") != EXPECTED_EXTENSION:
        errors.append("extension order mismatch")

    expected_phase = {mid: "REQUIRED" for mid in EXPECTED_REQUIRED}
    expected_phase.update({mid: "OPTIONAL" for mid in EXPECTED_OPTIONAL})
    expected_phase.update({mid: "EXTENSION" for mid in EXPECTED_EXTENSION})
    for mid, phase in expected_phase.items():
        if entries.get(mid, {}).get("phase") != phase:
            errors.append(f"{mid}: cycle phase must be {phase}")

    gate_display = cycle.get("gate_display") or {}
    if list(gate_display) != EXPECTED_GATES:
        errors.append("friendly gate display must preserve G1~G8 order")
    for index, gate in enumerate(EXPECTED_GATES, 1):
        meta = gate_display.get(gate) or {}
        if meta.get("step") != index:
            errors.append(f"{gate}: friendly step must be {index}")
        for key in ("title", "action", "why", "completion"):
            if not str(meta.get(key, "")).strip():
                errors.append(f"{gate}: missing {key}")

    history = load_yaml(ROOT / "config/history/pre-restart-20260816.yaml")
    if history.get("snapshot_branch") != "archive/pre-restart-20260816-main":
        errors.append("history snapshot branch mismatch")
    preserved = {item.get("mission"): item.get("result") for item in history.get("mission_results", [])}
    if preserved.get("B2-1") != "PASS":
        errors.append("previous B2-1 PASS must remain preserved as history")


def check_generated_data(errors: list[str]) -> None:
    missions = load_json(ROOT / "site/data/missions.json")
    cycle = load_json(ROOT / "site/data/cycle.json")
    if missions.get("generated_from") != "config/missions.yaml":
        errors.append("missions.json generated_from mismatch")
    if cycle.get("generated_from") != "config/cycles/current.yaml":
        errors.append("cycle.json generated_from mismatch")
    if cycle.get("history_source") != "config/history/pre-restart-20260816.yaml":
        errors.append("cycle.json history_source mismatch")
    if (cycle.get("execution_plan") or {}).get("required_first") != EXPECTED_REQUIRED:
        errors.append("cycle.json required-first plan mismatch")
    if len(missions.get("missions") or []) != 15 or len(cycle.get("missions") or {}) != 15:
        errors.append("generated mission/cycle data must contain 15 missions")


def check_dashboard(errors: list[str]) -> None:
    html = (ROOT / "site/index.html").read_text(encoding="utf-8")
    js = (ROOT / "site/js/beginner-dashboard.js").read_text(encoding="utf-8")
    markers = [
        'id="current-id"', 'id="current-action"', 'id="required-count"',
        'id="step-grid"', 'id="required-list"', 'id="optional-list"',
        'id="extension-list"', 'id="refresh-button"',
        'src="./js/beginner-dashboard.js"', 'href="./css/beginner-dashboard.css"',
    ]
    for marker in markers:
        if marker not in html:
            errors.append(f"dashboard marker missing: {marker}")
    for text in ("필수 미션부터", "지금 할 일은 이것 하나입니다.", "선택 미션 · 필수 완료 후", "이전 수행 기록"):
        if text not in html:
            errors.append(f"learner-facing text missing: {text}")
    forbidden_html = ("poll-live-status", "mission-control-grid", "Control Tower Snapshot", "V3 REBUILD ACTIVE")
    for marker in forbidden_html:
        if marker in html:
            errors.append(f"legacy default dashboard marker must be removed: {marker}")
    if "./data/cycle.json" not in js or "./data/missions.json" not in js:
        errors.append("current dashboard must read cycle.json and missions.json")
    if "5 * 60 * 1000" not in js:
        errors.append("5-minute manual refresh cooldown missing")
    for stale in ("mission-status.json", "raw.githubusercontent.com", "pollLiveStatuses"):
        if stale in js:
            errors.append(f"current dashboard must not read legacy telemetry: {stale}")


def iter_markdown_files() -> list[Path]:
    files: set[Path] = set()
    for root in LINK_ROOTS:
        if root.is_file():
            files.add(root)
        elif root.is_dir():
            files.update(root.rglob("*.md"))
    return sorted(files)


def check_markdown_links(errors: list[str]) -> None:
    for path in iter_markdown_files():
        text = path.read_text(encoding="utf-8")
        for raw in MARKDOWN_LINK_RE.findall(text):
            target = raw.strip()
            if not target or target.startswith(("http://", "https://", "mailto:", "#")):
                continue
            target = target.split("#", 1)[0].split("?", 1)[0]
            if not target:
                continue
            candidate = (path.parent / target).resolve()
            try:
                candidate.relative_to(ROOT.resolve())
            except ValueError:
                errors.append(f"link escapes repository: {rel(path)} -> {raw}")
                continue
            if not candidate.exists():
                errors.append(f"broken local link: {rel(path)} -> {raw}")


def check_growth_sources(errors: list[str]) -> None:
    expected = {
        "growth": "config/growth.yaml",
        "skills": "config/skills.yaml",
        "activities": "config/activities.yaml",
        "projects": "config/projects.yaml",
        "opportunities": "config/opportunities.yaml",
    }
    for name, source in expected.items():
        path = ROOT / f"site/data/{name}.json"
        if not path.exists():
            errors.append(f"missing generated growth data: {rel(path)}")
            continue
        payload = load_json(path)
        if payload.get("generated_from") != source:
            errors.append(f"{rel(path)} generated_from mismatch")


def run_sync_check(script: str, errors: list[str]) -> None:
    result = subprocess.run([sys.executable, str(ROOT / script), "--check"], cwd=ROOT, text=True, capture_output=True)
    if result.returncode != 0:
        detail = (result.stderr or result.stdout).strip()
        errors.append(f"{script} --check failed: {detail}")


def main() -> int:
    errors: list[str] = []
    try:
        check_files(errors)
        check_mission_contract(errors)
        check_cycle_contract(errors)
        check_generated_data(errors)
        check_dashboard(errors)
        check_markdown_links(errors)
        check_growth_sources(errors)
        run_sync_check("scripts/sync_progress.py", errors)
        run_sync_check("scripts/sync_growth.py", errors)
    except (OSError, KeyError, TypeError, ValueError, yaml.YAMLError, json.JSONDecodeError) as exc:
        errors.append(str(exc))

    if errors:
        print("New baseline validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print("New baseline validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
