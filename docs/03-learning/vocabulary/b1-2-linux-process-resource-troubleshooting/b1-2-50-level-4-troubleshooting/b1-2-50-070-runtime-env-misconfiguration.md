---
mission: B1-2
stage: troubleshooting
order: 70
unit: Runtime Environment Misconfiguration
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Runtime / Environment 오설정 진단

## 증상

OOM/CPU/Deadlock을 재현하려고 했는데 앱이 정상적으로 시작하지 않거나 포트가 열리지 않는다.

## 관찰

장애 시나리오보다 먼저 Mission 사전조건을 확인한다.

- non-root 실행인가?
- `AGENT_HOME`, `AGENT_PORT`, `AGENT_UPLOAD_DIR`, `AGENT_KEY_PATH`, `AGENT_LOG_DIR`가 준비됐는가?
- `AGENT_PORT=15034`인가?
- key 경로 아래 `secret.key`가 존재하는가?
- `MEMORY_LIMIT=50~512` 정수인가?
- `CPU_MAX_OCCUPY=10~100` 정수인가?
- `MULTI_THREAD_ENABLE` 값이 허용 형식인가?

## 실패 층·가설

앱 사전조건 실패와 OOM/CPU/Deadlock 자체를 섞지 않는다.

## 최소 수정

잘못된 환경 변수나 경로 **하나를 먼저 수정**하고 다시 부트/포트 상태를 확인한다.

## 재검증

정상 시작과 tcp/15034 상태를 확보한 뒤에만 장애 시나리오로 진입한다.

## Evidence

secret 값 자체를 불필요하게 출력하지 말고 파일 존재/권한/경로 검증을 우선한다.

## Gate

`재현 실패`와 `사전조건 실패`를 구분할 수 있어야 한다.

[← 이전](./b1-2-50-060-thread-lock-evidence.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-080-evidence-insufficient.md)
