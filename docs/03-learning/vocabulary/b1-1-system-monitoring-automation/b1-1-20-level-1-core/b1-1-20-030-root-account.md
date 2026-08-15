---
mission: B1-1
stage: top-core
order: 30
term: Root Account / Superuser
lifecycle: NEW
---
# B1-1 — 루트 계정 / 슈퍼유저 (Root Account / Superuser)

## 한 줄 설명
Linux에서 시스템 전체를 변경할 수 있는 최고 권한 계정이다.

## B1-1에서의 위치
Root 원격 로그인은 차단하고, Agent는 Root가 아닌 일반 계정으로 실행한다.

## 핵심 관계
`Root = 지속적 최고 권한`과 `sudo = 필요한 명령에 한시적 관리자 권한`을 구분한다.

## 초미니 확인
왜 Agent를 Root로 실행하면 편해 보여도 보안상 좋지 않은지 한 문장으로 말한다.

## Gate
- [ ] V2: Root의 권한 범위를 설명한다.
- [ ] V3: Root 차단과 최소 권한 원칙의 관계를 설명한다.

[← User Account](./b1-1-20-020-user-account.md) · [Index](./b1-1-20-000-index.md) · [다음: sudo →](./b1-1-20-040-sudo.md)
