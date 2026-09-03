# R01 Phase C — 다음 작업(Next Actions)

현재 운영 모드: **빠른 실행 방식(FAST EXECUTE)**

현재 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**

> 현재 Mission ID(미션 번호)의 단일 기준은 [`CURRENT-MISSION-MAP.md`](../../CURRENT-MISSION-MAP.md)입니다. 번호 변경은 기존 Runtime/Workcell 상태를 초기화하지 않습니다.

현재 Workcell 포커스:

```text
B4-1 = ⏸ PAUSED / READY TO RESUME   # 이전 B1-1 시스템 관제
B2-2 = 🟡 ACTIVE
```

> Phase A/B의 설계·Reference·Audit·Runbook 준비와 공통 환경 설계 동결은 완료했습니다. 현재는 B2-2 Workcell을 우선 진행하되, FAST TRACK의 정식 CLEAR 순서를 우회하거나 선행 미션을 완료한 것으로 간주하지 않습니다.

## 🚀 빠른 시작(Quick Start)

현재 바로 할 일은 **B2-2 MAC-V 5계정 학습 Simulation 환경을 실제 학교 Mac에서 준비**하는 것입니다.

### 1. 현재 실행 환경(Current Runtime Context)

```text
현재 우선 환경
→ MAC-V
→ 학교 macOS → OrbStack → Ubuntu 24.04 `codyssey`
→ Resettable / Ephemeral
→ CHECK BEFORE INSTALL
```

후속 재현 환경:

```text
WIN-V
→ Windows 11 Pro → WSL2 → Ubuntu 24.04
→ Persistent
→ VERIFY BEFORE REINSTALL
```

`MAC-V`와 `WIN-V`는 합격 기준의 Primary/Secondary 관계가 아닙니다. B2-2 Simulation에서도 Ubuntu 24.04 내부 사용자·Git/GitHub 절차를 최대한 동일하게 맞춥니다.

### 2. MAC-V 공통 환경 확인

macOS에서는 OrbStack과 `codyssey` machine 상태를 확인하고, Ubuntu 내부에서는 Control Tower Bootstrap을 사용합니다.

```text
macOS
orb status
orb list
        ↓
OrbStack Ubuntu 24.04 `codyssey`
        ↓
Control Tower Ubuntu Bootstrap
        ↓
codyssey01~05
```

Ubuntu 내부의 Control Tower root에서:

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
```

필수 항목이 실제로 누락된 경우에만:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

B2-2가 Git/`gh` 공통 설치 기준을 별도로 복제하지 않습니다.

### 3. B2-2 MAC-V 5계정 구조

```text
학교 공용 Mac
→ macOS 사용자 1개
→ OrbStack
→ Ubuntu 24.04 `codyssey`
   ├─ codyssey01 → GitHub Account A
   ├─ codyssey02 → GitHub Account B
   ├─ codyssey03 → GitHub Account C
   ├─ codyssey04 → GitHub Account D
   └─ codyssey05 → GitHub Account E
```

GitHub 학습 계정은 총 5개이며 동일한 A~E를 이후 WIN-V에서도 사용합니다.

상세 Runbook:

- [B2-2 MAC-V README](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/environment/mac-v/README.md)

### 4. MAC-V 수행 순서

```text
M0 OrbStack 사전 점검
→ M1 Ubuntu 24.04 `codyssey` 생성/확인
→ M2 Control Tower Ubuntu Bootstrap
→ M3 Linux User codyssey01~05 생성
→ M4 GitHub Account A~E `gh` 인증
→ M5 Account Identity Gate 5/5
→ M6 계정별 Repository clone
→ M7 MAC-V Verification
→ M8 공용 PC Closeout
```

계정별 Identity Gate:

```text
Linux User
↔ GitHub Login
↔ Git Commit Identity
```

불일치 시 Issue/Commit/PR/Review를 생성하지 않습니다.

### 5. Simulation과 실제 Mission 분리

```text
5계정 Simulation
→ 학습용
→ 실제 3~5인 팀 Evidence 대체 불가

실제 B2-2 Mission
→ 실제 팀 Repository
→ 실제 Issue / PR / Review / Merge
→ Conflict / Troubleshooting
→ SUBMISSION / Evidence
→ Evaluation
→ CLEAR
```

실제 팀 GitHub 기록이 최종 검증되기 전에는 `✅ B2-2 CLEAR`로 변경하지 않습니다.

---

## 📑 목차

- [R01 실행환경 범위](#runtime-scope)
- [공통 환경 마무리](#environment-closeout)
- [FAST TRACK](#fast-track)
- [Phase A/B 완료 사항](#phase-ab)
- [현재 Workcell](#current-workcell)
- [B2-2 MAC-V 즉시 실행 순서](#b2-2-mac-v)
- [WIN-V / Cross-platform 후속](#win-cross)
- [실제 B2-2 Mission 복귀](#actual-mission)
- [플랫폼별 수행 기록](#runtime-records)
- [안전 제한](#safety)
- [Stage 전환 규칙](#stage-transition)

---

<a id="runtime-scope"></a>
## R01 실행환경 범위

```text
학교 macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine      ← 지원 실행 환경
└─ MAC-D: Docker                          ← 선택 실습

개인 노트북 Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct Runtime    ← 지원 실행 환경
└─ WIN-D: Docker                          ← 선택 실습
```

B2-2 ADVANCED에서는 독립 OrbStack Ubuntu machine 5개 또는 독립 WSL2 instance/Ubuntu VM 5개를 별도 학습할 수 있지만, CORE Runtime과 공식 CLEAR Gate에 혼합하지 않습니다.

환경 계약:

- `environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`
- `environments/RUNTIME-PROFILES.md`
- `environments/ubuntu/README.md`
- `environments/ubuntu/ENVIRONMENT-CLOSEOUT.md`
- `standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`

---

<a id="environment-closeout"></a>
## 공통 환경 마무리(Common Environment Closeout)

전역 공통 Gate:

```text
Documentation Drift           ✅ PASS 기준 유지
Bash Static Syntax Validation ✅ PASS 기준 유지
Common Environment Design     ✅ FROZEN
```

Mission별 Runtime에서는 공통 환경 설계를 다시 확장하지 않고 현재 Runtime에 필요한 최소 확인과 JIT 보완만 수행합니다.

```text
Current Runtime Context
→ bootstrap.sh --check
→ 필요한 경우만 --install
→ Git/GitHub Identity 확인
→ Mission Runtime
```

---

<a id="fast-track"></a>
## FAST TRACK

기존 미션 주제의 R01 수행 순서는 유지하고 Mission ID만 현재 번호로 재매핑합니다.

```text
Stage 1 — REQUIRED CLEAR
B4-1 → B4-2 → B2-1 → B2-2 → B5-1 → B5-2
→ B1-1 → B6-1 → B3-1 → B3-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B1-2 → B6-2 → B6-3 → B7-2
```

현재 B2-2를 먼저 학습·준비하는 것은 Workcell 포커스 변경입니다. FAST TRACK의 주제 기준 CLEAR 순서는 그대로 보존합니다.

```text
B4-1 PAUSED
≠ B4-1 FAIL
≠ B4-1 CLEAR

B2-2 ACTIVE
≠ 앞선 필수 미션 CLEAR
```

---

<a id="phase-ab"></a>
## Phase A/B 및 공통환경 설계 완료

- [x] Phase A Reference Build — 15/15 CORE READY
- [x] Canonical Final Consistency Audit — PASS 15/15
- [x] Cross-Mission Audit — COMPLETE / BLOCKER 0
- [x] Mission Dependency Map 동결
- [x] Phase C Preflight / Runtime Runbook 준비
- [x] MAC-V / WIN-V 동등 Supported Runtime 정의
- [x] MAC-V Resettable / WIN-V Persistent 특성 분리
- [x] 플랫폼별 Runtime Record와 Mission CLEAR 분리
- [x] Docker를 선택 Training Layer로 분리
- [x] Ubuntu Developer Bootstrap 공통 Source of Truth 정의
- [x] B4-1(이전 B1-1 시스템 관제) 3계층 입문자 문서 구조 적용
- [x] B2-2 3계층 입문자 문서 구조 적용
- [x] B2-2 MAC-V 5계정 Runbook/Automation 준비

---

<a id="current-workcell"></a>
## 현재 Workcell

### B4-1 — 시스템 관제

```text
⏸ PAUSED / READY TO RESUME
```

B4-1은 번호 변경 전 B1-1이었던 동일 미션입니다. FAIL/CLEAR가 아니며 후속에 다시 열어 실제 Runtime → Verification → Evidence를 이어갑니다.

Repository:

- https://github.com/MetaStudy999/codyssey-basic-system-monitor

### B2-2 — Git 팀 협업

```text
🟡 ACTIVE
```

현재 하위 포커스는 MAC-V 5계정 Simulation Runtime 준비입니다.

Repository:

- https://github.com/MetaStudy999/codyssey-basic-git-collaboration

---

<a id="b2-2-mac-v"></a>
## B2-2 MAC-V 즉시 실행 순서

1. 학교 Mac에서 `orb status`, `orb list` 확인
2. `codyssey`가 있으면 Ubuntu 24.04인지 확인하고 재사용
3. 없을 때만 Ubuntu 24.04 `codyssey` 생성
4. Ubuntu 내부 Control Tower Repository 확인
5. `bootstrap.sh --check`
6. 누락 시에만 `bootstrap.sh --install` 후 재검증
7. B2-2 Repository `codyssey-basic-git-collaboration` 확인
8. `setup-users.sh`로 `codyssey01`~`codyssey05` 준비
9. `verify.sh`로 사용자/HOME 구조 확인
10. 사용자별 `gh auth login --web --git-protocol https`
11. 사용자별 `gh auth setup-git`
12. 사용자별 Git name/email 설정
13. `verify-identity.sh`로 Identity Gate 5/5
14. 사용자별 독립 Repository clone
15. MAC-V 5계정 GitHub Flow Simulation
16. Runtime/Simulation Verification
17. 공용 PC Closeout

실제 출력과 Evidence가 없으면 MAC-V Simulation PASS로 표시하지 않습니다.

---

<a id="win-cross"></a>
## WIN-V / Cross-platform 후속

MAC-V 수행 후 같은 GitHub Account A~E를 WIN-V에서도 사용합니다.

```text
WIN-V
Windows 11 Pro
→ WSL2
→ Ubuntu 24.04
→ codyssey01~05
→ Account A~E
```

WIN-V에서도 같은 Identity Gate와 협업 흐름을 재현한 뒤:

```text
MAC-V ↔ WIN-V Cross-platform Simulation
```

으로 확장합니다.

독립 VM/Instance 5개 방식은 그 이후 ADVANCED Lab으로 수행합니다.

---

<a id="actual-mission"></a>
## 실제 B2-2 Mission 복귀

Simulation과 별도로 실제 팀 저장소의 다음 Evidence를 확인해야 합니다.

- 실제 3~5인 팀 / Collaborator 권한
- main Branch Protection/Ruleset
- 팀원별 merged PR 2+
- 팀원별 타인 Review 2+
- 본인 PR feedback 반영 1+
- conflict 2+ / non-trivial 1+
- amend/reset/revert/stash 4종 / 전원 참여
- simple deliverable 전원 기여
- `SUBMISSION.md` 실제 링크
- GitHub server audit
- Evaluation 자기 설명

실제 팀 Repository를 확인할 수 없는 상황에서는 존재 여부를 추정하지 않고 Evidence를 요청하거나 접근 가능한 GitHub 기록으로 재검증합니다.

---

<a id="runtime-records"></a>
## 플랫폼별 수행 기록(Runtime Records)

중앙 요약:

- [`RUNTIME-EXECUTION-MATRIX.md`](RUNTIME-EXECUTION-MATRIX.md)

기본 상태:

```text
MAC-V: NOT RUN / PENDING / PASS / FAIL
WIN-V: NOT RUN / PENDING / PASS / FAIL
```

두 환경 모두 실제 PASS이면:

```text
✅ CROSS-PLATFORM VERIFIED
```

B2-2 5계정 Simulation 상태는 실제 Mission Runtime Record와 별도로 관리합니다.

---

<a id="safety"></a>
## 안전 제한

- Token/Password/Private Key 실제 값은 GitHub/Chat/Evidence에 출력하지 않음
- `gh auth token`, `gh auth status --show-token`을 Evidence 목적으로 실행하지 않음
- 공용 MAC-V에서는 작업 종료 시 `gh`와 브라우저 세션 정리
- shared `main`에서 `reset`, force push, 무합의 rebase 금지
- `reset --soft`는 공유 전 로컬 실습
- 공유된 commit 취소는 `revert` 우선
- Identity Gate 불일치 시 Commit/PR/Review 생성 STOP
- 실제 팀 Evidence와 Simulation Evidence 혼합 금지

---

<a id="stage-transition"></a>
## Stage 전환 규칙

- Stage 1의 필수 11개가 모두 `✅ CLEAR`되기 전에는 Stage 2를 정식 실제 실행 대상으로 전환하지 않습니다.
- B4-1 시스템 관제 Workcell 일시정지는 Mission 실패가 아니며 후속에 재개합니다.
- B2-2 Simulation 완료는 B2-2 공식 CLEAR가 아닙니다.
- 공식 Mission CLEAR 후 필요하면 다른 지원 환경에서 Cross-platform Verification을 추가할 수 있습니다.
- `CROSS-PLATFORM VERIFIED`는 내부 품질 상태이며 공식 요구가 없는 한 Mission CLEAR 필수 조건이 아닙니다.
