---
mission: B1-2
level: 1
order: 90
term: CPU Spike
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---

# CPU 급상승 (CPU Spike)

## 한 줄 설명
CPU 사용률이 짧은 시간에 급격히 높아지는 현상이다.

## B1-2에서의 위치
관제와 `top`/`ps`로 특정 프로세스 급상승 구간을 식별한다.

## 핵심 관계
`CPU Spike → High CPU → Latency / Watchdog`

## 초미니 확인
시스템 전체 부하와 특정 프로세스 급상승을 구분한다.

## V2/V3 Gate
- [ ] CPU Spike의 시간 변화 특성을 설명한다.

[← 이전](./b1-2-20-080-oom.md) · [Index](./b1-2-20-000-index.md) · [다음 →](./b1-2-20-100-high-cpu.md)
