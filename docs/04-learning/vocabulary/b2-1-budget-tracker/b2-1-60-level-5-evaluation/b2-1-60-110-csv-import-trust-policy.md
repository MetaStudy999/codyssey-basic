---
mission: B2-1
stage: level-5-evaluation
order: 110
unit: CSV Import Trust Policy
gate: V5
visual_learning: DEFERRED
---
# 110. CSV Import Trust Policy

## 핵심 질문
CSV 일부 행이 깨졌을 때 어떻게 처리해야 사용자 신뢰를 지킬 수 있는가?

## WHAT
현재 구현은 전체 행을 먼저 검증하고 하나라도 잘못되면 import 전체를 취소하는 all-or-nothing 정책을 사용한다.

## WHY
부분 성공 상태를 사용자가 모르고 지나가면 데이터가 누락되거나 중복됐다는 오해가 생길 수 있기 때문이다.

## HOW
행별 parse/validation을 모두 통과한 뒤 정상 데이터만 실제 저장에 반영한다. 실패 시 기존 거래 파일은 변경하지 않는다.

## PROOF
`test_broken_import_rolls_back_all_rows`와 CSV round-trip 테스트를 연결한다.

## LIMIT / ENVIRONMENT
Rollback은 현재 구현 정책이다. Mission 관점에서는 부분 성공+명시적 실패 리포트 같은 다른 신뢰 가능한 정책도 비교할 수 있다.

## FOLLOW-UP
대량 import에서는 staging, validation report, idempotency, transaction 같은 대안을 설명할 수 있다.

## V5 Gate
왜 “무조건 일부라도 저장”보다 명시적 정책이 중요한지 데이터 신뢰 관점에서 설명할 수 있는가?

[← 이전](./b2-1-60-100-100k-scalability.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-120-v5-evaluation-gate.md)
