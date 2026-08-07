# Codyssey AI/SW Basic

> B1-1부터 B7-2까지의 공식 요구사항, 수행 상태, 학습 과정, 검증 결과, 기술 연결과 성과물을 하나로 관리하고, GitHub Pages 포트폴리오로 공개하는 기초과정 Control Tower.

## 1. 과정 소개

이 저장소는 개별 미션의 소스코드를 모아두는 monorepo가 아니다. 각 미션 구현은 독립 Repository에서 관리하고, 이 저장소는 **Curriculum + Progress + Evaluation + Learning + Portfolio + Resources + Opportunities + Professional Growth**를 통합 관리한다.

- 공식 과정 분류: 13개 Mission + Term Project
- 통합 수행 범위: B1-1 ~ B7-2 전체 15개 실행 단위
- 폴더 분류 기준: 필수/선택이 아니라 7개 기술 대분류
- 필수/선택 여부: `config/missions.yaml` 메타데이터로만 관리

## 2. 전체 학습 흐름

```text
Linux & OS
    ↓
Python & Git
    ↓
Data Structures & Algorithms
    ↓
Web & Front-end
    ↓
Database & Back-end
    ↓
Cloud & AI API
    ↓
Term Project
```

## 3. 7개 대분류

| # | 대분류 | 실행 단위 |
|---:|---|---|
| 1 | Linux와 OS | B1-1, B1-2 |
| 2 | Python과 Git 심화 | B2-1, B2-2 |
| 3 | 자료구조와 알고리즘 | B3-1, B3-2 |
| 4 | 웹 핵심과 프론트엔드 | B4-1, B4-2 |
| 5 | 데이터베이스와 백엔드 | B5-1, B5-2, B5-3 |
| 6 | 클라우드와 AI API | B6-1, B6-2 |
| 7 | Term Project | B7-1, B7-2 |

## 4. 전체 Mission / Project

| 순서 | ID | 제목 | 공식 구분 | 상태 | Repository |
|---:|---|---|---|---|---|
| 01 | B1-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) |
| 02 | B1-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) |
| 03 | B2-1 | 나만의 용돈 기입장 프로그램 만들기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) |
| 04 | B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) |
| 05 | B3-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) |
| 06 | B3-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) |
| 07 | B4-1 | 나를 소개하는 웹페이지 처음부터 만들기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) |
| 08 | B4-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | 선택 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) |
| 09 | B5-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) |
| 10 | B5-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | 선택 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) |
| 11 | B5-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | 선택 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) |
| 12 | B6-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) |
| 13 | B6-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | 필수 | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) |
| 14 | B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | Term Project | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) |
| 15 | B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | Term Project | TODO | [repo](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) |

## 5. 수행 상태

`TODO → IMPLEMENTED → TESTED → PASS`

환경 확인이 필요한 경우 `NEEDS-RUNTIME`, 외부 조건으로 진행 불가능한 경우 `BLOCKED`를 사용한다.

## 6. Completion Gate

```text
G1 SOURCE → G2 BUILD → G3 TEST → G4 REVIEW
   → G5 RUNTIME → G6 EVIDENCE → G7 LEARN → G8 MERGE
```

## 7. 학습 방법

- **FAST TRACK**: 공식 요구사항을 빠르고 정확하게 구현·검증하여 PASS까지 진행
- **LEARNING TRACK**: 완성 결과물을 이용해 개념, 구조, 코드, 장애 원인, 설계 이유를 자기 말로 설명
- 전문화 확장은 기본 미션 완료를 지연시키지 않고 `Professional Growth` 또는 `Advanced`에 분리

## 8. 성장 운영 원칙

> **Learn → Build → Break → Measure → Explain → Contribute → Challenge → Create**

배운다 → 만든다 → 깨뜨려 본다 → 측정한다 → 설명한다 → 기여한다 → 외부에서 검증받는다 → 새로운 것을 만든다.

## 9. 문서 지도

| 경로 | 역할 |
|---|---|
| `docs/00-governance` | 공식 기준, Source of Truth, 변경관리 |
| `docs/01-overview` | 기초과정 소개, 목표, 전체 로드맵 |
| `docs/02-domains` | 7개 대분류와 B1-1~B7-2 |
| `docs/03-progress` | 진행률, Gate, Evidence, 학습 숙련도 |
| `docs/04-learning` | FAST/LEARNING Track, 복습, 자기설명 |
| `docs/05-architecture` | Curriculum, Dependency, Technology 지도 |
| `docs/06-evaluation` | 평가, Traceability, Evidence, PASS |
| `docs/07-portfolio` | 프로젝트, 역량, 성과, Demo |
| `docs/08-resources` | 공식문서, 책, 논문, MOOC, 영상, 전문사이트 |
| `docs/09-opportunities` | 공모전, 경진대회, 해커톤, 세미나, 학회 |
| `docs/10-professional-growth` | 전문가 성장 체계 |
| `docs/11-advanced` | 기초 이후 고도화 Backlog |

## 10. Portfolio Website

`site/`는 GitHub Pages용 Presentation Layer다. `docs/`와 `config/`가 관리 원본이며 사이트는 이를 외부에 보기 좋게 보여주는 역할을 한다.

예정 주소: `https://metastudy999.github.io/codyssey-basic/`

## 11. 변경 원칙

v1.0 구조는 우선 동결한다. 새 아이디어가 생기면 다음 기준으로 처리한다.

- 현재 미션 통과에 필수 → 현재 미션
- 학습 자료 → `08-resources`
- 대외활동 → `09-opportunities`
- 전문가 역량 → `10-professional-growth`
- 현재 수준을 넘어서는 기술 → `11-advanced`
- 과정 전체 정책 변경 → `00-governance`
