---
mission: B2-1
stage: level-1
order: 230
term: Generator
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 제너레이터 (Generator)

**쉬운 뜻:** 모든 값을 한꺼번에 만들지 않고 필요할 때 하나씩 만들어 주는 반복 객체다.

**B2-1 위치:** list/search가 거래 파일을 한 행씩 순회하도록 요구된다.

**핵심 관계:** file lines → generator → one record at a time.

**미니 확인:** 파일 10만 건을 list로 전부 메모리에 올리는 것과 generator의 차이는?

**Gate:** generator의 메모리 이점과 streaming 관계를 설명한다.

[← 220](./b2-1-20-220-export.md) · [Level 1 Index](./b2-1-20-000-index.md) · [240 →](./b2-1-20-240-yield.md)
