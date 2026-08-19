# Codyssey Basic Training System — 코디세이 기초 훈련 시스템

Codyssey Basic 기초과정의 전체 미션을 관리하고, **입문자가 첫 환경 확인부터 실제 미션 실행·검증·증빙·완료까지 순서대로 따라갈 수 있도록 만든 통합 저장소(Control Tower)**입니다.

> 처음 방문했다면 운영 용어를 모두 이해하려고 하지 않아도 됩니다. **환경 확인 → 지금 할 일 확인 → 현재 미션의 입문자 가이드 따라하기** 순서만 먼저 진행하면 됩니다.

> 핵심 기술·운영 용어는 가능한 경우 **한글 의미(English Original)**로 함께 표기합니다.

> 메인 레포와 각 Mission Repository에서 공통으로 사용하는 작업 운영 규칙은 [WORKING-RULES.md](WORKING-RULES.md)에서 시작합니다. 공통 규칙의 단일 기준은 [CODYSSEY-WORKING-OPERATING-STANDARD.md](standards/CODYSSEY-WORKING-OPERATING-STANDARD.md)입니다.

---

<a id="quick-start"></a>
## 🚀 빠른 시작(Quick Start)

처음 시작하는 분과 이미 환경을 준비한 분의 경로를 나눕니다.

### 처음 개발환경을 만드는 경우

1. [START-HERE-DEVELOPMENT-ENVIRONMENT.md](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)에서 Mac/Windows 환경을 준비합니다.
2. 개발환경 최종 검증(Verification)이 끝나면 [NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md)에서 현재 작업을 확인합니다.
3. 현재 미션(Active Mission)인 [B1-1 입문자 따라하기](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)를 STEP 01부터 진행합니다.

### Ubuntu 24.04 환경과 Control Tower가 이미 준비된 경우

먼저 현재 실행 환경(Current Runtime Context)을 정합니다.

```text
학교 Mac → MAC-V
노트북 Win11 → WIN-V
```

📍 **선택한 Ubuntu Bash / `$HOME/codyssey/codyssey-basic`에서 실행**합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
pwd
git status --short
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

정상 기준:

```text
[ ] pwd가 /home/<user>/codyssey/codyssey-basic 계열이다.
[ ] 예상하지 않은 Git 변경이 없다.
[ ] Bootstrap required 항목이 PASS다.
[ ] Git/GitHub 사용자 상태를 확인했다.
```

```text
✅ GO
→ NEXT-ACTIONS.md 확인
→ 현재 미션 입문자 가이드(Beginner Guide) 시작

❌ STOP
→ 환경/경로/Git/Bootstrap 문제부터 해결
→ 실패 상태에서 Mission 설정을 계속 진행하지 않음
```

`pwd`, `git status --short`, `bootstrap.sh --check`, `verify-user-identity.sh`는 **🟢 SAFE TO RERUN**입니다.

> 빠른 시작(Quick Start)은 상세 환경 가이드나 Mission Guide를 대체하지 않습니다. SSH/UFW/Cloud/DB처럼 상태를 크게 바꾸는 작업은 반드시 해당 상세 문서의 실행 전 점검(Preflight)과 복구(Recovery) 절차를 따릅니다.

---

<a id="toc"></a>
## 📖 목차

1. [빠른 시작(Quick Start)](#quick-start)
2. [처음 시작하기](#part-1)
3. [지금 내 위치](#current-position)
4. [개발환경](#runtime-environment)
5. [처음 볼 문서 3개](#first-three-docs)
6. [전체 미션 지도](#part-2)
7. [현재 진행 상태](#current-progress)
8. [상세 운영 정보](#part-3)
9. [작업 운영 룰](#working-rules)
10. [문서·훈련 기준](#standards)

---

<a id="part-1"></a>
# 1부 — 처음 시작하는 분

## 👋 처음 오셨나요?

현재 첫 실행 미션(Current Active Mission)은 **B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**입니다.

처음에는 아래 흐름만 기억하면 됩니다.

```text
1. 개발환경 확인/준비
        ↓
2. 현재 실행 환경(MAC-V 또는 WIN-V) 선택
        ↓
3. 지금 해야 할 일 확인
        ↓
4. B1-1 입문자 가이드(Beginner Guide)를 STEP 01부터 따라하기
        ↓
5. 실제 실행(Runtime Execution)
        ↓
6. 결과 검증(Verification)
        ↓
7. 증빙 자료 정리(Evidence)
        ↓
8. 플랫폼별 Runtime Record 갱신
        ↓
9. ✅ 미션 완료(CLEAR)
```

## 1단계 — 개발환경 확인

**개발환경이 아직 준비되지 않았거나, 공용 Mac에서 관리자 권한 없이 시작해야 한다면 먼저 다음 문서를 따라갑니다.**

👉 [START-HERE-DEVELOPMENT-ENVIRONMENT.md — 입문자 개발환경 처음부터 따라하기](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)

이미 Control Tower가 Ubuntu의 `$HOME/codyssey/codyssey-basic`에 준비되어 있다면 다음 확인부터 시작합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
```

이 명령은 **개발환경 초기 준비(Bootstrap)** 상태를 확인합니다.

정상이라면 마지막에 다음 결과가 표시됩니다.

```text
[PASS] required Ubuntu developer bootstrap is ready
```

필수 도구가 누락된 경우에만 설치합니다.

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

`vim`, `tree`, `ripgrep`, `fd-find` 같은 권장 생산성 도구(Recommended Productivity Tools)는 선택이며 미션 시작을 막지 않습니다.

환경 상세: [환경 시스템(Environment System)](environments/README.md)

## 2단계 — 지금 해야 할 일 확인

현재 해야 할 작업은 다음 문서에서 시작합니다.

👉 [NEXT-ACTIONS.md — 다음 작업 안내](training/round-01-clear/NEXT-ACTIONS.md)

## 3단계 — B1-1 시작

현재 미션(Active Mission):

**B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**

- [B1-1 저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor)
- [B1-1 BEGINNER-GUIDE.md — 입문자 따라하기 가이드](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)

입문자는 `BEGINNER-GUIDE.md`를 **STEP 01부터 위에서 아래로 순서대로** 따라갑니다.

---

<a id="current-position"></a>
## 🧭 지금 내 위치

```text
Codyssey Basic
└─ R01 — 완료 훈련 차수(CLEAR Round)
   └─ 실제 실행 단계(Runtime Phase)
      └─ 필수 경로(Required Path)
         └─ B1-1 🟡 현재 미션(Active)
```

쉽게 말하면:

```text
준비와 전체 점검
→ 현재 Runtime Context 선택
→ B1-1부터 실제 실행(Runtime)
→ 결과 검증(Verification)
→ 증빙 자료(Evidence)
→ 플랫폼별 수행 기록
→ 미션 완료(CLEAR)
→ 다음 미션
```

`R01`, `Phase C`, `FAST TRACK`, `실행 환경 프로필(Runtime Profile)` 같은 운영 용어는 처음부터 외울 필요가 없습니다. 실제 수행 중 필요할 때 3부의 상세 운영 정보를 확인합니다.

[목차로 돌아가기](#toc)

---

<a id="runtime-environment"></a>
## 💻 처음 사용할 실행환경(Runtime Environment)

R01의 직접 Linux 실행은 다음 두 환경을 **동등한 지원 실행 환경(Supported Runtime)**으로 사용합니다.

### MAC-V — 학교 Mac

```text
학교 macOS
└─ OrbStack
   └─ Ubuntu 24.04
      └─ VS Code Remote SSH
         └─ 미션 실행(Mission Runtime)
```

환경 특성:

```text
Resettable / Ephemeral
→ CHECK BEFORE INSTALL
→ 환경이 살아 있으면 재설치 생략
→ Reset되었으면 필요한 항목만 재구성
```

### WIN-V — 개인 노트북

```text
Windows 11 Pro
└─ WSL2
   └─ Ubuntu 24.04
      └─ 미션 실행(Mission Runtime)
```

환경 특성:

```text
Persistent
→ VERIFY BEFORE REINSTALL
→ 기존 환경 보존
→ 문제 있을 때만 최소 Repair
```

`MAC-V`와 `WIN-V`는 합격 기준의 Primary/Secondary 관계가 아닙니다. 공식 Mission/Evaluation, 검증(Verification), 증빙(Evidence), Mission CLEAR 기준은 동일합니다.

각 환경에서 실제로 수행한 기록은 별도로 남깁니다.

```text
MAC-V Runtime Record
WIN-V Runtime Record
Mission CLEAR
CROSS-PLATFORM VERIFIED
```

플랫폼별 중앙 수행 현황: [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

Docker는 **선택 학습(Optional Training)**입니다. 공식 Mission/Evaluation에서 Docker를 요구하지 않는 한 Docker 미수행 자체를 기본 미션 실패 사유로 사용하지 않습니다.

### 공용 Mac / 관리자 권한 없음

공용·관리형 Mac에서는 관리자 암호나 MDM/보안정책을 우회하지 않습니다. 가능한 경우 **사용자 영역 설치 + OrbStack Ubuntu 실행 환경(Runtime)**을 우선하고, Host Mac에 개발 패키지를 대량 설치하지 않습니다.

```text
OrbStack Ubuntu
→ VS Code 사용자/Portable 경로
→ Git/Python/Node 등은 Ubuntu 안에서 관리
→ 필요하면 Antigravity CLI ~/.local/bin/agy 사용
```

대체 개발환경으로 Cursor, Windsurf, JetBrains, **Google Antigravity IDE**를 사용할 수 있지만 R01 기본 문서는 VS Code를 기준으로 합니다. IDE가 바뀌어도 Repository/Terminal/Git/Python은 Ubuntu 실행 환경(Runtime)을 기준으로 유지합니다.

- [입문자 개발환경 처음부터 따라하기](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)
- [실행 환경 프로필(Runtime Profiles)](environments/RUNTIME-PROFILES.md)
- [개발 Tool Set / no-admin 기준](standards/DEVELOPMENT-TOOLSET-STANDARD.md)
- [환경 시스템(Environment System)](environments/README.md)

[목차로 돌아가기](#toc)

---

<a id="first-three-docs"></a>
## 📌 입문자가 처음에 볼 문서 3개

처음에는 아래 세 문서만 보면 됩니다.

1. [START-HERE-DEVELOPMENT-ENVIRONMENT.md](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md) — **개발환경·개발도구 처음부터 따라하기**
2. [training/round-01-clear/NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md) — 다음 작업 안내(Next Actions)
3. [B1-1 BEGINNER-GUIDE.md](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) — 첫 미션 입문자 따라하기(Beginner Guide)

나머지 문서는 필요할 때 확인합니다. 운영 규칙을 확인하거나 수정할 때는 [WORKING-RULES.md](WORKING-RULES.md)에서 시작합니다.

### 자주 보는 파일 이름

```text
START-HERE-DEVELOPMENT-ENVIRONMENT.md = 개발환경 처음부터 따라하기
NEXT-ACTIONS.md          = 다음 작업 안내(Next Actions)
WORKING-RULES.md         = 메인/미션 공통 작업 룰 진입점(Entry Point)
RUNTIME-EXECUTION-MATRIX.md = MAC-V/WIN-V 플랫폼별 실제 수행 기록
PHASE-C-PREFLIGHT.md     = 실행 전 사전 점검(Preflight)
BEGINNER-GUIDE.md        = 입문자 따라하기 가이드(Beginner Guide)
START-CHECK.md           = 시작 점검(Start Check)
ENVIRONMENT-CLOSEOUT.md  = 공통환경 마무리 점검(Environment Closeout)
```

[목차로 돌아가기](#toc)

---

<a id="part-2"></a>
# 2부 — 전체 미션 지도

기초과정은 **필수 미션 10개 + 선택 미션 3개 + Term Project 2개(필수 1, 선택 1)**로 구성됩니다. 따라서 이 통합 저장소에서는 총 15개 Mission/Project 저장소를 관리합니다.

빠른 실행 경로(FAST TRACK)는 다음처럼 운영합니다.

```text
Stage 1 — 필수 경로 11개
필수 미션 10개 + 필수 Term Project B7-1

Stage 2 — 선택 경로 4개
선택 미션 3개 + 선택 Term Project B7-2
```

> `필수 선행`은 공식 요구상 선행 결과물이 직접 필요한 경우이고, `권장 선행`은 학습을 쉽게 하기 위한 권장 경로입니다.

## 미션 목록 및 바로 시작

각 미션은 **3행(미션 / 과정 / 시작)**으로 표시합니다. `시작` 행에서 저장소와 **▶ 입문자 따라하기(Beginner Guide)**로 바로 이동할 수 있습니다.

```text
미션 제목 확인
→ 과정/선행 확인
→ ▶ 입문자 따라하기
→ 실제 수행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ 플랫폼별 수행 기록
→ 완료(CLEAR)
```

| 미션 | 항목 | 내용 |
|---|---|---|
| **B1-1** | 미션 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **1**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B1-2** | 미션 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 |
|  | 과정 | **필수(Required)** · 실행 순번 **2**<br>필수 선행 없음 · 권장 선행 **B1-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B2-1** | 미션 | 나만의 용돈 기입장 프로그램 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **3**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B2-2** | 미션 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 |
|  | 과정 | **필수(Required)** · 실행 순번 **4**<br>필수 선행 없음 · 권장 선행 **B2-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B3-1** | 미션 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **5**<br>필수 선행 없음 · 권장 선행 **B2-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B3-2** | 미션 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **6**<br>필수 선행 없음 · 권장 선행 **B3-1, B2-2** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B4-1** | 미션 | 나를 소개하는 웹페이지 처음부터 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **7**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B4-2** | 미션 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 |
|  | 과정 | **선택(Optional)** · 실행 순번 **12**<br>필수 선행 없음 · 권장 선행 **B4-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B5-1** | 미션 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **8**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B5-2** | 미션 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 |
|  | 과정 | **선택(Optional)** · 실행 순번 **13**<br>필수 선행 없음 · 권장 선행 **B5-1, B4-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B5-3** | 미션 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 |
|  | 과정 | **선택(Optional)** · 실행 순번 **14**<br>필수 선행 없음 · 권장 선행 **B5-2, B5-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B6-1** | 미션 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 |
|  | 과정 | **필수(Required)** · 실행 순번 **9**<br>필수 선행 없음 · 권장 선행 **B4-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B6-2** | 미션 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **10**<br>필수 선행 없음 · 권장 선행 **B2-2** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B7-1** | 미션 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 |
|  | 과정 | **필수 텀프로젝트(Required Term Project)** · 실행 순번 **11**<br>필수 선행 없음 · 권장 선행 **B2-2, B4-1, B5-1, B6-1, B6-2** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |
| **B7-2** | 미션 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 |
|  | 과정 | **선택 텀프로젝트/고도화(Optional Term Project / Advanced)** · 실행 순번 **15**<br>필수 선행 **B7-1** · 권장 선행 **B4-2, B5-2, B5-3, B6-1** |
|  | 시작 | [저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) · [▶ 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) |

> 15개 `BEGINNER-GUIDE.md`는 모두 존재하지만, **가이드 존재 = BEGINNER READY 또는 Mission CLEAR**를 뜻하지 않습니다. 현재 상태·환경·공식 요구와의 정합성은 [Beginner Documentation Audit](standards/BEGINNER-DOCUMENTATION-AUDIT.md)에서 실제 실행 순서에 맞춰 관리합니다.

### 선행 관계(Dependency) 읽는 법

```text
필수 선행(Required Dependency)
= 공식 요구상 선행 결과물이 직접 필요

권장 선행(Recommended Prerequisite)
= 학습을 쉽게 만드는 권장 경로
```

상세 관계: [MISSION-DEPENDENCY-MAP.md](training/round-01-clear/MISSION-DEPENDENCY-MAP.md)

[목차로 돌아가기](#toc)

---

<a id="current-progress"></a>
## 📊 현재 진행 상태

현재 실행의 핵심은 **한 번에 한 미션**입니다.

```text
현재 미션 B1-1
→ Current Runtime Context 선택
→ 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ 플랫폼별 Runtime Record
→ 완료(CLEAR)
→ 다음 미션
```

세부 진행률과 상태는 중복해서 관리하지 않고 다음 문서를 우선 확인합니다.

- [PROGRESS.md — 현재 진행 상태](PROGRESS.md)
- [RUNTIME-EXECUTION-MATRIX.md — MAC-V/WIN-V 실제 수행 기록](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)
- [NEXT-ACTIONS.md — 다음 작업](training/round-01-clear/NEXT-ACTIONS.md)
- [WORKING-RULES.md — 작업 운영 룰 진입점](WORKING-RULES.md)
- [MISSION-INDEX.md — 전체 미션 색인](MISSION-INDEX.md)
- [BEGINNER-DOCUMENTATION-AUDIT.md — 입문자 문서 품질 감사](standards/BEGINNER-DOCUMENTATION-AUDIT.md)

[목차로 돌아가기](#toc)

---

<a id="part-3"></a>
# 3부 — 상세 운영 정보

아래 내용은 **미션을 시작하기 전에 전부 외울 필요가 없습니다.** 운영 원리나 환경 차이가 궁금할 때 확인합니다.

<details>
<summary><strong>R01 / Phase / FAST TRACK 자세히 보기</strong></summary>

### R01 운영 단계

`Phase A / Phase B / Phase C`는 코디세이 공식 교육 단계명이 아니라 이 저장소의 내부 실행 단계입니다.

```text
Phase A — 기준 구현 준비(Reference Build)
        ↓
Phase B — 미션 간 교차 점검(Cross-Mission Audit)
        ↓
Phase C — 실제 실행 및 완료(Runtime CLEAR)
```

쉽게 기억하면:

```text
준비
→ 전체 점검
→ 실제 실행해서 통과
```

상세: [R01-OPERATING-MODEL.md](docs/R01-OPERATING-MODEL.md)

### 빠른 실행 방식(FAST EXECUTE)

한 미션 안에서 불필요한 재설계를 줄이고 다음 흐름에 집중합니다.

```text
실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ 플랫폼별 수행 기록
→ 완료(CLEAR)
```

### 빠른 실행 경로(FAST TRACK)

```text
Stage 1 — 필수 경로
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — 선택 경로
B4-2 → B5-2 → B5-3 → B7-2
```

FAST TRACK은 미션을 생략하는 경로가 아니라 **필수 경로를 먼저 닫고 선택 경로를 이어서 수행하는 운영 순서**입니다.

</details>

<details>
<summary><strong>실행환경 프로필(Runtime Profiles) 자세히 보기</strong></summary>

```text
학교 macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine      ← 지원 실행환경(Supported Runtime)
└─ MAC-D: Docker                          ← 선택 실습(Optional Lab)

개인 노트북 Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct runtime    ← 지원 실행환경(Supported Runtime)
└─ WIN-D: Docker                          ← 선택 실습(Optional Lab)
```

원칙:

```text
MAC-V / WIN-V = 동일 Mission/Evaluation/CLEAR 기준
Current Runtime Context = 작업 시작 시 사용자 지정
MAC-V = Resettable / CHECK BEFORE INSTALL
WIN-V = Persistent / VERIFY BEFORE REINSTALL
CROSS-PLATFORM VERIFIED = 두 환경 실제 PASS 시 추가 품질 상태
Docker Lab = 선택
```

공식 Mission이 두 플랫폼을 모두 요구하지 않는 한, 한 지원 환경에서 공식 요구를 충족한 Mission CLEAR를 다른 환경 미수행만으로 자동 차단하지 않습니다.

상세:

- [START-HERE-DEVELOPMENT-ENVIRONMENT.md](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)
- [RUNTIME-PROFILES.md](environments/RUNTIME-PROFILES.md)
- [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)
- [DOCKER-POLICY.md](environments/DOCKER-POLICY.md)
- [MISSION-LAB-MATRIX.md](environments/MISSION-LAB-MATRIX.md)

</details>

<details>
<summary><strong>설계 동결과 실행 우선 원칙 자세히 보기</strong></summary>

현재 미션의 `CLEAR`를 막는 문제라면 필요한 범위만 수정합니다.

```text
현재 CLEAR를 막는가?

YES
→ 최소 수정
→ 재검증
→ 계속 실행

NO
→ 후속 개선 후보로 기록
→ 현재 실행 계속
```

즉시 수정 대상:

- 공식 Mission/Evaluation 충족을 막는 오류
- 실행 차단 문제(Runtime Blocker)
- Secret/보안 문제
- 데이터 손실·Cloud 비용·SSH lockout 등 안전 문제
- 검증/증빙 오판정

현재 CLEAR와 직접 관계없는 대규모 리팩터링, 미래 기능, 추가 Docker 실습은 현재 미션을 멈추는 이유로 사용하지 않습니다.

</details>

### 상세 운영 문서

- [WORKING-RULES.md](WORKING-RULES.md) — 메인 작업 운영 룰 진입점
- [standards/CODYSSEY-WORKING-OPERATING-STANDARD.md](standards/CODYSSEY-WORKING-OPERATING-STANDARD.md) — 메인/전체 Mission 공통 상위 작업 운영 표준
- [PROGRESS.md](PROGRESS.md) — 현재 진행 상태
- [training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md) — MAC-V/WIN-V 실제 수행 기록
- [docs/R01-OPERATING-MODEL.md](docs/R01-OPERATING-MODEL.md) — R01 운영 모델
- [training/round-01-clear/PHASE-C-PREFLIGHT.md](training/round-01-clear/PHASE-C-PREFLIGHT.md) — 실행 전 점검
- [training/round-01-clear/PHASE-C-RUNBOOK.md](training/round-01-clear/PHASE-C-RUNBOOK.md) — 실제 실행 절차
- [MISSION-INDEX.md](MISSION-INDEX.md) — 전체 미션 색인
- [environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md) — 입문자 개발환경 처음부터 따라하기
- [environments/README.md](environments/README.md) — 환경 시스템

[목차로 돌아가기](#toc)

---

<a id="working-rules"></a>
## 🧭 작업 운영 룰(Working Rules)

메인 레포와 모든 Mission Repository의 공통 작업 운영 규칙은 다음 경로로 관리합니다.

```text
README.md
→ WORKING-RULES.md
→ standards/CODYSSEY-WORKING-OPERATING-STANDARD.md
→ 필요한 세부 Standard
→ 각 Mission의 WORKING-RULES.md
→ Mission 공식 Source
→ BEGINNER-GUIDE / CHECKLIST
→ Current Runtime Context
→ Runtime → Verification → Evidence
→ 플랫폼별 Runtime Record
→ Evaluation → CLEAR
```

- [WORKING-RULES.md](WORKING-RULES.md) — Control Tower 작업 룰 진입점(Entry Point)
- [CODYSSEY-WORKING-OPERATING-STANDARD.md](standards/CODYSSEY-WORKING-OPERATING-STANDARD.md) — 전체 Mission이 공유하는 상위 작업 운영 계약(Operating Contract)
- [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md) — MAC-V/WIN-V 플랫폼별 실제 수행 기록
- [Standards Registry](standards/README.md) — 세부 표준의 전체 색인

공통 규칙 전문은 메인 상위 표준에서 한 번만 관리하고, 각 Mission의 `WORKING-RULES.md`에는 **해당 미션의 공식 요구·예외·실행 문서 연결만** 둡니다. 공식 Mission/Evaluation/제공 파일은 항상 내부 작업 룰보다 우선합니다.

이 작업 룰을 수정하거나 새 미션에 적용한 경우에도 문서 변경만으로 실제 실행(Runtime Execution), 검증(Verification), 증빙 자료(Evidence), 플랫폼 PASS, 완료(CLEAR) 상태를 올리지 않습니다.

[목차로 돌아가기](#toc)

---

<a id="standards"></a>
## 📚 문서·훈련 기준

공통 작업 룰과 세부 문서 기준은 아래 순서로 확인합니다.

1. [WORKING-RULES.md](WORKING-RULES.md) — 메인 작업 룰 진입점
2. [CODYSSEY-WORKING-OPERATING-STANDARD.md](standards/CODYSSEY-WORKING-OPERATING-STANDARD.md) — 메인/각 Mission 공통 상위 운영 표준
3. [standards/README.md](standards/README.md) — 전체 세부 기준 Registry
4. [BEGINNER-TRAINING-STANDARD.md](standards/BEGINNER-TRAINING-STANDARD.md) — 입문자 훈련·문서 생성 표준
5. [DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](standards/DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md) — 목차·Quick Start·빠른 진입 표준
6. [README-INFORMATION-ARCHITECTURE-STANDARD.md](standards/README-INFORMATION-ARCHITECTURE-STANDARD.md) — README 정보 구조 표준
7. [BEGINNER-DOCUMENTATION-AUDIT.md](standards/BEGINNER-DOCUMENTATION-AUDIT.md) — 15개 미션 입문자 문서 품질 감사
8. [COMMAND-CODE-EXPLANATION-STANDARD.md](standards/COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령어·코드 한 줄 해설 표준
9. [DEVELOPMENT-TOOLSET-STANDARD.md](standards/DEVELOPMENT-TOOLSET-STANDARD.md) — 개발 Tool Set·대체 IDE·공용 Mac no-admin 표준
10. [TERMINOLOGY-STANDARD.md](standards/TERMINOLOGY-STANDARD.md) — 한글·영어 용어 표기 표준
11. [CANONICAL-REFERENCE-STANDARD.md](standards/CANONICAL-REFERENCE-STANDARD.md) — Reference/Guide/검증(Verification)/증빙(Evidence) 기준
12. [ENVIRONMENT-STANDARD.md](standards/ENVIRONMENT-STANDARD.md) — 환경 기준

### README 생성 핵심 원칙

```text
저장소 목적
→ Quick Start 또는 대표 시작 링크
→ 클릭 가능한 목차
→ 지금 할 일
→ 첫 명령과 정상 결과
→ 현재 미션과 Beginner Guide
→ 전체 미션 지도
→ 현재 진행 상태
→ 필요할 때만 상세 운영 정보
```

긴 README는 **Quick Start + 목차 + 3부 구조 + Progressive Disclosure(필요한 만큼만 먼저 보여주기)**를 우선합니다.

### 현재 실행 규칙

- 공식 Mission PDF/MD/Evaluation/제공 파일이 최우선 기준입니다.
- 메인/미션 공통 작업 룰은 `WORKING-RULES.md` → `CODYSSEY-WORKING-OPERATING-STANDARD.md` 순서로 확인합니다.
- `MAC-V`와 `WIN-V`는 동등한 지원 실행 환경이며 작업 시점의 Current Runtime Context를 사용합니다.
- 학교 Mac은 `CHECK BEFORE INSTALL`, Windows 노트북은 `VERIFY BEFORE REINSTALL` 원칙을 사용합니다.
- 실제 실행·검증·필요 Evidence가 끝나기 전에는 해당 플랫폼 PASS나 CLEAR로 표시하지 않습니다.
- MAC-V와 WIN-V가 모두 실제 PASS하면 내부 품질 상태로 `CROSS-PLATFORM VERIFIED`를 기록할 수 있습니다.
- Secret, Token, Password, Private Key를 Repository/Chat/Evidence에 남기지 않습니다.
- 사용자는 현재 Mission의 `BEGINNER-GUIDE.md`를 위에서 아래로 따라 실제 Runtime을 수행합니다.
- 메인 README의 각 미션 `시작` 행은 Repository와 `▶ 입문자 따라하기`를 직접 연결합니다.
- 입문자 문서는 한글+영어 병기와 Self-contained First 원칙을 따릅니다.
- 개발환경/Tool 문서는 관리자 권한 필요 여부와 no-admin 대안을 함께 설명합니다.
- 가이드가 존재한다는 이유만으로 `BEGINNER READY`로 판정하지 않습니다. 상태/환경 정합성은 Beginner Documentation Audit에서 확인합니다.
- 문서 개선만을 이유로 실제 Runtime을 불필요하게 중단하지 않습니다.
- 기준 반영은 `정책(POLICY) → 적용(APPLY) → 검증(VERIFY)`로 확인하며, 실제 대상 문서 재확인 전에는 완료로 표현하지 않습니다.

## 보존 원칙(Preservation Policy)

기존 대시보드/Growth OS 작업은 보존 브랜치와 Git history에 남깁니다. 현재 `main`은 입문자가 현재 미션을 쉽게 찾고 실제 실행·검증·증빙·완료로 이어갈 수 있는 실행 기준으로 운영합니다.

[목차로 돌아가기](#toc)
