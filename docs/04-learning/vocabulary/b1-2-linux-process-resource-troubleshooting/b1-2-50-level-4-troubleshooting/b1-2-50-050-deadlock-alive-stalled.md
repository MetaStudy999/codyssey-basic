---
mission: B1-2
stage: troubleshooting
order: 50
unit: Deadlock Alive but Stalled
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Deadlock — 살아 있지만 멈춘 상태

## 증상

PID도 있고 tcp/15034도 LISTEN하지만 작업 진행이 멈춘다.

## 관찰

- PID 생존 여부
- 포트 LISTEN 여부
- CPU / RSS 변화
- Thread 수와 상태
- 로그가 마지막으로 진행된 시점

Reference Runtime에서는 PID와 listener가 살아 있는 동안 RSS가 고정되고 CPU가 거의 0으로 내려갔으며 `WAITING ... BLOCKED` 뒤 작업 로그 진행이 멈췄다.

## 실패 층·가설

```text
Process alive
+ socket alive
+ work progress stopped
+ thread wait evidence
= alive-but-stalled hypothesis
```

프로세스 생존만으로 서비스 정상이라 판단하지 않는다.

## 최소 수정

진단 중에는 바로 kill하지 않고 Thread/Lock Evidence를 먼저 보존한다. 비교 실험에서는 Mission 요구에 따라 `MULTI_THREAD_ENABLE` 하나만 변경한다.

## 재검증

같은 시간 범위에서 CPU/MEM/로그 진행과 mutual wait 재현 여부를 비교한다.

## Gate

`PID alive`, `Port LISTEN`, `Service progress`가 서로 다른 상태임을 설명할 수 있어야 한다.

[← 이전](./b1-2-50-040-cpu-protection-termination.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-060-thread-lock-evidence.md)
