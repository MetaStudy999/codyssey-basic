# APOS Round01 Training Workspace

이 디렉터리는 **APOS Round01**에서 CODYSSEY 현재 Mission ID 기준으로 학습·실행 자료를 미션별로 분리하기 위한 작업 구조입니다.

> 주의: `APOS Round01`은 APOS의 작업/훈련 묶음 이름입니다. CODYSSEY 공식 세대/라운드 명칭과 혼동하지 않습니다.

## 구조

```text
training/apos-round01/
├── _shared/   # 공통 감사·Preflight(사전점검)·Runbook(실행절차) 자료
├── B1-1/
├── B1-2/
├── B2-1/
├── B2-2/
├── B3-1/
├── B3-2/
├── B4-1/
├── B4-2/
├── B5-1/
├── B5-2/
├── B6-1/
├── B6-2/
├── B6-3/
├── B7-1/
└── B7-2/
```

## Mission Index

| 현재 ID | 미션 | 이전 ID | 구분 | Canonical Repository |
|---|---|---|---|---|
| B1-1 | 나를 소개하는 웹페이지 처음부터 만들기 | B4-1 | 필수 | `MetaStudy999/codyssey-basic-web-portfolio` |
| B1-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | B4-2 | 선택 | `MetaStudy999/codyssey-basic-react-spa` |
| B2-1 | 나만의 용돈 기입장 프로그램 만들기 | B2-1 | 필수 | `MetaStudy999/codyssey-basic-budget-tracker` |
| B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | B2-2 | 필수 | `MetaStudy999/codyssey-basic-git-collaboration` |
| B3-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | B6-1 | 필수 | `MetaStudy999/codyssey-basic-cloud-infrastructure` |
| B3-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | B6-2 | 필수 | `MetaStudy999/codyssey-basic-ai-git-assistant` |
| B4-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | B1-1 | 필수 | `MetaStudy999/codyssey-basic-system-monitor` |
| B4-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | B1-2 | 필수 | `MetaStudy999/codyssey-basic-system-troubleshooting` |
| B5-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | B3-1 | 필수 | `MetaStudy999/codyssey-basic-mini-redis` |
| B5-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | B3-2 | 필수 | `MetaStudy999/codyssey-basic-mini-git` |
| B6-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | B5-1 | 필수 | `MetaStudy999/codyssey-basic-sql-database` |
| B6-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | B5-2 | 선택 | `MetaStudy999/codyssey-basic-fastapi-crud` |
| B6-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | B5-3 | 선택 | `MetaStudy999/codyssey-basic-fastapi-auth` |
| B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | B7-1 | 필수 Term Project | `MetaStudy999/codyssey-basic-ai-chatbot` |
| B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | B7-2 | 선택 Term Project | `MetaStudy999/codyssey-basic-ai-chatbot-fullstack` |

## 자료 보존 원칙

- 기존 `training/round-01-clear/`는 기존 문서와 링크의 호환성을 위해 삭제하지 않습니다.
- 기존 공통 문서 10개는 현재 내용 그대로 `_shared/`에 복사합니다.
- 각 Mission 폴더의 `README.md`는 해당 Mission의 작업 진입점(index)입니다.
- 실제 코드·Runtime(실행 결과)·Evidence(증빙)의 최우선 기준은 각 Canonical Mission Repository입니다.
- 이 구조 변경만으로 Mission 수행 완료, PASS, CLEAR를 주장하지 않습니다.

## Source of Truth

현재 ID/제목/Repository 매핑은 저장소 루트의 `CURRENT-MISSION-MAP.md`를 따릅니다.
