---
mission: B1-2
stage: advanced
order: 50
unit: Candidate Comparison
source_scope: SOURCE_LINKED_BONUS
gate: CANDIDATE-COMPARISON
visual_learning: DEFERRED
---

# Candidate Comparison — RR / FCFS / Priority

## 목적

같은 로그 Evidence를 세 후보에 동시에 대입한다.

## 비교 틀

| 관찰 질문 | Round-Robin | FCFS | Priority |
|---|---|---|---|
| 완료 전 다른 작업 진입 | 지지 가능 | 일반적 순차 패턴과 충돌 가능 | 가능 |
| 중단 작업 재개 | 지지 가능 | 일반적 순차 패턴과 충돌 가능 | 가능 |
| 비슷한 교체 주기 | 지지 근거 | 약한 근거 | 우선순위 정보 없으면 불충분 |
| 특정 Worker 지속 우세 | 반증 가능성 | 상황에 따라 가능 | 지지 가능성 |
| 입력 순서대로 완료 | 약한 근거 | 지지 가능성 | 불명확 |

이 표는 일반 비교 틀이다. 실제 판정은 본인의 로그 패턴을 채워 수행한다.

## 판정 형식

```text
Observed Evidence
→ RR: supports / contradicts / unknown
→ FCFS: supports / contradicts / unknown
→ Priority: supports / contradicts / unknown
→ strongest current hypothesis
→ remaining uncertainty
```

## Advanced Gate

하나의 관찰을 세 후보에 모두 대입하고 `unknown`을 허용하면 통과한다.

[← 040](./b1-2-90-040-switch-interval-pattern.md) · [Advanced Index](./b1-2-90-000-index.md) · [060 →](./b1-2-90-060-round-robin-inference.md)
