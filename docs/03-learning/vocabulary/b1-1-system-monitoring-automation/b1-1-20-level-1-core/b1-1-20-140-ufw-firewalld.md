---
mission: B1-1
stage: top-core
order: 140
term: UFW / firewalld
lifecycle: NEW
---
# B1-1 — UFW / firewalld

## 한 줄 설명
Linux에서 방화벽 정책과 규칙을 관리하기 위한 대표 도구들이다.

## B1-1에서의 위치
원본은 UFW 또는 firewalld 중 하나가 활성 상태이고 필요한 TCP 포트만 허용되는지를 요구한다.

## 핵심 관계
`Firewall = 보안 기능/정책`, `UFW·firewalld = 그 정책을 관리하는 도구`.

## 초미니 확인
현재 시스템이 어느 방화벽 관리 도구를 사용하는지 먼저 확인해야 하는 이유를 설명한다.

## Gate
- [ ] V2: Firewall과 UFW/firewalld의 차이를 설명한다.
- [ ] V3: 규칙 설정 후 실제 상태 검증이 필요한 이유를 말한다.

[← Firewall](./b1-1-20-130-firewall.md) · [Index](./b1-1-20-000-index.md) · [다음: Process →](./b1-1-20-150-process.md)
