---
mission: B2-1
stage: level-0
order: 420
term: Exit Code
lifecycle: NEW
gate: V1
visual_learning: DEFERRED
---
# 종료 코드 (Exit Code)

**한 줄:** 프로그램이 끝날 때 성공인지 오류인지 운영체제와 호출자에게 숫자로 알리는 값이다.

**B2-1 위치:** 정상은 0, 오류는 0이 아닌 값이어야 한다.

**핵심 관계:** program result → exit code → shell/caller.

**초미니 확인:** 오류인데 exit code가 0이면 원본 요구에 맞는가?

**V1 Gate:** 0과 non-zero의 의미를 말한다.

[← 410](./b2-1-10-410-stack-trace.md) · [Level 0 Index](./b2-1-10-000-index.md) · [430 →](./b2-1-10-430-help.md)
