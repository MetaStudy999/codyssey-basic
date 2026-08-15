---
mission: B2-1
stage: level-1
order: 250
term: Streaming Processing
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 스트리밍 처리 (Streaming Processing)

**쉬운 뜻:** 전체 데이터를 한 번에 메모리에 올리지 않고 도착하거나 읽히는 순서대로 조금씩 처리하는 방식이다.

**B2-1 위치:** list/search는 파일을 generator로 순차 처리한다.

**핵심 관계:** generator + lazy evaluation → streaming → bounded memory.

**미니 확인:** `list --limit 20`에서 필요한 20건만 읽고 멈추는 것은 어떤 처리 방식과 연결되는가?

**Gate:** streaming의 메모리 이점을 설명한다.

[← 240](./b2-1-20-240-yield.md) · [Level 1 Index](./b2-1-20-000-index.md) · [260 →](./b2-1-20-260-lazy-evaluation.md)
