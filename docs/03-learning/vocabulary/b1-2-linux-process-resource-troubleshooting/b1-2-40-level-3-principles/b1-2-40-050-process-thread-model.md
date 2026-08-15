---
mission: B1-2
stage: principles
level: 3
order: 50
unit: Process and Thread Model
gate: WHY-HOW
visual_learning: DEFERRED
---

# 프로세스와 스레드 — Process / Thread Model

## 한 줄 설명

프로세스는 실행 중인 프로그램의 자원·주소 공간을 포함하는 실행 단위이고, 스레드는 그 프로세스 안에서 실제 작업 흐름을 나누는 실행 단위로 볼 수 있다.

## B1-2에서의 위치

Deadlock 케이스에서는 PID 자체는 살아 있었지만 여러 Worker thread가 lock 대기에 들어가 작업 진행이 멈췄다. 따라서 Process 상태와 Thread 상태를 함께 봐야 했다.

## 핵심 관계

```text
Process
├─ PID
├─ Memory / Socket / Files
└─ Threads
   ├─ Thread A
   ├─ Thread B
   └─ ...
```

## 왜 중요한가

프로세스가 존재한다는 사실은 내부의 모든 스레드가 정상적으로 일을 진행한다는 뜻이 아니다. `ps -L`, `top -H`, WCHAN 같은 스레드 관찰이 필요한 이유가 여기에 있다.

## 실제 Runtime과 연결

실제 Deadlock Evidence에서는 thread들이 `futex_` wait 상태로 관찰됐고, 애플리케이션 로그에서는 두 Worker가 서로 상대 자원을 기다리는 상태가 기록됐다.

## WHY/HOW Gate

- [ ] Process와 Thread의 관계를 설명한다.
- [ ] PID 생존과 작업 진행을 같은 의미로 보면 안 되는 이유를 설명한다.
- [ ] Deadlock 분석에서 thread-level Evidence가 필요한 이유를 설명한다.

[← Process vs System Load](./b1-2-40-040-process-vs-system-load.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Lock / Contention →](./b1-2-40-060-lock-resource-contention.md)
