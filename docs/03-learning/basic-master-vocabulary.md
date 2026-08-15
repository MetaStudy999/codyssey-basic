# Codyssey Basic Master Vocabulary

**대상:** B1-1 ~ B7-2 전체 15개 미션  
**목적:** 미션별 용어 목록의 중복을 줄이고, 핵심 용어의 최초 도입·재사용·중요도·학습 깊이·누적 학습 흐름을 하나의 통합 기준으로 관리한다.  
**근거:** `docs/03-learning/vocabulary/*.md`, `vocabulary-learning-plan.md`, `vocabulary-quality-audit.md`  
**상태:** Basic Master Vocabulary v1

> 이 문서는 15개 Mission Vocabulary를 대체하지 않는다. 각 미션에만 등장하는 세부 명령·파일·오류·보너스 항목은 미션별 문서에 유지하고, 여기서는 여러 미션을 연결하는 **정규화된 핵심·반복 용어**를 중심으로 관리한다.

---

## 1. 통합 관리 원칙

### 1.1 표기

- 일반 용어: `한글 용어 (English Term, 약어)`
- 현업 고유 기술명: Git, FastAPI, React, SQLAlchemy처럼 영문 고유명사를 그대로 유지
- 같은 개념의 표기 변형은 하나의 대표 용어로 정규화

### 1.2 중요도

| Priority | 의미 | 기본 학습 깊이 |
|---|---|---|
| CORE | 미션의 본질을 이해하는 핵심 개념 | K3~K4 |
| REQUIRED | 실제 구현·검증에 필요한 용어 | K2~K3 |
| REFERENCE | 필요할 때 찾아보는 보조 용어 | K1~K2 |

### 1.3 Knowledge Level

| Level | 기준 |
|---|---|
| K1 | 보고 알아볼 수 있다 |
| K2 | 짧게 의미를 설명할 수 있다 |
| K3 | 코드·명령·설정에서 사용할 수 있다 |
| K4 | 원리·선택 이유·관계까지 설명할 수 있다 |

### 1.4 Lifecycle

`NEW → REVIEW → APPLY → DEEPEN → INTEGRATE`

- **NEW:** 첫 도입
- **REVIEW:** 이전 지식 복습
- **APPLY:** 실제 미션에서 사용
- **DEEPEN:** 구조·원리 수준으로 심화
- **INTEGRATE:** 여러 기술과 결합하여 통합 사용

> `First Seen`은 현재 Mission Vocabulary의 **교육적 첫 도입 위치**를 기준으로 한다. 같은 단어가 이전 문서의 참고 영역에 잠깐 등장했더라도, 본격 학습이 시작되는 미션을 우선한다.

---

## 2. 전체 학습 Backbone

```text
Linux / CLI / File / Process
        ↓
Git / Collaboration
        ↓
Python / Data Handling
        ↓
Data Structure / Algorithm
        ↓
HTML / CSS / JavaScript / DOM / HTTP
        ↓
React / SPA / State / Routing
        ↓
Database / SQL / ERD
        ↓
FastAPI / ORM / CRUD
        ↓
Authentication / Authorization / Relationship
        ↓
Cloud / Network / IAM / Deployment
        ↓
AI API / Prompt / Context
        ↓
Web AI Chatbot Integration
        ↓
Full-Stack Service Enhancement
```

---

## 3. Linux · 시스템 · 운영

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| SYS-001 | 리눅스 (Linux) | Technology | B1-1 | B1-2, B6-1, B7-1 | CORE | K4 | NEW→APPLY→INTEGRATE |
| SYS-002 | 명령줄 인터페이스 (Command-Line Interface, CLI) | Concept | B1-1 | B2-1, B3-1, B3-2, B6-2 | CORE | K4 | NEW→APPLY→INTEGRATE |
| SYS-003 | 셸 (Shell) | Concept | B1-1 | B2-1, B6-1 | REQUIRED | K3 | NEW→APPLY |
| SYS-004 | 배시 (Bash) | Technology | B1-1 | B6-1 | REQUIRED | K3 | NEW→APPLY |
| SYS-005 | 사용자 계정 (User Account) | Security | B1-1 | B5-3, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| SYS-006 | 사용자·그룹 (User / Group) | Security | B1-1 | B6-1 | CORE | K4 | NEW→APPLY |
| SYS-007 | 파일 권한 (File Permission) | Security | B1-1 | B6-1 | CORE | K4 | NEW→APPLY |
| SYS-008 | 접근 제어 목록 (Access Control List, ACL) | Security | B1-1 | - | REQUIRED | K3 | NEW |
| SYS-009 | 최소 권한 원칙 (Principle of Least Privilege, PoLP) | Security | B1-1 | B6-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| SYS-010 | 프로세스 (Process) | Concept | B1-1 | B1-2, B6-1 | CORE | K4 | NEW→DEEPEN |
| SYS-011 | 프로세스 식별자 (Process Identifier, PID) | Concept | B1-1 | B1-2 | REQUIRED | K3 | NEW→APPLY |
| SYS-012 | 포트 (Port) | Network | B1-1 | B4-1, B5-2, B6-1, B7-1 | CORE | K4 | NEW→APPLY→INTEGRATE |
| SYS-013 | 보안 셸 (Secure Shell, SSH) | Protocol | B1-1 | B6-1 | CORE | K4 | NEW→DEEPEN |
| SYS-014 | 방화벽 (Firewall) | Security | B1-1 | B6-1 | CORE | K4 | NEW→DEEPEN |
| SYS-015 | 환경 변수 (Environment Variable) | Configuration | B1-1 | B4-2, B5-2, B5-3, B6-2, B7-1, B7-2 | CORE | K4 | NEW→APPLY→INTEGRATE |
| SYS-016 | 로그 (Log) | Operations | B1-1 | B1-2, B5-2, B6-1, B7-1 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| SYS-017 | 시스템 관제 (System Monitoring) | Operations | B1-1 | B1-2, B6-1 | CORE | K4 | NEW→DEEPEN |
| SYS-018 | 상태 점검 (Health Check) | Verification | B1-1 | B6-1, B7-1 | REQUIRED | K3 | NEW→APPLY→INTEGRATE |
| SYS-019 | 크론 (cron) | Tool | B1-1 | - | REQUIRED | K3 | NEW |
| SYS-020 | 로그 로테이션 (Log Rotation) | Operations | B1-1 | - | REQUIRED | K3 | NEW |
| SYS-021 | 메모리 누수 (Memory Leak) | Failure | B1-2 | - | CORE | K4 | NEW |
| SYS-022 | 메모리 부족 (Out of Memory, OOM) | Failure | B1-2 | - | CORE | K4 | NEW |
| SYS-023 | CPU 급등 (CPU Spike) | Failure | B1-2 | - | CORE | K4 | NEW |
| SYS-024 | 지연 시간 (Latency) | Operations | B1-2 | B6-2, B7-1 | REQUIRED | K3 | NEW→APPLY |
| SYS-025 | 교착 상태 (Deadlock) | Failure | B1-2 | - | CORE | K4 | NEW |

---

## 4. Git · GitHub · 협업

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| GIT-001 | 버전 관리 시스템 (Version Control System, VCS) | Concept | B2-2 | B3-2 | CORE | K4 | NEW→DEEPEN |
| GIT-002 | 분산 버전 관리 시스템 (Distributed Version Control System, DVCS) | Concept | B2-2 | B3-2 | CORE | K4 | NEW→DEEPEN |
| GIT-003 | Git | Technology | B2-2 | B3-2, B6-2, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| GIT-004 | GitHub | Technology | B2-2 | B4-1, B6-2, B7-1, B7-2 | CORE | K4 | NEW→APPLY→INTEGRATE |
| GIT-005 | 저장소 (Repository) | Concept | B2-2 | B3-2, B4-1, B7-1 | CORE | K4 | NEW→APPLY |
| GIT-006 | 커밋 (Commit) | Concept | B2-2 | B3-2, B6-2, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| GIT-007 | 커밋 해시 (Commit Hash) | Concept | B2-2 | B3-2 | REQUIRED | K3 | NEW→DEEPEN |
| GIT-008 | 브랜치 (Branch) | Concept | B2-2 | B3-2, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| GIT-009 | HEAD | Concept | B2-2 | B3-2 | REQUIRED | K3 | NEW→DEEPEN |
| GIT-010 | 원격 저장소 (Remote Repository) | Concept | B2-2 | B7-1, B7-2 | REQUIRED | K3 | NEW→APPLY |
| GIT-011 | GitHub Flow | Pattern | B2-2 | B7-1 | CORE | K4 | NEW→APPLY |
| GIT-012 | 이슈 (Issue) | Collaboration | B2-2 | B1-2 보고 흐름, B7-1 | REQUIRED | K3 | NEW→APPLY |
| GIT-013 | Pull Request (PR) | Collaboration | B2-2 | B6-2, B7-1, B7-2 | CORE | K4 | NEW→APPLY→INTEGRATE |
| GIT-014 | 코드 리뷰 (Code Review) | Collaboration | B2-2 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| GIT-015 | 병합 (Merge) | Collaboration | B2-2 | B3-2, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| GIT-016 | 병합 충돌 (Merge Conflict) | Failure | B2-2 | B7-2 | CORE | K4 | NEW→APPLY |
| GIT-017 | Branch Protection | Collaboration | B2-2 | B7-2 | REQUIRED | K3 | NEW→INTEGRATE |
| GIT-018 | `git status` | Command | B2-2 | B6-2 | REQUIRED | K3 | NEW→DEEPEN |
| GIT-019 | `git diff` | Command | B2-2 | B6-2 | REQUIRED | K3 | NEW→DEEPEN |
| GIT-020 | `git commit --amend` | Command | B2-2 | - | REFERENCE | K2 | NEW |
| GIT-021 | `git reset` | Command | B2-2 | - | REQUIRED | K3 | NEW |
| GIT-022 | `git revert` | Command | B2-2 | - | REQUIRED | K3 | NEW |
| GIT-023 | `git stash` | Command | B2-2 | - | REQUIRED | K3 | NEW |
| GIT-024 | 기능 브랜치 (Feature Branch) | Collaboration | B2-2 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| GIT-025 | `feature → develop → main` 브랜치 전략 | Collaboration | B7-2 | - | CORE | K4 | NEW |

---

## 5. Python · 데이터 처리 · 프로그램 구조

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| PY-001 | 파이썬 (Python) | Technology | B2-1 | B3-1, B3-2, B5-2, B5-3, B6-2, B7-1 | CORE | K4 | NEW→APPLY→INTEGRATE |
| PY-002 | 모듈 (Module) | Concept | B2-1 | B5-2, B6-2 | REQUIRED | K3 | NEW→APPLY |
| PY-003 | 함수 (Function) | Concept | B2-1 | B3-1, B3-2, B5-2, B6-2 | CORE | K4 | NEW→APPLY |
| PY-004 | 클래스 (Class) | Concept | B2-1 | B3-1, B3-2, B5-1, B5-2 | CORE | K4 | NEW→DEEPEN |
| PY-005 | 데이터 클래스 (Data Class, dataclass) | Technology | B2-1 | - | REQUIRED | K3 | NEW |
| PY-006 | 타입 힌트 (Type Hint) | Concept | B2-1 | B5-2, B6-2 | REQUIRED | K3 | NEW→APPLY |
| PY-007 | 제너레이터 (Generator) | Concept | B2-1 | - | CORE | K4 | NEW |
| PY-008 | `yield` | Language Feature | B2-1 | - | REQUIRED | K3 | NEW |
| PY-009 | 데코레이터 (Decorator) | Concept | B2-1 | B5-2 | REQUIRED | K3 | NEW→APPLY |
| PY-010 | 파일 입출력 (File Input/Output, File I/O) | Concept | B2-1 | B3-2 | CORE | K4 | NEW→APPLY |
| PY-011 | JSON Lines (JSONL) | File Format | B2-1 | - | REQUIRED | K3 | NEW |
| PY-012 | CSV (Comma-Separated Values, CSV) | File Format | B2-1 | - | REQUIRED | K3 | NEW |
| PY-013 | 유효성 검사 (Validation) | Concept | B2-1 | B4-1, B4-2, B5-2, B6-2, B7-1 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| PY-014 | 예외 처리 (Exception Handling) | Concept | B2-1 | B5-2, B6-2, B7-1 | CORE | K4 | NEW→DEEPEN |
| PY-015 | 종료 코드 (Exit Code) | Verification | B2-1 | B6-2 | REQUIRED | K3 | NEW→APPLY |
| PY-016 | 원자적 교체 (Atomic Replacement) | Pattern | B2-1 | - | REFERENCE | K2 | NEW |
| PY-017 | 생성·조회·수정·삭제 (Create, Read, Update, Delete, CRUD) | Concept | B2-1 | B4-2, B5-1, B5-2, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |

---

## 6. 자료구조 · 알고리즘

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| DSA-001 | 자료구조 (Data Structure) | Concept | B3-1 | B3-2 | CORE | K4 | NEW→DEEPEN |
| DSA-002 | 알고리즘 (Algorithm) | Concept | B3-1 | B3-2 | CORE | K4 | NEW→DEEPEN |
| DSA-003 | 키-값 저장소 (Key-Value Store) | Data Structure | B3-1 | B5-1 간접 연결 | CORE | K4 | NEW→APPLY |
| DSA-004 | 해시 맵 (Hash Map) | Data Structure | B3-1 | B3-2 | CORE | K4 | NEW→DEEPEN |
| DSA-005 | 해시 함수 (Hash Function) | Algorithm | B3-1 | B3-2 | CORE | K4 | NEW→DEEPEN |
| DSA-006 | 충돌 (Collision) | Data Structure | B3-1 | - | REQUIRED | K3 | NEW |
| DSA-007 | 체이닝 (Chaining) | Data Structure | B3-1 | - | CORE | K4 | NEW |
| DSA-008 | 로드 팩터 (Load Factor) | Data Structure | B3-1 | - | REQUIRED | K3 | NEW |
| DSA-009 | 이중 연결 리스트 (Doubly Linked List, DLL) | Data Structure | B3-1 | - | CORE | K4 | NEW |
| DSA-010 | 최소 힙 (Min Heap) | Data Structure | B3-1 | - | CORE | K4 | NEW |
| DSA-011 | 최소 최근 사용 (Least Recently Used, LRU) | Algorithm | B3-1 | - | CORE | K4 | NEW |
| DSA-012 | 만료 시간 (Time To Live, TTL) | Concept | B3-1 | - | CORE | K4 | NEW |
| DSA-013 | 메모리 제거 정책 (Eviction Policy) | Algorithm | B3-1 | - | REQUIRED | K3 | NEW |
| DSA-014 | 그래프 (Graph) | Data Structure | B3-2 | B7-2 Architecture 사고에 간접 연결 | CORE | K4 | NEW |
| DSA-015 | 노드 (Node) | Data Structure | B3-2 | - | REQUIRED | K3 | NEW |
| DSA-016 | 간선 (Edge) | Data Structure | B3-2 | - | REQUIRED | K3 | NEW |
| DSA-017 | 방향 비순환 그래프 (Directed Acyclic Graph, DAG) | Data Structure | B3-2 | - | CORE | K4 | NEW |
| DSA-018 | 그래프 탐색 (Graph Traversal) | Algorithm | B3-2 | - | CORE | K4 | NEW |
| DSA-019 | 너비 우선 탐색 (Breadth-First Search, BFS) | Algorithm | B3-2 | - | CORE | K4 | NEW |
| DSA-020 | 최단 경로 (Shortest Path) | Algorithm | B3-2 | - | CORE | K4 | NEW |
| DSA-021 | 조상 노드 (Ancestor) | Data Structure | B3-2 | - | REQUIRED | K3 | NEW |
| DSA-022 | 위상 순서 유사 출력 (Topological-order-like Output) | Algorithm | B3-2 | - | CORE | K4 | NEW |
| DSA-023 | 정렬 알고리즘 (Sorting Algorithm) | Algorithm | B3-2 | B5-1 ORDER BY 개념 비교 | CORE | K4 | NEW→APPLY |
| DSA-024 | 시간 복잡도 (Time Complexity) | Algorithm | B3-1 | B3-2, B5-1 | CORE | K4 | NEW→DEEPEN |
| DSA-025 | 안정 정렬 (Stable Sort) | Algorithm | B3-2 | - | REQUIRED | K3 | NEW |
| DSA-026 | 역색인 (Inverted Index) | Data Structure | B3-2 | AI 검색 고도화의 선수 개념으로만 연결 | CORE | K4 | NEW |

---

## 7. 웹 기본 · HTML · CSS · JavaScript

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| WEB-001 | 웹 (Web) | Concept | B4-1 | B4-2, B5-2, B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| WEB-002 | 하이퍼텍스트 마크업 언어 (HyperText Markup Language, HTML) | Technology | B4-1 | B5-2, B7-1 | CORE | K4 | NEW→APPLY |
| WEB-003 | 시맨틱 HTML (Semantic HTML) | Concept | B4-1 | B7-2 UI 설계 | REQUIRED | K3 | NEW→APPLY |
| WEB-004 | 종속형 시트 (Cascading Style Sheets, CSS) | Technology | B4-1 | B4-2, B7-1 | CORE | K4 | NEW→APPLY |
| WEB-005 | 반응형 웹 디자인 (Responsive Web Design, RWD) | Concept | B4-1 | B4-2, B7-2 | CORE | K4 | NEW→APPLY |
| WEB-006 | Flexbox | Layout | B4-1 | B4-2 | REQUIRED | K3 | NEW→APPLY |
| WEB-007 | CSS Grid | Layout | B4-1 | B4-2 | REQUIRED | K3 | NEW→APPLY |
| WEB-008 | 미디어 쿼리 (Media Query) | CSS | B4-1 | B4-2 | REQUIRED | K3 | NEW→APPLY |
| WEB-009 | 자바스크립트 (JavaScript, JS) | Technology | B4-1 | B4-2, B7-2 Frontend | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| WEB-010 | 문서 객체 모델 (Document Object Model, DOM) | Concept | B4-1 | B4-2에서 React로 추상화 | CORE | K4 | NEW→DEEPEN |
| WEB-011 | 이벤트 (Event) | Concept | B4-1 | B4-2, B7-1 | CORE | K4 | NEW→DEEPEN |
| WEB-012 | 이벤트 리스너 (Event Listener) | Concept | B4-1 | B4-2 | REQUIRED | K3 | NEW→APPLY |
| WEB-013 | 상태 (State) | Concept | B4-1 | B4-2, B7-1 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| WEB-014 | 렌더링 (Rendering) | Concept | B4-1 | B4-2 | CORE | K4 | NEW→DEEPEN |
| WEB-015 | 비동기 처리 (Asynchronous Processing) | Concept | B4-1 | B4-2, B5-2, B6-2, B7-1 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| WEB-016 | `fetch()` | API | B4-1 | B4-2 | REQUIRED | K3 | NEW→APPLY |
| WEB-017 | `async/await` | Language Feature | B4-1 | B4-2, B6-2 | CORE | K4 | NEW→APPLY |
| WEB-018 | 애플리케이션 프로그래밍 인터페이스 (Application Programming Interface, API) | Concept | B4-1 | B4-2, B5-2, B6-2, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| WEB-019 | HTTP (Hypertext Transfer Protocol, HTTP) | Protocol | B4-1 | B5-2, B6-1, B6-2, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| WEB-020 | 요청·응답 (Request / Response) | Concept | B4-1 | B5-2, B6-2, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| WEB-021 | JSON (JavaScript Object Notation, JSON) | Data Format | B4-1 | B4-2, B5-2, B6-2, B7-2 | REQUIRED | K3 | NEW→APPLY |
| WEB-022 | GitHub API | API | B4-1 | - | REQUIRED | K3 | NEW |
| WEB-023 | GitHub Pages | Deployment | B4-1 | - | REQUIRED | K3 | NEW |
| WEB-024 | 로컬 스토리지 (Local Storage, localStorage) | Browser API | B4-1 | - | REQUIRED | K3 | NEW |
| WEB-025 | 폼 유효성 검사 (Form Validation) | Verification | B4-1 | B4-2, B5-2, B7-1 | CORE | K4 | NEW→DEEPEN |

---

## 8. React · SPA · 프론트엔드 상태 관리

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| FE-001 | React | Technology | B4-2 | B7-2 선택 Frontend 예시 | CORE | K4 | NEW→INTEGRATE |
| FE-002 | 컴포넌트 (Component) | Architecture | B4-2 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| FE-003 | 컴포넌트 기반 설계 (Component-Based Design) | Architecture | B4-2 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| FE-004 | 재사용 컴포넌트 (Reusable Component) | Architecture | B4-2 | B7-2 | REQUIRED | K3 | NEW→APPLY |
| FE-005 | 프롭스 (Props) | Concept | B4-2 | - | CORE | K4 | NEW |
| FE-006 | 상태 (State) | Concept | B4-2 | B7-2 | CORE | K4 | DEEPEN→INTEGRATE |
| FE-007 | 리렌더링 (Re-rendering) | Concept | B4-2 | - | CORE | K4 | NEW |
| FE-008 | `useState` | React Hook | B4-2 | - | REQUIRED | K3 | NEW |
| FE-009 | `useEffect` | React Hook | B4-2 | - | CORE | K4 | NEW |
| FE-010 | 의존성 배열 (Dependency Array) | React | B4-2 | - | CORE | K4 | NEW |
| FE-011 | 단일 페이지 애플리케이션 (Single Page Application, SPA) | Architecture | B4-2 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| FE-012 | 라우팅 (Routing) | Architecture | B4-2 | B5-2, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| FE-013 | React Router | Technology | B4-2 | - | REQUIRED | K3 | NEW |
| FE-014 | 라우트 파라미터 (Route Parameter) | Concept | B4-2 | B5-2, B7-2 API 경로 개념과 연결 | REQUIRED | K3 | NEW→DEEPEN |
| FE-015 | 제어 입력 (Controlled Input) | React | B4-2 | - | REQUIRED | K3 | NEW |
| FE-016 | 커스텀 훅 (Custom Hook) | React | B4-2 | - | CORE | K4 | NEW |
| FE-017 | 로딩 상태 (Loading State) | UX | B4-1 | B4-2, B6-2, B7-1 | CORE | K4 | NEW→DEEPEN |
| FE-018 | 에러 상태 (Error State) | UX | B4-1 | B4-2, B6-2, B7-1 | CORE | K4 | NEW→DEEPEN |
| FE-019 | 빈 상태 (Empty State) | UX | B4-1 | B4-2, B7-1 | REQUIRED | K3 | NEW→DEEPEN |
| FE-020 | 제출 중 상태 (Submitting State) | UX | B4-2 | B7-2 | REQUIRED | K3 | NEW→APPLY |

---

## 9. 데이터베이스 · SQL · ERD

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| DB-001 | 데이터베이스 (Database, DB) | Concept | B4-2 | B5-1, B5-2, B5-3, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| DB-002 | 관계형 데이터베이스 (Relational Database, RDB) | Concept | B5-1 | B5-2, B5-3, B7-2 | CORE | K4 | NEW→INTEGRATE |
| DB-003 | 스키마 (Schema) | Concept | B5-1 | B5-2, B5-3, B7-2 | CORE | K4 | NEW→DEEPEN |
| DB-004 | 테이블 (Table) | Concept | B5-1 | B5-2, B5-3, B7-2 | CORE | K4 | NEW→INTEGRATE |
| DB-005 | 행 (Row) | Concept | B5-1 | B5-2 | REQUIRED | K3 | NEW→APPLY |
| DB-006 | 열 (Column) | Concept | B5-1 | B5-2 | REQUIRED | K3 | NEW→APPLY |
| DB-007 | 기본 키 (Primary Key, PK) | Database | B5-1 | B5-2, B5-3, B7-2 | CORE | K4 | NEW→INTEGRATE |
| DB-008 | 외래 키 (Foreign Key, FK) | Database | B5-1 | B5-3, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| DB-009 | 일대다 관계 (One-to-Many Relationship, 1:N) | Database | B5-1 | B5-3, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| DB-010 | 참조 무결성 (Referential Integrity) | Database | B5-1 | B5-3, B7-2 | CORE | K4 | NEW→DEEPEN |
| DB-011 | 구조화 질의 언어 (Structured Query Language, SQL) | Technology | B5-1 | B5-2 | CORE | K4 | NEW→DEEPEN |
| DB-012 | `CREATE TABLE` | SQL | B5-1 | - | REQUIRED | K3 | NEW |
| DB-013 | `INSERT` | SQL | B5-1 | B5-2 ORM CRUD 대응 | REQUIRED | K3 | NEW→DEEPEN |
| DB-014 | `SELECT` | SQL | B5-1 | B5-2 ORM 조회 대응 | CORE | K4 | NEW→DEEPEN |
| DB-015 | `UPDATE` | SQL | B5-1 | B5-2 CRUD | REQUIRED | K3 | NEW→DEEPEN |
| DB-016 | `DELETE` | SQL | B5-1 | B5-2 CRUD | REQUIRED | K3 | NEW→DEEPEN |
| DB-017 | `WHERE` | SQL | B5-1 | B5-2 검색 | REQUIRED | K3 | NEW→APPLY |
| DB-018 | `JOIN` | SQL | B5-1 | B5-3 Relationship | CORE | K4 | NEW→DEEPEN |
| DB-019 | `GROUP BY` | SQL | B5-1 | - | CORE | K4 | NEW |
| DB-020 | 집계 함수 (Aggregate Function) | SQL | B5-1 | - | REQUIRED | K3 | NEW |
| DB-021 | 서브쿼리 (Subquery) | SQL | B5-1 | - | REQUIRED | K3 | NEW |
| DB-022 | 인덱스 (Database Index) | Database | B5-1 | B7-2 성능 확장 선수 | CORE | K4 | NEW→APPLY |
| DB-023 | 엔터티 관계도 (Entity-Relationship Diagram, ERD) | Architecture | B5-1 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| DB-024 | SQLite | Technology | B5-1 | B5-2, B5-3, B7-1 | REQUIRED | K3 | NEW→APPLY |
| DB-025 | PostgreSQL | Technology | B5-1 | B7-2 선택 예시 | REFERENCE | K2 | NEW→APPLY |

---

## 10. FastAPI · ORM · 백엔드 구조

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| BE-001 | FastAPI | Technology | B5-2 | B5-3, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| BE-002 | Uvicorn | Tool | B5-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| BE-003 | 서버 사이드 렌더링 (Server-Side Rendering, SSR) | Architecture | B5-2 | B7-1 | CORE | K4 | NEW→APPLY |
| BE-004 | Jinja2 | Technology | B5-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| BE-005 | 라우터 (Router) | Architecture | B5-2 | B5-3, B7-1 | CORE | K4 | NEW→DEEPEN |
| BE-006 | 서비스 계층 (Service Layer) | Architecture | B5-2 | B5-3, B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| BE-007 | 리포지토리 계층 (Repository Layer) | Architecture | B5-2 | B5-3 | CORE | K4 | NEW→DEEPEN |
| BE-008 | 모델 (Model) | Architecture | B5-2 | B5-3, B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| BE-009 | 객체 관계 매핑 (Object-Relational Mapping, ORM) | Architecture | B5-1 | B5-2, B5-3, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| BE-010 | SQLAlchemy | Technology | B5-2 | B5-3, B7-1 | CORE | K4 | NEW→DEEPEN |
| BE-011 | 세션 (Database Session) | Database | B5-2 | B5-3 | REQUIRED | K3 | NEW→APPLY |
| BE-012 | 의존성 주입 (Dependency Injection, DI) | Architecture | B5-2 | B5-3 | CORE | K4 | NEW→DEEPEN |
| BE-013 | `Depends` | FastAPI | B5-2 | B5-3 | CORE | K4 | NEW→DEEPEN |
| BE-014 | 폼 데이터 (Form Data) | Web | B5-2 | B5-3 | REQUIRED | K3 | NEW→APPLY |
| BE-015 | POST-Redirect-GET (PRG) | Pattern | B5-2 | - | CORE | K4 | NEW |
| BE-016 | HTTP 303 See Other | Protocol | B5-2 | - | REQUIRED | K3 | NEW |
| BE-017 | Pydantic Schema | Technology | B5-2 | B5-3, B7-2 | REQUIRED | K3 | NEW→DEEPEN |
| BE-018 | 데이터 전송 객체 (Data Transfer Object, DTO) | Architecture | B5-2 | B7-2 | REFERENCE | K2 | NEW→APPLY |

---

## 11. 인증 · 인가 · 데이터 소유권

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| AUTH-001 | 인증 (Authentication, Auth) | Security | B4-2 | B5-3, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| AUTH-002 | 인가 (Authorization) | Security | B5-3 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AUTH-003 | 세션 인증 (Session Authentication) | Security | B5-3 | B7-1 | CORE | K4 | NEW→APPLY |
| AUTH-004 | JSON Web Token (JWT) | Security | B5-3 | B7-2 | CORE | K4 | NEW→DEEPEN |
| AUTH-005 | 쿠키 (Cookie) | Web/Security | B5-3 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| AUTH-006 | 토큰 (Token) | Security | B5-3 | B6-2 API 인증, B7-2 | CORE | K4 | NEW→DEEPEN |
| AUTH-007 | 로그인 (Login / Sign-In) | Feature | B5-3 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AUTH-008 | 로그아웃 (Logout / Sign-Out) | Feature | B5-3 | B7-2 | REQUIRED | K3 | NEW→INTEGRATE |
| AUTH-009 | 회원가입 (Sign-Up) | Feature | B5-3 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AUTH-010 | 보호 경로 (Protected Route) | Security | B4-2 | B5-3, B7-1 | REQUIRED | K3 | NEW→DEEPEN |
| AUTH-011 | 패스워드 해싱 (Password Hashing) | Security | B5-3 | B7-2 | CORE | K4 | NEW→DEEPEN |
| AUTH-012 | 관계 매핑 (ORM Relationship) | Database | B5-3 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| AUTH-013 | `ForeignKey` | ORM | B5-3 | B7-2 | REQUIRED | K3 | DEEPEN→INTEGRATE |
| AUTH-014 | `relationship` | ORM | B5-3 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| AUTH-015 | `back_populates` | ORM | B5-3 | - | REQUIRED | K3 | NEW |
| AUTH-016 | 상태 전이 (State Transition) | Concept | B5-3 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| AUTH-017 | 데이터 소유권 (Data Ownership) | Security | B7-2 | - | CORE | K4 | NEW |
| AUTH-018 | 작성자 전용 수정·삭제 (Author-only Update/Delete) | Authorization | B7-2 | - | CORE | K4 | NEW |
| AUTH-019 | HTTP 403 Forbidden | Protocol/Security | B7-2 | - | REQUIRED | K3 | NEW |
| AUTH-020 | HTTP 404 Not Found | Protocol | B4-2 | B5-2, B7-2 | REQUIRED | K3 | NEW→DEEPEN |

---

## 12. 클라우드 · 네트워크 · 배포

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| CLD-001 | 클라우드 컴퓨팅 (Cloud Computing) | Concept | B6-1 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| CLD-002 | Amazon Web Services (AWS) | Technology | B6-1 | B7-2 선택 예시 | REQUIRED | K3 | NEW→APPLY |
| CLD-003 | 가상 사설 클라우드 (Virtual Private Cloud, VPC) | Network | B6-1 | B7-2 Architecture 이해 | CORE | K4 | NEW→INTEGRATE |
| CLD-004 | 서브넷 (Subnet) | Network | B6-1 | - | CORE | K4 | NEW |
| CLD-005 | 퍼블릭 서브넷 (Public Subnet) | Network | B6-1 | - | CORE | K4 | NEW |
| CLD-006 | 클래스 없는 도메인 간 라우팅 (Classless Inter-Domain Routing, CIDR) | Network | B6-1 | - | CORE | K4 | NEW |
| CLD-007 | 라우트 테이블 (Route Table) | Network | B6-1 | - | CORE | K4 | NEW |
| CLD-008 | 인터넷 게이트웨이 (Internet Gateway, IGW) | Network | B6-1 | - | CORE | K4 | NEW |
| CLD-009 | `0.0.0.0/0` 기본 경로 | Network | B6-1 | - | REQUIRED | K3 | NEW |
| CLD-010 | Elastic Compute Cloud (EC2) | Compute | B6-1 | B7-1 배포 개념 | CORE | K4 | NEW→INTEGRATE |
| CLD-011 | 공인 IP 주소 (Public IP Address) | Network | B6-1 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| CLD-012 | 보안 그룹 (Security Group, SG) | Security | B6-1 | B7-1 | CORE | K4 | NEW→INTEGRATE |
| CLD-013 | Identity and Access Management (IAM) | Security | B6-1 | B7-2 운영 보안 | CORE | K4 | NEW→INTEGRATE |
| CLD-014 | IAM 사용자 (IAM User) | Security | B6-1 | - | REQUIRED | K3 | NEW |
| CLD-015 | IAM 역할 (IAM Role) | Security | B6-1 | - | REQUIRED | K3 | NEW |
| CLD-016 | Nginx | Technology | B6-1 | B7-1 배포 | CORE | K4 | NEW→APPLY |
| CLD-017 | 외부 접속 검증 (External Access Verification) | Verification | B6-1 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| CLD-018 | HTTPS (Hypertext Transfer Protocol Secure, HTTPS) | Protocol/Security | B6-1 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| CLD-019 | 배포 (Deployment) | Operations | B4-1 | B4-2, B6-1, B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| CLD-020 | 클라우드 리소스 정리 (Cloud Resource Cleanup) | Operations | B6-1 | B7-2 | CORE | K4 | NEW→INTEGRATE |
| CLD-021 | 비용 관리 (Cost Management) | Operations | B6-1 | B6-2, B7-2 | REQUIRED | K3 | NEW→INTEGRATE |

---

## 13. AI API · 프롬프트 · 안전한 외부 호출

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| AI-001 | 인공지능 (Artificial Intelligence, AI) | Concept | B6-2 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AI-002 | AI 모델 (AI Model) | Concept | B6-2 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AI-003 | AI API | API | B6-2 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AI-004 | API 키 (API Key) | Security | B6-2 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AI-005 | 프롬프트 (Prompt) | AI | B6-2 | B7-1 | CORE | K4 | NEW→DEEPEN |
| AI-006 | 컨텍스트 (Context) | AI | B6-2 | B7-1, B7-2 | CORE | K4 | NEW→DEEPEN→INTEGRATE |
| AI-007 | 모델 옵션 (Model Option) | AI | B6-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| AI-008 | Temperature | AI | B6-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| AI-009 | `max_tokens` | AI | B6-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| AI-010 | 커밋 메시지 생성 (Commit Message Generation) | AI Feature | B6-2 | - | CORE | K4 | NEW |
| AI-011 | PR 초안 생성 (Pull Request Draft Generation) | AI Feature | B6-2 | - | CORE | K4 | NEW |
| AI-012 | 출력 형식 검증 (Output Format Validation) | Verification | B6-2 | B7-1 | CORE | K4 | NEW→APPLY |
| AI-013 | 요청 횟수 제한 (Request Limit) | Operations | B6-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| AI-014 | 안전 모드 (Safe Mode) | Security | B6-2 | B7-1 | CORE | K4 | NEW→APPLY |
| AI-015 | 민감정보 마스킹 (Sensitive Information Masking) | Security | B6-2 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| AI-016 | 네트워크 오류 (Network Error) | Failure | B6-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| AI-017 | 인증 실패 (Authentication Failure) | Failure | B6-2 | B7-1 | REQUIRED | K3 | NEW→APPLY |
| AI-018 | 타임아웃 (Timeout) | Failure | B6-2 | B7-1 | CORE | K4 | NEW→DEEPEN |

---

## 14. 웹 AI 챗봇 · 통합 서비스

| ID | 표준 용어 | Category | First Seen | 주요 재사용·심화 | Priority | K | Lifecycle |
|---|---|---|---|---|---|---|---|
| APP-001 | 웹 애플리케이션 (Web Application) | Architecture | B4-1 | B4-2, B5-2, B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| APP-002 | 프론트엔드 (Frontend) | Architecture | B4-1 | B4-2, B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| APP-003 | 백엔드 (Backend) | Architecture | B5-2 | B7-1, B7-2 | CORE | K4 | NEW→INTEGRATE |
| APP-004 | 웹 기반 AI 챗봇 (Web-based AI Chatbot) | Application | B7-1 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-005 | 대화 문맥 유지 (Conversation Context Retention) | AI/Application | B7-1 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-006 | 대화 로그 (Conversation Log) | Data/Operations | B7-1 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-007 | 사용자별 추적 가능성 (Per-user Traceability) | Security/Operations | B7-1 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-008 | 대화 세션 (Chat Session) | Data Model | B7-2 | - | CORE | K4 | NEW |
| APP-009 | 메시지 (Message) | Data Model | B7-2 | - | CORE | K4 | NEW |
| APP-010 | 게시글 (Post) | Data Model | B7-2 | - | REQUIRED | K3 | NEW |
| APP-011 | RESTful API | Architecture | B7-2 | - | CORE | K4 | NEW |
| APP-012 | HTTP 메서드 (HTTP Method) | Protocol | B5-2 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-013 | HTTP 상태 코드 (HTTP Status Code) | Protocol | B4-1 | B5-2, B6-1, B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-014 | 시스템 아키텍처 (System Architecture) | Architecture | B7-1 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-015 | 시스템 아키텍처 다이어그램 (System Architecture Diagram) | Documentation | B7-1 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-016 | API 명세 (API Specification) | Documentation | B7-1 | B7-2 | CORE | K4 | NEW→DEEPEN |
| APP-017 | 기술 문서 (Technical Documentation) | Documentation | B7-1 | B7-2 | REQUIRED | K3 | NEW→INTEGRATE |
| APP-018 | 최소 기능 제품 (Minimum Viable Product, MVP) | Product | B7-2 | - | CORE | K4 | NEW |
| APP-019 | 서비스 고도화 (Service Enhancement) | Product | B7-2 | - | CORE | K4 | NEW |
| APP-020 | 풀스택 웹 애플리케이션 (Full-Stack Web Application) | Architecture | B7-2 | - | CORE | K4 | NEW |

---

## 15. 가장 많이 재사용되는 통합 핵심 용어

다음 용어는 여러 미션을 관통하므로 단순 암기보다 **관계와 역할 변화**를 중심으로 학습한다.

| 표준 용어 | 주요 흐름 |
|---|---|
| 환경 변수 (Environment Variable) | B1-1 실행환경 → B4-2 배포 설정 → B6-2 API Key → B7 보안 통합 |
| Git / Commit / Branch / PR | B2-2 협업 → B3-2 내부 원리 → B6-2 AI 자동 설명 → B7 팀 프로젝트 통합 |
| CRUD | B2-1 파일 기반 → B4-2 원격 데이터 → B5-1 SQL → B5-2 ORM → B7-2 서비스 기능 |
| 상태 (State) | B4-1 UI 상태 → B4-2 React State → B5-3 업무 상태 전이 → B7 통합 서비스 상태 |
| Validation | B2-1 입력 검증 → B4 폼 검증 → B5 서버 검증 → B6 AI 출력 검증 → B7 서비스 검증 |
| API | B4-1 GitHub API → B5-2 웹 API 개념 → B6-2 AI API → B7-2 RESTful API |
| Request / Response | B4-1 HTTP → B5-2 FastAPI → B6-2 AI REST 호출 → B7 전체 서비스 통합 |
| Database / Model / Relationship | B4-2 원격 데이터 → B5-1 RDB → B5-2 ORM → B5-3 관계 → B7-2 소유권 |
| Authentication / Authorization | B4-2 참고 → B5-3 본격 구현 → B7-1 서비스 적용 → B7-2 소유권 강화 |
| Deployment | B4-1 GitHub Pages → B4-2 프론트 배포 → B6-1 클라우드 인프라 → B7 외부 서비스 |
| Log / Verification | B1 운영 로그 → B5 백엔드 오류 → B6 외부 검증 → B7 운영 추적 |
| Security / Least Privilege | B1 Linux 권한 → B6 IAM/SG → B7 사용자 데이터 보호 |
| Context | B6-2 AI 생성 입력 → B7-1 대화 문맥 → B7-2 사용자별 세션 |

---

## 16. 통합 Dependency Map

```text
File Permission ─┐
User / Group ────┼─→ Least Privilege ─→ IAM / Authorization ─→ Data Ownership
ACL ─────────────┘

Process ─→ Port ─→ HTTP / SSH ─→ Firewall / Security Group ─→ External Deployment

Git Commit ─→ Branch ─→ PR ─→ Review ─→ Merge ─→ Team Collaboration
      │
      └─→ Commit DAG ─→ Graph Traversal / BFS / Ancestor

Python ─→ Function / Class / Module ─→ Data Structure / Algorithm
   │
   └─→ FastAPI ─→ Router ─→ Service ─→ Repository ─→ ORM ─→ Database

HTML / CSS / JS ─→ DOM / Event / State
                    ↓
                  React
                    ↓
        Component / Props / State / Routing
                    ↓
             Frontend CRUD UI

RDB ─→ Table ─→ PK/FK ─→ 1:N ─→ JOIN ─→ ERD
                         ↓
                  ORM Relationship
                         ↓
            Authentication / Ownership

Environment Variable ─→ Secret Management ─→ API Key / DB Secret
                                            ↓
AI API ─→ Prompt ─→ Context ─→ Validation / Safe Mode
                           ↓
                    Web AI Chatbot
                           ↓
          Full-Stack Service Enhancement
```

---

## 17. 미션별 핵심 누적 경로

| 미션 | 새로 강하게 들어오는 핵심 축 | 이전 지식이 변하는 방식 |
|---|---|---|
| B1-1 | Linux / 권한 / SSH / Monitoring | 기초 운영 시작 |
| B1-2 | 장애 진단 / Resource Troubleshooting | 운영 지식을 진단 능력으로 DEEPEN |
| B2-1 | Python CLI / File I/O / CRUD | 시스템 사용에서 프로그램 구현으로 확장 |
| B2-2 | Git / PR / Review / Conflict | 개인 구현을 협업 개발로 확장 |
| B3-1 | Hash Map / LRU / TTL | Python을 자료구조 구현으로 DEEPEN |
| B3-2 | DAG / BFS / Index / Sorting | Git 개념을 알고리즘 내부 구조로 DEEPEN |
| B4-1 | HTML / CSS / JS / DOM / API | CLI에서 브라우저 UI로 확장 |
| B4-2 | React / SPA / State / Routing | DOM 직접 조작을 선언적 UI로 DEEPEN |
| B5-1 | RDB / SQL / ERD | CRUD를 구조화된 데이터 모델로 DEEPEN |
| B5-2 | FastAPI / ORM / Layered Structure | DB를 웹 백엔드 서비스와 통합 |
| B5-3 | Auth / Authorization / Relationship | 단순 CRUD를 사용자·권한·상태로 확장 |
| B6-1 | VPC / EC2 / IAM / Nginx | 로컬 서비스를 외부 인프라로 확장 |
| B6-2 | AI API / Prompt / Safe Mode | 외부 API와 개발 자동화 통합 |
| B7-1 | Web AI Chatbot | 기존 웹·DB·Auth·Cloud·AI를 INTEGRATE |
| B7-2 | Ownership / REST / Architecture | MVP를 실서비스형 Full-Stack 구조로 DEEPEN |

---

## 18. Vocabulary Gate 공통 체크리스트

### V1 — 인지

- [ ] 표준 용어를 보고 어느 영역인지 구분할 수 있다.
- [ ] 약어를 보고 영문 원문 또는 기능을 떠올릴 수 있다.

### V2 — 이해

- [ ] CORE 용어를 한 문장으로 설명할 수 있다.
- [ ] Top Core를 자기 말로 설명할 수 있다.

### V3 — 관계

- [ ] `선수 용어 → 핵심 구조 → 실제 기능` 흐름을 연결할 수 있다.
- [ ] 같은 용어가 다음 미션에서 어떻게 심화되는지 설명할 수 있다.

### V4 — 적용

- [ ] 실제 코드·명령·설정·파일에서 해당 용어가 사용되는 위치를 찾을 수 있다.
- [ ] 오류 발생 시 관련 용어를 이용해 확인 순서를 정할 수 있다.

### V5 — 설명

- [ ] 평가 핵심 용어의 원리와 선택 이유를 설명할 수 있다.
- [ ] 다른 방식과 비교하여 현재 선택의 장단점을 설명할 수 있다.

---

## 19. 20 : 60 : 20 적용

### 미션 전 20%

- 해당 미션 Top Core
- 이 Master Vocabulary에서 연결되는 선수 CORE
- Dependency Map의 직전 노드

### 미션 수행 중 60%

- 미션별 Level 2 구현 용어
- Level 4 검증·트러블슈팅 용어
- 이 Master Vocabulary에서 `APPLY` 또는 `DEEPEN`되는 반복 용어

### 미션 후 20%

- Level 3 구조·원리
- Level 5 평가 설명
- Master Vocabulary의 Lifecycle 업데이트
- 다음 미션 선수관계 연결

---

## 20. 다음 학습 단계

Basic Master Vocabulary가 만들어졌으므로 이후 학습 콘텐츠는 다음 순서로 확장한다.

1. **B1-1 Top Core부터 쉬운 한 줄 설명**
2. 생활 속 비유
3. 용어 관계 도식
4. 초미니 실습
5. 실제 미션 적용 위치 찾기
6. 의도적 오류 발생
7. 오류 해결
8. 평가 예상 질문
9. 자기 말 설명
10. V1~V5 체크
11. 다음 미션으로 Lifecycle 이동

### 확장 시 원칙

- 전체 130여 개 통합 핵심 용어를 한 번에 암기하지 않는다.
- 현재 미션에서 필요한 CORE와 REQUIRED만 노출한다.
- REFERENCE는 필요할 때 찾는다.
- 동일 용어는 매번 새로 정의하지 않고 `REVIEW / APPLY / DEEPEN / INTEGRATE`로 이어간다.
- 미션별 세부 용어는 `docs/03-learning/vocabulary/b?-?.md`를 Source of Truth로 유지한다.

---

## 21. 현재 산출물 상태

- Mission Vocabulary B1-1~B7-2: **완료**
- Vocabulary Quality Audit: **완료**
- Basic Master Vocabulary v1: **완료**
- Priority 통합 기준: **적용**
- K1~K4 통합 기준: **적용**
- First Seen / Reuse / Lifecycle: **핵심 반복 용어에 적용**
- 상위 Dependency Map: **완료**
- Vocabulary Gate V1~V5 공통 체크리스트: **완료**
- 미션별 쉬운 설명·비유·도식·실습: **다음 단계**
