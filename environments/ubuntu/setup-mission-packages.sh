#!/usr/bin/env bash
set -euo pipefail

usage() {
  cat <<'EOF'
Usage:
  bash setup-mission-packages.sh <ubuntu-packages.txt> --check
  bash setup-mission-packages.sh <ubuntu-packages.txt> --install

The package file may contain blank lines and # comments.
Only APT system packages belong in the file.
EOF
}

if (($# != 2)); then
  usage
  exit 2
fi

PACKAGE_FILE="$1"
MODE="$2"

if [[ ! -f "$PACKAGE_FILE" ]]; then
  echo "[FAIL] package file not found: $PACKAGE_FILE"
  exit 2
fi

if [[ "$MODE" != "--check" && "$MODE" != "--install" ]]; then
  usage
  exit 2
fi

mapfile -t PACKAGES < <(sed 's/#.*//' "$PACKAGE_FILE" | awk 'NF {print $1}')

if ((${#PACKAGES[@]} == 0)); then
  echo "[PASS] this mission declares no additional Ubuntu APT packages"
  exit 0
fi

missing=()
pass=0
for pkg in "${PACKAGES[@]}"; do
  if dpkg-query -W -f='${Status}' "$pkg" 2>/dev/null | grep -q 'install ok installed'; then
    echo "[PASS] $pkg"
    ((pass+=1))
  else
    echo "[MISSING] $pkg"
    missing+=("$pkg")
  fi
done

echo "Result: $pass PASS / ${#missing[@]} MISSING"

if [[ "$MODE" == "--check" ]]; then
  ((${#missing[@]} == 0))
  exit
fi

if ((${#missing[@]} == 0)); then
  echo "[PASS] mission system packages are already ready"
  exit 0
fi

echo "[INFO] installing only missing mission packages: ${missing[*]}"
sudo apt-get update
sudo apt-get install -y "${missing[@]}"

for pkg in "${missing[@]}"; do
  if ! dpkg-query -W -f='${Status}' "$pkg" 2>/dev/null | grep -q 'install ok installed'; then
    echo "[FAIL] install verification failed: $pkg"
    exit 1
  fi
done

echo "[PASS] mission system package installation complete"
