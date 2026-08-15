---
mission: B1-1
stage: top-core
order: 180
term: Environment Variable
lifecycle: NEW
---
# B1-1 — 환경 변수 (Environment Variable)

## 한 줄 설명
프로그램이 사용할 경로·포트 같은 실행 설정값을 코드 밖의 실행 환경에서 전달하는 방식이다.

## B1-1에서의 위치
`AGENT_HOME`, `AGENT_PORT`, `AGENT_UPLOAD_DIR`, `AGENT_KEY_PATH`, `AGENT_LOG_DIR` 5개가 핵심이다.

## 핵심 관계
`Environment Variable → Agent/Script가 동일한 설정을 참조 → 경로·포트 일관성`.

## 초미니 확인
환경변수가 누락되었을 때 파일 경로나 로그 위치가 어긋날 수 있는 이유를 설명한다.

## Gate
- [ ] V2: 환경 변수의 목적을 설명한다.
- [ ] V3: 다섯 AGENT_* 변수가 실행 환경을 어떻게 연결하는지 말한다.

[← LISTEN](./b1-1-20-170-listen.md) · [Index](./b1-1-20-000-index.md) · [다음: Shell Script →](./b1-1-20-190-shell-script.md)
