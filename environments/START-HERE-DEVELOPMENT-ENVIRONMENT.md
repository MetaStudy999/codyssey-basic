# Start Here — 입문자 개발환경 처음부터 따라하기

이 문서는 Codyssey Basic을 처음 시작하는 사람이 **개발환경과 개발도구를 처음부터 안전하게 준비하고, 정상 여부를 확인한 뒤 현재 미션으로 이동하는 대표 시작 경로(Golden Path)**입니다.

이 문서의 목표는 단순히 프로그램을 많이 설치하는 것이 아닙니다.

```text
내 환경 확인
→ 올바른 Linux 실행 환경(Runtime) 준비
→ 편집기/통합 개발 환경(Editor/IDE) 연결
→ 저장소(Repository) 위치 확인
→ Git/GitHub 준비
→ Ubuntu 공통 환경 초기 준비(Bootstrap)
→ 필요한 미션 도구(Mission Tool)만 준비
→ 최종 검증(Verification)
→ 현재 입문자 가이드(BEGINNER-GUIDE) 시작
```

> 공용·관리형 macOS에서 관리자 권한이 없는 경우도 별도 경로를 제공합니다. 관리자 암호, MDM, 기관 보안정책을 우회하지 않습니다.
>
> 이 문서는 공식 Mission/Evaluation을 대체하지 않습니다. 특정 미션의 공식 요구가 이 문서와 다르면 공식 요구가 우선합니다.

---

<a id="quick-start"></a>
## 🚀 빠른 시작(Quick Start)

> **이미 OrbStack/WSL2의 Ubuntu 24.04에 들어갈 수 있고 Git을 사용할 수 있는 분**을 위한 빠른 재진입 경로입니다.
> 처음 개발환경을 만드는 분은 빠른 시작(Quick Start)을 건너뛰고 [PART 1 — 먼저 내 환경을 고르기](#choose-environment)부터 진행하세요.

### 1) 먼저 Ubuntu Terminal로 들어가기

macOS + OrbStack을 이미 준비했다면 macOS Terminal에서:

```bash
ssh orb
```

Windows + WSL2를 이미 준비했다면 PowerShell에서 실제 배포판 이름을 확인한 뒤:

```powershell
wsl -l -v
wsl -d Ubuntu-24.04
```

> `Ubuntu-24.04`라는 이름은 설치 방식에 따라 다를 수 있습니다. `wsl -l -v`에 표시된 실제 이름을 사용합니다.

### 2) Ubuntu에서 Control Tower 확인

#### 이미 Repository가 있는 경우

```bash
cd "$HOME/codyssey/codyssey-basic"
pwd
git status --short
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

줄별 의미:

```text
1. cd ...
   → 기존 Control Tower Repository로 이동합니다.

2. pwd
   → 현재 위치가 Ubuntu의 $HOME/codyssey/codyssey-basic인지 확인합니다.

3. git status --short
   → 예상하지 않은 변경 파일이 있는지 확인합니다.

4. bootstrap.sh --check
   → 공통 필수 개발도구가 준비되었는지 설치 없이 검사합니다.

5. verify-user-identity.sh
   → Git 작성자 정보와 GitHub CLI 인증 상태를 확인합니다.
```

#### Repository가 아직 없는 경우

```bash
mkdir -p "$HOME/codyssey"
cd "$HOME/codyssey"
git clone https://github.com/MetaStudy999/codyssey-basic.git
cd codyssey-basic
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

줄별 의미:

```text
1. mkdir -p ...
   → Ubuntu 홈 아래에 codyssey 작업 폴더를 만듭니다.

2. cd ...
   → 작업 폴더로 이동합니다.

3. git clone ...
   → 공개 Control Tower Repository를 Ubuntu로 복제합니다.

4. cd codyssey-basic
   → 복제한 Repository로 이동합니다.

5. bootstrap.sh --check
   → 공통 개발도구 준비 상태를 확인합니다.

6. verify-user-identity.sh
   → Git/GitHub 사용자 상태를 확인합니다.
```

### Quick Start 정상 기준

```text
[ ] Repository가 /home/<user>/codyssey/codyssey-basic 계열에 있다.
[ ] Bootstrap required 항목이 PASS다.
[ ] 예상하지 않은 Git 변경이 없다.
[ ] Git/GitHub 사용자 상태를 확인했다.
```

```text
✅ GO
→ 모두 만족하면 [PART 7 — 이제 현재 Mission 시작](#mission-start)으로 이동합니다.

❌ STOP
→ 하나라도 실패하면 빠른 시작에서 억지로 해결하지 않습니다.
→ 아래 목차에서 해당 상세 STEP으로 이동해 원인 확인 → 최소 수정 → 다시 검증합니다.
```

재실행 안전성:

```text
ssh orb                         → 🟢 SAFE TO RERUN
wsl -l -v                       → 🟢 SAFE TO RERUN
pwd / git status --short        → 🟢 SAFE TO RERUN
bootstrap.sh --check            → 🟢 SAFE TO RERUN
verify-user-identity.sh         → 🟢 SAFE TO RERUN
git clone                       → 🟡 CHECK BEFORE RERUN
                                  같은 Repository 폴더가 이미 있으면 다시 clone하지 않습니다.
```

---

<a id="toc"></a>
## 📑 목차(Table of Contents)

- [🚀 빠른 시작(Quick Start)](#quick-start)
- [0. 실행 안전 규칙](#safety-rules)
- [PART 1 — 먼저 내 환경을 고르기](#choose-environment)
- [PART 2A — macOS + OrbStack 따라하기](#macos-orbstack)
  - MAC STEP 01 — 공용 Mac 권한
  - MAC STEP 02 — OrbStack Ubuntu 24.04
  - MAC STEP 03 — VS Code
  - MAC STEP 04 — Remote - SSH
- [PART 2B — Windows 11 + WSL2 따라하기](#windows-wsl2)
  - WIN STEP 01 — WSL2 상태
  - WIN STEP 02 — Ubuntu 24.04
  - WIN STEP 03 — VS Code Remote - WSL
- [PART 3 — 공통 Ubuntu 단계](#common-ubuntu)
  - COMMON STEP 01 — Runtime 확인
  - COMMON STEP 02 — Workspace
  - COMMON STEP 03 — Control Tower Clone
  - COMMON STEP 04 — Bootstrap
  - COMMON STEP 05 — Git/GitHub
- [PART 4 — Mission에 필요한 도구만 준비하기](#mission-tools)
- [PART 5 — Editor/IDE와 AI CLI 선택](#ide-ai)
- [PART 6 — 개발환경 최종 검증(Verification)](#final-verify)
- [PART 7 — 이제 현재 Mission 시작](#mission-start)
- [문제가 생겼을 때 — 공통 복구 순서](#troubleshooting)
- [Cloud / API / AI 비용 자원 안전 기준](#cost-resource-guard)
- [관련 기준](#related-standards)
- [이 문서의 BEGINNER READY 목표](#beginner-ready-goal)

---

<a id="safety-rules"></a>
## 0. 이 문서에서 사용하는 실행 안전 규칙

입문자는 명령 자체보다 **어디에서 실행했는지, 실행 전에 무엇을 확인했는지, 실패했을 때 멈췄는지** 때문에 더 자주 문제가 생깁니다.

따라서 실제 명령이 있는 단계에서는 필요한 범위에서 다음을 확인합니다.

```text
📍 실행 위치(Context)
→ 🔍 실행 전 점검(Preflight)
→ 따라하기
→ 정상 결과 / 정상 범위 확인
→ STOP / GO
→ 재실행 안전성(Rerun Safety)
→ 필요 시 복구(Recovery)
```

재실행 표시는 다음 의미입니다.

```text
🟢 SAFE TO RERUN
→ 다시 실행해도 일반적으로 안전합니다.

🟡 CHECK BEFORE RERUN
→ 현재 상태를 확인한 뒤 다시 실행합니다.

🔴 DO NOT RERUN BLINDLY
→ 상태 확인 없이 반복하면 파일·설정·History·비용 등에 영향을 줄 수 있습니다.
```

### 복사·붙여넣기 규칙

- 실행용 코드 블록에는 Shell Prompt의 `$`, `#`를 넣지 않습니다.
- 명령과 예상 출력을 같은 실행 블록에 섞지 않습니다.
- `<YOUR_NAME>` 같은 Placeholder가 나오면 그대로 입력하지 말고 자신의 값으로 바꿉니다.
- Secret, Token, Password, Private Key는 문서·채팅·Evidence에 붙여 넣지 않습니다.

---

<a id="choose-environment"></a>
# PART 1 — 먼저 내 환경을 고르기

## A. macOS — 기본 권장 경로

```text
macOS
└─ OrbStack
   └─ Ubuntu 24.04
      └─ VS Code Remote - SSH
         └─ $HOME/codyssey/<repo>
```

## B. Windows 11 Pro — 보조 경로

```text
Windows 11 Pro
└─ WSL2
   └─ Ubuntu 24.04
      └─ VS Code Remote - WSL
         └─ $HOME/codyssey/<repo>
```

Docker는 공식 Mission/Evaluation이 요구하지 않는 한 **선택 학습(Optional Training)**입니다.

---

<a id="macos-orbstack"></a>
# PART 2A — macOS + OrbStack 따라하기

## MAC STEP 01 — 공용 Mac의 권한 상태 이해하기

### 왜 하나요?

공용 Mac에서는 macOS에 앱을 설치할 권한과 OrbStack Ubuntu 안에서 사용하는 Linux 권한을 혼동하기 쉽습니다.

가장 중요한 구분은 다음입니다.

```text
macOS 관리자 권한
≠
OrbStack Ubuntu 내부 sudo 권한
```

즉, **Mac 관리자 암호가 없다고 해서 Ubuntu 내부의 모든 `sudo`가 자동으로 불가능한 것은 아닙니다.** 두 권한은 별도로 확인합니다.

### 📍 실행 위치

```text
Host       : macOS
Terminal   : macOS Terminal
Repository : 해당 없음
권한       : 일반 사용자
venv       : 해당 없음
```

### 🔍 사전 점검

```bash
whoami
groups
```

### 한 줄씩 해설

```text
1. whoami
   → 현재 로그인한 macOS 사용자 이름을 확인합니다.

2. groups
   → 현재 macOS 사용자가 속한 그룹 목록을 확인합니다.
```

### 공용 Mac 절대 규칙

```text
관리자 암호 우회 금지
sudo를 전제로 한 macOS Host 설치 금지
MDM / 보안정책 우회 금지
시스템 폴더 강제 변경 금지
```

### STOP / GO

```text
✅ GO
→ 일반 사용자로 로그인되어 있고 허용된 앱을 실행할 수 있으면 다음 단계로 갑니다.

❌ STOP
→ 기관 정책이 앱 실행을 막으면 정책을 우회하지 않습니다.
→ 사용자 영역 앱 / 이미 허용된 IDE / CLI / 관리자 승인 경로를 사용합니다.
```

`whoami`, `groups`는 **🟢 SAFE TO RERUN**입니다.

---

## MAC STEP 02 — OrbStack Ubuntu 24.04 준비하기

### OrbStack이 무엇인가요?

macOS 안에서 Linux Machine과 Container를 실행할 수 있게 해 주는 도구입니다. Codyssey Basic의 macOS 기본 경로에서는 **OrbStack Ubuntu 24.04를 실제 Linux 실행 환경(Runtime)**으로 사용합니다.

공용 Mac에서는 OrbStack의 no-admin 지원 범위를 우선 검토하되, 기관의 MDM·앱 허용 정책이 실행 자체를 막으면 우회하지 않습니다.

공식 참고:

- https://orbstack.dev/
- https://docs.orbstack.dev/

### 목표 상태

OrbStack에서 Ubuntu 24.04 Machine을 만든 뒤 macOS Terminal에서 다음 연결이 가능해야 합니다.

```bash
ssh orb
```

### 해설

```text
ssh
→ 보안 셸(Secure Shell) 연결 프로그램입니다.

orb
→ OrbStack이 제공하는 Linux Machine 연결용 Host 이름입니다.
```

> OrbStack 관리용 `ssh orb`와 B1-1 미션에서 직접 구성하는 `sshd:20022`는 서로 다른 SSH 용도입니다.

### STOP / GO

```text
✅ GO
→ 연결 후 Prompt와 경로가 Linux 사용자 환경으로 바뀌면 다음 단계로 갑니다.

❌ STOP
→ `ssh orb`가 실패하면 B1-1 설정부터 건드리지 않습니다.
→ 먼저 OrbStack Machine이 실행 중인지와 OrbStack 공식 연결 방법을 확인합니다.
```

`ssh orb`는 **🟢 SAFE TO RERUN**입니다.

---

## MAC STEP 03 — VS Code를 사용자 영역에서 준비하기

Codyssey Basic 기본 Editor는 VS Code입니다.

```text
VS Code 화면 = macOS
Repository   = OrbStack Ubuntu
Terminal     = Ubuntu Bash
Git          = Ubuntu Git
Python       = Ubuntu Python
```

공용 Mac에서 기관 정책이 허용한다면 사용자에게 쓰기 가능한 위치를 우선합니다.

```text
$HOME/Applications/
```

필요하면 VS Code의 macOS Portable Mode를 검토할 수 있습니다.

```text
Visual Studio Code.app
code-portable-data/
```

공식 참고:

- https://code.visualstudio.com/docs/setup/portable

### STOP / GO

```text
✅ GO
→ VS Code가 일반 사용자 계정에서 정상 실행되면 Remote 연결 단계로 갑니다.

❌ STOP
→ quarantine / MDM / 앱 허용 정책이 실행을 막으면 정책을 우회하지 않습니다.
→ 이미 허용된 Editor 또는 CLI 경로를 사용하거나 관리자 승인을 요청합니다.
```

---

## MAC STEP 04 — VS Code Remote - SSH로 OrbStack 연결하기

VS Code에서 다음 순서로 진행합니다.

```text
Extensions
→ Remote - SSH 설치
→ Command Palette
→ Remote-SSH: Connect to Host
→ orb
→ 연결 완료 후 Open Folder
```

Repository를 받은 뒤 사용할 기본 폴더는 다음 계열입니다.

```text
/home/<linux-user>/codyssey/<repo>
```

### 정상 범위

사용자 이름은 사람마다 달라도 정상입니다.

```text
/home/park/codyssey/...
/home/student/codyssey/...
/home/user01/codyssey/...
```

다음 macOS 공유 경로는 기본 Mission Workspace로 사용하지 않습니다.

```text
/Users/...
/mnt/mac/Users/...
```

### STOP / GO

```text
✅ GO
→ 새 VS Code Terminal이 Ubuntu Bash이고 경로가 /home/... 계열이면 공통 Ubuntu 단계로 이동합니다.

❌ STOP
→ Terminal이 /Users/...에서 열리면 Repository 작업을 시작하지 않습니다.
→ Remote 연결과 Open Folder 위치를 먼저 바로잡습니다.
```

이제 **PART 3 — 공통 Ubuntu 단계**로 이동합니다.

---

<a id="windows-wsl2"></a>
# PART 2B — Windows 11 + WSL2 따라하기

## WIN STEP 01 — WSL2 상태 확인하기

### 📍 실행 위치

```text
Host       : Windows 11
Terminal   : PowerShell
Repository : 해당 없음
권한       : 상태 확인은 일반 사용자 가능
venv       : 해당 없음
```

### 🔍 사전 점검

```powershell
wsl --status
wsl -l -v
```

### 한 줄씩 해설

```text
1. wsl --status
   → Windows Subsystem for Linux의 현재 기본 상태를 확인합니다.

2. wsl -l -v
   → 설치된 Linux 배포판과 WSL 버전(1/2), 실행 상태를 확인합니다.
```

### 정상 목표

Ubuntu 24.04 계열 배포판이 있고 `VERSION`이 `2`인 상태를 우선합니다.

배포판 이름은 설치 방식에 따라 약간 다를 수 있습니다.

### WSL이 없다면

기관/개인 PC 정책상 Windows 관리자 권한을 사용할 수 있을 때만 Microsoft의 현재 공식 WSL 설치 절차를 사용합니다. 일반적인 명령은 다음 계열입니다.

```powershell
wsl --install -d Ubuntu-24.04
```

> 이 설치는 Windows 기능 활성화와 재부팅이 필요할 수 있습니다. 관리자 권한이나 조직 정책을 우회하지 않습니다.

### STOP / GO

```text
✅ GO
→ Ubuntu가 WSL2로 실행되면 다음 단계로 갑니다.

❌ STOP
→ WSL 설치/활성화가 막히면 Mission 명령을 Windows PowerShell에서 대신 실행하지 않습니다.
→ WSL2 환경을 먼저 준비합니다.
```

상태 확인 명령은 **🟢 SAFE TO RERUN**입니다.

---

## WIN STEP 02 — Ubuntu 24.04 안으로 들어가기

PowerShell에서 설치된 Ubuntu 배포판을 실행합니다.

예:

```powershell
wsl -d Ubuntu-24.04
```

배포판 이름이 다르면 먼저 `wsl -l -v`의 실제 이름을 사용합니다.

Ubuntu 안에 들어온 뒤 다음을 실행합니다.

```bash
cat /etc/os-release
uname -m
pwd
```

### 한 줄씩 해설

```text
1. cat /etc/os-release
   → 실제 Linux 배포판과 버전을 확인합니다.

2. uname -m
   → CPU Architecture를 확인합니다.

3. pwd
   → 현재 Linux 작업 경로를 확인합니다.
```

### 정상 범위

- Ubuntu 24.04 계열 정보가 보이면 정상입니다.
- `uname -m`은 장비에 따라 `x86_64`, `aarch64` 등이 나올 수 있습니다.
- 기본 작업 위치는 `/home/<linux-user>` 계열을 사용합니다.

### 기본 Workspace 금지 위치

Windows 파일시스템 아래를 기본 Mission Workspace로 사용하지 않습니다.

```text
/mnt/c/Users/...
```

### STOP / GO

```text
✅ GO
→ Ubuntu 24.04 + /home/... 계열이면 다음 단계로 갑니다.

❌ STOP
→ PowerShell 또는 /mnt/c/...에서 Mission Repository를 직접 작업하지 않습니다.
```

---

## WIN STEP 03 — VS Code Remote - WSL 연결하기

Windows VS Code에서 **WSL Extension**을 설치하고 Ubuntu WSL 환경으로 연결합니다.

권장 흐름:

```text
VS Code
→ Extensions
→ WSL 설치
→ Connect to WSL
→ Ubuntu 24.04 선택
→ Open Folder
→ /home/<linux-user>/codyssey/<repo>
```

또는 Ubuntu WSL Terminal의 Repository 폴더에서 VS Code WSL 연동이 준비되어 있다면 다음 계열의 실행을 사용할 수 있습니다.

```bash
code .
```

### STOP / GO

```text
✅ GO
→ VS Code Terminal이 Ubuntu Bash이고 /home/... 경로이면 PART 3으로 갑니다.

❌ STOP
→ Windows PowerShell이나 C:\... 경로가 Mission Terminal로 열리면 먼저 WSL 연결을 수정합니다.
```

---

<a id="common-ubuntu"></a>
# PART 3 — macOS/Windows 공통 Ubuntu 단계

이제부터 아래 명령은 **macOS Host Terminal이나 Windows PowerShell이 아니라 Ubuntu Terminal에서 실행**합니다.

## COMMON STEP 01 — Ubuntu 실행 환경(Runtime) 최종 확인

### 📍 실행 위치

```text
Host       : OrbStack Ubuntu 24.04 또는 WSL2 Ubuntu 24.04
Terminal   : Ubuntu Bash
Repository : 아직 없어도 됨
권한       : 일반 사용자
venv       : 해당 없음
```

### 🔍 사전 점검

```bash
cat /etc/os-release
uname -m
ps -p 1 -o comm=
whoami
printf 'HOME=%s\n' "$HOME"
```

### 한 줄씩 해설

```text
1. cat /etc/os-release
   → Ubuntu 배포판과 버전을 확인합니다.

2. uname -m
   → CPU Architecture를 확인합니다.

3. ps -p 1 -o comm=
   → PID 1의 실행 프로그램을 확인하여 실행 환경 특성을 파악합니다.

4. whoami
   → 현재 Ubuntu 사용자 이름을 확인합니다.

5. printf 'HOME=%s\n' "$HOME"
   → 현재 Ubuntu 홈 디렉터리를 확인합니다.
```

### 정상 범위

사용자 이름과 Architecture는 환경에 따라 달라도 정상입니다. 핵심은 **Ubuntu 24.04 실행 환경과 `/home/<user>` 계열 HOME**을 사용하는 것입니다.

### STOP / GO

```text
✅ GO
→ Ubuntu 24.04와 Linux HOME이 확인되면 다음 단계로 갑니다.

❌ STOP
→ macOS/Windows Host 경로가 나오면 Repository 생성 단계로 가지 않습니다.
```

이 명령들은 **🟢 SAFE TO RERUN**입니다.

---

## COMMON STEP 02 — Ubuntu Workspace 만들기

### 🔍 사전 점검

```bash
printf 'HOME=%s\n' "$HOME"
pwd
```

`$HOME`이 `/home/...` 계열인지 확인합니다.

### 따라하기

```bash
mkdir -p "$HOME/codyssey"
cd "$HOME/codyssey"
pwd
```

### 한 줄씩 해설

```text
1. mkdir -p "$HOME/codyssey"
   → Ubuntu 사용자 홈 아래에 codyssey 폴더를 만듭니다.
   → -p는 이미 폴더가 있어도 일반적으로 오류를 내지 않습니다.

2. cd "$HOME/codyssey"
   → 작업 폴더로 이동합니다.

3. pwd
   → 실제 현재 경로를 확인합니다.
```

### 정상 범위

```text
/home/<사용자이름>/codyssey
```

사용자 이름 부분은 사람마다 달라도 정상입니다.

### 재실행 안전성

```text
mkdir -p ...  → 🟢 SAFE TO RERUN
cd ...        → 🟢 SAFE TO RERUN
pwd           → 🟢 SAFE TO RERUN
```

### STOP / GO

```text
✅ GO
→ pwd가 /home/<user>/codyssey 계열이면 다음 단계로 갑니다.

❌ STOP
→ /Users/... 또는 /mnt/c/... 계열이면 Workspace를 바로잡습니다.
```

---

## COMMON STEP 03 — Control Tower Repository 받기

`MetaStudy999/codyssey-basic`은 공개 Repository이므로 **읽기용 HTTPS clone 자체는 GitHub 로그인을 먼저 요구하지 않습니다.**

GitHub 인증은 이후 Push, PR, Issue 등 쓰기 작업에서 필요합니다.

### 🔍 사전 점검

```bash
cd "$HOME/codyssey"
ls
```

이미 `codyssey-basic` 폴더가 있다면 무조건 다시 clone하지 않습니다.

### 처음 받는 경우

```bash
git clone https://github.com/MetaStudy999/codyssey-basic.git
cd codyssey-basic
```

### 이미 받은 경우

```bash
cd "$HOME/codyssey/codyssey-basic"
git status --short
```

### 해설

```text
git clone ...
→ 원격 Git Repository의 파일과 History를 Ubuntu로 복제합니다.

cd codyssey-basic
→ Control Tower Repository로 이동합니다.

git status --short
→ 현재 수정된 파일이 있는지 짧은 형식으로 확인합니다.
```

### 재실행 안전성

```text
git clone ...       → 🟡 CHECK BEFORE RERUN
                       같은 폴더가 이미 있으면 다시 clone하지 않습니다.

git status --short  → 🟢 SAFE TO RERUN
```

### STOP / GO

```text
✅ GO
→ Repository Root로 이동했고 예상하지 않은 변경이 없으면 다음 단계로 갑니다.

❌ STOP
→ 이미 변경된 파일이 있다면 삭제/reset하지 말고 변경 이유부터 확인합니다.
```

---

## COMMON STEP 04 — Ubuntu 공통 개발도구 검사

### 📍 실행 위치

```text
Terminal   : Ubuntu Bash
Repository : $HOME/codyssey/codyssey-basic
권한       : 일반 사용자로 시작
venv       : 비활성
```

### 🔍 사전 점검

```bash
pwd
git rev-parse --show-toplevel
```

두 번째 명령의 결과가 현재 Control Tower Root를 가리켜야 합니다.

### 먼저 검사만 하기

```bash
bash environments/ubuntu/bootstrap.sh --check
```

### 정상 기준

마지막에 다음 결과가 나오면 공통 필수 Bootstrap이 준비된 상태입니다.

```text
[PASS] required Ubuntu developer bootstrap is ready
```

### 필수 도구가 부족한 경우에만

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

### macOS 관리자 권한과 Ubuntu sudo 다시 구분

Bootstrap이 Ubuntu Package 설치를 위해 `sudo`를 요구할 수 있습니다.

```text
공용 Mac 관리자 암호
→ 사용하지 않음

OrbStack/WSL Ubuntu 내부 sudo
→ Ubuntu 사용자 권한으로 별도 판단
```

Host macOS의 관리자 보안정책을 우회하는 것과 Ubuntu 내부에서 허용된 `sudo`를 사용하는 것은 같은 개념이 아닙니다.

### 권장 도구까지 설치하고 싶을 때만

```bash
bash environments/ubuntu/bootstrap.sh --install --recommended
```

`vim`, `tree`, `ripgrep`, `fd-find`는 편의 도구이며 기본 Mission CLEAR를 막지 않습니다.

### 재실행 안전성

```text
--check                 → 🟢 SAFE TO RERUN
--install               → 🟡 CHECK BEFORE RERUN
--install --recommended → 🟡 CHECK BEFORE RERUN
```

### STOP / GO

```text
✅ GO
→ [PASS] required Ubuntu developer bootstrap is ready
→ 다음 단계로 이동

❌ STOP
→ 필수 package/command FAIL이 남아 있으면 다음 단계로 가지 않습니다.
→ FAIL 항목을 확인하고 최소 수정 후 --check를 다시 실행합니다.
```

---

## COMMON STEP 05 — Git 작성자와 GitHub 인증 확인

### 먼저 상태 확인

```bash
bash environments/ubuntu/verify-user-identity.sh
```

이 스크립트는 Git 작성자 이름/이메일과 GitHub CLI 인증 상태를 읽기 중심으로 확인합니다.

### Git 이름/이메일이 비어 있을 때만

```bash
git config --global user.name "내 Git 작성자 이름"
git config --global user.email "내 GitHub 이메일"
```

### 해설

```text
user.name
→ Commit에 기록될 작성자 이름입니다.

user.email
→ Commit에 기록될 작성자 이메일입니다.

--global
→ 현재 Ubuntu 사용자 계정의 기본 Git 설정으로 저장합니다.
```

### GitHub CLI 인증이 필요할 때

먼저 확인합니다.

```bash
gh auth status
```

로그인되어 있지 않고 GitHub 쓰기 작업이 필요하면 공식 로그인 흐름을 사용합니다.

```bash
gh auth login
```

화면에 표시되는 안내를 따라 본인 계정으로 인증합니다.

> Access Token, Private Key, Password를 README·채팅·Evidence에 복사하지 않습니다.

### 재실행 안전성

```text
verify-user-identity.sh → 🟢 SAFE TO RERUN
gh auth status          → 🟢 SAFE TO RERUN
gh auth login           → 🟡 CHECK BEFORE RERUN
git config --global ... → 🟡 CHECK BEFORE RERUN
```

### STOP / GO

```text
✅ GO
→ Git author 정보가 필요한 작업에 맞게 준비되고,
→ GitHub 쓰기 작업이 필요하다면 gh 인증도 정상일 때 다음 단계로 갑니다.

❌ STOP
→ 인증 실패를 Token을 문서에 붙여 넣는 방식으로 우회하지 않습니다.
```

---

<a id="mission-tools"></a>
# PART 4 — Mission에 필요한 도구만 준비하기

## Python Mission

Python 미션에서는 Repository마다 별도 `.venv`를 사용합니다.

### 📍 실행 위치

```text
Terminal   : Ubuntu Bash
Repository : 현재 Python Mission Repository Root
venv       : 만들기 전에는 비활성
```

### 🔍 사전 점검

```bash
pwd
python3 --version
```

### 따라하기

```bash
python3 -m venv .venv
source .venv/bin/activate
python --version
```

### 한 줄씩 해설

```text
1. python3 -m venv .venv
   → 현재 Repository 안에 .venv라는 Python 가상환경을 만듭니다.

2. source .venv/bin/activate
   → 현재 Terminal에서 이 Repository 전용 Python 환경을 활성화합니다.

3. python --version
   → 활성화된 Python이 정상 실행되는지 확인합니다.
```

### 정상 범위

Prompt에 `(.venv)`가 보일 수 있으며, 사용자 이름·Repository 이름은 환경마다 달라도 정상입니다.

```text
(.venv) user@ubuntu:~/codyssey/current-repo$
```

미션 사이에서 `.venv`를 공유하지 않습니다.

### 재실행 안전성

```text
python3 -m venv .venv     → 🟡 CHECK BEFORE RERUN
source .venv/bin/activate → 🟢 SAFE TO RERUN
python --version           → 🟢 SAFE TO RERUN
```

---

## Node.js Mission

Node.js가 필요한 경우 먼저 해당 Mission의 다음 파일과 공식 요구를 확인합니다.

```text
package.json
lock file
Mission/Evaluation의 요구 버전
```

모든 Node 도구를 공통 Bootstrap에 일괄 설치하지 않습니다.

---

## SQLite / Nginx / OpenSSH / UFW 등

현재 Mission의 추가 Ubuntu Package는 다음 파일을 Source of Truth로 사용합니다.

```text
training/round-01-clear/environment/ubuntu-packages.txt
```

설치 전에는 다음 순서를 사용합니다.

```text
확인(Check)
→ 누락(Missing)
→ 설치(Install)
→ 검증(Verification)
```

SSH, UFW, Nginx, DB처럼 상태를 크게 바꾸는 작업은 Mission `BEGINNER-GUIDE.md`의 중간 저장점(Checkpoint) / 복구(Recovery) 절차를 먼저 확인합니다.

---

<a id="ide-ai"></a>
# PART 5 — Editor/IDE와 AI CLI 선택

## 기본 Editor/IDE

R01 기본 문서 기준은 VS Code입니다.

대체 IDE는 다음을 선택적으로 사용할 수 있습니다.

```text
Cursor
Windsurf
JetBrains IDE
Google Antigravity IDE
```

어떤 IDE를 사용하더라도 다음 Runtime 계약을 유지합니다.

```text
Repository = Ubuntu $HOME/codyssey/...
Terminal   = Ubuntu Bash
Git        = Ubuntu Git
Python     = Ubuntu Python
.venv      = Repository-local
```

## 주요 AI CLI — 선택 사항

다음 CLI는 **필수 도구가 아닙니다.** 모두 설치할 필요도 없습니다.

```text
OpenAI Codex CLI        → codex
Anthropic Claude Code   → claude
Google Gemini CLI       → gemini
Google Antigravity CLI  → agy
```

상세 설치·인증·no-admin·Remote/SSH·검증 기준은 다음 문서를 사용합니다.

- [`../standards/AI-CLI-TOOLSET-STANDARD.md`](../standards/AI-CLI-TOOLSET-STANDARD.md)

### 공용 Mac 원칙

```text
Host에 시스템 전역 설치를 강제하지 않음
→ 사용자 영역 또는 OrbStack Ubuntu 우선
→ 기관 정책 우회 금지
```

### AI Agent 동시 사용 원칙

```text
한 Worktree
→ 실제 파일 수정 Agent는 한 번에 하나
→ 다른 AI는 Review / 분석 역할
→ 변경 비교(Diff) 확인
→ 테스트(Test)
→ 검증(Verification)
```

AI가 만든 결과만으로 PASS/CLEAR/Evidence를 선언하지 않습니다.

---

<a id="final-verify"></a>
# PART 6 — 개발환경 최종 검증(Verification)

## FINAL STEP 01 — 실행 위치와 도구 최종 확인

### 📍 실행 위치

```text
Terminal   : Ubuntu Bash
Repository : 현재 작업할 Repository Root
권한       : 일반 사용자
venv       : Mission에 맞게 활성/비활성
```

### 실행

```bash
printf 'SHELL=%s\n' "$SHELL"
printf 'PWD=%s\n' "$PWD"
printf 'HOME=%s\n' "$HOME"
command -v bash
command -v git
command -v gh || true
command -v python3 || true
git rev-parse --show-toplevel
```

### 줄별 해설

```text
1. printf 'SHELL=...' "$SHELL"
   → 현재 기본 Shell 정보를 확인합니다.

2. printf 'PWD=...' "$PWD"
   → 현재 작업 폴더를 확인합니다.

3. printf 'HOME=...' "$HOME"
   → 현재 Ubuntu 사용자 홈을 확인합니다.

4. command -v bash
   → 실제 Bash 실행 위치를 확인합니다.

5. command -v git
   → 실제 Git 실행 위치를 확인합니다.

6. command -v gh || true
   → GitHub CLI가 있으면 위치를 보여 줍니다.

7. command -v python3 || true
   → Python이 설치되어 있으면 위치를 보여 줍니다.

8. git rev-parse --show-toplevel
   → 현재 Git Repository의 Root를 확인합니다.
```

### 정상 범위

경로의 사용자 이름, Python 경로 일부, 설치 위치는 환경마다 달라도 정상입니다.

반드시 같아야 하는 핵심 조건은 다음입니다.

```text
Repository → Ubuntu /home/... 아래
Terminal   → Ubuntu Bash
Git        → Ubuntu에서 실행
Python     → Python Mission이면 Ubuntu/repo-local 환경
```

### FINAL GO Gate

다음 항목을 확인합니다.

```text
[ ] Ubuntu 24.04 실행 환경(Runtime)을 사용한다.
[ ] Repository가 $HOME/codyssey/...에 있다.
[ ] Terminal은 Ubuntu Bash다.
[ ] Git은 Ubuntu Git이다.
[ ] 공통 Bootstrap 필수 항목이 PASS다.
[ ] Git/GitHub 사용자 상태를 확인했다.
[ ] Python Mission이면 repo-local .venv를 사용한다.
[ ] 선택 IDE를 써도 실행 환경 계약을 유지한다.
[ ] 공용 Mac에서는 관리자/MDM 정책을 우회하지 않는다.
[ ] AI CLI는 필요한 경우에만 선택했고 한 Worktree 동시 수정 규칙을 이해한다.
```

```text
✅ GO
→ 모두 충족하면 현재 Mission으로 이동합니다.

❌ STOP
→ 하나라도 핵심 조건이 틀리면 Mission 설정을 시작하지 않습니다.
→ 잘못된 Host / PWD / Tool / 인증부터 최소 수정 후 다시 검증합니다.
```

---

<a id="mission-start"></a>
# PART 7 — 이제 현재 Mission 시작

Control Tower에서 현재 해야 할 작업을 확인합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
cat training/round-01-clear/NEXT-ACTIONS.md
```

### 해설

```text
1. cd ...
   → Control Tower Repository로 이동합니다.

2. cat .../NEXT-ACTIONS.md
   → 현재 다음 수행 작업을 확인합니다.
```

그 다음 메인 README의 **▶ 입문자 따라하기(Beginner Guide)** 링크에서 현재 Mission을 시작합니다.

> 이 문서의 최종 검증(Verification)이 통과했다는 사실은 개발환경 준비의 근거일 뿐입니다. 실제 Mission `CLEAR`는 해당 미션의 **실제 실행(Runtime) → 검증(Verification) → 증빙(Evidence)**이 있어야 합니다.

---

<a id="troubleshooting"></a>
# 문제가 생겼을 때 — 공통 복구 순서

아래 순서대로 한 단계씩 확인합니다.

```text
증상 확인
→ Host인가 Ubuntu인가 구분
→ pwd / HOME 확인
→ command -v 확인
→ Git Repository / Branch / 변경 상태 확인
→ Bootstrap --check
→ 현재 Mission package 확인
→ 오류 메시지의 첫 실제 실패 지점 확인
→ 최소 수정
→ 다시 검증
→ PASS면 다음 단계
```

다음 행동은 하지 않습니다.

```text
FAIL 상태인데 다음 Step 계속 진행
무작정 sudo 추가
무작정 rm -rf
무작정 git reset --hard
Secret 출력/공유
다른 블로그 명령을 그대로 섞기
```

Repository 내부 가이드와 공식 제품 문서를 우선합니다.

---

<a id="cost-resource-guard"></a>
# Cloud / API / AI 비용 자원 안전 기준

B6/B7 또는 AI API처럼 비용 가능성이 있는 단계에서는 실제 생성 전에 다음을 확인합니다.

```text
[ ] Account / Project / Region이 맞다.
[ ] 무료 한도 또는 과금 가능성을 확인했다.
[ ] 생성할 Resource 수를 확인했다.
[ ] 유료 API/Model 사용 여부를 확인했다.
[ ] Cleanup / Stop / Delete 절차를 먼저 읽었다.
```

실습은 가능한 경우 다음 흐름으로 닫습니다.

```text
생성(Create)
→ 검증(Verification)
→ 증빙(Evidence)
→ 더 이상 필요 없음
→ 정리(Cleanup)
→ 삭제/중지 확인
```

가격·정책·무료 한도처럼 변동되는 값은 오래된 문서 값을 그대로 믿지 말고 현재 Provider 공식 문서를 확인합니다.

---

<a id="related-standards"></a>
# 관련 기준

- [`../standards/DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md`](../standards/DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md) — 목차 / 빠른 시작(Quick Start) 공통 기준
- [`../standards/BEGINNER-TRAINING-STANDARD.md`](../standards/BEGINNER-TRAINING-STANDARD.md) — 입문자 학습·실행 안전 상위 기준
- [`../standards/COMMAND-CODE-EXPLANATION-STANDARD.md`](../standards/COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령·코드 줄별 해설 / 복사·붙여넣기(Copy-Paste) / 재실행(Rerun) 기준
- [`../standards/DEVELOPMENT-TOOLSET-STANDARD.md`](../standards/DEVELOPMENT-TOOLSET-STANDARD.md) — 개발도구 필수/선택/no-admin 기준
- [`../standards/AI-CLI-TOOLSET-STANDARD.md`](../standards/AI-CLI-TOOLSET-STANDARD.md) — Codex / Claude Code / Gemini / Antigravity CLI 기준
- [`../standards/ENVIRONMENT-STANDARD.md`](../standards/ENVIRONMENT-STANDARD.md) — 환경 / 중간 저장점(Checkpoint) / 복구(Recovery) / 비용 보호(Cost Guard) 기준
- [`../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md`](../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md) — VS Code Remote Ubuntu 기준
- [`../standards/BEGINNER-DOCUMENTATION-AUDIT.md`](../standards/BEGINNER-DOCUMENTATION-AUDIT.md) — BEGINNER READY 감사 기준
- [`ubuntu/README.md`](ubuntu/README.md) — Ubuntu Bootstrap 상세

---

<a id="beginner-ready-goal"></a>
## 이 문서의 BEGINNER READY 목표

이 문서를 따라간 입문자는 최소한 다음을 자기 말로 설명하고 직접 확인할 수 있어야 합니다.

```text
내가 지금 macOS/Windows/Ubuntu 중 어디에서 작업하는지
왜 Repository를 Ubuntu /home 아래에 두는지
macOS 관리자 권한과 Ubuntu sudo가 왜 다른지
Git clone과 GitHub 인증이 왜 별개인지
Bootstrap --check와 --install의 차이
Python .venv를 왜 Repository마다 따로 쓰는지
실패했을 때 왜 다음 Step으로 계속 가지 않는지
같은 명령을 다시 실행해도 되는지 어떻게 판단하는지
AI CLI가 필수가 아니며 여러 Agent를 동시에 수정자로 쓰면 왜 위험한지
현재 환경이 준비됐는지 무엇으로 검증하는지
```

문서를 읽었다는 사실만으로 `BEGINNER READY`를 선언하지 않습니다. 실제 환경에서 위 Golden Path를 처음부터 따라가고, 막힌 지점이 없는지 Dry Run으로 확인한 뒤 문서 감사 기준에 따라 판정합니다.
