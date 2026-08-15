---
mission: B1-1
level: 3
order: 70
unit: Preflight and Failure Policy
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# Preflight, Fail-fast, Warning-and-Continue

## 한 줄 설명

변경 전에는 현재 상태를 관찰하고, 서비스 핵심 Health 실패는 즉시 실패시키며, 자원 경고는 기록을 계속하도록 심각도를 구분한다.

## Preflight 원리

```text
Observe first
→ Change one layer
→ Verify immediately
```

현재 구현의 `scripts/preflight.sh`는 읽기 전용으로 OS, systemd, sudo, sshd, UFW, cron, ACL, `ss`, `logrotate` 등 기본 조건을 확인한다.

## 실패 정책

```text
Agent process 없음
15034 LISTEN 없음
→ Health 실패 → exit 1
```

반면:

```text
Firewall inactive
CPU > 20%
MEM > 10%
DISK > 80%
→ WARNING → 상태 수집·로그 계속
```

현재 구현에서 환경 자체 오류를 `exit 2`로 구분하는 것은 구현 보완이며 원본의 process/port 실패 `exit 1` 요구를 대체하지 않는다.

## 왜 필요한가

모든 이상을 동일하게 처리하면 중요한 Health 실패와 운영 경고가 섞여 판단이 어려워진다.

## WHY/HOW Gate

- [ ] Preflight의 목적을 설명할 수 있다.
- [ ] `exit 1` Health 실패와 WARNING의 차이를 설명할 수 있다.

[← Binding & Readiness](./b1-1-40-060-binding-service-readiness.md) · [Index](./b1-1-40-000-index.md) · [다음 → Resource Sampling](./b1-1-40-080-resource-sampling.md)
