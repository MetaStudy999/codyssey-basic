---
mission: B1-1
stage: top-core
order: 190
term: Shell Script
lifecycle: NEW
---
# B1-1 — 셸 스크립트 (Shell Script)

## 한 줄 설명
여러 셸 명령과 조건을 파일에 작성해 반복 작업을 자동화하는 프로그램이다.

## B1-1에서의 위치
핵심 산출물인 `monitor.sh`가 프로세스·포트·방화벽·자원 상태를 확인하고 로그를 기록한다.

## 핵심 관계
`Command 여러 개 + 조건 + 변수 + 종료 상태 → 하나의 반복 가능한 Script`.

## 초미니 확인
명령을 수동으로 여러 번 입력하는 것보다 스크립트로 만드는 이유를 설명한다.

## Gate
- [ ] V2: Shell Script의 역할을 설명한다.
- [ ] V3: monitor.sh가 Health Check와 Logging을 묶는 방식을 말한다.

[← Environment Variable](./b1-1-20-180-environment-variable.md) · [Index](./b1-1-20-000-index.md) · [다음: Bash →](./b1-1-20-200-bash.md)
