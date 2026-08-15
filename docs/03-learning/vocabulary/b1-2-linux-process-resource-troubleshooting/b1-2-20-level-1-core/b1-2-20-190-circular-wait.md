---
mission: B1-2
level: 1
order: 190
term: Circular Wait
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---

# 순환 대기 (Circular Wait)

## 한 줄 설명
실행 주체들이 고리 형태로 서로의 자원을 기다리는 조건이다.

## B1-2에서의 위치
로그의 `A → B`, `B → A` 관계를 설명하는 핵심 원리다.

## 핵심 관계
`A waits B → B waits A`

## 초미니 확인
두 스레드의 순환 의존을 화살표로 그린다.

## V2/V3 Gate
- [ ] Deadlock 4대 조건 중 하나로 설명한다.

[← 이전](./b1-2-20-180-no-preemption.md) · [Index](./b1-2-20-000-index.md) · [다음 →](./b1-2-20-200-log.md)
