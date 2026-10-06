# B1-1 APOS Round 03 Execution Plan

> Mission: **B1-1 — 나를 소개하는 웹페이지 처음부터 만들기**
>
> Canonical Repository: `MetaStudy999/codyssey-basic-web-portfolio`
>
> Planned Execution Root: `training/round-03-apos/`
>
> 현재 상태: **NOT_STARTED**
>
> 이 문서는 계획이며 Mission 시작 승인을 의미하지 않는다.

## 0. 목적

B1-1을 기존 Round 02 결과의 단순 복사로 처리하지 않고, APOS 표준에 따라 **현재 공식 요구 → 새 구현/검증 → 새 Evidence → 평가 설명 → 독립 QA**까지 한 흐름으로 수행한다.

기존 `training/round-02-clear/`과 현재 root 구현은 Reference(참고자료)로 활용하지만 Round 03 PASS/CLEAR의 증거로 대체하지 않는다.

## Phase 0 — Start Gate / Preflight

시작 조건:

- PR #96의 Naming/Directory Standard가 검증·확정되어 있을 것
- Owner Start Approval = APPROVED
- 현재 제2기 Mission PDF와 Evaluation 자료를 다시 읽을 것
- B1-1 Composite Identity가 일치할 것
  - Generation
  - Mission ID
  - Stable Topic
  - Canonical Repository
  - Execution Round
- 실제 iMac/OrbStack/Ubuntu Runtime을 Fresh Readback할 것
- Git main HEAD / remote / clean state를 기록할 것

실패 시 Mission 구현을 시작하지 않는다.

## Phase 1 — Isolated Round 03 Workspace

Owner 승인 후:

```text
Branch:
round-03/b1-1-apos

Execution Root:
training/round-03-apos/
```

초기에는 다음 최소 파일만 만든다.

```text
training/round-03-apos/
├── README.md
├── CHECKLIST.md
└── mission.yml
```

실제 산출물이 생길 때 필요한 디렉터리를 추가한다.

## Phase 2 — Official Requirements & Evaluation Mapping

현재 공식 자료를 기준으로 다음 표를 만든다.

```text
Official Requirement
→ Required Concept
→ Implementation
→ Verification
→ Evidence
→ Evaluation Question
```

확인 대상:

- 현재 B1-1 공식 요구사항
- 필수/선택 기능
- 제출 또는 배포 요구
- 평가 질문/평가 관점
- 기존 Round 02와 동일한 부분
- 변경되었거나 다시 검증해야 하는 부분

공식 자료와 기존 Repository가 충돌하면 공식 자료를 따른다.

## Phase 3 — JIT Learning / Design

필요한 개념만 적시 학습한다.

핵심 범주:

- HTML(HyperText Markup Language, 하이퍼텍스트 마크업 언어)
- Semantic HTML(의미 구조 HTML)
- CSS(Cascading Style Sheets, 종속형 스타일시트)
- Responsive Web(반응형 웹)
- JavaScript(JS, 자바스크립트)
- DOM(Document Object Model, 문서 객체 모델)
- Event(이벤트)
- Form Validation(폼 입력 검증)
- Accessibility(A11y, 웹 접근성)
- HTTP/Static Web/Deployment 기본 흐름

각 개념은:

```text
쉬운 한 문장
→ 정확한 정의
→ B1-1에서 왜 필요한가
→ 실제 코드 위치
→ 실행 결과
```

형식으로 정리한다.

## Phase 4 — Minimum Passing Implementation

공식 요구를 만족하는 Minimum Passing Path(최소 통과 경로)를 먼저 만든다.

구현은 원칙적으로:

```text
training/round-03-apos/04-src/
```

아래에서 격리한다.

예상 기술 Baseline:

```text
HTML
+ CSS
+ Vanilla JavaScript
```

단, 이는 현재 Repository 기준 Baseline이며 공식 자료 readback 후 최종 확정한다.

우선순위:

1. 필수 HTML 구조
2. 필수 CSS 및 Responsive
3. 필수 JavaScript Interaction
4. 공식 요구 Form/외부 연동이 있다면 구현
5. 선택 기능은 필수 PASS 후

기존 Round 02 코드를 참고할 수 있지만 복사할 경우 재사용 이유와 변경 내용을 기록한다.

## Phase 5 — Test & Negative Test

정상 동작만 확인하지 않는다.

최소 검증:

- 페이지 로드
- CSS/JS/Asset 경로
- 필수 Interaction
- Responsive Desktop/Mobile
- 필수 Form 입력
- 빈 값/잘못된 값 등 Negative Case
- 외부 요청이 있으면 Success/Error/Empty 또는 공식 요구에 맞는 실패 흐름
- Secret 비노출

결과는 반드시:

```text
PASS
FAIL
INSUFFICIENT_EVIDENCE
```

중 하나로 기록한다.

## Phase 6 — Fresh Runtime Verification

과거 Round 02 PASS를 재사용하지 않는다.

새 Round 03 후보에 대해:

```text
Local Server
→ Browser
→ Desktop
→ Mobile
→ Required Interaction
→ Error Path
→ 필요 시 Deployment
```

순서로 실제 실행한다.

Tested Commit SHA를 Evidence에 묶는다.

## Phase 7 — Official Bonus Track

CORE 필수 요구사항의 후보가 확보되면 공식 Bonus를 별도 Track으로 수행한다.

Round 03에서 다시 검증할 공식 Bonus 4개:

| ID | Bonus | 새 검증 |
|---|---|---|
| BONUS-01 | 언어별 프로젝트 필터 | 버튼 클릭 → 프로젝트 목록/개수 변경 |
| BONUS-02 | Hero 타이핑 효과 | 최초 로드 타이핑 + Reduced Motion |
| BONUS-03 | Formspree 실제 전송 | 실제 Submission + 성공/실패 UI + 외부 연동 확인 |
| BONUS-04 | 시스템 다크 모드 감지 | System/Light/Dark + 시스템 테마 변화 반영 |

원칙:

- Round 02에서 4개가 PASS였다는 사실은 참고자료로 보존한다.
- Round 03 PASS는 새 Candidate에서 새 Runtime/Evidence로 판단한다.
- Bonus는 CORE 공식 CLEAR 조건과 분리한다.
- APOS 자체 보완 기능을 공식 Bonus라고 부르지 않는다.

Evidence는 가능하면:

```text
06-evidence/
├── core/
├── bonus/
└── apos-enhancement/
```

로 분리한다.

## Phase 8 — Security / Recovery Gate

B1-1 Security Profile:

```text
WEB_PUBLIC_BASELINE
Risk: LOW
```

확인:

- Token/API Key/Password/Private Key 없음
- 공개 HTML/JS에 Secret 없음
- 외부 링크/폼 Endpoint 확인
- 사용자 입력 처리 기본 검증
- 기존 Round 01/02 보존
- Round 03 변경만 독립 Rollback 가능
- 배포 실패 시 이전 안정 상태로 복귀 가능

## Phase 9 — Evidence Package

새 Evidence Root:

```text
training/round-03-apos/06-evidence/
```

최소 후보:

- Requirement Mapping
- 실행 명령 및 결과
- Desktop Screenshot
- Mobile Screenshot
- 오류/Negative Test
- 배포 검증(요구되는 경우)
- Candidate Commit SHA
- Evidence Index

## Phase 10 — Evaluation & Presentation

평가 설명은 다음 구조로 준비한다.

```text
WHAT
→ WHY
→ HOW
→ VERIFY
→ LIMITATION
```

각 핵심 항목마다:

- 10초 답변
- 30초 답변
- 1분 답변

을 준비한다.

발표자료는 실제 구현과 Evidence를 기반으로 구성하며, 존재하지 않는 기능을 슬라이드에 넣지 않는다.

## Phase 11 — QA_SEC / Close Gate

독립 QA_SEC에서 최소 확인:

- 공식 요구 Traceability
- Exact Candidate
- Fresh Runtime
- Evidence completeness
- Security
- No stale Round 02 PASS substitution
- Evaluation readiness
- Presentation claims == actual implementation

최종 상태 전이는:

```text
NOT_STARTED
→ PREFLIGHT_READY
→ IN_PROGRESS
→ EVALUATION_READY
→ CLEAR
```

로 제한한다.

## 예상 내부 수행 순서

```text
Preflight
→ 공식 요구/평가 대조
→ Round 03 Workspace
→ JIT Learning
→ 최소 구현
→ Static/Negative Test
→ Browser Runtime
→ Evidence
→ CORE Verification
→ Official Bonus 4
→ APOS Enhancement
→ Security/Recovery
→ Evaluation
→ Presentation
→ QA_SEC
→ CLEAR
```

## Round 03의 핵심 비교 지표

Round 02와 비교할 수 있도록 다음을 기록한다.

- 실제 소요시간
- 새로 작성한 코드량 / 재사용 코드량
- Test 수 / 실패 수
- QA 발견 결함 수
- 재작업 횟수
- Evidence 완전성
- 평가 설명 준비도
- APOS 자동화 단계 수
- 사람 승인(HITL) 개입 지점

이를 통해 B1-1은 단순 학습 Mission뿐 아니라 **APOS Round 03 Harness의 첫 검증 Pilot** 역할도 한다.
