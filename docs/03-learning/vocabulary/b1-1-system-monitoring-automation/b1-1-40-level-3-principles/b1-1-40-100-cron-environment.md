---
mission: B1-1
level: 3
order: 100
unit: cron Environment
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# cron과 로그인 셸 환경의 차이 (cron Environment)

## 한 줄 설명

cron은 사용자가 터미널에 로그인했을 때의 PATH·export·profile을 그대로 보장하지 않으므로 자동화는 명시적인 실행 환경을 가져야 한다.

## 비교

```text
Interactive shell
→ 사용자 PATH / export / shell profile 존재

cron
→ 더 제한되고 예측 가능한 환경이 필요
```

현재 구현 저장소는 재현성을 높이기 위해:

- 절대 경로 사용
- 명시적 PATH
- `/etc/agent-app/agent.env` 직접 로드

방식을 사용한다. 환경 파일 경로는 현재 구현 선택이며 원본의 필수 환경 변수 5개 자체와 구분한다.

## 핵심 원리

> 자동화는 사람이 로그인했을 때만 존재하는 암묵적 환경에 의존하면 안 된다.

## 초미니 확인

터미널에서 `monitor.sh`가 성공했는데 cron에서 실패한다면 먼저 무엇을 의심할 수 있는가?  
→ PATH, 환경 변수, 실행 사용자, 절대 경로 등 실행 환경 차이.

## WHY/HOW Gate

- [ ] interactive shell과 cron 환경 차이를 설명할 수 있다.
- [ ] 명시적 환경이 재현성을 높이는 이유를 설명할 수 있다.

[← Log Traceability](./b1-1-40-090-log-traceability.md) · [Index](./b1-1-40-000-index.md) · [다음 → Log Lifecycle](./b1-1-40-110-log-lifecycle.md)
