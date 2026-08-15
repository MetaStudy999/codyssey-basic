---
mission: B1-2
level: 1
order: 70
term: Memory Leak
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---

# 메모리 누수 (Memory Leak)

## 한 줄 설명
필요 없어진 메모리가 해제되지 않아 사용량이 계속 증가하는 현상이다.

## B1-2에서의 위치
OOM 리포트에서 메모리 상승 패턴과 MemoryGuard 종료를 연결해 RCA를 작성한다.

## 핵심 관계
`Leak → Memory Growth → Limit → Termination`

## 초미니 확인
관측된 증가 패턴과 '누수'라는 원인 가설을 구분해 말한다.

## V2/V3 Gate
- [ ] Memory Leak을 사용량 증가·보호 정책과 연결한다.

[← 이전](./b1-2-20-060-heap-memory.md) · [Index](./b1-2-20-000-index.md) · [다음 →](./b1-2-20-080-oom.md)
