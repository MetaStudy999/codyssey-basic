---
mission: B2-1
stage: review
order: 20
unit: Source and Constraint Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# 020 — Source / Constraint Recall

## 복습 목표

원본 요구, 평가 기준, 현재 구현 선택을 섞지 않고 구분한다.

## 먼저 회상

다음을 세 칸으로 나눠 적는다.

```text
A. Mission / Evaluation 요구
B. 현재 구현 선택
C. 구현 저장소 Evidence
```

아래 항목을 어디에 둘지 판단한다.

- add/list/search/summary/export/import/update/delete
- 프로그램 재실행 후 데이터 유지
- 저장 파일 3개 이상
- JSONL application store
- CSV interchange
- temp file + `os.replace()`
- `@cli_guard`
- 18/18 테스트 기록
- 오류 상황 non-zero exit

## 기준 확인

- 핵심 명령, 영속성, category/budget, CSV, 오류 처리, 설계 설명은 평가 요구와 연결된다.
- JSONL, `os.replace()`, rollback import, `@cli_guard`는 현재 구현 선택이다.
- 18/18 테스트는 기존 구현 Evidence다.

## 중요 경계

```text
SOURCE REQUIREMENT
≠ IMPLEMENTATION CHOICE
≠ EXISTING EVIDENCE
≠ PERSONAL PASS
```

## 통합 Gate

**PASS:** 임의의 구현 세부사항을 Mission 고정 요구라고 과장하지 않고 설명한다.

[← 010](./b2-1-70-010-mission-map-recall.md) · [Review Index](./b2-1-70-000-index.md) · [030 →](./b2-1-70-030-transaction-data-flow-recall.md)
