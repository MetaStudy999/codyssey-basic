# Round 01 — CLEAR 진행 상태(Progress)

## 목표

입문자가 상세한 `BEGINNER-GUIDE`를 따라 필수 미션을 먼저 완료하고 선택 미션까지 전체 15개를 **실제 실행(Runtime)과 증빙(Evidence)**으로 CLEAR합니다.

## 🚀 빠른 상태 확인(Quick Status)

```text
Phase          = C — RUNTIME CLEAR
Active Mission = B1-1 🟡 ACTIVE
Runtime CLEAR  = 0 / 15
Required       = 0 / 11 CLEAR
Optional       = 0 / 4 CLEAR
```

지금 할 일:

1. [NEXT-ACTIONS.md](NEXT-ACTIONS.md)에서 공통 환경 마무리(Common Environment Closeout) 상태를 확인합니다.
2. [PHASE-C-PREFLIGHT.md](PHASE-C-PREFLIGHT.md)로 B1-1 시작 전 상태를 확인합니다.
3. [B1-1 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)를 따라 실제 실행(Runtime)을 수행합니다.

> Reference/CANONICAL/Audit가 완료되어도 실제 실행(Runtime)·검증(Verification)·증빙(Evidence) 전에는 CLEAR 숫자를 올리지 않습니다.

## 📑 목차

- [현재 운영 모드](#mode)
- [실제 실행 진행표](#runtime-table)
- [Phase C 시작 문서](#phase-c-docs)
- [B1-1 현재 흐름](#b1-1-flow)
- [전체 R01 흐름](#r01-flow)
- [CLEAR 원칙](#clear-principle)

---

<a id="mode"></a>
## 현재 운영 모드

- Phase: **C — RUNTIME CLEAR**
- 현재 미션(Active Mission, Runtime 기준): **B1-1**
- 실제 실행 상태(Runtime Status): **🟡 ACTIVE**
- Reference Build: **15 / 15 CORE READY**
- Canonical Audit: **PASS 15 / 15**
- Cross-Mission Audit: **COMPLETE / BLOCKER 0**
- Runtime Runbook: **FROZEN**
- Runtime CLEAR: **0 / 15**

Phase A/B에서는 기준 구현과 전체 환경을 준비했습니다. 이제부터 상태 변경은 실제 실행(Runtime)·검증(Verification)·증빙(Evidence)에만 근거합니다.

<a id="runtime-table"></a>
## 실제 실행(Runtime) 진행표

| 순서 | 미션 | 상태 |
|---:|---|---|
| 1 | B1-1 | 🟡 ACTIVE |
| 2 | B1-2 | ⬜ NOT STARTED |
| 3 | B2-1 | ⬜ NOT STARTED |
| 4 | B2-2 | ⬜ NOT STARTED |
| 5 | B3-1 | ⬜ NOT STARTED |
| 6 | B3-2 | ⬜ NOT STARTED |
| 7 | B4-1 | ⬜ NOT STARTED |
| 8 | B5-1 | ⬜ NOT STARTED |
| 9 | B6-1 | ⬜ NOT STARTED |
| 10 | B6-2 | ⬜ NOT STARTED |
| 11 | B7-1 | ⬜ NOT STARTED |
| 12 | B4-2 | ⬜ NOT STARTED |
| 13 | B5-2 | ⬜ NOT STARTED |
| 14 | B5-3 | ⬜ NOT STARTED |
| 15 | B7-2 | ⬜ NOT STARTED |

<a id="phase-c-docs"></a>
## Phase C 시작 문서

```text
NEXT-ACTIONS.md
→ 실행 전 점검(PHASE-C-PREFLIGHT.md)
→ 실제 실행 절차(PHASE-C-RUNBOOK.md)
→ 미션 선후관계(MISSION-DEPENDENCY-MAP.md)
→ 각 Mission 입문자 가이드(BEGINNER-GUIDE.md)
```

<a id="b1-1-flow"></a>
## B1-1 현재 흐름

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

실제 `t_secret.key` 값은 GitHub/채팅/증빙(Evidence)에 기록하지 않습니다.

<a id="r01-flow"></a>
## 전체 R01 흐름

`Phase A Reference Build ✅ → Canonical Audit ✅ → Phase B Cross-Mission Audit ✅ → Phase C Runtime CLEAR 🟡`

<a id="clear-principle"></a>
## CLEAR 원칙

`공식 요구사항 → 구현 → 검증(Verification) → 실제 실행(Runtime) → 필요한 증빙(Evidence) → 완료(CLEAR)`

Reference 문서나 기준 구현만으로는 CLEAR하지 않습니다.
