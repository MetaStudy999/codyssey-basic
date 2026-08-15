---
mission: B2-1
stage: level-1
order: 370
term: Input Validation
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 입력 검증 (Input Validation)

**쉬운 뜻:** 사용자가 준 값이 규칙에 맞는지 확인한 뒤에만 처리하는 것이다.

**B2-1 위치:** 날짜 형식, 양수 금액, income/expense, 등록 category 등을 검사한다.

**핵심 관계:** raw input → validate → valid model or user error.

**미니 확인:** 잘못된 날짜를 파일에 먼저 저장한 뒤 나중에 고치는 것이 좋은 흐름인가?

**Gate:** validation이 data integrity를 지키는 첫 단계임을 말한다.

[← 360](./b2-1-20-360-cli-layer.md) · [Level 1 Index](./b2-1-20-000-index.md) · [380 →](./b2-1-20-380-data-integrity.md)
