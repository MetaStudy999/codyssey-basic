# Repository Map

V3의 미래 Repo 구조는 **논리적으로 먼저 설계**하고 **물리 폴더는 현재 필요한 만큼만 생성**한다.

## Root

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

## V3 Primary docs 구조

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

각 영역의 목적:

- `00-governance`: Source, Growth/Status/Priority, Traceability, Workcell 운영 규칙
- `01-master-map`: Growth Map, Mission Dependency, Current State, Migration, Project/Growth Routing
- `02-missions`: B1~B7 공식 Mission 통합 정보
- `03-learning`: 용어, 개념, 실습, Troubleshooting, Evaluation, Resources
- `04-community`: Study, Code Review, Debugging Clinic, Architecture Cafe, Mentoring
- `05-projects`: Mission을 장기 Project Lineage로 성장시키는 영역
- `06-opportunities`: 공모전, Hackathon, Challenge, Seminar, Conference, Program 등 외부 기회
- `07-research`: Research Question, Literature, Experiment, Result, Publication
- `08-open-source`: 탐색, Contribution, Maintainer 활동
- `09-career`: Role Research, Case Study, Interview, Career Evidence
- `10-venture`: Problem Discovery, User Research, Prototype, MVP, PoC, Business
- `11-portfolio`: Evidence, Case Study, Developer Growth Record
- `12-impact`: Engineering, Research, Community, Venture의 실제 영향 기록

## Progress와 Resources의 위치

V3에서 `Progress`와 `Resources`는 독립 성장 Domain이 아니다.

### Progress

- 전체 현재 위치: `docs/01-master-map/current-state.md`
- Dashboard Presentation: `site/`
- Mission G1~G8 Source of Truth: `config/missions.yaml`
- Growth/Skill/Activity/Project Source: 각 `config/*.yaml`

기존 `docs/03-progress/progress.md`는 현재 `sync_progress.py`와 연결된 **Legacy Compatibility Output**이므로 V3 Cutover 전까지 유지한다. V3 자동화가 완전히 대체한 뒤 새 위치로 전환하거나 제거한다.

### Resources

- 학습/연구용 문서: `docs/03-learning/resources/`
- 기계 판독 Registry: `config/resources.yaml`

따라서 별도의 최상위 `resources` Domain을 만들지 않는다.

## 기존 대분류 처리

기존 `Architecture`, `Evaluation`, `Professional Growth`, `Advanced`는 V3에서 독립 단계 폴더로 고정하지 않는다.

- Architecture Dependency → `01-master-map`
- Evidence/Evaluation Traceability → `00-governance`
- Mission별 Architecture/Evaluation → `02-missions` 또는 개별 Mission Repository
- Professional Growth → Learning/Community/Project/Research/OSS/Career/Venture 등 실제 Domain
- Advanced Backlog → 해당 Domain + `growth_stage: ADVANCED`

## config/ 데이터 구조

```text
config/
├── missions.yaml        # 공식 Mission/G1~G8 Source of Truth
├── growth.yaml          # Growth Stage / Status / Priority
├── skills.yaml          # 12 Competency Axis와 Evidence Level
├── activities.yaml      # Community/External 실제 활동
├── projects.yaml        # Project Lineage
├── opportunities.yaml   # 외부 Opportunity Availability/Fit
├── resources.yaml       # 학습/연구 참고자료 Registry
└── waves/               # Mission Workcell coordination
```

한 Config에 모든 개념을 몰아넣지 않는다.

## Generated / Presentation Layer

```text
scripts/
├── sync_progress.py     # 기존 Mission G1~G8 동기화
└── sync_growth.py       # V3 Growth/Skill/Activity/Project/Opportunity 동기화

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

## 물리 생성 원칙

### PLANNED
- Map/Registry에만 등록
- 세부 폴더 생성 보류

### READY
- 시작 조건은 충족
- 독립 결과물이 없으면 세부 폴더를 만들지 않음

### ACTIVE
- 여러 파일, Evidence, 실험, 팀 활동 등 독립 결과물이 생기면 Just-in-Time으로 세부 폴더 생성

### DONE / ARCHIVED
- 재사용 가치가 있으면 유지
- 단순 역사 보존은 Git history/branch 우선

## 단계별 폴더 금지

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
