---
mission: B1-2
stage: evaluation
level: 5
order: 120
unit: V5 Evaluation Gate
gate: V5
visual_learning: DEFERRED
---

# V5 Evaluation Gate

## 목적

B1-2의 세 장애를 실제 Evidence와 원리로 설명하고, 질문이 확장되어도 근거 범위를 지키는지 최종 점검한다.

## Gate A — OOM

- [ ] Memory Growth와 보호 종료를 구분해 설명한다.
- [ ] `MEMORY_LIMIT` Before/After의 의미를 설명한다.
- [ ] OS OOM Killer와 앱 MemoryGuard를 Evidence로 구분한다.

## Gate B — CPU

- [ ] 시스템 전체 CPU와 대상 PID CPU를 구분한다.
- [ ] 실제 build의 `CPU Threshold Violated!`와 exit 143을 정확히 설명한다.
- [ ] OS interval CPU와 앱 telemetry를 같은 수치로 취급하지 않는다.

## Gate C — Deadlock

- [ ] Alive-but-Stalled를 설명한다.
- [ ] thread/lock/circular wait Evidence를 연결한다.
- [ ] `MULTI_THREAD_ENABLE=false`가 workaround임을 설명한다.

## Gate D — Evidence / RCA

- [ ] Fact, inference, hypothesis를 구분한다.
- [ ] PID, timestamp, 핵심 로그, Before/After를 추적 가능하게 제시한다.
- [ ] 바이너리 내부를 확인하지 않은 부분을 단정하지 않는다.

## Gate E — 평가 답변

- [ ] WHAT → WHY → HOW → PROOF → LIMIT → FOLLOW-UP 순서로 답한다.
- [ ] 1분 답변 3개를 수행한다.
- [ ] 임의의 꼬리질문을 3~5분 구조로 확장한다.
- [ ] provisional `b1-2-evaluation.md`와 authoritative Mission Source를 구분한다.

## 상태 판정

```text
문서 구조 완료          = EVALUATION STRUCTURE READY
학습자가 Gate를 수행함   = EVALUATION READY
실제 Runtime 검증        = RUNTIME VERIFIED
미션 공식 판정           = MISSION PASS
```

서로 자동 승격시키지 않는다.

## 다음 단계

Level 5 이후에는 새 지식을 추가하기보다 Level 0~5를 백지 복원하고 Evidence와 함께 다시 연결하는 **B1-2 Review**로 이동한다.

[← 110](./b1-2-60-110-oral-answer-practice.md) · [Index](./b1-2-60-000-index.md) · 다음: Review
