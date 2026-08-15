---
mission: B1-1
level: 4
order: 40
unit: SSH LISTEN and Firewall
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# SSH 20022 LISTEN / Firewall 진단

## 한 줄 설명

`Port 20022` 설정, 실제 LISTEN, UFW 허용, 외부 접속은 서로 다른 검증 단계다.

## 핵심 관계

```text
sshd 설정
→ effective config
→ service/socket LISTEN
→ UFW 허용
→ 외부 네트워크 경로
→ 실제 접속
```

## 확인

```bash
sudo sshd -t
sudo sshd -T | grep -E '^(port|permitrootlogin) '
systemctl status ssh.service --no-pager || true
systemctl status ssh.socket --no-pager || true
sudo ss -lntp | grep -E ':(22|20022)\b' || true
sudo ufw status verbose
```

`20022`가 LISTEN하지만 외부 접속이 실패하면 UFW뿐 아니라 클라우드 Security Group/NAT, 잘못된 주소, 외부 경로 문제도 분리한다.

## Gate

- [ ] 설정값과 LISTEN 상태를 별도 증거로 확인한다.
- [ ] LISTEN 성공을 곧바로 외부 접속 성공으로 간주하지 않는다.
- [ ] `22 LISTEN 없음`, `20022 LISTEN 있음`을 실제 상태로 검증한다.

[← SSH Configuration](./b1-1-50-030-ssh-configuration-failure.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: Agent Startup →](./b1-1-50-050-agent-startup-failure.md)
