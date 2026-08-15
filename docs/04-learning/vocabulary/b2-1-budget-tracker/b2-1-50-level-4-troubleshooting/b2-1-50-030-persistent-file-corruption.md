---
mission: B2-1
stage: level-4-troubleshooting
order: 30
unit: Persistent File Corruption
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 030. Persistent File Corruption

## 증상
`list`, `search`, category 또는 budget 읽기에서 저장 파일의 특정 행을 읽을 수 없다는 오류가 난다.

## 관찰
어느 파일(`transactions.jsonl`, `categories.jsonl`, `budgets.jsonl`)인지와 오류가 지목한 행 번호를 기록한다.

## 실패 층·가설
현재 Repository/Store는 JSON decode, 필수 key, 타입 변환 실패를 `BudgetError`로 변환한다. 즉 CLI보다 **persistent file content layer**를 먼저 의심한다.

## 최소 수정
원본을 백업한 뒤 오류가 지목한 행만 검토·교정하거나 정상 백업으로 복구한다. 전체 파일을 즉시 삭제하지 않는다.

## 재검증
같은 조회 명령을 다시 실행하고 정상 레코드가 읽히는지 확인한다.

## Before/After Evidence
손상 전/복구 후 파일 사본 또는 최소 해당 행, 명령 출력, exit code를 남긴다.

## Troubleshooting Gate
`파일이 존재함`과 `파일 내용이 유효함`을 구분할 수 있는가?

[← 이전](./b2-1-50-020-invalid-transaction-input.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-040-data-path-permission.md)
