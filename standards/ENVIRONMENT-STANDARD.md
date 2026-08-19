# Environment Standard — 환경 표준

환경설정도 코드처럼 **재현 가능하고 검증 가능**해야 합니다.

입문자용 실제 시작 경로는 [`../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`](../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 사용하고, 개발도구의 필수/선택/no-admin 기준은 [`DEVELOPMENT-TOOLSET-STANDARD.md`](DEVELOPMENT-TOOLSET-STANDARD.md)를 따릅니다.

상위 운영 계약은 [`CODYSSEY-WORKING-OPERATING-STANDARD.md`](CODYSSEY-WORKING-OPERATING-STANDARD.md)를 따릅니다.

## 한글·영어 용어 표기

입문자 문서는 핵심 기술·운영 용어의 첫 등장 시 **한글 의미(English Original)** 형식을 우선합니다.

예:

```text
실행 환경(Runtime)
현재 실행 환경(Current Runtime Context)
검증(Verification)
증빙 자료(Evidence)
개발환경 초기 준비(Bootstrap)
```

명령어, 파일명, 경로, 제품명은 임의 번역하지 않습니다. 전체 기준은 [`TERMINOLOGY-STANDARD.md`](TERMINOLOGY-STANDARD.md)를 따릅니다.

## 기준 실행 경로(Golden Path)

R01은 다음 두 직접 Linux Runtime을 **동등한 지원 실행 환경(Supported Runtime)**으로 관리합니다.

```text
MAC-V = 학교 macOS + OrbStack → Ubuntu 24.04
WIN-V = 개인 Windows 11 Pro + WSL2 → Ubuntu 24.04
Docker = 선택 훈련 계층(Training Layer)
```

`MAC-V`와 `WIN-V`는 합격 기준의 Primary/Secondary 관계가 아닙니다. 공식 Mission/Evaluation, 코드·기능 품질, 검증(Verification), 증빙 자료(Evidence), Mission CLEAR 기준은 동일합니다.

실제 작업 시작 시 사용자가 현재 수행 위치를 알려 주면 그 환경을 **현재 실행 환경(Current Runtime Context)**으로 선택합니다.

```text
학교 Mac에서 진행 → MAC-V
노트북 Win11에서 진행 → WIN-V
```

환경 유지 특성은 다르게 관리합니다.

```text
MAC-V
= Resettable / Ephemeral
= CHECK BEFORE INSTALL

WIN-V
= Persistent
= VERIFY BEFORE REINSTALL
```

플랫폼별 실제 수행 기록은 [`../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)를 사용합니다.

세부 실행 환경 프로필(Runtime Profile)은 [`../environments/RUNTIME-PROFILES.md`](../environments/RUNTIME-PROFILES.md)를 따릅니다.

## 공용·관리형 Mac의 관리자 권한 없음(No-Admin) 계약

공용 PC, 교육기관, 회사 관리 Mac처럼 관리자 암호를 사용할 수 없는 경우 다음 원칙을 적용합니다.

```text
관리자 암호 우회 금지
MDM/보안정책 우회 금지
sudo를 전제로 한 Host 설치 금지
→ 사용자 영역 설치 가능 여부 확인
→ Linux 실행 환경(Runtime)으로 개발 의존성 이동
→ CLI/Web/허용된 IDE 대안 사용
→ 필요 시 관리자 승인 요청
```

가능한 사용자 영역:

```text
$HOME/Applications
$HOME/.local/bin
$HOME/codyssey
$HOME/.config
```

`/Applications`, `/usr/local`, `/opt/homebrew`처럼 사용자에게 쓰기 권한이 없을 수 있는 시스템/공용 위치를 기본 전제로 삼지 않습니다.

### OrbStack

OrbStack은 macOS의 Linux 실행 환경(Runtime) 후보로 유지합니다. 다만 MDM/앱 허용목록 정책이 실행을 막는 경우에는 정책을 우회하지 않습니다.

학교 Mac은 Reset 가능성을 기본 전제로 하므로 다음 순서를 사용합니다.

```text
현재 상태 확인
→ 기존 OrbStack/Ubuntu가 정상이라면 재설치 생략
→ Reset되었거나 누락되었으면 필요한 항목만 재구성
→ Bootstrap / Identity 확인
→ Mission Runtime
```

### VS Code

macOS에서 기관 정책이 허용하는 범위에서 사용자 실행 가능한 위치와 Portable Mode를 우선 검토합니다. Portable Mode를 사용하는 경우 앱과 함께 `code-portable-data`를 관리할 수 있습니다.

보안정책 또는 quarantine 때문에 실행이 제한되면 임의로 보안정책을 해제하지 않고 허용된 Editor/CLI/브라우저 도구 또는 관리자 승인 경로를 사용합니다.

### Homebrew

No-Admin Golden Path에서는 Homebrew를 필수 전제로 사용하지 않습니다. Host Mac에 개발 패키지를 대량 설치하기보다 Git, Python, Node, SQLite, Nginx 등 실제 개발 도구는 Ubuntu 실행 환경(Runtime) 내부에서 관리하는 것을 우선합니다.

### Google Antigravity

```text
Antigravity IDE = 선택 대체 IDE
Antigravity CLI = 선택 AI Terminal 도구
```

Antigravity CLI의 macOS/Linux 공식 설치 기본 위치가 `~/.local/bin/agy`이므로 사용자 영역 설치가 필요한 no-admin 환경에서 우선 검토할 수 있습니다.

Antigravity IDE는 로컬 앱 설치가 허용되는 경우에만 사용하고, 관리형 Mac에서 사용자 영역 설치가 항상 가능하다고 가정하지 않습니다.

## Windows 11 Pro 지속 환경(Persistent Runtime) 계약

WIN-V는 개인 노트북의 기존 상태 보존을 기본으로 합니다.

```text
VERIFY BEFORE REINSTALL

기존 WSL2 Ubuntu 확인
→ Repository / Git / gh / Bootstrap 확인
→ 정상이라면 그대로 사용
→ 문제가 있을 때만 최소 Repair
→ Mission Runtime
```

정상 상태인 WSL2 Ubuntu, Repository, `.venv`, Git/GitHub 설정을 작업마다 삭제·재설치하지 않습니다.

## Ubuntu 24.04 개발환경 초기 준비(Developer Bootstrap) 계약

Ubuntu 개발환경은 다음 계층으로 분리합니다.

```text
Layer 0 — OS 전제조건(OS Prerequisites)
bash / apt-get / dpkg-query / sudo

Layer 1 — 공통 필수 기본도구(Common Required Base)
ca-certificates / curl / wget / git / openssh-client / nano / jq / file / unzip / zip / rsync / bash-completion

Layer 1B — 권장 생산성 도구(Recommended Productivity)
vim / tree / ripgrep / fd-find

Layer 2 — 외부/공통 개발 CLI(External/Common Developer CLI)
gh — GitHub CLI official APT repository

Layer 3 — 미션/공유 실행환경(Mission / Shared Runtime)
현재 Mission에 필요한 APT package만 추가

Layer 4 — 프로젝트 의존성(Project Dependencies)
.venv / pyproject.toml / requirements.txt / package.json / lock file
```

운영 원칙:

- 새 Ubuntu에 15개 미션용 패키지를 한꺼번에 설치하지 않음
- 설치 전 `확인(Check) → 누락(Missing) → 설치(Install) → 검증(Verification)` 순서 사용
- 패키지(package) 설치 여부와 실제 명령(command) 사용 가능 여부를 별도로 확인
- `git`, SSH client, `nano`, JSON/압축/파일전송 도구는 공통 Base로 관리
- `gh`는 공통 개발 CLI(Developer CLI)지만 설치는 GitHub CLI 공식 APT repository를 사용
- `gh auth login`, Token 입력, SSH private key 생성/교체, Git identity 설정은 자동화하지 않음
- `vim`, `tree`, `ripgrep`, `fd-find`는 권장 생산성 도구(Productivity Tool)이며 미션 완료(CLEAR) Gate가 아님
- System Python에 FastAPI/SQLAlchemy/AI SDK 등을 전역 설치하지 않음
- Python Mission은 repository-local `.venv` 사용
- Node dependency는 project manifest/lock file로 관리
- 각 Mission의 추가 APT Source of Truth는 `training/round-01-clear/environment/ubuntu-packages.txt`
- 실제 Mission/Evaluation이 특정 package/runtime/version을 요구하면 공식 요구가 최우선

통합 개발환경 초기 준비(Bootstrap):

```bash
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/bootstrap.sh --install
bash environments/ubuntu/bootstrap.sh --install --recommended
```

`--install`은 `--check`에서 필수 누락이 확인된 경우에만 사용합니다.

환경별 원칙:

```text
MAC-V → Reset 가능성을 고려하되 현재 상태부터 확인
WIN-V → Persistent 상태를 보존하고 정상이라면 재설치 금지 기본
```

Control Tower의 상세 기준은 [`../environments/ubuntu/README.md`](../environments/ubuntu/README.md), [`../environments/ubuntu/BASE-PACKAGES.md`](../environments/ubuntu/BASE-PACKAGES.md), [`../environments/ubuntu/MISSION-PACKAGE-MATRIX.md`](../environments/ubuntu/MISSION-PACKAGE-MATRIX.md)를 사용합니다.

## 개발 Tool Set 계약

R01의 도구는 다음처럼 계층화합니다.

```text
LEVEL 1 — 기본 필수
Ubuntu 24.04 / Bash / Git / gh / VS Code / Remote 연결

LEVEL 2 — Mission별
Python / Node.js / SQLite / Nginx / OpenSSH Server / 기타 package

LEVEL 3 — 권장 생산성
vim / tree / ripgrep / fd-find

LEVEL 4 — 대체 IDE
Cursor / Windsurf / JetBrains / Antigravity IDE

LEVEL 5 — 선택 AI 도구
ChatGPT / Codex / Claude / Gemini / Antigravity CLI
```

대체 IDE를 사용하더라도 실제 실행 환경(Runtime) 계약은 유지합니다.

```text
Repository = Ubuntu $HOME/codyssey/...
Terminal   = Ubuntu Bash
Git        = Ubuntu Git
Python     = Ubuntu Python
.venv      = Repository-local
```

세부 기준은 [`DEVELOPMENT-TOOLSET-STANDARD.md`](DEVELOPMENT-TOOLSET-STANDARD.md)를 따릅니다.

## VS Code 원격 Ubuntu 작업공간(VS Code Remote Ubuntu Workspace) 계약

### MAC-V

macOS에서 VS Code를 실행하더라도 실제 개발 작업은 **OrbStack Ubuntu 24.04 내부의 Linux filesystem**을 기준으로 합니다.

```text
VS Code UI        = macOS
원격 전송(Remote transport) = OrbStack SSH (`orb`)
저장소(Repository) = Ubuntu `$HOME/codyssey/...`
터미널(Terminal)    = Ubuntu Bash
Git               = Ubuntu Git
Python            = Ubuntu Python
가상환경(Virtual Env) = Python Mission별 repo-local `.venv`
```

OrbStack이 제공하는 `/Users/...`, `/mnt/mac/Users/...` 경로는 macOS 공유 filesystem이므로 기본 Mission Workspace로 사용하지 않고 파일 교환/참조 용도로만 사용합니다.

### WIN-V

Windows VS Code를 사용하더라도 실제 Mission 작업은 **WSL2 Ubuntu 24.04 내부 Linux filesystem**을 기준으로 합니다.

```text
VS Code UI        = Windows 11 Pro
Remote/WSL        = WSL2 Ubuntu 24.04
Repository        = Ubuntu `$HOME/codyssey/...`
Terminal          = Ubuntu Bash
Git               = Ubuntu Git
Python            = Ubuntu Python
Virtual Env       = Python Mission별 repo-local `.venv`
```

`/mnt/c/...`와 같은 Windows mounted filesystem은 기본 Mission Workspace로 사용하지 않습니다.

Repository의 VS Code Terminal은 다음 원칙을 사용합니다.

```text
Default shell = bash
Terminal cwd  = ${workspaceFolder}
Shell Integration = enabled
```

Python Mission의 `.venv` 자동 활성화는 특정 Project를 `~/.bashrc`에 하드코딩하지 않고 VS Code Python Environment 선택/Remote User Setting을 사용합니다.

상세 기준은 [`VS-CODE-REMOTE-UBUNTU-STANDARD.md`](VS-CODE-REMOTE-UBUNTU-STANDARD.md)를 사용합니다.

## 플랫폼별 수행 기록(Runtime Record) 계약

Mission 상태와 플랫폼별 수행 이력을 분리합니다.

```text
Mission CLEAR
= 공식 Mission/Evaluation + 실제 Runtime + Verification + 필요한 Evidence

MAC-V Runtime Record
= MAC-V에서 실제 수행한 이력

WIN-V Runtime Record
= WIN-V에서 실제 수행한 이력

CROSS-PLATFORM VERIFIED
= 같은 R01에서 MAC-V와 WIN-V 모두 실제 PASS
```

플랫폼별 상태:

```text
NOT RUN / PENDING / PASS / FAIL
```

현재 장비 재현 상태가 필요한 경우:

```text
READY / STALE / REBUILD NEEDED
```

학교 Mac이 Reset되어도 이전에 확보한 추적 가능한 MAC-V PASS와 Evidence는 자동으로 FAIL 처리하지 않습니다. 과거 수행 기록과 현재 장비 상태를 분리합니다.

공식 Mission/Evaluation이 두 환경 모두를 요구하지 않는 한 한 지원 환경에서 공식 요구를 충족하면 다른 환경 미수행만으로 Mission CLEAR를 자동 차단하지 않습니다.

플랫폼별 중앙 상태표:

- [`../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md)

## 교차 플랫폼 Git/파일(Cross-platform Git / File) 계약

macOS, Windows 11 Pro, WSL2, Ubuntu 24.04 사이에서 같은 Repository를 안전하게 사용하기 위해 모든 Codyssey Basic 저장소는 다음을 기본 계약으로 사용합니다.

```text
텍스트 인코딩(Text encoding) = UTF-8
기준 줄바꿈(Canonical line ending) = LF
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

## 실행 위치(Context)와 실행 전 점검(Preflight) 계약

환경/설정 문서에서 명령을 실행하기 전에는 **어디에서 실행하는지**를 먼저 구분합니다.

필요한 경우 다음 형식을 사용합니다.

```text
Runtime Profile : MAC-V / WIN-V / 기타 공식 요구 환경
Host            : macOS / Windows / Ubuntu / Cloud
Terminal        : Ubuntu Bash / PowerShell / macOS Terminal
Repository      : $HOME/codyssey/<repo>
Branch          : 현재 작업 Branch
Commit          : 현재 작업 Commit
권한            : 일반 사용자 / sudo 필요
venv            : 활성 / 비활성 / 해당 없음
```

환경 변경 전에는 최소한 다음을 확인합니다.

```text
현재 Runtime Context가 맞는가
→ 현재 PWD가 맞는가
→ 필요한 command가 존재하는가
→ Git 작업이면 Branch/변경사항이 예상과 맞는가
→ 필요한 권한이 있는가
→ 비용/외부 Resource가 발생하는가
```

필수 조건이 맞지 않으면 **STOP**하고 해당 조건을 복구한 뒤 다시 확인합니다.

## 재실행 안전성(Rerun Safety)과 중간 저장점(Checkpoint)

환경설정 명령은 반복 실행 시 영향이 다를 수 있으므로 필요한 경우 다음으로 표시합니다.

```text
🟢 SAFE TO RERUN
🟡 CHECK BEFORE RERUN
🔴 DO NOT RERUN BLINDLY
```

특히 아래 작업은 `확인(Check) → 백업/중간 저장점(Backup/Checkpoint) → 변경(Change) → 검증(Verification) → 복구(Recovery)` 흐름을 우선합니다.

- SSH / sshd
- UFW / firewall
- systemd service
- Nginx
- DB schema/migration
- Git history 변경
- Cloud Resource Create/Update/Delete
- API/AI Provider 유료 자원

중간 저장점(Checkpoint)은 실제로 복구 가능한 근거여야 합니다. 예:

```text
Git clean 상태
설정 파일 백업
현재 service 상태 기록
현재 Cloud Resource 목록
DB backup 또는 migration 이전 상태
```

## 비용·자원 보호(Cost / Resource Guard)

Cloud/API/AI Provider를 사용하는 환경 문서는 비용 가능성이 있으면 실행 전에 다음을 확인하게 합니다.

```text
[ ] Account / Project / Region을 확인했다.
[ ] 무료 한도 또는 과금 가능성을 확인했다.
[ ] 생성할 Resource 수를 확인했다.
[ ] 유료 API/Model 사용 여부를 확인했다.
[ ] Cleanup 또는 Stop/Delete 절차를 먼저 읽었다.
```

실습 종료는 가능한 경우 다음 흐름으로 닫습니다.

```text
생성(Create)
→ 검증(Verification)
→ 증빙(Evidence)
→ 더 이상 필요 없음
→ 정리(Cleanup)
→ 삭제/중지 확인
```

비용이나 정책이 변동되는 외부 서비스는 현재 공식 문서를 확인하고, 저장소에는 특정 가격을 장기간 고정 사실처럼 남기지 않습니다.

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
- `.env.example`: 실제 비밀정보(Secret)가 없는 예제 설정

Round 01에서는 가이드의 명령을 직접 따라 이해하는 것을 본 훈련으로 하고, 자동 setup은 재현·복구 보조 수단으로 사용합니다.

## 환경/도구 문서의 입문자 작성 계약

설치·설정 문서는 가능한 범위에서 다음을 제공합니다.

```text
무엇인가
→ 왜 필요한가
→ 필수/권장/선택
→ 관리자 권한 필요 여부
→ 실행 위치
→ 설치 위치
→ 사전 점검
→ 설치/설정 방법
→ 명령 한 줄 해설
→ 정상 결과와 달라도 정상인 값
→ 재실행 안전 여부
→ 오류/복구
→ STOP / GO
→ 다음 단계
```

명령·코드 설명은 [`COMMAND-CODE-EXPLANATION-STANDARD.md`](COMMAND-CODE-EXPLANATION-STANDARD.md)를 따릅니다.

## 시스템 설정 변경

`현재 상태 확인 → 백업/중간 저장점(Checkpoint) → 변경 → 문법 검사 → 적용 → 검증(Verification) → 증빙 자료(Evidence)`

광범위한 `rm -rf`, 무차별 사용자 삭제, 시스템 전체 초기화 같은 위험한 reset은 금지합니다.

## 비밀정보(Secret)

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

또한 예시 출력에는 필요한 경우 다음을 구분합니다.

```text
정확히 만족해야 하는 조건
vs
사용자명/PID/시간/버전처럼 달라도 정상인 값
```
