# R01 미션 실행 환경 / 선택 Docker 실습 매트릭스(Mission Runtime / Optional Docker Lab Matrix)

## 목적

B1-1~B7-2의 FAST TRACK 실제 실행(Runtime)을 빠르게 수행하면서, `MAC-V`와 `WIN-V`는 **동등한 지원 실행 환경(Supported Runtime)**으로, Docker는 **선택 실습**으로 분리합니다.

공식 Mission/Evaluation과 `training/round-01-clear/PHASE-C-RUNBOOK.md`가 CLEAR의 기준(Source of Truth)입니다. 이 문서는 실행환경과 추가 학습 범위를 정리하며 공식 요구사항을 임의로 늘리지 않습니다.

## 한눈에 보기(Quick Read)

```text
MAC-V = 학교 Mac / OrbStack Ubuntu 24.04        ← 지원 실행 환경
WIN-V = Windows 11 Pro / WSL2 Ubuntu 24.04     ← 지원 실행 환경
MAC-D / WIN-D                                  ← 선택 Docker 실습
```

핵심 원칙:

```text
MAC-V와 WIN-V의 Mission/Evaluation/CLEAR 기준은 동일
→ 실제 작업 시 Current Runtime Context 선택
→ 실제 수행한 환경의 Runtime Record를 기록
→ 두 환경 모두 PASS하면 CROSS-PLATFORM VERIFIED 가능
```

플랫폼별 실제 수행 상태는 [`../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)에서 관리합니다.

> 이 Matrix는 **환경 선택 지도**입니다. 실제 수행 명령은 각 Mission의 `BEGINNER-GUIDE.md`와 Phase C Runbook을 따릅니다.

## 📑 목차

- [프로필(Profile)](#profiles)
- [핵심 정책](#policy)
- [15개 Mission Matrix](#matrix)
- [MAC-V / WIN-V 운영](#direct-runtime)
- [선택 Docker 실습](#docker-lab)
- [Docker 실습 공통 체크](#docker-check)
- [Linux Runtime 공통 체크](#linux-check)
- [FAST TRACK과의 관계](#fast-track)

---

<a id="profiles"></a>
## 프로필(Profile)

- `MAC-V`: 학교 macOS → OrbStack Ubuntu 24.04 Linux Machine — 지원 실행 환경(Supported Runtime), Resettable / Ephemeral
- `WIN-V`: 개인 Windows 11 Pro → WSL2 Ubuntu 24.04 direct runtime — 지원 실행 환경(Supported Runtime), Persistent
- `MAC-D`: macOS → OrbStack Docker — 선택 Docker 실습(Docker Lab)
- `WIN-D`: Windows 11 Pro → WSL2 Ubuntu 24.04 → Docker — 선택 Docker 실습(Docker Lab)

<a id="policy"></a>
## 핵심 정책

```text
지원 미션 실제 실행(Supported Mission Runtime) = MAC-V 또는 WIN-V
플랫폼별 수행 기록(Runtime Record)             = 각각 별도 기록
교차 플랫폼 검증(Cross-platform Verification)   = 두 환경 실제 PASS 시 추가 품질 상태
Docker 실습(Docker Lab)                         = 선택
```

공식 Mission/Evaluation이 특정 플랫폼을 요구하면 공식 요구가 우선합니다.

Docker를 하지 않았다는 이유만으로 Mission을 BLOCKED/FAIL 처리하지 않습니다. `MAC-V`와 `WIN-V` 두 환경을 모두 수행하지 않았다는 이유만으로도, 공식 요구가 두 플랫폼을 요구하지 않는 한 Mission CLEAR를 자동 차단하지 않습니다.

<a id="matrix"></a>
## 15개 Mission Matrix

| Mission | MAC-V 지원 | WIN-V 지원 | 선택 Docker 실습 | CLEAR에서 주의할 점 |
|---|---|---|---|---|
| **B1-1** | OrbStack Ubuntu 24.04 | WSL2 Ubuntu 24.04 | Agent/monitor process·port·resource·log 반복 연습 | SSH 20022, UFW, users/groups, ACL, cron, Agent 15034는 실제 Linux 실행 환경 Evidence 필요 |
| **B1-2** | 격리 Linux 실습 | 격리 Linux 실습 | disposable container에서 process/CPU/log 장애 관찰 | 장애 실험은 Host를 위험하게 만들지 않고 Before/After 증빙 확보 |
| **B2-1** | Python direct runtime | Python direct runtime | Python CLI/JSONL/CSV 재현성 연습 | CLI와 실제 persistence가 핵심; Docker 불필요 |
| **B2-2** | GitHub + local Git | GitHub + local Git | branch/merge/reset/revert/stash 반복 연습 | 실제 Issue/PR/Review/충돌 기록은 GitHub server-side 증빙 필요 |
| **B3-1** | Python direct runtime | Python direct runtime | clean Python container 자료구조 테스트 | custom 자료구조 요구와 실제 Runtime Verification 우선 |
| **B3-2** | Python/filesystem direct runtime | Python/filesystem direct runtime | 격리 filesystem Mini Git/DAG 실험 | algorithm/정렬/탐색/파일 변경 흐름이 핵심 |
| **B4-1** | browser + GitHub Pages | browser + GitHub Pages | static site container serving | 실제 browser/GitHub Pages 증빙 우선 |
| **B4-2** | Node/Vite + 실제 Supabase | Node/Vite + 실제 Supabase | React/Vite container/dev stack | 실제 Supabase CRUD/deploy 필요; Docker는 선택 |
| **B5-1** | SQLite direct runtime | SQLite direct runtime | clean SQLite container | schema/FK/data/Q01~Q16 결과와 검증 우선 |
| **B5-2** | venv + uvicorn | venv + uvicorn | FastAPI CRUD containerization | 실제 browser CRUD/DB/PRG acceptance 필요 |
| **B5-3** | venv + uvicorn | venv + uvicorn | auth/session app containerization | login/authorization/relationship acceptance 필요 |
| **B6-1** | 실제 AWS + Linux rehearsal | 실제 AWS + Linux rehearsal | Nginx/web container와 port/publish 개념 | VPC/Subnet/IGW/Route/SG/EC2/HTTP 실제 AWS 증빙이 최종 기준 |
| **B6-2** | real AI provider | real AI provider | Git diff→AI API containerization | 실제 provider/Commit/PR 결과와 Secret 보호 필요 |
| **B7-1** | local integration + 실제 배포 | local integration + 실제 배포 | AI chatbot stack containerization | browser/two-user/AI/deploy/team acceptance가 최종 기준 |
| **B7-2** | local integration + 실제 배포 | local integration + 실제 배포 | backend/frontend/DB/AI stack containerization | B7-1 기반 ownership/AI/API/browser/deploy/team acceptance 필요 |

<a id="direct-runtime"></a>
## MAC-V / WIN-V 운영

두 환경의 **결과 기준은 동일**하지만 환경 유지 특성이 다릅니다.

### MAC-V — 학교 Mac

```text
Resettable / Ephemeral
→ CHECK BEFORE INSTALL
→ 환경이 살아 있으면 재설치 생략
→ Reset되었으면 필요한 항목만 재구성
```

### WIN-V — 개인 노트북

```text
Persistent
→ VERIFY BEFORE REINSTALL
→ 기존 WSL2/Repository 보존
→ 문제 있을 때만 최소 Repair
```

작업 시작 시 사용자가 현재 위치를 알려 주면 그 환경을 `Current Runtime Context`로 사용합니다.

```text
학교 Mac → MAC-V
노트북 Win11 → WIN-V
```

플랫폼을 바꾸어 재수행할 때는 새 Context에서 Preflight부터 다시 수행합니다.

<a id="docker-lab"></a>
## 선택 Docker 실습(Optional Docker Lab) 운영

Docker는 FAST TRACK을 지연시키지 않는 범위에서 선택합니다.

```text
Mission CLEAR 우선
→ Docker 학습 가치가 높은가?
   ├─ YES → MAC-D 또는 WIN-D에서 짧은 실습(Lab)
   └─ NO  → Docker Lab SKIP / 후속 Docker Track
```

Docker 실습에서는 전체 미션을 다시 반복할 필요가 없습니다.

```text
Container 기동
→ 핵심 기능 1~3개
→ volume/port/env/reproducibility 중 필요한 개념 확인
→ 안전하게 정리
```

<a id="docker-check"></a>
## Docker 실습(Docker Lab) 공통 체크

- [ ] 이 Mission에서 Docker를 하는 학습 목적이 명확함
- [ ] base image/runtime version 확인
- [ ] 필요한 port만 publish
- [ ] Secret을 image에 bake하지 않음
- [ ] persistence가 필요하면 volume/path 확인
- [ ] container 삭제 후 재현 가능

<a id="linux-check"></a>
## Linux Runtime 공통 체크

- [ ] Ubuntu 24.04 확인
- [ ] `uname -m` 확인
- [ ] systemd 필요 여부 확인
- [ ] package/version 기록
- [ ] 필요한 service/port 실제 확인
- [ ] Host/Guest 경계 확인
- [ ] Repository/Branch/Commit 기록
- [ ] 파괴적 변경 전 backup/rollback 확인

<a id="fast-track"></a>
## FAST TRACK과의 관계

```text
Stage 1 Required
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 Optional
B4-2 → B5-2 → B5-3 → B7-2
```

한 지원 환경에서 공식 조건을 충족해 Mission CLEAR한 후 다른 지원 환경에서 같은 Mission을 재수행하여 `CROSS-PLATFORM VERIFIED`를 추가할 수 있습니다. 이 추가 검증 또는 Docker 실습이 미완료라는 이유로 다음 Mission 실행을 자동 차단하지 않습니다.
