# R01 Phase C — Runtime Preflight

동결일: 2026-08-17

## 목적

각 미션 Runtime을 시작하기 전에 **잘못된 저장소, 잘못된 Host/Guest 작업경로, Cross-platform 파일 형식 문제, Ubuntu 공통 개발도구/미션 패키지 누락, 남아 있는 프로세스, Port 충돌, 가상환경 혼동, Secret 노출, 기존 데이터/Cloud 자원 오염**을 먼저 차단합니다.

이 문서는 미션 구현을 대신하지 않는 공통 안전 Gate입니다.

## 🚀 빠른 사전점검(Quick Preflight)

> 이미 Ubuntu 24.04 Runtime과 현재 Mission Repository가 준비된 학습자용입니다. 처음 환경을 만드는 경우 [`../../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`](../../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 먼저 완료합니다.

📍 현재 Mission Repository root의 **Ubuntu Bash**에서 실행합니다.

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
[ ] Repository/PWD/Branch를 스스로 설명할 수 있다.
[ ] 예상하지 않은 Git 변경을 무시하지 않았다.
[ ] HOME/PWD가 Ubuntu /home/... 계열이다.
[ ] 다른 Mission의 .venv가 활성화되어 있지 않다.
[ ] git diff --check에 line-ending/whitespace blocker가 없다.
[ ] Bootstrap required 항목이 PASS다.
```

```text
✅ GO
→ 아래 상세 Preflight에서 현재 Mission에 해당하는 항목을 확인
→ Start Gate PASS 후 Beginner Guide 시작

❌ STOP
→ 잘못된 Host/PWD/Branch/venv/Bootstrap을 먼저 수정
```

위 상태 확인 명령은 **🟢 SAFE TO RERUN**입니다.

## 📑 목차

- [1. Repository 확인](#repository)
- [2. VS Code Remote / Workspace](#workspace)
- [3. Cross-platform Git / File](#cross-platform)
- [4. 기본 Runtime / 공통 CLI](#runtime-cli)
- [5. Ubuntu Bootstrap / Mission Package](#bootstrap)
- [6. Process / Port](#process-port)
- [7. Python 환경 격리](#python)
- [8. Node 환경 격리](#node)
- [9. Secret Presence](#secret)
- [10. Local data / DB](#data-db)
- [11. Cloud / Remote resource](#cloud)
- [12. Evidence 시작 상태](#evidence)
- [13. Start Gate](#start-gate)

---

<a id="repository"></a>
## 1. Repository 확인

Repository root에서 다음을 확인합니다.

```bash
pwd
git rev-parse --show-toplevel
git branch --show-current
git status --short
git remote -v
```

실제 Secret이 remote URL에 포함되어 있지 않은지 확인합니다. 작업 중인 변경이 있으면 먼저 의미를 확인하고 무조건 reset하지 않습니다.

<a id="workspace"></a>
## 2. VS Code Remote / Workspace 경로 확인

`MAC-V`에서는 macOS VS Code UI와 실제 Ubuntu 작업환경을 분리합니다.

권장 구조:

```text
macOS VS Code
→ Remote-SSH `orb`
→ OrbStack Ubuntu 24.04
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
  "$HOME"/*)
    echo '[PASS] Ubuntu home filesystem에서 작업 중입니다.'
    ;;
  *)
    echo '[INFO] 작업 경로를 확인하세요.'
    ;;
esac
```

원칙:

- Primary Mission Repository는 Ubuntu `$HOME/codyssey/...`에 둠
- `/Users/...`, `/mnt/mac/Users/...`는 macOS 공유 filesystem이므로 기본 개발경로로 사용하지 않음
- 새 VS Code Terminal은 `${workspaceFolder}`에서 Bash로 시작하도록 Repository `.vscode/settings.json`을 사용
- Python Mission은 repo-local `.venv`를 사용
- 특정 Project `.venv`를 Global `~/.bashrc`에서 강제 활성화하지 않음
- B1-1에서는 OrbStack built-in SSH `orb`와 Mission OpenSSH `sshd:20022`를 서로 다른 계층으로 구분

상세 계약은 `standards/VS-CODE-REMOTE-UBUNTU-STANDARD.md`를 사용합니다.

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

<a id="runtime-cli"></a>
## 4. 기본 Runtime / 공통 CLI 확인

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

`vim`, `tree`, `rg`, `fdfind`는 권장 Productivity 도구이므로 없다고 Mission Runtime을 막지 않습니다.

<a id="bootstrap"></a>
## 5. Ubuntu Developer Bootstrap / Mission Package 확인

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

공통 개발환경은 통합 Bootstrap으로 확인합니다.

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

<a id="process-port"></a>
## 6. Process / Port 확인

```bash
ss -lntp 2>/dev/null || ss -lnt 2>/dev/null || true
ps -ef | grep -E 'uvicorn|vite|http.server|agent-app|agent.*leak' | grep -v grep || true
```

원칙:

- 이전 미션의 dev server가 남아 있으면 원인을 확인한 뒤 해당 프로세스만 종료
- B1-1 공식 `20022`, `15034`는 임의 변경 금지
- FastAPI/HTTP/Vite는 순차 Runtime이므로 시작 전에 local port만 확인
- 광범위한 `pkill -9`, `killall`, 재부팅으로 정리하지 않음

<a id="python"></a>
## 7. Python 환경 격리

```bash
printf 'VIRTUAL_ENV=%s\n' "${VIRTUAL_ENV:-<none>}"
python3 --version 2>/dev/null || true
```

다른 미션 `.venv`가 활성화되어 있으면 먼저 `deactivate` 후 현재 미션의 `.venv`를 사용합니다.

```text
B5-2 .venv ≠ B5-3 .venv ≠ B7-1 .venv ≠ B7-2 .venv
```

System Python에 FastAPI/SQLAlchemy 등을 일괄 설치하지 않습니다.

VS Code Python Environments를 사용하는 경우 Remote Ubuntu의 현재 Repository `.venv`를 Interpreter로 선택합니다. Terminal 자동 활성화는 Remote User Setting의 `python-envs.terminal.autoActivationType = shellStartup`을 권장하며, 설정 변경 후 새 Terminal에서 실제 `VIRTUAL_ENV`를 확인합니다.

<a id="node"></a>
## 8. Node 환경 격리

B4-2에서만 확인합니다.

```bash
node --version
npm --version
```

`node_modules`는 B4-2 Reference 내부에서만 사용합니다. 다른 미션으로 복사하거나 공유하지 않습니다.

<a id="secret"></a>
## 9. Secret Presence 확인 — 값은 출력하지 않음

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

B5-3의 `SESSION_SECRET`, B4-2의 Supabase 변수도 같은 원칙을 적용합니다.

<a id="data-db"></a>
## 10. Local data / DB 확인

새 Runtime 전에 현재 미션이 만들 기존 데이터가 있는지 먼저 확인합니다.

```bash
find training/round-01-clear/reference -maxdepth 2 \
  \( -name '*.db' -o -name '*.sqlite' -o -name '*.sqlite3' -o -name 'data' \) \
  -print 2>/dev/null || true
```

기존 파일이 보인다고 자동 삭제하지 않습니다. `reset.sh`가 있는 미션은 범위를 읽고, 현재 Round가 만든 파일임이 명확할 때만 사용합니다.

<a id="cloud"></a>
## 11. Cloud / Remote resource 확인

B4-2/B6-1/B7-1/B7-2에서만 적용합니다.

- 사용 중인 project/account/region을 먼저 확인
- 실제 production/shared resource와 실습 resource를 구분
- B6-1은 `ap-northeast-2`
- AWS Access Key/Secret/Session Token/Private Key는 출력 금지
- Supabase Service Role Key를 frontend에 사용 금지
- Cleanup은 현재 미션이 생성한 자원만 대상

<a id="evidence"></a>
## 12. Evidence 시작 상태

Evidence root:

```text
training/round-01-clear/evidence/
```

미션의 verifier가 `evidence/runtime/`을 요구하면 해당 하위 경로를 사용합니다.

원칙:

- 이전 Runtime Evidence를 새 실행 결과로 가장하지 않음
- timestamp/command/result가 연결되도록 기록
- Secret 값은 마스킹이 아니라 애초에 캡처하지 않는 것을 우선
- 실제 외부 URL/PR/Review처럼 서버 측 증거가 필요한 항목은 placeholder로 대체 금지

<a id="start-gate"></a>
## 13. Start Gate

아래가 모두 확인되면 해당 미션의 `BEGINNER-GUIDE.md` STEP 01로 이동합니다.

```text
[ ] 올바른 repository/branch
[ ] 보존해야 할 local 변경 확인
[ ] VS Code Remote/Workspace가 의도한 Ubuntu 경로임
[ ] Bash/PWD/HOME 상태 확인
[ ] Cross-platform line ending / file mode 이상 없음
[ ] Ubuntu Developer Bootstrap 필수 항목 PASS
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
[ ] Evidence 저장 위치 확인
```

Preflight PASS는 Mission PASS가 아닙니다. 실제 기능·실패경로·Evidence를 모두 검증해야 CLEAR입니다.
