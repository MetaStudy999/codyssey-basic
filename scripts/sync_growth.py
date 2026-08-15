#!/usr/bin/env python3
"""Generate Growth OS V3 views from human-edited YAML registries.

Human-edited sources:
- config/growth.yaml
- config/skills.yaml
- config/activities.yaml
- config/projects.yaml
- config/opportunities.yaml

Generated outputs:
- docs/01-master-map/current-state.md
- site/data/growth.json
- site/data/skills.json
- site/data/activities.json
- site/data/projects.json
- site/data/opportunities.json

This script is intentionally separate from sync_progress.py so the existing
Mission G1~G8 pipeline remains stable while V3 is introduced incrementally.
"""
from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path
import sys

import yaml

ROOT = Path(__file__).resolve().parents[1]
CONFIG_DIR = ROOT / "config"
SITE_DATA = ROOT / "site" / "data"
CURRENT_STATE = ROOT / "docs" / "01-master-map" / "current-state.md"

SOURCES = {
    "growth": CONFIG_DIR / "growth.yaml",
    "skills": CONFIG_DIR / "skills.yaml",
    "activities": CONFIG_DIR / "activities.yaml",
    "projects": CONFIG_DIR / "projects.yaml",
    "opportunities": CONFIG_DIR / "opportunities.yaml",
}

OUTPUT_JSON = {
    key: SITE_DATA / f"{key}.json"
    for key in SOURCES
}

REQUIRED_KEYS = {
    "growth": {"version", "growth_stages", "progress_statuses", "priority_values", "stage_activation"},
    "skills": {"version", "skill_levels", "axes", "current_assessment"},
    "activities": {"version", "activity_types", "status_values", "activities"},
    "projects": {"version", "status_values", "projects"},
    "opportunities": {"version", "availability_status_values", "fit_status_values", "opportunities"},
}


def load_yaml(name: str, path: Path) -> dict:
    if not path.exists():
        raise ValueError(f"missing source: {path.relative_to(ROOT)}")
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    if not isinstance(data, dict):
        raise ValueError(f"{path.relative_to(ROOT)} must contain a mapping")
    missing = REQUIRED_KEYS[name] - data.keys()
    if missing:
        raise ValueError(f"{path.relative_to(ROOT)} missing keys: {sorted(missing)}")
    return data


def validate_growth(data: dict) -> None:
    stage_ids = [stage["id"] for stage in data["growth_stages"]]
    if len(stage_ids) != len(set(stage_ids)):
        raise ValueError("growth.yaml contains duplicate growth stage ids")
    activation = data["stage_activation"]
    if set(activation) != set(stage_ids):
        raise ValueError("growth.yaml stage_activation must cover every growth stage exactly")
    valid_statuses = set(data["progress_statuses"])
    for stage_id, record in activation.items():
        if record.get("status") not in valid_statuses:
            raise ValueError(f"{stage_id}: invalid activation status {record.get('status')}")


def validate_skills(data: dict, growth: dict) -> None:
    level_ids = {item["level"] for item in data["skill_levels"]}
    axis_ids = {item["id"] for item in data["axes"]}
    assessment = data.get("current_assessment") or {}
    if not isinstance(assessment, dict):
        raise ValueError("skills.yaml current_assessment must be a mapping")
    for skill_id, record in assessment.items():
        if skill_id not in axis_ids:
            raise ValueError(f"skills.yaml unknown axis in current_assessment: {skill_id}")
        if record.get("level") not in level_ids:
            raise ValueError(f"skills.yaml invalid level for {skill_id}: {record.get('level')}")


def validate_registry(name: str, data: dict, growth: dict) -> None:
    stage_ids = {item["id"] for item in growth["growth_stages"]}
    progress_statuses = set(growth["progress_statuses"])
    priorities = set(growth["priority_values"])

    if name == "activities":
        for item in data.get("activities", []):
            if item.get("growth_stage") not in stage_ids:
                raise ValueError(f"activities.yaml {item.get('id')}: invalid growth_stage")
            if item.get("status") not in progress_statuses:
                raise ValueError(f"activities.yaml {item.get('id')}: invalid status")
            if item.get("priority") not in priorities:
                raise ValueError(f"activities.yaml {item.get('id')}: invalid priority")

    if name == "projects":
        for item in data.get("projects", []):
            if item.get("growth_stage") not in stage_ids:
                raise ValueError(f"projects.yaml {item.get('id')}: invalid growth_stage")
            if item.get("status") not in progress_statuses:
                raise ValueError(f"projects.yaml {item.get('id')}: invalid status")
            if item.get("priority") not in priorities:
                raise ValueError(f"projects.yaml {item.get('id')}: invalid priority")

    if name == "opportunities":
        valid_availability = set(data["availability_status_values"])
        valid_fit = set(data["fit_status_values"])
        for item in data.get("opportunities", []):
            stage = item.get("recommended_growth_stage")
            if stage and stage not in stage_ids:
                raise ValueError(f"opportunities.yaml {item.get('id')}: invalid recommended_growth_stage")
            if item.get("availability_status") not in valid_availability:
                raise ValueError(f"opportunities.yaml {item.get('id')}: invalid availability_status")
            if item.get("fit_status") not in valid_fit:
                raise ValueError(f"opportunities.yaml {item.get('id')}: invalid fit_status")
            if item.get("priority") not in priorities:
                raise ValueError(f"opportunities.yaml {item.get('id')}: invalid priority")


def render_registry_json(name: str, data: dict) -> str:
    payload = {
        "schema_version": data.get("version", 3),
        "generated_from": f"config/{SOURCES[name].name}",
        **data,
    }
    return json.dumps(payload, ensure_ascii=False, indent=2) + "\n"


def counter_line(values: list[str], order: list[str]) -> str:
    counts = Counter(values)
    if not values:
        return "등록 항목 없음"
    return " · ".join(f"{key} {counts.get(key, 0)}" for key in order)


def render_current_state(data: dict[str, dict]) -> str:
    growth = data["growth"]
    skills = data["skills"]
    activities = data["activities"].get("activities", [])
    projects = data["projects"].get("projects", [])
    opportunities = data["opportunities"].get("opportunities", [])

    lines = [
        "# Growth OS Current State",
        "",
        "> 이 문서는 V3 Registry에서 자동 생성됩니다. 직접 수정하지 않습니다.",
        "",
        "## Growth Stage",
        "",
        "| Stage | Status | Purpose |",
        "|---|---|---|",
    ]
    for stage in sorted(growth["growth_stages"], key=lambda item: item.get("order", 999)):
        stage_id = stage["id"]
        status = growth["stage_activation"][stage_id]["status"]
        lines.append(f"| {stage_id} | {status} | {stage.get('purpose', '')} |")

    lines += [
        "",
        "## Registry Summary",
        "",
        f"- Activities: {counter_line([str(x.get('status')) for x in activities], growth['progress_statuses'])}",
        f"- Projects: {counter_line([str(x.get('status')) for x in projects], growth['progress_statuses'])}",
        f"- Opportunities: {counter_line([str(x.get('availability_status')) for x in opportunities], data['opportunities']['availability_status_values'])}",
        "",
        "## Skill Assessment",
        "",
    ]

    assessment = skills.get("current_assessment") or {}
    if not assessment:
        lines.append("아직 Evidence 기반 Skill Level 판정을 시작하지 않았다.")
    else:
        lines.extend(["| Skill | Level | Evidence |", "|---|---:|---|"])
        for axis in skills["axes"]:
            skill_id = axis["id"]
            record = assessment.get(skill_id)
            if not record:
                continue
            evidence = ", ".join(record.get("evidence", [])) or "-"
            lines.append(f"| {skill_id} | {record.get('level')} | {evidence} |")

    lines += [
        "",
        "## Reading Rule",
        "",
        "- Growth Stage = 장기 성장 위치",
        "- Mission G1~G8 = 공식 Mission 수행 위치",
        "- Skill Level = 특정 역량의 Evidence 수준",
        "- Activity/Project Status = 현재 실제 작업 상태",
        "- Opportunity Availability = 외부 기회가 열려 있는지 여부",
        "",
    ]
    return "\n".join(lines)


def sync(check: bool) -> int:
    data = {name: load_yaml(name, path) for name, path in SOURCES.items()}
    validate_growth(data["growth"])
    validate_skills(data["skills"], data["growth"])
    for name in ("activities", "projects", "opportunities"):
        validate_registry(name, data[name], data["growth"])

    outputs = {
        **{OUTPUT_JSON[name]: render_registry_json(name, payload) for name, payload in data.items()},
        CURRENT_STATE: render_current_state(data),
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
        print("Out-of-sync Growth OS files:", file=sys.stderr)
        for path in stale:
            print(f"- {path}", file=sys.stderr)
        return 1

    if stale:
        print("Updated: " + ", ".join(stale))
    else:
        print("Growth OS outputs are already synchronized.")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="fail if generated files are stale")
    args = parser.parse_args()
    try:
        return sync(args.check)
    except (KeyError, TypeError, ValueError, yaml.YAMLError) as exc:
        print(f"sync_growth.py: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
