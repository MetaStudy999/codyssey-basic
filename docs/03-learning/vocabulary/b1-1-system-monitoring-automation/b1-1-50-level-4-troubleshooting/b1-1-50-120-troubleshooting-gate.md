---
mission: B1-1
level: 4
order: 120
unit: Troubleshooting Gate
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Level 4 Troubleshooting Gate

## 목표

B1-1 장애를 보았을 때 명령을 무작정 실행하지 않고 **실패 층을 분리하고, 최소 수정 후 같은 검증으로 정상 복귀를 증명**한다.

## 실전 질문

1. `Permission denied`가 나왔을 때 왜 대상 파일만 보면 안 되는가?
2. `Port 20022`가 설정돼 있는데 `ss`에 안 보이면 어떤 순서로 확인하는가?
3. process는 있는데 `15034`가 없으면 가능한 원인은 무엇인가?
4. 수동 `monitor.sh`는 되는데 cron에서 실패하면 무엇을 먼저 보는가?
5. logrotate 후 `monitor.log` 쓰기가 실패하면 어떤 권한을 보는가?
6. CPU Warning과 Agent Health failure를 왜 분리하는가?
7. 오류 수정 후 어떤 검증을 다시 실행해야 하는가?

## 백지 진단 지도

```text
Permission
SSH Config
SSH LISTEN
Firewall
Agent Startup
Process / Port
monitor.sh
cron
logrotate
Resource / Log
        ↓
Before / After Evidence
```

## 통과 기준

- [ ] 오류 메시지를 보존하고 조회부터 시작한다.
- [ ] 권한·설정·process·port·firewall·cron 층을 구분한다.
- [ ] 가장 작은 수정만 적용한다.
- [ ] process와 port를 별도로 진단한다.
- [ ] 수동 성공과 cron 성공을 별도 검증한다.
- [ ] Before/After Evidence를 작성할 수 있다.
- [ ] 최초 실패 검증을 다시 실행한다.

## 기억 문장

> 오류를 없애는 것이 목표가 아니라, 실패 층을 분리하고 정상 복귀를 같은 검증으로 증명하는 것이 목표다.

[← Before/After Evidence](./b1-1-50-110-before-after-evidence.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: Level 5 Evaluation →](../b1-1-60-level-5-evaluation.md)
