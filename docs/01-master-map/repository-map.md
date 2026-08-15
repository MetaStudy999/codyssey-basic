# Repository Map

Growth OS는 **전체 구조를 논리적으로 먼저 설계하고, 물리 폴더는 실제 작업이 생길 때 점진적으로 확장**한다.

## 1. Root

```text
codyssey-basic/
├── README.md
├── AGENTS.md
├── CHANGELOG.md
├── config/
├── docs/
├── scripts/
├── site/
└── templates/
```

## 2. Canonical docs 구조

```text
docs/
├── 00-governance/
├── 01-master-map/
├── 02-missions/
├── 03-learning/
├── 04-community/
├── 05-projects/
├── 06-opportunities/
├── 07-research/
├── 08-open-source/
├── 09-career/
├── 10-venture/
├── 11-portfolio/
└── 12-impact/
```

### Domain 책임

- `00-governance` — Source, Growth/Status/Priority, Traceability, Workcell, Gate, Repository 정책
- `01-master-map` — Growth Map, Mission Progress, Dependency, Current State, Routing, Dashboard
- `02-missions` — B1~B7 Mission 통합 정보와 개별 Repository 연결
- `03-learning` — Vocabulary, 개념, 실습, Troubleshooting, Resources
- `04-community` — Study, Code Review, Debugging Clinic, Architecture Cafe, Mentoring
- `05-projects` — Mission 결과를 장기 Project Lineage로 성장시키는 영역
- `06-opportunities` — Competition, Hackathon, Seminar, Conference, Program 등 외부 기회
- `07-research` — Research Question, Literature, Experiment, Result, Publication
- `08-open-source` — 탐색, Contribution, Maintainer 활동
- `09-career` — Role Research, Interview, Career Evidence
- `10-venture` — Problem Discovery, User Research, Prototype, MVP, PoC, Business
- `11-portfolio` — Evidence, Case Study, Developer Growth Narrative
- `12-impact` — Engineering, Research, Community, Venture의 실제 변화와 영향

## 3. Progress 위치

Progress는 독립 Domain이 아니라 여러 Source of Truth의 현재 상태를 보여주는 View다.

```text
config/missions.yaml
      ↓
scripts/sync_progress.py
      ├─ README Mission Table
      ├─ docs/01-master-map/mission-progress.md
      ├─ site/data/missions.json
      └─ site/data/workcells.json
```

Growth 쪽 현재 상태:

```text
config/growth.yaml
config/skills.yaml
config/activities.yaml
config/projects.yaml
config/opportunities.yaml
      ↓
scripts/sync_growth.py
      ├─ docs/01-master-map/current-state.md
      └─ site/data/*.json
```

생성 결과물에서 상태를 직접 수정하지 않는다.

## 4. Learning / Resources 위치

```text
docs/03-learning/
├── vocabulary/
├── basic-master-vocabulary.md
├── vocabulary-learning-plan.md
├── vocabulary-quality-audit.md
├── resources/
└── ...

config/resources.yaml
```

Resource는 별도 성장 단계가 아니라 Learning/Research를 지원하는 Reference Layer다.

## 5. Architecture / Evaluation 위치

Architecture와 Evaluation은 별도 상위 Domain으로 분리하지 않는다.

- Cross-Mission Dependency → `01-master-map`
- Governance/ADR/Traceability → `00-governance`
- Mission-specific Architecture/Evaluation → `02-missions` 또는 개별 Mission Repository
- Project Architecture/Experiment → `05-projects` 또는 관련 Project
- Research Design → `07-research`

## 6. config 데이터 구조

```text
config/
├── missions.yaml        # 공식 Mission / G1~G8 Source of Truth
├── growth.yaml          # Growth Stage / Status / Priority
├── skills.yaml          # 12 Competency Axis / Evidence Level
├── activities.yaml      # Community/External 실제 활동
├── projects.yaml        # Project Lineage
├── opportunities.yaml   # 외부 Opportunity Availability/Fit
├── resources.yaml       # Learning/Research Resource Registry
└── waves/               # Mission Workcell coordination
```

한 Config에 모든 개념을 몰아넣지 않는다.

## 7. Generated / Presentation Layer

```text
scripts/
├── sync_progress.py
├── sync_growth.py
├── validate_v3.py
└── browser_smoke.py

site/data/
├── missions.json
├── workcells.json
├── growth.json
├── skills.json
├── activities.json
├── projects.json
└── opportunities.json
```

`site/`는 Source of Truth가 아니라 Presentation Layer다.

## 8. Progressive Repository 규칙

### PLANNED
- Map/Registry에만 등록
- 세부 폴더 생성 보류

### READY
- 시작 조건은 충족
- 아직 독립 결과물이 없으면 폴더 생성 보류

### ACTIVE
- 실제 산출물·Evidence·실험·팀 활동이 생기면 Just-in-Time으로 세부 폴더 생성

### DONE / ARCHIVED
- 재사용 가치가 있으면 유지
- 단순 역사 보존은 Git history/branch를 우선

## 9. 독립 폴더 생성 기준

다음 조건 중 2개 이상이면 독립 폴더를 고려한다.

- 파일 3개 이상 예상
- 여러 주에 걸쳐 지속
- 독립 결과물 존재
- 별도 Evidence 필요
- 별도 팀/담당자 존재
- 코드·데이터·실험 결과 발생
- 다른 활동에서 재사용

Markdown 한 장이면 충분한 항목은 새 폴더를 만들지 않는다.

## 10. 단계별 폴더 금지

다음 구조는 만들지 않는다.

```text
core/
explore/
advanced/
pro/
expert/
```

폴더는 **무엇인가(Domain)** 를 나타내고 Growth Stage는 Metadata로 관리한다.

예:

```text
docs/05-projects/ai-chatbot/
```

```yaml
growth_stage: ADVANCED
status: ACTIVE
priority: RECOMMENDED
origin:
  - B7-1
  - B7-2
```

Project가 PRO로 성장해도 폴더를 옮기지 않고 Metadata와 Evidence를 갱신한다.

## 11. 역사 보존

V3 이전 구조와 재구축 과정은 active docs에 중복 보관하지 않는다. 필요하면 Git history, PR #73~#77, `archive/pre-growth-os-v3`에서 추적한다.
