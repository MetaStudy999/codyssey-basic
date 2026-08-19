# Codyssey Basic 작업 룰(Working Rules)

이 문서는 메인 레포(Control Tower)에서 사용하는 작업 운영 규칙의 **진입점(Entry Point)**입니다.

## 빠른 적용(Quick Apply)

작업을 시작할 때 다음 순서를 사용합니다.

```text
공식 Mission / Evaluation / 제공 파일 확인
→ 현재 Repository main 확인
→ 상위 작업 운영 표준 확인
→ 현재 Active Mission의 WORKING-RULES.md 확인
→ 현재 실행 환경(Current Runtime Context) 선택
→ BEGINNER-GUIDE / CHECKLIST / environment / evidence 확인
→ 실제 실행(Runtime Execution)
→ 검증(Verification)
→ 증빙 자료(Evidence)
→ 플랫폼별 Runtime Record 갱신
→ 평가(Evaluation)
→ 조건 충족 시에만 Mission CLEAR
```

## 📑 목차

- [상위 작업 운영 표준](#standard)
- [메인 레포의 역할](#control-tower)
- [현재 실행 환경과 플랫폼별 수행 기록](#runtime-records)
- [각 미션 레포 적용 방식](#mission-adapter)
- [상태 관리](#status)
- [변경 관리](#change)

<a id="standard"></a>
## 상위 작업 운영 표준

- [`standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`](standards/CODYSSEY-WORKING-OPERATING-STANDARD.md)

이 문서가 메인 레포와 각 미션 레포에서 공통으로 사용하는 상위 작업 운영 기준입니다.

세부 문서 표준은 `standards/` 아래의 전문 표준을 사용합니다.

<a id="control-tower"></a>
## 메인 레포의 역할

메인 레포는 다음을 관리합니다.

```text
공통 작업 표준
환경 계약과 Runtime Profile
현재 실행 환경(Current Runtime Context)
미션 실행 순서 / 선후관계
공통 환경 Closeout / Freeze
문서 품질 감사
미션 상태 집계
MAC-V / WIN-V 플랫폼별 수행 기록
```

공식 미션 요구 자체는 각 미션 레포의 공식 Mission/Evaluation/제공 파일이 우선합니다.

<a id="runtime-records"></a>
## 현재 실행 환경과 플랫폼별 수행 기록

R01에서 다음 두 Linux 실행 환경을 **동등한 지원 실행 환경(Supported Runtime)**으로 사용합니다.

```text
MAC-V
학교 macOS → OrbStack → Ubuntu 24.04
환경 성격: Resettable / Ephemeral

WIN-V
개인 노트북 Windows 11 Pro → WSL2 → Ubuntu 24.04
환경 성격: Persistent
```

`MAC-V`와 `WIN-V`는 합격 등급의 Primary/Secondary 관계가 아닙니다. 작업을 시작할 때 사용자가 현재 수행 위치를 알려 주면 그 환경을 **현재 실행 환경(Current Runtime Context)**으로 사용합니다.

```text
학교 Mac에서 진행
→ MAC-V
→ CHECK BEFORE INSTALL
→ Reset되었으면 필요한 항목만 재구성

노트북 Win11에서 진행
→ WIN-V
→ VERIFY BEFORE REINSTALL
→ 기존 환경 보존, 문제 있을 때만 최소 Repair
```

플랫폼별 실제 수행 기록은 다음 중앙 상태표에서 관리합니다.

- [`training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

핵심 상태 분리:

```text
MAC-V Runtime PASS
WIN-V Runtime PASS
Mission CLEAR
CROSS-PLATFORM VERIFIED
```

위 네 상태는 서로 자동 대체하지 않습니다.

- 공식 요구를 한 지원 실행환경에서 실제 충족하면 Mission CLEAR가 가능할 수 있습니다.
- `MAC-V`와 `WIN-V`가 모두 실제 PASS하면 내부 품질 상태로 `CROSS-PLATFORM VERIFIED`를 기록할 수 있습니다.
- 공식 Mission/Evaluation이 두 환경을 모두 요구한다면 공식 요구가 우선합니다.
- 학교 Mac이 Reset되어도 과거의 추적 가능한 MAC-V PASS Evidence는 자동으로 FAIL이 되지 않습니다. 현재 장비 재현 상태와 과거 수행 기록을 분리합니다.

<a id="mission-adapter"></a>
## 각 미션 레포 적용 방식

각 미션 레포의 루트 `WORKING-RULES.md`는 상위 표준의 **얇은 어댑터(Thin Adapter)** 역할을 합니다.

```text
Control Tower 상위 표준
        ↓
Mission WORKING-RULES.md
        ↓
Mission 공식 Source
        ↓
README / BEGINNER-GUIDE / CHECKLIST
        ↓
현재 Runtime Context
        ↓
Runtime / Verification / Evidence / Evaluation / CLEAR
```

상위 표준 전문을 각 미션에 복사하지 않습니다. 미션 레포에는 링크와 미션별 차이만 둡니다.

플랫폼별 실제 Evidence가 생길 때는 필요에 따라 각 Mission의 `training/round-01-clear/evidence/mac-v/`, `evidence/win-v/`처럼 분리할 수 있습니다. 실제 수행 전 빈 디렉터리를 형식 때문에 대량 생성하지 않습니다.

<a id="status"></a>
## 상태 관리

```text
Documentation Ready
≠ BEGINNER READY
≠ Runtime PASS
≠ Verification PASS
≠ Evidence Complete
≠ Mission CLEAR
```

플랫폼 수행 기록도 별도입니다.

```text
MAC-V PASS ≠ WIN-V PASS
한 플랫폼 PASS ≠ CROSS-PLATFORM VERIFIED
CROSS-PLATFORM VERIFIED ≠ 별도의 공식 Mission CLEAR
```

실제 수행 결과가 없는 상태에서 PASS/CLEAR를 기록하지 않습니다.

<a id="change"></a>
## 변경 관리

```text
POLICY
→ APPLY
→ VERIFY
```

변경 전에는 최신 `main`과 대상 파일을 확인하고, 변경 후에는 실제 GitHub `main`을 다시 열어 링크·경로·상태를 확인합니다.
