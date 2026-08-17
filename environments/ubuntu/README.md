# Ubuntu 24.04 Developer Bootstrap & Package Model

## 목적

Codyssey Basic의 Ubuntu 24.04 환경을 **OS 전제조건 → 공통 필수 도구 → 권장 생산성 도구 → 공통 외부 CLI → 미션/프로젝트 의존성**으로 분리해 관리합니다.

```text
Layer 0 — OS Prerequisites
bash / apt-get / dpkg-query / sudo

Layer 1 — Common Required Base
ca-certificates / curl / wget / git / openssh-client / nano / jq / file / unzip / zip / rsync / bash-completion

Layer 1B — Recommended Productivity
vim / tree / ripgrep / fd-find

Layer 2 — External/Common Developer CLI
gh (GitHub CLI official APT repository)

Layer 3 — Mission / Shared Runtime
python3 / python3-venv / sqlite3 / nginx / openssh-server / ufw / acl / cron / ...

Layer 4 — Project Dependencies
Python .venv / pyproject.toml / requirements.txt / package.json / lock file
```

Docker는 별도 선택 Training Layer이며 Ubuntu Bootstrap의 기본 CLEAR Gate가 아닙니다.

## 🚀 빠른 시작(Quick Start)

> 이미 Ubuntu 24.04에 접속했고 Control Tower를 `$HOME/codyssey/codyssey-basic`에 받은 사람을 위한 재진입 경로입니다.
> 처음 환경을 만드는 경우에는 [`../START-HERE-DEVELOPMENT-ENVIRONMENT.md`](../START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 먼저 사용합니다.

📍 **Ubuntu Bash / Control Tower root에서 실행**합니다.

```bash
cd "$HOME/codyssey/codyssey-basic"
pwd
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
bash environments/ubuntu/validate-scripts.sh
```

정상 기준:

```text
[ ] pwd가 /home/<user>/codyssey/codyssey-basic 계열이다.
[ ] Bootstrap required 항목이 PASS다.
[ ] Git/GitHub 사용자 상태를 확인했다.
[ ] Ubuntu bootstrap shell script 문법 검사가 PASS다.
```

```text
✅ GO
→ 현재 Mission의 ubuntu-packages.txt 확인
→ 부족한 Mission package만 설치

❌ STOP
→ Bootstrap required FAIL 또는 잘못된 경로를 먼저 해결
```

재실행 안전성:

```text
bootstrap.sh --check        → 🟢 SAFE TO RERUN
verify-user-identity.sh     → 🟢 SAFE TO RERUN
validate-scripts.sh         → 🟢 SAFE TO RERUN
bootstrap.sh --install      → 🟡 CHECK BEFORE RERUN
```

## 📑 목차

- [핵심 원칙](#principles)
- [가장 빠른 시작 상세](#fast-start-detail)
- [공통환경 Closeout](#closeout)
- [기본 흐름](#workflow)
- [파일](#files)
- [Mission Package 사용](#mission-package)
- [Package와 Command 검증 분리](#package-command)
- [GitHub CLI gh](#github-cli)
- [Project Dependency와 분리](#project-dependency)
- [안전 원칙](#safety)

---

<a id="principles"></a>
## 핵심 원칙

1. 새 Ubuntu에 모든 미션용 패키지를 한꺼번에 설치하지 않습니다.
2. 설치 전에 현재 상태를 먼저 확인합니다.
3. `apt`는 OS/System package에만 사용합니다.
4. Python 라이브러리는 Repository-local `.venv` 안에 설치합니다.
5. Node 패키지는 `package.json`과 lock file로 관리합니다.
6. `gh`는 일반 Ubuntu community package에만 의존하지 않고 GitHub CLI 공식 APT repository 경로를 사용합니다.
7. `nano`는 공통 기본 편집기, `vim/tree/rg/fdfind`는 권장 생산성 도구로 구분합니다.
8. 미션별 추가 APT 패키지는 각 미션 저장소의 `training/round-01-clear/environment/ubuntu-packages.txt`가 Source of Truth입니다.
9. package 설치 여부와 command 사용 가능 여부는 별도로 검증합니다.
10. 실제 Mission/Evaluation이 특정 도구·버전을 요구하면 공식 요구가 최우선입니다.
11. 공통환경 설계는 Closeout Gate를 통과한 뒤 Freeze하고, 이후에는 현재 Mission CLEAR blocker가 있을 때만 JIT로 최소 수정합니다.

<a id="fast-start-detail"></a>
## 가장 빠른 시작 상세

### 상태 확인만

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
```

### 필수 공통 개발도구 설치

필수 항목이 실제로 누락된 경우에만:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

### 권장 생산성 도구까지 함께 설치

필요한 경우에만:

```bash
bash environments/ubuntu/bootstrap.sh --install --recommended
```

Bootstrap은 다음을 자동화하지 않습니다.

```text
gh auth login
GitHub Token 입력
SSH private key 생성/덮어쓰기
git user.name / user.email 지정
core.autocrlf 변경
Mission별 package 설치
Python/Node project dependency 설치
기존 package downgrade/remove
apt autoremove
```

<a id="closeout"></a>
## 공통환경 Closeout

공통환경을 계속 확장하지 않고 다음 4개 확인 후 **COMMON ENVIRONMENT FREEZE**로 전환합니다.

```text
① Documentation Drift Check
② MAC-V Runtime Bootstrap Verification
③ Git / GitHub User Identity Readiness
④ Shell Script Static Syntax Validation
        ↓
COMMON ENVIRONMENT FREEZE
        ↓
B1-1 Runtime
```

상세 체크리스트는 [`ENVIRONMENT-CLOSEOUT.md`](ENVIRONMENT-CLOSEOUT.md)를 사용합니다.

실행 예:

```bash
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
bash environments/ubuntu/validate-scripts.sh
```

현재 GitHub에 스크립트가 존재한다는 사실은 실제 MAC-V Runtime PASS를 의미하지 않습니다. Freeze 전 실제 Ubuntu 출력으로 확인합니다.

<a id="workflow"></a>
## 기본 흐름

```text
새 Ubuntu 24.04
→ Layer 0 확인
→ Layer 1 필수 Base 확인/설치
→ Layer 2 gh 확인/설치
→ 필요 시 Layer 1B Productivity 설치
→ Common Environment Closeout
→ 현재 Mission 선택
→ Mission ubuntu-packages.txt 확인
→ 부족분만 설치
→ Project environment 구성
→ Verify
→ Mission Runtime
```

<a id="files"></a>
## 파일

- `base-packages.txt` — 공통 필수 APT 패키지
- `base-commands.txt` — Base 설치 후 기대 command
- `recommended-packages.txt` — 선택 생산성 APT 패키지
- `recommended-commands.txt` — 선택 생산성 command
- `BASE-PACKAGES.md` — 계층별 공통 도구 설명과 운영 원칙
- `MISSION-PACKAGE-MATRIX.md` — B1-1~B7-2 Ubuntu/System/Project dependency 지도
- `ENVIRONMENT-CLOSEOUT.md` — 공통환경 마지막 검증과 Freeze Gate
- `verify-prerequisites.sh` — Ubuntu/Bash/APT/sudo 기본 전제조건 검사
- `verify-base.sh` — 공통 package + command 분리 검사
- `setup-base.sh` — 공통 package 중 누락된 것만 설치
- `verify-gh.sh` — `gh` 설치/공식 APT source 상태 확인
- `setup-gh.sh` — GitHub CLI 공식 APT repository를 사용한 설치
- `verify-user-identity.sh` — Git identity와 `gh auth`를 읽기 전용으로 점검
- `verify-recommended.sh` — 권장 도구 상태 확인; 누락되어도 CLEAR Gate 아님
- `setup-recommended.sh` — 권장 도구 설치
- `validate-scripts.sh` — `environments/ubuntu/*.sh`에 대한 `bash -n` 문법 검사
- `bootstrap.sh` — 공통 Ubuntu Developer Bootstrap 통합 진입점
- `setup-mission-packages.sh` — 현재 미션의 `ubuntu-packages.txt` 검사/설치 helper

<a id="mission-package"></a>
## Mission Package 사용

현재 Mission Repository root에서:

```bash
CONTROL_TOWER="${CONTROL_TOWER:-$HOME/codyssey/codyssey-basic}"
PACKAGE_FILE="training/round-01-clear/environment/ubuntu-packages.txt"

bash "$CONTROL_TOWER/environments/ubuntu/setup-mission-packages.sh" \
  "$PACKAGE_FILE" --check
```

부족분만 설치:

```bash
bash "$CONTROL_TOWER/environments/ubuntu/setup-mission-packages.sh" \
  "$PACKAGE_FILE" --install
```

`setup-mission-packages.sh`는 package 설치 여부를 확인합니다. 실제 command/service 동작은 해당 Mission의 `verify.sh`, Runtime Step, Evidence에서 별도로 검증합니다.

<a id="package-command"></a>
## Package와 Command 검증을 분리하는 이유

APT package 이름과 실제 command 이름이 다를 수 있습니다.

```text
openssh-client → ssh
ripgrep        → rg
fd-find        → fdfind
procps         → ps
iproute2       → ss
```

따라서 공통 Base에서는 `dpkg-query`로 package를 확인하고 `command -v`로 실제 command도 확인합니다.

<a id="github-cli"></a>
## GitHub CLI `gh`

`gh`는 공통 개발 CLI로 사용하지만 설치와 인증을 분리합니다.

```text
설치 = setup-gh.sh
인증 = 필요할 때 사용자가 gh auth login
```

이미 `gh`가 설치되어 있는데 공식 GitHub CLI APT source가 보이지 않는 경우, Bootstrap은 기존 설치를 자동 삭제·교체·다운그레이드하지 않고 경고만 표시합니다.

<a id="project-dependency"></a>
## Project Dependency와 분리

예를 들어 FastAPI 미션:

```text
APT
└─ python3, python3-venv

Repository
└─ .venv
   └─ FastAPI / Uvicorn / SQLAlchemy / Jinja2 / 기타 Python package
```

Node 미션은 해당 미션의 Node runtime/version 정책과 `package.json`/lock file을 사용합니다. 모든 Node 패키지를 APT로 설치하지 않습니다.

<a id="safety"></a>
## 안전 원칙

- `CHECK → MISSING → INSTALL → VERIFY` 순서 유지
- 기존 package 제거/다운그레이드 자동화 금지
- `apt autoremove` 자동 실행 금지
- System Python에 프로젝트 package 전역 설치 금지
- 미션 간 `.venv` 공유 금지
- Git identity/SSH private key/Token 자동 생성 또는 덮어쓰기 금지
- package 설치와 Mission 기능 변경은 가능한 한 분리
- 실제 버전은 Runtime 시점에 확인하고 Evidence에 필요한 경우만 기록
- Freeze 이후 현재 Mission CLEAR와 무관한 공통환경 확장은 하지 않음
