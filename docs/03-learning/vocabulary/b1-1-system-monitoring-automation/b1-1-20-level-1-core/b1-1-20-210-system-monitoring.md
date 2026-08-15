---
mission: B1-1
stage: top-core
order: 210
term: System Monitoring
lifecycle: NEW
---
# B1-1 — 시스템 관제 (System Monitoring)

## 한 줄 설명
시스템과 서비스 상태를 반복해서 측정하고 기록하여 정상 여부와 이상 징후를 확인하는 운영 활동이다.

## B1-1에서의 위치
`monitor.sh`가 Process, Port, Firewall, CPU, Memory, Disk를 점검하고 로그를 남긴다.

## 핵심 관계
`측정 → 판정 → 기록 → 반복 → 보존`이 관제 흐름을 만든다.

## 초미니 확인
한 번 `ss`를 실행하는 것과 지속적인 시스템 관제가 어떻게 다른지 설명한다.

## Gate
- [ ] V2: System Monitoring을 한 문장으로 설명한다.
- [ ] V3: Monitoring·Log·cron·Rotation의 관계를 말한다.

[← Bash](./b1-1-20-200-bash.md) · [Index](./b1-1-20-000-index.md) · [다음: Health Check →](./b1-1-20-220-health-check.md)
