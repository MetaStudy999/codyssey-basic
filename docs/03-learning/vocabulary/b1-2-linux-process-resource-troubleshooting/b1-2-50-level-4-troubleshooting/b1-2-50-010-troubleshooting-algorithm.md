---
mission: B1-2
stage: troubleshooting
order: 10
unit: Troubleshooting Algorithm
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# 장애 진단 알고리즘

## 증상

`느리다`, `멈췄다`, `종료됐다`는 현상만 있고 원인은 아직 모른다.

## 관찰

먼저 시간을 고정하고 다음 축을 확인한다.

- PID가 존재하는가?
- tcp/15034 LISTEN이 유지되는가?
- CPU / MEM / RSS가 변하는가?
- Thread 상태가 변하는가?
- 마지막 애플리케이션 로그는 무엇인가?

## 실패 층

```text
Runtime prerequisite
→ Process
→ Resource
→ Thread/Lock
→ Application protection
→ Evidence/Report
```

한 번에 한 층씩 좁힌다.

## 가설

관찰된 사실에서 직접 지지되는 가설만 세운다. 바이너리 내부 코드 라인은 역공학하지 않았으므로 추측하지 않는다.

## 최소 수정

원인 후보에 직접 대응하는 설정 하나만 바꾸고 다른 조건은 가능한 한 유지한다.

## 재검증

수정 전과 같은 관찰 방법으로 다시 측정한다.

## Evidence

명령, PID, 시각, 설정값, 로그 경로가 추적 가능해야 한다.

## Gate

증상만 듣고 바로 수정하지 않고 `Observe → Layer → Hypothesis`를 먼저 말할 수 있으면 통과다.

[← Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-020-oom-memory-growth.md)
