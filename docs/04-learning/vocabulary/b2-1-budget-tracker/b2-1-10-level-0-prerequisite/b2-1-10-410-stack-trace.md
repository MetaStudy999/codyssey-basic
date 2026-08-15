---
mission: B2-1
stage: level-0
order: 410
term: Stack Trace
lifecycle: NEW
gate: V1
visual_learning: DEFERRED
---
# 스택 트레이스 (Stack Trace)

**한 줄:** 예외가 어떤 함수 호출 경로를 거쳐 발생했는지 보여 주는 개발자용 오류 추적 정보다.

**B2-1 위치:** 원본은 사용자 화면에 stack trace를 출력하지 말라고 요구한다.

**핵심 관계:** exception → stack trace for debugging, but user-facing suppression.

**초미니 확인:** B2-1 사용자 오류 화면에 Python 내부 호출 경로를 그대로 보여줘도 되는가?

**V1 Gate:** stack trace의 목적과 사용자 노출 금지를 말한다.

[← 400](./b2-1-10-400-error-message.md) · [Level 0 Index](./b2-1-10-000-index.md) · [420 →](./b2-1-10-420-exit-code.md)
