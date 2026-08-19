# R01 Environment System

Round 01 FAST TRACK에서 사용하는 실행환경의 범위를 관리합니다.

## 🚀 빠른 시작(Quick Start)

처음 개발환경을 만드는 경우:

1. [`START-HERE-DEVELOPMENT-ENVIRONMENT.md`](START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 먼저 따라갑니다.
2. Mac이면 OrbStack Ubuntu 24.04, Windows면 WSL2 Ubuntu 24.04 안에서 저장소(Repository)를 엽니다.
3. 공통 Ubuntu 개발환경 초기 준비(Bootstrap)를 확인합니다.
4. 현재 미션에 필요한 추가 도구(Tool)만 준비합니다.

이미 Ubuntu 24.04와 Control Tower가 준비된 경우 Ubuntu Bash에서:

```bash
cd "$HOME/codyssey/codyssey-basic"
pwd
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

정상 기준:

```text
[ ] Repository가 Ubuntu /home/<user>/codyssey 아래에 있다.
[ ] Bootstrap required 항목이 PASS다.
[ ] Git/GitHub 사용자 상태를 확인했다.
```

```text
✅ GO
→ 현재 미션의 ubuntu-packages.txt 확인
→ 프로젝트 의존성(Project Dependency) 준비
→ 입문자 가이드(Beginner Guide) 진행

❌ STOP
→ Host/PWD/Bootstrap 문제부터 해결
```

작업을 시작할 때 현재 실행 환경(Current Runtime Context)을 선택합니다.

```text
학교 Mac → MAC-V
노트북 Win11 → WIN-V
```

상세 설치와 no-admin Mac 경로는 [`START-HERE-DEVELOPMENT-ENVIRONMENT.md`](START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 사용합니다.

## 📑 목차

- [입문자는 여기서 시작](#beginner-start)
- [현재 지원 범위](#supported-scope)
- [4개 실행 환경 프로필(Runtime Profile)](#runtime-profiles)
- [핵심 원칙](#core-principles)
- [공용·관리형 Mac — 관리자 권한 없음](#no-admin-mac)
- [Ubuntu 24.04 개발환경 초기 준비(Developer Bootstrap)](#ubuntu-bootstrap)
- [VS Code Remote Ubuntu Workspace](#vscode-remote)
- [대체 IDE / AI 개발도구](#alternative-tools)
- [Cross-platform Git / File](#cross-platform)
- [Docker 정책](#docker-policy)
- [문서](#documents)
- [운영 방식](#workflow)

---

<a id="beginner-start"></a>
## 입문자는 여기서 시작

개발환경과 개발도구를 처음 준비한다면 먼저 다음 문서를 위에서 아래로 따라갑니다.

👉 [`START-HERE-DEVELOPMENT-ENVIRONMENT.md`](START-HERE-DEVELOPMENT-ENVIRONMENT.md) — **입문자 개발환경 처음부터 따라하기**

이 문서는 macOS/Windows 환경 선택부터 OrbStack/WSL2, VS Code Remote, Git/GitHub, Ubuntu Bootstrap, Python `.venv`, 대체 IDE, Google Antigravity, 공용 Mac의 **관리자 권한 없는(no-admin) 경로**까지 하나의 기준 실행 경로(Golden Path)로 연결합니다.

```text
Host/권한 확인
→ 현재 실행 환경(Current Runtime Context) 선택
→ Linux 실행 환경(Runtime)
→ 편집기/통합 개발 환경(Editor/IDE)
→ Git/GitHub
→ Ubuntu 공통 환경 초기 준비(Bootstrap)
→ 미션 도구(Mission Tool)
→ 프로젝트 의존성(Project Dependency)
→ 검증(Verification)
→ 입문자 가이드(Beginner Guide)
```

개발도구의 필수/선택/no-admin 기준은 [`../standards/DEVELOPMENT-TOOLSET-STANDARD.md`](../standards/DEVELOPMENT-TOOLSET-STANDARD.md)를 사용합니다.

<a id="supported-scope"></a>
## 현재 지원 범위

```text
학교 macOS
└─ OrbStack
   ├─ Ubuntu 24.04 Linux Machine
   └─ Docker

개인 노트북 Windows 11 Pro
└─ WSL2 Ubuntu 24.04
   ├─ Ubuntu 24.04 Direct Linux Runtime
   └─ Docker
```

현재는 Ubuntu Native Host, 별도 Hyper-V VM, VMware, KVM/QEMU, Proxmox, Kubernetes를 R01 표준 범위에 추가하지 않습니다. R01 CLEAR 이후 Portability/Advanced 단계에서 검토합니다.

<a id="runtime-profiles"></a>
## 4개 실행 환경 프로필(Runtime Profile)

| Profile | Host | 실행 형태 | 역할 | 환경 특성 |
|---|---|---|---|---|
| `MAC-V` | 학교 macOS | OrbStack Ubuntu 24.04 Linux Machine | 지원 Mission Runtime | Resettable / Ephemeral |
| `WIN-V` | 개인 Windows 11 Pro | WSL2 Ubuntu 24.04 direct runtime | 지원 Mission Runtime | Persistent |
| `MAC-D` | macOS | OrbStack Docker | Docker Training Lab | 선택 |
| `WIN-D` | Windows 11 Pro | WSL2 Ubuntu + Docker | Docker Training Lab | 선택 |

> `WIN-V`는 프로젝트 내 프로필 이름입니다. 전통적인 수동 Hyper-V VM을 의미하지 않고, Docker Container와 구분되는 WSL2 Ubuntu 24.04 직접 Linux Runtime을 뜻합니다.

`MAC-V`와 `WIN-V`는 합격 기준의 Primary/Secondary 관계가 아닙니다. 공식 Mission/Evaluation과 CLEAR 기준은 동일합니다.

<a id="core-principles"></a>
## 핵심 원칙

```text
MAC-V / WIN-V = 동등한 지원 실행 환경(Supported Runtime)
Current Runtime Context = 작업 시작 시 사용자가 선택
플랫폼별 Runtime Record = 각각 별도 기록
CROSS-PLATFORM VERIFIED = 두 환경 모두 실제 PASS
Docker 실습(Docker Lab) = 선택
```

1. **Mission CLEAR와 플랫폼별 수행 기록을 분리합니다.** 공식 Mission/Evaluation + 실제 실행(Runtime) + 검증(Verification) + 증빙(Evidence)이 CLEAR 기준입니다.
2. `MAC-V`와 `WIN-V` 중 현재 실제 작업하는 환경을 Current Runtime Context로 선택합니다.
3. 학교 Mac은 Resettable / Ephemeral이므로 `CHECK BEFORE INSTALL`을 사용합니다.
4. Windows 11 노트북은 Persistent이므로 `VERIFY BEFORE REINSTALL`을 사용합니다.
5. 한 지원 실행환경에서 공식 요구를 실제 충족하면, 공식 Mission이 두 플랫폼을 요구하지 않는 한 다른 환경 미수행을 이유로 CLEAR를 자동 차단하지 않습니다.
6. MAC-V와 WIN-V 모두 실제 PASS하면 내부 품질 상태로 `CROSS-PLATFORM VERIFIED`를 기록할 수 있습니다.
7. Docker는 현재 R01의 기본 Gate가 아닙니다. 학습 가치가 있거나 필요할 때 `MAC-D`/`WIN-D`로 선택 실습합니다.
8. GitHub, AWS, 실제 배포, 실제 AI Provider 증빙(Evidence)은 로컬 Linux/Docker 실습이 대체하지 않습니다.
9. Architecture는 Host 이름으로 추측하지 않고 실행 환경(Runtime) 내부 `uname -m`으로 확인합니다.
10. Secret은 어떤 실행 환경에서도 GitHub/채팅/로그/Evidence에 기록하지 않습니다.

플랫폼별 실제 수행 현황은 [`../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)를 사용합니다.

<a id="no-admin-mac"></a>
## 공용·관리형 Mac — 관리자 권한 없음

공용 Mac에서는 Host에 개발도구를 많이 설치하지 않고 **사용자 영역 + OrbStack Ubuntu 실행 환경(Runtime)**을 우선합니다.

```text
sudo 우회 금지
MDM/보안정책 우회 금지
→ 사용자 영역 설치 가능 여부 확인
→ OrbStack Ubuntu 사용
→ VS Code 사용자/Portable 경로
→ Git/Python/Node 등은 Ubuntu에 설치
→ 필요하면 Antigravity CLI ~/.local/bin 사용
```

OrbStack은 공식적으로 관리자 권한 없이 동작하는 기능을 안내하지만, 기관의 MDM/앱 허용 정책이 실행을 막는 경우에는 정책을 우회하지 않습니다.

학교 Mac은 Reset 가능성을 기본 전제로 합니다.

```text
CHECK BEFORE INSTALL
→ 현재 환경이 살아 있으면 재설치 생략
→ Reset되었으면 필요한 항목만 재구성
```

Google Antigravity는 다음처럼 분류합니다.

```text
Antigravity IDE = 선택 대체 IDE
Antigravity CLI = 선택 AI Terminal 도구 / no-admin 사용자 영역 우선 대안
```

Antigravity CLI의 macOS/Linux 공식 기본 설치 위치는 `~/.local/bin/agy`입니다. 상세 설치·안전 기준은 [`../standards/DEVELOPMENT-TOOLSET-STANDARD.md`](../standards/DEVELOPMENT-TOOLSET-STANDARD.md)와 입문자 Start Here 문서를 따릅니다.

<a id="ubuntu-bootstrap"></a>
## Ubuntu 24.04 개발환경 초기 준비(Developer Bootstrap) 정책

Ubuntu 개발환경은 다음 계층으로 관리합니다.

```text
Layer 0 — OS Prerequisites
bash / apt-get / dpkg-query / sudo

Layer 1 — Common Required Base
ca-certificates / curl / wget / git / openssh-client / nano / jq / file / unzip / zip / rsync / bash-completion

Layer 1B — Recommended Productivity
vim / tree / ripgrep / fd-find

Layer 2 — External/Common Developer CLI
gh — GitHub CLI official APT repository

Layer 3 — Mission / Shared Runtime
현재 Mission의 ubuntu-packages.txt

Layer 4 — Project Dependencies
.venv / pyproject.toml / requirements.txt / package.json / lock file
```

공통 Bootstrap:

```bash
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --install --recommended
```

핵심 원칙:

- `git`, SSH client, `nano`, JSON/압축/파일동기화 도구는 공통 Base
- `gh`는 공통 Developer CLI이며 GitHub CLI 공식 APT repository로 설치
- `gh auth login`, GitHub Token, SSH private key, Git identity는 자동화하지 않음
- `vim`, `tree`, `ripgrep`, `fd-find`는 권장 도구이며 Mission CLEAR Gate가 아님
- package 설치 여부와 실제 command 사용 가능 여부를 분리하여 검증
- 각 Mission의 추가 APT Source of Truth는 `training/round-01-clear/environment/ubuntu-packages.txt`
- Python Web/AI library는 System Python에 전역 설치하지 않고 repository-local `.venv`에 둠
- Node package는 `package.json`/lock file로 관리

### 공통 환경 마무리(Common Environment Closeout) / 동결(Freeze)

공통 환경 마무리는 **전역 공통 Gate**와 **현재 Runtime Profile 준비 상태**를 분리합니다.

```text
전역 공통 Gate
├─ Documentation Drift
└─ Bash Static Syntax Validation
        ↓
Common Environment Design Freeze
        ↓
Current Runtime Context 선택
        ↓
해당 환경 Bootstrap / Identity 확인
        ↓
Mission Runtime
```

즉 MAC-V와 WIN-V 두 장비가 동시에 준비될 때까지 기다리지 않습니다.

실행 도구:

```bash
bash environments/ubuntu/validate-scripts.sh
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

상세 기준은 [`ubuntu/ENVIRONMENT-CLOSEOUT.md`](ubuntu/ENVIRONMENT-CLOSEOUT.md)를 사용합니다.

Freeze 이후에는 **현재 Mission CLEAR를 막는 문제만 JIT로 최소 수정**하고, 비차단 공통환경 확장은 후속 개선으로 미룹니다.

상세 기준:

- [`ubuntu/README.md`](ubuntu/README.md) — Ubuntu Developer Bootstrap 전체 모델
- [`ubuntu/BASE-PACKAGES.md`](ubuntu/BASE-PACKAGES.md) — 공통 필수/권장/`gh` 계층
- [`ubuntu/MISSION-PACKAGE-MATRIX.md`](ubuntu/MISSION-PACKAGE-MATRIX.md) — 15개 Mission별 시스템/프로젝트 의존성 지도
- [`ubuntu/ENVIRONMENT-CLOSEOUT.md`](ubuntu/ENVIRONMENT-CLOSEOUT.md) — 공통환경 마지막 검증과 Freeze Gate

<a id="vscode-remote"></a>
## VS Code Remote Ubuntu Workspace 정책

`MAC-V`에서 VS Code는 macOS에 실행하되 실제 개발환경은 OrbStack Ubuntu 24.04로 사용합니다.

```text
macOS VS Code
→ Remote-SSH `orb`
→ OrbStack Ubuntu 24.04
→ `$HOME/codyssey/<repo>` Open Folder
→ Ubuntu Bash / Git / Python / `.venv`
```

MAC-V Repository는 Ubuntu `$HOME/codyssey/...`에 두고 `/Users/...` 또는 `/mnt/mac/Users/...` 같은 macOS shared path를 기본 개발경로로 사용하지 않습니다.

WIN-V에서도 Repository, Terminal, Git, Python은 WSL2 Ubuntu 24.04 내부를 기준으로 합니다.

새 VS Code Terminal은 다음을 목표로 합니다.

```text
Shell = bash
PWD   = ${workspaceFolder}
Python Mission = repo-local `.venv` 자동 활성화
```

특정 Project의 `.venv`를 Global `~/.bashrc`에서 강제 활성화하지 않습니다. Remote User Settings와 Repository `.vscode/settings.json`의 역할을 분리합니다.

상세 기준은 [`../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md`](../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md)를 사용합니다.

<a id="alternative-tools"></a>
## 대체 IDE / AI 개발도구 정책

기본 Beginner Guide는 VS Code를 기준으로 하지만 다음 대체 도구를 사용할 수 있습니다.

```text
Cursor
Windsurf
JetBrains IDE
Google Antigravity IDE
```

대체 IDE를 사용해도 실제 실행 환경(Runtime) 계약은 유지합니다.

```text
Repository = Ubuntu $HOME/codyssey/...
Terminal   = Ubuntu Bash
Git        = Ubuntu Git
Python     = Ubuntu Python
.venv      = Repository-local
```

AI 개발도구는 ChatGPT/Codex/Claude/Gemini/Antigravity CLI 등을 선택적으로 사용할 수 있으며, AI 출력은 실제 검증(Verification)/증빙(Evidence)을 대체하지 않습니다.

주요 AI CLI 상세 기준:

- [`../standards/AI-CLI-TOOLSET-STANDARD.md`](../standards/AI-CLI-TOOLSET-STANDARD.md)

<a id="cross-platform"></a>
## Cross-platform Git / File 정책

macOS, Windows 11 Pro, WSL2, Ubuntu 24.04 사이에서 GitHub Repository를 주고받을 때 OS 차이를 개인 설정에 맡기지 않고 **Repository 계약으로 고정**합니다.

```text
Text encoding = UTF-8
Canonical line ending = LF
Windows .bat / .cmd = CRLF 허용
```

모든 Codyssey Basic Repository Root에 다음 파일을 둡니다.

```text
.gitattributes
.editorconfig
```

- `.gitattributes`: Git add/checkout의 line-ending 및 binary 정책
- `.editorconfig`: VS Code, Cursor, Windsurf, JetBrains 등 Editor 저장 형식

함께 주의할 항목:

- CRLF/LF 및 `^M` 오류
- shell executable bit
- 파일명 대소문자 충돌
- symlink 차이
- 절대경로 의존
- Unicode filename normalization

상세 규칙과 기존 Clone 정규화 절차는 [`../standards/CROSS-PLATFORM-GIT-STANDARD.md`](../standards/CROSS-PLATFORM-GIT-STANDARD.md)를 사용합니다.

대규모 `git add --renormalize .`는 Active Mission 변경과 섞지 않고, 실제 필요할 때 clean branch에서 Diff를 확인한 뒤 별도 작업으로 수행합니다.

<a id="docker-policy"></a>
## Docker 정책

[`DOCKER-POLICY.md`](DOCKER-POLICY.md)를 사용합니다.

핵심은 다음과 같습니다.

```text
Docker 미수행 ≠ Mission FAIL
Docker 미수행 ≠ Mission BLOCKED
Docker 사용 여부 ≠ Mission CLEAR 판정
```

공식 Mission/Evaluation이 Docker를 명시적으로 요구하는 경우에만 공식 요구가 우선합니다.

<a id="documents"></a>
## 문서

- [`START-HERE-DEVELOPMENT-ENVIRONMENT.md`](START-HERE-DEVELOPMENT-ENVIRONMENT.md) — 입문자 개발환경 처음부터 따라하기
- [`RUNTIME-PROFILES.md`](RUNTIME-PROFILES.md) — 4개 실행 프로필 상세 계약
- [`DOCKER-POLICY.md`](DOCKER-POLICY.md) — Docker 선택 학습 정책
- [`MISSION-LAB-MATRIX.md`](MISSION-LAB-MATRIX.md) — B1-1~B7-2 MAC-V/WIN-V/Docker Lab 설계
- [`../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md) — 플랫폼별 실제 수행 상태
- [`ubuntu/README.md`](ubuntu/README.md) — Ubuntu 24.04 Developer Bootstrap / package model
- [`ubuntu/BASE-PACKAGES.md`](ubuntu/BASE-PACKAGES.md) — 공통 Base, 권장 도구, GitHub CLI 계층
- [`ubuntu/MISSION-PACKAGE-MATRIX.md`](ubuntu/MISSION-PACKAGE-MATRIX.md) — B1-1~B7-2 Ubuntu 패키지 지도
- [`ubuntu/ENVIRONMENT-CLOSEOUT.md`](ubuntu/ENVIRONMENT-CLOSEOUT.md) — 공통환경 Closeout / Freeze 기준
- [`../standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`](../standards/CODYSSEY-WORKING-OPERATING-STANDARD.md) — 상위 작업 운영 표준
- [`../standards/DEVELOPMENT-TOOLSET-STANDARD.md`](../standards/DEVELOPMENT-TOOLSET-STANDARD.md) — 개발도구와 no-admin 기준
- [`../standards/AI-CLI-TOOLSET-STANDARD.md`](../standards/AI-CLI-TOOLSET-STANDARD.md) — 주요 AI CLI 기준
- [`../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md`](../standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md) — VS Code Remote Workspace/Terminal 표준
- [`../standards/CROSS-PLATFORM-GIT-STANDARD.md`](../standards/CROSS-PLATFORM-GIT-STANDARD.md) — Mac/Windows/Ubuntu Git 파일 호환성 표준
- [`../templates/DUAL-RUNTIME-LAB-TEMPLATE.md`](../templates/DUAL-RUNTIME-LAB-TEMPLATE.md) — Mission별 상세 환경 실습 템플릿

<a id="workflow"></a>
## 운영 방식

```text
Mission 시작
→ Current Runtime Context 선택(MAC-V 또는 WIN-V)
→ VS Code Remote / Workspace 경로 확인
→ 교차 플랫폼 Git/File Preflight
→ 선택 환경 Ubuntu Bootstrap / Identity 확인
→ 현재 Mission ubuntu-packages.txt 확인
→ 부족한 System package만 설치
→ Project environment 구성
→ 공식 Mission/Evaluation 수행
→ 검증(Verification)
→ 증빙(Evidence)
→ 해당 플랫폼 Runtime Record 갱신
→ ✅ Mission CLEAR 판정
→ 필요하면 다른 지원 Runtime에서 재수행
→ 두 환경 PASS 시 CROSS-PLATFORM VERIFIED
→ 원하는 경우 Docker 실습(Docker Lab)
→ FAST TRACK 다음 Mission
```

FAST TRACK에서는 **Mission CLEAR를 먼저 만들고 교차 플랫폼 추가 검증과 Docker 학습은 별도 품질/Training Layer로 관리**합니다.
