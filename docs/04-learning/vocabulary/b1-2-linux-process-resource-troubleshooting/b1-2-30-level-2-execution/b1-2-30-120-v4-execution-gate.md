---
mission: B1-2
stage: execution
level: 2
order: 120
unit: V4 Execution Gate
gate: V4
visual_learning: DEFERRED
---

# 120. V4 Execution Gate

## 목표
B1-2의 세 장애를 실제 파일·명령·환경 변수·Evidence에서 찾아 적용할 수 있는지 최종 점검한다.

## V4 체크
### Runtime
- [ ] non-root와 필수 env/path/key/15034 조건을 검증할 수 있다.
- [ ] PID와 대상 process family를 식별할 수 있다.

### OOM
- [ ] memory growth를 시간 순서로 수집할 수 있다.
- [ ] 실제 종료 로그를 찾을 수 있다.
- [ ] MEMORY_LIMIT Before/After를 만들 수 있다.

### CPU
- [ ] 특정 PID CPU 상승을 관찰할 수 있다.
- [ ] 실제 build의 보호 종료 근거를 사용할 수 있다.
- [ ] CPU_MAX_OCCUPY Before/After를 만들 수 있다.

### Deadlock
- [ ] PID alive와 progress를 구분할 수 있다.
- [ ] `ps -L`/`top -H`/로그로 thread wait를 관찰할 수 있다.
- [ ] MULTI_THREAD_ENABLE Before/After를 만들 수 있다.

### Evidence / Report
- [ ] 3개 케이스의 Evidence가 timestamp/PID/조건으로 추적된다.
- [ ] 3개 Issue형 보고서를 검증할 수 있다.
- [ ] `문서 구조 PASS ≠ Runtime PASS ≠ 개인 MASTERED`를 설명한다.

## 통과 판정
위 항목을 실제 환경 또는 구현 저장소의 실제 Evidence에서 직접 찾아 설명할 수 있으면 **V4 READY**다. 학습 자료를 읽었다는 사실만으로 새 Runtime PASS를 주장하지 않는다.

[← 110](./b1-2-30-110-issue-report-validation.md) · [Level 2 Index](./b1-2-30-000-index.md) · [Mission Index](../b1-2-00-index.md)
