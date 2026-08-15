---
mission: B1-1
stage: review
order: 20
unit: Fixed Values Recall
gate: SOURCE-LOCK
visual_learning: DEFERRED
---

# B1-1 고정값 복원

## 외워야 할 값

| 항목 | 값 |
|---|---|
| SSH Port | `20022` |
| Agent Port | `15034` |
| CPU Warning | `> 20%` |
| MEM Warning | `> 10%` |
| DISK Warning | `> 80%` |
| cron | 매분 |
| logrotate | `10MB / 10개` |
| monitor.sh mode | `750` |
| monitor.sh owner | `agent-dev` |
| monitor.sh group | `agent-core` |
| cron executor | `agent-admin` |

## 초미니 확인

종이를 가리고 다음을 답한다.

```text
SSH = ?
Agent = ?
CPU = ?
MEM = ?
DISK = ?
Cron = ?
Rotation = ?
monitor owner/group/mode = ?
```

## Gate

- [ ] 모든 고정값을 원본과 혼동 없이 복원한다.
- [ ] 현재 구현 선택과 원본 고정값을 구분한다.

[← 이전](./b1-1-70-010-one-page-mission-map.md) · [Review Index](./b1-1-70-000-index.md) · [다음 →](./b1-1-70-030-permission-role-map.md)
