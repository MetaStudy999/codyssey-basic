#!/usr/bin/env bash
set -euo pipefail

info=0
warn=0
pass=0

check_value() {
  local label="$1"
  local value="$2"
  if [[ -n "$value" ]]; then
    echo "[PASS] $label is configured"
    ((pass+=1))
  else
    echo "[WARN] $label is not configured"
    ((warn+=1))
  fi
}

if command -v git >/dev/null 2>&1; then
  check_value "git user.name" "$(git config --get user.name || true)"
  check_value "git user.email" "$(git config --get user.email || true)"
else
  echo "[WARN] git command is not available"
  ((warn+=1))
fi

if command -v gh >/dev/null 2>&1; then
  if gh auth status >/dev/null 2>&1; then
    echo "[PASS] gh authentication is ready"
    ((pass+=1))
  else
    echo "[WARN] gh is installed but not authenticated for the current user"
    echo "[INFO] Run 'gh auth login' interactively only when GitHub CLI access is needed."
    ((warn+=1))
  fi
else
  echo "[WARN] gh command is not available"
  ((warn+=1))
fi

echo "Result: $pass PASS / $warn WARNING"
echo "[INFO] Identity readiness is user-specific and is not a Mission CLEAR gate by itself."
exit 0
