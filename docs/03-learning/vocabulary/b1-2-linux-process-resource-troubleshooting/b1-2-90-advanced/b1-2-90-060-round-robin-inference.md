---
mission: B1-2
stage: advanced
order: 60
unit: Round-Robin Inference
source_scope: SOURCE_LINKED_BONUS
gate: RR-INFERENCE
visual_learning: DEFERRED
---

# Round-Robin Inference

## 목적

Round-Robin 가설을 지지하거나 반증하는 Evidence를 분리한다.

## 지지 패턴 후보

원본 PDF의 참고 예시는 다음과 같은 관찰을 Round-Robin 추론 근거로 사용한다.

- 한 작업이 끝나기 전에 다른 Worker가 실행됨
- A/B/C가 번갈아 나타남
- 중단된 Worker가 이후 다시 진행됨
- 특정 Worker가 독점하는 모습이 약함

## 반드시 확인할 반대 증거

- 한 Worker가 반복적으로 끝까지 실행되는가?
- 특정 Worker가 일관되게 더 자주 또는 더 오래 선택되는가?
- 교체 주기가 전혀 반복되지 않는가?

## 답변 문장 구조

```text
현재 로그에서는 [관찰]이 반복되어 RR 가설을 가장 강하게 지지한다.
다만 [관측 한계] 때문에 실제 OS 스케줄러 구현 자체를 확정한 것은 아니다.
```

원본 PDF의 예시 결론을 실제 관측 결과로 대체한다.

## Advanced Gate

RR의 지지 Evidence 2개, 반증 가능 Evidence 1개, 관측 한계 1개를 말하면 통과한다.

[← 050](./b1-2-90-050-candidate-comparison.md) · [Advanced Index](./b1-2-90-000-index.md) · [070 →](./b1-2-90-070-fcfs-inference.md)
