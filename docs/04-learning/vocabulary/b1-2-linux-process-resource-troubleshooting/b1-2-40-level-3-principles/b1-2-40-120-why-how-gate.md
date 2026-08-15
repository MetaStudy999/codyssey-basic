---
mission: B1-2
stage: principles
level: 3
order: 120
unit: WHY HOW Principle Gate
gate: WHY-HOW
visual_learning: DEFERRED
---

# B1-2 Level 3 — WHY/HOW Principle Gate

## 목표

명령어를 외우는 수준을 넘어 OOM / CPU / Deadlock이 어떤 구조로 발생하고, 어떤 Evidence가 어떤 결론을 지지하는지 자기 말로 설명한다.

## 백지 설명 과제

다음 세 흐름을 명령어 없이 먼저 그린다.

```text
Memory Growth
→ Limit
→ Protection
→ Before/After

CPU Load
→ Per-process Observation
→ Protection
→ Before/After

Thread
→ Lock
→ Hold/Wait
→ Circular Wait
→ Alive-but-Stalled
→ Before/After
```

그 다음 아래 분석 흐름을 연결한다.

```text
Evidence
→ Fact
→ Inference
→ Causality
→ RCA
→ Workaround / Root Fix 제안
```

## 통과 기준

- [ ] Memory Growth와 Memory Limit/Protection의 관계를 설명한다.
- [ ] 대상 PID CPU와 시스템 전체 부하를 구분한다.
- [ ] Process와 Thread의 관계를 설명한다.
- [ ] Lock/Contention과 Deadlock을 구분한다.
- [ ] Deadlock 4대 조건을 설명한다.
- [ ] PID/Port가 살아 있어도 작업이 멈출 수 있음을 설명한다.
- [ ] 실제 CPU build의 보호 로그와 exit 143을 과장 없이 설명한다.
- [ ] Fact / Inference / Proposal을 구분한다.
- [ ] 단일 변수 Before/After가 왜 필요한지 설명한다.

## 상태 구분

```text
WHY/HOW READY
≠ RUNTIME VERIFIED
≠ MISSION PASS
≠ PERSONAL MASTERED
```

Level 3 문서를 읽었다는 사실만으로 개인 숙달이나 Runtime PASS를 주장하지 않는다.

[← Reproducibility](./b1-2-40-110-reproducibility-before-after.md) · [Level 3 Index](./b1-2-40-000-index.md) · 다음: Level 4 Troubleshooting
