#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

mapfile -t SCRIPTS < <(find "$SCRIPT_DIR" -maxdepth 1 -type f -name '*.sh' -print | sort)

if ((${#SCRIPTS[@]} == 0)); then
  echo "[FAIL] no shell scripts found in $SCRIPT_DIR"
  exit 1
fi

pass=0
fail=0
for script in "${SCRIPTS[@]}"; do
  if bash -n "$script"; then
    echo "[PASS] bash -n: $(basename "$script")"
    ((pass+=1))
  else
    echo "[FAIL] bash -n: $(basename "$script")"
    ((fail+=1))
  fi
done

echo "Result: $pass PASS / $fail FAIL"
((fail == 0))
