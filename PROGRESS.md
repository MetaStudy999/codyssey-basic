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
| B2-1 | **CORE READY** | full CLI/persistence/streaming/atomic rewrite 구현, boundary tests, side-effect-light verify/status 완료 |
| B2-2 | **CORE READY** | team skeleton, PR/Issue/review/conflict/troubleshooting policy, local verify + GitHub runtime audit/status 완료 |
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

- CORE READY: **10 / 15**
- ADVANCED: **5 / 15**
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

1. **B3-1** — ADVANCED 자체감사/정합성 마감
2. **B3-2 / B4-1 / B5-1 / B6-1** — ADVANCED → CORE READY
3. **현재 CORE READY 10개** — canonical 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## 최근 Phase A 변경

### B2-2 — ADVANCED → CORE READY

- 실제 협업과 Reference template을 엄격히 분리하고 `TODO_RUNTIME`을 실제 링크로만 교체하도록 유지
- 로컬 Git으로 증명할 수 없는 Branch Protection/Ruleset, PR, Review, Issue linkage를 위한 `github-runtime-audit.md` 추가
- 팀원별 merged PR 2+, 타인 Review 2+, own-PR feedback 1+, contribution/troubleshooting 최소 기준을 실제 링크로 대조하도록 설계
- Review는 수량뿐 아니라 실질 내용/author interaction을 사람이 확인
- conflict 2+/non-trivial 1+는 문서 주장 대신 실제 PR/commit과 연결
- `verify.sh`가 policy/template/TODO/local history/명백한 무의미 commit을 검사하도록 강화
- `REFERENCE-STATUS.md`, Checklist/README 동기화

### B2-1 — ADVANCED → CORE READY

- 3-file persistence, generator contract, input/error boundaries, atomic rewrite, import/export tests 강화
- side-effect-light verifier와 status/canonical docs 동기화

### B1-2 / B1-1

- B1-2: isolated fault lab + controlled experiments + runtime evidence gate
- B1-1: safe SSH/UFW + effective permission + hardened monitor/log rotation

### B4-2 / B5-2 / B5-3 / B7-2

이전 Phase A에서 각각 React/Supabase, FastAPI CRUD, Auth/relationship, Full-stack AI Chat Reference를 CORE READY로 전환했습니다.

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
