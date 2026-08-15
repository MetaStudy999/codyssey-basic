---
mission: B1-2
stage: principles
level: 3
order: 60
unit: Lock and Resource Contention
gate: WHY-HOW
visual_learning: DEFERRED
---

# 락과 자원 경쟁 — Lock / Resource Contention

## 한 줄 설명

여러 스레드가 같은 공유 자원을 동시에 사용하려 할 때 Lock은 접근을 직렬화해 충돌을 막지만, 그 대가로 일부 스레드는 기다려야 한다.

## B1-2에서의 위치

실제 Deadlock 로그에서는 Worker-Thread-1과 Worker-Thread-2가 각각 하나의 공유 자원을 먼저 획득한 뒤 상대가 보유한 자원을 기다렸다.

## 핵심 관계

```text
Shared Resource
→ Concurrent Access
→ Lock
→ 한 Thread가 획득
→ 다른 Thread는 WAIT
```

정상적인 Lock 대기는 곧바로 Deadlock을 뜻하지 않는다. 문제는 대기 관계가 끝나지 않는 구조로 고착될 때다.

## 실제 Runtime 관계

```text
Thread-1 holds Shared_Memory_A
→ waits Socket_Pool_B

Thread-2 holds Socket_Pool_B
→ waits Shared_Memory_A
```

이 구조가 다음 Unit의 Circular Wait 설명으로 이어진다.

## WHY/HOW Gate

- [ ] Lock이 왜 필요한지 설명한다.
- [ ] Resource Contention과 Deadlock을 구분한다.
- [ ] 한 Thread의 대기만으로 Deadlock이라고 단정할 수 없는 이유를 설명한다.

[← Process / Thread](./b1-2-40-050-process-thread-model.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Deadlock Four Conditions →](./b1-2-40-070-deadlock-four-conditions.md)
