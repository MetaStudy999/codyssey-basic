---
mission: B1-1
level: 3
order: 60
unit: Binding and Service Readiness
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# 포트 바인딩과 서비스 준비 상태 (Binding & Service Readiness)

## 한 줄 설명

프로세스가 존재하는 것과 애플리케이션이 포트에 바인딩되어 실제 요청을 받을 준비가 된 것은 다른 상태다.

## B1-1 Agent 흐름

```text
실행 파일
→ Process
→ PID
→ 초기화 성공
→ IP:Port Binding
→ LISTEN
→ Agent READY
```

B1-1 목표는 `0.0.0.0:15034` LISTEN이다. `0.0.0.0`은 IPv4 인터페이스 전체에서 연결을 기다리는 wildcard bind로 이해하며 `127.0.0.1:15034`와 의미가 다르다.

## 핵심 관계

```text
Process exists ≠ Service ready
```

그래서 `monitor.sh`는 프로세스 존재와 `15034 LISTEN`을 둘 다 확인한다.

## 초미니 확인

`pgrep`은 성공했지만 `ss`에서 15034가 없다면?  
→ 프로세스는 있으나 서비스가 요청을 받을 준비가 되지 않았을 수 있다.

## WHY/HOW Gate

- [ ] Process/PID/Bind/LISTEN/READY의 순서를 설명할 수 있다.
- [ ] wildcard bind와 loopback bind의 차이를 설명할 수 있다.

[← SSH/LISTEN/Firewall](./b1-1-40-050-ssh-listen-firewall.md) · [Index](./b1-1-40-000-index.md) · [다음 → Preflight & Failure Policy](./b1-1-40-070-preflight-failure-policy.md)
