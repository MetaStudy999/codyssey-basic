# B1 — Linux & OS

## 목표

서버 환경을 안전하게 구성하고, 시스템 상태를 관제하며, 장애 원인을 **증거 기반(Evidence-based)**으로 진단하는 기본기를 만든다.

## Mission

- [B1-1 — System Monitoring Automation](./b1-1.md)
- [B1-2 — Linux Troubleshooting](./b1-2.md)

## 핵심 개념

- User / Group
- Permission / ACL
- Process
- SSH
- Firewall
- Environment Variable
- Logging
- cron
- Memory / CPU
- OOM
- Thread / Lock / Deadlock

## 성장 연결

```text
B1 Linux / OS
   ↓
증거 기반 운영·장애 분석
   ↓
B6 Cloud 운영
   ↓
B7 실제 서비스 배포/운영
   ↓
ADVANCED: Observability / Security / SRE
   ↓
PRO: Production Incident Response
```

B1의 목적은 Linux 명령어를 많이 외우는 것이 아니라 **상태를 관찰하고, 원인을 추론하고, 최소 수정 뒤 재검증하는 습관**을 만드는 데 있다.

## Status Source

실제 Mission 수행 상태, 학습 상태, G1~G8은 `config/missions.yaml`을 기준으로 한다. 이 문서는 상태 원본을 중복 저장하지 않는다.
