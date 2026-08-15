# B1-1 Review Pack

**역할:** Level 0~5를 `기억 → 관계 → 적용 → 장애 대응 → 평가 설명`으로 통합 복습  
**목표:** B1-1 학습 콘텐츠 확장을 닫고 LEARNING READY 여부를 확인한다.

> Review 완료는 Runtime PASS가 아니다. SSH, Firewall, Agent, `monitor.sh`, cron, logrotate의 실제 동작은 별도 Evidence가 있어야 한다.

---

## 1. 한 장 핵심 카드

```text
Linux
  ↓
User / Group / Permission / ACL / PoLP
  ↓
SSH 20022 / Root Login Disable
  ↓
Firewall 20022 + 15034
  ↓
AGENT_* / Key
  ↓
Agent non-root
  ↓
Boot Sequence 5 × [OK]
  ↓
Agent READY
  ↓
0.0.0.0:15034 LISTEN
  ↓
monitor.sh
  ├─ process fail → exit 1
  ├─ port fail    → exit 1
  ├─ firewall     → WARNING
  ├─ CPU > 20%    → WARNING
  ├─ MEM > 10%    → WARNING
  └─ DISK > 80%   → WARNING
  ↓
monitor.log
  ↓
agent-admin cron / every minute
  ↓
logrotate / 10MB / 10 files
  ↓
Evidence
```

---

## 2. 숫자 카드

| 질문 | 답 |
|---|---|
| SSH Port | `20022` |
| Agent Port | `15034` |
| CPU Warning | `> 20%` |
| MEM Warning | `> 10%` |
| DISK Warning | `> 80%` |
| cron | 매분 |
| logrotate size | `10MB` |
| rotate count | `10개` |
| monitor mode | `750` |

---

## 3. 권한 카드

```text
agent-common = agent-admin + agent-dev + agent-test
agent-core   = agent-admin + agent-dev

upload_files → common
api_keys     → core
운영 로그     → core

monitor.sh
owner = agent-dev
group = agent-core
mode  = 750
executor = agent-admin cron
```

---

## 4. 관계 카드 12장

### Card 1 — User / Group

**Q:** 왜 사용자를 세 명, 그룹을 두 개로 나누는가?  
**A:** 운영·개발·QA 역할을 구분하면서 공용 자원과 핵심 자원의 접근 범위를 다르게 하기 위해서다.

### Card 2 — PoLP

**Q:** 왜 `chmod 777`로 해결하면 안 되는가?  
**A:** 동작은 될 수 있지만 권한 경계가 사라져 미션의 최소 권한 목적을 잃는다.

### Card 3 — chmod / ACL

**Q:** 둘의 역할 차이는?  
**A:** chmod/chown은 기본 owner/group/others 경계를 만들고 ACL은 더 세밀한 사용자·그룹 규칙과 상속을 보완한다.

### Card 4 — SSH config / LISTEN

**Q:** `Port 20022`를 적으면 끝인가?  
**A:** 아니다. 문법, 최종 해석값, 실제 LISTEN, 가능하면 새 접속까지 확인한다.

### Card 5 — LISTEN / Firewall

**Q:** LISTEN이면 외부 접속이 항상 가능한가?  
**A:** 아니다. Firewall 또는 외부 네트워크 정책이 차단할 수 있다.

### Card 6 — Process / Port

**Q:** process가 있으면 서비스가 정상인가?  
**A:** 아니다. 초기화 또는 bind 실패로 port가 LISTEN하지 않을 수 있다.

### Card 7 — Fail-fast / Warning

**Q:** 왜 process/port는 `exit 1`, CPU는 WARNING인가?  
**A:** process/port 실패는 서비스 자체의 Health 실패이고 자원 초과는 운영 위험 신호이기 때문이다.

### Card 8 — cron Environment

**Q:** 수동 실행은 되는데 cron에서 실패하는 이유는?  
**A:** cron은 PATH와 환경변수가 제한된 별도 실행 환경이기 때문이다.

### Card 9 — `>` / `>>`

**Q:** 로그에는 왜 `>>`인가?  
**A:** 기존 이력을 유지하면서 뒤에 추가해야 시간 흐름을 추적할 수 있기 때문이다.

### Card 10 — Log Rotation

**Q:** 왜 로그를 계속 쌓기만 하면 안 되는가?  
**A:** 디스크 고갈 위험이 있으므로 크기·개수·보존 정책이 필요하다.

### Card 11 — Evidence

**Q:** 설정 파일만 보여 주면 충분한가?  
**A:** 아니다. 실제 LISTEN, process, 로그 증가 같은 런타임 결과가 필요하다.

### Card 12 — Evaluation

**Q:** 평가 답변 순서는?  
**A:** `WHAT → WHY → HOW → PROOF`.

---

## 5. 5분 백지 복습

### 1분 — 전체 흐름

문서 없이 다음 10개를 순서대로 쓴다.

```text
User/Group
Permission/ACL
SSH
Firewall
Environment/Key
Agent
monitor.sh
cron
logrotate
Evidence
```

### 1분 — 숫자

```text
SSH = ?
Agent = ?
CPU = ?
MEM = ?
DISK = ?
Log size = ?
Log count = ?
Cron = ?
```

### 1분 — 권한

```text
common = ?
core = ?
monitor owner/group/mode = ?
cron executor = ?
```

### 1분 — 장애

두 상황의 첫 확인 순서를 말한다.

```text
A. Process는 있는데 15034가 없다.
B. 수동 monitor는 되는데 cron에서는 안 된다.
```

### 1분 — 설명

다음 하나를 `WHAT → WHY → HOW → PROOF`로 말한다.

```text
SSH 20022 + Root 차단
User/Group 권한 설계
monitor.sh Health Check
```

---

## 6. Stage A — V1/V2 구두 퀴즈

1. Linux는 무엇인가?
2. SSH는 무엇인가?
3. sshd는 무엇인가?
4. TCP Port는 무엇을 구분하는가?
5. LISTEN은 어떤 상태인가?
6. Firewall은 어떤 역할을 하는가?
7. Process와 PID는 어떤 관계인가?
8. ACL은 왜 쓰는가?
9. PoLP는 무엇인가?
10. Environment Variable은 왜 필요한가?
11. Health Check는 무엇인가?
12. cron과 crontab은 어떤 관계인가?
13. Log Rotation은 왜 필요한가?

통과 기준: 핵심 의미를 한 문장으로 말할 수 있다.

---

## 7. Stage B — V3 관계 퀴즈

1. User·Group·Permission·ACL은 어떻게 연결되는가?
2. `agent-common`과 `agent-core`를 왜 분리하는가?
3. `sshd config → LISTEN → Firewall → Client` 흐름은?
4. 왜 process와 port를 둘 다 확인하는가?
5. 왜 resource warning은 즉시 종료하지 않는가?
6. 왜 cron에서 environment 차이가 문제가 되는가?
7. 왜 monitor와 logrotate 책임을 나누는가?
8. Evidence는 구현과 어떤 관계인가?

통과 기준: 두 개 이상의 개념을 원인·결과로 연결해 설명할 수 있다.

---

## 8. Stage C — V4 실제 위치 퀴즈

1. SSH 최종 해석값 확인 명령은?
2. TCP LISTEN 상태 확인 대표 명령은?
3. Group membership 확인 명령은?
4. ACL 확인 명령은?
5. 현재 구현의 Agent 환경 파일은?
6. `monitor.sh` 최종 경로는?
7. monitor 로그 경로는?
8. `agent-admin` crontab 확인 명령은?
9. logrotate 핵심 두 값은?
10. 최근 monitor 로그 확인 명령은?

핵심 답:

```text
sshd -T
ss -lntp
id
getfacl
/etc/agent-app/agent.env
/home/agent-admin/agent-app/bin/monitor.sh
/var/log/agent-app/monitor.log
sudo -u agent-admin crontab -l
size 10M / rotate 10
tail
```

---

## 9. Stage D — V4/V5 장애·평가 퀴즈

1. `Permission denied`가 발생하면 어떤 순서로 확인하는가?
2. 20022가 설정돼 있지만 LISTEN하지 않으면?
3. Process는 있는데 15034가 없으면?
4. `Address already in use`이면?
5. 수동 monitor 성공, cron 실패이면?
6. logrotate 후 로그 쓰기가 실패하면?
7. CPU Warning과 Health failure를 왜 구분하는가?
8. 평가에서 실제 Evidence가 없는 부분은 어떻게 답하는가?

통과 기준: `증상 → 조회 → 계층 → 최소 수정 → 재검증 → Evidence`를 유지한다.

---

## 10. 평가 체크 시트

### 구현·동작

- [ ] SSH `20022`
- [ ] Root remote login blocked
- [ ] Firewall active / required ports
- [ ] User / Group 구성
- [ ] Agent 5 × `[OK]`
- [ ] `Agent READY`
- [ ] Agent non-root
- [ ] `0.0.0.0:15034 LISTEN`
- [ ] `monitor.sh` process / port failure `exit 1`
- [ ] Resource Warning
- [ ] `monitor.log` append
- [ ] cron every minute + actual log growth
- [ ] `10MB / 10 files` rotation policy

### 설명

- [ ] `pgrep` / `ss` 선택 이유
- [ ] CPU/MEM/DISK 수집 방식
- [ ] `agent-dev` owner / `agent-admin` executor 구조
- [ ] PoLP / ACL 설명
- [ ] `>` / `>>` 설명
- [ ] Fail-fast / Warning 설명
- [ ] Process exists but no port 장애 대응
- [ ] Log growth 대응

---

## 11. Vocabulary Gate V1~V5 최종 판정

| Gate | 통과 질문 | 상태 |
|---|---|---|
| V1 | 핵심 용어를 보고 알아보는가? | [ ] |
| V2 | Top Core 의미를 쉬운 말로 설명하는가? | [ ] |
| V3 | 핵심 관계도를 문서 없이 그리는가? | [ ] |
| V4 | 실제 파일·설정·명령에서 찾고 적용하는가? | [ ] |
| V5 | WHY/HOW/PROOF까지 자기 말로 설명하는가? | [ ] |

### LEARNING READY

V1~V5 중 B1-1 핵심 항목을 충족하면 학습 콘텐츠 기준으로 `LEARNING READY`로 본다.

### RUNTIME VERIFIED

실제 시스템에서 요구 기능이 모두 실행·검증되고 Evidence가 있어야 한다.

### MISSION PASS

Evaluation과 제출 기준까지 충족해야 한다.

```text
LEARNING READY ≠ RUNTIME VERIFIED ≠ MISSION PASS
```

---

## 12. B1-1 → B1-2 Bridge

B1-2에서 다시 쓰는 B1-1 개념:

```text
Process / PID
CPU / Memory
Log
Monitoring
Health Check
Verification
Troubleshooting
Evidence
```

B1-2에서는 이들을 NEW로 다시 외우지 않는다.

```text
B1-1: NEW / APPLY
       ↓
B1-2: REVIEW / DEEPEN
```

B1-1은 “정상 상태를 관제하는 법”을 만들었다면, B1-2는 “실제로 이상해진 process와 resource를 진단하는 법”으로 확장된다.

---

## 13. 다음 단계

- 선택 심화가 필요하면: [B1-1 Advanced](./b1-1-90-advanced.md)
- 다음 미션으로 이동하면: [B1-2 Mission Vocabulary](../b1-2.md)

---

[← Level 5](./b1-1-60-level-5-evaluation.md) · [B1-1 Index](./b1-1-00-index.md) · [Advanced →](./b1-1-90-advanced.md)
