---
mission: B1-2
stage: review
order: 90
unit: Oral Explanation
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# Oral Explanation

## 복습 목표

문서를 읽는 상태에서 벗어나 세 장애를 자기 말로 설명한다.

## 1분 답변 구조

각 장애를 다음 5문장 안팎으로 말한다.

```text
WHAT  어떤 현상을 관찰했는가
WHY   왜 문제인가
HOW   어떻게 재현·관찰·조치했는가
PROOF 어떤 Evidence가 있는가
LIMIT 무엇을 단정할 수 없는가
```

## 3~5분 확장 구조

1. 재현 조건
2. 대상 PID/자원/thread 관찰
3. 핵심 Evidence
4. 원리 설명
5. RCA
6. 환경변수 기반 Workaround
7. Before/After
8. Root Fix/운영 개선 제안
9. 환경·build 한계

## 필수 구두 질문

- OOM에서 `MEMORY_LIMIT`을 높이는 것이 왜 근본 해결책은 아닌가?
- CPU에서 왜 literal WATCHDOG/SIGTERM 로그를 주장하지 않는가?
- Deadlock에서 PID가 살아 있는데도 장애라고 판단한 근거는?
- Before/After가 인과 추론에 어떤 도움을 주는가?
- 실제 Evidence와 추론을 어떻게 구분했는가?

## Gate

세 장애를 각각 1분, 그중 하나를 3~5분 동안 자료 없이 설명하고 꼬리질문 두 개에 근거로 답하면 통과 후보다.

[← 080](./b1-2-70-080-troubleshooting-scenarios.md) · [Review Index](./b1-2-70-000-index.md) · [100 →](./b1-2-70-100-five-minute-blank-reconstruction.md)
