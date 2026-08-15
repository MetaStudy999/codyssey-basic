# B1-1 Level 3~5 통합 학습 가이드

**미션:** 컴퓨터가 알아서 자기 상태를 점검하게 만들기  
**단계:** B1-1 Level 3 구조·동작 원리 + Level 4 검증·트러블슈팅 + Level 5 평가 설명  
**목표:** 명령을 실행하는 단계에서 더 나아가 `왜 그렇게 구성했는가 → 어디서 문제가 생기는가 → 어떻게 증명하고 설명하는가`까지 연결한다.  
**근거:** B1-1 Mission Vocabulary의 Level 3~5, 원본 평가 항목, 현재 B1-1 미션 저장소의 실행·트러블슈팅·평가 대비 문서

> 이 문서는 새로운 미션 요구사항을 추가하지 않는다. 원본 미션의 요구사항과 현재 저장소에서 실제로 사용한 구현·검증 방식을 학습 관점에서 재구성한다. 실제 Runtime PASS는 문서를 읽었다는 이유로 부여하지 않으며, 실제 명령 출력·로그·스크린샷 Evidence가 있어야 한다.

---

# 1. B1-1을 세 층으로 이해한다

B1-1의 Level 3~5는 다음 세 질문으로 구분하면 쉽다.

```text
Level 3 — WHY / HOW
왜 이런 구조이고, 내부에서 어떻게 연결되는가?

Level 4 — WHAT FAILED / HOW TO PROVE
어디가 실패했고, 무엇을 확인해야 하며, 어떻게 복구·재검증하는가?

Level 5 — EXPLAIN / DEFEND
평가자에게 무엇을 했고, 왜 그렇게 했고, 어떻게 검증했는지 설명할 수 있는가?
```

한 문장으로 압축하면:

> **구조를 이해하고 → 장애를 층별로 분리하고 → 근거와 함께 설명한다.**

---

# 2. 전체 구조 지도

```text
[사용자 / 그룹]
      ↓
[owner / group / others]
      ↓
[chown / chmod / ACL / setgid]
      ↓
[최소 권한 경계]

                 ┌───────────────┐
                 │               ↓
[sshd 설정] → [TCP Port 20022] → [LISTEN]
                 │               ↓
                 │           [Firewall]
                 │               ↓
                 └──────────→ 실제 SSH 접근

[환경 변수 / key / 권한]
      ↓
[Agent 프로세스]
      ↓
[TCP 15034 LISTEN]
      ↓
[monitor.sh]
   ├─ process 실패 → exit 1
   ├─ port 실패    → exit 1
   ├─ firewall      → WARNING
   ├─ CPU/MEM/DISK  → WARNING 조건
   └─ monitor.log 누적
      ↓
[cron 매분 실행]
      ↓
[logrotate 10MB / 10개]
      ↓
[Evidence]
```

이 지도에서 가장 중요한 규칙은 다음이다.

```text
설정값 ≠ 실제 동작
프로세스 존재 ≠ 서비스 정상
명령 성공 메시지 ≠ 최종 상태 검증
문서 작성 ≠ Runtime PASS
```

---

# PART A. Level 3 — 구조·동작 원리

# 3. 다중 사용자 환경과 권한 모델

B1-1은 한 사람만 쓰는 개인 PC가 아니라 여러 역할의 사용자가 함께 존재하는 Linux 서버를 전제로 한다.

원본 요구 역할:

```text
agent-admin  → 운영·관리, cron 실행
agent-dev    → 개발·운영, monitor.sh 소유
agent-test   → QA·권한 테스트
```

원본 요구 그룹:

```text
agent-common = admin + dev + test
agent-core   = admin + dev
```

이 구조의 목적은 **역할별 권한 경계**를 만드는 것이다.

## 3.1 owner / group / others

Linux 기본 권한은 세 대상을 나눈다.

```text
owner   = 파일/디렉터리 소유자
 group  = 해당 객체의 그룹
others  = 그 외 사용자
```

예를 들어 `monitor.sh`가 다음 상태라면:

```text
owner = agent-dev
group = agent-core
mode  = 750
```

의미는:

```text
7 = owner  rwx
5 = group  r-x
0 = others ---
```

따라서:

```text
agent-dev   → owner 권한으로 실행·수정 가능
agent-admin → agent-core 그룹 권한으로 읽기·실행 가능
agent-test  → 권한 없음
```

## 3.2 권한 비트와 8진수 표기

```text
r = 4
w = 2
x = 1
```

조합:

```text
7 = 4+2+1 = rwx
5 = 4+0+1 = r-x
0 = 0+0+0 = ---
```

따라서 `750`을 단순 숫자로 외우지 않고:

```text
소유자 = 완전 제어
그룹   = 읽기 + 실행
기타   = 차단
```

으로 해석한다.

## 3.3 DAC와 ACL

기본 Linux 권한 모델은 소유자·그룹·기타 사용자 중심의 **임의 접근 제어 (Discretionary Access Control, DAC)** 구조다.

B1-1에서는 이 기본 구조만으로 부모 디렉터리 통과나 기본 상속 정책을 세밀하게 표현하기 어려울 수 있어 ACL을 함께 사용한다.

```text
chmod/chown = 기본 경계
ACL         = 세부 예외·추가 규칙
```

현재 저장소 구현은 `/home/agent-admin` 전체를 755로 넓게 열지 않고 `agent-common`에 통과 권한만 주는 방식으로 ACL을 사용한다.

```text
/home/agent-admin
└─ group:agent-common:--x
```

이것은 **홈 전체 읽기 허용**과 다르다.

## 3.4 setgid가 필요한 이유

공용 디렉터리에서 새 파일이 계속 생기면 파일의 그룹이 제각각 바뀌어 협업 권한이 흔들릴 수 있다.

현재 구현에서 `2770`처럼 맨 앞에 `2`를 사용하는 이유는 디렉터리의 setgid bit를 통해 새 파일·하위 디렉터리가 공용 그룹을 이어받게 하기 위함이다.

```text
공용 디렉터리
    ↓
새 파일 생성
    ↓
그룹 일관성 유지
```

## 3.5 최소 권한 원칙

B1-1 권한 설계의 핵심 질문은:

> “이 사용자가 이 자원에 정말 읽기/쓰기 권한이 필요한가?”

이다.

그래서:

```text
upload_files → common 사용
api_keys     → core만 사용
운영 로그     → core만 사용
```

으로 나눈다.

### 기억 문장

> **권한은 동작하게 만드는 수단이 아니라, 필요한 동작만 허용하는 경계다.**

---

# 4. SSH, 데몬, 포트, LISTEN, 방화벽의 관계

입문자가 가장 많이 혼동하는 부분은 `SSH 설정`, `실제 포트`, `방화벽`을 하나로 보는 것이다.

실제로는 서로 다른 층이다.

```text
1. sshd 설정
   ↓
2. sshd 또는 ssh.socket이 TCP 20022에서 LISTEN
   ↓
3. 방화벽이 20022/tcp를 허용
   ↓
4. 클라이언트가 네트워크를 통해 접속
```

## 4.1 데몬 (Daemon)

`sshd`는 SSH 요청을 받아 처리하는 서버 프로그램이다.

```text
SSH client
   ↓
TCP connection
   ↓
sshd
```

설정 파일에 `Port 20022`를 적어도 실제 프로세스/socket이 그 포트에서 기다리지 않으면 접속은 되지 않는다.

## 4.2 TCP Listening Socket

`LISTEN`은 서버가 해당 포트에서 새 연결을 기다리고 있다는 의미다.

B1-1에서는 다음 두 포트가 중요하다.

```text
20022 → SSH
15034 → Agent
```

따라서 검증은 설정 파일만 보는 것이 아니라 실제 socket 상태를 확인해야 한다.

```bash
ss -lntp
```

## 4.3 Port Binding

프로그램이 특정 IP 주소와 포트 조합에 socket을 연결하는 것을 바인딩이라고 이해하면 된다.

원본 Agent 성공 기준의 핵심은:

```text
0.0.0.0:15034 LISTEN
```

이다.

`0.0.0.0`은 현재 IPv4 인터페이스 전체에서 해당 포트를 기다리는 와일드카드 바인딩으로 이해한다.

## 4.4 Firewall은 LISTEN과 다르다

```text
LISTEN = 프로그램이 문 뒤에서 기다리고 있음
Firewall ALLOW = 바깥에서 그 문까지 통과하도록 허용
```

따라서:

```text
15034 LISTEN + firewall block → 외부 접근 실패 가능
15034 not LISTEN + firewall allow → 서비스 자체 없음
```

이다.

## 4.5 SSH 포트 변경과 Root 차단

원본 평가에서는 두 설정의 보안 목적을 설명해야 한다.

```text
Port 20022
PermitRootLogin no
```

평가 답변에서 중요한 균형은 다음이다.

- 포트 변경은 기본 22번을 대상으로 하는 자동화된 스캔·노이즈를 줄이는 데 도움이 될 수 있다.
- 포트 변경만으로 강력한 인증을 대체하지 않는다.
- Root 원격 로그인을 차단하면 최고 권한 계정이 직접 공격 표면에 노출되는 것을 줄일 수 있다.
- 일반 사용자로 로그인한 뒤 필요한 작업만 sudo로 수행하는 방식이 최소 권한과 추적성에 더 적합하다.

### 기억 문장

> **설정 → 실제 LISTEN → 방화벽 → 실제 접속, 네 층을 따로 확인한다.**

---

# 5. 실행 전 검증, Fail-fast, Warning-and-Continue

B1-1 `monitor.sh`의 중요한 설계 원리는 모든 이상 상태를 같은 방식으로 처리하지 않는다는 점이다.

## 5.1 Preflight Check

시스템을 변경하기 전에 현재 상태를 읽기 전용으로 확인한다.

현재 미션 저장소의 `scripts/preflight.sh`는 다음을 확인한다.

- Linux/Ubuntu 여부
- PID 1 / systemd
- sudo
- sshd
- ufw
- cron
- ACL 도구
- ss
- logrotate
- 기타 monitor에 필요한 명령

핵심은:

```text
변경하기 전에 환경을 먼저 안다.
```

## 5.2 Fail-fast

서비스 자체가 정상 상태가 아니면 이후 로그 수집을 정상으로 가장하지 않고 즉시 실패한다.

원본 요구:

```text
Agent process 없음 → exit 1
15034 LISTEN 없음  → exit 1
```

이것이 fail-fast에 해당한다.

## 5.3 Warning-and-Continue

반대로 다음은 위험 신호이지만 상태 수집을 계속할 수 있다.

```text
Firewall inactive
CPU > 20%
MEM > 10%
DISK_USED > 80%
```

원본은 이 경우 WARNING 후 계속 실행하도록 요구한다.

## 5.4 상태 코드

현재 저장소 구현은 다음처럼 구분한다.

```text
0 = 정상
1 = Agent Health 실패
2 = monitor 실행 환경/필수 명령/로그 설정 오류
```

원본 필수 요구는 프로세스·포트 실패 시 `exit 1`이다. 종료 코드 `2`는 현재 구현이 운영 설정 오류를 더 명확히 구분하기 위해 사용한 구현 선택이다.

### 기억 문장

> **서비스가 죽으면 실패, 위험하면 경고, 설정 자체가 깨졌으면 별도 오류로 구분한다.**

---

# 6. 관제 데이터와 임계값 정책

B1-1은 단순히 “CPU를 본다”가 아니라 상태를 일정한 규칙으로 기록하는 관제 구조를 익히는 미션이다.

```text
샘플 수집
   ↓
수치 계산
   ↓
임계값 비교
   ↓
WARNING 여부 판단
   ↓
같은 로그 포맷으로 기록
```

## 6.1 CPU

현재 저장소 구현은 `/proc/stat`을 짧은 간격으로 두 번 읽어 누적 counter 차이로 CPU 사용률을 계산한다.

## 6.2 MEM

`/proc/meminfo`에서 `MemTotal`, `MemAvailable`을 사용한다.

## 6.3 DISK

원본은 Root partition의 Used %를 요구하므로 현재 구현은:

```bash
df -P /
```

결과의 사용률을 읽는다.

## 6.4 Threshold

원본 임계값:

```text
CPU       > 20%
MEM       > 10%
DISK_USED > 80%
```

중요한 점은 `>=`가 아니라 `>`라는 것이다.

```text
20.00 → 초과 아님
20.01 → 초과
```

## 6.5 관제의 목적

임계값은 “이 값을 넘으면 서버가 반드시 장애”라는 절대 법칙이 아니라, 원본 미션에서 정한 **경고 정책 기준**이다.

### 기억 문장

> **수집한 숫자는 임계값과 비교될 때 운영 신호가 된다.**

---

# 7. 로그 포맷, 누적, 추적성

원본 요구 로그 형식:

```text
[YYYY-MM-DD HH:MM:SS] PID:... CPU:..% MEM:..% DISK_USED:..%
```

로그가 유용하려면 매번 다른 자유 형식보다 같은 규칙으로 누적되어야 한다.

```text
같은 필드
+ 같은 순서
+ 같은 시간 형식
= 비교·파싱·추적 가능
```

## 7.1 `>`와 `>>`

```text
>  = 기존 내용 덮어쓰기
>> = 기존 내용 뒤에 추가
```

관제 로그는 시간 흐름이 핵심이므로 `>>`를 사용한다.

## 7.2 Log Traceability

로그는 “지금 정상”만 보는 것이 아니라:

```text
언제
어떤 PID가
어느 정도 자원을 사용했고
시간에 따라 어떻게 변했는지
```

추적할 수 있게 한다.

### 기억 문장

> **로그는 현재 상태가 아니라 시간의 흔적이다.**

---

# 8. cron과 비대화한 로그인 환경의 차이

`monitor.sh`가 터미널에서는 성공하는데 cron에서는 실패할 수 있다.

이유는 cron 실행 환경이 일반 로그인 셸보다 단순하기 때문이다.

```text
내 터미널
  ├─ 내가 export한 변수
  ├─ 개인 PATH
  ├─ shell profile
  └─ 현재 작업 디렉터리

cron
  ├─ 제한된 PATH
  ├─ 로그인 셸 변수 없음
  └─ 비대화식 실행
```

그래서 현재 저장소 구현은 `monitor.sh`가 `/etc/agent-app/agent.env`를 직접 읽도록 구성하고, crontab에 PATH를 명시한다.

원본 필수 요구는:

```text
agent-admin crontab
매분 monitor.sh 실행
```

이다.

현재 저장소의 환경 파일 로드 방식은 이 요구를 안정적으로 재현하기 위한 구현 선택이다.

### 기억 문장

> **수동 실행 성공만으로 자동 실행 성공을 보장할 수 없다.**

---

# 9. 로그 로테이션의 구조

로그를 무한히 누적하면 결국 디스크를 소모한다.

원본 요구:

```text
monitor.log 최대 10MB 수준
회전 파일 10개 수준
```

현재 저장소는 `logrotate`로 역할을 분리한다.

```text
monitor.sh
   └─ 상태 확인 + 로그 기록

logrotate
   └─ 크기 확인 + 회전 + 압축/새 파일 생성
```

현재 설정의 핵심:

```text
size 10M
rotate 10
compress
create 0640 agent-admin agent-core
```

이 구조의 장점은 `monitor.sh`가 관제와 로그 수명주기 관리까지 모두 떠안지 않는다는 점이다.

### 기억 문장

> **로그를 만드는 책임과 로그를 보존·회전하는 책임을 분리한다.**

---

# PART B. Level 4 — 검증·트러블슈팅

# 10. 트러블슈팅 표준 알고리즘

B1-1 오류를 해결할 때 다음 순서를 공통으로 사용한다.

```text
1. SYMPTOM   — 증상을 그대로 보존
2. CONTEXT   — 직전에 무엇을 했는지 확인
3. OBSERVE   — 상태를 바꾸기 전에 조회
4. LAYER     — 실패 층을 분리
5. HYPOTHESIS— 가능한 원인을 좁힘
6. FIX       — 가장 작은 수정만 적용
7. REVERIFY  — 원래 검증 명령 재실행
8. EVIDENCE  — 결과 기록
```

금지 패턴:

```text
오류 → chmod 777
오류 → 전부 sudo
오류 → restart 반복
오류 → 여러 설정 동시에 수정
오류 → 로그/흔적 삭제
```

---

# 11. 권한 오류 진단

증상:

```text
Permission denied
```

가능한 층:

```text
사용자 멤버십
부모 디렉터리 x 권한
대상 owner/group/mode
ACL
ACL mask
```

확인 순서:

```bash
id <user>
namei -l <full-path>
ls -ld <path>
getfacl <parent>
getfacl <target>
```

### 핵심 원리

하위 디렉터리 자체 권한이 맞아도 부모 경로를 통과할 `x` 권한이 없으면 접근할 수 없다.

### 복구 원칙

```text
무조건 777 ❌
요구 역할을 다시 확인하고 해당 경계만 수정 ✅
```

---

# 12. Agent가 실행되지 않음

증상:

```text
Boot Sequence 실패
Agent READY 없음
프로세스 없음
```

확인 순서:

```text
1. 실행 사용자
2. 환경변수
3. key 파일 존재·권한
4. upload/log 경로 권한
5. Boot Sequence 최초 실패 단계
6. 실제 제공 앱 파일명
7. 프로세스
8. 15034 LISTEN
```

핵심:

> **READY가 없으면 다음 단계로 가지 않는다.**

---

# 13. 프로세스는 있는데 포트가 없음

이 시나리오는 평가 항목에도 직접 등장한다.

가능한 원인 범주:

```text
앱이 bind 단계 전에 실패
AGENT_PORT 오류
다른 프로세스가 15034 사용
다른 주소/포트에 bind
key/권한/환경변수 문제
```

확인 순서:

```bash
pgrep -af '<실제 앱 파일명>'
ss -lntp
printenv AGENT_PORT
```

핵심:

```text
Process running ≠ Port LISTEN
```

---

# 14. `Address already in use`

의미:

```text
해당 IP:Port 조합을 다른 socket이 이미 사용 중
```

확인:

```bash
sudo ss -lntp | grep ':15034\b' || true
```

조치 전 반드시 **누가 포트를 사용 중인지 확인**한다.

무작정 프로세스를 종료하지 않는다.

---

# 15. `Connection refused`

가능한 구조:

```text
클라이언트
   ↓
네트워크 경로
   ↓
목표 IP
   ↓
목표 포트
   ↓
LISTEN 없음 → refused 가능
```

확인 우선순위:

```text
1. 실제 LISTEN인가?
2. 올바른 포트인가?
3. 서비스가 실행 중인가?
4. 방화벽 정책은 어떤가?
5. 외부 경로/주소는 올바른가?
```

`Connection refused`를 보았다고 곧바로 방화벽 문제라고 단정하지 않는다.

---

# 16. SSH 설정 오류

가장 중요한 안전 규칙:

```text
sshd -t 실패
→ SSH restart 금지
```

확인:

```bash
sudo sshd -t
sudo sshd -T | grep -E '^(port|permitrootlogin) '
systemctl status ssh.service --no-pager || true
systemctl status ssh.socket --no-pager || true
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

현재 Ubuntu 24.04 검증 환경에서는 `ssh.socket`과 `sshd-socket-generator`가 관여한 사례가 있었지만, 이것은 현재 환경에서 관찰된 구현 차이이며 원본 미션 자체의 필수 구조로 일반화하지 않는다.

---

# 17. 환경 변수 누락

증상:

```text
수동 실행과 cron 결과가 다름
Agent가 잘못된 경로/포트를 사용
monitor가 잘못된 값을 봄
```

확인:

```bash
sudo -u agent-admin bash -c \
  'set -a; source /etc/agent-app/agent.env; set +a; printenv | grep "^AGENT_" | sort'
```

원본 핵심 변수:

```text
AGENT_HOME
AGENT_PORT
AGENT_UPLOAD_DIR
AGENT_KEY_PATH
AGENT_LOG_DIR
```

---

# 18. 키 파일 문제

확인해야 할 것은 키 **내용 노출**이 아니라:

```text
존재하는가?
올바른 경로인가?
1줄인가?
소유자/그룹/권한이 맞는가?
agent-test가 읽지 못하는가?
```

이다.

검증 예:

```bash
stat /home/agent-admin/agent-app/api_keys/t_secret.key
wc -l /home/agent-admin/agent-app/api_keys/t_secret.key
```

Evidence에 실제 secret 값을 남기지 않는다.

---

# 19. 로그 기록 실패

증상:

```text
monitor는 실행되지만 monitor.log가 없음
Permission denied
로그 줄이 증가하지 않음
```

확인:

```bash
id agent-admin
ls -ld /var/log/agent-app
getfacl /var/log/agent-app
ls -l /var/log/agent-app/monitor.log 2>/dev/null || true
```

원인 층:

```text
디렉터리 없음
쓰기 권한 없음
실행 사용자 오류
ACL/mask 오류
로그 파일 소유권 오류
```

---

# 20. 수동 monitor 성공, cron 실패

가능한 원인:

```text
cron PATH 차이
로그인 셸 변수 의존
실행 계정 오류
cron 서비스 미실행
monitor.sh 실행 권한 오류
```

확인:

```bash
sudo -u agent-admin crontab -l
systemctl status cron --no-pager
```

현재 저장소는 최소 환경 테스트도 사용한다.

핵심:

> **자동화는 실제 시간 경과 후 결과가 증가해야 검증된다.**

---

# 21. logrotate 문제

점검 항목:

```text
설정 문법
로그 디렉터리 권한
su 사용자/그룹
회전 후 새 monitor.log owner/group/mode
```

현재 설정의 핵심은:

```text
su agent-admin agent-core
create 0640 agent-admin agent-core
```

회전 후 cron이 새 로그에 계속 쓸 수 있어야 한다.

---

# 22. 로그 급증과 디스크 위험

평가에서는 단기 대응과 중기 대응을 구분한다.

## 단기 대응

```text
현재 디스크 사용률 확인
로그 증가 원인 확인
현재 회전 파일 확인
서비스 장애를 막을 공간 확보
logrotate 동작 확인
```

## 중기 대응

```text
로그 폭증 근본 원인 수정
회전 크기·보존 정책 검토
알림 추가
아카이브·삭제 정책 검토
```

원인 확인 없이 운영 로그 전체를 무조건 삭제하지 않는다.

---

# 23. Before / After 검증

설정을 바꿀 때는 항상 전후를 비교한다.

예:

```text
Before
SSH 22 LISTEN
PermitRootLogin 기존값

Change
99-b1-1.conf

After
20022 LISTEN
22 없음
PermitRootLogin no
```

이 방식은 “내가 명령을 실행했다”보다 강한 Evidence가 된다.

### 기억 문장

> **변경 자체보다 변경 전후 상태 차이를 증명한다.**

---

# PART C. Level 5 — 평가에서 설명하기

# 24. 평가 답변 공식: WHAT → WHY → HOW → PROOF

평가 질문에 장황하게 답하지 않고 다음 네 문장 구조를 사용한다.

```text
1. WHAT  — 무엇을 했는가?
2. WHY   — 왜 그렇게 했는가?
3. HOW   — 어떤 명령/설정/코드로 구현했는가?
4. PROOF — 무엇으로 검증했는가?
```

예:

```text
SSH 포트를 20022로 변경하고 Root 원격 로그인을 차단했습니다.
미션 요구사항을 충족하면서 Root 직접 노출을 줄이고 기본 22번 스캔 노이즈를 낮추기 위해서입니다.
sshd drop-in에 Port 20022와 PermitRootLogin no를 설정했습니다.
sshd -T와 ss -lntp로 최종 해석값과 실제 LISTEN 상태를 확인했습니다.
```

---

# 25. 평가 항목 1 — 구현 및 동작 확인

## Q1. SSH가 정말 20022인가?

답변 핵심:

```text
설정값 확인
→ sshd 최종 해석값 확인
→ 실제 LISTEN 확인
```

Evidence 후보:

```bash
sudo sshd -T | grep -E '^(port|permitrootlogin) '
sudo ss -lntp | grep -E ':(22|20022)\b' || true
```

## Q2. 방화벽이 정말 필요한 포트만 허용하는가?

답변 핵심:

```text
기본 incoming deny
20022/tcp ALLOW
15034/tcp ALLOW
불필요한 포트 없음
```

## Q3. 사용자·그룹이 왜 두 그룹인가?

```text
common = 공용 자원
core   = 민감·운영 자원
```

## Q4. Agent 성공 조건은?

```text
Boot Sequence 5단계 [OK]
Agent READY
non-root 실행
0.0.0.0:15034 LISTEN
```

## Q5. monitor.sh 실패 조건은?

```text
process 없음 → exit 1
port 없음    → exit 1
```

## Q6. 로그 정상 조건은?

```text
/var/log/agent-app/monitor.log
고정 포맷
append 누적
```

## Q7. cron 검증은 등록만 보면 되는가?

아니다.

```text
crontab 등록
+
cron service
+
1~2분 후 실제 로그 증가
```

까지 확인한다.

## Q8. 10MB / 10개 정책은 어떻게 설명하는가?

현재 구현은 `logrotate`를 사용하고:

```text
size 10M
rotate 10
```

으로 설명한다.

---

# 26. 평가 항목 2 — 구현 방식 및 명령 설명

## Q1. 왜 `pgrep`인가?

핵심:

> 목적이 “프로세스가 존재하는지 PID를 찾는 것”이므로 `pgrep -f`로 실행 명령 전체에서 대상 앱 패턴을 찾는다. `ps`는 찾은 PID의 사용자·명령을 사람이 확인할 때 사용한다.

## Q2. 왜 `ss`인가?

핵심:

> 프로세스 존재만으로 서비스 제공 여부를 알 수 없으므로 TCP socket의 LISTEN 상태를 직접 확인한다.

## Q3. CPU는 어떻게 구했는가?

현재 구현:

```text
/proc/stat snapshot 1
→ 짧은 대기
→ snapshot 2
→ total/idle 차이 계산
```

## Q4. MEM은 어떻게 구했는가?

현재 구현:

```text
MemTotal
MemAvailable
```

을 사용한다.

## Q5. DISK는 어떻게 구했는가?

원본 요구가 Root partition Used %이므로:

```bash
df -P /
```

에서 값을 추출한다.

## Q6. 왜 로그 포맷을 고정했는가?

```text
사람이 비교하기 쉬움
후속 report.sh 파싱이 쉬움
시간별 추적 가능
```

## Q7. `agent-dev`가 소유자인데 `agent-admin`이 어떻게 실행하는가?

```text
monitor.sh = agent-dev:agent-core 750
agent-admin ∈ agent-core
```

그래서 group의 `r-x` 권한으로 실행 가능하다.

## Q8. 왜 logrotate를 분리했는가?

```text
monitor.sh = 관제
logrotate  = 로그 수명주기
```

역할을 분리한다.

---

# 27. 평가 항목 3 — 보안·권한·운영 원리

## Q1. SSH 포트 변경이 보안에 왜 도움이 되는가?

균형 있게 설명한다.

```text
자동화된 기본 22번 스캔 노이즈 감소 가능
하지만 인증·키 관리·Root 차단을 대체하지 않음
```

## Q2. 왜 Root 원격 로그인을 막는가?

```text
Root compromise의 영향 범위가 가장 큼
일반 사용자 + 필요 시 sudo가 최소 권한과 추적에 유리
```

## Q3. 왜 api_keys와 로그를 core로 제한하는가?

```text
api_keys = 민감 인증 자원
운영 로그 = 내부 상태 정보
agent-test 업무에 수정권한 불필요
```

## Q4. 왜 WARNING과 exit 1을 나누는가?

```text
process 없음 → 서비스 없음 → fail
port 없음    → 서비스 제공 불가 → fail

firewall inactive → 보안 위험, 수집 가능 → warning
resource high      → 위험 신호, 수집 계속 → warning
```

## Q5. 왜 `>>`인가?

```text
>  덮어쓰기
>> 추가 기록
```

관제 로그는 시간 흐름을 남겨야 하므로 `>>`.

---

# 28. 평가 항목 4 — 응용·장애 대응

## Q1. Nginx를 감시한다면 무엇을 바꾸는가?

원본 평가가 요구하는 핵심 네 가지:

```text
process
port
log
threshold
```

이다.

전체 관제 구조는 유지하고 대상만 바꾼다는 관점으로 설명한다.

## Q2. 프로세스는 있는데 포트가 열리지 않으면?

답변 순서:

```text
PID/실행명령 확인
앱 초기화 출력 확인
AGENT_PORT 확인
ss로 15034 확인
포트 충돌 확인
bind address 확인
key/권한/환경변수 확인
```

## Q3. 로그 급증으로 디스크가 위험하면?

```text
단기 = 현재 장애 방지
중기 = 근본 원인 + 정책 개선
```

으로 구분한다.

---

# 29. 평가 답변을 Evidence와 연결한다

평가에서 가장 강한 구조는 다음이다.

```text
질문
 ↓
내 설명
 ↓
구현 파일/설정
 ↓
검증 명령
 ↓
실제 Evidence
```

예:

```text
“cron이 매분 실행됩니까?”
      ↓
crontab.example / 실제 crontab
      ↓
sudo -u agent-admin crontab -l
      ↓
1~2분 전후 monitor.log line count
      ↓
Evidence
```

### 기억 문장

> **말로 설명한 내용은 파일과 실제 출력으로 바로 연결할 수 있어야 한다.**

---

# 30. 평가용 1분 설명

다음 구조를 자신의 말로 말할 수 있으면 된다.

```text
B1-1에서는 먼저 사용자와 그룹을 나누고 최소 권한으로 공용 영역과 핵심 영역을 분리합니다.
SSH는 20022로 변경하고 Root 원격 로그인을 차단한 뒤 실제 LISTEN과 방화벽 허용까지 각각 확인합니다.
Agent는 일반 사용자로 실행하고 Boot Sequence 5단계, READY, 15034 LISTEN을 확인합니다.
monitor.sh는 프로세스와 포트 실패를 exit 1로 처리하고, 방화벽과 자원 임계값은 WARNING으로 처리하며 CPU/MEM/DISK를 monitor.log에 누적합니다.
agent-admin의 cron이 매분 monitor를 실행하고 logrotate가 10MB/10개 정책으로 로그를 관리합니다.
각 단계는 설정 자체가 아니라 실제 출력과 Evidence로 검증합니다.
```

---

# 31. 평가용 3~5분 구조 설명 순서

백지에서 다음 7개 상자를 그리고 연결한다.

```text
① USER / GROUP / PERMISSION
        ↓
② SSH / PORT / FIREWALL
        ↓
③ ENV / KEY / AGENT
        ↓
④ PROCESS / LISTEN
        ↓
⑤ MONITOR / THRESHOLD
        ↓
⑥ LOG / CRON / ROTATION
        ↓
⑦ VERIFY / EVIDENCE / RECOVERY
```

각 상자마다 한 문장씩 이유를 붙인다.

---

# 32. Level 3~5 핵심 비교표

| 구분 | 질문 | B1-1에서 해야 할 일 |
|---|---|---|
| Level 3 | 왜 이렇게 구성되는가? | 권한·네트워크·관제·자동화의 구조 설명 |
| Level 4 | 어디가 실패했는가? | 계층별 조회 → 최소 수정 → 재검증 |
| Level 5 | 왜 그렇게 했다고 설명할 수 있는가? | WHAT→WHY→HOW→PROOF로 답변 |

---

# 33. Vocabulary Gate V3~V5

Top Core에서 V1~V2를 통과했다면 이번 단계는 V3~V5를 집중한다.

## V3 — 관계

다음 관계를 연결할 수 있는가?

- user ↔ group ↔ file permission ↔ ACL
- sshd ↔ port ↔ LISTEN ↔ firewall
- process ↔ PID ↔ port health
- monitoring ↔ threshold ↔ warning
- log ↔ cron ↔ logrotate

## V4 — 실제 위치

다음 실제 위치를 말할 수 있는가?

- SSH 설정
- UFW 상태
- `AGENT_*` 환경 파일
- key 경로
- `monitor.sh`
- `monitor.log`
- agent-admin crontab
- logrotate 설정

## V5 — 자기 설명

다음 질문을 외운 문장이 아니라 자기 말로 설명할 수 있는가?

1. 왜 common/core 그룹을 나눴는가?
2. 왜 프로세스와 포트를 둘 다 보는가?
3. 왜 방화벽 비활성은 WARNING인가?
4. 왜 cron에서는 환경을 별도로 고려하는가?
5. 왜 로그를 회전해야 하는가?
6. 왜 구현만으로 PASS가 아닌가?

---

# 34. 20분 압축 복습

## 0~5분 — 구조

```text
권한 → SSH → Agent → Monitor → Cron → Rotation → Evidence
```

백지에서 그린다.

## 5~10분 — 장애

다섯 개만 말한다.

```text
Permission denied
Process missing
Port missing
Cron only failure
Log growth
```

각각 첫 확인 명령을 하나씩 연결한다.

## 10~15분 — 평가

`WHAT → WHY → HOW → PROOF`로 다음 네 질문을 답한다.

```text
왜 Root를 막았는가?
왜 process/port 둘 다 보는가?
왜 WARNING과 exit 1을 나눴는가?
왜 logrotate인가?
```

## 15~20분 — Evidence

각 질문에 실제 증빙 파일 또는 명령 출력을 연결한다.

---

# 35. 완료 기준

이 문서를 읽는 것으로 완료하지 않는다.

다음 조건을 모두 만족하면 B1-1 Level 3~5 학습을 완료한 것으로 본다.

- [ ] 권한 모델을 `owner/group/others + ACL + 최소 권한`으로 설명할 수 있다.
- [ ] SSH 설정·LISTEN·Firewall을 서로 다른 층으로 설명할 수 있다.
- [ ] process 존재와 service 정상 상태의 차이를 설명할 수 있다.
- [ ] fail-fast와 warning-and-continue를 B1-1 예로 구분할 수 있다.
- [ ] CPU/MEM/DISK 수집과 임계값의 목적을 설명할 수 있다.
- [ ] `>`와 `>>`의 차이와 로그 추적성을 설명할 수 있다.
- [ ] 수동 성공/cron 실패가 가능한 이유를 설명할 수 있다.
- [ ] 10MB/10개 logrotate 정책을 설명할 수 있다.
- [ ] 대표 장애 5개 이상을 `증상→확인→복구→재검증` 순서로 설명할 수 있다.
- [ ] 평가 질문에 WHAT→WHY→HOW→PROOF로 답할 수 있다.
- [ ] 실제 Evidence가 없는 항목을 PASS라고 말하지 않는다.

---

# 36. B1-1 학습 완료 흐름

```text
B1-1 Mission Vocabulary
        ↓
Top Core 쉬운 설명·비유·관계
        ↓
Level 2 무오류 실행
        ↓
Level 3 구조·원리
        ↓
Level 4 트러블슈팅
        ↓
Level 5 평가 설명
        ↓
실제 Runtime + Evidence
        ↓
B1-1 통합 복습 / V1~V5
        ↓
B1-2로 이동
```

다음 단계는 B1-1 전체를 짧게 반복할 수 있도록 **B1-1 통합 복습 카드 + 실전 구두 퀴즈 + 평가 체크 시트**를 만드는 것이다.
