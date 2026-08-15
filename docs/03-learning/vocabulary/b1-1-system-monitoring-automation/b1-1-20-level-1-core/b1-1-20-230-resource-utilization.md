---
mission: B1-1
stage: top-core
order: 230
term: CPU / Memory / Disk Utilization
lifecycle: NEW
---
# B1-1 — CPU·메모리·디스크 사용률 (CPU / Memory / Disk Utilization)

## 한 줄 설명
서버의 계산 자원, 작업 메모리, 저장 공간이 얼마나 사용되고 있는지를 나타내는 상태 지표다.

## B1-1에서의 위치
`monitor.sh`는 CPU `>20%`, MEM `>10%`, DISK `>80%`이면 WARNING을 남긴다.

## 핵심 관계
`Metric 수집 → Threshold 비교 → Warning → Log 기록`.

## 초미니 확인
자원 임계값 초과가 즉시 Process Health 실패와 같은 의미가 아닌 이유를 설명한다.

## Gate
- [ ] V2: 세 자원 지표의 차이를 설명한다.
- [ ] V3: Utilization·Threshold·Warning 관계를 말한다.

[← Health Check](./b1-1-20-220-health-check.md) · [Index](./b1-1-20-000-index.md) · [다음: Log →](./b1-1-20-240-log.md)
