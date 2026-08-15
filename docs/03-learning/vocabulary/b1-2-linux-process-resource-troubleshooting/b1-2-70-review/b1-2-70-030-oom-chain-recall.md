---
mission: B1-2
stage: review
order: 30
unit: OOM Chain Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# OOM Chain Recall

## 복습 목표

OOM을 용어 하나가 아니라 `현상 → 관찰 → 보호 → 변경 → 검증`의 인과 사슬로 복원한다.

## 먼저 백지 복원

```text
Memory ______
→ RSS / Heap ______
→ MEMORY_LIMIT ______
→ 보호 정책 / 종료 ______
→ MEMORY_LIMIT 변경
→ 생존 시간 ______
→ Before & After Evidence
```

## 확인용 핵심 관계

```text
지속적인 Memory Growth
→ RSS/Heap 증가 관찰
→ Memory limit / protection 경계 접근
→ MemoryGuard self-termination 관찰
→ MEMORY_LIMIT 하나만 변경
→ 재실행
→ 생존 시간과 메모리 패턴 비교
```

현재 구현 저장소의 Reference Runtime은 `64 → 128`에서 생존 시간이 `8초 → 18초`로 늘어난 관측을 제공한다. 이 숫자는 실제 관측 예시이지 학습자가 복사할 정답값이 아니다.

## Evidence 질문

- 대상 PID를 특정했는가?
- timestamp가 있는가?
- 메모리 증가 패턴이 있는가?
- 종료 시점/보호 메시지가 있는가?
- 변경 전후에는 핵심 변수 하나만 달라졌는가?

## RCA 경계

관측된 증가와 보호 종료는 설명할 수 있지만, 디컴파일하지 않은 바이너리 내부의 정확한 누수 코드 위치를 단정하지 않는다.

## Gate

`WHAT → WHY → HOW → PROOF → LIMIT`으로 OOM을 1분 안에 설명하면 통과 후보다.

[← 020](./b1-2-70-020-constraints-environment-recall.md) · [Review Index](./b1-2-70-000-index.md) · [040 →](./b1-2-70-040-cpu-chain-recall.md)
