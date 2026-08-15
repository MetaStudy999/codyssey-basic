---
mission: B1-2
level: 1
order: 250
term: SIGKILL
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---

# 강제 종료 시그널 (SIGKILL)

## 한 줄 설명
프로세스를 즉시 강제 종료시키는 시그널이다.

## B1-2에서의 위치
OOM 예시의 MemoryGuard 강제 종료 설명과 연결된다.

## 핵심 관계
`MemoryGuard → SIGKILL → Forced Termination`

## 초미니 확인
SIGTERM과 SIGKILL의 사용 맥락 차이를 인지한다.

## V2/V3 Gate
- [ ] 강제 종료와 보호 정책의 관계를 설명한다.

[← 이전](./b1-2-20-240-sigterm.md) · [Index](./b1-2-20-000-index.md) · [다음 →](./b1-2-20-260-watchdog.md)
