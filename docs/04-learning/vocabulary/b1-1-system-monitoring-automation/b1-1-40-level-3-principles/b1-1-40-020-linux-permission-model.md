---
mission: B1-1
level: 3
order: 20
unit: Linux Permission Model
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# 리눅스 사용자·그룹 권한 모델 (Linux Permission Model)

## 한 줄 설명

Linux 기본 권한은 파일·디렉터리마다 `owner / group / others`와 `r / w / x`를 조합해 접근 경계를 표현한다.

## B1-1 사례

`monitor.sh`의 목표 권한은 `750 = rwxr-x---`이다.

```text
owner 7 = rwx → agent-dev
 group 5 = r-x → agent-core
others 0 = --- → 그 외 사용자
```

`agent-admin`은 `agent-core` 그룹을 통해 실행할 수 있고 `agent-test`는 접근하지 못한다.

## 핵심 관계

```text
Role
→ owner/group 배치
→ r/w/x 권한
→ 실제 허용·차단 결과
```

숫자 `750` 자체보다 **누가 수정하고, 누가 실행하고, 누가 차단되는지**가 핵심이다.

## 초미니 확인

`750`에서 group의 권한은?  
→ 읽기와 실행(`r-x`).

## WHY/HOW Gate

- [ ] `750`을 숫자 없이 역할 관점으로 설명할 수 있다.
- [ ] owner/group/others의 차이를 B1-1 사용자로 설명할 수 있다.

[← System Layers](./b1-1-40-010-system-layers.md) · [Index](./b1-1-40-000-index.md) · [다음 → DAC, ACL & setgid](./b1-1-40-030-dac-acl-setgid.md)
