---
mission: B1-2
stage: principles
level: 3
order: 20
unit: Memory Limit and Protection Policy
gate: WHY-HOW
visual_learning: DEFERRED
---

# 메모리 한계와 보호 정책 — Memory Limit / Protection

## 한 줄 설명

메모리 임계치는 프로세스가 사용할 수 있는 자원의 경계를 정하고, 보호 정책은 그 경계를 넘었을 때 시스템 불안정으로 번지지 않도록 대응한다.

## B1-2에서의 위치

Mission은 `MEMORY_LIMIT`을 공식 범위 안에서 변경하여 Before/After를 비교하도록 한다. 실제 Runtime에서는 64MB와 128MB 조건에서 종료 시점과 생존 시간이 달라졌다.

## 핵심 관계

```text
Memory Growth
→ MEMORY_LIMIT
→ Threshold Exceeded
→ Protection Policy
→ Termination / Workaround Comparison
```

## 실제 관측과 원리 구분

현재 실제 build에서는 Linux kernel OOM Killer가 아니라 애플리케이션 `MemoryGuard`의 `Memory limit exceeded`와 `Self-terminating` 로그가 확인됐다.

따라서 이 미션의 실제 Evidence에서는 `OOM`이라는 현상 이름과 **실제 종료 주체**를 구분해야 한다.

## 왜 중요한가

임계치를 높이면 종료를 늦출 수 있지만 지속 증가의 근본 원인을 제거하는 것은 아니다. 즉, `Workaround`와 `Root Fix`는 다른 개념이다.

## WHY/HOW Gate

- [ ] `MEMORY_LIMIT`과 MemoryGuard 보호 정책의 관계를 설명한다.
- [ ] 임계치 상향이 왜 근본 해결이 아닐 수 있는지 설명한다.
- [ ] OS OOM Killer와 실제 애플리케이션 보호 종료를 구분한다.

[← Memory Growth](./b1-2-40-010-memory-growth-release.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: CPU / Latency →](./b1-2-40-030-cpu-utilization-latency.md)
