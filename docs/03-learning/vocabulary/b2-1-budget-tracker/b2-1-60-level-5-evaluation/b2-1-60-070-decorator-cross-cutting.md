---
mission: B2-1
stage: level-5-evaluation
order: 70
unit: Decorator and Cross-cutting Concern
gate: V5
visual_learning: DEFERRED
---
# 070. Decorator & Cross-cutting Concern

## 핵심 질문
공통 오류 처리를 왜 데코레이터로 분리했는가?

## WHAT
현재 구현은 `@cli_guard`가 여러 CLI handler의 공통 예외 처리와 종료 코드 변환을 담당한다.

## WHY
각 명령에 같은 try/except를 복제하면 중복과 불일치가 생기기 쉽기 때문이다.

## HOW
핵심 handler 로직을 감싸되, 성공 흐름은 유지하고 공통 실패 정책만 한 위치에서 적용한다.

## PROOF
`decorators.py`와 오류 관련 CLI 테스트를 연결한다.

## LIMIT / ENVIRONMENT
Decorator는 모든 공통 기능을 넣는 공간이 아니다. 도메인 규칙은 Service/Model에 남아야 한다.

## FOLLOW-UP
로깅, timing, authorization 같은 cross-cutting concern과 비교하되 이 Mission의 현재 구현 범위를 구분한다.

## V5 Gate
Decorator가 줄인 중복과 책임 경계의 장점을 실제 코드 흐름으로 설명할 수 있는가?

[← 이전](./b2-1-60-060-generator-streaming.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-080-type-hint-contract.md)
