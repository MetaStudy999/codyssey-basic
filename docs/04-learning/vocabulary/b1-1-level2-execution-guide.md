# B1-1 Level 2 입문자 무오류 실행 가이드

**미션:** 컴퓨터가 알아서 자기 상태를 점검하게 만들기  
**단계:** B1-1 Level 2 — 구현 필수 용어를 실제 실행 순서로 연결  
**목표:** 명령을 많이 외우는 것이 아니라 `사전 확인 → 안전한 변경 → 즉시 검증 → 오류 시 복구 → 증빙` 순서를 몸에 익힌다.  
**기준:** B1-1 원본 Mission PDF + 현재 B1-1 미션 저장소 `MetaStudy999/codyssey-basic-b1-1-system-monitor`

> 이 문서는 원본 Mission의 요구사항과 현재 미션 저장소의 구현 예시를 구분한다. `20022`, `15034`, 사용자/그룹 이름, `AGENT_*`, `monitor.sh`, 임계값, 로그 경로, cron 매분 실행, 10MB/10개 정책은 원본 요구사항이다. `/etc/agent-app/agent.env`, `scripts/preflight.sh`, 저장소의 config 파일 등은 현재 미션 저장소가 입문자 재현성을 위해 선택한 구현 방식이다.

---

## 0. 가장 중요한 원칙

B1-1은 아래 순서를 **건너뛰지 않는다.**

```text
0. 사전점검
   ↓
1. 사용자·그룹
   ↓
2. 디렉터리·권한·ACL
   ↓
3. SSH 변경 전 네트워크 안전 확인
   ↓
4. SSH 20022 / Root 차단
   ↓
5. 방화벽 최종 정책
   ↓
6. 환경변수·키·Agent 실행
   ↓
7. monitor.sh 배치·수동 검증
   ↓
8. cron 자동 실행
   ↓
9. logrotate
   ↓
10. 최종 Evidence
```

각 단계의 완료 기준은 동일하다.

```text
실행
 +
확인
 +
오류가 있으면 복구
 +
재확인
 = 다음 단계로 이동
```

### STOP 규칙

다음 상황에서는 다음 단계로 넘어가지 않는다.

- 현재 환경이 Linux가 아님
- `systemd`, `sshd`, `sudo`, `ss`, `cron`, `getfacl/setfacl` 등 핵심 도구가 동작하지 않음
- SSH 설정 문법 검사가 실패함
- 권한 테스트에서 `agent-test`가 핵심 디렉터리에 접근함
- Agent Boot Sequence 5단계가 모두 `[OK]`가 아님
- `Agent READY`가 없음
- TCP `15034`가 LISTEN이 아님
- `monitor.sh` 정상 시나리오가 종료 코드 `0`이 아님
- cron 등록 후 실제 로그가 증가하지 않음

---

# 1. 작업 위치 준비

현재 B1-1 구현 저장소를 기준으로 진행한다.

```bash
git clone https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor.git
cd codyssey-basic-b1-1-system-monitor
```

이미 clone되어 있다면 새로 clone하지 말고 저장소 루트만 확인한다.

```bash
git rev-parse --show-toplevel
pwd
```

저장소에서 사용할 핵심 파일은 다음과 같다.

```text
scripts/preflight.sh
scripts/monitor.sh
scripts/verify.sh
config/agent.env.example
config/crontab.example
config/agent-monitor.logrotate
agent-app.zip
```

### [CHECK]

```bash
ls -l scripts/preflight.sh scripts/monitor.sh scripts/verify.sh
ls -l config/agent.env.example config/crontab.example config/agent-monitor.logrotate
ls -lh agent-app.zip
```

모두 확인되면 `[GO]`.

---

# 2. Step 0 — 변경 전에 사전점검

현재 저장소에는 **읽기 전용** 점검 스크립트가 있다. SSH, 방화벽, 사용자, 그룹, ACL, cron을 변경하지 않고 현재 상태만 확인한다.

```bash
bash scripts/preflight.sh
```

마지막 결과를 본다.

```text
[GO]   → 다음 단계 진행 가능
[WARN] → 내용을 읽고 차이를 이해한 뒤 진행
[STOP] → FAIL 항목부터 해결
```

### 주요 확인 항목

- 현재 사용자와 Root 여부
- Ubuntu 또는 동등 Linux 여부
- CPU 아키텍처
- PID 1이 `systemd`인지
- `sudo`
- `sshd`
- `ufw`
- `cron`
- `getfacl`, `setfacl`
- `ss`
- `logrotate`
- `pgrep`, `awk`, `df`, `unzip`, `python3`

### Ubuntu에서 도구가 실제로 빠져 있을 때의 구현 예시

아래 설치 명령은 **원본 Mission의 고정 명령이 아니라 Ubuntu 구현 예시**다.

```bash
sudo apt update
sudo apt install -y \
  openssh-server \
  ufw \
  acl \
  cron \
  logrotate \
  unzip \
  procps \
  iproute2 \
  python3
```

설치 후 다시:

```bash
bash scripts/preflight.sh
```

### WSL2 / Docker / OrbStack 주의

현재 미션 저장소의 실행 가이드는 `systemd`, SSH 서비스, cron, UFW가 실제로 동작하는 Linux 환경을 전제로 검증한다. 컨테이너처럼 PID 1이 `systemd`가 아니거나 방화벽/SSH가 호스트에 의해 관리되는 환경이라면, 결과를 억지로 PASS 처리하지 않는다.

---

# 3. Step 1 — 사용자와 그룹을 먼저 만든다

원본 요구 사용자:

```text
agent-admin
agent-dev
agent-test
```

원본 요구 그룹:

```text
agent-common = admin + dev + test
agent-core   = admin + dev
```

## 3.1 없는 그룹만 생성

```bash
getent group agent-common >/dev/null || sudo groupadd agent-common
getent group agent-core   >/dev/null || sudo groupadd agent-core
```

## 3.2 없는 사용자만 생성

```bash
for user in agent-admin agent-dev agent-test; do
  if id "$user" >/dev/null 2>&1; then
    echo "[SKIP] $user already exists"
  else
    sudo useradd -m -s /bin/bash "$user"
    echo "[OK] created $user"
  fi
done
```

## 3.3 그룹 멤버십 구성

```bash
sudo usermod -aG agent-common agent-admin
sudo usermod -aG agent-common agent-dev
sudo usermod -aG agent-common agent-test

sudo usermod -aG agent-core agent-admin
sudo usermod -aG agent-core agent-dev
```

`agent-test`는 `agent-core`에 넣지 않는다.

## 3.4 즉시 검증

```bash
id agent-admin
id agent-dev
id agent-test
```

목표:

```text
agent-admin → agent-common + agent-core
agent-dev   → agent-common + agent-core
agent-test  → agent-common만
```

### [STOP]

`agent-test`가 `agent-core`에 보이면 다음으로 넘어가지 않는다.

잘못 넣었다면:

```bash
sudo gpasswd -d agent-test agent-core
id agent-test
```

---

# 4. Step 2 — 디렉터리, 소유권, ACL

현재 가이드의 표준 경로는 원본 Mission의 예시를 사용한다.

```bash
export AGENT_HOME=/home/agent-admin/agent-app
```

필요 디렉터리:

```bash
sudo mkdir -p \
  "$AGENT_HOME/upload_files" \
  "$AGENT_HOME/api_keys" \
  "$AGENT_HOME/bin" \
  /var/log/agent-app
```

## 4.1 부모 홈 통과 권한

`agent-test`도 `upload_files`에는 접근해야 하므로 `/home/agent-admin`을 통과할 수 있어야 한다. 홈 전체를 755로 넓게 열지 않고 ACL로 그룹에 통과 권한만 준다.

```bash
sudo setfacl -m g:agent-common:--x /home/agent-admin
```

## 4.2 AGENT_HOME

```bash
sudo chown agent-admin:agent-common "$AGENT_HOME"
sudo chmod 2750 "$AGENT_HOME"
```

## 4.3 upload_files — 세 사용자 공용 R/W

```bash
sudo chown agent-admin:agent-common "$AGENT_HOME/upload_files"
sudo chmod 2770 "$AGENT_HOME/upload_files"
sudo setfacl -m d:u::rwx,d:g::rwx,d:o::--- "$AGENT_HOME/upload_files"
```

## 4.4 api_keys — core만 R/W

```bash
sudo chown agent-admin:agent-core "$AGENT_HOME/api_keys"
sudo chmod 2770 "$AGENT_HOME/api_keys"
sudo setfacl -m d:u::rwx,d:g::rwx,d:o::--- "$AGENT_HOME/api_keys"
```

## 4.5 로그 디렉터리 — core만 R/W

```bash
sudo chown agent-admin:agent-core /var/log/agent-app
sudo chmod 2770 /var/log/agent-app
sudo setfacl -m d:u::rwx,d:g::rwx,d:o::--- /var/log/agent-app
```

## 4.6 bin 디렉터리

`monitor.sh`는 `agent-dev:agent-core`, 750이어야 한다.

```bash
sudo chown agent-dev:agent-core "$AGENT_HOME/bin"
sudo chmod 2750 "$AGENT_HOME/bin"
```

## 4.7 권한 구조 확인

```bash
ls -ld \
  /home/agent-admin \
  "$AGENT_HOME" \
  "$AGENT_HOME/upload_files" \
  "$AGENT_HOME/api_keys" \
  "$AGENT_HOME/bin" \
  /var/log/agent-app

getfacl /home/agent-admin
getfacl "$AGENT_HOME/upload_files"
getfacl "$AGENT_HOME/api_keys"
getfacl /var/log/agent-app
```

## 4.8 실제 허용/차단 테스트

### agent-test → upload_files는 성공해야 함

```bash
sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/upload_files/.b1-test && rm /home/agent-admin/agent-app/upload_files/.b1-test'
```

### agent-test → api_keys는 실패해야 함

```bash
sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/api_keys/.should-fail'
```

정상 목표:

```text
Permission denied
```

### agent-test → 로그 디렉터리도 실패해야 함

```bash
sudo -u agent-test bash -c \
  'touch /var/log/agent-app/.should-fail'
```

정상 목표:

```text
Permission denied
```

### [STOP]

차단되어야 할 명령이 성공했다면 권한을 고치기 전에는 진행하지 않는다.

---

# 5. Step 3 — SSH를 바꾸기 전 안전 확인

원본 목표:

```text
SSH Port = 20022
PermitRootLogin = no
```

SSH 변경에서 가장 중요한 것은 **접속을 끊지 않는 것**이다.

## 5.1 현재 연결이 SSH인지 확인

```bash
printf 'SSH_CONNECTION=%s\nSSH_CLIENT=%s\n' "$SSH_CONNECTION" "$SSH_CLIENT"
```

원격 SSH 작업 중이라면:

- 현재 세션을 닫지 않는다.
- 가능하면 VM/클라우드 콘솔 등 복구 경로를 확보한다.
- UFW가 이미 active면 `20022/tcp`를 먼저 허용한다.

```bash
sudo ufw status verbose
```

UFW가 active인 경우에만 먼저:

```bash
sudo ufw allow 20022/tcp
```

## 5.2 현재 포트 확인

```bash
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

## 5.3 SSH 설정 백업

```bash
sudo cp -a /etc/ssh/sshd_config /etc/ssh/sshd_config.b1-1.backup
sudo cmp -s /etc/ssh/sshd_config /etc/ssh/sshd_config.b1-1.backup \
  && echo '[OK] backup identical' \
  || echo '[STOP] backup differs'
```

`[STOP]`이면 진행하지 않는다.

---

# 6. Step 4 — SSH 20022와 Root 차단

현재 저장소 가이드는 원본 파일을 크게 수정하지 않고 drop-in을 사용한다.

```bash
sudo tee /etc/ssh/sshd_config.d/99-b1-1.conf >/dev/null <<'EOF'
Port 20022
PermitRootLogin no
EOF
```

확인:

```bash
sudo cat /etc/ssh/sshd_config.d/99-b1-1.conf
```

## 6.1 문법 검사 — 가장 중요한 STOP Gate

```bash
sudo sshd -t && echo '[OK] sshd syntax'
```

오류가 한 줄이라도 나오면 **서비스를 재시작하지 않는다.**

## 6.2 최종 해석값

```bash
sudo sshd -T | grep -E '^(port|permitrootlogin) '
```

목표:

```text
port 20022
permitrootlogin no
```

## 6.3 서비스 방식 확인

Ubuntu 버전과 환경에 따라 `ssh.service` 상시 실행 또는 `ssh.socket` socket activation을 사용할 수 있다.

```bash
systemctl status ssh.service --no-pager || true
systemctl status ssh.socket --no-pager || true
```

### 일반 service 방식

```bash
sudo systemctl restart ssh.service
```

### 현재 B1-1 저장소의 Ubuntu 24.04 검증 환경처럼 socket activation 방식인 경우

```bash
sudo systemctl daemon-reload
sudo systemctl restart ssh.socket
```

환경 차이를 확인하지 않고 두 방식을 무조건 섞지 않는다.

## 6.4 실제 LISTEN 확인

```bash
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

최종 목표:

```text
20022 LISTEN = YES
22 LISTEN    = NO
```

## 6.5 새 세션 검증

가능한 환경에서는 기존 세션을 닫기 전에 별도 터미널에서:

```bash
ssh -p 20022 <일반사용자>@<서버주소>
```

접속 성공 후에만 기존 SSH 세션을 정리한다.

---

# 7. Step 5 — UFW 최종 방화벽 정책

원본 Mission은 UFW 또는 firewalld 중 하나를 허용한다. 현재 B1-1 저장소는 Ubuntu 입문자 경로로 UFW를 사용한다.

목표:

```text
default incoming = deny
ALLOW IN = 20022/tcp
ALLOW IN = 15034/tcp
그 외 불필요한 inbound allow 없음
```

## 7.1 먼저 현재 규칙 확인

```bash
sudo ufw status numbered
```

공유 서버나 다른 서비스를 운영 중인 환경에서 `ufw reset`을 무작정 실행하지 않는다.

## 7.2 기본 정책과 필수 포트

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 20022/tcp
sudo ufw allow 15034/tcp
```

## 7.3 활성화

```bash
sudo ufw enable
```

## 7.4 불필요한 허용 규칙 제거

```bash
sudo ufw status numbered
```

불필요한 inbound ALLOW가 있다면 번호를 확인하고 **큰 번호부터** 하나씩 삭제한다.

```bash
sudo ufw delete <번호>
```

특히 `22/tcp ALLOW`가 남아 있지 않은지 확인한다.

## 7.5 최종 확인

```bash
sudo ufw status verbose
sudo ss -lntp | grep -E ':(22|20022|15034)\b' || true
```

이 시점에는 Agent를 아직 실행하지 않았다면 `15034` LISTEN이 없어도 정상이다. 방화벽 규칙만 준비되어 있으면 된다.

---

# 8. Step 6 — Agent 환경변수 파일

원본 요구 환경변수:

```text
AGENT_HOME
AGENT_PORT
AGENT_UPLOAD_DIR
AGENT_KEY_PATH
AGENT_LOG_DIR
```

현재 저장소는 cron과 수동 실행이 같은 환경을 쓰도록 `/etc/agent-app/agent.env`를 사용한다.

```bash
REPO_DIR="$(git rev-parse --show-toplevel)"

sudo install -d -o root -g agent-core -m 0750 /etc/agent-app
sudo install -o root -g agent-core -m 0640 \
  "$REPO_DIR/config/agent.env.example" \
  /etc/agent-app/agent.env
```

확인:

```bash
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printenv | grep "^AGENT_" | sort'
```

목표:

```text
AGENT_HOME=/home/agent-admin/agent-app
AGENT_KEY_PATH=/home/agent-admin/agent-app/api_keys/t_secret.key
AGENT_LOG_DIR=/var/log/agent-app
AGENT_PORT=15034
AGENT_UPLOAD_DIR=/home/agent-admin/agent-app/upload_files
```

---

# 9. Step 7 — 테스트 키 파일

원본 Mission은 다음 파일을 요구한다.

```text
$AGENT_HOME/api_keys/t_secret.key
```

원본 PDF에는 미션용 1줄 테스트 값도 제시되어 있다. 그러나 증빙과 Git에는 값을 노출하지 않고 **로컬 입력** 방식으로 만든다.

```bash
read -rsp 'Enter B1-1 mission test key: ' B1_KEY
printf '\n'
printf '%s\n' "$B1_KEY" | sudo tee \
  /home/agent-admin/agent-app/api_keys/t_secret.key >/dev/null
unset B1_KEY
```

권한:

```bash
sudo chown agent-admin:agent-core \
  /home/agent-admin/agent-app/api_keys/t_secret.key
sudo chmod 0660 \
  /home/agent-admin/agent-app/api_keys/t_secret.key
```

값을 출력하지 않고 검증한다.

```bash
sudo stat -c 'owner=%U group=%G mode=%a path=%n' \
  /home/agent-admin/agent-app/api_keys/t_secret.key
sudo wc -l /home/agent-admin/agent-app/api_keys/t_secret.key
```

`agent-test` 차단 확인:

```bash
sudo -u agent-test test -r \
  /home/agent-admin/agent-app/api_keys/t_secret.key \
  && echo '[STOP] agent-test can read key' \
  || echo '[OK] agent-test blocked'
```

---

# 10. Step 8 — 제공 Agent ZIP을 추측하지 않고 확인

원본 PDF 본문은 제공 Python 앱이라고 설명하고, 데이터 파일 설명에는 Linux x86/arm64 제공 파일명이 제시되어 있다. 따라서 **파일 구조와 실행 파일명을 추측하지 않는다.**

## 10.1 ZIP 목록

```bash
REPO_DIR="$(git rev-parse --show-toplevel)"
unzip -l "$REPO_DIR/agent-app.zip"
```

## 10.2 임시 디렉터리에 해제

```bash
rm -rf /tmp/b1-1-agent-extract
mkdir -p /tmp/b1-1-agent-extract
unzip -q "$REPO_DIR/agent-app.zip" -d /tmp/b1-1-agent-extract
find /tmp/b1-1-agent-extract -maxdepth 4 -type f -print | sort
```

## 10.3 CPU 아키텍처와 실제 제공 파일 대응

```bash
uname -m
```

원본 데이터 설명의 대응:

```text
x86 / x86_64 계열 → agent-app-linux-x86
arm64 / aarch64   → agent-app-linux-arm64
```

실제 ZIP 안에서 후보를 찾는다.

```bash
find /tmp/b1-1-agent-extract -type f \
  \( -name 'agent-app-linux-x86' -o -name 'agent-app-linux-arm64' -o -name 'agent_app.py' \) \
  -print
```

### [STOP]

실제 제공 파일을 확인하지 않은 상태에서 임의 파일명을 만들어 실행하지 않는다.

---

# 11. Step 9 — Agent 배치와 일반 사용자 실행

실제 ZIP 구조를 확인한 뒤 앱 루트의 내용을 `$AGENT_HOME`에 배치한다.

예를 들어 파일이 임시 디렉터리 최상위에 직접 있다면:

```bash
sudo cp -a /tmp/b1-1-agent-extract/. /home/agent-admin/agent-app/
```

최상위 디렉터리가 한 단계 더 있다면 그 **실제 앱 루트의 내용만** 복사한다.

복사 후 `upload_files`, `api_keys`, `bin`, 로그 권한을 다시 확인하고 Step 2 정책이 깨졌으면 복구한다.

```bash
ls -ld \
  /home/agent-admin/agent-app/upload_files \
  /home/agent-admin/agent-app/api_keys \
  /home/agent-admin/agent-app/bin \
  /var/log/agent-app
```

## 11.1 실제 실행 파일이 binary인 경우

실제 파일에 실행 권한이 있는지 확인한다.

```bash
ls -l /home/agent-admin/agent-app/<실제-제공-파일명>
```

필요한 경우:

```bash
sudo chmod 0750 /home/agent-admin/agent-app/<실제-제공-파일명>
sudo chown agent-admin:agent-core /home/agent-admin/agent-app/<실제-제공-파일명>
```

## 11.2 일반 사용자로 실행

```bash
sudo -u agent-admin -H bash -c '
  set -a
  source /etc/agent-app/agent.env
  set +a
  exec "$AGENT_HOME/<실제-제공-파일명>"
'
```

만약 실제 제공 엔트리가 Python 파일이면 마지막 줄만 실제 Python 실행 방식으로 바꾼다.

```text
금지: Root로 Agent 실행
```

## 11.3 성공 기준

터미널에서 반드시 확인한다.

```text
Boot Sequence 5단계 모두 [OK]
Agent READY
```

다른 터미널에서:

```bash
sudo ss -lntp | grep ':15034\b'
```

원본 목표:

```text
0.0.0.0:15034 LISTEN
```

### [STOP]

Boot Sequence 중 하나라도 실패하거나 `Agent READY`가 없으면 monitor 단계로 넘어가지 않는다.

---

# 12. Step 10 — 실제 Agent 파일명과 monitor 프로세스 패턴 맞추기

현재 저장소의 `scripts/monitor.sh` 기본값은 다음이다.

```text
AGENT_PROCESS_PATTERN=agent_app.py
```

원본 Mission은 `agent_app.py(또는 제공 앱 파일명)`을 허용한다. 실제 제공 앱이 `agent-app-linux-x86` 또는 `agent-app-linux-arm64`라면 환경 파일에 실제 파일명을 추가한다.

예:

```bash
sudo tee -a /etc/agent-app/agent.env >/dev/null <<'EOF'
AGENT_PROCESS_PATTERN=agent-app-linux-x86
EOF
```

ARM64라면 실제 파일명에 맞춘다.

중복 설정을 만들지 않도록 먼저 확인한다.

```bash
sudo grep '^AGENT_PROCESS_PATTERN=' /etc/agent-app/agent.env || true
```

이미 있으면 새 줄을 추가하지 말고 기존 값을 수정한다.

확인:

```bash
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; echo "$AGENT_PROCESS_PATTERN"'
```

이 단계는 **실제 ZIP의 파일명을 확인한 뒤에만** 수행한다.

---

# 13. Step 11 — monitor.sh를 실제 위치에 배치

먼저 Bash 문법 검사:

```bash
bash -n scripts/monitor.sh
```

출력이 없고 종료 코드가 0이어야 한다.

```bash
echo $?
```

배치:

```bash
sudo install -o agent-dev -g agent-core -m 0750 \
  scripts/monitor.sh \
  /home/agent-admin/agent-app/bin/monitor.sh
```

검증:

```bash
stat -c 'owner=%U group=%G mode=%a path=%n' \
  /home/agent-admin/agent-app/bin/monitor.sh
```

목표:

```text
owner=agent-dev
group=agent-core
mode=750
```

---

# 14. Step 12 — monitor.sh 정상 시나리오

Agent가 실행 중이고 15034가 LISTEN일 때:

```bash
sudo -u agent-admin \
  /home/agent-admin/agent-app/bin/monitor.sh
```

즉시 종료 코드 확인:

```bash
echo $?
```

목표:

```text
0
```

정상 시 로그 한 줄이 추가된다.

```bash
tail -n 5 /var/log/agent-app/monitor.log
```

원본 포맷:

```text
[YYYY-MM-DD HH:MM:SS] PID:... CPU:..% MEM:..% DISK_USED:..%
```

임계값:

```text
CPU > 20%       → WARNING
MEM > 10%       → WARNING
DISK_USED > 80% → WARNING
```

WARNING은 Health Check 실패와 달리 스크립트를 종료시키지 않는다.

---

# 15. Step 13 — monitor.sh 실패 시나리오를 의도적으로 확인

## 15.1 Agent 프로세스 중지

Agent를 원본 안내대로 정상 종료한다.

```text
Ctrl+C
```

그 후:

```bash
sudo -u agent-admin \
  /home/agent-admin/agent-app/bin/monitor.sh
echo $?
```

목표:

```text
Agent process not found
exit code = 1
```

## 15.2 다시 Agent를 실행하고 정상 상태 복구

```text
Boot 5단계 [OK]
Agent READY
15034 LISTEN
```

다시 monitor 실행:

```bash
sudo -u agent-admin \
  /home/agent-admin/agent-app/bin/monitor.sh
echo $?
```

목표:

```text
0
```

**오류 발생 → 원인 확인 → 복구 → 재검증**까지 해야 학습이 끝난다.

---

# 16. Step 14 — cron 매분 자동 실행

원본 요구 실행 계정은 `agent-admin`이다.

현재 저장소의 `config/crontab.example`은 매분 `monitor.sh`를 실행하고, `monitor.sh` 자체가 `/etc/agent-app/agent.env`를 읽도록 구성되어 있다.

설치:

```bash
sudo -u agent-admin crontab < config/crontab.example
```

확인:

```bash
sudo -u agent-admin crontab -l
```

핵심 줄:

```text
* * * * * /home/agent-admin/agent-app/bin/monitor.sh >/dev/null 2>&1
```

## 16.1 자동 실행 확인

현재 로그의 마지막 시간을 확인한다.

```bash
tail -n 3 /var/log/agent-app/monitor.log
```

1~2분 뒤 다시:

```bash
tail -n 5 /var/log/agent-app/monitor.log
```

새 줄이 자동 추가되어야 한다.

### cron이 안 될 때 순서

```bash
systemctl is-active cron
sudo -u agent-admin crontab -l
stat -c '%U %G %a %n' /home/agent-admin/agent-app/bin/monitor.sh
sudo -u agent-admin /home/agent-admin/agent-app/bin/monitor.sh
tail -n 20 /var/log/agent-app/monitor.log
```

수동 실행부터 정상인지 확인하고 cron을 의심한다.

---

# 17. Step 15 — 10MB / 10개 로그 회전

원본 Mission은 방법을 자유롭게 허용하며, 현재 저장소는 `logrotate`를 사용한다.

설정 파일:

```text
config/agent-monitor.logrotate
```

설치:

```bash
sudo install -o root -g root -m 0644 \
  config/agent-monitor.logrotate \
  /etc/logrotate.d/agent-monitor
```

현재 설정의 핵심:

```text
size 10M
rotate 10
compress
missingok
notifempty
```

## 17.1 문법/동작 점검

실제 회전을 강제로 일으키기 전에 debug 모드로 먼저 확인한다.

```bash
sudo logrotate -d /etc/logrotate.d/agent-monitor
```

`-d`는 debug이며 실제 회전을 수행하지 않는다.

원본 요구는 최대 10MB/10개 수준 유지이므로 실제 런타임 증빙이 필요하면 테스트 로그 환경에서 회전 동작을 별도로 검증한다.

---

# 18. Step 16 — 한 번에 최종 검증

현재 B1-1 저장소에는 `scripts/verify.sh`가 있다. 이 스크립트의 결과를 무조건 PASS로 믿지 말고, 각 항목의 실제 출력과 원본 요구사항을 함께 본다.

```bash
bash scripts/verify.sh
```

최소한 아래 항목은 개별적으로도 직접 확인한다.

## SSH

```bash
sudo sshd -T | grep -E '^(port|permitrootlogin) '
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

## 방화벽

```bash
sudo ufw status verbose
```

## 사용자·그룹

```bash
id agent-admin
id agent-dev
id agent-test
```

## ACL

```bash
getfacl /home/agent-admin/agent-app/upload_files
getfacl /home/agent-admin/agent-app/api_keys
getfacl /var/log/agent-app
```

## Agent

```bash
sudo ss -lntp | grep ':15034\b'
```

Boot Sequence와 `Agent READY`는 실제 Agent 실행 터미널 출력을 증거로 남긴다.

## monitor.sh

```bash
sudo -u agent-admin /home/agent-admin/agent-app/bin/monitor.sh
echo $?
tail -n 5 /var/log/agent-app/monitor.log
```

## cron

```bash
sudo -u agent-admin crontab -l
```

그리고 실제 1~2분 후 로그 증가를 확인한다.

---

# 19. Evidence — 무엇을 저장해야 하는가

원본 Mission의 필수 증거는 다음 8개 축으로 정리한다.

1. SSH 20022 + Root 원격 로그인 차단
2. UFW 활성 + 20022/tcp, 15034/tcp만 허용
3. agent-admin/dev/test + agent-common/core
4. 디렉터리 구조 + 소유권 + 권한 + ACL
5. Boot Sequence 5단계 `[OK]` + `Agent READY`
6. monitor.sh 정상 출력 + 프로세스/포트/리소스/경고
7. `/var/log/agent-app/monitor.log` 최근 누적 라인
8. agent-admin crontab 매분 등록 + 1~2분 후 로그 증가

### 비밀정보 증빙 원칙

다음은 화면에 값 자체를 남기지 않는다.

- `t_secret.key` 실제 내용
- 실제 API Key
- 비밀번호
- 토큰

증빙은 `경로`, `owner/group`, `mode`, `줄 수`, `접근 허용/차단 결과`로 충분하다.

---

# 20. Level 2 용어를 실행 순서에 연결하기

| 실행 단계 | 실제 만나는 Level 2 용어 |
|---|---|
| 사용자·그룹 | User Creation, Group Creation, Group Membership, `id` |
| 권한 | `chmod`, `chown`, `chgrp`, `setfacl`, `getfacl`, Numeric Permission, 750 |
| SSH | `sshd_config`, Port Directive, PermitRootLogin, `ss -tulnp` |
| 방화벽 | UFW, `ufw status`, Allow Rule, TCP Port 20022/15034 |
| 환경 | AGENT_HOME, AGENT_PORT, AGENT_UPLOAD_DIR, AGENT_KEY_PATH, AGENT_LOG_DIR |
| 키 | `t_secret.key`, Secret Key File, Writable State |
| Agent | Boot Sequence, Startup Validation, Agent READY, Ctrl+C |
| monitor | Shebang, Shell Variable, Conditional, Command Substitution, Pipe, stdout/stderr, Exit Status |
| Health | Process Status Check, Port Status Check, Firewall Status Check |
| Resource | CPU/MEM/DISK Collection, Threshold Warning |
| Log | `/var/log/agent-app`, `monitor.log`, Timestamp, Append Redirection |
| cron | Cron Expression, Every-Minute Schedule, Crontab Registration |
| logrotate | Log File Size, 10MB Limit, Retention Count, Log Rotation |

즉 Level 2 용어는 따로 외우는 목록이 아니라 **실행 과정에서 만나는 도구와 상태 이름**이다.

---

# 21. 초보자용 장애 진단 순서

문제가 생기면 아래 순서를 지킨다.

```text
1. 내가 누구인가?        → id / whoami
2. 파일이 있는가?        → ls / stat
3. 부모 경로를 통과하는가? → namei -l / getfacl
4. 환경변수가 있는가?    → printenv | grep ^AGENT_
5. 프로세스가 있는가?    → pgrep -af
6. 포트가 LISTEN인가?    → ss -lntp
7. 방화벽이 허용하는가?  → ufw status
8. 로그에 무엇이 남았는가? → tail
9. 종료 코드는 무엇인가? → echo $?
10. 복구 후 다시 같은 검증을 했는가?
```

명령을 무작위로 많이 실행하지 않는다.

---

# 22. 최종 PASS 체크리스트

아래가 모두 YES일 때만 B1-1 필수 구현 흐름을 완료했다고 본다.

- [ ] Linux/systemd 기반 실습 환경을 확인했다.
- [ ] `agent-admin`, `agent-dev`, `agent-test`가 존재한다.
- [ ] `agent-common`, `agent-core` 멤버십이 정확하다.
- [ ] `agent-test`가 upload_files는 쓰고 api_keys/log는 쓰지 못한다.
- [ ] SSH 최종 포트가 20022다.
- [ ] `PermitRootLogin no`다.
- [ ] 22번 SSH LISTEN이 남아 있지 않다.
- [ ] UFW가 active다.
- [ ] inbound 허용은 20022/tcp, 15034/tcp 정책을 만족한다.
- [ ] 5개 `AGENT_*` 환경변수가 정확하다.
- [ ] 테스트 키 파일이 지정 위치에 있고 권한이 정확하다.
- [ ] Agent가 Root가 아닌 일반 사용자로 실행된다.
- [ ] Boot Sequence 5단계가 모두 `[OK]`다.
- [ ] `Agent READY`가 나온다.
- [ ] `0.0.0.0:15034`가 LISTEN이다.
- [ ] 실제 앱 파일명과 `AGENT_PROCESS_PATTERN`이 일치한다.
- [ ] `monitor.sh` owner/group/mode가 `agent-dev:agent-core 750`이다.
- [ ] 정상 monitor 실행 종료 코드가 0이다.
- [ ] Agent 중지 시 monitor가 exit 1을 반환한다.
- [ ] monitor.log가 원본 포맷으로 누적된다.
- [ ] CPU/MEM/DISK 경고 기준이 20/10/80을 사용한다.
- [ ] agent-admin crontab이 매분 실행한다.
- [ ] 1~2분 후 monitor.log가 실제로 증가한다.
- [ ] logrotate가 10MB/10개 정책으로 설치되어 있다.
- [ ] 필수 Evidence 8개 축을 실제 출력으로 확보했다.

---

# 23. 이 단계의 학습 완료 기준

단순히 명령을 복사해서 성공하는 것이 끝이 아니다.

다음을 자기 말로 설명할 수 있어야 한다.

1. 왜 사용자·그룹을 SSH보다 먼저 정리하면 안전한가?
2. 왜 `agent-test`는 upload_files에는 접근하고 api_keys에는 접근하면 안 되는가?
3. 왜 SSH 변경 전에 백업과 `sshd -t`가 필요한가?
4. 왜 방화벽에서 20022와 15034만 허용하는가?
5. 왜 Agent는 Root가 아니라 일반 사용자로 실행하는가?
6. 왜 환경변수를 `/etc/agent-app/agent.env`처럼 명시적으로 관리하면 cron에서 유리한가?
7. 왜 monitor는 프로세스와 포트를 둘 다 확인하는가?
8. 왜 프로세스/포트 실패는 exit 1이지만 방화벽/리소스 임계값은 WARNING인가?
9. 왜 `monitor.log`는 `>`가 아니라 `>>`로 누적하는가?
10. 왜 cron 자동 실행까지 확인해야 수동 실행 성공보다 한 단계 더 검증된 것인가?

---

# 24. 다음 단계

B1-1 Level 2 실행 순서를 익힌 뒤에는 다음 두 작업으로 넘어간다.

```text
A. 실제 B1-1 미션 저장소 01~15 문서를 따라 런타임 수행
B. Level 3~5의 구조·원리·트러블슈팅·평가 설명을 통합 학습
```

특히 다음 학습에서는 `왜 이렇게 설정하는가?`를 다룬다.

```text
Linux permission model
ACL과 setgid의 관계
SSH service / socket / port binding
Health Check와 Warning 정책
cron의 제한된 실행환경
로그 보존과 운영 추적성
Evidence 기반 평가
```

> 기억 문장: **바꾸기 전에 확인하고, 바꾼 즉시 검증하고, 실패하면 복구한 뒤 같은 검증을 다시 한다.**
