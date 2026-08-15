---
mission: B1-2
stage: execution
level: 2
order: 40
unit: OOM Reproduction
gate: V4
visual_learning: DEFERRED
---

# 040. OOM / Memory Leak 재현

## 실행 목표
시간에 따라 대상 프로세스 메모리가 증가하고, 실제 보호 정책 종료 로그가 나타나는지 관찰한다.

## 관찰 순서
1. 공식 범위 안에서 `MEMORY_LIMIT` 값을 정하고 기록한다.
2. 앱 실행과 동시에 `monitor.sh`를 반복 실행한다.
3. PID별 RSS/MEM 변화와 app log를 함께 저장한다.
4. 종료 직전/직후 로그 문맥을 보존한다.

검색 보조:
```bash
grep -nEi 'memory|limit|guard|terminated|self' evidence/oom/*.log
```
검색 문자열만으로 결론 내리지 않고 주변 로그와 시간 순서를 확인한다.

## Reference Runtime
현재 구현 저장소의 실제 실행에서는 `MemoryGuard`가 `Memory limit exceeded`와 self-termination 로그를 남겼다. Linux kernel OOM Killer가 종료한 것으로 과장하지 않는다.

## V4 확인
- [ ] 같은 PID의 RSS가 시간에 따라 증가하는 Evidence가 있다.
- [ ] 종료 원인을 실제 로그로 구분한다.
- [ ] 예시 로그가 아니라 실제 실행 로그를 사용한다.

[← 030](./b1-2-30-030-observability-baseline.md) · [Level 2 Index](./b1-2-30-000-index.md) · [050 →](./b1-2-30-050-oom-before-after.md)
