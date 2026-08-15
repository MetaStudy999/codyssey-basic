---
mission: B1-1
level: 2
order: 40
unit: SSH Safety
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — SSH Safety Before Change

## 한 줄 설명
SSH 포트를 바꾸기 전에 현재 연결과 복구 경로를 확보해 원격 접속을 스스로 끊지 않도록 하는 단계다.

## 원본 목표
```text
SSH TCP 20022
PermitRootLogin no
```

## 핵심 관계
```text
현재 세션 확인 → 복구 경로 확보 → 새 포트 선허용 → 설정 백업 → 변경
```

## 핵심 확인
```bash
printf 'SSH_CONNECTION=%s\nSSH_CLIENT=%s\n' "$SSH_CONNECTION" "$SSH_CLIENT"
sudo ss -lntp | grep -E ':(22|20022)\b' || true
sudo ufw status verbose
```

UFW가 이미 active라면 SSH 설정 변경 전에 `20022/tcp`를 먼저 허용한다. 설정 파일은 변경 전에 백업한다.

## 초미니 확인
현재 SSH 세션이 하나뿐인데 새 포트 검증 없이 기존 연결을 닫아도 되는가? → **아니다.**

## V4 Gate
- [ ] 현재 SSH 연결 여부를 확인할 수 있다.
- [ ] 22/20022 LISTEN 상태를 확인할 수 있다.
- [ ] UFW 활성 상태에 따라 새 포트 선허용 필요성을 판단할 수 있다.
- [ ] 원본 설정 백업을 확인할 수 있다.

[← Permissions & ACL](./b1-1-30-030-permissions-acl.md) · [Index](./b1-1-30-000-index.md) · [다음: SSH Configuration →](./b1-1-30-050-ssh-configuration.md)
