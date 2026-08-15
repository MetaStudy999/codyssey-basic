---
mission: B1-2
stage: review
order: 70
unit: V1 to V5 Mixed Retrieval
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# V1–V5 Mixed Retrieval

## 복습 목표

Level 순서대로 보지 않고 무작위 질문에서 `용어 인지 → 의미 → 관계 → 적용 → 원리 → 평가 설명`을 왕복한다.

## 혼합 질문

1. PID란 무엇이며 왜 B1-2에서 중요한가?
2. Memory Leak과 OOM은 같은 말인가?
3. CPU 사용률을 볼 때 왜 대상 PID가 필요한가?
4. Process와 Thread는 어떤 관계인가?
5. Lock이 왜 Contention과 Deadlock으로 이어질 수 있는가?
6. `MEMORY_LIMIT`, `CPU_MAX_OCCUPY`, `MULTI_THREAD_ENABLE`은 각각 어디에 적용하는가?
7. Alive-but-Stalled를 어떤 Evidence로 판정하는가?
8. Fact와 RCA를 어떻게 구분하는가?
9. Before/After에서 왜 한 변수만 바꾸는가?
10. Workaround와 Root Fix는 어떻게 다른가?

## 답변 깊이

```text
V1  용어를 알아본다
V2  한 문장으로 뜻을 설명한다
V3  다른 개념과 관계를 설명한다
V4  어디에서 관찰·적용하는지 말한다
WHY/HOW  구조와 원리를 설명한다
Troubleshooting  실패 시 확인 순서를 말한다
V5  WHAT/WHY/HOW/PROOF/LIMIT으로 방어한다
```

## Gate

10문항 중 틀린 항목은 해당 Level 문서로 돌아가고, 맞힌 항목도 근거 없이 추측했다면 미통과로 본다.

[← 060](./b1-2-70-060-evidence-issue-mapping.md) · [Review Index](./b1-2-70-000-index.md) · [080 →](./b1-2-70-080-troubleshooting-scenarios.md)
