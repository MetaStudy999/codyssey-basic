---
mission: B1-1
level: 3
order: 30
unit: DAC ACL setgid
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# DAC, ACL, setgid의 역할 분담

## 한 줄 설명

기본 소유권과 mode는 큰 권한 경계를 만들고, ACL은 예외·세부 권한을 보완하며, setgid 디렉터리는 새 파일의 그룹 일관성을 돕는다.

## 핵심 관계

```text
chown / chgrp → owner·group 지정
chmod         → 기본 mode 경계
ACL           → 추가 사용자·그룹 세부 제어
setgid        → 하위 항목의 그룹 일관성 유지
```

## B1-1 사례

`/home/agent-admin` 전체를 넓게 열지 않고 `agent-common`에 `--x` 통과 권한만 주는 것은 ACL의 세밀한 제어 사례다.

공용 디렉터리의 `2770` 앞자리 `2`는 setgid bit이며, 새 항목이 공용 그룹을 이어받도록 돕는다.

## 왜 필요한가

협업을 위해 `chmod 777`처럼 모든 사람에게 권한을 넓히는 대신 필요한 사람·경로에 필요한 만큼만 허용할 수 있다.

## 초미니 확인

ACL을 쓰는 이유는 기본 mode를 없애기 위해서인가?  
→ 아니다. 기본 경계를 유지하면서 더 세밀하게 보완하기 위해서다.

## WHY/HOW Gate

- [ ] chmod, ACL, setgid의 역할 차이를 설명할 수 있다.
- [ ] `--x` parent traversal이 왜 필요한지 설명할 수 있다.

[← Permission Model](./b1-1-40-020-linux-permission-model.md) · [Index](./b1-1-40-000-index.md) · [다음 → Least Privilege](./b1-1-40-040-least-privilege.md)
