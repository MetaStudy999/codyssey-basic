---
mission: B1-2
stage: troubleshooting
order: 120
unit: Troubleshooting Gate
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# B1-2 Troubleshooting Gate

## 최종 목표

명령어를 외우는 것이 아니라 세 장애를 독립적으로 좁혀 가며 진단할 수 있어야 한다.

## OOM Gate

- [ ] 시간 순 메모리 증가를 확인한다.
- [ ] 앱 자체 MemoryGuard 종료와 OS OOM Killer를 구분한다.
- [ ] `MEMORY_LIMIT` 하나를 변경해 Before/After를 만든다.
- [ ] 내부 누수 코드 위치를 Evidence 없이 단정하지 않는다.

## CPU Gate

- [ ] 대상 listener/process PID를 먼저 식별한다.
- [ ] 시스템 전체 CPU와 대상 PID CPU를 구분한다.
- [ ] 실제 build의 `CPU Threshold Violated!` + exit 143을 정확히 해석한다.
- [ ] `CPU_MAX_OCCUPY` 하나를 변경해 재검증한다.

## Deadlock Gate

- [ ] PID/Port 생존과 작업 진행을 구분한다.
- [ ] CPU/MEM/로그 정체를 확인한다.
- [ ] Thread/Lock WAITING/BLOCKED 및 wait 근거를 수집한다.
- [ ] Deadlock 4대 조건을 실제 관찰과 연결한다.
- [ ] `MULTI_THREAD_ENABLE` 하나를 변경해 재검증한다.

## Evidence Gate

- [ ] Mission 예시가 아니라 실제 실행 결과를 사용한다.
- [ ] PID, timestamp, 설정값, Evidence 경로를 추적할 수 있다.
- [ ] Fact / Inference / Unknown을 구분한다.
- [ ] 결과가 예상과 다를 때 기록을 고치지 않고 가설을 수정한다.

## 판정

```text
TROUBLESHOOTING READY
≠ RUNTIME VERIFIED
≠ MISSION PASS
≠ PERSONAL MASTERED
```

문서 학습 완료만으로 실제 Runtime PASS나 개인 숙련을 선언하지 않는다.

[← 이전](./b1-2-50-110-issue-report-troubleshooting.md) · [Index](./b1-2-50-000-index.md) · [Mission Index](../b1-2-00-index.md)
