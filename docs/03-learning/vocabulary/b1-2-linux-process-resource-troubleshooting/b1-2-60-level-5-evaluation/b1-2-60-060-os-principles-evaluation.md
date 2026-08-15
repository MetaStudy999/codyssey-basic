---
mission: B1-2
stage: evaluation
level: 5
order: 60
unit: OS Principles Evaluation
gate: V5
visual_learning: DEFERRED
---

# OS Principles Evaluation

## 핵심 질문

세 장애를 운영체제 관점에서 어떻게 설명할 것인가?

## Memory

프로세스가 메모리를 계속 보유하면 resident memory가 증가하고 시스템의 가용 자원을 압박한다. 보호 임계치는 한 프로세스가 전체 시스템 안정성에 미치는 영향을 제한하기 위한 정책이 될 수 있다.

## CPU

CPU time은 여러 runnable task가 공유한다. 한 프로세스가 지속적으로 많은 실행 시간을 소비하면 다른 작업의 latency가 늘어날 수 있다.

## Deadlock

교착은 최소 다음 구조로 설명한다.

```text
Mutual Exclusion
+ Hold and Wait
+ No Preemption
+ Circular Wait
→ Deadlock 가능 조건 형성
```

실제 B1-2 Runtime에서는 서로 다른 lock을 하나씩 보유한 두 Worker가 상대 lock을 기다리는 순환 관계가 관찰됐다.

## PROOF와 원리의 경계

원리는 일반 메커니즘이고, Evidence는 이번 실행에서 그 메커니즘을 지지하는 관측이다. 둘을 섞어 `일반적으로 그렇다`를 `이번에도 반드시 그랬다`로 바꾸지 않는다.

## V5 Gate

- [ ] Memory 보호 정책의 목적을 설명한다.
- [ ] CPU 과점유와 latency의 관계를 설명한다.
- [ ] Deadlock 4대 조건과 실제 circular wait Evidence를 연결한다.

[← 050](./b1-2-60-050-monitoring-commands-evaluation.md) · [Index](./b1-2-60-000-index.md) · [070 →](./b1-2-60-070-evidence-rca-defense.md)
