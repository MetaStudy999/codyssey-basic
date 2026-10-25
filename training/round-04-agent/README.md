# CODYSSEY Round 04 Agent — 신규 미션 작업 허브

> 2026-10-25 Owner 경로 지정. 상태: **경로/문서 준비 완료, 미션 실행 미승인·미시작**.

## 적용 대상

B1-1부터 B7-2까지 **제2기 공식 15개 미션 전체**에 적용합니다. 중앙 제어 저장소는 `MetaStudy999/codyssey-basic`이며, 실제 소스는 각 Canonical Mission Repository의 `training/round-04-agent/04-src/`에만 생성합니다.

| ID | 미션 | 정식 저장소의 신규 Round 04 경로 |
|---|---|---|
| B1-1 | 나를 소개하는 웹페이지 처음부터 만들기 | [codyssey-basic-web-portfolio](https://github.com/MetaStudy999/codyssey-basic-web-portfolio/tree/main/training/round-04-agent) |
| B1-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | [codyssey-basic-react-spa](https://github.com/MetaStudy999/codyssey-basic-react-spa/tree/main/training/round-04-agent) |
| B2-1 | 나만의 용돈 기입장 프로그램 만들기 | [codyssey-basic-budget-tracker](https://github.com/MetaStudy999/codyssey-basic-budget-tracker/tree/main/training/round-04-agent) |
| B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | [codyssey-basic-git-collaboration](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/tree/main/training/round-04-agent) |
| B3-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | [codyssey-basic-cloud-infrastructure](https://github.com/MetaStudy999/codyssey-basic-cloud-infrastructure/tree/main/training/round-04-agent) |
| B3-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | [codyssey-basic-ai-git-assistant](https://github.com/MetaStudy999/codyssey-basic-ai-git-assistant/tree/main/training/round-04-agent) |
| B4-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | [codyssey-basic-system-monitor](https://github.com/MetaStudy999/codyssey-basic-system-monitor/tree/main/training/round-04-agent) |
| B4-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | [codyssey-basic-system-troubleshooting](https://github.com/MetaStudy999/codyssey-basic-system-troubleshooting/tree/main/training/round-04-agent) |
| B5-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | [codyssey-basic-mini-redis](https://github.com/MetaStudy999/codyssey-basic-mini-redis/tree/main/training/round-04-agent) |
| B5-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | [codyssey-basic-mini-git](https://github.com/MetaStudy999/codyssey-basic-mini-git/tree/main/training/round-04-agent) |
| B6-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | [codyssey-basic-sql-database](https://github.com/MetaStudy999/codyssey-basic-sql-database/tree/main/training/round-04-agent) |
| B6-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | [codyssey-basic-fastapi-crud](https://github.com/MetaStudy999/codyssey-basic-fastapi-crud/tree/main/training/round-04-agent) |
| B6-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | [codyssey-basic-fastapi-auth](https://github.com/MetaStudy999/codyssey-basic-fastapi-auth/tree/main/training/round-04-agent) |
| B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | [codyssey-basic-ai-chatbot](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot/tree/main/training/round-04-agent) |
| B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | [codyssey-basic-ai-chatbot-fullstack](https://github.com/MetaStudy999/codyssey-basic-ai-chatbot-fullstack/tree/main/training/round-04-agent) |

## 디렉터리 표준

- `00-plan/`: 전체 계획·일정·Owner 승인
- `01-requirements/`: 공식 Mission PDF·평가항목·수용 기준 정리
- `02-analysis/`: 과거 Round·현행 소스·환경·검증 기록 비교
- `03-design/`: 이번 Round 신규 구조·화면·API/CLI·시험 설계
- `04-src/`: 미션 신규 소스코드 단일 작성 지점
- `05-tests/`: 시험·회귀검증
- `06-evidence/`: 실제 실행·배포·평가 증빙
- `07-evaluation/`: 평가항목·PASS/FAIL/NOT_VERIFIED
- `08-presentation/`: PPTX/PDF 발표자료
- `09-handoff/`: 결과보고·인계

## 관리 규칙

1. 공식 제2기 미션 PDF 및 평가 문서가 최우선 기준입니다. 기존 구현·PASS·브랜치·배포·증빙은 보존하고 참고만 합니다.
2. 이 신규 폴더에 계획 자료를 생성한 것은 **미션 시작 승인과 무관**합니다. 각 미션 개발은 사용자 별도 명시적 승인 이후에만 시작합니다.
3. `MISSION-INDEX.md`에 있는 과거 Round 01/02/03 실행 내용은 역사적 기록으로 보존하고, 신규 작성 경로로 사용하지 않습니다.
4. AWS·Discord·iMac은 보류합니다. 공식 필수 요구사항과 충돌한다면 별도 협의합니다.
5. 개발 실행: ChatGPT 총괄 → Agent Codyssey MCP(Core 4개 우선) → WSL2 Ubuntu / Codex. 실제 오류만 최소 수정하고 새로운 PASS/CLEAR는 독립 증빙이 필요합니다.
6. `round-04-agent`라는 디렉터리명은 이번 에이전트 수행 작업 공간입니다. `TRAINING-ROUNDS.md`가 규정한 역사적 커리큘럼의 **R04 HARDEN**을 자동으로 시작하거나 완료한 것으로 보지 않습니다.
7. 중앙 `B*-*/` 폴더는 **제어·색인 전용**입니다. 미션 실제 소스·시험·증빙은 각 미션 저장소에 기록합니다.

- [정식 미션 식별자 및 저장소 매핑](../../CURRENT-MISSION-MAP.md)
- [신규 표준](../../standards/ROUND-04-AGENT-WORKSPACE-STANDARD.md)
- [신규 미션 등록표](_registry/missions.yml)
