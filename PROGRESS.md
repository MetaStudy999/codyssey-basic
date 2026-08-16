# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase A — REFERENCE BUILD**

> Phase A에서는 B1-1~B7-2의 기준 구현·학습자료·검증계획을 먼저 준비할 수 있습니다. 단, 실제 Runtime/Evidence가 완료되지 않은 미션은 `✅ CLEAR`로 변경하지 않습니다.

## 2026-08-17 Full Repository Audit

15개 미션 저장소의 현재 `main`과 `training/round-01-clear/`를 기준으로 진행 상태를 추적합니다. 상세 근거는 `training/round-01-clear/REFERENCE-AUDIT.md`에 기록합니다.

### Phase A Reference Build 준비도

| 미션 | Reference 판정 | 현재 핵심 상태 |
|---|---|---|
| B1-1 | **CORE READY** | safe SSH/UFW, permission verify, hardened monitor, full Guide/Mapping/Evidence |
| B1-2 | **CORE READY** | isolated fault lab, controlled Before/After, diagnostic monitor, runtime evidence gate |
| B2-1 | **CORE READY** | CLI/persistence/streaming/atomic rewrite, boundary tests, verifier/status |
| B2-2 | **CORE READY** | team skeleton, PR/Review/Conflict policies, GitHub runtime audit/status |
| B3-1 | **CORE READY** | custom DLL/HashMap/MinHeap, LRU/TTL/OOM edges, hardened verify/status |
| B3-2 | **CORE READY** | Mini Git DAG/branch/index/custom sort/BFS, tie/no-path/multi-parent tests, runtime gate/status |
| B4-1 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence, Portfolio/API/Pages 자체감사 필요 |
| B5-1 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence, SQL 산출물 자체감사 필요 |
| B6-1 | **ADVANCED** | AWS REFERENCE-BUILD + reference/docs/environment/evidence, canonical guide 동기화 필요 |
| B6-2 | **CORE READY** | collector/client/CLI/validator/tests/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **CORE READY** | React SPA, Supabase remote CRUD, routes/components/hooks/form/state/deploy/evidence |
| B5-2 | **CORE READY** | Memo FastAPI CRUD, PRG, SQLite/SQLAlchemy, Guide/verify/mapping/evidence |
| B5-3 | **CORE READY** | Session auth, Depends 보호, relations/state transition, Guide/verify/mapping/evidence |
| B7-2 | **CORE READY** | Full-stack REST, auth/token, user-scoped AI Chat, ownership/docs/deploy/evidence |

### 집계

- CORE READY: **12 / 15**
- ADVANCED: **3 / 15**
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

1. **B4-1** — ADVANCED 자체감사/정합성 마감
2. **B5-1 / B6-1** — ADVANCED → CORE READY
3. **현재 CORE READY 12개** — canonical 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## 최근 Phase A 변경

### B3-2 — ADVANCED → CORE READY

- Mini Git 공식 Mission/Evaluation을 Reference 구현과 재대조
- session unique hash, branch pointer, parent-first LOG의 boundary test 강화
- disconnected root graph로 실제 `No path` 조건을 자동 테스트할 수 있도록 보강
- multi-parent DAG에서 equal-length shortest path의 lexicographic tie-break test 추가
- multi-parent ANCESTORS의 누락/중복 방지 test 추가
- keyword lowercase/repeated-token index와 author case-insensitive search 강화
- stable merge sort equal-key 상대 순서와 date/author sort 테스트 강화
- malformed quote, invalid sort, unknown branch/commit/command 오류 경계 강화
- verifier를 AST syntax parse 기반으로 변경하고 standard sort API/graph library/Secret filename scan 추가
- `--runtime` Evidence Gate, `REFERENCE-STATUS.md`, 상세 Beginner Guide/Checklist/Mapping/Q&A/Evidence 동기화
- Evaluation의 parent-only PATH, author+dependency ordering, counter vs random hash 변화 대응까지 보완

### B3-1 — ADVANCED → CORE READY

- custom data structure collision/resize/LRU/TTL/OOM edge tests와 verifier/Q&A/status 강화

### B2-2 / B2-1 / B1-2 / B1-1

- GitHub collaboration runtime audit, persistence/error boundaries, isolated fault lab, safe SSH/UFW 등 각 미션 핵심 Reference Gate를 완료했습니다.

### B4-2 / B5-2 / B5-3 / B7-2

- React/Supabase, FastAPI CRUD, Auth/relationship, Full-stack AI Chat Reference를 CORE READY로 준비했습니다.

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
