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
| B3-1 | Python 3.8+ CLI/REPL | memory only/runtime evidence | per-repo Python env |
| B3-2 | Python 3.10+ CLI/REPL | in-memory Mini Git model | per-repo Python env |
| B4-1 | Vanilla HTML/CSS/JS + Browser | GitHub API + GitHub Pages | backend/package env 불필요 |
| B4-2 | React 18 + Vite 5 + Supabase | `node_modules`, remote Supabase table | Node project/remote DB 분리 |
| B5-1 | SQLite CLI + SQL | 전용 SQLite 실습 DB | 다른 미션 DB와 공유 금지 |
| B5-2 | FastAPI/Jinja2/SQLAlchemy/SQLite | 전용 `database.db` | per-repo `.venv` + DB 격리 |
| B5-3 | FastAPI/Jinja2/SQLAlchemy/SQLite + Session | 전용 DB + `SESSION_SECRET` | per-repo `.venv` + Secret 격리 |
| B6-1 | AWS `ap-northeast-2` + EC2/Nginx | VPC/Subnet/IGW/SG/EC2/EBS 등 | B6-1 전용 resource 식별/cleanup |
| B6-2 | Python 3.10+ Git/AI CLI | AI provider + Git working tree | env-only Secret, 원격 자동 push 금지 |
| B7-1 | FastAPI/Jinja2/SQLite + AI API | local/deploy DB + team GitHub | per-repo env/DB + actual team/deploy evidence |
| B7-2 | FastAPI/SQLAlchemy + Vanilla frontend + AI API | SQLite/Cloud + Bearer auth | B7-1과 DB/token/runtime 분리 |

## 2. Python 정책

### 결정

Phase C 공통 Python 기준은 **Python 3.10+를 우선 Baseline**으로 사용합니다.

근거:

- B2-1: Python 3.10+
- B3-1: Python 3.8+ — 3.10 Baseline 범위 안
- B3-2: Python 3.10+
- B6-2: Python 3.10+
- FastAPI 계열 B5-2/B5-3/B7-1/B7-2는 각 저장소 dependency 파일을 따름

### 격리 규칙

Python 패키지를 WSL/OS global site-packages에 일괄 설치하지 않습니다.

```text
repo A/.venv ≠ repo B/.venv
```

한 미션을 종료한 뒤 다음 미션의 `.venv`를 별도로 사용합니다. B2-1/B3-1/B3-2/B6-2처럼 외부 dependency가 없거나 적은 미션도 실행 경로 혼동 방지를 위해 Mission root를 명확히 유지합니다.

### 발견·교정

B7-1 `requirements.txt`가 version 범위 없이 작성되어 재현성이 상대적으로 약했습니다. B5 계열과 같은 방식으로 다음 범위를 적용했습니다.

```text
fastapi>=0.100,<1
uvicorn>=0.20,<1
jinja2>=3,<4
python-multipart>=0.0.6,<1
```

실제 설치 결과는 Phase C에서 확인합니다.

## 3. Node / Frontend 정책

B4-2만 별도 Node dependency tree를 가집니다.

Reference:

- React `^18`
- React Router `^6`
- Supabase JS `^2`
- Vite `^5`

`node_modules`는 B4-2 내부에서만 관리하고 다른 미션과 공유하지 않습니다.

B4-1과 B7-2의 Vanilla frontend에는 B4-2의 Node dependency를 강제로 전파하지 않습니다.

## 4. Database / Persistence 정책

### 로컬 DB

- B5-1: SQLite SQL 실습 DB
- B5-2: Memo 전용 SQLite
- B5-3: Project/Task/Auth 전용 SQLite
- B7-1: Chat users/sessions/conversations 전용 SQLite
- B7-2: Full-stack domain 전용 SQLite

**DB 파일을 미션 사이에서 재사용하지 않습니다.**

이유:

- schema migration 충돌 방지
- 이전 미션 sample data 오염 방지
- reset 범위 명확화
- Evidence 재현성 향상

B4-2 Supabase는 local SQLite와 별도이며 B4-2 전용 project/table/policy로 취급합니다.

## 5. Port / Service 정책

### 고정 공식 Port

B1-1:

- SSH: `20022/tcp`
- Agent: `15034/tcp`

이 두 Port는 B1-1 공식 Runtime 요구로 고정합니다.

### Web 개발 Port

FastAPI/Vite 계열에 미션별 임의 Port 번호를 새로 강제하지 않습니다.

Phase C는 **한 번에 한 미션 Runtime**이 원칙이므로 각 프로젝트의 기본 실행 Port를 재사용할 수 있습니다. 시작 전 `ss`/동등 명령으로 사용 여부만 확인하고, 충돌 시 해당 미션 문서에 실제 사용 Port를 기록합니다.

이 정책으로 불필요한 `8001/8002/...` 식 Port 파편화를 피합니다.

## 6. Secret / Environment Variable 정책

### 공통 AI 변수

B6-2 / B7-1 / B7-2는 다음 이름을 공통 사용합니다.

```text
AI_API_URL
AI_API_KEY
AI_MODEL
```

장점:

- AI provider 연결 개념을 미션 간 재학습하기 쉬움
- 문서/검증 규칙 통일
- B6-2 → B7 계열 학습 전이 용이

단, 실제 값은 각 Runtime shell/deploy environment에서 별도로 주입하며 저장소에 저장하지 않습니다.

### 미션 전용 변수

- B4-2: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
- B5-3: `SESSION_SECRET`
- B7-2: `DATABASE_URL` 추가
- B1-1: `AGENT_*` 환경변수 + local-only key file

### 발견·교정

B7-1 공식 Mission은 `.env` 예시와 환경변수 안내를 요구하지만 Reference root에 `.env.example`이 없었습니다. 다음 Placeholder-only 파일을 추가했습니다.

`training/round-01-clear/reference/.env.example`

실제 Secret은 절대 넣지 않습니다.

## 7. Git / GitHub Collaboration 정책

GitHub 서버 측 기록이 공식 Evidence인 미션은 로컬 history만으로 대체하지 않습니다.

특히:

- B2-2: Issue / PR / Review / Branch Protection / 충돌·트러블슈팅 기록
- B7-1: feature branch / PR merge / 팀원별 유의미한 commit 10+
- B7-2: 실제 팀 협업/배포 관련 Runtime 기록

Reference에서 만든 예시 URL/placeholder는 실제 Runtime Evidence가 아닙니다.

## 8. Cloud / Deployment 정책

### B6-1

AWS 공식 Region은 `ap-northeast-2`로 유지합니다.

B6-1 Resource는 Mission 전용 이름/태그로 식별하고 Evidence를 확보한 뒤 Cleanup합니다. 공유 VPC/운영 리소스는 reset/cleanup 대상으로 취급하지 않습니다.

### Web deployment

- B4-1: GitHub Pages
- B4-2: Vercel/Netlify 계획
- B7-1/B7-2: 공식 요구를 만족하는 외부 접근 가능한 배포 환경

배포 플랫폼이 다르더라도 실제 외부 URL에서 핵심 flow를 다시 검증해야 합니다.

## 9. Mission Dependency / Reuse Map

### Hard 또는 명시적 연결

```text
B1-1 → B1-2
B7-1 → B7-2
```

- B1-2 Runtime은 B1-1 CLEAR 후 시작하는 Control Tower 규칙을 유지합니다.
- B7-2는 Project A(B7-1)를 고도화하는 Reference 구조입니다.

### 권장 학습 전이

```text
B2-2 Git 협업 ─┐
B4-1 Web ──────┤
B5-1 DB ───────┼→ B7-1 Term Project → B7-2
B6-1 Deploy ───┤
B6-2 AI API ───┘
```

B4-2/B5-2/B5-3는 선택 미션이므로 B7-1의 공식 Hard prerequisite로 만들지 않습니다. 다만 React/FastAPI 계층화/인증 연습을 강화하는 선택적 보강 경로로 사용합니다.

## 10. Phase C 실행 원칙

속도와 환경 안정성을 위해 실제 Runtime은 병렬로 여러 미션을 동시에 켜두지 않습니다.

```text
한 미션 선택
→ 해당 repo/environment 활성화
→ Runtime 수행
→ verify
→ Evidence
→ CLEAR 판단
→ process/venv/dev-server 정리
→ 다음 미션
```

필수 Runtime 순서는 Control Tower 순서를 유지합니다.

```text
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1
→ B4-2 → B5-2 → B5-3 → B7-2
```

선택 미션을 학습 보강 목적으로 앞당길 수는 있지만, Mission 상태 기록과 CLEAR dependency를 임의로 바꾸지 않습니다.

## 현재 발견된 Cross-Mission 이슈

| ID | 이슈 | 처리 |
|---|---|---|
| CM-01 | B7-1 Python dependency unbounded | bounded range로 교정 |
| CM-02 | B7-1 `.env.example` 부재 | Placeholder-only 파일 추가 |
| CM-03 | AI env naming drift 가능성 | B6-2/B7-1/B7-2 `AI_API_*` 공통 계약 확인 |
| CM-04 | 여러 FastAPI app의 local port 충돌 가능성 | sequential Runtime + start 전 Port check 정책 |
| CM-05 | 여러 SQLite schema 간 오염 가능성 | per-mission DB 격리 정책 |
| CM-06 | B1-2 장애 실험의 host 영향 | 전용 WSL2/VM/Linux safety gate 유지 |
| CM-07 | AWS 과금/공유 resource 삭제 위험 | B6-1 전용 식별 + Evidence-before-cleanup 유지 |

현재 단계에서 발견된 **Cross-Mission BLOCKER: 0**입니다.

## 남은 Phase B 작업

- 각 repo의 Runtime command/working-directory를 한 장 Runbook으로 고정
- verify 명령과 Evidence 최종 경로를 한 표로 통합
- Phase C 진입 전 Secret/Port/Process 사전점검 규칙 고정
- Runtime Runbook Freeze 후 B1-1 실제 수행으로 전환
