---
mission: B1-2
stage: advanced
order: 40
unit: Switch-interval Pattern
source_scope: SOURCE_LINKED_BONUS
gate: SWITCH-INTERVAL-PATTERN
visual_learning: DEFERRED
---

# Switch-interval Pattern

## 목적

원본 Bonus가 요구한 `교체 주기`를 Timestamp 차이로 관찰한다.

## 계산 대상

연속된 실행 주체 변경 시점의 간격을 기록한다.

```text
switch 1: t2 → t3
switch 2: t4 → t5
switch 3: t6 → t7
```

각 간격이 비슷한지, 크게 흔들리는지, 특정 Worker에서만 길어지는지를 본다.

## 확인 포인트

- 교체 간격이 반복적으로 비슷한가?
- 동일 Worker가 일정 Progress 단위 후 교체되는가?
- 작업 완료 시점에서만 교체되는가?
- 특정 Worker가 더 긴 구간을 점유하는가?

## 주의

로그 Timestamp 간격은 관찰된 애플리케이션 로그 간격이다. 그것을 곧바로 실제 OS Time Quantum의 정확한 값이라고 동일시하지 않는다.

## Advanced Gate

세 번 이상의 교체 구간을 Timestamp로 비교하고, `로그 간격`과 `실제 CPU quantum`을 구분해 설명하면 통과한다.

[← 030](./b1-2-90-030-execution-order-pattern.md) · [Advanced Index](./b1-2-90-000-index.md) · [050 →](./b1-2-90-050-candidate-comparison.md)
