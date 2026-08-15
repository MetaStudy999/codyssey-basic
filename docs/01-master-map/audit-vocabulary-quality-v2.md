# Codyssey Basic 전체 용어 품질 감사

**대상:** B1-1 ~ B7-2 전체 15개 미션 용어 지도  
**감사 기준:** 원본 Mission PDF + `vocabulary-learning-plan.md` + 현재 `docs/04-learning/vocabulary/*.md`  
**현재 단계:** 1차 용어 수집 완료 후, 설명·비유·도식·실습을 붙이기 전 품질 감사

---

## 1. 감사 목적

15개 미션의 1차 용어 목록이 모두 작성된 시점에서 다음을 확인한다.

1. 원본 미션의 핵심 요구 영역이 빠지지 않았는가?
2. 미션과 직접 관계없는 과잉 용어가 필수 영역에 섞이지 않았는가?
3. `Level 0~5 + Advanced + Top Core` 구조가 일관되는가?
4. 한글 + 영어 + 약어 표기가 일관되는가?
5. `CORE / REQUIRED / REFERENCE` 중요도 관리가 실제 문서에 반영되었는가?
6. K1~K4 이해 수준이 실제 학습 관리에 연결되어 있는가?
7. `NEW → REVIEW → APPLY → DEEPEN → INTEGRATE` 누적 상태가 추적되는가?
8. 선수관계와 Dependency Map이 다음 학습 단계에 사용할 만큼 명시되어 있는가?
9. Vocabulary Gate V1~V5를 실제 학습 체크리스트로 사용할 수 있는가?
10. B1-1부터 B7-2까지의 선후관계가 자연스럽게 이어지는가?

---

## 2. 감사 방법

### Source of Truth

다음 우선순위를 유지한다.

1. 원본 Mission PDF
2. 미션 수행에 직접 필요한 코드·명령·설정·파일 구조
3. 검증·트러블슈팅·평가에 필요한 용어
4. 후속 미션을 이해하기 위한 최소 선수 용어

원본이 요구하지 않는 주변 기술은 필수 목록으로 승격하지 않는다.

### 이번 감사의 깊이

이번 감사는 **원본 미션의 주요 요구 영역과 현재 용어 지도의 구조·분류를 대조하는 1차 품질 감사**이다.

- 주요 기능·구조·검증 영역 누락: 확인
- Level / Top Core / 학습 배치 구조: 확인
- 중요도·K 수준·Lifecycle·Dependency·Gate 적용 상태: 확인
- 모든 단어를 PDF와 문자 단위로 대조하는 완전한 lexical diff: 이번 단계의 범위 아님

따라서 아래의 `PASS`는 **주요 요구 영역 수준에서의 PASS**를 의미하며, 모든 명사의 100% 수록을 의미하지 않는다.

---

## 3. 전체 결과 요약

| 감사 항목 | 결과 | 판정 |
|---|---|---|
| 15개 미션 페이지 존재 | B1-1~B7-2 모두 존재 | PASS |
| 전체 인덱스 연결 | 15/15 링크 및 작성 완료 | PASS |
| 원본 주요 요구 영역 반영 | 15개 미션 모두 핵심 요구 영역 반영 | PASS |
| Level 0~5 구조 | 전체 미션에서 사용 | PASS |
| Advanced 분리 | 전체 미션에서 사용 | PASS |
| Top Core | 전체 미션에서 사용 | PASS |
| 20:60:20 | 전체 미션에서 사용 | PASS |
| 한글+영어 표기 | 전반적으로 일관 | PASS |
| 고유 기술명 처리 | Git/FastAPI/React 등 억지 번역 없음 | PASS |
| STOP RULE | 내용상 적용되나 명시 정도가 미션별로 다름 | PARTIAL |
| CORE / REQUIRED / REFERENCE | 후반 미션은 명시, 초기 미션은 미명시 | PARTIAL |
| K1~K4 | 계획 문서에 정의되었으나 미션별 실제 적용 없음 | FIX |
| Lifecycle | 후반 미션에 일부 적용, 전체 추적표 없음 | PARTIAL |
| Dependency Map | 일부 미션 연결은 있으나 전체 용어 그래프 없음 | PARTIAL |
| Vocabulary Gate V1~V5 | 계획 문서 정의만 있고 미션별 체크리스트 없음 | FIX |
| 전체 중복 제거 Master Vocabulary | 아직 없음 | NEXT |

### 핵심 판정

**용어 자체의 1차 수집 품질은 다음 학습 단계로 넘어갈 수 있는 수준이다.**  
다만, 15개 문서가 작성되는 동안 문서 형식이 발전하면서 **메타데이터 적용 수준에 차이**가 생겼다.

가장 큰 문제는 용어 누락보다 다음 4가지이다.

1. 초기 미션의 중요도 표기가 후반 미션보다 약함
2. K1~K4가 계획에만 있고 실제 학습 데이터에 연결되지 않음
3. Lifecycle이 통합 추적되지 않음
4. Dependency Map과 Vocabulary Gate가 아직 실제 학습 자산으로 만들어지지 않음

---

## 4. 미션별 원본 주요 요구 영역 대조

| 미션 | 원본에서 확인해야 할 핵심 영역 | 1차 용어 지도 판정 |
|---|---|---|
| B1-1 | Linux, SSH, Firewall, User/Group, ACL, Environment Variable, Monitoring, cron, logrotate | PASS |
| B1-2 | Memory Leak/OOM, CPU Spike, Latency, Deadlock, Process/Resource Diagnosis, GitHub Issue | PASS |
| B2-1 | Python CLI, JSONL/CSV, CRUD, Generator, Decorator, Type Hint, Module, Import/Export | PASS |
| B2-2 | Git/GitHub Flow, Issue/PR, Review, Conflict, Branch Protection, amend/reset/revert/stash | PASS |
| B3-1 | Hash Map, Chaining, Doubly Linked List, Min Heap, LRU, TTL, Mini Redis CLI | PASS |
| B3-2 | Mini Git, Commit DAG, Branch, Graph Traversal, BFS, Ancestor, Sorting, Inverted Index, CLI | PASS |
| B4-1 | HTML/CSS/JS, Semantic HTML, Responsive, Flex/Grid, DOM/Event, fetch/async, GitHub API/Pages | PASS |
| B4-2 | React, Component/Props/State, Router, Hooks, Form, CRUD, Supabase/Firebase, Deployment | PASS |
| B5-1 | RDB, Schema/Table, PK/FK, 1:N, SQL, JOIN, GROUP BY, Subquery, Index, ERD | PASS |
| B5-2 | FastAPI, Jinja2 SSR, Router/Service/Repository, SQLAlchemy, SQLite, CRUD, PRG | PASS |
| B5-3 | Authentication/Authorization, Session/JWT, Depends, ORM Relationship, State Transition | PASS |
| B6-1 | VPC, Public Subnet, IGW, Route Table, EC2, Security Group, IAM, Nginx, Verification, Cleanup | PASS |
| B6-2 | git status/diff, AI API, Prompt/Context, Commit/PR Draft, Validation, Safe Mode, Cost/Request Limit | PASS |
| B7-1 | FastAPI Web Chatbot, Auth, AI API, Context, Chat Log DB, External Deployment, Team Collaboration | PASS |
| B7-2 | Full Stack, Password Hash/JWT, Data Ownership, Board CRUD, REST API, ERD, Architecture, Cloud, PR Strategy | PASS |

### 판정 해석

각 미션의 **주요 구현·검증·평가 축은 보존되어 있다.**  
현재 단계에서 심각한 P0급 원본 요구 누락은 발견되지 않았다.

---

## 5. 구조 일관성 감사

### 5.1 Level 0~5 + Advanced

**판정: PASS**

15개 미션 모두 다음 흐름을 사용한다.

`선수 → 핵심 → 구현 → 구조/원리 → 검증/트러블슈팅 → 평가 설명 → Advanced`

이 구조는 유지한다.

### 5.2 Top Core

**판정: PASS**

모든 미션에서 미션 시작 전 최소 핵심 용어 집합을 분리했다.

향후 정의·비유·도식 학습은 전체 용어가 아니라 **Top Core부터 먼저 확장**한다.

### 5.3 20:60:20

**판정: PASS**

모든 미션에서 다음 방향을 유지한다.

- 미션 전 20%: Top Core / 최소 선수지식
- 미션 중 60%: 구현·명령·설정·검증
- 미션 후 20%: 원리·평가 설명·심화

### 5.4 중요도 CORE / REQUIRED / REFERENCE

**판정: PARTIAL — 우선 보완 필요**

후반 미션 문서에는 명시적 중요도 섹션이 도입되었지만, 초기 문서는 동일 수준으로 정규화되어 있지 않다.

현재 문서 흐름상 우선 정규화 대상은 다음이다.

- B1-1
- B1-2
- B2-1
- B2-2
- B3-1
- B3-2
- B4-1
- B4-2
- B5-1

후반 문서에서 사용한 방식은 유지 가능하다.

- B5-2
- B5-3
- B6-1
- B6-2
- B7-1
- B7-2

**개선 원칙:** 각 용어 페이지에 모든 용어별 태그를 반복해서 붙이기보다, 통합 Master Vocabulary에서 단일 관리하고 미션 페이지에는 요약만 유지한다.

---

## 6. K1~K4 이해 수준 감사

**판정: FIX**

계획에는 다음 기준이 정의되어 있다.

- K1 — 인지
- K2 — 이해
- K3 — 적용
- K4 — 설명

그러나 현재 미션별 1차 용어 페이지에는 K 수준이 실제 용어 메타데이터로 연결되어 있지 않다.

### 개선안

통합 Master Vocabulary에 다음 규칙으로 기본값을 부여한다.

| Priority | 기본 Knowledge Level |
|---|---|
| CORE | K3~K4 |
| REQUIRED | K2~K3 |
| REFERENCE | K1~K2 |

예외적으로 평가에서 반드시 원리 설명이 필요한 REQUIRED 항목은 K4까지 올릴 수 있다.

**결론:** K 수준은 15개 페이지에 중복 작성하지 않고 통합 데이터에서 관리한다.

---

## 7. 중복과 Lifecycle 감사

**판정: PARTIAL**

B1-1~B7-2에는 반복 용어가 많다.

대표 예:

- Git / GitHub
- HTTP Request / Response
- Environment Variable
- Authentication / Authorization
- CRUD
- Database / SQLite
- API / REST API
- Deployment
- Logging / Verification

현재 후반 미션의 누적 학습 섹션에서는 REVIEW / APPLY / DEEPEN 등이 일부 표현되어 있으나, **전체 15개 미션을 관통하는 단일 추적표는 아직 없다.**

### 다음 통합 데이터에서 관리할 필드

- First Seen
- Reused In
- Lifecycle
- Mission Role

예시:

```text
HTTP Request/Response
B4-1: NEW
B4-2: APPLY
B5-2: DEEPEN
B6-2: APPLY
B7-1: INTEGRATE
B7-2: INTEGRATE
```

이 방식으로 같은 용어를 매 미션마다 처음 배우는 문제를 제거한다.

---

## 8. Dependency Map 감사

**판정: PARTIAL**

현재 문서에는 미션 간 연결 설명과 일부 선후관계가 있으나, 전체 용어를 하나의 지식 그래프로 연결한 자료는 아직 없다.

### 전체 과정의 상위 Dependency Backbone

```text
Linux / CLI / File / Process
        ↓
Git / Collaboration
        ↓
Data Structure / Algorithm
        ↓
HTML / CSS / JavaScript
        ↓
React / SPA / State / Routing
        ↓
Database / SQL / ERD
        ↓
FastAPI / ORM / CRUD
        ↓
Authentication / Authorization / Relationship
        ↓
Cloud / Deployment / IAM / Network
        ↓
AI API / Prompt / Context
        ↓
Web AI Chatbot Integration
        ↓
Full-Stack Service Enhancement
```

이 Backbone을 기반으로 세부 용어 Dependency Map을 후속 자산으로 만든다.

---

## 9. Vocabulary Gate 감사

**판정: FIX**

계획 문서에는 V1~V5가 정의되어 있으나 현재 미션별 실제 체크리스트는 없다.

### 표준 Gate

| Gate | 확인 내용 |
|---|---|
| V1 | 용어를 보고 알아볼 수 있는가? |
| V2 | Top Core 의미를 자기 말로 짧게 설명할 수 있는가? |
| V3 | 핵심 용어 사이 관계를 연결할 수 있는가? |
| V4 | 실제 코드·명령·설정에서 위치를 찾을 수 있는가? |
| V5 | 평가에서 원리·선택 이유를 설명할 수 있는가? |

### 적용 원칙

- REFERENCE: 주로 V1~V2
- REQUIRED: 주로 V2~V4
- CORE: 주로 V3~V5

미션별 Gate 체크는 설명·실습 단계에서 추가한다.

---

## 10. 한글·영어·약어 표기 감사

**판정: PASS, 소규모 정규화 필요**

전반적으로 다음 원칙이 잘 유지되었다.

- 일반 용어: `한글명 (English Term)`
- 약어: `한글명 (English Full Name, ABBR)`
- 고유 기술명: Git, FastAPI, React, SQLAlchemy 등은 고유명 유지
- 명령/파일/코드 식별자: 필요한 경우 backtick 사용

후속 Master Vocabulary 생성 시 다음을 정규화한다.

1. 동일 영문 용어의 한글 표기 통일
2. `로그인 / Sign-In / Login`처럼 동의어가 있는 용어의 대표어 선정
3. `Repository`가 Git 저장소 의미인지 Data Access Repository 의미인지 문맥 구분
4. `Session`이 인증 세션인지 DB 세션인지 구분
5. `Model`이 AI 모델인지 ORM 모델인지 문맥 구분
6. 명령어와 일반 개념을 같은 Term ID로 합치지 않음

---

## 11. 과잉 범위 감사

**판정: PASS**

후반 미션에서 특히 STOP RULE이 잘 적용되어 있다.

예:

- B5-1: API Framework / 과도한 DB 심화 분리
- B5-2: 인증·인가를 다음 미션으로 분리
- B6-1: Kubernetes/Terraform/복잡한 클라우드 구조를 필수에서 제외
- B6-2: 자동 push / GitHub PR 생성 자동화를 필수에서 제외
- B7-1/B7-2: RAG, Vector DB, Message Queue, Kubernetes, Microservice를 필수에서 제외

초기 미션도 동일 원칙으로 Advanced 경계를 유지한다.

---

## 12. 발견된 품질 이슈 우선순위

### P0 — 즉시 막아야 하는 문제

**없음.**

현재 용어 지도는 다음 단계 학습에 사용할 수 있다.

### P1 — 설명 학습 전에 보완해야 할 것

1. Basic Master Vocabulary 생성
2. 중복 용어 대표어 정규화
3. CORE / REQUIRED / REFERENCE 통합 관리
4. K1~K4 적용
5. First Seen / Lifecycle 추적
6. 대표 Dependency Map 생성
7. Vocabulary Gate 체크 구조 생성

### P2 — 학습 진행 중 보완

1. 쉬운 한 줄 설명
2. 생활 비유
3. 도식·만화
4. 초미니 실습
5. 의도적 오류 실습
6. 평가 예상 질문
7. 자기 설명 체크

### P3 — 고도화 단계

1. 통합 Knowledge Graph
2. 검색 가능한 용어 DB
3. 학습 대시보드
4. 자동 복습 큐
5. 미션별 숙련도 시각화

---

## 13. 이번 감사의 최종 판정

### 콘텐츠 품질

**PASS**

15개 원본 미션의 주요 요구 영역은 용어 지도에 반영되어 있으며, 즉시 학습용으로 사용할 수 있다.

### 구조 품질

**CONDITIONAL PASS**

Level / Advanced / Top Core / 20:60:20은 안정적이다.  
Priority / K1~K4 / Lifecycle / Dependency / Gate는 통합 관리층을 추가해야 완성된다.

### 다음 단계 진입 여부

**진입 가능.**

다만 바로 15개 문서에 설명을 붙이는 것보다 먼저 `Basic Master Vocabulary`를 만들어 중복과 메타데이터를 통합하는 것이 안전하다.

---

## 14. 권장 다음 작업 순서

```text
[완료] 15개 Mission Vocabulary
        ↓
[완료] 전체 용어 품질 감사
        ↓
[다음] Basic Master Vocabulary
        ↓
대표어 / 중복 제거 / First Seen
        ↓
Priority + K1~K4 + Lifecycle
        ↓
Dependency Map
        ↓
Learning Path + Vocabulary Gate
        ↓
B1-1부터 Top Core 쉬운 설명
        ↓
비유 → 도식/만화 → 초미니 실습
        ↓
실제 미션 적용 → 오류 실습 → 평가 설명
```

---

## 15. 감사 결론

1차 용어 수집은 **15 / 15 완료** 상태를 유지한다.

이번 감사에서 확인된 핵심은 **용어를 다시 대량 추가해야 하는 문제가 아니라, 이미 모은 용어를 하나의 학습 데이터 구조로 정규화해야 한다는 것**이다.

따라서 다음 작업은 `Basic Master Vocabulary` 생성으로 진행한다.
