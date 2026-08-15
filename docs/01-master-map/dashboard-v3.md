# Dashboard V3 Design

Dashboard V3의 목적은 한 화면에 모든 정보를 쌓는 것이 아니라 다음 다섯 질문에 빠르게 답하는 것이다.

1. 나는 지금 어느 Growth Stage에 있는가?
2. 현재 ACTIVE인 것은 무엇인가?
3. 다음 READY 항목은 무엇인가?
4. 어떤 Mission/Gate가 막혀 있는가?
5. 장기적으로 어디까지 연결되는가?

## 1. Information Architecture

Dashboard는 4개 핵심 층과 2개 확장 뷰로 구성한다.

### Layer A — Growth

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

각 Stage에 다음을 표시한다.

- Stage 의미
- Stage 자체 운영 상태: ACTIVE / READY / PLANNED
- 관련 Activity 수
- 대표 Evidence
- 다음 승급/진입 조건

### Layer B — Mission

- B1~B7 Domain 카드
- B1-1~B7-2 Mission 상태
- G1~G8 Completion Gate
- 수행 상태와 학습 상태 분리
- 필수/선택은 Metadata Badge로만 표시

G1~G8은 가독성을 위해 카드 내부에서 **2열 고정**을 기본으로 한다.

### Layer C — Skill

12개 역량 축:

- Learn
- Build
- Test
- Debug
- Collaborate
- Design
- Operate
- Compete
- Research
- Communicate
- Career
- Venture

초기에는 복잡한 Radar Chart보다 Level/Heatmap/Progress Bar 중심으로 구현한다. Evidence가 충분히 축적된 뒤 Radar를 선택적으로 추가한다.

### Layer D — Activity

Activity 상태:

- ACTIVE
- READY
- PLANNED
- BLOCKED
- DONE

Activity 예:
- Study
- Code Review
- Debugging Clinic
- Hackathon
- Competition
- Research
- Open Source
- Career
- Venture

## 2. Extension Views

### Project Lineage

예:

`B5 → B6 → B7 → Hackathon → Competition → Research → Production → Venture`

프로젝트가 성장하면서 폴더를 옮기지 않고 동일 Project ID의 `growth_stage`, `status`, `evidence`만 갱신한다.

### Opportunities

공모전/해커톤/세미나/학회/지원사업 등을 Mission과 Skill에 연결한다.

기본 카드 필드:
- 이름
- Type
- Growth Stage
- Status
- Priority
- 관련 Mission
- 관련 Skill
- Deadline
- 공식 URL
- Last Checked

## 3. Home Layout

권장 상단 순서:

```text
[Header / Manual Refresh]

[Current Position]
CORE ACTIVE | EXPLORE READY | ADVANCED PLANNED | PRO PLANNED | EXPERT PLANNED

[Now / Next / Blocked]
ACTIVE  | READY | BLOCKED

[Mission Progress]
B1 B2
B3 B4
B5 B6
B7

[Current Mission Detail]
Mission Status / Learning / G1~G8

[Skill Snapshot]
12 Competency Axes

[Activities]
ACTIVE / READY / PLANNED

[Project Lineage]

[Opportunities]
```

## 4. Current Position Card

가장 위에서 사용자가 현재 위치를 즉시 인식하도록 한다.

예:

```text
Growth Journey

CORE       ● ACTIVE
EXPLORE    ○ READY
ADVANCED   △ PLANNED
PRO        △ PLANNED
EXPERT     ◇ PLANNED
```

이 카드는 Progress Percent보다 **상태와 다음 행동**을 우선한다.

## 5. Now / Next / Future

Growth Stage와 Activity Status를 별도로 보여준다.

### NOW
현재 실제 시간과 자원이 투입되는 `ACTIVE` 항목.

### NEXT
조건이 충족되어 바로 시작 가능한 `READY` 항목.

### FUTURE
`PLANNED` 항목. 미래 지도에는 보이지만 현재 작업 목록에는 과도하게 노출하지 않는다.

### BLOCKED
별도 경고 영역에서 차단 원인과 해제 조건을 표시한다.

## 6. Mission Card

Mission 카드 최소 정보:

- ID / Title
- Required/Optional
- Execution Status
- Learning Status
- Current Gate
- G1~G8
- Repository Link
- Evidence Link
- Next Action

`PASS`와 `MASTERED`를 시각적으로 동일하게 표시하지 않는다.

## 7. Refresh Policy

Progress Dashboard는 자동 30초 Polling을 사용하지 않는다.

기본 정책:

- 사용자가 `새로고침` 버튼으로 직접 요청
- 마지막 Refresh 후 **5분이 지나지 않았으면 버튼 비활성화**
- 남은 대기시간을 사용자에게 표시
- 페이지 최초 로드는 현재 배포된 JSON을 읽음
- Refresh는 GitHub 원본/생성 데이터 갱신 정책과 분리하여 설계

목표는 과도한 GitHub API 호출과 UI 흔들림을 줄이는 것이다.

## 8. Data Sources

### 현재

```text
config/missions.yaml
        ↓
scripts/sync_progress.py
        ├─ README Mission Table
        ├─ docs/03-progress/progress.md
        ├─ site/data/missions.json
        └─ site/data/workcells.json
```

### V3 목표

```text
config/missions.yaml ───────┐
config/growth.yaml ─────────┤
future skills.yaml ─────────┤
future activities.yaml ─────┼─> sync/build layer ─> site/data/*.json ─> Dashboard
future projects.yaml ───────┤
config/opportunities.yaml ──┤
config/resources.yaml ──────┘
```

각 Config의 역할을 유지하고 UI용 JSON에서 결합한다.

## 9. Progressive Dashboard

미래 기능을 처음부터 모두 구현하지 않는다.

### V3.1 — Foundation
- Growth Stage 카드
- Mission Progress 보존
- Now / Next / Blocked
- 기존 Refresh 정책 보존

### V3.2 — Skill / Activity
- 12개 Skill Matrix
- Activity Registry
- Community / Opportunity 연결

### V3.3 — Project / External
- Project Lineage
- Competition / Research / Open Source
- Evidence Count

### V3.4 — PRO / EXPERT
- Production Evidence
- Trade-off / ADR
- Leadership / Research / Venture
- Impact Map

## 10. Responsive UI

### Desktop
- 핵심 카드 2열 또는 3열
- Mission Domain은 충분한 글자 폭을 확보
- G1~G8은 2열 고정

### Mobile
- Header는 Hamburger Navigation
- Stage Rail은 세로 Stack
- Mission Card는 1열
- Gate는 2열 유지 가능 여부를 폭 기준으로 결정하되 텍스트가 잘리지 않도록 최소 너비 확보

## 11. Visual Priority

시각적 강조 순서:

1. ACTIVE
2. BLOCKED
3. READY
4. DONE
5. PLANNED

PLANNED 미래 항목은 화면을 압도하지 않도록 낮은 시각적 비중으로 표현한다.

## 12. Implementation Rule

Dashboard는 Repository 상태를 추정해서 임의로 만들지 않는다. Config/Generated JSON이 Source of Truth다.

UI에 새로운 값을 추가하려면 먼저:
1. 데이터 정의
2. Source of Truth
3. Sync/Generation
4. UI Rendering
5. Validation

순으로 진행한다.
