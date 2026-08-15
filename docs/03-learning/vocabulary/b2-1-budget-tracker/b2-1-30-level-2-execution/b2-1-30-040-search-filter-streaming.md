---
mission: B2-1
stage: level-2-execution
order: 40
unit: Search and Filter Streaming
gate: V4
visual_learning: DEFERRED
---

# Search & Filter Streaming

## 실행 목표

`search`의 기간·카테고리·type·memo keyword·tag 조건을 조합해 보고, 필터가 generator 흐름을 유지하는지 확인한다.

## Source / 현재 구현

Mission의 검색 조건은 다음이다.

```text
--from / --to
--category
--type
--q
--tag
```

현재 구현은 저장된 최신순 순서를 유지한 채 `iter_transactions()`에서 한 건씩 확인하고 조건에 맞는 Transaction만 `yield`한다. 현재 구현에는 선택적인 `--limit`도 있다.

## 실행

```bash
python -m budget_app --data-dir /tmp/b2-1-learn search --category food
python -m budget_app --data-dir /tmp/b2-1-learn search --type expense --q 점심
python -m budget_app --data-dir /tmp/b2-1-learn search --from 2026-08-01 --to 2026-08-31 --tag meal
```

## 코드 추적

```text
cli.py search arguments
→ BudgetService.search_transactions()
→ validate_date()
→ TransactionRepository.iter_transactions()
→ 조건 continue
→ yield
```

## 검증

- 한 조건과 여러 조건의 결과가 예상대로 좁혀지는가?
- 결과가 최신순을 유지하는가?
- 시작일이 종료일보다 늦을 때 오류가 발생하는가?
- 조건 불일치 레코드가 전체 list로 먼저 적재되지 않는 것을 코드에서 확인했는가?

현재 저장소의 `test_search_filters_and_streams`와 CLI transcript의 category+tag 검색이 Evidence다.

## V4 Gate

서로 다른 2개 조건을 조합한 검색을 직접 실행하고, 해당 조건이 `services.py`의 어느 비교문에서 적용되는지 찾는다.

[← 030](./b2-1-30-030-list-generator-streaming.md) · [Level 2 Index](./b2-1-30-000-index.md) · [050 →](./b2-1-30-050-update-delete-atomic-rewrite.md)
