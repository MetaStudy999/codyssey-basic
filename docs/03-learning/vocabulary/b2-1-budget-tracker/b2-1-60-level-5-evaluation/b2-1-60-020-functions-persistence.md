---
mission: B2-1
stage: level-5-evaluation
order: 20
unit: Functions and Persistence
gate: V5
visual_learning: DEFERRED
---
# 020. Functions & Persistence

## 핵심 질문
핵심 명령이 요구대로 동작하고 재실행 후에도 데이터가 유지된다는 것을 어떻게 설명할 것인가?

## WHAT
현재 구현은 `add/list/search/summary/export/import/update/delete`, category, budget 기능을 제공하고 거래·카테고리·예산을 파일에 유지한다.

## WHY
용돈 기입장은 한 번 실행하고 끝나는 계산기가 아니라 다음 실행에서도 이전 기록을 다시 사용해야 하기 때문이다.

## HOW
`BudgetService`가 기능 규칙을 조정하고 repository/store가 `transactions.jsonl`, `categories.jsonl`, `budgets.jsonl`에 영속화한다.

## PROOF
`test_initializes_three_persistent_files_and_defaults`, `test_interactive_add_persists_across_processes`, CRUD/search/summary/import/export 테스트와 CLI transcript를 연결한다.

## LIMIT / ENVIRONMENT
현재 저장 포맷과 3파일 구조는 구현 선택이다. 저장 파일 존재만으로 데이터 정확성이 증명되지는 않는다.

## FOLLOW-UP
동시 사용자, 대용량, 트랜잭션 요구가 커지면 데이터베이스나 journal 구조를 검토할 수 있다.

## V5 Gate
핵심 기능 4개 이상과 persistence를 코드 위치+테스트 근거로 1분 설명할 수 있는가?

[← 이전](./b2-1-60-010-evaluation-answer-framework.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-030-exception-exit-contract.md)
