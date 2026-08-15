---
mission: B1-2
stage: review
order: 40
unit: CPU Chain Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# CPU Chain Recall

## 복습 목표

시스템 전체 부하와 대상 PID 부하를 구분하고 CPU 보호 종료의 실제 Evidence를 복원한다.

## 먼저 백지 복원

```text
대상 ______ 특정
→ per-process CPU ______
→ CPU_MAX_OCCUPY와 비교
→ 보호 signature / exit ______
→ CPU_MAX_OCCUPY 단일 변경
→ Before & After
```

## 확인용 핵심 관계

```text
Target PID
→ interval/per-process CPU observation
→ threshold/protection behavior
→ `CPU Threshold Violated!`
→ exit 143
→ CPU_MAX_OCCUPY 변경
→ 재실행 비교
```

현재 제공 build는 literal `[WATCHDOG]` 또는 `SIGTERM` 애플리케이션 로그를 출력하지 않았다. Review에서도 존재하지 않은 문자열을 정답처럼 쓰지 않는다.

Reference Runtime은 `CPU_MAX_OCCUPY 10 → 90` 비교에서 낮은 값과 높은 값의 보호 동작 차이를 관찰했다. 값 자체보다 **동일 대상·동일 관찰 방식·단일 변수 비교**가 핵심이다.

## 자기 확인

- system-wide CPU와 per-process CPU를 같은 뜻으로 말하지 않았는가?
- exit 143만 보고 내부 원인을 과도하게 단정하지 않았는가?
- 실제 로그와 Mission 예시를 구분했는가?

## Gate

실제 build 차이를 포함해 CPU 장애를 Evidence 중심으로 설명하면 통과 후보다.

[← 030](./b1-2-70-030-oom-chain-recall.md) · [Review Index](./b1-2-70-000-index.md) · [050 →](./b1-2-70-050-deadlock-chain-recall.md)
