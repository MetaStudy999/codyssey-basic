---
mission: B1-2
stage: advanced
order: 70
unit: FCFS Inference
source_scope: SOURCE_LINKED_BONUS
gate: FCFS-INFERENCE
visual_learning: DEFERRED
---

# FCFS Inference

## 목적

FCFS(First-Come, First-Served) 가설을 실제 실행 순서와 비교한다.

## 지지 패턴 후보

- 먼저 시작한 작업이 완료될 때까지 계속 진행
- 다음 작업은 앞 작업 완료 후 시작
- 입력/도착 순서와 실행 완료 순서가 비교적 일치

## 반증 가능 패턴

- A가 완료되기 전 B, C가 반복적으로 끼어듦
- A가 중단된 뒤 B/C 후에 다시 재개됨
- 작업 완료보다 일정한 교체 패턴이 더 뚜렷함

## 관찰 질문

```text
A started
→ A completed?
→ B started?
```

이 순서가 실제 로그에서 반복되는지 본다.

## Advanced Gate

본인 로그에서 FCFS를 지지하거나 반증하는 연속 로그 구간 하나를 제시하고 이유를 설명하면 통과한다.

[← 060](./b1-2-90-060-round-robin-inference.md) · [Advanced Index](./b1-2-90-000-index.md) · [080 →](./b1-2-90-080-priority-inference.md)
