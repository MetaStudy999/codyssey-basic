# CODYSSEY Presentation Canonical Decisions

> Status: CANONICAL / ACTIVE
>
> Purpose: 여러 채팅·미션·제작 도구에 흩어진 발표 의사결정을 하나의 기준으로 고정하여 Context Drift(맥락 이탈)를 방지한다.
>
> Scope: CODYSSEY B1-1 ~ B7-2의 PowerPoint, Figma, PDF, Web Slide, Image Slide, Learning Note.

## 0. Precedence

이 문서는 CODYSSEY 발표자료의 **최신 사용자 결정 원장(Decision Ledger)** 이다.

충돌 시 우선순위:

```text
Actual Mission Repository Truth
→ Latest Owner Decision in this Ledger
→ ROUND-02-PRESENTATION-STANDARD
→ Mission Presentation Quality Record
→ Older Deck / Older Chat / AI Memory
```

기존 `12~14장 Core Deck` 규칙은 짧은 공식 발표를 위한 기본값이다.
**Study-first Golden Learning Deck**에서는 아래 결정이 이를 우선한다.

---

## D01 — Image-first Slide / Image-first PowerPoint

**Decision: ACTIVE**

사용자가 말하는 `슬라이드`와 `PowerPoint`는 본 작업에서 동일한 시각 단위를 의미한다.

최종 지향점:

```text
1 Slide = 1 Finished Visual Composition
PowerPoint = Image Slides를 순서대로 담는 Container
```

일반적인 PPT-native 도형·텍스트 조립을 최종 시각 품질의 기본값으로 삼지 않는다.

단, 정확한 Text / Code / Evidence를 합성하기 위해 제작 과정에서 editable layer를 사용할 수 있다.
최종 화면은 한 장의 완성된 이미지처럼 보여야 한다.

---

## D02 — Text Minimal

**Decision: ACTIVE**

슬라이드 한 장의 텍스트를 줄인다.

```text
Text ↓
Visual Memory ↑
```

한 슬라이드에는 원칙적으로:

- 한 개념
- 한 흐름
- 한 주장

만 남긴다.

내용이 많으면 글자를 작게 넣지 말고 **슬라이드 수를 늘린다.**

---

## D03 — Study-first, Presentation-second

**Decision: ACTIVE**

목적은 짧은 발표 최적화가 아니라 개인 학습·복습·재현·설명까지 지원하는 것이다.

```text
Presentation ⊂ Learning System
```

발표는 학습 시스템의 한 사용 방식이다.
학습 내용을 발표 시간에 맞추기 위해 삭제하지 않는다.

---

## D04 — More Slides Are Allowed

**Decision: ACTIVE**

Golden Learning Deck의 권장 범위는 **약 30~45장**이다.
필요하면 더 늘릴 수 있다.

```text
Page Density ↓
Page Count ↑
Recall / Readability ↑
```

짧은 발표가 필요할 때는 이 Deck에서 별도 Short Presentation View를 파생한다.

---

## D05 — Comic-assisted Learning

**Decision: ACTIVE**

어려운 개념은 가능한 경우 다음 순서로 설명한다.

```text
Easy Visual / 4-Panel Comic
→ Technical Diagram
→ Actual Code
→ Actual Runtime / Evidence
```

Comic은 학습 장치이며 Evidence가 아니다.

---

## D06 — Image-first + Truth-first

**Decision: ACTIVE / NON-SEPARABLE PAIR**

Image-first와 Truth-first는 따로 적용하지 않는다.

```text
High Visual Quality
+
Repository Truth
=
Golden Learning Slide
```

예쁜 이미지가 실제 구현과 다르면 FAIL이다.
정확하지만 가독성이 낮고 기억하기 어려운 슬라이드도 Golden 목표에는 부족하다.

---

## D07 — Actual Code Only

**Decision: ACTIVE**

`CODE` Badge가 있는 내용은 실제 Repository에서 가져온다.

AI가 만든 code-like visual은 `EXPLAIN` 또는 `MOCKUP`으로만 사용한다.

금지:

- 존재하지 않는 함수명
- 실제 미션과 다른 Framework code
- AI가 생성한 pseudo-code를 Actual Code처럼 표현

---

## D08 — Actual Runtime / Evidence Only

**Decision: ACTIVE**

`RUNTIME` / `EVIDENCE` Badge는 실제 실행 원본만 사용한다.

```text
AI-VISUAL != EVIDENCE
MOCKUP    != RUNTIME
```

실제 Screenshot, log, verification text, commit, URL, test result를 원본으로 합성한다.

---

## D09 — Mission Completion != Human Mastery

**Decision: ACTIVE**

Repository PASS와 사용자의 학습 숙달을 분리한다.

```text
Mission PASS
!=
Human Mastery
```

학습 숙달 단계:

```text
L1 Code를 보며 설명
L2 Diagram만 보고 설명
L3 자료 없이 설명
L4 빈 환경에서 재현
L5 새로운 문제에 적용
```

L1~L5를 실제로 확인하기 전 `MASTER` 또는 `100% Mastery`를 자동 선언하지 않는다.

---

## D10 — Architecture Is Multi-level

**Decision: ACTIVE**

같은 시스템을 최소 다음 수준으로 설명할 수 있게 한다.

1. Beginner View — 쉬운 전체 흐름
2. Technical View — Component / Boundary
3. Code Trace View — File / Function / State / External Call

각 View는 서로 같은 사실을 표현해야 한다.

---

## D11 — Decision / Trade-off Is Learning Content

**Decision: ACTIVE**

중요 선택은 다음 구조로 학습한다.

```text
WHAT
→ WHY
→ HOW
→ VERIFY
→ LIMITATION
→ ALTERNATIVE
→ TRADE-OFF
```

대안 기술은 실제 Architecture와 구분한다.
예: Vercel은 B1-1의 실제 Delivery가 아니라 비교 대안일 수 있다.

---

## D12 — Memory / Context Management

**Decision: ACTIVE**

발표 의사결정을 채팅 기억만으로 유지하지 않는다.

Canonical Context Set:

```text
1. PRESENTATION-CANONICAL-DECISIONS.md  ← 최신 사용자 결정
2. ROUND-02-PRESENTATION-STANDARD.md   ← 공통 제작 표준
3. Mission GOLDEN-DECK-QUALITY.md      ← 미션별 품질 상태
4. Mission IMAGE-STUDY-DECK-V3-ROADMAP.md ← 슬라이드 계획/진행
5. Mission TRUTH-REPLACEMENT-MAP.md    ← 실제 Source 치환 상태
```

새 세션에서 CODYSSEY 발표자료를 다루면 위 순서로 재확인한다.

### Context Drift 금지

다음 회귀를 금지한다.

- Study-first를 다시 Presentation-first로 축소
- 30~45장 학습 Deck을 이유 없이 12~16장으로 축소
- Image-first를 일반 PPT-native 카드형 디자인으로 회귀
- 실제 Code 대신 AI Code 사용
- 실제 Evidence 대신 AI-generated UI 사용
- Mission PASS를 Mastery PASS로 표현

---

## D13 — B1-1 Current Visual Direction

**Decision: KEEP AS HISTORICAL ART REFERENCE; latest Owner D15 takes precedence (2026-10-09)**

현재 B1-1에서 확인한 시각 언어:

- Dark Navy
- Cyan Neon Frame
- Amber Highlight
- Cinematic Mountain / Journey Motif
- Character Storytelling
- Comic + Technical UI
- Large Image, Minimal Text

새 스타일 탐색보다 이 시각 언어를 유지하면서 Truth Accuracy를 높인다.

---

## D14 — Golden Master Final Gate

다음이 모두 PASS해야 최종 기준작으로 승격한다.

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

하나라도 FAIL 또는 INSUFFICIENT_EVIDENCE이면 `GOLDEN MASTER FINAL`로 표시하지 않는다.

---

## D15 — EVERY PAGE Image-Generated, Cover-Grade, Minimal Compositing (2026-10-09 Owner 최신 결정)

**Decision: ACTIVE / HIGHEST CURRENT VISUAL PRECEDENCE**

`표지만 고품질로 생성하고 본문을 일반 PPT-native 카드·번호 원형·도형 템플릿으로 대량 조립`하는 제작 로직은 **명시적으로 폐기**한다.

1. **표지뿐 아니라 학습본·본문·부록·평가 발표본의 모든 페이지**에 각각의 목적에 맞는 **독립적인 생성형 이미지 장면**을 제작한다. 시네마틱 사진·인포그래픽·4컷 만화·기술 다이어그램·보고서형 본문 모두 동일하게 `COVER-GRADE` 시각 완성도를 목표로 한다. 서로 다른 내용에 같은 카드 구도를 복제해 장수만 늘리는 작업을 금지한다.
2. 최신 Owner가 검토한 레퍼런스를 적용한다. **기업형 히어로 표지 + 공공·연구기관급 밝은 본문 가독성 + 고밀도지만 명료한 현대적 인포그래픽 + 실제 코드/실행 증빙의 큰 시각화**. 기존 D13의 산악 여정·남색/청록/호박색은 적합한 장면에서 보존하되, 어두운 네온을 본문 전체에 강제하지 않는다.
3. `IMAGE_GENERATE(scene-specific prompt + reference + audience learning outcome)` → **실제 큰 이미지에서 QA** → `MINIMAL_TRUTH_COMPOSITE` → Export. 수정은 **정확한 한국어·코드·수식·용어·검증 출처·가독성** 등 사실 보장을 위한 최소한의 합성/교체를 원칙으로 한다. 큰 카드/배경을 수작업으로 다시 만드는 제작 파이프라인으로 회귀 금지.
4. 이미지 생성이 만든 **함수 이름·브라우저 UI·데이터·성공 수치·날짜·시험 결과는 신뢰하지 않는다.** 실제 `CODE/RUNTIME/EVIDENCE` 주장 부분은 공식 문서·저장소/정확한 Commit·원본 스크린샷·Run/Artifact로 검증해 원본을 합성한다. 실제 데이터는 AI의 상상으로 만들지 않으며 `AI-VISUAL/MOCKUP`을 명시한다.
5. `SlideID → Generated Base (file + hash + prompt/revision source) → Minimal Overlay → Final Composition (file + hash) → Official Evaluation/Bonus → Actual Code/Run/Evidence → Speaker Note/Practice → Visual QA` 연결을 유지한다. 이미지에 허위 PASS가 들어 있으면 교체·마스킹 후 사실을 재검증하고, 원본 생성 페이지를 그대로 제출하지 않는다.
6. 실질적인 **사용자 이해·30초 구술·직접 재현**을 먼저 검증한다. 30~45장 일괄 생성 전에 어려운 개념 한 묶음의 장면을 제작·실물 검토하고, FAIL인 경우 원인 수정·동일 산출물 재렌더·재검증을 수행한다. 이미 불합격된 디자인을 템플릿으로 증식하면 FAIL이다.

**예외:** 배경 없이 원본 증거 한 장만 전체 화면에 제시해야 하는 정확성/접근성 장면은 Owner가 그 예외를 명시적으로 승인하고 `EVIDENCE_ONLY_EXCEPTION`으로 출처·사유를 기록한 때만 허용. 침묵을 승인으로 해석하지 않는다.

---

## D16 — Fail-Closed Slide Regression + User Learning Delivery Loop (2026-10-09)

**Decision: ACTIVE**

```text
Official Evaluation + Source Lock
→ One Image-Generated Scene per Slide
→ Actual Code/Evidence Minimal Overlay
→ Full-screen Visual QA + Source/Claim QA
→ FAIL? Reproduce → Root Cause → Minimal Repair → Re-render SAME Slide → Recheck
→ Owner View + 30-second Explain + Live Demo
→ Only Then Expand / Publish / Submit
```

- **정적 계약 PASS는 고품질 그림 PASS가 아니다.** 총 장수, 파일 해시, 발표자 노트 존재, 19개 평가 ID 기재는 필요조건 일부일 뿐이며 품질 완성 조건이 아니다.
- 서로 다른 학습 장면의 **기존 반복 카드 패턴·동일 캐릭터 복제·인식 불가능한 실제 캡처·비정확한 코드/문구**는 결함으로 판정한다. 감지 실패한 품질 회귀에 맞추어 재현 가능한 고의 실패 테스트를 추가한다.
- 매 페이지의 실제 풀스크린 이미지·원본 이미지·최소 수정 영역·텍스트 가독성·실행 증거와 사용자가 말할 구술 설명이 기록되어야 한다. 미측정 시 `PENDING`, 재현된 오류 시 `FAIL`이며 Golden G1~G10 전체 PASS 전 `FINAL` 금지.
- HERMES 실행 여부는 사실 그대로 `NOT_VERIFIED` 또는 추적 가능한 `EXECUTED`를 사용하고, 사용하지 않았다는 이유만으로 공식 미션 제출을 인질로 삼지 않는다. 승인된 동일 품질의 대체 도구+검증 경로를 허용한다.
- 코디세이 공식 미션·학교 평가/제출을 최우선으로 하며 시각 도구 구축·문서 양산에 시간을 빼앗기지 않는다.

---

## Decision Summary

```text
Image-first
+ Text-minimal
+ Study-first
+ More-slides-allowed
+ Comic-assisted
+ Truth-first
+ Actual-code-only
+ Actual-evidence-only
+ Mission != Mastery
+ Canonical Context Management
```

이 조합을 CODYSSEY Golden Learning Deck의 고정 기준으로 사용한다.
