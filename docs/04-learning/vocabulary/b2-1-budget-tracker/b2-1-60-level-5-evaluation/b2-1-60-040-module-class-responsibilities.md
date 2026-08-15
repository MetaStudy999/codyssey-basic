---
mission: B2-1
stage: level-5-evaluation
order: 40
unit: Module and Class Responsibilities
gate: V5
visual_learning: DEFERRED
---
# 040. Module & Class Responsibilities

## 핵심 질문
모듈과 클래스의 책임을 왜 나눴고, 어디까지가 각 계층의 책임인가?

## WHAT
현재 구조는 `cli.py`, `models.py`, `storage.py`, `services.py`, `decorators.py`, `exceptions.py`로 역할을 나누고 여러 클래스로 저장/업무 책임을 분리한다.

## WHY
입력·출력, 데이터 규칙, 저장, 업무 로직, 오류 처리를 한 파일에 섞으면 변경 영향과 테스트 범위가 커지기 때문이다.

## HOW
CLI는 argparse/표시, Model은 거래 invariant, Repository/Store는 파일 I/O, Service는 기능 규칙, Decorator는 공통 CLI 오류를 담당한다.

## PROOF
README의 구조 설명과 실제 모듈, `BudgetServiceTests` 및 CLI 테스트의 분리된 검증 범위를 제시한다.

## LIMIT / ENVIRONMENT
현재 분리는 이 규모에서의 선택이다. 계층 수가 많을수록 무조건 좋은 것은 아니다.

## FOLLOW-UP
웹/API로 확장할 경우 Service를 재사용하고 presentation layer만 교체하는 설계를 설명할 수 있다.

## V5 Gate
모듈 3개 이상과 클래스 2개 이상의 책임 경계를 중복 없이 설명할 수 있는가?

[← 이전](./b2-1-60-030-exception-exit-contract.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-050-safe-rewrite-integrity.md)
