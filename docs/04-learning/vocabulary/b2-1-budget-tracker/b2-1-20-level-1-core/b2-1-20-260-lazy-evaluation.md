---
mission: B2-1
stage: level-1
order: 260
term: Lazy Evaluation
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 지연 평가 (Lazy Evaluation)

**쉬운 뜻:** 값이 실제로 필요할 때까지 계산이나 읽기를 미루는 방식이다.

**B2-1 위치:** generator가 다음 거래를 요청받을 때 다음 줄을 읽는 구조와 연결된다.

**핵심 관계:** demand → compute/read next item → avoid unnecessary work.

**미니 확인:** 결과 5개만 필요할 때 10만 건을 모두 계산하지 않는 사고는?

**Gate:** lazy evaluation과 generator의 관계를 말한다.

[← 250](./b2-1-20-250-streaming-processing.md) · [Level 1 Index](./b2-1-20-000-index.md) · [270 →](./b2-1-20-270-decorator.md)
