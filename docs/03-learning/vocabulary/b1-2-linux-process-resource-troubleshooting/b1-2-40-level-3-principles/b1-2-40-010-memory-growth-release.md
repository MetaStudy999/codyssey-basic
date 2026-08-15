---
mission: B1-2
stage: principles
level: 3
order: 10
unit: Memory Growth and Release
gate: WHY-HOW
visual_learning: DEFERRED
---

# 메모리 증가와 해제 — Memory Growth / Release

## 한 줄 설명

프로세스가 메모리를 계속 확보하고 충분히 해제하지 못하면 시간에 따라 사용량이 증가하는 패턴이 나타날 수 있다.

## B1-2에서의 위치

B1-2 Runtime Evidence에서는 대상 프로세스 RSS와 애플리케이션 Heap 값이 시간 순서대로 증가했다. Mission은 이 증가 패턴과 OOM/보호 종료를 Evidence로 설명하도록 요구한다.

## 핵심 관계

```text
Memory Allocation
→ Memory Use
→ Release 여부
→ 반복
→ RSS / Heap 변화
```

메모리 누수 여부를 판단할 때 한 시점의 높은 값보다 **시간에 따른 증가 패턴**이 중요하다.

## 실제 관측과 원리 구분

- 실제 관측: RSS와 Heap 값이 단계적으로 증가했다.
- 실제 관측: MemoryGuard가 설정 한계 초과를 기록하고 self-termination했다.
- 원리 설명: 사용한 메모리가 회수되지 않는 흐름은 지속적 증가 패턴을 만들 수 있다.
- 단정 금지: 바이너리 내부의 특정 객체나 코드 라인을 누수 원인으로 지목하지 않는다.

## 왜 중요한가

단순히 `메모리가 높다`가 아니라 `같은 프로세스에서 시간이 흐르며 계속 증가한다`를 보여야 Root Cause Analysis의 근거가 강해진다.

## WHY/HOW Gate

- [ ] 한 시점의 높은 메모리와 지속 증가 패턴의 차이를 설명한다.
- [ ] RSS/Heap 증가 Evidence가 왜 필요한지 설명한다.
- [ ] 내부 코드를 보지 않고도 말할 수 있는 범위와 말할 수 없는 범위를 구분한다.

[← Level 3 Index](./b1-2-40-000-index.md) · [다음: Memory Limit / Protection →](./b1-2-40-020-memory-limit-protection.md)
