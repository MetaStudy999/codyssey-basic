# Ubuntu 공통 환경 마무리(Common Environment Closeout)

## 목적

R01 Phase C에서 공통 환경 설계를 계속 확장하지 않고, **공통 문서·스크립트는 동결(Freeze)하고 실제 사용하는 실행 환경(Runtime Profile)은 작업 시점에 개별 확인**한 뒤 Mission Runtime으로 진입합니다.

> 현재 Mission ID의 단일 기준은 [`../../CURRENT-MISSION-MAP.md`](../../CURRENT-MISSION-MAP.md)입니다. 번호 재편 전 B1-1이었던 시스템 관제 미션은 현재 **B4-1**이며, 현재 Workcell 포커스는 **B4-1**입니다. B2-2 Git 협업은 사용자가 실제 팀과 별도로 진행 중이므로 이 Control Tower 실행에서는 일시 보류합니다.

`MAC-V`와 `WIN-V`는 합격 우선순위의 Primary/Secondary 관계가 아니라 동등한 **지원 실행 환경(Supported Runtime)**입니다.

```text
전역 공통 Gate
├─ Documentation Drift
└─ Bash Static Syntax Validation
        ↓
공통 환경 설계 동결(Common Environment Design Freeze)
        ↓
현재 Mission ID / Canonical Repository 확인
        ↓
현재 실행 환경(Current Runtime Context) 선택
        ↓
선택 환경의 Bootstrap / Git·GitHub Identity 확인
        ↓
Mission Runtime
→ Verification
→ Evidence
→ 플랫폼별 Runtime Record
→ Evaluation
→ Mission CLEAR
```

이 동결(Freeze)은 코디세이 공식 Mission/Evaluation을 변경하지 않습니다. 실제 Mission Runtime에서 blocker가 발견되면 JIT 방식으로 최소 수정합니다.

## 🚀 빠른 확인(Quick Check)

### 전역 공통 상태

```text
Gate 1 — Documentation Drift           ✅ PASS — 공통 blocker-level audit complete
Gate 4 — Bash Static Syntax Validation ✅ PASS — 11 PASS / 0 FAIL
Common Environment Design Freeze       ✅ FROZEN
Current Workcell                       B4-1 🟡 ACTIVE
B2-2 Git 협업                           ⏸ PAUSED / TEAM WORK IN PROGRESS
```

### 프로필별 알려진 준비 기록

```text
MAC-V
- Bootstrap: ✅ 과거 실제 PASS 기록 있음
- Identity : 🟡 PENDING / 작업 시점 재확인 필요
- 특성     : Resettable / Ephemeral

WIN-V
- Identity : ✅ 실제 3 PASS / 0 WARNING 기록 있음
- Bootstrap: 현재 작업 시점에 --check로 확인
- 특성     : Persistent
```

> 위 준비 기록은 **Mission Runtime PASS가 아닙니다.** B4-1의 현재 Runtime과 B2-2의 보류된 팀/Simulation 상태를 포함한 각 미션 수행 기록은 `training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`에서 별도로 관리합니다.

작업을 시작할 때 사용자가 현재 환경을 알려 주면 다음 두 명령으로 선택 환경을 확인합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

Bootstrap 필수 항목이 실제로 누락된 경우에만:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

## 📑 목차

- [Gate 1 — 문서 불일치 점검](#gate-1)
- [프로필 준비 상태 — Bootstrap](#gate-2)
- [프로필 준비 상태 — Git/GitHub Identity](#gate-3)
- [Gate 4 — Shell Script 정적 문법 검증](#gate-4)
- [MAC-V / WIN-V 운영 차이](#profile-policy)
- [동결(Freeze) 규칙](#freeze)
- [현재 결론](#conclusion)

---

<a id="gate-1"></a>
## Gate 1 — 문서 불일치 점검(Documentation Drift Check)

### 목표

중앙 Base/Bootstrap 기준과 각 Mission 설명 문서의 오래된 설치 예시가 충돌하지 않는지 확인합니다.

현재 기준 문서(Source of Truth):

```text
CURRENT-MISSION-MAP.md
environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md
environments/RUNTIME-PROFILES.md
environments/ubuntu/base-packages.txt
environments/ubuntu/README.md
environments/ubuntu/BASE-PACKAGES.md
environments/ubuntu/MISSION-PACKAGE-MATRIX.md
standards/CODYSSEY-WORKING-OPERATING-STANDARD.md
standards/BEGINNER-TRAINING-STANDARD.md
standards/DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md
standards/BEGINNER-GUIDE-MODULARIZATION-STANDARD.md
standards/BEGINNER-DOCUMENTATION-AUDIT.md
training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md
각 Mission training/round-01-clear/environment/ubuntu-packages.txt
```

현재 상태:

**✅ PASS — 현재 Phase C를 잘못 이끌 수 있는 공통 blocker 수준 Documentation Drift 없음.**

번호 재편 전 B1-1(현재 **B4-1 시스템 관제**)에서 검증한 3계층 문서 구조, SSH/UFW 안전 절차, Secret 보호, Verification/Evidence/CLEAR 분리 기준을 현재 B4-1 Runtime에 적용합니다. B2-2의 Git/GitHub 협업 Runtime과 Simulation 분리 기준은 보류 상태로 보존합니다.

환경 관련 운영 기준은 다음처럼 유지합니다.

```text
MAC-V / WIN-V = 동등한 지원 실행 환경
Current Runtime Context = 작업 시점 사용자가 선택
MAC-V = Resettable / Ephemeral
WIN-V = Persistent
플랫폼별 Runtime Record와 Mission CLEAR는 분리
```

Gate 1 PASS는 모든 문장 polishing 완료를 뜻하지 않습니다. 실제 실행을 잘못 이끄는 blocker가 없다는 판정입니다.

---

<a id="gate-2"></a>
## 프로필 준비 상태 — Bootstrap Runtime Verification

### 목표

현재 선택한 Ubuntu 24.04 실행 환경에서 공통 필수 개발 도구가 실제로 준비되어 있는지 확인합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
```

필수 항목이 누락된 경우에만:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

### PASS 기준

- Ubuntu prerequisites 확인
- Required Base package/command 확인
- `gh` 설치 및 사용 가능
- 공식 GitHub CLI APT keyring/source 확인
- 설치 후 `bootstrap.sh --check` PASS
- Secret/Identity를 자동 생성하지 않음

### 알려진 실제 기록

MAC-V에서 이전 실제 확인 시 다음 결과가 PASS였습니다.

```text
prerequisites: 5 PASS / 0 missing
required base packages: 12 PASS / 0 missing
required base commands: 13 PASS / 0 missing
gh: 2.97.0
required Ubuntu developer bootstrap: PASS
```

다만 학교 Mac은 Reset될 수 있으므로 **과거 PASS를 현재 장비 상태로 추정하지 않습니다.** MAC-V를 다시 사용할 때 `--check`를 재실행합니다.

WIN-V는 지속 환경이므로 재설치부터 하지 않고 `--check`로 현재 상태를 먼저 확인합니다.

---

<a id="gate-3"></a>
## 프로필 준비 상태 — Git / GitHub 사용자 준비 상태(User Identity Readiness)

현재 선택한 Runtime Context에서 읽기 전용으로 확인합니다.

```bash
bash environments/ubuntu/verify-user-identity.sh
```

직접 확인할 때:

```bash
git config --get user.name
git config --get user.email
gh auth status
```

SSH Git remote를 실제 사용하는 경우에만 필요 시:

```bash
ssh -T git@github.com
```

자동화 금지:

```text
gh auth login 자동 실행
GitHub Token 입력/저장
SSH private key 자동 생성/교체
git user.name / user.email 임의 설정
core.autocrlf 강제 변경
```

### 알려진 실제 기록

WIN-V에서 다음 결과를 실제 확인했습니다.

```text
[PASS] git user.name is configured
[PASS] git user.email is configured
[PASS] gh authentication is ready
Result: 3 PASS / 0 WARNING
```

따라서 **WIN-V Identity의 과거 실제 기록은 ✅ PASS**입니다.

MAC-V는 학교 Mac의 현재 사용자 상태가 Reset 여부에 따라 달라질 수 있으므로 실제 사용할 때 다시 확인합니다.

Identity 확인은 해당 Runtime Profile의 GitHub 작업 준비 상태이며 **Mission CLEAR 자체가 아닙니다.**

---

<a id="gate-4"></a>
## Gate 4 — Shell Script 정적 문법 검증(Static Syntax Validation)

```bash
bash environments/ubuntu/validate-scripts.sh
```

현재 실제 확인 상태:

**✅ PASS — 11 PASS / 0 FAIL**

이 Gate는 공통 스크립트 저장소 상태에 대한 전역 정적 검증으로 관리합니다.

---

<a id="profile-policy"></a>
## MAC-V / WIN-V 운영 차이

### MAC-V — 학교 Mac

```text
환경 성격 = Resettable / Ephemeral
운영 원칙 = CHECK BEFORE INSTALL

현재 상태 확인
→ 살아 있으면 재설치 생략
→ Reset되었으면 필요한 항목만 재구성
→ Bootstrap / Identity 확인
→ Mission Runtime
```

학교 Mac이 Reset되어도 과거의 추적 가능한 MAC-V Mission PASS Evidence는 자동으로 FAIL 처리하지 않습니다. 현재 장비 재현 상태와 과거 수행 이력을 분리합니다.

### WIN-V — 개인 Windows 11 Pro 노트북

```text
환경 성격 = Persistent
운영 원칙 = VERIFY BEFORE REINSTALL

기존 환경 확인
→ Verification
→ 정상이라면 보존
→ 문제 있을 때만 최소 Repair
→ Mission Runtime
```

정상적인 WSL2 Ubuntu, Repository, `.venv`, Git/GitHub 설정을 작업마다 재설치하지 않습니다.

---

<a id="freeze"></a>
## 동결(Freeze) 규칙

공통 환경 **설계와 공통 스크립트 기준**은 다음 전역 Gate를 기준으로 동결합니다.

```text
[x] Gate 1 — blocker 수준 Documentation Drift 없음
[x] Gate 4 — bash static syntax validation PASS
[x] Common Environment Design Freeze
```

`MAC-V`와 `WIN-V`의 Bootstrap / Identity는 장비별 현재 상태이므로 **두 환경이 동시에 준비될 때까지 기다리지 않습니다.**

```text
Current Mission ID / Canonical Repository 확인
→ Current Runtime Context 선택
→ 그 환경의 Bootstrap / Identity 확인
→ READY이면 Mission Runtime 시작
```

동결 이후 기본 원칙:

```text
현재 Mission CLEAR를 막는가?
YES → 최소 수정 → 재검증 → 계속 실행
NO  → 공통환경 확장하지 않음 → 후속 개선 후보로 미룸
```

현재 공통 필수로 추가하지 않는 항목:

```text
build-essential / gcc / g++ / make / pkg-config
Node.js / npm 전역 표준화
Docker를 CLEAR Gate로 승격
AWS CLI 공통 필수화
kubectl / Terraform / Kubernetes
Redis / PostgreSQL 공통 설치
ShellCheck 공통 필수화
추가 IDE extension 강제
```

---

<a id="conclusion"></a>
## 현재 결론

공통 환경 **설계 동결은 완료**했습니다. 이제 현재 Workcell과 실제 작업 위치에 따라 Runtime Context를 선택합니다.

```text
현재 Workcell
→ B4-1 시스템 관제 🟡 ACTIVE
→ Repository: codyssey-basic-system-monitor

학교 Mac에서 작업
→ MAC-V
→ Bootstrap / Identity 현재 상태 확인
→ B4-1 Preflight / Runtime

노트북 Win11에서 작업
→ WIN-V
→ 기존 환경 Verification / Identity 확인
→ B4-1 Preflight / Runtime

B2-2 Git 협업
→ ⏸ PAUSED / TEAM WORK IN PROGRESS
→ Repository: codyssey-basic-git-collaboration
→ 기존 MAC-V Host/CORE 준비 기록 보존
→ 실제 팀 진행 후 Evidence 검증 시 재개
```

플랫폼별 실제 수행 결과는 다음 파일에서 별도로 기록합니다.

- [`../../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

현재 공통 환경 준비 기록을 어떤 Mission의 Runtime PASS로도 사용하지 않습니다. 각 미션의 실제 실행·검증·Evidence가 있어야 해당 `MAC-V` 또는 `WIN-V` Runtime Record를 PASS로 변경할 수 있습니다.
