---
mission: B1-1
level: 5
order: 30
unit: Users Groups Permissions Evaluation
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# 사용자·그룹·권한 평가 설명

## WHAT

```text
agent-common = agent-admin + agent-dev + agent-test
agent-core   = agent-admin + agent-dev
upload_files → common
api_keys     → core only
/var/log/agent-app → core only
```

## WHY

공용 자원과 민감 자원을 역할별로 나누어 최소 권한을 구현한다. `agent-test`는 업로드 영역은 사용할 수 있지만 key와 운영 로그는 직접 수정할 필요가 없다.

## HOW

owner/group/mode, setgid, ACL을 함께 사용한다. `monitor.sh`는 owner `agent-dev`, group `agent-core`, mode `750`이므로 `agent-admin`은 core의 `r-x`로 실행할 수 있다.

## PROOF

```bash
id agent-admin
id agent-dev
id agent-test
getfacl /home/agent-admin/agent-app/upload_files
getfacl /home/agent-admin/agent-app/api_keys
getfacl /var/log/agent-app
```

allow/deny 실제 시험까지 연결한다.

## 예상 꼬리질문

- 왜 `chmod 777`이 아닌가?
- ACL과 기본 mode는 어떤 관계인가?
- 디렉터리 부모 경로의 `x`가 왜 중요한가?

## V5 Gate

- [ ] common/core 분리를 업무 역할로 설명한다.
- [ ] 허용 사례와 차단 사례를 각각 Evidence로 말한다.

[← 이전](./b1-1-60-020-ssh-firewall-evaluation.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-040-agent-runtime-evaluation.md)
