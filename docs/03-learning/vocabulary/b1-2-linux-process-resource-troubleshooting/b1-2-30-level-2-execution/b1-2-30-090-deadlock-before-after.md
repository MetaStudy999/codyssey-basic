---
mission: B1-2
stage: execution
level: 2
order: 90
unit: Deadlock Before and After
gate: V4
visual_learning: DEFERRED
---

# 090. Deadlock Before & After

## 실행 목표
`MULTI_THREAD_ENABLE`만 변경하여 Deadlock 재현과 회피 상태를 비교한다.

## 비교 구조
```text
Before: MULTI_THREAD_ENABLE=true
→ PID alive + WAITING/BLOCKED + 자원/로그 정체

After: MULTI_THREAD_ENABLE=false
→ 동일 관찰 구간에서 작업/로그/자원 변화 지속 여부 확인
```

기록 항목:
- PID
- thread 수/상태
- CPU/MEM/RSS 변화
- tcp/15034 상태
- 마지막 app log
- WAITING/BLOCKED 또는 실제 대기 로그
- 관찰 시간

## Reference Runtime
현재 실제 Evidence에서 `true`는 Deadlock을 재현했고, `false`에서는 관찰 기간 내 mutual WAITING/BLOCKED sequence가 나타나지 않고 작업 진행이 지속됐다.

`false`는 근본적인 concurrency 설계 수정이 아니라 해당 경로를 회피한 Workaround다.

## V4 확인
- [ ] 같은 관찰 기준으로 true/false를 비교한다.
- [ ] PID 생존과 실제 업무 진행을 구분한다.
- [ ] Deadlock 회피와 근본 해결을 혼동하지 않는다.

[← 080](./b1-2-30-080-deadlock-reproduce.md) · [Level 2 Index](./b1-2-30-000-index.md) · [100 →](./b1-2-30-100-evidence-curation.md)
