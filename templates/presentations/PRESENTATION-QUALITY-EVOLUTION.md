# CODYSSEY Presentation Quality Evolution

> 목적: 미션 발표자료가 반복 제작될수록 시각 품질·기술 정확성·Evidence 신뢰성·학습 가치가 실제로 개선되도록 변경과 검증 결과를 기록한다.

## Current Model

- Stable baseline: **Round 02 Presentation Standard**
- Current candidate: **Image-First Precision Composite**
- Candidate status: **TESTING**
- First validation target: **B1-1 Golden Learning Deck**
- Next validation target: **B1-2**

## Evolution History

| Stage | 접근 | 개선점 | 한계 | 상태 |
|---|---|---|---|---|
| P0 | PPT-native component assembly | 편집성, 구조화 | Cinematic/PhotoReal 시각 완성도 제한 | REFERENCE |
| P1 | Hybrid Golden Learning Deck | Comic + Diagram + Code + Evidence 구조 확립 | 시각 언어가 카드형 PPT에 치우침 | VALIDATED ON B1-1 |
| P2 | Cinematic Hybrid | PhotoReal Hero, Comic, Trade-off, Evidence Wall 강화 | AI 생성 텍스트/코드 정확성 위험 | VALIDATED VISUALLY |
| P3 | Image-First Precision Composite | AI Visual 품질 + 정확한 Text/Code/Evidence 후합성 | 편집성 감소, 합성 QA 필요 | TESTING |

## P3 Design Decision

### 문제
AI 생성 이미지는 구도·조명·캐릭터·UI 감성 품질이 높지만, 긴 한글·코드·숫자·URL·Evidence를 직접 생성하면 정확도가 흔들릴 수 있다.

### 개선
```text
AI Visual
+
Exact Typography Rendering
+
Actual Code
+
Actual Runtime/Evidence
=
Final 4K Slide Image
```

### 기대 효과
- PhotoReal / Cinematic / Comic 품질 유지
- 실제 Repository Truth와 일치하는 기술 정보
- Evidence 위조·혼동 방지
- 폰트·레이아웃 깨짐 최소화
- PPT / PDF / Web / Video 재사용성 향상

### Trade-off
- 개별 객체 편집성 감소
- 최종 이미지 재합성 Workflow 필요
- 파일 크기 증가 가능
- Accessibility를 위한 별도 Text Layer/Notes가 필요

## Quality Dimensions

다음 6축을 매 Mission에서 평가한다.

| Dimension | 질문 |
|---|---|
| Visual Impact | 한 장의 작품처럼 보이는가? |
| Technical Accuracy | 용어·코드·Architecture가 실제 구현과 일치하는가? |
| Evidence Integrity | 실제 증거와 AI Visual이 명확히 구분되는가? |
| Learning Value | 비유 → 정의 → 실제 적용으로 학습 가능한가? |
| Presentation Value | 전체 화면에서 읽기 쉽고 발표 흐름이 좋은가? |
| Traceability | Requirement → Code → Verification → Evidence가 이어지는가? |

점수는 절대 성능 측정치가 아니라 **비교용 Review Score**로만 기록한다.

## Improvement Candidate Registry

| ID | 발견 | 개선 후보 | 검증 대상 | 상태 |
|---|---|---|---|---|
| P-C001 | PPT-native에서 PhotoReal/Cinematic 깊이감 부족 | Image-First 도입 | B1-1 | TESTING |
| P-C002 | AI 생성 한글·코드 정확성 불안정 | 정확한 Text/Code 후합성 | B1-1/B1-2 | TESTING |
| P-C003 | AI Runtime UI가 Evidence처럼 보일 위험 | AI-VISUAL / RUNTIME / EVIDENCE Badge 강제 | B1-1 | TESTING |
| P-C004 | 만화가 많으면 기술 발표가 가벼워질 수 있음 | Comic 20~25%, Technical/Evidence 비중 확대 | B1-1/B1-2 | TESTING |
| P-C005 | 6-up Thumbnail에서는 좋아 보이나 단일 화면 가독성 미검증 | Slide-by-slide Full-screen QA | B1-1 | OPEN |
| P-C006 | 이미지형 PPT는 접근성·편집성이 약해짐 | Speaker Notes / Alt Text / 최소 PPT Overlay | B1-2 | OPEN |

## Promotion Rule

```text
IDEA
→ TESTING
→ 실제 Mission Deck 제작
→ Full-screen Review
→ Accuracy/Evidence QA
→ ACCEPTED / REJECTED
→ CHANGELOG
→ Presentation Standard 반영
```

하나의 멋진 샘플만으로 Stable 승격하지 않는다. 최소 B1-1과 다음 성격이 다른 Mission에서 재검증한다.
