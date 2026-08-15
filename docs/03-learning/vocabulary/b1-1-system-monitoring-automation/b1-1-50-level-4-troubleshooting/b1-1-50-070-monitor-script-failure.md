---
mission: B1-1
level: 4
order: 70
unit: monitor.sh Failure
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# monitor.sh Failure

## 한 줄 설명

`monitor.sh` 실패는 **process 검색, 15034 health, 환경 변수, 로그 쓰기 권한**으로 나눠 진단한다.

## Process 검색 실패

```bash
pgrep -af '<실제 앱 파일명>'
```

실제 파일명과 현재 구현의 `AGENT_PROCESS_PATTERN`이 일치하는지 확인한다.

## 15034 Health 실패

```bash
ss -lntH | grep ':15034\b' || true
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printf "%s\n" "$AGENT_PORT"'
```

## 로그 쓰기 실패

```bash
id agent-admin
ls -ld /var/log/agent-app
getfacl /var/log/agent-app
ls -l /var/log/agent-app/monitor.log 2>/dev/null || true
```

원본의 process/port Health 실패는 `exit 1` 요구와 연결된다. 현재 구현은 실행 환경 자체 오류를 `exit 2`로 더 구분할 수 있으므로 원본 필수와 구현 선택을 구별한다.

## Gate

- [ ] Agent 장애와 monitor 검색 패턴 오류를 구분한다.
- [ ] `AGENT_PORT` 값과 실제 LISTEN을 함께 본다.
- [ ] 로그 권한 오류를 `777`로 덮지 않는다.

[← Process / Port](./b1-1-50-060-process-port-conflict.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: cron →](./b1-1-50-080-cron-failure.md)
