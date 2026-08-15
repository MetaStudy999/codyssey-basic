# Detailed Audit — Architecture / Evaluation / Portfolio / Resources

대상:

- `docs/05-architecture`
- `docs/06-evaluation`
- `docs/07-portfolio`
- `docs/08-resources`

V3에서는 네 영역의 **콘텐츠는 대부분 보존**하되 정보구조상 역할을 더 명확하게 나눈다.

---

# 1. `05-architecture`

## 현재 역할

현재 문서는 다음을 한 곳에서 요약한다.

- Curriculum Map
- 주요 Mission Dependency
- Technology Progression
- 미션 간 능력 연결 설명

현재 내용은 유효하지만, `Architecture`라는 이름 아래에는 서로 다른 개념이 섞여 있다.

```text
Curriculum Architecture
Mission Dependency
Technology Progression
System Architecture
Project Architecture
ADR
```

V3에서는 이들을 분리한다.

## Decision

`05-architecture/`: **MERGE / RETIRE AS TOP-LEVEL DOMAIN**

콘텐츠 이동:

| 내용 | V3 Target |
|---|---|
| Curriculum Map | `01-master-map/growth-map.md` 또는 mission-map |
| Mission Dependency | `01-master-map/mission-map.md` + machine-readable Mission metadata |
| Technology Progression | `01-master-map/growth-map.md` / `04-learning` |
| 실제 System Architecture | 각 Mission/Project 문서 |
| ADR | 각 Project의 Architecture/Decision 기록 |
| Project Lineage | `01-master-map` + `06-projects` |

즉 Architecture는 사라지는 것이 아니라 **Design 역량과 Project 산출물로 이동**한다.

## Important Rule

UI 코드에 Dependency를 하드코딩하는 대신 최종적으로 Config/Generated Data에서 제공한다.

---

# 2. `06-evaluation`

## 현재 역할

현재 문서는 다음 Traceability를 정의한다.

```text
Official Source
→ Requirement
→ Implementation
→ Test
→ Review
→ Runtime
→ Evidence
→ PASS
```

또한:

- 일반 Best Practice를 공식 요구로 만들지 않음
- Runtime 필요 항목은 문서만으로 PASS 금지
- 평가문항/코드/테스트/증빙의 일관성 요구
- 비필수 개선은 Mission PASS를 지연시키지 않음

등 중요한 Governance 원칙을 포함한다.

## Decision

`06-evaluation/`: **MERGE / RETIRE AS TOP-LEVEL DOMAIN**

이유는 Evaluation이 독립 성장 Domain이라기보다 **모든 Mission에 적용되는 Governance + Traceability 계약**이기 때문이다.

V3 Target:

```text
00-governance/
  └─ evaluation/traceability policy 또는 기존 protocol과 통합

templates/
  ├─ requirements.md
  ├─ traceability.md
  └─ evidence.md

02-missions/<mission>/
  └─ Evaluation Summary / Evidence Links
```

기존 Evaluation 원칙은 반드시 보존한다.

### Advanced Backlog 표현 수정

기존 문서의:

`개선 아이디어 → Advanced Backlog`

는 V3에서 다음으로 일반화한다.

```text
현재 Mission PASS에 필수 → CORE / REQUIRED
도움이 되지만 당장 필요 없음 → DEFER
선택 심화 → growth_stage: ADVANCED
탐색 활동 → growth_stage: EXPLORE
```

---

# 3. `07-portfolio`

## 현재 역할

현재 Portfolio는 이미 좋은 원칙을 가지고 있다.

```text
Project + Competency + Evidence
```

또한 GitHub Pages `site/`를 Presentation Layer로 정의한다.

## Decision

콘텐츠: **KEEP + EXPAND**

경로: **MOVE `07-portfolio` → `12-portfolio`**

번호를 이동하는 이유는 V3에서 Mission/Community/Project/Opportunity/Research/Open Source/Career/Venture가 Portfolio보다 앞에서 Evidence를 생산하고, Portfolio가 이를 **재구성하여 보여주는 Output Layer**가 되기 때문이다.

## V3 Portfolio 3-Layer Model

### Layer 1 — Evidence

```text
Commit
PR
Issue
Test
Runtime
Screenshot
Deployment
Architecture Decision
Experiment
Review
Presentation
```

### Layer 2 — Case Study

```text
Problem
Context
Requirement
Architecture
Implementation
Troubleshooting
Trade-off
Result
Evidence
Reflection
```

### Layer 3 — Narrative

```text
왜 시작했는가
어떻게 성장했는가
무엇을 실패했는가
무엇을 개선했는가
어떤 개발 역량을 증명하는가
다음 단계는 무엇인가
```

## Portfolio Skill Mapping

기존 7개 기술 Domain 역량을 유지하되 V3 12개 Competency Axis와 함께 연결한다.

예:

```text
Project: B6 Cloud Deployment
Domain: Cloud & AI API
Competencies:
  - Build
  - Test
  - Debug
  - Design
  - Operate
  - Communicate
```

Portfolio가 자체 Skill Source of Truth가 되지 않도록 Config/Evidence를 참조한다.

---

# 4. `08-resources`

## 현재 역할

현재 Resource 카테고리는 매우 넓고 재사용 가치가 높다.

- Official Docs / Standards / RFC
- Books
- Papers
- Digital Libraries
- MOOC
- Conference Talks
- Professional Organizations
- Engineering Blogs / Postmortems
- Datasets / Benchmarks
- Research News
- Resource Map / Research Lineage

## Decision

콘텐츠: **KEEP + NORMALIZE**

경로: **MOVE `08-resources` → `14-resources`**

Resources는 성장 과정 전체를 지원하는 Reference Layer이므로 최종 번호로 두어도 논리적으로 자연스럽다.

`config/resources.yaml`은 그대로 보존하고 새 경로와 연결한다.

## V3에서 수정해야 할 중요 문제

현재 Resource 우선순위에는:

```text
CORE
RECOMMENDED
EXPLORE
```

가 함께 사용된다.

이것은 V3의 새로운 분리 원칙에서는 혼동을 만든다.

- `CORE`, `EXPLORE` = Growth Stage
- `RECOMMENDED` = Priority

따라서 다음처럼 분리해야 한다.

```yaml
resource:
  growth_stage: CORE
  priority: REQUIRED
```

또는:

```yaml
resource:
  growth_stage: EXPLORE
  priority: OPTIONAL
```

### V3 Resource Metadata 권장

```yaml
id:
title:
type:
source_url:
source_authority:
related_missions: []
related_skills: []
growth_stage: CORE | EXPLORE | ADVANCED | PRO | EXPERT
priority: REQUIRED | RECOMMENDED | OPTIONAL
status: PLANNED | READY | ACTIVE | DONE | ARCHIVED
last_checked:
notes:
```

모든 Resource에 모든 필드를 강제하지는 않는다. 자동화 필요성이 확인될 때 Schema를 확정한다.

## External URL 정책

현재 README의 전문 사이트 목록은 유용하므로 보존한다. 다만 최신성 검증이 필요한 자료와 안정적인 표준 문서를 구분하고 `last_checked`를 기록하는 방향이 좋다.

---

# 5. V3 이동 요약

```text
OLD
05-architecture
06-evaluation
07-portfolio
08-resources

        ↓

V3
Architecture concepts
  → 01-master-map / 02-missions / 06-projects

Evaluation
  → 00-governance / templates / 02-missions

Portfolio
  → 12-portfolio

Resources
  → 14-resources
```

## Physical Migration Rule

실제 이동은 아직 수행하지 않는다.

순서:

1. 새 Target README/구조 작성
2. 링크 Map 생성
3. 기존 콘텐츠 Migration
4. README/AGENTS/site 링크 갱신
5. Link Check
6. 자동화 회귀 검증
7. 기존 폴더 삭제

---

# Audit Result

| Area | Decision |
|---|---|
| Architecture | MERGE into Master Map / Mission / Project |
| Evaluation | MERGE into Governance / Templates / Mission |
| Portfolio | KEEP + EXPAND + MOVE to 12 |
| Resources | KEEP + NORMALIZE + MOVE to 14 |

특히 Resources의 `CORE/RECOMMENDED/EXPLORE` 혼합 표기는 V3에서 **Growth Stage와 Priority를 분리**하도록 반드시 정리한다.
