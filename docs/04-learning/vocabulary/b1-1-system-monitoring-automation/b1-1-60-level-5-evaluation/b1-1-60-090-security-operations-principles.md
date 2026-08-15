---
mission: B1-1
level: 5
order: 90
unit: Security and Operations Principles
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# 보안·운영 원리 평가 설명

## 최소 권한

Root 원격 로그인 차단, 역할별 계정, common/core 분리, 민감 디렉터리 제한은 모두 필요한 권한만 부여하려는 같은 원리로 연결된다.

## 추적성

고정 로그 포맷과 append는 시간 흐름을 보존하여 장애 전후 비교와 Evidence 생성을 가능하게 한다.

## 책임 분리

```text
sshd       → 원격 접근
Firewall   → 네트워크 허용 경계
Agent      → 서비스 제공
monitor.sh → Health/Resource 관제
cron       → 주기 실행
logrotate  → 로그 수명주기
```

각 책임을 분리하면 문제 발생 시 어느 층을 확인해야 하는지 명확해진다.

## 예상 꼬리질문

- 왜 Root 차단이 추적성에도 도움이 되는가?
- 왜 `api_keys`와 로그를 test에게 열지 않는가?
- 왜 monitor.sh가 로그 삭제까지 직접 하지 않아도 되는가?

## V5 Gate

- [ ] 개별 설정을 최소 권한·추적성·책임 분리라는 원리로 묶어 설명한다.
- [ ] 보안 설정과 운영 편의의 trade-off를 과장 없이 설명한다.

[← 이전](./b1-1-60-080-implementation-choices.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-100-troubleshooting-response.md)
