---
mission: B1-1
level: 4
order: 10
unit: Troubleshooting Algorithm
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# 공통 Troubleshooting Algorithm

## 한 줄 설명

오류를 바로 고치려 하지 말고 **현재 상태를 보존한 뒤 실패한 층을 좁혀 가장 작은 수정만 적용하는 절차**다.

## B1-1에서의 위치

권한, SSH, Agent, monitor.sh, cron, logrotate 어느 장애에도 같은 순서를 적용한다.

## 핵심 관계

```text
SYMPTOM → OBSERVE → LAYER → HYPOTHESIS
→ SMALLEST FIX → REVERIFY → RECOVERY → EVIDENCE
```

## 초미니 확인

오류를 본 직후 가장 먼저 할 일은 무엇인가?

- 정답 방향: 상태를 바꾸기 전에 오류 메시지와 현재 상태를 보존·조회한다.

## 진단 습관

```text
현재 상태 조회
→ 실패 층 분리
→ 원인 후보 1~3개
→ 최소 수정
→ 처음 실패한 검증 재실행
```

## Gate

- [ ] 수정 전에 관찰 명령을 먼저 선택할 수 있다.
- [ ] 여러 설정을 동시에 바꾸지 않는 이유를 설명할 수 있다.
- [ ] 재검증 결과가 조치 기록보다 더 중요한 이유를 설명할 수 있다.

[Level 4 Index](./b1-1-50-000-index.md) · [다음: Permission Denied →](./b1-1-50-020-permission-denied.md)
