# Codyssey Basic Training System — 코디세이 기초 훈련 시스템

Codyssey Basic 기초과정의 전체 미션을 관리하고, **입문자가 개발환경 준비 → 미션 수행 → 검증(Verification) → 증빙(Evidence) → 완료(CLEAR)**까지 따라갈 수 있도록 만든 통합 저장소(Control Tower)입니다.

> **2026-09-03 Mission ID(미션 번호)가 재편되었습니다.**
> 현재 번호의 단일 기준은 [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)입니다.
> Mission Repository(미션 저장소)는 번호가 아닌 **주제 기반 Stable Identity(안정 식별자)**를 사용하므로 Repository 이름은 다시 변경하지 않습니다.

---

<a id="quick-start"></a>
## 🚀 빠른 시작(Quick Start)

### 현재 상태

```text
현재 Round      : R01 — CLEAR
현재 Phase      : Phase C — RUNTIME CLEAR / FAST EXECUTE
현재 Workcell   : B4-1 🟡 ACTIVE
B2-2 Git 협업   : ⏸ PAUSED / TEAM WORK IN PROGRESS
Runtime CLEAR   : 0 / 15
```

현재 B4-1 미션:

**B4-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**

- [B4-1 Repository](https://github.com/MetaStudy999/codyssey-basic-system-monitor)
- [▶ B4-1 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)
- [현재 진행 상태(PROGRESS)](PROGRESS.md)
- [현재 Mission ID 기준표](CURRENT-MISSION-MAP.md)

> B2-2는 사용자가 실제 팀과 별도로 진행 중이므로 이 Control Tower 작업에서는 일시 보류합니다. 이미 확보한 B2-2 MAC-V Host/CORE 준비 이력은 보존하며, 재개 시 현재 상태를 다시 검증한 뒤 이어서 수행합니다.

### 개발환경이 아직 준비되지 않은 경우

1. [START-HERE-DEVELOPMENT-ENVIRONMENT.md](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)에서 Mac/Windows 환경을 준비합니다.
2. Ubuntu 24.04에서 Control Tower를 준비합니다.
3. [PROGRESS.md](PROGRESS.md)와 [NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md)를 확인합니다.
4. 현재 Workcell의 `BEGINNER-GUIDE.md`를 위에서 아래로 수행합니다.

### Ubuntu 24.04 환경이 이미 준비된 경우

```bash
cd "$HOME/codyssey/codyssey-basic"
pwd
git status --short
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

정상 기준:

```text
[ ] pwd가 /home/<user>/codyssey/codyssey-basic 계열
[ ] 예상하지 않은 Git 변경 없음
[ ] Bootstrap required 항목 PASS
[ ] Git/GitHub 사용자 상태 확인
```

---

<a id="toc"></a>
## 📖 목차

1. [빠른 시작](#quick-start)
2. [현재 Mission ID 기준](#mission-numbering)
3. [전체 미션 지도](#mission-map)
4. [FAST TRACK 실행 순서](#fast-track)
5. [현재 진행 상태](#progress)
6. [실행환경](#runtime)
7. [핵심 문서](#documents)
8. [작업 운영 룰](#working-rules)
9. [문서·훈련 기준](#standards)

---

<a id="mission-numbering"></a>
## 🧭 현재 Mission ID 기준

Mission ID는 교육과정 개편에 따라 변경될 수 있는 **Metadata(메타데이터, 관리정보)**입니다.

Repository는 미션의 주제로 유지합니다.

```text
Mission ID
   ↓ 가변
Stable Topic
   ↓ 고정
Canonical Repository
```

예:

```text
웹 포트폴리오
이전 ID : B4-1
현재 ID : B1-1
Repository: codyssey-basic-web-portfolio
```

따라서 이후 Mission ID가 다시 변경되어도 Repository를 새로 만들거나 Rename하지 않습니다.

- [현재 Mission ID 전체 기준표](CURRENT-MISSION-MAP.md)
- [Repository Naming Standard](standards/REPOSITORY-NAMING-STANDARD.md)
- [Repository Migration Plan](REPOSITORY-MIGRATION-PLAN.md)

---

<a id="mission-map"></a>
# 전체 미션 지도

기초과정은 **필수 미션 10개 + 선택 미션 3개 + Term Project 2개(필수 1, 선택 1)**, 총 15개 Mission/Project로 관리합니다.

| 현재 ID | 미션 | 구분 | Repository |
|---|---|---|---|
| **B1-1** | 나를 소개하는 웹페이지 처음부터 만들기 | 필수 | [`codyssey-basic-web-portfolio`](https://github.com/MetaStudy999/codyssey-basic-web-portfolio) |
| **B1-2** | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | 선택 | [`codyssey-basic-react-spa`](https://github.com/MetaStudy999/codyssey-basic-react-spa) |
| **B2-1** | 나만의 용돈 기입장 프로그램 만들기 | 필수 | [`codyssey-basic-budget-tracker`](https://github.com/MetaStudy999/codyssey-basic-budget-tracker) |
| **B2-2** | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | 필수 | [`codyssey-basic-git-collaboration`](https://github.com/MetaStudy999/codyssey-basic-git-collaboration) |
| **B3-1** | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | 필수 | [`codyssey-basic-cloud-infrastructure`](https://github.com/MetaStudy999/codyssey-basic-cloud-infrastructure) |
| **B3-2** | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | 필수 | [`codyssey-basic-ai-git-assistant`](https://github.com/MetaStudy999/codyssey-basic-ai-git-assistant) |
| **B4-1** | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | 필수 | [`codyssey-basic-system-monitor`](https://github.com/MetaStudy999/codyssey-basic-system-monitor) |
| **B4-2** | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | 필수 | [`codyssey-basic-system-troubleshooting`](https://github.com/MetaStudy999/codyssey-basic-system-troubleshooting) |
| **B5-1** | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | 필수 | [`codyssey-basic-mini-redis`](https://github.com/MetaStudy999/codyssey-basic-mini-redis) |
| **B5-2** | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | 필수 | [`codyssey-basic-mini-git`](https://github.com/MetaStudy999/codyssey-basic-mini-git) |
| **B6-1** | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | 필수 | [`codyssey-basic-sql-database`](https://github.com/MetaStudy999/codyssey-basic-sql-database) |
| **B6-2** | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | 선택 | [`codyssey-basic-fastapi-crud`](https://github.com/MetaStudy999/codyssey-basic-fastapi-crud) |
| **B6-3** | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | 선택 | [`codyssey-basic-fastapi-auth`](https://github.com/MetaStudy999/codyssey-basic-fastapi-auth) |
| **B7-1** | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | 필수 Term Project | [`codyssey-basic-ai-chatbot`](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot) |
| **B7-2** | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | 선택 Term Project | [`codyssey-basic-ai-chatbot-fullstack`](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot-fullstack) |

상세 색인과 이전 ID 비교:

- [MISSION-INDEX.md](MISSION-INDEX.md)
- [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)

---

<a id="fast-track"></a>
## ⚡ FAST TRACK 실행 순서

Mission ID가 변경되어도 기존 R01의 **미션 주제 기준 실행 순서**와 수행 상태는 유지합니다.

```text
Stage 1 — 필수 완료(REQUIRED CLEAR)
B4-1 → B4-2 → B2-1 → B2-2 → B5-1 → B5-2
→ B1-1 → B6-1 → B3-1 → B3-2 → B7-1

Stage 2 — 선택 완료(OPTIONAL CLEAR)
B1-2 → B6-2 → B6-3 → B7-2
```

이 순서는 **현재 번호의 숫자 순서가 아니라 R01 내부 실행 전략**입니다.

번호 변경 전 B1-1이었던 시스템 관제 미션은 현재 **B4-1**로 이어지고, 기존 수행 상태도 B4-1에 연결합니다.

B2-2의 일시 보류는 FAST TRACK의 순서를 변경하거나 B2-2를 CLEAR 처리한다는 뜻이 아닙니다. B2-2는 팀 진행 상황을 유지한 채 후속 검증 시점에 재개합니다.

---

<a id="progress"></a>
## 📊 현재 진행 상태

현재 상태의 단일 요약 기준:

- [PROGRESS.md](PROGRESS.md)
- [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

상태 정의:

```text
NOT STARTED = 실제 수행 미시작
ACTIVE      = 현재 Workcell
PAUSED      = 일시정지 / 재개 가능
BLOCKED     = 외부 의존성으로 진행 불가
CLEAR       = 공식 요구 + Runtime + Verification + Evidence 완료
```

문서나 Reference가 존재한다는 이유만으로 `CLEAR`로 올리지 않습니다.

---

<a id="runtime"></a>
## 💻 실행환경(Runtime Environment)

R01의 지원 Linux 실행환경:

```text
MAC-V
학교 macOS
└─ OrbStack
   └─ Ubuntu 24.04

WIN-V
Windows 11 Pro
└─ WSL2
   └─ Ubuntu 24.04
```

운영 원칙:

```text
MAC-V = Resettable / CHECK BEFORE INSTALL
WIN-V = Persistent / VERIFY BEFORE REINSTALL
MAC-V / WIN-V = 동일 Mission/Evaluation/CLEAR 기준
Docker = 선택 학습(Optional Training)
```

상세:

- [START-HERE-DEVELOPMENT-ENVIRONMENT.md](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)
- [RUNTIME-PROFILES.md](environments/RUNTIME-PROFILES.md)
- [RUNTIME-EXECUTION-MATRIX.md](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)
- [MISSION-LAB-MATRIX.md](environments/MISSION-LAB-MATRIX.md)
- [DOCKER-POLICY.md](environments/DOCKER-POLICY.md)

---

<a id="documents"></a>
## 📌 핵심 문서

처음에는 다음 순서로 확인합니다.

1. [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md) — 현재 Mission ID 기준
2. [PROGRESS.md](PROGRESS.md) — 현재 진행 상태
3. [NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md) — 지금 해야 할 일
4. [MISSION-INDEX.md](MISSION-INDEX.md) — 전체 미션 색인
5. [MISSION-RUNBOOK.md](MISSION-RUNBOOK.md) — 실행 Runbook
6. [START-HERE-DEVELOPMENT-ENVIRONMENT.md](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md) — 개발환경
7. [WORKING-RULES.md](WORKING-RULES.md) — 작업 운영 룰

현재 Workcell B4-1:

- [B4-1 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)
- [B4-1 Repository](https://github.com/MetaStudy999/codyssey-basic-system-monitor)

보류 중 B2-2:

- [B2-2 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)
- [B2-2 Repository](https://github.com/MetaStudy999/codyssey-basic-git-collaboration)

---

<a id="working-rules"></a>
## 🧭 작업 운영 룰(Working Rules)

메인 레포와 Mission Repository의 공통 작업 규칙은 다음 흐름으로 관리합니다.

```text
README.md
→ CURRENT-MISSION-MAP.md
→ WORKING-RULES.md
→ standards/CODYSSEY-WORKING-OPERATING-STANDARD.md
→ Mission 공식 Source
→ BEGINNER-GUIDE / CHECKLIST
→ Runtime → Verification → Evidence
→ Evaluation → CLEAR
```

핵심 원칙:

- 공식 Mission PDF/MD/Evaluation/제공 파일이 최우선 기준입니다.
- Mission ID 변경은 기존 수행 이력을 초기화하지 않습니다.
- Repository 주소는 주제 기반 Canonical Repository를 사용합니다.
- Secret, Token, Password, Private Key를 Repository/Chat/Evidence에 남기지 않습니다.
- 현재 CLEAR를 막지 않는 대규모 리팩터링은 후속 개선으로 분리합니다.
- 실제 실행하지 않은 항목은 PASS/CLEAR로 표시하지 않습니다.

---

<a id="standards"></a>
## 📚 문서·훈련 기준

주요 Standards(표준):

1. [CODYSSEY-WORKING-OPERATING-STANDARD.md](standards/CODYSSEY-WORKING-OPERATING-STANDARD.md) — 전체 작업 운영 기준
2. [REPOSITORY-NAMING-STANDARD.md](standards/REPOSITORY-NAMING-STANDARD.md) — 번호와 Repository 분리 기준
3. [BEGINNER-TRAINING-STANDARD.md](standards/BEGINNER-TRAINING-STANDARD.md) — 입문자 훈련 기준
4. [DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](standards/DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md) — 목차·Quick Start 기준
5. [README-INFORMATION-ARCHITECTURE-STANDARD.md](standards/README-INFORMATION-ARCHITECTURE-STANDARD.md) — README 구조 기준
6. [COMMAND-CODE-EXPLANATION-STANDARD.md](standards/COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령어·코드 해설 기준
7. [DEVELOPMENT-TOOLSET-STANDARD.md](standards/DEVELOPMENT-TOOLSET-STANDARD.md) — 개발 Tool Set 기준
8. [TERMINOLOGY-STANDARD.md](standards/TERMINOLOGY-STANDARD.md) — 한글·영어 용어 표기 기준
9. [CANONICAL-REFERENCE-STANDARD.md](standards/CANONICAL-REFERENCE-STANDARD.md) — Reference/Verification/Evidence 기준
10. [ENVIRONMENT-STANDARD.md](standards/ENVIRONMENT-STANDARD.md) — 실행환경 기준

전체 Registry:

- [standards/README.md](standards/README.md)

---

## 보존 원칙(Preservation Policy)

과거 Commit/PR/Issue에 기록된 이전 Mission ID는 당시의 역사적 기록이므로 강제로 수정하지 않습니다.

현재 `main`에서는 **현재 Mission ID + 주제 기반 Repository + 현재 Runtime 상태**를 기준으로 운영합니다.
