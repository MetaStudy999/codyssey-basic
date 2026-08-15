---
mission: B1-2
stage: review
order: 120
unit: Advanced and Next Mission Bridge
gate: INTEGRATION-BRIDGE
visual_learning: DEFERRED
---

# Advanced / Next Bridge

## 복습 목표

필수 B1-2 학습을 닫고, 원본 Mission의 선택 Bonus인 스케줄링 알고리즘 추론으로 자연스럽게 확장한다.

## 필수 학습에서 얻은 관찰 관점

```text
Process / PID
→ CPU time
→ Thread
→ execution progress
→ waiting / blocking
→ scheduling behavior를 관찰할 준비
```

## B1-2 Advanced로 넘어갈 질문

원본 Mission PDF의 Bonus는 스케줄링 알고리즘 추론과 연결된다.

- 실행 순서와 교체 주기에서 어떤 scheduling pattern을 읽을 수 있는가?
- Worker thread의 progress를 어떻게 관찰할 것인가?
- Time Quantum처럼 보이는 반복 간격과 단순 로그 간격은 어떻게 구분할 것인가?
- Round-Robin / FCFS / Priority Scheduling을 어떤 Evidence로 비교할 것인가?
- 알고리즘을 단정하기 전에 어떤 관측 한계를 적어야 하는가?

## 경계

```text
B1-2 필수 Level 0~5 + Review
→ 필수 학습 통합

B1-2 Advanced
→ SOURCE_LINKED_BONUS 중심 선택 심화
```

Advanced는 필수 미션 PASS를 대체하지 않으며, 실제 관측 없이 특정 스케줄링 알고리즘을 단정하지 않는다.

## 후행 연결

Advanced에서는 `로그 → 실행 순서/교체 주기 → 후보 비교 → 역추론 → 장단점/아키텍처 적합성 → 리포트`를 수행한다. 완료 후 B2-1로 넘어간다.

## Gate

`필수`와 `Bonus/Advanced`의 경계를 설명하고 다음 학습 질문 세 개 이상을 스스로 만들면 Review를 종료한다.

[← 110](./b1-2-70-110-learning-ready-decision.md) · [Review Index](./b1-2-70-000-index.md) · [Advanced →](../b1-2-90-advanced/b1-2-90-000-index.md)
