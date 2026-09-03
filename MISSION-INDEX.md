# 미션 색인(Mission Index)

Round 01의 **빠른 실행 경로(FAST TRACK)**는 **필수 미션 11개를 먼저 모두 완료한 뒤 선택 경로 4개를 수행**하는 경로입니다.

> 현재 Mission ID(미션 번호)의 단일 기준은 [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)입니다. Repository(저장소)는 번호와 분리된 주제 기반 Stable Identity(안정 식별자)를 사용합니다.

## 🚀 빠른 진입(Quick Navigation)

현재 진행 중인 미션 주제는 기존 B1-1에서 번호가 변경된 **B4-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**입니다.

- [현재 Mission ID 기준표 — CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)
- [현재 진행 상태 — PROGRESS.md](PROGRESS.md)
- [지금 해야 할 일 — NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md)
- [B4-1 저장소(Repository)](https://github.com/MetaStudy999/codyssey-basic-system-monitor)
- [▶ B4-1 입문자 따라하기(Beginner Guide)](https://github.com/MetaStudy999/codyssey-basic-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)
- [미션 선후관계 — MISSION-DEPENDENCY-MAP.md](training/round-01-clear/MISSION-DEPENDENCY-MAP.md)

> 이 문서는 **15개 미션의 현재 번호, 실행 순서와 저장소를 찾는 색인**입니다. 실제 미션 명령은 각 Repository의 `BEGINNER-GUIDE.md`에서 수행합니다.

## 📑 목차

- [현재 번호 기준](#current-numbering)
- [빠른 실행 경로(FAST TRACK) 실행 순서](#fast-track)
- [15개 미션 색인](#mission-table)
- [운영 원칙](#principles)

---

<a id="current-numbering"></a>
## 현재 번호 기준

2026-09-03 확인된 현재 미션 번호는 다음 구조입니다.

```text
B1 — 웹 핵심과 프론트엔드
B2 — Python과 Git 심화
B3 — 클라우드와 AI API
B4 — Linux와 OS
B5 — 자료구조와 알고리즘
B6 — 데이터베이스와 백엔드
B7 — Term Project
```

특히 기존 **B5-3 FastAPI 인증 미션은 현재 B6-3**입니다.

번호 변경은 수행 이력을 초기화하지 않습니다. 현재 R01에서 진행 중이던 시스템 관제 미션은 **이전 B1-1 → 현재 B4-1**로 이어서 관리합니다.

---

<a id="fast-track"></a>
## 빠른 실행 경로(FAST TRACK) 실행 순서

FAST TRACK은 기존 **미션 주제의 실제 수행 순서**를 유지하고, ID만 현재 번호로 재매핑합니다.

```text
Stage 1 — 필수 완료(REQUIRED CLEAR)
B4-1 → B4-2 → B2-1 → B2-2 → B5-1 → B5-2
→ B1-1 → B6-1 → B3-1 → B3-2 → B7-1

Stage 2 — 선택 완료(OPTIONAL CLEAR)
B1-2 → B6-2 → B6-3 → B7-2
```

> FAST TRACK은 미션을 생략하는 경로가 아닙니다. **필수 경로 11개를 먼저 닫아 과정의 핵심 축을 빠르게 확보하고, 그 다음 선택 경로 4개를 연속해서 완료하여 R01 전체 15개를 CLEAR하는 실행 순서**입니다.

<a id="mission-table"></a>
## 15개 미션 색인

| 실행순번 | 단계(Stage) | 현재 ID | 구분 | 미션 주제 | 저장소 |
|---:|---|---|---|---|---|
| 1 | Required | **B4-1** | 필수 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | [`codyssey-basic-system-monitor`](https://github.com/MetaStudy999/codyssey-basic-system-monitor) |
| 2 | Required | **B4-2** | 필수 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | [`codyssey-basic-system-troubleshooting`](https://github.com/MetaStudy999/codyssey-basic-system-troubleshooting) |
| 3 | Required | **B2-1** | 필수 | 나만의 용돈 기입장 프로그램 만들기 | [`codyssey-basic-budget-tracker`](https://github.com/MetaStudy999/codyssey-basic-budget-tracker) |
| 4 | Required | **B2-2** | 필수 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | [`codyssey-basic-git-collaboration`](https://github.com/MetaStudy999/codyssey-basic-git-collaboration) |
| 5 | Required | **B5-1** | 필수 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | [`codyssey-basic-mini-redis`](https://github.com/MetaStudy999/codyssey-basic-mini-redis) |
| 6 | Required | **B5-2** | 필수 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | [`codyssey-basic-mini-git`](https://github.com/MetaStudy999/codyssey-basic-mini-git) |
| 7 | Required | **B1-1** | 필수 | 나를 소개하는 웹페이지 처음부터 만들기 | [`codyssey-basic-web-portfolio`](https://github.com/MetaStudy999/codyssey-basic-web-portfolio) |
| 8 | Required | **B6-1** | 필수 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | [`codyssey-basic-sql-database`](https://github.com/MetaStudy999/codyssey-basic-sql-database) |
| 9 | Required | **B3-1** | 필수 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | [`codyssey-basic-cloud-infrastructure`](https://github.com/MetaStudy999/codyssey-basic-cloud-infrastructure) |
| 10 | Required | **B3-2** | 필수 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | [`codyssey-basic-ai-git-assistant`](https://github.com/MetaStudy999/codyssey-basic-ai-git-assistant) |
| 11 | Required | **B7-1** | 필수 Term Project | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | [`codyssey-basic-ai-chatbot`](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot) |
| 12 | Optional | **B1-2** | 선택 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | [`codyssey-basic-react-spa`](https://github.com/MetaStudy999/codyssey-basic-react-spa) |
| 13 | Optional | **B6-2** | 선택 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | [`codyssey-basic-fastapi-crud`](https://github.com/MetaStudy999/codyssey-basic-fastapi-crud) |
| 14 | Optional | **B6-3** | 선택 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | [`codyssey-basic-fastapi-auth`](https://github.com/MetaStudy999/codyssey-basic-fastapi-auth) |
| 15 | Optional | **B7-2** | 선택 Term Project / 고도화 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | [`codyssey-basic-ai-chatbot-fullstack`](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot-fullstack) |

### 현재 번호 순서로 보기

| 현재 ID | 미션 주제 | Repository |
|---|---|---|
| B1-1 | 나를 소개하는 웹페이지 처음부터 만들기 | `codyssey-basic-web-portfolio` |
| B1-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | `codyssey-basic-react-spa` |
| B2-1 | 나만의 용돈 기입장 프로그램 만들기 | `codyssey-basic-budget-tracker` |
| B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | `codyssey-basic-git-collaboration` |
| B3-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | `codyssey-basic-cloud-infrastructure` |
| B3-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | `codyssey-basic-ai-git-assistant` |
| B4-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | `codyssey-basic-system-monitor` |
| B4-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | `codyssey-basic-system-troubleshooting` |
| B5-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | `codyssey-basic-mini-redis` |
| B5-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | `codyssey-basic-mini-git` |
| B6-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | `codyssey-basic-sql-database` |
| B6-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | `codyssey-basic-fastapi-crud` |
| B6-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | `codyssey-basic-fastapi-auth` |
| B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | `codyssey-basic-ai-chatbot` |
| B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | `codyssey-basic-ai-chatbot-fullstack` |

<a id="principles"></a>
## 운영 원칙

- 현재 Mission ID의 Source of Truth(단일 기준원)는 [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)입니다.
- Repository 이름은 Mission ID와 분리된 주제 기반 이름을 유지합니다.
- 번호 변경으로 기존 Runtime/CLEAR 상태를 초기화하지 않습니다.
- **Stage 1:** 필수 경로 11개를 기존 미션 주제의 실행 순서대로 실제 실행하여 완료(Runtime CLEAR)합니다.
- **Stage 2:** 필수 경로 11개 CLEAR 후 B1-2 → B6-2 → B6-3 → B7-2를 수행합니다.
- 권장 선행 지식은 학습 보조 기준이며 FAST TRACK의 Stage 순서를 바꾸는 근거로 사용하지 않습니다.
- 선후관계(Dependency)의 `필수 선행`과 FAST TRACK의 `실행 순서`는 서로 다른 개념입니다.
- 이후 Round는 전체 15개를 기계적으로 반복하지 않고 대표·취약 미션으로 범위를 줄이면서 깊이를 높입니다.
- 각 미션의 실제 실행은 해당 저장소의 `training/round-01-clear/BEGINNER-GUIDE.md`를 기준으로 합니다.
- 가이드가 존재한다는 이유만으로 `BEGINNER READY` 또는 `CLEAR`로 판정하지 않습니다.
- 과거 Commit/PR/Issue의 옛 Mission ID는 당시 기록이므로 History Rewrite(이력 재작성)하지 않습니다.
