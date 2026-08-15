---
mission: B2-1
stage: review
order: 60
unit: Integrity and Atomicity Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# 060 — Integrity & Atomicity Recall

## 복습 목표

참조 무결성과 파일 재작성 안전성을 서로 다른 문제로 구분한다.

## 먼저 회상

다음 두 질문을 별도로 답한다.

```text
Q1. 거래가 사용하는 category를 삭제하면 왜 문제가 되는가?
Q2. update/delete 중 파일을 직접 덮어쓰면 어떤 위험이 있는가?
```

## 기준 확인

### Referential Integrity

거래가 참조하는 category가 사라지면 데이터 의미가 깨질 수 있으므로 현재 구현은 사용 중 category 제거를 막는다.

### File Atomicity

현재 구현은 temp file에 새 내용을 기록하고 `os.replace()`로 교체하여 직접 덮어쓰기보다 중간 손상 위험을 줄인다.

## 경계

```text
Referential Integrity
→ 데이터 관계의 일관성

Atomic Rewrite
→ 파일 교체 과정의 안전성
```

둘은 관련 있지만 같은 개념이 아니다.

## 통합 Gate

**PASS:** 무결성 문제와 저장 안전성 문제를 사례와 함께 구분한다.

[← 050](./b2-1-70-050-generator-layer-relation-recall.md) · [Review Index](./b2-1-70-000-index.md) · [070 →](./b2-1-70-070-csv-import-export-recall.md)
