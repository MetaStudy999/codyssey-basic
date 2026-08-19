# R01 실행 환경 프로필(Runtime Profiles)

## 목적

IDE, LLM, 새 채팅이 바뀌어도 동일한 실행환경을 해석하도록 R01의 실행 환경 프로필(Runtime Profile)을 고정합니다.

## 한눈에 보기(Quick Read)

```text
MAC-V = 학교 macOS → OrbStack → Ubuntu 24.04        ← 지원 실행 환경(Supported Runtime)
WIN-V = 개인 노트북 Windows 11 Pro → WSL2 Ubuntu 24.04 ← 지원 실행 환경(Supported Runtime)
MAC-D = macOS → OrbStack Docker                      ← 선택 실습(Lab)
WIN-D = Windows 11 Pro → WSL2 → Docker               ← 선택 실습(Lab)
```

핵심 판단:

```text
Mission CLEAR
→ 공식 요구 + 실제 지원 실행 환경(Runtime) + 검증(Verification) + 증빙(Evidence)

MAC-V / WIN-V
→ 동일한 Mission/Evaluation/CLEAR 기준
→ 실제 수행 이력은 각각 별도 Runtime Record로 저장

MAC-V PASS + WIN-V PASS
→ CROSS-PLATFORM VERIFIED 가능

Docker
→ 학습·이식성 확인용
→ 공식 요구가 없으면 CLEAR Gate 아님
```

처음 환경을 준비하는 경우 [`START-HERE-DEVELOPMENT-ENVIRONMENT.md`](START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 사용합니다.

플랫폼별 수행 현황은 [`../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)를 사용합니다.

## 📑 목차

- [R01 운영 범위](#scope)
- [프로필(Profile) 정의](#profiles)
- [현재 실행 환경(Current Runtime Context)](#current-context)
- [학교 Mac Reset 규칙](#mac-reset)
- [Windows 11 지속 환경 규칙](#win-persistent)
- [Mission 상태와 플랫폼 기록 분리](#state-separation)
- [Docker 정책](#docker)
- [아키텍처(Architecture) 규칙](#architecture)
- [저장소/작업공간(Repository/Workspace) 규칙](#workspace)

---

<a id="scope"></a>
## R01 운영 범위

```text
학교 macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine
└─ MAC-D: Docker

개인 노트북 Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct Linux Runtime
└─ WIN-D: Docker
```

현재는 Ubuntu Native Host, 수동 Hyper-V VM, VMware, KVM/QEMU/libvirt, Proxmox, Kubernetes를 R01 표준 범에 포함하지 않습니다.

<a id="profiles"></a>
## 프로필(Profile) 정의

### MAC-V — 학교 Mac Linux 실행 환경

```text
학교 macOS Host
└─ OrbStack Linux Machine
   └─ Ubuntu 24.04
```

환경 성격: **초기화 가능 환경(Resettable / Ephemeral Environment)**

용도:
- Linux CLI
- Python/Node 직접 실행
- systemd/OpenSSH/UFW
- users/groups/ACL/cron
- filesystem/process/network
- Web/API/DB/AI application 직접 실행
- server-like integration

학교 장비 정책이나 초기화 때문에 설치 상태가 사라질 수 있으므로 매 작업 세션에서 현재 상태를 확인합니다.

### WIN-V — 개인 노트북 Linux 실행 환경

```text
Windows 11 Pro Host
└─ WSL2
   └─ Ubuntu 24.04 direct runtime
```

환경 성격: **지속 실행 환경(Persistent Runtime Environment)**

`WIN-V`는 프로젝트 내부 프로필 이름이며, 별도 Hyper-V Manager에서 만든 전통적 VM이라는 뜻이 아닙니다. Docker와 구분되는 Ubuntu 24.04 직접 Linux Runtime을 의미합니다.

정상적인 기존 WSL2 환경과 Repository를 보존하고, 매 작업마다 재설치하지 않습니다.

### MAC-D — 선택 Docker 실습(Optional Docker Lab)

```text
macOS Host
└─ OrbStack Docker
   └─ Ubuntu 24.04 compatible container
```

용도:
- 격리된 Python/Node/Web/API/DB/AI 실습
- 재현 가능한 package/runtime
- container/image/volume/port/env 학습
- containerization 연습

Docker 실습(Docker Lab)은 공식 Mission/Evaluation이 명시적으로 요구하지 않는 한 Mission CLEAR의 기본 Gate가 아닙니다.

### WIN-D — 선택 Docker 이식성 실습(Optional Docker Portability Lab)

```text
Windows 11 Pro Host
└─ WSL2 Ubuntu 24.04
   └─ Docker
      └─ Ubuntu 24.04 compatible container
```

용도:
- Docker 환경 차이 학습
- 컨테이너 이식성 확인

역시 기본 CLEAR Gate가 아닙니다.

---

<a id="current-context"></a>
## 현재 실행 환경(Current Runtime Context)

`MAC-V`와 `WIN-V`는 **Primary/Secondary라는 합격 우선순위를 갖지 않습니다.** 작업을 실제로 수행할 때 사용자가 현재 위치를 알려 주면 그 프로필을 Current Runtime Context로 선택합니다.

예:

```text
"학교 Mac에서 진행합니다."
→ Current Runtime Context = MAC-V

"노트북 Win11에서 진행합니다."
→ Current Runtime Context = WIN-V
```

선택된 환경에 따라 설치·재구성 방식만 달라집니다. 다음 기준은 동일합니다.

```text
공식 Mission / Evaluation
Repository / Branch / Commit 추적
코드·기능 요구
Verification
Evidence
Secret 보호
Mission CLEAR
```

환경을 바꾸면 새 Context에서 Preflight를 다시 수행하고, 이전 환경의 실제 출력을 새 실행 결과처럼 재사용하지 않습니다.

---

<a id="mac-reset"></a>
## 학교 Mac Reset 규칙

MAC-V는 Reset 가능성을 기본 전제로 합니다.

```text
CHECK BEFORE INSTALL

현재 환경 확인
→ Ubuntu/Repository/Bootstrap이 살아 있으면 재설치 생략
→ Reset되었으면 필요한 항목만 재구성
→ Bootstrap / Identity 확인
→ Mission Runtime
```

Repository:

```text
있음 → git status / branch / 최신 상태 확인
없음 → clone
```

학교 Mac이 Reset된 이후에도 과거에 확보한 추적 가능한 MAC-V Runtime PASS와 Evidence는 자동으로 FAIL 처리하지 않습니다.

현재 장비 재현 상태가 달라졌다면 다음 보조 상태를 사용할 수 있습니다.

```text
READY
STALE
REBUILD NEEDED
```

`STALE`은 **과거 PASS는 있으나 현재 장비에서 재현 상태를 다시 확인해야 한다**는 의미입니다.

---

<a id="win-persistent"></a>
## Windows 11 지속 환경 규칙

WIN-V는 기존 환경 보존을 기본으로 합니다.

```text
VERIFY BEFORE REINSTALL

기존 환경 확인
→ Verification
→ 정상이라면 그대로 사용
→ 문제 있을 때만 최소 Repair
→ Mission Runtime
```

WSL2 Ubuntu, Repository, `.venv`, Git/GitHub 설정 등을 정상인데도 매번 삭제·재설치하지 않습니다.

---

<a id="state-separation"></a>
## Mission 상태와 플랫폼 기록 분리

Mission 상태:

```text
⬜ NOT STARTED
🟡 ACTIVE
⛔ BLOCKED
✅ CLEAR
```

플랫폼별 Runtime Record:

```text
MAC-V: NOT RUN / PENDING / PASS / FAIL
WIN-V: NOT RUN / PENDING / PASS / FAIL
```

내부 품질 상태:

```text
CROSS-PLATFORM VERIFIED
= 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS
```

관계:

```text
Mission CLEAR
= 공식 Mission/Evaluation + 실제 Runtime + Verification + 필요한 Evidence

플랫폼별 Runtime Record
= 어느 환경에서 실제 수행했는지에 대한 이력
```

공식 Mission/Evaluation이 특정 플랫폼 두 개를 모두 요구하지 않는다면, 한 지원 실행환경에서 공식 요구를 실제 충족했다고 해서 다른 환경 미수행을 이유로 Mission CLEAR를 자동 차단하지 않습니다.

반대로 `CROSS-PLATFORM VERIFIED`는 두 환경의 실제 PASS 없이 표시하지 않습니다.

플랫폼별 수행 현황의 단일 요약 기준은 다음 파일입니다.

```text
training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md
```

Docker Lab 또는 다른 환경 확인이 미완료여도 공식 요구와 실제 실행(Runtime)/검증(Verification)/증빙(Evidence)이 충족되었다면 Mission 상태를 임의로 BLOCKED로 바꾸지 않습니다.

---

<a id="docker"></a>
## Docker 정책

상세 정책은 [`DOCKER-POLICY.md`](DOCKER-POLICY.md)를 사용합니다.

핵심:

```text
Docker = 선택 훈련 계층(Training Layer)
Docker 사용 여부 ≠ Mission PASS/CLEAR
```

단, 미래에 공식 Mission/Evaluation이 Docker를 필수로 요구한다면 공식 자료가 이 정책보다 우선합니다.

---

<a id="architecture"></a>
## 아키텍처(Architecture) 규칙

실행 환경(Runtime)마다 실제 결과를 확인합니다.

```bash
uname -m
dpkg --print-architecture 2>/dev/null || true
```

예:
- `x86_64` ↔ `amd64`
- `aarch64` ↔ `arm64`

특히 제공 binary가 있는 미션에서는 macOS/Windows Host CPU를 보고 binary를 추측하지 않습니다.

---

<a id="workspace"></a>
## 저장소/작업공간(Repository/Workspace) 규칙

가능하면 IDE Workspace에는 동시에 아래 두 저장소만 엽니다.

```text
codyssey-basic                   # Control Tower
현재 미션(Active Mission) 저장소 # Workcell
```

공통 Linux 작업 위치:

```text
$HOME/codyssey/<repository>
```

실행 환경(Runtime)과 저장소 기준(Source of Truth)을 분리합니다. 학교 Mac의 Linux Machine이 Reset되더라도 공식 Mission/Guide와 이미 Git에 보존한 추적 가능한 Evidence 계약은 Repository에 남아 있어야 합니다.
