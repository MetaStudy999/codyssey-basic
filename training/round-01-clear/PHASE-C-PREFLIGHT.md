# R01 Phase C — 실행 전 점검(Runtime Preflight)

동결일: 2026-08-17
현재 번호 반영일: 2026-09-04

> 현재 Mission ID(미션 번호)의 단일 기준은 [`../../CURRENT-MISSION-MAP.md`](../../CURRENT-MISSION-MAP.md)입니다. Repository(저장소)는 미션 번호와 분리된 주제 기반 Canonical Repository를 사용합니다.

## 목적

각 미션 실제 실행(Runtime)을 시작하기 전에 **현재 실행 환경(Current Runtime Context), 잘못된 저장소, 잘못된 Host/Guest 작업경로, Cross-platform 파일 형식 문제, Ubuntu 공통 개발도구/미션 패키지 누락, 남아 있는 프로세스, Port 충돌, 가상환경 혼동, Secret 노출, 기존 데이터/Cloud 자원 오염**을 먼저 차단합니다.

이 문서는 미션 구현을 대신하지 않는 공통 안전 판정(Gate)입니다.

## 🚀 빠른 사전점검(Quick Preflight)

> 이미 Ubuntu 24.04 실행 환경(Runtime)과 현재 Mission Repository가 준비된 학습자용입니다. 처음 환경을 만드는 경우 [`../../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`](../../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 먼저 완료합니다.

### 0. 현재 실행 환경(Current Runtime Context) 선언

작업 시작 시 실제 위치를 먼저 확정합니다.

```text
학교 Mac에서 수행
→ MAC-V
→ macOS → OrbStack → Ubuntu 24.04
→ Resettable / Ephemeral
→ CHECK BEFORE INSTALL

노트북 Win11에서 수행
→ WIN-V
→ Windows 11 Pro → WSL2 → Ubuntu 24.04
→ Persistent
→ VERIFY BEFORE REINSTALL
```

`MAC-V`와 `WIN-V`는 합격 기준의 Primary/Secondary 관계가 아닙니다. 공식 Mission/Evaluation, 검증(Verification), 증빙 자료(Evidence), Mission CLEAR 기준은 동일합니다.

📍 현재 Mission Repository root의 **선택한 Ubuntu Bash**에서 실행합니다.

```bash
pwd
git rev-parse --show-toplevel
git branch --show-current
git status --short
printf 'HOME=%s\n' "$HOME"
printf 'VIRTUAL_ENV=%s\n' "${VIRTUAL_ENV:-<none>}"
git diff --check
```

공통 개발환경 확인:

```bash
CONTROL_TOWER="${CONTROL_TOWER:-$HOME/codyssey/codyssey-basic}"
bash "$CONTROL_TOWER/environments/ubuntu/bootstrap.sh" --check
```

정상 기준:

```text
[ ] Current Runtime Context가 MAC-V 또는 WIN-V로 명확하다.
[ ] Repository/PWD/Branch를 스스로 설명할 수 있다.
[ ] 예상하지 않은 Git 변경을 무시하지 않았다.
[ ] HOME/PWD가 Ubuntu /home/... 계열이다.
[ ] 다른 Mission의 .venv가 활성화되어 있지 않다.
[ ] git diff --check에 line-ending/whitespace blocker가 없다.
[ ] Bootstrap required 항목이 PASS다.
```

```text
✅ GO
→ 아래 상세 실행 전 점검(Preflight)에서 현재 Mission에 해당하는 항목을 확인
→ 시작 판정(Start Gate) PASS 후 입문자 가이드(Beginner Guide) 시작

❌ STOP
→ 잘못된 Runtime Context/Host/PWD/Branch/venv/Bootstrap을 먼저 수정
```

위 상태 확인 명령은 **🟢 재실행 안전(SAFE TO RERUN)**입니다.

플랫폼별 실제 Mission 수행 상태는 다음 중앙 상태표에 기록합니다.

- [`RUNTIME-EXECUTION-MATRIX.md`](RUNTIME-EXECUTION-MATRIX.md)

Preflight와 Bootstrap/Identity 확인만으로 `MAC-V PASS`, `WIN-V PASS`, Mission `CLEAR`를 기록하지 않습니다.

## 📑 목차

- [0. 현재 실행 환경(Current Runtime Context)](#current-runtime)
- [1. 저장소(Repository) 확인](#repository)
- [2. VS Code Remote / Workspace](#workspace)
- [3. Cross-platform Git / File](#cross-platform)
- [4. 현재 실행 환경(Runtime) / 공통 CLI](#runtime-cli)
- [5. Ubuntu Bootstrap / Mission Package](#bootstrap)
- [6. Process / Port](#process-port)
- [7. Python 환경 격리](#python)
- [8. Node 환경 격리](#node)
- [9. 비밀정보 설정 여부(Secret Presence)](#secret)
- [10. Local data / DB](#data-db)
- [11. Cloud / Remote resource](#cloud)
- [12. 증빙(Evidence) 시작 상태](#evidence)
- [13. 시작 판정(Start Gate)](#start-gate)

---

<a id="current-runtime"></a>
## 0. 현재 실행 환경(Current Runtime Context)

지원 직접 Linux Runtime:

```text
MAC-V = 학교 macOS → OrbStack → Ubuntu 24.04
WIN-V = 개인 Windows 11 Pro → WSL2 → Ubuntu 24.04
```

운영 차이:

```text
MAC-V
Resettable / Ephemeral
→ 환경이 살아 있는지 먼저 확인
→ Reset되었을 때만 필요한 항목 재구성

WIN-V
Persistent
→ 기존 환경을 먼저 검증
→ 정상 상태면 재설치하지 않음
→ 문제 있을 때만 최소 Repair
```

환경을 바꾸어 같은 Mission을 다시 수행할 때는 새 Runtime Context에서 이 Preflight를 다시 실행합니다. 이전 환경의 출력이나 Evidence를 새 환경의 실제 결과로 재사용하지 않습니다.

---

<a id="repository"></a>
## 1. 저장소(Repository) 확인

Repository root에서 다음을 확인합니다.

```bash
pwd
git rev-parse --show-toplevel
git branch --show-current
git status --short
git remote -v
```

실제 Secret이 remote URL에 포함되어 있지 않은지 확인합니다. 작업 중인 변경이 있으면 먼저 의미를 확인하고 무조건 reset하지 않습니다.

학교 Mac에서는 Reset 후 Repository가 없을 수 있습니다.

```text
Repository 있음 → 기존 clone 유지 + git 상태 확인
Repository 없음 → 필요한 Repository만 clone
```

Windows 11 노트북에서는 기존 Repository가 정상이라면 삭제·재clone하지 않습니다.

---

<a id="workspace"></a>
## 2. VS Code Remote / Workspace 경로 확인

두 환경 모두 **Linux Runtime 내부의 `$HOME/codyssey/...`를 Mission Repository 작업공간으로 사용**합니다.

### MAC-V

```text
macOS VS Code
→ Remote-SSH `orb`
→ OrbStack Ubuntu 24.04
→ `$HOME/codyssey/<current-repo>`
→ Ubuntu Bash
```

### WIN-V

```text
Windows VS Code
→ WSL / Remote 연결
→ WSL2 Ubuntu 24.04
→ `$HOME/codyssey/<current-repo>`
→ Ubuntu Bash
```

Terminal에서 확인합니다.

```bash
printf 'SHELL=%s\n' "$SHELL"
printf 'PWD=%s\n' "$PWD"
printf 'HOME=%s\n' "$HOME"
printf 'VIRTUAL_ENV=%s\n' "${VIRTUAL_ENV:-<none>}"

case "$PWD" in
  /Users/*|/mnt/mac/*)
    echo '[WARN] macOS shared path에서 작업 중입니다.'
    ;;
  /mnt/c/*|/mnt/d/*|/mnt/e/*)
    echo '[WARN] Windows mounted filesystem에서 작업 중입니다.'
    ;;
  "$HOME"/*)
    echo '[PASS] Ubuntu home filesystem에서 작업 중입니다.'
    ;;
  *)
    echo '[INFO] 작업 경로를 확인하세요.'
    ;;
esac
```

원칙:

- Mission Repository는 Ubuntu `$HOME/codyssey/...`에 둠
- MAC-V의 `/Users/...`, `/mnt/mac/Users/...`는 기본 개발경로로 사용하지 않음
- WIN-V의 `/mnt/c/...` 등 Windows mounted filesystem도 기본 개발경로로 사용하지 않음
- 새 VS Code Terminal은 `${workspaceFolder}`에서 Bash로 시작하도록 설정
- Python Mission은 repo-local `.venv`를 사용
- 특정 Project `.venv`를 Global `~/.bashrc`에서 강제 활성화하지 않음
- **B4-1 시스템 관제 미션**에서는 OrbStack built-in SSH `orb`와 Mission OpenSSH `sshd:20022`를 서로 다른 계층으로 구분

상세 계약은 `standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md`를 사용합니다.

---

<a id="cross-platform"></a>
## 3. Cross-platform Git / File 확인

macOS + OrbStack Ubuntu 24.04와 Windows 11 Pro + WSL2 Ubuntu 24.04 사이에서 같은 Repository를 사용하므로 줄바꿈과 파일 속성을 확인합니다.

```bash
git config --show-origin --get core.autocrlf || true
git config --show-origin --get core.eol || true
git ls-files --eol | head -50
git diff --check
```

Shell script가 있는 미션은 추가 확인합니다.

```bash
git ls-files --eol '*.sh'
git ls-files --stage '*.sh'
```

기준:

```text
Repository text = UTF-8 + LF
*.bat / *.cmd = CRLF 허용
Shell/Python/Web/YAML/Dockerfile = LF
```

주의:

- `/bin/bash^M: bad interpreter` 또는 `python3\r` 오류가 보이면 CRLF를 의심
- `.gitattributes`와 `.editorconfig`를 개인 IDE/Git 자동변환보다 우선
- `core.autocrlf` Global 값을 현재 미션 때문에 무조건 변경하지 않음
- `git add --renormalize .`는 Preflight에서 자동 실행하지 않음
- 기존 파일 정규화가 필요하면 clean branch에서 Diff를 먼저 확인하고 기능 변경과 분리
- executable script는 Git mode `100755` 여부도 확인
- 파일명 대소문자만 다른 파일, 개인 PC 절대경로, 불필요한 symlink 의존을 피함

상세 계약은 `standards/CROSS-PLATFORM-GIT-STANDARD.md`를 사용합니다.

---

<a id="runtime-cli"></a>
## 4. 현재 실행 환경(Runtime) / 공통 CLI 확인

현재 선택한 MAC-V 또는 WIN-V의 **Ubuntu 내부**에서 확인합니다.

```bash
uname -a
command -v bash || true
command -v apt-get || true
command -v sudo || true
command -v git || true
command -v gh || true
command -v ssh || true
command -v nano || true
command -v jq || true
command -v curl || true
command -v wget || true
command -v python3 || true
command -v node || true
command -v npm || true
command -v sqlite3 || true
```

`vim`, `tree`, `rg`, `fdfind`는 권장 생산성 도구(Productivity Tool)이므로 없다고 Mission 실제 실행(Runtime)을 막지 않습니다.

---

<a id="bootstrap"></a>
## 5. Ubuntu 개발환경 초기 준비(Developer Bootstrap) / Mission Package 확인

Ubuntu 설치는 다음 계층으로 구분합니다.

```text
Layer 0 — OS Prerequisites
Layer 1 — Common Required Base
Layer 1B — Recommended Productivity
Layer 2 — External/Common Developer CLI (`gh`)
Layer 3 — Mission / Shared Runtime
Layer 4 — Project Dependencies
```

Control Tower 기본 위치:

```bash
CONTROL_TOWER="${CONTROL_TOWER:-$HOME/codyssey/codyssey-basic}"
```

공통 개발환경은 통합 Bootstrap으로 **먼저 확인**합니다.

```bash
if [[ -f "$CONTROL_TOWER/environments/ubuntu/bootstrap.sh" ]]; then
  bash "$CONTROL_TOWER/environments/ubuntu/bootstrap.sh" --check
else
  echo '[INFO] Control Tower Ubuntu bootstrap 경로를 확인하세요.'
fi
```

`--check` 결과에서 필수 Base 또는 `gh`가 빠진 경우에만 공통 설치를 수행합니다.

```bash
bash "$CONTROL_TOWER/environments/ubuntu/bootstrap.sh" --install
```

권장 생산성 도구까지 원하는 경우에만:

```bash
bash "$CONTROL_TOWER/environments/ubuntu/bootstrap.sh" --install --recommended
```

환경별 해석:

```text
MAC-V
→ Reset 가능성을 고려하되 매번 설치하지 않음
→ --check 결과가 Missing일 때만 필요한 설치 수행

WIN-V
→ Persistent 상태를 보존
→ --check PASS면 설치 명령을 실행하지 않음
```

현재 Mission Repository root에서는 추가 APT package를 확인합니다.

```bash
PACKAGE_FILE="training/round-01-clear/environment/ubuntu-packages.txt"

if [[ -f "$PACKAGE_FILE" && -f "$CONTROL_TOWER/environments/ubuntu/setup-mission-packages.sh" ]]; then
  bash "$CONTROL_TOWER/environments/ubuntu/setup-mission-packages.sh" \
    "$PACKAGE_FILE" --check
else
  echo '[INFO] Mission package file 또는 Control Tower helper 경로를 확인하세요.'
fi
```

`[MISSING]`이 있으면 현재 Mission 목록의 누락분만 설치합니다.

```bash
bash "$CONTROL_TOWER/environments/ubuntu/setup-mission-packages.sh" \
  "$PACKAGE_FILE" --install
```

원칙:

- `git`, `openssh-client`, `nano`, `jq`, `file`, `unzip`, `zip`, `rsync` 등은 Common Base
- `gh`는 GitHub CLI 공식 APT repository를 사용하는 공통 Developer CLI
- `gh auth login`, Token 입력, SSH private key 생성/교체, `git user.name/email`, `core.autocrlf`는 Bootstrap이 자동 변경하지 않음
- `vim/tree/ripgrep/fd-find`는 권장 도구이며 CLEAR Gate가 아님
- 각 Mission의 `ubuntu-packages.txt`에는 Common Base와 공통 `gh`를 제외한 추가 APT package만 기록
- Python project library는 `.venv`에 설치
- Node package는 `package.json`/lock file로 관리
- package 설치 여부와 실제 service/command 정상 동작을 구분
- `apt autoremove`, package downgrade, 무차별 전역 설치 자동화 금지

상세 계약은 `environments/ubuntu/README.md`, `environments/ubuntu/BASE-PACKAGES.md`, `environments/ubuntu/MISSION-PACKAGE-MATRIX.md`를 사용합니다.

---

<a id="process-port"></a>
## 6. Process / Port 확인

```bash
ss -lntp 2>/dev/null || ss -lnt 2>/dev/null || true
ps -ef | grep -E 'uvicorn|vite|http.server|agent-app|agent.*leak' | grep -v grep || true
```

원칙:

- 이전 미션의 dev server가 남아 있으면 원인을 확인한 뒤 해당 프로세스만 종료
- **B4-1 시스템 관제 미션의 공식 `20022`, `15034`는 임의 변경 금지**
- FastAPI/HTTP/Vite는 순차 Runtime이므로 시작 전에 local port만 확인
- 광범위한 `pkill -9`, `killall`, 재부팅으로 정리하지 않음

---

<a id="python"></a>
## 7. Python 환경 격리

```bash
printf 'VIRTUAL_ENV=%s\n' "${VIRTUAL_ENV:-<none>}"
python3 --version 2>/dev/null || true
```

다른 미션 `.venv`가 활성화되어 있으면 먼저 `deactivate` 후 현재 미션의 `.venv`를 사용합니다.

```text
B6-2 .venv ≠ B6-3 .venv ≠ B7-1 .venv ≠ B7-2 .venv
```

System Python에 FastAPI/SQLAlchemy 등을 일괄 설치하지 않습니다.

VS Code Python Environments를 사용하는 경우 Remote Ubuntu의 현재 Repository `.venv`를 Interpreter로 선택합니다. Terminal 자동 활성화는 Remote User Setting의 `python-envs.terminal.autoActivationType = shellStartup`을 권장하며, 설정 변경 후 새 Terminal에서 실제 `VIRTUAL_ENV`를 확인합니다.

---

<a id="node"></a>
## 8. Node 환경 격리

**B1-2 React SPA 미션**에서 확인합니다.

```bash
node --version
npm --version
```

`node_modules`는 B1-2 Reference 내부에서만 사용합니다. 다른 미션으로 복사하거나 공유하지 않습니다.

---

<a id="secret"></a>
## 9. 비밀정보 설정 여부(Secret Presence) 확인 — 값은 출력하지 않음

AI 계열에서는 아래처럼 **설정 여부만** 확인합니다.

```bash
test -n "${AI_API_URL:-}" && echo '[INFO] AI_API_URL is set' || echo '[INFO] AI_API_URL is not set'
test -n "${AI_API_KEY:-}" && echo '[INFO] AI_API_KEY is set' || echo '[INFO] AI_API_KEY is not set'
test -n "${AI_MODEL:-}" && echo '[INFO] AI_MODEL is set' || echo '[INFO] AI_MODEL is not set'
```

금지:

```text
echo "$AI_API_KEY"
env | grep KEY
cat .env
cat secret.key
cat t_secret.key
set -x 상태에서 Secret 입력
```

**B6-3**의 `SESSION_SECRET`, **B1-2**의 Supabase 변수도 같은 원칙을 적용합니다.

---

<a id="data-db"></a>
## 10. Local data / DB 확인

새 실제 실행(Runtime) 전에 현재 미션이 만들 기존 데이터가 있는지 먼저 확인합니다.

```bash
find training/round-01-clear/reference -maxdepth 2 \
  \( -name '*.db' -o -name '*.sqlite' -o -name '*.sqlite3' -o -name 'data' \) \
  -print 2>/dev/null || true
```

기존 파일이 보인다고 자동 삭제하지 않습니다. `reset.sh`가 있는 미션은 범위를 읽고, 현재 Round가 만든 파일임이 명확할 때만 사용합니다.

---

<a id="cloud"></a>
## 11. Cloud / Remote resource 확인

**B1-2 / B3-1 / B7-1 / B7-2**에서만 적용합니다.

- 사용 중인 project/account/region을 먼저 확인
- 실제 production/shared resource와 실습 resource를 구분
- **B3-1 클라우드 인프라 미션은 `ap-northeast-2`**
- AWS Access Key/Secret/Session Token/Private Key는 출력 금지
- Supabase Service Role Key를 frontend에 사용 금지
- Cleanup은 현재 미션이 생성한 자원만 대상

---

<a id="evidence"></a>
## 12. 증빙(Evidence) 시작 상태

증빙 저장 위치(Evidence root):

```text
training/round-01-clear/evidence/
```

미션의 검증 도구(verifier)가 `evidence/runtime/`을 요구하면 해당 하위 경로를 사용합니다.

플랫폼별 실제 Evidence를 구분할 필요가 있는 경우 **실제 수행 시점에만** 다음 구조를 사용할 수 있습니다.

```text
training/round-01-clear/evidence/
├── mac-v/
└── win-v/
```

빈 형식만 맞추기 위해 미리 생성하지 않습니다.

원칙:

- 이전 실제 실행 증빙(Runtime Evidence)을 새 실행 결과로 가장하지 않음
- MAC-V Evidence를 WIN-V 실제 PASS의 대체 근거로 사용하지 않음
- WIN-V Evidence를 MAC-V 실제 PASS의 대체 근거로 사용하지 않음
- timestamp/command/result가 연결되도록 기록
- Runtime Profile / Repository / Branch / Commit을 연결
- Secret 값은 마스킹보다 애초에 캡처하지 않는 것을 우선
- 실제 외부 URL/PR/Review처럼 서버 측 증거가 필요한 항목은 placeholder로 대체 금지

플랫폼별 수행 요약은 [`RUNTIME-EXECUTION-MATRIX.md`](RUNTIME-EXECUTION-MATRIX.md)를 사용합니다.

---

<a id="start-gate"></a>
## 13. 시작 판정(Start Gate)

아래가 모두 확인되면 해당 미션의 `BEGINNER-GUIDE.md` STEP 01로 이동합니다.

```text
[ ] Current Runtime Context가 MAC-V 또는 WIN-V로 명확함
[ ] 현재 Mission ID는 CURRENT-MISSION-MAP.md와 일치함
[ ] 올바른 Canonical Repository / branch
[ ] 보존해야 할 local 변경 확인
[ ] VS Code Remote/Workspace가 선택한 Ubuntu의 $HOME 경로임
[ ] Bash/PWD/HOME 상태 확인
[ ] Cross-platform line ending / file mode 이상 없음
[ ] 선택한 Runtime의 Ubuntu Developer Bootstrap 필수 항목 PASS
[ ] `gh` 설치 상태 확인 — 인증은 필요할 때 별도
[ ] 권장 Productivity 누락은 CLEAR Blocker로 취급하지 않음
[ ] 현재 Mission ubuntu-packages.txt 누락 여부 확인
[ ] 필요한 package만 설치/검증
[ ] Python Mission이면 올바른 `.venv` 상태 확인
[ ] 이전 미션 process/dev-server 정리
[ ] 필요한 port 충돌 없음
[ ] 현재 미션 Python/Node 환경 격리
[ ] Secret 값 출력 없음
[ ] 기존 DB/data 처리 방침 확인
[ ] Cloud/remote 대상 확인
[ ] 증빙(Evidence) 저장 위치 확인
[ ] 해당 플랫폼 Runtime Record는 실제 Mission 실행 전에는 PASS로 표시하지 않음
```

실행 전 점검(Preflight) PASS는 Mission PASS가 아닙니다. 실제 기능·실패경로·검증·증빙(Evidence)을 완료해야 해당 플랫폼 Runtime PASS와 Mission CLEAR를 판정할 수 있습니다.
