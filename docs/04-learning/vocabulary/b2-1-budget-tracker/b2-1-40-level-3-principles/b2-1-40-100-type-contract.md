---
mission: B2-1
stage: principles
order: 100
unit: Type Hint and Type Contract
gate: WHY-HOW
visual_learning: DEFERRED
---
# 100. Type Hint와 Type Contract

**한 줄 설명:** 타입 힌트는 함수와 계층 사이에서 어떤 값이 들어오고 나가는지 문서처럼 드러내어 구조 이해와 정적 점검을 돕는다.

## 현재 코드 예

- `validate_amount(value: int | str) -> int`
- `iter_transactions() -> Iterator[Transaction]`
- `search_transactions(...) -> Iterator[Transaction]`
- `main(argv: Sequence[str] | None = None) -> int`

```text
Input type expectation
→ function boundary
→ output type expectation
→ caller가 계약을 이해
```

## 왜 도움이 되는가

Generator인지 list인지, 정상화 후 amount가 int인지, CLI가 exit code int를 반환하는지 코드만 읽어도 계약을 파악할 수 있다. IDE/정적 분석 도구도 이런 정보를 활용할 수 있다.

## 경계

Python의 타입 힌트는 기본적으로 런타임 검증을 자동 강제하지 않는다. 실제 값 검증은 `validate_amount`, `Transaction.__post_init__` 같은 코드가 담당한다.

## WHY/HOW Gate

`type hint`와 `runtime validation`의 차이를 B2-1 코드 예로 설명한다.

[← 이전](./b2-1-40-090-decorator-cross-cutting.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-110-import-all-or-nothing.md)
