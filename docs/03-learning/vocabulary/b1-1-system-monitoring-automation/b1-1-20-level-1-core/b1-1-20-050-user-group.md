---
mission: B1-1
stage: top-core
order: 50
term: User / Group
lifecycle: NEW
---
# B1-1 — 사용자·그룹 (User / Group)

## 한 줄 설명
사용자를 역할별로 묶어 여러 파일·디렉터리 권한을 함께 관리하는 기본 단위다.

## B1-1에서의 위치
`agent-common = admin/dev/test`, `agent-core = admin/dev` 구조를 사용한다.

## 핵심 관계
`User → Group Membership → Shared/Secure Directory Permission`

## 초미니 확인
왜 `agent-test`가 `agent-common`에는 있지만 `agent-core`에는 없어야 하는지 설명한다.

## Gate
- [ ] V2: User와 Group의 차이를 설명한다.
- [ ] V3: common/core 분리가 역할 분리와 어떻게 연결되는지 말한다.

[← sudo](./b1-1-20-040-sudo.md) · [Index](./b1-1-20-000-index.md) · [다음: File Permission →](./b1-1-20-060-file-permission.md)
