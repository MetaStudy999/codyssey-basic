#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if command -v gh >/dev/null 2>&1; then
  echo "[PASS] gh is already installed"
  gh --version | head -1
  if [[ -r /etc/apt/sources.list.d/github-cli.list ]] && grep -q 'cli.github.com/packages' /etc/apt/sources.list.d/github-cli.list; then
    echo "[PASS] official GitHub CLI APT source is configured"
  else
    echo "[WARN] gh exists but the official GitHub CLI APT source was not detected."
    echo "[WARN] Existing installation is preserved; this script will not replace or downgrade it automatically."
  fi
  exit 0
fi

if ! command -v wget >/dev/null 2>&1; then
  echo "[FAIL] wget is required. Run setup-base.sh first."
  exit 2
fi

sudo mkdir -p -m 755 /etc/apt/keyrings
out="$(mktemp)"
trap 'rm -f "$out"' EXIT
wget -nv -O"$out" https://cli.github.com/packages/githubcli-archive-keyring.gpg
cat "$out" | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg >/dev/null
sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg
sudo mkdir -p -m 755 /etc/apt/sources.list.d
printf '%s\n' "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
  | sudo tee /etc/apt/sources.list.d/github-cli.list >/dev/null

sudo apt-get update
sudo apt-get install -y gh

bash "$SCRIPT_DIR/verify-gh.sh"

echo "[INFO] gh auth login is intentionally not automated. Run it interactively only when needed."
