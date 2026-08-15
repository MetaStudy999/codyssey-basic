---
mission: B1-1
level: 5
order: 100
unit: Troubleshooting Response
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# 장애 꼬리질문 답변 구조

## 답변 순서

```text
Symptom
→ Observe
→ Layer
→ Hypothesis
→ Smallest Fix
→ Reverify
→ Evidence
```

## 대표 질문 1

**Process는 있는데 15034가 없다면?**

실제 PID/command → startup 상태 → AGENT_PORT → `ss` → port conflict → bind address → key/permission/environment 순서로 범위를 좁힌다.

## 대표 질문 2

**수동 monitor.sh는 되는데 cron에서는 실패한다면?**

crontab 실행자, cron service, PATH, 환경 변수, 실행 권한을 확인하고 최소 환경으로 재현한 뒤 실제 로그 증가를 다시 본다.

## 대표 질문 3

**20022 LISTEN인데 외부 접속이 안 된다면?**

서버 LISTEN → UFW → 외부 Security Group/NAT/경로 → 실제 client 접속 순서로 로컬과 외부 네트워크를 분리한다.

## 금지 답변

```text
일단 777로 바꿉니다.
일단 sudo로 실행합니다.
일단 restart합니다.
```

원인 분리 없는 조치는 평가 답변으로 사용하지 않는다.

## V5 Gate

- [ ] 장애에서 첫 조회 명령을 말할 수 있다.
- [ ] 수정 전후 같은 검증을 다시 수행하는 이유를 설명한다.

[← 이전](./b1-1-60-090-security-operations-principles.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-110-oral-answer-practice.md)
