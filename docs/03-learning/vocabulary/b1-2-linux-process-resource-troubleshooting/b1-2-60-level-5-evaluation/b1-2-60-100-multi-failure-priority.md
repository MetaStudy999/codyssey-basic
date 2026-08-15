---
mission: B1-2
stage: evaluation
level: 5
order: 100
unit: Multi-failure Priority
gate: V5
visual_learning: DEFERRED
---

# Multi-failure Priority

## 핵심 질문

OOM과 Deadlock 같은 복수 장애가 동시에 보이면 무엇부터 확인할 것인가?

## 판단 원칙

고정된 한 가지 정답보다 `서비스 영향 + 시스템 안정성 + Evidence 보존 가능성`으로 우선순위를 설명한다.

```text
1. 즉시 시스템 전체 위험 확인
2. 대상 PID / listener / 자원 상태 보존
3. 빠르게 사라질 Evidence 확보
4. 장애 축 분리
5. 최소 변경으로 하나씩 검증
```

## 예시

메모리가 빠르게 고갈되어 시스템 전체를 위험하게 한다면 먼저 시스템 안정성을 확보하되, 강제 종료 전 PID/RSS/log/thread 상태를 가능한 범위에서 보존한다. 이후 Deadlock 여부는 thread wait와 진행 정지 Evidence로 별도 검증한다.

## WHY

복합 장애에서 여러 설정을 동시에 바꾸면 어느 변경이 어떤 결과를 만들었는지 설명하기 어렵다.

## LIMIT

실제 운영 우선순위는 SLA, 데이터 손실 위험, failover 가능 여부, 시스템 전체 메모리 압박 등 상황에 따라 달라진다.

## V5 Gate

`왜 그 장애부터 처리하는가`, `무슨 Evidence를 먼저 남기는가`, `어떤 변경은 뒤로 미루는가`를 근거와 함께 설명한다.

[← 090](./b1-2-60-090-operations-improvement.md) · [Index](./b1-2-60-000-index.md) · [110 →](./b1-2-60-110-oral-answer-practice.md)
