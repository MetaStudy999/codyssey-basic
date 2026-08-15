---
mission: B2-1
stage: level-4-troubleshooting
order: 60
unit: Category Integrity Failure
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 060. Category Integrity Failure

## 증상
미등록 category로 거래를 추가/수정하거나, 이미 존재하는 category를 중복 추가하거나, 사용 중인 category를 삭제하려다 실패한다.

## 관찰
`category list`와 거래 목록에서 해당 category 사용 여부를 확인한다.

## 실패 층·가설
현재 Service는 transaction이 참조하는 category가 등록되어 있는지 확인하고, 사용 중인 category 삭제를 막는다. 이는 referential integrity 규칙이다.

## 최소 수정
미등록이면 먼저 category를 등록한다. 사용 중 category를 없애려면 해당 거래를 다른 category로 update한 뒤 remove한다.

## 재검증
`category list`와 관련 거래를 다시 확인한다.

## Before/After Evidence
실패 메시지와 수정 후 category/transaction 상태를 남긴다.

## Troubleshooting Gate
단순 문자열 오류가 아니라 참조 무결성 문제임을 설명할 수 있는가?

[← 이전](./b2-1-50-050-missing-transaction-id.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-070-search-list-empty.md)
