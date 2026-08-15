---
mission: B1-1
level: 2
order: 30
unit: Permissions and ACL
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — Permissions & ACL

## 한 줄 설명
디렉터리 소유권·mode·ACL을 조합해 `agent-common`과 `agent-core`의 접근 범위를 실제 파일 시스템에 적용한다.

## 핵심 관계
```text
Owner/Group → chmod/chown → ACL → 실제 허용/차단 시험
```

## 재현용 기준 경로
```bash
export AGENT_HOME=/home/agent-admin/agent-app
```

핵심 구성:
```text
upload_files       → agent-common R/W
api_keys           → agent-core only R/W
/var/log/agent-app → agent-core only R/W
monitor.sh/bin     → agent-dev:agent-core
```

대표 명령:
```bash
sudo setfacl -m g:agent-common:--x /home/agent-admin
sudo chown agent-admin:agent-common "$AGENT_HOME"
sudo chmod 2750 "$AGENT_HOME"

sudo chown agent-admin:agent-common "$AGENT_HOME/upload_files"
sudo chmod 2770 "$AGENT_HOME/upload_files"

sudo chown agent-admin:agent-core "$AGENT_HOME/api_keys"
sudo chmod 2770 "$AGENT_HOME/api_keys"

sudo chown agent-admin:agent-core /var/log/agent-app
sudo chmod 2770 /var/log/agent-app
```

검증은 `ls -ld`, `getfacl`뿐 아니라 `agent-test`로 실제 쓰기 허용/차단을 시험한다.

## 초미니 확인
`agent-test`가 `upload_files`에는 쓸 수 있지만 `api_keys`와 `/var/log/agent-app`에는 쓸 수 없어야 한다.

## V4 Gate
- [ ] `chmod`, `chown`, `setfacl`, `getfacl`의 실제 위치를 찾을 수 있다.
- [ ] `2750/2770`을 명령과 결과에서 식별할 수 있다.
- [ ] 허용/차단 시험 결과로 권한을 검증할 수 있다.

[← Users & Groups](./b1-1-30-020-users-groups.md) · [Index](./b1-1-30-000-index.md) · [다음: SSH Safety →](./b1-1-30-040-ssh-safety.md)
