---
mission: B1-2
stage: troubleshooting
order: 40
unit: CPU Protection Termination
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# CPU 보호 종료 진단

## 증상

CPU 상승 뒤 프로세스가 종료되지만 `WATCHDOG` 또는 `SIGTERM` 문자열이 애플리케이션 로그에 보이지 않는다.

## 관찰

현재 실제 제공 build에서는 다음이 확인됐다.

- `CPU Threshold Violated!`
- launcher exit code `143`
- literal `[WATCHDOG]` 앱 로그 없음
- literal `SIGTERM` 앱 로그 없음

## 실패 층·가설

앱의 CPU 보호 정책이 임계치 위반을 기록한 뒤 프로세스 종료로 이어졌다는 해석은 실제 Evidence가 지지한다. 그러나 존재하지 않은 문자열을 근거로 만들면 안 된다.

## 최소 수정

Mission 요구에 따라 `CPU_MAX_OCCUPY`만 범위 `10~100` 안에서 변경한다.

## 재검증

Before/After에서 대상 PID CPU, 앱 telemetry, violation 로그, 종료 여부/시간을 같은 방식으로 비교한다.

## Evidence

exit `143`은 OS 수준에서 SIGTERM 종료와 일치하는 값이지만, 애플리케이션이 literal `SIGTERM` 문자열을 출력했다고 쓰지 않는다.

## Gate

`실제 로그`, `exit code 해석`, `보호 정책 역할명`을 서로 구분해 설명할 수 있어야 한다.

[← 이전](./b1-2-50-030-cpu-target-process.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-050-deadlock-alive-stalled.md)
