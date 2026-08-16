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
> `선행 미션`은 `training/round-01-clear/MISSION-DEPENDENCY-MAP.md`의 **Hard Dependency 기준**이며, 권장 학습 전이는 포함하지 않습니다.

| 미션 | 미션 제목 | 구분 | 선행 미션 | R01 실행 순번 | 저장소 |
|---|---|---|---|---:|---|
| B1-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | 필수 | - | **1** | [codyssey-basic-b1-1-system-monitor](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) |
| B1-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | 필수 | **B1-1** | **2** | [codyssey-basic-b1-2-linux-troubleshooting](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) |
| B2-1 | 나만의 용돈 기입장 프로그램 만들기 | 필수 | - | **3** | [codyssey-basic-b2-1-budget-tracker](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) |
| B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | 필수 | - | **4** | [codyssey-basic-b2-2-git-team-collaboration](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) |
| B3-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | 필수 | - | **5** | [codyssey-basic-b3-1-fast-data-store](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) |
| B3-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | 필수 | - | **6** | [codyssey-basic-b3-2-file-change-tracker](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) |
| B4-1 | 나를 소개하는 웹페이지 처음부터 만들기 | 필수 | - | **7** | [codyssey-basic-b4-1-portfolio](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) |
| B4-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | 선택 | - | **12** | [codyssey-basic-b4-2-interactive-web-app](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) |
| B5-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | 필수 | - | **8** | [codyssey-basic-b5-1-database-design](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) |
| B5-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | 선택 | - | **13** | [codyssey-basic-b5-2-fastapi-crud-app](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) |
| B5-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | 선택 | - | **14** | [codyssey-basic-b5-3-fastapi-auth-service](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) |
| B6-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | 필수 | - | **9** | [codyssey-basic-b6-1-cloud-deployment](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) |
| B6-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | 필수 | - | **10** | [codyssey-basic-b6-2-ai-code-summarizer](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) |
| B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | 필수 Term Project | - | **11** | [codyssey-basic-b7-1-web-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) |
| B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | 선택 Term Project / 고도화 | **B7-1** | **15** | [codyssey-basic-b7-2-advanced-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) |

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
- 사용자는 `BEGINNER-GUIDE.md`를 Step 1부터 따라 수행합니다.
- 각 Step은 `왜 → 무엇 → 용어/개념 → 명령/코드 → 예상 결과 → 검증 → 오류 해결` 순서로 작성합니다.
- Round 01에서는 입문자가 이해하기 어려운 코드와 명령에 충분한 주석을 붙입니다.
- 실제 실행·검증·필요 증빙이 끝나기 전에는 CLEAR로 표시하지 않습니다.
- 미래 Round 폴더는 미리 만들지 않습니다.

## 보존 원칙

기존 대시보드/Growth OS 작업은 `archive/pre-clean-restart-20260816` 브랜치에 보존되어 있습니다. 현재 `main`은 빠른 미션 수행을 위한 새 기준으로 운영합니다.
