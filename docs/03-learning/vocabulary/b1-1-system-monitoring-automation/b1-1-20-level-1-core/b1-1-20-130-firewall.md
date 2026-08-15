---
mission: B1-1
stage: top-core
order: 130
term: Firewall
lifecycle: NEW
---
# B1-1 — 방화벽 (Firewall)

## 한 줄 설명
네트워크 트래픽을 규칙에 따라 허용하거나 차단하는 보안 경계다.

## B1-1에서의 위치
인바운드에서 필요한 `20022/tcp`, `15034/tcp`만 허용하는 구성이 핵심이다.

## 핵심 관계
`Port LISTEN ≠ 외부 접근 허용`; Firewall은 서비스까지 트래픽이 통과할지를 결정한다.

## 초미니 확인
Agent가 15034에서 LISTEN 중인데 외부 접속이 안 될 때 Firewall을 확인해야 하는 이유를 말한다.

## Gate
- [ ] V2: Firewall의 역할을 설명한다.
- [ ] V3: LISTEN과 Firewall의 차이를 설명한다.

[← TCP](./b1-1-20-120-tcp.md) · [Index](./b1-1-20-000-index.md) · [다음: UFW/firewalld →](./b1-1-20-140-ufw-firewalld.md)
