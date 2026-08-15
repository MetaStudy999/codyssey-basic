---
mission: B2-1
stage: level-2-execution
order: 60
unit: Category Integrity
gate: V4
visual_learning: DEFERRED
---

# Category Integrity

## 실행 목표

카테고리를 추가·조회·삭제하고, 거래가 참조 중인 카테고리를 삭제하지 못하도록 하는 무결성 규칙을 직접 확인한다.

## Source / 현재 구현

Mission은 `category add/list/remove`를 요구하며, 사용 중인 카테고리를 삭제할 때 **삭제를 막거나 대체 카테고리를 요구**해야 한다.

현재 구현은 **삭제 차단 방식**을 선택한다.

## 실행

```bash
python -m budget_app --data-dir /tmp/b2-1-learn category add --name study
python -m budget_app --data-dir /tmp/b2-1-learn category list
```

`study`를 사용하는 거래를 하나 만든 뒤:

```bash
python -m budget_app --data-dir /tmp/b2-1-learn category remove --name study
```

현재 구현에서는 오류가 나야 한다. 그 거래를 다른 category로 update한 뒤 다시 remove하면 삭제할 수 있다.

## 코드 추적

```text
BudgetService.remove_category()
→ 모든 Transaction 순회
→ tx.category == name 발견
→ BudgetError
→ 참조가 없을 때 CategoryStore.remove()
```

## 검증

- 새 category가 영구 저장되는가?
- 사용 중인 category 삭제가 차단되는가?
- 거래의 category를 변경한 뒤 삭제가 가능한가?
- 이 규칙이 단순 UI 제약이 아니라 데이터 참조 무결성 보호임을 설명할 수 있는가?

현재 저장소의 `test_category_in_use_guard`가 이 정책을 검증한다.

## V4 Gate

`사용 중 → 삭제 실패 → 거래 update → 삭제 성공` 흐름을 실제 데이터로 한 번 재현한다.

[← 050](./b2-1-30-050-update-delete-atomic-rewrite.md) · [Level 2 Index](./b2-1-30-000-index.md) · [070 →](./b2-1-30-070-budget-summary.md)
