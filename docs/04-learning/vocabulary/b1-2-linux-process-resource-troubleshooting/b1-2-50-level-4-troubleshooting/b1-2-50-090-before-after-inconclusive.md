---
mission: B1-2
stage: troubleshooting
order: 90
unit: Before and After Inconclusive
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Before & After 결과가 모호한 경우

## 증상

환경 변수를 바꿨지만 결과 차이가 예상과 다르거나 재현이 불안정하다.

## 관찰

- Before와 After에서 동시에 바뀐 값이 몇 개인가?
- 관찰 시간은 같은가?
- 대상 PID 식별 방식이 같은가?
- 같은 종류의 로그/지표를 비교했는가?
- 실행 환경이 달라지지 않았는가?

## 실패 층·가설

여러 변수가 동시에 바뀌면 어떤 변화가 결과를 만들었는지 설명하기 어렵다.

## 최소 수정

실험을 다시 단순화한다.

```text
OOM      → MEMORY_LIMIT만 변경
CPU      → CPU_MAX_OCCUPY만 변경
Deadlock → MULTI_THREAD_ENABLE만 변경
```

## 재검증

같은 절차, 같은 관찰 방법, 가능한 한 같은 시간 범위로 다시 실행한다.

## Evidence

결과가 예상과 다르면 예상에 맞춰 기록을 고치지 않는다. 실제 결과를 남기고 가설을 수정한다.

## Gate

`환경 변수 변경 = 원인 증명`이 아니라 `통제된 전후 비교가 인과 추론을 강화한다`고 설명할 수 있어야 한다.

[← 이전](./b1-2-50-080-evidence-insufficient.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-100-signal-exit-interpretation.md)
