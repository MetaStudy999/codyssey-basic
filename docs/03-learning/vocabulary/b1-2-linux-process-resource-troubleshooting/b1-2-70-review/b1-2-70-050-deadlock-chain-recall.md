---
mission: B1-2
stage: review
order: 50
unit: Deadlock Chain Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# Deadlock Chain Recall

## 복습 목표

`프로세스가 살아 있음`과 `서비스가 진행 중임`을 구분하고 Thread/Lock Evidence를 교착상태 원리와 연결한다.

## 먼저 백지 복원

```text
PID ______
+ port/listener ______
하지만
→ RSS/log ______
→ Thread WAITING/BLOCKED
→ futex ______
→ A → B / B → A ______
→ MULTI_THREAD_ENABLE 변경
→ Before & After
```

## 확인용 핵심 관계

```text
PID alive
→ 진행 여부는 별도 확인
→ RSS / log progress 정체
→ thread wait/block 관찰
→ futex wait
→ mutual circular wait
→ Deadlock hypothesis 강화
→ MULTI_THREAD_ENABLE true/false 비교
```

Deadlock 4대 조건은 `Mutual Exclusion / Hold and Wait / No Preemption / Circular Wait`이다. 실제 분석에서는 이론을 외우는 것보다 관측된 thread/lock 관계가 어떤 조건을 지지하는지 설명해야 한다.

Reference Runtime에서는 `true`에서 PID 생존 + 정체 + futex/circular wait, `false`에서 작업 진행 지속이 관측됐다.

## Gate

`PID가 있는데 왜 장애인가?`라는 질문에 진행성(progress)과 thread/lock Evidence로 답할 수 있으면 통과 후보다.

[← 040](./b1-2-70-040-cpu-chain-recall.md) · [Review Index](./b1-2-70-000-index.md) · [060 →](./b1-2-70-060-evidence-issue-mapping.md)
