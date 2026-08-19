# 코디세이 작업 운영 표준(Codyssey Working Operating Standard)

이 문서는 Codyssey Basic의 **메인 레포(Control Tower)와 각 미션 레포에서 공통으로 사용하는 상위 작업 운영 표준**입니다.

> 이 문서는 공식 미션(Mission), 평가(Evaluation), 제공 파일을 대체하지 않습니다. 세부 기준은 `standards/`의 전문 표준에 위임하며, 이 문서는 그 기준들을 실제 작업 순서로 묶는 **상위 운영 계약(Operating Contract)**입니다.

## 한눈에 보기(Quick Read)

```text
공식 기준 확인
→ 현재 Repository main 확인
→ 문서/환경 진입 Gate 확인
→ 실행 전 점검(Preflight)
→ 한 단계 실제 실행(Runtime Execution)
→ 실제 출력 확인
→ STOP / GO 판정
→ 검증(Verification)
→ 증빙 자료(Evidence)
→ 평가(Evaluation)
→ 최종 교차검증(Cross-check)
→ 조건 충족 시에만 Mission CLEAR
→ 다음 Mission
```

핵심 원칙:

```text
Reference Build ≠ Runtime PASS
Runtime PASS ≠ Verification PASS
Verification PASS ≠ Evidence Complete
Evidence Complete ≠ Mission CLEAR
문서 구조 완료 ≠ Mission CLEAR
```

---

## 📑 목차

- [0. 목적과 적용 범위](#scope)
- [1. 기준 우선순위와 단일 기준](#priority)
- [2. 상태 관리](#status)
- [3. 용어 표기](#terminology)
- [4. 문서 정보 구조](#ia)
- [5. 모듈화와 세분화](#modularization)
- [6. 모듈 README와 세부 학습 문서 계약](#module-contract)
- [7. 목차와 빠른 시작](#navigation)
- [8. 명령어·코드 설명](#command-code)
- [9. 실행 환경](#runtime-profile)
- [10. 실제 실행 프로토콜](#execution)
- [11. 시스템 변경 안전](#safety)
- [12. 보안·비밀정보](#security)
- [13. 검증·증빙·평가](#verification-evidence-evaluation)
- [14. Git·GitHub 변경 관리](#git)
- [15. 기존 문서 마이그레이션과 내용 무결성](#migration)
- [16. 공통 환경 마무리와 동결](#closeout)
- [17. 미션 진행 순서](#mission-order)
- [18. 메인 레포와 미션 레포 적용 방식](#adoption)
- [19. B1-1 기준 패턴](#reference-pattern)
- [20. 변경 관리](#change-management)

---

<a id="scope"></a>
## 0. 목적과 적용 범위

적용 대상:

```text
MetaStudy999/codyssey-basic                     = 메인 레포 / Control Tower
MetaStudy999/codyssey-basic-b*-*                = 각 Mission Repository
training/round-01-clear/                        = 현재 R01 실행·학습 단위
README / BEGINNER-GUIDE / guide / environment /
docs / evidence / CHECKLIST                     = 주요 적용 문서
```

이 표준의 목적은 다음 세 가지입니다.

1. 메인 레포와 미션 레포가 같은 작업 순서와 상태 언어를 사용합니다.
2. 입문자가 어느 미션에 들어가도 같은 탐색·실행·검증 구조를 만납니다.
3. 문서 개선과 실제 미션 수행을 분리하여 거짓 PASS/CLEAR를 방지합니다.

---

<a id="priority"></a>
## 1. 기준 우선순위와 단일 기준

```text
1. 공식 Mission / Evaluation / 제공 파일
2. 해당 Mission Repository 실제 main
3. Control Tower 실제 main
4. Control Tower standards/
5. Mission README / BEGINNER-GUIDE / guide / docs
6. 참고 자료
```

규칙:

- 공식 요구사항과 내부 표준이 충돌하면 공식 요구사항이 우선입니다.
- 내부 표준은 공식 평가기준을 추가·삭제·완화하지 않습니다.
- 예상 출력, 예시 출력, 과거 Round 결과를 현재 실제 결과로 사용하지 않습니다.
- 상세 실행 내용은 가능한 한 한 곳만 **단일 기준(Source of Truth)**으로 유지합니다.

---

<a id="status"></a>
## 2. 상태 관리

다음 상태를 분리합니다.

```text
Documentation Ready       문서 준비
BEGINNER READY            입문자 수행 경로 준비
Runtime PASS              실제 실행 통과
Verification PASS         검증 통과
Evidence Complete         증빙 완료
Evaluation Ready / PASS   평가 설명 준비/통과
Mission CLEAR             공식 필수 Gate 최종 완료
```

실제 수행 근거 없이 상위 상태로 승격하지 않습니다.

Mission의 대표 진행 상태는 필요에 따라 다음 네 상태를 사용합니다.

```text
⬜ NOT STARTED
🟡 ACTIVE
⛔ BLOCKED
✅ CLEAR
```

---

<a id="terminology"></a>
## 3. 용어 표기

입문자 대상 핵심 용어의 첫 등장은 다음 순서를 우선합니다.

```text
한글 의미
→ 영어 원어
→ 약어
→ 쉬운 한 줄 설명
→ 현재 미션에서의 의미
```

예:

```text
접근 제어 목록(Access Control List, ACL)
실행 환경(Runtime)
검증(Verification)
증빙 자료(Evidence)
명령줄 인터페이스(Command-Line Interface, CLI)
응용 프로그램 인터페이스(Application Programming Interface, API)
```

파일명, 명령어, 코드 식별자, 제품 공식명은 원문을 유지합니다.

세부 기준: `TERMINOLOGY-STANDARD.md`

---

<a id="ia"></a>
## 4. 문서 정보 구조

모듈화 대상 입문자 가이드는 다음 3계층 구조를 사용합니다.

```text
LEVEL 1 — 전체 중앙 허브(Global Hub)
BEGINNER-GUIDE.md
        ↓
LEVEL 2 — 모듈 목차(Module Table of Contents, Module TOC)
guide/<NN-topic>/README.md
        ↓
LEVEL 3 — 세부 학습 문서(Learning Unit)
guide/<NN-topic>/<NN-unit>.md
```

역할:

- `BEGINNER-GUIDE.md`: Quick Start, 전체 지도, 현재 상태, 모듈 이동.
- `guide/<module>/README.md`: 연관 개념과 STEP을 분류하는 지역 목차(Local TOC).
- `guide/<module>/<unit>.md`: 실제 개념·실습·명령·검증·복구의 상세 본문.

상세 명령을 허브와 모듈 README에 중복 복제하지 않습니다.

세부 기준: `BEGINNER-GUIDE-MODULARIZATION-STANDARD.md`, `README-INFORMATION-ARCHITECTURE-STANDARD.md`

---

<a id="modularization"></a>
## 5. 모듈화와 세분화

다음 중 하나라도 해당하면 전체 가이드 모듈화를 판정합니다.

```text
실행 STEP 8개 이상
100KB 이상
1,000줄 이상
여러 기술 관심사가 혼재
입문자가 현재 위치/다음 행동을 잃기 쉬움
```

모듈 내부 상세 문서는 다음 신호를 다시 확인합니다.

```text
50KB 이상
700줄 이상
독립 학습 단위 3개 이상
분리되는 기술 개념 또는 오류·복구 경로 2개 이상
탐색이 어려움
```

최종 분리 기준은 단순 파일 크기가 아니라 **기술적 응집도(Cohesion)**입니다. 한 STEP당 파일 하나를 기계적으로 강제하지 않습니다.

---

<a id="module-contract"></a>
## 6. 모듈 README와 세부 학습 문서 계약

모듈 `README.md`:

```text
모듈 제목
→ 목적/학습 목표
→ STEP 범위
→ 연관 개념별 지역 목차(Local TOC)
→ 세부 학습 문서 링크
→ 완료 조건
→ 이전 모듈 / 전체 허브 / 다음 모듈
```

세부 학습 문서(Learning Unit):

```text
① 왜 하는가
② 무엇을 하는가
③ 알아야 할 용어
④ 필요한 핵심 개념
⑤ 실행할 명령어 또는 코드
⑥ 명령어·코드 해설
⑦ 예상되는 정상 결과
⑧ 결과의 의미
⑨ 오류와 해결 방법
⑩ 완료 확인
```

실행형 문서에는 필요한 범위에서 다음도 포함합니다.

```text
실행 위치(Context)
실행 전 점검(Preflight)
STOP / GO
재실행 안전성(Rerun Safety)
중간 저장점(Checkpoint)
복구(Recovery)
이전/다음 탐색
비용·자원 보호(Cost / Resource Guard)
```

---

<a id="navigation"></a>
## 7. 목차와 빠른 시작

- 긴 문서와 여러 섹션을 가진 문서는 클릭 가능한 목차를 우선합니다.
- 실행형 대표 문서는 안전한 빠른 시작(Quick Start) 또는 동등한 빠른 진입 경로를 둡니다.
- Quick Start는 처음 시작하는 사람과 재진입하는 사람의 경로를 구분합니다.
- Quick Start는 Preflight, STOP/GO, Secret/비용 보호를 우회하지 않습니다.
- Firewall, Reset, DB destructive, 고비용 Cloud/API 작업을 Quick Start에 무분별하게 넣지 않습니다.
- 구조 변경 후 실제 GitHub `main`에서 링크를 다시 확인합니다.

세부 기준: `DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md`

---

<a id="command-code"></a>
## 8. 명령어·코드 설명

학습자가 직접 실행하는 Shell 명령은 다음을 이해할 수 있어야 합니다.

```text
명령 목적
중요 옵션
인자/입력값
sudo가 필요한 이유
pipe / redirection / && / || / loop 등 복합 구문
정상 결과와 변동 가능한 값
재실행 영향
위험과 복구
```

Python, JavaScript, SQL, YAML, JSON, Nginx, systemd 등도 **의미 있는 코드/설정 단위**를 설명합니다. 빈 줄이나 단순 닫는 괄호를 기계적으로 과잉 설명하지 않습니다.

세부 기준: `COMMAND-CODE-EXPLANATION-STANDARD.md`

---

<a id="runtime-profile"></a>
## 9. 실행 환경

R01 기본 프로필:

```text
Primary
macOS → OrbStack → Ubuntu 24.04 → Bash

Secondary
Windows 11 Pro → WSL2 → Ubuntu 24.04 → Bash

Docker
선택 실습(Lab). 공식 미션이 요구하지 않으면 CLEAR Gate로 승격하지 않음
```

기본 저장소 위치:

```text
$HOME/codyssey/<repository>
```

항상 Host와 Linux Runtime, Repository, Branch, 권한, 가상환경(venv) 여부를 구분합니다.

세부 기준: `ENVIRONMENT-STANDARD.md`, `DEVELOPMENT-TOOLSET-STANDARD.md`, `VS-CODE-REMOTE-UBUNTU-STANDARD.md`

---

<a id="execution"></a>
## 10. 실제 실행 프로토콜

실제 Runtime에서는 **한 번에 하나의 의미 있는 단계**를 진행합니다.

```text
1. Preflight
2. 한 명령 또는 한 논리 블록 제시
3. 명령 목적/위험/정상 기준 설명
4. 사용자가 실제 실행
5. 실제 출력 확보
6. PASS / FAIL 판정
7. PASS → 다음 단계
8. FAIL → STOP → 원인 분석 → 최소 수정 → 재검증
```

사용자의 실제 출력 없이 PASS/CLEAR를 추정하지 않습니다.

---

<a id="safety"></a>
## 11. 시스템 변경 안전

상태를 변경하는 작업의 기본 순서:

```text
현재 상태 확인
→ 백업
→ Checkpoint
→ 최소 변경
→ 문법/정적 검사
→ Effective Configuration 확인
→ 적용
→ 실제 동작/새 연결 확인
→ 기존 안전 경로 정리
→ 실패 시 Recovery
```

SSH, UFW, Cloud, DB, 사용자/권한, 삭제·Reset 작업에는 특히 이 순서를 우선합니다.

---

<a id="security"></a>
## 12. 보안·비밀정보

비밀정보(Secret)는 값을 보여 주지 않고 가능한 한 **존재·경로·소유권·그룹·권한·크기 등 메타데이터**만 검증합니다.

금지 예:

```text
Secret 값 채팅/README/Evidence 저장
cat/head/tail/strings로 Secret 내용 출력
set -x 상태에서 Secret 처리
Token/Password/API Key/Private Key를 Git 추적
```

노출 이력이 있으면 단순 파일 삭제만으로 끝내지 않고 Secret 교체와 History 대응을 검토합니다.

---

<a id="verification-evidence-evaluation"></a>
## 13. 검증·증빙·평가

기본 추적 관계:

```text
Requirement
→ Implementation
→ Verification
→ Evidence
→ Evaluation
```

검증(Verification):
- 정적 검사와 실제 Runtime 검증을 구분합니다.
- 자동 검증 범위 밖의 항목을 별도 실제 Evidence로 확인합니다.
- `0 FAIL` 하나만으로 Mission CLEAR를 선언하지 않습니다.

증빙 자료(Evidence):
- 현재 Round의 실제 결과만 사용합니다.
- 예상 출력이나 과거 결과를 현재 Evidence로 사용하지 않습니다.
- Repository/Branch/Commit/수집 시각과 연결합니다.
- Secret을 제거한 뒤 보존합니다.

평가(Evaluation):
- 공식 평가문항을 우선합니다.
- 기준 답안을 암기하는 것이 아니라 실제 구현·검증·Evidence를 자기 말로 설명합니다.

세부 기준: `CANONICAL-REFERENCE-STANDARD.md`

---

<a id="git"></a>
## 14. Git·GitHub 변경 관리

수정 전:

```text
최신 main 재확인
→ 대상 파일 현재 SHA 확인
→ 변경 범위 최소화
```

수정 후:

```text
Commit
→ 실제 GitHub main 다시 열기
→ 링크/경로/상태/중복/누락 확인
→ APPLY & VERIFY 완료 후에만 "반영 완료" 기록
```

하나의 변경 작업은 가능한 한 하나의 의미를 갖게 합니다. 관련 없는 파일을 함께 수정하지 않습니다.

기본 운영 순서:

```text
POLICY → APPLY → VERIFY
```

---

<a id="migration"></a>
## 15. 기존 문서 마이그레이션과 내용 무결성

기존 대형 문서를 분할할 때:

```text
기존 본문 분석
→ 모듈 경계 결정
→ 모듈 README 생성
→ Learning Unit으로 이동/분할
→ 새 탐색 링크 연결
→ STEP/요구사항/명령/Recovery/Evidence 누락 검사
→ 기존 링크 호환 처리
→ 실제 GitHub 링크 재검증
```

보존 대상:

```text
공식 요구사항
STEP
명령/코드
STOP / GO
Checkpoint / Recovery
Rerun Safety
Secret 보호
Verification / Evidence 연결
Runtime/CLEAR 상태의 사실성
```

호환 파일은 오래된 링크를 위한 안내만 유지하고 상세 본문을 중복하지 않습니다.

---

<a id="closeout"></a>
## 16. 공통 환경 마무리와 동결

현재 공통 환경 마무리(Common Environment Closeout)는 다음 Gate를 사용합니다.

```text
Gate 1 — Documentation Drift
Gate 2 — Primary Bootstrap Runtime Verification
Gate 3 — Git/GitHub User Identity Readiness
Gate 4 — Bash Static Syntax Validation
        ↓
COMMON ENVIRONMENT FREEZE
        ↓
Mission Runtime
```

Freeze 이후에는 현재 Mission CLEAR를 막는 문제만 최소 수정하고, 비차단 고도화는 후속 개선으로 미룹니다.

---

<a id="mission-order"></a>
## 17. 미션 진행 순서

R01 FAST TRACK:

```text
Stage 1 — Required
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — Optional
B4-2 → B5-2 → B5-3 → B7-2
```

운영 원칙:

- 현재 Active Mission을 먼저 닫습니다.
- 다음 Mission은 실제 진입 직전에 문서·환경·모듈화 Trigger를 감사합니다.
- 현재 Mission이 CLEAR되기 전 다음 Mission Runtime을 정식 시작하지 않습니다.
- 표준은 공통으로 사용하되 각 미션의 공식 요구와 기술 성격에 따라 모듈 수와 세부 구조를 조정합니다.

---

<a id="adoption"></a>
## 18. 메인 레포와 미션 레포 적용 방식

### 메인 레포(Control Tower)

이 파일이 상위 작업 운영 기준입니다.

```text
standards/CODYSSEY-WORKING-OPERATING-STANDARD.md
```

전문 세부 규칙은 기존 `standards/*.md`를 사용합니다.

### 각 미션 레포

각 Mission Repository에는 다음의 얇은 어댑터(Thin Adapter)를 둡니다.

```text
WORKING-RULES.md
```

Mission Adapter의 역할:

```text
공식 Mission/Evaluation 우선 선언
→ Control Tower 상위 표준 링크
→ 현재 Mission의 Source/README/BEGINNER-GUIDE/CHECKLIST 연결
→ 현재 상태와 Runtime Gate 확인
→ Mission 특화 예외/주의사항만 기록
```

**상위 작업 표준 전문을 15개 저장소에 복사하지 않습니다.** 중앙 표준 하나를 유지하고 각 미션은 링크와 Mission-specific 차이만 갖습니다. 이렇게 해야 표준 변경 시 중복·Drift를 줄일 수 있습니다.

---

<a id="reference-pattern"></a>
## 19. B1-1 기준 패턴

B1-1에서 검증한 문서 구조는 후속 Mission의 참고 패턴입니다.

```text
BEGINNER-GUIDE.md
└── guide/
    ├── 00-overview/README.md
    ├── 01-<topic>/
    │   ├── README.md
    │   ├── 01-<unit>.md
    │   └── 02-<unit>.md
    ├── ...
    └── 08-final-clear/
        ├── README.md
        └── 01-final-clear.md
```

B1-1의 파일 수나 모듈 이름을 다른 미션에 그대로 강제하지 않습니다. **Global Hub → Module TOC → Learning Unit**의 역할 분리와 실행 안전 원칙을 재사용합니다.

---

<a id="change-management"></a>
## 20. 변경 관리

표준 변경은 다음 순서를 사용합니다.

```text
1. 공식 요구와 충돌 여부 확인
2. 상위 표준 수정
3. 관련 전문 표준과 충돌 확인
4. 현재 Active Mission 영향 확인
5. 필요한 Mission Adapter/문서에 APPLY
6. 실제 GitHub main에서 VERIFY
7. Runtime blocker이면 즉시 최소 교정
8. 비차단 개선은 실제 미션 순서에 맞춰 순차 반영
```

이 표준 자체가 실제 미션 수행보다 큰 병목이 되지 않도록 합니다.

---

## 관련 전문 표준

- `BEGINNER-TRAINING-STANDARD.md`
- `README-INFORMATION-ARCHITECTURE-STANDARD.md`
- `DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md`
- `BEGINNER-GUIDE-MODULARIZATION-STANDARD.md`
- `BEGINNER-DOCUMENTATION-AUDIT.md`
- `COMMAND-CODE-EXPLANATION-STANDARD.md`
- `DEVELOPMENT-TOOLSET-STANDARD.md`
- `TERMINOLOGY-STANDARD.md`
- `CANONICAL-REFERENCE-STANDARD.md`
- `ENVIRONMENT-STANDARD.md`
- `CROSS-PLATFORM-GIT-STANDARD.md`
- `VS-CODE-REMOTE-UBUNTU-STANDARD.md`

## 최종 운영 문장

> **공식 요구사항을 절대 우선하고, 문서는 전체 허브 → 모듈 목차 → 세부 학습 문서로 관리하며, 실제 작업은 실행 전 점검 → 한 단계 실행 → 실제 출력 확인 → 검증 → 증빙 → 평가 → 완료 순으로 진행하고, 실제 결과가 없는 상태에서는 PASS/CLEAR를 선언하지 않는다.**
