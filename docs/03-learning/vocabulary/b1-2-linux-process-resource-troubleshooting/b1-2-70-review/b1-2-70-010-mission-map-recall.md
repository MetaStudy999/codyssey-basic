---
mission: B1-2
stage: review
order: 10
unit: Mission Map Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# Mission Map Recall

## 복습 목표

문서를 보지 않고 B1-2의 전체 흐름을 처음부터 끝까지 한 장으로 그린다.

## 먼저 백지에서 복원

아래 빈 흐름의 항목을 스스로 채운다.

```text
3가지 장애
→ 관제 대상
→ Evidence
→ RCA
→ 핵심 환경변수 1개 변경
→ Before & After
→ 3개 기술 리포트
```

반드시 OOM / CPU / Deadlock 세 갈래가 다시 하나의 보고 흐름으로 합쳐지도록 그린다.

## 정답 확인용 기준

```text
OOM / CPU Spike / Deadlock
→ 대상 프로세스·PID·CPU·MEM·Thread·Log 관찰
→ 실제 Evidence 보존
→ Root Cause Analysis
→ MEMORY_LIMIT / CPU_MAX_OCCUPY / MULTI_THREAD_ENABLE 단일 축 비교
→ Before & After
→ OOM / CPU / Deadlock 리포트
```

리포트 기본 구조는 `Description → Evidence & Logs → Root Cause Analysis → Workaround & Verification`이다.

## 자기 확인

- 세 장애를 섞지 않고 구분했는가?
- 관찰과 원인 추론 사이에 Evidence가 들어가는가?
- 환경변수 변경을 근본 해결책으로 과장하지 않았는가?
- Mission 예시 출력과 실제 Evidence를 구분했는가?

## Gate

60초 안에 전체 흐름을 말하고 3분 안에 백지 구조도를 그릴 수 있으면 통과 후보로 본다.

[← Review Index](./b1-2-70-000-index.md) · [Review Index](./b1-2-70-000-index.md) · [020 →](./b1-2-70-020-constraints-environment-recall.md)
