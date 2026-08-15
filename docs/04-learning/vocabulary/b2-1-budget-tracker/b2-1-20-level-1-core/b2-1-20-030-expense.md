---
mission: B2-1
stage: level-1
order: 30
term: Expense
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 지출 (Expense)

**쉬운 뜻:** 돈이 나가는 거래 유형이다.

**B2-1 위치:** Transaction의 `type=expense`이며 카테고리 TOP N과 예산 사용률의 기반이다.

**핵심 관계:** expense → category aggregation → budget usage.

**미니 확인:** 예산 사용률 계산의 주요 대상은 수입인가 지출인가?

**Gate:** expense와 summary/budget의 관계를 설명한다.

[← 020](./b2-1-20-020-income.md) · [Level 1 Index](./b2-1-20-000-index.md) · [040 →](./b2-1-20-040-transaction-id.md)
