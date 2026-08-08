#!/usr/bin/env python3
"""Generate Control Tower progress views from repository state.

Human-edited sources:
- config/missions.yaml: official serially integrated mission progress
- config/waves/*.yaml: parallel Workcell coordination/live status

Generated outputs:
- README.md (AUTO:MISSION_PROGRESS block only)
- docs/03-progress/progress.md
- site/data/missions.json
- site/data/workcells.json
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys

import yaml

ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / "config" / "missions.yaml"
WAVES_DIR = ROOT / "config" / "waves"
README = ROOT / "README.md"
PROGRESS = ROOT / "docs" / "03-progress" / "progress.md"
SITE_JSON = ROOT / "site" / "data" / "missions.json"
WORKCELLS_JSON = ROOT / "site" / "data" / "workcells.json"
START = "<!-- AUTO:MISSION_PROGRESS:START -->"
END = "<!-- AUTO:MISSION_PROGRESS:END -->"
CONTROL_TOWER_REPO_URL = "https://github.com/MetaStudy999/codyssey-basic"

GATE_LABELS = {
    "G1_SOURCE": "G1 SOURCE",
    "G2_BUILD": "G2 BUILD",
    "G3_TEST": "G3 TEST",
    "G4_REVIEW": "G4 REVIEW",
    "G5_RUNTIME": "G5 RUNTIME",
    "G6_EVIDENCE": "G6 EVIDENCE",
    "G7_LEARN": "G7 LEARN",
    "G8_MERGE": "G8 MERGE",
}
GATE_SHORT = {
    "G1_SOURCE": "G1",
    "G2_BUILD": "G2",
    "G3_TEST": "G3",
    "G4_REVIEW": "G4",
    "G5_RUNTIME": "G5",
    "G6_EVIDENCE": "G6",
    "G7_LEARN": "G7",
    "G8_MERGE": "G8",
}
GATE_ICON = {"PASS": "✅", "TODO": "⬜", "NEEDS-RUNTIME": "🟡", "BLOCKED": "⛔"}


def load_config() -> dict:
    data = yaml.safe_load(CONFIG.read_text(encoding="utf-8"))
    required = {"status_values", "learning_values", "gate_status_values", "gate_order", "domains"}
    missing = required - data.keys()
    if missing:
        raise ValueError(f"missions.yaml missing keys: {sorted(missing)}")
    return data


def load_active_wave() -> tuple[Path, dict]:
    candidates = sorted(path for path in WAVES_DIR.glob("*.yaml") if path.is_file())
    if not candidates:
        raise ValueError("no wave manifest found in config/waves")

    parsed: list[tuple[Path, dict]] = []
    for path in candidates:
        data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        if isinstance(data, dict) and isinstance(data.get("wave"), dict):
            parsed.append((path, data))

    if not parsed:
        raise ValueError("no valid wave manifest found in config/waves")

    for path, data in reversed(parsed):
        if str(data["wave"].get("status", "")).upper() in {"ACTIVE", "READY"}:
            return path, data
    return parsed[-1]


def flatten(data: dict) -> tuple[list[dict], list[dict]]:
    units: list[dict] = []
    domains: list[dict] = []
    status_values = set(data["status_values"])
    learning_values = set(data["learning_values"])
    gate_status_values = set(data["gate_status_values"])
    gate_order = data["gate_order"]

    for domain in data["domains"]:
        domains.append({"id": domain["id"], "name": domain["name"], "name_en": domain["name_en"]})
        for unit in domain["units"]:
            if unit["status"] not in status_values:
                raise ValueError(f"{unit['id']}: invalid status {unit['status']}")
            if unit["learning"] not in learning_values:
                raise ValueError(f"{unit['id']}: invalid learning {unit['learning']}")
            if unit["current_gate"] not in gate_order:
                raise ValueError(f"{unit['id']}: invalid current_gate {unit['current_gate']}")
            gates = unit.get("gates", {})
            if list(gates.keys()) != gate_order:
                raise ValueError(f"{unit['id']}: gates must follow gate_order exactly")
            invalid_gate_status = [value for value in gates.values() if value not in gate_status_values]
            if invalid_gate_status:
                raise ValueError(f"{unit['id']}: invalid gate status {invalid_gate_status[0]}")
            item = dict(unit)
            item["domain_id"] = domain["id"]
            item["domain_name"] = domain["name"]
            item["domain_name_en"] = domain["name_en"]
            item["current_gate_label"] = GATE_LABELS[unit["current_gate"]]
            units.append(item)
    return domains, units


def official_label(unit: dict) -> str:
    if unit["kind"] == "term-project":
        return "Term Project"
    return {"required": "필수", "optional": "선택"}.get(unit["official_requirement"], "미지정")


def render_readme_table(units: list[dict]) -> str:
    lines = [
        "| 순서 | ID | 제목 | 공식 구분 | 수행 상태 | 현재 Gate | 학습 | Repository |",
        "|---:|---|---|---|---|---|---|---|",
    ]
    for i, unit in enumerate(units, 1):
        lines.append(
            f"| {i:02d} | {unit['id']} | {unit['title']} | {official_label(unit)} | "
            f"{unit['status']} | {unit['current_gate_label']} | {unit['learning']} | [repo]({unit['repo']}) |"
        )
    return "\n".join(lines)


def render_progress(units: list[dict], gate_order: list[str]) -> str:
    headers = " | ".join(GATE_SHORT[g] for g in gate_order)
    lines = [
        "# Progress Dashboard",
        "",
        "> 이 문서는 `config/missions.yaml`에서 자동 생성됩니다. 직접 수정하지 않습니다.",
        "",
        f"| ID | Domain | 수행 | 현재 Gate | 학습 | {headers} |",
        "|---|---|---|---|---|" + "---|" * len(gate_order),
    ]
    for unit in units:
        gate_cells = " | ".join(GATE_ICON[unit["gates"][g]] for g in gate_order)
        lines.append(
            f"| {unit['id']} | {unit['domain_name_en']} | {unit['status']} | "
            f"{unit['current_gate_label']} | {unit['learning']} | {gate_cells} |"
        )
    lines += [
        "",
        "## 상태 원칙",
        "",
        "- 수행: `TODO → IMPLEMENTED → TESTED → PASS`",
        "- 예외: `NEEDS-RUNTIME`, `BLOCKED`",
        "- 학습: `NOT-STUDIED → PRACTICED → EXPLAINABLE → MASTERED`",
        "- `PASS`와 `MASTERED`는 서로 다른 상태다.",
    ]
    return "\n".join(lines) + "\n"


def render_site_json(data: dict, domains: list[dict], units: list[dict]) -> str:
    payload = {
        "version": data["version"],
        "course": data["course"],
        "generated_from": "config/missions.yaml",
        "domains": domains,
        "missions": [
            {
                "id": u["id"],
                "kind": u["kind"],
                "official_requirement": u["official_requirement"],
                "execution_required": u["execution_required"],
                "title": u["title"],
                "title_en": u["title_en"],
                "repo": u["repo"],
                "domain_id": u["domain_id"],
                "domain_name": u["domain_name"],
                "domain_name_en": u["domain_name_en"],
                "status": u["status"],
                "learning": u["learning"],
                "current_gate": u["current_gate"],
                "current_gate_label": u["current_gate_label"],
                "gates": u["gates"],
            }
            for u in units
        ],
    }
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def repo_file_url(path: str | None) -> str | None:
    if not path:
        return None
    return f"{CONTROL_TOWER_REPO_URL}/blob/main/{path}"


def render_workcells_json(wave_path: Path, wave_data: dict, units: list[dict]) -> str:
    by_id = {u["id"]: u for u in units}
    workcells: list[dict] = []
    for entry in wave_data.get("workcells", []):
        mission_id = entry["mission"]
        mission = by_id.get(mission_id, {})
        repository = entry.get("repository", "")
        workcells.append(
            {
                "chat": entry.get("chat"),
                "mission": mission_id,
                "title": mission.get("title", mission_id),
                "title_en": mission.get("title_en", mission_id),
                "domain_name_en": mission.get("domain_name_en", ""),
                "repository": repository,
                "repo_url": f"https://github.com/{repository}" if repository else None,
                "packet": entry.get("packet"),
                "packet_url": repo_file_url(entry.get("packet")),
                "prompt": entry.get("prompt"),
                "prompt_url": repo_file_url(entry.get("prompt")),
                "status_doc": entry.get("status_doc"),
                "status_doc_url": repo_file_url(entry.get("status_doc")),
                "workcell_status": entry.get("workcell_status", "UNKNOWN"),
                "integration_status": entry.get("integration_status", "PENDING"),
            }
        )

    wave = wave_data.get("wave", {})
    control_tower = wave_data.get("control_tower", {})
    payload = {
        "schema_version": wave_data.get("schema_version", 1),
        "generated_from": str(wave_path.relative_to(ROOT)),
        "wave": {
            "id": wave.get("id"),
            "purpose": wave.get("purpose"),
            "started_at": wave.get("started_at"),
            "status": wave.get("status"),
        },
        "control_tower": {
            "repository": control_tower.get("repository"),
            "baseline_sha": control_tower.get("baseline_sha"),
            "integration_mode": control_tower.get("integration_mode"),
        },
        "integration_order": wave_data.get("integration_order", []),
        "workcells": workcells,
    }
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def render_readme(existing: str, table: str) -> str:
    if START not in existing or END not in existing:
        raise ValueError("README auto markers are missing")
    before, rest = existing.split(START, 1)
    _, after = rest.split(END, 1)
    return f"{before}{START}\n\n{table}\n\n{END}{after}"


def sync(check: bool) -> int:
    data = load_config()
    domains, units = flatten(data)
    wave_path, wave_data = load_active_wave()
    outputs = {
        README: render_readme(README.read_text(encoding="utf-8"), render_readme_table(units)),
        PROGRESS: render_progress(units, data["gate_order"]),
        SITE_JSON: render_site_json(data, domains, units),
        WORKCELLS_JSON: render_workcells_json(wave_path, wave_data, units),
    }

    stale: list[str] = []
    for path, content in outputs.items():
        current = path.read_text(encoding="utf-8") if path.exists() else ""
        if current != content:
            stale.append(str(path.relative_to(ROOT)))
            if not check:
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(content, encoding="utf-8")

    if check and stale:
        print("Out-of-sync generated files:", file=sys.stderr)
        for path in stale:
            print(f"- {path}", file=sys.stderr)
        return 1

    if stale:
        print("Updated: " + ", ".join(stale))
    else:
        print("Control Tower outputs are already synchronized.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="fail if generated files are stale")
    args = parser.parse_args()
    try:
        return sync(args.check)
    except (KeyError, ValueError, yaml.YAMLError) as exc:
        print(f"sync_progress.py: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
