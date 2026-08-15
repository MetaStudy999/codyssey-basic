---
mission: B1-2
stage: execution
level: 2
order: 100
unit: Evidence Curation
gate: V4
visual_learning: DEFERRED
---

# 100. Evidence Curation

## 실행 목표
실제 runtime 출력을 평가자가 추적 가능한 Evidence 묶음으로 정리한다.

## Evidence의 최소 속성
```text
Case
+ Timestamp
+ PID
+ Command / Tool
+ Environment Variable
+ Raw/Curated Output
+ Before/After 관계
```

## 케이스별 최소 묶음
### OOM
- 메모리 상승 수치
- 종료 직전/직후 실제 로그
- MEMORY_LIMIT 전후

### CPU
- 특정 PID CPU 상승
- 실제 보호/종료 근거
- CPU_MAX_OCCUPY 전후

### Deadlock
- PID 생존
- CPU/MEM/로그 정체
- thread/lock wait 근거
- MULTI_THREAD_ENABLE 전후

## 금지
- Mission 예시 출력 재사용
- 존재하지 않은 로그 문구 생성
- PID/시간을 지우고 결론만 남김
- Before와 After의 조건을 섞음

## V4 확인
- [ ] 하나의 Evidence가 어느 실행/어느 PID인지 추적된다.
- [ ] 원본 출력과 해석을 구분한다.
- [ ] 세 케이스 모두 Before/After가 연결된다.

[← 090](./b1-2-30-090-deadlock-before-after.md) · [Level 2 Index](./b1-2-30-000-index.md) · [110 →](./b1-2-30-110-issue-report-validation.md)
