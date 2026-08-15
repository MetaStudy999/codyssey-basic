---
mission: B1-1
level: 3
order: 120
unit: Principles Explanation Gate
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# Level 3 원리 자기 설명 Gate

## 목적

Level 3의 목표는 명령어 암기가 아니라 **구조와 동작 이유를 자기 말로 연결하는 것**이다.

## 백지 구조

문서를 보지 않고 다음을 그린다.

```text
User / Group
→ Permission / ACL / PoLP

sshd config
→ 20022 LISTEN
→ Firewall
→ Client

Agent Process
→ 15034 LISTEN
→ monitor.sh
→ Log
→ cron
→ logrotate
```

## 3~5분 설명 질문

1. 왜 owner/group/others와 ACL을 같이 쓰는가?
2. 왜 `agent-common`과 `agent-core`를 나누는가?
3. 왜 SSH 설정만 보고 완료라고 할 수 없는가?
4. 왜 Process와 LISTEN을 둘 다 검사하는가?
5. 왜 CPU/MEM/DISK 초과는 WARNING이고 process/port 실패는 `exit 1`인가?
6. 왜 cron은 명시적 PATH와 환경이 필요한가?
7. 왜 monitor와 logrotate의 책임을 분리하는가?

## 통과 기준

- [ ] `750`을 역할과 권한으로 설명한다.
- [ ] DAC/ACL/setgid의 차이를 설명한다.
- [ ] SSH 설정 → LISTEN → Firewall → 접속 관계를 설명한다.
- [ ] Process exists ≠ Service ready를 설명한다.
- [ ] Fail-fast와 Warning을 구분한다.
- [ ] 반복 샘플링 → 로그 누적 → 추적성 관계를 설명한다.
- [ ] cron과 interactive shell의 환경 차이를 설명한다.
- [ ] monitor / cron / logrotate의 책임을 분리해 설명한다.

> 기억 문장: **구조를 층으로 나누면 설정·권한·서비스·네트워크·자동화가 섞이지 않고, 장애가 생겨도 어느 층을 확인해야 하는지 보인다.**

[← Log Lifecycle](./b1-1-40-110-log-lifecycle.md) · [Level 3 Index](./b1-1-40-000-index.md) · [다음: Level 4 Troubleshooting →](../b1-1-50-level-4-troubleshooting.md)
