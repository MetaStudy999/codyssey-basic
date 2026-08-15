---
mission: B2-1
stage: level-5-evaluation
order: 50
unit: Safe Rewrite and Integrity
gate: V5
visual_learning: DEFERRED
---
# 050. Safe Rewrite & Integrity

## 핵심 질문
파일 기반 update/delete와 category 무결성을 어떻게 안전하게 처리하는가?

## WHAT
현재 구현은 update/delete 시 임시 파일을 만든 뒤 `os.replace()`로 교체하고, 사용 중인 category 삭제를 막는다.

## WHY
원본 파일을 직접 덮어쓰는 동안 실패하면 부분 기록이 남을 수 있고, 사용 중 category를 제거하면 거래 데이터의 참조 의미가 깨질 수 있다.

## HOW
Repository의 atomic rewrite와 Service의 category in-use guard가 서로 다른 안전성 층을 담당한다.

## PROOF
`test_update_delete_and_missing_id`, `test_category_in_use_guard`와 저장 코드 경로를 연결한다.

## LIMIT / ENVIRONMENT
파일 교체는 손상 위험을 줄이는 구현이지 모든 OS/디스크 장애에 대한 완전한 트랜잭션 보장은 아니다.

## FOLLOW-UP
동시성·복구 로그가 필요하면 파일 lock, journal, database transaction을 비교할 수 있다.

## V5 Gate
Atomicity와 Referential Integrity가 서로 다른 문제라는 것을 예제로 설명할 수 있는가?

[← 이전](./b2-1-60-040-module-class-responsibilities.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-060-generator-streaming.md)
