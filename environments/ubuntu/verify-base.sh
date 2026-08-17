#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_FILE="$SCRIPT_DIR/base-packages.txt"

if [[ ! -f "$PACKAGE_FILE" ]]; then
  echo "[FAIL] package file not found: $PACKAGE_FILE"
  exit 2
fi

mapfile -t PACKAGES < <(sed 's/#.*//' "$PACKAGE_FILE" | awk 'NF {print $1}')

if ((${#PACKAGES[@]} == 0)); then
  echo "[PASS] no Ubuntu Base packages declared"
  exit 0
fi

pass=0
fail=0
for pkg in "${PACKAGES[@]}"; do
  if dpkg-query -W -f='${Status}' "$pkg" 2>/dev/null | grep -q 'install ok installed'; then
    echo "[PASS] $pkg"
    ((pass+=1))
  else
    echo "[MISSING] $pkg"
    ((fail+=1))
  fi
done

echo "Result: $pass PASS / $fail MISSING"
((fail == 0))
