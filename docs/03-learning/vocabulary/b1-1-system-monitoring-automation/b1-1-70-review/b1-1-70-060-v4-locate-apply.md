---
mission: B1-1
stage: review
order: 60
unit: V4 Locate and Apply
gate: V4
visual_learning: DEFERRED
---

# V4 — 실제 위치·명령·적용 복원

## 위치/명령 퀴즈

| 질문 | 핵심 답 |
|---|---|
| SSH 최종 해석값 | `sshd -T` |
| TCP LISTEN 상태 | `ss -lntp` |
| Group membership | `id` |
| ACL 확인 | `getfacl` |
| 현재 구현 Agent env | `/etc/agent-app/agent.env` |
| monitor.sh | `/home/agent-admin/agent-app/bin/monitor.sh` |
| monitor log | `/var/log/agent-app/monitor.log` |
| agent-admin crontab | `sudo -u agent-admin crontab -l` |
| 최근 로그 | `tail` |
| rotation 정책 | `size 10M / rotate 10` |

## 실전 확인

답을 외우는 데서 끝내지 않고 실제 시스템에서는 명령 결과를 Evidence로 보존한다.

## Gate

- [ ] 질문을 보면 해당 파일·명령·설정 위치를 바로 찾는다.
- [ ] 설정 확인과 Runtime 확인 명령을 구분한다.

[← 이전](./b1-1-70-050-v3-relation-reconstruction.md) · [Review Index](./b1-1-70-000-index.md) · [다음 →](./b1-1-70-070-troubleshooting-scenarios.md)
