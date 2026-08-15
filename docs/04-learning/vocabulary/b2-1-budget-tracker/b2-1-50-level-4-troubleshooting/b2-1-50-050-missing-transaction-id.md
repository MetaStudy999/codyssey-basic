---
mission: B2-1
stage: level-4-troubleshooting
order: 50
unit: Missing Transaction ID
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 050. Missing Transaction ID

## 증상
`update` 또는 `delete`가 `거래 id를 찾을 수 없습니다`로 실패한다.

## 관찰
입력한 ID와 `list`/`search` 결과를 비교한다. 반복 실습에서 다른 `--data-dir`을 보고 있지 않은지도 확인한다.

## 실패 층·가설
현재 Repository는 전체 거래를 확인한 뒤 대상 ID가 없으면 `BudgetError`를 발생시킨다. 파일 손상과는 다른 **lookup/domain state 문제**다.

## 최소 수정
`list` 또는 `search`로 실제 ID를 다시 찾고 그 ID만 수정/삭제한다.

## 재검증
정확한 ID로 같은 작업을 다시 실행한 뒤 `list`로 변경 또는 삭제를 확인한다.

## Before/After Evidence
없는 ID의 non-zero exit와 정상 ID의 성공 출력/후속 조회를 함께 남긴다.

## Troubleshooting Gate
`명령 구문 오류`, `저장 파일 오류`, `대상 ID 없음`을 분리할 수 있는가?

[← 이전](./b2-1-50-040-data-path-permission.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-060-category-integrity.md)
