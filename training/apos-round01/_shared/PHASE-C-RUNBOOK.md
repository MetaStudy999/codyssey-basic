# R01 Phase C — 실제 실행 완료(Runtime CLEAR) Runbook

동결일: 2026-08-17  
번호 재매핑: 2026-09-03

## 목적

이 문서는 Phase A에서 준비한 15개 Reference를 **현재 실행 환경 선택 → 실제 실행(Runtime) → 검증(Verification) → 증빙(Evidence) → 플랫폼별 수행 기록 → 설명형 평가 → 완료(CLEAR)**로 전환할 때 사용하는 통합 실행표입니다.

Reference 구현이나 정적 검증 결과는 실제 실행 환경(Runtime)의 PASS를 대신하지 않습니다.

> 현재 Mission ID(미션 번호)의 단일 기준은 [`CURRENT-MISSION-MAP.md`](../../CURRENT-MISSION-MAP.md)입니다. 번호 변경으로 기존 Runtime 상태를 초기화하지 않습니다.

## 🚀 빠른 시작(Quick Start)

현재 Workcell은 **B2-2 — Git 팀 협업**이며, 시스템 관제 미션은 현재 **B4-1 ⏸ PAUSED / READY TO RESUME**입니다.

1. 현재 작업 위치를 `MAC-V` 또는 `WIN-V`로 지정합니다.
2. [PHASE-C-PREFLIGHT.md](PHASE-C-PREFLIGHT.md)의 시작 판정(Start Gate)을 확인합니다.
3. [B2-2 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)의 빠른 시작(Quick Start)과 STEP 01부터 진행합니다.
4. 실제 실행·검증·Evidence가 완료된 뒤 실행한 플랫폼의 Runtime Record를 갱신합니다.
5. 공식 조건을 충족한 뒤에만 Mission을 `CLEAR`로 변경합니다.
6. 필요하면 다른 지원 실행 환경에서도 같은 미션을 수행해 교차 플랫폼 검증(Cross-platform Verification)을 추가합니다.

```text
현재 실행 환경(Current Runtime Context) 선택
→ 실행 전 점검(Preflight)
→ 입문자 가이드(Beginner Guide)
→ 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ MAC-V 또는 WIN-V Runtime Record 갱신
→ 평가(Evaluation)
→ 완료 판정(CLEAR Gate)
→ 필요 시 다른 환경 재수행
→ 두 환경 PASS 시 CROSS-PLATFORM VERIFIED
```

> 이 Runbook의 표는 **어디서 무엇을 시작하는지 찾는 색인**입니다. 시스템·팀·Cloud 상태를 다루는 B4-1/B4-2/B2-2/B3-1은 표의 한 줄 명령으로 대체하지 않고 해당 Beginner Guide의 안전 절차를 따릅니다.

## 📑 목차

- [공통 실행 원칙](#common-principles)
- [지원 실행 환경과 수행 기록](#runtime-records)
- [15개 실제 실행표](#runtime-table)
- [단일 명령으로 고정되지 않는 미션](#complex-missions)
- [Port 정책](#port-policy)
- [Secret 계약](#secret-contract)
- [완료 판정(CLEAR Gate)](#clear-gate)

---

<a id="common-principles"></a>
## 공통 실행 원칙

```text
Current Runtime Context 선택
→ 실행 전 점검(Preflight)
→ 해당 Mission Repository 확인
→ BEGINNER-GUIDE.md 순서대로 실제 실행(Runtime)
→ 자동/정적 검증
→ 실제 동작/실패 경로 확인
→ 증빙(Evidence) 저장
→ 해당 플랫폼 Runtime Record 갱신
→ Secret scan
→ 자기 말 평가(Evaluation) 설명
→ 완료 판정(CLEAR Gate)
→ process/venv/dev-server/임시 자원 정리
→ 다음 Mission
```

실제 실행(Runtime)은 한 번에 한 미션만 수행합니다.

추가 원칙:

- `MAC-V`와 `WIN-V`는 합격 우선순위의 Primary/Secondary 관계가 아니라 동등한 지원 실행 환경(Supported Runtime)입니다.
- 작업 시작 시 사용자가 현재 작업 위치를 알려 주면 그 환경을 Current Runtime Context로 사용합니다.
- 학교 Mac `MAC-V`는 Resettable / Ephemeral이므로 `CHECK BEFORE INSTALL`을 적용합니다.
- 개인 노트북 `WIN-V`는 Persistent이므로 `VERIFY BEFORE REINSTALL`을 적용합니다.
- 긴 실행형 Beginner Guide는 Quick Start와 클릭 가능한 목차가 실제 본문과 정합해야 합니다.
- Quick Start는 위험한 시스템/Cloud/DB 변경을 우회하지 않습니다.
- 실행 위치, Branch, PWD, `.venv`, Secret, 비용 자원은 각 미션 시작 전 확인합니다.
- 실제 출력이 없는 항목은 Reference PASS를 실제 실행 PASS로 바꾸지 않습니다.
- 한 플랫폼의 실제 출력을 다른 플랫폼 PASS로 재사용하지 않습니다.
- Canonical Repository는 Mission ID와 분리된 주제 기반 이름을 사용합니다.

---

<a id="runtime-records"></a>
## 지원 실행 환경과 수행 기록(Runtime Records)

```text
MAC-V
학교 macOS → OrbStack → Ubuntu 24.04

WIN-V
개인 Windows 11 Pro → WSL2 → Ubuntu 24.04
```

플랫폼별 실제 수행 기록은 다음 상태를 사용합니다.

```text
⬜ NOT RUN
🟡 PENDING
✅ PASS
❌ FAIL
```

Mission 상태와는 별도입니다.

```text
MAC-V PASS ≠ WIN-V PASS
플랫폼별 PASS ≠ 자동 Mission CLEAR
Mission CLEAR ≠ 두 플랫폼 모두 PASS 의무
```

공식 Mission/Evaluation이 두 플랫폼 모두를 요구하지 않는 한 한 지원 실행환경에서 공식 요구를 충족하면 Mission CLEAR가 가능할 수 있습니다.

두 환경 모두 같은 R01에서 실제 PASS하고 각각의 Repository/Branch/Commit/Verification/Evidence가 추적 가능하면 내부 품질 상태로 `✅ CROSS-PLATFORM VERIFIED`를 사용할 수 있습니다.

중앙 수행 기록:

- [`RUNTIME-EXECUTION-MATRIX.md`](RUNTIME-EXECUTION-MATRIX.md)

학교 Mac이 Reset되어도 과거의 추적 가능한 MAC-V PASS Evidence는 자동으로 FAIL 처리하지 않습니다. 현재 장비 재현 상태가 달라졌다면 `READY / STALE / REBUILD NEEDED`를 별도로 사용할 수 있습니다.

---

<a id="runtime-table"></a>
## 15개 실제 실행(Runtime) 실행표

FAST TRACK의 기존 **미션 주제 기준 실행 순서**를 유지하면서 현재 Mission ID와 Canonical Repository로 표시합니다.

| 순서 | Mission / Repository | Working Directory | 실제 실행 시작 명령·경로 | 검증(Verification) | 증빙 위치(Evidence Root) |
|---:|---|---|---|---|---|
| 1 | **B4-1** `codyssey-basic-system-monitor` | repository root | `training/round-01-clear/BEGINNER-GUIDE.md`의 SSH→UFW→권한→Agent→monitor→cron 순서. 제공 ZIP은 Runtime에서 `uname -m`과 archive 내용을 확인한 후 선택 | `sudo bash training/round-01-clear/environment/verify.sh` | `training/round-01-clear/evidence/` |
| 2 | **B4-2** `codyssey-basic-system-troubleshooting` | repository root | `RUNTIME-SAFETY.md` 확인 후 격리 경로에서 OOM→CPU→Deadlock controlled experiment | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/` |
| 3 | **B2-1** `codyssey-basic-budget-tracker` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"` 후 `python -m budget_app --help`; 실제 학습 데이터는 별도 `--data-dir` 권장 | `bash training/round-01-clear/environment/verify.sh` + 실제 CLI/persistence 확인 | `training/round-01-clear/evidence/` |
| 4 | **B2-2** `codyssey-basic-git-collaboration` | mission repo + 실제 team repo | Git/GitHub 실제 팀 workflow 수행. local audit는 실제 team repo 경로를 인수로 전달 | `bash training/round-01-clear/environment/verify.sh --runtime <actual-team-repo-path>` + `docs/github-runtime-audit.md` | `training/round-01-clear/evidence/` + 실제 GitHub Issue/PR/Review URL |
| 5 | **B5-1** `codyssey-basic-mini-redis` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"`; `python3 training/round-01-clear/reference/main.py` | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/` |
| 6 | **B5-2** `codyssey-basic-mini-git` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"`; `python3 training/round-01-clear/reference/main.py` | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/runtime/` |
| 7 | **B1-1** `codyssey-basic-web-portfolio` | `training/round-01-clear/reference` | `python3 -m http.server 8000` 후 실제 browser/API/GitHub Pages 확인 | repository root에서 `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/runtime/` |
| 8 | **B6-1** `codyssey-basic-sql-database` | repository root | `bash training/round-01-clear/environment/run-reference.sh` 또는 Beginner Guide의 SQL 수동 실행 | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/runtime/` |
| 9 | **B3-1** `codyssey-basic-cloud-infrastructure` | repository root + 실제 EC2 shell | Beginner Guide에 따라 VPC→Subnet→IGW→Route→SG→EC2→Nginx 순서. 생성은 수동, 검증은 read-only | `bash training/round-01-clear/environment/verify.sh --runtime` | `training/round-01-clear/evidence/` + 실제 AWS/HTTP 증빙 |
| 10 | **B3-2** `codyssey-basic-ai-git-assistant` | repository root | `export PYTHONPATH="$PWD/training/round-01-clear/reference"`; local shell에서 `AI_API_URL`, `AI_API_KEY` 설정 후 AI Git CLI 실행 | `bash training/round-01-clear/environment/verify.sh` + 실제 provider/Commit/PR 검증 | `training/round-01-clear/evidence/` + 실제 Commit/PR |
| 11 | **B7-1** `codyssey-basic-ai-chatbot` | `training/round-01-clear/reference` | venv/install 후 AI env 설정, FastAPI 실행 | repository root에서 `bash training/round-01-clear/environment/verify.sh` + browser/two-user/AI/deploy/team acceptance | `training/round-01-clear/evidence/` + 실제 deployment/team URLs |
| 12 | **B1-2** `codyssey-basic-react-spa` | `training/round-01-clear/reference` | `npm install`; `cp .env.example .env`; local Supabase 값 입력; `npm run dev` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + 실제 Supabase CRUD/deploy | `training/round-01-clear/evidence/` |
| 13 | **B6-2** `codyssey-basic-fastapi-crud` | `training/round-01-clear/reference` | venv/install 후 `uvicorn app.main:app --reload` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + browser CRUD/DB/PRG acceptance | `training/round-01-clear/evidence/` |
| 14 | **B6-3** `codyssey-basic-fastapi-auth` | `training/round-01-clear/reference` | venv/install 후 local-only `SESSION_SECRET`; `uvicorn app.main:app --reload` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + login/protected route/relationship/toggle acceptance | `training/round-01-clear/evidence/` |
| 15 | **B7-2** `codyssey-basic-ai-chatbot-fullstack` | `training/round-01-clear/reference` | venv/install, `.env` 설정 후 `uvicorn backend.main:app --reload` | repository root에서 `bash training/round-01-clear/environment/verify.sh` + ownership/AI/API/browser/deploy/team acceptance | `training/round-01-clear/evidence/` + 실제 deployment/team URLs |

실제 플랫폼 PASS를 기록할 때 Evidence Root 아래에 필요하면 `mac-v/`, `win-v/`를 만들어 분리합니다. 실제 실행 전 빈 디렉터리를 형식 때문에 대량 생성하지 않습니다.

---

<a id="complex-missions"></a>
## 실제 실행 명령이 하나로 고정되지 않는 미션

B4-1, B4-2, B2-2, B3-1은 하나의 실행 명령으로 미션을 대체하지 않습니다.

- B4-1: system-level SSH/UFW/users/ACL/cron을 안전 순서대로 적용
- B4-2: 장애 실험을 Before/After controlled experiment로 수행
- B2-2: GitHub server-side metadata가 실제 Evidence
- B3-1: AWS resource 생성/설정/접속/HTTP 검증/cleanup이 실제 Runtime

따라서 이 네 미션은 canonical `BEGINNER-GUIDE.md`가 실제 실행(Runtime)의 주 실행 절차입니다.

---

<a id="port-policy"></a>
## Port 정책

- B4-1 시스템 관제 공식: SSH `20022`, Agent `15034`
- B1-1 웹 포트폴리오 local HTTP: Reference guide의 `8000`
- B6/B7 FastAPI: 기본 `8000`을 사용할 수 있으나 **한 번에 한 미션만 실행**
- B1-2 React/Vite: Vite가 선택한 local dev port를 사용하며 시작 전 충돌 확인

새 미션마다 임의의 고정 포트 번호를 추가하지 않습니다.

---

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
B1-2  VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
B6-3  SESSION_SECRET
B7-2  DATABASE_URL
B4-1  AGENT_* + local-only t_secret.key
B4-2  AGENT_* + local-only secret.key
```

실제 값은 GitHub, 채팅, screenshot, 제출 Evidence에 기록하지 않습니다.

---

<a id="clear-gate"></a>
## 완료 판정(CLEAR Gate)

각 미션은 다음 조건을 모두 만족한 뒤에만 `✅ CLEAR`로 변경합니다.

```text
공식 Mission 필수항목 충족
+ 실제 실행(Runtime) 정상 경로
+ 공식/핵심 실패 경로
+ 검증(Verification) 결과
+ 실제 증빙(Evidence)
+ Secret 노출 없음
+ 사용자가 핵심 설계/오류 대응을 자기 말로 설명
```

정적 Reference PASS 또는 파일 존재만으로 CLEAR하지 않습니다.

플랫폼별 추가 상태:

```text
MAC-V PASS
WIN-V PASS
CROSS-PLATFORM VERIFIED
```

한 지원 실행환경에서 CLEAR를 확보한 뒤 다른 지원 실행환경에서 추가 PASS를 확보할 수 있습니다. 공식 요구가 없다면 이 추가 교차 플랫폼 검증은 CLEAR의 필수 Gate가 아닙니다.
