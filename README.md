# Codyssey Basic — Beginner First Growth OS

> **진도가 아직 0이어도 B1-1부터 한 단계씩 시작하면 됩니다.**  
> 이 저장소는 B1-1~B7-2 Mission 수행, 학습, 검증, 성장 기록을 연결하는 Control Tower입니다.

- **처음 시작:** [GitHub Pages Dashboard](https://metastudy999.github.io/codyssey-basic/)
- **현재 새 도전:** B1-1 · 컴퓨터가 알아서 자기 상태를 점검하게 만들기
- **현재 단계:** 1/8 · 미션 이해하기
- **새 Mission Clear:** 0/15
- **현재 Cycle 문서:** [새 Mission Clear Cycle](docs/01-master-map/mission-clear-cycle.md)

---

## 1. 처음이라면 이것만 보면 됩니다

```text
B1-1부터 시작
      ↓
1. 미션 이해하기
      ↓
2. 직접 만들기
      ↓
3. 테스트하기
      ↓
4. 검토하기
      ↓
5. 실제로 실행하기
      ↓
6. 증빙 남기기
      ↓
7. 이해하고 설명하기
      ↓
8. 완료 반영하기
      ↓
다음 Mission
```

Dashboard는 항상 다음 세 가지를 먼저 보여줍니다.

1. **나는 지금 어디에 있는가?**
2. **지금 무엇을 해야 하는가?**
3. **전체 중 얼마나 진행했는가?**

한꺼번에 모든 기술을 알 필요는 없습니다. 현재 단계에서 필요한 한 가지 행동부터 진행합니다.

---

## 2. 새 Mission Clear Cycle

현재 도전의 Source of Truth는 `config/cycles/current.yaml`입니다.

```text
Cycle        새 미션 클리어 도전
Current      B1-1
Step         1 / 8
Clear        0 / 15
```

과거에 수행했던 결과는 삭제하지 않습니다. `config/history/`와 기존 Official Integration 기록에 보존합니다.

예를 들어 B2-1의 이전 `PASS`는 **현재 새 도전의 완료로 계산하지 않고 `Previous PASS`로만 표시**합니다.

```text
Current Cycle  ≠  Previous History
```

---

## 3. B1 → B7 전체 여행

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

---

## 4. Official Integration 기록

아래 표는 `config/missions.yaml`에서 자동 생성되는 **기존 공식 통합 상태**입니다. 새 Mission Clear Cycle과 동일한 의미가 아닙니다.

<!-- AUTO:MISSION_PROGRESS:START -->

| ID | 제목 | 공식 구분 | 현재 상태 | 현재 Gate | 학습 | Repository |
|---|---|---|---|---|---|---|
| B1-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor) |
| B1-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting) |
| B2-1 | 나만의 용돈 기입장 프로그램 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b2-1-budget-tracker) |
| B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b2-2-git-team-collaboration) |
| B3-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b3-1-fast-data-store) |
| B3-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b3-2-file-change-tracker) |
| B4-1 | 나를 소개하는 웹페이지 처음부터 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b4-1-portfolio) |
| B4-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | 선택 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b4-2-interactive-web-app) |
| B5-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design) |
| B5-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | 선택 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-2-fastapi-crud-app) |
| B5-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | 선택 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b5-3-fastapi-auth-service) |
| B6-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b6-1-cloud-deployment) |
| B6-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | 필수 | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b6-2-ai-code-summarizer) |
| B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | 필수 · Term Project | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b7-1-web-ai-chatbot) |
| B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | 구분 미지정 · Term Project | TODO | G1 SOURCE | NOT-STUDIED | [repo](https://github.com/MetaStudy999/codyssey-basic-b7-2-advanced-ai-chatbot) |

<!-- AUTO:MISSION_PROGRESS:END -->

상세: [Official Mission Progress](docs/01-master-map/mission-progress.md)

---

## 5. Beginner 화면과 전문 화면

### 처음 시작하는 사람

Dashboard 상단의 다음 요소만 사용하면 됩니다.

- 현재 Mission
- 지금 할 일 하나
- 8단계 따라하기
- 쉬운 설명
- 막혔어요
- B1~B7 전체 여행

### 자세한 정보가 필요한 사람

아래 전문 영역에서 확인합니다.

- Growth Stage
- Official G1~G8
- Workcell Live Status
- Dependency
- Skill Evidence
- Governance

전문 정보는 삭제하지 않고 **Progressive Disclosure(점진적 정보 공개)** 방식으로 뒤에 배치합니다.

---

## 6. Growth Model

```text
CORE → EXPLORE → ADVANCED → PRO → EXPERT → SPECIALIZATION → IMPACT
```

Mission을 먼저 정확히 완료하고, 이후 학습·문제해결·협업·심화·실전으로 확장합니다.

> **먼저 빠르게 완성하고, 최소 검증으로 정확성을 확보한 뒤, 완성 결과물로 깊게 학습합니다.**

---

## 7. Source of Truth

```text
config/cycles/current.yaml
    └─ 현재 새 Mission Clear Cycle / 현재 Mission / Beginner 상태

config/history/
    └─ 이전 수행 기록

config/missions.yaml
    └─ Official Mission / G1~G8 / Learning 상태

config/growth.yaml
    └─ Growth Stage / Status / Priority

config/skills.yaml
    └─ 12 Competency Axis / Evidence Level

config/activities.yaml
    └─ 실제 Activity

config/projects.yaml
    └─ Project Lineage

config/opportunities.yaml
    └─ 외부 Opportunity
```

생성 흐름:

```text
Mission + Cycle + History + Wave Config
        ↓
scripts/sync_progress.py
        ├─ Official Mission Progress
        ├─ Mission Clear Cycle
        ├─ site/data/missions.json
        ├─ site/data/cycle.json
        └─ site/data/workcells.json
```

---

## 8. 문서 지도

- [Master Map](docs/01-master-map/README.md)
- [새 Mission Clear Cycle](docs/01-master-map/mission-clear-cycle.md)
- [Mission Dependency Map](docs/01-master-map/mission-dependency-map.md)
- [Dashboard V3.1 Design](docs/01-master-map/dashboard-v3.md)
- [Mission 정보](docs/02-missions/README.md)
- [Learning](docs/03-learning/README.md)
- [Governance](docs/00-governance/README.md)

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

## 9. 운영 원칙

1. **Beginner First** — 처음 보는 사람도 B1-1의 첫 행동을 바로 찾을 수 있어야 합니다.
2. **One Next Action** — 현재 단계에서 가장 먼저 할 행동 하나를 우선 보여줍니다.
3. **History ≠ Current Cycle** — 과거 PASS와 현재 새 도전 진행률을 섞지 않습니다.
4. **Evidence First** — 실제 검증되지 않은 결과를 PASS로 표시하지 않습니다.
5. **Mission PASS before Overengineering** — 비필수 고도화가 현재 미션 완료를 지연시키지 않습니다.
6. **Manual Refresh** — Mission Live 상태는 자동 polling하지 않고 사용자가 갱신하며 5분 Cooldown을 유지합니다.

현재 `main`은 Growth OS V3 Canonical 구조를 기반으로 운영하며, Beginner First Mission Clear Cycle을 그 위에 추가합니다.
