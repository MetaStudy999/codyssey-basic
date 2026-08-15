---
mission: B2-1
stage: review
order: 50
unit: Generator and Layer Relation Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# 050 — Generator & Layer Relation Recall

## 복습 목표

Generator/yield와 계층 책임을 한 번에 연결한다.

## 먼저 회상

다음 질문에 보지 않고 답한다.

1. Generator란 무엇인가?
2. `yield`는 반환과 어떤 차이가 있는가?
3. list/search에서 lazy iteration이 왜 유리할 수 있는가?
4. Generator를 사용하면 10만 건 확장성 문제가 모두 해결되는가?
5. Model / Repository / Service / CLI는 각각 무엇을 책임하는가?

## 기준 확인

```text
Generator / yield
→ 필요할 때 다음 값을 생산
→ 조회 시 전체 materialization을 피할 수 있음
```

하지만:

```text
Streaming
≠ O(n) scan 제거
≠ update/delete 전체 재작성 비용 제거
≠ 전체 확장성 문제 자동 해결
```

계층 책임은 입력·도메인 규칙·저장·업무 흐름을 분리해 변경 영향과 설명 가능성을 낮추는 데 목적이 있다.

## 통합 Gate

**PASS:** Generator의 장점과 한계, 그리고 계층 책임을 하나의 설계 설명으로 연결한다.

[← 040](./b2-1-70-040-crud-persistence-recall.md) · [Review Index](./b2-1-70-000-index.md) · [060 →](./b2-1-70-060-integrity-atomicity-recall.md)
