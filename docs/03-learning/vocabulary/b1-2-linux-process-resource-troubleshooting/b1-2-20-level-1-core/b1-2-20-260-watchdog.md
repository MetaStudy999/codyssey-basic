---
mission: B1-2
level: 1
order: 260
term: Watchdog
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---

# 워치독 (Watchdog)

## 한 줄 설명
비정상 상태나 임계치 초과를 감지해 보호 조치를 수행하는 감시 로직이다.

## B1-2에서의 위치
CPU 과점유가 임계치를 넘으면 보호 정책에 따라 종료되는 흐름을 설명한다.

## 핵심 관계
`CPU Threshold → Watchdog → SIGTERM`

## 초미니 확인
Watchdog 종료가 단순 오류 종료와 어떻게 다른지 말한다.

## V2/V3 Gate
- [ ] 과점유 방지 정책과 연결한다.

[← 이전](./b1-2-20-250-sigkill.md) · [Index](./b1-2-20-000-index.md) · [다음 →](./b1-2-20-270-rca.md)
