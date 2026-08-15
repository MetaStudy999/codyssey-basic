---
mission: B1-2
stage: review
order: 60
unit: Evidence and Issue Mapping
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# Evidence & Issue Mapping

## 복습 목표

세 장애의 Evidence를 `Description → Evidence & Logs → RCA → Workaround & Verification` 리포트 구조에 정확히 배치한다.

## 빈 표부터 채우기

| 장애 | 핵심 변수 | Before 증거 | After 증거 | RCA 근거 | Verification |
|---|---|---|---|---|---|
| OOM | ? | ? | ? | ? | ? |
| CPU | ? | ? | ? | ? | ? |
| Deadlock | ? | ? | ? | ? | ? |

## 반드시 포함할 Evidence 축

- 대상 PID 또는 대상 프로세스 식별
- timestamp
- 핵심 log/signature
- CPU/MEM/RSS/thread 등 관련 관측값
- 핵심 환경변수 변경값
- Before/After 결과
- 재현 조건

## 장애별 연결 확인

```text
OOM      ↔ MEMORY_LIMIT
CPU      ↔ CPU_MAX_OCCUPY
Deadlock ↔ MULTI_THREAD_ENABLE
```

현재 구현 저장소에는 `evidence/oom`, `evidence/cpu`, `evidence/deadlock`과 3개 reports가 있지만, Review에서는 파일이 있다는 사실보다 **각 Evidence가 어떤 주장에 쓰이는지** 설명하는 것이 목표다.

## 금지

- Mission 예시 출력 복사
- 실제로 없는 로그 문자열 생성
- 원인 추론을 관찰 사실처럼 작성
- Before/After에서 여러 변수 동시 변경

## Gate

세 장애 각각에 대해 `주장 하나 ↔ 직접 근거 하나 이상`을 추적 가능하게 연결하면 통과 후보다.

[← 050](./b1-2-70-050-deadlock-chain-recall.md) · [Review Index](./b1-2-70-000-index.md) · [070 →](./b1-2-70-070-v1-v5-mixed-retrieval.md)
