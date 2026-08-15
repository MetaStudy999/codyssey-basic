---
mission: B1-1
level: 4
order: 60
unit: Process and Port Conflict
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Process / Port Conflict 진단

## 한 줄 설명

Process가 존재해도 `15034 LISTEN`이 없으면 서비스 준비 완료가 아니며, port 점유 충돌도 별도로 확인해야 한다.

## 가능한 원인

```text
초기화 중 bind 전 실패
AGENT_PORT 오류
15034를 다른 process가 점유
다른 주소/포트에 bind
key/권한/환경 변수 오류
```

## 확인

```bash
pgrep -af '<실제 제공 앱 파일명>'
sudo ss -lntp | grep ':15034\b' || true
sudo ss -lntp
```

`Address already in use`가 보이면 어떤 process가 15034를 점유하는지 먼저 확인하고, 무작정 kill하지 않는다.

## 핵심 관계

```text
Process exists ≠ Service ready
Service ready → 초기화 성공 + Port bind + LISTEN
```

## Gate

- [ ] process와 LISTEN을 별도 증거로 확인한다.
- [ ] port 충돌 시 점유 process의 정체를 먼저 확인한다.
- [ ] 다른 필수 서비스를 실수로 종료하지 않는다.

[← Agent Startup](./b1-1-50-050-agent-startup-failure.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: monitor.sh →](./b1-1-50-070-monitor-script-failure.md)
