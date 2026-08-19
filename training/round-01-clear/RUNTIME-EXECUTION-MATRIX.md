# R01 실행 환경별 수행 기록(Runtime Execution Matrix)

이 문서는 R01의 각 미션을 **어느 지원 실행 환경(Supported Runtime)에서 실제 수행했는지** 기록하는 중앙 상태표입니다.

> 이 표는 플랫폼별 수행 기록(Runtime Record)을 관리합니다. 공식 미션 완료(Mission CLEAR) 판정은 하나이며, `MAC-V`와 `WIN-V`의 수행 여부와 별도로 관리합니다.

## 🚀 빠른 확인(Quick Read)

```text
Mission CLEAR               = 공식 Mission/Evaluation 충족 여부
MAC-V Runtime Record        = 학교 Mac → OrbStack → Ubuntu 24.04 실제 수행 기록
WIN-V Runtime Record        = 개인 노트북 Windows 11 Pro → WSL2 → Ubuntu 24.04 실제 수행 기록
CROSS-PLATFORM VERIFIED     = 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS
```

현재 Workcell 포커스:

```text
B1-1 = ⏸ PAUSED / READY TO RESUME
B2-2 = 🟡 ACTIVE
```

B1-1 일시정지는 FAIL 또는 CLEAR가 아닙니다. B2-2의 현재 문서/Simulation 준비도 실제 팀 Runtime PASS를 의미하지 않습니다.

핵심 원칙:

```text
플랫폼별 수행 기록 ≠ Mission CLEAR

MAC-V PASS + 공식 요구 충족 → Mission CLEAR 가능
WIN-V PASS + 공식 요구 충족 → Mission CLEAR 가능
MAC-V PASS + WIN-V PASS     → CROSS-PLATFORM VERIFIED 가능
```

공식 Mission/Evaluation이 특정 플랫폼 또는 두 플랫폼 모두를 요구한다면 공식 요구가 이 내부 운영 규칙보다 우선합니다.

---

## 📑 목차

- [지원 실행 환경](#supported-runtime)
- [현재 R01 수행 기록](#matrix)
- [상태 정의](#status)
- [현재 실행 환경 선택 규칙](#current-context)
- [학교 Mac Reset 규칙](#mac-reset)
- [Windows 11 지속 환경 규칙](#win-persistent)
- [증빙 자료 기록 규칙](#evidence)
- [교차 플랫폼 검증](#cross-platform)
- [업데이트 규칙](#update)

---

<a id="supported-runtime"></a>
## 지원 실행 환경(Supported Runtime)

### MAC-V

```text
학교 macOS Host
→ OrbStack
→ Ubuntu 24.04
→ Mission Runtime
```

환경 성격: **초기화 가능 환경(Resettable / Ephemeral Environment)**

학교 정책이나 장비 초기화로 설치 상태가 자주 사라질 수 있으므로 매 작업 시작 시 현재 상태를 다시 확인합니다.

### WIN-V

```text
개인 노트북 Windows 11 Pro Host
→ WSL2
→ Ubuntu 24.04
→ Mission Runtime
```

환경 성격: **지속 실행 환경(Persistent Runtime Environment)**

기존 설치 상태와 Repository를 보존하며, 재설치보다 검증(Verification)과 최소 복구(Repair)를 우선합니다.

`MAC-V`와 `WIN-V`는 **합격 등급의 Primary/Secondary 관계가 아닙니다.** 둘 다 R01에서 사용할 수 있는 지원 실행 환경이며, 실제 작업할 때 사용자가 알려 준 현재 환경(Current Runtime Context)을 선택합니다.

---

<a id="matrix"></a>
## 현재 R01 수행 기록

> 현재 표는 **미션 실제 실행(Runtime Execution) 기록**만 나타냅니다. 개발환경 Bootstrap, Git/GitHub Identity 확인, Simulation 문서 준비를 미션 Runtime PASS로 계산하지 않습니다.

| 순서 | 미션 | MAC-V | WIN-V | 교차 플랫폼 | Mission / Workcell 상태 |
|---:|---|---|---|---|---|
| 1 | B1-1 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⏸ PAUSED / READY TO RESUME |
| 2 | B1-2 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 3 | B2-1 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 4 | B2-2 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | 🟡 ACTIVE |
| 5 | B3-1 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 6 | B3-2 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 7 | B4-1 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 8 | B5-1 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 9 | B6-1 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 10 | B6-2 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 11 | B7-1 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 12 | B4-2 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 13 | B5-2 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 14 | B5-3 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |
| 15 | B7-2 | ⬜ NOT RUN | ⬜ NOT RUN | ⬜ NOT VERIFIED | ⬜ NOT STARTED |

B2-2의 현재 5계정 MAC-V/WIN-V Simulation은 별도 학습 트랙입니다. 실제 Simulation Runtime이 시작되어도 공식 팀 Runtime Record와 Evidence를 자동으로 PASS 처리하지 않습니다.

---

<a id="status"></a>
## 상태 정의

### 플랫폼별 Runtime Record

```text
⬜ NOT RUN
= 해당 환경에서 미션 실제 실행을 아직 시작하지 않음

🟡 PENDING
= 해당 환경에서 미션 실행 또는 검증 진행 중

✅ PASS
= 해당 환경에서 실제 실행·검증이 성공하고 추적 가능한 Evidence가 있음

❌ FAIL
= 해당 환경에서 실제 실행 또는 검증 실패
```

### 현재 환경 재현성 상태

필요하면 플랫폼별 Runtime Record와 별도로 다음 상태를 기록합니다.

```text
READY
= 현재 장비에서 바로 재실행 가능한 상태

STALE
= 과거 PASS Evidence는 존재하지만 현재 장비가 Reset/변경되어 재현 상태를 다시 확인해야 함

REBUILD NEEDED
= 현재 장비의 실행 환경을 다시 구성해야 함
```

`STALE` 또는 `REBUILD NEEDED`는 **과거의 실제 PASS Evidence를 FAIL로 바꾸지 않습니다.** 과거 수행 기록과 현재 장비 상태를 분리합니다.

### Mission / Workcell 상태

```text
⬜ NOT STARTED
= 해당 미션 실제 실행 Workcell 미시작

🟡 ACTIVE
= 현재 실제 수행/검증 또는 공식 수행 준비의 주 Workcell

⏸ PAUSED / READY TO RESUME
= 현재 실행을 일시정지했지만 FAIL/CLEAR가 아니며 재개 가능한 상태

⛔ BLOCKED
= 실제 의존성 때문에 진행 불가

✅ CLEAR
= 공식 요구 + 실제 Runtime + Verification + 필요한 Evidence 완료
```

Mission CLEAR는 공식 Mission/Evaluation의 필수 조건, 실제 Runtime, 검증(Verification), 필요한 증빙 자료(Evidence)를 충족했을 때만 기록합니다.

---

<a id="current-context"></a>
## 현재 실행 환경(Current Runtime Context) 선택 규칙

작업을 시작할 때 사용자가 현재 환경을 알려 주면 해당 프로필을 선택합니다.

예:

```text
"학교 Mac에서 진행합니다."
→ Current Runtime Context = MAC-V

"노트북 Win11에서 진행합니다."
→ Current Runtime Context = WIN-V
```

선택된 환경에 맞춰 설치·검증 경로만 달라지고, 다음 기준은 동일합니다.

```text
공식 Mission 요구사항
Evaluation
코드/기능 기준
Verification
Evidence
Secret 보호
Mission CLEAR
```

---

<a id="mac-reset"></a>
## 학교 Mac Reset 규칙

MAC-V는 Reset 가능성을 기본 전제로 합니다.

```text
현재 환경 확인
→ Ubuntu/Repository/Bootstrap이 살아 있으면 재설치 생략
→ Reset되었으면 필요한 항목만 재구성
→ Bootstrap/Identity 확인
→ Mission Runtime
```

기본 원칙:

```text
CHECK BEFORE INSTALL
```

Repository도 매번 Clone하지 않습니다.

```text
Repository 있음  → git status / branch / 최신 상태 확인
Repository 없음  → clone
```

학교 Mac이 나중에 Reset되어도 이미 확보한 과거 MAC-V Runtime PASS와 Evidence는 유지합니다. 새 실행에서는 새 Runtime Context와 새 Evidence를 별도로 기록합니다.

---

<a id="win-persistent"></a>
## Windows 11 지속 환경 규칙

WIN-V는 기존 상태 보존을 기본으로 합니다.

```text
기존 환경 확인
→ Verification
→ 문제 없으면 그대로 사용
→ 문제가 있을 때만 최소 Repair
→ Mission Runtime
```

기본 원칙:

```text
VERIFY BEFORE REINSTALL
```

WSL2 Ubuntu, Repository, `.venv`, Git/GitHub 설정 등을 정상 상태인데도 매 작업마다 재설치하지 않습니다.

---

<a id="evidence"></a>
## 증빙 자료(Evidence) 기록 규칙

플랫폼별 PASS를 기록할 때 최소한 다음 항목을 연결합니다.

```text
Runtime Profile : MAC-V 또는 WIN-V
Host            : 실제 Host 정보
Linux Runtime   : Ubuntu 버전/환경
Mission         : Bx-x
Repository      : 저장소
Branch          : 실제 Branch
Commit          : 실제 Commit SHA
Executed At     : 실제 수행 시각
Verification    : 실제 검증 결과
Evidence Path   : 실제 증빙 위치
```

각 Mission Repository에서 실제 Evidence를 만들 때는 필요에 따라 다음 구조를 사용할 수 있습니다.

```text
training/round-01-clear/evidence/
├── mac-v/
│   └── ... actual evidence ...
└── win-v/
    └── ... actual evidence ...
```

빈 형식만 맞추기 위해 15개 Mission에 빈 디렉터리를 미리 생성하지 않습니다. 해당 환경에서 실제 Runtime을 수행할 때 생성합니다.

Secret, Token, Password, Private Key의 실제 값은 플랫폼별 Evidence에도 기록하지 않습니다.

---

<a id="cross-platform"></a>
## 교차 플랫폼 검증(Cross-platform Verification)

다음 조건을 모두 충족하면 내부 품질 상태로 `✅ CROSS-PLATFORM VERIFIED`를 사용할 수 있습니다.

```text
[ ] 같은 R01의 MAC-V 실제 Runtime PASS
[ ] 같은 R01의 WIN-V 실제 Runtime PASS
[ ] 두 기록 모두 Repository / Branch / Commit / Verification / Evidence 추적 가능
[ ] 두 환경 모두 공식 필수 요구사항을 충족하는 구현을 검증
```

가능하면 동일한 구현 Commit을 두 환경에서 검증합니다. 서로 다른 Commit에서 수행했다면 각 Commit을 모두 기록하고, 구현 차이가 공식 요구 충족에 영향을 주지 않는지 확인하기 전에는 `CROSS-PLATFORM VERIFIED`로 승격하지 않습니다.

`CROSS-PLATFORM VERIFIED`는 추가적인 내부 품질·재현성 기록이며, 공식 Mission/Evaluation이 두 플랫폼을 요구하지 않는 한 Mission CLEAR의 필수 조건이 아닙니다.

---

<a id="update"></a>
## 업데이트 규칙

플랫폼 상태는 실제 실행 결과가 있을 때만 변경합니다.

```text
실제 실행 전        → NOT RUN
실행/검증 진행 중   → PENDING
실제 PASS + Evidence → PASS
실제 실패           → FAIL
```

Mission CLEAR와 플랫폼 기록을 동시에 추정하여 변경하지 않습니다.

업데이트 순서:

```text
현재 Workcell 선택
→ 실제 Runtime
→ Verification
→ Evidence 저장
→ 해당 MAC-V 또는 WIN-V Runtime Record 갱신
→ 공식 Mission Gate 재평가
→ 조건 충족 시 Mission CLEAR
→ 두 환경 PASS이면 Cross-platform Verification 판정
```

관련 기준:

- `../../WORKING-RULES.md`
- `../../standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`
- `../../environments/RUNTIME-PROFILES.md`
- `../../PROGRESS.md`
