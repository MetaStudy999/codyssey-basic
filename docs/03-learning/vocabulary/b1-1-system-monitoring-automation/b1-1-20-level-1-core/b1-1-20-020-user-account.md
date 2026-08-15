---
mission: B1-1
stage: top-core
order: 20
term: User Account
lifecycle: NEW
---
# B1-1 — 사용자 계정 (User Account)

## 한 줄 설명
시스템에서 누가 명령을 실행하고 파일에 접근하는지 구분하는 신원이다.

## B1-1에서의 위치
`agent-admin`, `agent-dev`, `agent-test`를 서로 다른 역할로 사용한다.

## 핵심 관계
`User Account → Group Membership → Permission → Allowed/Denied`

## 초미니 확인
`id <user>` 출력에서 UID와 그룹 목록을 찾아본다.

## Gate
- [ ] V2: 계정과 사람이 왜 1:1 개념이 아닐 수 있는지 설명한다.
- [ ] V3: 사용자 계정이 그룹·권한과 어떻게 연결되는지 말한다.

[← Linux](./b1-1-20-010-linux.md) · [Index](./b1-1-20-000-index.md) · [다음: Root →](./b1-1-20-030-root-account.md)
