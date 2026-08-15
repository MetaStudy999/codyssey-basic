---
mission: B1-1
level: 4
order: 90
unit: logrotate Failure
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# logrotate Failure

## 한 줄 설명

logrotate 오류는 **디렉터리 권한, `su`, 새 로그 파일의 owner/group/mode, 회전 후 monitor 쓰기 가능성**을 함께 본다.

## B1-1 정책

```text
size 10M
rotate 10
```

현재 구현 예시:

```text
su agent-admin agent-core
create 0640 agent-admin agent-core
```

## 확인

```bash
sudo logrotate -d /etc/logrotate.d/agent-monitor
ls -ld /var/log/agent-app
ls -l /var/log/agent-app/monitor.log
getfacl /var/log/agent-app
```

`insecure permissions`가 보이면 group writable 디렉터리와 `su` 설정의 관계를 확인한다.

회전 후 새 `monitor.log`가 생성되더라도 `agent-admin` cron이 계속 append할 수 있어야 한다.

## Gate

- [ ] 10MB/10개 정책을 확인한다.
- [ ] 회전 성공과 이후 쓰기 가능성을 별도 검증한다.
- [ ] 강제 회전 전에 실제 로그 보존 영향을 고려한다.

[← cron](./b1-1-50-080-cron-failure.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: Resource Warning / Log Growth →](./b1-1-50-100-resource-warning-log-growth.md)
