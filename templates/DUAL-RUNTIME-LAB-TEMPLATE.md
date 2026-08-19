# <MISSION-ID> 실행 환경 / 선택 Docker 실습(Runtime / Optional Docker Labs)

## 목적

이 문서는 공식 Mission/Evaluation을 바꾸지 않고, 현재 Mission의 **MAC-V / WIN-V 지원 실행 환경(Supported Runtime) + 플랫폼별 수행 기록(Runtime Record) + 선택 Docker 실습(Optional Docker Lab)**을 정리하는 보조 실습 문서입니다.

## 실행 환경 프로필(Runtime Profile)

- 지원 실행 환경 1: `MAC-V` — 학교 macOS + OrbStack Ubuntu 24.04 — Resettable / Ephemeral
- 지원 실행 환경 2: `WIN-V` — 개인 Windows 11 Pro + WSL2 Ubuntu 24.04 — Persistent
- 선택 Docker 실습(Optional Docker Lab): `MAC-D / WIN-D`
- 현재 실행 환경(Current Runtime Context): `<MAC-V | WIN-V>`

`MAC-V`와 `WIN-V`는 합격 기준의 Primary/Secondary 관계가 아닙니다. 공식 Mission/Evaluation과 CLEAR 기준은 동일합니다.

## 완료(CLEAR) 계약

```text
Mission CLEAR
= 공식 Mission/Evaluation
+ 실제 실행(Runtime)
+ 검증(Verification)
+ 증빙(Evidence)

MAC-V Runtime Record
= MAC-V에서 실제 수행한 이력

WIN-V Runtime Record
= WIN-V에서 실제 수행한 이력

CROSS-PLATFORM VERIFIED
= 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS

Docker 실습(Docker Lab)
= 선택
```

- 공식 Mission/Evaluation이 두 플랫폼을 요구하지 않는 한 두 환경 모두 PASS해야만 Mission CLEAR인 것은 아닙니다.
- Docker 실습 미수행은 그 자체로 `FAIL`, `BLOCKED`, `CLEAR 불가`의 근거가 아닙니다.
- 외부 서비스 Evidence가 필요한 경우 local Linux/Docker Lab이 이를 대체하지 않습니다.
- 공식 Mission/Evaluation이 특정 Runtime 또는 Docker를 명시적으로 요구하면 공식 요구가 우선합니다.

## Lab A — 현재 실행 환경(Current Runtime Context)

### ① 왜 하는가

<Mission CLEAR에 필요한 실제 실행 목적>

### ② 무엇을 하는가

<공식 Mission/Evaluation 핵심 경로>

### ③ 필요한 용어/개념

<Mission-specific concepts>

### ④ 실행 환경

```text
학교 Mac에서 수행 → MAC-V
노트북 Win11에서 수행 → WIN-V
```

환경별 준비 원칙:

```text
MAC-V → CHECK BEFORE INSTALL
WIN-V → VERIFY BEFORE REINSTALL
```

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

최소 추적 정보:

```text
Runtime Profile
Host / Linux Runtime
Repository / Branch / Commit
Executed At
Verification Result
Evidence Path
```

### ⑨ 정리(Cleanup)

```bash
# safe cleanup
```

### ⑩ 완료 확인

- [ ] 공식 요구사항 실행
- [ ] 검증(Verification)
- [ ] 증빙(Evidence)
- [ ] 현재 Runtime Profile 기록
- [ ] 비밀정보(Secret) 노출 없음

## Lab B — 다른 지원 환경 재수행(Optional Cross-platform Verification)

### ① 목적

같은 Mission 구현이 다른 지원 Linux Runtime에서도 재현되는지 확인합니다.

```text
현재 MAC-V에서 수행했다면 → WIN-V에서 재수행 가능
현재 WIN-V에서 수행했다면 → MAC-V에서 재수행 가능
```

### ② 범위

`CROSS-PLATFORM VERIFIED`를 목표로 한다면 **다른 환경도 실제 Runtime/Verification/Evidence PASS**가 필요합니다. 단순 핵심 기능 1~3개 확인은 학습 노트일 수 있으나 플랫폼 `PASS`로 올리지 않습니다.

### ③ 실행 환경

- 다른 지원 Runtime: `<MAC-V | WIN-V>`

### ④ 실행

```text
새 Runtime Context 선언
→ Preflight
→ 실제 Mission Runtime
→ Verification
→ Evidence
→ Runtime Record 갱신
```

### ⑤ 완료 확인

- [ ] 다른 지원 환경 실제 Runtime 수행
- [ ] Verification PASS
- [ ] Evidence 추적 가능
- [ ] Repository / Branch / Commit 기록
- [ ] 두 환경 모두 실제 PASS면 CROSS-PLATFORM VERIFIED 판정 검토
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

## 실행 / 이식성 / 훈련 기록(Runtime / Portability / Training Note)

```text
Current Runtime Context:
MAC-V Runtime Record: NOT RUN / PENDING / PASS / FAIL
WIN-V Runtime Record: NOT RUN / PENDING / PASS / FAIL
Mission Status: NOT STARTED / ACTIVE / BLOCKED / CLEAR
Cross-platform: NOT VERIFIED / VERIFIED
Docker Lab: DONE / SKIP / DEFERRED
환경 차이:
다음 Mission에 재사용할 지식:
```

학교 Mac이 Reset된 경우 현재 장비 상태는 필요하면 `READY / STALE / REBUILD NEEDED`로 별도 기록하며, 과거의 추적 가능한 MAC-V PASS Evidence를 자동으로 FAIL로 변경하지 않습니다.
