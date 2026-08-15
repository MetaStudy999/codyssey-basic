---
mission: B1-1
level: 5
order: 110
unit: Oral Answer Practice
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# 1분 / 3~5분 구두 설명 연습

## 1분 구조

```text
목적
→ 권한
→ SSH/Firewall
→ Agent
→ monitor.sh
→ cron/logrotate
→ Evidence
```

예시 핵심 문장:

> B1-1에서는 역할별 사용자·그룹과 최소 권한을 구성하고, SSH 20022와 Root 원격 로그인 차단, 필요한 20022/15034 방화벽 허용을 적용합니다. Agent는 일반 사용자로 실행하고 READY와 15034 LISTEN을 확인합니다. monitor.sh는 process/port Health와 CPU·MEM·DISK를 기록하고, cron이 매분 실행하며 logrotate가 10MB/10개 정책을 담당합니다. 마지막으로 설정 파일이 아니라 실제 process, socket, log 증가와 Evidence로 검증합니다.

## 3~5분 구조

```text
1. 미션 목적
2. User / Group / Permission
3. SSH / Firewall
4. Agent Runtime
5. monitor.sh Health / Resource
6. cron / Log Rotation
7. Troubleshooting
8. Evidence / PASS 한계
```

## 연습 방법

문장을 외우지 말고 각 항목을 `WHAT → WHY → HOW → PROOF`로 확장한다.

## V5 Gate

- [ ] 1분 설명을 끊김 없이 말한다.
- [ ] 3~5분 설명에서 순서를 잃지 않는다.
- [ ] 예상 꼬리질문 3개 이상을 답한다.

[← 이전](./b1-1-60-100-troubleshooting-response.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-120-v5-evidence-gate.md)
