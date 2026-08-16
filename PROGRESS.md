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
| B6-1 | **CORE READY** | AWS network/EC2/Nginx/SG/IAM/cleanup reference, read-only runtime verify, Guide/Checklist/Status |
| B6-2 | **CORE READY** | collector/client/CLI/validator/tests/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **CORE READY** | React SPA, Supabase CRUD, routes/components/hooks/form/state/deploy/evidence |
| B5-2 | **CORE READY** | FastAPI CRUD, PRG, SQLite/SQLAlchemy, Guide/verify/mapping/evidence |
| B5-3 | **CORE READY** | Session auth, Depends, relations/state transition, Guide/verify/mapping/evidence |
| B7-2 | **CORE READY** | Full-stack REST/auth/user-scoped AI Chat/ownership/docs/deploy/evidence |

### 집계

- CORE READY: **15 / 15**
- ADVANCED: **0 / 15**
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

1. **15개 CORE READY canonical 최종 정합성 검사**
2. **Phase B — Cross-Mission Audit**
3. **Phase C — B1-1부터 Runtime CLEAR**

## 최근 Phase A 변경

### B6-1 — ADVANCED → CORE READY

- 공식 Mission/Evaluation과 AWS Reference 구조 재대조
- Region을 공식 필수 `ap-northeast-2`로 고정
- VPC / Public Subnet / IGW / Public Route / SG / EC2 / Nginx traffic path 정리
- SG HTTP 80 public, SSH 22 learner CIDR-only, all-traffic public 금지 원칙 강화
- read-only Runtime verifier에 Route Table↔Subnet association, EC2↔Subnet/SG, Public IPv4 검증 추가
- external `/health` actual check와 Runtime Evidence 6종 gate 추가
- architecture PNG/PDF, Troubleshooting, Cleanup 실제 완료 gate 추가
- detailed Beginner Guide / Checklist / Reference Status 동기화
- 실제 AWS 생성/접속/과금 정리는 PASS로 기록하지 않음

### B5-1 — ADVANCED → CORE READY

- 4-table SQLite schema, PK/FK/constraints, 10+ rows, Q01~Q16 exact query coverage를 정리
- `INNER JOIN`, LEFT JOIN, aggregate, subquery, UPDATE/DELETE, INDEX를 verifier에서 범주별 검사
- `run-reference.sh` Runtime Evidence runner와 ERD/Evaluation/Guide/Checklist/Status를 추가

### B4-1 / B3-2 / B3-1 / B2-2 / B2-1 / B1-2 / B1-1

- 각 미션의 구조/실패 경계/검증/Evidence Gate를 CORE READY 수준으로 보완했습니다.

실제 Runtime은 수행하지 않았으므로 Runtime 상태표는 변경하지 않습니다.

## Phase A 종료 판단

15개 미션이 모두 **CORE READY**에 도달했습니다. 다만 Phase B로 이동하기 전에 다음 1회성 작업을 수행합니다.

```text
15개 canonical 최종 정합성 검사
→ Cross-Mission Audit
→ Runtime 실행 순서/공통환경/포트/Secret/의존성 확정
```

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
