# Ubuntu 24.04 Mission Package Matrix

## 목적

B1-1~B7-2의 Ubuntu 24.04 공통 개발도구, 미션별 시스템 패키지, 프로젝트 내부 의존성을 분리합니다.

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
각 Mission의 ubuntu-packages.txt

Layer 4 — Project
.venv / pyproject.toml / requirements.txt / package.json / lock file
```

공식 Mission/Evaluation이 특정 도구나 버전을 요구하면 공식 자료가 최우선입니다. 이 Matrix는 R01 실행을 위한 내부 설치 지도입니다.

| Mission | Mission APT 추가 패키지 | Project/Runtime dependency 방향 |
|---|---|---|
| **B1-1** | `openssh-server ufw acl cron procps iproute2 util-linux` | `file`, `unzip`, SSH client 등은 Base 사용. Agent binary/Bash monitor는 Mission Runtime에서 관리 |
| **B1-2** | `procps psmisc lsof strace` | 장애 재현 코드/스크립트는 Repository에서 관리 |
| **B2-1** | `python3 python3-venv` | Python project dependency는 `.venv` 내부 |
| **B2-2** | 추가 APT 없음 | Git/SSH client/`gh`는 공통 개발계층 사용. Issue/PR/Review는 GitHub server-side workflow |
| **B3-1** | `python3 python3-venv` | Python 구현/테스트는 `.venv` 또는 표준 Python 환경 |
| **B3-2** | `python3 python3-venv` | Git은 Base 사용, Python 구현은 project layer |
| **B4-1** | `python3` | static site; 필요 시 `python3 -m http.server` 사용 |
| **B4-2** | 추가 APT 없음 | Node runtime은 별도 version/runtime 관리, npm dependency는 `package.json`/lock file |
| **B5-1** | `sqlite3` | SQL 파일/DB schema/query는 Repository에서 관리 |
| **B5-2** | `python3 python3-venv` | FastAPI/Jinja2/SQLAlchemy 등은 `.venv` 내부 |
| **B5-3** | `python3 python3-venv` | FastAPI/Auth/Session/SQLAlchemy 등은 `.venv` 내부 |
| **B6-1** | `nginx` | SSH client는 Base 사용. 실제 AWS/VPC/EC2/SG Evidence가 최종 기준; AWS CLI는 필요 시 별도 설치 정책 |
| **B6-2** | `python3 python3-venv` | AI API client/project dependency는 `.venv`; Git/`gh`는 공통 개발계층 |
| **B7-1** | `python3 python3-venv` | FastAPI/DB/AI package는 `.venv`; 실제 deploy/provider 별도 |
| **B7-2** | `python3 python3-venv` | Backend/AI/DB project dependency는 `.venv`; frontend dependency는 project manifest |

## 중요한 해석

### B1-1

`openssh-client`, `file`, `unzip`은 여러 미션에서 반복 사용하므로 Common Base로 승격했습니다. B1-1의 Mission package file에는 **서버 역할과 시스템 실습에 실제로 추가 필요한 패키지만** 남깁니다.

```text
openssh-server
ufw
acl
cron
procps
iproute2
util-linux
```

### B2-2

Ubuntu에 GitHub 자체를 설치하는 것이 아닙니다. Git과 SSH client는 Base, `gh`는 GitHub CLI 공식 APT repository를 사용하는 공통 Developer CLI입니다. Issue/PR/Review/Branch Protection 같은 요구는 GitHub 서버에서 확인합니다.

`gh` 설치와 `gh auth login`은 분리합니다. 인증은 자동화하지 않습니다.

### B4-2

Node/npm의 버전 요구는 프로젝트와 당시 공식 Mission 기준을 확인해 결정합니다. Ubuntu `apt install nodejs npm`을 모든 환경의 고정 정답으로 만들지 않습니다.

### B6-1

`openssh-client`는 Common Base이므로 B6-1 추가 목록에서는 제거하고 `nginx`만 남깁니다. 로컬 Ubuntu의 `nginx`/SSH rehearsal은 실제 AWS resource와 배포 Evidence를 대체하지 않습니다.

### Python Missions

System Python에 다음을 전역 설치하지 않습니다.

```text
fastapi
sqlalchemy
uvicorn
jinja2
AI SDK
기타 project library
```

Repository-local `.venv`를 사용합니다.

## Mission package file

각 Mission 저장소에는 다음 파일을 둡니다.

```text
training/round-01-clear/environment/ubuntu-packages.txt
```

이 파일에는 **Common Base와 공통 `gh`를 제외하고 해당 Mission에서 추가로 필요한 APT 패키지만** 기록합니다.

Package 설치 확인은 `setup-mission-packages.sh`가 담당하고, 실제 command/service 동작은 각 Mission의 Runtime/verify에서 확인합니다.
