---
mission: B2-1
stage: review
order: 100
unit: Oral Explanation Practice
gate: V5-RETRIEVAL
visual_learning: DEFERRED
---

# 100 — Oral Explanation Practice

## 복습 목표

B2-1을 1분 요약과 3~5분 기술 설명으로 말한다.

## 1분 답변 틀

```text
WHAT
→ 무엇을 만들었는가
WHY
→ 왜 파일 영속성과 구조 분리가 필요한가
HOW
→ Model / Repository / Service / CLI가 어떻게 연결되는가
PROOF
→ 어떤 테스트/출력이 동작을 증명하는가
LIMIT
→ 파일 기반 구조의 확장성 한계는 무엇인가
```

## 3~5분 확장

다음 순서로 설명한다.

1. Mission 목표와 핵심 명령
2. 데이터 모델과 검증
3. 저장 파일과 영속성
4. CRUD/search/summary/category/budget
5. Generator와 lazy iteration
6. Decorator와 error boundary
7. Atomic rewrite와 category integrity
8. CSV import/export와 오류 정책
9. 테스트/Evidence
10. 10만 건 확장 시 병목과 개선 방향

## 금지

- 기존 구현 선택을 Mission의 유일한 정답이라고 말하지 않는다.
- 기존 18/18 테스트만으로 개인 PASS를 주장하지 않는다.
- Generator가 모든 성능 문제를 해결한다고 말하지 않는다.

## 통합 Gate

**PASS:** 1분 답변을 끊기지 않고 말하고, 3~5분 설명에서 Evidence와 한계를 포함한다.

[← 090](./b2-1-70-090-evidence-evaluation-mapping.md) · [Review Index](./b2-1-70-000-index.md) · [110 →](./b2-1-70-110-five-minute-blank-reconstruction.md)
