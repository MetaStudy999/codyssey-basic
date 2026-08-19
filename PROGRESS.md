# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase C — RUNTIME CLEAR / FAST EXECUTE**

현재 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**

현재 실제 실행(Runtime) 대상: **B1-1 🟡 ACTIVE**

> `MAC-V`와 `WIN-V`는 합격 우선순위의 Primary/Secondary가 아니라 **동등한 지원 실행 환경(Supported Runtime)**입니다. 실제 작업을 시작할 때 사용자가 현재 수행 환경을 알려 주면 그 환경을 **현재 실행 환경(Current Runtime Context)**으로 사용합니다.

## 🚀 빠른 상태 확인(Quick Status)

```text
현재 위치                = R01 / Phase C / Stage 1
현재 미션                = B1-1 🟡 ACTIVE
Runtime CLEAR            = 0 / 15
필수 경로                = 0 / 11 CLEAR
선택 경로                = 0 / 4 CLEAR
B1-1 MAC-V Runtime       = NOT RUN
B1-1 WIN-V Runtime       = NOT RUN
B1-1 Cross-platform      = NOT VERIFIED
Current Runtime Context  = 작업 시작 시 사용자 지정
```

플랫폼별 실제 수행 현황의 단일 요약 기준:

- [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

지금 할 일:

1. 현재 수행 환경이 `MAC-V`인지 `WIN-V`인지 확인합니다.
2. 선택한 환경에서 Bootstrap / Git·GitHub Identity 등 현재 Runtime 준비 상태를 확인합니다.
3. [NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md)와 [B1-1 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)를 따라 실제 실행(Runtime)을 수행합니다.
4. 실제 검증(Verification)과 증빙(Evidence)이 완료되기 전에는 플랫폼 PASS나 `CLEAR` 숫자를 올리지 않습니다.

## 📑 목차

- [완료 현황](#completion)
- [R01 실행 환경 프로필(Runtime Profiles)](#runtime-profiles)
- [플랫폼별 수행 기록](#runtime-records)
- [FAST TRACK](#fast-track)
- [실제 실행 미션 상태](#mission-status)
- [Phase B 공통 정책](#common-policies)
- [Cross-Mission 교정 완료](#cross-mission)
- [Phase C 실행 흐름](#phase-c-flow)
- [R01 전체 흐름](#r01-flow)
- [상태 정의](#status-definition)

---

<a id="completion"></a>
## 완료 현황

- Phase A Reference Build: **CORE READY 15 / 15**
- Canonical Final Consistency Audit: **PASS 15 / 15**
- Phase B Cross-Mission Audit: **COMPLETE / BLOCKER 0**
- Phase C Runtime Runbook: **FROZEN**
- Runtime `✅ CLEAR`: **0 / 15**
- FAST TRACK Stage 1 — Required: **0 / 11 CLEAR**
- FAST TRACK Stage 2 — Optional: **0 / 4 CLEAR**

핵심 문서:

- `README.md`
- `WORKING-RULES.md`
- `MISSION-INDEX.md`
- `MISSION-RUNBOOK.md`
- `environments/README.md`
- `environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`
- `environments/RUNTIME-PROFILES.md`
- `environments/MISSION-LAB-MATRIX.md`
- `training/round-01-clear/NEXT-ACTIONS.md`
- `training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`
- `training/round-01-clear/REFERENCE-AUDIT.md`
- `training/round-01-clear/CANONICAL-AUDIT.md`
- `training/round-01-clear/CROSS-MISSION-AUDIT.md`
- `training/round-01-clear/PHASE-C-RUNBOOK.md`
- `training/round-01-clear/PHASE-C-PREFLIGHT.md`
- `training/round-01-clear/MISSION-DEPENDENCY-MAP.md`
- `standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`
- `standards/BEGINNER-DOCUMENTATION-AUDIT.md`

<a id="runtime-profiles"></a>
## R01 실행 환경 프로필(Runtime Profiles)

```text
학교 macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine      ← 지원 실행 환경
└─ MAC-D: Docker                          ← 선택 실습

개인 노트북 Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct Runtime    ← 지원 실행 환경
└─ WIN-D: Docker                          ← 선택 실습
```

환경 운영 특성:

```text
MAC-V
= Resettable / Ephemeral
= CHECK BEFORE INSTALL
= Reset 시 필요한 항목만 재구성

WIN-V
= Persistent
= VERIFY BEFORE REINSTALL
= 기존 환경 보존, 문제 있을 때만 최소 Repair
```

현재 범위 밖:

- Ubuntu Native Host
- 별도 Hyper-V VM
- VMware
- KVM/QEMU/libvirt
- Proxmox
- Kubernetes

위 환경은 R01 전체 CLEAR 이후 Portability/Advanced 단계로 미룹니다.

상세: [RUNTIME-PROFILES.md](environments/RUNTIME-PROFILES.md)

<a id="runtime-records"></a>
## 플랫폼별 수행 기록(Runtime Records)

Mission CLEAR와 플랫폼 수행 기록을 분리합니다.

```text
Mission CLEAR
= 공식 Mission/Evaluation + 실제 Runtime + Verification + 필요한 Evidence

MAC-V Runtime Record
= 학교 Mac 환경에서 실제 수행한 이력

WIN-V Runtime Record
= Windows 11 노트북 환경에서 실제 수행한 이력

CROSS-PLATFORM VERIFIED
= 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS
```

공식 Mission/Evaluation이 두 플랫폼 모두를 요구하지 않는 한 다음을 적용합니다.

```text
한 지원 실행환경에서 공식 요구 충족
→ Mission CLEAR 가능

다른 지원 실행환경에서도 실제 PASS
→ Cross-platform Verification 추가 가능
```

즉 다음을 구분합니다.

```text
플랫폼별 수행 기록 ≠ Mission CLEAR
Cross-platform Verified ≠ 별도의 공식 Mission
```

플랫폼별 상태의 단일 요약 기준은 [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)입니다. 이 `PROGRESS.md`에서는 전체 진도만 관리하고 플랫폼별 세부 Evidence를 중복 관리하지 않습니다.

학교 Mac이 Reset되어도 이미 저장된 추적 가능한 과거 MAC-V PASS Evidence는 자동으로 FAIL 처리하지 않습니다. 현재 장비 재현 상태는 필요하면 `READY / STALE / REBUILD NEEDED`로 별도 기록합니다.

<a id="fast-track"></a>
## FAST TRACK

```text
Stage 1 — REQUIRED CLEAR
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B4-2 → B5-2 → B5-3 → B7-2
```

FAST TRACK은 선택 미션을 생략하는 경로가 아닙니다. **필수 11개를 먼저 완료하여 핵심 과정을 빠르게 닫고, 이후 선택 4개를 연속 수행해 R01 전체 15개를 CLEAR**합니다.

Dependency의 `필수 선행/권장 선행`은 학습 관계를 설명하고, FAST TRACK은 실제 R01 실행 순서를 설명합니다.

한 Mission을 한 지원 환경에서 CLEAR한 뒤 다른 지원 환경에서 재수행하여 Cross-platform Verification을 추가할 수 있습니다. 이 추가 검증은 다음 Mission 진도를 자동으로 막지 않습니다.

<a id="mission-status"></a>
## 실제 실행 미션 상태

| 순서 | Stage | 미션 | 구분 | Mission 상태 |
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

MAC-V/WIN-V 수행 상태는 [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)에서 확인합니다.

<a id="common-policies"></a>
## Phase B에서 확정한 공통 정책

### 실행 환경 격리(Runtime Isolation)

- 실제 실행(Runtime)은 **한 번에 한 미션**
- 한 실행 세션에서는 현재 실행 환경(Current Runtime Context)을 명확히 유지
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

<a id="cross-mission"></a>
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

<a id="phase-c-flow"></a>
## Phase C 실행 흐름

```text
현재 실행 환경(Current Runtime Context) 선택
→ 실행 전 점검(PHASE-C-PREFLIGHT)
→ 현재 미션 시작 점검(START-CHECK, 있는 경우)
→ 선택 환경 Bootstrap / Identity 확인
→ 입문자 가이드(BEGINNER-GUIDE)
→ 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ 해당 MAC-V 또는 WIN-V Runtime Record 갱신
→ 평가 설명(Evaluation)
→ 비밀정보(Secret) 확인
→ ✅ 완료(CLEAR) 판정
→ 필요 시 다른 지원 환경에서 재수행
→ 두 환경 PASS 시 CROSS-PLATFORM VERIFIED
→ FAST TRACK의 다음 미션
```

<a id="r01-flow"></a>
## R01 전체 흐름

```text
Phase A Reference Build          ✅ 15/15 CORE READY
→ Canonical Consistency Audit    ✅ PASS 15/15
→ Phase B Cross-Mission Audit    ✅ COMPLETE / BLOCKER 0
→ Phase C FAST TRACK
   ├─ Stage 1 Required           🟡 B1-1 ACTIVE / 0 of 11 CLEAR
   └─ Stage 2 Optional           ⬜ 0 of 4 CLEAR
```

<a id="status-definition"></a>
## 상태 정의

Mission 상태:

- ⬜ `NOT STARTED`: 해당 미션 실제 실행(Runtime) 미시작
- 🟡 `ACTIVE`: 현재 실제 수행/검증 대상
- ⛔ `BLOCKED`: 실제 의존성 때문에 진행 불가
- ✅ `CLEAR`: 구현 + 실제 검증 + 필요한 증빙(Evidence) 완료

플랫폼 Runtime Record:

- ⬜ `NOT RUN`: 해당 환경에서 실제 실행하지 않음
- 🟡 `PENDING`: 해당 환경에서 실행/검증 진행 중
- ✅ `PASS`: 해당 환경에서 실제 실행·검증 성공 + Evidence 추적 가능
- ❌ `FAIL`: 해당 환경 실제 실행 또는 검증 실패

내부 품질 상태:

- ✅ `CROSS-PLATFORM VERIFIED`: 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS

Reference/문서/정적검증 또는 Docker Lab만으로는 `Runtime PASS`, `CROSS-PLATFORM VERIFIED`, `✅ CLEAR`로 변경하지 않습니다.
