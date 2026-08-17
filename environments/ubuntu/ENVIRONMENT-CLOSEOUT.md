# Ubuntu Common Environment Closeout

## 목적

R01 Phase C에서 공통환경 설계를 더 확장하기 전에, 지금까지 준비한 Ubuntu 24.04 Developer Bootstrap을 실제 실행 가능한 상태로 닫고 이후에는 Mission Runtime을 우선합니다.

공통환경은 다음 4개 Closeout Gate를 통과한 뒤 **COMMON ENVIRONMENT FREEZE**로 간주합니다.

```text
① Documentation Drift Check
② MAC-V Runtime Bootstrap Verification
③ Git / GitHub User Identity Readiness
④ Shell Script Static Syntax Validation
        ↓
COMMON ENVIRONMENT FREEZE
        ↓
B1-1 Runtime → Verify → Evidence → CLEAR
```

이 Freeze는 코디세이 공식 Mission/Evaluation을 변경하지 않습니다. 실제 Mission Runtime에서 blocker가 발견되면 JIT 방식으로 최소 수정합니다.

---

## Gate 1 — Documentation Drift Check

### 목표

중앙 Base/Bootstrap 기준과 각 Mission 설명 문서의 오래된 설치 예시가 충돌하지 않는지 확인합니다.

현재 Source of Truth:

```text
environments/ubuntu/base-packages.txt
environments/ubuntu/README.md
environments/ubuntu/BASE-PACKAGES.md
environments/ubuntu/MISSION-PACKAGE-MATRIX.md
각 Mission training/round-01-clear/environment/ubuntu-packages.txt
```

특히 확인할 오래된 표현:

```text
Base = ca-certificates / curl / git
Mission에서 file / unzip / openssh-client를 중복 설치
B2-2에서 gh를 단순 선택 도구로만 취급
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

문서 Drift 교정은 기능 변경과 분리하며, 공식 Mission/Evaluation의 요구를 임의 변경하지 않습니다.

상태: **PARTIAL — 중앙 기준과 핵심 B1-1/B2-2/B6-1 package list는 교정됨. 나머지 설명 문서는 Runtime 중 blocker가 되는 경우 우선 수정하고, 비차단 문구는 별도 정합성 작업으로 처리.**

---

## Gate 2 — MAC-V Runtime Bootstrap Verification

### 목표

GitHub에 저장된 스크립트의 존재가 아니라 실제 OrbStack Ubuntu 24.04에서 동작하는지 확인합니다.

실제 MAC-V Ubuntu에서:

```bash
cd "$HOME/codyssey/codyssey-basic"

bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

권장 생산성 도구까지 설치하려면:

```bash
bash environments/ubuntu/bootstrap.sh --install --recommended
```

### PASS 기준

- Ubuntu prerequisites 확인
- Required Base package/command 확인
- `gh` 설치 및 사용 가능
- 설치 후 `bootstrap.sh --check` PASS
- Secret/Identity를 자동 생성하지 않음

상태: **NOT VERIFIED — 실제 MAC-V Runtime 출력 필요**

---

## Gate 3 — Git / GitHub User Identity Readiness

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

상태: **NOT VERIFIED — 사용자별 Runtime 상태 확인 필요**

---

## Gate 4 — Shell Script Static Syntax Validation

### 목표

Ubuntu Bootstrap 관련 `.sh` 파일에 기본 Bash 문법 오류가 없는지 확인합니다.

```bash
bash environments/ubuntu/validate-scripts.sh
```

이 스크립트는 `environments/ubuntu/*.sh`에 대해 `bash -n`을 수행합니다.

추후 선택적으로 ShellCheck를 사용할 수 있지만 R01 Common Required Base나 Mission CLEAR Gate로 추가하지 않습니다.

상태: **NOT VERIFIED — 실제 Runtime에서 실행 필요**

---

## Freeze 규칙

다음 조건을 만족하면 공통환경 설계를 동결합니다.

```text
[ ] Gate 1 — blocker 수준의 문서 Drift 없음
[ ] Gate 2 — MAC-V bootstrap 실제 확인
[ ] Gate 3 — 필요한 Git/GitHub Identity 상태 확인
[ ] Gate 4 — bash -n syntax validation PASS
```

Freeze 이후 기본 원칙:

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

## 현재 결론

공통환경 **설계는 사실상 완료**되었습니다. 남은 일은 새로운 패키지나 도구를 계속 추가하는 것이 아니라 위 4개 Closeout Gate의 실제 확인입니다.

현재 Active Mission은 B1-1이며, Closeout 확인 후 바로 다음 흐름으로 이동합니다.

```text
COMMON ENVIRONMENT CLOSEOUT
→ B1-1 Runtime
→ Verify
→ Evidence
→ ✅ CLEAR
```
