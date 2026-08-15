---
mission: B1-1
level: 3
order: 110
unit: Log Lifecycle
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# 로그 수명주기와 책임 분리 (Log Lifecycle)

## 한 줄 설명

`monitor.sh`는 상태를 기록하고, cron은 반복 실행을 예약하며, logrotate는 커지는 로그의 보관·회전 책임을 맡는다.

## 역할 분리

```text
monitor.sh → 상태 측정 + append
cron       → 매분 실행 예약
logrotate  → 크기 기준 회전 + 보관 + 압축
```

```text
Monitoring responsibility ≠ Scheduling responsibility ≠ Log lifecycle responsibility
```

B1-1 필수 로그 회전 정책은 `10MB / 10개`다.

보너스 영역의 7일 압축·archive 이동·30일 삭제는 필수 정책과 구분되는 확장 수명주기다.

## 왜 필요한가

한 스크립트가 측정·스케줄링·보관을 모두 떠맡으면 변경 영향 범위와 장애 원인 분석이 복잡해진다.

## 초미니 확인

`monitor.sh`가 정상인데 로그 파일이 무한히 커지는 문제는 어느 책임을 먼저 확인해야 하는가?  
→ logrotate 등 로그 수명주기 관리.

## WHY/HOW Gate

- [ ] monitor.sh, cron, logrotate의 책임을 각각 설명할 수 있다.
- [ ] `10MB / 10개` 정책의 의미를 설명할 수 있다.

[← cron Environment](./b1-1-40-100-cron-environment.md) · [Index](./b1-1-40-000-index.md) · [다음 → Explanation Gate](./b1-1-40-120-principles-explanation-gate.md)
