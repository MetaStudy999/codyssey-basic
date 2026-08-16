# Codyssey Basic Training System

Codyssey Basic 전체 훈련을 관리하는 통합(Control Tower) 저장소입니다.

## 현재 상태

- Active Round: **R01 — CLEAR**
- Active Mission: **B1-1**
- 우선순위: **필수 미션 → 선택 미션**
- 핵심 원칙: **Mission First · Beginner First · One Round at a Time**

## 역할

이 저장소는 전체 미션 목록, 필수/선택 구분, 훈련 차수, 수행 기준, 진행률과 심화 진입 기준을 관리합니다. 실제 코드·환경설정·테스트·증빙은 각 미션 저장소의 현재 Round 폴더에서 관리합니다.

## 미션 목록 및 저장소

> **행 정렬은 미션 번호 기준**입니다. 실제 R01 수행 순서는 `R01 실행 순번` 열을 따릅니다.  
> `미션 제목`은 각 미션의 공식 `*-mission.md` 첫 제목을 **원문 그대로** 사용합니다.  
> `필수 선행`은 선행 결과물을 직접 사용하거나 공식 미션이 이전 프로젝트를 기반으로 요구하는 경우만 표시합니다.  
> `권장 선행`은 완료하지 않아도 현재 미션을 시작할 수 있지만, 관련 개념을 미리 익혀 두면 이해와 수행이 쉬워지는 교육 설계상 권장 경로입니다. **공식 필수 조건이 아닙니다.**

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

`필수 선행`은 **Gate**입니다. 해당 미션의 결과물이 없으면 후속 미션의 공식 요구를 그대로 수행하기 어렵습니다. 현재 R01에서는 B7-2가 Project A의 AI 챗봇을 기반으로 고도화하도록 요구하므로 B7-1만 필수 선행으로 둡니다.

`권장 선행`은 **학습 가속 경로**입니다. 미션 자체를 반드시 CLEAR할 필요는 없으며, 해당 미션에서 다루는 핵심 개념을 이미 알고 있다면 바로 현재 미션으로 들어가도 됩니다. 예를 들어 B1-2는 B1-1을 완료하지 않았더라도 수행할 수 있지만, 프로세스·포트·로그·관제 개념을 알고 있으면 훨씬 수월합니다.

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

통합 Control Tower 저장소: [MetaStudy999/codyssey-basic](https://github.com/MetaStudy999/codyssey-basic)

## 시작 순서

1. [MISSION-INDEX.md](MISSION-INDEX.md) — 전체 미션과 수행 순서
2. [TRAINING-ROUNDS.md](TRAINING-ROUNDS.md) — R01~R14 및 Expert 이후 Impact Cycle
3. [MISSION-RUNBOOK.md](MISSION-RUNBOOK.md) — 모든 미션의 공통 수행 절차
4. [PROGRESS.md](PROGRESS.md) — 전체 진행 현황
5. [standards/BEGINNER-TRAINING-STANDARD.md](standards/BEGINNER-TRAINING-STANDARD.md) — 입문자 설명·주석·개념도 기준
6. [standards/ENVIRONMENT-STANDARD.md](standards/ENVIRONMENT-STANDARD.md) — 환경설정·Secret·검증·초기화 기준

## 현재 실행 규칙

- 공식 Mission PDF/MD/Evaluation/제공 파일을 먼저 확인합니다.
- ChatGPT가 먼저 최소 통과 경로(Reference Complete Path)를 설계·검증합니다.
- `START-CHECK.md`가 있는 미션은 먼저 선행 지식 상태를 확인합니다.
- 필수 선행이 없거나 충족되었고 필요한 지식이 준비되었다면 권장 선행 미션을 CLEAR하지 않았어도 현재 미션으로 진입할 수 있습니다.
- 사용자는 `BEGINNER-GUIDE.md`를 Step 1부터 따라 수행합니다.
- 각 Step은 `왜 → 무엇 → 용어/개념 → 명령/코드 → 예상 결과 → 검증 → 오류 해결` 순서로 작성합니다.
- Round 01에서는 입문자가 이해하기 어려운 코드와 명령에 충분한 주석을 붙입니다.
- 실제 실행·검증·필요 증빙이 끝나기 전에는 CLEAR로 표시하지 않습니다.
- 미래 Round 폴더는 미리 만들지 않습니다.

## 보존 원칙

기존 대시보드/Growth OS 작업은 `archive/pre-clean-restart-20260816` 브랜치에 보존되어 있습니다. 현재 `main`은 빠른 미션 수행을 위한 새 기준으로 운영합니다.
