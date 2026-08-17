#!/usr/bin/env bash
set -euo pipefail

fail=0

if command -v gh >/dev/null 2>&1; then
  echo "[PASS] command: gh"
  gh --version | head -1
else
  echo "[MISSING] command: gh"
  ((fail+=1))
fi

if [[ -r /etc/apt/keyrings/githubcli-archive-keyring.gpg ]]; then
  echo "[PASS] GitHub CLI keyring present"
else
  echo "[INFO] GitHub CLI official keyring not detected"
fi

if [[ -r /etc/apt/sources.list.d/github-cli.list ]] && grep -q 'cli.github.com/packages' /etc/apt/sources.list.d/github-cli.list; then
  echo "[PASS] GitHub CLI official APT source present"
else
  echo "[INFO] GitHub CLI official APT source not detected"
fi

# Authentication is intentionally separate from installation.
if command -v gh >/dev/null 2>&1; then
  if gh auth status >/dev/null 2>&1; then
    echo "[INFO] gh authentication is configured"
  else
    echo "[INFO] gh is installed; authentication is not configured or not valid"
  fi
fi

((fail == 0))
