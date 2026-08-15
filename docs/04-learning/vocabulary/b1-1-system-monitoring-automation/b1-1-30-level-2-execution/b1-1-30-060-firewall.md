---
mission: B1-1
level: 2
order: 60
unit: Firewall
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — Firewall

## 한 줄 설명
외부 인바운드는 B1-1에 필요한 TCP `20022`와 `15034`만 허용하도록 방화벽 정책을 검증한다.

## 핵심 관계
```text
Service LISTEN ≠ 외부 접근 가능
LISTEN + Firewall ALLOW + 네트워크 경로 → 접근 가능성
```

UFW 구현 예시:
```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 20022/tcp
sudo ufw allow 15034/tcp
sudo ufw enable
sudo ufw status verbose
```

목표:
```text
Status: active
Default: deny (incoming)
20022/tcp ALLOW
15034/tcp ALLOW
```

기존 필수 서비스가 있는 공유 환경에서는 규칙을 무조건 삭제하지 않고 미션용 격리 환경인지 먼저 확인한다.

## 초미니 확인
15034가 LISTEN 중인데 UFW에서 차단되어 있으면 외부 접근을 정상으로 볼 수 있는가? → **아니다.**

## V4 Gate
- [ ] UFW/firewalld 상태를 확인할 수 있다.
- [ ] 20022/15034 허용 규칙을 찾을 수 있다.
- [ ] 방화벽 활성 상태와 서비스 LISTEN을 따로 검증할 수 있다.

[← SSH Configuration](./b1-1-30-050-ssh-configuration.md) · [Index](./b1-1-30-000-index.md) · [다음: Agent Environment & Key →](./b1-1-30-070-agent-environment-key.md)
