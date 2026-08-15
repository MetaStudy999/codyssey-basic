---
mission: B1-1
level: 2
order: 80
unit: Agent Runtime
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — Agent Runtime

## 한 줄 설명
Agent를 Root가 아닌 일반 사용자로 실행하고 시작 검증·READY·프로세스·TCP `15034` LISTEN을 실제 상태로 확인한다.

## 성공 기준
```text
Boot Sequence 1~5 = 모두 [OK]
Agent READY
Process owner != root
0.0.0.0:15034 = LISTEN
```

## 핵심 관계
```text
Environment/Key OK → Agent process → Boot checks → READY → 15034 LISTEN
```

검증 예:
```bash
pgrep -af '<실제 제공 앱 파일명>'
sudo ss -lntp | grep ':15034\b' || true
```

실제 파일명은 제공 ZIP을 확인한 결과를 사용한다.

## 초미니 확인
프로세스가 보이지만 `15034`가 LISTEN하지 않으면 Agent가 정상이라고 볼 수 있는가? → **아니다.**

## V4 Gate
- [ ] 실제 Agent 프로세스를 찾을 수 있다.
- [ ] 실행 사용자가 root가 아님을 확인할 수 있다.
- [ ] Boot 5 `[OK]`와 `Agent READY`를 확인할 수 있다.
- [ ] TCP 15034 LISTEN을 확인할 수 있다.

[← Agent Environment & Key](./b1-1-30-070-agent-environment-key.md) · [Index](./b1-1-30-000-index.md) · [다음: monitor.sh →](./b1-1-30-090-monitor-script.md)
