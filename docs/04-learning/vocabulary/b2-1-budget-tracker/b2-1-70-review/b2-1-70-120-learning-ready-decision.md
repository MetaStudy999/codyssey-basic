---
mission: B2-1
stage: review
order: 120
unit: LEARNING READY Decision
gate: LEARNING-READY
visual_learning: DEFERRED
---

# 120 — LEARNING READY Decision

## 복습 목표

학습 자료를 읽었다는 사실이 아니라, 실제로 꺼내 쓸 수 있는지를 기준으로 다음 단계 이동 여부를 판정한다.

## 판정표

아래를 자료 없이 확인한다.

- [ ] Mission Map을 백지에서 복원한다.
- [ ] 원본 요구 / 구현 선택 / 기존 Evidence를 구분한다.
- [ ] Transaction 입력→검증→저장→조회 흐름을 설명한다.
- [ ] CRUD와 persistence의 관계를 설명한다.
- [ ] Generator의 이점과 한계를 설명한다.
- [ ] Model/Repository/Service/CLI 책임을 설명한다.
- [ ] Atomicity와 Referential Integrity를 구분한다.
- [ ] CSV import/export와 rollback 정책을 설명한다.
- [ ] 대표 장애 8개 이상을 진단 절차로 설명한다.
- [ ] 평가 4영역에 Evidence를 매핑한다.
- [ ] 1분 답변을 수행한다.
- [ ] 5분 백지 복원을 수행한다.

## 판정

```text
10~12개 충족 → LEARNING READY
7~9개 충족   → TARGETED REVIEW
0~6개 충족   → CORE REVIEW
```

이 판정은 학습 복습 상태를 위한 내부 Gate다.

```text
LEARNING READY
≠ RUNTIME VERIFIED
≠ EVALUATION PASS
≠ MISSION PASS
```

## 다음 연결

LEARNING READY 이후에는 원본 Mission의 Bonus/선택 심화가 실제로 무엇인지 Source를 다시 확인한 뒤 Advanced를 구조화한다. Source가 지원하지 않는 심화는 `SUPPLEMENTAL_ADVANCED`로만 분리한다.

[← 110](./b2-1-70-110-five-minute-blank-reconstruction.md) · [Review Index](./b2-1-70-000-index.md) · [Mission Index](../b2-1-00-index.md)
