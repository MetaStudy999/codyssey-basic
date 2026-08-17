# Codyssey Basic Training System — 코디세이 기초 훈련 시스템

Codyssey Basic 기초과정의 전체 미션을 관리하고, **입문자가 첫 환경 확인부터 실제 미션 실행·검증·완료까지 순서대로 따라갈 수 있도록 만든 통합 저장소(Control Tower)**입니다.

> 처음 방문했다면 운영 용어를 모두 이해하려고 하지 않아도 됩니다. **환경 확인 → 현재 미션 확인 → 입문자 가이드 따라하기** 순서만 먼저 진행하면 됩니다.

> 이 저장소의 입문자 문서는 핵심 용어를 **한글 의미(English Original)** 형식으로 함께 표기합니다. 자세한 기준은 [한글·영어 용어 표기 표준(Terminology Standard)](standards/TERMINOLOGY-STANDARD.md)을 참고합니다.

---

## 👋 처음 오셨나요?

현재 첫 실행 미션(Current Active Mission)은 **B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**입니다.

처음에는 아래 흐름만 기억하면 됩니다.

```text
1. Ubuntu 개발환경 확인
        ↓
2. 현재 해야 할 미션 확인
        ↓
3. B1-1 입문자 가이드(Beginner Guide)를 STEP 01부터 따라하기
        ↓
4. 실제 실행(Runtime Execution)
        ↓
5. 결과 검증(Verify)
        ↓
6. 증빙 자료 정리(Evidence)
        ↓
7. ✅ 미션 완료(CLEAR)
```

### 1단계 — Ubuntu 개발환경 확인

통합 저장소(Control Tower)가 Ubuntu의 `$HOME/codyssey/codyssey-basic`에 있다고 가정합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
```

이 명령은 **개발환경 초기 준비(Bootstrap)** 상태를 확인합니다.

정상이라면 마지막에 다음과 같은 결과를 확인합니다.

```text
[PASS] required Ubuntu developer bootstrap is ready
```

누락된 필수 도구가 있을 때만 설치합니다.

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

권장 생산성 도구(Recommended Productivity Tools)인 `vim`, `tree`, `ripgrep`, `fd-find`는 선택이며 미션 시작을 막지 않습니다.

환경 상세: [Ubuntu 개발환경 안내(Ubuntu Developer Bootstrap)](environments/ubuntu/README.md)

### 2단계 — 지금 해야 할 일 확인

현재 해야 할 작업은 아래 문서 하나에서 시작합니다.

👉 [NEXT-ACTIONS.md — 다음 작업 안내](training/round-01-clear/NEXT-ACTIONS.md)

### 3단계 — B1-1 시작

현재 미션(Active Mission):

**B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**

- [B1-1 저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor)
- [B1-1 BEGINNER-GUIDE.md — 입문자 따라하기 가이드](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)

입문자는 `BEGINNER-GUIDE.md`를 **STEP 01부터 위에서 아래로 순서대로** 따라갑니다.

---

## 🧭 지금 내 위치

```text
Codyssey Basic
└─ R01 — 완료 훈련 차수(CLEAR Round)
   └─ 실제 실행 단계(Runtime Phase)
      └─ 필수 미션(Required Mission) 진행
         └─ B1-1 🟡 현재 미션(Active)
```

쉽게 말하면:

```text
준비와 전체 점검은 끝남
→ 이제 B1-1부터 실제 실행(Runtime)
→ 결과 검증(Verify)
→ 증빙 자료(Evidence)
→ 미션 완료(CLEAR)
→ 다음 미션
```

처음에는 `R01`, `Phase C`, `FAST TRACK`, `Runtime Profile` 같은 운영 용어를 외울 필요가 없습니다. 실제 수행하면서 필요한 시점에 아래의 상세 설명을 참고하면 됩니다.

---

## 💻 처음 사용할 실행환경(Runtime Environment)

가장 단순하게는 아래만 이해하면 됩니다.

```text
기본 환경(Primary Environment)
macOS
└─ OrbStack
   └─ Ubuntu 24.04
      └─ VS Code Remote SSH
         └─ 미션 실행(Mission Runtime)
```

Windows에서는 다음 환경을 사용할 수 있습니다.

```text
Windows 11 Pro
└─ WSL2
   └─ Ubuntu 24.04
```

Docker는 **선택 학습(Optional Training)**입니다. Docker를 하지 않았다는 이유만으로 기본 미션을 실패 처리하지 않습니다.

상세 환경 기준은 [환경 시스템(Environment System)](environments/README.md)을 참고합니다.

---

## 📌 입문자가 처음에 볼 문서 3개

1. [environments/ubuntu/README.md](environments/ubuntu/README.md) — Ubuntu 개발환경 초기 준비(Bootstrap)
2. [training/round-01-clear/NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md) — 다음 작업 안내(Next Actions)
3. [B1-1 BEGINNER-GUIDE.md](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md) — 첫 미션 입문자 따라하기(Beginner Guide)

이 세 문서를 먼저 보고, 나머지 운영 문서는 필요할 때 참고하면 됩니다.

### 자주 보는 파일 이름을 쉽게 읽는 법

```text
NEXT-ACTIONS.md          = 다음 작업 안내(Next Actions)
PHASE-C-PREFLIGHT.md     = 실행 전 사전 점검(Preflight)
BEGINNER-GUIDE.md        = 입문자 따라하기 가이드(Beginner Guide)
START-CHECK.md           = 시작 점검(Start Check)
ENVIRONMENT-CLOSEOUT.md  = 공통환경 마무리 점검(Environment Closeout)
```

---

# Control Tower 상세 정보 — 통합 운영 정보

아래부터는 전체 진행률, 운영 모델, 실행 순서, 환경 정책을 관리하기 위한 상세 영역입니다.

## 현재 상태(Current Status)

- 현재 훈련 차수(Active Round): **R01 — CLEAR**
- 현재 단계(Current Phase): **Phase C — 실제 실행 및 완료(RUNTIME CLEAR)**
- 운영 모드(Execution Mode): **FAST EXECUTE — 빠른 실행 방식**
- 실행 경로(Execution Path): **FAST TRACK — 빠른 실행 경로, 필수 11개 → 선택 4개**
- 실행 환경 프로필(Runtime Profile): **MAC-V / WIN-V / MAC-D / WIN-D**
- Docker 정책(Docker Policy): **선택 훈련 계층(Optional Training Layer) — 기본 CLEAR Gate 아님**
- 현재 미션(Active Mission): **B1-1 🟡 ACTIVE**
- 기준 구현 준비(Reference Build): **15 / 15 CORE READY**
- 기준 일관성 점검(Canonical Audit): **15 / 15 PASS**
- 미션 간 교차 점검(Cross-Mission Audit): **COMPLETE / BLOCKER 0**
- 실제 미션 완료(Runtime CLEAR): **0 / 15**
- FAST TRACK Stage 1 — 필수(Required): **0 / 11 CLEAR**
- FAST TRACK Stage 2 — 선택(Optional): **0 / 4 CLEAR**
- 핵심 원칙(Core Principle): **Mission First · Beginner First · One Runtime at a Time — 미션 우선 · 입문자 우선 · 한 번에 한 실행환경**

> 현재는 설계를 계속 확장하는 단계가 아니라, 이미 준비된 기준 경로를 실제로 실행하여 **실행(Runtime) → 검증(Verify) → 증빙(Evidence) → 완료(CLEAR)**로 전환하는 단계입니다.

### 상세 운영 문서

1. [PROGRESS.md](PROGRESS.md) — 현재 위치와 전체 진행률(Progress)
2. [docs/R01-OPERATING-MODEL.md](docs/R01-OPERATING-MODEL.md) — R01 운영 모델(Operating Model)
3. [training/round-01-clear/NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md) — 다음 작업 안내(Next Actions)
4. [training/round-01-clear/PHASE-C-PREFLIGHT.md](training/round-01-clear/PHASE-C-PREFLIGHT.md) — 실행 전 사전 점검(Preflight)
5. [training/round-01-clear/PHASE-C-RUNBOOK.md](training/round-01-clear/PHASE-C-RUNBOOK.md) — 실제 실행 절차서(Runtime Runbook)
6. [MISSION-INDEX.md](MISSION-INDEX.md) — 전체 미션 색인(Mission Index)
7. [environments/RUNTIME-PROFILES.md](environments/RUNTIME-PROFILES.md) — 실행 환경 프로필(Runtime Profiles)
8. [environments/DOCKER-POLICY.md](environments/DOCKER-POLICY.md) — Docker 정책(Docker Policy)
9. [environments/MISSION-LAB-MATRIX.md](environments/MISSION-LAB-MATRIX.md) — 미션별 실습 환경표(Mission Lab Matrix)
10. [training/round-01-clear/MISSION-DEPENDENCY-MAP.md](training/round-01-clear/MISSION-DEPENDENCY-MAP.md) — 미션 선후관계 지도(Mission Dependency Map)
11. [standards/TERMINOLOGY-STANDARD.md](standards/TERMINOLOGY-STANDARD.md) — 한글·영어 용어 표기 표준(Terminology Standard)

## R01 운영 단계 한눈에 보기

> **Phase A / Phase B / Phase C는 코디세이 공식 교육과정의 공식 단계명이 아니라, 이 저장소에서 R01을 일관되게 운영하기 위해 사용하는 내부 실행 단계입니다.** 공식 미션/평가(Mission/Evaluation)가 항상 최우선 기준입니다.

```text
R01 — CLEAR
│
├─ Phase A — 기준 구현 준비(REFERENCE BUILD)
│  └─ 기준 구현·가이드 준비
│
├─ Phase B — 미션 간 교차 점검(CROSS-MISSION AUDIT)
│  └─ 15개 미션 전체 충돌·일관성 점검
│
└─ Phase C — 실제 실행 및 완료(RUNTIME CLEAR)   ← 현재
   └─ 실제 실행(Runtime) → 검증(Verify) → 증빙(Evidence) → 완료(CLEAR)
```

가장 쉽게 기억하면 `Phase A = 준비`, `Phase B = 전체 점검`, `Phase C = 실제 실행해서 통과`입니다. 상세 정의는 [`docs/R01-OPERATING-MODEL.md`](docs/R01-OPERATING-MODEL.md)를 사용합니다.

현재 위치:

```text
R01 — CLEAR
└─ Phase C — 실제 실행 및 완료(RUNTIME CLEAR)
   └─ 빠른 실행 경로(FAST TRACK)
      └─ Stage 1 — 필수(Required)
         └─ B1-1 🟡 현재 미션(Active)
```

## 빠른 실행 방식(FAST EXECUTE)과 빠른 실행 경로(FAST TRACK)

- **빠른 실행 방식(FAST EXECUTE):** 한 미션 안에서 불필요한 재설계를 줄이고 `실행(Runtime) → 검증(Verify) → 증빙(Evidence) → 완료(CLEAR)`에 집중하는 실행 방식
- **빠른 실행 경로(FAST TRACK):** R01에서 **필수 미션(Required Mission) 11개를 먼저 모두 CLEAR한 뒤 선택 미션(Optional Mission) 4개를 수행**하는 미션 순서

```text
Stage 1 — 필수 미션 완료(REQUIRED CLEAR)
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — 선택 미션 완료(OPTIONAL CLEAR)
B4-2 → B5-2 → B5-3 → B7-2
```

**FAST TRACK은 미션을 생략하거나 B7-2로 바로 건너가는 경로가 아닙니다.** 필수 11개를 먼저 완료해 핵심 과정을 빠르게 닫고, 이후 선택 4개를 연속 수행하여 R01 전체 15개를 CLEAR합니다.

## R01 실행환경(Runtime Environment)

현재 R01은 두 Host 계열만 사용합니다.

```text
macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine     ← 기본 실행환경(Primary)
└─ MAC-D: Docker                         ← 선택 실습(Optional Lab)

Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct runtime   ← 권장 보조환경(Secondary)
└─ WIN-D: Docker                         ← 선택 실습(Optional Lab)
```

현재는 Ubuntu Native Host, 별도 Hyper-V VM, VMware, KVM/QEMU, Proxmox, Kubernetes를 R01 표준 범위에 추가하지 않습니다. R01 전체 CLEAR 이후 이식성/고도화(Portability/Advanced) 단계에서 확장합니다.

### 기본/보조/Docker 정책(Primary / Secondary / Docker Policy)

```text
기본 미션 실행환경(Primary Mission Runtime) = 필수
보조 플랫폼 확인(Secondary Platform Check) = 권장
Docker 실습(Docker Lab) = 선택
```

- 기본 로컬 실행환경(Primary)은 `MAC-V`입니다.
- Windows 이식성(Portability)은 `WIN-V`에서 핵심 기능만 확인합니다.
- Docker는 `MAC-D`/`WIN-D`에서 필요하거나 학습 가치가 높을 때만 수행합니다.
- Docker 미수행 자체는 Mission `FAIL`, `BLOCKED`, `CLEAR 불가`의 근거가 아닙니다.
- 공식 Mission/Evaluation이 Docker를 명시적으로 요구하는 경우에는 공식 요구가 최우선입니다.
- GitHub/AWS/실제 배포/실제 AI Provider의 증빙 자료(Evidence)는 local Linux/Docker Lab이 대체하지 않습니다.

같은 미션을 네 환경에서 처음부터 끝까지 반복하지 않습니다.

```text
기본 실행환경(Primary Runtime)
→ 공식 미션 실제 실행(Mission Runtime)
→ 검증(Verify)
→ 증빙 자료(Evidence)
→ ✅ 완료(CLEAR)

보조 플랫폼 확인(Secondary Platform Check, 권장)
→ 핵심 기능 1~3개
→ 환경 차이 기록

Docker 실습(Docker Lab, 선택)
→ 컨테이너화/재현성(containerization/reproducibility) 학습이 필요할 때만 수행
→ 아니면 건너뜀(SKIP) / 후속 Docker Track
```

## 설계 단계와 빠른 실행 단계

| 구분 | 설계 단계(Design) | 빠른 실행 단계(Fast Execution) |
|---|---|---|
| 핵심 질문 | 어떻게 해야 제대로 수행할 수 있는가? | 지금 무엇을 하면 가장 빨리 CLEAR할 수 있는가? |
| 목표 | 기준·구조·절차 준비 | 실제 Runtime 결과 확보 |
| 중심 작업 | 요구 분석, 기준 구현(Reference), 가이드(Guide), 실행 절차서(Runbook), 점검(Audit) | 실행, 오류 수정, 검증(Verify), 증빙(Evidence), 완료(CLEAR) |
| 완료 의미 | 실행할 준비가 됨 | 실제 검증되어 미션이 끝남 |
| 변경 범위 | 비교적 넓게 검토 | 현재 CLEAR를 막는 문제만 최소 수정 |
| 개선 아이디어 | 설계에 반영 가능 | 현재 CLEAR와 무관하면 후속 개선 후보로 미룸 |

R01의 Phase A/B에서 설계·기준화 작업을 완료했으므로, Phase C에서는 **실행을 우선하고 설계 보정은 필요한 만큼만 수행**합니다.

```text
설계(DESIGN)
공식 Mission / Evaluation
→ 기준 구현(Reference Build)
→ Guide / Verify / Evidence 설계

준비 완료(READY)
기준 일관성 점검(Canonical Audit)
→ 미션 간 교차 점검(Cross-Mission Audit)
→ 실행 절차서/사전 점검 동결(Runbook / Preflight Freeze)

실행(EXECUTE)  ← 현재 위치
시작 점검(START-CHECK)
→ 실제 실행(Runtime)
→ 수정(Fix)
→ 검증(Verify)
→ 증빙(Evidence)
→ 완료(CLEAR)

검토/고도화(REVIEW / ADVANCED)
R01 완료 후 고도화
```

### Phase C — 설계 동결 및 필요 시 최소 설계(Design Freeze / Just-in-Time Design)

```text
이 문제가 현재 미션의 CLEAR를 막는가?

YES
→ 필요한 범위만 최소 수정
→ 재검증
→ 증빙 자료(Evidence)
→ 계속 실행

NO
→ 현재 Runtime을 중단하지 않음
→ 후속 개선 후보로 기록
→ 계속 실행
```

운영 비중은 **실행 80~90% / 설계 보정 10~20%**를 지향합니다. 이는 고정 시간 할당이 아니라 설계 루프로 되돌아가지 않기 위한 운영 원칙입니다.

즉시 설계 수정 대상:
- 공식 Mission/Evaluation 충족을 막는 오류
- 실행 차단 문제(Runtime Blocker)
- 비밀정보(Secret)/보안 문제
- 데이터 손실·Cloud 비용·SSH lockout 등 안전 문제
- 검증/증빙(Verify/Evidence) 오판정

현재 CLEAR와 직접 관계없는 리팩터링, UI 고도화, 구조 확장, Docker 추가 실습, 미래 Round 기능은 현재 Runtime을 멈추는 이유로 사용하지 않습니다.

## 저장소 역할(Repository Role)

이 저장소는 전체 미션 목록, 필수/선택 구분, 훈련 차수, 수행 기준, 진행률과 심화 진입 기준을 관리합니다. 실제 코드·환경설정·테스트·증빙은 각 미션 저장소(Repository)의 현재 Round 폴더에서 관리합니다.

## 미션 목록 및 저장소

> 각 미션은 **3행(미션 / 과정 / 저장소)**으로 묶어 표시합니다. 가로로 긴 표보다 한 미션의 정보를 위에서 아래로 읽기 쉽게 하기 위한 입문자 우선(Beginner First) 형식입니다.  
> `미션 제목`은 각 미션의 공식 `*-mission.md` 첫 제목을 원문 그대로 사용합니다.  
> `필수 선행`은 공식 요구상 결과물이 직접 필요한 경우만 게이트(Gate)로 둡니다.  
> `권장 선행`은 학습 가속 경로이며 공식 필수 조건이 아닙니다.  
> `실행 순번`은 빠른 실행 경로(FAST TRACK)를 따르며 **필수 11개를 먼저 완료하고 선택 4개를 이후에 수행**합니다.

| 미션 | 항목 | 내용 |
|---|---|---|
| **B1-1** | 미션 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **1**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 저장소(Repository) | [codyssey-basic-b1-1-system-monitor](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) |
| **B1-2** | 미션 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 |
|  | 과정 | **필수(Required)** · 실행 순번 **2**<br>필수 선행 없음 · 권장 선행 **B1-1** |
|  | 저장소(Repository) | [codyssey-basic-b1-2-linux-troubleshooting](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) |
| **B2-1** | 미션 | 나만의 용돈 기입장 프로그램 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **3**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 저장소(Repository) | [codyssey-basic-b2-1-budget-tracker](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) |
| **B2-2** | 미션 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 |
|  | 과정 | **필수(Required)** · 실행 순번 **4**<br>필수 선행 없음 · 권장 선행 **B2-1** |
|  | 저장소(Repository) | [codyssey-basic-b2-2-git-team-collaboration](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) |
| **B3-1** | 미션 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **5**<br>필수 선행 없음 · 권장 선행 **B2-1** |
|  | 저장소(Repository) | [codyssey-basic-b3-1-fast-data-store](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) |
| **B3-2** | 미션 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **6**<br>필수 선행 없음 · 권장 선행 **B3-1, B2-2** |
|  | 저장소(Repository) | [codyssey-basic-b3-2-file-change-tracker](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) |
| **B4-1** | 미션 | 나를 소개하는 웹페이지 처음부터 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **7**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 저장소(Repository) | [codyssey-basic-b4-1-portfolio](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) |
| **B4-2** | 미션 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 |
|  | 과정 | **선택(Optional)** · 실행 순번 **12**<br>필수 선행 없음 · 권장 선행 **B4-1** |
|  | 저장소(Repository) | [codyssey-basic-b4-2-interactive-web-app](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) |
| **B5-1** | 미션 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **8**<br>필수 선행 없음 · 권장 선행 없음 |
|  | 저장소(Repository) | [codyssey-basic-b5-1-database-design](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) |
| **B5-2** | 미션 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 |
|  | 과정 | **선택(Optional)** · 실행 순번 **13**<br>필수 선행 없음 · 권장 선행 **B5-1, B4-1** |
|  | 저장소(Repository) | [codyssey-basic-b5-2-fastapi-crud-app](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) |
| **B5-3** | 미션 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 |
|  | 과정 | **선택(Optional)** · 실행 순번 **14**<br>필수 선행 없음 · 권장 선행 **B5-2, B5-1** |
|  | 저장소(Repository) | [codyssey-basic-b5-3-fastapi-auth-service](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) |
| **B6-1** | 미션 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 |
|  | 과정 | **필수(Required)** · 실행 순번 **9**<br>필수 선행 없음 · 권장 선행 **B4-1** |
|  | 저장소(Repository) | [codyssey-basic-b6-1-cloud-deployment](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) |
| **B6-2** | 미션 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 |
|  | 과정 | **필수(Required)** · 실행 순번 **10**<br>필수 선행 없음 · 권장 선행 **B2-2** |
|  | 저장소(Repository) | [codyssey-basic-b6-2-ai-code-summarizer](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) |
| **B7-1** | 미션 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 |
|  | 과정 | **필수 텀프로젝트(Required Term Project)** · 실행 순번 **11**<br>필수 선행 없음 · 권장 선행 **B2-2, B4-1, B5-1, B6-1, B6-2** |
|  | 저장소(Repository) | [codyssey-basic-b7-1-web-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) |
| **B7-2** | 미션 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 |
|  | 과정 | **선택 텀프로젝트/고도화(Optional Term Project / Advanced)** · 실행 순번 **15**<br>필수 선행 **B7-1** · 권장 선행 **B4-2, B5-2, B5-3, B6-1** |
|  | 저장소(Repository) | [codyssey-basic-b7-2-advanced-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) |

### 선행 관계(Dependency)를 읽는 방법

`필수 선행`은 **의존성 게이트(Dependency Gate)**입니다. 현재 R01에서는 B7-2가 Project A의 AI 챗봇을 기반으로 고도화하도록 요구하므로 B7-1만 필수 선행으로 둡니다.

`권장 선행`은 학습 가속 경로입니다. 미션 자체를 반드시 CLEAR할 필요는 없으며 핵심 개념을 이미 알고 있다면 학습상 준비가 된 것으로 볼 수 있습니다.

FAST TRACK의 실제 실행 순서(Runtime Order)는 Dependency와 별도로 고정합니다. Stage 1에서는 필수 11개를 먼저 CLEAR하고 Stage 2에서 선택 4개를 진행합니다.

선행 관계가 있는 미션 저장소에는 `training/round-01-clear/START-CHECK.md`를 두어 미션 완료 여부가 아니라 실제 보유 지식을 먼저 점검합니다.

```text
시작 점검(START-CHECK)
→ 필수 선행 확인
→ 권장 선행/선행 지식 자가진단
→ 부족한 개념만 보충
→ 입문자 가이드(BEGINNER-GUIDE)
→ 실행(Runtime) / 검증(Verify) / 증빙(Evidence)
```

상세 관계는 [`training/round-01-clear/MISSION-DEPENDENCY-MAP.md`](training/round-01-clear/MISSION-DEPENDENCY-MAP.md)에서 관리합니다.

## Phase C 실행 순서(Execution Flow)

```text
README
→ 진행 현황(PROGRESS)
→ 운영 모델(R01-OPERATING-MODEL)
→ 다음 작업(NEXT-ACTIONS)
→ 실행 전 점검(PHASE-C-PREFLIGHT)
→ 현재 미션 시작 점검(START-CHECK, 있는 경우)
→ 기본 실행환경(Primary Runtime) 확인
→ 입문자 가이드(BEGINNER-GUIDE)
→ 실제 실행(Runtime)
→ 검증(Verify)
→ 증빙(Evidence)
→ 완료(CLEAR)
→ 빠른 실행 경로(FAST TRACK)의 다음 미션
```

보조 플랫폼 확인(Secondary Platform Check)과 Docker 실습(Docker Lab)은 CLEAR 이후 필요에 따라 수행하며 FAST TRACK 진행을 막지 않습니다.

## 현재 실행 규칙(Current Execution Rules)

- 공식 Mission PDF/MD/Evaluation/제공 파일이 최우선 기준입니다.
- `Phase A/B/C`는 이 저장소의 내부 운영 단계이며 코디세이 공식 과정 단계로 해석하지 않습니다.
- Phase A/B에서 준비한 기준 구현/절차서(Reference/Runbook)를 기본 경로로 사용하며 Phase C에서 임의 재설계를 반복하지 않습니다.
- FAST TRACK은 **Stage 1 필수 11개 → Stage 2 선택 4개** 순서를 유지합니다.
- R01 환경은 `MAC-V`, `WIN-V`, `MAC-D`, `WIN-D` 네 실행환경 프로필(Runtime Profile)로 제한합니다.
- `MAC-V`를 기본 로컬 실행환경(Primary), `WIN-V`를 권장 보조환경(Secondary)으로 사용합니다.
- Docker Lab은 선택이며 CLEAR를 위한 기본 추가 Gate로 만들지 않습니다.
- `START-CHECK.md`가 있는 미션은 먼저 선행 지식 상태를 확인합니다.
- 사용자는 `BEGINNER-GUIDE.md`를 Step 1부터 따라 실제 Runtime을 수행합니다.
- 실행 중 차단 문제(Blocker)가 생기면 **원인 → 최소 수정 → 재검증 → 계속 실행** 순서로 처리합니다.
- 실제 실행·검증·필요 Evidence가 끝나기 전에는 CLEAR로 표시하지 않습니다.
- 미래 Round 폴더는 미리 만들지 않습니다.
- 새로 작성하거나 수정하는 입문자 문서는 [한글·영어 용어 표기 표준(Terminology Standard)](standards/TERMINOLOGY-STANDARD.md)을 따릅니다.

## 보존 원칙(Preservation Policy)

기존 대시보드/Growth OS 작업은 `archive/pre-clean-restart-20260816` 브랜치에 보존되어 있습니다. 현재 `main`은 R01 FAST TRACK에 따라 필수 미션을 먼저 실제 CLEAR하고 이후 선택 미션을 완료하기 위한 실행 기준으로 운영합니다.