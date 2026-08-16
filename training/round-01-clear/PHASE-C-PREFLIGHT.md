# R01 Phase C — Runtime Preflight

동결일: 2026-08-17

## 목적

각 미션 Runtime을 시작하기 전에 **잘못된 저장소, Cross-platform 파일 형식 문제, 남아 있는 프로세스, Port 충돌, 가상환경 혼동, Secret 노출, 기존 데이터/Cloud 자원 오염**을 먼저 차단합니다.

이 문서는 미션 구현을 대신하지 않는 공통 안전 Gate입니다.

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

## 2. Cross-platform Git / File 확인

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

## 3. 기본 Runtime 확인

```bash
uname -a
command -v bash || true
command -v python3 || true
command -v node || true
command -v npm || true
command -v sqlite3 || true
command -v git || true
command -v gh || true
```

필요한 도구만 해당 미션에서 사용합니다. 모든 미션을 위해 모든 패키지를 전역 설치하지 않습니다.

## 4. Process / Port 확인

```bash
ss -lntp 2>/dev/null || ss -lnt 2>/dev/null || true
ps -ef | grep -E 'uvicorn|vite|http.server|agent-app|agent.*leak' | grep -v grep || true
```

원칙:

- 이전 미션의 dev server가 남아 있으면 원인을 확인한 뒤 해당 프로세스만 종료
- B1-1 공식 `20022`, `15034`는 임의 변경 금지
- FastAPI/HTTP/Vite는 순차 Runtime이므로 시작 전에 local port만 확인
- 광범위한 `pkill -9`, `killall`, 재부팅으로 정리하지 않음

## 5. Python 환경 격리

```bash
printf 'VIRTUAL_ENV=%s\n' "${VIRTUAL_ENV:-<none>}"
python3 --version 2>/dev/null || true
```

다른 미션 `.venv`가 활성화되어 있으면 먼저 `deactivate` 후 현재 미션의 `.venv`를 사용합니다.

```text
B5-2 .venv ≠ B5-3 .venv ≠ B7-1 .venv ≠ B7-2 .venv
```

System Python에 FastAPI/SQLAlchemy 등을 일괄 설치하지 않습니다.

## 6. Node 환경 격리

B4-2에서만 확인합니다.

```bash
node --version
npm --version
```

`node_modules`는 B4-2 Reference 내부에서만 사용합니다. 다른 미션으로 복사하거나 공유하지 않습니다.

## 7. Secret Presence 확인 — 값은 출력하지 않음

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

## 8. Local data / DB 확인

새 Runtime 전에 현재 미션이 만들 기존 데이터가 있는지 먼저 확인합니다.

```bash
find training/round-01-clear/reference -maxdepth 2 \
  \( -name '*.db' -o -name '*.sqlite' -o -name '*.sqlite3' -o -name 'data' \) \
  -print 2>/dev/null || true
```

기존 파일이 보인다고 자동 삭제하지 않습니다. `reset.sh`가 있는 미션은 범위를 읽고, 현재 Round가 만든 파일임이 명확할 때만 사용합니다.

## 9. Cloud / Remote resource 확인

B4-2/B6-1/B7-1/B7-2에서만 적용합니다.

- 사용 중인 project/account/region을 먼저 확인
- 실제 production/shared resource와 실습 resource를 구분
- B6-1은 `ap-northeast-2`
- AWS Access Key/Secret/Session Token/Private Key는 출력 금지
- Supabase Service Role Key를 frontend에 사용 금지
- Cleanup은 현재 미션이 생성한 자원만 대상

## 10. Evidence 시작 상태

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

## 11. Start Gate

아래가 모두 확인되면 해당 미션의 `BEGINNER-GUIDE.md` STEP 01로 이동합니다.

```text
[ ] 올바른 repository/branch
[ ] 보존해야 할 local 변경 확인
[ ] Cross-platform line ending / file mode 이상 없음
[ ] 이전 미션 process/dev-server 정리
[ ] 필요한 port 충돌 없음
[ ] 현재 미션 Python/Node 환경 격리
[ ] Secret 값 출력 없음
[ ] 기존 DB/data 처리 방침 확인
[ ] Cloud/remote 대상 확인
[ ] Evidence 저장 위치 확인
```

Preflight PASS는 Mission PASS가 아닙니다. 실제 기능·실패경로·Evidence를 모두 검증해야 CLEAR입니다.
