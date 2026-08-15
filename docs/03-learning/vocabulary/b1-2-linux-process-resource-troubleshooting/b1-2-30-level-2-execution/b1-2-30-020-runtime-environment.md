---
mission: B1-2
stage: execution
level: 2
order: 20
unit: Runtime Environment
gate: V4
visual_learning: DEFERRED
---

# 020. Runtime Environment

## 실행 목표
`agent-leak-app`이 부트 시퀀스를 통과할 수 있도록 공식 사전조건을 구성하고 Evidence를 남긴다.

## 필수 확인
```bash
id
id -u
uname -m
```
`id -u`가 `0`이면 해당 셸에서 제공 바이너리를 실행하지 않는다.

## 핵심 환경
```text
AGENT_PORT = 15034
MEMORY_LIMIT = 50~512 MB 정수
CPU_MAX_OCCUPY = 10~100 % 정수
MULTI_THREAD_ENABLE = true/false 계열
secret.key = agent_api_key_test
bind = 0.0.0.0:15034 가능
```

`AGENT_HOME`, `AGENT_UPLOAD_DIR`, `AGENT_KEY_PATH`, `AGENT_LOG_DIR`의 실제 경로도 실행 전에 기록한다. 현재 runtime guide에서는 `AGENT_KEY_PATH`를 key directory로 두고 그 아래 `secret.key`를 만든다.

## Evidence
환경 변수의 값, 디렉터리 존재, 로그 디렉터리 쓰기 가능, 실행 바이너리 아키텍처를 preflight 파일로 저장한다. secret 값은 필요 이상으로 반복 노출하지 않는다.

## V4 확인
- [ ] non-root 여부를 확인했다.
- [ ] 15034와 세 장애 변수의 범위를 설명할 수 있다.
- [ ] key/log/upload 경로의 존재와 권한을 검증할 수 있다.

[← 010](./b1-2-30-010-source-safety-preflight.md) · [Level 2 Index](./b1-2-30-000-index.md) · [030 →](./b1-2-30-030-observability-baseline.md)
