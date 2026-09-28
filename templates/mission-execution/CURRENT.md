# Mission Execution Template — CURRENT

- Version: **v1.0.0**
- Status: **STABLE**
- Effective From: 2026-09-28
- Canonical Repository: `MetaStudy999/codyssey-basic`
- Snapshot: [versions/v1.0.0.md](versions/v1.0.0.md)

> 이 문서는 현재 안정 버전이다. 개선 아이디어는 바로 덮어쓰기보다 [NEXT.md](NEXT.md)에 먼저 기록하고, 실제 Mission에서 검증한 뒤 다음 버전으로 승격한다.

---

## 0. Mission Metadata

- Mission ID:
- Title:
- Topic:
- Required / Optional:
- Official Source:
- Repository:
- Training Round:
- Legacy Mission / Evaluation:
- Official Learning Time:
- Internal Sprint Target:
- Status: `NOT STARTED | ACTIVE | BLOCKED | EVALUATION READY | CLEAR`

---

# 1. 최적 수행 흐름

```text
01 기준 확정
   ↓
02 요구사항·평가항목 매핑
   ↓
03 Minimum Passing Path 설계
   ↓
04 핵심 기능 통합 구현
   ↓
05 통합 Runtime 검증
   ↓
06 UX·포트폴리오 고도화
   ↓
07 공식 Bonus / Optional
   ↓
08 Troubleshooting
   ↓
09 최종 회귀검증
   ↓
10 Evidence·문서화
   ↓
11 평가 설명 준비
   ↓
12 모의평가
   ↓
13 CLEAR
```

---

## Gate 01 — 기준 확정

우선순위:

```text
현재 Mission PDF
→ Orientation
→ Canonical Control Repository
→ 동일 주제 Mission Repository
→ Legacy Mission / Evaluation
→ 이전 Training Round
→ 외부 자료
```

확정 항목:

- 현재 Mission ID / 제목
- 주제(Topic)
- 필수/선택
- 공식 요구사항
- 산출물
- 연결 Repository
- Legacy Evaluation
- 과거 번호와 현재 번호 차이
- 현재 Training Round

**STOP:** 공식 요구가 확정되지 않았으면 구현하지 않는다.

---

## Gate 02 — Requirement → Evaluation Mapping

구현 전에 다음 연결을 만든다.

```text
Requirement
→ Implementation
→ Verification
→ Evidence
→ Evaluation Explanation
```

최소 표:

| Requirement | Implementation | Verification | Evidence | Evaluation |
|---|---|---|---|---|
|  |  |  |  |  |

AI 예상 질문은 공식 Evaluation과 구분한다.

---

## Gate 03 — Minimum Passing Path

먼저 필수 통과 경로만 정한다.

- 필수 기능 우선
- 공식 평가와 직접 연결되는 것 우선
- 선택 고도화는 필수 PASS 이후
- 대규모 리팩터링은 CLEAR 이후
- 외부 지연은 `BLOCKED`로 관리

산출물:

- 최소 파일 구조
- 최소 기능 목록
- 최소 Runtime 시나리오
- PASS / FAIL 기준

---

## Gate 04 — 핵심 기능 통합 구현

작은 수정마다 문서화·커밋·검증으로 끊지 않는다.

기본 원칙:

```text
관련 기능 묶음 구현
→ 통합 실행
→ FAIL만 수정
→ 의미 있는 단위로 Commit
```

입문자 설명이 필요한 경우:

```text
무엇
→ 왜
→ 실행 위치
→ Preflight
→ 실행 코드
→ 핵심 옵션/줄 설명
→ 예상 결과
```

---

## Gate 05 — 통합 Runtime 검증

정적 코드 존재가 아니라 실제 실행으로 검증한다.

예:

- Desktop / Tablet / Mobile
- 정상 입력 / 오류 입력
- API Success / Error / Empty / Retry
- 저장 상태 Persistence
- 실제 배포 URL
- 브라우저 이벤트

검증 결과:

```text
PASS
FAIL
BLOCKED
```

FAIL일 때만 구현 단계로 되돌아간다.

---

## Gate 06 — UX·포트폴리오 고도화

필수 Runtime PASS 이후에만 수행한다.

예:

- 정보구조(IA)
- 접근성
- 반응형 미세조정
- SEO / Metadata
- 사용성
- Portfolio 표현
- 보안 기본선

고도화가 필수 기능을 깨뜨리지 않도록 이후 Regression Test를 반드시 수행한다.

---

## Gate 07 — Bonus / Optional

공식 선택 과제가 있으면 필수 PASS 이후 구현한다.

각 Bonus는 별도 상태로 관리한다.

```text
NOT STARTED
→ IMPLEMENTED
→ RUNTIME PASS
→ EVIDENCE
```

Bonus 실패가 공식 필수 CLEAR를 자동으로 FAIL시키지는 않는다.

---

## Gate 08 — Troubleshooting

오류는 다음 순서로 처리한다.

```text
증상
→ 실행 위치
→ 환경
→ Source Version
→ 원인 후보 분리
→ 확인 명령
→ 최소 수정
→ 재실행
→ Runtime PASS/FAIL
→ 원인 설명
```

기록 형식:

### TS-NN — 문제 제목

- 증상:
- 실행 위치:
- 실제 출력:
- 원인:
- 확인 방법:
- 최소 수정:
- 재검증:
- 결과:
- 배운 점:

재설치·Reset·대규모 변경을 첫 대응으로 사용하지 않는다.

---

## Gate 09 — 최종 회귀검증(Regression)

고도화와 Bonus 이후 필수 기능을 다시 한 번 빠르게 확인한다.

원칙:

- 새 기능을 추가하지 않는다.
- PASS / FAIL만 확인한다.
- FAIL이면 최소 수정한다.
- 사용자 실제 Runtime 없이 PASS를 추정하지 않는다.

---

## Gate 10 — Evidence + Documentation

검증하는 순간 Evidence를 확보한다.

```text
Runtime Verification
+
Evidence Capture
```

권장:

- 핵심 Screenshot
- 실제 Terminal Output
- API / Form / Deployment 결과
- Trouble Resolution
- Secret 미포함 확인

문서는 실제 상태만 기록한다.

---

## Gate 11 — Evaluation Explanation

각 평가 항목은 다음 구조로 준비한다.

```text
WHAT
→ WHY
→ HOW
→ VERIFY
→ LIMITATION
```

준비 단위:

- 평가자가 확인하려는 것
- 핵심 개념
- 구현 파일/함수/설정
- 실제 시연
- Verification
- Evidence
- 10초 설명
- 30초 설명
- 1분 설명
- 추가 질문

---

## Gate 12 — Mock Evaluation

질문은 한 번에 하나씩 진행한다.

```text
기본 개념
→ 공식 평가항목
→ WHY
→ 코드/명령 설명
→ 오류 상황
→ 대안 비교
→ 실제 시연
```

피드백:

- 잘 설명한 부분
- 부족한 부분
- 기술 오류
- 쉬운 설명
- 핵심어

---

## Gate 13 — CLEAR

최종 조건:

```text
공식 요구사항
+ 실제 구현
+ 실제 Runtime
+ Verification PASS
+ 필요한 Evidence
+ Evaluation 설명 가능
+ Secret 노출 없음
```

코드 존재, 예상 출력, 과거 Evidence만으로 CLEAR 처리하지 않는다.

---

# 2. 60분 Mission Sprint

기술 난이도와 외부 지연이 허용하는 경우 내부 목표로 사용한다.

| 시간 | 작업 |
|---|---|
| 0~5분 | 기준·평가 확정 |
| 5~10분 | Minimum Passing Path |
| 10~35분 | 핵심 통합 구현 |
| 35~45분 | Runtime Verification |
| 45~50분 | FAIL 수정 / Bonus |
| 50~55분 | Evidence + Documentation |
| 55~60분 | Evaluation 핵심 설명 |

외부 인증, Cloud Provisioning, 협업 대기, 대규모 다운로드 등은 시간 예산 밖의 `BLOCKED` 요소로 분리한다.

---

# 3. 한 단계 안내 템플릿

사용자가 따라하기를 요청한 경우에만 다음 형식을 사용한다.

### Step N — 제목

1. 무엇을 하는가
2. 왜 필요한가
3. 핵심 용어
4. 실행 위치
5. Preflight
6. 복사 가능한 명령/코드
7. 옵션·코드 설명
8. 예상 결과
9. PASS / FAIL
10. 오류 해결
11. 평가 연결
12. 다음 단계

전체 구현을 한 번에 수행하는 모드에서는 의미 있는 기능 묶음 단위로 합친다.

---

# 4. 문서 최소 계약

처음부터 많은 파일을 만들지 않는다.

```text
training/<round>/
├── README.md
└── CHECKLIST.md
```

실제 필요할 때만 추가:

```text
docs/
├── requirements-mapping.md
├── minimum-passing-path.md
├── troubleshooting.md
├── evaluation-prep.md
└── final-verification.md

evidence/
environment/
presentation/
```

---

# 5. Version Feedback

현재 Mission에서 템플릿 개선점이 발견되면 다음처럼 기록한다.

```text
문제
→ 현재 v1.0.0에서 불편했던 이유
→ 개선 후보
→ NEXT.md 기록
→ 다음 Mission에서 검증
→ 새 Stable Version 승격 여부 판단
```

현재 안정 템플릿을 즉시 반복 수정해 기준이 흔들리지 않도록 한다.
