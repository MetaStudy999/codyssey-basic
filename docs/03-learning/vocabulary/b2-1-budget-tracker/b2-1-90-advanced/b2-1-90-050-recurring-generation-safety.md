---
mission: B2-1
stage: advanced
order: 50
unit: Recurring Generation and Duplicate Safety
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# Recurring Generation & Duplicate Safety

## 목적

특정 월의 반복 거래를 생성할 때 같은 규칙이 두 번 적용되어 **중복 거래가 생기는 문제**를 예방한다.

## Source 연결

원본의 배움 포인트는 `규칙 기반 데이터 생성 + 예외 처리`다. 중복 방지는 그 예외 처리의 대표적인 설계 과제이며, 특정 구현 방식은 원본이 고정하지 않는다.

## 안전한 사고 흐름

```text
Target Month
→ 활성 Rule 조회
→ 날짜/카테고리 검증
→ 이미 생성됐는지 확인
→ 미생성 Rule만 Transaction 생성
→ 결과 건수 보고
```

## 가능한 중복 식별 방법

- 생성된 Transaction에 `source_rule_id + target_month` 같은 메타데이터를 둔다.
- 별도 generation ledger를 둔다.
- 생성 전 동일 규칙/월 조합을 검색한다.

위 방식은 예시다. 현재 B2-1 필수 Transaction 필드에 새 필드를 강제로 추가한다는 뜻이 아니다.

## 실패 정책

여러 규칙 중 하나가 실패했을 때 부분 성공/전체 rollback 중 무엇을 선택할지도 문서화한다.

## Advanced Gate

같은 월을 두 번 실행해도 왜 중복이 생기지 않는지 설명할 수 있다.

[← 040](./b2-1-90-040-recurring-rule-model.md) · [Advanced Index](./b2-1-90-000-index.md) · [060 →](./b2-1-90-060-console-table-formatter.md)
