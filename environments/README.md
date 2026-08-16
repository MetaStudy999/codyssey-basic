# R01 Environment System

Round 01 FAST TRACK에서 사용하는 실행환경의 범위를 관리합니다.

## 현재 지원 범위

R01에서는 아래 두 Host 계열만 사용합니다.

```text
macOS
└─ OrbStack
   ├─ Docker
   └─ Ubuntu 24.04 Linux Machine

Windows 11 Pro
└─ WSL2 Ubuntu 24.04
   ├─ Docker
   └─ Ubuntu 24.04 Direct Linux Runtime
```

현재는 Ubuntu Native Host, 별도 Hyper-V VM, VMware, KVM/QEMU, Proxmox, Kubernetes를 R01 표준 범위에 추가하지 않습니다. 이 환경들은 R01 CLEAR 이후 Portability/Advanced 단계에서 검토합니다.

## 4개 Runtime Profile

| Profile | Host | 실행 형태 | Linux 기준 | 역할 |
|---|---|---|---|---|
| `MAC-D` | macOS | OrbStack Docker | Ubuntu 24.04 compatible container | Docker Lab |
| `MAC-V` | macOS | OrbStack Linux Machine | Ubuntu 24.04 | VM/Linux Machine Lab |
| `WIN-D` | Windows 11 Pro | WSL2 Ubuntu + Docker | Ubuntu 24.04 compatible container | Docker Lab |
| `WIN-V` | Windows 11 Pro | WSL2 Ubuntu direct runtime | Ubuntu 24.04 | VM-class/Linux Machine Lab |

> `WIN-V`는 프로젝트 내 실행 프로필 이름입니다. WSL2 배포판은 전통적인 수동 Hyper-V VM과 동일한 운영 모델은 아니지만, R01에서는 Docker Container와 구분되는 독립 Linux Runtime 계층으로 취급합니다.

## 핵심 원칙

1. **Mission CLEAR와 환경 실습을 분리합니다.** 공식 Mission/Evaluation + 실제 Runtime + Verify + Evidence가 CLEAR의 기준입니다.
2. 각 미션은 **Primary Runtime 1개**를 지정하고, 다른 프로필은 Portability/Twin Lab으로 사용합니다.
3. Docker와 VM/Linux Machine 실습을 모두 제공하되, 같은 미션을 네 환경에서 처음부터 끝까지 반복하지 않습니다.
4. OS/SSH/UFW/users/ACL/cron처럼 시스템 계층을 평가하는 미션은 VM/Linux Machine Lab을 우선합니다.
5. Python/Web/DB/API/AI처럼 애플리케이션 계층이 중심인 미션은 Docker Lab을 우선합니다.
6. GitHub, AWS, 실제 배포, 실제 AI Provider처럼 외부 서비스 Evidence가 필요한 미션은 로컬 Docker/VM 실습이 공식 Runtime을 대체하지 않습니다.
7. Architecture는 Host 이름으로 추측하지 않고 Runtime 내부에서 `uname -m`과 필요 시 `dpkg --print-architecture`로 확인합니다.
8. Secret은 어떤 Runtime Profile에서도 GitHub/채팅/로그/Evidence에 기록하지 않습니다.

## 문서

- [`RUNTIME-PROFILES.md`](RUNTIME-PROFILES.md) — 4개 실행 프로필의 상세 계약
- [`MISSION-LAB-MATRIX.md`](MISSION-LAB-MATRIX.md) — B1-1~B7-2의 Docker/VM 실습 설계
- [`../templates/DUAL-RUNTIME-LAB-TEMPLATE.md`](../templates/DUAL-RUNTIME-LAB-TEMPLATE.md) — 각 Mission Workcell의 상세 실습 문서 템플릿

## 운영 방식

```text
Mission 시작
→ Primary Runtime 확인
→ 공식 Mission/Evaluation 기준 Runtime
→ Verify / Evidence
→ ✅ CLEAR
→ 필요 범위의 Twin Lab(Docker 또는 VM/Linux)
→ Portability 기록
→ FAST TRACK 다음 Mission
```

Twin Lab은 학습과 이식성 검증을 위한 별도 실습이며, 공식 평가가 요구하지 않는 한 Mission `✅ CLEAR`의 추가 Gate로 만들지 않습니다.
