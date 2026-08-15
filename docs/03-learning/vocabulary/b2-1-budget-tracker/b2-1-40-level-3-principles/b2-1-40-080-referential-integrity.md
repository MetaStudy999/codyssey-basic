---
mission: B2-1
stage: principles
order: 80
unit: Referential Integrity
gate: WHY-HOW
visual_learning: DEFERRED
---
# 080. Referential Integrity — 관계 무결성

**한 줄 설명:** 거래가 가리키는 category를 함부로 삭제하지 않으면 데이터 사이의 참조 관계가 깨지는 것을 막을 수 있다.

## 현재 구현

`BudgetService._require_category()`는 새 거래/수정에서 등록 category를 요구한다. `remove_category()`는 모든 거래를 확인해 해당 category가 사용 중이면 삭제를 거부한다.

```text
Category exists
→ Transaction references category
→ category remove 요청
→ reference 존재?
   ├─ yes: 거부
   └─ no: 삭제
```

## 왜 필요한가

사용 중인 category가 사라지면 기존 거래의 의미가 불완전해지고 summary 같은 집계도 해석하기 어려워진다. 파일 기반 저장소에서도 관계 무결성 규칙이 필요하다.

## 비교

DB의 foreign key와 목적은 비슷하지만 현재 구현은 DB 제약이 아니라 Service 코드가 검사한다.

## WHY/HOW Gate

`food` category를 참조하는 거래가 있는 상황에서 삭제 허용 시 생길 문제를 설명한다.

[← 이전](./b2-1-40-070-file-atomicity.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-090-decorator-cross-cutting.md)
