---
mission: B1-2
stage: execution
level: 2
order: 70
unit: CPU Before and After
gate: V4
visual_learning: DEFERRED
---

# 070. CPU Before & After

## 실행 목표
`CPU_MAX_OCCUPY`만 변경해 CPU 상승 패턴, 종료 여부, 생존 시간을 비교한다.

## 비교 항목
- `CPU_MAX_OCCUPY`
- 대상 PID/process family
- 최고 관측 CPU와 측정 방식
- app 내부 CPU telemetry
- 보호 violation 로그
- 종료 여부 / 생존 시간 / exit 결과

## Reference Runtime
현재 실제 Evidence에서는:
```text
CPU_MAX_OCCUPY=10 → cooldown 반복, 관찰 기간 보호 종료 없음
CPU_MAX_OCCUPY=90 → CPU 상승, "CPU Threshold Violated!", exit 143
```
이 결과는 공급 build에서 관측된 실제 사례이며, 다른 실행에서 그대로 재현된다고 가정하지 않는다.

## 측정 주의
`ps %CPU`, 짧은 interval `/proc` CPU, 애플리케이션 내부 `Current Load`는 정의가 다를 수 있다. 숫자를 동일 지표로 합치지 말고 각 측정 방법을 함께 기록한다.

## V4 확인
- [ ] CPU_MAX_OCCUPY 전후 비교가 있다.
- [ ] CPU 지표의 측정 정의를 구분한다.
- [ ] 종료 여부와 보호 로그를 같은 시간축에서 연결한다.

[← 060](./b1-2-30-060-cpu-reproduce.md) · [Level 2 Index](./b1-2-30-000-index.md) · [080 →](./b1-2-30-080-deadlock-reproduce.md)
