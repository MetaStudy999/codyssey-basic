---
mission: B2-1
stage: review
order: 70
unit: CSV Import and Export Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# 070 — CSV Import / Export Recall

## 복습 목표

저장 포맷과 교환 포맷, import 신뢰 정책을 연결한다.

## 먼저 회상

- 현재 구현의 application store는 무엇인가?
- interchange 포맷은 무엇인가?
- CSV에서 확인해야 할 schema 요소는 무엇인가?
- 일부 행이 깨졌을 때 가능한 정책은 무엇인가?
- 현재 구현은 어떤 정책을 선택했는가?

## 기준 확인

현재 구현은 JSONL을 application store로, CSV를 import/export 교환 포맷으로 사용한다. 평가 문항은 CSV의 UTF-8, 헤더, 컬럼 동작을 확인하도록 요구한다.

현재 import 구현은 모든 행을 먼저 검증하고 문제가 있으면 전체 반영을 취소하는 all-or-nothing 정책을 사용한다.

```text
Partial Success
vs
Rollback
vs
Error Report
```

이 중 어떤 정책이 항상 정답인 것은 아니며, 사용자 신뢰와 복구 가능성을 근거로 설명해야 한다.

## 통합 Gate

**PASS:** 저장 포맷 선택과 import 오류 정책의 trade-off를 설명한다.

[← 060](./b2-1-70-060-integrity-atomicity-recall.md) · [Review Index](./b2-1-70-000-index.md) · [080 →](./b2-1-70-080-troubleshooting-scenarios.md)
