# B1-1 통합 복습 패키지

**미션:** 컴퓨터가 알아서 자기 상태를 점검하게 만들기  
**목적:** B1-1 학습 확장을 `기억 → 관계 → 실행 위치 → 장애 대응 → 평가 설명`까지 한 번에 복습하고 최종 학습 상태를 점검한다.  
**근거:** B1-1 원본 Mission/Evaluation, B1-1 Mission Vocabulary, Top Core 학습 가이드, Level 2 실행 가이드, Level 3~5 통합 학습 가이드

> 이 문서는 **학습용 복습·자기점검 패키지**다. 문서의 체크박스를 완료했다고 실제 미션 Runtime PASS가 되는 것은 아니다. SSH, 방화벽, Agent, monitor.sh, cron, logrotate 등 실제 동작 항목은 명령 출력·로그·스크린샷 등 Evidence가 있어야 한다.

---

# 1. 한 장 핵심 복습 카드

## 1.1 B1-1을 한 문장으로

> **Linux 서버의 접속·권한·Agent 실행환경을 안전하게 구성하고, Bash 기반 monitor.sh로 상태를 점검·기록·자동화하며, 장애를 진단하고 결과를 증빙하는 미션이다.**

## 1.2 전체 흐름

```text
Linux
  ↓
사용자 / 그룹
  ↓
권한 / ACL / 최소 권한
  ↓
SSH 20022 / Root 원격 로그인 차단
  ↓
Firewall 20022 + 15034
  ↓
AGENT_* 환경변수 / key
  ↓
Agent 일반 사용자 실행
  ↓
Boot Sequence 5 × [OK]
  ↓
Agent READY
  ↓
0.0.0.0:15034 LISTEN
  ↓
monitor.sh
  ├─ process 실패 → exit 1
  ├─ port 실패    → exit 1
  ├─ firewall     → WARNING
  ├─ CPU > 20%    → WARNING
  ├─ MEM > 10%    → WARNING
  └─ DISK > 80%   → WARNING
  ↓
/var/log/agent-app/monitor.log
  ↓
agent-admin cron — 매분
  ↓
10MB / 10개 로그 회전
  ↓
Evidence
```

## 1.3 미션 고정 핵심값

| 항목 | 값 |
|---|---|
| SSH 포트 | `20022/tcp` |
| Agent 포트 | `15034/tcp` |
| 사용자 | `agent-admin`, `agent-dev`, `agent-test` |
| 그룹 | `agent-common`, `agent-core` |
| `agent-common` | admin + dev + test |
| `agent-core` | admin + dev |
| Agent 로그 디렉터리 | `/var/log/agent-app` |
| 모니터 로그 | `/var/log/agent-app/monitor.log` |
| monitor.sh 소유자 | `agent-dev` |
| monitor.sh 그룹 | `agent-core` |
| monitor.sh 권한 | `750` |
| cron 실행자 | `agent-admin` |
| cron 주기 | 매분 |
| CPU 경고 | `> 20%` |
| MEM 경고 | `> 10%` |
| DISK 경고 | `> 80%` |
| 로그 크기 기준 | `10MB` |
| 로그 보관 개수 | `10개` |

## 1.4 환경변수 5개

```text
AGENT_HOME
AGENT_PORT
AGENT_UPLOAD_DIR
AGENT_KEY_PATH
AGENT_LOG_DIR
```

현재 학습 가이드의 재현용 표준 예시는 다음과 같다.

```text
AGENT_HOME=/home/agent-admin/agent-app
AGENT_PORT=15034
AGENT_UPLOAD_DIR=/home/agent-admin/agent-app/upload_files
AGENT_KEY_PATH=/home/agent-admin/agent-app/api_keys/t_secret.key
AGENT_LOG_DIR=/var/log/agent-app
```

이 경로 구성은 현재 저장소의 재현용 구현 선택이며, 원본 미션의 요구와 구현 예시를 구분해서 이해한다.

## 1.5 반드시 구분할 네 가지

```text
설정값 ≠ 실제 동작
프로세스 존재 ≠ 서비스 정상
명령 성공 메시지 ≠ 최종 상태 검증
문서 작성 ≠ Runtime PASS
```

---

# 2. 핵심 관계 카드 12장

각 카드는 앞면 질문을 보고 먼저 말한 뒤 뒷면을 확인한다.

## 카드 1 — 사용자와 그룹

**앞면:** 왜 사용자를 세 명, 그룹을 두 개로 나누는가?

**뒷면:** 역할별 접근 범위를 나누기 위해서다. `agent-common`은 세 사용자의 공용 영역, `agent-core`는 admin/dev만 접근해야 하는 핵심 영역에 사용한다.

## 카드 2 — 최소 권한

**앞면:** 왜 `chmod 777`로 해결하면 안 되는가?

**뒷면:** 동작은 될 수 있지만 역할별 권한 경계가 사라진다. B1-1은 필요한 사용자에게 필요한 권한만 부여하는 최소 권한 원칙을 요구한다.

## 카드 3 — chmod와 ACL

**앞면:** chmod와 ACL은 어떻게 다른가?

**뒷면:** chmod/chown은 owner/group/others 중심의 기본 경계를 만들고, ACL은 특정 사용자·그룹 또는 부모 통과·기본 상속 같은 세부 권한을 추가로 표현한다.

## 카드 4 — SSH 설정과 LISTEN

**앞면:** `Port 20022`를 설정했으면 SSH 변경이 끝난 것인가?

**뒷면:** 아니다. `sshd -t` 문법검사, 최종 해석값, 실제 `20022 LISTEN`, 필요 시 새 접속까지 확인해야 한다.

## 카드 5 — LISTEN과 Firewall

**앞면:** 포트가 LISTEN이면 외부 접속이 항상 가능한가?

**뒷면:** 아니다. LISTEN은 프로그램이 포트에서 연결을 기다리는 상태이고, Firewall은 외부 트래픽이 그 포트까지 통과할지 결정한다.

## 카드 6 — Process와 Port

**앞면:** 프로세스가 살아 있으면 서비스가 정상인가?

**뒷면:** 아니다. 프로세스가 있어도 서비스 포트가 바인딩되지 않았을 수 있다. 그래서 monitor.sh는 process와 `15034 LISTEN`을 둘 다 확인한다.

## 카드 7 — Fail-fast와 Warning

**앞면:** 왜 process/port 실패는 `exit 1`이고 CPU 경고는 종료하지 않는가?

**뒷면:** process/port 실패는 서비스 자체가 제공되지 않는 Health 실패다. CPU/MEM/DISK 초과나 Firewall 비활성은 위험 신호지만 상태 수집 자체는 계속할 수 있어 WARNING으로 구분한다.

## 카드 8 — cron 환경

**앞면:** 터미널에서 monitor.sh가 되는데 cron에서는 실패할 수 있는 이유는?

**뒷면:** cron은 로그인 셸보다 PATH와 환경변수가 제한적이다. 따라서 현재 구현은 명시적 환경 파일과 절대 경로를 사용해 재현성을 높인다.

## 카드 9 — `>`와 `>>`

**앞면:** 로그에는 왜 `>>`가 필요한가?

**뒷면:** `>`는 기존 내용을 덮어쓰고 `>>`는 뒤에 추가한다. 모니터링 로그는 시간 흐름을 누적해야 하므로 append가 필요하다.

## 카드 10 — 로그 로테이션

**앞면:** 왜 로그를 계속 쌓기만 하면 안 되는가?

**뒷면:** 로그가 무한히 증가하면 디스크 고갈 위험이 있다. B1-1은 10MB/10개 정책으로 로그 수명주기를 관리한다.

## 카드 11 — Evidence

**앞면:** 설정 파일을 보여 주면 충분한가?

**뒷면:** 아니다. 설정뿐 아니라 실제 상태를 증명해야 한다. 예를 들어 SSH는 설정값 + 실제 LISTEN, cron은 등록값 + 시간이 지난 뒤 로그 증가가 필요하다.

## 카드 12 — 평가 답변

**앞면:** 평가 답변을 어떤 순서로 말하는가?

**뒷면:** `WHAT → WHY → HOW → PROOF`, 즉 무엇을 했는지, 왜 했는지, 어떻게 구현했는지, 무엇으로 검증했는지를 말한다.

---

# 3. 5분 백지 복습

아무 문서를 보지 않고 종이에 다음을 적는다.

## 3.1 1분 — 전체 흐름

다음 10개를 순서대로 쓴다.

```text
사용자/그룹
권한/ACL
SSH
Firewall
환경변수/key
Agent
monitor.sh
cron
logrotate
Evidence
```

## 3.2 1분 — 숫자

다음 값을 적는다.

```text
SSH = ?
Agent = ?
CPU = ?
MEM = ?
DISK = ?
Log size = ?
Log count = ?
Cron interval = ?
```

정답:

```text
20022
15034
20%
10%
80%
10MB
10개
매분
```

## 3.3 1분 — 권한

```text
agent-common = ?
agent-core   = ?
monitor owner/group/mode = ?
cron executor = ?
```

정답:

```text
common = admin + dev + test
core   = admin + dev
monitor = agent-dev : agent-core / 750
cron    = agent-admin
```

## 3.4 1분 — 장애

아래 두 상황의 첫 확인 순서를 말한다.

```text
A. Process는 있는데 15034가 없다.
B. 수동 monitor는 되는데 cron에서는 안 된다.
```

## 3.5 1분 — 설명

아래 한 가지를 `WHAT → WHY → HOW → PROOF`로 말한다.

```text
SSH 20022 + Root 차단
또는
agent-common / agent-core 권한 설계
또는
monitor.sh Health Check
```

---

# 4. 실전 구두 퀴즈

정답을 보기 전에 소리 내어 답한다.

## Stage A — V1/V2: 용어와 의미

1. SSH는 무엇인가?
2. sshd는 무엇인가?
3. TCP Port는 무엇을 구분하는가?
4. LISTEN은 어떤 상태인가?
5. Firewall은 어떤 역할을 하는가?
6. Process와 PID는 어떤 관계인가?
7. ACL은 왜 쓰는가?
8. 최소 권한 원칙은 무엇인가?
9. Environment Variable은 왜 필요한가?
10. Health Check는 무엇을 확인하는가?
11. cron과 crontab은 어떤 관계인가?
12. Log Rotation은 왜 필요한가?

### Stage A 체크

- [ ] 핵심 의미를 한 문장으로 말할 수 있다.
- [ ] 명령 이름만 말하지 않고 역할을 설명할 수 있다.

---

## Stage B — V3: 관계

1. 사용자·그룹·chmod·ACL은 어떻게 연결되는가?
2. `agent-common`과 `agent-core`를 왜 분리하는가?
3. SSH 설정 → LISTEN → Firewall → 실제 접속은 어떤 순서인가?
4. 왜 process와 port를 모두 점검하는가?
5. 왜 Firewall 비활성은 WARNING이고 process 미실행은 `exit 1`인가?
6. 왜 CPU/MEM/DISK 값을 로그에 같은 형식으로 누적하는가?
7. 왜 cron에서 환경변수 문제가 발생할 수 있는가?
8. 왜 monitor.sh와 logrotate의 역할을 분리하는가?
9. 왜 `monitor.log`는 덮어쓰기보다 append가 필요한가?
10. Evidence는 구현과 어떤 관계인가?

### Stage B 체크

- [ ] 두 개 이상의 개념 사이의 원인·결과 관계를 설명할 수 있다.
- [ ] 전체 구조도를 문서 없이 그릴 수 있다.

---

## Stage C — V4: 실제 위치와 명령

1. SSH 최종 해석값을 확인하는 명령은?
2. TCP LISTEN 상태를 확인하는 대표 명령은?
3. 사용자 그룹 멤버십을 확인하는 명령은?
4. ACL 상태를 확인하는 명령은?
5. Agent 환경변수 파일의 현재 저장소 구현 예시는 어디인가?
6. monitor.sh의 최종 배치 경로는 어디인가?
7. monitor 로그 경로는 어디인가?
8. `agent-admin` crontab을 확인하는 방법은?
9. logrotate 설정의 핵심 두 값은?
10. 최근 monitor 로그를 확인하는 대표 명령은?

### 답안 핵심

```text
1. sshd -T
2. ss -lntp 또는 ss -lntH
3. id <user>
4. getfacl <path>
5. /etc/agent-app/agent.env — 현재 저장소 구현 예시
6. $AGENT_HOME/bin/monitor.sh
7. /var/log/agent-app/monitor.log
8. sudo -u agent-admin crontab -l
9. size 10M / rotate 10
10. tail -n ... /var/log/agent-app/monitor.log
```

---

## Stage D — V4/V5: 장애 대응

### Q1. `Permission denied`

확인 순서를 말한다.

**핵심:**

```text
실행 사용자
→ id
→ 전체 부모 경로 통과 권한
→ namei -l
→ getfacl
→ ACL mask
→ 최소 수정
→ 동일 테스트 재실행
```

### Q2. Agent가 READY가 되지 않는다.

**핵심:**

```text
실행 사용자
→ AGENT_* 환경
→ key 파일 존재/권한
→ upload/log 경로 권한
→ Boot Sequence 최초 실패 단계
→ process
→ 15034 LISTEN
```

### Q3. Process는 있는데 15034가 없다.

**핵심:**

```text
실제 PID/명령
→ 앱 출력/초기화 오류
→ AGENT_PORT
→ 15034 점유 여부
→ bind address
→ key/권한/환경 문제
```

### Q4. `Address already in use`

**핵심:**

```text
누가 해당 포트를 사용 중인지 ss로 확인
→ 기존 프로세스가 정상 서비스인지 확인
→ 중복 실행인지 확인
→ 원인을 제거한 후 재실행
```

### Q5. 수동 monitor는 성공하지만 cron은 실패한다.

**핵심:**

```text
agent-admin crontab
→ cron service
→ 실행 권한
→ PATH
→ 환경변수
→ 최소 환경에서 monitor 실행
→ 실제 로그 증가 재확인
```

### Q6. 로그가 급증한다.

**핵심:**

```text
단기: 디스크 사용량 + 증가 원인 + 회전 상태 + 서비스 공간 확보
중기: 발생 원인 수정 + 회전/보존 정책 + 알림/아카이브 검토
```

---

# 5. 평가 실전 질문 — WHAT → WHY → HOW → PROOF

다음 질문은 B1-1 평가 항목을 학습용으로 재배열한 것이다.

## 5.1 SSH

**질문:** SSH 포트를 왜 20022로 바꾸고 Root 원격 로그인을 막았는가?

답변 구조:

```text
WHAT  : Port 20022, PermitRootLogin no
WHY   : 미션 요구 충족 + Root 직접 노출 감소 + 기본 22 자동 스캔 노이즈 감소
HOW   : SSH 설정 적용 후 문법검사와 서비스/socket 반영
PROOF : sshd -T + ss LISTEN + 가능한 경우 실제 새 SSH 접속
```

주의:

> 포트 변경만으로 보안이 완성된다고 설명하지 않는다.

## 5.2 Firewall

**질문:** 왜 20022와 15034만 허용했는가?

```text
WHAT  : 필요한 두 TCP 포트만 허용
WHY   : 불필요한 네트워크 공격 표면 축소
HOW   : UFW 또는 firewalld 규칙
PROOF : 실제 firewall 상태와 허용 규칙
```

## 5.3 사용자·그룹·ACL

**질문:** 왜 common/core를 나눴는가?

```text
WHAT  : common=3명, core=admin+dev
WHY   : 최소 권한과 역할 분리
HOW   : group membership + chmod + ACL
PROOF : id / ls -ld / getfacl / 실제 allow-deny 테스트
```

## 5.4 monitor.sh

**질문:** 왜 process와 port를 둘 다 확인하는가?

```text
WHAT  : process + 15034 LISTEN Health Check
WHY   : process가 있어도 서비스 포트가 준비되지 않을 수 있음
HOW   : pgrep + ss
PROOF : 정상 0 / process 실패 1 / port 실패 1 시나리오
```

## 5.5 Resource Monitoring

**질문:** CPU/MEM/DISK는 어떻게 구하고 왜 임계값을 사용하는가?

```text
WHAT  : CPU/MEM/DISK 사용률 수집
WHY   : 자원 상태를 수치로 판단하고 위험 신호를 일관되게 표시
HOW   : 현재 구현의 /proc/stat, /proc/meminfo, df 기반 수집
PROOF : 실제 monitor 출력과 monitor.log
```

## 5.6 Log

**질문:** 왜 로그 포맷을 고정하고 `>>`로 기록하는가?

```text
WHAT  : timestamp/PID/CPU/MEM/DISK_USED 고정 포맷
WHY   : 시간 흐름 추적 + 후속 파싱 가능
HOW   : append redirection
PROOF : 여러 줄이 시간순으로 누적된 monitor.log
```

## 5.7 cron

**질문:** 왜 cron 실행 환경을 별도로 고려했는가?

```text
WHAT  : agent-admin이 매분 monitor.sh 실행
WHY   : 사람이 실행하지 않아도 지속 관제
HOW   : 명시적 PATH/환경파일/절대경로
PROOF : crontab + 1~2분 후 실제 로그 증가
```

## 5.8 logrotate

**질문:** 10MB/10개 정책을 어떻게 구현했는가?

```text
WHAT  : size 10M / rotate 10
WHY   : 로그 무한 증가와 디스크 고갈 방지
HOW   : 현재 구현은 logrotate 사용
PROOF : 설정 파일 + 검사/회전 결과 + 회전 파일
```

---

# 6. 공식 평가 항목 기반 최종 체크 시트

아래는 실제 평가 문서의 네 영역을 복습용 체크로 옮긴 것이다.

## 영역 1 — 요구사항 구현 및 동작

- [ ] SSH가 `20022`에서 동작하는 것을 확인했다.
- [ ] Root 원격 로그인이 차단된 것을 확인했다.
- [ ] Firewall이 활성 상태다.
- [ ] `20022/tcp`, `15034/tcp`만 필요한 포트로 허용되어 있다.
- [ ] 사용자 3명과 그룹 2명이 요구 구조대로 구성되어 있다.
- [ ] Agent Boot Sequence 5단계가 모두 `[OK]`다.
- [ ] `Agent READY`를 확인했다.
- [ ] Agent가 Root가 아닌 일반 사용자로 실행된다.
- [ ] `0.0.0.0:15034 LISTEN`을 확인했다.
- [ ] monitor.sh가 process/port 실패에서 `exit 1`을 낸다.
- [ ] 정상 monitor 실행이 로그를 남긴다.
- [ ] `monitor.log`가 지정 포맷으로 누적된다.
- [ ] cron이 매분 실행된다.
- [ ] 실제 시간 경과 후 로그 증가를 확인했다.
- [ ] 10MB/10개 로그 관리 정책을 설정했다.

## 영역 2 — 구현 방식과 명령 설명

- [ ] `pgrep`/`ps` 사용 이유를 설명할 수 있다.
- [ ] `ss` 사용 이유를 설명할 수 있다.
- [ ] CPU 수집 방식을 설명할 수 있다.
- [ ] MEM 수집 방식을 설명할 수 있다.
- [ ] DISK 수집 방식을 설명할 수 있다.
- [ ] 로그 포맷을 고정한 이유를 설명할 수 있다.
- [ ] `agent-dev` 소유 / `agent-admin` 실행이 가능한 권한 구조를 설명할 수 있다.
- [ ] cron 환경과 로그인 셸 환경 차이를 설명할 수 있다.
- [ ] logrotate를 분리한 이유를 설명할 수 있다.

## 영역 3 — 보안·권한·운영 원리

- [ ] SSH 포트 변경의 효과와 한계를 함께 설명할 수 있다.
- [ ] Root 원격 로그인 차단의 보안 목적을 설명할 수 있다.
- [ ] `api_keys`와 운영 로그를 core로 제한한 이유를 설명할 수 있다.
- [ ] 최소 권한 원칙을 B1-1 실제 구조로 설명할 수 있다.
- [ ] Fail-fast와 Warning-and-Continue 차이를 설명할 수 있다.
- [ ] `>`와 `>>`의 차이를 설명할 수 있다.
- [ ] 로그 수명주기 관리가 필요한 이유를 설명할 수 있다.

## 영역 4 — 응용과 장애 대응

- [ ] Nginx 같은 다른 서비스로 대상이 바뀌면 process/port/log/threshold를 어떻게 바꿀지 설명할 수 있다.
- [ ] process가 있는데 port가 없는 문제를 순서대로 진단할 수 있다.
- [ ] Permission denied를 계층적으로 진단할 수 있다.
- [ ] 수동 monitor 성공 / cron 실패를 진단할 수 있다.
- [ ] 로그 급증 시 단기/중기 대응을 나누어 설명할 수 있다.
- [ ] 장애 해결 후 원래 검증 명령으로 재검증해야 하는 이유를 설명할 수 있다.

---

# 7. Vocabulary Gate V1~V5 최종 판정

이 판정은 **학습 상태 관리용**이며 코디세이 공식 평가점수가 아니다.

## V1 — Seen

다음 Top Core 28개를 보고 낯설지 않아야 한다.

```text
Linux
User Account
Root / Superuser
sudo
User / Group
File Permission
ACL
Least Privilege
SSH
sshd
Port
TCP
Firewall
UFW / firewalld
Process
PID
LISTEN
Environment Variable
Shell Script
Bash
System Monitoring
Health Check
CPU/MEM/DISK Utilization
Log
cron
crontab
Log Rotation
Exit Status
```

- [ ] V1 완료

## V2 — Meaning

Top Core 각각을 **한 문장**으로 설명한다.

- [ ] “무엇인지”를 자기 말로 설명할 수 있다.
- [ ] 명령어 이름과 개념을 구분한다.

- [ ] V2 완료

## V3 — Relation

다음 관계를 설명한다.

```text
User → Group → Permission → ACL → Least Privilege
sshd → TCP Port → LISTEN → Firewall → Connection
Environment → Agent → Process → Port → Health Check
Metric → Threshold → Warning → Log
cron → monitor.sh → monitor.log → logrotate
```

- [ ] V3 완료

## V4 — Locate / Apply

실제 B1-1에서 다음의 위치·명령·결과를 찾을 수 있다.

- [ ] SSH 설정과 해석값
- [ ] Firewall 상태
- [ ] 사용자/그룹 멤버십
- [ ] ACL
- [ ] Agent 환경변수
- [ ] Agent process와 15034
- [ ] monitor.sh
- [ ] monitor.log
- [ ] agent-admin crontab
- [ ] logrotate 정책

- [ ] V4 완료

## V5 — Explain / Defend

다음 질문에 문서 없이 답한다.

- [ ] 왜 20022인가?
- [ ] 왜 Root를 차단하는가?
- [ ] 왜 common/core를 나누는가?
- [ ] 왜 process와 port를 둘 다 보는가?
- [ ] 왜 어떤 항목은 WARNING이고 어떤 항목은 exit 1인가?
- [ ] 왜 cron 환경을 따로 고려하는가?
- [ ] 왜 logrotate가 필요한가?
- [ ] 문제 발생 시 어떤 순서로 진단하는가?
- [ ] 무엇을 Evidence로 제시할 것인가?

- [ ] V5 완료

---

# 8. B1-1 학습 상태 판정

## 8.1 LEARNING READY

다음이 모두 가능하면 B1-1 학습 콘텐츠 관점에서 다음 미션으로 넘어갈 준비가 된 것이다.

```text
V1 → 용어를 본 적 있다
V2 → 의미를 설명한다
V3 → 관계를 설명한다
V4 → 실제 위치와 명령을 찾는다
V5 → 평가 질문에 근거와 함께 답한다
```

## 8.2 RUNTIME VERIFIED

학습 상태와 별도로 실제 환경에서 다음이 검증되어야 한다.

```text
SSH 실제 상태
Firewall 실제 상태
계정/권한 실제 상태
Agent 실제 READY/LISTEN
monitor 실제 정상/장애 실행
cron 실제 자동 실행
로그 실제 누적
logrotate 실제 정책/동작
Evidence 확보
```

즉:

```text
LEARNING READY ≠ RUNTIME VERIFIED
```

## 8.3 MISSION PASS

최종 PASS는 실제 평가 기준과 Evidence에 의해 판단한다. 이 복습 문서 자체는 PASS를 선언하지 않는다.

---

# 9. 20분 최종 복습 루틴

## 0~3분 — 한 장 카드

- 전체 흐름 한 번 읽기
- 숫자 8개 암기 확인
- 사용자/그룹 구조 확인

## 3~7분 — 백지 구조

문서를 닫고 다음을 그린다.

```text
권한 흐름
네트워크 흐름
Agent/monitor 흐름
자동화/로그 흐름
```

## 7~12분 — 장애 3개

무작위로 세 개를 고른다.

```text
Permission denied
Process O / Port X
cron failure
SSH 20022 failure
monitor.log write failure
logrotate failure
```

각각:

```text
증상 → 조회 → 계층 → 원인 가설 → 최소 수정 → 재검증
```

으로 말한다.

## 12~17분 — 평가 3문제

`WHAT → WHY → HOW → PROOF`로 답한다.

## 17~20분 — V1~V5

V1~V5에서 막히는 곳만 표시하고 다음 복습 대상으로 남긴다.

---

# 10. B1-1 학습 패키지 완료 체크

## 생성된 학습 자산

- [x] B1-1 Mission Vocabulary
- [x] B1-1 Top Core 입문자 학습 가이드
- [x] B1-1 Level 2 입문자 무오류 실행 가이드
- [x] B1-1 Level 3~5 통합 학습 가이드
- [x] B1-1 통합 복습 패키지

## 학습자가 실제로 해야 하는 것

- [ ] Top Core 28개를 자기 말로 설명
- [ ] 전체 구조도 백지 재현
- [ ] Level 2 실제 실행 또는 실행 결과 추적
- [ ] 장애 시나리오 최소 3개 구두 진단
- [ ] 평가 질문 최소 5개 WHAT/WHY/HOW/PROOF 답변
- [ ] V1~V5 자기점검
- [ ] 실제 Evidence와 평가 항목 연결

---

# 11. 다음 미션으로 연결 — B1-2

B1-1에서 익힌 다음 개념은 B1-2의 Linux 프로세스·시스템 리소스 트러블슈팅으로 직접 이어진다.

```text
B1-1
Process / PID
CPU / Memory
Log
Health Check
Failure / Warning
Troubleshooting
Evidence
   ↓
B1-2
Memory Leak / OOM
CPU Spike / Latency
Deadlock
System Resource Diagnosis
Log-based Root Cause Analysis
```

따라서 B1-2에서는 B1-1의 용어를 처음부터 다시 외우기보다 `REVIEW → APPLY → DEEPEN`으로 전환한다.

---

## 마지막 한 문장

> **B1-1은 Linux 명령어 암기 미션이 아니라, 권한·네트워크·프로세스·관제·자동화의 실제 상태를 확인하고 장애를 근거와 함께 설명하는 기초 운영 훈련이다.**
