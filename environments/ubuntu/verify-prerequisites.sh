#!/usr/bin/env bash
set -euo pipefail

pass=0
fail=0

check_cmd() {
  local cmd="$1"
  if command -v "$cmd" >/dev/null 2>&1; then
    echo "[PASS] command: $cmd"
    ((pass+=1))
  else
    echo "[MISSING] command: $cmd"
    ((fail+=1))
  fi
}

for cmd in bash apt-get dpkg-query sudo; do
  check_cmd "$cmd"
done

if [[ -r /etc/os-release ]]; then
  . /etc/os-release
  echo "[INFO] OS: ${PRETTY_NAME:-unknown}"
  if [[ "${ID:-}" == "ubuntu" && "${VERSION_ID:-}" == "24.04" ]]; then
    echo "[PASS] Ubuntu 24.04 detected"
    ((pass+=1))
  else
    echo "[WARN] Golden Path is Ubuntu 24.04; detected ID=${ID:-unknown} VERSION_ID=${VERSION_ID:-unknown}"
  fi
else
  echo "[WARN] /etc/os-release not readable"
fi

echo "Result: $pass PASS / $fail MISSING"
((fail == 0))
