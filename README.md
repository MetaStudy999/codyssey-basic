# Codyssey Developer Growth OS

> Codyssey AI/SW Basic B1-1~B7-2를 중심으로 **Mission 수행 → 학습 → 문제해결 → 협업 → 심화 → 실전 → 전문가 성장**을 하나의 Control Tower에서 관리한다.

이 저장소는 개별 Mission 소스코드를 모으는 monorepo가 아니다. 실제 구현은 각 Mission Repository에서 수행하고, 이 저장소는 **Master Map + Mission Progress + Learning + Community + Project + Opportunity + Research + Open Source + Career + Venture + Portfolio + Impact**를 연결한다.

- GitHub Pages: https://metastudy999.github.io/codyssey-basic/
- Repository: https://github.com/MetaStudy999/codyssey-basic
- 실행 범위: B1-1 ~ B7-2, 총 15개 Mission/Term Project 단위
- Mission Source of Truth: `config/missions.yaml`
- Growth Source of Truth: `config/growth.yaml`

---

## 1. Growth Model

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

EXPERT 이후에는 Tech Lead/Principal, Architect/SRE, AI/Researcher, Open Source, Educator/Mentor, Founder 등으로 분기한다. 최종 목표는 칭호보다 **IMPACT**다.

상세: [Growth Model](docs/00-governance/growth-model.md)

---

## 2. 서로 섞지 않는 4개 축

| 축 | 값 | 질문 |
|---|---|---|
| **Growth Stage** | CORE → EXPLORE → ADVANCED → PRO → EXPERT | 얼마나 성장했는가? |
| **Status** | PLANNED → READY → ACTIVE → DONE | 지금 어디까지 진행됐는가? |
| **Priority** | REQUIRED / RECOMMENDED / OPTIONAL | 반드시 해야 하는가? |
| **Domain** | Mission / Learning / Community / Project / Research / Career / Venture 등 | 무엇에 관한 활동인가? |

예외 Status는 `BLOCKED`, `ARCHIVED`를 사용한다.

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

공식 필수/선택과 실제 진행 상태는 폴더가 아니라 `config/missions.yaml` Metadata로 관리한다.

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

Mission 진행 상세: [Mission Progress](docs/01-master-map/mission-progress.md)

Completion Gate:

`G1 SOURCE → G2 BUILD → G3 TEST → G4 REVIEW → G5 RUNTIME → G6 EVIDENCE → G7 LEARN → G8 MERGE`

`PASS`와 Learning `MASTERED`는 같은 의미가 아니다.

---

## 5. Mission Lifecycle

```text
COMPLETE
→ UNDERSTAND
→ BREAK
→ DEBUG
→ COLLABORATE
→ EXPLORE
→ ADVANCE
→ PRO
```

먼저 공식 Mission을 정확히 완료하고, 완성 결과물로 이해·오류실험·협업·심화·실전을 이어간다.

> **먼저 빠르게 완성하고, 최소 검증으로 정확성을 확보한 뒤, 완성 결과물로 깊게 학습한다.**

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

Growth Stage는 **얼마나 성장했는가**, 12개 축은 **무엇을 성장시키는가**를 나타낸다.

---

## 7. Master Map

- [Master Map](docs/01-master-map/README.md)
- [Growth Map](docs/01-master-map/growth-map.md)
- [Current State](docs/01-master-map/current-state.md)
- [Mission Progress](docs/01-master-map/mission-progress.md)
- [Mission Dependency Map](docs/01-master-map/mission-dependency-map.md)
- [Growth Routing](docs/01-master-map/growth-routing.md)
- [Repository Map](docs/01-master-map/repository-map.md)
- [Dashboard Design](docs/01-master-map/dashboard-v3.md)

Canonical docs 구조:

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

---

## 8. Master Map + Progressive Repository

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

`core/`, `advanced/`, `pro/` 같은 단계별 폴더를 만들지 않는다.

```text
Folder = Domain
Stage = Metadata
Status = Progress
Priority = Importance
```

상세: [Repository Policy](docs/00-governance/repository-policy.md)

---

## 9. Source of Truth

```text
config/missions.yaml
    └─ Mission 수행 / G1~G8 / Learning

config/growth.yaml
    └─ Growth Stage / Status / Priority

config/skills.yaml
    └─ 12 Competency Axis / Evidence Level

config/activities.yaml
    └─ 실제 Activity

config/projects.yaml
    └─ Project Lineage

config/opportunities.yaml
    └─ 외부 Opportunity Availability / Fit

config/resources.yaml
    └─ Learning / Research Resource Registry
```

---

## 10. Dashboard

Dashboard는 다음을 분리해 보여준다.

```text
Growth
  CORE / EXPLORE / ADVANCED / PRO / EXPERT

Mission
  B1~B7 / G1~G8

Skill
  12 Competency Axis

Activity / Project / Opportunity
  실제 수행 상태 / 외부 기회 상태
```

Mission 자동화:

```text
config/missions.yaml + config/waves/*.yaml
        ↓
scripts/sync_progress.py
        ├─ README Mission Table
        ├─ docs/01-master-map/mission-progress.md
        ├─ site/data/missions.json
        └─ site/data/workcells.json
```

Growth 자동화:

```text
Growth/Skill/Activity/Project/Opportunity Config
        ↓
scripts/sync_growth.py
        ├─ docs/01-master-map/current-state.md
        └─ site/data/*.json
```

수동 Mission Refresh + 5분 Cooldown 정책을 유지한다.

---

## 11. One Project → Many Outcomes

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

프로젝트를 계속 새로 버리기보다 하나의 문제와 결과물을 Project Lineage로 발전시킨다.

---

## 12. Stable Operation

현재 `main`은 Growth OS V3 Canonical 구조를 사용한다.

- active 운영 문서는 현재 규칙과 현재 상태를 중심으로 유지한다.
- 과거 재구축·Migration 상세는 Git history와 PR #73~#77에서 추적한다.
- V3 이전 기준본은 `archive/pre-growth-os-v3`에 보존한다.
- 새 변경은 현재 Canonical Domain을 기준으로 설계한다.
- 비필수 개선은 CORE Mission PASS를 지연시키지 않는다.

변경 판단:

> **현재 목표를 직접 앞당기면 DO, 가치 있지만 지금 필요 없으면 DEFER, 복리 효과가 낮으면 DROP.**
