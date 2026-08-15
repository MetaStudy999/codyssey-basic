---
mission: B1-1
level: 3
order: 10
unit: System Layers
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# 시스템 층 분리 (System Layers)

## 한 줄 설명

B1-1을 **접근·권한 / 서비스 / 운영** 층으로 나누면 서로 다른 문제를 섞지 않고 이해할 수 있다.

## B1-1에서의 위치

```text
[접근·권한]
User / Group / Permission / ACL / PoLP

[서비스]
sshd / Agent Process / TCP Port / LISTEN / Firewall

[운영]
monitor.sh / Resource / Log / cron / logrotate / Evidence
```

## 핵심 관계

한 층의 성공이 다른 층의 성공을 보장하지 않는다.

```text
권한 OK ≠ Agent READY
Process exists ≠ 15034 LISTEN
LISTEN ≠ 외부 접속 가능
cron 등록 ≠ 실제 로그 증가
```

## 왜 필요한가

문제가 생겼을 때 먼저 실패 층을 좁히면 무관한 설정을 동시에 바꾸는 실수를 줄일 수 있다.

## 초미니 확인

`agent-test`가 `api_keys`에 접근하지 못하는 것은 어느 층인가?  
→ 접근·권한 층.

## WHY/HOW Gate

- [ ] 세 층을 문서 없이 말할 수 있다.
- [ ] 각 층의 대표 실패 예를 하나씩 들 수 있다.

[Level 3 Index](./b1-1-40-000-index.md) · [다음 → Linux Permission Model](./b1-1-40-020-linux-permission-model.md)
