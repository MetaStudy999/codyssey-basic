---
mission: B2-1
stage: level-5-evaluation
order: 90
unit: Storage Format Trade-offs
gate: V5
visual_learning: DEFERRED
---
# 090. Storage Format Trade-offs

## 핵심 질문
JSONL과 CSV의 장단점을 비교하고 현재 구현이 역할을 나눈 이유를 어떻게 설명할 것인가?

## WHAT
현재 구현은 application storage에 JSONL, 외부 import/export 교환에 CSV를 사용한다.

## WHY
JSONL은 한 줄 한 객체로 list형 tags를 자연스럽게 보존하고 순차 읽기 쉽다. CSV는 표 형태와 스프레드시트 호환성이 좋다.

## HOW
내부 3파일은 JSONL로 유지하고, CSV는 고정 schema·UTF-8·header를 사용해 외부 교환 경계를 만든다.

## PROOF
README의 저장 포맷 설명, `CSV_FIELDS`, export/import round-trip 테스트를 연결한다.

## LIMIT / ENVIRONMENT
JSONL은 id index가 없고 update/delete 시 전체 탐색/재작성 비용이 크다. CSV 역시 복잡한 중첩 구조에는 불리하다.

## FOLLOW-UP
SQLite/PostgreSQL 같은 DB로 전환할 기준을 데이터량·동시성·검색 요구로 설명한다.

## V5 Gate
JSONL과 CSV 각각 장점 2개·단점 1개 이상을 B2-1 구현에 연결해 설명할 수 있는가?

[← 이전](./b2-1-60-080-type-hint-contract.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-100-100k-scalability.md)
