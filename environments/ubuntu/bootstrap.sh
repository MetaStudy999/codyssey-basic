#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

usage() {
  cat <<'EOF'
Usage:
  bash bootstrap.sh --check
  bash bootstrap.sh --install
  bash bootstrap.sh --install --recommended

--check        Verify Ubuntu prerequisites, required Base, and GitHub CLI.
--install      Install only missing required Base packages, then install/verify gh.
--recommended Also install optional productivity tools (vim/tree/rg/fdfind).

This script does NOT:
- run gh auth login
- create/replace SSH private keys
- set git user.name or user.email
- modify core.autocrlf
- install Mission-specific packages
- install Python/Node project dependencies
EOF
}

if (($# < 1 || $# > 2)); then
  usage
  exit 2
fi

MODE="$1"
RECOMMENDED="${2:-}"

if [[ "$MODE" != "--check" && "$MODE" != "--install" ]]; then
  usage
  exit 2
fi
if [[ -n "$RECOMMENDED" && "$RECOMMENDED" != "--recommended" ]]; then
  usage
  exit 2
fi

bash "$SCRIPT_DIR/verify-prerequisites.sh"

if [[ "$MODE" == "--check" ]]; then
  base_rc=0
  gh_rc=0
  bash "$SCRIPT_DIR/verify-base.sh" || base_rc=$?
  bash "$SCRIPT_DIR/verify-gh.sh" || gh_rc=$?
  bash "$SCRIPT_DIR/verify-recommended.sh"
  if ((base_rc != 0 || gh_rc != 0)); then
    echo "[NEEDS-SETUP] required Ubuntu developer bootstrap is incomplete"
    exit 1
  fi
  echo "[PASS] required Ubuntu developer bootstrap is ready"
  exit 0
fi

bash "$SCRIPT_DIR/setup-base.sh"
bash "$SCRIPT_DIR/setup-gh.sh"

if [[ "$RECOMMENDED" == "--recommended" ]]; then
  bash "$SCRIPT_DIR/setup-recommended.sh"
else
  bash "$SCRIPT_DIR/verify-recommended.sh"
fi

bash "$SCRIPT_DIR/verify-base.sh"
bash "$SCRIPT_DIR/verify-gh.sh"
echo "[PASS] required Ubuntu developer bootstrap complete"
