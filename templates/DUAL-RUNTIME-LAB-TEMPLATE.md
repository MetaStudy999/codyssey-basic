# <MISSION-ID> 실행 환경 / 선택 Docker 실습(Runtime / Optional Docker Labs)

## 목적

이 문서는 공식 Mission/Evaluation을 바꾸지 않고, 현재 Mission의 **기본 실행 환경(Primary Runtime) + 보조 플랫폼 확인(Secondary Platform Check) + 선택 Docker 실습(Optional Docker Lab)**을 정리하는 보조 실습 문서입니다.

## 실행 환경 프로필(Runtime Profile)

- 기본 미션 실행 환경(Primary Mission Runtime): `<PROFILE>`
- 보조 플랫폼 확인(Secondary Platform Check): `<PROFILE>`
- 선택 Docker 실습(Optional Docker Lab): `MAC-D / WIN-D`
- Host 1: `macOS + OrbStack`
- Host 2: `Windows 11 Pro + WSL2 Ubuntu 24.04`

## 완료(CLEAR) 계약

```text
Mission CLEAR
= 공식 Mission/Evaluation
+ 실제 실행(Runtime)
+ 검증(Verification)
+ 증빙(Evidence)

보조 플랫폼 확인(Secondary Platform Check)
= 권장

Docker 실습(Docker Lab)
= 선택
```

- Docker 실습(Docker Lab) 미수행은 그 자체로 `FAIL`, `BLOCKED`, `CLEAR 불가`의 근거가 아닙니다.
- 외부 서비스 증빙(Evidence)이 필요한 경우 local Linux/Docker Lab이 이를 대체하지 않습니다.
- 공식 Mission/Evaluation이 Docker를 명시적으로 요구하면 공식 요구가 우선합니다.

## Lab A — 기본 실행 환경(Primary Runtime)

### ① 왜 하는가

<Mission CLEAR에 필요한 실제 실행 목적>

### ② 무엇을 하는가

<공식 Mission/Evaluation 핵심 경로>

### ③ 필요한 용어/개념

<Mission-specific concepts>

### ④ 실행 환경

- 기본: `MAC-V`
- 또는 Mission의 실제 외부 실행 환경(Runtime)

### ⑤ 실행

```bash
# Mission-specific commands
```

### ⑥ 예상 결과

<정상 결과>

### ⑦ 검증(Verification)

```bash
# Mission-specific verify
```

### ⑧ 증빙(Evidence)

<official requirements와 연결되는 실제 Evidence>

### ⑨ 정리(Cleanup)

```bash
# safe cleanup
```

### ⑩ 완료 확인

- [ ] 공식 요구사항 실행
- [ ] 검증(Verification)
- [ ] 증빙(Evidence)
- [ ] 비밀정보(Secret) 노출 없음

## Lab B — 보조 플랫폼 확인(Secondary Platform Check, 권장)

### ① 목적

Mac/OrbStack에서 수행한 핵심 경로가 Windows 11 Pro + WSL2 Ubuntu 24.04에서도 재현되는지 확인합니다.

### ② 범위

전체 미션을 다시 반복하지 않고 핵심 기능 1~3개만 확인합니다.

### ③ 실행 환경

- 기본: `WIN-V`

### ④ 확인

```text
환경 기동
→ 핵심 기능 1~3개
→ 환경 차이 기록
→ 정리
```

### ⑤ 완료 확인

- [ ] 핵심 기능 재현
- [ ] OrbStack/WSL2 차이 기록
- [ ] 비밀정보(Secret) 노출 없음

## Lab C — 선택 Docker 실습(Optional Docker Lab)

### ① 왜 하는가

<container/image/volume/port/env/reproducibility를 배울 가치가 있을 때만 수행>

### ② 선택 판단

```text
Docker가 현재 Mission CLEAR에 필요한가?
├─ YES: 공식 요구에 따라 수행
└─ NO
   └─ Docker 학습 가치가 높은가?
      ├─ YES: 선택 실습(Optional Lab) 수행
      └─ NO: 건너뜀(SKIP) / 후속 Docker Track
```

### ③ 실행 환경

- `MAC-D` 또는 `WIN-D`

### ④ 실행

```bash
# Mission-specific optional Docker commands
```

### ⑤ 제한

<Docker가 대체할 수 없는 system/external requirements>

### ⑥ 정리(Cleanup)

```bash
# safe cleanup
```

### ⑦ 완료 확인

- [ ] Docker 실습을 선택한 목적이 명확함
- [ ] 핵심 기능 1~3개 재현
- [ ] 비밀정보(Secret)를 image에 포함하지 않음
- [ ] 미수행 시 SKIP 사유 또는 후속 Track 기록

## 이식성 / 훈련 기록(Portability / Training Note)

```text
기본 실행 결과(Primary):
보조 확인 결과(Secondary):
Docker 실습(Docker Lab): DONE / SKIP / DEFERRED
환경 차이:
다음 Mission에 재사용할 지식:
```
