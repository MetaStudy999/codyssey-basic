---
mission: B2-1
stage: level-2-execution
order: 30
unit: List and Generator Streaming
gate: V4
visual_learning: DEFERRED
---

# List & Generator Streaming

## 실행 목표

거래 목록이 최신순으로 출력되고 `--limit`이 동작하는지 확인한 뒤, 그 결과가 어떤 generator 경로에서 나오는지 코드에서 찾는다.

## Source / 현재 구현

Mission은 `list`를 최신순으로 출력하고 `--limit N`을 지원하며, 파일 전체를 한 번에 읽는 대신 generator 기반 streaming 처리를 요구한다.

현재 구현의 흐름은 다음이다.

```text
TransactionRepository.iter_transactions()
→ 한 JSONL 행씩 yield
→ BudgetService.list_transactions(limit)
→ limit에 도달하면 중단
→ CLI 출력
```

주의: 현재 `cli.py`는 최종 출력 전에 `list(service.list_transactions(...))`로 **최대 limit만큼** materialize한다. 저장 파일 전체를 먼저 메모리에 올리는 것은 아니며, underlying 파일 순회는 generator로 중단된다.

## 실행

날짜가 다른 거래를 2건 이상 준비한 뒤 실행한다.

```bash
python -m budget_app --data-dir /tmp/b2-1-learn list --limit 1
python -m budget_app --data-dir /tmp/b2-1-learn list --limit 20
```

코드 위치:

```text
budget_app/storage.py  → iter_transactions()
budget_app/services.py → list_transactions()
budget_app/cli.py      → list command
```

## 검증

- 최신 날짜의 거래가 먼저 나오는가?
- `--limit 1`이면 1건만 출력되는가?
- `yield`가 실제 어디에서 실행되는지 찾을 수 있는가?
- `limit` 이후 파일 순회를 멈추는 지점을 설명할 수 있는가?

현재 저장소의 `test_add_list_newest_first_and_generator`가 이 경로를 검증한다.

## V4 Gate

`파일 한 행 → yield → service limit → CLI 출력` 흐름을 코드 위치와 실제 명령 결과를 연결해 설명한다.

[← 020](./b2-1-30-020-transaction-validation-add.md) · [Level 2 Index](./b2-1-30-000-index.md) · [040 →](./b2-1-30-040-search-filter-streaming.md)
