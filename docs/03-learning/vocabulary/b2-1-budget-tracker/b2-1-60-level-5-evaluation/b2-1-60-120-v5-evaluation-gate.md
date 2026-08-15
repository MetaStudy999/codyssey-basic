---
mission: B2-1
stage: level-5-evaluation
order: 120
unit: V5 Evaluation Gate
gate: V5
visual_learning: DEFERRED
---
# 120. V5 Evaluation Gate

## 핵심 질문
B2-1 공식 평가 범위를 실제 구현·증거·한계와 연결해 독립적으로 설명할 수 있는가?

## WHAT
평가 범위는 크게 기능/예외 처리, 모듈·클래스 설계, generator/decorator/type hint, 저장 포맷/확장성으로 묶인다.

## WHY
평가는 단순 실행 성공뿐 아니라 “왜 이런 구조를 썼는지”와 “어떻게 검증했는지”를 확인한다.

## HOW
다음 답변 묶음을 백지에서 복원한다.

```text
기능 + Persistence
→ Error Contract
→ Module/Class Responsibility
→ Safe Rewrite + Integrity
→ Generator
→ Decorator
→ Type Hint
→ JSONL/CSV Trade-off
→ 100k Scalability
→ Import Trust Policy
```

## PROOF
각 주제마다 최소 하나의 코드 위치와 하나의 테스트/Evidence를 대응시킨다.

## LIMIT / ENVIRONMENT
현재 구현 저장소의 기존 18/18 테스트 기록은 개인의 재실행, 구두 설명 능력, 실제 평가 PASS와 동일하지 않다.

## FOLLOW-UP
1분 요약 뒤 평가자가 특정 항목을 고르면 3~5분 구조 설명으로 확장한다.

## V5 Gate
- [ ] 공식 평가 4개 영역을 백지에서 복원한다.
- [ ] 각 영역을 WHAT/WHY/HOW/PROOF/LIMIT로 설명한다.
- [ ] 코드와 테스트 근거를 최소 1개씩 제시한다.
- [ ] 구현 선택과 Mission 고정 요구를 구분한다.
- [ ] 기존 Evidence와 개인 재검증을 구분한다.
- [ ] 모르는 항목은 추측하지 않고 확인할 Source를 말한다.

```text
EVALUATION STRUCTURE READY
≠ PERSONAL EVALUATION READY
≠ PERSONAL MASTERED
≠ MISSION PASS
```

[← 이전](./b2-1-60-110-csv-import-trust-policy.md) · [Level 5 Index](./b2-1-60-000-index.md) · [Mission Index](../b2-1-00-index.md)
