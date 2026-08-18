# VS Code 원격 Ubuntu 표준(VS Code Remote Ubuntu Standard)

## 목적

macOS에서 VS Code를 사용하더라도 실제 Codyssey 개발 작업은 **OrbStack Ubuntu 24.04의 Linux 파일시스템·Bash·Git·Python 환경**에서 일관되게 수행하도록 공통 기준을 정의합니다.

이 문서는 코디세이 공식 Mission/Evaluation을 변경하지 않는 내부 개발환경 표준입니다.

## 핵심 원칙

```text
VS Code UI        = macOS
원격 전송(Remote transport) = OrbStack built-in SSH (`orb`)
저장소(Repository) = Ubuntu `$HOME/codyssey/...`
터미널(Terminal)    = Ubuntu Bash
Git               = Ubuntu Git
Python            = Ubuntu Python
가상환경(Virtual Env) = 각 Python repo의 `.venv`
Mac shared path   = 파일 교환/참조용
Docker            = 필요할 때만 선택
```

가장 중요한 원칙은 **Mac에서 VS Code 창을 실행하더라도 저장소(Repository)와 터미널(Terminal)의 실제 작업 위치는 Ubuntu `$HOME` 아래에 둔다**는 것입니다.

---

## 1. 왜 `/Users/...` 경로가 Ubuntu Terminal에 보이는가

OrbStack은 macOS와 Linux Machine 사이에 양방향 파일 공유를 제공합니다.

Linux 안에서도 Mac 파일을 다음처럼 볼 수 있습니다.

```text
/Users/<mac-user>/...
/mnt/mac/Users/<mac-user>/...
```

따라서 VS Code가 Mac의 `/Users/...` Repository를 연 상태에서 Ubuntu shell을 실행하면, shell 자체는 Bash여도 작업 파일은 Mac shared filesystem에 있을 수 있습니다.

R01의 기본 Linux 실행 환경(Primary Linux Runtime)에서는 이 구조를 기본 개발경로로 사용하지 않습니다.

```text
비권장 기본 작업공간(Primary Workspace)
/Users/<mac-user>/codyssey/...
/mnt/mac/Users/<mac-user>/codyssey/...

권장 기본 작업공간(Primary Workspace)
/home/<linux-user>/codyssey/...
= $HOME/codyssey/...
```

Mac shared path는 파일 교환, 참고, 임시 복사 용도로만 사용합니다.

---

## 2. VS Code 연결 방식

macOS VS Code에서 **Remote - SSH**로 OrbStack Linux Machine에 연결합니다.

OrbStack은 Linux Machine 접근용 built-in SSH server를 제공하며 SSH config에 `orb` host를 자동 등록합니다.

기본 흐름:

```text
macOS VS Code
→ Remote-SSH: Connect to Host
→ orb
→ OrbStack Ubuntu 24.04
→ Open Folder
→ /home/<linux-user>/codyssey/<repository>
```

특정 Machine 또는 User가 필요하면 OrbStack SSH 형식을 사용할 수 있습니다.

```text
ssh orb
ssh <machine>@orb
ssh <user>@orb
ssh <user>@<machine>@orb
```

VS Code는 해당 Remote 연결 안에서 Ubuntu Repository를 엽니다.

---

## 3. 권장 저장소(Repository) 위치

Ubuntu 안에서 공통 작업공간 루트(Workspace root)를 사용합니다.

```bash
mkdir -p "$HOME/codyssey"
cd "$HOME/codyssey"
```

권장 구조:

```text
$HOME/codyssey/
├── codyssey-basic/
├── codyssey-basic-b1-1-system-monitor/
├── codyssey-basic-b1-2-linux-troubleshooting/
├── ...
└── codyssey-basic-b7-2-advanced-ai-chatbot/
```

가능하면 한 VS Code 작업에서는 다음 두 저장소만 활성화합니다.

```text
Control Tower
+ 현재 미션(Active Mission) Workcell
```

---

## 4. VS Code 작업공간 터미널(Workspace Terminal) 기준

Mission Repository의 `.vscode/settings.json`은 최소한 다음 원칙을 사용합니다.

```json
{
  "terminal.integrated.defaultProfile.linux": "bash",
  "terminal.integrated.cwd": "${workspaceFolder}",
  "terminal.integrated.shellIntegration.enabled": true
}
```

의미:

- `defaultProfile.linux = bash`: Remote Ubuntu Terminal의 기본 shell을 Bash로 사용
- `cwd = ${workspaceFolder}`: 새 Terminal이 현재 Repository root에서 시작
- `shellIntegration.enabled = true`: VS Code가 Bash의 cwd/command 상태를 더 정확히 추적

사용자 홈의 절대 경로를 `.vscode/settings.json`에 하드코딩하지 않습니다.

```text
금지 예:
/home/park/codyssey/...
/Users/park/codyssey/...

권장:
${workspaceFolder}
$HOME
상대경로
```

---

## 5. Python `.venv` 기준

Python이 필요한 Mission은 Repository-local `.venv`를 우선합니다.

```text
repository/
├── .venv/
├── src/ 또는 app/
├── tests/
└── ...
```

예:

```bash
python3 -m venv .venv
```

`uv`를 해당 Mission에서 사용하기로 한 경우에는 다음처럼 만들 수 있습니다.

```bash
uv venv .venv
```

VS Code Python Environments는 기본적으로 Workspace 안의 `./**/.venv`를 검색합니다. Python Mission에서는 Remote Ubuntu 쪽 `.venv/bin/python`을 Interpreter로 선택합니다.

### Terminal 자동 활성화

Remote Ubuntu의 **Remote User Settings**에서 다음 설정을 권장합니다.

```json
{
  "python-envs.terminal.autoActivationType": "shellStartup"
}
```

이 설정은 Workspace 설정이 아니라 User scope에서 사용하는 설정입니다. 변경한 뒤 기존 Terminal을 닫고 새 Terminal을 엽니다.

정상 예:

```text
(.venv) user@ubuntu:~/codyssey/codyssey-basic-b5-2-fastapi-crud-app$
```

### 하지 않는 것

Global `~/.bashrc`에 특정 Project의 `.venv`를 무조건 활성화하는 코드를 넣지 않습니다.

```bash
# 비권장
source ~/codyssey/some-repo/.venv/bin/activate
```

이 방식은 다른 Mission으로 이동했을 때 잘못된 Python 환경이 계속 활성화되는 원인이 됩니다.

Non-Python Mission에는 `.venv`를 억지로 만들지 않습니다.

---

## 6. Bash Prompt 기준

Prompt는 입문자가 현재 위치와 가상환경을 쉽게 볼 수 있도록 단순하게 유지합니다.

권장 화면:

```text
user@ubuntu:~/codyssey/current-repo$
```

Python `.venv` 활성화 시:

```text
(.venv) user@ubuntu:~/codyssey/current-repo$
```

Git branch, Kubernetes context, Cloud account 등 많은 정보를 Prompt에 동시에 넣어 화면을 복잡하게 만들지 않습니다. 필요한 상태는 별도 진단 명령으로 확인합니다.

---

## 7. 새 Terminal 환경 확인

Repository root의 새 Terminal에서 다음을 확인합니다.

```bash
printf 'SHELL=%s\n' "$SHELL"
printf 'PWD=%s\n' "$PWD"
printf 'HOME=%s\n' "$HOME"
printf 'VIRTUAL_ENV=%s\n' "${VIRTUAL_ENV:-<none>}"

uname -a
command -v bash
command -v git
command -v python3 2>/dev/null || true

git rev-parse --show-toplevel 2>/dev/null || true
git branch --show-current 2>/dev/null || true
```

경로 판정:

```bash
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

Python Mission이면 추가 확인:

```bash
if [ -n "${VIRTUAL_ENV:-}" ]; then
  echo "[PASS] venv=$VIRTUAL_ENV"
  command -v python
else
  echo '[INFO] Python venv is not active'
fi
```

---

## 8. OrbStack SSH와 Mission SSH를 구분한다

특히 B1-1에서 중요합니다.

```text
OrbStack built-in SSH (`orb`)
= VS Code Remote 개발/관리 접속 경로

B1-1 Ubuntu OpenSSH `sshd:20022`
= Mission에서 직접 구성하고 검증하는 대상
```

둘을 같은 SSH로 취급하지 않습니다.

OrbStack의 built-in SSH는 VS Code가 Ubuntu Machine에 들어가는 관리 채널이고, B1-1의 `sshd:20022`는 공식 Mission 실제 실행(Runtime) 검증 대상입니다.

---

## 9. Extension / Setting 범위

설정은 역할별로 분리합니다.

```text
Mac VS Code User Settings
→ Theme / Font / UI

OrbStack Ubuntu Remote User Settings
→ Python terminal auto activation 등 Remote 공통 설정

Repository .vscode/settings.json
→ Bash / Workspace cwd / Repository-specific 설정
```

특정 사용자 홈이나 Secret을 Repository의 `.vscode/settings.json`에 저장하지 않습니다.

---

## 10. 정상 상태 정의

다음 상태를 목표로 합니다.

```text
[PASS] VS Code가 Remote-SSH `orb`로 Ubuntu에 연결됨
[PASS] Open Folder가 `$HOME/codyssey/<repo>`를 가리킴
[PASS] 새 Terminal이 Repository root에서 시작
[PASS] shell이 Ubuntu Bash
[PASS] Git이 Ubuntu Git
[PASS] Python Mission이면 `.venv` Interpreter 선택
[PASS] 새 Python Terminal에서 `.venv` 활성화
[PASS] `/Users/...` 또는 `/mnt/mac/...`를 Primary 개발경로로 사용하지 않음
```

이 상태가 되면 Terminal을 열 때마다 `cd ~` 후 다시 Repository로 이동하는 작업을 반복할 필요가 없습니다.

---

## 공식 참고자료

- OrbStack Docs — SSH access: https://docs.orbstack.dev/machines/ssh
- OrbStack Docs — File sharing: https://docs.orbstack.dev/machines/file-sharing
- VS Code Docs — Terminal profiles: https://code.visualstudio.com/docs/terminal/profiles
- VS Code Docs — Terminal shell integration: https://code.visualstudio.com/docs/terminal/shell-integration
- VS Code Docs — Python environments: https://code.visualstudio.com/docs/python/environments
