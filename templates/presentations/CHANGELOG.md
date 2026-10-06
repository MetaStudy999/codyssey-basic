# CODYSSEY Presentation System — Changelog

## 2026-10-06 — Image-First Precision Composite Candidate

Status: **CANDIDATE / TESTING**

### Added
- Image-First Precision Composite 제작 모델
- 4K Final Slide Image 권장
- AI Visual과 Truth Layer 분리
- 정확한 Text/Code/URL/SHA 후합성 원칙
- 실제 Runtime/Evidence 원본 우선 원칙
- AI-VISUAL / CODE / RUNTIME / EVIDENCE / OFFICIAL provenance badge
- 6축 Presentation Quality Gate
- Visual Mix 권장 비율
- Presentation Quality Evolution Registry

### Why
PPT-native 조립 방식보다 AI 생성 기반 PhotoReal/Cinematic/Comic 시각 품질이 높았으나,
AI 생성 이미지가 긴 한글·코드·수치·Evidence를 직접 표현할 때 정확성 문제가 발생할 수 있었다.

### Decision
시각 디자인은 AI Image를 적극 활용하되, 사실 정보는 Repository Source에서 정밀 합성한다.

### Validation
- B1-1 Golden Learning Deck v1: 구조·학습 흐름 검증
- B1-1 Golden Learning Deck v2: Cinematic/Comic/Trade-off/Evidence 강화
- Image-First 6-up sample: 시각 방향성 확인
- Precision Composite: 실제 코드·Evidence 합성 방식으로 다음 검증 진행

### Not Yet Stable
B1-2 또는 다른 유형 Mission에서 재검증 전까지 Image-First Precision Composite는 Candidate로 유지한다.


## 2026-10-06 — B1-1 Image-First Review

Status: **VALIDATION UPDATE**

### Observed
- 시각 품질은 Golden Deck 목표 수준에 근접
- AI 생성 한글·코드의 미세 오류 가능성 확인
- AI Runtime Mockup이 실제 Evidence로 오인될 수 있는 문제 확인

### Changed
- Truth Replacement Gate를 필수화
- AI Mockup에 `REAL EVIDENCE` 표현 금지
- `MOCKUP` provenance badge 추가
- 실제 Screenshot / Code / Log / Requirement / SHA를 Source에서 후합성하도록 확정
- Evidence Integrity Final Gate 추가

### Candidate Status
Image-First Precision Composite는 계속 **CANDIDATE / TESTING** 상태로 유지한다.
B1-2 또는 다른 유형 Mission에서 Accuracy/Evidence QA를 재검증한 뒤 Stable 승격 여부를 결정한다.


## 2026-10-06 — B1-1 Truth Review / Precision Composite

Status: **VALIDATION UPDATE / BLOCKING GATE**

### Verdict
- Visual Quality: PASS
- Technical Accuracy: PARTIAL
- Evidence Integrity: FAIL
- Golden Deck FINAL: BLOCKED

### Blocking Corrections
- 공식 Mission 제목 병기
- AI 생성 Code → 실제 `js/script.js`
- AI Runtime Mockup → 실제 Screenshot 5장
- AI Verification Table → 실제 R01~R15
- AI Terminal → 실제 `verify.txt`
- 불확실한 날짜/수치 제거
- Architecture를 실제 `theme/projects/form`, GitHub REST API, Formspree, GitHub Pages 기준으로 정렬
- Vanilla JS vs React를 공식 제약/학습 목표 중심으로 재프레이밍

### Decision
Art Direction은 고정한다. 다음 작업은 디자인 재탐색이 아니라 **Truth Replacement + Full-screen QA**다.
