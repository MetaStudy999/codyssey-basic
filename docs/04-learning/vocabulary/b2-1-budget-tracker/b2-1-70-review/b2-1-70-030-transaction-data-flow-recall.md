---
mission: B2-1
stage: review
order: 30
unit: Transaction Data Flow Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# 030 — Transaction Data Flow Recall

## 복습 목표

거래 한 건이 입력되어 저장되고 다시 조회되는 흐름을 백지에서 복원한다.

## 먼저 회상

```text
사용자 입력
→ CLI parser
→ ?
→ ?
→ persistent file
→ ?
→ 화면 출력
```

각 단계에서 책임을 적는다.

## 기준 확인

현재 구현을 기준으로 설명하면 다음과 같은 책임 분리가 가능하다.

```text
CLI
→ 입력/명령 해석
Model
→ Transaction 기본 invariant
Service
→ category 등 업무 규칙과 유스케이스
Repository / Storage
→ 파일 읽기·쓰기·조회
Persistent Files
→ 재실행 이후 데이터 유지
```

## 회상 질문

- 날짜·type·amount 검증과 category 존재 검증을 왜 같은 층에 몰아넣지 않을 수 있는가?
- add 뒤 프로세스를 종료했다 다시 실행해도 데이터가 남으려면 무엇이 필요할까?
- list/search는 어느 층에서 데이터를 가져와 어느 층에서 출력해야 할까?

## 통합 Gate

**PASS:** 한 거래의 입력→검증→저장→조회 흐름과 각 책임을 1분 안에 설명한다.

[← 020](./b2-1-70-020-source-constraint-recall.md) · [Review Index](./b2-1-70-000-index.md) · [040 →](./b2-1-70-040-crud-persistence-recall.md)
