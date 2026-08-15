# B1-1 Level 0 — Prerequisite

**역할:** 미션 설명을 읽고 Level 1 핵심 개념을 이해하기 위한 최소 선수지식  
**목표:** 모든 Linux 이론을 공부하는 것이 아니라 B1-1에서 실제로 만나는 기본 용어를 보고 알아볼 수 있게 한다.

> Level 0의 목표는 **V1 — 인지**다. 깊은 원리 설명은 Level 3에서 다룬다.

---

## 1. 선수 용어 전체 목록

### Linux·터미널·파일

- 리눅스 (Linux)
- 운영체제 (Operating System, OS)
- 커널 (Kernel)
- 터미널 (Terminal)
- 셸 (Shell)
- 배시 (Bash, Bourne Again Shell)
- 명령줄 인터페이스 (Command-Line Interface, CLI)
- 명령어 (Command)
- 파일 (File)
- 디렉터리 (Directory)
- 파일 시스템 (File System)
- 절대 경로 (Absolute Path)

### 사용자·권한

- 사용자 계정 (User Account)
- 루트 계정 / 슈퍼유저 (Root Account / Superuser)
- sudo (Superuser Do)
- 사용자 식별자 (User Identifier, UID)
- 그룹 식별자 (Group Identifier, GID)
- 읽기 권한 (Read Permission)
- 쓰기 권한 (Write Permission)
- 실행 권한 (Execute Permission)

### 프로세스·네트워크

- 프로세스 (Process)
- 프로세스 식별자 (Process Identifier, PID)
- 네트워크 (Network)
- 인터넷 프로토콜 주소 (Internet Protocol Address, IP Address)
- 포트 (Port)
- 전송 제어 프로토콜 (Transmission Control Protocol, TCP)

### 실행·기록

- 환경 변수 (Environment Variable)
- 로그 (Log)
- 셸 스크립트 (Shell Script)

---

## 2. 입문자용 최소 의미

| 용어 | 지금 단계에서 알면 되는 정도 |
|---|---|
| Linux | B1-1을 수행하는 운영체제 환경 |
| OS | 프로그램과 하드웨어를 관리하는 기본 시스템 소프트웨어 |
| Kernel | 프로세스·메모리·장치 같은 핵심 자원을 관리하는 OS의 중심부 |
| Terminal | 명령을 입력하고 결과를 보는 창 |
| Shell | 입력한 명령을 해석해 실행하는 프로그램 |
| Bash | B1-1 `monitor.sh`를 작성·실행하는 대표 Shell |
| CLI | 마우스 대신 명령어로 프로그램을 사용하는 방식 |
| File | 데이터를 저장하는 객체 |
| Directory | 파일과 하위 디렉터리를 정리하는 공간 |
| Absolute Path | `/`부터 시작하는 전체 경로 |
| User Account | 누가 시스템을 사용하는지 구분하는 신원 |
| Root | Linux에서 최고 권한을 가진 계정 |
| sudo | 필요한 명령에 한해 관리자 권한을 사용하는 방식 |
| UID / GID | 사용자·그룹을 내부적으로 구분하는 숫자 식별자 |
| r / w / x | 읽기 / 쓰기 / 실행 권한 |
| Process | 실행 중인 프로그램의 실행 단위 |
| PID | 각 Process를 구분하는 숫자 |
| IP Address | 네트워크에서 장치를 구분하는 주소 |
| Port | 한 장치 안에서 어떤 네트워크 서비스를 사용할지 구분하는 번호 |
| TCP | 연결 상태와 순서를 관리하는 전송 프로토콜 |
| Environment Variable | 프로그램에 경로·포트 같은 설정값을 전달하는 외부 값 |
| Log | 시스템·프로그램에서 발생한 상태와 사건을 기록한 데이터 |
| Shell Script | 여러 Shell 명령을 파일로 묶어 자동 실행하는 프로그램 |

---

## 3. B1-1에서 바로 만나는 관계

```text
Terminal
   ↓
Shell / Bash
   ↓
Command
   ↓
Linux가 File / Directory / User / Process / Network 상태를 변경·조회
```

```text
Program
   ↓ 실행
Process
   ↓
PID
```

```text
IP Address
   +
TCP Port
   ↓
특정 네트워크 서비스
```

```text
User
   ↓
r / w / x
   ↓
File / Directory 접근 가능 여부
```

---

## 4. 초미니 확인 실습

이 단계에서는 시스템 설정을 바꾸지 않는다. 조회 명령만 사용한다.

### 현재 위치

```bash
pwd
```

### 현재 사용자

```bash
whoami
id
```

### Linux 정보

```bash
uname -a
cat /etc/os-release
```

### 파일과 디렉터리

```bash
pwd
ls -la
```

### 프로세스

```bash
ps -ef | head
```

### LISTEN 포트

```bash
ss -lnt
```

> 결과가 환경마다 다르더라도 정상이다. 지금은 명령 출력의 형태와 핵심 용어를 연결하는 것이 목적이다.

---

## 5. V1 Gate — 인지 확인

다음을 문서 없이 보고 구분할 수 있으면 Level 0을 통과한다.

- [ ] Terminal과 Shell이 같은 것이 아님을 안다.
- [ ] Bash가 Shell의 한 종류임을 안다.
- [ ] File과 Directory를 구분한다.
- [ ] Root와 일반 사용자를 구분한다.
- [ ] `sudo`가 Root 계정 자체와 같은 것이 아님을 안다.
- [ ] Process와 PID의 관계를 안다.
- [ ] IP Address와 Port의 역할을 대략 구분한다.
- [ ] `r / w / x`가 읽기·쓰기·실행임을 안다.
- [ ] Environment Variable과 Log라는 용어를 알아볼 수 있다.
- [ ] Shell Script가 명령 자동화 파일임을 안다.

---

## 6. 기억 문장

> **Linux에서 사용자가 Shell 명령으로 파일·권한·프로세스·네트워크를 다루고, 그 상태를 로그와 스크립트로 자동화한다.**

---

[← B1-1 Index](./b1-1-00-index.md) · [다음: Level 1 Core →](./b1-1-20-level-1-core.md)
