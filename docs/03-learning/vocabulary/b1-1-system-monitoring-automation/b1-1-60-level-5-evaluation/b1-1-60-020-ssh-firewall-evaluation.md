---
mission: B1-1
level: 5
order: 20
unit: SSH and Firewall Evaluation
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# SSH 20022 / Root 차단 / Firewall 평가 설명

## 핵심 고정값

```text
SSH TCP 20022
PermitRootLogin no
Firewall active
20022/tcp ALLOW
15034/tcp ALLOW
```

## WHAT / WHY

SSH 기본 접근을 20022로 구성하고 Root 원격 로그인을 차단하며, 필요한 두 TCP 포트만 inbound 허용한다. 목적은 미션 요구 충족과 불필요한 원격 노출 감소다.

## HOW

현재 구현은 sshd drop-in과 UFW를 사용한다. Ubuntu 24.04의 `ssh.socket` 관찰은 환경별 구현 차이이며 원본 필수 요구가 아니다.

## PROOF

```bash
sudo sshd -T | grep -E '^(port|permitrootlogin) '
sudo ss -lntp | grep -E ':(22|20022)\b' || true
sudo ufw status verbose
```

가능하면 별도 클라이언트의 실제 `ssh -p 20022` 접속도 제시한다.

## 예상 꼬리질문

- 왜 포트 변경만으로 보안이 충분하지 않은가?
- Firewall allow인데 접속이 안 되면 무엇을 보는가?
- 설정 파일과 실제 LISTEN이 다른 이유는 무엇인가?

## V5 Gate

- [ ] 설정 → LISTEN → Firewall → 실제 접속을 구분해 설명한다.
- [ ] 22가 남아 있는지 함께 검증하는 이유를 설명한다.

[← 이전](./b1-1-60-010-answer-framework.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-030-users-permissions-evaluation.md)
