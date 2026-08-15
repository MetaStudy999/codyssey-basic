---
mission: B2-1
stage: level-1
order: 10
term: Transaction
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 거래 내역 (Transaction)

**쉬운 뜻:** 수입이나 지출 한 건을 나타내는 핵심 데이터다.

**B2-1 위치:** id, type, date, amount, category, memo, tags를 가진다.

**핵심 관계:** Transaction → validation → persistence → CRUD/search/summary.

**미니 확인:** summary는 무엇들의 모음을 집계하는가?

**Gate:** Transaction을 필드와 기능 흐름까지 연결해 설명한다.

[← Index](./b2-1-20-000-index.md) · [Level 1 Index](./b2-1-20-000-index.md) · [020 →](./b2-1-20-020-income.md)
