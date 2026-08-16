# <MISSION-ID> Dual Runtime Labs

## 목적

이 문서는 공식 Mission/Evaluation을 바꾸지 않고, 현재 Mission을 **Docker Lab + VM/Linux Machine Lab** 두 관점에서 학습하기 위한 보조 실습 문서입니다.

## Runtime Profile

- Primary: `<PROFILE>`
- Twin: `<PROFILE>`
- Host 1: `macOS + OrbStack`
- Host 2: `Windows 11 Pro + WSL2 Ubuntu 24.04`

## CLEAR 계약

- Mission `✅ CLEAR`는 공식 Mission/Evaluation + 실제 Runtime + Verify + Evidence로 판정합니다.
- Twin Lab은 학습/Portability Coverage이며 별도 Gate로 만들지 않습니다.
- 외부 서비스 Evidence가 필요한 경우 Docker/VM local lab이 이를 대체하지 않습니다.

## Lab A — Docker

### ① 왜 하는가

<재현성/격리/애플리케이션 실행 목적>

### ② 무엇을 하는가

<핵심 기능 1~3개>

### ③ 필요한 용어/개념

<container/image/volume/port/env 등>

### ④ 실행 환경

- MAC-D 또는 WIN-D

### ⑤ 실행

```bash
# Mission-specific commands
```

### ⑥ 예상 결과

<정상 결과>

### ⑦ 검증

```bash
# Mission-specific verify
```

### ⑧ 제한

<Docker가 대체할 수 없는 system/external requirements>

### ⑨ 정리

```bash
# safe cleanup
```

### ⑩ 완료 확인

- [ ] Docker Lab 핵심 기능 재현
- [ ] Secret 노출 없음
- [ ] 차이 기록

## Lab B — VM/Linux Machine

### ① 왜 하는가

<system/server-like/direct Linux runtime 목적>

### ② 무엇을 하는가

<핵심 기능 1~3개 또는 full system path>

### ③ 필요한 용어/개념

<systemd/service/firewall/permission/process 등>

### ④ 실행 환경

- MAC-V 또는 WIN-V

### ⑤ 실행

```bash
# Mission-specific commands
```

### ⑥ 예상 결과

<정상 결과>

### ⑦ 검증

```bash
# Mission-specific verify
```

### ⑧ 환경 차이

- OrbStack Ubuntu 24.04:
- WSL2 Ubuntu 24.04:

### ⑨ 정리

```bash
# safe cleanup
```

### ⑩ 완료 확인

- [ ] VM/Linux Lab 핵심 기능 재현
- [ ] Host/Guest 경계 확인
- [ ] Secret 노출 없음
- [ ] 차이 기록

## Portability Note

```text
Primary 결과:
Twin 결과:
환경 차이:
다음 Mission에 재사용할 지식:
```
