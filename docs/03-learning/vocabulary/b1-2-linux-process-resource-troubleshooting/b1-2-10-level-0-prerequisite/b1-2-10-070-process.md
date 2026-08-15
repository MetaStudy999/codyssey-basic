---
mission: B1-2
level: 0
order: 70
term: Process
lifecycle: REVIEW
gate: V1
visual_learning: DEFERRED
---

# 프로세스 (Process)

## 한 줄 설명
실행 중인 프로그램의 인스턴스다.

## B1-2에서의 위치
세 장애 모두 `agent-leak-app` 프로세스의 상태 변화로 관찰한다.

## 핵심 관계
`Program → Process → PID / CPU / Memory`

## 초미니 확인
`ps -ef`에서 대상 프로세스를 찾는다.

## V1 Gate
- [ ] 프로세스와 프로그램을 구분한다.

[← 이전](./b1-2-10-060-cli.md) · [Level 0 Index](./b1-2-10-000-index.md) · [다음 →](./b1-2-10-080-pid.md)
