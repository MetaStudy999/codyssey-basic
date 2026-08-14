# B1-1 Top Core 입문자 학습 가이드

**미션:** 컴퓨터가 알아서 자기 상태를 점검하게 만들기  
**분야:** Linux와 OS  
**대상:** B1-1 Top Core 28개 용어  
**학습 목표:** 용어 암기가 아니라 `이해 → 적용 → 진단 → 설명`까지 연결  
**학습 순서:** 한 줄 설명 → 생활 비유 → 관계 → 초미니 실습 → 실제 미션 적용 → 고의 오류 → 해결 → 평가 질문 → V1~V5

> **Source of Truth:** B1-1 원본 Mission PDF와 [B1-1 미션 용어 지도](./b1-1.md)를 기준으로 한다. 아래의 포트 번호, 계정/그룹, 디렉터리, 환경 변수, 임계값, 로그 경로, cron 주기 등은 원본 미션 요구사항을 그대로 따른다. 생활 비유와 학습용 설명은 원본을 이해하기 위한 보조 해설이며 새로운 미션 요구사항이 아니다.

---

## 1. 먼저 전체 그림부터 본다

B1-1은 명령어 몇 개를 외우는 미션이 아니다. 서버를 다음 순서로 운영하는 흐름을 익히는 미션이다.

```text
Linux
  ↓
사용자 / 그룹 / 권한 / ACL / 최소 권한
  ↓
SSH / sshd / TCP / Port / Firewall
  ↓
환경 변수 / Bash / Shell Script
  ↓
Process / PID / LISTEN
  ↓
System Monitoring / Health Check
  ↓
CPU / Memory / Disk
  ↓
Log
  ↓
cron / crontab
  ↓
Log Rotation
  ↓
Exit Status
```

### 원본 미션의 실제 연결

```text
SSH : TCP 20022
APP : TCP 15034

agent-admin / agent-dev / agent-test
        ↓
agent-common / agent-core
        ↓
upload_files / api_keys / /var/log/agent-app
        ↓
AGENT_HOME / AGENT_PORT / AGENT_UPLOAD_DIR / AGENT_KEY_PATH / AGENT_LOG_DIR
        ↓
제공 앱 실행 → Agent READY → 0.0.0.0:15034 LISTEN
        ↓
monitor.sh
   ├─ 프로세스 확인 → 실패 시 exit 1
   ├─ 15034 LISTEN 확인 → 실패 시 exit 1
   ├─ 방화벽 확인 → 비활성 시 WARNING, 계속 실행
   ├─ CPU/MEM/DISK 수집
   └─ monitor.log 기록
        ↓
agent-admin crontab → 매분 실행
        ↓
로그 10MB / 10개 유지
```

---

# 2. Top Core 28개 — 한 줄 설명 + 생활 비유 + 미션 위치

## A. Linux와 실행 주체

| 번호 | 용어 | 쉬운 한 줄 설명 | 생활 속 비유 | B1-1에서 어디에 쓰는가 |
|---:|---|---|---|---|
| 1 | 리눅스 (Linux) | 서버에서 사용자, 파일, 프로세스, 네트워크, 로그를 관리하는 운영체제 환경이다. | 건물 전체를 관리하는 관리 시스템 | Ubuntu 22.04 LTS 또는 동등 Linux 환경에서 미션 전체 수행 |
| 2 | 사용자 계정 (User Account) | 누가 시스템을 사용하는지 구분하는 신원이다. | 회사 사원증 | `agent-admin`, `agent-dev`, `agent-test` 생성 |
| 3 | 루트 계정 / 슈퍼유저 (Root Account / Superuser) | 시스템 전체를 제한 없이 변경할 수 있는 최고 권한 계정이다. | 건물의 모든 문을 여는 마스터키 | Root 원격 로그인 차단, 앱은 Root가 아닌 일반 계정으로 실행 |
| 4 | sudo (Superuser Do) | 일반 사용자가 필요한 명령 한정으로 관리자 권한을 잠시 사용하는 방식이다. | 필요한 순간에만 관리자 승인을 받아 금고를 여는 것 | 계정/권한/SSH/방화벽 등 시스템 설정 시 필요한 경우에만 사용 |
| 5 | 사용자·그룹 (User / Group) | 여러 사용자를 역할별 그룹으로 묶어 권한을 관리하는 기본 단위다. | 사원 개인과 부서 | `agent-common`, `agent-core` 구성 |

### 핵심 관계

```text
Root
 └─ 모든 권한

일반 사용자
 └─ 필요한 경우 sudo

agent-admin ─┐
agent-dev   ─┼─→ agent-common
agent-test  ─┘

agent-admin ─┐
agent-dev   ─┴─→ agent-core
```

---

## B. 권한과 최소 권한

| 번호 | 용어 | 쉬운 한 줄 설명 | 생활 속 비유 | B1-1에서 어디에 쓰는가 |
|---:|---|---|---|---|
| 6 | 파일 권한 (File Permission) | 파일이나 디렉터리를 누가 읽고, 쓰고, 실행할 수 있는지 정하는 규칙이다. | 문마다 붙어 있는 출입 허가표 | `monitor.sh` 750, 디렉터리 읽기/쓰기 권한 설정 |
| 7 | 접근 제어 목록 (Access Control List, ACL) | 기본 소유자/그룹 권한보다 더 세밀하게 사용자별·그룹별 권한을 추가하는 방식이다. | 출입문에 개별 사람 이름까지 등록하는 전자 출입통제 | `upload_files`, `api_keys`, 로그 디렉터리 접근 정책 확인에 사용 가능 |
| 8 | 최소 권한 원칙 (Principle of Least Privilege, PoLP) | 필요한 사람에게 필요한 권한만 주는 보안 원칙이다. | 직원에게 자기 업무에 필요한 방 열쇠만 주는 것 | `agent-common`과 `agent-core`, Root 실행 금지, 필요할 때만 sudo |

### 원본 요구 권한 구조

```text
upload_files
  group = agent-common
  admin / dev / test → R/W

api_keys
  group = agent-core
  admin / dev → R/W
  test → 접근 제한

/var/log/agent-app
  group = agent-core
  admin / dev → 필요한 R/W
```

**기억 문장:** `권한이 많을수록 편한 것이 아니라, 사고 범위도 커진다.`

---

## C. 원격 접속과 네트워크 보안

| 번호 | 용어 | 쉬운 한 줄 설명 | 생활 속 비유 | B1-1에서 어디에 쓰는가 |
|---:|---|---|---|---|
| 9 | 보안 셸 (Secure Shell, SSH) | 네트워크를 통해 다른 Linux 서버에 암호화하여 접속하는 프로토콜이다. | 잠금장치가 있는 원격 출입 통로 | SSH 포트를 `20022`로 설정하여 원격 접속 |
| 10 | SSH 서버 데몬 (SSH Daemon, sshd) | 서버에서 SSH 접속 요청을 기다리고 처리하는 백그라운드 서비스다. | 건물 입구에서 방문자를 받는 경비실 | `sshd_config`, `PermitRootLogin`, 포트 20022, `ss -tulnp` 확인 |
| 11 | 포트 (Port) | 한 IP에서 어떤 네트워크 프로그램으로 연결할지 구분하는 번호다. | 건물 주소가 IP라면 포트는 호수 | SSH `20022`, APP `15034` |
| 12 | 전송 제어 프로토콜 (Transmission Control Protocol, TCP) | 데이터를 순서와 전달 여부를 확인하며 연결형으로 전송하는 프로토콜이다. | 등기우편처럼 전달 과정과 순서를 관리하는 방식 | 방화벽에서 `20022/tcp`, `15034/tcp` 허용 |
| 13 | 방화벽 (Firewall) | 네트워크 연결을 규칙에 따라 허용하거나 차단하는 보안 장치다. | 건물 출입구의 보안 게이트 | 인바운드에 필요한 TCP 포트만 허용 |
| 14 | UFW / firewalld | Linux에서 방화벽 규칙을 실제로 관리하는 도구다. | 보안 게이트의 운영 콘솔 | 둘 중 하나를 선택하여 활성화하고 규칙 검증 |

### 관계

```text
외부 사용자
   ↓ TCP
Firewall
   ├─ 20022/tcp 허용 → sshd → SSH 접속
   └─ 15034/tcp 허용 → Agent App

나머지 불필요한 인바운드 포트 → 허용하지 않음
```

### 중요한 구분

- **SSH**: 접속 방식/프로토콜
- **sshd**: 서버에서 SSH 연결을 받는 프로세스/서비스
- **Port**: 연결 대상을 구분하는 번호
- **TCP**: 연결형 전송 규칙
- **Firewall**: 통과 가능 여부를 결정
- **UFW/firewalld**: 방화벽 정책을 설정하는 도구

---

## D. 프로세스와 실행 상태

| 번호 | 용어 | 쉬운 한 줄 설명 | 생활 속 비유 | B1-1에서 어디에 쓰는가 |
|---:|---|---|---|---|
| 15 | 프로세스 (Process) | 실행 중인 프로그램 한 개의 실행 단위다. | 책상에서 실제로 일하고 있는 직원 | 제공 앱이 실제 실행 중인지 `monitor.sh`에서 검사 |
| 16 | 프로세스 식별자 (Process Identifier, PID) | 실행 중인 각 프로세스를 구분하는 번호다. | 직원마다 붙는 사번 | monitor 결과에 `PID:...` 기록 |
| 17 | 리슨 상태 (Listen State, LISTEN) | 프로그램이 특정 포트에서 연결 요청을 받을 준비가 된 상태다. | 전화 상담원이 전화를 받을 준비를 하고 대기하는 상태 | 앱이 `0.0.0.0:15034`에서 LISTEN인지 확인 |

### 관계

```text
프로그램 파일
   ↓ 실행
Process
   ↓ 고유 번호
PID
   ↓ 네트워크 서비스를 열면
TCP Port 15034
   ↓
LISTEN
```

**중요:** 프로세스가 있다고 해서 반드시 포트가 정상 LISTEN 중인 것은 아니다. B1-1은 **프로세스와 포트를 둘 다 검사**한다.

---

## E. 실행 환경과 자동화 코드

| 번호 | 용어 | 쉬운 한 줄 설명 | 생활 속 비유 | B1-1에서 어디에 쓰는가 |
|---:|---|---|---|---|
| 18 | 환경 변수 (Environment Variable) | 프로그램이 실행될 때 필요한 경로·포트 같은 설정값을 외부에서 전달하는 방식이다. | 직원에게 주는 오늘의 업무 설정표 | `AGENT_HOME`, `AGENT_PORT`, `AGENT_UPLOAD_DIR`, `AGENT_KEY_PATH`, `AGENT_LOG_DIR` |
| 19 | 셸 스크립트 (Shell Script) | 여러 셸 명령을 파일에 적어 순서대로 자동 실행하는 프로그램이다. | 반복 업무를 적어 둔 작업 체크리스트 | `monitor.sh`, 보너스 `report.sh` |
| 20 | 배시 (Bash) | B1-1 자동화 스크립트를 작성하고 실행하는 셸이다. | 체크리스트를 읽고 실제 일을 수행하는 작업자 | 미션 제약상 `monitor.sh`는 Bash로만 작성 |

### 환경 변수 관계

```text
AGENT_HOME
 ├─ AGENT_UPLOAD_DIR = $AGENT_HOME/upload_files
 └─ AGENT_KEY_PATH   = $AGENT_HOME/api_keys/t_secret.key

AGENT_PORT    = 15034
AGENT_LOG_DIR = /var/log/agent-app
```

환경 변수를 고정하면 코드 안에 경로와 포트를 여기저기 반복해서 박아 넣지 않고, 실행 환경을 일관되게 맞출 수 있다.

---

## F. 관제, 자원, 로그, 스케줄링

| 번호 | 용어 | 쉬운 한 줄 설명 | 생활 속 비유 | B1-1에서 어디에 쓰는가 |
|---:|---|---|---|---|
| 21 | 시스템 관제 (System Monitoring) | 시스템이 정상인지 지속적으로 상태를 확인하고 기록하는 활동이다. | 건물 관리실의 CCTV·온도계·전력계 종합 관제 | `monitor.sh` 전체 역할 |
| 22 | 상태 점검 (Health Check) | 서비스가 살아 있고 핵심 기능이 사용 가능한지 빠르게 확인하는 검사다. | 사람의 맥박과 호흡 확인 | 프로세스와 TCP 15034 LISTEN 실패 시 `exit 1` |
| 23 | CPU·메모리·디스크 사용률 (CPU / Memory / Disk Utilization) | 서버 자원이 얼마나 사용되고 있는지를 수치로 나타낸 값이다. | 차량의 RPM·연료·적재량 계기판 | CPU >20%, MEM >10%, DISK_USED >80%이면 WARNING |
| 24 | 로그 (Log) | 시스템에서 무슨 일이 언제 일어났는지 시간 순서로 남기는 기록이다. | 건물 출입기록 또는 블랙박스 | `/var/log/agent-app/monitor.log`에 매 실행 결과 누적 |
| 25 | 크론 (cron) | Linux에서 정해진 시간에 작업을 자동 실행하는 스케줄링 기능이다. | 매일 정해진 시간에 울리는 자동 알람 | `monitor.sh` 주기 실행 |
| 26 | 크론탭 (crontab) | 사용자별 cron 실행 일정을 등록·관리하는 설정이다. | 알람 앱에 저장한 일정표 | `agent-admin` 계정에서 `monitor.sh`를 매분 등록 |
| 27 | 로그 로테이션 (Log Rotation) | 로그가 무한히 커지지 않도록 파일을 나누고 오래된 로그를 정리하는 방식이다. | 꽉 찬 기록철을 새 기록철로 교체하고 옛 기록철을 보관하는 것 | `monitor.log` 최대 10MB, 10개 파일 유지 |
| 28 | 종료 상태 (Exit Status) | 명령이나 스크립트가 성공했는지 실패했는지 숫자로 전달하는 결과값이다. | 작업 완료표의 성공/실패 도장 | 프로세스/포트 Health Check 실패 시 `exit 1` |

### Health Check와 Warning의 차이

```text
프로세스 없음        → 치명적 → exit 1
15034 LISTEN 아님    → 치명적 → exit 1
방화벽 비활성       → WARNING → 계속 실행
CPU > 20%           → WARNING → 계속 실행
MEM > 10%           → WARNING → 계속 실행
DISK_USED > 80%     → WARNING → 계속 실행
```

이 차이를 설명할 수 있어야 B1-1의 설계 의도를 이해한 것이다.

---

# 3. 초미니 실습 — 8개만 순서대로 수행

> 아래 명령은 **학습 확인용 예시**다. 실제 미션 환경의 사용자·경로·서비스 상태에 맞춰 실행한다. 시스템 설정을 변경하는 명령은 필요한 경우에만 `sudo`를 사용한다.

## 실습 1 — 현재 사용자와 그룹 확인

```bash
whoami
id
```

확인할 것:

- 현재 로그인 사용자는 누구인가?
- UID/GID는 무엇인가?
- 어떤 그룹에 포함되어 있는가?

미션 연결:

```bash
id agent-admin
id agent-dev
id agent-test
```

---

## 실습 2 — 파일 권한 숫자 750 읽기

```bash
ls -l "$AGENT_HOME/bin/monitor.sh"
```

`750 = rwxr-x---`

- Owner: `rwx`
- Group: `r-x`
- Others: `---`

미션 목표 상태:

```text
owner = agent-dev
group = agent-core
mode  = 750
```

---

## 실습 3 — SSH와 앱 포트 LISTEN 확인

```bash
ss -tulnp
```

찾을 것:

- SSH 관련 `20022`
- 앱 관련 `15034`
- LISTEN 상태

핵심 질문:

> 프로세스는 실행 중인데 15034가 LISTEN이 아니면 서비스가 정상이라고 할 수 있는가?

답: B1-1 기준으로는 아니다. 두 조건을 별도로 검증해야 한다.

---

## 실습 4 — 방화벽 규칙 확인

UFW를 사용한다면:

```bash
sudo ufw status
```

firewalld를 사용한다면:

```bash
sudo firewall-cmd --list-all
```

원본 기준 핵심 인바운드 허용:

```text
20022/tcp
15034/tcp
```

---

## 실습 5 — 환경 변수 5개 확인

```bash
printf 'AGENT_HOME=%s\n' "$AGENT_HOME"
printf 'AGENT_PORT=%s\n' "$AGENT_PORT"
printf 'AGENT_UPLOAD_DIR=%s\n' "$AGENT_UPLOAD_DIR"
printf 'AGENT_KEY_PATH=%s\n' "$AGENT_KEY_PATH"
printf 'AGENT_LOG_DIR=%s\n' "$AGENT_LOG_DIR"
```

확인 포인트:

- `AGENT_PORT=15034`
- 경로들이 서로 모순 없이 연결되는가?
- `AGENT_KEY_PATH`가 실제 키 파일을 가리키는가?

---

## 실습 6 — 프로세스와 PID 관찰

```bash
ps -ef | grep '[a]gent_app'
```

또는 실제 제공 앱 파일명에 맞춰 확인한다.

관찰할 것:

- 프로세스가 존재하는가?
- PID가 무엇인가?
- `monitor.sh`가 같은 PID를 찾아내는가?

---

## 실습 7 — 로그가 누적되는지 확인

```bash
sudo tail -n 10 /var/log/agent-app/monitor.log
```

원본 예시 형식:

```text
[YYYY-MM-DD HH:MM:SS] PID:... CPU:..% MEM:..% DISK_USED:..%
```

확인할 것:

- 시간이 증가하는가?
- 매 실행마다 새 라인이 추가되는가?
- PID와 자원 값이 기록되는가?

---

## 실습 8 — cron 자동 실행 확인

```bash
crontab -l
```

`agent-admin`의 crontab에서 `monitor.sh`가 **매분 실행**되도록 등록되어 있는지 확인한다.

검증 방법:

1. `monitor.log` 마지막 라인을 확인한다.
2. 1~2분 기다린다.
3. 다시 마지막 라인을 확인한다.
4. 새 timestamp 라인이 생기면 자동 실행 증거가 된다.

---

# 4. 실제 미션 적용 체크포인트

## 단계 1 — 보안

- [ ] SSH 포트가 `20022`인가?
- [ ] Root 원격 로그인이 차단되었는가?
- [ ] TCP `20022`, `15034`만 필요한 인바운드로 허용했는가?
- [ ] UFW 또는 firewalld가 활성화되어 있는가?

## 단계 2 — 계정·그룹·권한

- [ ] `agent-admin`, `agent-dev`, `agent-test`가 존재하는가?
- [ ] `agent-common`, `agent-core`가 존재하는가?
- [ ] 그룹 멤버십이 원본 요구와 일치하는가?
- [ ] `upload_files`와 `api_keys`의 접근 경계가 구분되는가?
- [ ] `/var/log/agent-app`에 필요한 사용자만 쓸 수 있는가?

## 단계 3 — 실행 환경

- [ ] AGENT_* 환경 변수가 모두 맞는가?
- [ ] `t_secret.key`가 올바른 경로와 값으로 존재하는가?
- [ ] 앱을 Root가 아닌 일반 계정으로 실행했는가?
- [ ] Boot Sequence 5단계가 `[OK]`인가?
- [ ] 마지막에 `Agent READY`가 출력되는가?
- [ ] `0.0.0.0:15034`가 LISTEN인가?

## 단계 4 — monitor.sh

- [ ] 위치가 `$AGENT_HOME/bin/monitor.sh`인가?
- [ ] owner=`agent-dev`, group=`agent-core`, mode=`750`인가?
- [ ] 앱 프로세스가 없으면 `exit 1` 하는가?
- [ ] 15034가 LISTEN이 아니면 `exit 1` 하는가?
- [ ] 방화벽 비활성은 WARNING만 내고 계속하는가?
- [ ] CPU/MEM/DISK를 수집하는가?
- [ ] CPU >20%, MEM >10%, DISK_USED >80%에서 WARNING이 나오는가?
- [ ] 로그를 `/var/log/agent-app/monitor.log`에 추가하는가?

## 단계 5 — 자동 실행과 로그 관리

- [ ] `agent-admin` crontab으로 매분 실행되는가?
- [ ] 1~2분 뒤 로그 라인이 실제 증가하는가?
- [ ] 로그가 10MB를 넘을 때 최대 10개 파일 유지 정책이 있는가?

---

# 5. 고의 오류 → 관찰 → 복구 훈련

> 이 절은 학습 보조 실험이다. 실제 평가 환경에서는 원본 정상 상태를 먼저 확보하고, 실험 후 반드시 복구한다. 원격 서버에서 SSH 설정을 잘못 바꾸면 접속이 끊길 수 있으므로 SSH 관련 실험은 로컬 VM/컨테이너 또는 별도 세션 확보 후 수행한다.

## 오류 1 — monitor.sh 실행 권한 제거

고의 오류 예시:

```bash
chmod 640 "$AGENT_HOME/bin/monitor.sh"
```

예상 현상:

- 직접 실행 또는 cron 실행에서 Permission denied 가능

진단:

```bash
ls -l "$AGENT_HOME/bin/monitor.sh"
id agent-admin
```

복구:

```bash
sudo chmod 750 "$AGENT_HOME/bin/monitor.sh"
```

배울 용어:

`File Permission → User/Group → PoLP → cron 실행 권한`

---

## 오류 2 — AGENT_PORT 값 불일치

고의 오류 예시:

```bash
export AGENT_PORT=15035
```

예상 현상:

- 제공 앱 Boot Sequence의 환경 변수 검증 또는 포트 관련 검증 실패 가능
- 미션 기준 포트 15034와 불일치

진단:

```bash
printf '%s\n' "$AGENT_PORT"
ss -tulnp | grep 15034
```

복구:

```bash
export AGENT_PORT=15034
```

배울 용어:

`Environment Variable → Port → LISTEN → Health Check`

---

## 오류 3 — 앱 프로세스 종료

앱을 정상 종료한 뒤 `monitor.sh`를 실행한다.

예상 현상:

- 프로세스 Health Check 실패
- 원본 요구에 따라 `exit 1`

확인:

```bash
"$AGENT_HOME/bin/monitor.sh"
echo $?
```

배울 용어:

`Process → PID → Health Check → Exit Status`

---

## 오류 4 — 포트가 LISTEN하지 않는 상태

프로세스가 존재하더라도 앱이 15034에서 LISTEN하지 않는 상황을 관찰한다.

진단:

```bash
ps -ef | grep '[a]gent_app'
ss -tulnp | grep 15034
```

핵심 학습:

`Process 존재`와 `서비스 포트 LISTEN`은 서로 다른 검증 항목이다.

---

## 오류 5 — 방화벽 비활성

학습 환경에서 방화벽을 비활성한 경우 `monitor.sh`가 어떤 정책을 가져야 하는지 확인한다.

원본 기준 예상:

- `[WARNING]` 출력
- 스크립트는 종료하지 않음

핵심 학습:

`Health Check 실패 정책`과 `Warning-and-Continue 정책`의 차이

---

## 오류 6 — 로그 디렉터리 쓰기 권한 문제

관찰 대상:

- 앱 Boot Sequence의 Log Permission 검증
- `monitor.sh` 로그 추가 실패

진단:

```bash
ls -ld /var/log/agent-app
getfacl /var/log/agent-app 2>/dev/null || true
id agent-admin
id agent-dev
```

핵심 학습:

`File Permission / ACL → Log → Automation`

---

## 오류 7 — cron은 등록했는데 로그가 증가하지 않음

진단 순서:

```text
1. crontab -l
2. 스크립트 경로가 절대경로인지 확인
3. monitor.sh 실행 권한 확인
4. agent-admin의 그룹 권한 확인
5. 환경 변수 사용 여부 확인
6. 수동 실행 결과 확인
7. monitor.log 쓰기 권한 확인
```

핵심 학습:

`cron 환경`은 대화형 셸과 동일하다고 가정하면 안 된다. 미션에서는 환경 변수와 절대경로를 명확하게 관리하는 것이 중요하다.

---

## 오류 8 — 로그 파일이 계속 커짐

관찰:

```bash
du -h /var/log/agent-app/monitor.log
```

원본 요구:

- `monitor.log`가 커지면 최대 **10MB / 10개 파일 유지**
- 구현 방식은 logrotate 또는 스크립트 로직 중 선택 가능

핵심 학습:

`Logging → Log Growth → Log Rotation → Retention Policy`

---

# 6. 평가 예상 질문과 모범 답변 뼈대

## Q1. 왜 SSH 포트를 변경하고 Root 원격 로그인을 차단합니까?

답변 뼈대:

```text
SSH는 원격 관리 통로이므로 공격 표면을 줄이는 기본 보안 설정이 필요합니다.
B1-1에서는 SSH를 TCP 20022로 변경하고 Root 직접 로그인을 차단합니다.
관리 작업은 일반 계정으로 접속한 뒤 필요한 경우에만 sudo를 사용해 최소 권한 원칙을 유지합니다.
```

## Q2. 방화벽에서 왜 필요한 포트만 허용합니까?

답변 뼈대:

```text
열려 있는 포트는 외부 접근 경로가 될 수 있으므로 서비스에 필요한 포트만 허용하는 것이 안전합니다.
이 미션에서는 SSH 20022/tcp와 앱 15034/tcp만 필요한 인바운드 포트로 관리합니다.
```

## Q3. 그룹을 agent-common과 agent-core로 나눈 이유는 무엇입니까?

답변 뼈대:

```text
모든 사용자가 모든 데이터에 접근하지 않도록 역할별 권한 경계를 만들기 위해서입니다.
공유 데이터는 agent-common이 사용하고, API key와 운영 로그처럼 더 민감한 영역은 agent-core로 제한합니다.
```

## Q4. ACL은 일반 파일 권한과 무엇이 다릅니까?

답변 뼈대:

```text
일반 Linux 권한은 owner/group/others 중심이고, ACL은 특정 사용자나 그룹에 더 세밀한 추가 권한을 줄 수 있습니다.
```

## Q5. 환경 변수를 사용하는 이유는 무엇입니까?

답변 뼈대:

```text
경로와 포트 같은 실행 설정을 코드와 분리하고 동일한 실행 환경을 재현하기 위해 사용합니다.
B1-1에서는 AGENT_HOME, AGENT_PORT, AGENT_KEY_PATH 등으로 앱과 monitor.sh가 같은 기준을 보게 합니다.
```

## Q6. 프로세스와 포트를 모두 확인하는 이유는 무엇입니까?

답변 뼈대:

```text
프로세스가 실행 중이어도 네트워크 포트를 열지 못했을 수 있기 때문입니다.
따라서 앱 프로세스 존재와 TCP 15034 LISTEN 상태를 별도로 확인해야 서비스가 실제 요청을 받을 준비가 됐는지 판단할 수 있습니다.
```

## Q7. Health Check 실패와 자원 WARNING을 왜 다르게 처리합니까?

답변 뼈대:

```text
프로세스나 포트가 없으면 서비스 자체가 동작하지 않는 치명적 상태라 exit 1로 종료합니다.
반면 CPU/MEM/DISK 임계값 초과나 방화벽 비활성 확인은 관찰이 필요한 경고 상태로 설계되어 로그를 남기고 계속 실행합니다.
```

## Q8. 로그가 왜 필요합니까?

답변 뼈대:

```text
장애가 발생한 뒤 당시 상태를 재구성하고 원인을 추적하기 위해서입니다.
monitor.log에 timestamp, PID, CPU, MEM, DISK_USED를 누적하면 시간에 따른 변화를 확인할 수 있습니다.
```

## Q9. cron과 crontab의 차이는 무엇입니까?

답변 뼈대:

```text
cron은 정기 작업을 실행하는 스케줄링 기능이고, crontab은 사용자별 실행 일정을 등록하는 설정입니다.
B1-1에서는 agent-admin의 crontab에 monitor.sh를 매분 실행하도록 등록합니다.
```

## Q10. 로그 로테이션이 필요한 이유는 무엇입니까?

답변 뼈대:

```text
로그를 계속 추가하기만 하면 디스크를 과도하게 사용할 수 있기 때문입니다.
B1-1에서는 monitor.log가 커질 때 최대 10MB 기준으로 관리하고 최대 10개 파일을 유지하도록 요구합니다.
```

---

# 7. B1-1 Dependency Map

```text
[Linux]
   │
   ├─────────────── 사용자·보안 축 ───────────────┐
   │                                              │
[User Account] → [User/Group] → [File Permission] → [ACL]
   │                                              │
[Root] → [sudo] ─────────────────────────────→ [PoLP]

[Network]
   ↓
[TCP] → [Port] → [Firewall] → [UFW/firewalld]
                   │
                   ├─ 20022 → [sshd] → [SSH]
                   └─ 15034 → Agent App

[Environment Variable]
   ↓
[Bash] → [Shell Script: monitor.sh]
   ↓
[Process] → [PID]
   ↓
[LISTEN:15034]
   ↓
[Health Check] → 실패 → [Exit Status = 1]
   ↓ 정상
[System Monitoring]
   ↓
[CPU / Memory / Disk]
   ↓
[Log: monitor.log]
   ↓
[cron] ← [crontab]
   ↓
매분 자동 실행
   ↓
[Log Rotation]
```

---

# 8. 20 : 60 : 20 실제 학습 배치

## 미션 전 20% — 먼저 이해

아래 10개만 먼저 본다.

1. Linux
2. User Account
3. Root / sudo
4. User / Group
5. File Permission
6. PoLP
7. SSH
8. Port / TCP
9. Firewall
10. Environment Variable

목표: **왜 이런 서버 구조를 만드는지 이해**한다.

## 미션 수행 중 60% — 실행하면서 이해

- ACL
- sshd
- UFW/firewalld
- Process / PID
- LISTEN
- Bash / Shell Script
- System Monitoring
- Health Check
- CPU/MEM/DISK
- Log
- Exit Status

목표: **명령 출력과 코드에서 용어를 실제로 찾고 사용**한다.

## 미션 완료 후 20% — 설명과 자동화 정리

- cron / crontab
- Log Rotation
- Health Check vs Warning
- PoLP와 계정·그룹 구조
- SSH/Firewall 보안 이유
- 환경 변수 설계 이유
- 장애 시 로그 기반 진단 순서

목표: **평가에서 자기 말로 구조와 선택 이유를 설명**한다.

---

# 9. Vocabulary Gate V1~V5 — B1-1 체크리스트

## V1 — 인지

- [ ] 28개 Top Core 용어를 보고 대략 어느 영역의 말인지 구분할 수 있다.
- [ ] SSH / sshd, cron / crontab, Process / PID를 서로 구분할 수 있다.

## V2 — 이해

- [ ] Top Core 각각을 한 문장으로 설명할 수 있다.
- [ ] PoLP, Health Check, Log Rotation의 목적을 설명할 수 있다.

## V3 — 관계

- [ ] `User → Group → Permission → ACL → PoLP` 관계를 설명할 수 있다.
- [ ] `TCP → Port → Firewall → sshd/APP` 관계를 설명할 수 있다.
- [ ] `Process → PID → LISTEN → Health Check → Exit Status` 관계를 설명할 수 있다.
- [ ] `monitor.sh → Log → cron → Log Rotation` 관계를 설명할 수 있다.

## V4 — 적용

- [ ] 실제 서버에서 사용자/그룹 정보를 찾을 수 있다.
- [ ] `ss -tulnp`에서 20022/15034 LISTEN 상태를 찾을 수 있다.
- [ ] UFW/firewalld 규칙을 확인할 수 있다.
- [ ] AGENT_* 환경 변수를 확인할 수 있다.
- [ ] monitor.log와 crontab 위치를 찾아 검증할 수 있다.
- [ ] `echo $?`로 종료 상태를 확인할 수 있다.

## V5 — 설명

- [ ] 왜 Root 로그인을 차단하는지 설명할 수 있다.
- [ ] 왜 포트 2개만 허용하는지 설명할 수 있다.
- [ ] 왜 agent-common과 agent-core를 나누는지 설명할 수 있다.
- [ ] 왜 프로세스와 포트를 동시에 확인하는지 설명할 수 있다.
- [ ] 왜 Health Check 실패는 종료하고 자원 임계값은 WARNING만 내는지 설명할 수 있다.
- [ ] 왜 cron과 Log Rotation이 운영에 필요한지 설명할 수 있다.

### 통과 기준

- **미션 시작 전:** V1 + Top Core 주요 항목 V2
- **미션 수행 중:** V3 + V4
- **평가 전:** 핵심 평가 항목 V5

모든 세부 용어를 V5까지 올릴 필요는 없다.

---

# 10. 15분 압축 복습 카드

## 3분 — 보안

```text
Root 직접 로그인 차단
일반 계정 + 필요 시 sudo
User/Group + Permission + ACL
PoLP
SSH 20022
Firewall → 20022/tcp, 15034/tcp
```

## 3분 — 실행

```text
AGENT_* 환경 변수
일반 계정으로 앱 실행
Agent READY
0.0.0.0:15034 LISTEN
Process + PID
```

## 3분 — 관제

```text
monitor.sh
Process Health Check
Port Health Check
Firewall Warning
CPU > 20%
MEM > 10%
DISK_USED > 80%
```

## 3분 — 로그와 자동화

```text
/var/log/agent-app/monitor.log
cron
agent-admin crontab
매분 실행
10MB / 10개 로그 유지
```

## 3분 — 자기 설명

다음 문장을 끊지 않고 설명한다.

```text
B1-1은 최소 권한으로 사용자와 디렉터리를 분리하고,
SSH와 방화벽으로 필요한 네트워크 경로만 열고,
환경 변수로 앱 실행 조건을 고정한 뒤,
Bash monitor.sh가 프로세스·포트·시스템 자원을 점검하여 로그로 기록하고,
cron이 이를 매분 자동 실행하며,
로그 로테이션으로 기록이 무한히 커지는 것을 방지하는 미션이다.
```

---

# 11. 완료 기준

B1-1 Top Core 학습은 다음 상태가 되면 1차 완료로 본다.

- [ ] 28개 Top Core 한 줄 설명 확인
- [ ] 전체 Dependency Map을 보고 흐름 설명 가능
- [ ] 초미니 실습 8개 수행
- [ ] 고의 오류 8개 중 최소 4개 재현·복구
- [ ] 평가 예상 질문 10개 중 8개 이상 자기 말로 답변
- [ ] V1~V4 통과
- [ ] 평가 핵심 항목 V5 통과

다음 학습 단계에서는 B1-1 전체 용어 중 **Level 2 구현 명령·파일·설정**을 실제 수행 순서에 맞춰 연결한 `입문자 무오류 따라하기`로 확장한다. 그 후 B1-2 Top Core로 넘어간다.
