---
mission: B1-1
stage: advanced
order: 30
unit: systemd Service and Timer
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# systemd — Service / Socket / Timer

## 한 줄 설명

systemd는 Linux에서 서비스와 여러 운영 객체를 관리하는 대표적인 Service Manager다.

## B1-1과의 연결

B1-1 필수 요구는 systemd 자체가 아니다. 다만 Ubuntu 환경에서 SSH의 `ssh.service`, `ssh.socket`, runtime directory 같은 동작을 이해하는 데 도움이 된다.

## 핵심 관계

```text
systemd
├─ service : 장기 실행 서비스 관리
├─ socket  : socket 기반 활성화
└─ timer   : 정기 실행 예약
```

선택 확인 예:

```bash
systemctl status ssh.service --no-pager || true
systemctl status ssh.socket --no-pager || true
systemctl cat ssh.service
systemctl cat ssh.socket
```

## cron과 Timer

systemd timer도 정기 실행에 사용할 수 있지만 B1-1 원본은 cron/crontab 학습 흐름을 요구하므로 임의 대체하지 않는다.

## Advanced Gate

- [ ] service / socket / timer의 역할을 구분한다.
- [ ] systemd timer와 cron이 모두 예약 실행 도구지만 B1-1 필수 기준은 cron임을 설명한다.
- [ ] 환경별 SSH 동작 차이를 확인 명령으로 관찰할 수 있다.

[← Log Archive](./b1-1-90-020-log-compression-archive.md) · [Index](./b1-1-90-000-index.md) · [다음: journald →](./b1-1-90-040-journald-syslog.md)
