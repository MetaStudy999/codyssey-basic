#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_FILE="$SCRIPT_DIR/recommended-packages.txt"
COMMAND_FILE="$SCRIPT_DIR/recommended-commands.txt"

mapfile -t PACKAGES < <(sed 's/#.*//' "$PACKAGE_FILE" | awk 'NF {print $1}')
mapfile -t COMMANDS < <(sed 's/#.*//' "$COMMAND_FILE" | awk 'NF {print $1}')

pkg_missing=0
cmd_missing=0

for pkg in "${PACKAGES[@]}"; do
  if dpkg-query -W -f='${Status}' "$pkg" 2>/dev/null | grep -q 'install ok installed'; then
    echo "[PASS] recommended package: $pkg"
  else
    echo "[OPTIONAL-MISSING] recommended package: $pkg"
    ((pkg_missing+=1))
  fi
done

for cmd in "${COMMANDS[@]}"; do
  if command -v "$cmd" >/dev/null 2>&1; then
    echo "[PASS] recommended command: $cmd"
  else
    echo "[OPTIONAL-MISSING] recommended command: $cmd"
    ((cmd_missing+=1))
  fi
done

echo "Recommended: $pkg_missing package(s) missing / $cmd_missing command(s) missing"
# Recommended tools are never a Mission CLEAR gate.
exit 0
