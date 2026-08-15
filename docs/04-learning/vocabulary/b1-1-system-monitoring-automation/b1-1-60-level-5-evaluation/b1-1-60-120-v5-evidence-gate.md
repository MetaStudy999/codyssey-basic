---
mission: B1-1
level: 5
order: 120
unit: V5 Evidence Gate
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# V5 Evidence Gate

## 목적

B1-1의 핵심 주장을 평가자에게 설명하고, 각 주장에 실제 Evidence를 연결할 수 있는지 최종 확인한다.

## Gate 체크

- [ ] SSH 20022와 Root 차단을 WHY/HOW/PROOF까지 설명한다.
- [ ] Firewall 20022/15034와 기본 inbound 제한을 설명한다.
- [ ] `agent-common` / `agent-core`를 최소 권한으로 설명한다.
- [ ] ACL allow/deny 결과를 설명한다.
- [ ] Agent non-root, READY, 15034 LISTEN을 구분해 증명한다.
- [ ] Process와 Port를 모두 확인하는 이유를 설명한다.
- [ ] Health failure와 Resource WARNING을 분리한다.
- [ ] CPU/MEM/DISK 수집 방식을 현재 구현 기준으로 설명한다.
- [ ] cron 등록과 실제 매분 실행을 구분한다.
- [ ] `10MB / 10개` log rotation을 설명한다.
- [ ] 장애 하나를 Before/After Evidence로 설명한다.
- [ ] 원본 요구와 Ubuntu 24.04 등 현재 환경 관찰을 구분한다.
- [ ] 확보하지 못한 Runtime Evidence를 PASS로 주장하지 않는다.

## 최종 답변 템플릿

```text
QUESTION:
WHAT:
WHY:
HOW:
PROOF:
LIMIT / ENVIRONMENT:
FOLLOW-UP:
```

## 최종 판정

```text
V5 READY
= 핵심 요구 설명 가능
+ 구현 이유 설명 가능
+ 실제 Evidence 연결 가능
+ 한계 과장 없음
```

> 문서가 완성되었다는 사실은 Runtime PASS와 별개다.

[← 이전](./b1-1-60-110-oral-answer-practice.md) · [Index](./b1-1-60-000-index.md) · [Review Pack →](../b1-1-70-review-pack.md)
