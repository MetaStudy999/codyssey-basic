---
mission: B2-1
stage: principles
order: 10
unit: Persistence and Data Lifecycle
gate: WHY-HOW
visual_learning: DEFERRED
---
# 010. 영속성과 데이터 생명주기

**한 줄 설명:** 메모리의 값은 프로그램이 끝나면 사라지지만, 파일에 저장된 거래·카테고리·예산은 다음 실행에서도 다시 읽을 수 있다.

## 구조 / 위치

현재 구현은 `DataPaths.initialize()`에서 `transactions.jsonl`, `categories.jsonl`, `budgets.jsonl`을 준비하고 각 Store/Repository가 파일을 읽고 쓴다.

```text
CLI 실행
→ BudgetService 생성
→ DataPaths 초기화
→ 파일 읽기/쓰기
→ 프로세스 종료
→ 다음 실행에서 같은 파일 재사용
```

## 왜 필요한가

용돈 기입장은 한 번 실행하고 끝나는 계산기가 아니라 시간이 지나도 거래 기록이 유지되어야 한다. 그래서 **Process lifetime**과 **Data lifetime**을 분리해야 한다.

## HOW

현재 구현에서 `--data-dir`은 영속 데이터 위치를 선택한다. 같은 디렉터리를 쓰면 상태가 이어지고, 다른 디렉터리를 쓰면 독립 상태가 된다.

## 경계

영속성은 데이터가 파일에 남는다는 뜻이지, 백업·동시성·장애 복구까지 자동 보장한다는 뜻은 아니다.

## WHY/HOW Gate

`프로그램 재실행 → 파일 재사용 → 데이터 유지`의 관계를 1분 안에 설명한다.

[← Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-020-model-invariants-validation.md)
