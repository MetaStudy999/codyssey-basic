# Current Mission Map — 현재 미션 번호 기준표

> 기준일: 2026-09-03
>
> 이 문서는 코디세이 AI/SW 기초과정의 **현재 Mission ID(미션 번호) ↔ 미션 주제 ↔ Canonical Repository(기준 저장소)** 연결을 관리하는 Control Tower의 단일 기준표입니다.

## 핵심 원칙

```text
Mission ID(미션 번호) = 교육과정 개편에 따라 바뀔 수 있는 가변 Metadata(메타데이터)
Repository(저장소)    = 미션 주제를 기준으로 유지하는 Stable Identity(안정 식별자)
```

Repository 이름은 번호 변경 때문에 다시 바꾸지 않습니다.

---

## 현재 공식 번호 매핑

| 현재 ID | 미션 주제 | 이전 ID | 구분 | Canonical Repository |
|---|---|---|---|---|
| **B1-1** | 나를 소개하는 웹페이지 처음부터 만들기 | B4-1 | 필수 | [`codyssey-basic-web-portfolio`](https://github.com/MetaStudy999/codyssey-basic-web-portfolio) |
| **B1-2** | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | B4-2 | 선택 | [`codyssey-basic-react-spa`](https://github.com/MetaStudy999/codyssey-basic-react-spa) |
| **B2-1** | 나만의 용돈 기입장 프로그램 만들기 | B2-1 | 필수 | [`codyssey-basic-budget-tracker`](https://github.com/MetaStudy999/codyssey-basic-budget-tracker) |
| **B2-2** | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | B2-2 | 필수 | [`codyssey-basic-git-collaboration`](https://github.com/MetaStudy999/codyssey-basic-git-collaboration) |
| **B3-1** | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | B6-1 | 필수 | [`codyssey-basic-cloud-infrastructure`](https://github.com/MetaStudy999/codyssey-basic-cloud-infrastructure) |
| **B3-2** | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | B6-2 | 필수 | [`codyssey-basic-ai-git-assistant`](https://github.com/MetaStudy999/codyssey-basic-ai-git-assistant) |
| **B4-1** | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | B1-1 | 필수 | [`codyssey-basic-system-monitor`](https://github.com/MetaStudy999/codyssey-basic-system-monitor) |
| **B4-2** | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | B1-2 | 필수 | [`codyssey-basic-system-troubleshooting`](https://github.com/MetaStudy999/codyssey-basic-system-troubleshooting) |
| **B5-1** | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | B3-1 | 필수 | [`codyssey-basic-mini-redis`](https://github.com/MetaStudy999/codyssey-basic-mini-redis) |
| **B5-2** | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | B3-2 | 필수 | [`codyssey-basic-mini-git`](https://github.com/MetaStudy999/codyssey-basic-mini-git) |
| **B6-1** | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | B5-1 | 필수 | [`codyssey-basic-sql-database`](https://github.com/MetaStudy999/codyssey-basic-sql-database) |
| **B6-2** | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | B5-2 | 선택 | [`codyssey-basic-fastapi-crud`](https://github.com/MetaStudy999/codyssey-basic-fastapi-crud) |
| **B6-3** | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | B5-3 | 선택 | [`codyssey-basic-fastapi-auth`](https://github.com/MetaStudy999/codyssey-basic-fastapi-auth) |
| **B7-1** | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | B7-1 | 필수 Term Project | [`codyssey-basic-ai-chatbot`](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot) |
| **B7-2** | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | B7-2 | 선택 Term Project | [`codyssey-basic-ai-chatbot-fullstack`](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot-fullstack) |

---

## 번호 변경 요약

번호가 유지된 미션:

```text
B2-1
B2-2
B7-1
B7-2
```

번호가 변경된 미션:

```text
B4-1 → B1-1  웹 포트폴리오
B4-2 → B1-2  React SPA
B6-1 → B3-1  클라우드 인프라
B6-2 → B3-2  AI Git 도우미
B1-1 → B4-1  시스템 관제
B1-2 → B4-2  시스템 장애 분석
B3-1 → B5-1  Mini Redis
B3-2 → B5-2  Mini Git
B5-1 → B6-1  SQL 데이터베이스
B5-2 → B6-2  FastAPI CRUD
B5-3 → B6-3  FastAPI 인증·연관관계
```

---

## 현재 R01 실행 상태와 번호 변경

미션 번호 변경은 기존 수행 이력을 초기화하지 않습니다.

현재 R01에서 진행 중이던 **시스템 관제 자동화 미션**은 이전 번호 B1-1에서 **현재 번호 B4-1**로 재매핑합니다.

```text
기존 Active Mission
B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기

현재 Active Mission
B4-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기
Repository: codyssey-basic-system-monitor
```

즉, 번호만 변경하고 수행 상태·Commit History(커밋 이력)·PR·Issue·Evidence(증빙)는 유지합니다.

---

## FAST TRACK 실행 순서

FAST TRACK의 기존 실행 전략은 **미션 주제의 수행 순서를 유지**하고, Mission ID만 현재 번호로 재매핑합니다.

```text
Stage 1 — 필수 완료(REQUIRED CLEAR)
B4-1 → B4-2 → B2-1 → B2-2 → B5-1 → B5-2
→ B1-1 → B6-1 → B3-1 → B3-2 → B7-1

Stage 2 — 선택 완료(OPTIONAL CLEAR)
B1-2 → B6-2 → B6-3 → B7-2
```

> 이 FAST TRACK은 내부 훈련 실행 순서이며, 현재 Mission ID의 숫자 순서와는 별개입니다.

---

## 이력 보존 원칙

다음은 과거 당시 기록이므로 강제로 바꾸지 않습니다.

- 과거 Commit 메시지의 옛 Mission ID
- 이미 Merge된 Pull Request(PR)의 제목·본문
- 종료된 Issue의 당시 Mission ID
- 과거 평가·증빙에서 당시 공식 번호를 설명하는 기록

반면 다음은 현재 번호로 갱신합니다.

- 현재 README / Mission Index
- Quick Start / 현재 실행 안내
- Workcell Prompt의 현재 Mission ID
- Mission Repository의 현재 Metadata
- Control Tower의 현재 진행 상태와 링크

---

## 변경 시 체크

향후 번호가 다시 변경되면 다음 순서로 처리합니다.

```text
1. 미션 주제가 동일한지 확인
2. Canonical Repository는 그대로 유지
3. 이 문서의 Current Mission ID 수정
4. 현재 운영 문서와 Workcell의 Mission ID 수정
5. 과거 Git 이력은 보존
6. 링크와 현재 실행 경로 검증
```
