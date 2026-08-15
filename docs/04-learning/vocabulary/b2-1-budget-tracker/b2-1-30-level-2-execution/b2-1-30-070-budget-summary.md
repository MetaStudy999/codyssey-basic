---
mission: B2-1
stage: level-2-execution
order: 70
unit: Budget and Summary
gate: V4
visual_learning: DEFERRED
---

# Budget & Summary

## 실행 목표

월 예산을 저장하고 `summary`에서 총수입·총지출·잔액·카테고리 TOP N·예산 사용률·초과 경고를 확인한다.

## Source / 현재 구현

Mission 요구:

```text
summary --month YYYY-MM
→ total income
→ total expense
→ balance
→ category expense TOP N
→ no-data state

budget set --month YYYY-MM --amount <amount>
→ persistent budget
→ usage %
→ over-budget warning
```

## 실행

```bash
python -m budget_app --data-dir /tmp/b2-1-learn budget set --month 2026-08 --amount 10000
python -m budget_app --data-dir /tmp/b2-1-learn summary --month 2026-08 --top 3
```

현재 구현 저장소의 CLI Evidence에서는 예산 10,000원, 지출 12,000원인 예시에서 사용률 `120.0%`와 초과 경고가 기록되어 있다. 이 숫자는 **저장된 Evidence 예시**이며 학습자의 데이터에서 동일할 필요가 없다.

## 코드 추적

`BudgetService.summary()`는 해당 월 거래를 순회해 income/expense를 누적하고 `balance = income - expense`를 계산하며, 지출을 category별로 집계해 TOP N을 만든다.

## 검증

- `budgets.jsonl`에 월 예산이 남는가?
- 수입·지출·잔액이 직접 계산한 값과 맞는가?
- TOP N 정렬이 합계 기준으로 동작하는가?
- 예산보다 지출이 크면 경고가 나오는가?
- 거래가 없는 월은 `데이터 없음`을 명확히 출력하는가?

현재 저장소의 `test_budget_summary_usage_and_overrun`이 자동 검증한다.

## V4 Gate

예산 이하 월과 예산 초과 월 중 하나를 직접 구성해 summary 계산을 손으로 검산하고 CLI 결과와 비교한다.

[← 060](./b2-1-30-060-category-integrity.md) · [Level 2 Index](./b2-1-30-000-index.md) · [080 →](./b2-1-30-080-csv-export.md)
