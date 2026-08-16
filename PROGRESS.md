# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase A — REFERENCE BUILD**

> Phase A에서는 B1-1~B7-2의 기준 구현·학습자료·검증계획을 먼저 준비할 수 있습니다. 단, 실제 Runtime/Evidence가 완료되지 않은 미션은 `✅ CLEAR`로 변경하지 않습니다.

## 2026-08-17 Full Repository Audit

15개 미션 저장소의 현재 `main`과 `training/round-01-clear/`를 기준으로 진행 상태를 추적합니다. 상세 근거는 `training/round-01-clear/REFERENCE-AUDIT.md`에 기록합니다.

### Phase A Reference Build 준비도

| 미션 | Reference 판정 | 현재 핵심 상태 |
|---|---|---|
| B1-1 | **CORE READY** | 15-Step Guide, strict UFW/permission verify, hardened monitor, mapping/Q&A/evidence/status 완료 |
| B1-2 | **CORE READY** | isolated fault lab, controlled Before/After matrix, hardened diagnostic monitor, report/verify/mapping/status 완료 |
| B2-1 | **CORE READY** | full CLI/persistence/streaming/atomic rewrite 구현, boundary tests, side-effect-light verify/status 완료 |
| B2-2 | **CORE READY** | team skeleton, PR/Issue/review/conflict/troubleshooting policy, local verify + GitHub runtime audit/status 완료 |
| B3-1 | **CORE READY** | custom DLL/HashMap/MinHeap, collision/resize/LRU/TTL/OOM edge tests, hardened verify/mapping/Q&A/status 완료 |
| B3-2 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence, Mini Git 완성도 자체감사 필요 |
| B4-1 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence, Portfolio/API/Pages 자체감사 필요 |
| B5-1 | **ADVANCED** | REFERENCE-BUILD + reference/docs/environment/evidence, SQL 산출물 자체감사 필요 |
| B6-1 | **ADVANCED** | AWS REFERENCE-BUILD + reference/docs/environment/evidence, canonical guide 동기화 필요 |
| B6-2 | **CORE READY** | Reference 구현/테스트/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **CORE READY** | React SPA, Supabase remote CRUD, routes/components/hooks/form/state/deploy/evidence 기준본 준비 |
| B5-2 | **CORE READY** | Memo FastAPI CRUD, PRG, SQLite/SQLAlchemy, Guide/Checklist/verify/mapping/evidence 기준본 준비 |
| B5-3 | **CORE READY** | Session auth, Depends 보호, User/Project/Task 관계, 상태변경, Guide/verify/mapping/evidence 기준본 준비 |
| B7-2 | **CORE READY** | Full-stack REST, auth/token, user-scoped AI Chat, Post ownership, docs/deploy/collaboration/evidence 기준본 준비 |

### 집계

- CORE READY: **11 / 15**
- ADVANCED: **4 / 15**
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

1. **B3-2** — ADVANCED 자체감사/정합성 마감
2. **B4-1 / B5-1 / B6-1** — ADVANCED → CORE READY
3. **현재 CORE READY 11개** — canonical 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## 최근 Phase A 변경

### B3-1 — ADVANCED → CORE READY

- Doubly Linked List 필수 6개 연산을 모두 unit test 대상으로 보강
- HashMap에서 실제 same-bucket collision을 만들어 chaining 정확성 검증
- load factor `== 0.75` 유지 / `>0.75` 2배 resize 경계 테스트
- MinHeap `push/pop/peek/size`와 정렬 순서 검증
- `maxmemory=0`, UTF-8 overwrite accounting, GET/SET-overwrite LRU refresh 보강
- oversized single-entry OOM 시 기존 데이터와 `evicted_keys` 보존 검증
- 제한 이하까지 반복 eviction 확인
- EXPIRE 재설정, DEL 후 같은 key 재삽입, SET overwrite의 stale TTL lazy-deletion 안전성 검증
- verifier에 `heapq` 금지와 AST syntax parse, Secret-pattern scan, `--runtime` Evidence Gate 추가
- Evaluation Q&A에 LFU 전환, 10만 건 병목, overhead 포함 memory model, 공정한 채점 보정 추가
- `REFERENCE-STATUS.md`, Mapping, Checklist, Evidence, root README 동기화

### B2-2 — ADVANCED → CORE READY

- 실제 GitHub 협업과 Reference template 엄격 분리
- Branch Protection/PR/Review/Issue linkage용 GitHub Runtime Audit
- 팀원별 PR/Review/feedback/conflict/troubleshooting Evidence Gate 강화

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
