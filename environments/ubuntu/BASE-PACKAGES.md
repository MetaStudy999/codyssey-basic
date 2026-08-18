# Ubuntu 24.04 공통 기본 패키지(Base Packages)

## 목적

R01의 Ubuntu 24.04 Machine에서 모든 미션이 공통으로 기대할 수 있는 **필수 개발 도구**와 선택 생산성 도구를 구분합니다.

## 한눈에 보기(Quick Read)

```text
Layer 0 = Ubuntu 실행 전제조건
Layer 1 = 모든 미션 공통 필수 APT 도구
Layer 1B = 없어도 CLEAR를 막지 않는 생산성 도구
Layer 2 = gh 같은 공통 외부 CLI
Layer 3 = 현재 Mission에만 필요한 APT 패키지
Layer 4 = .venv / package.json 같은 프로젝트 의존성(Project Dependency)
```

가장 먼저 상태만 확인하려면 Control Tower root에서:

```bash
bash environments/ubuntu/bootstrap.sh --check
```

필수 항목이 누락된 경우에만 `--install`을 사용합니다.

## 📑 목차

- [Layer 0 — OS 전제조건(OS Prerequisites)](#layer-0)
- [Layer 1 — 공통 필수 기본도구(Common Required Base)](#layer-1)
- [Layer 1B — 권장 생산성 도구(Recommended Productivity)](#layer-1b)
- [Layer 2 — 외부/공통 개발 CLI(External/Common Developer CLI)](#layer-2)
- [Layer 3 — 미션/공유 실행 환경(Mission / Shared Runtime)](#layer-3)
- [Layer 4 — 프로젝트 의존성(Project Dependencies)](#layer-4)
- [통합 개발환경 초기 준비(Bootstrap)](#bootstrap)

---

<a id="layer-0"></a>
## Layer 0 — OS 전제조건(OS Prerequisites)

설치 전에 다음을 확인합니다.

```text
bash
apt-get
dpkg-query
sudo
```

검사:

```bash
bash environments/ubuntu/verify-prerequisites.sh
```

기준 실행 경로(Golden Path)는 Ubuntu 24.04입니다. 다른 동등 Linux가 공식 Mission에서 허용되더라도 R01 공통 자동화는 Ubuntu 24.04를 기준으로 설명합니다.

<a id="layer-1"></a>
## Layer 1 — 공통 필수 기본도구(Common Required Base)

`base-packages.txt`:

```text
ca-certificates
curl
wget
git
openssh-client
nano
jq
file
unzip
zip
rsync
bash-completion
```

역할:

- `ca-certificates`, `curl`, `wget`: HTTPS download/API/bootstrap
- `git`: 모든 Repository 작업
- `openssh-client`: `ssh`, `scp`, `sftp`, `ssh-keygen`
- `nano`: 입문자용 터미널 편집기
- `jq`: JSON/API 결과 확인
- `file`, `unzip`, `zip`: 파일/압축 확인
- `rsync`: 안전한 파일 복사·동기화 보조
- `bash-completion`: Bash 자동완성

`verify-base.sh`는 **APT package 설치 여부와 실제 command 사용 가능 여부를 분리해서 확인**합니다. package 이름과 command 이름이 항상 같지 않기 때문입니다.

예:

```text
openssh-client → ssh
ripgrep        → rg
fd-find        → fdfind
procps         → ps
iproute2       → ss
```

<a id="layer-1b"></a>
## Layer 1B — 권장 생산성 도구(Recommended Productivity)

다음은 유용하지만 Mission CLEAR Gate가 아닙니다.

```text
vim
tree
ripgrep
fd-find
```

설치:

```bash
bash environments/ubuntu/setup-recommended.sh
```

검사:

```bash
bash environments/ubuntu/verify-recommended.sh
```

`nano`는 공통 기본 편집기로, `vim`은 권장 생산성 도구로 구분합니다.

<a id="layer-2"></a>
## Layer 2 — 외부/공통 개발 CLI(External/Common Developer CLI)

GitHub CLI `gh`는 공통 개발 CLI로 사용하지만 Ubuntu community package에 단순 의존하지 않고 **GitHub CLI 공식 APT repository**를 사용합니다.

```bash
bash environments/ubuntu/setup-gh.sh
bash environments/ubuntu/verify-gh.sh
```

설치와 인증을 분리합니다.

```text
setup-gh.sh = gh 설치/공식 repository 구성

gh auth login = 사용자가 필요할 때 대화형으로 수행
```

공통 자동화는 `gh auth login`, Token 입력, SSH private key 생성/교체를 수행하지 않습니다.

<a id="layer-3"></a>
## Layer 3 — 미션/공유 실행 환경(Mission / Shared Runtime)

다음은 필요한 Mission에서만 설치합니다.

```text
python3 / python3-venv
sqlite3
nginx
openssh-server
ufw
acl
cron
procps / iproute2 / strace ...
```

각 Mission의 기준(Source of Truth):

```text
training/round-01-clear/environment/ubuntu-packages.txt
```

<a id="layer-4"></a>
## Layer 4 — 프로젝트 의존성(Project Dependencies)

APT와 분리합니다.

```text
Python → repo-local .venv / pyproject.toml / requirements.txt
Node   → package.json / lock file
```

System Python에 FastAPI, SQLAlchemy, Uvicorn, AI SDK 같은 프로젝트 라이브러리를 전역 설치하지 않습니다.

<a id="bootstrap"></a>
## 통합 개발환경 초기 준비(Bootstrap)

확인만:

```bash
bash environments/ubuntu/bootstrap.sh --check
```

필수 공통 도구가 누락된 경우에만 설치:

```bash
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --check
```

권장 생산성 도구까지 포함할 때만:

```bash
bash environments/ubuntu/bootstrap.sh --install --recommended
```

Bootstrap은 기존 package downgrade/remove, `apt autoremove`, Git identity 설정, SSH private key 교체, `core.autocrlf` 변경을 하지 않습니다.
