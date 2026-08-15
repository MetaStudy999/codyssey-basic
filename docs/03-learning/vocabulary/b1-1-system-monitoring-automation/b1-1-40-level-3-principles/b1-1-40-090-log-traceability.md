---
mission: B1-1
level: 3
order: 90
unit: Log Format and Traceability
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# 로그 포맷과 추적성 (Log Traceability)

## 한 줄 설명

일관된 로그 형식과 누적 기록은 상태를 시간순으로 비교하고 장애 전후를 추적하며 Evidence로 남기기 쉽게 만든다.

## B1-1 로그 형식

```text
[YYYY-MM-DD HH:MM:SS] PID:... CPU:...% MEM:...% DISK_USED:...%
```

## 핵심 관계

```text
Timestamp + Stable Fields + Append
→ Time Series-like History
→ Troubleshooting / Report / Evidence
```

`>`가 아니라 `>>`를 사용하는 이유는 이전 기록을 덮어쓰지 않고 시간 흐름을 누적하기 위해서다.

고정 형식은 사람뿐 아니라 `report.sh` 같은 후속 도구가 파싱하기도 쉽게 한다.

## 초미니 확인

매 실행마다 로그 파일을 덮어쓰면 무엇을 잃는가?  
→ 이전 시점의 상태와 장애 전후 추적 정보.

## WHY/HOW Gate

- [ ] Timestamp와 고정 필드가 필요한 이유를 설명할 수 있다.
- [ ] append와 추적성의 관계를 설명할 수 있다.

[← Resource Sampling](./b1-1-40-080-resource-sampling.md) · [Index](./b1-1-40-000-index.md) · [다음 → cron Environment](./b1-1-40-100-cron-environment.md)
