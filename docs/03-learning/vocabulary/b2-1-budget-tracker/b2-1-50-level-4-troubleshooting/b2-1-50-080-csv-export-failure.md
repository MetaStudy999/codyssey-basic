---
mission: B2-1
stage: level-4-troubleshooting
order: 80
unit: CSV Export Failure
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 080. CSV Export Failure

## 증상
`export`가 실행되지 않거나 파일이 생성되지 않는다.

## 관찰
`--out` 경로와 `--month` 또는 `--from`/`--to` 범위가 제공됐는지, 날짜 순서가 올바른지, 출력 경로가 writable인지 확인한다.

## 실패 층·가설
현재 구현은 source filter 없는 export를 거부하고, 잘못된 기간 및 파일 저장 `OSError`를 오류로 처리한다.

## 최소 수정
하나의 유효한 source filter를 지정하고 writable output 경로를 사용한다.

## 재검증
CSV가 생성되는지, UTF-8로 읽히는지, 헤더가 현재 고정 schema와 맞는지 확인한다.

## Before/After Evidence
실패 stderr/exit code와 생성된 CSV 헤더·레코드 수를 비교한다.

## Troubleshooting Gate
조회 조건 문제와 출력 파일 경로 문제를 구분할 수 있는가?

[← 이전](./b2-1-50-070-search-list-empty.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-090-csv-import-rollback.md)
