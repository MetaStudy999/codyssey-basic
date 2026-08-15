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

OUTPUT_JSON = {key: SITE_DATA / f"{key}.json" for key in SOURCES}

REQUIRED_KEYS = {
    "growth": {
        "version",
        "growth_stages",
        "progress_statuses",
        "priority_values",
        "competency_axes",
        "stage_activation",
    },
    "skills": {"version", "skill_levels", "axes", "current_assessment"},
    "activities": {
        "version",
        "activity_types",
        "status_values",
        "priority_values",
        "activities",
    },
    "projects": {"version", "status_values", "project_fields", "projects"},
    "opportunities": {
        "version",
        "availability_status_values",
        "fit_status_values",
        "priority_values",
        "types",
        "opportunities",
    },
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


def ensure_unique(values: list, label: str) -> None:
    if len(values) != len(set(values)):
        raise ValueError(f"{label} contains duplicate values")


def ensure_unique_records(items: list[dict], label: str) -> None:
    ids: list[str] = []
    for index, item in enumerate(items):
        if not isinstance(item, dict):
            raise ValueError(f"{label}[{index}] must be a mapping")
        item_id = str(item.get("id") or "").strip()
        if not item_id:
            raise ValueError(f"{label}[{index}] missing non-empty id")
        ids.append(item_id)
    ensure_unique(ids, f"{label} ids")


def validate_growth(data: dict) -> None:
    stages = data["growth_stages"]
    if not isinstance(stages, list) or not stages:
        raise ValueError("growth.yaml growth_stages must be a non-empty list")

    stage_ids = [stage["id"] for stage in stages]
    ensure_unique(stage_ids, "growth stage ids")

    orders = [stage.get("order") for stage in stages]
    ensure_unique(orders, "growth stage order")

    statuses = list(data["progress_statuses"])
    priorities = list(data["priority_values"])
    axes = list(data["competency_axes"])
    ensure_unique(statuses, "growth progress_statuses")
    ensure_unique(priorities, "growth priority_values")
    ensure_unique(axes, "growth competency_axes")

    activation = data["stage_activation"]
    if set(activation) != set(stage_ids):
        raise ValueError("growth.yaml stage_activation must cover every growth stage exactly")
    valid_statuses = set(statuses)
    for stage_id, record in activation.items():
        if not isinstance(record, dict):
            raise ValueError(f"{stage_id}: stage_activation record must be a mapping")
        if record.get("status") not in valid_statuses:
            raise ValueError(f"{stage_id}: invalid activation status {record.get('status')}")


def validate_skills(data: dict, growth: dict) -> None:
    levels = data["skill_levels"]
    axes = data["axes"]
    if not isinstance(levels, list) or not isinstance(axes, list):
        raise ValueError("skills.yaml skill_levels and axes must be lists")

    level_ids = [item["level"] for item in levels]
    ensure_unique(level_ids, "skills level numbers")

    axis_ids = [item["id"] for item in axes]
    ensure_unique(axis_ids, "skills axis ids")
    if axis_ids != list(growth["competency_axes"]):
        raise ValueError("skills.yaml axes must match growth.yaml competency_axes in order")

    assessment = data.get("current_assessment") or {}
    if not isinstance(assessment, dict):
        raise ValueError("skills.yaml current_assessment must be a mapping")

    valid_levels = set(level_ids)
    valid_axes = set(axis_ids)
    for skill_id, record in assessment.items():
        if skill_id not in valid_axes:
            raise ValueError(f"skills.yaml unknown axis in current_assessment: {skill_id}")
        if not isinstance(record, dict):
            raise ValueError(f"skills.yaml assessment for {skill_id} must be a mapping")
        if record.get("level") not in valid_levels:
            raise ValueError(f"skills.yaml invalid level for {skill_id}: {record.get('level')}")
        evidence = record.get("evidence", [])
        if evidence is not None and not isinstance(evidence, list):
            raise ValueError(f"skills.yaml evidence for {skill_id} must be a list")


def validate_related_skills(item: dict, valid_skills: set[str], label: str) -> None:
    related = item.get("related_skills", []) or []
    if not isinstance(related, list):
        raise ValueError(f"{label}: related_skills must be a list")
    unknown = [skill for skill in related if skill not in valid_skills]
    if unknown:
        raise ValueError(f"{label}: unknown related_skills {unknown}")


def validate_registry(name: str, data: dict, growth: dict, skills: dict) -> None:
    stage_ids = {item["id"] for item in growth["growth_stages"]}
    progress_statuses = set(growth["progress_statuses"])
    priorities = set(growth["priority_values"])
    skill_ids = {item["id"] for item in skills["axes"]}

    if name == "activities":
        if set(data["status_values"]) != progress_statuses:
            raise ValueError("activities.yaml status_values must match growth.yaml progress_statuses")
        if set(data["priority_values"]) != priorities:
            raise ValueError("activities.yaml priority_values must match growth.yaml priority_values")
        valid_types = set(data["activity_types"])
        ensure_unique(list(data["activity_types"]), "activities activity_types")
        items = data.get("activities", [])
        ensure_unique_records(items, "activities")
        for item in items:
            label = f"activities.yaml {item.get('id')}"
            if item.get("type") not in valid_types:
                raise ValueError(f"{label}: invalid type {item.get('type')}")
            if item.get("growth_stage") not in stage_ids:
                raise ValueError(f"{label}: invalid growth_stage")
            if item.get("status") not in progress_statuses:
                raise ValueError(f"{label}: invalid status")
            if item.get("priority") not in priorities:
                raise ValueError(f"{label}: invalid priority")
            validate_related_skills(item, skill_ids, label)

    elif name == "projects":
        if set(data["status_values"]) != progress_statuses:
            raise ValueError("projects.yaml status_values must match growth.yaml progress_statuses")
        items = data.get("projects", [])
        ensure_unique_records(items, "projects")
        for item in items:
            label = f"projects.yaml {item.get('id')}"
            if item.get("growth_stage") not in stage_ids:
                raise ValueError(f"{label}: invalid growth_stage")
            if item.get("status") not in progress_statuses:
                raise ValueError(f"{label}: invalid status")
            if item.get("priority") not in priorities:
                raise ValueError(f"{label}: invalid priority")
            validate_related_skills(item, skill_ids, label)

    elif name == "opportunities":
        if set(data["priority_values"]) != priorities:
            raise ValueError("opportunities.yaml priority_values must match growth.yaml priority_values")
        valid_availability = set(data["availability_status_values"])
        valid_fit = set(data["fit_status_values"])
        valid_types = set(data["types"])
        ensure_unique(list(data["availability_status_values"]), "opportunity availability statuses")
        ensure_unique(list(data["fit_status_values"]), "opportunity fit statuses")
        ensure_unique(list(data["types"]), "opportunity types")
        items = data.get("opportunities", [])
        ensure_unique_records(items, "opportunities")
        for item in items:
            label = f"opportunities.yaml {item.get('id')}"
            stage = item.get("recommended_growth_stage")
            if stage and stage not in stage_ids:
                raise ValueError(f"{label}: invalid recommended_growth_stage")
            if item.get("type") not in valid_types:
                raise ValueError(f"{label}: invalid type {item.get('type')}")
            if item.get("availability_status") not in valid_availability:
                raise ValueError(f"{label}: invalid availability_status")
            if item.get("fit_status") not in valid_fit:
                raise ValueError(f"{label}: invalid fit_status")
            if item.get("priority") not in priorities:
                raise ValueError(f"{label}: invalid priority")
            validate_related_skills(item, skill_ids, label)


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
        validate_registry(name, data[name], data["growth"], data["skills"])

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
