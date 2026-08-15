---
mission: B1-2
stage: principles
level: 3
order: 80
unit: Alive but Stalled
gate: WHY-HOW
visual_learning: DEFERRED
---

# 살아 있지만 멈춘 상태 — Alive but Stalled

## 한 줄 설명

프로세스와 포트가 살아 있어도 내부 작업 스레드가 대기 상태에 고착되면 실제 서비스 진행은 멈출 수 있다.

## B1-2에서의 위치

실제 Deadlock Before 조건에서는 PID와 tcp/15034 listener가 살아 있었지만 CPU가 거의 0에 머물고 RSS와 lock 관련 로그 진행이 멈췄으며 Worker thread가 wait 상태에 있었다.

## 핵심 관계

```text
PID exists        ✅
Port LISTEN       ✅
Process alive     ✅

하지만
Thread progress   ❌
Log progress      ❌
Useful work       ❌
```

## 왜 중요한가

운영에서 `프로세스 있음`이나 `포트 LISTEN`만 확인하면 부분적인 건강 상태만 본 것이다. 서비스 readiness/진행성은 더 많은 Evidence가 필요하다.

## B1-1과 연결

B1-1에서 배운 `Process 존재 ≠ 서비스 정상`을 B1-2에서는 Deadlock 사례로 더 깊게 확인한다.

## WHY/HOW Gate

- [ ] PID 생존과 서비스 정상의 차이를 설명한다.
- [ ] Deadlock에서 CPU/MEM/로그 정체가 왜 함께 관찰되는지 설명한다.
- [ ] 포트 LISTEN만으로 정상 판정을 내리면 안 되는 이유를 설명한다.

[← Deadlock Four Conditions](./b1-2-40-070-deadlock-four-conditions.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Signal / Protection →](./b1-2-40-090-signal-protection.md)
