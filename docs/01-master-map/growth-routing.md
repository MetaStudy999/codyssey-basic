# Professional Growth / Advanced Routing

기존 `docs/10-professional-growth`와 `docs/11-advanced`는 V3에서 독립 단계 폴더로 유지하지 않는다. 내용은 **Domain으로 이동**하고 Growth Stage는 Metadata로 관리한다.

## 기존 Professional Growth → V3

| 기존 축 | V3 목적지 | 주 Stage |
|---|---|---|
| Foundations | `docs/03-learning` | CORE / ADVANCED |
| Competency / Skill Matrix | `config/skills.yaml`, `docs/01-master-map` | 전체 |
| Product & UX | `docs/05-projects`, `docs/10-venture` | EXPLORE / ADVANCED |
| Standards Reading | `docs/03-learning` | CORE / ADVANCED |
| Source Code Reading | `docs/08-open-source` | EXPLORE |
| Open Source Contribution | `docs/08-open-source` | ADVANCED / PRO |
| System Design | `docs/05-projects` + ADR Governance | ADVANCED / EXPERT |
| Incident Analysis | `docs/03-learning`, `docs/04-community` | CORE / ADVANCED |
| Security | Mission/Project별 Security + Governance | ADVANCED / PRO |
| Data & Evaluation | `docs/05-projects`, `docs/07-research` | ADVANCED / PRO |
| Production Engineering | Mission/Project Operations | ADVANCED / PRO |
| Research | `docs/07-research` | EXPLORE / ADVANCED / PRO |
| Governance & Ethics | `docs/00-governance` | 전체 |
| Knowledge System | `docs/03-learning` | 전체 |
| Technical Communication | `docs/03-learning`, `docs/11-portfolio` | CORE / ADVANCED |
| Professional Output | Portfolio/Research/OSS/Career/Venture | PRO |
| Community & Mentoring | `docs/04-community` | EXPLORE / PRO |
| Expert Radar | `docs/01-master-map` | EXPERT |
| Growth Review | Master Map / Dashboard | 전체 |

## 기존 Mastery Ladder → V3 관계

기존 Ladder는 폐기하지 않고 **행동 수준**으로 재사용한다.

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

대략적인 관계:

- CORE: COMPLETE / UNDERSTAND / REBUILD
- EXPLORE: COMPARE의 초기 탐색
- ADVANCED: EXTEND / MEASURE / COMPARE
- PRO: PRODUCTIONIZE / CONTRIBUTE
- EXPERT: CREATE + Judgment + Leadership

1:1 강제 매핑은 아니다.

## 기존 Advanced Backlog → V3 Routing

| 기술/주제 | 주 Domain | 기본 Stage |
|---|---|---|
| Docker / Kubernetes / Cloud Native | B6/B7 Project / Operations | ADVANCED |
| CI/CD / DevOps / Platform | Project / Operations | ADVANCED / PRO |
| SRE / Observability / OpenTelemetry | B1/B6/B7 / Operations | ADVANCED / PRO |
| Distributed Systems / Queue / Cache | B3/B5/B7 Project | ADVANCED |
| Large-scale Traffic / Load Testing | Project / Operations | ADVANCED / PRO |
| PostgreSQL / Redis Advanced | B3/B5 Project | ADVANCED |
| Security / Supply Chain Security | Project / Governance | ADVANCED / PRO |
| AI Evaluation / Guardrails | B6/B7 / Research | ADVANCED / PRO |
| RAG | B7 / Research | ADVANCED |
| AI Agents | B7 / Research / Project | ADVANCED |
| MCP / A2A | B7 / Project | EXPLORE / ADVANCED |
| Multimodal AI | B7 / Project / Research | EXPLORE / ADVANCED |
| Original Research | `docs/07-research` | PRO / EXPERT |
| Product / Startup | `docs/10-venture` | ADVANCED / PRO |

## 핵심 원칙

`Advanced`라는 이름의 대형 Backlog 폴더를 영구 유지하지 않는다. 실제 선택된 기술만 해당 Project/Research/Operations 문맥으로 이동하고 `growth_stage: ADVANCED` 등 Metadata를 붙인다.

기초 Mission PASS를 지연시키는 확장은 계속 Backlog로 남기되, Backlog의 **위치도 실제 Domain 기준**으로 관리한다.
