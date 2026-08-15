---
mission: B1-2
stage: advanced
order: 20
unit: Log Observation Dataset
source_scope: SOURCE_LINKED_BONUS
gate: OBSERVATION-DATASET
visual_learning: DEFERRED
---

# Log Observation Dataset

## 목적

추론 전에 원본 로그를 구조화된 관찰 데이터로 바꾼다.

## 최소 관찰 필드

```text
Timestamp
Thread / Worker identifier
Event
Progress
Previous running worker
Next running worker
Observed switch
Raw log reference
```

예시 표 형식:

| Time | Worker | Event/Progress | 관찰 |
|---|---|---|---|
| t1 | A | 10% | A 실행 |
| t2 | A | 20% | A 계속 |
| t3 | B | 10% | A 완료 전 B 진입 여부 확인 |
| t4 | A | 30% | A 재개 여부 확인 |

숫자와 순서는 실제 수집 로그로 채운다. 원본 PDF의 예시 Timestamp를 실측값처럼 복사하지 않는다.

## 관찰과 해석 분리

```text
관찰: A가 20% 뒤 B 로그가 나타남
해석: A 완료 전에 실행 주체가 바뀐 것으로 보임
추론: RR 가능성? → 아직 확정 금지
```

## Advanced Gate

Raw Log와 해석을 섞지 않고 최소 5개 이상의 연속 로그 항목을 표로 바꿀 수 있으면 통과한다.

[← 010](./b1-2-90-010-bonus-scope-source-lock.md) · [Advanced Index](./b1-2-90-000-index.md) · [030 →](./b1-2-90-030-execution-order-pattern.md)
