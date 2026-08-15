---
mission: B1-1
stage: review
order: 70
unit: Troubleshooting Scenarios
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# 장애 시나리오 통합 복습

## 공통 알고리즘

```text
Symptom
→ Observe
→ Layer
→ Hypothesis
→ Smallest Fix
→ Reverify
→ Recovery
→ Evidence
```

## 시나리오

1. `Permission denied`가 발생했다.
2. `Port 20022` 설정은 있는데 LISTEN하지 않는다.
3. Process는 있는데 `15034`가 없다.
4. `Address already in use`가 나온다.
5. 수동 `monitor.sh`는 성공하지만 cron에서는 실패한다.
6. logrotate 후 새 `monitor.log`에 쓰지 못한다.
7. CPU Warning이 발생했지만 Agent Health는 정상이다.

각 상황에서 **첫 조회 명령 → 실패 층 → 최소 수정 → 동일 검증 재실행** 순서로 말한다.

## Gate

- [ ] 무조건 `sudo`, `chmod -R 777`, 반복 restart를 첫 조치로 쓰지 않는다.
- [ ] 최소 5개 시나리오를 Evidence까지 연결한다.

[← 이전](./b1-1-70-060-v4-locate-apply.md) · [Review Index](./b1-1-70-000-index.md) · [다음 →](./b1-1-70-080-v5-oral-explanation.md)
