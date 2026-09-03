# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase C — RUNTIME CLEAR / FAST EXECUTE**

현재 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**

> 현재 Mission ID(미션 번호)의 단일 기준은 [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)입니다. 번호 변경은 기존 Runtime/Workcell 상태를 초기화하지 않습니다.

현재 Workcell 포커스:

```text
B4-1 = ⏸ PAUSED / READY TO RESUME   # 이전 B1-1 시스템 관제
B2-2 = 🟡 ACTIVE
```

> B4-1 일시정지는 FAIL 또는 CLEAR가 아닙니다. B2-2의 현재 5계정 Simulation 준비/실행도 실제 팀 Runtime PASS나 Mission CLEAR를 의미하지 않습니다.

`MAC-V`와 `WIN-V`는 합격 우선순위의 Primary/Secondary가 아니라 **동등한 지원 실행 환경(Supported Runtime)**입니다. 실제 작업을 시작할 때 사용자가 현재 수행 환경을 알려 주면 그 환경을 **현재 실행 환경(Current Runtime Context)**으로 사용합니다.

## 🚀 빠른 상태 확인(Quick Status)

```text
현재 위치                   = R01 / Phase C / Stage 1
현재 Workcell               = B2-2 🟡 ACTIVE
B4-1                         = ⏸ PAUSED / READY TO RESUME
Runtime CLEAR               = 0 / 15
필수 경로                   = 0 / 11 CLEAR
선택 경로                   = 0 / 4 CLEAR
B2-2 MAC-V Mission Record   = NOT RUN
B2-2 WIN-V Mission Record   = NOT RUN
B2-2 Cross-platform         = NOT VERIFIED
B2-2 5계정 Simulation       = Documentation/Automation Ready / Runtime 미실행
Current Runtime Context     = MAC-V 우선 진행 예정
```

플랫폼별 실제 수행 현황의 단일 요약 기준:

- [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

현재 바로 할 일:

1. 학교 Mac에서 B2-2 `mac-v-orchestrate.sh --prepare` 또는 동등 수동 절차로 MAC-V CORE를 실제 준비합니다.
2. Control Tower Ubuntu Bootstrap을 공통 Source of Truth로 사용합니다.
3. Ubuntu 내부 `codyssey01`~`codyssey05`와 GitHub 학습 Account A~E를 1:1로 인증합니다.
4. Account Identity Gate 5/5를 실제 통과합니다.
5. Account A에서 별도 `codyssey-b2-2-sim-mac-v` Simulation Repository seed를 생성합니다.
6. Account B~E collaborator 수락과 `main` 보호 정책을 확인합니다.
7. Repository Gate 0 FAIL 후 5개 독립 clone을 준비합니다.
8. `TASK-MATRIX.md`에 따라 Issue 10+ / PR 10+ / Review 10+ / Feedback 5+를 실제 수행합니다.
9. conflict 2+ / troubleshooting 4종 / Simulation SUBMISSION을 완료합니다.
10. Simulation 기록은 실제 3~5인 팀 Evidence와 분리하고, 실제 팀 GitHub 기록 검증 전에는 B2-2 Mission CLEAR로 승격하지 않습니다.

B2-2 진입 문서:

- [B2-2 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)
- [B2-2 MAC-V Run Now](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/environment/mac-v/RUN-NOW.md)
- [B2-2 MAC-V Simulation](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/simulation/mac-v/README.md)
- [Simulation Repository Setup](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/simulation/mac-v/SIMULATION-REPOSITORY-SETUP.md)

## 📑 목차

- [완료 현황](#completion)
- [R01 실행 환경 프로필](#runtime-profiles)
- [플랫폼별 수행 기록](#runtime-records)
- [FAST TRACK](#fast-track)
- [실제 실행 미션 상태](#mission-status)
- [현재 B2-2 Workcell](#current-b2-2)
- [공통 정책](#common-policies)
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

- `CURRENT-MISSION-MAP.md`
- `README.md`
- `WORKING-RULES.md`
- `MISSION-INDEX.md`
- `MISSION-RUNBOOK.md`
- `environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`
- `training/round-01-clear/NEXT-ACTIONS.md`
- `training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`
- `training/round-01-clear/PHASE-C-PREFLIGHT.md`
- `training/round-01-clear/MISSION-DEPENDENCY-MAP.md`
- `standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`

---

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

WIN-V
= Persistent
= VERIFY BEFORE REINSTALL
```

현재 B2-2 CORE Simulation의 Ubuntu 내부 구조는 양쪽에서 동일하게 맞춥니다.

```text
Ubuntu 24.04
├─ codyssey01 → GitHub A
├─ codyssey02 → GitHub B
├─ codyssey03 → GitHub C
├─ codyssey04 → GitHub D
└─ codyssey05 → GitHub E
```

독립 VM/Instance 5개 방식은 B2-2 ADVANCED Lab으로 분리합니다.

---

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

플랫폼별 상태의 단일 요약 기준은 [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)입니다.

5계정 Simulation은 공식 B2-2 팀 Runtime Record와 별도 학습 상태로 관리합니다.

---

<a id="fast-track"></a>
## FAST TRACK

기존 미션 주제의 수행 순서를 유지하고 현재 Mission ID로 재매핑합니다.

```text
Stage 1 — REQUIRED CLEAR
B4-1 → B4-2 → B2-1 → B2-2 → B5-1 → B5-2
→ B1-1 → B6-1 → B3-1 → B3-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B1-2 → B6-2 → B6-3 → B7-2
```

FAST TRACK의 주제 기준 CLEAR 순서는 유지합니다. 현재 B2-2 Workcell을 먼저 학습·준비한다고 해서 앞선 필수 미션을 CLEAR한 것으로 간주하지 않습니다.

시스템 관제 미션은 번호 변경 전 `B1-1`이었으며, 현재는 **B4-1 `⏸ PAUSED / READY TO RESUME`** 상태로 이어집니다.

---

<a id="mission-status"></a>
## 실제 실행 미션 상태

| 실행순번 | Stage | 현재 미션 | 구분 | Mission / Workcell 상태 |
|---:|---|---|---|---|
| 1 | Required | **B4-1** 시스템 관제 | 필수 | ⏸ PAUSED / READY TO RESUME |
| 2 | Required | **B4-2** 시스템 장애 분석 | 필수 | ⬜ NOT STARTED |
| 3 | Required | **B2-1** 가계부 | 필수 | ⬜ NOT STARTED |
| 4 | Required | **B2-2** Git 팀 협업 | 필수 | 🟡 ACTIVE |
| 5 | Required | **B5-1** Mini Redis | 필수 | ⬜ NOT STARTED |
| 6 | Required | **B5-2** Mini Git | 필수 | ⬜ NOT STARTED |
| 7 | Required | **B1-1** 웹 포트폴리오 | 필수 | ⬜ NOT STARTED |
| 8 | Required | **B6-1** SQL 데이터베이스 | 필수 | ⬜ NOT STARTED |
| 9 | Required | **B3-1** 클라우드 인프라 | 필수 | ⬜ NOT STARTED |
| 10 | Required | **B3-2** AI Git 도우미 | 필수 | ⬜ NOT STARTED |
| 11 | Required | **B7-1** AI 챗봇 | 필수 Term Project | ⬜ NOT STARTED |
| 12 | Optional | **B1-2** React SPA | 선택 | ⬜ NOT STARTED |
| 13 | Optional | **B6-2** FastAPI CRUD | 선택 | ⬜ NOT STARTED |
| 14 | Optional | **B6-3** FastAPI 인증·연관관계 | 선택 | ⬜ NOT STARTED |
| 15 | Optional | **B7-2** AI 챗봇 고도화 | 선택 Term Project / 고도화 | ⬜ NOT STARTED |

---

<a id="current-b2-2"></a>
## 현재 B2-2 Workcell

현재 B2-2는 다음 두 트랙을 명확히 분리합니다.

```text
A. 실제 B2-2 Mission
실제 3~5인 팀
→ 실제 팀 Repository
→ Issue / PR / Review / Merge
→ Conflict / Troubleshooting
→ SUBMISSION / Evidence
→ Evaluation
→ CLEAR

B. 5계정 학습 Simulation
동일 GitHub Account A~E
→ MAC-V Ubuntu 24.04 + Linux User 5개
→ Identity Gate 5/5
→ 별도 Simulation Repository
→ collaborator / main protection Gate
→ 독립 clone 5개
→ Issue / PR / Review / Feedback
→ Conflict / Troubleshooting
→ WIN-V 동일 구조 재현
→ Cross-platform
→ 독립 VM/Instance 5개 ADVANCED
```

```text
Simulation PASS ≠ Runtime Mission PASS
Simulation Evidence ≠ 실제 팀 Evidence
Simulation CLEAR ≠ B2-2 Mission CLEAR
```

---

<a id="common-policies"></a>
## 공통 정책

### 실행 환경 격리(Runtime Isolation)

- 한 실행 세션에서는 현재 실행 환경(Current Runtime Context)을 명확히 유지
- Python package는 미션별 `.venv`
- SQLite DB는 미션별 분리
- Web local port는 시작 전 충돌 확인 후 사용
- B2-2 각 Linux User는 별도 HOME / Git config / `gh` 인증 / Repository clone을 사용

### Secret

- Secret/Token/Password/Private Key 실제 값은 Repository/Chat/Evidence에 저장하지 않음
- `gh auth token`, `gh auth status --show-token` 결과를 Evidence에 남기지 않음
- 공용 MAC-V 종료 시 `gh`와 브라우저 GitHub 세션 정리

---

<a id="phase-c-flow"></a>
## Phase C 실행 흐름

```text
현재 Workcell 확인
→ Current Runtime Context 선택
→ 실행 전 점검
→ Control Tower Bootstrap / Identity 확인
→ Mission별 Beginner Guide
→ 실제 실행(Runtime)
→ Verification
→ Evidence
→ 플랫폼별 Runtime Record 갱신
→ Evaluation
→ Secret 확인
→ 조건 충족 시에만 Mission CLEAR
```

B2-2 Simulation에서는 공식 Mission Runtime Record를 올리지 않고 Simulation 상태만 별도로 기록합니다.

---

<a id="r01-flow"></a>
## R01 전체 흐름

```text
Phase A Reference Build          ✅ 15/15 CORE READY
→ Canonical Consistency Audit    ✅ PASS 15/15
→ Phase B Cross-Mission Audit    ✅ COMPLETE / BLOCKER 0
→ Phase C FAST TRACK             🟡 진행 중
   ├─ B4-1 시스템 관제 Workcell  ⏸ PAUSED / READY TO RESUME
   ├─ B2-2 Workcell              🟡 ACTIVE
   ├─ Stage 1 Required CLEAR     0 / 11
   └─ Stage 2 Optional CLEAR     0 / 4
```

---

<a id="status-definition"></a>
## 상태 정의

Mission / Workcell 상태:

- ⬜ `NOT STARTED`: 아직 해당 Workcell 실제 수행 미시작
- 🟡 `ACTIVE`: 현재 수행/검증의 주 Workcell
- ⏸ `PAUSED / READY TO RESUME`: 일시정지되었지만 FAIL/CLEAR가 아니며 재개 가능
- ⛔ `BLOCKED`: 실제 의존성 때문에 진행 불가
- ✅ `CLEAR`: 공식 요구 + 실제 검증 + 필요한 Evidence 완료

플랫폼 Runtime Record:

- ⬜ `NOT RUN`: 해당 환경에서 실제 미션 Runtime 미실행
- 🟡 `PENDING`: 해당 환경 실제 실행/검증 진행 중
- ✅ `PASS`: 실제 실행·검증 성공 + Evidence 추적 가능
- ❌ `FAIL`: 실제 실행 또는 검증 실패

내부 품질 상태:

- ✅ `CROSS-PLATFORM VERIFIED`: 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS

Reference/문서/Simulation/정적검증 또는 Docker Lab만으로는 `Runtime PASS`, `CROSS-PLATFORM VERIFIED`, `✅ CLEAR`로 변경하지 않습니다.
