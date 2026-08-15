# Detailed Audit — Opportunities / Professional Growth / Advanced

대상:

- `docs/09-opportunities`
- `docs/10-professional-growth`
- `docs/11-advanced`
- `config/opportunities.yaml`

이 세 영역은 V3에서 삭제할 대상이 아니라 **현재보다 더 정확한 Domain + Stage 구조로 분해할 대상**이다.

---

# 1. `09-opportunities`

## 현재 가치

현재 Opportunities는 이미 다음 외부 활동을 포함한다.

- Competition / Contest
- Hackathon
- Seminar / Conference / Meetup
- Call for Papers / Projects / Participants
- Research Opportunity
- Open Source Opportunity
- Grant / Government Support
- Startup / Accelerator / Demo Day

또한 공식 URL, 주최기관, 마감일, 행사일, 관련 Domain/Mission, 난이도, 기대성과, 마지막 확인일을 기록하도록 한다.

이 구조는 V3에서도 매우 유용하다.

## Decision

콘텐츠: **KEEP + REWRITE**

경로: **MOVE `09-opportunities` → `07-opportunities`**

이유: Opportunity는 CORE 이후 EXPLORE를 여는 대표적 외부 진입점이며 Project/Research/Career/Venture로 이어지는 Router 역할을 한다.

## 현재 Status Model 문제

현재 `config/opportunities.yaml`은:

```text
NOW / NEXT / WATCH / ARCHIVE
```

를 사용한다.

이 값들은 서로 다른 두 개념을 한 축에 섞는다.

- `NOW / NEXT` = 시간적 가용성
- `WATCH` = 사용자의 관심/행동 상태
- `ARCHIVE` = Lifecycle 상태

V3에서는 분리한다.

### A. User Activity Status

```text
PLANNED
READY
ACTIVE
BLOCKED
DONE
ARCHIVED
```

### B. Opportunity Availability

외부 기회의 시간 상태를 별도 필드로 둔다.

```text
UPCOMING
OPEN
CLOSED
UNKNOWN
```

예:

```yaml
id: example-ai-hackathon
type: hackathon
availability: OPEN
status: READY
growth_stage: EXPLORE
priority: OPTIONAL
```

즉 대회가 지금 `OPEN`이어도 사용자가 참가하지 않기로 했다면 `status: ARCHIVED` 또는 `PLANNED`일 수 있다.

## Opportunity Decision Flow

```text
DISCOVER
  ↓
FIT CHECK
  ↓
PLANNED
  ↓
READY
  ↓
ACTIVE
  ↓
SUBMIT / PARTICIPATE
  ↓
DONE
  ↓
REUSE
```

외부 기회 자체의 마감 여부와 사용자의 수행 상태를 혼동하지 않는다.

## Opportunity Fit

향후 Registry에서 다음 요소를 평가할 수 있다.

- Current Mission Alignment
- Skill Gap Value
- Project Reuse
- Evidence Value
- Collaboration Value
- Career/Research/Venture Link
- Time Cost
- Context Switching Cost

점수 자체를 절대 기준으로 만들기보다 GO / HOLD / SKIP 판단 보조로 사용한다.

---

# 2. `10-professional-growth`

## 현재 가치

현재 Professional Growth 문서는 다음과 같은 매우 넓은 성장 요소를 보유한다.

- Foundations
- Competency / Gap Analysis
- Product & UX
- Standards Reading
- Source Code Reading
- Open Source Contribution
- System Design
- Incident Analysis
- Security
- Data & Evaluation
- Production Engineering
- Research
- Governance & Ethics
- Knowledge System
- Technical Communication
- Professional Output
- Community & Mentoring
- Expert Radar
- Growth Review

이 내용은 V3의 철학과 잘 맞지만 `Professional Growth` 한 폴더 안에 모두 두면 새 Domain 구조와 중복된다.

## Decision

`10-professional-growth`: **SPLIT / MERGE / RETIRE AS TOP-LEVEL DOMAIN**

`Professional Growth`라는 개념은 전체 OS의 목적이므로 유지하되 물리적 단일 폴더는 폐지한다.

## V3 Distribution

| Existing Topic | V3 Target |
|---|---|
| Foundations | `04-learning` / Skill Map |
| Competency / Gap Analysis | Skill Registry / Dashboard |
| Product & UX | `06-projects` / `11-venture` |
| Standards Reading | `04-learning` / `14-resources` |
| Source Code Reading | `04-learning` / `09-open-source` |
| Open Source Contribution | `09-open-source` |
| System Design | `06-projects` / Design competency |
| Incident Analysis | `04-learning` / Community Failure Lab / Operate |
| Security | Project/Mission Domain + Operate competency |
| Data & Evaluation | Project/Research/Testing |
| Production Engineering | PRO Project / Operate |
| Research | `08-research` |
| Governance & Ethics | `00-governance` + relevant Project |
| Knowledge System | `04-learning` |
| Technical Communication | `04-learning` / Community / Portfolio |
| Professional Output | `12-portfolio` + related Domain |
| Community & Mentoring | `05-community` |
| Expert Radar | EXPLORE / EXPERT decision support |
| Growth Review | Dashboard / Progress / Portfolio |

## Existing Mastery Ladder

현재:

```text
COMPLETE
UNDERSTAND
REBUILD
EXTEND
MEASURE
PRODUCTIONIZE
COMPARE
CONTRIBUTE
CREATE
```

이 Ladder는 가치가 높으므로 폐기하지 않는다.

다만 V3 Macro Stage와 1:1 대응시키지 않는다.

권장 해석:

```text
Macro Growth Stage
CORE / EXPLORE / ADVANCED / PRO / EXPERT

Fine-grained Capability Ladder
COMPLETE / UNDERSTAND / REBUILD / EXTEND / MEASURE
/ PRODUCTIONIZE / COMPARE / CONTRIBUTE / CREATE
```

즉 Macro Stage는 전체 성숙도, Mastery Ladder는 구체적 행동 능력을 표현한다.

---

# 3. `11-advanced`

## 현재 가치

현재 Advanced Backlog는 다음 기술을 포함한다.

- Docker / Kubernetes / Cloud Native
- CI/CD / DevOps / Platform Engineering
- SRE / Observability / OpenTelemetry
- Distributed Systems / Queue / Cache
- Large-scale Traffic / Load Testing
- PostgreSQL / Redis / Database Advanced
- Security Advanced / Supply Chain Security
- AI Engineering / Evaluation / Guardrails
- RAG
- AI Agents
- MCP / A2A
- Multimodal AI
- Original Research / Product / Startup

핵심 원칙인 **현재 Basic Mission PASS를 늦추지 않는다**는 그대로 유지한다.

## Decision

`11-advanced`: **SPLIT / MERGE / RETIRE AS STAGE FOLDER**

이유:

`ADVANCED`는 V3에서 Growth Stage다. 따라서 모든 고급 기술을 `11-advanced/`라는 물리 폴더에 넣으면 다시 Stage와 Domain이 혼합된다.

## V3 Distribution

예:

```text
Docker / Kubernetes / SRE
  → Mission/Project의 Cloud/SRE Track
  → growth_stage: ADVANCED

PostgreSQL / Redis Advanced
  → Backend Project/Experiment
  → growth_stage: ADVANCED

AI Evaluation / RAG / Agents / Multimodal
  → AI Project/Research
  → growth_stage: ADVANCED

Original Research
  → 08-research

Product / Startup
  → 06-projects / 11-venture
```

기술 Backlog는 사라지지 않는다. 각 Domain의 Backlog 또는 Project 후보로 이동한다.

## Technology Radar

모든 신기술을 ADVANCED로 채택하지 않는다.

기존 Expert Radar의:

```text
ADOPT / TRIAL / ASSESS / HOLD
```

를 EXPLORE 단계의 기술 선택 보조로 재사용할 수 있다.

예:

```yaml
technology: Kubernetes
radar: ASSESS
growth_stage: EXPLORE
status: PLANNED
```

실제 전문화 대상으로 선택한 뒤:

```yaml
growth_stage: ADVANCED
status: ACTIVE
```

로 승격한다.

---

# 4. Opportunities와 Growth의 연결

외부 활동은 고정 Stage가 아니다.

예: Hackathon

```text
EXPLORE
처음 경험하고 분야를 탐색

ADVANCED
선택한 전문 기술로 본격 구현/경쟁

PRO
기업 문제, 실제 사용자, PoC와 연결
```

예: Conference

```text
EXPLORE
참석/논문 읽기

ADVANCED
Poster / Demo / Technical Report

PRO
발표/투고/Peer Review

EXPERT
연구 방향/분야 기여
```

따라서 Opportunity Type 자체에 Stage를 고정하지 않고 **각 Activity Instance에 Growth Stage를 부여**한다.

---

# 5. Recommended `opportunities.yaml` V3 Schema

실제 Migration 시 다음 구조를 기준안으로 검토한다.

```yaml
version: 3

availability_values:
  - UPCOMING
  - OPEN
  - CLOSED
  - UNKNOWN

status_values:
  - PLANNED
  - READY
  - ACTIVE
  - BLOCKED
  - DONE
  - ARCHIVED

priority_values:
  - REQUIRED
  - RECOMMENDED
  - OPTIONAL

types:
  - competition
  - contest
  - hackathon
  - seminar
  - conference
  - meetup
  - call-for-papers
  - call-for-projects
  - call-for-participants
  - research-opportunity
  - open-source-opportunity
  - grant-support
  - startup-opportunity

opportunities: []
```

각 실제 Opportunity는 필요에 따라:

```yaml
id:
title:
type:
availability:
status:
growth_stage:
priority:
official_url:
organizer:
deadline:
event_date:
related_missions: []
related_skills: []
related_projects: []
expected_evidence: []
last_checked:
```

를 가진다.

---

# 6. Migration Summary

```text
OLD
09-opportunities
10-professional-growth
11-advanced

        ↓

V3
07-opportunities
05-community
06-projects
08-research
09-open-source
10-career
11-venture
12-portfolio
13-impact
14-resources
+ Growth Stage Metadata
```

## Audit Result

| Area | Decision |
|---|---|
| Opportunities | KEEP + REWRITE + MOVE to 07 |
| Opportunity old NOW/NEXT/WATCH model | REPLACE with Availability + Activity Status |
| Professional Growth | SPLIT across V3 Domains; concept retained globally |
| Mastery Ladder | KEEP as fine-grained capability ladder |
| Advanced Backlog | SPLIT across actual Domains; ADVANCED becomes Metadata |
| Mission-PASS-first principle | KEEP |

이 Audit이 완료된 뒤에야 기존 `09/10/11` 폴더를 실제로 이동/분해한다.
