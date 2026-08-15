---
mission: B1-2
stage: evaluation
level: 5
order: 30
unit: CPU Evaluation
gate: V5
visual_learning: DEFERRED
---

# CPU Evaluation

## 핵심 질문

CPU 장애가 시스템 전체 추측이 아니라 대상 프로세스 문제였음을 어떻게 설명할 것인가?

## WHAT

실제 build에서는 높은 `CPU_MAX_OCCUPY` 조건에서 앱 CpuWorker telemetry가 상승했고 `CPU Threshold Violated!` 직후 프로세스가 종료됐다.

## WHY

특정 프로세스의 지속적인 CPU 과점유는 다른 runnable task의 실행 기회를 줄여 응답 지연과 timeout으로 이어질 수 있다.

## HOW

`ss`로 tcp/15034 listener PID를 식별한 뒤 `/proc/<pid>/stat` interval 측정과 앱 로그를 시간 순서로 비교했다. 시스템 전체 CPU와 대상 PID를 구분했다.

## PROOF

Reference Runtime:

- `CPU_MAX_OCCUPY=10`: 45초 관찰 동안 보호 violation 없음, cooldown 반복
- `CPU_MAX_OCCUPY=90`: 앱 telemetry가 `55.58%`까지 상승 후 `CPU Threshold Violated!`
- launcher exit code `143`
- 별도 interval run의 listener/worker 최대 OS interval CPU `19.54%`

OS interval CPU와 앱 내부 `Current Load`는 정의가 다르므로 같은 숫자로 취급하지 않는다.

## LIMIT / ENVIRONMENT

공식 제공 build는 literal `[WATCHDOG]` 또는 `SIGTERM` 앱 로그를 출력하지 않았다. 실제 Evidence보다 강한 표현을 만들어내지 않는다.

## 예상 꼬리질문

- 왜 `top`의 시스템 전체 수치만 보면 안 되는가?
- exit 143만으로 SIGTERM 원인을 확정할 수 있는가?
- 낮은 `CPU_MAX_OCCUPY`가 왜 이 build에서는 cooldown과 연결됐는가?

## V5 Gate

대상 PID 식별 → 측정 방식 → 실제 보호 로그 → Before/After → 측정 한계를 1분 안에 설명한다.

[← 020](./b1-2-60-020-oom-evaluation.md) · [Index](./b1-2-60-000-index.md) · [040 →](./b1-2-60-040-deadlock-evaluation.md)
