# B1-1 Level 4 — Verification & Troubleshooting

**역할:** 실행 결과를 검증하고 장애를 계층별로 분리해 복구하는 단계  
**핵심 질문:** 무엇이 실패했고, 어디를 먼저 확인하며, 어떻게 정상 상태를 증명할 것인가?  
**목표:** 오류 메시지를 없애는 것이 아니라 `증상 → 조회 → 원인 분리 → 최소 수정 → 재검증 → Evidence` 순서를 습관화한다.

---

## 1. Level 4 용어

- 검증 (Verification)
- 증거 자료 (Evidence)
- 설정 확인 (Configuration Verification)
- 포트 리슨 확인 (Port Listening Verification)
- 프로세스 실행 확인 (Process Running Verification)
- 권한 확인 (Permission Verification)
- 그룹 멤버십 확인 (Group Membership Verification)
- ACL 확인 (ACL Verification)
- 환경 변수 확인 (Environment Variable Verification)
- 로그 누적 확인 (Log Accumulation Verification)
- 크론 자동 실행 확인 (Cron Execution Verification)
- 쓰기 권한 오류 (Write Permission Error)
- 권한 거부 (Permission Denied)
- 파일 또는 디렉터리 없음 (No Such File or Directory)
- 프로세스 미실행 (Process Not Running)
- 포트 미리슨 (Port Not Listening)
- 포트 충돌 (Port Conflict)
- 주소 사용 중 (Address Already in Use)
- 연결 거부 (Connection Refused)
- 방화벽 차단 (Firewall Blocking)
- 루트 로그인 허용 오류 (Root Login Misconfiguration)
- SSH 설정 오류 (SSH Configuration Error)
- 환경 변수 누락 (Missing Environment Variable)
- 키 파일 누락 (Missing Key File)
- 키 값 불일치 (Key Mismatch)
- 로그 디렉터리 쓰기 불가 (Log Directory Not Writable)
- 임계값 초과 (Threshold Exceeded)
- CPU 경고 (CPU Warning)
- 메모리 경고 (Memory Warning)
- 디스크 경고 (Disk Warning)
- 크론 미실행 (Cron Job Not Running)
- 로그 미기록 (Log Not Appended)
- 로그 과대 증가 (Log File Growth)
- 최근 로그 확인 (Recent Log Inspection)
- 전후 비교 (Before-and-After Verification)

---

## 2. 공통 Troubleshooting Algorithm

```text
1. SYMPTOM
   오류 메시지와 발생 시점을 그대로 보존

2. OBSERVE
   상태를 바꾸기 전에 조회 명령 실행

3. LAYER
   권한 / 설정 / 프로세스 / 포트 / 방화벽 / 자동화 중 어느 층인지 분리

4. HYPOTHESIS
   가능한 원인을 1~3개로 좁힘

5. SMALLEST FIX
   가장 작은 수정만 적용

6. REVERIFY
   처음 실패했던 검증 명령을 다시 실행

7. RECOVERY
   예상하지 못한 영향이 있으면 정상 기준으로 복구

8. EVIDENCE
   오류 전후 결과와 재발 방지 내용을 기록
```

### 금지 습관

```text
오류 → chmod -R 777
오류 → sudo로 전부 실행
오류 → 서비스 restart 반복
오류 → 설정 파일 여러 개를 동시에 수정
오류 → 로그와 실패 흔적부터 삭제
```

---

## 3. Layer 1 — 사용자·그룹·권한

### 증상: `Permission denied`

먼저 대상 파일만 보지 않고 **부모 경로 전체**를 확인한다.

```bash
namei -l /home/agent-admin/agent-app/upload_files
getfacl /home/agent-admin
getfacl /home/agent-admin/agent-app
getfacl /home/agent-admin/agent-app/upload_files
```

Linux 디렉터리는 하위 경로에 접근하려면 모든 부모 디렉터리에 필요한 `x` 통과 권한이 있어야 한다.

### 그룹 멤버십

```bash
id agent-admin
id agent-dev
id agent-test
```

목표:

```text
admin → common + core
dev   → common + core
test  → common only
```

### ACL mask

`getfacl`의 `mask::`도 확인한다. ACL 항목에 권한이 있어 보여도 mask가 더 좁으면 실제 유효 권한이 줄어들 수 있다.

### 재검증

```bash
sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/upload_files/.probe && rm /home/agent-admin/agent-app/upload_files/.probe'

sudo -u agent-test bash -c \
  'touch /home/agent-admin/agent-app/api_keys/.should-fail'
```

첫 번째는 성공, 두 번째는 `Permission denied`가 정상 목표다.

---

## 4. Layer 2 — SSH Configuration

### 증상: `sshd -t` 실패

서비스를 재시작하지 않는다.

```bash
sudo sshd -t
sudo cat /etc/ssh/sshd_config.d/99-b1-1.conf
```

설정 오타·중복·충돌을 먼저 확인한다.

### 현재 저장소에서 실제로 관찰된 `/run/sshd` 사례

Ubuntu 24.04 실습 중:

```text
Missing privilege separation directory: /run/sshd
```

가 확인된 적이 있다. 당시 `ssh.socket`은 active, `ssh.service`는 inactive였고 서비스 unit에 `RuntimeDirectory=sshd`가 있었다.

따라서 임의로 `/run/sshd`를 영구 생성하기보다 **누가 해당 런타임 디렉터리를 관리하는지 service unit을 먼저 확인**했다.

```bash
systemctl status ssh.service --no-pager
systemctl cat ssh.service
```

현재 실습에서는 systemd가 관리하도록 서비스를 시작한 뒤 재검증했다.

> 이 사례는 현재 Ubuntu 24.04 실습의 관찰값이며 모든 Linux 환경에 그대로 일반화하지 않는다.

---

## 5. Layer 3 — SSH LISTEN / socket activation

### 증상: 설정은 `Port 20022`인데 20022가 LISTEN하지 않음

```bash
sudo sshd -t
sudo sshd -T | grep -E '^(port|permitrootlogin) '
systemctl status ssh.service --no-pager || true
systemctl status ssh.socket --no-pager || true
systemctl cat ssh.socket || true
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

다음 질문을 순서대로 본다.

1. 설정 문법이 유효한가?
2. 최종 해석값이 `20022`인가?
3. service/socket 중 누가 실제 LISTEN을 담당하는가?
4. systemd가 최신 설정을 읽었는가?
5. 실제 socket이 20022에 있는가?

### `changed on disk` 메시지

systemd unit/drop-in 변경 후 manager가 예전 정의를 유지하고 있다면:

```bash
sudo systemctl daemon-reload
```

후 실제 effective config를 다시 확인한다.

---

## 6. Layer 4 — Firewall

### 증상: 20022 LISTEN인데 외부 SSH 접속 실패

먼저 서버 내부와 네트워크 정책을 분리한다.

```bash
sudo ss -lntp | grep ':20022\b' || true
sudo ufw status verbose
```

가능한 원인:

```text
20022가 실제 LISTEN하지 않음
UFW가 20022를 차단
클라우드 Security Group/NAT 등 외부 네트워크 정책 차단
잘못된 IP/hostname 사용
서버까지 경로 자체가 없음
```

B1-1의 로컬 UFW 설정만 보고 외부 네트워크 전체가 정상이라고 단정하지 않는다.

---

## 7. Layer 5 — Agent Startup

### 증상: `Agent READY`가 나오지 않음

```text
1. 실행 사용자
2. 환경 변수
3. key 파일 존재·권한
4. upload/log 경로 권한
5. Boot Sequence 최초 실패 단계
6. process
7. 15034 LISTEN
```

확인 예시:

```bash
id agent-admin
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printenv | grep "^AGENT_" | sort'

sudo stat /home/agent-admin/agent-app/api_keys/t_secret.key
pgrep -af '<실제 제공 앱 파일명>'
sudo ss -lntp | grep ':15034\b' || true
```

키 값 자체는 출력하지 않는다.

### 제공 파일명 불일치

현재 `monitor.sh` 구현 기본값은 `agent_app.py` 패턴을 사용할 수 있지만, 실제 제공 ZIP의 실행 파일명이 다르면 `AGENT_PROCESS_PATTERN`을 실제 파일명에 맞춰야 한다.

프로세스 검색 패턴을 단순히 `python`처럼 지나치게 넓게 만들지 않는다.

---

## 8. Layer 6 — Process는 있는데 15034가 없음

평가에서도 중요한 장애 시나리오다.

가능한 원인:

```text
앱 초기화 중 bind 전에 실패
AGENT_PORT가 잘못됨
15034를 다른 process가 이미 사용
앱이 다른 주소/포트에 bind
key/권한/환경 변수 오류
```

확인:

```bash
pgrep -af '<실제 제공 앱 파일명>'
sudo ss -lntp | grep ':15034\b' || true
sudo ss -lntp
```

핵심:

> Process 존재는 서비스 준비 완료의 증거가 아니다.

---

## 9. Layer 7 — `Address already in use`

특정 port bind 시:

```text
Address already in use
```

가 나오면 먼저 해당 포트 점유자를 확인한다.

```bash
sudo ss -lntp | grep ':15034\b' || true
```

무작정 process를 kill하지 말고:

1. 어떤 process인지
2. 현재 미션 Agent인지
3. 이전 실행이 남은 것인지
4. 다른 필수 서비스인지

를 확인한 뒤 조치한다.

---

## 10. Layer 8 — monitor.sh

### Process를 못 찾음

```bash
pgrep -af '<실제 앱 파일명>'
```

실제 파일명과 `AGENT_PROCESS_PATTERN`이 일치하는지 본다.

### `15034` Health 실패

```bash
ss -lntH | grep ':15034\b' || true
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printf "%s\n" "$AGENT_PORT"'
```

문제를 둘로 분리한다.

```text
Agent가 실제 15034에 bind하지 않음
monitor가 잘못된 AGENT_PORT를 읽고 있음
```

### `monitor.log: Permission denied`

```bash
id agent-admin
ls -ld /var/log/agent-app
getfacl /var/log/agent-app
ls -l /var/log/agent-app/monitor.log 2>/dev/null || true
```

`chmod -R 777`로 덮지 않는다.

---

## 11. Layer 9 — 수동 성공, cron 실패

가능한 원인:

```text
PATH 차이
로그인 셸에서만 export된 환경 변수
실행 계정 불일치
cron service 미실행
monitor.sh 실행 권한 문제
```

확인:

```bash
sudo -u agent-admin crontab -l
systemctl status cron --no-pager
```

최소 환경 수동 시험:

```bash
sudo -u agent-admin env -i \
  HOME=/home/agent-admin \
  USER=agent-admin \
  LOGNAME=agent-admin \
  SHELL=/bin/bash \
  PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
  /home/agent-admin/agent-app/bin/monitor.sh
```

수동 실행이 성공해도 cron은 **시간이 지난 뒤 로그가 실제 증가했는지** 확인해야 한다.

---

## 12. Layer 10 — logrotate

### `insecure permissions`

로그 디렉터리가 group writable이면 logrotate 설정의 `su` 대상과 실제 권한이 맞는지 본다.

현재 구현 예시:

```text
su agent-admin agent-core
create 0640 agent-admin agent-core
```

### 회전 후 로그 쓰기 실패

```bash
ls -l /var/log/agent-app/monitor.log
getfacl /var/log/agent-app
```

새 `monitor.log`의 소유자·그룹·mode가 `agent-admin` cron의 쓰기 흐름과 맞는지 확인한다.

---

## 13. Resource Warning은 장애와 구분한다

현재 미션 기준:

```text
CPU > 20% → WARNING
MEM > 10% → WARNING
DISK > 80% → WARNING
```

Warning이 나왔다고 `monitor.sh` 자체가 실패한 것은 아니다.

반대로 자원 수치가 낮다고 Agent가 정상이라는 뜻도 아니다.

```text
Health = process + service port
Resource = 운영 위험 신호
```

두 축을 분리한다.

---

## 14. 로그 급증 대응

### 단기

```text
현재 disk 사용률 확인
증가 중인 로그 확인
로그 폭증 원인 확인
logrotate 상태 확인
서비스 장애 방지를 위한 안전한 공간 확보
```

### 중기

```text
로그 폭증 원인 수정
회전 크기·보관 정책 재검토
알림·관측 보강
archive/retention 정책 적용
```

원인을 확인하기 전에 운영 로그 전체를 삭제하는 것을 첫 조치로 사용하지 않는다.

---

## 15. Evidence Template

오류 하나당 다음을 기록한다.

```text
Symptom:
Time:
Environment:
Execution user:
Last successful state:
First observation command:
Layer:
Hypothesis:
Verification result:
Root cause:
Smallest fix:
Recovery:
Reverification:
Evidence path:
Prevention:
```

핵심은 **조치 기록보다 재검증 결과**다.

---

## 16. Level 4 실전 질문

1. `Permission denied`가 나왔을 때 왜 대상 파일만 보면 안 되는가?
2. `Port 20022`가 설정돼 있는데 `ss`에 안 보이면 어떤 순서로 확인하는가?
3. process는 있는데 15034가 없으면 가능한 원인 세 가지는?
4. 수동 `monitor.sh`는 되는데 cron에서 실패하면 무엇을 먼저 보는가?
5. logrotate 후 `monitor.log` 쓰기가 실패하면 어떤 권한을 보는가?
6. CPU Warning과 Agent Health failure를 왜 분리하는가?
7. 오류 수정 후 어떤 명령을 재실행해야 하는가?

---

## 17. Level 4 완료 기준

- [ ] 오류 메시지를 보존하고 상태 조회부터 할 수 있다.
- [ ] 권한·설정·process·port·firewall·cron 중 실패 층을 구분할 수 있다.
- [ ] 가장 작은 수정만 적용해야 하는 이유를 설명할 수 있다.
- [ ] process와 port 문제를 따로 진단할 수 있다.
- [ ] 수동 성공과 cron 성공이 다른 검증임을 안다.
- [ ] Before/After Evidence를 남길 수 있다.
- [ ] 수정 후 최초 실패 검증을 다시 실행할 수 있다.

---

## 18. 기억 문장

> **오류를 바로 없애지 말고, 현재 상태를 보존하고 실패 층을 분리한 뒤 가장 작은 수정만 적용하고 같은 검증으로 정상 복귀를 증명한다.**

---

[← Level 3](./b1-1-40-level-3-principles.md) · [B1-1 Index](./b1-1-00-index.md) · [다음: Level 5 Evaluation →](./b1-1-60-level-5-evaluation.md)
