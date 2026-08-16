# R01 Environment System

Round 01 FAST TRACK에서 사용하는 실행환경의 범위를 관리합니다.

## 현재 지원 범위

```text
macOS
└─ OrbStack
   ├─ Ubuntu 24.04 Linux Machine
   └─ Docker

Windows 11 Pro
└─ WSL2 Ubuntu 24.04
   ├─ Ubuntu 24.04 Direct Linux Runtime
   └─ Docker
```

현재는 Ubuntu Native Host, 별도 Hyper-V VM, VMware, KVM/QEMU, Proxmox, Kubernetes를 R01 표준 범위에 추가하지 않습니다. R01 CLEAR 이후 Portability/Advanced 단계에서 검토합니다.

## 4개 Runtime Profile

| Profile | Host | 실행 형태 | 역할 | R01 우선도 |
|---|---|---|---|---|
| `MAC-V` | macOS | OrbStack Ubuntu 24.04 Linux Machine | 기본 Primary Mission Runtime | **필수 경로 우선** |
| `WIN-V` | Windows 11 Pro | WSL2 Ubuntu 24.04 direct runtime | Secondary/Portability | **권장** |
| `MAC-D` | macOS | OrbStack Docker | Docker Training Lab | **선택** |
| `WIN-D` | Windows 11 Pro | WSL2 Ubuntu + Docker | Docker Portability Lab | **선택** |

> `WIN-V`는 프로젝트 내 프로필 이름입니다. 전통적인 수동 Hyper-V VM을 의미하지 않고, Docker Container와 구분되는 WSL2 Ubuntu 24.04 직접 Linux Runtime을 뜻합니다.

## 핵심 원칙

```text
Primary Mission Runtime = 필수
Secondary Platform Check = 권장
Docker Lab = 선택
```

1. **Mission CLEAR와 환경 학습을 분리합니다.** 공식 Mission/Evaluation + 실제 Runtime + Verify + Evidence가 CLEAR 기준입니다.
2. R01의 기본 Linux Primary는 `MAC-V`입니다. 외부 GitHub/AWS/배포/API가 핵심인 미션은 해당 실제 외부 Runtime/Evidence가 우선합니다.
3. `WIN-V`는 Mac/OrbStack에서 수행한 핵심 경로의 Windows/WSL2 portability 확인에 사용합니다.
4. Docker는 현재 R01의 기본 Gate가 아닙니다. 학습 가치가 있거나 필요할 때 `MAC-D`/`WIN-D`로 선택 실습합니다.
5. 같은 미션을 네 환경에서 처음부터 끝까지 반복하지 않습니다.
6. GitHub, AWS, 실제 배포, 실제 AI Provider Evidence는 로컬 Linux/Docker 실습이 대체하지 않습니다.
7. Architecture는 Host 이름으로 추측하지 않고 Runtime 내부 `uname -m`으로 확인합니다.
8. Secret은 어떤 Runtime에서도 GitHub/채팅/로그/Evidence에 기록하지 않습니다.

## Docker 정책

[`DOCKER-POLICY.md`](DOCKER-POLICY.md)를 사용합니다.

핵심은 다음과 같습니다.

```text
Docker 미수행 ≠ Mission FAIL
Docker 미수행 ≠ Mission BLOCKED
Docker 사용 여부 ≠ Mission CLEAR 판정
```

공식 Mission/Evaluation이 Docker를 명시적으로 요구하는 경우에만 공식 요구가 우선합니다.

## 문서

- [`RUNTIME-PROFILES.md`](RUNTIME-PROFILES.md) — 4개 실행 프로필 상세 계약
- [`DOCKER-POLICY.md`](DOCKER-POLICY.md) — Docker 선택 학습 정책
- [`MISSION-LAB-MATRIX.md`](MISSION-LAB-MATRIX.md) — B1-1~B7-2 Primary/Secondary/Docker Lab 설계
- [`../templates/DUAL-RUNTIME-LAB-TEMPLATE.md`](../templates/DUAL-RUNTIME-LAB-TEMPLATE.md) — Mission별 상세 환경 실습 템플릿

## 운영 방식

```text
Mission 시작
→ Primary Runtime
→ 공식 Mission/Evaluation 수행
→ Verify
→ Evidence
→ ✅ CLEAR
→ 필요한 경우 Secondary Platform Check
→ 원하는 경우 Docker Lab
→ FAST TRACK 다음 Mission
```

FAST TRACK에서는 **CLEAR를 먼저 만들고 Docker 학습은 별도 Training Layer로 관리**합니다.
