---
mission: B1-1
level: 4
order: 30
unit: SSH Configuration Failure
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# SSH Configuration Failure

## 한 줄 설명

`sshd -t`가 실패하면 서비스를 재시작하지 않고 **문법·중복 설정·런타임 디렉터리 관리 주체부터 확인**한다.

## B1-1 목표

```text
Port 20022
PermitRootLogin no
```

## 확인 순서

```bash
sudo sshd -t
sudo cat /etc/ssh/sshd_config.d/99-b1-1.conf
sudo sshd -T | grep -E '^(port|permitrootlogin) '
```

현재 Ubuntu 24.04 실습에서 `/run/sshd` 관련 오류가 관찰된 사례가 있었으므로, 임의로 디렉터리를 영구 생성하기보다 systemd service unit이 해당 런타임 디렉터리를 관리하는지 먼저 확인한다.

```bash
systemctl status ssh.service --no-pager
systemctl cat ssh.service
```

이 사례는 현재 실습 환경 관찰값이며 모든 Linux의 공통 요구가 아니다.

## Gate

- [ ] `sshd -t` 실패 상태에서 restart를 하지 않는 이유를 설명할 수 있다.
- [ ] 설정 파일의 값과 최종 해석값을 구분한다.
- [ ] 환경별 systemd 동작을 원본 미션 요구로 일반화하지 않는다.

[← Permission Denied](./b1-1-50-020-permission-denied.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: SSH LISTEN / Firewall →](./b1-1-50-040-ssh-listen-firewall.md)
