# B1-1 Level 5 — Evaluation & Self-Explanation

**역할:** 구현 결과를 평가자에게 구조적으로 설명하는 단계  
**핵심 질문:** 무엇을 했고, 왜 그렇게 했고, 어떻게 구현했으며, 무엇으로 증명했는가?  
**답변 구조:** `WHAT → WHY → HOW → PROOF`  
**Gate:** V5 — 자기 설명

---

## 1. Level 5 용어

- SSH 포트 변경 (SSH Port Change)
- 루트 원격 로그인 차단 (Root Remote Login Disablement)
- 기본 서버 보안 (Baseline Server Security)
- 필요 포트만 허용 (Allow Only Required Ports)
- 최소 권한 원칙 (Principle of Least Privilege, PoLP)
- 역할 기반 계정·그룹 (Role-based User and Group Model)
- 역할 기반 접근 제어 (Role-Based Access Control, RBAC)
- 공유 디렉터리 (Shared Directory)
- 보안 디렉터리 (Secure Directory)
- 접근 제어 목록 (Access Control List, ACL)
- 환경 변수 기반 실행 환경 (Environment-variable-based Runtime Environment)
- 프로세스 상태 관제 (Process Health Monitoring)
- 포트 상태 관제 (Port Health Monitoring)
- 시스템 리소스 관제 (System Resource Monitoring)
- CPU·메모리·디스크 사용률 (CPU / Memory / Disk Utilization)
- 임계값 기반 경고 (Threshold-based Warning)
- 로그 기반 추적 (Log-based Traceability)
- 주기 실행 자동화 (Scheduled Automation)
- 크론탭 (crontab)
- 로그 보존 정책 (Log Retention Policy)
- 로그 로테이션 (Log Rotation)
- 로그 압축 (Log Compression)
- 로그 아카이브 (Log Archiving)
- 로그 삭제 정책 (Log Deletion Policy)
- Health Check 실패 정책 (Health Check Failure Policy)
- 경고만 출력하는 상태 점검 (Non-fatal Warning Check)

---

## 2. 평가 답변 공식

모든 질문을 다음 네 문장 구조로 정리한다.

```text
1. WHAT  — 무엇을 구현했는가?
2. WHY   — 왜 그렇게 설계했는가?
3. HOW   — 어떤 명령·코드·설정으로 구현했는가?
4. PROOF — 무엇으로 실제 동작을 검증했는가?
```

예:

```text
WHAT  SSH 포트를 20022로 변경하고 Root 원격 로그인을 차단했습니다.
WHY   미션 요구사항을 충족하고 최고 권한 계정의 원격 노출을 줄이기 위해서입니다.
HOW   sshd drop-in에서 Port 20022와 PermitRootLogin no를 설정했습니다.
PROOF sshd -T와 ss -lntp로 최종 해석값과 실제 LISTEN 상태를 확인했습니다.
```

평가에서 중요한 것은 설정 파일을 읽는 것이 아니라 **구현 이유와 실제 증거를 연결하는 것**이다.

---

## 3. 평가 영역 1 — 요구사항 구현 및 동작 확인

### 3.1 SSH `20022` + Root 원격 로그인 차단

**WHAT**

```text
SSH Port = 20022
PermitRootLogin = no
```

**WHY**

- 미션 요구사항 충족
- Root 계정의 직접 원격 노출 감소
- 일반 사용자 + 필요한 경우 sudo라는 최소 권한 흐름 유지

포트 변경은 자동화된 기본 22번 스캔 노이즈를 줄이는 데 도움이 될 수 있지만 강력한 인증을 대체하지 않는다고 설명한다.

**HOW**

현재 구현 예시:

```text
/etc/ssh/sshd_config.d/99-b1-1.conf
```

**PROOF**

```bash
sudo sshd -T | grep -E '^(port|permitrootlogin) '
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

가능하면 새 클라이언트의 실제 `ssh -p 20022` 접속까지 제시한다.

---

### 3.2 Firewall

**WHAT**

```text
Firewall active
20022/tcp ALLOW
15034/tcp ALLOW
기본 incoming deny
```

**WHY**

외부에서 필요한 서비스 포트만 통과시키고 불필요한 인바운드 노출을 줄이기 위해서다.

**HOW / PROOF**

```bash
sudo ufw status verbose
```

평가 환경의 기존 필수 서비스가 있는 경우 무작정 모든 규칙을 삭제하지 않았다는 점도 설명할 수 있어야 한다.

---

### 3.3 사용자·그룹·권한

**WHAT**

```text
agent-common = admin + dev + test
agent-core   = admin + dev
```

**WHY**

- `upload_files`: 세 역할이 공동 사용
- `api_keys`, 운영 로그: core 역할만 접근
- `agent-test`: 민감 자원 접근 차단

**HOW / PROOF**

```bash
id agent-admin
id agent-dev
id agent-test
getfacl /home/agent-admin/agent-app/upload_files
getfacl /home/agent-admin/agent-app/api_keys
```

실제 allow/deny 시험까지 연결한다.

---

### 3.4 Agent

성공 기준:

```text
Boot Sequence 5단계 모두 [OK]
Agent READY
non-root process
0.0.0.0:15034 LISTEN
```

평가 답변에서 **Process가 존재하는 것과 서비스가 LISTEN 가능한 상태는 다른 검증**임을 말할 수 있어야 한다.

---

### 3.5 `monitor.sh`

원본 핵심:

```text
Process 없음 → exit 1
15034 없음   → exit 1
Firewall 비활성 → WARNING, 계속
CPU > 20%      → WARNING
MEM > 10%      → WARNING
DISK > 80%     → WARNING
정상 → monitor.log append
```

정상과 장애 시나리오를 모두 보여야 한다.

---

### 3.6 cron

등록만 확인하지 않는다.

```bash
sudo -u agent-admin crontab -l
```

그리고 1분 이상 지난 뒤 실제 `monitor.log` 증가를 보여 준다.

---

### 3.7 Log Rotation

미션 핵심:

```text
10MB / 10개
```

현재 구현에서는 `logrotate`로 역할을 분리한다.

```text
monitor.sh = 상태 수집·로그 기록
logrotate  = 로그 수명주기 관리
```

---

## 4. 평가 영역 2 — 구현 방식과 명령 설명

### Q1. 왜 process 확인에 `pgrep`를 사용했는가?

현재 구현은 조건과 일치하는 PID를 직접 찾기 위해 `pgrep -f`를 사용할 수 있다. `ps | grep`보다 목적이 명확하고, `ps`는 찾은 PID의 owner·command를 사람이 확인하는 데 사용한다.

```bash
pgrep -af '<실제 앱 파일명>'
ps -o user,pid,ppid,cmd -p <PID>
```

### Q2. 왜 port 확인에 `ss`를 사용했는가?

B1-1은 process 존재뿐 아니라 실제 TCP `LISTEN`을 확인해야 한다. `ss`는 Linux socket 상태를 직접 조회하는 대표 도구다.

### Q3. CPU는 어떻게 계산하는가?

현재 저장소 구현은 `/proc/stat`의 두 시점 CPU counter 차이를 사용한다.

```text
snapshot 1
→ 짧은 시간
→ snapshot 2
→ total / idle 차이
→ usage 계산
```

### Q4. Memory는 어떻게 계산하는가?

```text
(MemTotal - MemAvailable) / MemTotal × 100
```

현재 구현은 `/proc/meminfo`의 `MemTotal`, `MemAvailable`을 사용한다.

### Q5. Disk는 무엇을 보는가?

```bash
df -P /
```

원본 요구가 root partition의 Used %이므로 `/`를 본다.

### Q6. 왜 로그 포맷을 고정했는가?

```text
[시간] PID CPU MEM DISK
```

- 사람 비교가 쉬움
- 자동 파싱이 쉬움
- 장애 전후 추적 가능
- Evidence로 사용 가능

### Q7. `agent-dev` 소유인데 `agent-admin`이 실행 가능한 이유는?

```text
owner = agent-dev
group = agent-core
mode  = 750
agent-admin ∈ agent-core
```

따라서 `agent-admin`은 group의 `r-x` 권한으로 실행할 수 있다.

### Q8. 왜 logrotate를 monitor.sh와 분리했는가?

상태 수집과 로그 수명주기를 서로 다른 책임으로 나누면 코드 복잡도가 줄고 시스템 표준 도구를 활용할 수 있다.

---

## 5. 평가 영역 3 — 보안·권한·운영 원리

### 왜 Root 원격 로그인을 막는가?

Root는 시스템 전체 권한을 가지므로 원격 인증이 침해됐을 때 영향 범위가 최대다. 일반 사용자로 접속한 뒤 필요한 작업만 sudo로 수행하는 편이 최소 권한과 추적성에 유리하다.

### 왜 `api_keys`와 운영 로그를 core로 제한하는가?

민감한 인증 자원과 운영 정보는 QA 역할에 직접 수정 권한이 필요하지 않다. 업무상 필요한 범위만 허용한다.

### 왜 어떤 항목은 `exit 1`, 어떤 항목은 WARNING인가?

```text
Process 없음 → 서비스 자체 없음 → exit 1
Port 없음    → 서비스 제공 불가 → exit 1

Firewall inactive → 보안 위험, 상태 수집은 가능 → WARNING
Resource high      → 위험 신호, 즉시 monitor 종료 이유는 아님 → WARNING
```

### 왜 로그는 `>>`인가?

```text
>  = 덮어쓰기
>> = 뒤에 추가
```

시간 흐름을 보존해야 하므로 append가 필요하다.

---

## 6. 평가 영역 4 — 응용과 장애 대응

### Q1. 모니터링 대상이 Nginx로 바뀌면?

핵심 변경점:

```text
process
port
log
threshold / health rule
```

전체 스크립트를 새로 만들기보다 환경화된 대상 값을 바꾸는 방향으로 확장할 수 있다.

### Q2. Process는 있는데 Port가 열리지 않으면?

```text
1. 실제 PID/command 확인
2. 앱 startup 로그 확인
3. AGENT_PORT 확인
4. ss로 15034 확인
5. port conflict 확인
6. bind address 확인
7. key/permission/environment 확인
```

### Q3. 로그 급증으로 disk가 가득 찰 위험이 있으면?

**단기**

```text
현재 disk 확인
증가 중인 로그 확인
폭증 원인 확인
rotation 상태 확인
서비스 장애 방지 공간 확보
```

**중기**

```text
로그 폭증 원인 수정
회전·보존 정책 조정
알림 추가
archive/retention 정책 검토
```

원인 파악 전에 운영 로그 전체 삭제를 첫 조치로 하지 않는다.

---

## 7. 평가 답변 템플릿

```text
질문:

WHAT:
무엇을 구현했는가?

WHY:
왜 이 설계를 선택했는가?

HOW:
어떤 파일·명령·코드로 구현했는가?

PROOF:
어떤 실제 결과로 동작을 검증했는가?

LIMIT / ENVIRONMENT:
환경별 차이 또는 아직 확보하지 못한 Evidence는 무엇인가?
```

마지막 `LIMIT / ENVIRONMENT`를 추가하면 문서 설명과 실제 검증 범위를 과장하지 않을 수 있다.

---

## 8. 1분 구두 설명

다음을 1분 안에 말한다.

> B1-1에서는 Linux 서버의 사용자·그룹과 최소 권한을 구성하고, SSH를 20022로 변경하면서 Root 원격 로그인을 차단합니다. 필요한 20022와 15034 포트만 방화벽에서 허용하고, Agent를 일반 사용자로 실행해 15034 LISTEN을 확인합니다. monitor.sh는 process와 port Health를 검사하고 CPU·MEM·DISK를 기록하며, cron이 매분 실행하고 logrotate가 10MB/10개 정책으로 로그를 관리합니다. 각 설정은 파일만 보는 것이 아니라 실제 process, socket, log 증가와 Evidence로 검증합니다.

문장을 암기하기보다 핵심 순서를 유지한다.

---

## 9. 3~5분 설명 순서

```text
1. 미션 목적
2. User / Group / Permission 설계
3. SSH / Firewall
4. Agent Runtime
5. monitor.sh Health + Resource
6. cron / Log Rotation
7. Troubleshooting 방식
8. Evidence와 PASS 기준
```

---

## 10. V5 Gate

- [ ] SSH 20022와 Root 차단을 WHY/HOW/PROOF까지 설명할 수 있다.
- [ ] `agent-common` / `agent-core` 분리를 최소 권한으로 설명할 수 있다.
- [ ] process와 port를 둘 다 확인하는 이유를 설명할 수 있다.
- [ ] Health failure와 resource warning을 분리한 이유를 설명할 수 있다.
- [ ] CPU/MEM/DISK 수집 방식을 설명할 수 있다.
- [ ] cron 환경과 interactive shell의 차이를 설명할 수 있다.
- [ ] 10MB/10개 logrotate 구현을 설명할 수 있다.
- [ ] `>`와 `>>`의 차이를 로그 관점에서 설명할 수 있다.
- [ ] Process는 있는데 port가 없는 장애의 확인 순서를 말할 수 있다.
- [ ] 구현 주장마다 실제 Evidence를 연결할 수 있다.

---

## 11. 기억 문장

> **평가는 “했습니다”로 끝내지 않고, 무엇을 왜 어떻게 했으며 무엇으로 증명했는지까지 말해야 한다.**

---

[← Level 4](./b1-1-50-level-4-troubleshooting.md) · [B1-1 Index](./b1-1-00-index.md) · [다음: Review Pack →](./b1-1-70-review-pack.md)
