---
mission: B1-2
stage: execution
level: 2
order: 50
unit: OOM Before and After
gate: V4
visual_learning: DEFERRED
---

# 050. OOM Before & After

## 실행 목표
`MEMORY_LIMIT`만 변경하여 프로세스 생존 시간과 종료 시점 변화를 비교한다.

## 비교 규칙
```text
Run 1: MEMORY_LIMIT = A
Run 2: MEMORY_LIMIT = B
나머지 관찰 방법은 동일하게 유지
```

기록 항목:
- 시작/종료 또는 관찰 종료 시각
- PID
- MEMORY_LIMIT
- 생존 시간
- 종료 직전 RSS/MEM
- MemoryGuard 관련 실제 로그

## Reference Runtime
현재 구현 저장소의 검증된 실제 Evidence는 `64 MB / 8초`와 `128 MB / 18초` 비교를 포함한다. 이것은 **참고 관측값**이며 학습자의 실행값을 대신하지 않는다.

## 판정 주의
`MEMORY_LIMIT`을 높여 오래 살아도 memory leak의 근본 해결은 아니다. Level 2에서는 우선 **환경 변수 변경이 결과에 미친 영향**을 증거로 보여 준다.

## V4 확인
- [ ] 최소 2회 실행 비교가 있다.
- [ ] 핵심 변수 하나를 바꾼 비교임을 설명할 수 있다.
- [ ] Before/After 표를 실제 수치로 작성할 수 있다.

[← 040](./b1-2-30-040-oom-reproduce.md) · [Level 2 Index](./b1-2-30-000-index.md) · [060 →](./b1-2-30-060-cpu-reproduce.md)
