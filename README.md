# Codyssey Basic Training System

Codyssey Basic 전체 훈련을 관리하는 통합(Control Tower) 저장소입니다.

## 현재 상태

- Active Round: **R01 — CLEAR**
- Active Mission: **B1-1**
- 우선순위: **필수 미션 → 선택 미션**
- 핵심 원칙: **Mission First · Beginner First · One Round at a Time**

## 역할

이 저장소는 전체 미션 목록, 필수/선택 구분, 훈련 차수, 수행 기준, 진행률과 심화 진입 기준을 관리합니다. 실제 코드·환경설정·테스트·증빙은 각 미션 저장소의 현재 Round 폴더에서 관리합니다.

## 미션 저장소 바로가기

> `선행 미션`은 `training/round-01-clear/MISSION-DEPENDENCY-MAP.md`의 **Hard Dependency 기준**입니다. 단순한 기술 유사성이나 권장 학습 전이는 선행 미션으로 표시하지 않습니다.

| 순서 | 미션 | 구분 | 선행 미션 | 저장소 |
|---:|---|---|---|---|
| 1 | B1-1 | 필수 | - | [codyssey-basic-b1-1-system-monitor](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) |
| 2 | B1-2 | 필수 | **B1-1** | [codyssey-basic-b1-2-linux-troubleshooting](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) |
| 3 | B2-1 | 필수 | - | [codyssey-basic-b2-1-budget-tracker](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) |
| 4 | B2-2 | 필수 | - | [codyssey-basic-b2-2-git-team-collaboration](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) |
| 5 | B3-1 | 필수 | - | [codyssey-basic-b3-1-fast-data-store](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) |
| 6 | B3-2 | 필수 | - | [codyssey-basic-b3-2-file-change-tracker](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) |
| 7 | B4-1 | 필수 | - | [codyssey-basic-b4-1-portfolio](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) |
| 8 | B4-2 | 선택 | - | [codyssey-basic-b4-2-interactive-web-app](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) |
| 9 | B5-1 | 필수 | - | [codyssey-basic-b5-1-database-design](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) |
| 10 | B5-2 | 선택 | - | [codyssey-basic-b5-2-fastapi-crud-app](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) |
| 11 | B5-3 | 선택 | - | [codyssey-basic-b5-3-fastapi-auth-service](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) |
| 12 | B6-1 | 필수 | - | [codyssey-basic-b6-1-cloud-deployment](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) |
| 13 | B6-2 | 필수 | - | [codyssey-basic-b6-2-ai-code-summarizer](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) |
| 14 | B7-1 | 필수 Term Project | - | [codyssey-basic-b7-1-web-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) |
| 15 | B7-2 | 선택 Term Project / 고도화 | **B7-1** | [codyssey-basic-b7-2-advanced-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) |

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
