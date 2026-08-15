---
mission: B1-2
stage: principles
level: 3
order: 70
unit: Four Necessary Conditions for Deadlock
gate: WHY-HOW
visual_learning: DEFERRED
---

# 교착상태 4대 조건 — Four Necessary Conditions for Deadlock

## 한 줄 설명

B1-2에서는 Deadlock을 `Mutual Exclusion`, `Hold and Wait`, `No Preemption`, `Circular Wait` 네 조건의 결합으로 설명한다.

## 네 조건

1. **Mutual Exclusion — 상호 배제:** 한 자원을 동시에 여러 실행 흐름이 소유하지 못한다.
2. **Hold and Wait — 점유 대기:** 이미 가진 자원을 놓지 않은 채 다른 자원을 기다린다.
3. **No Preemption — 비선점:** 다른 실행 흐름이 가진 자원을 강제로 빼앗지 않는다.
4. **Circular Wait — 순환 대기:** 자원 대기 관계가 원형으로 이어진다.

## B1-2 실제 관측 연결

실제 로그에서는 두 Worker가 각각 하나의 Lock을 보유한 채 상대 자원을 기다려 명확한 순환 관계가 만들어졌다. OS thread wait Evidence도 같은 방향을 지지했다.

## 핵심 관계

```text
T1 holds A → waits B
T2 holds B → waits A

A ← T1 ← B ← T2 ← A
```

## 왜 중요한가

`프로세스가 멈췄다`는 현상만으로 Deadlock을 확정하지 않고, 자원 보유·대기 관계와 네 조건을 Evidence로 연결해야 한다.

## WHY/HOW Gate

- [ ] 네 조건을 자기 말로 설명한다.
- [ ] 실제 두 Worker의 대기 관계를 네 조건에 연결한다.
- [ ] 단순 느림/대기와 Deadlock을 구분하는 기준을 설명한다.

[← Lock / Contention](./b1-2-40-060-lock-resource-contention.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Alive but Stalled →](./b1-2-40-080-alive-but-stalled.md)
