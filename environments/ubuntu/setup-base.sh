#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_FILE="$SCRIPT_DIR/base-packages.txt"

bash "$SCRIPT_DIR/verify-prerequisites.sh"

if [[ ! -f "$PACKAGE_FILE" ]]; then
  echo "[FAIL] package file not found: $PACKAGE_FILE"
  exit 2
fi

mapfile -t PACKAGES < <(sed 's/#.*//' "$PACKAGE_FILE" | awk 'NF {print $1}')
missing=()

for pkg in "${PACKAGES[@]}"; do
  if dpkg-query -W -f='${Status}' "$pkg" 2>/dev/null | grep -q 'install ok installed'; then
    echo "[PASS] already installed: $pkg"
  else
    echo "[MISSING] $pkg"
    missing+=("$pkg")
  fi
done

if ((${#missing[@]} == 0)); then
  echo "[PASS] Ubuntu Base packages are already installed"
  bash "$SCRIPT_DIR/verify-base.sh"
  exit 0
fi

echo "[INFO] installing only missing Ubuntu Base packages: ${missing[*]}"
sudo apt-get update
sudo apt-get install -y "${missing[@]}"

bash "$SCRIPT_DIR/verify-base.sh"
