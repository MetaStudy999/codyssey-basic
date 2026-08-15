---
mission: B2-1
stage: level-1
order: 320
term: Separation of Responsibilities
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 책임 분리 (Separation of Responsibilities)

**쉬운 뜻:** 각 코드 단위가 맡을 일을 명확하게 나눠 서로의 역할이 섞이지 않게 하는 설계다.

**B2-1 위치:** Model, Repository, Service, CLI의 책임을 설명해야 한다.

**핵심 관계:** clear responsibility → lower coupling → easier change/test.

**미니 확인:** CLI가 파일 저장 세부 구현까지 모두 알아야 좋은 분리인가?

**Gate:** 각 계층이 한 종류의 책임에 집중해야 하는 이유를 말한다.

[← 310](./b2-1-20-310-modularization.md) · [Level 1 Index](./b2-1-20-000-index.md) · [330 →](./b2-1-20-330-model-layer.md)
