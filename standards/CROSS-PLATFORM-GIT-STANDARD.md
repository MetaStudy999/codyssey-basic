# Cross-Platform Git Standard

## 목적

Codyssey Basic 저장소를 **macOS + OrbStack Ubuntu 24.04**, **Windows 11 Pro + WSL2 Ubuntu 24.04**, 그리고 필요 시 Docker 사이에서 이동해도 줄바꿈·실행권한·파일명·경로 차이 때문에 불필요한 오류가 발생하지 않도록 공통 Git 파일 계약을 정의합니다.

이 문서는 코디세이 공식 Mission/Evaluation 요구사항을 바꾸지 않습니다. Repository portability를 위한 내부 표준입니다.

## 핵심 계약

```text
Repository text encoding = UTF-8
Repository text line ending = LF
Windows .bat / .cmd = CRLF 허용
Linux shell / Python / Web / YAML / Dockerfile = LF
```

각 저장소 루트의 두 파일이 실제 정책을 적용합니다.

```text
.gitattributes = Git checkout/add 시 파일 형식 계약
.editorconfig  = VS Code/Cursor/Windsurf/JetBrains 등 Editor 저장 형식 계약
```

`.gitattributes`가 Repository Source of Truth이며 개인의 `core.autocrlf` 설정에만 의존하지 않습니다.

---

## 1. Line Ending — LF / CRLF

전통적으로 다음 차이가 있습니다.

- Windows text: `CRLF` (`\r\n`)
- macOS/Linux text: `LF` (`\n`)

Linux shell script가 CRLF로 저장되면 다음과 같은 오류가 발생할 수 있습니다.

```text
/bin/bash^M: bad interpreter
/usr/bin/env: 'python3\r': No such file or directory
```

따라서 다음 파일은 LF를 기준으로 관리합니다.

- `*.sh`, `*.bash`, `*.zsh`
- `*.py`
- `*.js`, `*.jsx`, `*.ts`, `*.tsx`
- `*.json`, `*.jsonl`
- `*.md`
- `*.html`, `*.css`, `*.scss`
- `*.yml`, `*.yaml`, `*.toml`, `*.ini`, `*.conf`
- `*.service`
- `*.sql`, `*.csv`
- `*.ps1`
- `Dockerfile`, `Makefile`

Windows 전용 `*.bat`, `*.cmd`만 CRLF를 허용합니다.

---

## 2. Git 설정 원칙

개인의 Global Git 설정을 저장소 표준으로 사용하지 않습니다.

확인:

```bash
git config --show-origin --get core.autocrlf || true
git config --show-origin --get core.eol || true
git ls-files --eol | head -50
```

Repository의 `.gitattributes`가 명시한 `eol` 규칙이 우선입니다.

특정 파일의 실제 Git attribute 확인:

```bash
git check-attr text eol -- path/to/file
```

`core.autocrlf`의 Global 값을 프로젝트 때문에 무조건 변경하지 않습니다. 다른 저장소에 영향을 줄 수 있기 때문입니다.

---

## 3. 기존 Clone / 기존 파일의 정규화

`.gitattributes`를 새로 도입해도 기존 Local Working Tree를 무조건 대량 변경하지 않습니다.

먼저:

```bash
git status --short
git ls-files --eol | head -100
```

현재 작업이 없는 clean branch에서 정규화가 실제로 필요한 경우에만 별도 작업으로 수행합니다.

```bash
git add --renormalize .
git status --short
git diff --cached --check
git diff --cached --summary
```

주의:

- 기능 변경과 대규모 line-ending 정규화를 같은 Commit/PR에 섞지 않습니다.
- Active Mission Runtime을 방해하지 않는 범위에서만 수행합니다.
- 예상하지 못한 대규모 Diff가 보이면 Commit하지 말고 원인을 먼저 확인합니다.
- `git reset --hard`, `git clean -fd`를 단순 줄바꿈 정리를 위해 사용하지 않습니다.

---

## 4. Shell Script 실행권한

Linux/macOS에서는 실행 비트가 중요합니다.

```bash
chmod +x path/to/script.sh
git add path/to/script.sh
git ls-files --stage path/to/script.sh
```

Git mode:

```text
100755 = executable
100644 = normal file
```

Windows에서 파일을 편집했다고 해서 필요한 executable bit를 임의로 없애지 않습니다.

실행권한이 중요한 스크립트는 Runtime/Verify 전에 다음도 확인합니다.

```bash
git ls-files --stage '*.sh'
```

---

## 5. 파일명 대소문자

Linux는 일반적으로 대소문자를 구분합니다. Windows와 일반적인 macOS volume은 대소문자를 구분하지 않는 경우가 많습니다.

따라서 아래처럼 대소문자만 다른 두 파일을 만들지 않습니다.

```text
Config.py
config.py
```

새 파일은 가능하면 ASCII 기반 `lowercase-kebab-case` 또는 프로젝트 언어의 기존 naming convention을 따릅니다.

Git에서 대소문자 rename이 필요하면 명시적으로 처리합니다.

```bash
git mv OldName.md temporary-name.md
git mv temporary-name.md new-name.md
```

---

## 6. 경로

Source code에 개인 PC의 절대경로를 고정하지 않습니다.

피해야 할 예:

```text
C:\Users\name\project\data.json
/Users/name/project/data.json
/home/name/project/data.json
```

권장:

- Repository 기준 상대경로
- 언어의 path library (`pathlib.Path` 등)
- 환경변수
- 설정 파일의 portable path

Windows + WSL2에서 Linux 중심 미션은 가능하면 WSL filesystem 아래에서 작업합니다.

```text
/home/<user>/projects/...
```

`/mnt/c/...`는 Windows filesystem과의 공유가 필요한 경우에만 사용하고, Linux permission/symlink/file-watch 성격의 미션에서는 차이를 인지합니다.

---

## 7. Symlink

Symlink 동작은 Windows 설정과 Git 옵션에 따라 달라질 수 있습니다.

기초 미션에서는 공식 요구가 없다면 불필요한 symlink 의존성을 만들지 않습니다. 필요한 경우 실제 Linux Runtime에서 link type과 target을 검증합니다.

```bash
ls -l path
git ls-files -s path
```

---

## 8. Unicode / 한글 파일명

문서 내용에는 한글을 자유롭게 사용하되 자동화·CLI·Cross-platform 경로에 사용되는 핵심 파일명은 가능하면 ASCII 영문을 권장합니다.

예:

```text
beginner-guide.md
runtime-guide.md
evaluation.md
verify.sh
```

macOS/Linux 사이에서 Unicode normalization 차이가 생길 수 있으므로 동일해 보이는 한글 파일명을 중복 생성하지 않습니다.

---

## 9. Binary 파일

이미지, PDF, Archive, Database, Font 등은 line-ending 변환 대상이 아닙니다.

`.gitattributes`에서 주요 binary extension을 `binary`로 명시합니다.

예:

```text
*.png *.jpg *.pdf *.zip *.db *.sqlite *.woff2
```

---

## 10. IDE / Agent 공통 규칙

VS Code, Cursor, Windsurf, JetBrains 또는 AI coding agent가 바뀌어도 Repository 정책은 동일합니다.

```text
IDE / LLM 개인 설정
        ↓
.editorconfig
        ↓
.gitattributes
        ↓
Git Repository Contract
```

Editor가 다른 line ending으로 저장하려고 하더라도 `.editorconfig`와 `.gitattributes`를 우선합니다.

---

## 11. Cross-platform Preflight

새 환경에서 Mission을 시작할 때 최소 확인:

```bash
printf 'OS: '; uname -s
printf 'ARCH: '; uname -m

git status --short
git config --show-origin --get core.autocrlf || true
git ls-files --eol | head -50
git diff --check
```

Shell script가 있는 미션:

```bash
git ls-files --eol '*.sh'
git ls-files --stage '*.sh'
```

의심 파일의 CR 문자를 확인해야 할 때:

```bash
file path/to/script.sh
sed -n '1,5l' path/to/script.sh
```

출력에 `\r$` 또는 `^M` 성격이 보이면 CRLF 여부를 확인합니다.

---

## 12. R01 적용 범위

현재 R01 Runtime Profile:

```text
MAC-V = macOS → OrbStack → Ubuntu 24.04
WIN-V = Windows 11 Pro → WSL2 → Ubuntu 24.04
MAC-D = macOS → OrbStack Docker                 (선택 Lab)
WIN-D = Windows 11 Pro → WSL2 → Docker         (선택 Lab)
```

Cross-platform Git 규칙은 Docker 사용 여부와 관계없이 모든 Codyssey Basic 저장소에 적용합니다.

Mission CLEAR는 여전히 공식 Mission/Evaluation + Runtime + Verify + Evidence로 판단합니다. 이 파일 표준 자체가 별도의 평가항목을 추가하지 않습니다.

---

## 한 줄 기준

> **어디에서 편집하든 Git에 들어가는 개발용 Text는 UTF-8 + LF로 통일하고, OS 차이는 Repository 규칙으로 흡수한다.**
