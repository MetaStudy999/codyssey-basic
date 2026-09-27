# CODYSSEY Figma Master Template Specification

> **Actual Figma Slides Master:** https://www.figma.com/slides/MbDKgyckrGGPLDECvbUmun  
> **Team:** `박영세's team`  
> **Deck:** Core 7 Slides + B7 Term Project 12 Slides

## 목적

B1-1 ~ B7-2의 발표자료를 매번 새로 디자인하지 않고, 하나의 Figma Master를 재사용하기 위한 설계 규격이다.

## Page 구조

```text
00 Cover
01 Core Components
02 Core 7 Slides
03 Term Project 12 Slides
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

## Core 7 Slides

1. Mission
2. Problem & Concepts
3. Requirement → Implementation
4. Architecture / Data Flow
5. Runtime Result
6. Verification / Evidence
7. Evaluation Explanation

## Term Project 12 Slides

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
12. Conclusion / Q&A

## Asset 정책

- 실제 Screenshot은 Frame에 원본 비율 유지
- Evidence에는 AI 생성 이미지를 사용하지 않음
- ChatGPT 생성 이미지는 개념·아키텍처·상징 이미지에만 사용
- Diagram은 실제 코드/구조와 일치해야 함
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
