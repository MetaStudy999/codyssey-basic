# R01 Phase C — 다음 작업(Next Actions)

현재 목표는 **B1-1부터 실제 실행(Runtime)과 증빙 자료(Evidence)를 확보해 순차적으로 `✅ CLEAR`하는 것**입니다.

현재 운영 모드: **빠른 실행 방식(FAST EXECUTE)**

현재 실행 경로: **빠른 실행 경로(FAST TRACK) — 필수 11개 → 선택 4개**

> Phase A/B의 설계·Reference·Audit·Runbook 준비와 공통 환경 설계 동결은 완료했습니다. Phase C에서는 `현재 실행 환경 선택 → 실제 실행 → 검증 → 증빙 → 플랫폼별 수행 기록 → 평가 → CLEAR`를 우선합니다.

## 🚀 빠른 시작(Quick Start)

현재 바로 할 일은 **사용자가 현재 작업 위치를 지정 → 해당 실행 환경(Runtime Context) 준비 상태 확인 → B1-1 실제 실행 시작**입니다.

### 1. 현재 실행 환경(Current Runtime Context) 선택

```text
학교 Mac에서 진행
→ MAC-V
→ macOS → OrbStack → Ubuntu 24.04
→ Resettable / Ephemeral

노트북 Win11에서 진행
→ WIN-V
→ Windows 11 Pro → WSL2 → Ubuntu 24.04
→ Persistent
```

`MAC-V`와 `WIN-V`는 합격 기준의 Primary/Secondary 관계가 아닙니다. 공식 Mission/Evaluation, 검증(Verification), 증빙(Evidence), Mission CLEAR 기준은 동일합니다.

### 2. 선택 환경 확인

📍 선택한 Ubuntu 24.04 Bash / Control Tower root에서:

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

필수 Bootstrap 항목이 실제로 누락된 경우에만:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

운영 차이:

```text
MAC-V
→ CHECK BEFORE INSTALL
→ 학교 Mac Reset 가능성을 고려
→ 살아 있으면 재설치 생략

WIN-V
→ VERIFY BEFORE REINSTALL
→ 기존 WSL2/Repository 환경 보존
→ 문제 있을 때만 최소 Repair
```

### 3. B1-1 시작

선택한 Runtime Context가 현재 작업에 필요한 수준으로 준비되면 B1-1 STEP 01부터 실제 수행합니다.

플랫폼별 실제 수행 결과는 다음 중앙 상태표에 기록합니다.

- [`RUNTIME-EXECUTION-MATRIX.md`](RUNTIME-EXECUTION-MATRIX.md)

현재 B1-1 실제 Runtime 상태:

```text
MAC-V  = ⬜ NOT RUN
WIN-V  = ⬜ NOT RUN
Mission = 🟡 ACTIVE / NOT CLEAR
Cross-platform = ⬜ NOT VERIFIED
```

공통 환경 Bootstrap 또는 Identity 확인 결과는 Mission Runtime PASS로 계산하지 않습니다.

---

## 📑 목차

- [R01 실행환경 범위](#runtime-scope)
- [공통 환경 마무리](#environment-closeout)
- [빠른 실행 경로(FAST TRACK)](#fast-track)
- [Phase A/B 완료 사항](#phase-ab)
- [Phase C 실행 우선 원칙](#phase-c-principles)
- [현재 실제 실행 대상](#current-runtime)
- [B1-1 즉시 실행 순서](#b1-1-now)
- [플랫폼별 수행 기록](#runtime-records)
- [B1-1 안전 제한](#b1-1-safety)
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

Ubuntu Native, 별도 Hyper-V VM, VMware, KVM/QEMU, Proxmox, Kubernetes는 R01 FAST TRACK 범위에서 제외하고 이후 Portability/Advanced 단계로 미룹니다.

환경 계약:

- `environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`
- `environments/RUNTIME-PROFILES.md`
- `environments/DOCKER-POLICY.md`
- `environments/MISSION-LAB-MATRIX.md`
- `environments/ubuntu/README.md`
- `environments/ubuntu/ENVIRONMENT-CLOSEOUT.md`
- `standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`

---

<a id="environment-closeout"></a>
## 공통 환경 마무리(Common Environment Closeout)

공통 환경은 이제 다음 두 계층으로 해석합니다.

### 전역 공통 Gate

```text
Documentation Drift           ✅ PASS
Bash Static Syntax Validation ✅ PASS
Common Environment Design     ✅ FROZEN
```

### 현재 Runtime Profile 준비 상태

```text
Current Runtime Context 선택
→ bootstrap.sh --check
→ verify-user-identity.sh
→ READY이면 Mission Runtime
```

즉 `MAC-V`와 `WIN-V` 두 장비가 동시에 준비될 때까지 기다리지 않습니다.

알려진 과거 실제 기록:

```text
MAC-V Bootstrap
→ 실제 PASS 기록 있음
→ 학교 Mac Reset 가능성 때문에 사용할 때 재확인

WIN-V Git/GitHub Identity
→ 실제 3 PASS / 0 WARNING 기록 있음
→ Persistent 환경이지만 사용할 때 현재 상태 확인 가능
```

상세: [`../../environments/ubuntu/ENVIRONMENT-CLOSEOUT.md`](../../environments/ubuntu/ENVIRONMENT-CLOSEOUT.md)

---

<a id="fast-track"></a>
## 빠른 실행 경로(FAST TRACK)

```text
Stage 1 — 필수 완료(REQUIRED CLEAR)
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — 선택 완료(OPTIONAL CLEAR)
B4-2 → B5-2 → B5-3 → B7-2
```

FAST TRACK은 선택 미션을 건너뛰는 경로가 아닙니다. **필수 11개를 먼저 모두 CLEAR한 뒤 선택 4개를 수행하여 R01 전체 15개를 완료**합니다.

한 Mission을 한 지원 환경에서 CLEAR한 뒤 다른 지원 환경에서 다시 수행해 Cross-platform Verification을 추가할 수 있습니다. 이 추가 검증 때문에 다음 Mission 진도를 자동으로 막지 않습니다.

---

<a id="phase-ab"></a>
## Phase A/B 및 공통환경 설계 완료

- [x] Phase A Reference Build — 15/15 CORE READY
- [x] Canonical Final Consistency Audit — PASS 15/15
- [x] Cross-Mission Audit — COMPLETE / BLOCKER 0
- [x] Mission Dependency Map 동결
- [x] Phase C Preflight / Runtime Runbook 준비
- [x] R01 Runtime Profiles — MAC-V/WIN-V/MAC-D/WIN-D 정의
- [x] MAC-V / WIN-V를 동등한 Supported Runtime으로 재정의
- [x] Current Runtime Context 운영 규칙 정의
- [x] MAC-V Resettable / WIN-V Persistent 특성 분리
- [x] 플랫폼별 Runtime Record와 Mission CLEAR 분리
- [x] `RUNTIME-EXECUTION-MATRIX.md` 생성
- [x] Docker를 선택 Training Layer로 분리
- [x] Ubuntu Developer Bootstrap 계층 정의
- [x] B1-1 3계층 입문자 문서 구조 적용·검증
- [x] B1-1 blocker 수준 Documentation Drift PASS
- [x] 공통 환경 설계 동결(Common Environment Design Freeze)

---

<a id="phase-c-principles"></a>
## Phase C 실행 우선 원칙

실행 중 새 문제나 개선 아이디어가 생기면 먼저 다음을 판단합니다.

```text
현재 B1-1 CLEAR를 막는가?

YES
→ 원인 확인
→ 최소 수정
→ 재검증
→ 계속 실행

NO
→ 실제 실행(Runtime)을 멈추지 않음
→ 후속 개선 후보로 미룸
```

즉시 수정 대상:

- 공식 요구사항 누락
- 실행 차단 문제(Runtime BLOCKER)
- Secret/보안 문제
- SSH/Data/Cloud 안전 문제
- 검증/증빙 오판정
- 현재 Runtime Context를 잘못 해석하게 만드는 문서 오류

---

<a id="current-runtime"></a>
## 현재 실제 실행(Runtime) 대상

**B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**

Mission 상태: **🟡 ACTIVE**

FAST TRACK 상태:

- Stage 1 Required: **B1-1 진행 중 / 0 of 11 CLEAR**
- Stage 2 Optional: **대기 / 0 of 4 CLEAR**

지원 Runtime:

- `MAC-V` — 학교 Mac / OrbStack Ubuntu 24.04
- `WIN-V` — 개인 Windows 11 Pro / WSL2 Ubuntu 24.04
- `MAC-D / WIN-D` — 선택 Docker Lab

현재 실제 Runtime Context는 사용자가 작업 시작 시 알려 준 환경으로 결정합니다.

---

<a id="b1-1-now"></a>
## B1-1 즉시 실행 순서

1. 현재 작업 위치를 `MAC-V` 또는 `WIN-V`로 지정
2. 해당 환경에서 Control Tower `bootstrap.sh --check`
3. 해당 환경에서 `verify-user-identity.sh`
4. `PHASE-C-PREFLIGHT.md` 공통 Gate 확인
5. B1-1 repository root / branch / local changes 확인
6. Ubuntu 24.04 / architecture / systemd 확인
7. B1-1 `BEGINNER-GUIDE.md` → STEP 01 baseline부터 실제 수행
8. SSH 20022 safe migration
9. UFW final policy
10. users/groups/effective permission
11. 제공 `agent-app.zip`의 실제 CPU architecture/파일 확인
12. 실제 Agent Boot 5/5 + `Agent READY` + `15034 LISTEN`
13. `monitor.sh` 정상/실패/Warning/rotation
14. `agent-admin` cron 매분 + 실제 log growth
15. `sudo bash training/round-01-clear/environment/verify.sh`
16. 실제 증빙(Evidence) 연결
17. 실행한 플랫폼의 Runtime Record를 실제 결과에 따라 갱신
18. Evaluation 설명 + Secret 최종 확인
19. 공식 조건 충족 시에만 `✅ B1-1 CLEAR`
20. 필요 시 다른 지원 환경에서 B1-1을 다시 수행하여 교차 플랫폼 검증 추가
21. B1-2를 `🟡 ACTIVE`로 전환

**B1-1 CLEAR 전에 Docker Lab을 수행할 필요는 없습니다.**

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

플랫폼 PASS를 기록하려면 실제 Runtime, Verification, 추적 가능한 Evidence가 있어야 합니다.

학교 Mac이 나중에 Reset되어도 과거의 추적 가능한 MAC-V PASS는 자동으로 FAIL로 바꾸지 않습니다. 현재 장비 상태는 필요하면 `STALE` 또는 `REBUILD NEEDED`로 별도 표시합니다.

---

<a id="b1-1-safety"></a>
## B1-1 안전 제한

- `t_secret.key` 실제 값은 GitHub/채팅/log/Evidence에 출력하지 않음
- SSH 설정은 backup → syntax/effective check → reload → 새 세션 확인 순서
- UFW active 환경에서는 20022를 먼저 허용하고 새 SSH 세션 성공 전 기존 접근 경로를 제거하지 않음
- 제공 archive 실행 파일 이름/architecture를 추측하지 않음
- `verify.sh`는 Runtime 구성 이후 실제 시스템 검증에 사용
- 실제 실행 결과를 받기 전에 PASS/CLEAR로 표시하지 않음
- 한 플랫폼의 실제 출력을 다른 플랫폼의 Runtime PASS Evidence로 재사용하지 않음
- Docker Lab 결과만으로 B1-1 system-level 요구를 PASS 처리하지 않음

---

<a id="stage-transition"></a>
## Stage 전환 규칙

- B1-1부터 B7-1까지 필수 11개가 모두 `✅ CLEAR`되기 전에는 Stage 2를 정식 실제 실행 대상으로 전환하지 않습니다.
- 한 플랫폼에서 공식 조건을 충족해 Mission CLEAR한 경우 다른 플랫폼의 추가 검증은 필요 시 후행할 수 있습니다.
- `CROSS-PLATFORM VERIFIED`는 내부 품질·재현성 상태이며 공식 요구가 없는 한 FAST TRACK 진입 Gate가 아닙니다.
- B7-1 CLEAR 후 B4-2를 `🟡 ACTIVE`로 전환합니다.
- B4-2 → B5-2 → B5-3 → B7-2 순서로 선택 미션을 완료합니다.
