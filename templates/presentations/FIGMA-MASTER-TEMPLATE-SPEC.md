# CODYSSEY Figma Master Template Specification

> **Actual Figma Slides Master:** https://www.figma.com/slides/MbDKgyckrGGPLDECvbUmun  
> **Team:** `박영세's team`  
> **Status:** Repository specification updated; actual Figma Master may still contain the legacy 7 + 12 frame set until expanded.  
> **Target Deck Specification:** Core 12~14 Slides + B7 Term Project 15~18 Slides

## 목적

B1-1 ~ B7-2의 발표자료를 매번 새로 디자인하지 않고, 하나의 Figma Master를 재사용하기 위한 설계 규격이다.

## Page 구조

```text
00 Cover
01 Core Components
02 Core 12~14 Slides
03 Term Project 15~18 Slides
04 Diagram Frames
05 Evidence Frames
06 Examples
```

## Frame

- Ratio: 16:9
- 권장 크기: 1920 × 1080
- Grid: 12 columns
- Safe Margin: 좌우 96px 이상
- 기본 배경: #F6F8FB

## Core Components

1. Cover / Mission Header
2. Claim Title
3. Section Label
4. Requirement Card
5. Implementation Card
6. Evidence Card
7. PASS / FAIL / PENDING Badge
8. Screenshot Frame + Caption
9. Code Frame
10. Log Frame
11. Diagram Node / Arrow
12. 2-column / 3-column Compare
13. Metric Card
14. Evaluation Q&A Card
15. Footer: Mission ID / Repository / Round
16. Mission Map / One-page Summary
17. Glossary / Concept Card
18. 4-Panel Concept Comic
19. Module / Class Diagram
20. Function IPO Card
21. Normal / Failure Flow Compare
22. Security / Trust Boundary
23. Before / After
24. Source / Evidence Provenance Badge
25. Demo Step Card

## Core 12~14 Slides

1. Hero Cover
2. Mission Map / One-page Summary
3. Problem / Goal / User Scenario
4. Terms / Concepts / 4-Panel Comic
5. Requirement → Evaluation → Evidence
6. System Architecture
7. End-to-End Data / Event / State Flow
8. Module / Class / Method Structure
9. Core Code / Function IPO / Feature Deep Dive
10. Normal / Failure Flow / Security
11. Troubleshooting / Before-After / Trade-off
12. Runtime / Demo
13. Verification / Evidence / NFR
14. Evaluation / Learning / Limitation

## Term Project 15~18 Slides

1. Executive Summary
2. Problem / Objective
3. Requirement → Evidence
4. Architecture
5. ERD / Data Model
6. API / Sequence
7. AI / Core Logic
8. UI / Runtime
9. Verification
10. Collaboration
11. Troubleshooting / Security / Limitation
12. Security / Privacy / Trust Boundary
13. Failure / Recovery / Reliability
14. Performance / Observability / Cost
15. Collaboration / Git / PR
16. Verification / Evidence Traceability
17. Evaluation / Learning / Limitation
18. Conclusion / Q&A

## Asset 정책

- 실제 Screenshot은 Frame에 원본 비율 유지
- Evidence에는 AI 생성 이미지를 사용하지 않음
- ChatGPT 생성 이미지는 개념·아키텍처·상징 이미지에만 사용
- Diagram은 실제 코드/구조와 일치해야 함
- 4컷 만화와 AI 생성 이미지는 `AI-VISUAL` 또는 `개념 설명 이미지`로 표시
- 실제 Evidence에는 기준 Commit SHA와 Evidence Path를 추적 가능하게 유지
- Source Badge: OFFICIAL / CODE / RUNTIME / EVIDENCE / EXPLAIN / AI-VISUAL
- Secret / Token / Email / 개인정보는 Masking 후 삽입

## 텍스트 규칙

- 제목은 명사보다 주장형 문장 우선
- 본문 최대 3~5개 bullet
- 한 슬라이드 한 주장
- 기술 용어 첫 등장: 한글명(English Full Name, 약어)
- 발표자 대본은 Figma 본문에 과도하게 넣지 않고 Repository `SCRIPT.md`에서 관리

## Source 관계

```text
Repository Evidence
→ ChatGPT Outline / Script / Diagram
→ Figma Master Components
→ Mission Deck
→ PDF / PPT Export
```


## Learning & Evaluation Components

### Mission Map
한 장에서 다음을 보여준다.

- Mission Goal
- Input
- Core Process
- Output
- Tech Stack
- Verification
- Evaluation Point

### Glossary / Concept Card
- 한글명
- English Full Name
- 약어
- 쉬운 한 문장
- 정확한 정의
- 이번 미션 적용 위치

### 4-Panel Comic
- Problem
- Concept
- Application
- Technical Conclusion

### Function IPO
- Input
- Process
- Output
- Error / Exception
- Called by / Calls

### Code Trace
- File Path
- Class / Function
- Role
- Related Requirement
- Related Evidence

### Provenance
- Repository
- Commit SHA
- Round
- Runtime
- Evidence Path
- Evaluation Class
