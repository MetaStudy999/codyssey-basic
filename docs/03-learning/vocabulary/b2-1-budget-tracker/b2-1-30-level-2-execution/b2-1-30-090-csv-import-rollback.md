---
mission: B2-1
stage: level-2-execution
order: 90
unit: CSV Import and Rollback
gate: V4
visual_learning: DEFERRED
---

# CSV Import & Rollback

## 실행 목표

정상 CSV를 import하고, 깨진 행이 하나라도 있는 CSV에서는 현재 구현의 **전체 취소(rollback) 정책**이 기존 데이터를 보호하는지 확인한다.

## Source / 현재 구현

Mission은 고정 CSV schema로 거래를 일괄 등록하도록 요구한다. Evaluation은 일부 깨진 행이 섞일 때 `부분 성공 / 롤백 / 리포트` 같은 정책을 설명하도록 요구한다.

현재 구현은 **전체 검증 후 전체 반영**을 선택했다.

```text
CSV open
→ header 확인
→ 모든 row validate
→ pending list에만 보관
→ 한 row라도 오류: BudgetError + 전체 취소
→ 전부 정상: add_many()로 commit
```

## 정상 실행

```bash
python -m budget_app --data-dir /tmp/b2-1-learn import --from /tmp/b2-1-export.csv
```

## 실패 실습

1. 정상 CSV를 복사한다.
2. 한 행의 `amount`를 0 또는 잘못된 문자열로 바꾼다.
3. import 전 `list` 결과를 기록한다.
4. 깨진 CSV를 import한다.
5. 다시 `list`하여 기존 데이터가 바뀌지 않았는지 확인한다.

현재 오류 메시지는 문제 행 번호와 해결 힌트, `전체 import는 취소되었으며 기존 데이터는 변경되지 않았습니다`라는 정책을 포함한다.

## 검증

- 정상 CSV는 모든 행이 추가되는가?
- 잘못된 category/amount/date가 있는 CSV는 전체 실패하는가?
- 실패 전후 기존 Transaction이 동일한가?
- 부분적으로 먼저 저장된 레코드가 없는가?

현재 저장소의 `test_broken_import_rolls_back_all_rows`가 이 동작을 검증한다.

## V4 Gate

정상 import 1회와 의도적으로 깨진 import 1회를 수행하고, 실패 전후 데이터를 비교해 rollback을 증명한다.

[← 080](./b2-1-30-080-csv-export.md) · [Level 2 Index](./b2-1-30-000-index.md) · [100 →](./b2-1-30-100-error-exit-decorator.md)
