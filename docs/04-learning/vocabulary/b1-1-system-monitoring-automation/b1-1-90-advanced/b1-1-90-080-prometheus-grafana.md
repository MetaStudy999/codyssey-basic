---
mission: B1-1
stage: advanced
order: 80
unit: Prometheus and Grafana
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# Prometheus / Grafana — 관제 확장

## 한 줄 설명

Prometheus는 Metric 수집·조회로, Grafana는 수집된 데이터를 Dashboard/Graph로 표현하는 방향으로 B1-1 관제를 확장할 수 있다.

## B1-1과의 연결

```text
monitor.sh
→ CPU / MEM / DISK
→ 구조화 Metric
→ Prometheus
→ Grafana
```

## 핵심 구분

- Prometheus: Metric 수집·저장·조회 중심
- Grafana: 데이터 시각화와 Dashboard 중심

## 학습 원칙

B1-1에서는 먼저 `Bash + file log + cron + logrotate` 흐름을 이해한다. Prometheus/Grafana를 먼저 도입해 필수 원리를 가리지 않는다.

## 선택 확장

`monitor.sh` 출력을 별도 파일로 변환하여 Prometheus textfile exporter 형태를 연구할 수 있다. 이는 별도 심화 프로젝트다.

## Advanced Gate

- [ ] 수집과 시각화의 역할을 구분한다.
- [ ] Bash 기반 관제에서 Metric 플랫폼으로 확장되는 흐름을 설명한다.
- [ ] Prometheus/Grafana가 B1-1 필수 산출물이 아님을 명확히 말할 수 있다.

[← Metrics](./b1-1-90-070-metrics-time-series.md) · [Index](./b1-1-90-000-index.md) · [다음: Mini Projects →](./b1-1-90-090-advanced-mini-projects.md)
