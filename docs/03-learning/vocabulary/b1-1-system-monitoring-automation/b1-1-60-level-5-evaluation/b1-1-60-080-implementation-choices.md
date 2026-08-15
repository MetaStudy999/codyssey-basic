---
mission: B1-1
level: 5
order: 80
unit: Implementation Choices
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# 구현 선택 이유 설명

## `pgrep -f`

조건에 맞는 PID를 직접 찾기 위한 선택이다. `ps`는 찾은 PID의 사용자·명령을 사람이 확인하는 보조 검증에 적합하다.

## `ss`

프로세스 존재가 아니라 실제 TCP socket의 LISTEN 상태를 확인하기 위해 사용한다.

## `getfacl`

기본 mode뿐 아니라 ACL entry와 mask까지 확인해야 실제 유효 권한을 판단할 수 있다.

## `logrotate`

로그 생명주기를 monitor script와 분리하여 시스템 표준 도구에 맡긴다.

## 절대 경로 / 명시적 PATH

cron의 제한된 실행 환경에서 interactive shell 의존성을 줄이기 위한 현재 구현 선택이다.

## 평가에서 주의

`이 도구가 유일한 정답`이라고 말하지 않는다. 원본이 방법을 자유롭게 허용한 항목은 **현재 구현의 선택 이유**로 설명한다.

## V5 Gate

- [ ] 도구 이름보다 해결하려는 문제를 먼저 말한다.
- [ ] 원본 필수와 구현 선택을 구분한다.

[← 이전](./b1-1-60-070-cron-log-evaluation.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-090-security-operations-principles.md)
