---
mission: B2-1
stage: review
order: 40
unit: CRUD and Persistence Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# 040 — CRUD & Persistence Recall

## 복습 목표

CRUD와 조회 기능을 파일 영속성 관점에서 연결한다.

## 먼저 회상

각 기능에 필요한 핵심 동작을 한 줄씩 적는다.

```text
add    →
list   →
search →
update →
delete →
summary→
```

## 기준 확인

- `add`: 검증된 거래를 영속 저장한다.
- `list/search`: 저장된 거래를 읽어 조건에 맞게 제공한다.
- `update/delete`: 대상 ID를 찾고 안전하게 파일 내용을 변경한다.
- `summary`: 저장된 거래를 읽어 집계한다.

## 핵심 연결

```text
Persistence
→ 프로세스 수명보다 긴 데이터 수명
CRUD
→ persistent state 변경
Read / Search / Summary
→ persistent state 관찰·가공
```

## 회상 질문

- 메모리 리스트만 사용하면 어떤 요구를 만족하지 못하는가?
- 없는 ID를 update/delete 하면 성공으로 처리해도 되는가?
- 재실행 후 결과가 동일하게 남는지 무엇으로 증명할 수 있는가?

## 통합 Gate

**PASS:** CRUD 각 기능이 파일 상태를 어떻게 읽거나 바꾸는지 설명한다.

[← 030](./b2-1-70-030-transaction-data-flow-recall.md) · [Review Index](./b2-1-70-000-index.md) · [050 →](./b2-1-70-050-generator-layer-relation-recall.md)
