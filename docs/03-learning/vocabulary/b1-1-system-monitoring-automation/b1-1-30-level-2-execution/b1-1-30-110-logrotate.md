---
mission: B1-1
level: 2
order: 110
unit: logrotate
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — logrotate

## 한 줄 설명
`monitor.log`가 무한히 커지지 않도록 `10MB / 10개` 보관 정책을 설정하고 문법과 소유권을 검증한다.

## 원본 핵심
```text
max size = 10MB
retention = 10 files
```

현재 구현 예시:
```text
/var/log/agent-app/monitor.log {
    size 10M
    rotate 10
    compress
    missingok
    notifempty
    su agent-admin agent-core
    create 0640 agent-admin agent-core
}
```

## 핵심 관계
```text
monitor.log 성장 → size 10M → rotate → 보관 세대 10개 → compress
```

설정 확인:
```bash
sudo logrotate -d /etc/logrotate.d/agent-monitor
```

강제 회전은 로그 보존 영향이 있으므로 목적과 환경을 확인한 뒤 수행한다.

## 초미니 확인
`rotate 10`은 로그 파일 하나가 10MB라는 뜻인가? → **아니다. `size 10M`은 회전 기준, `rotate 10`은 보관 세대 수다.**

## V4 Gate
- [ ] logrotate 설정 파일을 찾을 수 있다.
- [ ] `size 10M`과 `rotate 10`을 구분한다.
- [ ] `logrotate -d`로 설정을 점검할 수 있다.

[← cron](./b1-1-30-100-cron.md) · [Index](./b1-1-30-000-index.md) · [다음: Evidence & V4 →](./b1-1-30-120-evidence-v4.md)
