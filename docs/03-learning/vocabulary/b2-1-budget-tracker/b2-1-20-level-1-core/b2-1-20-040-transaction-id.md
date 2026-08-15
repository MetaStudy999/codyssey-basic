---
mission: B2-1
stage: level-1
order: 40
term: Transaction ID
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 거래 식별자 (Transaction ID)

**쉬운 뜻:** 거래 한 건을 다른 거래와 구분하는 유일한 값이다.

**B2-1 위치:** add에서 생성하고 update/delete에서 대상 거래를 찾는다.

**핵심 관계:** unique id → locate exact transaction → update/delete.

**미니 확인:** 같은 id가 두 거래에 있어도 되는가?

**Gate:** id의 유일성과 수정/삭제 연결을 설명한다.

[← 030](./b2-1-20-030-expense.md) · [Level 1 Index](./b2-1-20-000-index.md) · [050 →](./b2-1-20-050-data-model.md)
