---
mission: B2-1
stage: principles
order: 40
unit: Generator yield and Lazy Evaluation
gate: WHY-HOW
visual_learning: DEFERRED
---
# 040. Generator · yield · Lazy Evaluation

**한 줄 설명:** Generator는 결과를 미리 전부 만들지 않고 필요할 때 하나씩 생성하므로 순차 파일 처리에 적합하다.

## 현재 구현

`TransactionRepository.iter_transactions()`는 JSONL을 한 줄씩 읽고 `yield Transaction...`을 반환한다. `list_transactions()`와 `search_transactions()`도 `Iterator[Transaction]`을 이어서 사용한다.

```text
File line
→ parse
→ Transaction
→ yield
→ consumer가 다음 값을 요청할 때 계속
```

## 왜 유리한가

전체 파일을 `list`로 먼저 적재하지 않아도 순차 조회가 가능하다. `list --limit`처럼 앞의 일부만 필요할 때는 필요한 지점에서 반복을 멈출 수 있다.

## Lazy Evaluation

`yield` 함수 호출 시 모든 결과가 즉시 만들어지는 것이 아니라 반복 과정에서 계산된다. 이것이 지연 평가의 핵심이다.

## 경계

Generator를 쓴다고 모든 기능이 O(1) 메모리/시간이 되는 것은 아니다. update/delete는 현재 전체 거래를 list로 모아 재작성한다.

## WHY/HOW Gate

일반 함수의 `return list`와 generator의 `yield` 흐름을 비교해 설명한다.

[← 이전](./b2-1-40-030-jsonl-csv-role-separation.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-050-streaming-vs-materialization.md)
