# B1-1 Level 2 — Execution

**역할:** B1-1 구현 필수 용어를 실제 명령·파일·설정 순서로 연결  
**목표:** `사전 확인 → 안전한 변경 → 즉시 검증 → 오류 시 복구 → Evidence` 순서를 지킨다.  
**Gate:** V4 — 실제 위치와 적용

> 이 문서는 원본 Mission 요구사항과 현재 구현 저장소의 재현용 구현 방식을 구분한다. `20022`, `15034`, 사용자·그룹, 원본 `AGENT_*` 5개, `monitor.sh`, 임계값, cron 매분, `10MB / 10개`는 미션 핵심 요구다. `/etc/agent-app/agent.env`, `scripts/preflight.sh`, `AGENT_PROCESS_PATTERN` 같은 항목은 현재 구현 저장소가 재현성과 호환성을 위해 선택한 구현 방식이다.

현재 구현 저장소:

- <https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor>

---

## Level 2 구현 용어 지도

기존 B1-1 1차 Vocabulary의 Level 2 용어를 이 파일에 보존한다.

### 계정·권한

- 일반 사용자 (Regular User / Non-root User)
- 서비스 계정 (Service Account)
- 사용자 추가 (User Creation)
- 그룹 추가 (Group Creation)
- 그룹 멤버십 (Group Membership)
- 소유권 변경 (Change Ownership)
- 권한 변경 (Change Mode)
- chmod (Change Mode)
- chown (Change Owner)
- chgrp (Change Group)
- setfacl (Set File Access Control List)
- getfacl (Get File Access Control List)
- id 명령어 (id Command)
- ls -l 명령어 (Long Listing, ls -l)
- 숫자 권한 표기 (Numeric Permission Mode)
- 750 권한 (Permission Mode 750)
- rwxr-x--- 권한 (Symbolic Permission rwxr-x---)

### SSH·네트워크·방화벽

- SSH 설정 파일 (SSH Configuration File)
- sshd_config (SSH Daemon Configuration File)
- 포트 지시자 (Port Directive)
- PermitRootLogin 지시자 (PermitRootLogin Directive)
- 포트 20022 (TCP Port 20022)
- 포트 15034 (TCP Port 15034)
- ss 명령어 (Socket Statistics, ss)
- ss -tulnp (Socket Listening Inspection, ss -tulnp)
- UFW (Uncomplicated Firewall)
- ufw status (UFW Status Command)
- firewalld (Dynamic Firewall Manager)
- firewall-cmd (Firewall Command)
- firewall-cmd --list-all (Firewall Rule Listing)
- 바인드 주소 (Bind Address)
- 와일드카드 주소 (Wildcard Address, 0.0.0.0)
- 소켓 (Socket)

### 실행 환경·애플리케이션

- AGENT_HOME (Agent Home Environment Variable)
- AGENT_PORT (Agent Port Environment Variable)
- AGENT_UPLOAD_DIR (Agent Upload Directory Environment Variable)
- AGENT_KEY_PATH (Agent Key Path Environment Variable)
- AGENT_LOG_DIR (Agent Log Directory Environment Variable)
- API 키 (Application Programming Interface Key, API Key)
- 비밀 키 파일 (Secret Key File)
- t_secret.key (Agent Secret Key File)
- 부트 시퀀스 (Boot Sequence)
- 시작 검증 (Startup Validation)
- 쓰기 가능 상태 (Writable State)
- Agent READY (Application Ready State)
- Ctrl+C (Interrupt Key Sequence)

### Bash·monitor.sh

- monitor.sh (Monitoring Shell Script)
- 스크립트 실행 권한 (Script Execute Permission)
- 셔뱅 (Shebang)
- 셸 변수 (Shell Variable)
- 조건문 (Conditional Statement)
- 비교 연산자 (Comparison Operator)
- 명령 치환 (Command Substitution)
- 파이프 (Pipe)
- 표준 출력 (Standard Output, stdout)
- 표준 오류 (Standard Error, stderr)
- 출력 리다이렉션 (Output Redirection)
- 추가 리다이렉션 (Append Redirection)
- 종료 상태 (Exit Status)
- 종료 코드 (Exit Code)
- exit 1 (Failure Exit Code)
- 프로세스 상태 확인 (Process Status Check)
- 포트 상태 확인 (Port Status Check)
- 방화벽 상태 확인 (Firewall Status Check)
- CPU 사용률 수집 (CPU Usage Collection)
- 메모리 사용률 수집 (Memory Usage Collection)
- 디스크 사용률 수집 (Disk Usage Collection)

### 로그·스케줄링

- /var/log (System Log Directory)
- /var/log/agent-app (Agent Application Log Directory)
- monitor.log (Monitoring Log File)
- 타임스탬프 (Timestamp)
- 로그 라인 (Log Line)
- 로그 추가 기록 (Log Append)
- 로그 파일 크기 (Log File Size)
- 10MB 로그 제한 (10 MB Log Size Limit)
- 로그 파일 보관 개수 (Log File Retention Count)
- logrotate (Log Rotation Utility)
- 크론 표현식 (Cron Expression)
- 크론 스케줄 (Cron Schedule)
- 매분 실행 (Every-Minute Schedule)
- crontab 등록 (Crontab Registration)
- crontab 편집 (Crontab Editing)
- tail 명령어 (Tail Command)

원본 Vocabulary의 선택 Bonus 용어는 [B1-1 Advanced](./b1-1-90-advanced.md)에 별도 보존한다.

---

## 1. 실행 순서 — 건너뛰지 않는다

```text
0. Preflight
   ↓
1. User / Group
   ↓
2. Directory / Permission / ACL
   ↓
3. SSH 변경 전 안전 확인
   ↓
4. SSH 20022 / Root 차단
   ↓
5. Firewall 최종 정책
   ↓
6. Environment / Key / Agent
   ↓
7. monitor.sh 배치·수동 검증
   ↓
8. cron 자동 실행
   ↓
9. logrotate
   ↓
10. 최종 Evidence
```

### STOP 규칙

다음 중 하나라도 해당하면 다음 단계로 넘어가지 않는다.

- Linux/systemd/sshd 등 필수 실행 환경이 준비되지 않음
- SSH 설정 문법 검사 실패
- 권한 시험에서 `agent-test`가 핵심 디렉터리에 접근함
- Agent Boot Sequence 5단계가 모두 `[OK]`가 아님
- `Agent READY`가 없음
- TCP `15034`가 LISTEN이 아님
- `monitor.sh` 정상 시나리오가 종료 코드 `0`이 아님
- cron 등록 뒤 실제 로그 증가가 확인되지 않음

---

## 2. Step 0 — 저장소와 Preflight

```bash
git clone https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor.git
cd codyssey-basic-b1-1-system-monitor
```

이미 clone되어 있다면:

```bash
git rev-parse --show-toplevel
pwd
```

핵심 파일:

```text
scripts/preflight.sh
scripts/monitor.sh
scripts/verify.sh
config/agent.env.example
config/crontab.example
config/agent-monitor.logrotate
agent-app.zip
```

읽기 전용 사전점검:

```bash
bash scripts/preflight.sh
```

현재 저장소의 `preflight.sh`는 SSH·UFW·사용자·그룹·ACL·cron을 변경하지 않고 현재 상태만 조회한다.

필요 도구가 실제로 빠진 Ubuntu 환경에서의 **구현 예시**:

```bash
sudo apt update
sudo apt install -y openssh-server ufw acl cron logrotate unzip procps iproute2 python3
```

설치 후 다시:

```bash
bash scripts/preflight.sh
```

---

## 3. Step 1 — 사용자와 그룹

원본 사용자:

```text
agent-admin
agent-dev
agent-test
```

원본 그룹:

```text
agent-common = admin + dev + test
agent-core   = admin + dev
```

없는 그룹만 생성:

```bash
getent group agent-common >/dev/null || sudo groupadd agent-common
getent group agent-core   >/dev/null || sudo groupadd agent-core
```

없는 사용자만 생성:

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

그룹 멤버십:

```bash
sudo usermod -aG agent-common agent-admin
sudo usermod -aG agent-common agent-dev
sudo usermod -aG agent-common agent-test

sudo usermod -aG agent-core agent-admin
sudo usermod -aG agent-core agent-dev
```

검증:

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

잘못 `agent-test`를 core에 넣었다면:

```bash
sudo gpasswd -d agent-test agent-core
id agent-test
```

---

## 4. Step 2 — 디렉터리·소유권·ACL

현재 가이드의 재현용 표준 경로:

```bash
export AGENT_HOME=/home/agent-admin/agent-app
```

디렉터리 생성:

```bash
sudo mkdir -p \
  "$AGENT_HOME/upload_files" \
  "$AGENT_HOME/api_keys" \
  "$AGENT_HOME/bin" \
  /var/log/agent-app
```

### 부모 홈 통과 권한

```bash
sudo setfacl -m g:agent-common:--x /home/agent-admin
```

### AGENT_HOME

```bash
sudo chown agent-admin:agent-common "$AGENT_HOME"
sudo chmod 2750 "$AGENT_HOME"
```

### upload_files — common R/W

```bash
sudo chown agent-admin:agent-common "$AGENT_HOME/upload_files"
sudo chmod 2770 "$AGENT_HOME/upload_files"
sudo setfacl -m d:u::rwx,d:g::rwx,d:o::--- "$AGENT_HOME/upload_files"
```

### api_keys — core R/W

```bash
sudo chown agent-admin:agent-core "$AGENT_HOME/api_keys"
sudo chmod 2770 "$AGENT_HOME/api_keys"
sudo setfacl -m d:u::rwx,d:g::rwx,d:o::--- "$AGENT_HOME/api_keys"
```

### 운영 로그 — core R/W

```bash
sudo chown agent-admin:agent-core /var/log/agent-app
sudo chmod 2770 /var/log/agent-app
sudo setfacl -m d:u::rwx,d:g::rwx,d:o::--- /var/log/agent-app
```

### monitor 실행 디렉터리

```bash
sudo chown agent-dev:agent-core "$AGENT_HOME/bin"
sudo chmod 2750 "$AGENT_HOME/bin"
```

권한 확인:

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

실제 허용/차단 시험:

```bash
sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/upload_files/.b1-test && rm /home/agent-admin/agent-app/upload_files/.b1-test'
```

아래 두 명령은 **Permission denied가 정상 목표**다.

```bash
sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/api_keys/.should-fail'

sudo -u agent-test bash -c \
  'touch /var/log/agent-app/.should-fail'
```

---

## 5. Step 3 — SSH 변경 전 안전 확인

원본 목표:

```text
Port 20022
PermitRootLogin no
```

현재 연결 확인:

```bash
printf 'SSH_CONNECTION=%s\nSSH_CLIENT=%s\n' "$SSH_CONNECTION" "$SSH_CLIENT"
```

원격 세션이면 현재 세션을 닫지 말고 VM/클라우드 콘솔 등 복구 경로를 먼저 확보한다.

현재 포트:

```bash
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

UFW 상태:

```bash
sudo ufw status verbose
```

UFW가 이미 `active`라면 SSH 포트를 바꾸기 전에 먼저 새 포트를 허용한다.

```bash
sudo ufw allow 20022/tcp
```

SSH 원본 백업:

```bash
sudo cp -a /etc/ssh/sshd_config /etc/ssh/sshd_config.b1-1.backup
sudo cmp -s /etc/ssh/sshd_config /etc/ssh/sshd_config.b1-1.backup \
  && echo '[OK] backup identical' \
  || echo '[STOP] backup differs'
```

---

## 6. Step 4 — SSH 20022 / Root 차단

현재 저장소의 안전한 구현 예시는 drop-in 파일이다.

```bash
sudo tee /etc/ssh/sshd_config.d/99-b1-1.conf >/dev/null <<'EOF'
Port 20022
PermitRootLogin no
EOF
```

문법 검사:

```bash
sudo sshd -t && echo '[OK] sshd syntax'
```

**여기서 실패하면 서비스를 재시작하지 않는다.**

최종 해석값:

```bash
sudo sshd -T | grep -E '^(port|permitrootlogin) '
```

목표:

```text
port 20022
permitrootlogin no
```

서비스 방식 확인:

```bash
systemctl status ssh.service --no-pager || true
systemctl status ssh.socket --no-pager || true
```

일반 service 방식에서는 환경에 맞게 SSH 서비스를 재시작한다. Ubuntu 24.04의 socket activation을 사용하는 현재 실습 저장소에서는 `sshd-socket-generator` 동작을 별도로 확인했다. 이것은 **현재 환경 관찰값**이며 원본 미션의 공통 요구사항이 아니다.

실제 LISTEN 확인:

```bash
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

목표:

```text
20022 LISTEN = YES
22 LISTEN    = NO
```

가능한 환경에서는 새 터미널에서 실제 접속도 확인한다.

```bash
ssh -p 20022 <일반사용자>@<서버주소>
```

---

## 7. Step 5 — Firewall 최종 정책

미션 핵심은 방화벽이 활성화되어 있고 필요한 TCP 포트만 허용되는 상태다.

UFW 구현 예시:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow 20022/tcp
sudo ufw allow 15034/tcp
sudo ufw enable
sudo ufw status verbose
```

원격 시스템에서는 **새 SSH 접속 경로가 실제로 검증되기 전에 방화벽 정책을 급격히 변경하지 않는다.**

목표 확인:

```text
Status: active
Default: deny (incoming)
20022/tcp ALLOW
15034/tcp ALLOW
```

환경에 기존 필수 서비스가 있다면 무조건 삭제하지 말고 미션용 격리 환경인지 먼저 확인한다.

---

## 8. Step 6 — Environment·Key·Agent

저장소 예시 환경 파일:

```text
config/agent.env.example
```

원본 미션의 필수 환경 변수 5개:

```text
AGENT_HOME=/home/agent-admin/agent-app
AGENT_PORT=15034
AGENT_UPLOAD_DIR=/home/agent-admin/agent-app/upload_files
AGENT_KEY_PATH=/home/agent-admin/agent-app/api_keys/t_secret.key
AGENT_LOG_DIR=/var/log/agent-app
```

시스템용 환경 파일 설치 예시:

```bash
sudo install -d -o root -g agent-core -m 0750 /etc/agent-app
sudo install -o root -g agent-core -m 0640 \
  config/agent.env.example \
  /etc/agent-app/agent.env
```

확인:

```bash
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printenv | grep "^AGENT_" | sort'
```

### 제공 ZIP은 내부 구조를 추측하지 않는다

```bash
unzip -l agent-app.zip
rm -rf /tmp/b1-1-agent-extract
mkdir -p /tmp/b1-1-agent-extract
unzip -q agent-app.zip -d /tmp/b1-1-agent-extract
find /tmp/b1-1-agent-extract -maxdepth 4 -type f -print | sort
```

현재 제공 패키지에는 아키텍처별 실행 파일이 있을 수 있으므로 실제 호스트 아키텍처와 제공 파일을 확인한 뒤 실행 대상을 정한다.

```bash
uname -m
find /tmp/b1-1-agent-extract -maxdepth 2 -type f -exec file {} \;
```

### `AGENT_PROCESS_PATTERN` — 현재 구현 보완값

현재 저장소의 `scripts/monitor.sh`는 process 검색 기본값으로 `agent_app.py`를 사용할 수 있다. 실제 제공 앱 파일명이 다르면 **원본 5개 환경 변수를 바꾸는 것이 아니라**, 현재 구현용 추가 값인 `AGENT_PROCESS_PATTERN`을 실제 실행 파일명에 맞춘다.

예:

```bash
printf '%s\n' 'AGENT_PROCESS_PATTERN=agent-app-linux-x86' | \
  sudo tee -a /etc/agent-app/agent.env >/dev/null
```

실제 이름은 `unzip -l`, `find`, `file`, `pgrep -af`로 확인한 값을 사용한다. 위 파일명은 예시이므로 실제 제공 파일명과 다르면 그대로 쓰지 않는다.

확인:

```bash
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printf "AGENT_PROCESS_PATTERN=%s\n" "${AGENT_PROCESS_PATTERN:-agent_app.py}"'
```

### test key

미션에서 제공한 실제 테스트 키 값은 Git에 기록하지 않는다.

```bash
read -rsp 'Enter B1-1 mission test key: ' B1_KEY
printf '\n'
printf '%s\n' "$B1_KEY" | sudo tee "$AGENT_HOME/api_keys/t_secret.key" >/dev/null
unset B1_KEY
sudo chown agent-admin:agent-core "$AGENT_HOME/api_keys/t_secret.key"
sudo chmod 0660 "$AGENT_HOME/api_keys/t_secret.key"
```

값을 출력하지 않고 존재·권한만 확인한다.

```bash
sudo stat -c 'owner=%U group=%G mode=%a path=%n' "$AGENT_HOME/api_keys/t_secret.key"
sudo wc -l "$AGENT_HOME/api_keys/t_secret.key"
```

### Agent 성공 기준

실제 제공 앱을 **Root가 아닌 일반 사용자**로 실행하고 다음을 확인한다.

```text
Boot Sequence 1~5 = 모두 [OK]
Agent READY
Process owner != root
0.0.0.0:15034 = LISTEN
```

실제 제공 파일명을 기준으로 process를 확인한다.

```bash
pgrep -af '<실제 제공 앱 파일명>'
sudo ss -lntp | grep ':15034\b' || true
```

---

## 9. Step 7 — monitor.sh 배치·수동 검증

저장소 구현:

```text
scripts/monitor.sh
```

정적 문법 검사:

```bash
bash -n scripts/monitor.sh
```

최종 배치:

```bash
sudo install -o agent-dev -g agent-core -m 0750 \
  scripts/monitor.sh \
  /home/agent-admin/agent-app/bin/monitor.sh
```

권한 확인:

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

Agent가 정상일 때:

```bash
sudo -u agent-admin /home/agent-admin/agent-app/bin/monitor.sh
echo $?
```

목표 종료 코드 `0`.

Agent process가 없거나 `15034`가 LISTEN하지 않을 때는 원본 요구에 따라 Health 실패로 `exit 1`이 나와야 한다.

현재 저장소 구현의 resource warning 기준:

```text
CPU > 20%
MEM > 10%
DISK_USED > 80%
```

로그:

```bash
tail -n 5 /var/log/agent-app/monitor.log
```

형식 핵심:

```text
[YYYY-MM-DD HH:MM:SS] PID:... CPU:...% MEM:...% DISK_USED:...%
```

---

## 10. Step 8 — cron 매분 자동 실행

저장소 예시:

```text
config/crontab.example
```

핵심 등록:

```text
* * * * * /home/agent-admin/agent-app/bin/monitor.sh >/dev/null 2>&1
```

설치:

```bash
sudo -u agent-admin crontab < config/crontab.example
sudo -u agent-admin crontab -l
systemctl status cron --no-pager
```

등록만 보고 PASS하지 않는다.

```bash
before=$(wc -l < /var/log/agent-app/monitor.log)
sleep 70
after=$(wc -l < /var/log/agent-app/monitor.log)
printf 'before=%s after=%s\n' "$before" "$after"
```

Agent가 정상 실행 중이고 cron이 동작한다면 로그가 증가해야 한다.

---

## 11. Step 9 — logrotate 10MB / 10개

저장소 예시:

```text
config/agent-monitor.logrotate
```

현재 구현 핵심:

```text
/var/log/agent-app/monitor.log {
    size 10M
    rotate 10
    compress
    missingok
    notifempty
    su agent-admin agent-core
    create 0640 agent-admin agent-core
}
```

설치 예시:

```bash
sudo install -o root -g root -m 0644 \
  config/agent-monitor.logrotate \
  /etc/logrotate.d/agent-monitor
```

설정 확인:

```bash
sudo logrotate -d /etc/logrotate.d/agent-monitor
```

테스트 환경에서 강제 회전이 필요한 경우 실제 로그 보존 영향과 실습 목적을 확인한 뒤 수행한다.

---

## 12. Step 10 — 최종 Evidence

최소 확인 묶음:

```bash
printf '\n[users]\n'
id agent-admin
id agent-dev
id agent-test

printf '\n[ssh]\n'
sudo sshd -T | grep -E '^(port|permitrootlogin) '
sudo ss -lntp | grep -E ':(22|20022|15034)\b' || true

printf '\n[firewall]\n'
sudo ufw status verbose

printf '\n[monitor]\n'
stat -c '%U %G %a %n' /home/agent-admin/agent-app/bin/monitor.sh
sudo -u agent-admin /home/agent-admin/agent-app/bin/monitor.sh
printf 'exit=%s\n' "$?"

tail -n 5 /var/log/agent-app/monitor.log

printf '\n[cron]\n'
sudo -u agent-admin crontab -l

printf '\n[logrotate]\n'
sudo cat /etc/logrotate.d/agent-monitor
```

비밀정보는 Evidence에 포함하지 않는다.

---

## 13. V4 Gate

- [ ] Level 2 용어를 실제 명령·설정에서 찾을 수 있다.
- [ ] 사용자와 그룹을 실제 명령에서 찾을 수 있다.
- [ ] 권한과 ACL을 `ls -l`, `getfacl`, 실제 허용/차단 시험으로 확인할 수 있다.
- [ ] SSH 설정값과 실제 LISTEN을 따로 검증할 수 있다.
- [ ] UFW의 활성 상태와 허용 포트를 확인할 수 있다.
- [ ] 원본 `AGENT_*` 5개와 현재 구현의 선택값 `AGENT_PROCESS_PATTERN`을 구분할 수 있다.
- [ ] Agent process와 `15034 LISTEN`을 확인할 수 있다.
- [ ] `monitor.sh`의 경로·소유자·그룹·권한을 찾을 수 있다.
- [ ] 정상/Health 실패 종료 코드를 확인할 수 있다.
- [ ] cron 등록뿐 아니라 실제 로그 증가를 확인할 수 있다.
- [ ] logrotate의 `size 10M`, `rotate 10`을 확인할 수 있다.

---

## 14. 기억 문장

> **바꾸기 전에 확인하고, 한 층씩 변경하고, 곧바로 검증하고, 실패하면 그 층만 복구한 뒤 Evidence를 남긴다.**

---

[← Level 1](./b1-1-20-level-1-core.md) · [B1-1 Index](./b1-1-00-index.md) · [다음: Level 3 Principles →](./b1-1-40-level-3-principles.md)
