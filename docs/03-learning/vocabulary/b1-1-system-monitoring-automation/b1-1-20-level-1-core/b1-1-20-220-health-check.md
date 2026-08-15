---
mission: B1-1
stage: top-core
order: 220
term: Health Check
lifecycle: NEW
---
# B1-1 — 상태 점검 (Health Check)

## 한 줄 설명
서비스가 단순히 실행 중인지가 아니라 실제 사용 가능한 핵심 상태인지 확인하는 검사다.

## B1-1에서의 위치
Agent Process와 TCP 15034 LISTEN을 모두 확인하며 실패하면 `exit 1`로 처리한다.

## 핵심 관계
`Process Check + Port Check → Service Health 판단`.

## 초미니 확인
CPU 경고와 Process 미실행을 같은 방식으로 처리하지 않는 이유를 설명한다.

## Gate
- [ ] V2: Health Check의 목적을 설명한다.
- [ ] V3: Fail-fast와 Warning의 차이를 B1-1 사례로 말한다.

[← System Monitoring](./b1-1-20-210-system-monitoring.md) · [Index](./b1-1-20-000-index.md) · [다음: Resource Utilization →](./b1-1-20-230-resource-utilization.md)
