# Round 01 — CLEAR 진행 상태(Progress)

## 목표

입문자가 상세한 `BEGINNER-GUIDE`를 따라 필수 미션을 먼저 완료하고 선택 미션까지 전체 15개를 **실제 실행(Runtime)과 증빙(Evidence)**으로 CLEAR합니다.

> 현재 Mission ID의 단일 기준은 [`CURRENT-MISSION-MAP.md`](../../CURRENT-MISSION-MAP.md)입니다. 번호 변경은 기존 수행 상태를 초기화하지 않습니다.

## 🚀 빠른 상태 확인(Quick Status)

```text
Phase          = C — RUNTIME CLEAR
Current Workcell = B2-2 🟡 ACTIVE
B4-1 System Monitor = ⏸ PAUSED / READY TO RESUME
Runtime CLEAR  = 0 / 15
Required       = 0 / 11 CLEAR
Optional       = 0 / 4 CLEAR
```

지금 할 일:

1. [NEXT-ACTIONS.md](NEXT-ACTIONS.md)에서 현재 B2-2 실행 순서를 확인합니다.
2. B2-2는 [`codyssey-basic-git-collaboration`](https://github.com/MetaStudy999/codyssey-basic-git-collaboration) Repository에서 진행합니다.
3. 시스템 관제 미션을 재개할 때는 현재 **B4-1**으로 관리하며 [`codyssey-basic-system-monitor`](https://github.com/MetaStudy999/codyssey-basic-system-monitor)를 사용합니다.

> Reference/CANONICAL/Audit가 완료되어도 실제 실행(Runtime)·검증(Verification)·증빙(Evidence) 전에는 CLEAR 숫자를 올리지 않습니다.

## 📑 목차

- [현재 운영 모드](#mode)
- [실제 실행 진행표](#runtime-table)
- [Phase C 시작 문서](#phase-c-docs)
- [B2-2 현재 흐름](#b2-2-flow)
- [B4-1 재개 흐름](#b4-1-flow)
- [전체 R01 흐름](#r01-flow)
- [CLEAR 원칙](#clear-principle)

---

<a id="mode"></a>
## 현재 운영 모드

- Phase: **C — RUNTIME CLEAR**
- 현재 Workcell: **B2-2 — Git 팀 협업**
- 상태: **🟡 ACTIVE**
- B4-1 시스템 관제: **⏸ PAUSED / READY TO RESUME**
- Reference Build: **15 / 15 CORE READY**
- Canonical Audit: **PASS 15 / 15**
- Cross-Mission Audit: **COMPLETE / BLOCKER 0**
- Runtime CLEAR: **0 / 15**

Phase A/B에서는 기준 구현과 전체 환경을 준비했습니다. 이제부터 상태 변경은 실제 실행(Runtime)·검증(Verification)·증빙(Evidence)에만 근거합니다.

<a id="runtime-table"></a>
## 실제 실행(Runtime) 진행표

FAST TRACK은 기존 **미션 주제 기준 실행 순서**를 유지하고 현재 Mission ID로 재매핑합니다.

| 실행순번 | 현재 미션 | 주제 | 상태 |
|---:|---|---|---|
| 1 | **B4-1** | 시스템 관제 | ⏸ PAUSED / READY TO RESUME |
| 2 | **B4-2** | 시스템 장애 분석 | ⬜ NOT STARTED |
| 3 | **B2-1** | 가계부 | ⬜ NOT STARTED |
| 4 | **B2-2** | Git 팀 협업 | 🟡 ACTIVE |
| 5 | **B5-1** | Mini Redis | ⬜ NOT STARTED |
| 6 | **B5-2** | Mini Git | ⬜ NOT STARTED |
| 7 | **B1-1** | 웹 포트폴리오 | ⬜ NOT STARTED |
| 8 | **B6-1** | SQL 데이터베이스 | ⬜ NOT STARTED |
| 9 | **B3-1** | 클라우드 인프라 | ⬜ NOT STARTED |
| 10 | **B3-2** | AI Git 도우미 | ⬜ NOT STARTED |
| 11 | **B7-1** | AI 챗봇 | ⬜ NOT STARTED |
| 12 | **B1-2** | React SPA | ⬜ NOT STARTED |
| 13 | **B6-2** | FastAPI CRUD | ⬜ NOT STARTED |
| 14 | **B6-3** | FastAPI 인증·연관관계 | ⬜ NOT STARTED |
| 15 | **B7-2** | AI 챗봇 고도화 | ⬜ NOT STARTED |

<a id="phase-c-docs"></a>
## Phase C 시작 문서

```text
CURRENT-MISSION-MAP.md
→ NEXT-ACTIONS.md
→ 실행 전 점검(PHASE-C-PREFLIGHT.md)
→ 실제 실행 절차(PHASE-C-RUNBOOK.md)
→ 미션 선후관계(MISSION-DEPENDENCY-MAP.md)
→ 각 Mission 입문자 가이드(BEGINNER-GUIDE.md)
```

<a id="b2-2-flow"></a>
## B2-2 현재 흐름

```text
MAC-V 공통환경 확인
→ codyssey01~05 Linux User 준비
→ GitHub Account A~E 인증
→ Identity Gate 5/5
→ 독립 clone
→ GitHub Flow Simulation
→ Verification
→ Simulation Evidence
→ 실제 3~5인 팀 Mission Evidence 별도 확인
→ Evaluation
→ CLEAR Gate
```

B2-2 Repository:

- https://github.com/MetaStudy999/codyssey-basic-git-collaboration

<a id="b4-1-flow"></a>
## B4-1 재개 흐름

번호 변경 전 B1-1이었던 동일 시스템 관제 미션입니다.

```text
공통 환경 마무리(Common Environment Closeout)
→ 실행 전 점검(Preflight)
→ 현재 OS/repository/runtime baseline
→ safe SSH 20022
→ UFW
→ users/groups/permissions
→ Agent boot + 15034
→ monitor.sh
→ rotation
→ cron
→ sudo verify
→ 증빙(Evidence)
→ 평가 설명(Evaluation)
→ 완료 판정(CLEAR Gate)
```

B4-1 Repository:

- https://github.com/MetaStudy999/codyssey-basic-system-monitor

실제 `t_secret.key` 값은 GitHub/채팅/증빙(Evidence)에 기록하지 않습니다.

<a id="r01-flow"></a>
## 전체 R01 흐름

`Phase A Reference Build ✅ → Canonical Audit ✅ → Phase B Cross-Mission Audit ✅ → Phase C Runtime CLEAR 🟡`

<a id="clear-principle"></a>
## CLEAR 원칙

`공식 요구사항 → 구현 → 검증(Verification) → 실제 실행(Runtime) → 필요한 증빙(Evidence) → 완료(CLEAR)`

Reference 문서나 기준 구현만으로는 CLEAR하지 않습니다.
