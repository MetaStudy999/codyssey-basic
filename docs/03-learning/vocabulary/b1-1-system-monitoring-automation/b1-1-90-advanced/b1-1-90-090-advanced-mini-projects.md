---
mission: B1-1
stage: advanced
order: 90
unit: Advanced Mini Projects
source_scope: MIXED_OPTIONAL
visual_learning: DEFERRED
---

# Advanced Mini Projects

## 목적

B1-1에서 배운 운영 자동화 개념을 작은 선택 프로젝트로 확장한다. 필수 미션과 분리된 branch에서 수행하는 것을 권장한다.

## 선택 프로젝트 목록

1. `report.sh`로 CPU/MEM/DISK 평균·최대·최소·표본 수 계산
2. 7일 경과 로그 압축 및 Archive 이동
3. 30일 경과 Archive 삭제
4. `monitor.sh` 결과를 구조화된 Metric 파일로 추가 저장
5. systemd service로 Agent 실행 관리 실험
6. systemd timer와 cron 차이 비교
7. journald에서 SSH/Agent 관련 로그 추적
8. Prometheus textfile exporter 형식으로 Resource Metric 변환
9. Grafana에서 CPU/MEM/DISK Dashboard 설계

## 프로젝트 선택 원칙

```text
필수 B1-1 정상 동작 확보
→ 한 개의 Advanced 목표 선택
→ 기존 필수 경로를 깨지 않게 별도 확장
→ 관찰/Evidence 기록
→ 원복 가능성 확보
```

## 하지 말아야 할 것

- 필수 미션 완료 전에 여러 심화 기술을 동시에 붙이기
- 필수 로그/cron 구조를 삭제하고 심화 도구로 대체하기
- 실제 검증 없이 Architecture만 그려 놓고 완료로 표시하기

## Advanced Gate

- [ ] 선택 프로젝트의 목표를 한 문장으로 정의한다.
- [ ] 필수 요구와 추가 구현을 분리해 설명한다.
- [ ] 변경 전/후 또는 적용 전/후 Evidence를 남긴다.

[← Prometheus/Grafana](./b1-1-90-080-prometheus-grafana.md) · [Index](./b1-1-90-000-index.md) · [다음: Advanced Gate →](./b1-1-90-100-advanced-gate.md)
