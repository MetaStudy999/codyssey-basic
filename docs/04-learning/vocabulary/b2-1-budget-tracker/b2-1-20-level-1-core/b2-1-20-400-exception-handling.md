---
mission: B2-1
stage: level-1
order: 400
term: Exception Handling
lifecycle: DEEPEN
gate: V2-V3
visual_learning: DEFERRED
---
# 예외 처리 (Exception Handling)

**쉬운 뜻:** 예상 가능한 오류를 잡아 프로그램이 정해진 방식으로 사용자에게 알리고 종료하도록 만드는 흐름이다.

**B2-1 위치:** stack trace 대신 원인+힌트를 출력하고 오류 exit code를 non-zero로 반환한다.

**핵심 관계:** exception → controlled handler/decorator → friendly error + exit code.

**미니 확인:** 현재 구현의 공통 CLI 오류 경계는 어떤 decorator와 연결되는가?

**Gate:** exception handling을 사용자 경험과 exit code까지 연결해 설명한다.

[← 390](./b2-1-20-390-file-atomicity.md) · [Level 1 Index](./b2-1-20-000-index.md) · [Mission Index](../b2-1-00-index.md)
