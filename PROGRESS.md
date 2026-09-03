# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase C — RUNTIME CLEAR / FAST EXECUTE**

현재 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**

> 현재 Mission ID(미션 번호)의 단일 기준은 [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)입니다. 번호 변경은 기존 Runtime/Workcell 상태를 초기화하지 않습니다.

현재 Workcell 포커스:

```text
B4-1 = 🟡 ACTIVE                       # 이전 B1-1 시스템 관제
B2-2 = ⏸ PAUSED / TEAM WORK IN PROGRESS
```

> 사용자가 B2-2를 실제 팀과 별도로 진행 중이므로 이 Control Tower 실행에서는 B2-2를 보류하고 FAST TRACK의 첫 미션인 B4-1을 다시 활성화합니다. B2-2 보류는 FAIL/CLEAR가 아니며, 이미 확보한 MAC-V Host/CORE 준비 이력은 보존합니다.

`MAC-V`와 `WIN-V`는 합격 우선순위의 Primary/Secondary가 아니라 **동등한 지원 실행 환경(Supported Runtime)**입니다. B4-1 실제 Runtime에 들어갈 때 사용자가 수행할 환경을 알려 주면 그 환경을 **현재 실행 환경(Current Runtime Context)**으로 확정합니다.

## 🚀 빠른 상태 확인(Quick Status)

```text
현재 위치                   = R01 / Phase C / Stage 1
현재 Workcell               = B4-1 🟡 ACTIVE
B2-2                         = ⏸ PAUSED / TEAM WORK IN PROGRESS
Runtime CLEAR               = 0 / 15
필수 경로                   = 0 / 11 CLEAR
선택 경로                   = 0 / 4 CLEAR
B2-2 MAC-V Host/CORE Prep   = PASS
B2-2 Identity Gate 5/5      = NOT RUN
B2-2 Simulation             = NOT RUN
B2-2 Mission CLEAR          = NOT CLEAR
B4-1 Current Runtime Context= TO SELECT (MAC-V or WIN-V)
```

플랫폼별 실제 수행 현황의 단일 요약 기준:

- [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

현재 바로 할 일:

1. B4-1 `codyssey-basic-system-monitor`의 현재 Mission ID/Repository 경로 정합성을 먼저 확인합니다.
2. 번호 변경 전 `B1-1`로 작성된 운영 문서의 현재 ID와 Stable Repository 경로를 B4-1 기준으로 정리합니다.
3. B4-1 Runtime Preflight에서 Shell 문법, Repository 경로, Mission Metadata를 자동 검증하도록 준비합니다.
4. 실제 Runtime은 `MAC-V` 또는 `WIN-V` 중 현재 사용 환경을 확정한 뒤 시작합니다.
5. Runtime 시작 시 Control Tower Bootstrap → B4-1 Beginner Guide → Baseline → SSH/UFW 순으로 진행합니다.
6. SSH/UFW는 현재 상태 백업과 새 접속 검증 없이 파괴적으로 변경하지 않습니다.
7. 실제 Agent/monitor/cron/Verification/Evidence가 끝나기 전에는 B4-1을 CLEAR로 올리지 않습니다.
8. B2-2는 팀 진행이 끝난 뒤 실제 팀 GitHub 기록과 현재 5계정 학습 기록을 분리하여 재개합니다.

B4-1 진입 문서:

- [B4-1 Repository](https://github.com/MetaStudy999/codyssey-basic-system-monitor)
- [B4-1 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)
- [B4-1 Checklist](https://github.com/MetaStudy999/codyssey-basic-system-monitor/blob/main/training/round-01-clear/CHECKLIST.md)

B2-2 보류 기록:

- [B2-2 Repository](https://github.com/MetaStudy999/codyssey-basic-git-collaboration)
- B2-2 MAC-V Host/CORE 준비: **PASS**
- `codyssey01` Account A Identity: 설정 완료 후보 / 전체 Identity Gate 전
- 전체 Identity Gate 5/5: **NOT RUN**
- Simulation: **NOT RUN**

## 📑 목차

- [완료 현황](#completion)
- [R01 실행 환경 프로필](#runtime-profiles)
- [플랫폼별 수행 기록](#runtime-records)
- [FAST TRACK](#fast-track)
- [실제 실행 미션 상태](#mission-status)
- [현재 B4-1 Workcell](#current-b4-1)
- [B2-2 보류 상태](#paused-b2-2)
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

B2-2의 5계정 구조는 B2-2 전용 학습 Simulation 상태로 보존하며 B4-1 Runtime과 혼합하지 않습니다.

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

현재는 FAST TRACK 첫 미션인 **B4-1 시스템 관제**를 다시 활성화합니다. B2-2는 실제 팀 진행이 끝날 때까지 보류하지만 순서나 완료 판정을 임의로 변경하지 않습니다.

시스템 관제 미션은 번호 변경 전 `B1-1`이었으며 현재 Mission ID는 **B4-1**입니다.

---

<a id="mission-status"></a>
## 실제 실행 미션 상태

| 실행순번 | Stage | 현재 미션 | 구분 | Mission / Workcell 상태 |
|---:|---|---|---|---|
| 1 | Required | **B4-1** 시스템 관제 | 필수 | 🟡 ACTIVE |
| 2 | Required | **B4-2** 시스템 장애 분석 | 필수 | ⬜ NOT STARTED |
| 3 | Required | **B2-1** 가계부 | 필수 | ⬜ NOT STARTED |
| 4 | Required | **B2-2** Git 팀 협업 | 필수 | ⏸ PAUSED / TEAM WORK IN PROGRESS |
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

<a id="current-b4-1"></a>
## 현재 B4-1 Workcell

B4-1은 시스템 관제(System Monitoring) 미션입니다.

```text
현재 Mission ID    : B4-1
이전 Mission ID    : B1-1
Canonical Repository: MetaStudy999/codyssey-basic-system-monitor
상태                : 🟡 ACTIVE
Runtime Context     : TO SELECT
```

실행 흐름:

```text
Current Runtime Context 확정
→ Control Tower Bootstrap 확인
→ B4-1 Repository/Branch/Working Tree 확인
→ Ubuntu 24.04 / systemd / architecture Baseline
→ SSH 20022 안전 전환
→ UFW 정책
→ 사용자·그룹·ACL
→ Agent Runtime 15034
→ monitor.sh / log rotation
→ cron / failure-warning tests
→ Verification
→ Evidence
→ Evaluation
→ CLEAR 판정
```

Repository Rename이나 Mission ID 변경 때문에 기존 Runtime 상태를 추정하지 않습니다. 실제 현재 환경을 다시 확인한 뒤 이어갑니다.

---

<a id="paused-b2-2"></a>
## B2-2 보류 상태

사용자가 B2-2를 다른 구성원과 실제 팀 방식으로 진행하고 있으므로 이 Workcell은 일시정지합니다.

```text
B2-2 상태                   = ⏸ PAUSED / TEAM WORK IN PROGRESS
MAC-V Host/CORE Prep        = ✅ PASS
codyssey01 Account A        = Identity 설정 완료 후보
Identity Gate 5/5           = ⬜ NOT RUN
Simulation Repository       = ⬜ NOT RUN
B2-2 Mission CLEAR          = ❌ 아님
```

보류 상태는 지금까지의 기록을 삭제하거나 재설정하지 않습니다. 재개 시 실제 팀 Evidence와 학습 Simulation Evidence를 분리하여 검증합니다.

---

<a id="common-policies"></a>
## 공통 정책

### 실행 환경 격리(Runtime Isolation)

- 한 실행 세션에서는 현재 실행 환경(Current Runtime Context)을 명확히 유지
- Python package는 미션별 `.venv`
- SQLite DB는 미션별 분리
- Web local port는 시작 전 충돌 확인 후 사용
- B2-2 학습용 5계정 HOME/GitHub 상태를 B4-1 시스템 관제 Runtime 자산과 혼합하지 않음

### Secret

- Secret/Token/Password/Private Key 실제 값은 Repository/Chat/Evidence에 저장하지 않음
- `gh auth token`, `gh auth status --show-token` 결과를 Evidence에 남기지 않음
- 공용 MAC-V 종료 시 필요한 계정 세션을 정리

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

---

<a id="r01-flow"></a>
## R01 전체 흐름

```text
Phase A Reference Build          ✅ 15/15 CORE READY
→ Canonical Consistency Audit    ✅ PASS 15/15
→ Phase B Cross-Mission Audit    ✅ COMPLETE / BLOCKER 0
→ Phase C FAST TRACK             🟡 진행 중
   ├─ B4-1 시스템 관제 Workcell  🟡 ACTIVE
   ├─ B2-2 Git 협업 Workcell     ⏸ PAUSED / TEAM WORK IN PROGRESS
   ├─ Stage 1 Required CLEAR     0 / 11
   └─ Stage 2 Optional CLEAR     0 / 4
```

---

<a id="status-definition"></a>
## 상태 정의

Mission / Workcell 상태:

- ⬜ `NOT STARTED`: 아직 해당 Workcell 실제 수행 미시작
- 🟡 `ACTIVE`: 현재 수행/검증의 주 Workcell
- ⏸ `PAUSED / READY TO RESUME` 또는 `PAUSED / TEAM WORK IN PROGRESS`: 일시정지되었지만 FAIL/CLEAR가 아니며 재개 가능
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
