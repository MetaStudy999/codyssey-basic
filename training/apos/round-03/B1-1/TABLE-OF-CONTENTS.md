# B1-1 APOS Round 03 — 수행 목차

> 목적: 사용자는 **대분류**로 전체 위치를 보고, 필요할 때 **중분류**를 펼쳐 오늘 할 일을 확인하며, APOS는 **소분류**를 실제 실행·검증 Checklist(체크리스트)로 사용한다.
>
> 현재 상태: **NOT_STARTED**
>
> 실제 Mission 시작 전에는 이 문서를 진행 계획으로만 사용한다.

# 1. 시작 준비 — Preflight

## 1.1 Mission 기준 확인
### 1.1.1 현재 B1-1 공식 Mission 확인
### 1.1.2 공식 Evaluation(평가) 확인
### 1.1.3 CORE / BONUS / APOS-ENHANCEMENT 구분
### 1.1.4 Round 02 자료는 Reference(참고)로만 확인

## 1.2 실행환경 확인
### 1.2.1 iMac Host 확인
### 1.2.2 OrbStack 확인
### 1.2.3 Ubuntu Guest 확인
### 1.2.4 Git / Browser / Runtime 확인
### 1.2.5 Repository / Remote / main SHA 확인
### 1.2.6 Worktree(작업트리) Clean 상태 확인

## 1.3 작업공간 준비
### 1.3.1 Owner Start Approval 확인
### 1.3.2 Branch `round-03/b1-1-apos`
### 1.3.3 Execution Root `training/round-03-apos/`
### 1.3.4 Round 01 / Round 02 보존
### 1.3.5 Rollback(되돌리기) 기준점 기록

# 2. 핵심 학습 — Learning

## 2.1 HTML
### 2.1.1 HTML 역할
### 2.1.2 Semantic HTML(의미 구조 HTML)
### 2.1.3 header / nav / main / section / footer
### 2.1.4 Form / Label / Image alt

## 2.2 CSS
### 2.2.1 CSS 역할
### 2.2.2 Selector(선택자)
### 2.2.3 Box Model(박스 모델)
### 2.2.4 Flexbox
### 2.2.5 Grid
### 2.2.6 Responsive Web(반응형 웹)
### 2.2.7 Media Query(미디어 쿼리)

## 2.3 JavaScript
### 2.3.1 JavaScript 역할
### 2.3.2 const / let
### 2.3.3 Function(함수)
### 2.3.4 Event(이벤트)
### 2.3.5 DOM(Document Object Model, 문서 객체 모델)
### 2.3.6 querySelector / addEventListener

## 2.4 전체 흐름 이해
### 2.4.1 사용자 동작
### 2.4.2 Event 발생
### 2.4.3 JavaScript 처리
### 2.4.4 DOM / CSS 상태 변경
### 2.4.5 화면 결과

# 3. CORE 필수 구현

## 3.1 HTML 구조
### 3.1.1 페이지 기본 구조
### 3.1.2 Hero
### 3.1.3 About
### 3.1.4 Skills
### 3.1.5 Projects
### 3.1.6 Contact
### 3.1.7 Footer

## 3.2 CSS 디자인
### 3.2.1 Typography
### 3.2.2 Layout
### 3.2.3 Flexbox / Grid
### 3.2.4 Desktop
### 3.2.5 Mobile
### 3.2.6 Responsive

## 3.3 JavaScript 기능
### 3.3.1 Navigation
### 3.3.2 Scroll
### 3.3.3 Button Interaction
### 3.3.4 Form Validation
### 3.3.5 공식 요구 기능

## 3.4 데이터·화면 흐름
### 3.4.1 사용자 입력
### 3.4.2 Event
### 3.4.3 JavaScript 처리
### 3.4.4 DOM 변경
### 3.4.5 화면 출력

# 4. CORE 검증 — Verification

## 4.1 정적 검증
### 4.1.1 HTML 구조
### 4.1.2 CSS 연결
### 4.1.3 JavaScript 연결
### 4.1.4 Asset / Link 경로

## 4.2 실제 실행
### 4.2.1 Local Web Server
### 4.2.2 Browser
### 4.2.3 Desktop
### 4.2.4 Mobile

## 4.3 기능 검증
### 4.3.1 Navigation
### 4.3.2 Form
### 4.3.3 Button
### 4.3.4 Scroll
### 4.3.5 JavaScript Interaction

## 4.4 오류 검증
### 4.4.1 빈 입력
### 4.4.2 잘못된 입력
### 4.4.3 외부 요청 실패
### 4.4.4 잘못된 경로 / Asset 실패

## 4.5 보안 확인
### 4.5.1 API Key 없음
### 4.5.2 Token 없음
### 4.5.3 Password / Private Key 없음
### 4.5.4 공개 JavaScript Secret 없음

# 5. 공식 BONUS 4개

## 5.1 BONUS-01 — 언어별 프로젝트 필터
### 5.1.1 Array.filter() 이해
### 5.1.2 언어 버튼
### 5.1.3 목록 변경
### 5.1.4 개수 변경
### 5.1.5 Fresh Runtime / Evidence

## 5.2 BONUS-02 — Hero 타이핑 효과
### 5.2.1 문자열·Timer 이해
### 5.2.2 DOM 갱신
### 5.2.3 타이핑 Runtime
### 5.2.4 prefers-reduced-motion 대응
### 5.2.5 Fresh Evidence

## 5.3 BONUS-03 — Formspree 실제 전송
### 5.3.1 HTTP POST 이해
### 5.3.2 async / await
### 5.3.3 전송 중 상태
### 5.3.4 성공 상태
### 5.3.5 실패 상태
### 5.3.6 실제 Submission / 외부 연동 Evidence

## 5.4 BONUS-04 — 시스템 Dark Mode
### 5.4.1 prefers-color-scheme
### 5.4.2 matchMedia()
### 5.4.3 System / Light / Dark
### 5.4.4 상태 변경
### 5.4.5 필요 시 localStorage
### 5.4.6 Fresh Runtime / Evidence

# 6. 필수 학습 확인

## 6.1 기술 역할 설명
### 6.1.1 HTML은 무엇을 담당하는가
### 6.1.2 CSS는 무엇을 담당하는가
### 6.1.3 JavaScript는 무엇을 담당하는가

## 6.2 기능 하나 End-to-End 설명
### 6.2.1 사용자 동작
### 6.2.2 Event
### 6.2.3 JavaScript
### 6.2.4 DOM / CSS
### 6.2.5 화면 결과

## 6.3 오류 하나 설명
### 6.3.1 증상
### 6.3.2 원인
### 6.3.3 확인 방법
### 6.3.4 최소 수정
### 6.3.5 재검증

## 6.4 내가 바꾼 코드 하나 설명
### 6.4.1 변경 전
### 6.4.2 변경 후
### 6.4.3 변경 이유
### 6.4.4 결과

# 7. Evidence — 증빙

## 7.1 CORE Evidence
### 7.1.1 Desktop Screenshot
### 7.1.2 Mobile Screenshot
### 7.1.3 Runtime 결과
### 7.1.4 Negative Test 결과

## 7.2 BONUS Evidence
### 7.2.1 Project Filter
### 7.2.2 Hero Typing
### 7.2.3 Formspree
### 7.2.4 Dark Mode

## 7.3 Git Evidence
### 7.3.1 Branch
### 7.3.2 Commit
### 7.3.3 Candidate SHA
### 7.3.4 Tested SHA

## 7.4 Evidence Index
### 7.4.1 Requirement ↔ Evidence 연결
### 7.4.2 CORE / BONUS / APOS Enhancement 구분

# 8. 평가 준비 — Evaluation

## 8.1 핵심 용어
### 8.1.1 HTML
### 8.1.2 CSS
### 8.1.3 JavaScript
### 8.1.4 DOM
### 8.1.5 Event
### 8.1.6 Responsive
### 8.1.7 Form Validation

## 8.2 답변 구조
### 8.2.1 WHAT
### 8.2.2 WHY
### 8.2.3 HOW
### 8.2.4 VERIFY
### 8.2.5 LIMITATION

## 8.3 답변 길이
### 8.3.1 10초
### 8.3.2 30초
### 8.3.3 1분

## 8.4 예상 질문
### 8.4.1 Flexbox / Grid
### 8.4.2 JavaScript 필요성
### 8.4.3 DOM / Event
### 8.4.4 Responsive
### 8.4.5 오류 처리

# 9. 발표자료 — Presentation

## 9.1 Mission 소개
## 9.2 핵심 용어
## 9.3 Architecture(아키텍처)
## 9.4 Data Flow(데이터 흐름)
## 9.5 HTML
## 9.6 CSS
## 9.7 JavaScript
## 9.8 CORE 기능
## 9.9 BONUS
## 9.10 오류 해결
## 9.11 Security
## 9.12 Verification / Evidence
## 9.13 배운 점
## 9.14 한계 / 개선점

# 10. 최종 QA / CLEAR

## 10.1 QA_SEC 독립 검증
### 10.1.1 공식 요구 충족
### 10.1.2 Exact Candidate
### 10.1.3 Fresh Runtime
### 10.1.4 Evidence
### 10.1.5 Secret
### 10.1.6 학습 Gate
### 10.1.7 평가·발표 Claim 일치

## 10.2 최종 상태 전이
### 10.2.1 NOT_STARTED
### 10.2.2 PREFLIGHT_READY
### 10.2.3 IN_PROGRESS
### 10.2.4 EVALUATION_READY
### 10.2.5 CLEAR

---

# 사용자가 보는 진행판

매번 전체 소분류를 볼 필요는 없다. 기본 보고는 아래 10개 대분류만 사용한다.

| # | 대분류 | 상태 |
|---:|---|---|
| 1 | 시작 준비 | ⬜ |
| 2 | 핵심 학습 | ⬜ |
| 3 | CORE 필수 구현 | ⬜ |
| 4 | CORE 검증 | ⬜ |
| 5 | 공식 BONUS 4개 | ⬜ |
| 6 | 필수 학습 확인 | ⬜ |
| 7 | Evidence | ⬜ |
| 8 | Evaluation | ⬜ |
| 9 | Presentation | ⬜ |
| 10 | QA / CLEAR | ⬜ |

운영 원칙:

- **대분류**: Owner가 전체 위치를 확인.
- **중분류**: 현재 Window/오늘 할 일을 확인.
- **소분류**: APOS가 실행·검증 Checkpoint로 사용.
- 한 단계의 세부 작업이 늘어나더라도 대분류를 불필요하게 추가하지 않는다.
- 공식 요구나 보안 문제와 무관한 작업이 진행을 늦추면 뒤로 미룬다.
