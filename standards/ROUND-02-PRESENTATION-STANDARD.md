# Round 02 발표자료 생성 표준

> 적용 범위: CODYSSEY AI 올인원 제2기 B1-1 ~ B7-2
>
> **기준 레포(Canonical Control Repository):** `MetaStudy999/codyssey-basic`
>
> 발표자료는 미션 완료 후 별도 장식 작업이 아니라 **Requirement → Implementation → Verification → Evidence → Evaluation Explanation**을 짧고 명확하게 보여주는 평가 패키지다.

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

## 3. 일반 미션 기본 7장

B1-1 ~ B6-3의 일반 미션은 먼저 **7장 Core Deck**을 만든다.

1. **Mission / 한눈에 보기**
   - 현재 Mission ID·제목
   - 무엇을 만들었는가
   - 미션 목적

2. **문제와 핵심 개념**
   - 왜 이 미션을 하는가
   - 핵심 용어 3~7개
   - 한글명(English Full Name, 약어)

3. **Requirement → Implementation**
   - 공식 요구사항
   - 실제 구현 파일/함수/설정
   - 평가항목 연결

4. **System / Data Flow**
   - 아키텍처
   - 데이터 흐름
   - 이벤트/상태/요청 흐름
   - 미션 특성에 맞는 다이어그램 1개

5. **Runtime Result**
   - 실제 실행 화면·CLI·배포 화면
   - 핵심 기능 시연
   - 실제 Screenshot 우선

6. **Verification / Evidence**
   - PASS/FAIL
   - 테스트
   - 로그
   - Commit/PR/배포 URL 등 실제 증빙
   - 각 Evidence가 무엇을 증명하는지 캡션

7. **Evaluation Explanation**
   - WHAT → WHY → HOW → VERIFY → LIMITATION
   - 30초 핵심 설명
   - 예상 질문 2~5개

발표 시간이 길거나 평가 요구가 있으면 Troubleshooting, Security, Collaboration, Limitations 등을 추가한다.

## 4. B7 Term Project 기본 10~12장

B7-1 / B7-2는 다음 구조를 사용한다.

1. Mission / Executive Summary
2. 문제 정의 / 목표
3. Requirement → Evidence Matrix
4. System Architecture
5. DB / ERD
6. API / Data Flow
7. AI API / 핵심 로직
8. UI / 실제 Runtime
9. Verification / Test / Evidence
10. Team / Git / PR / 역할
11. Troubleshooting / Security / Limitation
12. Evaluation Explanation / Conclusion / Q&A

필요에 따라 10~12장으로 축약·확장한다.

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

## 6. Figma Master 원칙

Figma에는 미션마다 새 디자인을 만들지 않고 공통 Master를 사용한다.

필수 Components:
- Cover
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

## 7. 디자인 토큰

- Navy `#081B2F` — 표지 / 결론
- Blue `#2F80ED` — 구조 / 검증
- Teal `#19A89D` — 구현 / 데이터 흐름
- Amber `#F3A61D` — 주의 / Trade-off
- Red `#D95D58` — 오류 / 위험
- Green `#2FA66A` — PASS
- Background `#F6F8FB`

텍스트는 한국어 중심으로 작성하고, 기술 용어 첫 등장 시 `한글명(English Full Name, 약어)`를 사용한다.

## 8. Repository Presentation Pack

각 Mission의 Round 02에서 실제 발표자료를 만들 때 다음 구조를 사용한다.

```text
training/round-02-clear/presentation/
├── README.md
├── OUTLINE.md
├── SCRIPT.md
├── EVIDENCE-MAP.md
└── assets/          # 실제 필요할 때 생성
```

- `OUTLINE.md`: 슬라이드별 주장·내용·시각자료
- `SCRIPT.md`: 발표 대본 / 30초·1분 설명
- `EVIDENCE-MAP.md`: Slide ↔ Requirement ↔ Implementation ↔ Evidence 연결
- `assets/`: 실제 Screenshot·Diagram·생성 이미지

빈 형식을 맞추기 위해 assets를 미리 대량 생성하지 않는다.

## 9. Evidence Map 최소 형식

```text
Slide
→ Requirement
→ Implementation
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

## 10. 발표 완료 기준

- 현재 제2기 Mission ID·제목 사용
- 공식 요구사항과 발표 내용이 일치
- 실제 구현 파일과 연결
- 실제 Runtime Screenshot 포함
- PASS 주장에 Evidence 존재
- Secret·개인정보 제거
- WHY 설명 포함
- 30초 핵심 설명 준비
- 예상 질문 준비
- Figma 원본 또는 편집 가능한 원본 보존
- PDF/PPT Export 검토 완료

> **Repository가 사실의 원본이고, ChatGPT가 설명과 시각화를 만들며, Figma가 최종 발표 디자인을 관리한다.**
