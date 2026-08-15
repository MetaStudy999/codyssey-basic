---
mission: B2-1
stage: level-5-evaluation
order: 80
unit: Type Hint and Type Contract
gate: V5
visual_learning: DEFERRED
---
# 080. Type Hint & Type Contract

## 핵심 질문
타입 힌트가 실제 코드 이해와 유지보수에 어떤 도움을 주는가?

## WHAT
현재 구현은 함수 인자/반환값, dataclass field, Mapping/list 등의 타입 힌트를 사용한다.

## WHY
코드를 읽는 사람과 도구에게 예상 데이터 형태를 명시해 인터페이스를 빠르게 이해하도록 돕기 때문이다.

## HOW
예를 들어 `validate_amount(value: int | str) -> int`는 입력 허용 범위와 정상화된 반환 타입을 표현한다.

## PROOF
`models.py`의 `Transaction`, validation 함수, `from_mapping()`과 Service/Repository signature를 예로 든다.

## LIMIT / ENVIRONMENT
Python 타입 힌트는 기본적으로 runtime validation 자체가 아니다. 실제 값 검증은 별도 코드가 담당한다.

## FOLLOW-UP
정적 타입 검사 도구를 추가할 경우 얻을 수 있는 이점과 현재 Mission 필수 범위를 구분한다.

## V5 Gate
Type Hint와 Runtime Validation의 차이를 실제 함수 하나로 설명할 수 있는가?

[← 이전](./b2-1-60-070-decorator-cross-cutting.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-090-storage-format-tradeoffs.md)
