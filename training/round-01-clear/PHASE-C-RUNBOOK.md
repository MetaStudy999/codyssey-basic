# R01 Phase C — Runtime CLEAR Runbook

동결일: 2026-08-17

## 목적

이 문서는 Phase A에서 준비한 15개 Reference를 **실제 Runtime → verify → Evidence → 설명형 평가 → CLEAR**로 전환할 때 사용하는 통합 실행표입니다.

Reference 구현이나 정적 검증 결과는 실제 Runtime PASS를 대신하지 않습니다.

## 🚀 빠른 시작(Quick Start)

현재 Active Mission은 **B1-1**입니다.

1. [PHASE-C-PREFLIGHT.md](PHASE-C-PREFLIGHT.md)의 Start Gate를 확인합니다.
2. [B1-1 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)의 Quick Start와 STEP 01부터 진행합니다.
3. B1-1의 실제 Runtime/Verify/Evidence가 완료된 뒤에만 `CLEAR`로 변경합니다.
4. 다음 미션은 이 문서의 Runtime 실행표 순서로 이동합니다.

```text
Preflight
→ Beginner Guide
→ Runtime
→ Verify
→ Evidence
→ Evaluation
→ CLEAR Gate
→ 다음 Mission
```

> 이 Runbook의 표는 **어디서 무엇을 시작하는지 찾는 색인**입니다. B1-1/B1-2/B2-2/B6-1처럼 시스템·팀·Cloud 상태를 다루는 미션은 표의 한 줄 명령으로 대체하지 않고 해당 Beginner Guide의 안전 절차를 따릅니다.

## 📑 목차

- [공통 실행 원칙](#common-principles)
- [15개 Runtime 실행표](#runtime-table)
- [단일 명령으로 고정되지 않는 미션](#complex-missions)
- [Port 정책](#port-policy)
- [Secret 계약](#secret-contract)
- [CLEAR Gate](#clear-gate)

---

<a id="common-principles"></a>
## 공통 실행 원칙

```text
Preflight
→ 해당 Mission Repository 확인
→ BEGINNER-GUIDE.md 순서대로 Runtime
→ 자동/정적 verify
→ 실제 동작/실패 경로 확인
→ Evidence 저장
→ Secret scan
→ 자기 말 Evaluation 설명
→ CLEAR Gate
→ process/venv/dev-server/임시 자원 정리
→ 다음 Mission
```

Runtime은 한 번에 한 미션만 수행합니다.

추가 원칙:

- 긴 실행형 Beginner Guide는 Quick Start와 클릭 가능한 목차가 실제 본문과 정합해야 합니다.
- Quick Start는 위험한 시스템/Cloud/DB 변경을 우회하지 않습니다.
- 실행 위치, Branch, PWD, `.venv`, Secret, 비용 자원은 각 미션 시작 전 확인합니다.
- 실제 출력이 없는 항목은 Reference PASS를 Runtime PASS로 바꾸지 않습니다.

<a id="runtime-table"></a>
## 15개 Runtime 실행표

| 순서 | Mission / Repository | Working Directory | Runtime 시작 명령·경로 | Verify | Evidence Root |
|---:|---|---|---|---|---|
| 1 | B1-1 `codyssey-basic-b1-1-system-monitor` | repository root | `training/round-01-clear/BEGINNER-GUIDE.md`의 SSH→UFW→권한→Agent→monitor→cron 순서. 제공 ZIP의 실제 실행 파일은 Runtime에서 `uname -m`과 archive 내용을 확인한 후 선택 | `sudo bash training/round-01-clear/environment/verify.sh` | `training/round-01-clear/evidence/` |
| 2 | B1-2 `codyssey-basic-b1-2-linux-troubleshooting` | repository root | `RUNTIME-SAFETY.md` 확인 후 `$HOME/b1-2-agent` 격리 경로에서 OOM→CPU→Deadlock controlled experiment | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/` |
| 3 | B2-1 `codyssey-basic-b2-1-budget-tracker` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"` 후 `python -m budget_app --help`; 실제 학습 데이터는 별도 `--data-dir` 권장 | `bash training/round-01-clear/environment/verify.sh` + 실제 CLI/persistence 확인 | `training/round-01-clear/evidence/` |
| 4 | B2-2 `codyssey-basic-b2-2-git-team-collaboration` | mission repo + 실제 team repo | Git/GitHub 실제 팀 workflow 수행. local audit는 실제 team repo 경로를 인수로 전달 | `bash training/round-01-clear/environment/verify.sh --runtime <actual-team-repo-path>` + `docs/github-runtime-audit.md` | `training/round-01-clear/evidence/` + 실제 GitHub Issue/PR/Review URL |
| 5 | B3-1 `codyssey-basic-b3-1-fast-data-store` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"`; `python3 training/round-01-clear/reference/main.py` | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/` |
| 6 | B3-2 `codyssey-basic-b3-2-file-change-tracker` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"`; `python3 training/round-01-clear/reference/main.py` | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/runtime/` |
| 7 | B4-1 `codyssey-basic-b4-1-portfolio` | `training/round-01-clear/reference` | `python3 -m http.server 8000` 후 실제 browser/API/GitHub Pages 확인 | repository root에서 `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/runtime/` |
| 8 | B5-1 `codyssey-basic-b5-1-database-design` | repository root | `bash training/round-01-clear/environment/run-reference.sh` 또는 Beginner Guide의 SQL 수동 실행 | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/runtime/` |
| 9 | B6-1 `codyssey-basic-b6-1-cloud-deployment` | repository root + 실제 EC2 shell | Beginner Guide에 따라 `ap-northeast-2`에서 VPC→Subnet→IGW→Route→SG→EC2→Nginx 순서. 생성은 수동, 검증은 read-only | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/` + 실제 AWS/HTTP 증빙 |
| 10 | B6-2 `codyssey-basic-b6-2-ai-code-summarizer` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"`; local shell에서 `AI_API_URL`, `AI_API_KEY` 설정 후 `python3 -m git_ai commit ...`, `python3 -m git_ai pr ...` | `bash training/round-01-clear/environment/verify.sh` + 실제 provider/Commit/PR 검증 | `training/round-01-clear/evidence/` + 실제 Commit/PR |
| 11 | B7-1 `codyssey-basic-b7-1-web-ai-chatbot` | `training/round-01-clear/reference` | `python3 -m venv .venv`; `source .venv/bin/activate`; `pip install -r requirements.txt`; AI env 설정; `uvicorn app.main:app --reload --host 127.0.0.1 --port 8000` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + browser/two-user/AI/deploy/team acceptance | `training/round-01-clear/evidence/` + 실제 deployment/team URLs |
| 12 | B4-2 `codyssey-basic-b4-2-interactive-web-app` | `training/round-01-clear/reference` | `npm install`; `cp .env.example .env`; local Supabase 값 입력; `npm run dev` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + 실제 Supabase CRUD/deploy | `training/round-01-clear/evidence/` |
| 13 | B5-2 `codyssey-basic-b5-2-fastapi-crud-app` | `training/round-01-clear/reference` | 처음에는 수동 venv/install, 재현 시 `environment/setup.sh`; `source .venv/bin/activate`; `uvicorn app.main:app --reload` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + browser CRUD/DB/PRG acceptance | `training/round-01-clear/evidence/` |
| 14 | B5-3 `codyssey-basic-b5-3-fastapi-auth-service` | `training/round-01-clear/reference` | venv/install 후 `source .venv/bin/activate`; local-only `SESSION_SECRET`; `uvicorn app.main:app --reload` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + login/protected route/relationship/toggle acceptance | `training/round-01-clear/evidence/` |
| 15 | B7-2 `codyssey-basic-b7-2-advanced-ai-chatbot` | `training/round-01-clear/reference` | `python3 -m venv .venv`; activate; `python -m pip install -r requirements.txt`; `cp .env.example .env`; local env 입력; `uvicorn backend.main:app --reload` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + ownership/AI/API/browser/deploy/team acceptance | `training/round-01-clear/evidence/` + 실제 deployment/team URLs |

<a id="complex-missions"></a>
## Runtime 명령이 하나로 고정되지 않는 미션

B1-1, B1-2, B2-2, B6-1은 하나의 실행 명령으로 미션을 대체하지 않습니다.

- B1-1: system-level SSH/UFW/users/ACL/cron을 안전 순서대로 적용
- B1-2: 장애 실험을 Before/After controlled experiment로 수행
- B2-2: GitHub server-side metadata가 실제 Evidence
- B6-1: AWS resource 생성/설정/접속/HTTP 검증/cleanup이 실제 Runtime

따라서 이 네 미션은 canonical `BEGINNER-GUIDE.md`가 Runtime의 주 실행 절차입니다.

<a id="port-policy"></a>
## Port 정책

- B1-1 공식: SSH `20022`, Agent `15034`
- B4-1 local HTTP: Reference guide의 `8000`
- B5/B7 FastAPI: 기본 `8000`을 사용할 수 있으나 **한 번에 한 미션만 실행**
- B4-2 Vite: Vite가 선택한 local dev port를 사용하며 시작 전 충돌 확인

새 미션마다 임의의 고정 포트 번호를 추가하지 않습니다.

<a id="secret-contract"></a>
## Secret 계약

공통 AI Runtime 변수:

```text
AI_API_URL
AI_API_KEY
AI_MODEL
```

추가 변수:

```text
B4-2  VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
B5-3  SESSION_SECRET
B7-2  DATABASE_URL
B1-1  AGENT_* + local-only t_secret.key
B1-2  AGENT_* + local-only secret.key
```

실제 값은 GitHub, 채팅, screenshot, 제출 Evidence에 기록하지 않습니다.

<a id="clear-gate"></a>
## CLEAR Gate

각 미션은 다음 조건을 모두 만족한 뒤에만 `✅ CLEAR`로 변경합니다.

```text
공식 Mission 필수항목 충족
+ 실제 Runtime 정상 경로
+ 공식/핵심 실패 경로
+ verify 결과
+ 실제 Evidence
+ Secret 노출 없음
+ 사용자가 핵심 설계/오류 대응을 자기 말로 설명
```

정적 Reference PASS 또는 파일 존재만으로 CLEAR하지 않습니다.
