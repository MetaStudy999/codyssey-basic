# Start Here — 입문자 개발환경 처음부터 따라하기

이 문서는 Codyssey Basic을 처음 시작하는 사람이 **개발환경과 개발도구를 어떤 순서로 준비해야 하는지** 한 문서에서 확인할 수 있도록 만든 시작 가이드입니다.

목표는 다음입니다.

```text
Host 확인
→ Linux Runtime 준비
→ Editor/IDE 준비
→ Git/GitHub 준비
→ Ubuntu Bootstrap
→ 현재 Mission 준비
→ Verify
→ BEGINNER-GUIDE 시작
```

> macOS가 공용·관리형 PC이고 관리자 권한이 없는 경우도 별도 경로를 제공합니다. 관리자 권한이나 기관 보안정책을 우회하지 않습니다.

---

## 0. 먼저 내 환경을 고르세요

### A. macOS — 기본 권장 경로

```text
macOS
└─ OrbStack
   └─ Ubuntu 24.04
      └─ VS Code Remote-SSH
         └─ $HOME/codyssey/<repo>
```

### B. Windows 11 Pro — 보조 경로

```text
Windows 11 Pro
└─ WSL2
   └─ Ubuntu 24.04
      └─ VS Code Remote/WSL 또는 Terminal
         └─ $HOME/codyssey/<repo>
```

Docker는 공식 Mission/Evaluation이 요구하지 않는 한 **선택 학습(Optional Training)**입니다.

---

# PART 1 — macOS에서 시작하기

## STEP 01 — 관리자 권한이 있는지 확인

### 왜 하나요?

공용 Mac에서는 프로그램 설치 위치나 보안정책 때문에 설치 방법이 달라질 수 있습니다.

### 확인

Terminal에서 다음을 실행합니다.

```bash
whoami
groups
```

### 한 줄씩 해설

```text
1. whoami
   → 현재 로그인한 macOS 사용자 이름을 보여 줍니다.

2. groups
   → 현재 사용자가 속한 그룹 목록을 보여 줍니다.
```

관리자 여부를 잘 모르더라도 괜찮습니다. 이 가이드는 **sudo를 사용하지 않는 경로를 우선**합니다.

### 공용 Mac 규칙

```text
관리자 암호 우회 금지
sudo를 전제로 한 Host 설치 금지
MDM / 보안정책 우회 금지
시스템 폴더 강제 변경 금지
```

---

## STEP 02 — OrbStack 준비

### OrbStack이 무엇인가요?

macOS 안에서 Ubuntu Linux Machine과 Docker를 실행할 수 있게 해 주는 개발 도구입니다.

Codyssey Basic에서는 macOS 자체보다 **OrbStack Ubuntu 24.04**를 실제 기본 Linux Runtime으로 사용합니다.

### 공용 Mac에서 중요한 점

OrbStack은 공식적으로 **관리자 권한 없이 동작하는 기능(works without admin)**을 안내하고 있습니다.

따라서 공용 Mac에서도 먼저 시도할 수 있습니다. 다만 학교/기관/회사 MDM이 앱 실행 자체를 막으면 우회하지 말고 관리자에게 허용 여부를 확인합니다.

공식 사이트:
- https://orbstack.dev/
- https://docs.orbstack.dev/

### 설치 후 목표

OrbStack에서 Ubuntu 24.04 Machine을 만들고 다음이 가능해야 합니다.

```bash
ssh orb
```

### 해설

```text
ssh
→ Secure Shell 원격 접속 프로그램입니다.

orb
→ OrbStack이 제공하는 Linux Machine 접속용 Host 이름입니다.
```

정상이라면 macOS Terminal에서 OrbStack Linux Machine의 shell로 들어갑니다.

> B1-1에서 직접 만드는 `sshd:20022`와 OrbStack 관리용 `ssh orb`는 서로 다른 SSH입니다.

---

## STEP 03 — VS Code 준비

### 역할

VS Code는 코드를 보고 수정하는 기본 Editor입니다.

Codyssey Basic에서는:

```text
VS Code 화면 = macOS
실제 Repository = Ubuntu
실제 Terminal = Ubuntu Bash
```

구조를 사용합니다.

### 관리자 권한이 없는 Mac

기관 정책이 허용한다면 VS Code를 **사용자 쓰기 가능한 위치**에서 실행하는 경로를 우선합니다.

예:

```text
$HOME/Applications/
```

또한 VS Code는 macOS에서 Portable Mode를 지원합니다. 앱 옆에 다음 폴더를 두면 사용자 데이터와 Extension을 앱 근처에서 관리할 수 있습니다.

```text
Visual Studio Code.app
code-portable-data/
```

공식 참고:
- https://code.visualstudio.com/docs/setup/portable

> macOS quarantine 또는 기관 MDM이 앱 실행을 막는 경우 보안정책을 우회하지 않습니다. 이 경우 이미 허용된 Editor, Antigravity CLI, 브라우저 기반 도구 또는 관리자 승인 경로를 사용합니다.

---

## STEP 04 — VS Code Remote - SSH 연결

VS Code에서:

```text
Extensions
→ Remote - SSH 설치
→ Command Palette
→ Remote-SSH: Connect to Host
→ orb
→ Open Folder
→ /home/<linux-user>/codyssey/<repo>
```

### 정상 상태

VS Code 왼쪽 아래 Remote 표시가 Ubuntu 연결을 나타내고, 새 Terminal을 열었을 때 경로가 다음 계열이어야 합니다.

```text
/home/<linux-user>/codyssey/...
```

다음 경로를 Primary 개발경로로 사용하지 않습니다.

```text
/Users/...
/mnt/mac/Users/...
```

---

## STEP 05 — Ubuntu Workspace 만들기

Ubuntu Terminal에서 실행합니다.

```bash
mkdir -p "$HOME/codyssey"
cd "$HOME/codyssey"
pwd
```

### 한 줄씩 해설

```text
1. mkdir -p "$HOME/codyssey"
   → 사용자 홈 아래에 codyssey 폴더를 만듭니다.
   → mkdir은 directory를 만드는 명령입니다.
   → -p는 상위 폴더가 필요하면 함께 만들고, 이미 있어도 오류를 내지 않습니다.
   → $HOME은 현재 Ubuntu 사용자의 홈 디렉터리입니다.

2. cd "$HOME/codyssey"
   → 방금 만든 작업 폴더로 이동합니다.

3. pwd
   → 현재 작업 중인 실제 경로를 출력합니다.
```

정상 예:

```text
/home/사용자이름/codyssey
```

---

## STEP 06 — Control Tower 저장소 받기

GitHub 인증이 이미 되어 있다면:

```bash
git clone https://github.com/MetaStudy999/codyssey-basic.git
cd codyssey-basic
```

### 한 줄씩 해설

```text
1. git clone ...
   → GitHub의 codyssey-basic 저장소를 현재 Ubuntu 폴더로 복제합니다.
   → clone은 원격 Repository의 전체 Git history와 파일을 로컬에 가져옵니다.

2. cd codyssey-basic
   → 복제된 Control Tower 저장소로 이동합니다.
```

확인:

```bash
pwd
git status --short
```

```text
pwd
→ 현재 Repository 위치 확인

git status --short
→ Git 변경사항을 짧은 형식으로 확인
→ 아무 출력이 없으면 변경된 파일이 없는 깨끗한 상태일 수 있습니다.
```

---

## STEP 07 — Ubuntu 개발도구 확인

Control Tower root에서:

```bash
bash environments/ubuntu/bootstrap.sh --check
```

### 해설

```text
bash
→ Bash shell로 스크립트를 실행합니다.

environments/ubuntu/bootstrap.sh
→ Codyssey Basic 공통 Ubuntu 개발환경 점검 스크립트입니다.

--check
→ 설치하지 않고 현재 상태만 검사합니다.
```

정상이라면 마지막에 다음이 표시됩니다.

```text
[PASS] required Ubuntu developer bootstrap is ready
```

필수 도구가 부족할 때만:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

```text
첫 번째 줄
→ 부족한 공통 필수 Ubuntu 개발도구를 설치합니다.

두 번째 줄
→ 설치 후 다시 검사해서 정상 여부를 확인합니다.
```

권장 도구까지 설치하고 싶을 때만:

```bash
bash environments/ubuntu/bootstrap.sh --install --recommended
```

`vim`, `tree`, `ripgrep`, `fd-find`는 편의 도구이며 기본 Mission CLEAR를 막지 않습니다.

---

## STEP 08 — Git / GitHub 사용자 상태 확인

```bash
bash environments/ubuntu/verify-user-identity.sh
```

### 해설

```text
verify-user-identity.sh
→ Git 작성자 이름/이메일과 GitHub CLI 인증 상태를 읽기 전용으로 확인합니다.
→ 자동으로 Token을 만들거나 Git 설정을 바꾸지 않습니다.
```

Git 이름/이메일이 비어 있을 때만 본인 정보로 설정합니다.

```bash
git config --global user.name "내 Git 작성자 이름"
git config --global user.email "내 GitHub 이메일"
```

```text
1. user.name
   → Commit에 기록될 작성자 이름입니다.

2. user.email
   → Commit에 기록될 작성자 이메일입니다.

--global
→ 현재 Ubuntu 사용자 계정의 기본 Git 설정으로 저장합니다.
```

> 이메일/Token/Private Key 같은 민감정보를 README, 채팅, Evidence에 복사하지 않습니다.

---

# PART 2 — Python / Node / DB 도구는 미션별로 준비

## Python 미션

Python 미션에서는 Repository마다 별도 `.venv`를 사용합니다.

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
   → 활성화된 Python의 버전을 확인합니다.
```

정상 Prompt 예:

```text
(.venv) user@ubuntu:~/codyssey/current-repo$
```

미션 사이에서 `.venv`를 공유하지 않습니다.

## Node.js 미션

Node가 필요한 경우 해당 Mission의 `package.json`, lock file, 공식 요구 버전을 먼저 확인합니다.

모든 Node 도구를 공통 Bootstrap에 억지로 넣지 않습니다.

## SQLite / Nginx / OpenSSH 등

현재 Mission의:

```text
training/round-01-clear/environment/ubuntu-packages.txt
```

를 Source of Truth로 사용합니다.

---

# PART 3 — 대체 개발환경

기본 문서는 VS Code를 기준으로 하지만 다음 도구도 선택할 수 있습니다.

```text
Cursor
Windsurf
JetBrains IDE
Google Antigravity IDE
```

중요한 것은 IDE 이름이 아니라 다음 계약을 유지하는 것입니다.

```text
Repository = Ubuntu $HOME/codyssey/...
Terminal   = Ubuntu Bash
Git        = Ubuntu Git
Python     = Ubuntu Python
.venv      = Repository-local
```

---

## Google Antigravity IDE

Antigravity IDE는 Agent가 Editor, Terminal, Browser와 연결되는 대체 IDE입니다.

R01에서는 자동 명령 실행보다 **검토 중심(Review-driven)** 설정을 우선합니다.

```text
Agent 명령 실행
→ 먼저 검토
→ Workspace 범위 확인
→ Diff 확인
→ 실제 Verify
```

Workspace 밖 파일 접근은 필요할 때만 허용하고, Secret 파일은 불필요하게 Agent 범위에 넣지 않습니다.

공식 참고:
- https://antigravity.google/docs/ide/getting-started
- https://antigravity.google/docs/ide/settings

### 공용 Mac에서는

Antigravity IDE는 로컬 앱 설치를 요구하므로 기관 정책이 앱 실행을 허용할 때만 사용합니다.

관리자 권한이 없어 IDE 설치가 막히면 **Antigravity CLI**를 우선 대안으로 사용할 수 있습니다.

---

## Google Antigravity CLI — no-admin 우선 대안

공식 설치기는 macOS/Linux에서 사용자 홈 아래:

```text
~/.local/bin/agy
```

에 설치합니다.

따라서 공용 Mac의 일반 사용자 계정에서도 우선 검토할 수 있는 사용자 영역 설치 방식입니다.

설치:

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

### 명령 해설

```text
curl
→ URL의 내용을 내려받는 명령입니다.

-f
→ HTTP 오류가 발생하면 실패 상태로 처리합니다.

-s
→ 진행 표시를 줄입니다.

-S
→ -s 상태에서도 오류 메시지는 보여 줍니다.

-L
→ Redirect가 있으면 최종 주소까지 따라갑니다.

https://antigravity.google/cli/install.sh
→ Google Antigravity의 공식 CLI 설치 스크립트 주소입니다.

|
→ 왼쪽 명령의 출력을 오른쪽 명령의 입력으로 전달하는 Pipe입니다.

bash
→ 내려받은 공식 설치 스크립트를 Bash로 실행합니다.
```

설치 후 확인:

```bash
command -v agy
agy --help
```

```text
command -v agy
→ agy 실행 파일을 PATH에서 찾을 수 있는지 확인합니다.

agy --help
→ Antigravity CLI가 실행되는지와 사용 가능한 명령을 확인합니다.
```

`agy: command not found`가 나오면 `~/.local/bin` PATH를 확인합니다.

공식 설치 문서:
- https://antigravity.google/docs/cli/install

### OrbStack Ubuntu에서 Antigravity CLI 사용

Antigravity CLI는 Linux에서도 동작하므로 **Host Mac에 추가 앱 설치를 최소화하고 Ubuntu Terminal 안에서 사용할 수도 있습니다.**

SSH/Remote 환경에서는 CLI가 인증 URL을 출력하면 Mac의 허용된 브라우저에서 URL을 열고, 로그인 후 받은 코드를 Ubuntu Terminal에 입력하는 공식 Remote/SSH 인증 흐름을 사용합니다.

---

# PART 4 — 개발도구 최종 점검

Ubuntu Repository root에서:

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
   → 현재 기본 Shell 정보를 출력합니다.

2. printf 'PWD=...' "$PWD"
   → 현재 작업 폴더를 출력합니다.

3. printf 'HOME=...' "$HOME"
   → 현재 Ubuntu 사용자 홈을 출력합니다.

4. command -v bash
   → Bash 실행 위치를 확인합니다.

5. command -v git
   → Ubuntu Git 실행 위치를 확인합니다.

6. command -v gh || true
   → GitHub CLI가 있으면 위치를 보여 줍니다.
   → 없어도 이 진단 블록 전체를 즉시 실패시키지 않습니다.

7. command -v python3 || true
   → Python이 필요한 환경이라면 실행 위치를 확인합니다.

8. git rev-parse --show-toplevel
   → 현재 Git Repository의 root 경로를 출력합니다.
```

목표 상태:

```text
[ ] Ubuntu 24.04 Runtime을 사용한다.
[ ] Repository가 $HOME/codyssey/...에 있다.
[ ] Terminal은 Ubuntu Bash다.
[ ] Git은 Ubuntu Git이다.
[ ] 공통 Bootstrap이 PASS다.
[ ] Git/GitHub 사용자 상태를 확인했다.
[ ] Python 미션이면 repo-local .venv를 사용한다.
[ ] 선택 IDE를 써도 Runtime 계약은 유지한다.
[ ] 공용 Mac에서는 관리자 정책을 우회하지 않는다.
[ ] Antigravity CLI를 쓴다면 ~/.local/bin/agy 사용자 영역 경로를 확인했다.
```

---

# PART 5 — 이제 미션 시작

공통 환경이 준비되면 Control Tower에서 현재 해야 할 작업을 확인합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
cat training/round-01-clear/NEXT-ACTIONS.md
```

### 해설

```text
1. cd ...
   → Control Tower 저장소로 이동합니다.

2. cat .../NEXT-ACTIONS.md
   → 현재 다음 수행 작업 문서를 Terminal에서 확인합니다.
```

그 다음 메인 README의 **▶ 입문자 따라하기(Beginner Guide)** 링크에서 현재 Mission을 시작합니다.

---

## 문제가 생겼을 때

다음 순서로 확인합니다.

```text
증상
→ Host인가 Ubuntu인가 구분
→ PWD 확인
→ command -v 확인
→ Bootstrap --check
→ 현재 Mission package 확인
→ 오류 메시지 그대로 확인
→ 최소 수정
→ 다시 Verify
```

다른 블로그를 먼저 찾기보다 Repository 내부 가이드와 공식 제품 문서를 우선합니다.

---

## 관련 기준

- [`../standards/DEVELOPMENT-TOOLSET-STANDARD.md`](../standards/DEVELOPMENT-TOOLSET-STANDARD.md) — 개발도구 필수/선택/no-admin 기준
- [`../standards/ENVIRONMENT-STANDARD.md`](../standards/ENVIRONMENT-STANDARD.md) — 환경 표준
- [`../standards/COMMAND-CODE-EXPLANATION-STANDARD.md`](../standards/COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령·코드 줄별 해설
- [`../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md`](../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md) — VS Code Remote Ubuntu
- [`ubuntu/README.md`](ubuntu/README.md) — Ubuntu Bootstrap 상세
