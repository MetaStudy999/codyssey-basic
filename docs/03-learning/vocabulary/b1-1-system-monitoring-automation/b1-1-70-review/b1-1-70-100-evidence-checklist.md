---
mission: B1-1
stage: review
order: 100
unit: Evidence Checklist
gate: EVIDENCE
visual_learning: DEFERRED
---

# Runtime Evidence 체크

## 핵심 Evidence

- [ ] SSH `20022` 실제 LISTEN
- [ ] Root 원격 로그인 차단 확인
- [ ] Firewall active + `20022/tcp`, `15034/tcp`
- [ ] 사용자/그룹 구성
- [ ] ACL allow/deny 결과
- [ ] Agent non-root
- [ ] Boot Sequence 5 × `[OK]`
- [ ] `Agent READY`
- [ ] `0.0.0.0:15034 LISTEN`
- [ ] monitor process/port failure `exit 1`
- [ ] CPU/MEM/DISK Warning 동작
- [ ] `/var/log/agent-app/monitor.log` append
- [ ] cron 매분 등록 + 실제 로그 증가
- [ ] `10MB / 10개` 회전 정책

## 중요한 구분

```text
설정 파일 존재 = 설정 Evidence
실제 process/socket/log = Runtime Evidence
학습 문서 완료 = Learning Evidence
```

## Gate

- [ ] 각 주장에 맞는 Evidence 종류를 구분한다.
- [ ] 실제로 확보하지 못한 Evidence를 완료 처리하지 않는다.

[← 이전](./b1-1-70-090-five-minute-blank-recall.md) · [Review Index](./b1-1-70-000-index.md) · [다음 →](./b1-1-70-110-learning-ready-decision.md)
