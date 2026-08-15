---
mission: B1-1
level: 3
order: 50
unit: SSH LISTEN Firewall
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# SSH 설정, LISTEN, Firewall의 계층

## 한 줄 설명

SSH 설정, 실제 TCP 리스닝, 방화벽 허용, 클라이언트 접속은 서로 다른 상태이므로 각각 검증해야 한다.

## 핵심 흐름

```text
sshd 설정
→ sshd 또는 socket이 20022 LISTEN
→ Firewall이 20022/tcp 허용
→ Client 실제 접속
```

B1-1 설정 목표:

```text
Port 20022
PermitRootLogin no
```

하지만 설정 파일에 적혀 있다는 사실만으로 실제 LISTEN이나 접속 성공을 의미하지 않는다.

## 상태 조합

```text
LISTEN + Firewall block → 외부 접속 실패 가능
Firewall allow + no LISTEN → 받아줄 서비스가 없음
```

현재 구현 저장소의 Ubuntu 24.04 `ssh.socket` 관찰은 환경별 구현 차이이며 원본 미션의 공통 필수 요구가 아니다.

## 초미니 확인

`ufw allow 20022/tcp`만 성공하면 SSH가 정상인가?  
→ 아니다. 실제 20022 LISTEN과 접속도 확인해야 한다.

## WHY/HOW Gate

- [ ] 설정 → LISTEN → Firewall → 접속의 네 단계를 설명할 수 있다.
- [ ] 설정값과 런타임 상태를 구분할 수 있다.

[← Least Privilege](./b1-1-40-040-least-privilege.md) · [Index](./b1-1-40-000-index.md) · [다음 → Binding & Readiness](./b1-1-40-060-binding-service-readiness.md)
