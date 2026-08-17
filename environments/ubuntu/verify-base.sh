#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_FILE="$SCRIPT_DIR/base-packages.txt"
COMMAND_FILE="$SCRIPT_DIR/base-commands.txt"

for required in "$PACKAGE_FILE" "$COMMAND_FILE"; do
  if [[ ! -f "$required" ]]; then
    echo "[FAIL] required file not found: $required"
    exit 2
  fi
done

mapfile -t PACKAGES < <(sed 's/#.*//' "$PACKAGE_FILE" | awk 'NF {print $1}')
mapfile -t COMMANDS < <(sed 's/#.*//' "$COMMAND_FILE" | awk 'NF {print $1}')

pkg_pass=0
pkg_fail=0
cmd_pass=0
cmd_fail=0

for pkg in "${PACKAGES[@]}"; do
  if dpkg-query -W -f='${Status}' "$pkg" 2>/dev/null | grep -q 'install ok installed'; then
    echo "[PASS] package: $pkg"
    ((pkg_pass+=1))
  else
    echo "[MISSING] package: $pkg"
    ((pkg_fail+=1))
  fi
done

for cmd in "${COMMANDS[@]}"; do
  if command -v "$cmd" >/dev/null 2>&1; then
    echo "[PASS] command: $cmd"
    ((cmd_pass+=1))
  else
    echo "[MISSING] command: $cmd"
    ((cmd_fail+=1))
  fi
done

if [[ -r /usr/share/bash-completion/bash_completion ]]; then
  echo "[PASS] bash-completion runtime file"
else
  echo "[MISSING] bash-completion runtime file"
  ((cmd_fail+=1))
fi

echo "Package Result: $pkg_pass PASS / $pkg_fail MISSING"
echo "Command Result: $cmd_pass PASS / $cmd_fail MISSING"
((pkg_fail == 0 && cmd_fail == 0))
