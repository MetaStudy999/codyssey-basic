---
mission: B1-1
stage: review
order: 30
unit: Permission and Role Map
gate: V3
visual_learning: DEFERRED
---

# 권한·역할 관계 복원

## 핵심 관계

```text
agent-common = agent-admin + agent-dev + agent-test
agent-core   = agent-admin + agent-dev

upload_files       → agent-common R/W
api_keys           → agent-core ONLY R/W
/var/log/agent-app → agent-core ONLY R/W

monitor.sh
owner = agent-dev
group = agent-core
mode  = 750
executor = agent-admin cron
```

## 핵심 설명

- `agent-test`는 공용 업로드에는 참여하지만 민감한 key와 운영 로그에는 접근하지 않는다.
- `agent-admin`은 `agent-core` 구성원이므로 `agent-dev` 소유의 `750` 스크립트를 group 권한으로 실행할 수 있다.
- ACL은 기본 owner/group/others 모델을 보완해 필요한 접근만 세밀하게 추가한다.

## Gate

- [ ] `agent-common`과 `agent-core` 분리 이유를 최소 권한 원칙으로 설명한다.
- [ ] `750`에서 admin이 실행 가능한 이유를 설명한다.

[← 이전](./b1-1-70-020-fixed-values-recall.md) · [Review Index](./b1-1-70-000-index.md) · [다음 →](./b1-1-70-040-v1-v2-recall.md)
