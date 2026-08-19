# R01 Phase C — 다음 작업(Next Actions)

현재 목표는 **공통 환경 마무리(Common Environment Closeout)를 끝내고 B1-1부터 실제 실행(Runtime)과 증빙(Evidence)을 확보해 순차적으로 `✅ CLEAR`하는 것**입니다.

현재 운영 모드: **빠른 실행 방식(FAST EXECUTE)**

현재 실행 경로: **빠른 실행 경로(FAST TRACK) — 필수 11개 → 선택 4개**

> Phase A/B에서 설계·Reference·Audit·Runbook 준비를 완료했습니다. Phase C에서는 새로운 설계를 반복하지 않고 `실제 실행(Runtime) → 검증(Verification) → 증빙(Evidence) → 완료(CLEAR)`를 우선합니다. 다만 잘못된 기준·경로·안전 절차가 실제 실행을 방해하면 즉시 최소 교정합니다.

## 🚀 빠른 시작(Quick Start)

현재 바로 할 일은 **MAC-V Git/GitHub 사용자 상태 재확인 → 공통 환경 동결(Common Environment Freeze) 최종 판정 → B1-1 실제 실행(Runtime) 시작**입니다.

📍 Ubuntu Bash / Control Tower root에서:

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/verify-user-identity.sh
```

이미 확인된 항목:

```text
Gate 1 — 문서 불일치 점검(Documentation Drift Check)                    ✅ PASS — B1-1 blocker 수준 감사 완료
Gate 2 — MAC-V 개발환경 초기 준비 실행 검증(Bootstrap Runtime Verification) ✅ PASS
Gate 4 — Bash 정적 문법 검증(Static Syntax Validation)                   ✅ PASS
```

아직 최종 확인이 필요한 항목:

```text
Gate 3 — Git/GitHub 사용자 준비 상태(User Identity Readiness)            🟡 WIN-V PASS / MAC-V 재확인 대기
```

`verify-user-identity.sh` 결과가 MAC-V에서 현재 작업에 필요한 수준으로 준비되면 [`environments/ubuntu/ENVIRONMENT-CLOSEOUT.md`](../../environments/ubuntu/ENVIRONMENT-CLOSEOUT.md)에서 동결(Freeze) 조건을 최종 확인한 뒤 B1-1으로 이동합니다.

## 📑 목차

- [R01 실행환경 범위](#runtime-scope)
- [공통 환경 마무리](#environment-closeout)
- [빠른 실행 경로(FAST TRACK) 실행 순서](#fast-track)
- [Phase A/B 완료 사항](#phase-ab)
- [Phase C 실행 우선 원칙](#phase-c-principles)
- [현재 실제 실행 대상](#current-runtime)
- [B1-1 즉시 실행 순서](#b1-1-now)
- [B1-1 안전 제한](#b1-1-safety)
- [Stage 전환 규칙](#stage-transition)

---

<a id="runtime-scope"></a>
## R01 실행환경 범위

현재 R01에서 사용하는 환경은 아래 네 실행 환경 프로필(Runtime Profile)로 제한합니다.

```text
macOS + OrbStack
├─ MAC-V: Ubuntu 24.04 Linux Machine     ← 기본 실행 환경(Primary)
└─ MAC-D: Docker                         ← 선택 실습(Lab)

Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-V: Ubuntu 24.04 direct runtime   ← 권장 보조 환경(Secondary)
└─ WIN-D: Docker                         ← 선택 실습(Lab)
```

Ubuntu Native, 별도 Hyper-V VM, VMware, KVM/QEMU, Proxmox, Kubernetes는 R01 FAST TRACK 범위에서 제외하고 이후 Portability/Advanced 단계로 미룹니다.

환경 계약:

- `environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`
- `environments/RUNTIME-PROFILES.md`
- `environments/DOCKER-POLICY.md`
- `environments/MISSION-LAB-MATRIX.md`
- `environments/ubuntu/README.md`
- `environments/ubuntu/ENVIRONMENT-CLOSEOUT.md`

<a id="environment-closeout"></a>
## 공통 환경 마무리(Common Environment Closeout) — B1-1 직전 마지막 환경 판정(Gate)

다음 4개 Gate를 기준으로 합니다.

```text
① 문서 불일치 점검(Documentation Drift Check)
② MAC-V 개발환경 초기 준비 실행 검증(Bootstrap Runtime Verification)
③ Git/GitHub 사용자 준비 상태(User Identity Readiness)
④ Shell Script 정적 문법 검증(Static Syntax Validation)
        ↓
공통 환경 동결(COMMON ENVIRONMENT FREEZE)
        ↓
B1-1 실제 실행(Runtime)
```

현재 확인 상태:

| Gate | 상태 | 근거/다음 행동 |
|---|---|---|
| 1. 문서 불일치 점검(Documentation Drift) | ✅ PASS | B1-1 3계층 구조와 Runtime 진입 경로 재검증. 현재 실행을 잘못 이끄는 blocker 수준 Drift 없음. 비차단 표현 개선은 JIT 지속 |
| 2. MAC-V 개발환경 초기 준비(Bootstrap) | ✅ PASS | 실제 Ubuntu 24.04에서 required prerequisites/base/commands/`gh` 확인 완료 |
| 3. Git/GitHub 사용자 준비 상태(Identity) | 🟡 PARTIAL | WIN-V 실제 실행 `3 PASS / 0 WARNING` 확인. R01 기본 실행 환경인 MAC-V에서는 동일 스크립트 최종 재확인 필요 |
| 4. Bash 문법(Syntax) | ✅ PASS | `validate-scripts.sh` 실제 실행 11 PASS / 0 FAIL |

다시 실행할 명령:

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/verify-user-identity.sh
```

> 문서에 스크립트가 존재하는 것과 실제 실행 환경(Runtime)에서의 PASS는 다릅니다. Gate 2·4와 WIN-V Gate 3 PASS는 이 대화에서 사용자가 실제 Ubuntu에서 제공한 출력에 근거합니다. Gate 1은 현재 GitHub `main`의 문서·경로·안전 절차를 blocker 기준으로 재감사한 결과입니다.

<a id="fast-track"></a>
## 빠른 실행 경로(FAST TRACK) 실행 순서

```text
Stage 1 — 필수 완료(REQUIRED CLEAR)
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — 선택 완료(OPTIONAL CLEAR)
B4-2 → B5-2 → B5-3 → B7-2
```

FAST TRACK은 선택 미션을 건너뛰는 경로가 아닙니다. **필수 11개를 먼저 모두 CLEAR한 뒤 선택 4개를 수행하여 R01 전체 15개를 완료**합니다.

`FAST EXECUTE`는 한 미션 안에서 불필요한 재설계를 줄이는 운영 방식이고, `FAST TRACK`은 R01의 미션 실행 순서입니다.

<a id="phase-ab"></a>
## Phase A/B 및 공통환경 설계 완료

- [x] Phase A Reference Build — 15/15 CORE READY
- [x] Canonical Final Consistency Audit — PASS 15/15
- [x] Cross-Mission Audit — COMPLETE / BLOCKER 0
- [x] 15개 Runtime command / working-directory / verify / Evidence root 통합
- [x] Mission Dependency Map 동결
- [x] Phase C Preflight 동결
- [x] Phase C Runtime Runbook Freeze
- [x] B5-1 Q01~Q16 문서 drift 교정
- [x] R01 Runtime Profiles — MAC-V/WIN-V/MAC-D/WIN-D 정의
- [x] Docker를 선택 Training Layer로 분리
- [x] 15개 Mission Primary/Secondary/Docker Lab Matrix 정의
- [x] Ubuntu Developer Bootstrap 계층 정의
- [x] Common Base / Recommended / `gh` / Mission / Project dependency 분리
- [x] package와 command 검증 분리
- [x] 목차·Quick Start·입문자 탐색 표준 수립
- [x] Control Tower 핵심 진입/실행 문서에 탐색 기준 적용 시작
- [x] B1-1 전체 허브 → 모듈 README → Learning Unit 3계층 구조 적용·검증
- [x] B1-1 blocker 수준 Documentation Drift Gate PASS
- [x] MAC-V Bootstrap 실제 Runtime PASS 확인
- [x] Ubuntu Bootstrap shell syntax 11 PASS / 0 FAIL 확인
- [ ] MAC-V Git/GitHub User Identity 최종 재확인
- [ ] Common Environment Freeze 최종 판정

<a id="phase-c-principles"></a>
## Phase C 실행 우선 원칙

실행 중 새 문제나 개선 아이디어가 생기면 먼저 다음을 판단합니다.

```text
현재 B1-1 CLEAR를 막는가?

YES
→ 원인 확인
→ 최소 수정
→ 재검증
→ 계속 실행

NO
→ 실제 실행(Runtime)을 멈추지 않음
→ 후속 개선 후보로 미룸
```

다만 **기준이 실제 명령·경로·안전·평가 판정을 잘못 이끌 수 있다면 이는 실행 품질 문제이므로 즉시 교정**합니다.

즉시 수정 대상:

- 공식 요구사항 누락
- 실행 차단 문제(Runtime BLOCKER)
- Secret/보안 문제
- SSH/Data/Cloud 안전 문제
- 검증/증빙 오판정
- 입문자가 잘못된 Host/PWD/명령을 실행하게 만드는 문서 오류
- 긴 실행형 문서에서 탐색 불가로 실제 수행 순서를 잃는 문제

현재 CLEAR와 무관한 대규모 리팩터링·UI 고도화·Docker 추가실습·미래 Round 확장은 뒤로 미룹니다.

운영 비중은 **실행 80~90% / 설계·기준 보정 10~20%**를 지향하되, 안전과 정합성은 비율 때문에 생략하지 않습니다.

<a id="current-runtime"></a>
## 현재 실제 실행(Runtime) 대상

**B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**

Mission 상태: **🟡 ACTIVE**

FAST TRACK 상태:

- Stage 1 Required: **B1-1 진행 중 / 0 of 11 CLEAR**
- Stage 2 Optional: **대기 / 0 of 4 CLEAR**

B1-1 실행 환경 프로필(Runtime Profile):

- Primary CLEAR: **MAC-V — macOS → OrbStack → Ubuntu 24.04**
- Secondary Check: **WIN-V — Windows 11 Pro → WSL2 → Ubuntu 24.04** — 권장
- Docker Practice: **MAC-D / WIN-D** — 선택

<a id="b1-1-now"></a>
## B1-1 즉시 실행 순서

1. MAC-V에서 `verify-user-identity.sh` 최종 재확인
2. 공통 환경 마무리(Common Environment Closeout) / 동결(Freeze) 최종 판정
3. `PHASE-C-PREFLIGHT.md` 공통 Gate 확인
4. B1-1 repository root / branch / local changes 확인
5. Primary `MAC-V` 환경에서 Ubuntu 24.04 / architecture / systemd 확인
6. B1-1 `BEGINNER-GUIDE.md` 빠른 시작(Quick Start) → STEP 01 baseline 수행
7. SSH 20022 safe migration
8. UFW final policy
9. users/groups/effective permission
10. 제공 `agent-app.zip`의 실제 CPU architecture/파일 확인
11. 실제 Agent Boot 5/5 + `Agent READY` + `15034 LISTEN`
12. `monitor.sh` 정상/실패/Warning/rotation
13. `agent-admin` cron 매분 + 실제 log growth
14. `sudo bash training/round-01-clear/environment/verify.sh`
15. `training/round-01-clear/evidence/` 실제 증빙(Evidence) 연결
16. Evaluation 설명 + Secret 최종 확인
17. 조건 충족 시에만 `✅ B1-1 CLEAR`
18. B1-2를 `🟡 ACTIVE`로 전환

**B1-1 CLEAR 전에 Docker Lab을 수행할 필요는 없습니다.**

<a id="b1-1-safety"></a>
## B1-1 안전 제한

- `t_secret.key` 실제 값은 GitHub/채팅/log/Evidence에 출력하지 않음
- SSH 설정은 backup → syntax/effective check → reload → 새 세션 확인 순서
- UFW active 환경에서는 20022를 먼저 허용하고 새 SSH 세션 성공 전 기존 접근 경로를 제거하지 않음
- 제공 archive 실행 파일 이름/architecture를 추측하지 않음
- `verify.sh`는 실제 시스템 검증 스크립트이므로 Runtime 구성 이후 `sudo`로 실행
- 실제 실행 결과를 받기 전에 PASS/CLEAR로 표시하지 않음
- Docker Lab 결과만으로 B1-1 system-level 요구를 PASS 처리하지 않음

<a id="stage-transition"></a>
## Stage 전환 규칙

- B1-1부터 B7-1까지 필수 11개가 모두 `✅ CLEAR`되기 전에는 Stage 2를 정식 실제 실행 대상으로 전환하지 않습니다.
- 필수 미션 수행 중 선택 미션의 지식이 필요하면 `START-CHECK`와 관련 개념만 참고할 수 있지만 선택 미션 실제 실행 자체는 Stage 2에서 수행합니다.
- B7-1 CLEAR 후 B4-2를 `🟡 ACTIVE`로 전환합니다.
- B4-2 → B5-2 → B5-3 → B7-2 순서로 선택 미션을 완료합니다.

상세 실행 계약은 `PHASE-C-RUNBOOK.md`, 공통 시작 Gate는 `PHASE-C-PREFLIGHT.md`, 선후관계는 `MISSION-DEPENDENCY-MAP.md`, 전체 순서는 루트 `MISSION-INDEX.md`, 환경 계약은 `environments/`를 사용합니다.
