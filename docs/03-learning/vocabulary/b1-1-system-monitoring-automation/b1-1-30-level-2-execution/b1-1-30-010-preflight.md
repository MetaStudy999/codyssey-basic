---
mission: B1-1
level: 2
order: 10
unit: Preflight
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — Preflight

## 한 줄 설명
실제 설정을 바꾸기 전에 현재 OS·도구·서비스·네트워크 상태를 읽기 전용으로 확인하는 단계다.

## B1-1에서의 위치
가장 먼저 수행한다. 현재 구현 저장소의 `scripts/preflight.sh`는 SSH·UFW·사용자·그룹·ACL·cron을 바꾸지 않고 상태를 조회한다.

## 핵심 관계
```text
현재 상태 확인 → FAIL 해결 → GO 확인 → 변경 시작
```

## 핵심 확인
```bash
git rev-parse --show-toplevel
pwd
bash scripts/preflight.sh
```

필요 도구가 없다면 설치 후 다시 Preflight를 실행한다. 설치 패키지 예시는 현재 Ubuntu 구현 환경용이며 원본 Mission의 고정 요구가 아니다.

## 초미니 확인
`preflight.sh`에서 FAIL이 나오는데도 SSH나 Firewall 변경을 진행하면 되는가? → **아니다. 먼저 FAIL 원인을 해결한다.**

## V4 Gate
- [ ] 현재 저장소 위치를 확인할 수 있다.
- [ ] `scripts/preflight.sh`를 찾고 실행할 수 있다.
- [ ] GO/STOP을 다음 변경 단계와 연결할 수 있다.

[← Index](./b1-1-30-000-index.md) · [다음: Users & Groups →](./b1-1-30-020-users-groups.md)
