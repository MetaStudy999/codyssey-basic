---
mission: B1-1
stage: advanced
order: 70
unit: Metrics and Time-Series Data
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# Metric / Time-Series Data — 로그에서 관측 데이터로

## 한 줄 설명

CPU·MEM·DISK처럼 시간에 따라 반복 측정되는 값을 `timestamp + metric + value` 형태로 바라보면 시계열 데이터로 확장할 수 있다.

## B1-1과의 연결

B1-1의 `monitor.log`는 이미 시간에 따른 자원 값을 누적한다. Advanced에서는 이 값을 구조화된 관측 데이터로 바라본다.

```text
Timestamp + Metric Name + Metric Value
```

예시 학습 표현:

```text
2026-08-15T09:00:00 CPU 12.3
2026-08-15T09:00:00 MEM 41.2
2026-08-15T09:00:00 DISK 63
```

이 예시는 심화 설명용이며 B1-1 원본의 고정 로그 형식을 대체하지 않는다.

## 핵심 관계

```text
반복 측정
→ Timestamp 부여
→ Metric 이름/값 구조화
→ 시간축 분석
→ Dashboard / Alerting으로 확장
```

## Advanced Gate

- [ ] Log와 Metric이 겹칠 수 있지만 목적과 구조가 다를 수 있음을 설명한다.
- [ ] Time-Series가 시간축 변화 분석에 적합한 이유를 설명한다.
- [ ] 원본 `monitor.log` 형식을 임의 변경하지 않는다.

[← MAC Security](./b1-1-90-060-selinux-apparmor.md) · [Index](./b1-1-90-000-index.md) · [다음: Prometheus/Grafana →](./b1-1-90-080-prometheus-grafana.md)
