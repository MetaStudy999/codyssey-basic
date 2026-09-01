# 코디세이 미션 평가 발표 템플릿

대상: **B1-1 ~ B7-2**  
용도: 코디세이 미션 평가, 학부 프로젝트 발표, 석·박사 과정 프로젝트 발표, 연구실 발표, 학회형 기술 발표

이 디렉터리는 미션별 발표자료를 매번 새로 설계하지 않고, **요구사항 → 설계 → 구현 → 검증 → 증빙 → 설명**의 동일한 평가 논리로 발표할 수 있도록 만든 공통 기준입니다.

## 빠른 시작(Quick Start)

1. 실제 미션 발표는 `Codyssey_Mission_Evaluation_Core_22slides.pptx`를 복사해서 시작합니다.
2. 보통 발표 시간에 맞춰 **12~16장**만 남깁니다.
3. 전체 디자인·레이아웃·도메인별 선택 슬라이드가 필요하면 `Codyssey_B1-B7_Mission_Evaluation_Master_Template.pptx`를 참고합니다.
4. 아키텍처·ERD·Cloud·Sequence·Research·Evidence 등 고급 기술 다이어그램이 필요하면 [`diagrams/`](diagrams/)의 Technical Diagram Library를 사용합니다.
5. [`Codyssey_Mission_Presentation_Template_Guide.md`](Codyssey_Mission_Presentation_Template_Guide.md)의 미션별 강조 포인트를 적용합니다.
6. 실제 실행하지 않은 항목은 PASS로 표시하지 않습니다.
7. 스크린샷·로그·테스트 결과에는 **무엇을 증명하는 자료인지** 캡션을 붙입니다.

## 목차

- [파일 구성](#files)
- [고급 기술 다이어그램 라이브러리](#diagram-library)
- [기준 발표 구조](#structure)
- [미션별 강조 영역](#mission-map)
- [디자인 기준](#design)
- [평가 품질 원칙](#quality)
- [미션별 실제 발표자료 관리 권장안](#mission-output)

<a id="files"></a>
## 파일 구성

| 파일 | 역할 | 권장 사용 |
|---|---|---|
| `Codyssey_B1-B7_Mission_Evaluation_Master_Template.pptx` | 전체 기준 Master Reference | 디자인·레이아웃·도메인별 슬라이드 참고 |
| `Codyssey_Mission_Evaluation_Core_22slides.pptx` | 실전 발표용 Core Template | 미션별 발표자료 복사 원본 |
| `Codyssey_Mission_Presentation_Template_Guide.md` | 목차·미션별 강조·Master Prompt | 발표 기획 및 AI 작성 기준 |
| [`diagrams/`](diagrams/) | 고급 Technical Diagram Library | Architecture·DFD·Sequence·State·ERD·Cloud·Research·Evidence 시각화 |

> **Master는 기준본**, **Core는 작업본**, **Diagram Library는 재사용 가능한 기술 시각화 기준본**으로 사용합니다. 기준본을 미션마다 직접 수정하여 원본 기준이 흔들리지 않도록 합니다.

<a id="diagram-library"></a>
## 고급 기술 다이어그램 라이브러리

[`diagrams/README.md`](diagrams/README.md)에서 B1-1 ~ B7-2에 공통으로 사용할 수 있는 20장 Technical Diagram Master Library를 관리합니다.

핵심 구성:

```text
System Architecture
Data Flow Diagram (DFD, 데이터 흐름도)
Sequence Diagram (순차 다이어그램)
State Diagram (상태 다이어그램)
Entity-Relationship Diagram (ERD, 개체-관계도)
Cloud / Network Architecture
Algorithm Visualization
Git Collaboration Swimlane
Troubleshooting / Root Cause Analysis (RCA)
Security / Trust Boundary
Before → After
Evidence Traceability
Research Pipeline
Experimental Design
End-to-End (E2E) Service Flow
```

미션별 우선 선택:

```text
B1 → Architecture / State / Troubleshooting
B2 → Layered Architecture / Data Flow / Git Swimlane
B3 → Data Structure / Algorithm / Complexity
B4 → Event Flow / State / Before-After
B5 → ERD / Sequence / Security Boundary
B6 → Cloud Network / Trust Boundary / Pipeline
B7 → End-to-End / Research / Evidence Traceability
```

다이어그램은 실제 구현과 검증 결과를 설명하기 위한 시각 도구이며, 공식 Mission / Evaluation에 없는 기능을 추가하는 근거로 사용하지 않습니다.

<a id="structure"></a>
## 기준 발표 구조

```text
01 Cover
02 Executive Summary
03 Mission Brief
04 Requirement → Evidence Matrix
05 Problem → Objective
06 Solution Overview
07 Architecture
08 Technical Deep Dive
09 Core Logic / Data Flow
10 Demo Flow
11 Demo Evidence
12 Test Strategy
13 Verification Dashboard
14 Results / Before & After
15 Troubleshooting
16 Security / Reliability        [필요 시]
17 Collaboration / Git           [필요 시]
18 Learning Outcomes / Evaluation Q&A
19 Limitations / Next
20 Conclusion
21 Q&A
```

평가 발표에서 모든 슬라이드를 기계적으로 사용하지 않습니다. **공식 Mission / Evaluation이 요구하는 판단 근거를 가장 짧은 구조로 보여주는 것**이 우선입니다.

<a id="mission-map"></a>
## 미션별 강조 영역

| 미션 | 발표에서 특히 강조할 내용 |
|---|---|
| B1-1 | Linux/OS, SSH/UFW, 계정·권한, `monitor.sh`, cron, 로그 자동화 |
| B1-2 | OOM, CPU Spike, Deadlock, Root Cause Analysis, Before & After |
| B2-1 | Python CLI, 영속화, Generator, Decorator, Type Hint, import/export |
| B2-2 | Issue → Branch → PR → Review → Merge, 충돌 해결, 협업 증빙 |
| B3-1 | Hash Map, Doubly Linked List, Heap, LRU, TTL, 시간복잡도 |
| B3-2 | DAG, 탐색, 정렬, Inverted Index, 커밋 그래프 |
| B4-1 | HTML/CSS/JavaScript, DOM, Responsive, GitHub API |
| B4-2 | React, SPA, Routing, State, useEffect, CRUD |
| B5-1 | SQL, PK/FK, JOIN, GROUP BY, ERD, 무결성 |
| B5-2 | FastAPI, SSR, ORM, CRUD, PRG, Layering |
| B5-3 | Authentication/Authorization, Relationship, State Change |
| B6-1 | VPC, Subnet, Route, IGW, EC2, Security Group, IAM |
| B6-2 | AI API, git diff, Prompt, Parameters, Validation, Error Handling |
| B7-1 | AI Chatbot, FastAPI, Auth, DB Log, 팀 협업, End-to-End 흐름 |
| B7-2 | Full-stack, User Ownership, REST API, ERD, Cloud Deployment |

상세 내용은 [`Codyssey_Mission_Presentation_Template_Guide.md`](Codyssey_Mission_Presentation_Template_Guide.md)를 사용합니다.

<a id="design"></a>
## 디자인 기준

### 기본 색상

- Navy `#081B2F` — 표지 / Conclusion / Q&A
- Blue `#2F80ED` — 핵심 구조 / 검증
- Teal `#19A89D` — 구현 / 데이터 흐름
- Amber `#F3A61D` — 주의 / Trade-off(상충관계) / 실환경
- Red `#D95D58` — 오류 / 위험 / 실패
- Green `#2FA66A` — PASS / 성공
- Light Background `#F6F8FB`

### 제목 원칙

나쁜 예:

```text
아키텍처
테스트 결과
문제 해결
```

권장 예:

```text
Router–Service–Repository 분리로 요청 흐름을 추적 가능하게 만들었다
필수 요구사항을 자동 테스트와 실환경 검증으로 확인했다
403 오류의 원인을 인증 의존성 경로로 좁혀 수정하고 회귀 테스트를 추가했다
```

**슬라이드 제목만 순서대로 읽어도 발표의 논리가 이어져야 합니다.**

<a id="quality"></a>
## 평가 품질 원칙

```text
Requirement
→ Design
→ Implementation
→ Verification
→ Evidence
→ Explanation
```

- 한 슬라이드는 하나의 핵심 주장에 집중합니다.
- 기능 나열보다 **왜 그렇게 설계했는가(Why)**를 보여줍니다.
- 실제 실행 결과와 예상 결과를 구분합니다.
- PASS에는 추적 가능한 실제 증빙 자료(Evidence)가 있어야 합니다.
- 코드 전체를 붙이지 않고 핵심 로직만 읽을 수 있는 크기로 제시합니다.
- 이미지·로그·터미널 캡처에는 증명 목적을 적습니다.
- Secret, API Key, Token, 개인정보는 반드시 제거합니다.
- 학습자는 구현 내용을 자기 말로 설명할 수 있어야 합니다.

<a id="mission-output"></a>
## 미션별 실제 발표자료 관리 권장안

공통 템플릿은 이 디렉터리에서 한 번만 관리합니다. 실제 미션 발표 산출물은 필요할 때 각 미션 Repository 또는 Control Tower의 별도 발표 산출물 영역에서 관리합니다.

예시:

```text
presentation/
└── b2-1/
    ├── b2-1-evaluation-presentation.pptx
    ├── b2-1-evaluation-presentation.pdf
    ├── speaker-notes.md
    └── evidence/
```

공통 Master/Core PPTX와 Diagram Library를 15개 미션 폴더에 중복 복사하지 않습니다.

---

상위 템플릿 허브: [`../README.md`](../README.md)
