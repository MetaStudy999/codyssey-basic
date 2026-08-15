# Growth Routing Guide

새로운 기술, 활동, 프로젝트, 연구, 대외활동, 취업·창업 아이디어가 생겼을 때 **어디에 두고 언제 수행할지** 결정하는 운영 기준이다.

## 1. Routing 순서

```text
새 항목 발생
   ↓
Domain 결정
   ↓
Growth Stage 결정
   ↓
Status 결정
   ↓
Priority 결정
   ↓
필요하면 Registry 등록
   ↓
ACTIVE + 실제 산출물 발생
   ↓
Just-in-Time Folder 생성
```

## 2. Domain Routing

| 항목 성격 | Canonical Domain | 대표 예 |
|---|---|---|
| 공식 Mission 요구·평가·Evidence | `docs/02-missions` + 개별 Mission Repo | B2-2 PR/Review, B6-1 Cloud Evidence |
| 용어·개념·실습·참고자료 | `docs/03-learning` | Vocabulary, Mini Lab, Resource |
| Study·Review·Debugging·Mentoring | `docs/04-community` | Code Review Dojo, Debugging Clinic |
| 장기 기술/제품 결과물 | `docs/05-projects` | AI Chatbot, Backend Lab |
| 공모전·해커톤·학회·지원사업 | `docs/06-opportunities` | Hackathon, Conference, Program |
| 논문·가설·실험·Benchmark | `docs/07-research` | Literature Review, Experiment |
| OSS 탐색·Issue·PR·Maintainer | `docs/08-open-source` | First PR, Contribution |
| 직무·기업·면접·경력 Evidence | `docs/09-career` | Role Research, Interview Story |
| 사용자 문제·MVP·PoC·사업화 | `docs/10-venture` | Customer Interview, MVP |
| 외부에 보여줄 Evidence/Case Study | `docs/11-portfolio` | Project Case Study |
| 사람·조직·시장·연구에 만든 변화 | `docs/12-impact` | Adoption, Research Impact |
| 정책·표준·ADR·보안·운영 규칙 | `docs/00-governance` | Repository Policy, Evidence Rule |
| 현재 위치·의존·성장 지도 | `docs/01-master-map` | Growth Map, Mission Dependency |

하나의 결과물이 여러 Domain과 연결될 수 있지만 **원본은 한 곳에 두고 나머지는 링크/Registry로 연결**한다.

## 3. Growth Stage Routing

### CORE
공식 Mission, 필수 기반지식, 직접 구현, Test, Runtime, Evidence, 설명 능력을 확보한다.

```text
무엇인가?
→ 왜 필요한가?
→ 직접 할 수 있는가?
→ 정상/오류를 구분할 수 있는가?
```

### EXPLORE
여러 가능성을 짧게 경험하고 심화 방향을 선택한다.

- Seminar / Meetup
- 기술 비교
- Open Source 탐색
- Hackathon 첫 참가
- 논문 읽기
- 직무/문제 탐색

EXPLORE는 Breadth 단계다. Time Box를 두고 한 번에 1~2개만 실제 수행한다.

### ADVANCED
선택한 영역을 깊게 파고든다.

- Architecture / ADR
- Testing 강화
- Security
- Performance / Benchmark
- CI/CD / Observability
- Experiment
- 대안 기술 비교

ADVANCED는 Depth 단계다.

### PRO
실제 사용자·Production·외부 평가·기업·OSS·연구 등 **현실 환경의 결과와 책임**이 생긴다.

- Real User
- Production Deployment
- Incident / Operations
- Sustained OSS Contribution
- Research Submission
- Industry PoC
- Paying/Pilot Customer

### EXPERT
기술 자체를 잘 쓰는 수준을 넘어 **무엇을 선택해야 하는지와 그 이유**를 판단한다.

- Trade-off
- Cost / Complexity / Reliability 판단
- Architecture 선택
- Cross-project Decision
- 어려운 문제의 Root Cause 판단
- 기술 방향 제안

EXPERT 이후에는 전문 경로로 분기한다.

## 4. Status Routing

```text
PLANNED
  ↓
READY
  ↓
ACTIVE
  ↓
DONE
```

예외:

- `BLOCKED` — 외부 조건 때문에 진행 불가
- `ARCHIVED` — 종료되었거나 현재 운영에서 제외

### Folder 생성 기준

`PLANNED`, `READY`는 기본적으로 Registry/Map만 사용한다.

`ACTIVE`가 되고 다음 조건 중 2개 이상이면 독립 폴더 생성을 고려한다.

- 파일 3개 이상 예상
- 여러 주 지속
- 독립 결과물 존재
- 별도 Evidence 필요
- 별도 팀/담당자 존재
- 코드·데이터·실험 결과 발생
- 다른 활동에서 재사용

## 5. Priority Routing

- `REQUIRED` — 현재 목표나 공식 Mission 완료에 반드시 필요
- `RECOMMENDED` — 성장 효과가 크고 현재 방향과 잘 연결됨
- `OPTIONAL` — 가치가 있지만 지금 하지 않아도 핵심 목표에 영향 없음

Growth Stage와 Priority는 별개다. 예를 들어 EXPLORE 활동도 현재 진로 결정에 중요하면 `RECOMMENDED`가 될 수 있다.

## 6. Mission 이후 행동 수준

다음 행동 사다리는 Growth Stage와 1:1로 강제 매핑하지 않고 **무엇을 할 수 있는지**를 보는 보조 기준으로 사용한다.

```text
COMPLETE
→ UNDERSTAND
→ REBUILD
→ EXTEND
→ MEASURE
→ PRODUCTIONIZE
→ COMPARE
→ CONTRIBUTE
→ CREATE
```

대략적인 활용:

- CORE: COMPLETE / UNDERSTAND / REBUILD
- EXPLORE: COMPARE의 초기 탐색
- ADVANCED: EXTEND / MEASURE / COMPARE
- PRO: PRODUCTIONIZE / CONTRIBUTE
- EXPERT: CREATE + Judgment + Leadership

## 7. 대표 기술 Routing

| 기술/활동 | 주 Domain | 기본 Stage |
|---|---|---|
| Docker / Kubernetes / Cloud Native | Project / Operations | ADVANCED |
| CI/CD / DevOps / Platform | Project / Operations | ADVANCED / PRO |
| SRE / Observability | Project / Operations | ADVANCED / PRO |
| Distributed Systems / Queue / Cache | Project / Research | ADVANCED |
| Load Testing / Large-scale Traffic | Project / Operations | ADVANCED / PRO |
| PostgreSQL / Redis 심화 | Project | ADVANCED |
| Security / Supply Chain Security | Governance / Project | ADVANCED / PRO |
| AI Evaluation / Guardrails | Project / Research | ADVANCED / PRO |
| RAG | Project / Research | ADVANCED |
| AI Agents / MCP / A2A | Project / Research | EXPLORE / ADVANCED |
| Open Source PR | Open Source | ADVANCED / PRO |
| Conference / Paper | Research / Opportunity | EXPLORE / ADVANCED / PRO |
| MVP / PoC | Venture / Project | ADVANCED / PRO |

## 8. STOP Rule

현재 CORE Mission이 다음 조건을 만족했다면 비필수 개선으로 완료를 지연시키지 않는다.

```text
Required Requirements = SATISFIED
Evaluation Requirements = SATISFIED
BLOCKER = 0
MAJOR = 0
Required Tests = PASS
Required Runtime = COMPLETE 또는 NOT-REQUIRED
Required Evidence = COMPLETE
```

그 이후의 좋은 아이디어는 적절한 Domain에 기록하고 `EXPLORE / ADVANCED / PRO`로 이어간다.

## 9. 빠른 판단 예

```text
"B7 챗봇에 RAG를 붙이고 싶다"
Domain: Project / Research
Stage: ADVANCED
Status: PLANNED
Priority: OPTIONAL 또는 RECOMMENDED
→ B7 CORE PASS 전에는 Backlog
```

```text
"AI 해커톤 신청 마감이 다음 주다"
Domain: Opportunity
Stage: EXPLORE
Status: READY
Priority: 현재 목표와 연결되면 RECOMMENDED
→ 실제 참가 확정 시 Activity ACTIVE
```

```text
"실사용자 20명이 매주 쓰는 서비스 장애를 고쳤다"
Domain: Project / Portfolio / Impact 연결
Stage: PRO
Status: DONE 또는 ACTIVE
→ Incident Evidence와 Case Study 연결
```
