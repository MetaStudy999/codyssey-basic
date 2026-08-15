---
mission: B2-1
stage: level-4-troubleshooting
order: 20
unit: Invalid Transaction Input
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 020. Invalid Transaction Input

## 증상
`add` 또는 `update`가 날짜·금액·type·category 때문에 실패한다.

## 관찰
입력한 날짜 형식, 금액, type, category와 stderr의 `[오류]`/`[힌트]`, exit code를 확인한다.

## 실패 층·가설
현재 구현에서 날짜/금액/type은 `models.py`의 validation과 `Transaction` invariant가 막고, 등록 category 여부는 Service가 확인한다.

## 최소 수정
- 날짜: `YYYY-MM-DD`
- 금액: 1 이상의 정수
- type: `income` 또는 `expense`
- category: 먼저 `category list`로 확인

## 재검증
동일 명령에서 잘못된 값 하나만 교정하고 다시 실행한다.

## Before/After Evidence
오류 메시지/비정상 종료 → 저장 완료/정상 종료와 실제 list 결과를 비교한다.

## Troubleshooting Gate
Validation 실패와 file I/O 실패를 구분해 설명할 수 있는가?

[← 이전](./b2-1-50-010-troubleshooting-algorithm.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-030-persistent-file-corruption.md)
