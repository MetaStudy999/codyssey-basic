---
mission: B1-2
stage: execution
level: 2
order: 30
unit: Observability Baseline
gate: V4
visual_learning: DEFERRED
---

# 030. Observability Baseline

## 실행 목표
장애를 만들기 전에 대상 프로세스의 정상 관찰 방법과 기준선을 확보한다.

## 핵심 도구
```bash
pgrep -af agent-leak-app
ps -ef | grep '[a]gent-leak-app'
ps -p "$PID" -o pid,ppid,pcpu,pmem,rss,etime,stat,comm
ss -lntp
```

B1-2의 `monitor.sh`는 process-specific 관제 도구로 PID, CPU%, MEM%, RSS(KiB), thread 수, process state 등을 기록한다.

## 왜 Baseline인가
장애 후 값만 보면 "원래부터 그랬는지" 판단하기 어렵다. 같은 PID·같은 시간축에서 정상 또는 초기 상태를 먼저 기록해야 증가·정체·급상승을 비교할 수 있다.

## Evidence 최소 요소
- timestamp
- PID
- process 상태
- CPU / MEM / RSS
- thread 수
- tcp/15034 상태
- app log 위치

## V4 확인
- [ ] 대상 PID를 찾을 수 있다.
- [ ] 시스템 전체 CPU와 특정 PID CPU를 구분한다.
- [ ] RSS와 app log를 같은 시간축으로 비교할 수 있다.

[← 020](./b1-2-30-020-runtime-environment.md) · [Level 2 Index](./b1-2-30-000-index.md) · [040 →](./b1-2-30-040-oom-reproduce.md)
