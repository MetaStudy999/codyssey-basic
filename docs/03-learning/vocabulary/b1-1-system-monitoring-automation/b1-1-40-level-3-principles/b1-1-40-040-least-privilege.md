---
mission: B1-1
level: 3
order: 40
unit: Least Privilege and Service Account Separation
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# 최소 권한과 계정 분리 (Least Privilege)

## 한 줄 설명

각 계정과 그룹에는 업무 수행에 필요한 최소 권한만 주고, 운영·개발·시험 역할을 분리한다.

## B1-1 역할

```text
agent-admin → 운영 / cron 실행
agent-dev   → 개발 / monitor.sh 소유
agent-test  → QA / 권한 시험

agent-common → admin + dev + test
agent-core   → admin + dev
```

`upload_files`는 common이 사용하지만 `api_keys`와 `/var/log/agent-app`은 core에만 열어 둔다.

## 핵심 관계

```text
Role Separation
→ Group Boundary
→ Directory Boundary
→ Reduced Exposure
```

## 왜 필요한가

테스트 계정이 핵심 키나 운영 로그까지 수정할 수 있다면 실수나 침해의 영향 범위가 커진다.

## 초미니 확인

왜 `agent-test`가 `agent-core`에 들어가면 안 되는가?  
→ 핵심 자원에 불필요한 접근 권한이 생기기 때문이다.

## WHY/HOW Gate

- [ ] common/core 그룹의 차이를 최소 권한 관점에서 설명할 수 있다.
- [ ] Root가 아닌 일반 사용자 실행의 의미를 설명할 수 있다.

[← DAC/ACL/setgid](./b1-1-40-030-dac-acl-setgid.md) · [Index](./b1-1-40-000-index.md) · [다음 → SSH/LISTEN/Firewall](./b1-1-40-050-ssh-listen-firewall.md)
