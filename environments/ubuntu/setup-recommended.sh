#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_FILE="$SCRIPT_DIR/recommended-packages.txt"

mapfile -t PACKAGES < <(sed 's/#.*//' "$PACKAGE_FILE" | awk 'NF {print $1}')
missing=()

for pkg in "${PACKAGES[@]}"; do
  if dpkg-query -W -f='${Status}' "$pkg" 2>/dev/null | grep -q 'install ok installed'; then
    echo "[PASS] already installed: $pkg"
  else
    echo "[OPTIONAL-MISSING] $pkg"
    missing+=("$pkg")
  fi
done

if ((${#missing[@]} == 0)); then
  echo "[PASS] recommended productivity tools are already installed"
  exit 0
fi

echo "[INFO] installing optional productivity packages: ${missing[*]}"
sudo apt-get update
sudo apt-get install -y "${missing[@]}"
bash "$SCRIPT_DIR/verify-recommended.sh"
