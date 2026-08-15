---
mission: B1-2
stage: principles
level: 3
order: 40
unit: Per-process Load versus System Load
gate: WHY-HOW
visual_learning: DEFERRED
---

# 대상 프로세스 부하와 시스템 전체 부하 — Per-process vs System Load

## 한 줄 설명

장애 원인을 특정 애플리케이션에 연결하려면 시스템 전체 CPU가 아니라 **대상 PID가 실제로 어떤 부하를 만드는지** 분리해서 봐야 한다.

## B1-2에서의 위치

실제 CPU Evidence는 `ss`로 tcp/15034 listener PID를 찾고, `ps`, `/proc/<pid>/stat`, 애플리케이션 로그를 함께 사용해 대상 process family의 부하를 추적했다.

## 핵심 관계

```text
System CPU
≠ 특정 Process CPU

Port / PID 식별
→ Process-specific telemetry
→ Application telemetry
→ 시간대 대조
```

## 측정값이 서로 다를 수 있는 이유

실제 보고서에서 OS interval CPU와 애플리케이션의 `Current Load` 값은 동일하지 않았다. 측정 구간과 정의가 다르므로 숫자가 같아야 한다고 가정하지 않는다. 대신 **상승 방향과 시점, 대상 PID**를 함께 본다.

## 왜 중요한가

시스템 전체가 바쁘다는 이유만으로 특정 앱을 원인으로 지목하면 인과관계가 약하다. 대상 프로세스 Evidence가 있어야 한다.

## WHY/HOW Gate

- [ ] 시스템 CPU와 프로세스 CPU를 구분한다.
- [ ] 서로 다른 도구의 CPU 숫자가 달라도 함께 사용할 수 있는 이유를 설명한다.
- [ ] PID와 타임스탬프가 왜 Evidence에 필요한지 설명한다.

[← CPU / Latency](./b1-2-40-030-cpu-utilization-latency.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Process / Thread →](./b1-2-40-050-process-thread-model.md)
