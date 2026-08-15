---
mission: B1-2
stage: evaluation
level: 5
order: 90
unit: Operations Improvement
gate: V5
visual_learning: DEFERRED
---

# Operations Improvement

## 핵심 질문

`agent-leak-app`이 실제 운영 서버였다면 현재 관제를 어떻게 개선할 것인가?

## WHAT / WHY

장애가 발생한 뒤 보는 것보다 `추세와 진행성`을 조기에 감지해야 한다.

## 개선 방향

- Memory: 단일 RSS 값보다 일정 시간의 RSS 증가율과 연속 초과를 기록한다.
- CPU: 시스템 전체가 아니라 service PID/process group의 짧은 interval CPU를 본다.
- Deadlock: PID/Port 생존 외에 업무 진행성, thread wait, 마지막 정상 처리 시각을 health 신호로 추가한다.
- Evidence: timestamp, PID, config, build/version, 핵심 로그를 자동으로 묶어 보존한다.

## LIMIT

이 단위는 학습용 운영 개선 제안이다. 원본 Mission이 Prometheus, eBPF, APM 같은 특정 제품 도입을 필수로 요구한다고 해석하지 않는다.

## provisional 평가 연결

현재 `b1-2-evaluation.md`에는 메모리 누수 조기 탐지, 가장 치명적인 장애와 예방 방안, 소스 수정 시 개선책을 설명하는 연습 문항이 있다. 공식 provenance는 확인되지 않았으므로 연습용으로 사용한다.

## V5 Gate

운영 개선을 `무엇을 더 관찰할지 → 왜 필요한지 → 어떤 오탐/한계가 있는지` 순서로 설명한다.

[← 080](./b1-2-60-080-workaround-vs-root-cause.md) · [Index](./b1-2-60-000-index.md) · [100 →](./b1-2-60-100-multi-failure-priority.md)
