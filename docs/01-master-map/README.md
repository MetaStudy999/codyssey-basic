# Codyssey Developer Growth OS — Master Map

이 디렉터리는 Growth OS의 **현재 위치, 장기 성장 방향, Mission 연결, Project/Activity Routing**을 관리한다.

## 1. 성장 단계

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

EXPERT 이후에는 단일 서열이 아니라 Tech Lead/Principal, Architect/SRE, AI/Researcher, Open Source, Educator/Mentor, Founder 등의 전문 경로로 분기하고 최종적으로 IMPACT를 지향한다.

## 2. 핵심 지도

- [Growth Map](./growth-map.md) — 전체 성장 단계와 전문 경로
- [Current State](./current-state.md) — Config에서 생성되는 현재 Growth/Registry 상태
- [Mission Progress](./mission-progress.md) — `config/missions.yaml`에서 생성되는 B1-1~B7-2 진행표
- [Mission Dependency Map](./mission-dependency-map.md) — Curriculum 흐름과 의존성 분류
- [Growth Routing](./growth-routing.md) — 새로운 활동·기술·성과를 Domain/Stage/Status/Priority로 분류하는 기준
- [Repository Map](./repository-map.md) — 현재 Canonical 구조와 점진 확장 원칙
- [Dashboard Design](./dashboard-v3.md) — Growth/Mission/Skill/Activity Dashboard 정보구조

## 3. 읽는 법

```text
무엇에 관한가?        → Domain
얼마나 성장했는가?     → Growth Stage
지금 어디까지 왔는가?  → Status
반드시 해야 하는가?    → Priority
무엇으로 증명하는가?    → Evidence
```

- Growth Stage는 장기 성장 수준이다.
- Mission Gate는 공식 Mission 수행 위치다.
- Skill Level은 특정 역량의 Evidence 수준이다.
- Activity/Project Status는 실제 작업의 진행 상태다.
- Opportunity Availability는 외부 기회 자체의 상태다.
- Priority는 수행 중요도다.
- Domain은 Mission, Learning, Community, Research 등 활동의 성격이다.

이 축들을 서로 섞지 않는다.

## 4. 현재 Canonical 구조

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

Mission 상태는 `config/missions.yaml`, Growth/Skill/Activity/Project/Opportunity 상태는 각 V3 Registry를 Source of Truth로 사용한다.

## 5. 운영 원칙

### Master Map First
미래 전체 방향은 먼저 설계한다.

### Progressive Repository
실제 폴더는 현재 필요한 만큼만 만든다.

### Folder = Domain, Stage = Metadata
`core/`, `advanced/`, `pro/` 같은 성장 단계 폴더를 만들지 않는다.

### Evidence-based Growth
상태와 숙련도는 가능한 한 실제 Test, Runtime, PR, Review, Experiment, Deployment, User Result 등으로 뒷받침한다.

### Mission PASS before Overengineering
비필수 고도화가 현재 CORE Mission 완료를 지연시키지 않는다.

## 6. 과거 V3 전환 기록

V3 재구축·이관·Legacy Cleanup의 상세 과정은 active Master Map에 중복 보관하지 않는다. 이전 기준본은 `archive/pre-growth-os-v3`와 Git history, PR #73~#77에서 추적한다.

현재 `main`은 V3 Canonical 구조를 운영 기준으로 사용한다.
