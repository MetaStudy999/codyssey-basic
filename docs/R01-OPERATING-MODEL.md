# R01 Operating Model

## 목적

이 문서는 Codyssey Basic의 `R01 — CLEAR`를 운영할 때 사용하는 내부 단계와 용어를 한곳에서 정의합니다.

> **중요:** `Phase A / Phase B / Phase C`, `FAST TRACK`, `FAST EXECUTE`, `CLEAR`는 코디세이 공식 교육과정의 공식 단계명이 아니라, 이 저장소에서 15개 미션을 일관되게 수행하기 위해 사용하는 **내부 운영 모델**입니다.

공식 Mission/Evaluation이 언제나 최우선 Source of Truth이며, 이 운영 모델은 공식 요구사항을 바꾸거나 추가하지 않습니다.

---

## 1. R01 — CLEAR란 무엇인가

`R01`은 현재 사용하는 첫 번째 완주 Round입니다.

목표는 15개 미션을 먼저 실제로 수행하고 검증하여 `✅ CLEAR` 상태로 만드는 것입니다.

```text
R01 — CLEAR
│
├─ Phase A — REFERENCE BUILD
│   └─ 기준 구현·가이드·검증 구조 준비
│
├─ Phase B — CROSS-MISSION AUDIT
│   └─ 15개 미션 전체 충돌·일관성 점검
│
└─ Phase C — RUNTIME CLEAR
    └─ 실제 실행 → Verify → Evidence → CLEAR
```

가장 쉽게 기억하면 다음과 같습니다.

```text
Phase A = 미리 만들어 보기
Phase B = 전체를 한 번 점검하기
Phase C = 실제로 직접 실행해서 통과하기
```

---

## 2. Phase A — REFERENCE BUILD

### 목적

실제 Runtime을 시작하기 전에 공식 Mission/Evaluation을 기준으로 기준 경로를 준비합니다.

주요 작업:

- 공식 Mission PDF/MD/Evaluation 확인
- 필수/선택 요구사항 구분
- 기준 구현과 설정 준비
- `BEGINNER-GUIDE.md` 작성
- `CHECKLIST.md` 작성
- Verify 구조 준비
- Evidence 저장 위치와 수집 계획 준비
- Secret 노출 점검

### 완료의 의미

```text
Reference Build 완료
≠ Mission Runtime 완료
≠ Mission CLEAR
```

즉 Phase A의 완료는 **실행할 준비가 되었다는 뜻**이지, 실제 미션을 통과했다는 뜻이 아닙니다.

---

## 3. Phase B — CROSS-MISSION AUDIT

### 목적

15개 미션의 Reference가 준비된 뒤 전체를 한 번에 검토하여 서로 충돌하거나 모순되는 부분을 찾습니다.

주요 점검:

- 공통 개발환경과 버전
- Port와 Service 충돌
- Python / Node / DB / Cloud 구성
- Secret 정책
- Git/Branch 운영
- 미션 간 선후관계
- B5/B6/B7 연결 구조
- 중복 설정과 불필요한 반복
- Verify/Evidence 기준의 일관성

### 완료의 의미

Phase B 완료는 **전체 실행 경로가 정리되고 큰 충돌이 제거되었다는 뜻**입니다.

아직 실제 Runtime을 수행한 것은 아닙니다.

---

## 4. Phase C — RUNTIME CLEAR

### 목적

Phase A/B에서 준비한 Reference, Guide, Preflight, Runbook을 실제 환경에서 실행해 미션을 `✅ CLEAR`로 전환합니다.

```text
이해
↓
직접 실행
↓
검증
↓
오류 해결
↓
Evidence
↓
평가 확인
↓
✅ CLEAR
```

Phase C에서 한 미션의 기본 흐름은 다음과 같습니다.

```text
Preflight
→ START-CHECK(있는 경우)
→ BEGINNER-GUIDE
→ Runtime
→ Verify
→ Evidence
→ Evaluation 확인
→ Secret 확인
→ ✅ CLEAR
```

### Phase C에서 가장 중요한 원칙

Phase C는 **새로운 설계를 계속 만드는 단계가 아니라 실제 실행을 끝내는 단계**입니다.

문제가 생기면 먼저 다음을 판단합니다.

```text
이 문제가 현재 Mission CLEAR를 막는가?

YES
→ 원인 확인
→ 최소 수정
→ 재검증
→ Evidence
→ 계속 실행

NO
→ 현재 Runtime을 멈추지 않음
→ 후속 개선 후보로 미룸
→ 계속 실행
```

---

## 5. FAST TRACK이란 무엇인가

`FAST TRACK`은 **Phase C에서 미션을 어떤 순서로 실행할지** 정하는 운영 순서입니다.

```text
Stage 1 — REQUIRED CLEAR
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B4-2 → B5-2 → B5-3 → B7-2
```

즉:

```text
필수 11개 먼저
↓
선택 4개 이후
```

FAST TRACK은 미션을 생략하는 방식이 아닙니다.

---

## 6. FAST EXECUTE란 무엇인가

`FAST EXECUTE`는 **Phase C에서 한 미션을 처리하는 방식**입니다.

핵심은 다음과 같습니다.

```text
현재 CLEAR에 필요한가?
├─ YES → 지금 최소 범위로 해결
└─ NO  → 후속으로 미루고 실행 계속
```

따라서 FAST EXECUTE는 속도를 위해 검증을 생략하는 것이 아니라, **현재 CLEAR와 무관한 재설계와 확장을 줄이는 방식**입니다.

---

## 7. CLEAR란 무엇인가

Mission `✅ CLEAR`는 문서 작성이나 Reference 준비만으로 부여하지 않습니다.

기본 계약은 다음과 같습니다.

```text
공식 Mission/Evaluation 충족
+ 필요한 실제 Runtime 정상 경로
+ 필요한 실패/예외 경로 확인
+ Verify
+ 실제 Evidence
+ Secret 노출 없음
= ✅ CLEAR
```

Mission 상태는 네 가지만 사용합니다.

- `⬜ NOT STARTED`
- `🟡 ACTIVE`
- `⛔ BLOCKED`
- `✅ CLEAR`

---

## 8. 현재 위치

현재 Control Tower 기준 위치는 다음과 같습니다.

```text
CODYSSEY BASIC
└─ R01 — CLEAR
   ├─ Phase A — REFERENCE BUILD       ✅ 완료
   ├─ Phase B — CROSS-MISSION AUDIT   ✅ 완료
   └─ Phase C — RUNTIME CLEAR         🟡 현재
      └─ FAST TRACK
         ├─ Stage 1 — Required
         │  └─ B1-1 🟡 ACTIVE
         └─ Stage 2 — Optional
            └─ 대기
```

따라서 현재의 핵심 행동은 다음입니다.

```text
B1-1 실제 실행
→ Verify
→ Evidence
→ ✅ CLEAR
→ B1-2
```

---

## 9. 용어 한눈에 보기

| 용어 | 의미 | 쉽게 말하면 |
|---|---|---|
| `R01` | 첫 번째 완주 Round | 1차 완주 |
| `Phase A` | Reference Build | 모범답안·가이드 준비 |
| `Phase B` | Cross-Mission Audit | 전체 사전점검 |
| `Phase C` | Runtime CLEAR | 실제 실행해서 통과 |
| `FAST TRACK` | 미션 실행 순서 | 필수 11 → 선택 4 |
| `FAST EXECUTE` | 실행 운영 방식 | 실행 우선, 필요할 때만 최소 수정 |
| `CLEAR` | 실제 완료 상태 | Runtime + Verify + Evidence 완료 |

---

## 10. 문서 역할 분리

이 문서는 **용어와 운영 단계의 의미**를 설명합니다.

- `README.md` — 현재 상태 Dashboard와 핵심 링크
- `docs/R01-OPERATING-MODEL.md` — R01 단계/용어 설명
- `MISSION-RUNBOOK.md` — 전체 수행 계약
- `PROGRESS.md` — 실제 진행 상태
- `training/round-01-clear/NEXT-ACTIONS.md` — 지금 해야 할 일
- `training/round-01-clear/PHASE-C-PREFLIGHT.md` — 실행 전 안전 확인
- `training/round-01-clear/PHASE-C-RUNBOOK.md` — 15개 실제 Runtime 경로

새 채팅이나 새 IDE/Agent에서 `Phase C`, `FAST TRACK`, `FAST EXECUTE`, `CLEAR`의 의미가 불명확하면 이 문서를 먼저 확인합니다.
