# Repository Map

V3의 미래 Repo 구조는 **논리적으로는 지금 설계**하되 **물리 폴더는 현재 필요한 만큼만 생성**한다.

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

## docs/ 미래 논리 구조

```text
docs/
├── 00-governance/
├── 01-master-map/
├── 02-missions/
├── 03-progress/
├── 04-learning/
├── 05-community/
├── 06-projects/
├── 07-opportunities/
├── 08-research/
├── 09-open-source/
├── 10-career/
├── 11-venture/
├── 12-portfolio/
├── 13-impact/
└── 14-resources/
```

각 영역의 목적:

- `00-governance`: 공통 규칙, 상태, 우선순위, Workcell 기준
- `01-master-map`: 성장 지도, Mission Map, Skill Map, Project Lineage
- `02-missions`: B1~B7 공식 Mission 통합 정보
- `03-progress`: Mission Gate, Growth, Skill, Activity의 현재 진행 상태
- `04-learning`: 용어, 개념, 실습, Troubleshooting, Explain
- `05-community`: Study, Code Review, Debugging Clinic, Architecture, Mentoring
- `06-projects`: Mission을 넘어 장기 성장시키는 Project Lineage
- `07-opportunities`: 공모전, Hackathon, Challenge, Seminar, Conference, Program
- `08-research`: Research Question, Literature, Experiment, Result, Publication
- `09-open-source`: 탐색, Contribution, Maintainer 활동
- `10-career`: Role Research, Portfolio, Interview, Career Evidence
- `11-venture`: Problem Discovery, User Research, Prototype, MVP, PoC, Business
- `12-portfolio`: Evidence, Case Study, Developer Growth Record
- `13-impact`: Engineering, Research, Community, Venture의 실제 영향 기록
- `14-resources`: 서적, 논문, 공식문서, 사이트, 영상 등 재사용 가능한 참고자료

기존 `Architecture`, `Evaluation`, `Professional Growth`, `Advanced`는 V3에서 독립 단계 폴더로 고정하지 않는다. 내용의 성격에 따라 Governance, Mission, Learning, Project, Research 등으로 재배치하고 성장 수준은 메타데이터로 표현한다.

## config/ 데이터 구조

```text
config/
├── missions.yaml        # 공식 Mission Source of Truth
├── growth.yaml          # Growth/Status/Priority 정의
├── skills.yaml          # 향후 Skill Matrix
├── activities.yaml      # 향후 Community/External 활동
├── projects.yaml        # 향후 Project Lineage
├── opportunities.yaml   # 외부 기회
└── resources.yaml       # 참고자료 Registry
```

`missions.yaml`에 모든 데이터를 몰아넣지 않는다.

## 물리 생성 원칙

### 지금 생성
- 현재 운영에 필요한 Governance
- Master Map
- Mission/Progress와 직접 연결되는 Config

### READY 상태
- 논리 Map과 Config에는 등록 가능
- 물리 폴더는 기본적으로 보류

### ACTIVE 상태
- 실제 결과물과 Evidence가 발생하면 폴더 생성

### DONE/ARCHIVED
- 재사용 가치가 있으면 유지
- 단순 역사 보존은 Git branch/history를 우선 사용

## 단계별 폴더 금지

다음 구조는 사용하지 않는다.

```text
core/
explore/
advanced/
pro/
expert/
```

성장 단계는 `growth_stage` 메타데이터로 관리한다.

## 예시

```text
docs/06-projects/ai-chatbot/
```

프로젝트 경로는 그대로 유지하면서:

```yaml
growth_stage: ADVANCED
status: ACTIVE
priority: RECOMMENDED
origin:
  - B7-1
  - B7-2
```

처럼 성숙도만 갱신한다.
