# AGENTS.md

## 1. Scope

이 저장소에서 CODYSSEY B1-1 ~ B7-2의 학습·평가·발표 자료를 생성·수정·검토하는 Agent는 이 문서와 Repository의 현재 Source를 우선한다.

이 규칙은 특히 다음 산출물에 적용한다.

- PowerPoint(PPT/PPTX)
- Figma Slides
- PDF
- Reveal.js / Web Slides
- Golden Learning Deck
- Presentation Pack / Appendix / Quick Review Sheet

## 2. Canonical Presentation Sources

발표 작업 전에 최소 다음 문서를 확인한다.

```text
standards/ROUND-02-PRESENTATION-STANDARD.md
templates/presentations/FIGMA-MASTER-TEMPLATE-SPEC.md
templates/presentations/MISSION-PRESENTATION-PACK-TEMPLATE.md
templates/presentations/PRESENTATION-QUALITY-EVOLUTION.md
```

Mission별 Repository에 `training/round-02-clear/presentation/`이 있으면 해당 Mission의 실제 README / OUTLINE / EVIDENCE-MAP / GOLDEN-DECK-QUALITY를 함께 읽는다.

과거 채팅·AI 기억·생성 이미지보다 **현재 Mission Repository의 Code / Runtime / Verification / Evidence / Commit**을 우선한다.

## 2.1 Owner 최신 이미지 제작·실행 복구 계약 (2026-10-09 / 모든 B1-1~B7-2 적용)

- 최상위 결정: [`standards/PRESENTATION-CANONICAL-DECISIONS.md`](standards/PRESENTATION-CANONICAL-DECISIONS.md)의 **D15·D16**은 이전 D13 스타일 설명 및 낡은 장수·템플릿 기본값보다 우선한다. **표지와 모든 본문·학습·평가·부록 페이지를 각각 고품질 이미지 생성형 장면으로 제작한다.** 기존 카드형/원형 번호 템플릿으로 본문만 채우는 것은 FAIL.
- 정확한 공식 문항·함수·수식·코드·실제 실행 화면·Run/SHA·숫자는 **원본에서 추출하여 최소 합성**하고, AI가 그려 넣은 가짜 코드/성과·AI 생성 UI를 실증으로 사용하지 않는다. 검증되지 않은 항목은 PENDING을 표시.
- **필수 루프:** 한 장면씩 생성 → 같은 파일 실물 가독성·코드·증빙·학습 설명 검증 → 실패 재현 → 원인·최소 수정 → 동일 장면 재생성/재렌더 → 검증 재실행 → Owner 화면 검토 → 다음 장면. QA 없이 불합격 템플릿을 전체 페이지로 증식 금지.
- 각 미션 `AGENTS.md`와 발표 하위 `AGENTS.md`, 하네스/헤르메스 스킬은 **이 중앙 원장과 공식 평가 원문·실제 미션 소스**를 참조한다. 내용 복제보다 경로·판정·검증기 연결을 우선한다.
- 산출물마다 페이지 이미지 원본, 생성 입력/모델(실제 기록 가능할 때), SHA-256, 최소 수정 내역, 평가 ID/실제 코드·증거, 발표 대본, 학습 30초 재현 과제, 전면 시각 QA 결과를 보존한다.
- 하네스 정적 테스트·파일 장수·해시·CI SUCCESS 자체는 슬라이드의 시각 품질·사용자 숙달·공식 제출 PASS가 아니다. QA_SEC 독립 검증과 Owner 검토를 구분한다.
- **완료 우선:** 2026-10-31 Owner 통보 공식 완료 기한의 실기/구술/학교 제출을 보호한다. 별도 AI 제작 도구 설치·관리 문서 양산이 실제 미션 진도를 막으면 중단한다. Hermes가 실행되지 않았다면 NOT_VERIFIED로 보고하고 동등한 증빙 기반 대체 제작·검증으로 진행한다.

## 3. Golden Master v3

Golden Reference Deck은 단순히 보기 좋은 PPT가 아니다.

```text
Repository Truth Lock
→ Concept
→ 4-Panel Comic
→ Technical Diagram
→ Architecture
→ Data / Event / State Flow
→ Actual Code
→ Runtime
→ Verification
→ Evidence
→ Decision / Trade-off
→ Troubleshooting
→ Reproduction
→ Explanation
→ Evaluation Defense
→ Mastery / Transfer
```

Mission Completion과 Learning Mastery를 자동으로 동일하게 취급하지 않는다.

## 4. AI Visual Boundary

AI Visual은 다음 용도로 사용한다.

- Cinematic / PhotoReal Hero
- 4컷 Concept Comic
- 비유 / Concept Illustration
- 배경 / 캐릭터 / 분위기
- 검증된 구조의 설명용 시각화

다음은 실제 Source에서 가져온다.

- Code
- Terminal / Log
- GitHub / PR / CI
- Runtime Screenshot
- PASS / FAIL 결과
- Requirement ID
- URL / Commit SHA / 수치 / 날짜

```text
AI-VISUAL != EVIDENCE
MOCKUP    != RUNTIME
```

AI 생성 화면을 실제 Runtime 또는 Evidence로 표현하지 않는다.

## 5. Source Badges

필요 시 다음 Badge를 사용한다.

- `OFFICIAL`
- `CODE`
- `RUNTIME`
- `EVIDENCE`
- `EXPLAIN`
- `AI-VISUAL`
- `MOCKUP`
- `DECISION`
- `MASTER`

## 6. Comic Learning Rule

어려운 개념은 가능하면 다음 4단 연결을 사용한다.

```text
Comic
→ Diagram
→ Actual Code
→ Actual Runtime / Evidence
```

만화는 이해를 돕는 학습 장치이며 Evidence가 아니다.

## 7. Architecture Rule

핵심 Architecture는 가능하면 동일 사실을 다음 세 레벨로 설명한다.

1. Beginner View
2. Technical View
3. Code Trace View

세 설명은 실제 구현과 서로 일치해야 한다.

## 8. Technical Decision Rule

주요 기술 선택은 다음 구조로 설명한다.

```text
WHAT
→ WHY
→ HOW
→ VERIFY
→ LIMITATION
→ ALTERNATIVE
→ TRADE-OFF
```

평가 질문은 Fact → Principle → Decision → Challenge → Extension 단계로 준비한다.

## 9. Traceability

주요 Claim은 다음 연결을 유지한다.

```text
Claim
↕
Requirement
↕
Implementation / Code
↕
Verification
↕
Evidence
```

근거 없는 PASS, 검증 완료, 성능·보안 수치를 만들지 않는다.

## 10. Reproduction / Mastery

학습 숙달은 별도로 확인한다.

```text
L1 Code를 보며 설명
L2 Diagram만 보고 설명
L3 자료 없이 설명
L4 빈 환경에서 핵심 기능 재현
L5 새로운 문제에 원리 적용
```

Mission PASS만으로 MASTER를 선언하지 않는다.

## 11. Presentation Package

기본 결과물은 세 층으로 분리한다.

1. Main Presentation — 실제 발표 핵심
2. Technical Appendix — Code / Glossary / Error / Security / NFR / Test / Trade-off / Defense
3. Quick Review Sheet — 발표 직전 1장 복습

## 12. Hybrid Editable Composite

Image-First를 사용해도 정확한 정보는 가능한 범위에서 분리한다.

```text
Background Art
+
Editable Typography
+
Editable Diagram
+
Actual Code
+
Actual Evidence
+
Accessibility Text
```

## 13. Full-screen QA

Thumbnail만 보고 품질을 승인하지 않는다.

최종 Export 전에 슬라이드별 전체 화면에서 다음을 확인한다.

- 제목 / 본문 / Code / Caption 가독성
- 공식 Mission 제목
- Requirement ID
- URL / SHA / 수치 / 날짜
- 실제 Code 일치
- Runtime / Evidence 원본 여부
- AI-VISUAL / MOCKUP 구분
- 접근성

## 14. Golden Master Gate

다음 10개가 모두 PASS해야 `GOLDEN MASTER`로 판정한다.

1. G1 Visual Impact
2. G2 Technical Accuracy
3. G3 Evidence Integrity
4. G4 Traceability
5. G5 Learning Value
6. G6 Reproduction
7. G7 Explanation
8. G8 Evaluation Defense
9. G9 Full-screen Readability
10. G10 Accessibility

FAIL 또는 INSUFFICIENT_EVIDENCE가 하나라도 있으면 FINAL / GOLDEN MASTER로 승격하지 않는다.

## 15. Promotion Rule

B1-1은 Golden Master v3의 첫 기준작이다.

B1-1 검증만으로 Stable Standard를 선언하지 않는다.

```text
B1-1
→ Truth Replacement
→ Full-screen QA
→ Reproduction / Defense
→ Golden Master Gate
→ B1-2 또는 다른 성격 Mission 재검증
→ Stable 승격 판단
```
