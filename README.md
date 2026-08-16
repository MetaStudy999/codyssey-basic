# Codyssey Basic Training System

Codyssey Basic 전체 훈련을 관리하는 통합(Control Tower) 저장소입니다.

## 현재 상태

- Active Round: **R01 — CLEAR**
- 현재 단계: **Phase C — RUNTIME CLEAR**
- 운영 모드: **FAST EXECUTE**
- 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**
- Active Mission: **B1-1 🟡 ACTIVE**
- Phase A Reference Build: **15 / 15 CORE READY**
- Canonical Audit: **15 / 15 PASS**
- Cross-Mission Audit: **COMPLETE / BLOCKER 0**
- Runtime `✅ CLEAR`: **0 / 15**
- FAST TRACK Stage 1 — Required: **0 / 11 CLEAR**
- FAST TRACK Stage 2 — Optional: **0 / 4 CLEAR**
- 핵심 원칙: **Mission First · Beginner First · One Runtime at a Time**

> 현재는 설계를 계속 확장하는 단계가 아니라, 이미 준비된 기준 경로를 실제로 실행하여 `Runtime → Verify → Evidence → CLEAR`로 전환하는 단계입니다.

### 지금 바로 볼 문서

1. [PROGRESS.md](PROGRESS.md) — 현재 위치와 전체 진행률
2. [training/round-01-clear/NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md) — 지금 해야 할 일
3. [training/round-01-clear/PHASE-C-PREFLIGHT.md](training/round-01-clear/PHASE-C-PREFLIGHT.md) — 실행 전 안전 점검
4. [training/round-01-clear/PHASE-C-RUNBOOK.md](training/round-01-clear/PHASE-C-RUNBOOK.md) — 15개 실제 Runtime 경로
5. [MISSION-INDEX.md](MISSION-INDEX.md) — FAST TRACK 전체 순서
6. [training/round-01-clear/MISSION-DEPENDENCY-MAP.md](training/round-01-clear/MISSION-DEPENDENCY-MAP.md) — 필수/권장 선행 관계

## FAST EXECUTE와 FAST TRACK

두 용어는 역할이 다릅니다.

- **FAST EXECUTE:** 한 미션 안에서 불필요한 재설계를 줄이고 `Runtime → Verify → Evidence → CLEAR`에 집중하는 실행 방식
- **FAST TRACK:** R01에서 **필수 미션 11개를 먼저 모두 CLEAR한 뒤 선택 미션 4개를 수행**하는 미션 순서

```text
Stage 1 — REQUIRED CLEAR
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B4-2 → B5-2 → B5-3 → B7-2
```

**FAST TRACK은 미션을 생략하거나 B7-2로 바로 건너가는 경로가 아닙니다.** 필수 11개를 먼저 완료해 핵심 과정을 빠르게 닫고, 이후 선택 4개를 연속 수행하여 R01 전체 15개를 CLEAR합니다.

권장 선행 지식과 Dependency는 학습 관계를 설명하기 위한 기준이고, FAST TRACK의 Stage 순서를 바꾸는 기준으로 사용하지 않습니다.

## 설계 단계와 빠른 실행 단계

| 구분 | 설계 단계 | 빠른 실행 단계 |
|---|---|---|
| 핵심 질문 | 어떻게 해야 제대로 수행할 수 있는가? | 지금 무엇을 하면 가장 빨리 CLEAR할 수 있는가? |
| 목표 | 기준·구조·절차 준비 | 실제 Runtime 결과 확보 |
| 중심 작업 | 요구 분석, Reference, Guide, Runbook, Audit | 실행, 오류 수정, Verify, Evidence, CLEAR |
| 완료 의미 | 실행할 준비가 됨 | 실제 검증되어 미션이 끝남 |
| 변경 범위 | 비교적 넓게 검토 | 현재 CLEAR를 막는 문제만 최소 수정 |
| 개선 아이디어 | 설계에 반영 가능 | 현재 CLEAR와 무관하면 후속 개선 후보로 미룸 |

R01의 Phase A/B에서 설계·기준화 작업을 완료했으므로, Phase C에서는 **실행을 우선하고 설계 보정은 필요한 만큼만 수행**합니다.

```text
DESIGN
공식 Mission / Evaluation
→ Reference Build
→ Guide / Verify / Evidence 설계

READY
Canonical Audit
→ Cross-Mission Audit
→ Runbook / Preflight Freeze

EXECUTE  ← 현재 위치
START-CHECK
→ Runtime
→ Fix
→ Verify
→ Evidence
→ CLEAR

REVIEW / ADVANCED
R01 완료 후 고도화
```

### Phase C — Design Freeze / Just-in-Time Design

실행 중 문제가 발견되면 먼저 한 가지를 판단합니다.

```text
이 문제가 현재 미션의 CLEAR를 막는가?

YES
→ 필요한 범위만 최소 수정
→ 재검증
→ Evidence
→ 계속 실행

NO
→ 현재 Runtime을 중단하지 않음
→ 후속 개선 후보로 기록
→ 계속 실행
```

운영 비중은 **실행 80~90% / 설계 보정 10~20%**를 지향합니다. 이는 고정 시간 할당이 아니라, 설계 루프로 되돌아가지 않기 위한 운영 원칙입니다.

다음 경우에는 Phase C에서도 즉시 설계를 수정할 수 있습니다.

- 공식 Mission/Evaluation 충족을 막는 오류
- Runtime을 진행할 수 없는 BLOCKER
- Secret 노출 또는 보안 문제
- 데이터 손실·Cloud 비용·SSH lockout 등 안전 문제
- Verify/Evidence가 실제 결과를 잘못 판정하는 문제

반대로 현재 미션 CLEAR와 직접 관계없는 리팩터링, UI 고도화, 구조 확장, 미래 Round 기능은 R01 Runtime을 멈추는 이유로 사용하지 않습니다.

## 역할

이 저장소는 전체 미션 목록, 필수/선택 구분, 훈련 차수, 수행 기준, 진행률과 심화 진입 기준을 관리합니다. 실제 코드·환경설정·테스트·증빙은 각 미션 저장소의 현재 Round 폴더에서 관리합니다.

## 미션 목록 및 저장소

> **행 정렬은 미션 번호 기준**입니다. 실제 R01 수행 순서는 `R01 실행 순번` 열을 따릅니다.  
> `미션 제목`은 각 미션의 공식 `*-mission.md` 첫 제목을 **원문 그대로** 사용합니다.  
> `필수 선행`은 선행 결과물을 직접 사용하거나 공식 미션이 이전 프로젝트를 기반으로 요구하는 경우만 표시합니다.  
> `권장 선행`은 완료하지 않아도 현재 미션을 시작할 수 있지만, 관련 개념을 미리 익혀 두면 이해와 수행이 쉬워지는 교육 설계상 권장 경로입니다. **공식 필수 조건이 아닙니다.**  
> `R01 실행 순번`은 FAST TRACK을 따르며 **필수 11개를 먼저 완료하고 선택 4개를 이후에 수행**합니다.

| 미션 | 미션 제목 | 구분 | 필수 선행 | 권장 선행 | R01 실행 순번 | 저장소 |
|---|---|---|---|---|---:|---|
| B1-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | 필수 | - | - | **1** | [codyssey-basic-b1-1-system-monitor](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) |
| B1-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | 필수 | - | **B1-1** | **2** | [codyssey-basic-b1-2-linux-troubleshooting](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) |
| B2-1 | 나만의 용돈 기입장 프로그램 만들기 | 필수 | - | - | **3** | [codyssey-basic-b2-1-budget-tracker](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) |
| B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | 필수 | - | B2-1 | **4** | [codyssey-basic-b2-2-git-team-collaboration](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) |
| B3-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | 필수 | - | B2-1 | **5** | [codyssey-basic-b3-1-fast-data-store](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) |
| B3-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | 필수 | - | B3-1, B2-2 | **6** | [codyssey-basic-b3-2-file-change-tracker](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) |
| B4-1 | 나를 소개하는 웹페이지 처음부터 만들기 | 필수 | - | - | **7** | [codyssey-basic-b4-1-portfolio](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) |
| B4-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | 선택 | - | B4-1 | **12** | [codyssey-basic-b4-2-interactive-web-app](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) |
| B5-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | 필수 | - | - | **8** | [codyssey-basic-b5-1-database-design](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) |
| B5-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | 선택 | - | B5-1, B4-1 | **13** | [codyssey-basic-b5-2-fastapi-crud-app](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) |
| B5-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | 선택 | - | B5-2, B5-1 | **14** | [codyssey-basic-b5-3-fastapi-auth-service](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) |
| B6-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | 필수 | - | B4-1 | **9** | [codyssey-basic-b6-1-cloud-deployment](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) |
| B6-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | 필수 | - | B2-2 | **10** | [codyssey-basic-b6-2-ai-code-summarizer](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) |
| B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | 필수 Term Project | - | B2-2, B4-1, B5-1, B6-1, B6-2 | **11** | [codyssey-basic-b7-1-web-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) |
| B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | 선택 Term Project / 고도화 | **B7-1** | B4-2, B5-2, B5-3, B6-1 | **15** | [codyssey-basic-b7-2-advanced-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) |

### 선행 관계를 읽는 방법

`필수 선행`은 **Dependency Gate**입니다. 해당 미션의 결과물이 없으면 후속 미션의 공식 요구를 그대로 수행하기 어렵습니다. 현재 R01에서는 B7-2가 Project A의 AI 챗봇을 기반으로 고도화하도록 요구하므로 B7-1만 필수 선행으로 둡니다.

`권장 선행`은 **학습 가속 경로**입니다. 미션 자체를 반드시 CLEAR할 필요는 없으며, 해당 미션에서 다루는 핵심 개념을 이미 알고 있다면 학습상 준비가 된 것으로 볼 수 있습니다.

다만 **FAST TRACK의 실제 Runtime 순서는 Dependency와 별도로 고정**합니다. 따라서 Stage 1에서는 필수 11개를 먼저 CLEAR하고, Stage 2에서 선택 4개를 진행합니다.

선행 관계가 있는 미션 저장소에는 `training/round-01-clear/START-CHECK.md`를 두어 **미션 완료 여부가 아니라 실제 보유 지식**을 먼저 점검합니다. 이 문서는 공식 평가가 아니며, 부족한 항목만 권장 선행 미션이나 해당 개념 학습으로 보충한 뒤 `BEGINNER-GUIDE.md`로 진입하는 용도입니다.

```text
START-CHECK
→ 필수 선행 확인
→ 권장 선행/선행 지식 자가진단
→ 부족한 개념만 보충
→ BEGINNER-GUIDE
→ Runtime / Verify / Evidence
```

상세한 `필수 선행 / 권장 선행 / 있으면 좋은 선행 지식`은 [`training/round-01-clear/MISSION-DEPENDENCY-MAP.md`](training/round-01-clear/MISSION-DEPENDENCY-MAP.md)에서 관리합니다.

## Phase C 실행 순서

```text
README
→ PROGRESS
→ NEXT-ACTIONS
→ PHASE-C-PREFLIGHT
→ 현재 미션 START-CHECK(있는 경우)
→ BEGINNER-GUIDE
→ Runtime
→ Verify
→ Evidence
→ CLEAR
→ FAST TRACK의 다음 미션
```

설계·학습 체계 전체 문서는 필요할 때 참고합니다.

- [MISSION-INDEX.md](MISSION-INDEX.md) — FAST TRACK 전체 미션 순서
- [TRAINING-ROUNDS.md](TRAINING-ROUNDS.md) — R01 이후 심화 Round
- [MISSION-RUNBOOK.md](MISSION-RUNBOOK.md) — 전체 공통 수행 계약
- [standards/BEGINNER-TRAINING-STANDARD.md](standards/BEGINNER-TRAINING-STANDARD.md) — 입문자 설명 기준
- [standards/ENVIRONMENT-STANDARD.md](standards/ENVIRONMENT-STANDARD.md) — 환경·Secret·검증 기준

## 현재 실행 규칙

- 공식 Mission PDF/MD/Evaluation/제공 파일이 최우선 기준입니다.
- Phase A/B에서 준비한 Reference/Runbook을 기본 경로로 사용하며 Phase C에서 임의 재설계를 반복하지 않습니다.
- FAST TRACK은 **Stage 1 필수 11개 → Stage 2 선택 4개** 순서를 유지합니다.
- `START-CHECK.md`가 있는 미션은 먼저 선행 지식 상태를 확인합니다.
- 권장 선행은 학습 보조 기준이며 FAST TRACK 실행 순서를 임의로 앞당기는 근거로 사용하지 않습니다.
- 사용자는 `BEGINNER-GUIDE.md`를 Step 1부터 따라 실제 Runtime을 수행합니다.
- 실행 중 BLOCKER가 생기면 **원인 → 최소 수정 → 재검증 → 계속 실행** 순서로 처리합니다.
- CLEAR와 무관한 개선 아이디어는 현재 Runtime을 멈추지 않고 후속 개선 후보로 미룹니다.
- 각 Step은 `왜 → 무엇 → 용어/개념 → 명령/코드 → 예상 결과 → 검증 → 오류 해결` 순서로 작성합니다.
- 실제 실행·검증·필요 Evidence가 끝나기 전에는 CLEAR로 표시하지 않습니다.
- 미래 Round 폴더는 미리 만들지 않습니다.

## 보존 원칙

기존 대시보드/Growth OS 작업은 `archive/pre-clean-restart-20260816` 브랜치에 보존되어 있습니다. 현재 `main`은 R01 FAST TRACK에 따라 필수 미션을 먼저 실제 CLEAR하고 이후 선택 미션을 완료하기 위한 실행 기준으로 운영합니다.
