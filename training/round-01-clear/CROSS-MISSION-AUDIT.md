# R01 Phase B — Cross-Mission Audit

감사일: 2026-08-17

## 목적

15개 Reference를 개별적으로 다시 확장하지 않고, Phase C에서 **한 미션씩 실제 실행할 때 환경 충돌·Secret 노출·DB 오염·Port 충돌·Cloud 과금·협업 Evidence 누락을 최소화**하도록 전체 실행 규칙을 고정합니다.

## 1. Cross-Mission Environment Matrix

| 미션 | 핵심 Runtime | 주요 저장/외부 자원 | 격리 원칙 |
|---|---|---|---|
| B1-1 | Ubuntu/Linux + systemd + OpenSSH + UFW + Bash | `/opt/agent-app`, SSH 20022, Agent 15034, cron | 시스템 수준 변경, 별도 사전점검/백업 |
| B1-2 | 전용 WSL2/VM/Linux + 제공 장애 앱 | PID/log/resource samples | 공유 운영 환경 금지, 장애 실험 격리 |
| B2-1 | Python 3.10+ / stdlib CLI | repo별 JSONL `data/` | repo data 격리 |
| B2-2 | Git + GitHub team workflow | Issue/PR/Review/Protection | 실제 GitHub metadata가 Evidence |
| B3-1 | Python 3.8+ CLI/REPL | memory only/runtime evidence | per-repo 실행 경로 |
| B3-2 | Python 3.10+ CLI/REPL | in-memory Mini Git model | per-repo 실행 경로 |
| B4-1 | Vanilla HTML/CSS/JS + Browser | GitHub API + GitHub Pages | backend/package env 불필요 |
| B4-2 | React 18 + Vite 5 + Supabase | `node_modules`, remote Supabase table | Node project/remote DB 분리 |
| B5-1 | SQLite CLI + SQL | 전용 SQLite 실습 DB | 다른 미션 DB와 공유 금지 |
| B5-2 | FastAPI/Jinja2/SQLAlchemy/SQLite | 전용 `database.db` | per-repo `.venv` + DB 격리 |
| B5-3 | FastAPI/Jinja2/SQLAlchemy/SQLite + Session | 전용 DB + `SESSION_SECRET` | per-repo `.venv` + Secret 격리 |
| B6-1 | AWS `ap-northeast-2` + EC2/Nginx | VPC/Subnet/IGW/SG/EC2/EBS 등 | B6-1 전용 resource 식별/cleanup |
| B6-2 | Python 3.10+ Git/AI CLI | AI provider + Git working tree | env-only Secret, 원격 자동 push 금지 |
| B7-1 | FastAPI/Jinja2/SQLite + AI API | local/deploy DB + team GitHub | per-repo env/DB + actual team/deploy evidence |
| B7-2 | FastAPI/SQLAlchemy + Vanilla frontend + AI API | SQLite/Cloud + Bearer auth | B7-1과 DB/token/runtime 분리 |

## 2. 공통 Runtime 정책

### Python

Phase C 공통 Python 기준은 **Python 3.10+ 우선 Baseline**입니다. B3-1은 Python 3.8+ 요구이므로 3.10 범위에 포함됩니다. FastAPI 계열은 각 저장소의 `requirements.txt`를 따릅니다.

Python package는 OS global site-packages에 일괄 설치하지 않고 미션별 `.venv`를 사용합니다.

```text
B5-2/.venv ≠ B5-3/.venv ≠ B7-1/.venv ≠ B7-2/.venv
```

### Node

B4-2만 React/Vite dependency tree를 사용하며 `node_modules`를 다른 미션과 공유하지 않습니다.

### Database

다음 DB는 전부 미션별로 분리합니다.

```text
B5-1 SQLite SQL 실습 DB
B5-2 Memo DB
B5-3 Project/Task/Auth DB
B7-1 Chat DB
B7-2 Full-stack DB
```

B4-2 Supabase 역시 B4-2 전용 project/table/policy로 취급합니다.

### Port

B1-1 공식 Port는 고정합니다.

```text
SSH 20022/tcp
Agent 15034/tcp
```

FastAPI/Vite/HTTP 개발 서버는 **한 번에 한 미션 Runtime**을 원칙으로 하며, 미션마다 임의로 `8001/8002/...`를 고정하지 않습니다. 시작 전에 port 사용 여부를 확인합니다.

### Secret

B6-2/B7-1/B7-2 공통 AI 변수:

```text
AI_API_URL
AI_API_KEY
AI_MODEL
```

추가 변수:

```text
B4-2: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY
B5-3: SESSION_SECRET
B7-2: DATABASE_URL
B1-1/B1-2: AGENT_* + local-only key file
```

실제 값은 Repository/Chat/Evidence에 저장하지 않습니다.

## 3. Git / GitHub Collaboration 정책

GitHub 서버 측 기록이 공식 Evidence인 미션은 로컬 history로 대체하지 않습니다.

- B2-2: Issue / PR / Review / Branch Protection / conflict / troubleshooting 기록
- B7-1: feature branch / PR merge / 팀원별 유의미한 commit 10+
- B7-2: 실제 팀 협업 및 배포 기록

Reference의 placeholder URL은 Runtime Evidence가 아닙니다.

## 4. Cloud / Deployment 정책

### B6-1

AWS Region은 `ap-northeast-2`로 유지합니다. Mission 전용 이름/태그로 자원을 식별하고 Evidence 확보 후 현재 미션이 만든 자원만 cleanup합니다. 공유/운영 VPC와 인스턴스는 reset 대상으로 취급하지 않습니다.

### Web deployment

- B4-1: GitHub Pages
- B4-2: Vercel/Netlify 계획
- B7-1/B7-2: 공식 요구를 만족하는 외부 접속 가능 배포 환경

실제 외부 URL에서 핵심 flow를 다시 검증해야 합니다.

## 5. Dependency / Reuse

Hard Dependency:

```text
B1-1 → B1-2
B7-1 → B7-2
```

권장 학습 전이:

```text
B2-2 Git 협업 ─┐
B4-1 Web ──────┤
B5-1 DB ───────┼→ B7-1 → B7-2
B6-1 Deploy ───┤
B6-2 AI API ───┘
```

B4-2/B5-2/B5-3는 선택적 보강 경로이며 B7-1의 새 Hard prerequisite로 만들지 않습니다.

상세 지도는 `MISSION-DEPENDENCY-MAP.md`로 동결했습니다.

## 6. Cross-Mission 이슈 처리 결과

| ID | 이슈 | 처리 |
|---|---|---|
| CM-01 | B7-1 Python dependency unbounded | bounded range로 교정 |
| CM-02 | B7-1 `.env.example` 부재 | Placeholder-only 파일 추가 |
| CM-03 | AI env naming drift 가능성 | `AI_API_*` 공통 계약 확정 |
| CM-04 | 여러 Web app local port 충돌 가능성 | sequential Runtime + preflight port check |
| CM-05 | SQLite schema/data 오염 가능성 | per-mission DB 격리 |
| CM-06 | B1-2 장애 실험 host 영향 | 전용 WSL2/VM/Linux Safety Gate |
| CM-07 | AWS 과금/공유 resource 삭제 위험 | B6-1 전용 resource 식별 + Evidence-before-cleanup |
| CM-08 | B5-1 Environment 문서가 Q01~Q16 구현을 `15개 Query`로 표기 | `16개 Query(Q01~Q16)`로 교정 + runtime helper/verify 명령 동기화 |

**Phase B BLOCKER: 0**

## 7. Phase C 실행 자산

다음 문서를 추가하고 동결했습니다.

- `PHASE-C-RUNBOOK.md` — 15개 repository / working directory / runtime / verify / Evidence 통합표
- `MISSION-DEPENDENCY-MAP.md` — Hard/권장/선택 dependency 분리
- `PHASE-C-PREFLIGHT.md` — Repository/Process/Port/venv/Secret/DB/Cloud 시작 전 Gate

## 8. Phase B Exit Gate

| Gate | 결과 |
|---|---|
| OS/Python/Node 환경 충돌 정책 | PASS |
| Python/Node/DB 격리 | PASS |
| Port 정책 | PASS |
| Secret naming/presence 정책 | PASS |
| Git/GitHub Evidence 정책 | PASS |
| Cloud/cleanup 정책 | PASS |
| Mission Dependency Map | PASS |
| 15개 Runtime command/working-dir/verify/Evidence 통합 | PASS |
| Phase C Preflight | PASS |
| Cross-Mission BLOCKER | **0** |

**Phase B — Cross-Mission Audit: COMPLETE**

## 9. Phase C 기본 실행 순서

```text
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1
→ B4-2 → B5-2 → B5-3 → B7-2
```

이제 다음 단계는 **Phase C — B1-1 실제 Runtime CLEAR**입니다. Runtime 결과를 얻기 전에는 현재의 Reference PASS를 Mission PASS로 승격하지 않습니다.
