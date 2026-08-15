---
mission: B1-1
level: 5
order: 60
unit: Resource Monitoring Evaluation
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# CPU / Memory / Disk 관제 평가 설명

## WHAT

`monitor.sh`가 CPU, Memory, root filesystem Disk 사용률을 같은 형식으로 주기 기록한다.

## HOW

현재 구현 기준:

```text
CPU    → /proc/stat 두 시점 counter 차이
Memory → (MemTotal - MemAvailable) / MemTotal × 100
Disk   → df -P / 의 Used %
```

## WHY

한 번의 숫자보다 같은 계산 방식으로 반복 수집한 값이 추적과 비교에 유리하다. 자원 수치는 Health와 별도 운영 위험 신호로 취급한다.

## 임계값

```text
CPU > 20%
MEM > 10%
DISK > 80%
```

초과 시 WARNING이며 즉시 Health failure로 보지 않는다.

## 예상 꼬리질문

- CPU가 왜 두 snapshot이 필요한가?
- `MemFree`보다 `MemAvailable`을 쓰는 이유를 현재 구현 기준으로 설명할 수 있는가?
- 왜 Disk는 `/`를 보는가?

## V5 Gate

- [ ] 세 자원의 입력값과 계산 대상을 말할 수 있다.
- [ ] 임계값은 원본 요구값이며 임의 운영 최적값이라고 주장하지 않는다.

[← 이전](./b1-1-60-050-monitor-health-evaluation.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-070-cron-log-evaluation.md)
