---
mission: B1-1
stage: review
order: 10
unit: One-page Mission Map
gate: INTEGRATED-RECALL
visual_learning: DEFERRED
---

# B1-1 전체 구조 한 장 복원

## 한 줄 목표

B1-1의 보안·권한·Agent·관제·자동화·Evidence 흐름을 문서 없이 순서대로 복원한다.

## 핵심 흐름

```text
Linux
→ User / Group / Permission / ACL / PoLP
→ SSH 20022 / Root Login Disable
→ Firewall 20022 + 15034
→ AGENT_* / Key
→ Agent non-root
→ 5 × [OK] / Agent READY / 15034 LISTEN
→ monitor.sh
→ monitor.log
→ agent-admin cron / every minute
→ logrotate 10MB / 10 files
→ Evidence
```

## 복원 질문

1. 권한 설계와 네트워크 보안 사이에 무엇이 오는가?
2. Agent가 READY여도 무엇을 별도로 확인해야 하는가?
3. monitor.sh 뒤에 어떤 자동화와 로그 수명주기가 이어지는가?

## Gate

- [ ] 위 흐름을 보지 않고 2분 안에 다시 쓸 수 있다.
- [ ] 각 화살표의 이유를 한 문장으로 설명할 수 있다.

[← Review Index](./b1-1-70-000-index.md) · [다음 →](./b1-1-70-020-fixed-values-recall.md)
