---
mission: B2-1
stage: level-1
order: 280
term: Cross-Cutting Concern
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 공통 관심사 (Cross-Cutting Concern)

**쉬운 뜻:** 여러 기능에 반복해서 필요한 공통 동작이다.

**B2-1 위치:** 오류 처리, 실행 로그, 시간 측정 등이 예시다.

**핵심 관계:** many commands → same concern → decorator separation.

**미니 확인:** add/list/search마다 같은 오류 처리 코드를 복사하는 대신 무엇으로 분리할 수 있는가?

**Gate:** cross-cutting concern과 decorator 관계를 말한다.

[← 270](./b2-1-20-270-decorator.md) · [Level 1 Index](./b2-1-20-000-index.md) · [290 →](./b2-1-20-290-type-hint.md)
