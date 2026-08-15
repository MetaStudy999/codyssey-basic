---
mission: B2-1
stage: level-5-evaluation
order: 30
unit: Exception and Exit Contract
gate: V5
visual_learning: DEFERRED
---
# 030. Exception & Exit Contract

## 핵심 질문
잘못된 입력이나 파일 오류를 사용자에게 안전하게 보여 주는 방식을 어떻게 설명할 것인가?

## WHAT
예상 가능한 오류는 Python traceback 대신 `[오류]`와 `[힌트]`를 보여 주고 정상과 다른 종료 코드를 반환한다.

## WHY
CLI 사용자는 내부 stack trace보다 원인과 다음 행동이 필요하며, shell/자동화는 종료 코드로 성공·실패를 구분해야 한다.

## HOW
현재 구현은 `BudgetError`와 `@cli_guard`를 공통 오류 경계로 사용한다. 구현별 exit code 숫자는 현재 코드의 선택이다.

## PROOF
`test_error_is_nonzero_without_traceback_and_has_hint`, `test_invalid_add_is_nonzero_without_traceback`, export 조건 오류 테스트를 연결한다.

## LIMIT / ENVIRONMENT
“예외를 숨긴다”와 “오류를 무시한다”는 다르다. 진단 가능한 메시지와 non-zero status가 함께 있어야 한다.

## FOLLOW-UP
로그 파일, structured error code, 관측성 계층이 추가되면 운영 진단을 강화할 수 있다.

## V5 Gate
traceback 억제와 non-zero exit가 각각 왜 필요한지 구분해 설명할 수 있는가?

[← 이전](./b2-1-60-020-functions-persistence.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-040-module-class-responsibilities.md)
