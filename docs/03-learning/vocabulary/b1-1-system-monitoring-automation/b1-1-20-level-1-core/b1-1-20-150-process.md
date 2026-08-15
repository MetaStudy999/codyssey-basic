---
mission: B1-1
stage: top-core
order: 150
term: Process
lifecycle: NEW
---
# B1-1 — 프로세스 (Process)

## 한 줄 설명
프로그램 파일이 실제로 실행되어 메모리와 CPU 시간을 사용하는 실행 단위다.

## B1-1에서의 위치
`monitor.sh`가 Agent 프로세스가 실제 실행 중인지 확인한다.

## 핵심 관계
`Program File → 실행 → Process → PID → 필요 시 Port LISTEN`

## 초미니 확인
파일이 존재하는 것과 프로세스가 실행 중인 것이 왜 다른지 설명한다.

## Gate
- [ ] V2: Process를 실행 중인 프로그램 관점에서 설명한다.
- [ ] V3: Process와 PID·LISTEN의 관계를 말한다.

[← UFW/firewalld](./b1-1-20-140-ufw-firewalld.md) · [Index](./b1-1-20-000-index.md) · [다음: PID →](./b1-1-20-160-pid.md)
