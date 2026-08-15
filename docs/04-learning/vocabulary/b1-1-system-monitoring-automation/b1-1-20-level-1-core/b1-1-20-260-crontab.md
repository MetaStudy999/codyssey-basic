---
mission: B1-1
stage: top-core
order: 260
term: crontab
lifecycle: NEW
---
# B1-1 — 크론탭 (crontab)

## 한 줄 설명
cron이 언제 어떤 명령을 실행할지 정의하는 사용자별 작업 목록과 이를 관리하는 인터페이스다.

## B1-1에서의 위치
`agent-admin` crontab에 `monitor.sh` 매분 실행 규칙을 등록하고 실제 로그 증가를 확인한다.

## 핵심 관계
`crontab = 일정 정의`, `cron = 그 일정을 실행하는 스케줄러`.

## 초미니 확인
crontab 등록 화면만 보여주는 것보다 1~2분 뒤 로그 증가가 더 강한 Evidence인 이유를 설명한다.

## Gate
- [ ] V2: crontab의 역할을 설명한다.
- [ ] V3: crontab·cron·Log의 관계를 말한다.

[← cron](./b1-1-20-250-cron.md) · [Index](./b1-1-20-000-index.md) · [다음: Log Rotation →](./b1-1-20-270-log-rotation.md)
