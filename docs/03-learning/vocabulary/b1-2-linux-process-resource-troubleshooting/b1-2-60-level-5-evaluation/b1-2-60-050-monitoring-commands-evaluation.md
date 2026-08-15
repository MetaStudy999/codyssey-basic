---
mission: B1-2
stage: evaluation
level: 5
order: 50
unit: Monitoring Commands Evaluation
gate: V5
visual_learning: DEFERRED
---

# Monitoring Commands Evaluation

## 핵심 질문

어떤 명령과 데이터를 왜 사용했는지 설명할 수 있는가?

## WHAT / HOW

장애마다 관측 축이 다르다.

```text
listener PID    → ss -lntp
process summary → ps -p <PID> -o pid,ppid,%cpu,%mem,rss,etime,stat,comm
thread view     → ps -L / WCHAN 계열 관찰
CPU interval    → /proc/<pid>/stat의 utime+stime delta
memory trend    → monitor.sh + RSS + application Heap log
```

## WHY

하나의 도구만으로 원인을 확정하지 않는다. `ss`는 listener 소유 PID를 찾고, `ps`는 프로세스 상태를, thread 관찰은 대기 상태를, 앱 로그는 내부 보호 정책의 실제 메시지를 제공한다.

## PROOF

현재 구현 저장소의 Runtime Evidence는 위 도구를 조합해 OOM/CPU/Deadlock을 서로 다른 관측 축으로 검증했다.

## LIMIT / ENVIRONMENT

도구마다 CPU 값의 정의와 샘플링 구간이 다르다. lifetime average와 짧은 interval을 같은 숫자로 비교하지 않는다.

## 예상 꼬리질문

- 왜 listener PID를 먼저 찾았는가?
- `%CPU`와 interval CPU는 왜 다를 수 있는가?
- Deadlock에서 왜 process view만으로 부족한가?

## V5 Gate

각 명령의 `무엇을 보는 도구인지`, `왜 그 시점에 쓰는지`, `어떤 결론까지 가능한지`를 구분해 설명한다.

[← 040](./b1-2-60-040-deadlock-evaluation.md) · [Index](./b1-2-60-000-index.md) · [060 →](./b1-2-60-060-os-principles-evaluation.md)
