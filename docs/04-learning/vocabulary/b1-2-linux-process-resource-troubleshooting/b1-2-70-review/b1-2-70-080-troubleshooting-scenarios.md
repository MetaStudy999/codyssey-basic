---
mission: B1-2
stage: review
order: 80
unit: Troubleshooting Scenarios
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# Troubleshooting Scenarios

## 복습 목표

정답 명령어를 외우는 대신 증상에서 출발해 진단 흐름을 복원한다.

## 공통 알고리즘

문서를 가리고 다음 순서를 써 본다.

```text
Symptom
→ Observe
→ Layer
→ Hypothesis
→ Smallest Fix
→ Reverify
→ Recovery
→ Evidence
```

## Scenario A — 메모리가 계속 오른다

질문: 무엇을 먼저 보존하고, 어떤 변수 하나를 바꾸며, 무엇을 비교할 것인가?

## Scenario B — CPU가 높고 프로세스가 종료됐다

질문: 시스템 전체 부하와 대상 프로세스 부하를 어떻게 분리하고, 실제 build의 보호 Evidence는 무엇인가?

## Scenario C — PID와 포트는 살아 있는데 로그가 멈췄다

질문: 왜 즉시 정상이라고 판단하면 안 되며, thread/lock 관측은 어떤 순서로 추가할 것인가?

## Scenario D — Before/After 결과가 모호하다

질문: 실행 조건, 측정 시점, 변경 변수 수, Evidence 품질 중 무엇을 재점검할 것인가?

## Scenario E — 필요한 로그가 없다

질문: 없는 문자열을 만들지 않고 어떤 추가 관측을 수집할 것인가?

## Gate

각 시나리오에서 `수정 전에 관찰`, `최소 변경`, `동일 방식 재검증`, `Evidence 보존` 네 원칙을 유지하면 통과 후보다.

[← 070](./b1-2-70-070-v1-v5-mixed-retrieval.md) · [Review Index](./b1-2-70-000-index.md) · [090 →](./b1-2-70-090-oral-explanation.md)
