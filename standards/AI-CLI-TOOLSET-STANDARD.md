# 주요 LLM/AI CLI 입문자 표준(AI CLI Toolset Standard)

Codyssey Basic에서 주요 LLM/AI 기반 CLI를 **입문자가 안전하게 설치·인증·검증하고, 같은 저장소(Repository)에서 충돌 없이 사용하는 기준**입니다.

대상 도구는 다음 네 가지를 기본 범위로 합니다.

```text
OpenAI Codex CLI
Anthropic Claude Code
Google Gemini CLI
Google Antigravity CLI (agy)
```

> 이 문서는 코디세이 공식 Mission/Evaluation을 대체하지 않습니다. AI CLI는 선택 개발도구이며, 실제 Mission 요구·실행 환경(Runtime)·검증(Verification)·증빙(Evidence)이 항상 우선합니다.
>
> 설치법과 인증 방식은 자주 바뀔 수 있으므로 이 문서는 **2026-08-18 공식 문서 기준**으로 작성합니다. 이후 수정 시 각 Provider의 공식 문서를 다시 확인합니다.

---

## 1. 가장 중요한 원칙

AI CLI를 많이 설치하는 것이 목표가 아닙니다.

R01에서는 다음 원칙을 사용합니다.

```text
현재 저장소(Repository) 확인
→ AI CLI 하나 선택
→ 사용자 영역 또는 Ubuntu 실행 환경(Runtime)에 설치
→ 공식 로그인
→ 읽기/분석부터 시작
→ 제안 변경 비교(Diff) 검토
→ 실제 테스트(Test) / 검증(Verification)
→ 증빙(Evidence)은 실제 결과만 사용
```

### 기본 안전 규칙

- 한 Repository Worktree에서 **여러 AI CLI가 동시에 파일을 수정하게 하지 않습니다.**
- 처음 실행할 때는 분석/계획 중심으로 시작합니다.
- Shell 명령 실행, 파일 삭제, Cloud 변경, Git reset/rebase 등 영향이 큰 작업은 사람이 먼저 검토합니다.
- `.env`, API Key, Token, Private Key, Password를 Prompt/README/Evidence에 붙여 넣지 않습니다.
- AI가 만든 코드라고 해서 PASS/CLEAR로 간주하지 않습니다. 실제 테스트와 Mission 검증(Verification)을 수행합니다.
- 현재 Repository가 깨끗한지 `git status --short`로 먼저 확인합니다.

---

## 2. Codyssey에서 어디에 설치할까?

기본 권장은 **실제 Repository가 있는 Ubuntu 실행 환경(Runtime) 안에서 CLI를 사용하는 것**입니다.

```text
macOS Host
└─ OrbStack Ubuntu 24.04
   └─ $HOME/codyssey/<repo>
      ├─ Codex CLI
      ├─ Claude Code
      ├─ Gemini CLI
      └─ Antigravity CLI
```

이렇게 하면 CLI가 보는 파일, Terminal, Git, Python 환경이 실제 Mission 실행 환경과 일치합니다.

공용 Mac에서 관리자 권한이 없어도 Host 보안정책을 우회하지 않습니다. 가능한 경우 사용자 영역 설치 또는 OrbStack Ubuntu 안의 사용자 환경을 사용합니다.

### 사용자 영역 우선 위치

```text
$HOME/.local/bin
$HOME/.npm-global 또는 사용자 소유 npm prefix
$HOME/.config
$HOME/codyssey
```

시스템 전역 `/usr/local`, `/Applications`, `/opt/homebrew`를 no-admin 기본 경로로 가정하지 않습니다.

---

## 3. 주요 CLI 한눈에 보기

| CLI | 실행 명령 | 주요 역할 | R01 권장 위치 | No-Admin 전략 |
|---|---|---|---|---|
| OpenAI Codex CLI | `codex` | 코드 분석·수정·실행 지원 | Ubuntu 또는 사용자 Mac/Linux | 공식 standalone installer의 사용자 영역 경로 우선 |
| Anthropic Claude Code | `claude` | 코드베이스 분석·수정·Agent 작업 | Ubuntu | `sudo npm install -g` 금지, 사용자 소유 설치 방식 우선 |
| Google Gemini CLI | `gemini` | Gemini 기반 Terminal Agent | Ubuntu | `npx` 무설치 실행 또는 사용자 소유 npm 환경 우선 |
| Google Antigravity CLI | `agy` | Antigravity Agent TUI/CLI | Ubuntu 또는 사용자 Mac/Linux | 공식 `~/.local/bin/agy` 경로 |

네 도구를 모두 동시에 설치할 필요는 없습니다.

---

# 4. OpenAI Codex CLI

## 4.1 무엇인가요?

OpenAI Codex CLI는 Terminal에서 Repository를 읽고, 코드 변경을 제안하거나 수행하고, 명령 실행을 지원하는 coding agent입니다.

R01에서는 **현재 Repository 이해 → 변경 제안 → 변경 비교(Diff) 검토 → 테스트(Test)** 순으로 사용합니다.

## 4.2 macOS/Linux 공식 standalone 설치

공식 Quickstart:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

현재 공식 installer source의 기본 설치 경로는 다음과 같습니다.

```text
실행 링크: $HOME/.local/bin/codex
관리 파일: $HOME/.codex/packages/standalone/...
```

따라서 Mac/Linux의 사용자 영역 설치 경로로 사용할 수 있습니다.

### 명령 해설

```text
curl
→ 공식 installer 내용을 내려받습니다.

-fsSL
→ HTTP 오류를 실패 처리하고, 불필요한 진행 출력은 줄이며, 오류는 보이고, Redirect를 따라갑니다.

https://chatgpt.com/codex/install.sh
→ OpenAI가 안내하는 Codex standalone installer입니다.

|
→ installer 내용을 오른쪽 Shell로 전달합니다.

sh
→ 내려받은 installer를 실행합니다.
```

### 설치 확인

```bash
command -v codex
codex --version
codex --help
```

```text
command -v codex
→ 현재 PATH에서 실제 실행되는 codex 위치를 확인합니다.

codex --version
→ 설치된 Codex CLI 버전을 확인합니다.

codex --help
→ CLI가 정상 실행되고 주요 명령 도움말이 보이는지 확인합니다.
```

## 4.3 인증

가장 단순한 R01 경로는:

```text
codex 실행
→ Sign in with ChatGPT 선택
→ 브라우저 인증 완료
→ Repository에서 사용
```

필요한 경우 공식 로그인 명령을 사용할 수 있습니다.

```bash
codex --login
```

API Key를 README나 Prompt에 직접 적는 방식을 기본 경로로 사용하지 않습니다.

## 4.4 npm 대안

Node/npm 환경을 이미 안정적으로 사용하고 있다면:

```bash
npm install -g @openai/codex
```

도 공식 설치 방식입니다.

다만 no-admin 환경에서는 npm global prefix가 사용자에게 쓰기 가능한지 먼저 확인합니다. `sudo npm install -g`로 Host 권한 문제를 억지로 해결하는 방식을 기본 경로로 사용하지 않습니다.

## 4.5 공식 Source

- https://github.com/openai/codex
- https://github.com/openai/codex/blob/main/README.md
- https://help.openai.com/en/articles/11381614-api-codex-cli-and-sign-in-with-chatgpt

---

# 5. Anthropic Claude Code

## 5.1 무엇인가요?

Claude Code는 Terminal에서 코드베이스를 탐색하고 파일을 수정하거나 명령을 실행할 수 있는 Anthropic의 agentic coding tool입니다.

## 5.2 공식 표준 설치

현재 공식 문서는 Node.js 18+ 환경에서 다음 설치를 안내합니다.

```bash
npm install -g @anthropic-ai/claude-code
```

그리고 **`sudo npm install -g`를 사용하지 말라**고 명시합니다.

### 설치 확인

```bash
command -v claude
claude --version
claude doctor
```

```text
command -v claude
→ 현재 실행되는 Claude Code 위치를 확인합니다.

claude --version
→ 설치 버전을 확인합니다.

claude doctor
→ 설치 유형과 환경 문제를 진단합니다.
```

## 5.3 no-admin 환경

공용 Mac의 Host에 억지로 global npm 설치를 하지 않습니다.

우선순위:

```text
1. OrbStack Ubuntu의 사용자 개발환경에서 설치
2. 사용자 소유 npm prefix 사용
3. 공식 native installer를 검토
4. 막히면 현재 허용된 다른 AI CLI 사용
```

공식 문서는 native installer도 제공합니다.

```bash
curl -fsSL claude.ai/install.sh | bash
```

다만 공식 문서에서 이 경로는 설치 방식이 변경될 수 있는 항목으로 설명되므로, 실제 사용 시 최신 Anthropic 문서를 다시 확인합니다.

## 5.4 실행과 인증

Repository root에서:

```bash
claude
```

첫 실행에서 Claude.ai/Anthropic Console 등 현재 제공되는 공식 인증 흐름을 선택합니다.

R01에서는 처음부터 권한 우회 옵션을 사용하지 않습니다. 특히 `--dangerously-skip-permissions`를 기본 실행 방식으로 사용하지 않습니다.

## 5.5 공식 Source

- https://docs.anthropic.com/en/docs/claude-code/getting-started
- https://docs.anthropic.com/en/docs/claude-code/cli-usage

---

# 6. Google Gemini CLI

## 6.1 무엇인가요?

Gemini CLI는 Gemini 모델을 Terminal에서 사용하여 코드 이해, 생성, 수정, 자동화 작업을 수행하는 Google의 CLI입니다.

현재 공식 권장 실행 환경(Runtime)은 Node.js 20+입니다.

## 6.2 no-admin에 특히 유용한 무설치 실행

영구 설치 없이 먼저 시험하려면:

```bash
npx @google/gemini-cli
```

이 방식은 package를 영구 global 설치하지 않고 실행할 수 있어 공용/제한 환경에서 우선 검토하기 좋습니다.

### 영구 설치

사용자에게 쓰기 가능한 npm global 환경이라면:

```bash
npm install -g @google/gemini-cli
```

설치 후:

```bash
command -v gemini
gemini --version
gemini
```

## 6.3 인증

`gemini`를 실행한 뒤 일반적인 개인 학습 경로에서는:

```text
How would you like to authenticate?
→ Sign in with Google
→ 브라우저에서 Google 계정 로그인
→ Terminal로 돌아오기
```

을 사용합니다.

API Key를 Repository에 저장하지 않습니다.

## 6.4 공식 Source

- https://github.com/google-gemini/gemini-cli
- https://github.com/google-gemini/gemini-cli/blob/main/docs/get-started/installation.mdx
- https://github.com/google-gemini/gemini-cli/blob/main/docs/get-started/index.md

---

# 7. Google Antigravity CLI

## 7.1 무엇인가요?

Antigravity CLI는 Google Antigravity Agent를 Terminal User Interface(TUI)에서 사용하는 CLI입니다.

## 7.2 공식 사용자 영역 설치

macOS/Linux:

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

공식 기본 위치:

```text
$HOME/.local/bin/agy
```

설치 확인:

```bash
command -v agy
agy --help
```

## 7.3 원격/SSH(Remote/SSH) 인증

로컬 환경에서는 브라우저 인증을 사용할 수 있습니다.

Remote/SSH Terminal에서는 CLI가 인증 URL을 표시하면:

```text
Ubuntu/SSH Terminal에서 agy 실행
→ 인증 URL 확인
→ Host Mac의 허용된 브라우저에서 URL 열기
→ 로그인
→ 받은 인증 코드를 Terminal에 입력
```

방식을 사용합니다.

## 7.4 공식 Source

- https://antigravity.google/docs/cli/install
- https://antigravity.google/docs/cli/getting-started

---

# 8. 공용 Mac에서의 추천 순서

Host Mac에 관리자 권한이 없는 경우 AI CLI는 다음 순서를 권장합니다.

```text
1. OrbStack Ubuntu에 Repository 배치
2. Ubuntu에서 필요한 Node/runtime 확인
3. 사용자 영역 설치가 명확한 CLI부터 사용
4. Host Mac에는 필수 앱만 둠
5. MDM/보안정책에 막히면 우회하지 않음
```

실용적인 우선순위 예:

```text
Codex CLI standalone       → ~/.local/bin/codex
Antigravity CLI            → ~/.local/bin/agy
Gemini CLI                 → npx로 먼저 실행 가능
Claude Code                → Ubuntu/user-owned npm 환경 우선
```

이 순위는 성능 순위가 아니라 **no-admin 설치와 운영 단순성**을 기준으로 한 것입니다.

---

# 9. 첫 실행 안전 절차

AI CLI를 실행하기 전에 Repository root에서:

```bash
pwd
git status --short
git branch --show-current
```

줄별 의미:

```text
pwd
→ AI CLI가 어느 Repository/Directory에서 작업하게 되는지 확인합니다.

git status --short
→ 시작 전에 이미 존재하는 변경사항이 있는지 확인합니다.

git branch --show-current
→ 현재 작업 Branch를 확인합니다.
```

첫 Prompt는 다음 원칙을 권장합니다.

```text
현재 Repository를 읽고 구조와 현재 상태만 설명하세요.
아직 파일을 수정하거나 명령을 실행하지 마세요.
```

그 다음:

```text
계획 확인
→ 변경 범위 확인
→ 한 작업만 요청
→ 변경 비교(Diff) 확인
→ 테스트(Test) / 검증(Verification)
→ Commit 여부 판단
```

으로 진행합니다.

---

# 10. 여러 AI CLI를 함께 쓸 때

주요 CLI를 모두 설치할 수는 있지만 **동시에 같은 Worktree를 수정시키지 않습니다.**

권장 역할 분담 예:

```text
주 수정 Agent(Primary Agent) 1개
→ 실제 수정 담당

보조 검토자(Secondary Reviewer) 1개
→ diff / 설계 / 오류 검토

사람
→ 최종 승인 / 실제 실행(Runtime) / 증빙(Evidence) 판단
```

예:

```text
Codex       = 구현
Claude Code = Review
Gemini CLI  = 대안 분석
Antigravity = Agent 실험
```

역할은 바꿔도 됩니다. 중요한 것은 **동일 파일 동시 수정 방지**입니다.

### 금지

```text
Codex가 수정 중인데 Claude Code도 같은 Worktree 수정
Gemini CLI가 reset/rebase 수행 중 Antigravity가 파일 변경
AI가 만든 결과를 검증 없이 바로 push
```

필요하다면 별도 Branch/Worktree를 만들어 격리합니다.

---

# 11. 설치 상태 검증(Verification)

사용하는 CLI만 확인합니다.

```bash
command -v codex || true
command -v claude || true
command -v gemini || true
command -v agy || true
```

설치된 도구는 개별 버전/도움말을 확인합니다.

```bash
codex --version
claude --version
gemini --version
agy --help
```

`command not found`이면 무조건 sudo부터 사용하지 않습니다.

```text
설치 여부 확인
→ PATH 확인
→ 사용자 설치 위치 확인
→ 실행 환경(Runtime)이 Host인지 Ubuntu인지 확인
→ 공식 설치 문서 확인
→ 최소 수정
→ 다시 검증
```

---

# 12. BEGINNER READY — AI CLI 판정

```text
[ ] 어떤 CLI를 왜 쓰는지 설명할 수 있다.
[ ] Host와 Ubuntu 중 어디에 설치했는지 안다.
[ ] no-admin 환경에서 시스템 권한을 우회하지 않았다.
[ ] 실제 executable 위치를 command -v로 확인했다.
[ ] 공식 계정 인증을 완료했다.
[ ] Secret을 Repository/Prompt/Evidence에 기록하지 않았다.
[ ] 작업 전 git status와 Branch를 확인한다.
[ ] 한 Worktree에서 한 AI CLI만 실제 수정을 담당한다.
[ ] AI 변경 후 변경 비교(Diff)와 테스트(Test)를 확인한다.
[ ] Mission 검증(Verification)/증빙(Evidence)을 AI 출력으로 대신하지 않는다.
```

---

## 관련 기준

- [DEVELOPMENT-TOOLSET-STANDARD.md](DEVELOPMENT-TOOLSET-STANDARD.md) — 전체 개발 Tool Set 분류
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령 한 줄 해설
- [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md) — 실행 환경(Runtime)/환경 기준
- [../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md](../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md) — 입문자 환경 처음부터 따라하기
