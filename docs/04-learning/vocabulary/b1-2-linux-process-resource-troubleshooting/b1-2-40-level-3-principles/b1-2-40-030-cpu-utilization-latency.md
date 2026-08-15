---
mission: B1-2
stage: principles
level: 3
order: 30
unit: CPU Utilization and Latency
gate: WHY-HOW
visual_learning: DEFERRED
---

# CPU 사용률과 지연 — CPU Utilization / Latency

## 한 줄 설명

한 프로세스가 CPU 실행 시간을 많이 소비하면 다른 runnable 작업이 CPU를 얻기까지 기다리는 시간이 늘어 응답 지연으로 이어질 수 있다.

## B1-2에서의 위치

Mission은 특정 프로세스의 CPU 과점유를 관찰하고 `CPU_MAX_OCCUPY` 변경 전후를 비교하도록 한다. 실제 Runtime에서는 대상 process family의 CPU 상승과 애플리케이션 내부 CpuWorker 부하 상승이 함께 관찰됐다.

## 핵심 관계

```text
Runnable Work 증가
→ CPU Utilization 증가
→ Scheduler 경쟁 증가 가능
→ 다른 작업의 대기 증가 가능
→ Latency / Timeout 가능성
```

## 중요한 구분

CPU 사용률이 높다는 사실만으로 모든 지연의 원인을 확정할 수는 없다. PID, 시간 구간, 측정 방법과 함께 해석해야 한다.

## 실제 Runtime에서 배울 점

실제 build에서는 낮은 `CPU_MAX_OCCUPY` 조건에서 cooldown이 반복됐고, 높은 조건에서는 부하가 더 상승한 뒤 보호 위반 로그와 종료가 관찰됐다.

## WHY/HOW Gate

- [ ] CPU 과점유가 지연으로 이어질 수 있는 경로를 설명한다.
- [ ] 높은 CPU만으로 원인을 단정하면 안 되는 이유를 설명한다.
- [ ] `CPU_MAX_OCCUPY`가 실행 동작에 어떤 영향을 주는지 설명한다.

[← Memory Limit](./b1-2-40-020-memory-limit-protection.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Process vs System Load →](./b1-2-40-040-process-vs-system-load.md)
