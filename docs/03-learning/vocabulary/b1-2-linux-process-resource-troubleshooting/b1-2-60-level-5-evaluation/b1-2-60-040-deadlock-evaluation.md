---
mission: B1-2
stage: evaluation
level: 5
order: 40
unit: Deadlock Evaluation
gate: V5
visual_learning: DEFERRED
---

# Deadlock Evaluation

## 핵심 질문

프로세스가 살아 있는데도 Deadlock이라고 판단한 근거는 무엇인가?

## WHAT

`MULTI_THREAD_ENABLE=true` 조건에서 PID와 tcp/15034 listener는 살아 있었지만, RSS와 CPU가 거의 정체되고 두 Worker의 `WAITING ... BLOCKED` 이후 lock 관련 진행 로그가 멈췄다.

## WHY

프로세스 생존은 업무 진행을 보장하지 않는다. thread들이 서로의 lock을 기다리면 프로세스는 살아 있어도 유효한 작업은 멈출 수 있다.

## HOW

PID/listener 생존, CPU/MEM 변화, `ps -L`/WCHAN, 마지막 앱 로그를 함께 보고 자원 보유·대기 관계를 추적했다.

## PROOF

Reference Runtime:

- Before PID `2201`, `MULTI_THREAD_ENABLE=true`
- RSS 약 `18,184 KiB` 고정, CPU `0.0~0.1%`, threads `3`
- Worker thread들이 `futex_` wait
- Thread-1은 A 보유/B 대기, Thread-2는 B 보유/A 대기
- After `MULTI_THREAD_ENABLE=false`: mutual WAITING/BLOCKED sequence가 관찰되지 않고 작업 진행 지속

## LIMIT / ENVIRONMENT

환경변수 `false`는 동시 실행 경로를 회피한 workaround다. 근본 해결은 lock 획득 순서 통일, 복수 lock 회피, timeout/try-lock 같은 소스 수준 설계다.

## 예상 꼬리질문

- Deadlock 4대 조건을 이 Evidence에 어떻게 매핑하는가?
- PID와 Port가 살아 있으면 왜 health check가 부족할 수 있는가?
- 단순 idle 상태와 Deadlock을 어떻게 구분하는가?

## V5 Gate

`alive-but-stalled → thread wait → circular wait → workaround → root fix`를 Evidence와 함께 설명한다.

[← 030](./b1-2-60-030-cpu-evaluation.md) · [Index](./b1-2-60-000-index.md) · [050 →](./b1-2-60-050-monitoring-commands-evaluation.md)
