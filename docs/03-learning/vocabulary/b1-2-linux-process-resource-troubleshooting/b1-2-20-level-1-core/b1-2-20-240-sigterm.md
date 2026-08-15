---
mission: B1-2
level: 1
order: 240
term: SIGTERM
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---

# 종료 요청 시그널 (SIGTERM)

## 한 줄 설명
프로세스에 종료를 요청하는 대표 시그널이다.

## B1-2에서의 위치
CPU Watchdog 종료 로그의 `SIGTERM`과 연결된다.

## 핵심 관계
`Watchdog → SIGTERM → Termination`

## 초미니 확인
CPU 케이스의 핵심 종료 로그와 연결한다.

## V2/V3 Gate
- [ ] Watchdog과 SIGTERM의 관계를 설명한다.

[← 이전](./b1-2-20-230-signal.md) · [Index](./b1-2-20-000-index.md) · [다음 →](./b1-2-20-250-sigkill.md)
