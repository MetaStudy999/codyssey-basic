---
mission: B1-1
stage: top-core
order: 280
term: Exit Status
lifecycle: NEW
---
# B1-1 — 종료 상태 (Exit Status)

## 한 줄 설명
명령이나 스크립트가 성공했는지 실패했는지를 호출자에게 전달하는 숫자 결과다.

## B1-1에서의 위치
`monitor.sh`는 정상 흐름에서 `0`, Process 또는 Port Health 실패에서 `exit 1`을 사용한다.

## 핵심 관계
`Check 결과 → Exit Status → 성공/실패를 자동화가 판단`.

## 초미니 확인
화면에 경고 문자열을 출력하는 것과 `exit 1`을 반환하는 것이 자동화 관점에서 왜 다른지 설명한다.

## Gate
- [ ] V2: Exit Status의 목적을 설명한다.
- [ ] V3: Health Check와 Exit Status의 관계를 말한다.

[← Log Rotation](./b1-1-20-270-log-rotation.md) · [Index](./b1-1-20-000-index.md) · [다음: Level 2 →](../b1-1-30-level-2-execution.md)
