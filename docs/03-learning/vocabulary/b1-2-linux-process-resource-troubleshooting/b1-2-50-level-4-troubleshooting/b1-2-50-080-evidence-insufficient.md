---
mission: B1-2
stage: troubleshooting
order: 80
unit: Evidence Insufficient
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Evidence 부족 진단

## 증상

현상은 관찰했지만 RCA를 뒷받침할 수치·로그·PID·시각이 부족하다.

## 관찰

세 장애마다 최소 증거를 점검한다.

- OOM: 시간 순 RSS/Heap 증가 + 종료 근거 + MEMORY_LIMIT 전후
- CPU: 대상 PID CPU 상승 + 보호 근거 + CPU_MAX_OCCUPY 전후
- Deadlock: PID 생존 + 자원/로그 정체 + Thread/Lock 대기 + MULTI_THREAD_ENABLE 전후

## 실패 층·가설

증거 부족은 `원인을 모른다`와 다르다. 원인 가설이 있어도 PROOF가 없으면 보고서 결론의 강도를 낮춰야 한다.

## 최소 수정

누락된 증거 하나를 명확히 정하고 다시 수집한다. 예: CPU라면 시스템 전체 top만 저장하지 말고 대상 PID interval 수치를 추가한다.

## 재검증

추가 Evidence가 기존 가설을 지지하는지, 반박하는지 다시 판정한다.

## Evidence 품질

```text
Fact → 직접 관측
Inference → Fact에서 추론
Unknown → 아직 증거 없음
```

세 범주를 섞지 않는다.

## Gate

Evidence가 부족한 상황에서 `PASS` 대신 `추가 관찰 필요`라고 판정할 수 있어야 한다.

[← 이전](./b1-2-50-070-runtime-env-misconfiguration.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-090-before-after-inconclusive.md)
