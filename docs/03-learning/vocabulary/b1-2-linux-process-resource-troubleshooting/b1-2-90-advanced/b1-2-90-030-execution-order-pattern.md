---
mission: B1-2
stage: advanced
order: 30
unit: Execution-order Pattern
source_scope: SOURCE_LINKED_BONUS
gate: ORDER-PATTERN
visual_learning: DEFERRED
---

# Execution-order Pattern

## 목적

로그에서 `누가 먼저 실행되고, 완료 전에 다른 작업이 들어오며, 다시 재개되는가`를 패턴화한다.

## 확인 질문

- A가 완료되기 전에 B가 실행되는가?
- B가 완료되기 전에 C가 실행되는가?
- 중단된 A가 다시 나타나는가?
- 특정 Worker만 반복적으로 먼저 선택되는가?
- 한 Worker가 끝까지 실행한 뒤 다음 Worker가 실행되는가?

## 패턴 기록

실제 로그에서 아래처럼 표현한다.

```text
A → A → B → B → C → A → ...
```

여기에 Progress를 함께 붙이면 더 강한 Evidence가 된다.

```text
A10 → A20 → B10 → B20 → C10 → A30
```

## 해석 경계

Interleaving이 보인다는 사실만으로 Round-Robin을 확정하지 않는다. 실행 순서 패턴은 후보를 좁히는 첫 증거다.

## Advanced Gate

실제 로그의 실행 순서를 한 줄 패턴으로 바꾸고, `관찰`과 `알고리즘 결론`을 분리하면 통과한다.

[← 020](./b1-2-90-020-log-observation-dataset.md) · [Advanced Index](./b1-2-90-000-index.md) · [040 →](./b1-2-90-040-switch-interval-pattern.md)
