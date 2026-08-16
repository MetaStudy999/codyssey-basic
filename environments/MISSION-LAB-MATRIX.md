# R01 Mission Dual-Runtime Lab Matrix

## 목적

B1-1~B7-2를 수행할 때 **Docker Lab**과 **VM/Linux Machine Lab**을 함께 학습하되, FAST TRACK을 방해하지 않도록 Primary Runtime과 Twin Lab을 분리합니다.

공식 Mission/Evaluation과 `training/round-01-clear/PHASE-C-RUNBOOK.md`가 CLEAR의 Source of Truth입니다. 이 문서는 **추가 실습/Portability 설계**이며 공식 요구사항을 임의로 늘리지 않습니다.

## Profile

- `MAC-D`: macOS → OrbStack Docker
- `MAC-V`: macOS → OrbStack Ubuntu 24.04 Linux Machine
- `WIN-D`: Windows 11 Pro → WSL2 Ubuntu 24.04 → Docker
- `WIN-V`: Windows 11 Pro → WSL2 Ubuntu 24.04 direct runtime

## 15개 Mission Lab Matrix

| Mission | Primary Runtime | Docker Lab | VM/Linux Machine Lab | CLEAR에서 주의할 점 |
|---|---|---|---|---|
| **B1-1** | `MAC-V` | Agent/monitor process, port, resource, log 동작을 container에서 제한적으로 재현 | SSH 20022, UFW, users/groups, ACL, Agent 15034, cron, log rotation 전체 시스템 실습 | Docker는 SSH/UFW/권한/cron 최종 Evidence를 대체하지 않음 |
| **B1-2** | `MAC-V` | 격리 container에서 process/CPU/log 관찰과 안전한 장애 재현 연습 | Ubuntu Machine에서 OOM→CPU Spike→Deadlock controlled experiment와 Before/After 분석 | 실제 장애 실험은 격리·복구 기준을 지키며 Host를 위험하게 만들지 않음 |
| **B2-1** | `MAC-D` | Python CLI, JSONL persistence, CRUD/검색/CSV를 재현 가능한 container에서 수행 | Ubuntu Machine에서 동일 CLI와 실제 파일 persistence/permission 확인 | 실제 데이터 경로와 persistence 확인 필요 |
| **B2-2** | GitHub + local runtime | disposable container에서 Git branch/merge/reset/revert/stash 연습 | Ubuntu Machine에서 Git CLI와 실제 team repository workflow 보조 | 실제 Issue/PR/Review/충돌 기록은 GitHub server-side Evidence가 필요 |
| **B3-1** | `MAC-D` | Python data structure 구현과 테스트를 clean container에서 실행 | Ubuntu Machine에서 동일 구현과 runtime/파일 구조 재현 | custom 자료구조 요구와 verify가 우선 |
| **B3-2** | `MAC-D` | Mini Git/DAG/file-change tracker를 격리 filesystem에서 반복 실험 | Ubuntu Machine에서 실제 filesystem/history 흐름 재현 | 실제 algorithm/정렬/탐색 요구와 runtime verify가 우선 |
| **B4-1** | `MAC-D` + browser | static site를 container HTTP server로 제공하고 browser 연결 확인 | Ubuntu Machine에서 `python3 -m http.server 8000`과 filesystem/server 실습 | 실제 browser/API/GitHub Pages Evidence는 별도 확인 |
| **B4-2** | `MAC-D` | React/Vite와 Supabase client 환경을 container/dev stack으로 실행 | Ubuntu Machine에서 Node/Vite 직접 실행과 네트워크/env 재현 | 실제 Supabase CRUD와 deploy가 필요하며 frontend에 service-role key 금지 |
| **B5-1** | `MAC-D` | SQLite schema/data/query Q01~Q16을 clean container에서 반복 실행 | Ubuntu Machine의 sqlite CLI에서 수동 SQL/DB file 확인 | schema/FK/data/query 실제 결과와 verify가 우선 |
| **B5-2** | `MAC-D` | FastAPI/Jinja2/SQLAlchemy/SQLite CRUD app을 container로 실행 | Ubuntu Machine에서 venv + uvicorn + DB file 직접 운영 | 실제 browser CRUD/DB/PRG acceptance 필요 |
| **B5-3** | `MAC-D` | auth/session/relationship app을 container로 실행, secret은 runtime injection | Ubuntu Machine에서 venv + SESSION_SECRET + login/protected route 실습 | 실제 login/authorization/relationship acceptance 필요 |
| **B6-1** | 실제 AWS + `MAC-V` rehearsal | Nginx/web container와 port/publish 개념을 로컬에서 사전 연습 | Ubuntu Machine에서 Nginx/SSH/network/service 운영을 EC2 전 단계로 연습 | VPC/Subnet/IGW/Route/SG/EC2/HTTP 실제 AWS Evidence를 로컬 실습이 대체하지 않음 |
| **B6-2** | `MAC-D` + real provider | Git diff → AI API → commit/PR text 흐름을 container에서 재현 | Ubuntu Machine에서 Python/Git CLI와 env 기반 AI 호출을 직접 실행 | 실제 provider와 Commit/PR 결과 확인 필요; API key 노출 금지 |
| **B7-1** | `MAC-D` + 실제 배포 | FastAPI/SQLite/AI chatbot local stack을 container로 통합 실행 | Ubuntu Machine에서 venv/uvicorn/DB/AI env 기반 server-like 실행 | browser/two-user/AI/deploy/team acceptance가 최종 기준 |
| **B7-2** | `MAC-D` + 실제 배포 | backend/frontend/DB/AI 고도화 stack을 container로 통합 실행 | Ubuntu Machine에서 ownership/auth/API/AI 통합을 직접 운영 | B7-1 결과 기반, ownership/AI/API/browser/deploy/team acceptance 필요 |

## Twin Lab 운영 방식

Primary Runtime에서 Mission CLEAR에 필요한 실제 경로를 먼저 끝냅니다. 이후 같은 미션을 처음부터 전부 반복하지 않고 Twin Lab에서는 아래 네 가지만 확인합니다.

```text
1. 환경 기동
2. 핵심 기능 1~3개 재현
3. 환경 차이/오류 기록
4. 정리
```

예:

```text
B5-2 Primary MAC-D
→ CRUD 정상 동작 + Verify + Evidence + CLEAR

B5-2 Twin WIN-V
→ venv 생성
→ uvicorn 실행
→ Create/Read 한 번 확인
→ Windows/WSL2 차이 기록
→ 종료
```

## Docker Lab 공통 체크

- [ ] 명시적인 base image/runtime version
- [ ] source mount 또는 image build 방식 확인
- [ ] 필요한 port만 publish
- [ ] Secret을 image에 bake하지 않음
- [ ] DB/data persistence가 필요한 경우 volume/path 확인
- [ ] container 삭제 후 재현 가능

## VM/Linux Machine Lab 공통 체크

- [ ] Ubuntu 24.04 확인
- [ ] `uname -m` 확인
- [ ] systemd 필요 여부 확인
- [ ] package/version 기록
- [ ] 필요한 service/port 실제 확인
- [ ] Host와 Guest 경계를 구분
- [ ] destructive change 전 backup/rollback 경로 확인

## FAST TRACK과의 관계

Dual-Runtime Lab은 다음 순서를 바꾸지 않습니다.

```text
Stage 1 Required
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 Optional
B4-2 → B5-2 → B5-3 → B7-2
```

Mission의 Twin Lab이 아직 미완료라는 이유만으로 다음 Mission Runtime을 막지 않습니다. Twin Lab은 학습/Portability Coverage로 별도 기록합니다.
