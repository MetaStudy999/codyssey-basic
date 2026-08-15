---
mission: B1-1
stage: advanced
order: 40
unit: journald and Syslog
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# journald / Syslog — Linux 로그의 여러 경로

## 한 줄 설명

Linux 로그는 애플리케이션 파일 하나에만 존재하지 않고 journald, Syslog 계열, 중앙 수집기로 확장될 수 있다.

## B1-1과의 연결

B1-1 필수 로그는 `/var/log/agent-app/monitor.log`다. Advanced에서는 다른 로그 경로가 공존할 수 있음을 이해한다.

```text
Application file log
systemd-journald
Syslog daemon
Central log collector
```

## 핵심 구분

- 애플리케이션 파일 로그: 프로그램이 직접 파일에 기록
- journald: systemd 환경에서 서비스·시스템 이벤트 수집
- Syslog: 전통적인 시스템 로그 전달/저장 구조
- 중앙 수집: 여러 서버의 로그를 한곳에 모음

## 중요한 원칙

Advanced 도구를 사용하더라도 B1-1의 `monitor.log` Evidence 요구를 다른 로그로 임의 대체하지 않는다.

## Advanced Gate

- [ ] 파일 로그와 journald를 같은 것으로 보지 않는다.
- [ ] SSH/서비스 문제에서 journald가 추가 Evidence가 될 수 있음을 설명한다.
- [ ] 원본 필수 로그와 추가 운영 로그를 구분한다.

[← systemd](./b1-1-90-030-systemd-service-timer.md) · [Index](./b1-1-90-000-index.md) · [다음: cgroups →](./b1-1-90-050-cgroups.md)
