# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase A — REFERENCE BUILD**

> Phase A에서는 B1-1~B7-2의 기준 구현·학습자료·검증계획을 먼저 준비할 수 있습니다. 단, 실제 Runtime/Evidence가 완료되지 않은 미션은 `✅ CLEAR`로 변경하지 않습니다.

## 2026-08-16 Full Repository Audit

15개 미션 저장소의 현재 `main`과 `training/round-01-clear/`를 기준으로 진행 상태를 추적합니다. 상세 근거는 `training/round-01-clear/REFERENCE-AUDIT.md`에 기록합니다.

### Phase A Reference Build 준비도

| 미션 | Reference 판정 | 현재 핵심 상태 |
|---|---|---|
| B1-1 | **CORE READY** | 15-Step Guide, strict UFW/permission verify, hardened monitor, mapping/Q&A/evidence/status 완료 |
| B1-2 | **CORE READY** | isolated fault lab, controlled Before/After matrix, hardened diagnostic monitor, report/verify/mapping/status 완료 |
| B2-1 | **ADVANCED** | 상세 Guide/Checklist + REFERENCE-BUILD + reference/docs/environment/evidence |
| B2-2 | **ADVANCED** | 상세 Guide/Checklist + REFERENCE-BUILD + reference/docs/environment/evidence |
| B3-1 | **ADVANCED** | 상세 Guide/Checklist + REFERENCE-BUILD + reference/docs/environment/evidence |
| B3-2 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence |
| B4-1 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence |
| B5-1 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence |
| B6-1 | **ADVANCED** | AWS REFERENCE-BUILD + reference/docs/environment/evidence, canonical guide 동기화 필요 |
| B6-2 | **CORE READY** | Reference 구현/테스트/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **CORE READY** | React SPA, Supabase remote CRUD, routes/components/hooks/form/state/deploy/evidence 기준본 준비 |
| B5-2 | **CORE READY** | Memo FastAPI CRUD, PRG, SQLite/SQLAlchemy, Guide/Checklist/verify/mapping/evidence 기준본 준비 |
| B5-3 | **CORE READY** | Session auth, Depends 보호, User/Project/Task 관계, 상태변경, Guide/verify/mapping/evidence 기준본 준비 |
| B7-2 | **CORE READY** | Full-stack REST, auth/token, user-scoped AI Chat, Post ownership, docs/deploy/collaboration/evidence 기준본 준비 |

### 집계

- CORE READY: **8 / 15**
- ADVANCED: **7 / 15**
- PARTIAL: **0 / 15**
- SCAFFOLD: **0 / 15**
- Runtime `✅ CLEAR`: **0 / 15**

> 위 집계는 Phase A Reference 준비도입니다. 공식 미션 통과율이 아닙니다.

## Runtime Mission 상태

| 순서 | 미션 | 구분 | 상태 |
|---:|---|---|---|
| 1 | B1-1 | 필수 | 🟡 ACTIVE |
| 2 | B1-2 | 필수 | ⬜ NOT STARTED |
| 3 | B2-1 | 필수 | ⬜ NOT STARTED |
| 4 | B2-2 | 필수 | ⬜ NOT STARTED |
| 5 | B3-1 | 필수 | ⬜ NOT STARTED |
| 6 | B3-2 | 필수 | ⬜ NOT STARTED |
| 7 | B4-1 | 필수 | ⬜ NOT STARTED |
| 8 | B5-1 | 필수 | ⬜ NOT STARTED |
| 9 | B6-1 | 필수 | ⬜ NOT STARTED |
| 10 | B6-2 | 필수 | ⬜ NOT STARTED |
| 11 | B7-1 | 필수 Term Project | ⬜ NOT STARTED |
| 12 | B4-2 | 선택 | ⬜ NOT STARTED |
| 13 | B5-2 | 선택 | ⬜ NOT STARTED |
| 14 | B5-3 | 선택 | ⬜ NOT STARTED |
| 15 | B7-2 | 선택 Term Project / 고도화 | ⬜ NOT STARTED |

## Phase A 작업 큐

1. **B2-1** — ADVANCED 자체감사/정합성 마감
2. **B2-2 / B3-1 / B3-2 / B4-1 / B5-1 / B6-1** — ADVANCED → CORE READY
3. **현재 CORE READY 8개** — canonical 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## 최근 Phase A 변경

### B1-2 — ADVANCED → CORE READY

- OOM/CPU/Deadlock을 전용 WSL2/VM/실습 Linux에서 수행하는 Runtime Safety Gate 추가
- 같은 host/binary에서 핵심 변수 하나를 우선 변경하는 Controlled Experiment Matrix 추가
- diagnostic `monitor.sh`에 positive PID/interval 검증, sample count, 종료 marker 보강
- OOM/CPU/Deadlock 최소 Before/After Evidence 구조 표준화
- `verify.sh --runtime`에 report placeholder, PID 형식, time-series record, Secret-pattern Evidence 검사 추가
- Deadlock은 PID 존재만으로 단정하지 않고 resource/log/thread 근거를 함께 요구
- 실제 공식 예시 문구 대신 실제 앱 출력과 관측 결과를 Evidence로 사용하도록 명시

### B1-1 — ADVANCED → CORE READY

- `AGENT_HOME=/opt/agent-app`로 공유/민감 디렉터리 권한 모순 해소
- effective permission/UFW strict verify
- canonical `agent-app` + `pgrep -x`
- SSH lockout 방지 순서
- 안전한 failure/Warning/10MB rotation Runtime test 설계

### B4-2 — PARTIAL → CORE READY
- React SPA + Supabase remote CRUD + routes/components/hooks/form/state/deploy/evidence

### B5-2 — SCAFFOLD → CORE READY
- FastAPI/Jinja2/SQLAlchemy/SQLite CRUD + PRG + layered design

### B5-3 — SCAFFOLD → CORE READY
- Session auth + Depends protection + relational domain/state transition

### B7-2 — SCAFFOLD → CORE READY
- Full-stack REST + auth + user-scoped chat + post ownership + technical docs/deployment/evidence

실제 Runtime은 수행하지 않았으므로 Runtime 상태표는 변경하지 않습니다.

## R01 작업 흐름

1. **Phase A — Reference Build**: 15개 기준본 선제 준비
2. **Phase B — Cross-Mission Audit**: 환경·포트·버전·Secret·의존성·선후관계 전체 검토
3. **Phase C — Runtime CLEAR**: B1-1부터 실제 실행·검증·Evidence 후 순차 CLEAR

## 상태 정의

- ⬜ `NOT STARTED`: 아직 해당 미션 Runtime 수행을 시작하지 않음
- 🟡 `ACTIVE`: 현재 실제 수행/검증 중인 미션
- ⛔ `BLOCKED`: 실제 의존성 때문에 진행 불가
- ✅ `CLEAR`: 구현·실제 검증·필요 Evidence 완료

문서, Reference 구현 또는 폴더가 존재한다는 이유만으로 CLEAR로 변경하지 않습니다.
