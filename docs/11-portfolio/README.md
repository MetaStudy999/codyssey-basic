# 11. Portfolio

Portfolio는 기술 이름을 나열하는 곳이 아니라 **Project + Competency + Evidence**를 외부 사람이 빠르게 검증할 수 있도록 재구성하는 Output Layer다.

## 1. 핵심 질문

```text
무엇을 만들었는가?
어떤 문제를 해결했는가?
어떤 판단과 Trade-off를 했는가?
어떻게 검증했는가?
무슨 Evidence가 있는가?
무엇을 배우고 다음에는 무엇을 개선할 것인가?
```

## 2. 3-Layer Portfolio Model

### Layer 1 — Evidence

- Commit / PR / Issue
- Test Result
- Runtime Result
- Screenshot / Demo
- Deployment
- Architecture Decision / ADR
- Experiment / Benchmark
- Troubleshooting / Postmortem
- Code Review / Collaboration
- Presentation / External Result

### Layer 2 — Case Study

```text
Problem
→ Context
→ Requirement
→ Architecture
→ Implementation
→ Troubleshooting
→ Trade-off
→ Result
→ Evidence
→ Reflection
```

### Layer 3 — Narrative

- 왜 시작했는가
- 어떻게 성장했는가
- 무엇을 실패했는가
- 무엇을 개선했는가
- 어떤 개발 역량을 증명하는가
- 다음 단계는 무엇인가

## 3. Competency Mapping

Portfolio는 자체 Skill Source of Truth가 되지 않는다. `config/skills.yaml`, Mission/Project Evidence를 참조한다.

12개 공통 Competency Axis:

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

기술 Domain 맥락도 함께 표시할 수 있다.

- Linux & OS
- Python & Git
- Data Structures & Algorithms
- Web & Front-end
- Database & Back-end
- Cloud & AI API
- Full-stack AI / Term Project

## 4. Case Study 권장 필드

```text
Project ID
Origin Mission
Growth Stage
Problem / User
Scope
Architecture
Key Decisions
Implementation
Tests
Troubleshooting
Security / Performance
Collaboration
Result / Metric
Evidence Links
External Outcome
Reflection
Next Stage
```

## 5. One Project → Many Outcomes

하나의 좋은 Project를 반복해서 새 프로젝트로 버리지 않는다.

```text
Mission
  ↓
Portfolio Case Study
  ↓
Hackathon / Competition
  ↓
Research / Open Source
  ↓
Production / Career
  ↓
MVP / PoC / Venture
```

Project Lineage를 통해 같은 문제를 더 깊게 발전시킨 기록을 보여준다.

## 6. Presentation Layer

GitHub Pages `site/`는 외부 방문자가 다음을 빠르게 이해하도록 보여주는 Presentation Layer다.

- 현재 Growth Stage
- Mission/Project 결과
- 핵심 Competency
- Evidence
- Case Study
- Project Lineage
- External/Research/OSS Result

Dashboard 내부 운영 정보와 외부 Portfolio Presentation을 완전히 같은 화면으로 강제하지 않는다. 필요한 경우 같은 Source of Truth에서 서로 다른 View를 생성한다.

## 7. 핵심 원칙

단순 기술 목록보다 **문제 → 판단 → 구현 → 검증 → 결과 → 회고**의 연결을 우선한다. Evidence가 없는 과장된 Skill 표시는 사용하지 않는다.
