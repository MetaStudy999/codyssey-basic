#!/usr/bin/env python3
"""Generate current Codyssey Basic mission views from the 2026-08-16 restart baseline.

Human-edited current sources:
- config/missions.yaml: current verified mission/gate state
- config/cycles/current.yaml: required-first learner execution plan
- config/history/pre-restart-20260816.yaml: preserved pre-restart history only

Generated outputs:
- README.md AUTO:MISSION_PROGRESS block
- docs/01-master-map/mission-progress.md
- docs/01-master-map/mission-clear-cycle.md
- site/data/missions.json
- site/data/cycle.json

Old workcell/wave telemetry is intentionally not a current progress source.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys

import yaml

ROOT = Path(__file__).resolve().parents[1]
MISSIONS_CONFIG = ROOT / "config" / "missions.yaml"
CYCLE_CONFIG = ROOT / "config" / "cycles" / "current.yaml"
HISTORY_CONFIG = ROOT / "config" / "history" / "pre-restart-20260816.yaml"
README = ROOT / "README.md"
PROGRESS = ROOT / "docs" / "01-master-map" / "mission-progress.md"
CLEAR_CYCLE = ROOT / "docs" / "01-master-map" / "mission-clear-cycle.md"
MISSIONS_JSON = ROOT / "site" / "data" / "missions.json"
CYCLE_JSON = ROOT / "site" / "data" / "cycle.json"
START = "<!-- AUTO:MISSION_PROGRESS:START -->"
END = "<!-- AUTO:MISSION_PROGRESS:END -->"

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
GATE_ICON = {"PASS": "✅", "TODO": "⬜", "NEEDS-RUNTIME": "🟡", "BLOCKED": "⛔"}
PHASE_LABELS = {"REQUIRED": "필수", "OPTIONAL": "선택", "EXTENSION": "확장"}


def load_yaml(path: Path) -> dict:
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    if not isinstance(data, dict):
        raise ValueError(f"{path.relative_to(ROOT)} must contain a mapping")
    return data


def flatten(data: dict) -> tuple[list[dict], list[dict]]:
    gate_order = data["gate_order"]
    allowed_status = set(data["status_values"])
    allowed_learning = set(data["learning_values"])
    allowed_gate_status = set(data["gate_status_values"])
    domains: list[dict] = []
    missions: list[dict] = []

    for domain in data["domains"]:
        domains.append({"id": domain["id"], "name": domain["name"], "name_en": domain["name_en"]})
        for unit in domain["units"]:
            if unit["status"] not in allowed_status:
                raise ValueError(f"{unit['id']}: invalid status {unit['status']}")
            if unit["learning"] not in allowed_learning:
                raise ValueError(f"{unit['id']}: invalid learning {unit['learning']}")
            if unit["current_gate"] not in gate_order:
                raise ValueError(f"{unit['id']}: invalid current_gate {unit['current_gate']}")
            gates = unit.get("gates", {})
            if list(gates) != gate_order:
                raise ValueError(f"{unit['id']}: gates must follow gate_order exactly")
            if any(value not in allowed_gate_status for value in gates.values()):
                raise ValueError(f"{unit['id']}: invalid gate status")
            item = dict(unit)
            item.update(
                domain_id=domain["id"],
                domain_name=domain["name"],
                domain_name_en=domain["name_en"],
                current_gate_label=GATE_LABELS[unit["current_gate"]],
            )
            missions.append(item)
    return domains, missions


def validate_cycle(cycle: dict, missions: list[dict]) -> None:
    ids = [mission["id"] for mission in missions]
    entries = cycle.get("missions") or {}
    if set(entries) != set(ids):
        raise ValueError("current cycle must contain all 15 missions exactly once")
    current = (cycle.get("cycle") or {}).get("current_mission")
    if current not in ids:
        raise ValueError(f"current mission not found: {current}")
    active = [mid for mid, entry in entries.items() if entry.get("state") == "ACTIVE"]
    if active != [current]:
        raise ValueError(f"exactly current mission must be ACTIVE: current={current}, active={active}")
    allowed = set(cycle["cycle_state_values"])
    for mid, entry in entries.items():
        if entry.get("state") not in allowed:
            raise ValueError(f"{mid}: invalid cycle state {entry.get('state')}")
    if list(cycle["gate_display"]) != list(GATE_LABELS):
        raise ValueError("gate_display must preserve G1~G8 order")

    plan = cycle.get("execution_plan") or {}
    planned = (
        list(plan.get("required_first") or [])
        + list(plan.get("optional_after_required") or [])
        + list(plan.get("extension_after_optional") or [])
    )
    if set(planned) != set(ids) or len(planned) != len(ids):
        raise ValueError("execution_plan must contain all 15 missions exactly once")


def load_history() -> dict[str, dict]:
    if not HISTORY_CONFIG.exists():
        return {}
    data = load_yaml(HISTORY_CONFIG)
    return {
        entry["mission"]: dict(entry)
        for entry in data.get("mission_results", [])
        if isinstance(entry, dict) and entry.get("mission")
    }


def official_label(mission: dict) -> str:
    requirement = mission.get("official_requirement")
    if requirement == "required":
        label = "필수"
    elif requirement == "optional":
        label = "선택"
    else:
        label = "구분 미지정"
    if mission.get("kind") == "term-project":
        return f"{label} · Term Project"
    return label


def render_readme_table(missions: list[dict]) -> str:
    lines = [
        "| ID | 제목 | 공식 구분 | 현재 상태 | 현재 Gate | 학습 | Repository |",
        "|---|---|---|---|---|---|---|",
    ]
    for mission in missions:
        lines.append(
            f"| {mission['id']} | {mission['title']} | {official_label(mission)} | "
            f"{mission['status']} | {mission['current_gate_label']} | {mission['learning']} | "
            f"[repo]({mission['repo']}) |"
        )
    return "\n".join(lines)


def render_progress(missions: list[dict], gate_order: list[str]) -> str:
    lines = [
        "# Mission Progress · New Baseline",
        "",
        "> `config/missions.yaml`에서 자동 생성됩니다. 2026-08-16 이후 다시 검증한 상태만 현재 진도로 기록합니다.",
        "",
        "| ID | 구분 | 수행 | 현재 Gate | 학습 | " + " | ".join(g.replace("_", " ") for g in gate_order) + " |",
        "|---|---|---|---|---|" + "---|" * len(gate_order),
    ]
    for mission in missions:
        phase = "필수" if mission.get("official_requirement") == "required" else "선택" if mission.get("official_requirement") == "optional" else "확장/확인"
        gates = " | ".join(GATE_ICON[mission["gates"][gate]] for gate in gate_order)
        lines.append(
            f"| {mission['id']} | {phase} | {mission['status']} | {mission['current_gate_label']} | {mission['learning']} | {gates} |"
        )
    lines += [
        "",
        "## 현재 원칙",
        "",
        "- 과거 급행 수행 기록은 현재 진도와 분리한다.",
        "- 필수 미션을 먼저 완료한 뒤 선택 미션을 진행한다.",
        "- 실제로 다시 검증한 결과만 `PASS`로 변경한다.",
        "- 실제 환경 확인이 필요하면 `NEEDS-RUNTIME`, 차단되면 `BLOCKED`를 사용한다.",
    ]
    return "\n".join(lines) + "\n"


def render_clear_cycle(cycle: dict, missions: list[dict], history: dict[str, dict]) -> str:
    by_id = {mission["id"]: mission for mission in missions}
    current_id = cycle["cycle"]["current_mission"]
    current = by_id[current_id]
    entry = cycle["missions"][current_id]
    gate = cycle["gate_display"][current["current_gate"]]
    plan = cycle["execution_plan"]

    def count_clear(ids: list[str]) -> int:
        return sum(1 for mid in ids if cycle["missions"][mid].get("state") == "CLEAR")

    required = list(plan["required_first"])
    optional = list(plan["optional_after_required"])
    extension = list(plan["extension_after_optional"])
    lines = [
        "# 새 기준 Mission Clear Cycle",
        "",
        "> 과거 작업은 보존하되 현재 진도는 새 기준 이후 다시 검증한 결과만 사용합니다.",
        "",
        f"- Cycle: **{cycle['cycle']['title']}**",
        f"- 시작일: **{cycle['cycle']['started_at']}**",
        f"- 현재: **{current_id} · {current['title']}**",
        f"- 현재 단계: **{gate['step']}단계 · {gate['title']}**",
        f"- 필수 완료: **{count_clear(required)} / {len(required)}**",
        f"- 선택 완료: **{count_clear(optional)} / {len(optional)}**",
        "",
        "## 지금 할 일",
        "",
        f"> {entry.get('next_action') or gate['action']}",
        "",
        f"- 이유: {gate['why']}",
        f"- 완료 기준: {gate['completion']}",
        "",
        "## 수행 순서",
        "",
        "### 1. 필수 미션",
        "`" + " → ".join(required) + "`",
        "",
        "### 2. 선택 미션",
        "`" + " → ".join(optional) + "`",
        "",
        "### 3. 고도화·확장",
        "`" + " → ".join(extension) + "`",
        "",
        "## 8단계",
        "",
    ]
    for gate_id, meta in cycle["gate_display"].items():
        marker = "👉" if gate_id == current["current_gate"] else "○"
        lines.append(f"- {marker} {meta['step']}. **{meta['title']}** — {meta['action']}")

    lines += ["", "## 과거 기록", ""]
    if history:
        for mid, prior in history.items():
            lines.append(f"- {mid}: 이전 `{prior.get('result', '-')}` — 현재 Cycle에는 자동 승계하지 않음")
    else:
        lines.append("- 별도 표시할 이전 결과 없음")
    return "\n".join(lines) + "\n"


def render_missions_json(data: dict, domains: list[dict], missions: list[dict]) -> str:
    payload = {
        "version": data["version"],
        "course": data["course"],
        "generated_from": "config/missions.yaml",
        "domains": domains,
        "gate_order": data["gate_order"],
        "missions": missions,
    }
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def render_cycle_json(cycle: dict, missions: list[dict], history: dict[str, dict]) -> str:
    payload_missions: dict[str, dict] = {}
    for mission in missions:
        mid = mission["id"]
        entry = dict(cycle["missions"][mid])
        entry["state_label"] = cycle["state_labels"].get(entry.get("state"), entry.get("state"))
        prior = history.get(mid)
        entry["previous_result"] = prior.get("result") if prior else None
        entry["previous_learning"] = prior.get("learning") if prior else None
        payload_missions[mid] = entry

    plan = cycle["execution_plan"]
    summary = {
        "total_missions": len(missions),
        "current_mission": cycle["cycle"]["current_mission"],
        "required_total": len(plan["required_first"]),
        "required_clear": sum(1 for mid in plan["required_first"] if cycle["missions"][mid].get("state") == "CLEAR"),
        "optional_total": len(plan["optional_after_required"]),
        "optional_clear": sum(1 for mid in plan["optional_after_required"] if cycle["missions"][mid].get("state") == "CLEAR"),
        "extension_total": len(plan["extension_after_optional"]),
        "extension_clear": sum(1 for mid in plan["extension_after_optional"] if cycle["missions"][mid].get("state") == "CLEAR"),
    }
    payload = {
        "version": cycle.get("version", 2),
        "generated_from": "config/cycles/current.yaml",
        "history_source": "config/history/pre-restart-20260816.yaml",
        "cycle": cycle["cycle"],
        "execution_plan": plan,
        "state_labels": cycle["state_labels"],
        "gate_display": cycle["gate_display"],
        "summary": summary,
        "missions": payload_missions,
    }
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def render_readme(existing: str, table: str) -> str:
    if START not in existing or END not in existing:
        raise ValueError("README auto markers are missing")
    before, rest = existing.split(START, 1)
    _, after = rest.split(END, 1)
    return f"{before}{START}\n\n{table}\n\n{END}{after}"


def sync(check: bool) -> int:
    mission_config = load_yaml(MISSIONS_CONFIG)
    cycle = load_yaml(CYCLE_CONFIG)
    history = load_history()
    required = {"status_values", "learning_values", "gate_status_values", "gate_order", "domains"}
    missing = required - mission_config.keys()
    if missing:
        raise ValueError(f"missions.yaml missing keys: {sorted(missing)}")
    domains, missions = flatten(mission_config)
    validate_cycle(cycle, missions)

    outputs = {
        README: render_readme(README.read_text(encoding="utf-8"), render_readme_table(missions)),
        PROGRESS: render_progress(missions, mission_config["gate_order"]),
        CLEAR_CYCLE: render_clear_cycle(cycle, missions, history),
        MISSIONS_JSON: render_missions_json(mission_config, domains, missions),
        CYCLE_JSON: render_cycle_json(cycle, missions, history),
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
    print("Updated: " + ", ".join(stale) if stale else "Current mission outputs are synchronized.")
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
