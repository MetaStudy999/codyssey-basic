# R01 Runtime Profiles

## 목적

IDE, LLM, 새 채팅이 바뀌어도 동일한 실행환경을 해석하도록 R01의 Runtime Profile을 고정합니다.

## 한눈에 보기(Quick Read)

```text
MAC-V = macOS → OrbStack Ubuntu 24.04        ← 기본 Primary
WIN-V = Windows 11 → WSL2 Ubuntu 24.04      ← 권장 Secondary
MAC-D = macOS → OrbStack Docker              ← 선택 Lab
WIN-D = Windows 11 → WSL2 → Docker           ← 선택 Lab
```

핵심 판단:

```text
Mission CLEAR
→ 공식 요구 + 실제 Primary Runtime + Verify + Evidence

Secondary / Docker
→ 학습·이식성 확인용
→ 공식 요구가 없으면 CLEAR Gate 아님
```

처음 환경을 준비하는 경우 [`START-HERE-DEVELOPMENT-ENVIRONMENT.md`](START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 사용합니다.

## 📑 목차

- [R01 운영 범위](#scope)
- [Profile 정의](#profiles)
- [Runtime 우선순위](#priority)
- [Mission 상태와 Lab 상태 분리](#state-separation)
- [Docker 정책](#docker)
- [Architecture 규칙](#architecture)
- [Repository/Workspace 규칙](#workspace)

---

<a id="scope"></a>
## R01 운영 범위

```text
macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine
└─ MAC-D: Docker

Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct Linux Runtime
└─ WIN-D: Docker
```

현재는 Ubuntu Native Host, 수동 Hyper-V VM, VMware, KVM/QEMU/libvirt, Proxmox, Kubernetes를 R01 표준 범위에 포함하지 않습니다.

<a id="profiles"></a>
## Profile 정의

### MAC-V — Primary Linux Runtime

```text
macOS Host
└─ OrbStack Linux Machine
   └─ Ubuntu 24.04
```

R01의 기본 **Primary Runtime**입니다.

용도:
- Linux CLI
- Python/Node 직접 실행
- systemd/OpenSSH/UFW
- users/groups/ACL/cron
- filesystem/process/network
- Web/API/DB/AI application 직접 실행
- server-like integration

### WIN-V — Secondary Linux Runtime

```text
Windows 11 Pro Host
└─ WSL2
   └─ Ubuntu 24.04 direct runtime
```

R01의 기본 **Secondary Platform / Portability Runtime**입니다.

`WIN-V`는 프로젝트 내부 프로필 이름이며, 별도 Hyper-V Manager에서 만든 전통적 VM이라는 뜻이 아닙니다. Docker와 구분되는 Ubuntu 24.04 직접 Linux Runtime을 의미합니다.

### MAC-D — Optional Docker Lab

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

Docker Lab은 공식 Mission/Evaluation이 명시적으로 요구하지 않는 한 Mission CLEAR의 기본 Gate가 아닙니다.

### WIN-D — Optional Docker Portability Lab

```text
Windows 11 Pro Host
└─ WSL2 Ubuntu 24.04
   └─ Docker
      └─ Ubuntu 24.04 compatible container
```

용도:
- MAC-D에서 연습한 container 경로의 Windows/WSL2 portability 확인
- Docker 환경 차이 학습

역시 기본 CLEAR Gate가 아닙니다.

<a id="priority"></a>
## Runtime 우선순위

```text
1. 공식 Mission/Evaluation
2. Primary Mission Runtime
3. Verify
4. Evidence
5. ✅ CLEAR
6. Secondary Platform Check — 권장
7. Docker Lab — 선택
```

따라서 R01의 기본값은 다음과 같습니다.

```text
Primary Mission Runtime = MAC-V 또는 외부 공식 Runtime
Secondary Platform Check = WIN-V
Docker Lab = MAC-D / WIN-D 선택
```

GitHub/AWS/실제 배포/실제 AI Provider가 본 요구인 미션에서는 해당 외부 Runtime/Evidence가 Primary 기준입니다.

<a id="state-separation"></a>
## Mission 상태와 Lab 상태 분리

Mission 상태:
- `⬜ NOT STARTED`
- `🟡 ACTIVE`
- `⛔ BLOCKED`
- `✅ CLEAR`

환경 학습 Coverage:

```text
Primary Runtime          [ ] / [x]
Secondary Platform Check [ ] / [x]
MAC-D Docker Lab         [ ] / [x]
WIN-D Docker Lab         [ ] / [x]
```

Docker Lab 또는 Secondary Check가 미완료여도 공식 요구와 실제 Runtime/Verify/Evidence가 충족되었다면 Mission 상태를 임의로 BLOCKED로 바꾸지 않습니다.

<a id="docker"></a>
## Docker 정책

상세 정책은 [`DOCKER-POLICY.md`](DOCKER-POLICY.md)를 사용합니다.

핵심:

```text
Docker = 선택 Training Layer
Docker 사용 여부 ≠ Mission PASS/CLEAR
```

단, 미래에 공식 Mission/Evaluation이 Docker를 필수로 요구한다면 공식 자료가 이 정책보다 우선합니다.

<a id="architecture"></a>
## Architecture 규칙

Runtime마다 실제 결과를 확인합니다.

```bash
uname -m
dpkg --print-architecture 2>/dev/null || true
```

예:
- `x86_64` ↔ `amd64`
- `aarch64` ↔ `arm64`

특히 제공 binary가 있는 미션에서는 macOS/Windows Host CPU를 보고 binary를 추측하지 않습니다.

<a id="workspace"></a>
## Repository/Workspace 규칙

가능하면 IDE Workspace에는 동시에 아래 두 저장소만 엽니다.

```text
codyssey-basic                 # Control Tower
현재 Active Mission Repository # Workcell
```

Runtime 환경과 Repository Source of Truth를 분리합니다. Container/Linux Machine을 삭제해도 공식 Mission/Guide/Evidence 계약은 Git Repository에 남아 있어야 합니다.
