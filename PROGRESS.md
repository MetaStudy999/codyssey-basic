# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase C — RUNTIME CLEAR / FAST EXECUTE**

현재 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**

현재 Runtime 대상: **B1-1 🟡 ACTIVE**

> Phase A Reference Build, Canonical Final Consistency Audit, Phase B Cross-Mission Audit와 Runtime Runbook Freeze를 완료했습니다. 이제 FAST TRACK에 따라 **필수 미션을 먼저 모두 CLEAR한 뒤 선택 미션을 수행**합니다.

## 완료 현황

- Phase A Reference Build: **CORE READY 15 / 15**
- Canonical Final Consistency Audit: **PASS 15 / 15**
- Phase B Cross-Mission Audit: **COMPLETE / BLOCKER 0**
- Phase C Runtime Runbook: **FROZEN**
- Runtime `✅ CLEAR`: **0 / 15**
- FAST TRACK Stage 1 — Required: **0 / 11 CLEAR**
- FAST TRACK Stage 2 — Optional: **0 / 4 CLEAR**

핵심 문서:

- `MISSION-INDEX.md`
- `training/round-01-clear/REFERENCE-AUDIT.md`
- `training/round-01-clear/CANONICAL-AUDIT.md`
- `training/round-01-clear/CROSS-MISSION-AUDIT.md`
- `training/round-01-clear/PHASE-C-RUNBOOK.md`
- `training/round-01-clear/PHASE-C-PREFLIGHT.md`
- `training/round-01-clear/MISSION-DEPENDENCY-MAP.md`
- `standards/CANONICAL-REFERENCE-STANDARD.md`

## FAST TRACK

```text
Stage 1 — REQUIRED CLEAR
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B4-2 → B5-2 → B5-3 → B7-2
```

FAST TRACK은 선택 미션을 생략하는 경로가 아닙니다. **필수 11개를 먼저 완료하여 핵심 과정을 빠르게 닫고, 이후 선택 4개를 연속 수행해 R01 전체 15개를 CLEAR**합니다.

Dependency의 `필수 선행/권장 선행`은 학습 관계를 설명하고, FAST TRACK은 실제 R01 Runtime의 운영 순서를 설명합니다.

## Runtime Mission 상태

| 순서 | Stage | 미션 | 구분 | 상태 |
|---:|---|---|---|---|
| 1 | Required | B1-1 | 필수 | 🟡 ACTIVE |
| 2 | Required | B1-2 | 필수 | ⬜ NOT STARTED |
| 3 | Required | B2-1 | 필수 | ⬜ NOT STARTED |
| 4 | Required | B2-2 | 필수 | ⬜ NOT STARTED |
| 5 | Required | B3-1 | 필수 | ⬜ NOT STARTED |
| 6 | Required | B3-2 | 필수 | ⬜ NOT STARTED |
| 7 | Required | B4-1 | 필수 | ⬜ NOT STARTED |
| 8 | Required | B5-1 | 필수 | ⬜ NOT STARTED |
| 9 | Required | B6-1 | 필수 | ⬜ NOT STARTED |
| 10 | Required | B6-2 | 필수 | ⬜ NOT STARTED |
| 11 | Required | B7-1 | 필수 Term Project | ⬜ NOT STARTED |
| 12 | Optional | B4-2 | 선택 | ⬜ NOT STARTED |
| 13 | Optional | B5-2 | 선택 | ⬜ NOT STARTED |
| 14 | Optional | B5-3 | 선택 | ⬜ NOT STARTED |
| 15 | Optional | B7-2 | 선택 Term Project / 고도화 | ⬜ NOT STARTED |

## Phase B에서 확정한 공통 정책

### Runtime isolation

- 실제 Runtime은 **한 번에 한 미션**
- Python package는 미션별 `.venv`
- SQLite DB는 미션별 분리
- B4-2 `node_modules`/Supabase는 B4-2 전용
- B1-1 공식 Port `20022`, `15034` 고정
- Web local port는 시작 전 충돌 확인 후 사용

### Secret naming

AI 계열 B6-2/B7-1/B7-2:

```text
AI_API_URL
AI_API_KEY
AI_MODEL
```

미션별 추가 변수:

```text
B4-2  VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
B5-3  SESSION_SECRET
B7-2  DATABASE_URL
B1-1/B1-2  AGENT_* + local-only key file
```

실제 Secret 값은 Repository/Chat/Evidence 금지입니다.

## Cross-Mission 교정 완료

| ID | 내용 | 상태 |
|---|---|---|
| CM-01 | B7-1 dependency unbounded | ✅ 교정 |
| CM-02 | B7-1 `.env.example` 부재 | ✅ 교정 |
| CM-03 | AI env naming drift | ✅ 공통 계약 |
| CM-04 | Web app port 충돌 | ✅ sequential Runtime |
| CM-05 | SQLite schema/data 오염 | ✅ per-mission DB |
| CM-06 | B1-2 장애 실험 host 영향 | ✅ isolated lab |
| CM-07 | B6-1 Cloud cleanup 위험 | ✅ mission-only cleanup |
| CM-08 | B5-1 `15개 Query` 문서 drift | ✅ Q01~Q16으로 교정 |

## Phase C 실행 흐름

```text
PHASE-C-PREFLIGHT
→ 현재 미션 START-CHECK(있는 경우)
→ BEGINNER-GUIDE
→ 실제 Runtime
→ Verify
→ Evidence
→ Evaluation 설명
→ Secret 확인
→ ✅ CLEAR 판정
→ FAST TRACK의 다음 미션
```

## 전체 실행 순서

```text
[Stage 1 — Required]
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

[Stage 2 — Optional]
B4-2 → B5-2 → B5-3 → B7-2
```

## R01 전체 흐름

```text
Phase A Reference Build          ✅ 15/15 CORE READY
→ Canonical Consistency Audit    ✅ PASS 15/15
→ Phase B Cross-Mission Audit    ✅ COMPLETE / BLOCKER 0
→ Phase C FAST TRACK
   ├─ Stage 1 Required           🟡 B1-1 ACTIVE / 0 of 11 CLEAR
   └─ Stage 2 Optional           ⬜ 0 of 4 CLEAR
```

## 상태 정의

- ⬜ `NOT STARTED`: 해당 미션 Runtime 미시작
- 🟡 `ACTIVE`: 현재 실제 수행/검증 대상
- ⛔ `BLOCKED`: 실제 의존성 때문에 진행 불가
- ✅ `CLEAR`: 구현 + 실제 검증 + 필요한 Evidence 완료

Reference/문서/정적검증만으로는 `✅ CLEAR`로 변경하지 않습니다.
