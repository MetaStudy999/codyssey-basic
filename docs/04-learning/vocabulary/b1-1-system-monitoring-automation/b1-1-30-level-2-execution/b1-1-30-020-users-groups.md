---
mission: B1-1
level: 2
order: 20
unit: Users and Groups
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — Users & Groups

## 한 줄 설명
B1-1의 역할 분리를 사용자 계정과 그룹 멤버십으로 실제 시스템에 표현하는 단계다.

## 원본 기준
```text
agent-admin → agent-common + agent-core
agent-dev   → agent-common + agent-core
agent-test  → agent-common만
```

## 핵심 관계
```text
User Creation → Group Creation → Membership → id 검증
```

## 핵심 명령
```bash
getent group agent-common >/dev/null || sudo groupadd agent-common
getent group agent-core   >/dev/null || sudo groupadd agent-core

for user in agent-admin agent-dev agent-test; do
  id "$user" >/dev/null 2>&1 || sudo useradd -m -s /bin/bash "$user"
done

sudo usermod -aG agent-common agent-admin
sudo usermod -aG agent-common agent-dev
sudo usermod -aG agent-common agent-test
sudo usermod -aG agent-core agent-admin
sudo usermod -aG agent-core agent-dev

id agent-admin
id agent-dev
id agent-test
```

`agent-test`가 실수로 `agent-core`에 들어갔다면 제거 후 다시 `id`로 검증한다.

## 초미니 확인
`agent-test`가 `agent-core`에 포함되어 있으면 정상인가? → **아니다.**

## V4 Gate
- [ ] 세 계정과 두 그룹을 실제 시스템에서 찾을 수 있다.
- [ ] 그룹 멤버십을 `id`로 검증할 수 있다.
- [ ] `agent-test`의 core 접근을 제거할 수 있다.

[← Preflight](./b1-1-30-010-preflight.md) · [Index](./b1-1-30-000-index.md) · [다음: Permissions & ACL →](./b1-1-30-030-permissions-acl.md)
