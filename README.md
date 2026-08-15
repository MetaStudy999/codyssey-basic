# Codyssey Developer Growth OS

> Codyssey AI/SW Basic의 B1-1~B7-2를 중심 줄기로 삼아 **Mission 수행 → 학습 → 문제해결 → 협업 → 심화 → 실전 → 전문가 성장**을 하나의 Control Tower에서 관리한다.

이 저장소는 개별 Mission의 소스코드를 모으는 monorepo가 아니다. 실제 구현은 각 Mission Repository에서 수행하고, 이 저장소는 **Master Map + Progress + Learning + Community + Project + Opportunity + Research + Career + Venture + Portfolio**를 연결한다.

- GitHub Pages: https://metastudy999.github.io/codyssey-basic/
- Repository: https://github.com/MetaStudy999/codyssey-basic
- Mission 실행 범위: B1-1 ~ B7-2, 총 15개 실행 단위
- Mission 상태 Source of Truth: `config/missions.yaml`
- Growth Model Source of Truth: `config/growth.yaml`

---

## 1. 전체 성장 모델

```text
CORE
  ↓
EXPLORE
  ↓
ADVANCED
  ↓
PRO
  ↓
EXPERT
  ↓
전문 경로 분기
  ↓
IMPACT
```

| Stage | 의미 | 핵심 질문 |
|---|---|---|
| **CORE** | 기본을 이해하고 직접 완성 | 무엇이며, 내가 직접 할 수 있는가? |
| **EXPLORE** | 넓게 경험하고 방향 탐색 | 무엇이 가능하고 무엇을 더 깊게 볼 것인가? |
| **ADVANCED** | 선택 영역을 깊게 심화 | 어떻게 더 잘 만들고 왜 이 방법을 선택하는가? |
| **PRO** | 실제 환경에서 전문적으로 결과 창출 | 실제 사용자와 환경에서 결과를 책임질 수 있는가? |
| **EXPERT** | 고난도 판단과 Trade-off | 무엇을 선택해야 하며 왜 그런가? |

EXPERT 이후에는 단일 서열이 아니라 Tech Lead/Principal, Architect/SRE, AI/Researcher, Open Source, Educator/Mentor, Founder 등의 전문 경로로 분기한다. 최종 목표는 칭호보다 **IMPACT**다.

상세 기준: [`docs/00-governance/growth-model.md`](docs/00-governance/growth-model.md)

---

## 2. 서로 섞지 않는 4개 축

V3는 다음 네 가지를 독립적으로 관리한다.

| 축 | 값 | 질문 |
|---|---|---|
| **Growth Stage** | CORE → EXPLORE → ADVANCED → PRO → EXPERT | 얼마나 성장했는가? |
| **Status** | PLANNED → READY → ACTIVE → DONE | 지금 어디까지 진행됐는가? |
| **Priority** | REQUIRED / RECOMMENDED / OPTIONAL | 반드시 해야 하는가? |
| **Domain** | Mission / Learning / Community / Research / Career / Venture 등 | 무엇에 관한 활동인가? |

예: `AI Hackathon = EXPLORE + ACTIVE + OPTIONAL + Opportunity`

예외 상태는 `BLOCKED`, `ARCHIVED`를 사용한다.

---

## 3. Codyssey Basic — CORE 중심 줄기

```text
B1 Linux & OS
      ↓
B2 Python & Git
      ↓
B3 Data Structures & Algorithms
      ↓
B4 Web & Front-end
      ↓
B5 Database & Back-end
      ↓
B6 Cloud & AI API
      ↓
B7 Term Project
```

| Domain | Mission |
|---|---|
| B1 Linux & OS | B1-1, B1-2 |
| B2 Python & Git | B2-1, B2-2 |
| B3 Data Structures & Algorithms | B3-1, B3-2 |
| B4 Web & Front-end | B4-1, B4-2 |
| B5 Database & Back-end | B5-1, B5-2, B5-3 |
| B6 Cloud & AI API | B6-1, B6-2 |
| B7 Term Project | B7-1, B7-2 |

공식 필수/선택 여부와 실제 실행 상태는 폴더명이 아니라 `config/missions.yaml`의 메타데이터로 관리한다.

---

## 4. Mission Progress

아래 표는 `config/missions.yaml`에서 자동 생성한다. 표 자체를 직접 수정하지 않는다.

<!-- AUTO:MISSION_PROGRESS:START -->

| 순서 | ID | 제목 | 공식 구분 | 수행 상태 | 현재 Gate | 학습 | Repository |
|---:|---|---|---|---|---|---|---|
| 01 | B1-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) |
| 02 | B1-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) |
| 03 | B2-1 | 나만의 용돈 기입장 프로그램 만들기 | 필수 | PASS | G8 MERGE | EXPLAINABLE | [repo](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) |
| 04 | B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) |
| 05 | B3-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) |
| 06 | B3-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) |
| 07 | B4-1 | 나를 소개하는 웹페이지 처음부터 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) |
| 08 | B4-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | 선택 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) |
| 09 | B5-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) |
| 10 | B5-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | 선택 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) |
| 11 | B5-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | 선택 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) |
| 12 | B6-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) |
| 13 | B6-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) |
| 14 | B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | Term Project | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) |
| 15 | B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | Term Project | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) |

<!-- AUTO:MISSION_PROGRESS:END -->

### Mission 실행 상태

`TODO → IMPLEMENTED → TESTED → PASS`

예외: `NEEDS-RUNTIME`, `BLOCKED`

### Completion Gate

```text
G1 SOURCE
  ↓
G2 BUILD
  ↓
G3 TEST
  ↓
G4 REVIEW
  ↓
G5 RUNTIME
  ↓
G6 EVIDENCE
  ↓
G7 LEARN
  ↓
G8 MERGE
```

`PASS`와 `MASTERED`는 같은 의미가 아니다. Mission 통과와 학습 숙련도는 분리한다.

---

## 5. 한 Mission을 여러 번 활용하는 방법

```text
COMPLETE
   ↓
UNDERSTAND
   ↓
BREAK
   ↓
DEBUG
   ↓
COLLABORATE
   ↓
EXPLORE
   ↓
ADVANCE
   ↓
PRO
```

- **COMPLETE**: 공식 요구사항을 빠르게 완성
- **UNDERSTAND**: 용어·개념·코드·흐름을 자기 말로 설명
- **BREAK**: 일부러 오류와 장애를 만든다
- **DEBUG**: 증거 기반으로 원인을 찾고 복구
- **COLLABORATE**: Issue / Branch / PR / Review / Conflict 경험
- **EXPLORE**: 인접 기술·스터디·세미나·대외활동 탐색
- **ADVANCE**: 선택한 영역을 Architecture/Testing/Security/Performance 등으로 심화
- **PRO**: 실제 사용자, Production, OSS, 연구, 기업/고객 환경으로 확장

핵심 운영 철학은 기존 FAST TRACK과 LEARNING TRACK을 유지한다.

> **먼저 빠르게 완성하고, 최소 검증으로 정확성을 확보한 뒤, 완성 결과물로 깊게 학습한다.**

비필수 고도화가 CORE Mission PASS를 지연시키면 다음 단계 Backlog로 보낸다.

---

## 6. 12개 성장 역량

1. **Learn** — 용어·개념·이론
2. **Build** — 구현
3. **Test** — 검증·품질
4. **Debug** — 문제 해결
5. **Collaborate** — Git·PR·Review·Team
6. **Design** — Architecture·ADR
7. **Operate** — Cloud·Security·SRE
8. **Compete** — 공모전·해커톤·경진대회
9. **Research** — 실험·학회·논문
10. **Communicate** — 문서·발표·교육
11. **Career** — Open Source·Portfolio·취업
12. **Venture** — 사용자·Product·창업

Growth Stage는 **얼마나 성장했는가**, 이 12개 축은 **무엇을 성장시키는가**를 나타낸다.

---

## 7. V3 Master Map

- [Master Map Index](docs/01-master-map/README.md)
- [Growth Map](docs/01-master-map/growth-map.md)
- [Current State](docs/01-master-map/current-state.md)
- [Mission Dependency Map](docs/01-master-map/mission-dependency-map.md)
- [Growth Routing](docs/01-master-map/growth-routing.md)
- [Repository Map](docs/01-master-map/repository-map.md)
- [Migration Plan](docs/01-master-map/migration-plan.md)
- [Migration Matrix](docs/01-master-map/migration-matrix.md)

### V3 Primary 문서 구조

```text
docs/
├── 00-governance
├── 01-master-map
├── 02-missions
├── 03-learning
├── 04-community
├── 05-projects
├── 06-opportunities
├── 07-research
├── 08-open-source
├── 09-career
├── 10-venture
├── 11-portfolio
└── 12-impact
```

Progress는 `01-master-map/current-state.md`와 Dashboard에서 표시하고, Resources는 `03-learning/resources`와 `config/resources.yaml`로 관리한다.

기존 `docs/03-progress`는 Mission 자동화 호환을 위해 Cutover 전까지 유지하는 Legacy Compatibility Output이다.

---

## 8. Master Map + Progressive Repository

V3의 핵심 Repository 정책:

> **미래 전체 지도는 먼저 설계하고, 실제 폴더는 현재 필요한 만큼만 만든다.**

```text
Logical Map
    ↓
PLANNED
    ↓
READY
    ↓
ACTIVE
    ↓
필요한 Physical Folder 생성
```

따라서 `core/`, `advanced/`, `pro/`처럼 단계별 폴더를 만들지 않는다.

```text
폴더 = 무엇인가(Domain)
Stage = 얼마나 성장했는가(Metadata)
Status = 지금 어디까지 진행됐는가
Priority = 반드시 해야 하는가
```

상세 정책: [`docs/00-governance/repository-policy.md`](docs/00-governance/repository-policy.md)

---

## 9. Source of Truth

```text
config/missions.yaml
    └─ 공식 Mission 수행 / G1~G8 / Learning 상태

config/growth.yaml
    └─ Growth Stage / Status / Priority

config/skills.yaml
    └─ 12 Competency Axis / Evidence Level

config/activities.yaml
    └─ Community / External 실제 활동 상태

config/projects.yaml
    └─ Project Lineage

config/opportunities.yaml
    └─ 외부 Opportunity Availability / Fit

config/resources.yaml
    └─ 학습 / 연구 참고자료 Registry
```

한 파일에 모든 개념을 몰아넣지 않는다.

---

## 10. Progress & Dashboard

Dashboard는 네 층을 분리한다.

```text
1. Growth
   CORE / EXPLORE / ADVANCED / PRO / EXPERT

2. Mission
   B1~B7 + G1~G8

3. Skill
   12개 역량 축

4. Activity / Project / Opportunity
   실제 수행 상태와 외부 가용성을 분리
```

Mission 자동화는 기존 흐름을 보존한다.

```text
config/missions.yaml
        ↓
scripts/sync_progress.py
        ├─ README 자동 영역
        ├─ docs/03-progress/progress.md  # Legacy compatibility
        ├─ site/data/missions.json
        └─ site/data/workcells.json
```

Growth OS V3는 별도 Generator로 추가한다.

```text
config/growth.yaml
config/skills.yaml
config/activities.yaml
config/projects.yaml
config/opportunities.yaml
        ↓
scripts/sync_growth.py
        ├─ docs/01-master-map/current-state.md
        ├─ site/data/growth.json
        ├─ site/data/skills.json
        ├─ site/data/activities.json
        ├─ site/data/projects.json
        └─ site/data/opportunities.json
```

Dashboard는 기존 수동 Mission Refresh + 5분 Cooldown 정책을 유지하면서 Growth Layer를 별도로 렌더링한다.

---

## 11. 외부 확장

Mission 결과는 한 번 제출하고 버리지 않는다.

```text
Mission
  ↓
Project
  ├─ Study / Seminar
  ├─ Hackathon / Competition
  ├─ Open Source
  ├─ Research / Paper
  ├─ Portfolio / Career
  └─ MVP / PoC / Venture
```

핵심 전략은 **One Project → Many Outcomes**다.

B7 같은 통합 프로젝트는 Mission 제출 → Portfolio → Hackathon → Competition → Research → OSS → Production → Startup MVP로 계보를 확장할 수 있다.

---

## 12. V3 재구축 원칙

V3는 기존 main을 즉시 삭제하지 않고 **Greenfield Rebuild + Safe Cutover** 방식으로 전환한다.

- 기존 기준본 보존: `archive/pre-growth-os-v3`
- 재구축 브랜치: `rebuild/growth-os-v3`
- 기존 자료 판정: `KEEP / MERGE / REWRITE / ARCHIVE / DROP`
- 새 Target 검증 전 Old Path 삭제 금지
- Config/자동화/Dashboard 검증 후 PR을 통해 main 전환

---

## 13. 변경 판단 규칙

새로운 아이디어가 생기면 먼저 다음을 묻는다.

1. 현재 Mission PASS를 직접 앞당기는가?
2. CORE에서 반드시 필요한가?
3. EXPLORE 후보인가?
4. ADVANCED에서 선택·심화할 가치가 있는가?
5. 실제 PRO Evidence로 이어지는가?
6. 지금 만들 필요가 있는가, Map/Backlog에만 두어도 되는가?

> **현재 성장 목표에 직접 기여하면 DO, 좋지만 지금 필요 없으면 DEFER, 복리 효과가 낮으면 DROP.**
