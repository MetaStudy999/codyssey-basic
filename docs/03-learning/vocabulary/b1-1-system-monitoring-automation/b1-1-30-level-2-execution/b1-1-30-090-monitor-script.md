---
mission: B1-1
level: 2
order: 90
unit: monitor.sh
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — monitor.sh

## 한 줄 설명
Agent process·포트·방화벽·CPU·메모리·디스크를 확인하고 결과를 로그에 남기는 B1-1 자동 관제 스크립트를 배치·검증한다.

## 원본 핵심값
```text
path   /home/agent-admin/agent-app/bin/monitor.sh
owner  agent-dev
group  agent-core
mode   750
CPU    >20% warning
MEM    >10% warning
DISK   >80% warning
log    /var/log/agent-app/monitor.log
```

## 핵심 관계
```text
Process + 15034 LISTEN → Health
Resource thresholds → Warning
Result → append log
Health failure → exit 1
```

대표 검증:
```bash
bash -n scripts/monitor.sh
stat -c 'owner=%U group=%G mode=%a path=%n' /home/agent-admin/agent-app/bin/monitor.sh
sudo -u agent-admin /home/agent-admin/agent-app/bin/monitor.sh
echo $?
tail -n 5 /var/log/agent-app/monitor.log
```

정상 Health의 목표 종료 코드는 `0`; process 또는 15034 LISTEN 실패는 원본 요구에 따라 `exit 1`이다. resource threshold 초과는 warning-only다.

## 초미니 확인
CPU가 25%라면 반드시 Health 실패로 `exit 1`이어야 하는가? → **아니다. CPU 임계값은 warning이다.**

## V4 Gate
- [ ] `monitor.sh`의 owner/group/mode를 찾을 수 있다.
- [ ] process/port Health와 resource warning을 구분한다.
- [ ] 종료 코드와 실제 로그 라인을 확인할 수 있다.

[← Agent Runtime](./b1-1-30-080-agent-runtime.md) · [Index](./b1-1-30-000-index.md) · [다음: cron →](./b1-1-30-100-cron.md)
