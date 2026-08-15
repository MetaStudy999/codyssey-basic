---
mission: B1-1
level: 4
order: 50
unit: Agent Startup Failure
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Agent Startup Failure

## 한 줄 설명

`Agent READY`가 없으면 **실행 사용자 → 환경 변수 → key → 경로 권한 → 최초 Boot 실패 단계 → process → 15034 LISTEN** 순서로 좁힌다.

## B1-1 핵심 확인

원본 필수 환경 변수:

```text
AGENT_HOME
AGENT_PORT
AGENT_UPLOAD_DIR
AGENT_KEY_PATH
AGENT_LOG_DIR
```

확인 예시:

```bash
id agent-admin
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printenv | grep "^AGENT_" | sort'
sudo stat /home/agent-admin/agent-app/api_keys/t_secret.key
pgrep -af '<실제 제공 앱 파일명>'
sudo ss -lntp | grep ':15034\b' || true
```

키 값 자체는 Evidence에 출력하지 않는다.

현재 구현의 `AGENT_PROCESS_PATTERN`은 원본 필수 5개 변수와 구분한다. 실제 제공 앱 파일명이 다를 때 현재 `monitor.sh`의 process 검색을 맞추기 위한 구현 보완값이다.

## Gate

- [ ] Boot Sequence의 최초 실패 지점을 기준으로 원인을 좁힌다.
- [ ] process 존재와 `Agent READY`를 같은 상태로 보지 않는다.
- [ ] secret 값을 노출하지 않고 존재·권한만 검증한다.

[← SSH LISTEN / Firewall](./b1-1-50-040-ssh-listen-firewall.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: Process / Port →](./b1-1-50-060-process-port-conflict.md)
