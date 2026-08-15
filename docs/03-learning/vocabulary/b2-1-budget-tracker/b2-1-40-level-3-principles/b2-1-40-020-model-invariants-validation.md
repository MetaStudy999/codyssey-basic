---
mission: B2-1
stage: principles
order: 20
unit: Model Invariants and Validation
gate: WHY-HOW
visual_learning: DEFERRED
---
# 020. 모델 불변조건과 검증

**한 줄 설명:** 거래가 저장소에 들어가기 전에 날짜·금액·타입·카테고리 같은 기본 조건을 만족하도록 강제하면 잘못된 상태가 시스템 깊숙이 퍼지는 것을 줄일 수 있다.

## 현재 구현

`models.py`의 `Transaction.__post_init__()`은 날짜, 양수 금액, `income/expense`, 비어 있지 않은 category를 검증한다. `services.py`는 등록된 category인지 같은 업무 규칙을 추가로 확인한다.

```text
Raw Input
→ 형식/값 검증
→ Transaction invariant
→ 업무 규칙 검증
→ Persistence
```

## 왜 두 층인가

Model은 거래 객체 자체가 가져야 할 기본 일관성을 지키고, Service는 다른 저장 데이터와의 관계 같은 업무 규칙을 다룬다. 모든 검증을 CLI에만 두면 다른 호출 경로에서 우회될 수 있다.

## 경계

현재 코드가 선택한 검증 위치를 설명하는 것이다. 원본 Mission이 모든 검증을 반드시 같은 함수/클래스에 배치하라고 요구하는 것은 아니다.

## WHY/HOW Gate

`불변조건`, `입력 검증`, `업무 규칙`의 차이를 실제 B2-1 예로 설명한다.

[← 이전](./b2-1-40-010-persistence-data-lifecycle.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-030-jsonl-csv-role-separation.md)
