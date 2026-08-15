---
mission: B1-2
stage: advanced
order: 80
unit: Priority Inference
source_scope: SOURCE_LINKED_BONUS
gate: PRIORITY-INFERENCE
visual_learning: DEFERRED
---

# Priority Inference

## 목적

Priority Scheduling 가설을 `특정 작업의 반복적 우세` 관점에서 검토한다.

## 지지 패턴 후보

- 특정 Worker가 다른 Worker보다 반복적으로 먼저 선택됨
- 특정 Worker가 더 자주 실행됨
- 특정 Worker의 Progress가 다른 Worker보다 지속적으로 빠르게 증가
- 이런 차이가 여러 관찰 구간에서 반복됨

## 주의

로그에 실제 priority 값이 없으면 `왜 우선 선택되었는지`를 직접 증명할 수 없다. 따라서 관찰된 편향은 Priority 가설을 지지할 수 있지만 그 자체로 확정 근거는 아니다.

## 비교 질문

```text
공평한 순환인가?
도착 순서 중심인가?
특정 Worker 우세가 반복되는가?
```

## Advanced Gate

Priority를 지지할 수 있는 패턴과 단정할 수 없는 이유를 각각 하나 이상 설명하면 통과한다.

[← 070](./b1-2-90-070-fcfs-inference.md) · [Advanced Index](./b1-2-90-000-index.md) · [090 →](./b1-2-90-090-tradeoff-architecture-fit.md)
