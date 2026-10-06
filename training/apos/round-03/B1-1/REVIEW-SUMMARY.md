# B1-1 — 쉽게 보는 실행·검토 요약

## 한 문장

**B1-1은 먼저 필수 과제(CORE)를 완료하고, 공식 보너스 4개(BONUS)를 별도로 새 검증한 뒤, APOS 자체 품질 보완(APOS-ENHANCEMENT)을 추가하는 구조로 수행합니다.**

## 1. 어디서 관리하고 어디서 작업하나요?

| 구분 | 위치 | 역할 |
|---|---|---|
| 중앙관리 | `codyssey-basic/training/apos/round-03/B1-1/` | 계획·상태·계약·검토 |
| 실제 작업 | `codyssey-basic-web-portfolio/training/round-03-apos/` | 실제 HTML/CSS/JS·테스트·증빙 |
| 과거 자료 | `training/round-02-clear/` | 참고만 사용 |

## 2. 세 가지 작업 구분

| 구분 | 뜻 | 공식 CLEAR 영향 |
|---|---|---|
| **CORE** | 공식 필수 과제 | 예 |
| **BONUS** | 공식 보너스 과제 | 필수 CORE와 분리 |
| **APOS-ENHANCEMENT** | APOS가 품질 향상을 위해 추가한 검증·문서·보안·발표 보완 | 공식 요구와 분리 |

## 3. 공식 보너스 4개

| 번호 | 보너스 | Round 03에서 확인할 것 |
|---|---|---|
| 1 | 언어별 프로젝트 필터 | 버튼 클릭 → 목록·개수 변경 |
| 2 | Hero 타이핑 효과 | 최초 로드 타이핑 + Reduced Motion |
| 3 | Formspree 실제 전송 | 실제 전송 + 성공/실패 UI + 외부 연동 |
| 4 | 시스템 다크 모드 감지 | System/Light/Dark + 시스템 테마 반응 |

**중요:** Round 02에서 이미 PASS였어도 Round 03에서는 새로 실행하고 새 Evidence를 남깁니다.

## 4. 실제 수행 순서 — 제가 볼 때는 6단계만 보면 됩니다

```text
1. 기준·환경 확인
↓
2. CORE 필수 구현
↓
3. CORE 실제 실행·검증
↓
4. BONUS 4개
↓
5. 학습 확인 + Evidence + 평가/발표
↓
6. QA_SEC → CLEAR
```

내부적으로 세부 Contract가 있어도 사용자는 이 6단계 진행률만 확인하면 됩니다.

### 꼭 확인할 학습 4가지

- [ ] HTML / CSS / JavaScript의 역할을 자기 말로 설명
- [ ] 한 기능을 `사용자 동작 → Event → JS → DOM/CSS → 화면` 순서로 설명
- [ ] 한 오류 사례의 원인과 해결 방법 설명
- [ ] 내가 바꾼 핵심 코드 한 건을 왜 바꿨는지 설명

이 네 가지는 문서를 늘리기 위한 것이 아니라 **AI가 코드를 만들어도 실제로 배우고 있는지 확인하는 최소 기준**입니다.

## 5. 상세 수행 흐름

```text
① 사전점검
↓
② 공식 요구사항·평가 확인
↓
③ CORE 최소 통과 구현
↓
④ CORE 테스트·실행 검증
↓
⑤ BONUS 4개 새 실행·검증
↓
⑥ APOS 품질 보완
↓
⑦ Evidence 정리
↓
⑧ 평가 답변·발표 준비
↓
⑨ QA_SEC 독립 검증
↓
⑩ CLEAR
```

## 6. 제가 확인하면 되는 핵심 체크표

### 시작 전
- [ ] PR #96 QA_SEC 검증 완료
- [ ] Naming/Directory Standard 확정
- [ ] B1-1 공식 PDF 다시 확인
- [ ] 공식 Evaluation 다시 확인
- [ ] 실제 iMac/OrbStack/Ubuntu 환경 확인
- [ ] Owner Start Approval

### CORE
- [ ] 필수 요구사항 표 작성
- [ ] HTML 구현
- [ ] CSS 구현
- [ ] JavaScript 구현
- [ ] Desktop 확인
- [ ] Mobile 확인
- [ ] 오류/Negative Test
- [ ] Secret 없음

### BONUS
- [ ] BONUS-01 언어별 프로젝트 필터
- [ ] BONUS-02 Hero 타이핑 효과
- [ ] BONUS-03 Formspree 실제 전송
- [ ] BONUS-04 시스템 다크 모드 감지

### 종료 전
- [ ] 새 Round 03 Evidence
- [ ] Tested Commit SHA 일치
- [ ] 평가 10초/30초/1분 답변
- [ ] 발표자료 = 실제 구현
- [ ] QA_SEC PASS

## 7. 상태 의미

```text
NOT_STARTED
아직 시작 안 함

PREFLIGHT_READY
시작 준비만 완료

IN_PROGRESS
실제 구현 시작

EVALUATION_READY
구현·검증 완료, 평가 준비

CLEAR
QA까지 통과한 최종 완료
```

현재 B1-1 상태는 **NOT_STARTED**입니다.


## 8. 진행을 늦추면 하지 않는 것

다음은 필요하지만 B1-1 CORE 진행을 늦춘다면 CLEAR 이후로 미룹니다.

- 과도한 리팩터링
- 새로운 Framework 도입
- 디자인의 지나친 고도화
- 과도한 성능 최적화
- 중복 문서 생성
- APOS 자동화 기능 자체의 추가 개발

단, **보안 문제, 공식 요구 누락, Evidence 오류, 잘못된 PASS 가능성은 미루지 않습니다.**

## 9. 코드 기준원

Round 03 작성 코드는 원칙적으로 한 곳만 기준으로 사용합니다.

```text
training/round-03-apos/04-src/
```

기존 Repository root 코드와 `round-02-clear`는 참고자료입니다.

같은 코드를 두 위치에서 동시에 수정하지 않습니다. GitHub Pages 배포 방법은 실제 시작 시 확인한 뒤, Round 03 Candidate와 정확히 연결합니다.


## 10. 대·중·소 목차

B1-1 전체 수행 구조는 다음 문서를 단일 목차로 사용합니다.

`TABLE-OF-CONTENTS.md`

사용 방법:

- **대분류 10개**: 전체 진행 위치 확인
- **중분류**: 현재 Window에서 수행할 일 확인
- **소분류**: APOS 실행·검증 Checklist

기본 진행 보고는 대분류 상태만 보여주고, 문제가 있거나 사용자가 요청할 때만 중·소분류를 펼칩니다.
