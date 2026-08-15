---
mission: B2-1
stage: level-2-execution
order: 80
unit: CSV Export
gate: V4
visual_learning: DEFERRED
---

# CSV Export

## 실행 목표

조건에 맞는 Transaction을 UTF-8 CSV로 내보내고, 헤더와 고정 schema를 검증한다.

## Source / 현재 구현

Mission의 최소 CSV schema:

```text
date,type,category,amount,memo,tags
```

공통 조건은 UTF-8과 헤더 포함이다. export는 `--month` 또는 기간 조건을 받아야 한다.

현재 구현은 `--month` 또는 **완전한 `--from` + `--to` 쌍**을 요구한다.

## 실행

```bash
python -m budget_app --data-dir /tmp/b2-1-learn export --out /tmp/b2-1-export.csv --month 2026-08
cat /tmp/b2-1-export.csv
```

또는:

```bash
python -m budget_app --data-dir /tmp/b2-1-learn export --out /tmp/b2-1-export.csv --from 2026-08-01 --to 2026-08-31
```

## 검증

- 첫 행이 고정 header인가?
- 각 row의 date/type/category/amount/memo/tags 순서가 맞는가?
- 한글 memo가 깨지지 않는가?
- 지정한 월 또는 기간 밖 거래가 제외되는가?
- 아무 조건 없이 export하면 오류가 나는가?

현재 저장소의 `evidence/sample-export.csv`에는 실제 UTF-8 header와 2개 레코드가 기록되어 있고 `test_export_import_round_trip_utf8_schema`가 schema를 검증한다.

## V4 Gate

CSV 한 파일을 직접 생성하고 header와 한글 데이터, record count를 눈으로 확인한다.

[← 070](./b2-1-30-070-budget-summary.md) · [Level 2 Index](./b2-1-30-000-index.md) · [090 →](./b2-1-30-090-csv-import-rollback.md)
