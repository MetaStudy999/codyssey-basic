---
mission: B1-2
stage: review
order: 110
unit: Learning Ready Decision
gate: LEARNING-READY
visual_learning: DEFERRED
---

# Learning Ready Decision

## 복습 목표

문서 작성 상태가 아니라 **학습자가 실제로 꺼내 쓸 수 있는지** 판정한다.

## LEARNING READY 체크

- [ ] Level 0 핵심 선수 용어를 알아보고 설명할 수 있다.
- [ ] Level 1 핵심 용어를 관계로 연결할 수 있다.
- [ ] Level 2에서 OOM/CPU/Deadlock 재현·관찰·Before/After 위치를 찾을 수 있다.
- [ ] Level 3 원리를 WHY/HOW로 설명할 수 있다.
- [ ] Level 4 공통 Troubleshooting 순서를 백지에서 복원할 수 있다.
- [ ] Level 5 답변 프레임으로 실제 Evidence를 설명할 수 있다.
- [ ] OOM ↔ MEMORY_LIMIT을 연결할 수 있다.
- [ ] CPU ↔ CPU_MAX_OCCUPY를 연결할 수 있다.
- [ ] Deadlock ↔ MULTI_THREAD_ENABLE을 연결할 수 있다.
- [ ] PID/timestamp/log/resource/thread Evidence와 추론을 구분할 수 있다.
- [ ] Workaround와 Root Fix를 구분할 수 있다.
- [ ] provisional 평가문항과 authoritative Mission 요구를 구분할 수 있다.

## 판정

```text
모두 독립 수행 가능   → LEARNING READY 후보
일부 힌트 필요        → REVIEW AGAIN
Evidence 설명 불가    → Level 2 / 4 / 5 재복습
원리 설명 불가        → Level 3 재복습
용어/관계 혼동        → Level 0 / 1 재복습
```

## 상태 경계

```text
LEARNING READY
≠ PERSONAL MASTERED
≠ RUNTIME VERIFIED
≠ MISSION PASS
```

구현 저장소가 Runtime PASS라는 사실과 학습자의 현재 숙련도 판정은 별개다.

[← 100](./b1-2-70-100-five-minute-blank-reconstruction.md) · [Review Index](./b1-2-70-000-index.md) · [120 →](./b1-2-70-120-advanced-next-bridge.md)
