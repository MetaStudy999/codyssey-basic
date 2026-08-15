---
mission: B1-1
level: 4
order: 80
unit: cron Failure
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# 수동 성공, cron 실패

## 한 줄 설명

터미널에서 성공한 `monitor.sh`가 cron에서 실패하면 **PATH, 환경 변수, 실행 계정, cron service, 실행 권한** 차이를 먼저 확인한다.

## 확인

```bash
sudo -u agent-admin crontab -l
systemctl status cron --no-pager
```

최소 환경 시험:

```bash
sudo -u agent-admin env -i \
  HOME=/home/agent-admin \
  USER=agent-admin \
  LOGNAME=agent-admin \
  SHELL=/bin/bash \
  PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
  /home/agent-admin/agent-app/bin/monitor.sh
```

B1-1의 cron 실행자는 `agent-admin`, 주기는 매분이다.

## 최종 재검증

등록만 확인하지 않고 1~2분 후 `/var/log/agent-app/monitor.log`가 실제 증가했는지 확인한다.

## Gate

- [ ] interactive shell과 cron 환경 차이를 설명할 수 있다.
- [ ] crontab 존재와 실제 자동 실행을 구분한다.
- [ ] 로그 증가를 최종 Evidence로 확인한다.

[← monitor.sh](./b1-1-50-070-monitor-script-failure.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: logrotate →](./b1-1-50-090-logrotate-failure.md)
