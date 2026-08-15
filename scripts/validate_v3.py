#!/usr/bin/env python3
"""Validate the stable Codyssey Developer Growth OS V3/V3.1 contract.

This validator does not replace Mission runtime verification. It checks the
canonical repository structure, generated-data consistency, beginner Mission
Clear Cycle, Markdown links, Growth contracts, and Dashboard wiring used by
the Control Tower.
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
    "config/history/pre-v3-mission-history.yaml",
    "config/growth.yaml",
    "config/skills.yaml",
    "config/activities.yaml",
    "config/projects.yaml",
    "config/opportunities.yaml",
    "config/resources.yaml",
    "scripts/sync_progress.py",
    "scripts/sync_growth.py",
    "site/index.html",
    "site/css/beginner-dashboard.css",
    "site/js/beginner-dashboard.js",
    "site/js/app.js",
    "site/js/growth-os.js",
    "site/data/cycle.json",
    "site/data/missions.json",
    "site/data/workcells.json",
    "site/data/growth.json",
    "site/data/skills.json",
    "site/data/activities.json",
    "site/data/projects.json",
    "site/data/opportunities.json",
    "docs/00-governance/README.md",
    "docs/00-governance/growth-model.md",
    "docs/00-governance/status-model.md",
    "docs/00-governance/priority-model.md",
    "docs/00-governance/repository-policy.md",
    "docs/00-governance/evidence-traceability.md",
    "docs/00-governance/mission-gates.md",
    "docs/01-master-map/README.md",
    "docs/01-master-map/growth-map.md",
    "docs/01-master-map/current-state.md",
    "docs/01-master-map/mission-progress.md",
    "docs/01-master-map/mission-clear-cycle.md",
    "docs/01-master-map/mission-dependency-map.md",
    "docs/01-master-map/growth-routing.md",
    "docs/01-master-map/repository-map.md",
    "docs/01-master-map/dashboard-v3.md",
    "docs/02-missions/README.md",
    "docs/03-learning/README.md",
    "docs/04-community/README.md",
    "docs/05-projects/README.md",
    "docs/06-opportunities/README.md",
    "docs/07-research/README.md",
    "docs/08-open-source/README.md",
    "docs/09-career/README.md",
    "docs/10-venture/README.md",
    "docs/11-portfolio/README.md",
    "docs/12-impact/README.md",
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

FORBIDDEN_STAGE_DIRS = [
    "docs/core",
    "docs/explore",
    "docs/advanced",
    "docs/pro",
    "docs/expert",
]

V3_LINK_ROOTS = [
    ROOT / "README.md",
    ROOT / "AGENTS.md",
    ROOT / "docs" / "00-governance",
    ROOT / "docs" / "01-master-map",
    ROOT / "docs" / "02-missions",
    ROOT / "docs" / "03-learning",
    ROOT / "docs" / "04-community",
    ROOT / "docs" / "05-projects",
    ROOT / "docs" / "06-opportunities",
    ROOT / "docs" / "07-research",
    ROOT / "docs" / "08-open-source",
    ROOT / "docs" / "09-career",
    ROOT / "docs" / "10-venture",
    ROOT / "docs" / "11-portfolio",
    ROOT / "docs" / "12-impact",
]

MARKDOWN_LINK_RE = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")
EXPECTED_GATES = [
    "G1_SOURCE",
    "G2_BUILD",
    "G3_TEST",
    "G4_REVIEW",
    "G5_RUNTIME",
    "G6_EVIDENCE",
    "G7_LEARN",
    "G8_MERGE",
]


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT)).replace("\\", "/")


def load_yaml(path: Path) -> dict:
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    if not isinstance(data, dict):
        raise ValueError(f"{rel(path)} must contain a mapping")
    return data


def load_json(path: Path) -> dict:
    payload = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(payload, dict):
        raise ValueError(f"{rel(path)} must contain a JSON object")
    return payload


def mission_ids() -> list[str]:
    data = load_yaml(ROOT / "config/missions.yaml")
    return [unit["id"] for domain in data.get("domains", []) for unit in domain.get("units", [])]


def check_required_files(errors: list[str]) -> None:
    for item in REQUIRED_FILES + MISSION_SUMMARIES:
        if not (ROOT / item).is_file():
            errors.append(f"missing required file: {item}")


def check_forbidden_stage_dirs(errors: list[str]) -> None:
    for item in FORBIDDEN_STAGE_DIRS:
        if (ROOT / item).exists():
            errors.append(f"forbidden stage directory exists: {item}")


def check_growth_contract(errors: list[str]) -> None:
    growth = load_yaml(ROOT / "config/growth.yaml")
    stages = [item.get("id") for item in growth.get("growth_stages", [])]
    expected = ["CORE", "EXPLORE", "ADVANCED", "PRO", "EXPERT"]
    if stages != expected:
        errors.append(f"growth stage order mismatch: expected {expected}, got {stages}")

    statuses = set(growth.get("progress_statuses", []))
    expected_statuses = {"PLANNED", "READY", "ACTIVE", "BLOCKED", "DONE", "ARCHIVED"}
    if statuses != expected_statuses:
        errors.append("growth progress_statuses contract mismatch")

    priorities = set(growth.get("priority_values", []))
    if priorities != {"REQUIRED", "RECOMMENDED", "OPTIONAL"}:
        errors.append("growth priority_values contract mismatch")

    axes = growth.get("competency_axes", [])
    if len(axes) != 12 or len(set(axes)) != 12:
        errors.append("growth competency_axes must contain 12 unique axes")


def check_cycle_contract(errors: list[str]) -> None:
    cycle = load_yaml(ROOT / "config/cycles/current.yaml")
    ids = mission_ids()
    cycle_ids = list((cycle.get("missions") or {}).keys())
    if set(cycle_ids) != set(ids):
        errors.append("current cycle must contain all 15 mission ids exactly once")

    states = cycle.get("cycle_state_values", [])
    expected_states = ["NOT_STARTED", "READY", "ACTIVE", "CLEAR", "BLOCKED"]
    if states != expected_states:
        errors.append(f"cycle state contract mismatch: {states}")

    current = (cycle.get("cycle") or {}).get("current_mission")
    active = [mid for mid, item in (cycle.get("missions") or {}).items() if item.get("state") == "ACTIVE"]
    if current not in ids or active != [current]:
        errors.append(f"cycle current mission/ACTIVE mismatch: current={current}, active={active}")

    gate_display = cycle.get("gate_display") or {}
    if list(gate_display) != EXPECTED_GATES:
        errors.append("beginner gate display must preserve G1~G8 order")
    else:
        steps = [gate_display[gate].get("step") for gate in EXPECTED_GATES]
        if steps != list(range(1, 9)):
            errors.append(f"beginner gate steps must be 1..8, got {steps}")
        for gate in EXPECTED_GATES:
            meta = gate_display[gate]
            for key in ("title", "action", "why", "completion"):
                if not str(meta.get(key, "")).strip():
                    errors.append(f"{gate}: beginner metadata missing {key}")

    cycle_json = load_json(ROOT / "site/data/cycle.json")
    if cycle_json.get("generated_from") != "config/cycles/current.yaml":
        errors.append("site/data/cycle.json generated_from mismatch")
    if (cycle_json.get("cycle") or {}).get("current_mission") != current:
        errors.append("cycle JSON current_mission mismatch")
    if set((cycle_json.get("missions") or {}).keys()) != set(ids):
        errors.append("cycle JSON mission set mismatch")

    history = load_yaml(ROOT / "config/history/pre-v3-mission-history.yaml")
    preserved = {item.get("mission"): item.get("result") for item in history.get("mission_results", [])}
    if preserved.get("B2-1") != "PASS":
        errors.append("pre-v3 B2-1 PASS history must remain preserved")


def check_json_sources(errors: list[str]) -> None:
    expected = {
        "growth": "config/growth.yaml",
        "skills": "config/skills.yaml",
        "activities": "config/activities.yaml",
        "projects": "config/projects.yaml",
        "opportunities": "config/opportunities.yaml",
    }
    for name, source in expected.items():
        path = ROOT / f"site/data/{name}.json"
        try:
            payload = load_json(path)
        except json.JSONDecodeError as exc:
            errors.append(f"invalid JSON {rel(path)}: {exc}")
            continue
        if payload.get("generated_from") != source:
            errors.append(
                f"{rel(path)} generated_from mismatch: {payload.get('generated_from')} != {source}"
            )


def iter_markdown_files() -> list[Path]:
    result: set[Path] = set()
    for root in V3_LINK_ROOTS:
        if root.is_file():
            result.add(root)
        elif root.is_dir():
            result.update(root.rglob("*.md"))
    return sorted(result)


def check_markdown_links(errors: list[str]) -> None:
    for path in iter_markdown_files():
        text = path.read_text(encoding="utf-8")
        for raw_target in MARKDOWN_LINK_RE.findall(text):
            target = raw_target.strip()
            if not target or target.startswith(("http://", "https://", "mailto:", "#")):
                continue
            target = target.split("#", 1)[0].split("?", 1)[0]
            if not target:
                continue
            candidate = (path.parent / target).resolve()
            try:
                candidate.relative_to(ROOT.resolve())
            except ValueError:
                errors.append(f"link escapes repository: {rel(path)} -> {raw_target}")
                continue
            if not candidate.exists():
                errors.append(f"broken local link: {rel(path)} -> {raw_target}")


def check_dashboard_wiring(errors: list[str]) -> None:
    html = (ROOT / "site/index.html").read_text(encoding="utf-8")
    beginner_js = (ROOT / "site/js/beginner-dashboard.js").read_text(encoding="utf-8")
    growth_js = (ROOT / "site/js/growth-os.js").read_text(encoding="utf-8")
    app_js = (ROOT / "site/js/app.js").read_text(encoding="utf-8")

    beginner_markers = (
        'id="beginner-dashboard"',
        'id="beginner-current-title"',
        'id="beginner-next-action"',
        'id="beginner-step-grid"',
        'id="beginner-journey"',
        'id="beginner-mission-list"',
        'id="beginner-help-button"',
        'id="beginner-stuck-button"',
        'href="#beginner-dashboard"',
        'src="./js/beginner-dashboard.js"',
        'href="./css/beginner-dashboard.css"',
    )
    for marker in beginner_markers:
        if marker not in html:
            errors.append(f"site/index.html missing Beginner First marker: {marker}")

    for friendly_text in ("처음 시작하기", "지금 할 일은 이것 하나입니다.", "쉬운 설명", "막혔어요"):
        if friendly_text not in html:
            errors.append(f"Beginner First friendly text missing: {friendly_text}")

    if "V3 REBUILD ACTIVE" in html:
        errors.append("obsolete V3 REBUILD ACTIVE text must not appear on the learner dashboard")

    if "./data/cycle.json" not in beginner_js or "./data/missions.json" not in beginner_js:
        errors.append("beginner-dashboard.js must read cycle.json and missions.json")

    for marker in (
        'id="growth-os"',
        'id="growth-stage-grid"',
        'id="growth-registry-summary"',
        'id="growth-skill-grid"',
        'src="./js/growth-os.js"',
    ):
        if marker not in html:
            errors.append(f"site/index.html missing Growth OS marker: {marker}")

    for data_path in (
        "./data/growth.json",
        "./data/skills.json",
        "./data/activities.json",
        "./data/projects.json",
        "./data/opportunities.json",
    ):
        if data_path not in growth_js:
            errors.append(f"site/js/growth-os.js missing data source: {data_path}")

    if "LIVE_POLL_COOLDOWN_MS = 5 * 60 * 1000" not in app_js:
        errors.append("manual Mission refresh 5-minute cooldown contract not found")
    if "pollLiveStatuses" not in app_js:
        errors.append("manual Mission refresh handler not found")


def run_sync_check(script: str, errors: list[str]) -> None:
    command = [sys.executable, str(ROOT / script), "--check"]
    result = subprocess.run(command, cwd=ROOT, text=True, capture_output=True, check=False)
    if result.returncode != 0:
        detail = (result.stderr or result.stdout).strip()
        errors.append(f"{script} --check failed: {detail}")


def main() -> int:
    errors: list[str] = []

    try:
        check_required_files(errors)
        check_forbidden_stage_dirs(errors)
        check_growth_contract(errors)
        check_cycle_contract(errors)
        check_json_sources(errors)
        check_markdown_links(errors)
        check_dashboard_wiring(errors)
        run_sync_check("scripts/sync_progress.py", errors)
        run_sync_check("scripts/sync_growth.py", errors)
    except (OSError, KeyError, TypeError, ValueError, yaml.YAMLError, json.JSONDecodeError) as exc:
        errors.append(str(exc))

    if errors:
        print("Growth OS V3.1 validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("Growth OS V3.1 Beginner First contract validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
