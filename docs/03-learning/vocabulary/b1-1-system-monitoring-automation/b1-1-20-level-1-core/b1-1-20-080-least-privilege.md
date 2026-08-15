---
mission: B1-1
stage: top-core
order: 80
term: Principle of Least Privilege
abbreviation: PoLP
lifecycle: NEW
---
# B1-1 — 최소 권한 원칙 (Principle of Least Privilege, PoLP)

## 한 줄 설명
업무에 필요한 사용자에게 필요한 권한만 부여하는 보안 원칙이다.

## B1-1에서의 위치
`agent-common`/`agent-core` 분리, Root 원격 로그인 차단, Agent non-root 실행이 모두 이 원칙과 연결된다.

## 핵심 관계
`역할 파악 → 필요한 권한만 허용 → 불필요한 권한 차단 → 사고 범위 축소`

## 초미니 확인
`chmod 777`이 빠른 해결책처럼 보여도 왜 미션의 보안 목적과 맞지 않는지 설명한다.

## Gate
- [ ] V2: 최소 권한을 자기 말로 정의한다.
- [ ] V3: B1-1에서 최소 권한을 적용한 예를 두 가지 말한다.

[← ACL](./b1-1-20-070-acl.md) · [Index](./b1-1-20-000-index.md) · [다음: SSH →](./b1-1-20-090-ssh.md)
