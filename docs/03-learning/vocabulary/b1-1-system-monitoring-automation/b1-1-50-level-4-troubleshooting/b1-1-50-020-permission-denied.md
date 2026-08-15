---
mission: B1-1
level: 4
order: 20
unit: Permission Denied
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Permission Denied 진단

## 한 줄 설명

대상 파일 하나만 보지 않고 **부모 경로의 통과 권한, 그룹 멤버십, ACL과 mask까지 함께 확인**한다.

## B1-1에서의 위치

`upload_files`는 `agent-test`가 사용할 수 있어야 하지만 `api_keys`와 `/var/log/agent-app`은 차단되어야 한다.

## 핵심 관계

```text
User membership
→ Parent directory x permission
→ Owner/Group/Others
→ ACL entry
→ ACL mask
→ 실제 허용/차단 시험
```

## 확인 명령

```bash
id agent-test
namei -l /home/agent-admin/agent-app/upload_files
getfacl /home/agent-admin
getfacl /home/agent-admin/agent-app/upload_files
getfacl /home/agent-admin/agent-app/api_keys
```

## 재검증

```bash
sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/upload_files/.probe && rm /home/agent-admin/agent-app/upload_files/.probe'

sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/api_keys/.should-fail'
```

첫 번째는 성공, 두 번째는 `Permission denied`가 정상 목표다.

## Gate

- [ ] 부모 디렉터리의 `x` 권한이 왜 필요한지 설명할 수 있다.
- [ ] ACL 항목과 `mask::`를 함께 확인한다.
- [ ] `chmod -R 777`을 사용하지 않고 최소 수정할 수 있다.

[← Troubleshooting Algorithm](./b1-1-50-010-troubleshooting-algorithm.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: SSH Configuration →](./b1-1-50-030-ssh-configuration-failure.md)
