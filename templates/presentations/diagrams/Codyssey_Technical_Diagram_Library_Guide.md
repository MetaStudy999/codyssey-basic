# Codyssey Technical Diagram Master Library

코디세이 AI/SW 기초과정의 현재 15개 미션 평가 발표와 학부·석박사·연구원·학회 발표에 공통으로 사용할 수 있는 **고급 기술 다이어그램(Technical Diagram) 표준 라이브러리**입니다.

> 현재 Mission ID(미션 번호)의 단일 기준은 [`../../../CURRENT-MISSION-MAP.md`](../../../CURRENT-MISSION-MAP.md)입니다. Mission ID가 변경되더라도 다이어그램은 미션 주제·실제 구현·Canonical Repository를 기준으로 적용합니다.

## 빠른 시작(Quick Start)

1. `Codyssey_Technical_Diagram_Master_Library.pptx`를 복사합니다.
2. `CURRENT-MISSION-MAP.md`에서 현재 Mission ID와 Canonical Repository를 확인합니다.
3. 필요한 다이어그램 슬라이드만 선택합니다.
4. 예시 노드의 이름과 책임을 실제 미션 구조로 교체합니다.
5. 실제 검증(Verification)과 증빙 자료(Evidence)가 있는 경우 하단 Evidence 문구를 실제 결과로 바꿉니다.
6. 공식 Mission / Evaluation과 실제 구현에 없는 내용을 추가하지 않습니다.

---

## 목차

1. 다이어그램 설계 원칙
2. 현재 15개 미션별 추천 다이어그램
3. 20개 슬라이드 구성
4. 공통 시각 문법
5. 발표 수준별 사용법
6. 다이어그램 생성 Master Prompt
7. 최종 검수 체크리스트

---

## 1. 다이어그램 설계 원칙

핵심 구조:

```text
한 슬라이드 = 한 메시지
제목 = 결론
노드 = 한 책임
선 = 흐름의 의미
경계 = 신뢰/네트워크/시스템 범위
Evidence = 실제 검증 결과
```

권장 노드 수는 4~7개입니다. 하나의 슬라이드가 여러 질문에 동시에 답하려고 하면 다이어그램을 분리합니다.

---

## 2. 현재 15개 미션별 추천 다이어그램

| 현재 영역 | 대표 미션 | 1순위 | 2순위 | 3순위 | 발표 초점 |
|---|---|---|---|---|---|
| Web / Front-end | B1-1, B1-2 | Event/Data Flow | State | Before/After | 상호작용·상태·UX·배포 |
| Python / Git | B2-1, B2-2 | Layered Architecture | Data Flow | Git Swimlane | 구조·예외·협업 |
| Cloud / AI API | B3-1, B3-2 | Cloud Network | Trust Boundary | Pipeline | 배포·권한·외부 API·실패 |
| Linux / OS | B4-1, B4-2 | Architecture | State | Troubleshooting / RCA | 운영·보안·관제·장애분석 |
| 자료구조 / 알고리즘 | B5-1, B5-2 | Data Structure | Algorithm Flow | Complexity | 연산·불변조건·시간복잡도 |
| DB / Back-end | B6-1, B6-2, B6-3 | ERD | Sequence | Security Boundary | 관계·API·인증·인가 |
| Term Project | B7-1, B7-2 | End-to-End | Research Pipeline | Evidence Traceability | 서비스 완성도·연구·배포 |

---

## 3. 20개 슬라이드 구성

1. Cover — 고급 기술 다이어그램 라이브러리
2. Design Language — 한 장 한 메시지, 결론형 제목, 역할 색상
3. Mission Map — 현재 B1~B7 주력 다이어그램 선택표
4. System Architecture — 컴포넌트 + 책임 + 경계
5. Data Flow — 입력 → 검증 → 처리 → 저장 → 응답
6. Sequence Diagram — 참여자 간 시간 순서 요청
7. State Diagram — 상태와 전이 조건
8. ERD — PK/FK, 1:N, 데이터 무결성
9. Cloud / Network — VPC, Subnet, SG, IAM, 허용 흐름
10. Algorithm Visualization — 자료구조 + 연산 + 복잡도
11. Git Swimlane — 역할 + Issue/PR/Review/Merge
12. Troubleshooting / RCA — 증상 → 가설 → 검증 → 원인 → 조치 → 재발방지
13. Security / Trust Boundary — 인증·인가·Secret·데이터 경계
14. Before → After — 구조/성능/품질 개선 비교
15. Evidence Traceability — Requirement → Implementation → Verification → Evidence → Evaluation
16. Research Pipeline — 질문 → 데이터 → 방법 → 실험 → 평가 → 결론
17. Experimental Design — Baseline / Proposed / Metrics
18. End-to-End Service — 사용자부터 결과까지 서비스 전체 흐름
19. Style Guide — 색·선·경계·라벨 표준
20. Master Prompt — 새 미션용 다이어그램 생성 프롬프트

---

## 4. 공통 시각 문법

### 색상 역할

| 역할 | 색상 의미 |
|---|---|
| Application / Client | Blue |
| Platform / Core | Navy |
| Data / Storage | Teal |
| External / Cloud / AI | Amber |
| Failure / Security | Red |
| Success / Evidence | Green |
| Method / Logic | Purple |

색상만으로 의미를 구분하지 않습니다. 텍스트 라벨, 선 형태, 경계 상자를 함께 사용합니다.

### 선(Line)

```text
실선 + 화살표    = 주 데이터/요청 흐름
점선 + 화살표    = 외부 의존성 / 선택 흐름 / 비동기
빨강 화살표      = 실패 / 차단 / 보안 경로
```

### 경계(Boundary)

```text
점선 박스 = VPC / Trust Boundary / External Boundary
연한 색 영역 = Layer / Subnet / Zone
```

### 노드(Node)

```text
구성요소 이름
+ 한 줄 책임
```

예:

```text
Service
Business Logic
```

---

## 5. 발표 수준별 사용법

### 코디세이 평가 / 학부 프로젝트

다이어그램 2~4개 사용:

```text
Architecture
→ Core Flow
→ Verification / Evidence
→ Troubleshooting 또는 Before/After
```

### 석사 과정

추가:

```text
Research Question
→ Method
→ Experimental Design
→ Metrics
→ Limitations
```

### 박사 / 연구원 / 학회

추가:

```text
Research Gap
→ Hypothesis
→ Method / Model
→ Controlled Experiment
→ Result / Statistical Evidence
→ Threats to Validity
→ Reproducibility
```

---

## 6. 다이어그램 생성 Master Prompt

```text
[역할]
기술 발표 시각화 설계자(Technical Presentation Visualization Designer)

[대상]
코디세이 {CURRENT_MISSION_ID} 평가 / 학부 / 대학원 / 연구원 / 학회

[Mission 확인]
- CURRENT-MISSION-MAP.md에서 현재 Mission ID와 미션 주제를 확인한다.
- Canonical Repository는 주제 기반 이름을 사용한다.
- 과거 Mission ID가 자료에 있으면 역사적 표기인지 현재 표기인지 구분한다.

[목표]
평가자 또는 청중이 10초 안에 구조와 핵심 판단을 이해하도록 한다.

[입력]
- 현재 Mission ID: {CURRENT_MISSION_ID}
- Canonical Repository: {CANONICAL_REPOSITORY}
- 공식 Mission 요구사항: {REQ}
- 구현 구조: {ARCH}
- 핵심 코드/설정: {IMPLEMENTATION}
- 실제 검증: {VERIFY}
- 증빙 자료: {EVIDENCE}
- 발표 시간: {TIME}

[출력 조건]
1. 가장 적합한 다이어그램 유형 1개를 먼저 선택한다.
2. 한 슬라이드에는 하나의 핵심 메시지만 둔다.
3. 제목은 설명형이 아니라 결론형 문장으로 작성한다.
4. 노드는 4~7개를 기본으로 하고 한 노드에는 한 책임만 둔다.
5. 실선은 주 흐름, 점선은 외부/선택 흐름으로 사용한다.
6. 외부 시스템, 네트워크, 신뢰 경계를 시각적으로 분리한다.
7. 실제 미션에 없는 구성요소를 추가하지 않는다.
8. 실제 검증이 있다면 하단에 Evidence를 1줄로 연결한다.
9. 색상만으로 의미를 구분하지 않고 라벨과 선 형태를 함께 사용한다.
10. 16:9 PowerPoint 편집 가능한 벡터 형태로 구성한다.
11. Mission ID 변경만으로 과거 실제 Evidence를 새 PASS로 재해석하지 않는다.
```

---

## 7. 최종 검수 체크리스트

```text
[ ] 현재 Mission ID와 주제가 CURRENT-MISSION-MAP.md와 일치하는가?
[ ] Canonical Repository가 주제 기반 이름인가?
[ ] 한 장에 핵심 메시지가 하나인가?
[ ] 제목만 읽어도 결론을 알 수 있는가?
[ ] 노드가 4~7개 이내인가?
[ ] 각 노드의 책임이 한 줄로 명확한가?
[ ] 흐름 방향이 명확한가?
[ ] 외부 시스템과 내부 시스템이 구분되는가?
[ ] Trust / Network Boundary가 필요한 경우 보이는가?
[ ] 색상만으로 의미를 전달하지 않는가?
[ ] 실제 구현과 다이어그램이 일치하는가?
[ ] Evidence가 실제 결과에 기반하는가?
[ ] 공식 Mission / Evaluation보다 내부 템플릿이 앞서지 않는가?
```

---

## 설계 참고 원칙

이 라이브러리는 다음 원칙을 반영해 구성했습니다.

- 한 슬라이드에서 하나의 메시지를 전달하고 제목이 핵심 결론을 표현하도록 구성
- 연구·기술 발표에서 텍스트보다 시각적 구조와 관계를 우선
- 색상, 선, 경계, 라벨을 일관된 시각 문법으로 사용
- PowerPoint에서 편집 가능한 벡터 도형 중심으로 제작
- 실제 검증·증빙과 연결할 수 있는 구조를 포함
