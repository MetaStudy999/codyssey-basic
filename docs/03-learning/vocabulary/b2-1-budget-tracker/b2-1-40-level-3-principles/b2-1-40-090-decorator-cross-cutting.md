---
mission: B2-1
stage: principles
order: 90
unit: Decorator and Cross-cutting Concern
gate: WHY-HOW
visual_learning: DEFERRED
---
# 090. Decorator와 Cross-Cutting Concern

**한 줄 설명:** 여러 명령에 공통으로 적용되는 오류 변환을 데코레이터에 모으면 각 명령의 핵심 로직과 공통 정책을 분리할 수 있다.

## 현재 구현

`@cli_guard`는 `main()`을 감싸 `BudgetError`, `KeyboardInterrupt`, `OSError`를 사용자용 메시지와 non-zero exit code로 변환한다.

```text
각 command logic
        ↓
     main()
        ↓ wrapped by
    @cli_guard
        ↓
공통 오류 메시지 / exit policy
```

## 왜 Cross-Cutting인가

오류 출력 정책은 add, list, search, import 등 여러 기능을 가로질러 반복된다. 각 분기마다 동일한 try/except를 복사하면 중복과 정책 불일치가 생기기 쉽다.

## Decorator의 역할

기존 함수 호출 형태를 유지하면서 실행 전후/예외 처리 같은 공통 동작을 바깥에서 감쌀 수 있다.

## 경계

데코레이터를 쓰는 것 자체가 목적은 아니다. 실제로 반복되는 공통 책임을 분리했는지가 중요하다.

## WHY/HOW Gate

`@cli_guard`를 제거하고 각 명령에 try/except를 넣었을 때의 문제를 설명한다.

[← 이전](./b2-1-40-080-referential-integrity.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-100-type-contract.md)
