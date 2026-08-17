# Environment Standard

환경설정도 코드처럼 **재현 가능하고 검증 가능**해야 합니다.

## Golden Path

Round 01은 미션별 기준 환경 하나를 우선합니다. 여러 OS/VM/Container 조합을 동시에 지원하여 가이드를 복잡하게 만들지 않습니다.

현재 R01의 공통 Host 계열은 다음을 기준으로 합니다.

```text
macOS + OrbStack → Ubuntu 24.04
Windows 11 Pro + WSL2 → Ubuntu 24.04
Docker → 선택 Training Layer
```

세부 Runtime Profile은 `environments/RUNTIME-PROFILES.md`를 따릅니다.

## Ubuntu 24.04 Developer Bootstrap 계약

Ubuntu 개발환경은 다음 계층으로 분리합니다.

```text
Layer 0 — OS Prerequisites
bash / apt-get / dpkg-query / sudo

Layer 1 — Common Required Base
ca-certificates / curl / wget / git / openssh-client / nano / jq / file / unzip / zip / rsync / bash-completion

Layer 1B — Recommended Productivity
vim / tree / ripgrep / fd-find

Layer 2 — External/Common Developer CLI
gh — GitHub CLI official APT repository

Layer 3 — Mission / Shared Runtime
현재 Mission에 필요한 APT package만 추가

Layer 4 — Project Dependencies
.venv / pyproject.toml / requirements.txt / package.json / lock file
```

운영 원칙:

- 새 Ubuntu에 15개 미션용 패키지를 한꺼번에 설치하지 않음
- 설치 전 `CHECK → MISSING → INSTALL → VERIFY` 순서 사용
- package 설치 여부와 실제 command 사용 가능 여부를 별도로 확인
- `git`, SSH client, `nano`, JSON/압축/파일전송 도구는 공통 Base로 관리
- `gh`는 공통 Developer CLI지만 설치는 GitHub CLI 공식 APT repository를 사용
- `gh auth login`, Token 입력, SSH private key 생성/교체, Git identity 설정은 자동화하지 않음
- `vim`, `tree`, `ripgrep`, `fd-find`는 권장 Productivity 도구이며 Mission CLEAR Gate가 아님
- System Python에 FastAPI/SQLAlchemy/AI SDK 등을 전역 설치하지 않음
- Python Mission은 repository-local `.venv` 사용
- Node dependency는 project manifest/lock file로 관리
- 각 Mission의 추가 APT Source of Truth는 `training/round-01-clear/environment/ubuntu-packages.txt`
- 실제 Mission/Evaluation이 특정 package/runtime/version을 요구하면 공식 요구가 최우선

통합 Bootstrap:

```bash
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --install --recommended
```

Control Tower의 상세 기준은 [`../environments/ubuntu/README.md`](../environments/ubuntu/README.md), [`../environments/ubuntu/BASE-PACKAGES.md`](../environments/ubuntu/BASE-PACKAGES.md), [`../environments/ubuntu/MISSION-PACKAGE-MATRIX.md`](../environments/ubuntu/MISSION-PACKAGE-MATRIX.md)를 사용합니다.

## VS Code Remote Ubuntu Workspace 계약

macOS에서 VS Code를 실행하더라도 `MAC-V`의 실제 개발 작업은 **OrbStack Ubuntu 24.04 내부의 Linux filesystem**을 기준으로 합니다.

```text
VS Code UI        = macOS
Remote transport  = OrbStack SSH (`orb`)
Repository        = Ubuntu `$HOME/codyssey/...`
Terminal          = Ubuntu Bash
Git               = Ubuntu Git
Python            = Ubuntu Python
Virtual Env       = Python Mission별 repo-local `.venv`
```

OrbStack이 제공하는 `/Users/...`, `/mnt/mac/Users/...` 경로는 macOS 공유 filesystem이므로 Primary Mission Workspace로 사용하지 않고 파일 교환/참조 용도로만 사용합니다.

Repository의 VS Code Terminal은 다음 원칙을 사용합니다.

```text
Default shell = bash
Terminal cwd  = ${workspaceFolder}
Shell Integration = enabled
```

Python Mission의 `.venv` 자동 활성화는 특정 Project를 `~/.bashrc`에 하드코딩하지 않고 VS Code Python Environment 선택/Remote User Setting을 사용합니다.

상세 기준은 [`VS-CODE-REMOTE-UBUNTU-STANDARD.md`](VS-CODE-REMOTE-UBUNTU-STANDARD.md)를 사용합니다.

## Cross-platform Git / File 계약

macOS, Windows 11 Pro, WSL2, Ubuntu 24.04 사이에서 같은 Repository를 안전하게 사용하기 위해 모든 Codyssey Basic 저장소는 다음을 기본 계약으로 사용합니다.

```text
Text encoding = UTF-8
Canonical line ending = LF
Windows .bat / .cmd = CRLF 허용
```

각 Repository Root:

```text
.gitattributes = Git line-ending / binary 계약
.editorconfig  = Editor 저장 형식 계약
```

주의 대상:

- CRLF/LF drift와 `^M` shell 오류
- executable bit (`100755` / `100644`)
- 파일명 대소문자 충돌
- symlink 차이
- 개인 PC 절대경로
- macOS/Linux Unicode filename normalization 차이
- binary 파일의 잘못된 text conversion

상세 기준과 안전한 renormalize 절차는 [`CROSS-PLATFORM-GIT-STANDARD.md`](CROSS-PLATFORM-GIT-STANDARD.md)를 사용합니다.

대규모 line-ending 변경은 Active Mission 기능 변경과 섞지 않고, 실제 필요 시 별도 정규화 작업으로 검토합니다.

## 필요한 경우의 구조

```text
environment/
├── README.md
├── prerequisites.md
├── versions.md
├── ubuntu-packages.txt
├── setup.sh
├── verify.sh
├── reset.sh
├── .env.example
└── config/
```

필요하지 않은 파일·폴더는 만들지 않습니다.

## 역할

- `prerequisites.md`: 시작 조건과 필요한 도구
- `versions.md`: 실제 검증한 버전
- `ubuntu-packages.txt`: Common Base/공통 `gh`를 제외한 현재 Mission 전용 Ubuntu APT 패키지
- `setup.sh`: 환경 재현용 구축 스크립트
- `verify.sh`: 환경 정상 여부 확인
- `reset.sh`: **현재 Round에서 만든 자원만** 안전하게 제거
- `.env.example`: 실제 Secret이 없는 예제 설정

Round 01에서는 가이드의 명령을 직접 따라 이해하는 것을 본 훈련으로 하고, 자동 setup은 재현·복구 보조 수단으로 사용합니다.

## 시스템 설정 변경

`현재 상태 확인 → 백업 → 변경 → 문법 검사 → 적용 → 검증 → Evidence`

광범위한 `rm -rf`, 무차별 사용자 삭제, 시스템 전체 초기화 같은 위험한 reset은 금지합니다.

## Secret

Repository 및 Evidence에 다음 실제 값을 저장하지 않습니다.

- `.env`
- `*.key`
- Password
- API Key
- Access Token
- Private Key
- 기타 Secret

예제 파일에는 실제 값 대신 Placeholder를 사용합니다.

## 검증 출력

가능하면 다음 형식으로 통일합니다.

```text
[PASS] 조건 A
[PASS] 조건 B
[FAIL] 조건 C
Result: 2 PASS / 1 FAIL
```

사용자가 실패 지점만 쉽게 전달할 수 있어야 합니다.
