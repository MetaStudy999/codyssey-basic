# Codyssey Basic Vocabulary Quality Audit — V3

**대상:** B1-1 ~ B7-2 전체 15개 Mission Vocabulary  
**감사 기준:** 원본 Mission PDF + `vocabulary-learning-plan.md` + 현재 `docs/03-learning/vocabulary/*.md`  
**상태:** V3 Canonical Learning Path 전환 후 품질 기준

> V3 전환 이전의 상세 1차 감사 기록은 `docs/01-master-map/audit-vocabulary-quality-v2.md`에 보존한다. 이 문서는 현재 Canonical Path와 앞으로의 품질 Gate를 정의한다.

## 1. 핵심 판정

기존 15개 Mission Vocabulary는 폐기하거나 초기화하지 않는다. 기존 감사에서 확인한 주요 Mission 요구 영역, Level 0~5 구조, Top Core, 20:60:20 학습 흐름을 V3에서도 보존한다.

현재 관리 기준은 다음과 같다.

| 항목 | V3 판정 |
|---|---|
| B1-1~B7-2 15개 Mission Vocabulary | KEEP |
| Level 0~5 | KEEP |
| Review | KEEP |
| `90-advanced` | KEEP as `Optional Deepening` |
| Top Core | KEEP |
| `CORE / REQUIRED / REFERENCE` | 통합 기준으로 지속 정규화 |
| K1~K4 | Master Vocabulary에서 통합 관리 |
| Lifecycle | `NEW → REVIEW → APPLY → DEEPEN → INTEGRATE` |
| Dependency Map | Master Vocabulary / Mission Map과 연결 |
| V1~V5 Vocabulary Gate | 학습 검증 기준으로 유지 |

## 2. Canonical Source

V3 Learning의 경로 기준은 다음이다.

```text
docs/03-learning/
├── vocabulary/
├── basic-master-vocabulary.md
├── vocabulary-learning-plan.md
├── term-file-standard.md
├── vocabulary-quality-audit.md
└── visual-learning-backlog.md
```

신규 Vocabulary, Index, Mission Learning Link는 위 경로를 사용한다.

## 3. Source of Truth 우선순위

Vocabulary를 추가하거나 수정할 때 다음 순서를 유지한다.

1. 원본 Mission PDF
2. 공식 Evaluation / 평가 요구
3. 미션 수행에 직접 필요한 코드·명령·설정·파일 구조
4. 검증·Troubleshooting·설명에 필요한 용어
5. 후속 Mission을 이해하기 위한 최소 선수 용어

원본이 요구하지 않는 주변 기술은 필수 목록으로 승격하지 않는다. 추가 심화는 Source Scope와 Priority를 분리한다.

## 4. Micro Learning 구조

```text
Prerequisite
  ↓
Core
  ↓
Execution
  ↓
Principles
  ↓
Troubleshooting
  ↓
Evaluation
  ↓
Review
  ↓
Optional Deepening
```

이 구조는 Macro Growth Stage인 `CORE → EXPLORE → ADVANCED → PRO → EXPERT`와 1:1 대응하지 않는다.

## 5. 품질 기준

### 용어 정확성

- 한글 용어와 영문 원문을 필요한 경우 함께 표시한다.
- 약어는 최초 설명 시 원문과 의미를 연결한다.
- Git, FastAPI, React와 같은 고유 기술명은 억지로 번역하지 않는다.
- 같은 개념의 표기 변형은 Master Vocabulary에서 정규화한다.

### 중요도

- `CORE`: 미션 본질을 이해하는 핵심 개념
- `REQUIRED`: 구현·검증에 실제 필요한 용어
- `REFERENCE`: 필요할 때 찾아보는 보조 용어

### Knowledge Level

- `K1`: 보고 알아볼 수 있다.
- `K2`: 짧게 의미를 설명할 수 있다.
- `K3`: 코드·명령·설정에서 사용할 수 있다.
- `K4`: 원리·선택 이유·관계까지 설명할 수 있다.

기본적으로 `CORE → K3~K4`, `REQUIRED → K2~K3`, `REFERENCE → K1~K2`를 사용하되 평가 요구에 따라 조정한다.

## 6. Vocabulary Gate

| Gate | 확인 기준 |
|---|---|
| V1 | 용어를 보고 알아볼 수 있는가? |
| V2 | Top Core 의미를 자기 말로 설명할 수 있는가? |
| V3 | 핵심 용어 사이 관계를 연결할 수 있는가? |
| V4 | 실제 코드·명령·설정에서 적용할 수 있는가? |
| V5 | 원리·선택 이유·한계·대안을 설명할 수 있는가? |

문서가 존재한다는 사실만으로 개인 학습 Gate를 PASS로 판단하지 않는다.

## 7. Mission Coverage 기준

15개 Mission의 주요 Vocabulary 축은 다음과 같이 유지한다.

| Mission | 핵심 영역 |
|---|---|
| B1-1 | Linux, SSH, Firewall, User/Group, ACL, Monitoring, cron |
| B1-2 | Memory/OOM, CPU/Latency, Deadlock, Troubleshooting Evidence |
| B2-1 | Python CLI, File I/O, CRUD, Generator, Decorator, Type Hint |
| B2-2 | Git/GitHub Flow, Issue/PR, Review, Conflict, Branch Protection |
| B3-1 | Hash Map, Chaining, DLL, Heap, LRU, TTL |
| B3-2 | Commit DAG, Graph, BFS, Ancestor, Sorting, Inverted Index |
| B4-1 | HTML/CSS/JS, DOM/Event, Responsive, API, GitHub Pages |
| B4-2 | React, Component, State, Router, Hook, Form, CRUD |
| B5-1 | RDB, PK/FK, 1:N, SQL, JOIN, GROUP BY, Index, ERD |
| B5-2 | FastAPI, Jinja2, Router/Service/Repository, ORM, CRUD, PRG |
| B5-3 | Authentication, Authorization, Session/JWT, Relationship |
| B6-1 | VPC, Subnet, IGW, Route, EC2, SG, IAM, Nginx, Deployment |
| B6-2 | Git Context, AI API, Prompt, Validation, Safe Mode, Cost |
| B7-1 | Web AI Chatbot, Auth, Context, Chat Log, Deployment |
| B7-2 | Full Stack, Ownership, REST API, ERD, Architecture, Cloud |

세부 요구는 항상 각 Mission Source와 Evaluation을 우선한다.

## 8. 다음 개선 순서

```text
Top Core 확인
  ↓
쉬운 한 줄 설명
  ↓
관계 / Dependency
  ↓
초미니 실습
  ↓
Mission 적용
  ↓
의도적 오류
  ↓
Troubleshooting
  ↓
Evaluation 설명
  ↓
Retrieval Review
  ↓
Lifecycle 갱신
```

목표는 파일 수를 늘리는 것이 아니라 **Mission 수행·문제 해결·설명 능력으로 연결되는 학습 자산**을 만드는 것이다.

## 9. Migration Integrity

V3 Canonical Path 전환에서 학습 자산의 내용과 이력을 보존한다. 물리 경로 변경은 학습 완료 상태를 초기화하지 않으며, `PASS`, `MASTERED`, Growth Stage도 자동 승격하지 않는다.

Old 상세 감사는 Git history와 보존된 Audit 문서에서 추적할 수 있다.
