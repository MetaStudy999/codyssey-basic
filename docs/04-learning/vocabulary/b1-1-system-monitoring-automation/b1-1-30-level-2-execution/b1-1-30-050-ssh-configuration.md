---
mission: B1-1
level: 2
order: 50
unit: SSH Configuration
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — SSH Configuration

## 한 줄 설명
SSH 서버의 최종 설정값을 `Port 20022`, `PermitRootLogin no`로 만들고 설정값과 실제 LISTEN을 각각 검증한다.

## 핵심 관계
```text
sshd_config → sshd -t → sshd -T → service/socket → ss LISTEN → 실제 접속
```

## 현재 저장소의 안전한 구현 예시
```text
/etc/ssh/sshd_config.d/99-b1-1.conf
Port 20022
PermitRootLogin no
```

검증:
```bash
sudo sshd -t
sudo sshd -T | grep -E '^(port|permitrootlogin) '
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

목표:
```text
20022 LISTEN = YES
22 LISTEN    = NO
```

Ubuntu 24.04의 `ssh.socket` 관찰은 현재 환경 구현 차이이며 원본 Mission의 공통 요구로 승격하지 않는다.

## 초미니 확인
`sshd -T`에 `port 20022`가 보이면 실제 20022 LISTEN도 자동으로 보장되는가? → **아니다. 실제 소켓 상태를 따로 확인한다.**

## V4 Gate
- [ ] `sshd_config`/drop-in 파일을 찾을 수 있다.
- [ ] `sshd -t`와 `sshd -T`의 역할을 구분한다.
- [ ] 실제 20022 LISTEN과 22 미사용을 확인할 수 있다.

[← SSH Safety](./b1-1-30-040-ssh-safety.md) · [Index](./b1-1-30-000-index.md) · [다음: Firewall →](./b1-1-30-060-firewall.md)
