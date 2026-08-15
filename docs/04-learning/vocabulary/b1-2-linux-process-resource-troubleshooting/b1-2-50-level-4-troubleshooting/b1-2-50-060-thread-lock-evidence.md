---
mission: B1-2
stage: troubleshooting
order: 60
unit: Thread and Lock Evidence
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Thread / Lock Evidence 진단

## 증상

Deadlock처럼 보이지만 단순한 대기인지 순환 대기인지 확실하지 않다.

## 관찰

- `ps -L`로 LWP/TID와 wait channel을 본다.
- `top -H`로 Thread별 상태를 본다.
- 애플리케이션 로그에서 어떤 Thread가 어떤 자원을 보유/대기하는지 확인한다.

Reference Runtime에서는 두 Worker가 각각 다른 Lock을 보유한 채 상대 Lock을 기다렸고 OS 측에서는 futex wait가 관찰됐다.

## 실패 층·가설

```text
Thread 1 holds A → waits B
Thread 2 holds B → waits A
→ Circular Wait
```

여기에 Mutual Exclusion, Hold and Wait, No Preemption이 함께 성립하는지 확인한다.

## 최소 수정

Evidence가 부족하면 먼저 Thread 상태와 자원 관계를 추가 수집한다. Deadlock이라고 단정한 뒤 증거를 맞추지 않는다.

## 재검증

`MULTI_THREAD_ENABLE=false` 비교 실행에서 같은 mutual WAITING/BLOCKED sequence가 사라지고 진행이 지속되는지 본다.

## Gate

Deadlock 4대 조건 중 어떤 조건이 실제 로그/Thread 상태로 지지되는지 구분할 수 있어야 한다.

[← 이전](./b1-2-50-050-deadlock-alive-stalled.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-070-runtime-env-misconfiguration.md)
