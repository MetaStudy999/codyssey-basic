# Ubuntu 공통 환경 마무리(Common Environment Closeout)

## 목적

R01 Phase C에서 공통환경 설계를 더 확장하기 전에, 지금까지 준비한 Ubuntu 24.04 개발환경 초기 준비(Developer Bootstrap)를 실제 실행 가능한 상태로 닫고 이후에는 미션 실제 실행(Mission Runtime)을 우선합니다.

공통환경은 다음 4개 마무리 판정(Closeout Gate)을 통과한 뒤 **공통 환경 동결(COMMON ENVIRONMENT FREEZE)**로 간주합니다.

```text
① 문서 불일치 점검(Documentation Drift Check)
② MAC-V Runtime Bootstrap 검증(Verification)
③ Git / GitHub 사용자 준비 상태(User Identity Readiness)
④ Shell Script 정적 문법 검증(Static Syntax Validation)
        ↓
공통 환경 동결(COMMON ENVIRONMENT FREEZE)
        ↓
B1-1 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ ✅ 완료(CLEAR)
```

이 동결(Freeze)은 코디세이 공식 Mission/Evaluation을 변경하지 않습니다. 실제 Mission Runtime에서 blocker가 발견되면 JIT 방식으로 최소 수정합니다.

## 🚀 빠른 확인(Quick Check)

현재 실제 확인 상태:

```text
Gate 1 — Documentation Drift           ✅ PASS — B1-1 blocker-level audit complete
Gate 2 — MAC-V Bootstrap Runtime       ✅ PASS
Gate 3 — Git/GitHub User Identity      🟡 PARTIAL — WIN-V PASS / MAC-V PENDING
Gate 4 — Bash Static Syntax Validation ✅ PASS
```

지금 필요한 명령은 하나입니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/verify-user-identity.sh
```

Gate 3가 현재 Git/GitHub 작업에 필요한 수준으로 준비되어 있으면 아래 동결 판정(Freeze Gate)을 다시 확인합니다.

## 📑 목차

- [Gate 1 — 문서 불일치 점검(Documentation Drift Check)](#gate-1)
- [Gate 2 — MAC-V Runtime Bootstrap 검증(Verification)](#gate-2)
- [Gate 3 — Git/GitHub 사용자 준비 상태(User Identity Readiness)](#gate-3)
- [Gate 4 — Shell Script 정적 문법 검증(Static Syntax Validation)](#gate-4)
- [동결(Freeze) 규칙](#freeze)
- [현재 결론](#conclusion)

---

<a id="gate-1"></a>
## Gate 1 — 문서 불일치 점검(Documentation Drift Check)

### 목표

중앙 Base/Bootstrap 기준과 각 Mission 설명 문서의 오래된 설치 예시가 충돌하지 않는지 확인합니다.

현재 기준 문서(Source of Truth):

```text
environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md
environments/ubuntu/base-packages.txt
environments/ubuntu/README.md
environments/ubuntu/BASE-PACKAGES.md
environments/ubuntu/MISSION-PACKAGE-MATRIX.md
standards/BEGINNER-TRAINING-STANDARD.md
standards/DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md
standards/BEGINNER-GUIDE-MODULARIZATION-STANDARD.md
standards/BEGINNER-DOCUMENTATION-AUDIT.md
각 Mission training/round-01-clear/environment/ubuntu-packages.txt
```

현재 기준:

```text
Common Required Base
= ca-certificates / curl / wget / git / openssh-client / nano / jq / file / unzip / zip / rsync / bash-completion

Recommended Productivity
= vim / tree / ripgrep / fd-find

Common External Developer CLI
= gh (GitHub CLI official APT repository)
```

문서 불일치(Drift) 교정은 기능 변경과 분리하며, 공식 Mission/Evaluation의 요구를 임의 변경하지 않습니다.

### 현재 상태

**✅ PASS — 현재 B1-1 실제 실행(Runtime)을 잘못 이끌 수 있는 blocker 수준 Documentation Drift 없음.**

2026-08-19 기준으로 현재 B1-1 `main`과 Control Tower 기준을 다시 대조하여 다음을 확인했습니다.

```text
- BEGINNER-GUIDE.md가 전체 중앙 허브(Global Hub) 역할을 함
- 00~08 모듈 README 지역 목차(Local TOC)가 실제 경로로 연결됨
- STEP 01~15 실행형 본문이 세부 학습 문서(Learning Unit)로 분리됨
- 기존 평면 상세 문서는 호환 경로(Compatibility Path)만 유지하고 주 학습 기준으로 사용하지 않음
- Primary Runtime = MAC-V / OrbStack Ubuntu 24.04, Secondary = WIN-V / WSL2 Ubuntu 24.04 구분
- Common Base와 B1-1 Mission Package 계층이 충돌하지 않음
- Quick Start가 공통 환경 동결 전에 SSH/UFW 변경으로 우회하지 않음
- SSH 20022 변경은 backup → 사전 허용 → sshd 검증 → reload → 새 세션 → 기존 경로 정리 순서
- UFW는 20022/15034 선허용 → 기본 정책 → 활성화/재적용 → SSH 유지 확인 → 추가 ALLOW IN 개별 정리 순서
- OrbStack 관리 접속과 Mission OpenSSH `sshd:20022`를 명확히 구분
- Secret은 실제 값이 아니라 존재·소유권·권한 등 메타데이터만 취급
- Verification / Evidence / Evaluation / CLEAR를 서로 대체하지 않음
- 실제 Runtime을 수행하지 않은 상태를 PASS/CLEAR로 기록하지 않음
```

이 PASS는 **공통 환경 동결을 막는 blocker 수준 문서 Drift가 없다는 판정**입니다. 모든 문장의 용어·품사·가독성 polishing까지 완전히 끝났다는 뜻은 아닙니다. 비차단 표현 개선과 이후 미션 문서 정합성은 실제 실행 순서에 맞춰 JIT 감사로 계속합니다.

`BEGINNER READY` 및 Mission `CLEAR`는 별도 상태이며, 실제 Runtime/Verification/Evidence 없이 자동으로 승격하지 않습니다.

---

<a id="gate-2"></a>
## Gate 2 — MAC-V Runtime Bootstrap 검증(Verification)

### 목표

GitHub에 저장된 스크립트의 존재가 아니라 실제 OrbStack Ubuntu 24.04에서 동작하는지 확인합니다.

확인 명령:

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
```

필수 항목이 누락된 경우에만:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

### PASS 기준

- Ubuntu prerequisites 확인
- Required Base package/command 확인
- `gh` 설치 및 사용 가능
- 공식 GitHub CLI APT keyring/source 확인
- 설치 후 `bootstrap.sh --check` PASS
- Secret/Identity를 자동 생성하지 않음

### 실제 확인 상태

**✅ PASS**

실제 Ubuntu 24.04 실행 환경(Runtime)에서 확인된 핵심 결과:

```text
prerequisites: 5 PASS / 0 missing
required base packages: 12 PASS / 0 missing
required base commands: 13 PASS / 0 missing
gh: 2.97.0
required Ubuntu developer bootstrap: PASS
```

권장 생산성 도구(`tree`, `ripgrep`, `fd-find` 등)의 누락은 기본 CLEAR blocker가 아닙니다.

---

<a id="gate-3"></a>
## Gate 3 — Git / GitHub 사용자 준비 상태(User Identity Readiness)

### 목표

패키지 설치와 사용자별 Git/GitHub Identity를 분리하되, Mission 시작 전에 현재 상태를 읽기 전용으로 확인합니다.

```bash
bash environments/ubuntu/verify-user-identity.sh
```

직접 확인할 때:

```bash
git config --get user.name
git config --get user.email
gh auth status
```

SSH Git remote를 실제 사용하는 경우에만 필요 시:

```bash
ssh -T git@github.com
```

### 자동화 금지

```text
gh auth login 자동 실행
GitHub Token 입력/저장
SSH private key 자동 생성/교체
git user.name / user.email 임의 설정
core.autocrlf 강제 변경
```

Identity 미설정은 공통환경 스크립트 실패와 동일하지 않습니다. GitHub write 작업이 필요한 Mission에서만 실제 blocker 여부를 판단합니다.

### 현재 상태

**🟡 PARTIAL — WIN-V PASS / MAC-V PENDING**

WIN-V(Windows 11 Pro → WSL2 Ubuntu 24.04)에서 `verify-user-identity.sh`를 실제 실행하여 다음 결과를 확인했습니다.

```text
[PASS] git user.name is configured
[PASS] git user.email is configured
[PASS] gh authentication is ready
Result: 3 PASS / 0 WARNING
```

따라서 **WIN-V 사용자 준비 상태는 ✅ PASS**입니다. 다만 R01 기본 실행 환경(Primary)인 MAC-V(OrbStack Ubuntu 24.04)에서는 사용자별 Git/GitHub 상태가 별도로 달라질 수 있으므로, MAC-V에서 같은 스크립트를 다시 실행하기 전까지 Gate 3 전체는 최종 PASS로 닫지 않습니다.

필요한 경우에만 본인 정보로 설정합니다.

```bash
git config --global user.name "내 Git 작성자 이름"
git config --global user.email "내 GitHub 이메일"
```

> 실제 이메일이나 Token 값을 문서·채팅·증빙(Evidence)에 붙여 넣지 않습니다.

---

<a id="gate-4"></a>
## Gate 4 — Shell Script 정적 문법 검증(Static Syntax Validation)

### 목표

Ubuntu Bootstrap 관련 `.sh` 파일에 기본 Bash 문법 오류가 없는지 확인합니다.

```bash
bash environments/ubuntu/validate-scripts.sh
```

이 스크립트는 `environments/ubuntu/*.sh`에 대해 `bash -n`을 수행합니다.

추후 선택적으로 ShellCheck를 사용할 수 있지만 R01 Common Required Base나 Mission CLEAR Gate로 추가하지 않습니다.

### 실제 확인 상태

**✅ PASS — 11 PASS / 0 FAIL**

실제 Ubuntu 실행 환경(Runtime)에서 Bash 정적 문법 검증이 성공했습니다.

---

<a id="freeze"></a>
## 동결(Freeze) 규칙

다음 조건을 만족하면 공통환경 설계를 동결합니다.

```text
[x] Gate 1 — 현재 B1-1 실행을 잘못 이끄는 blocker 수준 Drift 없음
[x] Gate 2 — MAC-V bootstrap 실제 확인 PASS
[ ] Gate 3 — WIN-V Identity ✅ PASS / MAC-V Primary Identity 최종 확인 대기
[x] Gate 4 — bash -n syntax validation PASS
```

동결(Freeze) 이후 기본 원칙:

```text
현재 Mission CLEAR를 막는가?
YES → 최소 수정 → 재검증 → 계속 실행
NO  → 공통환경 확장하지 않음 → 후속 개선 후보로 미룸
```

지금 추가하지 않는 항목:

```text
build-essential / gcc / g++ / make / pkg-config
Node.js / npm 전역 표준화
Docker를 CLEAR Gate로 승격
AWS CLI 공통 필수화
kubectl / Terraform / Kubernetes
Redis / PostgreSQL 공통 설치
ShellCheck 공통 필수화
추가 IDE extension 강제
```

이 항목들은 실제 Mission 또는 이후 Advanced/Portability 단계에서 필요할 때 추가합니다.

---

<a id="conclusion"></a>
## 현재 결론

공통환경 **설계와 핵심 Runtime Bootstrap, B1-1 blocker 수준 문서 감사는 준비 완료**입니다.

현재 남은 핵심은 하나입니다.

```text
MAC-V 기본 실행 환경(Primary)의 Git/GitHub 사용자 준비 상태(User Identity) 최종 확인
        ↓
공통 환경 동결(COMMON ENVIRONMENT FREEZE)
        ↓
B1-1 실제 실행(Runtime)
```

새로운 공통 Tool을 계속 추가하기보다 Gate 3을 닫고 B1-1으로 이동합니다. 비차단 문서 표현 개선은 실제 Runtime을 중단하지 않고 JIT 방식으로 처리합니다.

```text
공통 환경 마무리(COMMON ENVIRONMENT CLOSEOUT)
→ B1-1 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ ✅ 완료(CLEAR)
```
