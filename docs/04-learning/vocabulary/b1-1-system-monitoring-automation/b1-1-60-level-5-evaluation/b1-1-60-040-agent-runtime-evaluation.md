---
mission: B1-1
level: 5
order: 40
unit: Agent Runtime Evaluation
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# Agent Runtime 평가 설명

## 성공 기준

```text
non-root 실행
Boot Sequence 5단계 [OK]
Agent READY
0.0.0.0:15034 LISTEN
```

## WHY

프로세스가 존재하는 것만으로 서비스가 준비된 것은 아니다. 초기화가 끝나고 실제 15034 TCP socket이 LISTEN해야 서비스 준비 상태를 증명할 수 있다.

## HOW

원본의 `AGENT_*` 다섯 환경 변수를 사용하고 실제 제공 ZIP/실행 파일명을 확인한다. 구현용 `AGENT_PROCESS_PATTERN`은 원본 필수 환경 변수와 구분한다.

## PROOF

```bash
pgrep -af '<실제 제공 앱 파일명>'
sudo ss -lntp | grep ':15034\b' || true
ps -o user,pid,ppid,cmd -p <PID>
```

키 값 자체는 Evidence에 노출하지 않는다.

## 예상 꼬리질문

- Process는 있는데 Port가 없으면 무엇을 확인하는가?
- `0.0.0.0`과 `127.0.0.1`의 차이는?
- 왜 Root로 실행하지 않는가?

## V5 Gate

- [ ] READY와 LISTEN을 별개의 Runtime Evidence로 설명한다.
- [ ] 제공 파일명을 가정하지 않고 확인해야 하는 이유를 설명한다.

[← 이전](./b1-1-60-030-users-permissions-evaluation.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-050-monitor-health-evaluation.md)
