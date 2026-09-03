# Mission Runbook

모든 미션은 같은 원칙으로 진행합니다. Round 01은 속도와 학습 품질을 함께 확보하기 위해 **Reference Build와 실제 실행 완료(Runtime CLEAR)를 분리**합니다.

> 현재 Mission ID(미션 번호)의 단일 기준은 [CURRENT-MISSION-MAP.md](CURRENT-MISSION-MAP.md)입니다. Repository(저장소)는 번호와 분리된 주제 기반 Canonical Repository를 사용합니다.

## 🚀 빠른 시작(Quick Start)

현재 R01은 **Phase C — RUNTIME CLEAR / FAST EXECUTE**입니다.

현재 Workcell 포커스:

```text
B2-2 = 🟡 ACTIVE
B4-1 = ⏸ PAUSED / READY TO RESUME   # 이전 B1-1 시스템 관제
```

처음 실행한다면 다음 문서를 순서대로 봅니다.

1. [현재 Mission ID 기준표](CURRENT-MISSION-MAP.md)
2. [개발환경 Start Here](environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)
3. [현재 Next Actions](training/round-01-clear/NEXT-ACTIONS.md)
4. [B2-2 입문자 따라하기](https://github.com/MetaStudy999/codyssey-basic-git-collaboration/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)

한 미션은 다음 흐름으로 처리합니다.

```text
현재 실행 환경(Current Runtime Context) 선택
→ 실행 전 점검(Preflight)
→ 입문자 가이드(Beginner Guide)
→ 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ 플랫폼별 Runtime Record 갱신
→ 평가 설명(Evaluation)
→ 완료 판정(CLEAR Gate)
→ 다음 미션
```

> 빠른 시작(Quick Start)은 운영 계약을 생략하는 경로가 아닙니다. 시스템·Cloud·DB·Secret 관련 변경은 각 상세 Guide의 실행 전 점검(Preflight) / STOP-GO / 복구(Recovery)를 따릅니다.

## 📑 목차

- [Round 01 — 3-Phase 운영](#round-01)
- [Phase C — Design Freeze / JIT Design](#phase-c-freeze)
- [R01 Runtime / Docker 정책](#runtime-policy)
- [1. 이해(UNDERSTAND)](#understand)
- [2. 준비(PREPARE)](#prepare)
- [3. 구현(BUILD)](#build)
- [4. 검증(Verification)](#verify)
- [5. 증빙(Evidence)](#evidence)
- [6. 완료(CLEAR)](#clear)
- [상태](#status)

---

<a id="round-01"></a>
## Round 01 — 3-Phase 운영

> `Phase A / Phase B / Phase C`는 코디세이 공식 교육과정의 공식 단계명이 아니라, 이 저장소에서 `R01 — CLEAR`를 일관되게 운영하기 위해 사용하는 **내부 실행 단계**입니다. 공식 Mission/Evaluation이 항상 최우선 기준입니다.

```text
Phase A = 기준 구현·가이드 준비
Phase B = 15개 미션 전체 교차 점검
Phase C = 실제 실행(Runtime) → 검증(Verification) → 증빙(Evidence) → 완료(CLEAR)
```

### Phase A — REFERENCE BUILD

1. 공식 Mission PDF/MD/Evaluation/제공 파일 확인
2. 필수/선택 요구사항 분리
3. Requirement → Implementation → Verification → Evidence 설계
4. 기준 구현과 학습 자료 준비
5. `BEGINNER-GUIDE.md`, `CHECKLIST.md` 구체화
6. Secret 노출 점검
7. 실제 Runtime이 필요한 항목을 명확히 남김

Reference Build가 완료되어도 실제 Runtime과 Evidence가 없으면 Mission을 `CLEAR`로 변경하지 않습니다.

### Phase B — CROSS-MISSION AUDIT

15개 미션의 Reference Build가 준비된 뒤 다음 연결성을 검토합니다.

- 공통 개발환경과 버전
- 포트/서비스 충돌
- Python/Node/DB/Cloud 구성
- Secret 정책
- Git/브랜치 운영
- 미션 간 선후관계
- 중복 설정과 불필요한 반복

현재 미션 통과와 관계없는 고도화는 후속 Round로 미룹니다.

### Phase C — RUNTIME CLEAR

Phase C는 **FAST EXECUTE** 모드입니다.

```text
이해
→ Current Runtime Context 선택
→ 직접 실행
→ 검증
→ 오류 해결
→ 증빙(Evidence)
→ 플랫폼별 수행 기록
→ 평가 확인
→ 완료(CLEAR)
```

현재 미션의 실제 실행에 집중하며 한 번에 여러 미션의 실행 상태를 섞지 않습니다.

---

<a id="phase-c-freeze"></a>
## Phase C — Design Freeze / Just-in-Time Design

Phase A/B에서 전체 설계와 교차감사를 완료했으므로 Phase C에서는 새로운 설계를 계속 확장하지 않습니다.

```text
이 문제가 현재 Mission CLEAR를 막는가?

YES
→ 원인 확인
→ 필요한 범위만 최소 수정
→ 재검증
→ 증빙(Evidence)
→ 실제 실행 계속

NO
→ 현재 실제 실행 유지
→ 후속 개선 후보로 미룸
```

즉시 수정 대상:

- 공식 Mission/Evaluation 요구사항 충족을 막는 문제
- 실제 실행 BLOCKER
- Secret/Token/Password 노출 위험
- SSH lockout, 데이터 손실, Cloud 과금/삭제 등 안전 문제
- 검증 또는 증빙 오판정
- Current Runtime Context를 잘못 해석하게 만드는 문서 오류
- 현재 Mission ID와 Canonical Repository 연결을 잘못 안내하는 문서 오류

후속으로 미루는 대상:

- 현재 CLEAR와 무관한 리팩터링
- UI/UX 고도화
- 실행을 막지 않는 문서 미세 개선
- 선택 기능 확장
- 다음 Round 심화 기술

---

<a id="runtime-policy"></a>
## R01 실제 실행(Runtime) / Docker 정책

R01은 다음 두 직접 Linux Runtime을 동등하게 지원합니다.

```text
학교 macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine
└─ MAC-D: Docker

개인 노트북 Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct Linux Runtime
└─ WIN-D: Docker
```

상세 계약:

- `environments/RUNTIME-PROFILES.md`
- `environments/MISSION-LAB-MATRIX.md`
- `training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`
- `environments/DOCKER-POLICY.md`

### MAC-V / WIN-V 동일 기준

```text
MAC-V / WIN-V
= 동등한 지원 실행 환경(Supported Runtime)

Mission CLEAR
= 공식 Mission/Evaluation
+ 필요한 실제 Runtime
+ Verification
+ Evidence
```

`MAC-V`와 `WIN-V`는 합격 우선순위의 Primary/Secondary 관계가 아닙니다.

작업 시작 시 사용자가 현재 수행 환경을 알려 주면 그 환경을 **현재 실행 환경(Current Runtime Context)**으로 사용합니다.

```text
학교 Mac → MAC-V
노트북 Win11 → WIN-V
```

### 환경 유지 방식의 차이

MAC-V:

```text
Resettable / Ephemeral
→ CHECK BEFORE INSTALL
→ 살아 있으면 재설치 생략
→ Reset되었으면 필요한 항목만 재구성
```

WIN-V:

```text
Persistent
→ VERIFY BEFORE REINSTALL
→ 기존 WSL2/Repository 보존
→ 문제 있을 때만 최소 Repair
```

### 플랫폼별 수행 기록

각 Mission에서 다음을 별도로 기록합니다.

```text
MAC-V Runtime Record
WIN-V Runtime Record
Mission CLEAR
CROSS-PLATFORM VERIFIED
```

공식 Mission/Evaluation이 두 플랫폼 모두를 요구하지 않는 한, 한 지원 환경에서 공식 요구를 충족하면 다른 환경 미수행을 이유로 CLEAR를 자동 차단하지 않습니다.

두 환경 모두 실제 PASS하면 내부 품질 상태로 `CROSS-PLATFORM VERIFIED`를 기록할 수 있습니다.

학교 Mac이 Reset되어도 과거의 추적 가능한 MAC-V PASS Evidence는 자동으로 FAIL이 되지 않습니다. 현재 장비 재현 상태와 과거 수행 기록을 분리합니다.

### Docker

Docker는 선택 Training Layer입니다.

```text
Docker 미수행 ≠ Mission FAIL
Docker 미수행 ≠ Mission BLOCKED
Docker 사용 여부 ≠ Mission CLEAR 판정
```

공식 Mission/Evaluation이 Docker를 요구하는 경우에만 공식 요구가 우선합니다.

---

<a id="understand"></a>
## 1. 이해(UNDERSTAND)

1. 공식 Mission PDF 확인
2. Mission MD 확인
3. Evaluation 확인
4. 필수/선택 요구사항 분리
5. 현재 Step에 필요한 용어 설명
6. 핵심 개념과 필요한 개념도 제공
7. 긴 실행형 Guide의 Quick Start와 목차 정합성 확인
8. `MISSION-METADATA.yml`과 Control Tower의 현재 Mission ID 정합성 확인

<a id="prepare"></a>
## 2. 준비(PREPARE)

1. 현재 실행 환경(Current Runtime Context)을 `MAC-V` 또는 `WIN-V`로 확인
2. Host / Ubuntu / Repository / Branch / Commit 확인
3. 환경 버전과 사전조건 확인
4. Bootstrap / Git·GitHub Identity 확인
5. 시스템 파일 변경 시 백업
6. Secret은 Repository에 저장하지 않음
7. `START-CHECK.md`가 있으면 선행 조건 확인
8. 실행 위치(Context), Preflight, STOP/GO, Rerun Safety 확인
9. Docker는 선택 여부만 판단
10. 현재 Mission ID와 주제 기반 Repository가 일치하는지 확인

<a id="build"></a>
## 3. 구현(BUILD)

1. Phase A에서 준비된 최소 통과 경로를 기본값으로 사용
2. 입문자는 `BEGINNER-GUIDE.md` Step 순서대로 수행
3. 실행 가능한 명령과 의미 있는 코드 줄을 자기 말로 설명할 수 있게 해설
4. 현재 미션 CLEAR와 관계없는 고도화는 뒤로 미룸
5. 실제 실행 중 새 설계가 필요하면 CLEAR를 막는 범위까지만 수정
6. 환경별 코드 복제는 최소화

<a id="verify"></a>
## 4. 검증(Verification)

### Reference Build 검증

- 요구사항 누락 확인
- 문법/정적 검사
- 코드·문서 일치성
- Secret 노출
- 실제 실행하지 않은 항목을 PASS로 표시하지 않았는지 확인
- 현재 Mission ID ↔ Repository Metadata 정합성 확인

### 실제 실행 검증(Runtime Verification)

1. 선택된 Current Runtime Context에서 실제 실행
2. `PASS / FAIL` 판정을 명확히 표시
3. 실패 시 원인 → 확인 → 최소 해결 → 재검증
4. 예상 출력과 실제 출력을 구분
5. 실제 결과가 정상이라면 Evidence로 이동
6. MAC-V의 결과를 WIN-V PASS로 대신 사용하지 않음
7. WIN-V의 결과를 MAC-V PASS로 대신 사용하지 않음
8. Docker Lab을 직접 Linux Runtime PASS와 혼동하지 않음

<a id="evidence"></a>
## 5. 증빙(Evidence)

기본 관계:

```text
Requirement
→ Implementation
→ Verification
→ Evidence
```

플랫폼별 PASS Evidence에는 최소한 다음을 연결합니다.

```text
Runtime Profile
Host / Linux Runtime
Mission
Repository / Branch / Commit
Executed At
Verification Result
Evidence Path
```

각 Mission에서 실제 Evidence를 만들 때 필요하면 다음처럼 분리합니다.

```text
training/round-01-clear/evidence/
├── mac-v/
└── win-v/
```

실제 수행 전 빈 디렉터리를 형식 때문에 미리 만들지 않습니다.

Secret, Token, Password, Private Key는 Evidence에 노출하지 않습니다.

플랫폼별 중앙 수행 상태는 [`training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)에서 관리합니다.

<a id="clear"></a>
## 6. 완료(CLEAR)

Mission CLEAR는 다음이 실제로 충족되었을 때만 기록합니다.

```text
공식 필수 요구사항
+ 실제 Runtime
+ Verification
+ 필요한 Evidence
+ Evaluation 설명 가능
+ Secret 보호
```

플랫폼별 추가 상태:

```text
MAC-V PASS
WIN-V PASS
CROSS-PLATFORM VERIFIED
```

한 지원 환경에서 Mission CLEAR를 확보한 후 다른 지원 환경에서 재수행하여 Cross-platform Verification을 추가할 수 있습니다. 공식 요구가 없다면 이 추가 검증 때문에 다음 Mission 진도를 자동 차단하지 않습니다.

<a id="status"></a>
## 상태

Mission 상태:

```text
⬜ NOT STARTED
🟡 ACTIVE
⏸ PAUSED / READY TO RESUME
⛔ BLOCKED
✅ CLEAR
```

플랫폼 Runtime Record:

```text
⬜ NOT RUN
🟡 PENDING
✅ PASS
❌ FAIL
```

현재 장비 재현 상태가 필요한 경우:

```text
READY
STALE
REBUILD NEEDED
```

`STALE`은 과거 PASS Evidence가 있지만 현재 장비 상태를 다시 확인해야 한다는 뜻이며, 과거 PASS를 FAIL로 바꾸지 않습니다.
