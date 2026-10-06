# R01 Phase C — 다음 작업(Next Actions)

현재 운영 모드: **빠른 실행 방식(FAST EXECUTE)**  
현재 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**

> 현재 Mission ID(미션 번호)의 단일 기준은 [`CURRENT-MISSION-MAP.md`](../../CURRENT-MISSION-MAP.md)입니다. 번호 변경은 기존 Runtime/Workcell 상태를 초기화하지 않습니다.

현재 Workcell 포커스:

```text
B4-1 = 🟡 ACTIVE                         # 이전 B1-1 시스템 관제
B2-2 = ⏸ PAUSED / TEAM WORK IN PROGRESS # 사용자가 실제 팀과 별도 진행
```

B2-2는 지금까지의 MAC-V Host/CORE 준비 PASS를 보존한 채 일시정지합니다. 이 보류는 FAIL/CLEAR가 아니며, 실제 팀 진행이 끝난 뒤 Evidence를 검증하면서 재개합니다.

---

## 🚀 빠른 시작(Quick Start)

현재 바로 할 일은 **B4-1 시스템 관제 Repository를 현재 Mission ID와 Stable Repository 기준으로 정리하고 실제 Runtime 진입 전 Gate를 닫는 것**입니다.

```text
B4-1 Metadata/Repository 정합성
→ 운영 문서의 이전 B1-1/번호형 Repository 경로 정리
→ Runtime Preflight 자동검증
→ Current Runtime Context 선택
→ Ubuntu Baseline
→ SSH 20022
→ UFW
→ Users/Groups/ACL
→ Agent 15034
→ monitor.sh / log rotation
→ cron / failure-warning test
→ Verification
→ Evidence
→ Evaluation
→ CLEAR
```

### 1. 현재 B4-1 기준

```text
Current Mission ID : B4-1
Previous ID        : B1-1
Topic              : 시스템 관제(System Monitoring)
Repository         : MetaStudy999/codyssey-basic-system-monitor
Runtime            : Ubuntu 24.04
Supported Runtime  : MAC-V / WIN-V
Current Runtime    : 아직 선택 전
```

현재 Repository:

- [B4-1 System Monitor](https://github.com/MetaStudy999/codyssey-basic-system-monitor)
- [B4-1 Beginner Guide](https://github.com/MetaStudy999/codyssey-basic-system-monitor/blob/main/training/round-01-clear/BEGINNER-GUIDE.md)
- [B4-1 Checklist](https://github.com/MetaStudy999/codyssey-basic-system-monitor/blob/main/training/round-01-clear/CHECKLIST.md)

### 2. B4-1 실제 Runtime 시작 전 Gate

실제 시스템 설정을 변경하기 전 다음을 먼저 만족합니다.

```text
[ ] MISSION-METADATA.yml current_mission_id = B4-1
[ ] Repository = MetaStudy999/codyssey-basic-system-monitor
[ ] 운영 문서/명령에서 과거 번호형 Repository 경로를 사용하지 않음
[ ] Shell static syntax PASS
[ ] Ubuntu 24.04 확인
[ ] systemd 확인
[ ] CPU architecture 확인
[ ] 예상하지 않은 Git working tree 변경 없음
[ ] SSH/UFW 현재 상태를 백업하기 전에는 변경하지 않음
```

### 3. Current Runtime Context

B4-1은 다음 두 환경을 동등하게 지원합니다.

```text
MAC-V
학교 macOS
→ OrbStack
→ Ubuntu 24.04
→ Resettable / CHECK BEFORE INSTALL

WIN-V
Windows 11 Pro
→ WSL2
→ Ubuntu 24.04
→ Persistent / VERIFY BEFORE REINSTALL
```

실제 Runtime을 시작할 때 **현재 사용하는 환경 하나를 명확히 선택**합니다. 이전에 B2-2를 MAC-V에서 실행했다는 사실만으로 B4-1도 MAC-V라고 추정하지 않습니다.

### 4. B4-1 안전 실행 순서

B4-1은 SSH/UFW처럼 원격 접속을 끊을 수 있는 설정을 포함하므로 다음 순서를 고정합니다.

```text
현재 상태 확인
→ 백업
→ 새 SSH 20022/tcp 선허용
→ sshd 문법/최종 설정 확인
→ reload
→ 실제 새 세션 접속 확인
→ 기존 접속 경로 정리 여부 판단
→ UFW 정책 적용
→ 실제 20022 유지 확인
```

새 SSH 세션이 확인되기 전에 기존 접속 경로를 제거하지 않습니다.

### 5. Agent / Monitor / Evidence

```text
Agent Runtime
→ 실제 Ubuntu architecture에 맞는 제공 binary 선택
→ AGENT_HOME=/opt/agent-app
→ READY 확인
→ 15034/tcp 확인

Monitoring
→ monitor.sh
→ Process / Port / CPU / Memory / Disk
→ Warning / Failure 분기
→ Log rotation
→ cron

Verification
→ verify.sh
→ 실제 명령 출력
→ Evidence
→ Evaluation 설명
→ CLEAR Gate
```

Secret/API Key/Password/Private Key 실제 값은 GitHub·채팅·Evidence에 저장하지 않습니다.

---

## 📑 목차

- [현재 B4-1 기준](#1-현재-b4-1-기준)
- [실제 Runtime 시작 전 Gate](#2-b4-1-실제-runtime-시작-전-gate)
- [Current Runtime Context](#3-current-runtime-context)
- [안전 실행 순서](#4-b4-1-안전-실행-순서)
- [Agent / Monitor / Evidence](#5-agent--monitor--evidence)
- [FAST TRACK](#fast-track)
- [B2-2 보류 상태](#b2-2-paused)
- [상태 전환 규칙](#state-transition)

---

<a id="fast-track"></a>
## FAST TRACK

현재 Mission ID로 재매핑된 R01 실행 순서는 그대로 유지합니다.

```text
Stage 1 — REQUIRED CLEAR
B4-1 → B4-2 → B2-1 → B2-2 → B5-1 → B5-2
→ B1-1 → B6-1 → B3-1 → B3-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B1-2 → B6-2 → B6-3 → B7-2
```

현재는 첫 번째 미션 **B4-1**을 다시 활성화합니다. B2-2 보류 때문에 다른 미션을 CLEAR한 것으로 간주하지 않습니다.

<a id="b2-2-paused"></a>
## B2-2 보류 상태

```text
Workcell                    = ⏸ PAUSED / TEAM WORK IN PROGRESS
MAC-V Host/CORE Prep        = ✅ PASS
codyssey01 Account A        = Identity 설정 완료 후보
Identity Gate 5/5           = ⬜ NOT RUN
5-account Simulation        = ⬜ NOT RUN
Actual Team Evidence        = 팀 진행 후 검증 예정
Mission CLEAR               = ❌ 아님
```

재개 시:

```text
팀 Repository 확인
→ 실제 Issue / PR / Review / Merge 기록 검증
→ Conflict / Troubleshooting 검증
→ 필요한 경우 5계정 Simulation 이어서 수행
→ Actual Evidence와 Simulation Evidence 분리
→ Evaluation
→ CLEAR Gate
```

<a id="state-transition"></a>
## 상태 전환 규칙

```text
문서/Reference 준비         ≠ Runtime PASS
정적검증 PASS               ≠ Runtime PASS
부분 환경 준비              ≠ Mission CLEAR
PAUSED                       ≠ FAIL
PAUSED                       ≠ CLEAR
```

B4-1은 실제 Runtime·Verification·Evidence가 완료되어야만 `✅ CLEAR`로 변경합니다.

---

## 이번 전환 기록

```text
B2-2 : ACTIVE → PAUSED / TEAM WORK IN PROGRESS
B4-1 : PAUSED / READY TO RESUME → ACTIVE
Runtime CLEAR : 0 / 15 유지
```

B2-2에서 이미 확인한 Host/CORE 준비 상태와 GitHub 관련 기록은 삭제하지 않습니다.
