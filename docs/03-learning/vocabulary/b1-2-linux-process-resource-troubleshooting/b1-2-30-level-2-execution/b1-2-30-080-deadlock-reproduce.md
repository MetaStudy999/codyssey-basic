---
mission: B1-2
stage: execution
level: 2
order: 80
unit: Deadlock Reproduction
gate: V4
visual_learning: DEFERRED
---

# 080. Deadlock 재현

## 실행 목표
프로세스가 살아 있지만 실제 작업 진행이 멈춘 상태를 PID·자원·thread·log Evidence로 진단한다.

## Before 조건
Mission 요구에 따라 멀티스레드 조건을 활성화하여 관찰한다.
```bash
export MULTI_THREAD_ENABLE=true
```

무응답이 의심되면 바로 종료하지 않고 먼저 저장한다.
```bash
ps -ef | grep '[a]gent-leak-app'
ps -L -p "$PID" -o pid,tid,psr,pcpu,pmem,stat,wchan:32,comm
top -H -b -d 1 -n 5 -p "$PID"
tail -n 100 "$AGENT_LOG_DIR"/app-*.log
```

## 판정 조합
```text
PID 존재
+ CPU/MEM 변화 정체
+ 로그 진행 정지
+ thread wait / lock 대기 근거
= Deadlock 가설 강화
```

현재 실제 Evidence에서는 두 Worker가 서로 상대 Lock을 기다리는 `WAITING ... BLOCKED`와 futex wait가 함께 관측됐다.

## V4 확인
- [ ] PID 존재만으로 정상이라고 판정하지 않는다.
- [ ] thread-level 상태를 확인할 수 있다.
- [ ] 마지막 로그의 자원 보유/대기 방향을 추적한다.

[← 070](./b1-2-30-070-cpu-before-after.md) · [Level 2 Index](./b1-2-30-000-index.md) · [090 →](./b1-2-30-090-deadlock-before-after.md)
