# Development Toolset Standard — 입문자 개발 도구 표준

Codyssey Basic에서 입문자가 **새 개발환경을 만들 때 무엇이 필수이고 무엇이 선택인지**, 그리고 공용·관리형 Mac처럼 관리자 권한이 없는 환경에서 어떤 경로를 우선할지 정의합니다.

> 이 문서는 코디세이 공식 Mission/Evaluation을 대체하지 않습니다. 특정 미션이 도구·버전·Cloud 서비스를 직접 요구하면 공식 요구가 우선합니다.

---

## 1. 최우선 원칙

입문자는 가능한 한 다음 순서로 개발환경을 준비합니다.

```text
Host 확인
→ 관리자 권한 여부 확인
→ Linux Runtime 준비
→ 기본 Editor/IDE 준비
→ Git/GitHub 준비
→ 공통 Ubuntu Bootstrap
→ Mission 전용 도구
→ Project 전용 의존성
→ Verify
→ 현재 Mission 시작
```

도구를 많이 설치하는 것이 목표가 아닙니다. **현재 미션을 수행하는 데 필요한 최소 도구를 정확하게 설치·검증하는 것**이 목표입니다.

---

## 2. 도구 계층

### LEVEL 1 — 기본 필수 경로

R01의 대표 경로에서 우선 사용하는 도구입니다.

```text
Ubuntu 24.04 Runtime
Bash
Git
GitHub CLI (gh)
VS Code
Remote - SSH
```

macOS의 기본 Runtime은 OrbStack Ubuntu 24.04, Windows의 기본 보조 Runtime은 WSL2 Ubuntu 24.04입니다.

### LEVEL 2 — 미션에 따라 추가

```text
Python / python3-venv
Node.js / npm
SQLite
Nginx
OpenSSH Server
UFW / ACL / cron
기타 Mission ubuntu-packages.txt
```

모든 도구를 처음부터 설치하지 않습니다.

### LEVEL 3 — 권장 생산성 도구

```text
vim
tree
ripgrep
fd-find
```

이 도구들은 편리하지만 기본 Mission CLEAR Gate가 아닙니다.

### LEVEL 4 — 대체 개발환경(Alternative IDE / Editor)

다음은 학습자 선호와 환경 정책에 따라 사용할 수 있는 대체 도구입니다.

```text
VS Code          ← R01 기본 문서 기준
Cursor           ← 선택
Windsurf         ← 선택
JetBrains IDE    ← 선택
Antigravity IDE  ← 선택
```

대체 IDE를 사용하더라도 다음 개발환경 계약은 유지합니다.

```text
Repository = Ubuntu $HOME/codyssey/...
Terminal   = Ubuntu Bash
Git        = Ubuntu Git
Python     = Ubuntu Python
.venv      = Repository-local
```

IDE가 바뀌어도 Runtime의 Source of Truth는 바뀌지 않습니다.

### LEVEL 5 — AI 개발 도구 / 주요 CLI

```text
ChatGPT
OpenAI Codex CLI        → codex
Anthropic Claude Code   → claude
Google Gemini CLI       → gemini
Google Antigravity CLI  → agy
```

AI 도구는 공식 요구를 대신하지 않으며, 생성 결과는 사람이 검토하고 실제 Verify/Evidence로 확인합니다.

설치·인증·no-admin·Remote/SSH·동시 사용 기준은 [AI-CLI-TOOLSET-STANDARD.md](AI-CLI-TOOLSET-STANDARD.md)를 사용합니다.

---

## 3. Google Antigravity 기준

Google Antigravity는 현재 다음 제품군을 제공합니다.

```text
Antigravity      = 여러 로컬 Agent를 관리하는 독립형 앱
Antigravity IDE  = Agent가 통합된 개발 IDE
Antigravity CLI  = Terminal 기반 Agent 인터페이스
Antigravity SDK  = 프로그래밍 통합용 SDK
```

Codyssey Basic에서는 다음처럼 사용합니다.

```text
VS Code + Ubuntu Runtime       = 기본 경로
Antigravity IDE               = 대체 IDE
Antigravity CLI (agy)         = 선택 AI Terminal 도구
Antigravity standalone app    = 선택 Agent orchestration 도구
```

### Antigravity IDE

- macOS, Windows, Linux용 설치본이 제공됩니다.
- IDE의 Agent는 Editor/Terminal/Browser 작업을 수행할 수 있으므로, R01에서는 **검토 중심(Review-driven) / 명령 실행 전 확인**을 우선합니다.
- Workspace 밖 파일 접근이나 자동 명령 실행 권한은 최소화합니다.
- Secret, `.env`, Key 파일을 Agent에게 불필요하게 노출하지 않습니다.

### Antigravity CLI

macOS/Linux의 공식 설치기는 기본적으로 사용자 홈의 다음 위치를 사용합니다.

```text
~/.local/bin/agy
```

따라서 **관리자 권한이 없는 Mac/Linux에서 우선 검토할 수 있는 사용자 영역 설치 방식**입니다.

공식 설치 예:

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

설치 후 확인:

```bash
command -v agy
agy --help
```

`agy`가 보이지 않으면 `~/.local/bin`이 `PATH`에 포함되어 있는지 확인합니다.

> 원격 SSH 환경에서는 Antigravity CLI가 브라우저를 직접 열지 못할 수 있으므로, 표시되는 인증 URL을 로컬 브라우저에서 열고 인증 코드를 터미널로 되돌리는 공식 Remote/SSH 인증 흐름을 사용합니다.

공식 참고:
- https://antigravity.google/docs/cli/install
- https://antigravity.google/docs/ide/getting-started
- https://antigravity.google/docs/ide/settings

---

## 4. 공용·관리형 Mac — 관리자 권한 없음(No-Admin) 정책

공용 PC, 학교/기관/회사 관리 Mac에서는 다음 원칙을 적용합니다.

### 4.1 절대 원칙

```text
관리자 암호 우회 금지
MDM / 보안정책 우회 금지
sudo를 전제로 한 Host 설치 금지
시스템 폴더 강제 변경 금지
```

설치가 막히면 우회하지 않고 **사용자 영역 설치 → Remote/Linux Runtime → Web/CLI 대안 → 관리자 승인 요청** 순으로 전환합니다.

### 4.2 사용자 영역 우선 위치

가능한 경우 다음 위치를 우선합니다.

```text
$HOME/Applications
$HOME/.local/bin
$HOME/codyssey
$HOME/.config
```

`/Applications`, `/usr/local`, `/opt/homebrew`, 시스템 LaunchDaemon 등 관리자 권한이 필요한 위치를 기본 경로로 가정하지 않습니다.

### 4.3 OrbStack

OrbStack은 공식적으로 **관리자 권한 없이 동작하는 것(works without admin)**을 기능으로 안내합니다. 따라서 공용 Mac에서도 먼저 검토할 수 있는 기본 Linux Runtime 후보입니다.

다만 기관의 MDM, 앱 허용목록, 실행 제한 정책이 OrbStack 실행을 차단할 수 있습니다. 이 경우 정책을 우회하지 않습니다.

### 4.4 VS Code

VS Code의 macOS Portable Mode는 일반 macOS Application 다운로드를 지원하고, 앱 옆의 `code-portable-data`에 사용자 데이터와 Extension을 둘 수 있습니다.

공용 Mac에서는 다음 순서를 우선합니다.

```text
사용자 쓰기 가능한 위치에 VS Code 배치
→ 필요 시 Portable Mode 사용
→ Extension도 사용자 영역에 저장
→ 시스템 전역 설치는 요구하지 않음
```

단, macOS quarantine 또는 기관 보안 정책 때문에 앱 실행/Portable Mode가 제한될 수 있습니다. 이때 `xattr` 변경이나 보안 설정 변경이 기관 정책에 의해 막히면 우회하지 않습니다.

공식 참고:
- https://code.visualstudio.com/docs/setup/portable

### 4.5 Homebrew

공용 Mac의 **no-admin Golden Path에서 Homebrew를 필수 전제로 사용하지 않습니다.**

이유:
- 표준 설치 위치가 시스템/공용 경로와 연결될 수 있음
- 기관 정책에 의해 설치·실행이 제한될 수 있음
- Codyssey 기본 도구 대부분은 Ubuntu Runtime 내부에서 APT로 관리 가능

Host Mac에 패키지를 많이 설치하기보다 Ubuntu Runtime에 개발 도구를 두는 것을 우선합니다.

### 4.6 Antigravity

공용 Mac에서 Antigravity 사용 우선순위는 다음과 같습니다.

```text
1. Antigravity CLI — ~/.local/bin 사용자 영역 설치
2. Antigravity IDE — 기관 정책이 로컬 앱 실행을 허용할 때만
3. 설치가 차단되면 VS Code + Ubuntu + 다른 AI 도구 사용
```

Antigravity IDE의 공식 문서는 로컬 설치를 요구하지만 **관리형 Mac에서 사용자 영역 설치가 항상 허용된다고 보장하지는 않습니다.** 따라서 IDE 설치가 막히면 관리자 정책을 우회하지 않고 CLI 또는 기존 허용 IDE를 사용합니다.

### 4.7 주요 AI CLI의 no-admin 우선순위

```text
Codex CLI standalone
→ 기본적으로 ~/.local/bin/codex 사용자 영역

Antigravity CLI
→ 기본적으로 ~/.local/bin/agy 사용자 영역

Gemini CLI
→ npx @google/gemini-cli 로 영구 설치 없이 먼저 실행 가능

Claude Code
→ sudo npm install -g 금지
→ Ubuntu 또는 사용자 소유 npm/native 설치 경로 우선
```

세부 설치·인증·검증 방법은 [AI-CLI-TOOLSET-STANDARD.md](AI-CLI-TOOLSET-STANDARD.md)를 따릅니다.

---

## 5. macOS 공용 PC Golden Path

```text
STEP 1  일반 사용자 계정으로 로그인
STEP 2  OrbStack 실행 가능 여부 확인
STEP 3  OrbStack Ubuntu 24.04 생성/시작
STEP 4  VS Code 실행 가능 여부 확인
STEP 5  Remote-SSH로 orb 연결
STEP 6  Ubuntu $HOME/codyssey 사용
STEP 7  Control Tower clone
STEP 8  Ubuntu Bootstrap --check
STEP 9  필요한 경우 Bootstrap --install
STEP 10 Git/GitHub 사용자 상태 확인
STEP 11 현재 Mission package 확인
STEP 12 Project .venv/Node 환경 구성
STEP 13 필요한 경우 AI CLI 하나 선택·검증
STEP 14 Verify
STEP 15 BEGINNER-GUIDE 시작
```

Host Mac에는 가능한 한 최소 도구만 두고, 실제 개발 의존성은 Ubuntu에 둡니다.

---

## 6. 개발도구 설치 문서 작성 기준

입문자용 Tool Setup 문서는 각 도구마다 다음을 제공합니다.

```text
① 이 도구가 무엇인가
② 왜 필요한가
③ 필수 / 권장 / 선택
④ 관리자 권한 필요 여부
⑤ 설치 위치
⑥ 설치 방법
⑦ 명령 한 줄씩 해설
⑧ 실행/버전 확인
⑨ 정상 결과
⑩ 오류와 복구
⑪ 제거/초기화 시 안전 범위
⑫ 다음 단계
```

명령이 있으면 [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md)를 따릅니다.

AI CLI라면 추가로 다음을 확인합니다.

```text
공식 인증 방식
Repository 접근 범위
명령 실행 승인 방식
Secret 비노출
작업 전 git status / Branch 확인
동일 Worktree 동시 수정 금지
변경 후 Diff / Test / Verify
```

---

## 7. 설치 판단표

| 도구 | R01 역할 | 설치 위치 우선 | No-Admin Mac 전략 |
|---|---|---|---|
| OrbStack | Primary Linux Runtime | macOS user app/allowed app | 공식 no-admin 지원, MDM 정책 확인 |
| VS Code | 기본 Editor | 사용자 실행 가능한 앱 위치 | Portable/User-space 우선 |
| Remote - SSH | VS Code Extension | VS Code 사용자 데이터 | 사용자 Extension 영역 |
| Git | 공통 개발도구 | Ubuntu | Host보다 Ubuntu Git 우선 |
| gh | GitHub CLI | Ubuntu | Ubuntu Bootstrap에서 관리 |
| Python | 미션별 Runtime | Ubuntu | APT + repo-local `.venv` |
| Node.js | 미션별 Runtime | Ubuntu | Mission 정책에 맞춰 설치 |
| Antigravity IDE | 대체 IDE | 로컬 App | 허용될 때만, 정책 우회 금지 |
| Codex CLI | 선택 AI CLI | Ubuntu 또는 사용자 영역 | official standalone 사용자 영역 우선 |
| Claude Code | 선택 AI CLI | Ubuntu | `sudo npm install -g` 금지, 사용자 소유 설치 우선 |
| Gemini CLI | 선택 AI CLI | Ubuntu | `npx` 무설치 실행 우선 검토 |
| Antigravity CLI | 선택 AI CLI | `~/.local/bin/agy` | **사용자 영역 우선 경로** |
| Docker | 선택 Training Layer | OrbStack/WSL2 | 기본 Mission Gate 아님 |

---

## 8. BEGINNER READY — 개발환경 판정

입문자 개발환경 문서는 다음을 만족해야 합니다.

```text
내 Host와 권한 상태를 판단할 수 있음
+ 필수/선택 도구를 구분할 수 있음
+ 관리자 권한 없이 가능한 경로를 알 수 있음
+ 설치 명령을 이해하고 실행할 수 있음
+ 설치 후 정상 여부를 스스로 확인할 수 있음
+ 실패 시 다음 대안을 알 수 있음
+ Repository/Terminal/Runtime 위치를 혼동하지 않음
+ AI CLI 사용 시 한 Worktree 한 실제 수정 Agent 원칙을 지킴
+ 현재 Mission으로 바로 이동할 수 있음
```

개발도구가 많이 설치되었다는 사실만으로 BEGINNER READY가 되지 않습니다.

---

## 9. 관련 기준

- [AI-CLI-TOOLSET-STANDARD.md](AI-CLI-TOOLSET-STANDARD.md) — Codex / Claude Code / Gemini / Antigravity CLI 상세 설치·인증·안전 기준
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령·코드 한 줄 해설
- [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md) — Runtime/환경 기준
- [../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md](../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md) — 입문자 개발환경 처음부터 따라하기
