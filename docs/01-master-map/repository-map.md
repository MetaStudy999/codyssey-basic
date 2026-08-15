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

- `00-governance`: 공통 규칙, 상태, 우선순위, Workcell 기준
- `01-master-map`: 성장 지도, Mission Map, Skill Map, Project Lineage
- `02-missions`: B1~B7 공식 Mission 통합 정보
- `03-learning`: 용어, 개념, 실습, Troubleshooting, Explain
- `04-community`: Study, Code Review, Debugging Clinic, Architecture, Mentoring
- `05-projects`: Mission을 넘어 장기 성장시키는 Project Lineage
- `06-opportunities`: 공모전, Hackathon, Challenge, Seminar, Conference, Program
- `07-research`: Research Question, Literature, Experiment, Result, Publication
- `08-open-source`: 탐색, Contribution, Maintainer 활동
- `09-career`: Role Research, Portfolio, Interview, Career Evidence
- `10-venture`: Problem Discovery, User Research, Prototype, MVP, PoC, Business
- `11-portfolio`: Evidence, Case Study, Developer Growth Record
- `12-impact`: Engineering, Research, Community, Venture의 실제 영향 기록

## config/ 데이터 구조

```text
config/
├── missions.yaml        # 공식 Mission Source of Truth
├── growth.yaml          # Growth/Status/Priority 정의
├── skills.yaml          # 향후 Skill Matrix
├── activities.yaml      # 향후 Community/External 활동
├── projects.yaml        # 향후 Project Lineage
└── opportunities.yaml   # 향후 외부 기회
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
docs/05-projects/ai-chatbot/
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
