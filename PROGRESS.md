# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase A — REFERENCE BUILD**

> Phase A에서는 B1-1~B7-2의 기준 구현·학습자료·검증계획을 먼저 준비할 수 있습니다. 실제 Runtime/Evidence가 완료되지 않은 미션은 `✅ CLEAR`로 변경하지 않습니다.

## 2026-08-17 Full Repository Audit

15개 미션 저장소의 현재 `main`과 `training/round-01-clear/`를 기준으로 추적합니다.

### Phase A Reference Build 준비도

| 미션 | Reference 판정 | 현재 핵심 상태 |
|---|---|---|
| B1-1 | **CORE READY** | safe SSH/UFW, permission verify, hardened monitor, Guide/Mapping/Evidence |
| B1-2 | **CORE READY** | isolated fault lab, controlled Before/After, diagnostic monitor, runtime gate |
| B2-1 | **CORE READY** | CLI/persistence/streaming/atomic rewrite, boundary tests, verifier/status |
| B2-2 | **CORE READY** | team skeleton, collaboration policy, GitHub runtime audit/status |
| B3-1 | **CORE READY** | custom DLL/HashMap/MinHeap, LRU/TTL/OOM edges, verifier/status |
| B3-2 | **CORE READY** | Mini Git DAG/branch/index/custom sort/BFS, edge tests, runtime gate/status |
| B4-1 | **CORE READY** | Vanilla portfolio, explicit STATE flows, API states/map-filter, responsive/static/runtime gates |
| B5-1 | **CORE READY** | SQLite 4-table schema, constraints, Q01~Q16, exact coverage verify, runtime evidence runner/status |
| B6-1 | **ADVANCED** | AWS REFERENCE-BUILD + reference/docs/environment/evidence, canonical guide 동기화 필요 |
| B6-2 | **CORE READY** | collector/client/CLI/validator/tests/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **CORE READY** | React SPA, Supabase CRUD, routes/components/hooks/form/state/deploy/evidence |
| B5-2 | **CORE READY** | FastAPI CRUD, PRG, SQLite/SQLAlchemy, Guide/verify/mapping/evidence |
| B5-3 | **CORE READY** | Session auth, Depends, relations/state transition, Guide/verify/mapping/evidence |
| B7-2 | **CORE READY** | Full-stack REST/auth/user-scoped AI Chat/ownership/docs/deploy/evidence |

### 집계

- CORE READY: **14 / 15**
- ADVANCED: **1 / 15**
- PARTIAL: **0 / 15**
- SCAFFOLD: **0 / 15**
- Runtime `✅ CLEAR`: **0 / 15**

> 위 집계는 Phase A Reference 준비도이며 공식 미션 통과율이 아닙니다.

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

1. **B6-1** — 마지막 ADVANCED → CORE READY
2. **CORE READY 15개 canonical 최종 정합성 검사**
3. **Phase B — Cross-Mission Audit**
4. **Phase C — B1-1부터 Runtime CLEAR**

## 최근 Phase A 변경

### B5-1 — ADVANCED → CORE READY

- 공식 Mission/Evaluation과 schema/seed/query 산출물을 재대조
- 4 tables, 각 PK, FK 3개, 1:N 3개, NOT NULL/UNIQUE/CHECK 구조 확인
- 각 table 10행 이상 sample data 유지
- 공식 Query 범위를 `queries.sql` Q01~Q16으로 명시: BASIC 4, JOIN 4, AGGREGATE 3, SUBQUERY 2, UPDATE, DELETE, INDEX
- `INNER JOIN`을 명시적으로 사용하고 LEFT JOIN 요구와 분리
- index 요구를 별도 파일에만 두지 않고 Q16 `CREATE INDEX` + 적용 이유 + Query Plan으로 포함
- verifier가 PK/FK/NOT NULL/UNIQUE를 선언이 아니라 실제 SQLite 동작으로 검사하도록 강화
- Query 범주 개수, INNER/LEFT JOIN, aggregate function 종류, rollback 상태를 검사
- `run-reference.sh`로 Phase C actual query/constraint/index Evidence 생성 경로 추가
- SQLite ISO date TEXT 선택 이유, ERD, Evaluation Q&A, detailed Beginner Guide/Checklist/Status 동기화
- 실제 SQLite Runtime 결과는 PASS로 기록하지 않음

### B4-1 — ADVANCED → CORE READY

- explicit STATE, API states, map/filter, responsive/static/runtime gates를 보완했습니다.

### B3-2 / B3-1 / B2-2 / B2-1 / B1-2 / B1-1

- 각 미션의 구조/실패 경계/검증/Evidence Gate를 CORE READY 수준으로 보완했습니다.

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
