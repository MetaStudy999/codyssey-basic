# R01 Mission Runtime / Optional Docker Lab Matrix

## 목적

B1-1~B7-2의 FAST TRACK Runtime을 빠르게 수행하면서, Docker는 **선택 실습**으로 분리합니다.

공식 Mission/Evaluation과 `training/round-01-clear/PHASE-C-RUNBOOK.md`가 CLEAR의 Source of Truth입니다. 이 문서는 실행환경과 추가 학습 범위를 정리하며 공식 요구사항을 임의로 늘리지 않습니다.

## 한눈에 보기(Quick Read)

```text
Primary Runtime          = Mission CLEAR의 실제 핵심 실행환경
Secondary Platform Check = 권장 이식성 확인
Docker Lab               = 선택 학습
```

현재 B1-1은:

```text
Primary   = MAC-V / OrbStack Ubuntu 24.04
Secondary = WIN-V / WSL2 Ubuntu 24.04
Docker    = 선택
```

> Matrix는 **환경 선택 지도**입니다. 실제 수행 명령은 각 Mission의 `BEGINNER-GUIDE.md`와 Phase C Runbook을 따릅니다.

## 📑 목차

- [Profile](#profiles)
- [핵심 정책](#policy)
- [15개 Mission Matrix](#matrix)
- [Secondary Platform Check 운영](#secondary)
- [Optional Docker Lab 운영](#docker-lab)
- [Docker Lab 공통 체크](#docker-check)
- [VM/Linux Machine 공통 체크](#linux-check)
- [FAST TRACK과의 관계](#fast-track)

---

<a id="profiles"></a>
## Profile

- `MAC-V`: macOS → OrbStack Ubuntu 24.04 Linux Machine — 기본 Primary
- `WIN-V`: Windows 11 Pro → WSL2 Ubuntu 24.04 direct runtime — 권장 Secondary
- `MAC-D`: macOS → OrbStack Docker — 선택 Docker Lab
- `WIN-D`: Windows 11 Pro → WSL2 Ubuntu 24.04 → Docker — 선택 Docker Portability Lab

<a id="policy"></a>
## 핵심 정책

```text
Primary Mission Runtime = 필수
Secondary Platform Check = 권장
Docker Lab = 선택
```

Docker를 하지 않았다는 이유만으로 Mission을 BLOCKED/FAIL 처리하지 않습니다. 공식 Mission/Evaluation이 Docker를 명시적으로 요구하는 경우에만 그 공식 요구가 우선합니다.

<a id="matrix"></a>
## 15개 Mission Matrix

| Mission | Primary Runtime | Secondary Check | Optional Docker Lab | CLEAR에서 주의할 점 |
|---|---|---|---|---|
| **B1-1** | `MAC-V` | `WIN-V` | Agent/monitor process·port·resource·log 반복 연습 | SSH 20022, UFW, users/groups, ACL, cron, Agent 15034는 실제 Linux Runtime Evidence 필요 |
| **B1-2** | `MAC-V` 격리 실습 | `WIN-V` | disposable container에서 process/CPU/log 장애 관찰 연습 | 장애 실험은 Host를 위험하게 만들지 않고 Before/After Evidence 확보 |
| **B2-1** | `MAC-V` Python direct runtime | `WIN-V` | Python CLI/JSONL/CSV 재현성 연습 | CLI와 실제 persistence가 핵심; Docker 불필요 |
| **B2-2** | GitHub + `MAC-V` local Git | `WIN-V` | branch/merge/reset/revert/stash 반복 연습 | 실제 Issue/PR/Review/충돌 기록은 GitHub server-side Evidence 필요 |
| **B3-1** | `MAC-V` Python direct runtime | `WIN-V` | clean Python container에서 자료구조 테스트 | custom 자료구조 요구와 runtime verify 우선 |
| **B3-2** | `MAC-V` Python/filesystem direct runtime | `WIN-V` | 격리 filesystem에서 Mini Git/DAG 반복 실험 | algorithm/정렬/탐색/파일 변경 흐름이 핵심 |
| **B4-1** | `MAC-V` + browser + GitHub Pages | `WIN-V` | static site container serving 연습 | 실제 browser/GitHub Pages Evidence가 우선 |
| **B4-2** | `MAC-V` Node/Vite + 실제 Supabase | `WIN-V` | React/Vite container/dev stack 연습 | 실제 Supabase CRUD/deploy 필요; Docker는 선택 |
| **B5-1** | `MAC-V` SQLite direct runtime | `WIN-V` | clean SQLite container 반복 연습 | schema/FK/data/Q01~Q16 결과와 verify 우선 |
| **B5-2** | `MAC-V` venv + uvicorn | `WIN-V` | FastAPI CRUD containerization 연습 | 실제 browser CRUD/DB/PRG acceptance 필요 |
| **B5-3** | `MAC-V` venv + uvicorn | `WIN-V` | auth/session app containerization 연습 | login/authorization/relationship acceptance 필요 |
| **B6-1** | 실제 AWS + `MAC-V` rehearsal | `WIN-V` rehearsal | Nginx/web container와 port/publish 개념 연습 | VPC/Subnet/IGW/Route/SG/EC2/HTTP 실제 AWS Evidence가 최종 기준 |
| **B6-2** | `MAC-V` + real AI provider | `WIN-V` | Git diff→AI API 흐름 containerization 연습 | 실제 provider/Commit/PR 결과와 Secret 보호 필요 |
| **B7-1** | `MAC-V` local integration + 실제 배포 | `WIN-V` | AI chatbot stack containerization 연습 | browser/two-user/AI/deploy/team acceptance가 최종 기준 |
| **B7-2** | `MAC-V` local integration + 실제 배포 | `WIN-V` | backend/frontend/DB/AI stack containerization 연습 | B7-1 결과 기반 ownership/AI/API/browser/deploy/team acceptance 필요 |

<a id="secondary"></a>
## Secondary Platform Check 운영

Primary Runtime에서 Mission CLEAR에 필요한 경로를 먼저 완료합니다. Windows/WSL2 쪽은 같은 미션을 처음부터 전부 반복하지 않고 필요한 핵심만 확인합니다.

```text
1. 환경 기동
2. 핵심 기능 1~3개 재현
3. Mac/OrbStack ↔ Windows/WSL2 차이 기록
4. 정리
```

Secondary Check는 권장 학습이지만 공식 Mission이 요구하지 않는 한 CLEAR Gate가 아닙니다.

<a id="docker-lab"></a>
## Optional Docker Lab 운영

Docker는 FAST TRACK을 지연시키지 않는 범위에서 선택합니다.

```text
Mission CLEAR 우선
→ Docker 학습 가치가 높은가?
   ├─ YES → MAC-D 또는 WIN-D에서 짧은 Lab
   └─ NO  → Docker Lab SKIP / 후속 Docker Track으로 이동
```

Docker Lab에서는 전체 미션을 다시 반복하지 않습니다.

```text
Container 기동
→ 핵심 기능 1~3개
→ volume/port/env/reproducibility 중 필요한 개념 확인
→ 안전하게 정리
```

<a id="docker-check"></a>
## Docker Lab 공통 체크

- [ ] 이 Mission에서 Docker를 하는 학습 목적이 명확함
- [ ] base image/runtime version 확인
- [ ] 필요한 port만 publish
- [ ] Secret을 image에 bake하지 않음
- [ ] persistence가 필요하면 volume/path 확인
- [ ] container 삭제 후 재현 가능

<a id="linux-check"></a>
## VM/Linux Machine 공통 체크

- [ ] Ubuntu 24.04 확인
- [ ] `uname -m` 확인
- [ ] systemd 필요 여부 확인
- [ ] package/version 기록
- [ ] 필요한 service/port 실제 확인
- [ ] Host/Guest 경계 확인
- [ ] destructive change 전 backup/rollback 확인

<a id="fast-track"></a>
## FAST TRACK과의 관계

```text
Stage 1 Required
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 Optional
B4-2 → B5-2 → B5-3 → B7-2
```

Secondary Check 또는 Docker Lab이 아직 미완료라는 이유로 다음 Mission Runtime을 막지 않습니다. 환경 학습 Coverage는 Mission 상태와 별도로 기록합니다.
