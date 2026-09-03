# 코디세이 고급 기술 다이어그램 라이브러리

대상: **현재 15개 미션(B1-1 ~ B7-2, B6-3 포함)**  
용도: 코디세이 평가 발표, 학부 프로젝트 발표, 석·박사 과정 발표, 연구실·연구원·학회형 기술 발표

> 현재 Mission ID(미션 번호)의 단일 기준은 [`../../../CURRENT-MISSION-MAP.md`](../../../CURRENT-MISSION-MAP.md)입니다. 다이어그램 선택도 번호 자체가 아니라 현재 미션의 **주제·구조·실제 구현**을 기준으로 합니다.

이 디렉터리는 발표용 다이어그램을 매번 새로 그리지 않고, **구조(Architecture)·흐름(Flow)·상태(State)·관계(Relationship)·보안 경계(Security Boundary)·검증(Verification)·증빙 자료(Evidence)**를 동일한 시각 문법으로 표현하기 위한 기준 라이브러리입니다.

## 빠른 시작(Quick Start)

1. `Codyssey_Technical_Diagram_Master_Library.pptx`에서 필요한 슬라이드를 복사합니다.
2. `CURRENT-MISSION-MAP.md`에서 현재 Mission ID와 Canonical Repository를 확인합니다.
3. 예시 노드의 이름과 책임을 실제 미션 구조로 교체합니다.
4. 실제 미션에 없는 구성요소는 추가하지 않습니다.
5. 하단의 Verification / Evidence 문구는 실제 수행 결과가 있을 때만 교체합니다.
6. 공식 Mission / Evaluation이 내부 템플릿보다 항상 우선합니다.

## 파일 구성

| 파일 | 역할 |
|---|---|
| `Codyssey_Technical_Diagram_Master_Library.pptx` | 20장 편집 가능한 고급 기술 다이어그램 기준본 |
| `Codyssey_Technical_Diagram_Master_Montage.png` | GitHub에서 빠르게 확인하는 전체 미리보기 |
| `Codyssey_Technical_Diagram_Library_Guide.md` | 현재 B1~B7 적용법, 시각 문법, 발표 수준별 사용법, Master Prompt |
| `Codyssey_Technical_Diagram_Master_Library_Generator.js` | PowerPoint 재현 생성기 |
| `package.json` | 생성기 의존성 고정 |

## 포함 다이어그램 20종

1. Cover
2. Design Language
3. Mission Map
4. System Architecture
5. Data Flow Diagram (DFD, 데이터 흐름도)
6. Sequence Diagram (순차 다이어그램)
7. State Diagram (상태 다이어그램)
8. Entity-Relationship Diagram (ERD, 개체-관계도)
9. Cloud / Network Architecture
10. Algorithm Visualization
11. Git Collaboration Swimlane (스윔레인, 역할별 흐름도)
12. Troubleshooting / Root Cause Analysis (RCA, 근본 원인 분석)
13. Security / Trust Boundary
14. Before → After
15. Evidence Traceability (증빙 추적성)
16. Research Pipeline
17. Experimental Design
18. End-to-End (E2E, 처음부터 끝까지) Service Flow
19. Style Guide
20. Master Prompt

## 현재 B1~B7 우선 적용

| 현재 영역 | 권장 다이어그램 |
|---|---|
| B1 Web / Front-end | Event/Data Flow → State → Before/After |
| B2 Python / Git | Layered Architecture → Data Flow → Git Swimlane |
| B3 Cloud / AI API | Cloud Network → Trust Boundary → Pipeline |
| B4 Linux / OS | Architecture → State → Troubleshooting / RCA |
| B5 자료구조·알고리즘 | Data Structure → Algorithm Flow → Complexity |
| B6 DB / Back-end | ERD → Sequence → Security Boundary |
| B7 Term Project | End-to-End → Research Pipeline → Evidence Traceability |

## 핵심 시각 문법

```text
한 슬라이드 = 한 메시지
제목 = 결론
노드 = 한 책임
실선 = 주 흐름
점선 = 외부/선택/비동기 흐름
경계 = 시스템/네트워크/신뢰 범위
Evidence = 실제 검증 결과
```

색상만으로 의미를 구분하지 않고, **텍스트 라벨·선 형태·경계 상자**를 함께 사용합니다.

## 자동 생성

`main`에서 생성기 또는 관련 기준 파일이 변경되면 GitHub Actions(깃허브 액션, 자동화 작업)가 PowerPoint와 전체 미리보기를 재생성하고 슬라이드 수를 검증합니다.

로컬에서 직접 생성하려면:

```bash
cd templates/presentations/diagrams
npm install
node Codyssey_Technical_Diagram_Master_Library_Generator.js
```

정상 기준:

```text
Codyssey_Technical_Diagram_Master_Library.pptx
슬라이드 수 = 20
```

---

상위 발표 템플릿: [`../README.md`](../README.md)
