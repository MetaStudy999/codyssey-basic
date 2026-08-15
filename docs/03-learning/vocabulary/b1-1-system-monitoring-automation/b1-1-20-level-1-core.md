# B1-1 Level 1 — Core Concepts

**역할:** B1-1의 본질을 이해하기 위한 핵심 개념과 Top Core 학습  
**목표:** 용어를 외우는 것이 아니라 `무엇인지 → 왜 필요한지 → B1-1에서 어디에 쓰는지`를 연결한다.  
**Gate:** V2 — 의미, V3 — 관계

---

## 1. Level 1 핵심 용어 전체 목록

### 서버·운영·보안

- 서버 (Server)
- 서버 운영 (Server Operations)
- 시스템 관제 (System Monitoring)
- 상태 점검 (Health Check)
- 시스템 리소스 (System Resource)
- 보안 (Security)
- 원격 접속 (Remote Access)
- 보안 셸 (Secure Shell, SSH)
- SSH 서버 데몬 (SSH Daemon, sshd)
- 원격 로그인 (Remote Login)
- 방화벽 (Firewall)
- 인바운드 트래픽 (Inbound Traffic)
- 허용 규칙 (Allow Rule)
- 최소 권한 원칙 (Principle of Least Privilege, PoLP)
- 역할 기반 접근 제어 (Role-Based Access Control, RBAC)

### 사용자·권한

- 사용자 (User)
- 그룹 (Group)
- 소유자 (Owner)
- 그룹 소유권 (Group Ownership)
- 파일 권한 (File Permission)
- 접근 제어 목록 (Access Control List, ACL)
- 공유 디렉터리 (Shared Directory)
- 보안 디렉터리 (Secure Directory)

### 실행·관제·자동화

- 실행 환경 (Runtime Environment)
- 프로세스 관제 (Process Monitoring)
- 포트 관제 (Port Monitoring)
- 리슨 상태 (Listen State, LISTEN)
- 자원 사용률 (Resource Utilization)
- 중앙 처리 장치 사용률 (CPU Usage)
- 메모리 사용률 (Memory Usage)
- 디스크 사용률 (Disk Usage)
- 루트 파티션 (Root Partition)
- 임계값 (Threshold)
- 경고 (Warning)
- 로깅 (Logging)
- 자동화 (Automation)
- 크론 (cron)
- 크론탭 (crontab)
- 주기 실행 작업 (Scheduled Job)
- 로그 보존 정책 (Log Retention Policy)
- 로그 로테이션 (Log Rotation)

---

## 2. Top Core 28

| # | 용어 | 쉬운 한 줄 설명 | B1-1 적용 위치 |
|---:|---|---|---|
| 1 | 리눅스 (Linux) | 사용자·파일·프로세스·네트워크를 관리하는 서버 운영 환경 | 미션 전체 |
| 2 | 사용자 계정 (User Account) | 시스템 사용 주체를 구분하는 신원 | `agent-admin/dev/test` |
| 3 | 루트 계정 / 슈퍼유저 (Root / Superuser) | 시스템 전체 권한을 가진 최고 권한 계정 | Root 원격 로그인 차단, Agent non-root 실행 |
| 4 | sudo (Superuser Do) | 필요한 명령에 한해 관리자 권한을 사용하는 방식 | 시스템 설정 변경 |
| 5 | 사용자·그룹 (User / Group) | 사용자를 역할별로 묶어 권한을 관리하는 단위 | `agent-common`, `agent-core` |
| 6 | 파일 권한 (File Permission) | 읽기·쓰기·실행 가능 여부를 정하는 규칙 | `monitor.sh` 750, 디렉터리 접근 |
| 7 | 접근 제어 목록 (ACL) | 기본 owner/group/others보다 세밀한 권한 규칙 | 공용·보안 디렉터리 권한 보완 |
| 8 | 최소 권한 원칙 (PoLP) | 필요한 사람에게 필요한 권한만 주는 원칙 | common/core 분리, Root 실행 금지 |
| 9 | 보안 셸 (SSH) | 암호화된 원격 접속 프로토콜 | TCP `20022` |
| 10 | SSH 서버 데몬 (sshd) | 서버에서 SSH 연결을 받는 서비스 | SSH 설정·접속 처리 |
| 11 | 포트 (Port) | 한 IP에서 서비스 대상을 구분하는 번호 | SSH `20022`, Agent `15034` |
| 12 | 전송 제어 프로토콜 (TCP) | 연결 상태와 순서를 관리하는 전송 프로토콜 | `20022/tcp`, `15034/tcp` |
| 13 | 방화벽 (Firewall) | 네트워크 연결을 규칙에 따라 허용·차단 | 필요한 인바운드 포트만 허용 |
| 14 | UFW / firewalld | Linux 방화벽 정책을 관리하는 도구 | 방화벽 활성화·규칙 검증 |
| 15 | 프로세스 (Process) | 실행 중인 프로그램의 실행 단위 | Agent 실행 여부 검사 |
| 16 | 프로세스 식별자 (PID) | 각 프로세스를 구분하는 숫자 | `monitor.log` PID 기록 |
| 17 | 리슨 상태 (LISTEN) | 프로그램이 포트에서 새 연결을 기다리는 상태 | `0.0.0.0:15034` 확인 |
| 18 | 환경 변수 (Environment Variable) | 프로그램 실행 설정을 외부에서 전달하는 값 | `AGENT_*` 5개 |
| 19 | 셸 스크립트 (Shell Script) | 여러 셸 명령을 파일로 묶은 자동화 프로그램 | `monitor.sh` |
| 20 | 배시 (Bash) | B1-1 스크립트를 작성·실행하는 Shell | `monitor.sh` 실행 |
| 21 | 시스템 관제 (System Monitoring) | 시스템 상태를 계속 확인·기록하는 운영 활동 | `monitor.sh` 전체 역할 |
| 22 | 상태 점검 (Health Check) | 서비스가 실제 사용 가능한 상태인지 확인하는 검사 | process + 15034 LISTEN |
| 23 | CPU·메모리·디스크 사용률 | 주요 시스템 자원 사용 정도 | 임계값 경고 |
| 24 | 로그 (Log) | 상태와 사건을 시간 순서로 남긴 기록 | `monitor.log` |
| 25 | 크론 (cron) | 예약 작업을 실행하는 스케줄러 | `monitor.sh` 자동 반복 |
| 26 | 크론탭 (crontab) | cron 작업 정의 목록 | `agent-admin` 매분 실행 등록 |
| 27 | 로그 로테이션 (Log Rotation) | 로그가 무한히 커지지 않게 회전·보관하는 관리 방식 | `10MB / 10개` |
| 28 | 종료 상태 (Exit Status) | 명령·스크립트의 성공/실패 결과 코드 | 정상 `0`, Health 실패 `1` |

---

## 3. 핵심 관계 ① 사용자·권한

```text
agent-admin ─┐
agent-dev   ─┼─→ agent-common → upload_files
agent-test  ─┘

agent-admin ─┐
agent-dev   ─┴─→ agent-core → api_keys / 운영 로그

agent-test ─X→ agent-core
```

핵심 질문:

> 왜 모든 사용자에게 같은 권한을 주지 않는가?

답의 중심은 **최소 권한 원칙**이다. 업무에 필요하지 않은 민감 자원 접근을 제한해 실수·오용·침해의 영향 범위를 줄인다.

---

## 4. 핵심 관계 ② SSH·Port·Firewall

```text
외부 Client
    ↓ TCP
Firewall
    ↓ 20022/tcp 허용
SSH LISTEN
    ↓
sshd
```

그리고 Agent는:

```text
외부/로컬 Client
    ↓ TCP
Firewall
    ↓ 15034/tcp 허용
0.0.0.0:15034 LISTEN
    ↓
Agent Process
```

반드시 구분한다.

```text
SSH = 프로토콜
sshd = SSH 서버 프로세스/서비스
Port = 서비스 번호
LISTEN = 연결 대기 상태
Firewall = 통과 허용 여부
```

---

## 5. 핵심 관계 ③ Process·Port·Health Check

```text
Agent 파일
   ↓ 실행
Process
   ↓ PID
15034에 bind
   ↓
LISTEN
```

따라서:

```text
Process 있음 + Port 없음 = 서비스 정상이라고 단정할 수 없음
```

B1-1이 process와 port를 둘 다 검사하는 이유다.

---

## 6. 핵심 관계 ④ Monitoring·Log·cron·Rotation

```text
monitor.sh
   ├─ Process 확인
   ├─ Port 확인
   ├─ Firewall 확인
   ├─ CPU/MEM/DISK 수집
   └─ monitor.log append
          ↓
cron 매분 실행
          ↓
로그 누적
          ↓
logrotate 10MB / 10개
```

관제는 한 번 실행하는 명령이 아니라 **반복 측정 + 기록 + 보존 정책**까지 연결되어야 운영 흐름이 된다.

---

## 7. 원본 요구와 직접 연결되는 숫자

```text
SSH_PORT       = 20022
AGENT_PORT     = 15034
CPU_WARNING    > 20%
MEM_WARNING    > 10%
DISK_WARNING   > 80%
CRON           = every minute
LOG_ROTATION   = 10MB / 10 files
```

숫자를 따로 암기하지 말고 다음 관계로 기억한다.

```text
접속 20022
서비스 15034
자원 경고 20 / 10 / 80
자동화 1분
로그 10 / 10
```

---

## 8. 5분 관계 훈련

문서를 가리고 다음 질문에 한 문장씩 답한다.

1. Root와 sudo는 어떻게 다른가?
2. `agent-common`과 `agent-core`는 왜 나누는가?
3. SSH와 sshd는 어떻게 다른가?
4. Port와 Firewall은 어떻게 다른가?
5. Process가 있어도 Port가 없을 수 있는가?
6. Health Check와 Resource Warning은 왜 처리 방식이 다른가?
7. cron과 crontab은 어떻게 다른가?
8. Log와 Log Rotation은 어떤 관계인가?

---

## 9. V2 / V3 Gate

### V2 — 의미

- [ ] Top Core 28개 중 핵심 용어를 한 문장으로 설명할 수 있다.
- [ ] SSH / sshd / Port / Firewall을 서로 구분할 수 있다.
- [ ] User / Group / Permission / ACL을 서로 구분할 수 있다.
- [ ] Process / PID / LISTEN을 서로 구분할 수 있다.
- [ ] cron / crontab / Log Rotation을 구분할 수 있다.

### V3 — 관계

- [ ] 사용자·그룹·권한이 최소 권한 원칙과 어떻게 연결되는지 설명할 수 있다.
- [ ] `sshd 설정 → LISTEN → Firewall → 실제 접속` 관계를 그릴 수 있다.
- [ ] `Process → Port → Health Check` 관계를 설명할 수 있다.
- [ ] `monitor.sh → Log → cron → Log Rotation` 흐름을 설명할 수 있다.

---

## 10. 기억 문장

> **필요한 사용자에게 필요한 권한만 주고, 필요한 포트만 열고, Agent의 process와 port를 함께 확인하며, 상태를 로그로 남겨 cron과 rotation으로 운영한다.**

---

[← Level 0](./b1-1-10-level-0-prerequisite.md) · [B1-1 Index](./b1-1-00-index.md) · [다음: Level 2 Execution →](./b1-1-30-level-2-execution.md)
