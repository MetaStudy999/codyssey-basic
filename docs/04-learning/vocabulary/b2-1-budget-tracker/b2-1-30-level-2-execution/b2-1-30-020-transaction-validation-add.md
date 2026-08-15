---
mission: B2-1
stage: level-2-execution
order: 20
unit: Transaction Validation and Add
gate: V4
visual_learning: DEFERRED
---

# Transaction Validation & Add

## 실행 목표

대화형 `add`로 Transaction을 저장하고, 입력 검증·고유 ID·프로그램 재실행 후 persistence를 확인한다.

## Source / 현재 구현

Mission의 Transaction 필수 필드는 `id`, `type`, `date`, `amount`, `category`이며 `memo`, `tags`는 선택이다. 날짜는 `YYYY-MM-DD`, type은 `income/expense`, amount는 양수여야 하고 category는 등록 목록에 있어야 한다.

현재 구현의 `add`는 대화형 입력으로 고정되어 있고 `TX-000001` 형식의 ID를 생성한다. 실제 번호는 기존 데이터에 따라 달라진다.

## 실행

먼저 필요한 카테고리를 확인한다.

```bash
python -m budget_app --data-dir /tmp/b2-1-learn category list
python -m budget_app --data-dir /tmp/b2-1-learn add
```

예시 입력:

```text
2026-08-15
expense
food
12000
점심
meal,lunch
```

그 다음 별도 프로세스로 확인한다.

```bash
python -m budget_app --data-dir /tmp/b2-1-learn list --limit 5
```

## 검증

- 저장 완료 메시지에 생성된 ID가 출력되는가?
- 날짜/type/amount/category가 검증되는가?
- 프로그램을 종료하고 다시 실행해도 거래가 남아 있는가?
- `transactions.jsonl`이 실제로 갱신되는가?

현재 저장소에는 `test_interactive_add_persists_across_processes`, `test_transaction_validation` Evidence가 있다.

## V4 Gate

정상 거래 1건을 직접 추가하고, **새 프로세스의 list 결과**로 persistence를 증명한다. 저장된 ID를 다음 실습에 기록해 둔다.

[← 010](./b2-1-30-010-cli-help-data-init.md) · [Level 2 Index](./b2-1-30-000-index.md) · [030 →](./b2-1-30-030-list-generator-streaming.md)
