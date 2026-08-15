---
mission: B1-1
stage: review
order: 50
unit: V3 Relation Reconstruction
gate: V3
visual_learning: DEFERRED
---

# V3 — 관계 복원

## 관계 질문

1. User → Group → Permission → ACL은 어떻게 연결되는가?
2. `sshd config → LISTEN → Firewall → Client`는 왜 각각 다른 검증인가?
3. Process → PID → LISTEN은 어떤 관계인가?
4. Health failure와 Resource warning은 왜 분리하는가?
5. `monitor.sh → monitor.log → cron → logrotate`는 어떻게 역할을 나누는가?
6. Evidence는 설정 파일과 Runtime 상태를 어떻게 연결하는가?

## 핵심 원칙

```text
설정값 ≠ 실제 동작
Process 존재 ≠ 서비스 준비 완료
Warning ≠ Health Failure
문서 작성 ≠ Runtime Evidence
```

## Gate

- [ ] 최소 6개 관계를 원인·결과 또는 계층 관계로 설명한다.
- [ ] 핵심 Dependency Map을 백지에서 다시 그린다.

[← 이전](./b1-1-70-040-v1-v2-recall.md) · [Review Index](./b1-1-70-000-index.md) · [다음 →](./b1-1-70-060-v4-locate-apply.md)
