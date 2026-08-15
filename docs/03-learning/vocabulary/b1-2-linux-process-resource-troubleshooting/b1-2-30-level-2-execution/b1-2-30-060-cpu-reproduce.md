---
mission: B1-2
stage: execution
level: 2
order: 60
unit: CPU Reproduction
gate: V4
visual_learning: DEFERRED
---

# 060. CPU Spike 재현

## 실행 목표
시스템 전체 부하가 아니라 **대상 process family/PID의 CPU 상승**과 보호 종료 근거를 확보한다.

## 관찰 예
```bash
PID="$(pgrep -f agent-leak-app | head -n 1)"
ps -p "$PID" -o pid,ppid,pcpu,pmem,rss,etime,stat,comm
top -b -d 1 -n 10 -p "$PID"
```

필요하면 짧은 interval의 `/proc/<pid>/stat` 관측으로 lifetime average와 순간 구간 CPU를 구분한다.

## 중요한 실제 build 차이
현재 제공 build의 검증된 실제 로그에는 Mission 예시처럼 literal `[WATCHDOG]` 또는 `SIGTERM` 문자열이 없었다. 실제 보호 Evidence는 `CPU Threshold Violated!`와 종료 결과(exit 143)였다.

**존재하지 않은 로그 문자열을 만들어 넣지 않는다.**

## V4 확인
- [ ] 대상 PID의 CPU 상승을 시스템 전체 CPU와 구분했다.
- [ ] 사용한 CPU 측정 방식과 샘플 간격을 기록했다.
- [ ] 실제 build가 출력한 보호 로그만 Evidence로 사용했다.

[← 050](./b1-2-30-050-oom-before-after.md) · [Level 2 Index](./b1-2-30-000-index.md) · [070 →](./b1-2-30-070-cpu-before-after.md)
