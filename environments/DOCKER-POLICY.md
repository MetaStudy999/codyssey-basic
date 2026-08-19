# R01 Docker 정책(Docker Policy)

## 목적

Round 01에서 Docker를 **Mission CLEAR의 기본 필수조건이 아니라 선택 훈련 계층(Training Layer)**으로 관리합니다.

공식 Mission/Evaluation이 특정 실행환경을 요구하면 공식 자료가 최우선입니다. 그 외에는 Docker 사용 여부만으로 PASS/FAIL/CLEAR를 판정하지 않습니다.

## 한눈에 보기(Quick Read)

```text
Current Runtime Context 선택(MAC-V 또는 WIN-V)
→ Mission CLEAR 우선
→ 필요하면 다른 지원 Runtime에서 교차 플랫폼 검증
→ Docker 실습(Docker Lab)은 선택
```

따라서:

```text
Docker 미수행 ≠ FAIL
Docker 미수행 ≠ BLOCKED
Docker 사용     ≠ 자동 CLEAR
```

현재 Mission의 실제 실행은 [NEXT-ACTIONS.md](../training/round-01-clear/NEXT-ACTIONS.md)를 우선합니다.

플랫폼별 실제 수행 현황은 [RUNTIME-EXECUTION-MATRIX.md](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)를 사용합니다.

## 📑 목차

- [핵심 계약](#contract)
- [R01 우선순위](#priority)
- [환경 역할](#roles)
- [Docker가 특히 유용한 경우](#useful)
- [Docker가 실제 요구를 대체하지 못하는 경우](#not-substitute)
- [현재 R01 운영 원칙](#r01-principles)

---

<a id="contract"></a>
## 핵심 계약

```text
Mission CLEAR
= 공식 Mission/Evaluation
+ 필요한 실제 실행(Runtime)
+ 검증(Verification)
+ 증빙(Evidence)

MAC-V / WIN-V
= 동등한 지원 실행 환경(Supported Runtime)

CROSS-PLATFORM VERIFIED
= 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS

Docker 실습(Docker Lab)
= 선택 학습
+ 격리
+ 재현성
+ 이식성(portability)
+ 배포 연습
```

즉 Docker Lab 미수행은 그 자체로 Mission `⛔ BLOCKED` 또는 `FAIL`의 근거가 아닙니다.

<a id="priority"></a>
## R01 우선순위

1. 공식 Mission/Evaluation 요구 확인
2. 현재 실행 환경(Current Runtime Context)을 `MAC-V` 또는 `WIN-V`로 선택
3. 선택한 지원 Runtime에서 실제 실행
4. 검증(Verification)
5. 증빙(Evidence)
6. 플랫폼별 Runtime Record 갱신
7. 조건 충족 시 `✅ 완료(CLEAR)`
8. 필요하면 다른 지원 Runtime에서 실제 재수행하여 교차 플랫폼 검증 추가
9. Docker 실습(Docker Lab)은 필요/시간/학습목표에 따라 선택 수행

FAST TRACK에서는 Docker 또는 추가 교차 플랫폼 검증이 공식 CLEAR를 지연시키지 않도록 별도 품질/훈련 계층으로 관리합니다. 단, 공식 Mission/Evaluation이 이를 요구하면 공식 요구가 우선합니다.

<a id="roles"></a>
## 환경 역할

- `MAC-V`: 학교 macOS → OrbStack Ubuntu 24.04 직접 Linux Runtime. **지원 실행 환경**, Resettable / Ephemeral
- `WIN-V`: 개인 Windows 11 Pro → WSL2 Ubuntu 24.04 직접 Linux Runtime. **지원 실행 환경**, Persistent
- `MAC-D`: macOS → OrbStack Docker. 선택 Docker 실습(Docker Lab)
- `WIN-D`: Windows 11 Pro → WSL2 Ubuntu 24.04 → Docker. 선택 Docker 실습(Docker Lab)

운영 차이:

```text
MAC-V → CHECK BEFORE INSTALL
WIN-V → VERIFY BEFORE REINSTALL
```

`MAC-V`와 `WIN-V`는 합격 등급의 Primary/Secondary 관계가 아닙니다.

<a id="useful"></a>
## Docker가 특히 유용한 경우

- 깨끗한 Python/Node runtime 재현
- Web/API 서비스 격리
- DB volume/persistence 실습
- 환경변수/Secret 주입 연습
- multi-service 개발환경 연습
- 배포 전 containerization 연습

<a id="not-substitute"></a>
## Docker가 실제 요구를 대체하지 못하는 경우

다음처럼 시스템/외부 서비스 자체가 평가 대상이면 Docker가 실제 요구를 대체하지 않습니다.

- OS-level SSH/UFW/users/groups/ACL/cron
- 실제 GitHub Issue/PR/Review metadata
- 실제 AWS resource/network/deployment
- 실제 외부 AI Provider 호출
- 실제 배포 URL/browser/team acceptance

Docker Lab 결과를 MAC-V 또는 WIN-V 직접 Runtime PASS로 자동 변환하지 않습니다.

<a id="r01-principles"></a>
## 현재 R01 운영 원칙

```text
MAC-V / WIN-V 지원 Mission Runtime = 공식 요구 수행 환경
플랫폼별 Runtime Record             = 각각 실제 결과 기록
CROSS-PLATFORM VERIFIED             = 두 환경 실제 PASS 시 추가 품질 상태
Docker 실습(Docker Lab)             = 선택
공식 Docker/특정 Runtime 요구        = 공식 자료가 있을 때만 Gate
```

R01 전체 CLEAR 이후 Docker Foundation → Docker Compose → Multi-container → CI/CD → Kubernetes 등은 별도 Advanced/Portability Track으로 확장할 수 있습니다.
