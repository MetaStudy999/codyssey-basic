# Round 02 발표자료 생성 표준

> 적용 범위: CODYSSEY AI 올인원 제2기 B1-1 ~ B7-2
>
> **기준 레포(Canonical Control Repository):** `MetaStudy999/codyssey-basic`
>
> 발표자료는 미션 완료 후 별도 장식 작업이 아니라 **학습(용어·개념) → 구조(클래스·함수·데이터 흐름) → 구현 → 실제 실행 → 검증 → 증빙 → 평가 설명**을 한눈에 연결하는 평가·학습 패키지다. 발표본만 보아도 전체 흐름을 다시 복원할 수 있어야 한다.

## 1. 역할 분리

```text
Mission Repository
= 사실 / 코드 / 실제 Runtime / Verification / Evidence

ChatGPT
= 발표 스토리라인 / 핵심 문장 / 대본 / 다이어그램 / 개념 이미지

Figma
= 편집 가능한 Master Template / 레이아웃 / 실제 스크린샷 배치 / 최종 디자인

PDF / PPT
= 제출·발표용 Export
```

**Figma를 편집 가능한 발표 원본(Source)으로 권장**한다. ChatGPT가 만드는 이미지는 개념 설명·아키텍처·흐름도·배경 Asset으로 사용하고, 실제 실행 증빙을 대신하지 않는다.

## 2. 생성 시점

기본 순서:

```text
Mission CLEAR 또는 Evaluation Ready
→ 발표용 Source 수집
→ 발표 Outline
→ Evidence Map
→ 발표 대본
→ 필요한 Diagram / Image Asset
→ Figma Master에 배치
→ PDF/PPT Export
→ 발표 리허설
```

공식 평가 일정 때문에 CLEAR 전에 발표자료가 필요하면, 완료되지 않은 항목을 PASS처럼 표현하지 않고 `PENDING`으로 표시한다.

## 3. 일반 미션 기본 12~14장

B1-1 ~ B6-3의 일반 미션은 **12~14장 Learning & Evaluation Core Deck**을 기본으로 한다. 발표 시간이 짧으면 슬라이드를 합칠 수 있지만 아래 정보 자체를 생략하지 않는다.

1. **Hero Cover**
   - 현재 Mission ID·제목
   - 한 문장 핵심 성과
   - 고품질 대표 이미지 또는 실제 결과 화면

2. **Mission Map / 한눈에 보는 전체 흐름**
   - 목표, 입력, 핵심 처리, 출력, 기술스택, 검증, 평가 포인트
   - 이 한 장만 보아도 전체 미션을 다시 설명할 수 있어야 한다.

3. **Problem / Goal / User Scenario**
   - 해결하려는 문제
   - 사용자 관점의 목표
   - 성공 조건

4. **핵심 용어·개념 + 4컷 만화**
   - 핵심 용어 3~7개
   - `한글명(English Full Name, 약어)`
   - 한 줄 정의, 왜 필요한가, 언제 쓰는가
   - 어려운 개념 1~3개는 4컷 만화로 설명한다.
   - 만화는 `문제 → 개념 등장 → 실제 적용 → 기술적 결론` 흐름을 권장한다.

5. **Requirement → Evaluation → Evidence Map**
   - 공식 요구사항
   - 평가문항 또는 평가준비 항목
   - 구현 위치
   - 검증 방법
   - Evidence 위치

6. **System Architecture**
   - 주요 Module / Component
   - 외부 시스템
   - Trust Boundary가 있으면 함께 표시

7. **End-to-End Data / Event / State Flow**
   - 입력(Input) → 처리(Process) → 저장/상태변화 → 출력(Output)
   - 사용자 요청부터 최종 결과까지 전체 흐름
   - 주요 데이터가 어디에서 생성·변환·저장되는지 표시

8. **Module / Class / Method Structure**
   - Module 책임
   - Class 책임·관계·주요 속성
   - 핵심 Method/Function은 IPO(Input → Process → Output)로 설명
   - 클래스가 없는 미션은 File/Module/Function 구조로 대체

9. **Core Code / Feature Deep Dive**
   - 전체 코드를 붙이지 않고 핵심 코드만 제시
   - 코드 위치(path), 역할, 호출 흐름, 주요 분기 설명
   - 필요 시 줄별 또는 블록별 해설
   - 기능을 사용자 관점과 개발자 관점으로 각각 설명

10. **Normal Flow / Failure Flow / Security**
    - 정상 경로(Happy Path)
    - 오류·예외 경로(Failure Path)
    - 복구 또는 Fail-safe 동작
    - Secret, 권한, 입력검증, Trust Boundary 등 보안 포인트

11. **Troubleshooting / Before → After / Trade-off**
    - Problem → Evidence → Root Cause → Fix → Re-verify
    - 개선 전·후 실제 측정값이 있으면 비교
    - 기술 선택 이유와 대안(Alternative), 상충관계(Trade-off)
    - 측정값이 없으면 수치를 만들지 않는다.

12. **Runtime / Demo**
    - 실제 Browser / CLI / API / DB / Cloud 결과
    - 1~3분 Demo Scenario
    - 실제 Screenshot 우선

13. **Verification / Evidence / Quality**
    - 정상·경계·오류 Test Case
    - PASS/FAIL
    - 성능·보안·신뢰성·접근성 등 해당 미션의 비기능 요구사항
    - Commit/PR/배포 URL/Log/Screenshot 등 추적 가능한 Evidence

14. **Evaluation Summary / Learning / Limitation**
    - WHAT → WHY → HOW → VERIFY → LIMITATION
    - 10초 / 30초 / 1분 답변
    - 예상 질문 2~5개
    - 현재 한계와 Production 개선 방향
    - 이번 미션에서 배운 핵심 3가지

발표 시간이 짧으면 4+5, 8+9, 10+11, 13+14를 합칠 수 있다.

## 4. B7 Term Project 기본 15~18장

B7-1 / B7-2는 일반 미션의 모든 필수 정보를 포함하되 서비스 전체를 평가할 수 있도록 **15~18장**으로 확장한다.

1. Hero Cover / Executive Summary
2. Mission Map / 한눈에 보는 전체 흐름
3. Problem / Goal / User Scenario
4. 핵심 용어·개념 / 4컷 만화
5. Requirement → Evaluation → Evidence Matrix
6. System Architecture / Trust Boundary
7. DB / ERD / Data Model
8. API / End-to-End Data Flow / Sequence
9. Module / Class / Method Structure
10. AI / Core Logic / 핵심 Code / Function IPO
11. UI / 실제 Runtime / Demo
12. Normal Flow / Failure Flow / Security / Recovery
13. Troubleshooting / Before-After / Trade-off
14. Performance / Observability / Cost / NFR (해당 시)
15. Team / Git / PR / 역할
16. Verification / Test / Evidence Traceability
17. Evaluation Explanation / Learning / Limitation
18. Conclusion / Q&A

필요에 따라 15~18장으로 축약·확장하되, 공식 요구사항과 평가 근거가 사라지지 않게 한다.

## 5. 시각자료 우선순위

```text
1. 실제 Runtime Screenshot
2. 실제 로그·테스트·Evidence
3. 실제 코드 일부
4. 실제 구조를 표현한 Diagram
5. ChatGPT 생성 개념 이미지
6. 장식 이미지
```

ChatGPT 생성 이미지는 **Evidence가 아니다**. 실제 UI를 AI로 재현한 이미지를 실제 실행 화면처럼 사용하지 않는다.

## 6. 학습·설명 규칙

### 6.1 용어 카드
각 핵심 용어는 가능하면 다음 형식을 사용한다.

```text
한글명
English Full Name
약어(Acronym)
한 줄 정의
왜 필요한가
이번 미션에서 어디에 쓰였는가
관련 개념
```

### 6.2 3단계 설명
중요 개념은 다음 세 단계로 설명할 수 있어야 한다.

```text
Level 1 초보자 비유
→ Level 2 정확한 기술 정의
→ Level 3 내 구현에서의 실제 적용
```

### 6.3 4컷 만화
4컷 만화는 모든 용어에 만들지 않는다. 이해 난도가 높은 개념을 미션당 1~3개 선정한다.

```text
1컷 문제 상황
→ 2컷 핵심 개념 등장
→ 3컷 실제 시스템 적용
→ 4컷 기술적 결론 + 실제 Flow 연결
```

AI 생성 만화는 `개념 설명 이미지`로 표시하고 Evidence로 사용하지 않는다.

## 7. 재현성·출처·평가 provenance

각 발표본은 최소 다음을 기록한다.

- Repository
- Round
- 기준 Commit SHA
- Runtime Environment
- Evidence Path
- 실제 실행 일시(필요 시)
- Evaluation Source Classification

Evaluation Source Classification:

```text
A = 실제 평가 화면/PDF 등과 대조 확인
B = 구체적 평가문항 존재, 현재 공식 평가와 대조 필요
C = 공식 문항 미확보, Requirement 기반 Evaluation Preparation
D = 평가자료 미확보
```

슬라이드의 중요한 주장에는 필요 시 Source Badge를 사용한다.

```text
OFFICIAL   공식 Mission/Evaluation
CODE       실제 구현
RUNTIME    실제 실행
EVIDENCE   검증 증거
EXPLAIN    설명/해석
AI-VISUAL  AI 생성 개념 시각자료
```

## 8. Figma Master 원칙

Figma에는 미션마다 새 디자인을 만들지 않고 공통 Master를 사용한다.

필수 Components:
- Cover
- Mission Map / One-page Summary
- Glossary / Concept Card
- 4-Panel Concept Comic
- Module / Class Diagram Frame
- Function IPO Card
- Normal / Failure Flow Compare
- Security / Trust Boundary Frame
- Before / After Frame
- Source / Evidence Provenance Badge
- Section Header
- Claim Title
- Requirement/Evidence Matrix
- Architecture Diagram Frame
- Runtime Screenshot Frame
- Code/Log Frame
- PASS/FAIL Badge
- 3-column Comparison
- Q&A / Conclusion

Layout:
- 16:9
- 12-column grid 권장
- 한 슬라이드 = 한 주장
- 제목만 읽어도 전체 발표 논리가 이어지게 작성

## 9. 디자인 토큰

- Navy `#081B2F` — 표지 / 결론
- Blue `#2F80ED` — 구조 / 검증
- Teal `#19A89D` — 구현 / 데이터 흐름
- Amber `#F3A61D` — 주의 / Trade-off
- Red `#D95D58` — 오류 / 위험
- Green `#2FA66A` — PASS
- Background `#F6F8FB`

텍스트는 한국어 중심으로 작성하고, 기술 용어 첫 등장 시 `한글명(English Full Name, 약어)`를 사용한다.

## 10. Repository Presentation Pack

각 Mission의 Round 02에서 실제 발표자료를 만들 때 다음 구조를 사용한다.

```text
training/round-02-clear/presentation/
├── README.md
├── OUTLINE.md
├── SCRIPT.md
├── EVIDENCE-MAP.md
├── GLOSSARY.md       # 핵심 용어·개념·4컷 만화 기획
├── CODE-MAP.md       # Module/Class/Method/Function/핵심 코드 연결
├── DEMO-RUNBOOK.md   # 1~3분 실제 시연 순서와 실패 대비
└── assets/          # 실제 필요할 때 생성
```

- `OUTLINE.md`: 슬라이드별 주장·내용·시각자료
- `SCRIPT.md`: 발표 대본 / 30초·1분 설명
- `EVIDENCE-MAP.md`: Slide ↔ Requirement ↔ Implementation ↔ Verification ↔ Evidence ↔ Evaluation 연결
- `GLOSSARY.md`: 용어·개념·쉬운 비유·정의·실제 적용·4컷 만화 기획
- `CODE-MAP.md`: File/Module/Class/Method/Function과 데이터 흐름 연결
- `DEMO-RUNBOOK.md`: Demo 순서, 기대 결과, 실패 시 확인 순서
- `assets/`: 실제 Screenshot·Diagram·생성 이미지

빈 형식을 맞추기 위해 assets를 미리 대량 생성하지 않는다.

## 11. Evidence Map 최소 형식

```text
Slide
→ Requirement
→ Evaluation Source/Class
→ Implementation
→ Code/Function
→ Verification
→ Evidence Path
→ 발표 설명
```

예:

```text
Slide 5
→ R-03 반응형 UI
→ css/responsive.css
→ 모바일/태블릿/데스크톱 실제 검증
→ evidence/screenshots/responsive/
→ "미디어 쿼리로 3개 화면 크기를 대응했습니다."
```

## 12. 발표 완료 기준

- 현재 제2기 Mission ID·제목 사용
- 공식 요구사항과 발표 내용이 일치
- 실제 구현 파일과 연결
- 실제 Runtime Screenshot 포함
- PASS 주장에 Evidence 존재
- Secret·개인정보 제거
- Mission Map 한 장으로 전체 흐름 설명 가능
- 핵심 용어·개념을 쉬운 말과 정확한 정의로 설명 가능
- 주요 Class/Method/Function 또는 Module/Function 구조 연결
- End-to-End 데이터 흐름 설명 가능
- 정상/오류/복구 흐름 설명 가능
- WHY 설명 포함
- 비기능 요구사항(보안/성능/신뢰성/접근성 중 해당 항목) 확인
- Evaluation Source Classification 표시
- 기준 Commit SHA와 Evidence 재현 경로 기록
- 10초/30초/1분 핵심 설명 준비
- 1~3분 Demo Runbook 준비
- 예상 질문 준비
- Figma 원본 또는 편집 가능한 원본 보존
- PDF/PPT Export 검토 완료

> **Repository가 사실의 원본이고, ChatGPT가 설명과 시각화를 만들며, Figma가 최종 발표 디자인을 관리한다.**


## 13. 추가 품질 기준

### 13.1 비기능 요구사항(Non-functional Requirements, NFR)
미션 성격에 맞는 항목만 선택하여 검증한다.

- 성능(Performance)
- 보안(Security)
- 신뢰성(Reliability)
- 관찰성(Observability)
- 접근성(Accessibility)
- 비용(Cost)
- 유지보수성(Maintainability)

### 13.2 기술 의사결정
중요한 기술 선택은 다음을 남긴다.

```text
선택한 방법
→ 선택 이유
→ 고려한 대안
→ Trade-off
→ 현재 한계
→ 향후 개선
```

### 13.3 Demo 재현성
발표 Demo는 즉흥적으로 하지 않는다.

```text
Preflight
→ Demo 시작 상태
→ Step 1~N
→ 기대 결과
→ 실패 시 확인 순서
→ Recovery
```

### 13.4 Cross-Mission Skill Map
15개 미션을 진행하면서 습득 기술을 누적한다.

```text
B1 Web
→ B2 Python/Git
→ B3 Cloud/AI API
→ B4 Linux/OS
→ B5 Data Structure/Algorithm
→ B6 DB/Backend
→ B7 Full-stack/AI Service
```

최종 종합 발표에서는 미션별 결과뿐 아니라 이 누적 기술지도를 통해 성장 흐름을 보여준다.

### 13.5 발표 접근성
- 본문과 코드 글자가 발표 화면에서 읽힐 크기인지 확인
- 색만으로 PASS/FAIL을 구분하지 않음
- 이미지·다이어그램에 짧은 설명 캡션 제공
- 긴 코드 대신 핵심 블록과 호출 흐름 사용


## 14. 3층 발표 패키지

정보를 모두 담되 발표가 과밀해지지 않도록 결과물을 3층으로 분리한다.

### Layer 1 — Main Deck
- 실제 발표용
- 일반 미션 12~14장, B7 15~18장
- 한 슬라이드 한 주장
- 핵심 Flow와 Evidence 중심
- 발표 시간에 맞춰 압축 가능

### Layer 2 — Learning / Evaluation Appendix
- 발표 중 질문이 나오면 바로 펼쳐볼 수 있는 상세 부록
- 전체 Glossary
- 추가 4컷 만화
- Class / Method / Function 상세
- 코드 블록 해설
- 전체 Test Case
- 오류·복구 상세
- 보안·성능·Trade-off
- 평가 예상질문과 답변

### Layer 3 — Quick Review Sheet
미션당 1장으로 만든다.

```text
Mission 한 문장
핵심 용어 5개
전체 Flow
핵심 Class/Function
대표 코드
대표 Evidence
평가 질문 3개
한계 / 개선 1개
```

평가 직전에는 Quick Review Sheet → Main Deck → Appendix 순서로 복습한다.


## 15. Image-First Precision Composite 제작 모델

고품질 Golden Learning Deck은 필요 시 **Image-First Precision Composite** 방식을 사용한다.

### 15.1 핵심 원칙

```text
Repository Truth
→ Storyboard
→ AI Visual Generation
→ Precision Composite
→ 4K Final Slide Image
→ PowerPoint / PDF
```

- AI 생성은 배경·조명·캐릭터·분위기·카드 Frame·Cinematic Visual 등 **시각 표현**을 담당한다.
- 정확성이 필요한 한글/영문, 코드, 수치, URL, Commit SHA, 평가항목, Architecture Label은 **정확한 텍스트 렌더링으로 후합성**한다.
- Runtime/Evidence는 AI로 재현하지 않고 **실제 Screenshot/Log/Code**를 원본으로 사용한다.
- 최종 슬라이드는 16:9 기준 Full-Bleed 고해상도 이미지로 만들 수 있으며, PowerPoint는 발표·전달 컨테이너로 사용한다.
- 필요한 경우 페이지 번호, Hyperlink, QR, Speaker Notes, Accessibility Text만 PowerPoint Overlay로 유지한다.

### 15.2 권장 해상도

- Working Master: 3840 × 2160 (4K, 16:9)
- Delivery: 1920 × 1080 이상
- 긴 코드/표는 이미지에 직접 생성하지 않고 Source에서 정확히 렌더링한다.

### 15.3 Visual / Truth 분리

```text
AI-VISUAL = 설명·분위기·비유
CODE      = 실제 Repository Code
RUNTIME   = 실제 실행 화면
EVIDENCE  = 실제 검증 자료
OFFICIAL  = 공식 Mission/Evaluation
```

AI가 생성한 UI, 코드, 로그, 숫자는 실제 Evidence로 사용하지 않는다.

### 15.4 슬라이드 제작 품질 게이트

각 슬라이드는 다음을 통과해야 한다.

1. **Visual Impact** — 한 장의 작품처럼 읽히는가
2. **Technical Accuracy** — 용어·코드·흐름이 실제 구현과 일치하는가
3. **Evidence Integrity** — 실제 증거와 생성 이미지를 혼동하지 않는가
4. **Learning Value** — 초보자 비유에서 정확한 기술 설명까지 연결되는가
5. **Presentation Value** — 전체 화면 발표에서 글자·코드·도식이 읽히는가
6. **Traceability** — Requirement → Code → Verification → Evidence가 추적 가능한가

### 15.5 권장 Visual Mix

미션 성격에 따라 조정하되 다음을 기본 참고값으로 한다.

```text
Comic / Illustration       ≈ 20~25%
Technical Diagram / UI     ≈ 30~35%
Code / Engineering Visual  ≈ 15~20%
Real Runtime / Evidence    ≈ 20~30%
```

만화 캐릭터는 문제·개념·오류·학습·마무리에 집중하고,
Architecture / Code / Security / Test / Evidence에서는 전문 기술 시각화와 실제 자료를 우선한다.

### 15.6 Golden Deck 개선 루프

```text
Draft
→ Visual Review
→ Accuracy Review
→ Evidence Review
→ Presentation Review
→ Improvement Candidate 기록
→ 다음 Mission에서 검증
→ Accepted Standard 승격
```

발표 품질 개선은 감상 수준에서 끝내지 않고 [Presentation Quality Evolution](../templates/presentations/PRESENTATION-QUALITY-EVOLUTION.md)에 기록한다.


### 15.7 Truth Replacement Gate

Image-First 시안이 시각적으로 완성되어도 다음 항목이 AI 생성/가상 Mockup 상태이면 **FINAL/EVIDENCE READY로 승격하지 않는다.**

```text
AI Mockup
→ Truth Replacement
→ Accuracy Check
→ Evidence Check
→ FINAL
```

반드시 실제 Source로 교체할 항목:

- 실제 Runtime Screenshot
- 실제 Repository/PR/CI 화면
- 실제 Code Snippet
- 실제 Log / Test Result
- 정확한 Requirement ID / Evaluation 문구
- URL / Commit SHA / 수치 / 날짜
- Architecture Component의 공식/실제 명칭

#### Badge 규칙

- `AI-VISUAL`: 생성 이미지·개념 Mockup·만화
- `CODE`: 실제 Repository Code에서 추출
- `RUNTIME`: 실제 실행 환경 화면
- `EVIDENCE`: 실제 검증 근거
- `OFFICIAL`: 공식 Mission/Evaluation Source
- `MOCKUP`: 실제 결과처럼 보일 수 있는 시안 이미지

**AI 생성 화면에는 `REAL EVIDENCE`, `PASS`, `실제 검증` 같은 사실성 표현을 붙이지 않는다.**

### 15.8 Evidence Integrity Final Gate

최종 Export 전 다음 질문에 모두 YES여야 한다.

1. `EVIDENCE` 표시가 붙은 모든 화면은 실제 Source인가?
2. 실제 Screenshot을 AI가 다시 그린 이미지로 대체하지 않았는가?
3. Code는 실제 Repository에서 추출했는가?
4. Requirement / PASS / 수치가 실제 검증 문서와 일치하는가?
5. 생성 이미지와 실제 자료가 시각적으로 명확히 구분되는가?
6. 각 Evidence가 기준 Commit SHA / Path로 역추적 가능한가?

하나라도 NO이면 `DRAFT` 또는 `MOCKUP` 상태를 유지한다.
