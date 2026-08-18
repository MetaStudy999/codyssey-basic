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
Gate 1 — Documentation Drift           🟡 PARTIAL / blocker 중심 감사 계속
Gate 2 — MAC-V Bootstrap Runtime       ✅ PASS
Gate 3 — Git/GitHub User Identity      🟡 RECHECK REQUIRED
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

**🟡 PARTIAL — blocker 수준 Drift는 우선 교정 중이며, Start Here·Control Tower 핵심 문서·B1-1 상단 Runtime/Navigation Drift는 교정되었습니다.**

남은 B1-1 세부 줄별 해설/실행안전 감사와 이후 미션 문서 정합성은 실제 실행 순서에 맞춰 계속합니다.

이 상태는 공통환경 실제 실행(Runtime) 자체가 실패했다는 뜻이 아닙니다. 현재 B1-1 수행을 잘못 이끌 수 있는 문서 오류가 발견되면 즉시 최소 수정합니다.

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

**🟡 RECHECK REQUIRED**

이전 확인에서는 `git user.name`, `git user.email`이 비어 있었고 당시 `gh`도 아직 설치 전이었습니다. 이후 Bootstrap에서 `gh` 설치와 인증 준비는 확인되었으므로 **현재 상태를 다시 한 번 실행해서 최종 판정**해야 합니다.

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
[ ] Gate 1 — 현재 B1-1 실행을 잘못 이끄는 blocker 수준 Drift 없음
[x] Gate 2 — MAC-V bootstrap 실제 확인 PASS
[ ] Gate 3 — 필요한 Git/GitHub Identity 상태 최종 확인
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

공통환경 **설계와 핵심 Runtime Bootstrap은 준비된 상태**입니다.

현재 남은 핵심은:

```text
Git/GitHub 사용자 준비 상태(User Identity) 최종 재확인
+ B1-1 실행을 막는 문서 불일치(Documentation Drift)가 없는지 확인
        ↓
공통 환경 동결(COMMON ENVIRONMENT FREEZE)
        ↓
B1-1 실제 실행(Runtime)
```

새로운 공통 Tool을 계속 추가하기보다 위 Gate를 닫고 B1-1으로 이동합니다.

```text
공통 환경 마무리(COMMON ENVIRONMENT CLOSEOUT)
→ B1-1 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ ✅ 완료(CLEAR)
```
