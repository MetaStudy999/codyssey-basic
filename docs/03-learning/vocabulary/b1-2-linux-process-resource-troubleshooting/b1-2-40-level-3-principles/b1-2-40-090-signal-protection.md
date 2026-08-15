---
mission: B1-2
stage: principles
level: 3
order: 90
unit: Signal and Protection Termination
gate: WHY-HOW
visual_learning: DEFERRED
---

# 시그널과 보호 종료 — Signal / Protection Termination

## 한 줄 설명

프로세스 종료를 해석할 때는 `애플리케이션이 남긴 보호 로그`, `실제 exit code`, `OS 시그널 의미`를 구분해 Evidence 수준에 맞게 말해야 한다.

## B1-2 CPU 실제 build

Mission 예시와 달리 현재 실제 build에서는 literal `[WATCHDOG]` 또는 `SIGTERM` 애플리케이션 로그가 확인되지 않았다. 실제 Evidence는 다음 두 축이다.

```text
Application: CPU Threshold Violated!
OS result:   exit 143
```

Exit 143은 OS 수준에서 SIGTERM 종료와 일치하지만, 존재하지 않은 애플리케이션 로그를 만들어내지 않는다.

## 핵심 관계

```text
Protection Condition
→ Application protection behavior
→ Process termination
→ Exit status / Signal interpretation
```

## 왜 중요한가

평가 예시 문구를 실제 출력보다 우선하면 Evidence를 왜곡할 수 있다. 실제 build 차이는 숨기지 않고 `무엇을 실제로 관찰했는가`를 기준으로 설명한다.

## WHY/HOW Gate

- [ ] 보호 정책 역할과 실제 로그 문자열을 구분한다.
- [ ] exit 143을 어떻게 제한적으로 해석해야 하는지 설명한다.
- [ ] Mission 예시와 실제 build가 다를 때 Evidence를 우선하는 이유를 설명한다.

[← Alive but Stalled](./b1-2-40-080-alive-but-stalled.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: Evidence → RCA →](./b1-2-40-100-evidence-causality-rca.md)
