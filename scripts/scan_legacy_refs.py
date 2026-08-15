#!/usr/bin/env python3
"""Scan active repository text for references to legacy V1/V2 document paths.

The scanner is used before deleting legacy directories. It ignores migration,
audit, readiness, and history documents whose job is to discuss old paths and
ignores each legacy target's own subtree. Any remaining reference is treated as
an active compatibility edge that must be migrated, redirected, or explicitly
classified before deletion.
"""
from __future__ import annotations

import argparse
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]

LEGACY_TARGETS = {
    "docs/01-overview": "docs/01-master-map",
    "docs/02-domains": "docs/02-missions",
    "docs/03-progress": "Master Map/Dashboard compatibility output",
    "docs/04-learning": "docs/03-learning (bridge first)",
    "docs/05-architecture": "docs/01-master-map / docs/02-missions / docs/05-projects",
    "docs/06-evaluation": "docs/00-governance / docs/02-missions",
    "docs/07-portfolio": "docs/11-portfolio",
    "docs/08-resources": "docs/03-learning/resources + config/resources.yaml",
    "docs/09-opportunities": "docs/06-opportunities + config/opportunities.yaml",
    "docs/10-professional-growth": "V3 domain routing + growth_stage metadata",
    "docs/11-advanced": "V3 domain routing + growth_stage metadata",
}

DEFAULT_CLEANUP_TARGETS = [
    "docs/09-opportunities",
    "docs/10-professional-growth",
    "docs/11-advanced",
]

TEXT_SUFFIXES = {
    ".md", ".txt", ".yaml", ".yml", ".json", ".py", ".js", ".html", ".css", ".toml"
}

# These files intentionally document historical paths or invoke this scanner
# with a legacy target as data. They are not navigation, runtime, generator,
# or operational routing dependencies and therefore do not block deletion.
EXCLUDED_FILES = {
    "docs/01-master-map/migration-plan.md",
    "docs/01-master-map/migration-matrix.md",
    "docs/01-master-map/legacy-path-map.md",
    "docs/01-master-map/legacy-reference-report.md",
    "docs/01-master-map/validation-plan.md",
    "docs/01-master-map/repository-map.md",
    "docs/01-master-map/growth-routing.md",
    "docs/01-master-map/cutover-readiness.md",
    "docs/06-opportunities/README.md",
    ".github/workflows/v3-validate.yml",
    "scripts/scan_legacy_refs.py",
}

EXCLUDED_PREFIXES = (
    "docs/01-master-map/audit-",
    ".git/",
)


def relative(path: Path) -> str:
    return str(path.relative_to(ROOT)).replace("\\", "/")


def should_scan(path: Path) -> bool:
    if not path.is_file() or path.suffix.lower() not in TEXT_SUFFIXES:
        return False
    rel = relative(path)
    if rel in EXCLUDED_FILES:
        return False
    return not any(rel.startswith(prefix) for prefix in EXCLUDED_PREFIXES)


def fragments_for(target: str) -> tuple[str, ...]:
    basename = target.rsplit("/", 1)[-1]
    return (target, basename)


def scan_target(target: str) -> list[tuple[str, int, str]]:
    hits: list[tuple[str, int, str]] = []
    target_prefix = target.rstrip("/") + "/"
    fragments = fragments_for(target)

    for path in ROOT.rglob("*"):
        if not should_scan(path):
            continue
        rel = relative(path)
        # References inside the directory being removed disappear with the
        # cleanup unit and are not external compatibility edges.
        if rel == target or rel.startswith(target_prefix):
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for number, line in enumerate(text.splitlines(), 1):
            if any(fragment in line for fragment in fragments):
                hits.append((rel, number, line.strip()))
    return hits


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--targets",
        nargs="*",
        default=DEFAULT_CLEANUP_TARGETS,
        help="legacy repository paths to scan",
    )
    parser.add_argument(
        "--fail-on-active",
        action="store_true",
        help="return non-zero when active references remain",
    )
    args = parser.parse_args()

    unknown = [target for target in args.targets if target not in LEGACY_TARGETS]
    if unknown:
        print("Unknown legacy target(s): " + ", ".join(unknown), file=sys.stderr)
        return 2

    total = 0
    for target in args.targets:
        hits = scan_target(target)
        total += len(hits)
        replacement = LEGACY_TARGETS[target]
        print(f"\n[{target}] -> {replacement}")
        if not hits:
            print("  CLEAN: no active references found")
            continue
        for path, line, content in hits:
            print(f"  {path}:{line}: {content}")
        print(f"  ACTIVE REFERENCES: {len(hits)}")

    print(f"\nLegacy reference scan complete. Active references: {total}")
    if args.fail_on_active and total:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
