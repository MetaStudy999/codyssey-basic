---
mission: B1-1
level: 2
order: 70
unit: Agent Environment and Key
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — Agent Environment & Key

## 한 줄 설명
Agent가 필요한 경로·포트·키 위치를 원본 `AGENT_*` 5개 환경변수로 연결하고 제공 ZIP의 실제 실행 파일을 추측하지 않고 확인한다.

## 원본 필수 환경변수
```text
AGENT_HOME
AGENT_PORT
AGENT_UPLOAD_DIR
AGENT_KEY_PATH
AGENT_LOG_DIR
```

재현용 예시:
```text
AGENT_HOME=/home/agent-admin/agent-app
AGENT_PORT=15034
AGENT_UPLOAD_DIR=/home/agent-admin/agent-app/upload_files
AGENT_KEY_PATH=/home/agent-admin/agent-app/api_keys/t_secret.key
AGENT_LOG_DIR=/var/log/agent-app
```

## 핵심 관계
```text
Environment → Directory/Key → Agent Startup Validation
ZIP → unzip -l/find/file → 실제 실행 파일 선택
```

`AGENT_PROCESS_PATTERN`은 원본 5개 환경변수가 아니라 현재 `monitor.sh` 구현 호환을 위한 추가 선택값이다.

테스트 키 값은 Git이나 Evidence에 출력하지 않고 파일 존재·소유권·mode만 검증한다.

## 초미니 확인
`agent-app.zip`이 있으니 실행 파일명을 `agent_app.py`라고 추측해도 되는가? → **아니다. ZIP 내부와 실제 파일명을 먼저 확인한다.**

## V4 Gate
- [ ] 원본 `AGENT_*` 5개를 실제 환경에서 찾을 수 있다.
- [ ] `AGENT_PROCESS_PATTERN`과 원본 변수의 차이를 설명할 수 있다.
- [ ] ZIP 내부 파일과 호스트 아키텍처를 확인할 수 있다.
- [ ] 비밀 키 값을 노출하지 않고 존재·권한을 검증할 수 있다.

[← Firewall](./b1-1-30-060-firewall.md) · [Index](./b1-1-30-000-index.md) · [다음: Agent Runtime →](./b1-1-30-080-agent-runtime.md)
