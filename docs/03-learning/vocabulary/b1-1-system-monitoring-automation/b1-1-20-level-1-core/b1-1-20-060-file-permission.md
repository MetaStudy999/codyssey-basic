---
mission: B1-1
stage: top-core
order: 60
term: File Permission
lifecycle: NEW
---
# B1-1 — 파일 권한 (File Permission)

## 한 줄 설명
파일이나 디렉터리를 누가 읽고, 쓰고, 실행할 수 있는지 정하는 규칙이다.

## B1-1에서의 위치
`monitor.sh`는 `750`, 공용·보안 디렉터리는 역할에 따라 읽기/쓰기 범위를 나눈다.

## 핵심 관계
`Owner / Group / Others + r/w/x → 실제 접근 가능 여부`

## 초미니 확인
`rwxr-x---`가 어떤 사용자 범주에 어떤 권한을 주는지 말한다.

## Gate
- [ ] V2: read/write/execute 차이를 설명한다.
- [ ] V3: 파일 권한이 사용자·그룹과 연결되는 방식을 설명한다.

[← User/Group](./b1-1-20-050-user-group.md) · [Index](./b1-1-20-000-index.md) · [다음: ACL →](./b1-1-20-070-acl.md)
