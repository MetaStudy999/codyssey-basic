---
mission: B1-1
level: 5
order: 50
unit: monitor.sh Health Evaluation
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# monitor.sh Health 평가 설명

## 원본 핵심 정책

```text
Process 없음      → exit 1
15034 LISTEN 없음 → exit 1
Firewall inactive → WARNING, 계속
CPU > 20%         → WARNING
MEM > 10%         → WARNING
DISK > 80%        → WARNING
정상 상태         → monitor.log append
```

## WHY

Process/Port 실패는 Agent 서비스 자체가 제공되지 않는 상태다. 반면 Firewall 비활성이나 자원 임계값 초과는 위험 신호이지만 상태 수집을 중단할 이유는 아니므로 WARNING으로 분리한다.

## HOW / PROOF

```bash
/home/agent-admin/agent-app/bin/monitor.sh
echo $?
tail -n 5 /var/log/agent-app/monitor.log
```

정상뿐 아니라 의도된 실패 시나리오도 설명할 수 있어야 한다.

## 구현상 추가 구분

현재 구현은 실행 환경 자체가 잘못된 경우 `exit 2`를 사용할 수 있다. 이는 원본의 Health failure `exit 1`을 바꾸는 것이 아니라 구현상 오류 종류를 추가 구분한 것이다.

## V5 Gate

- [ ] Health와 Resource Warning을 분리해 설명한다.
- [ ] exit code와 로그 결과를 실제 Evidence와 연결한다.

[← 이전](./b1-1-60-040-agent-runtime-evaluation.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-060-resource-monitoring-evaluation.md)
