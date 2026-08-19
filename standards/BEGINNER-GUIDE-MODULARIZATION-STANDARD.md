# 입문자 가이드 모듈화 표준(Beginner Guide Modularization Standard)

Codyssey Basic의 긴 입문자 가이드(Beginner Guide)는 **한 파일에 모든 설명과 실행 단계를 누적하지 않고, 전체 중앙 허브(Hub) → 모듈 목차(Module Table of Contents, Module TOC) → 세부 학습 문서(Learning Unit)**의 3계층 정보 구조(Information Architecture, IA)로 관리합니다.

> 이 표준은 코디세이 공식 미션(Mission), 평가(Evaluation), 제공 파일을 변경하지 않습니다. 공식 요구사항이 항상 우선하며, 이 표준은 입문자가 길을 잃지 않고 단계별로 이해·실행·검증할 수 있도록 문서 구조를 관리합니다.

---

## 1. 적용 우선순위

```text
공식 Mission / Evaluation / 제공 파일
        ↓
현재 Repository 실제 상태
        ↓
Control Tower 현재 상태
        ↓
이 모듈화 표준
        ↓
각 Mission의 Beginner Guide / guide 문서
```

공식 요구사항과 이 표준이 충돌하면 공식 요구사항을 따릅니다.

---

## 2. 미션 단위 모듈화 판정(Trigger) — 필수

모든 Mission/Term Project의 `training/round-01-clear/BEGINNER-GUIDE.md`는 아래 항목을 확인해야 합니다.

다음 중 하나라도 해당하면 **모듈화는 필수(MUST)**입니다.

```text
[ ] 실행 STEP이 8개 이상이다.
[ ] BEGINNER-GUIDE.md가 100KB 이상이다.
[ ] BEGINNER-GUIDE.md가 1,000줄 이상이다.
[ ] 서로 다른 기술 관심사(예: SSH/UFW, DB/API, AI/Cloud, Git/협업)가 여러 묶음으로 존재한다.
[ ] 클릭 가능한 목차가 있어도 현재 위치·이전/다음 행동을 잃기 쉽다.
```

Trigger에 해당하면 단순히 긴 문서에 목차만 추가하는 것으로 완료하지 않습니다.

---

## 3. 3계층 정보 구조(Information Architecture, IA) — 필수

모듈화 대상 미션은 다음 구조를 기본으로 합니다.

```text
LEVEL 1 — 전체 중앙 허브(Global Hub)
BEGINNER-GUIDE.md
        ↓
LEVEL 2 — 모듈 목차(Module TOC)
guide/<NN-topic>/README.md
        ↓
LEVEL 3 — 세부 학습 문서(Learning Unit)
guide/<NN-topic>/<NN-unit>.md
```

기본 디렉터리 예시:

```text
training/round-01-clear/
├── BEGINNER-GUIDE.md
├── guide/
│   ├── 00-overview/
│   │   └── README.md
│   ├── 01-<topic>/
│   │   ├── README.md
│   │   ├── 01-<unit>.md
│   │   └── 02-<unit>.md
│   ├── 02-<topic>/
│   │   ├── README.md
│   │   └── 01-<unit>.md
│   └── ...
├── CHECKLIST.md
├── environment/
├── docs/
└── evidence/
```

`BEGINNER-GUIDE.md`와 각 모듈 `README.md`에는 상세 명령·코드를 중복하지 않습니다. 상세 설명과 실행 절차의 단일 기준은 세부 학습 문서(Learning Unit)입니다.

---

## 4. 전체 중앙 허브(BEGINNER-GUIDE.md) 필수 요소

중앙 허브는 **전체 지도와 진입점** 역할만 합니다.

```text
문서 제목
→ 한 문장 목적
→ 현재 상태 / 실행 환경(Runtime)
→ 선행 조건
→ 안전한 빠른 시작(Quick Start)
→ 전체 모듈 지도
→ STEP 진행 범위
→ Primary / Secondary 실행 환경 구분
→ 공식 기준(Source of Truth) 링크
→ CHECKLIST / Evidence / Evaluation 링크
```

허브에서 세부 STEP 전체를 다시 복제하지 않습니다.

---

## 5. 모듈 `README.md` — 지역 목차(Local TOC) 필수

**모든 모듈 디렉터리에는 `README.md`가 반드시 있어야 합니다.**

모듈 README의 역할:

```text
모듈 제목
→ 전체 허브로 돌아가기
→ 모듈 목적 / 학습 목표
→ 관련 STEP 범위
→ 📑 연관 개념별 모듈 목차(Module TOC)
→ 세부 학습 문서 링크
→ 완료 조건
→ 이전 모듈 ← / → 다음 모듈
```

모듈 목차는 파일 이름만 나열하지 않고 **연관된 개념·STEP을 학습 흐름 순서로 분류**합니다.

예:

```text
모듈 05 — 모니터링과 로그

1. monitor.sh 설치와 정상 실행
   → STEP 08

2. 로그 회전(Log Rotation)
   → STEP 09
```

---

## 6. 세부 학습 문서(Learning Unit)

실행형 모듈은 최소 1개의 세부 학습 문서를 둡니다.

각 세부 문서는 다음을 포함합니다.

```text
세부 문서 제목
→ 모듈 목차로 돌아가기
→ 이전/다음 세부 문서
→ STEP 또는 학습 단위 목적
→ 실행 위치(Context)
→ 실행 전 점검(Preflight)
→ 상세 설명 / 명령 / 코드 해설
→ 정상 기준
→ STOP / GO
→ 재실행 안전성(Rerun Safety)
→ 필요한 중간 저장점(Checkpoint) / 복구(Recovery)
→ 완료 확인
```

Cloud/API/AI 비용이 있으면 비용·자원 보호와 정리(Cleanup)까지 포함합니다.

### 6.1 모듈 내부 세분화 판정(Sub-module Split Trigger)

다음 중 하나라도 해당하면 단일 상세 문서에 계속 누적하지 않고 **추가 세분화를 필수(MUST)**로 합니다.

```text
[ ] 단일 상세 문서가 50KB 이상이다.
[ ] 단일 상세 문서가 700줄 이상이다.
[ ] 서로 독립된 STEP/학습 단위가 3개 이상이다.
[ ] 오류·검증·복구 경로가 분리되는 기술 개념이 2개 이상 존재한다.
[ ] 목차가 있어도 입문자가 현재 위치나 다음 행동을 찾기 어렵다.
```

파일 크기만으로 기계적으로 쪼개지는 것을 피하고 **기술적 응집도(Cohesion)**를 우선합니다. 다만 위 Trigger에 해당하면서 분할하지 않는 경우에는 그 이유를 문서에 명확히 남겨야 합니다.

---

## 7. 파일·디렉터리 이름 규칙

모듈 디렉터리와 세부 문서는 진행 순서를 정렬할 수 있도록 두 자리 번호를 앞에 둡니다.

```text
00-overview/README.md
01-preflight-baseline/README.md
01-preflight-baseline/01-baseline.md
01-preflight-baseline/02-prerequisites.md
02-ssh-firewall/README.md
02-ssh-firewall/01-ssh.md
02-ssh-firewall/02-firewall.md
```

규칙:

- 디렉터리·파일 이름: 짧고 안정적인 영문 kebab-case
- 문서 내부 제목: 한글 중심
- 핵심 기술 용어 첫 등장: `한글 의미(English Full Name, ABBR)`
- 약어가 일반적이지 않으면 `검증(Verification)`, `실행 환경(Runtime)`처럼 표기

---

## 8. 탐색(Navigation) 계약 — 필수

```text
전체 허브
→ 모듈 README
→ 세부 학습 문서
```

양방향 이동을 보장합니다.

```text
BEGINNER-GUIDE.md
→ 각 Module README

각 Module README
→ 전체 허브
→ 이전 Module
→ 다음 Module
→ 각 Learning Unit

각 Learning Unit
→ Module README
→ 이전 Learning Unit
→ 다음 Learning Unit
```

문서 구조를 바꾼 뒤에는 실제 GitHub `main`에서 링크가 열리는지 다시 확인합니다.

---

## 9. 내용 보존(Content Integrity) — 필수

기존 긴 가이드를 분할할 때는 **내용 삭제가 아니라 구조 리팩터링(Refactoring)**으로 수행합니다.

```text
기존 본문
→ 모듈 경계 결정
→ 지역 목차 설계
→ 세부 학습 문서로 이동
→ 허브/모듈 링크 연결
→ 누락·중복 검사
→ 실제 링크 검증
```

필수 확인:

```text
[ ] 공식 요구사항이 사라지지 않았다.
[ ] STEP이 누락되지 않았다.
[ ] 명령·코드가 임의로 축약되지 않았다.
[ ] STOP/GO·복구·재실행 안전성이 유지된다.
[ ] 비밀정보(Secret)가 새 문서에도 노출되지 않는다.
[ ] 문서 이동만으로 Runtime/Evidence/CLEAR 상태를 변경하지 않는다.
```

기존 단일 파일은 마이그레이션 중 임시로 유지할 수 있으나 최종 구조의 주 진입 문서로 계속 사용하지 않습니다.

### 9.1 기존 미션의 단계적 마이그레이션

기존 미션을 안전하게 전환할 때는 다음 순서를 허용합니다.

```text
1단계: 중앙 허브 정리
2단계: 모듈 디렉터리 + README 지역 목차 생성
3단계: 기존 상세 문서를 세부 학습 문서로 이동/분할
4단계: 기존 평면(flat) 문서 링크 제거
5단계: 링크·STEP·요구사항 누락 검증
```

단, 2단계까지만 끝난 상태는 **3계층 최종 구조 완료가 아니라 마이그레이션 진행 중**으로 기록합니다.

---

## 10. `BEGINNER READY` 강제 판정

다음 중 하나라도 해당하면 `BEGINNER READY = FAIL`입니다.

```text
모듈화 Trigger에 해당하지만 세부 STEP 전체가 한 파일에 남아 있음
모듈 디렉터리에 README 지역 목차가 없음
허브 → 모듈 README → 세부 학습 문서 이동이 끊김
모듈/세부 문서의 이전·다음 이동 경로가 없음
모듈 내부 세분화 Trigger에 해당하지만 문서가 계속 비대함
분할 과정에서 STEP/공식 요구/복구 내용이 누락됨
허브·모듈 README·세부 문서에 서로 다른 명령이 중복되어 기준이 갈림
비밀정보(Secret)가 노출됨
```

`BEGINNER READY`는 내부 문서 품질 상태이며 공식 Mission `CLEAR`와 별개입니다.

---

## 11. 기존 15개 미션 적용 순서

```text
현재 미션(Active Mission)
→ 다음 필수 미션(Required Mission)
→ 나머지 필수 미션
→ 선택 미션(Optional Mission)
```

각 미션은 **실제 실행(Runtime) 진입 전에 모듈화 Trigger와 모듈 내부 세분화 Trigger를 판정**합니다.

새로 만드는 가이드는 처음부터 이 3계층 구조를 사용합니다.

---

## 12. 정책(POLICY) → 적용(APPLY) → 검증(VERIFY)

```text
POLICY
메인 standards/에서 기준 정의
        ↓
APPLY
각 Mission Repository의 BEGINNER-GUIDE / guide 구조 반영
        ↓
VERIFY
실제 GitHub main을 다시 열어 링크·누락·중복·상태 확인
```

`반영 완료`는 원칙적으로 **적용 및 검증 완료(Applied & Verified)** 상태에서만 사용합니다.

---

## 13. B1-1 목표 기준 구조(Reference Pattern)

```text
BEGINNER-GUIDE.md

└── guide/
    ├── 00-overview/
    │   └── README.md
    ├── 01-preflight-baseline/
    │   ├── README.md
    │   ├── 01-baseline.md
    │   └── 02-prerequisites.md
    ├── 02-ssh-firewall/
    │   ├── README.md
    │   ├── 01-ssh.md
    │   └── 02-firewall.md
    ├── 03-users-groups-acl/
    │   ├── README.md
    │   └── 01-users-groups-acl.md
    ├── 04-agent-runtime/
    │   ├── README.md
    │   ├── 01-agent-setup.md
    │   └── 02-agent-runtime.md
    ├── 05-monitor-log/
    │   ├── README.md
    │   ├── 01-monitor-install.md
    │   └── 02-log-rotation.md
    ├── 06-cron-health-tests/
    │   ├── README.md
    │   ├── 01-cron.md
    │   └── 02-failure-warning.md
    ├── 07-verification-evidence/
    │   ├── README.md
    │   ├── 01-verification.md
    │   ├── 02-evidence.md
    │   └── 03-evaluation-qa.md
    └── 08-final-clear/
        ├── README.md
        └── 01-final-clear.md
```

B1-1을 포함한 기존 미션은 위 구조로 단계적으로 이동할 수 있지만, **모듈 README 지역 목차와 세부 학습 문서가 모두 연결되기 전에는 3계층 마이그레이션 완료로 표시하지 않습니다.**

---

## 14. 관련 기준

- [DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md)
- [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md)
- [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)
- [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md)
