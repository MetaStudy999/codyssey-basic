# Codyssey Basic 작업 룰(Working Rules)

이 문서는 **기준 레포(Canonical Control Repository) `MetaStudy999/codyssey-basic`**에서 사용하는 작업 운영 규칙의 진입점(Entry Point)입니다.

> **중요:** 이 레포는 전체 미션의 운영 기준(Control Tower)입니다. 공식 미션의 현재 번호·제목·내용·요구사항은 **제2기 현재 Mission PDF**가 최우선 기준(Source of Truth)이며, 제2기 오리엔테이션 PDF가 과정 구조·필수/선택·학습 목표·평가 운영의 다음 기준입니다. `CURRENT-MISSION-MAP.md`는 이 공식 기준을 Repository 운영에 반영하는 매핑표입니다.

현재 제2기 신규 수행은 `training/round-02-clear/`를 기본 작업 위치로 사용하고, 기존 `training/round-01-clear/`는 참고자료로 보존합니다.

- [Round 02 미션 수행·평가 표준](standards/ROUND-02-MISSION-EXECUTION-STANDARD.md)
- [Round 02 실행 허브](training/round-02-clear/README.md)

## 빠른 적용(Quick Apply)

현재 제2기 미션은 다음 순서를 사용합니다.

```text
제2기 현재 Mission PDF
→ 제2기 오리엔테이션
→ CURRENT-MISSION-MAP 운영 매핑 확인
→ 동일 주제 Canonical Mission Repository
→ 기존 Mission / Evaluation
→ round-01-clear 참고
→ 평가항목 먼저 정리
→ 최소 통과 경로 확정
→ round-02-clear에서 한 단계씩 실제 수행
→ Verification + Evidence 동시 확보
→ 평가 설명 + 모의평가
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
- [`standards/REPOSITORY-NAMING-STANDARD.md`](standards/REPOSITORY-NAMING-STANDARD.md)
- [`CURRENT-MISSION-MAP.md`](CURRENT-MISSION-MAP.md)

이 문서들이 메인 레포와 각 미션 레포에서 공통으로 사용하는 상위 작업 운영·식별 기준입니다.

세부 문서 표준은 `standards/` 아래의 전문 표준을 사용합니다.

<a id="control-tower"></a>
## 메인 레포의 역할

메인 레포는 다음을 관리합니다.

```text
현재 Mission ID ↔ Stable Topic ↔ Canonical Repository 매핑
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

각 Canonical Mission Repository는 번호가 없는 주제 기반 Repository 이름을 사용하고, 루트의 `MISSION-METADATA.yml`에서 현재 Mission ID를 관리합니다.

```text
CURRENT-MISSION-MAP.md
        ↓
Canonical Mission Repository
        ↓
MISSION-METADATA.yml
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
Mission ID 변경 ≠ Runtime/CLEAR 상태 초기화
```

실제 수행 결과가 없는 상태에서 PASS/CLEAR를 기록하지 않습니다.

<a id="change"></a>
## 변경 관리

```text
POLICY
→ APPLY
→ VERIFY
```

변경 전에는 최신 `main`, `CURRENT-MISSION-MAP.md`, 대상 파일을 확인하고, 변경 후에는 실제 GitHub `main`을 다시 열어 Mission ID·Repository 링크·경로·상태를 확인합니다.

과거 Commit/PR/Issue의 당시 Mission ID는 역사 기록으로 보존하며, 현재 운영 문서와 `MISSION-METADATA.yml`만 현재 번호로 갱신합니다.
