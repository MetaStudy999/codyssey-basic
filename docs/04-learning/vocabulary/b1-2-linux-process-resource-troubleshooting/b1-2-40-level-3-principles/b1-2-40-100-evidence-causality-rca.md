---
mission: B1-2
stage: principles
level: 3
order: 100
unit: Evidence Causality and Root Cause Analysis
gate: WHY-HOW
visual_learning: DEFERRED
---

# Evidence → 인과관계 → RCA

## 한 줄 설명

Root Cause Analysis는 추측을 먼저 쓰는 것이 아니라, 관찰 가능한 사실을 시간과 대상에 따라 연결하고 그 Evidence가 지지하는 범위 안에서 원인을 설명하는 과정이다.

## B1-2 분석 구조

```text
Observation
→ Timestamp / PID
→ Resource / Thread / Log Evidence
→ 반복 패턴
→ Before & After
→ Causality 판단
→ RCA
```

## 세 장애의 Evidence 축

- OOM: 같은 대상의 Memory/RSS 증가 + MemoryGuard 종료 근거
- CPU: 대상 process family의 CPU 상승 + 보호 위반/종료 근거
- Deadlock: PID 생존 + 자원/로그 정체 + thread wait + circular wait

## 사실 / 해석 / 제안 분리

```text
Fact      : 실제 출력에서 확인
Inference : 여러 Evidence를 연결한 기술적 판단
Proposal  : 재발 방지 또는 근본 해결 제안
```

B1-2에서는 바이너리 역공학이 금지되어 있으므로 특정 내부 코드 라인을 RCA로 단정하지 않는다.

## 왜 중요한가

Evidence와 원인 사이의 논리 연결이 명확해야 다른 사람이 같은 자료를 보고 검증할 수 있다.

## WHY/HOW Gate

- [ ] Fact와 Inference를 구분한다.
- [ ] 세 장애 각각 어떤 Evidence 조합이 RCA를 지지하는지 설명한다.
- [ ] 증거가 없는 내부 구현을 단정하면 안 되는 이유를 설명한다.

[← Signal / Protection](./b1-2-40-090-signal-protection.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Reproducibility →](./b1-2-40-110-reproducibility-before-after.md)
