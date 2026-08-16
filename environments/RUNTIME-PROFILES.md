# R01 Runtime Profiles

## 목적

IDE, LLM, 새 채팅이 바뀌어도 동일한 실행환경을 해석하도록 R01의 Runtime Profile을 고정합니다.

## Profile 정의

### MAC-D

```text
macOS Host
└─ OrbStack Docker
   └─ Ubuntu 24.04 compatible container
```

용도:
- Python/CLI
- Web/API
- Database
- AI application
- 재현 가능한 package/runtime 실습

주의:
- Container 내부 결과만으로 Host/VM 수준의 SSH/UFW/systemd/users/ACL 요구를 대체하지 않습니다.

### MAC-V

```text
macOS Host
└─ OrbStack Linux Machine
   └─ Ubuntu 24.04
```

용도:
- systemd
- OpenSSH
- UFW
- Linux users/groups
- ACL
- cron
- process/network troubleshooting
- server-like integration

R01의 기본 **Linux Machine Primary Profile**입니다.

### WIN-D

```text
Windows 11 Pro Host
└─ WSL2 Ubuntu 24.04
   └─ Docker
      └─ Ubuntu 24.04 compatible container
```

용도:
- MAC-D에서 만든 application/container 경로의 Windows/WSL2 portability 확인
- Python/Web/DB/API/AI container 실습

### WIN-V

```text
Windows 11 Pro Host
└─ WSL2
   └─ Ubuntu 24.04 direct runtime
```

용도:
- MAC-V Linux 절차의 WSL2 portability 확인
- systemd/service/process/filesystem/network 실습

`WIN-V`는 프로젝트의 프로필 이름이며 별도 Hyper-V Manager에서 수동 생성한 VM을 의미하지 않습니다. R01에서는 **Docker가 아닌 Ubuntu 24.04 직접 Linux Runtime**을 나타냅니다.

## Primary / Twin 정책

각 미션은 아래와 같이 운영합니다.

```text
Primary Runtime
= Mission CLEAR를 위한 주 실행환경

Twin Runtime
= 다른 실행 형태/Host에서 핵심 경로를 재현하는 학습·Portability 실습
```

권장 기본값:

- 시스템/운영 미션 → `MAC-V` Primary, `WIN-V` Twin
- 애플리케이션 미션 → `MAC-D` Primary, `WIN-D` Twin
- 외부 서비스 미션 → 적합한 local profile에서 rehearsal 후 실제 GitHub/AWS/배포/API Evidence 수행

## Dual-Lab Coverage

Mission 상태와 Lab 상태를 섞지 않습니다.

Mission 상태:
- `⬜ NOT STARTED`
- `🟡 ACTIVE`
- `⛔ BLOCKED`
- `✅ CLEAR`

Lab Coverage는 별도 체크로만 관리합니다.

```text
Docker Lab       [ ] / [x]
VM/Linux Lab     [ ] / [x]
Mac portability  [ ] / [x]
Win portability  [ ] / [x]
```

Lab Coverage가 미완료여도 공식 Mission/Evaluation의 CLEAR 조건을 충족했다면 Mission 상태를 임의로 BLOCKED로 바꾸지 않습니다.

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

## Repository/Workspace 규칙

가능하면 IDE Workspace에는 동시에 아래 두 저장소만 엽니다.

```text
codyssey-basic                # Control Tower
현재 Active Mission Repository # Workcell
```

Docker/VM/Linux Runtime 자체와 Repository Source of Truth를 분리합니다. Container나 Linux Machine을 삭제해도 Git Repository의 공식 Mission/Guide/Evidence 계약은 남아 있어야 합니다.

## R01에서 보류하는 환경

다음은 현재 표준에 포함하지 않습니다.

- Ubuntu 24.04 Native Host
- 수동 Hyper-V Ubuntu VM
- VMware
- KVM/QEMU/libvirt
- Proxmox
- Kubernetes

R01 전체 CLEAR 이후 Portability/Advanced 단계에서 확장합니다.
