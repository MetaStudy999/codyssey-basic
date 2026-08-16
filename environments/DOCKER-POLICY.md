# R01 Docker Policy

## 목적

Round 01에서 Docker를 **Mission CLEAR의 기본 필수조건이 아니라 선택적 Training Layer**로 관리합니다.

공식 Mission/Evaluation이 특정 실행환경을 요구하면 공식 자료가 최우선입니다. 그 외에는 Docker 사용 여부만으로 PASS/FAIL/CLEAR를 판정하지 않습니다.

## 핵심 계약

```text
Mission CLEAR
= 공식 Mission/Evaluation
+ 필요한 실제 Runtime
+ Verify
+ Evidence

Docker Lab
= 선택 학습
+ 격리
+ 재현성
+ portability
+ 배포 연습
```

즉 Docker Lab 미수행은 그 자체로 Mission `⛔ BLOCKED` 또는 `FAIL`의 근거가 아닙니다.

## R01 우선순위

1. 공식 Mission/Evaluation 요구 충족
2. Primary Runtime 실행
3. Verify
4. Evidence
5. `✅ CLEAR`
6. 필요하거나 학습 가치가 높은 경우 Secondary Platform Check
7. Docker Lab은 필요/시간/학습목표에 따라 선택 수행

FAST TRACK에서는 Docker가 CLEAR를 지연시키면 Docker Lab을 뒤로 미룹니다.

## 환경 역할

- `MAC-V`: macOS → OrbStack Ubuntu 24.04 직접 Linux Runtime. R01의 기본 Primary Linux 환경
- `WIN-V`: Windows 11 Pro → WSL2 Ubuntu 24.04 직접 Linux Runtime. 권장 Secondary/Portability 환경
- `MAC-D`: macOS → OrbStack Docker. 선택 Docker Lab
- `WIN-D`: Windows 11 Pro → WSL2 Ubuntu 24.04 → Docker. 선택 Docker Portability Lab

## Docker가 특히 유용한 경우

- 깨끗한 Python/Node runtime 재현
- Web/API 서비스 격리
- DB volume/persistence 실습
- 환경변수/Secret 주입 연습
- multi-service 개발환경 연습
- 배포 전 containerization 연습

## Docker를 최종 판정에 사용하지 않는 경우

다음처럼 시스템/외부 서비스 자체가 평가 대상이면 Docker가 실제 요구를 대체하지 않습니다.

- OS-level SSH/UFW/users/groups/ACL/cron
- 실제 GitHub Issue/PR/Review metadata
- 실제 AWS resource/network/deployment
- 실제 외부 AI Provider 호출
- 실제 배포 URL/browser/team acceptance

## 현재 R01 운영 원칙

```text
Primary Mission Runtime = 필수
Secondary Platform Check = 권장
Docker Lab = 선택
공식 Docker 요구 = 공식 자료가 있을 때만 Gate
```

R01 전체 CLEAR 이후 Docker Foundation → Docker Compose → Multi-container → CI/CD → Kubernetes 등은 별도 Advanced/Portability Track으로 확장할 수 있습니다.
