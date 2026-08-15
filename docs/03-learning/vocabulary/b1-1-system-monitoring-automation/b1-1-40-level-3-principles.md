# B1-1 Level 3 — Principles

**역할:** B1-1 구조와 동작 원리를 설명하기 위한 단계  
**질문:** 왜 이렇게 나누고, 내부에서 어떻게 연결되는가?  
**목표:** 명령어를 외우는 수준에서 벗어나 권한·네트워크·관제·자동화의 구조를 이해한다.

---

## 1. Level 3 용어

- 다중 사용자 환경 (Multi-user Environment)
- 리눅스 사용자·그룹 권한 모델 (Linux User and Group Permission Model)
- 소유자·그룹·기타 사용자 (Owner / Group / Others)
- 권한 비트 (Permission Bits)
- 8진수 권한 표기 (Octal Permission Notation)
- 임의 접근 제어 (Discretionary Access Control, DAC)
- ACL 권한 확장 (Extended ACL)
- 서비스 계정 분리 (Service Account Separation)
- 권한 경계 (Permission Boundary)
- 네트워크 서비스 (Network Service)
- 데몬 (Daemon)
- TCP 리스닝 소켓 (TCP Listening Socket)
- 포트 바인딩 (Port Binding)
- 와일드카드 바인딩 (Wildcard Binding)
- 실행 전 검증 (Preflight Check)
- 실패 시 즉시 종료 (Fail-fast)
- 경고 후 계속 실행 (Warning-and-Continue)
- 상태 코드 (Status Code)
- 성공 상태 (Success State)
- 실패 상태 (Failure State)
- 관제 데이터 (Monitoring Data)
- 자원 임계값 정책 (Resource Threshold Policy)
- 주기적 샘플링 (Periodic Sampling)
- 로그 포맷 (Log Format)
- 로그 추적성 (Log Traceability)
- 로그 누적 (Log Accumulation)
- 로그 로테이션 정책 (Log Rotation Policy)
- 압축·아카이브·삭제 정책 (Compression / Archive / Deletion Policy)
- 작업 스케줄러 (Job Scheduler)
- cron 데몬 (cron Daemon)
- 정기 작업 (Periodic Job)

---

## 2. B1-1 전체 구조를 세 층으로 본다

```text
[접근·권한 층]
User / Group / Permission / ACL / PoLP

[서비스 층]
sshd / Agent Process / TCP Port / LISTEN / Firewall

[운영 층]
monitor.sh / Resource / Log / cron / logrotate / Evidence
```

세 층은 서로 연결되지만 같은 문제는 아니다.

예를 들어 Agent가 실행되지 않는 문제는 권한·환경 변수·키·실행 파일 문제일 수 있고, Agent process는 있는데 외부 연결이 안 되는 문제는 bind·LISTEN·Firewall 문제일 수 있다.

---

## 3. Linux 권한 모델 — owner / group / others

Linux 기본 권한은 객체마다 다음 세 대상을 구분한다.

```text
owner
 group
others
```

권한 비트:

```text
r = 4
w = 2
x = 1
```

B1-1 `monitor.sh` 목표 `750`은:

```text
7 = rwx = owner
5 = r-x = group
0 = --- = others
```

따라서:

```text
agent-dev   → owner로 수정·실행 가능
agent-admin → agent-core 그룹으로 읽기·실행 가능
agent-test  → 접근 불가
```

핵심은 숫자 `750` 암기가 아니라 **소유자와 실행자를 역할별로 분리하면서도 필요한 실행 권한을 유지하는 것**이다.

---

## 4. DAC, ACL, setgid의 역할 분담

기본 owner/group/others 중심 권한은 DAC의 기본 형태로 이해할 수 있다.

B1-1에서는 다음처럼 역할을 나눈다.

```text
chown / chgrp → 소유자·그룹 지정
chmod         → 기본 권한 경계
setgid        → 새 파일의 그룹 일관성 유지
ACL           → 세부 사용자·그룹 권한과 기본 상속 보완
```

예를 들어 `/home/agent-admin` 전체를 넓게 열지 않고 `agent-common`에 `--x` 통과 권한만 부여하는 것은 ACL이 기본 권한보다 더 세밀한 제어를 제공하는 사례다.

공용 디렉터리의 `2770`에서 앞의 `2`는 setgid bit다. 새 파일·하위 디렉터리가 공용 그룹을 이어받도록 하여 협업 권한이 흔들리는 문제를 줄인다.

### 핵심 원칙

> 권한은 프로그램을 억지로 동작시키기 위한 숫자가 아니라 역할별 접근 경계를 표현하는 정책이다.

---

## 5. 서비스 계정 분리와 최소 권한

```text
agent-admin → 운영 / cron 실행
agent-dev   → 개발 / monitor.sh 소유
agent-test  → QA / 권한 시험
```

그룹:

```text
agent-common → 세 사용자 공용 자원
agent-core   → admin + dev 핵심 자원
```

이 구조는 민감한 `api_keys`와 운영 로그를 `agent-test`에게 열지 않으면서 `upload_files` 같은 공용 영역은 함께 사용할 수 있게 한다.

이는 B1-1의 **Principle of Least Privilege**를 실제 사용자·그룹·디렉터리로 표현한 것이다.

---

## 6. SSH 설정, LISTEN, Firewall은 서로 다른 층이다

입문자가 가장 많이 혼동하는 관계:

```text
sshd 설정
   ↓
sshd / ssh.socket이 TCP 20022에서 LISTEN
   ↓
Firewall이 20022/tcp를 허용
   ↓
Client가 실제 접속
```

### 설정

```text
Port 20022
PermitRootLogin no
```

설정 파일에 적었다는 사실만으로 실제 포트가 열렸다고 볼 수 없다.

### LISTEN

서버 프로그램 또는 socket이 해당 TCP 포트에서 새 연결을 기다리는 실제 런타임 상태다.

### Firewall

프로그램이 LISTEN하고 있어도 방화벽이 외부 트래픽을 차단할 수 있다.

따라서:

```text
LISTEN + Firewall block → 외부 접속 실패 가능
Firewall allow + no LISTEN → 받아줄 서비스가 없음
```

### 현재 Ubuntu 24.04 구현 관찰

현재 B1-1 구현 저장소에서는 Ubuntu 24.04의 `ssh.socket` / `sshd-socket-generator` 동작을 확인했다. 이것은 **현재 실습 환경의 구현 차이**이며 원본 B1-1이 socket activation을 필수 요구한다는 의미가 아니다.

---

## 7. Port Binding과 Wildcard Binding

네트워크 서비스는 특정 주소와 포트에 socket을 연결한다.

```text
IP Address + TCP Port
        ↓
     Binding
```

B1-1 Agent 목표:

```text
0.0.0.0:15034
```

`0.0.0.0`은 IPv4 인터페이스 전체에서 연결을 기다리는 wildcard bind로 이해한다.

`127.0.0.1:15034`와는 의미가 다르다. 후자는 로컬 loopback에서만 접근할 수 있다.

---

## 8. Process 존재와 서비스 정상은 다르다

```text
실행 파일
   ↓
Process
   ↓
PID
   ↓
초기화 성공
   ↓
Port bind
   ↓
LISTEN
```

중간에서 실패할 수 있으므로:

```text
Process exists ≠ Service ready
```

B1-1 `monitor.sh`가 process와 `15034 LISTEN`을 모두 확인하는 이유다.

---

## 9. Preflight Check

시스템 변경 전 현재 상태를 확인하는 단계다.

```text
Observe first
   ↓
Change one layer
   ↓
Verify immediately
```

현재 구현 저장소의 `scripts/preflight.sh`는 읽기 전용으로 OS, systemd, sudo, sshd, UFW, cron, ACL, `ss`, `logrotate` 등 기본 조건을 확인한다.

Preflight의 목적은 **실패를 미리 모두 없애는 것**이 아니라 현재 환경 차이를 알고 위험한 변경을 시작하지 않게 하는 것이다.

---

## 10. Fail-fast와 Warning-and-Continue

B1-1은 이상 상태를 모두 같은 심각도로 처리하지 않는다.

### Health 실패 — 즉시 실패

```text
Agent process 없음
15034 LISTEN 없음
       ↓
exit 1
```

서비스 자체를 제공할 수 없는 상태이므로 정상 로그를 남기며 계속 진행하지 않는다.

### Warning — 관제는 계속

```text
Firewall inactive
CPU > 20%
MEM > 10%
DISK > 80%
       ↓
WARNING
       ↓
상태 수집·로그 기록 계속
```

이 값들은 위험 신호지만 Agent Health 자체와는 다른 차원의 운영 상태다.

### 현재 구현의 추가 상태 코드

현재 저장소는 필수 명령 누락·로그 디렉터리 오류처럼 monitor 실행 환경 자체가 깨진 경우를 `2`로 구분한다. 원본 필수 요구인 process/port 실패 `exit 1`을 유지하면서 구현상 오류 종류를 더 세분화한 선택이다.

---

## 11. Resource Monitoring은 주기적 샘플링이다

```text
상태 수집
   ↓
수치 계산
   ↓
Threshold 비교
   ↓
Warning
   ↓
Log 기록
```

현재 구현:

- CPU: `/proc/stat`의 두 시점 누적값 차이
- Memory: `/proc/meminfo`의 `MemTotal`, `MemAvailable`
- Disk: `df -P /`의 root partition 사용률

핵심은 한 번의 수치보다 **같은 방식으로 반복 수집하여 비교 가능한 기록을 만드는 것**이다.

---

## 12. Log Format과 Traceability

B1-1 monitor 로그 핵심 형식:

```text
[YYYY-MM-DD HH:MM:SS] PID:... CPU:...% MEM:...% DISK_USED:...%
```

고정 형식이 필요한 이유:

1. 사람이 시점별 상태를 비교하기 쉽다.
2. `report.sh` 같은 후속 도구가 파싱하기 쉽다.
3. 오류 전후를 추적할 수 있다.
4. Evidence로 사용하기 쉽다.

`>`가 아니라 `>>`를 쓰는 이유도 **현재 값만 저장하는 것이 아니라 시간 흐름을 누적**하기 위해서다.

---

## 13. cron은 로그인 셸과 환경이 다르다

터미널에서 성공한 명령이 cron에서 실패할 수 있다.

```text
Interactive shell
→ 사용자의 PATH / export / shell profile이 존재

cron
→ 더 제한된 환경
```

그래서 현재 저장소 구현은:

- 절대 경로 사용
- 명시적 PATH
- `/etc/agent-app/agent.env` 직접 로드

방식으로 재현성을 높인다.

핵심 원리:

> 자동화는 사람이 로그인했을 때만 존재하는 환경에 의존하면 안 된다.

---

## 14. Log Rotation은 로그의 수명주기 관리다

```text
monitor.sh → 새 로그 생성·append
cron       → 반복 실행
logrotate  → 크기 기준 회전·보관·압축
```

각 도구의 역할을 분리한다.

```text
Monitoring responsibility ≠ Log lifecycle responsibility
```

B1-1 필수 정책:

```text
10MB / 10개
```

보너스 영역은 7일 압축·archive 이동·30일 삭제 같은 더 긴 수명주기 정책으로 확장할 수 있다.

---

## 15. Level 3 백지 설명

문서를 보지 않고 다음 구조를 그린다.

```text
User/Group
  ↓
Permission/ACL

sshd config
  ↓
LISTEN
  ↓
Firewall

Agent Process
  ↓
15034 LISTEN
  ↓
monitor.sh
  ↓
Log
  ↓
cron
  ↓
logrotate
```

그리고 각각 **왜 분리되어 있는지** 3~5분 동안 설명한다.

---

## 16. Level 3 완료 기준

- [ ] owner/group/others와 `750`을 숫자 없이 의미로 설명할 수 있다.
- [ ] chmod, ACL, setgid의 역할 차이를 설명할 수 있다.
- [ ] `agent-common`과 `agent-core`를 최소 권한 관점에서 설명할 수 있다.
- [ ] SSH 설정 → LISTEN → Firewall → 접속의 네 층을 설명할 수 있다.
- [ ] Process가 있어도 서비스가 비정상일 수 있는 이유를 설명할 수 있다.
- [ ] Fail-fast와 Warning을 구분한 이유를 설명할 수 있다.
- [ ] cron 환경이 interactive shell과 다른 이유를 설명할 수 있다.
- [ ] `monitor.sh`와 logrotate를 분리한 이유를 설명할 수 있다.

---

## 17. 기억 문장

> **구조를 층으로 나누면 설정·권한·서비스·네트워크·자동화가 섞이지 않고, 장애가 생겨도 어느 층을 확인해야 하는지 보인다.**

---

[← Level 2](./b1-1-30-level-2-execution.md) · [B1-1 Index](./b1-1-00-index.md) · [다음: Level 4 Troubleshooting →](./b1-1-50-level-4-troubleshooting.md)
