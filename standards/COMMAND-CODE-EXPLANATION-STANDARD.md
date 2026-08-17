# Command & Code Explanation Standard — 명령어·코드 한 줄 해설 표준

Codyssey Basic의 입문자 문서는 학습자가 명령어나 코드를 단순 복사하는 데서 끝나지 않고, **실행 가능한 명령 한 줄과 의미 있는 코드 한 줄이 무엇을 하는지 자기 말로 설명할 수 있도록 작성**합니다.

이 표준은 `BEGINNER-GUIDE.md`, 환경 따라하기, Troubleshooting, Evaluation Guide 등 입문자가 실제로 명령·코드·SQL을 실행하는 문서에 적용합니다.

> 이 표준은 코디세이 공식 Mission/Evaluation을 대체하지 않습니다. 공식 요구와 실제 구현이 항상 우선이며, 설명은 그 수행 경로를 이해하기 쉽게 만드는 학습 계층입니다.

---

## 1. 핵심 원칙

입문자용 실행 블록은 가능한 한 다음 구조를 사용합니다.

```text
📍 실행 위치/전제조건
→ 깨끗한 실행본
→ 한 줄씩 해설
→ 중요한 옵션/인자 해설
→ 전체 흐름 설명
→ 예상 정상 결과와 정상 범위
→ 재실행 안전 여부
→ 오류 시 확인/복구
→ STOP / GO
```

실행 가능한 코드 블록 자체에 장황한 주석을 과도하게 섞어 복사·실행을 어렵게 만들지 않습니다. **먼저 그대로 실행할 수 있는 원본을 보여주고, 바로 아래에서 줄별 해설을 제공**하는 방식을 기본으로 합니다.

---

## 2. Shell 명령어 기준

### 2.1 모든 실행 가능한 명령 줄 설명

입문자 가이드에서 학습자가 직접 입력하거나 복사해서 실행해야 하는 Shell 명령은 **각 실행 줄의 목적을 설명**합니다.

예:

```bash
cat /etc/os-release
uname -m
ps -p 1 -o comm=
whoami
id
```

줄별 해설:

```text
1. cat /etc/os-release
   → 현재 Linux 배포판과 버전 정보를 확인합니다.
   → cat은 파일 내용을 화면에 출력합니다.
   → /etc/os-release는 운영체제 정보가 들어 있는 표준 파일입니다.

2. uname -m
   → CPU 아키텍처를 확인합니다.
   → -m은 machine architecture를 뜻합니다.
   → 예: x86_64, aarch64

3. ps -p 1 -o comm=
   → PID 1에서 실행 중인 프로그램 이름을 확인합니다.
   → -p 1은 PID 1만 선택합니다.
   → -o comm=은 실행 프로그램 이름만 출력합니다.
   → systemd가 나오면 systemd 기반 환경임을 판단하는 근거가 됩니다.

4. whoami
   → 현재 로그인한 사용자 이름을 확인합니다.

5. id
   → 현재 사용자의 UID, GID, 소속 그룹을 확인합니다.
```

### 2.2 옵션과 인자

다음 중 하나에 해당하면 옵션/인자의 의미를 따로 설명합니다.

- 처음 등장하는 옵션
- 결과에 큰 영향을 주는 옵션
- 보안·권한·삭제·네트워크와 관련된 옵션
- 입문자가 오해하기 쉬운 옵션
- 공식 평가 설명에 필요한 옵션

예:

```bash
git switch -c feature/login
```

```text
git              → Git 프로그램 실행
switch           → 작업 브랜치를 전환
-c               → 새 브랜치를 만들면서 전환
feature/login    → 생성할 브랜치 이름
```

### 2.3 복합 Shell 구문

Pipe, redirection, `&&`, `||`, loop, command substitution 등은 전체 동작과 주요 기호를 설명합니다.

예:

```bash
command -v sshd || true
```

```text
command -v sshd  → sshd 명령이 설치되어 있는지 확인
||                → 앞 명령이 실패했을 때 오른쪽 명령 실행
true              → 전체 블록이 여기서 중단되지 않도록 성공 상태 반환
```

### 2.4 안전

- `sudo`가 필요한 이유를 설명합니다.
- `rm`, `reset`, firewall, SSH, Cloud 삭제처럼 영향이 큰 명령은 위험 범위와 복구 경로를 설명합니다.
- Secret, Token, Password, Private Key 값을 출력하는 명령은 예제로 사용하지 않습니다.
- 실제 값을 채팅·README·Evidence에 복사하도록 유도하지 않습니다.
- 상태를 바꾸는 명령은 필요한 경우 재실행 안전 등급을 표시합니다.

---

## 3. Python / JavaScript 기준

학습 의미가 있는 코드 줄은 가능한 한 줄별로 설명합니다.

예:

```python
name = input("이름: ")
message = f"안녕하세요, {name}님"
print(message)
```

줄별 해설:

```text
1. name = input("이름: ")
   → 사용자에게 이름을 입력받습니다.
   → input()의 반환값은 문자열(str)입니다.
   → 입력값을 name 변수에 저장합니다.

2. message = f"안녕하세요, {name}님"
   → name 값을 이용해 출력할 문장을 만듭니다.
   → f-string의 {name} 자리에 실제 입력값이 들어갑니다.

3. print(message)
   → 완성된 문자열을 터미널에 출력합니다.
```

### 반드시 설명할 코드 요소

- 변수의 역할과 값의 출처
- 함수 입력/출력
- 조건문에서 무엇을 판단하는지
- 반복문에서 무엇을 반복하는지
- 상태(State)가 언제 어떻게 바뀌는지
- I/O가 무엇을 읽고 쓰는지
- 예외 처리가 어떤 실패를 다루는지
- 외부 API/DB 호출이 어떤 데이터를 주고받는지

---

## 4. SQL 기준

SQL은 Query 전체 목적과 함께 주요 절을 줄 단위 또는 논리 단위로 설명합니다.

예:

```sql
SELECT m.name, COUNT(r.id) AS rental_count
FROM members AS m
LEFT JOIN rentals AS r ON r.member_id = m.id
GROUP BY m.id, m.name
ORDER BY rental_count DESC;
```

해설:

```text
SELECT ...
→ 회원 이름과 대여 건수를 결과 열로 선택합니다.

FROM members AS m
→ members 테이블을 기준 테이블로 사용하고 m이라는 별칭을 붙입니다.

LEFT JOIN ...
→ 대여 기록이 없는 회원도 결과에 남기면서 rentals를 연결합니다.

GROUP BY ...
→ 회원별로 행을 묶어 COUNT()를 계산할 수 있게 합니다.

ORDER BY ... DESC
→ 대여 건수가 많은 회원부터 정렬합니다.
```

DB를 바꾸는 `INSERT`, `UPDATE`, `DELETE`는 **어떤 행이 추가·변경·삭제되는지**를 설명합니다.

---

## 5. HTML / CSS / 설정 파일 기준

모든 닫는 태그나 괄호까지 기계적으로 한 줄씩 설명하지 않습니다.

다음처럼 **학습 의미가 있는 줄 또는 논리 블록**을 설명합니다.

- HTML의 의미 있는 element와 attribute
- CSS selector와 핵심 property
- JSON/YAML/TOML의 설정 키와 값
- Nginx, systemd, GitHub Actions 등의 directive와 동작

예:

```nginx
location /health {
    return 200 "OK\n";
}
```

```text
location /health
→ /health 요청을 처리할 규칙을 정의합니다.

return 200 "OK\n"
→ 애플리케이션 로직 없이 HTTP 200과 OK 문자열을 즉시 반환합니다.

중괄호
→ 위 두 줄을 하나의 location 설정 블록으로 묶습니다.
```

---

## 6. 설명하지 않아도 되는 줄

다음은 독립적인 학습 의미가 없으면 인접한 논리 단위와 묶어서 설명할 수 있습니다.

- 빈 줄
- 단순 닫는 괄호 `)`, `}`, `]`
- 단순 종료 태그 `</div>` 등
- 형식 유지를 위한 쉼표/세미콜론만 있는 줄
- 반복되는 boilerplate 중 이미 바로 앞에서 같은 의미를 설명한 부분

단, 해당 기호가 문법을 처음 배우는 핵심 포인트라면 설명합니다.

---

## 7. 한 줄 해설의 최소 내용

줄별 설명은 필요에 따라 다음 질문에 답합니다.

```text
무엇을 하는가?
왜 필요한가?
입력은 무엇인가?
출력/변경 결과는 무엇인가?
중요한 옵션/인자는 무엇인가?
이번 미션에서 왜 쓰는가?
```

모든 질문을 매 줄마다 기계적으로 반복하지는 않지만, 입문자가 그 줄을 자기 말로 설명할 수 있을 만큼은 제공해야 합니다.

---

## 8. 긴 코드 블록 처리

20~30줄 이상의 긴 코드 전체를 한 번에 줄별 해설하면 오히려 읽기 어려울 수 있습니다.

이 경우 다음 순서를 사용합니다.

```text
전체 실행본/전체 코드
→ 논리 블록 A 줄별 해설
→ 논리 블록 B 줄별 해설
→ 논리 블록 C 줄별 해설
→ 전체 데이터/제어 흐름 요약
```

필요하면 핵심 부분만 `BEGINNER-GUIDE.md`에 설명하고 전체 상세 해설은 `docs/LEARN-CODE.md` 같은 보조 문서로 분리할 수 있습니다. 단, 기본 수행에 필요한 해설은 대표 Guide에 남깁니다.

---

## 9. 예상 결과와 연결

명령/코드 해설은 실행 결과와 연결되어야 합니다.

```text
실행 줄
→ 줄의 의미
→ 예상 출력/상태 변화
→ 그 결과를 어떻게 판정하는가
```

예상 출력은 실제 Evidence와 구분합니다. 실제 실행하지 않은 예시를 PASS/CLEAR로 기록하지 않습니다.

### 9.1 예상 출력의 정상 범위

입문자가 예시와 한 글자라도 다르면 실패라고 오판하지 않도록 다음을 구분합니다.

```text
정확히 같거나 조건을 만족해야 하는 부분
vs
환경에 따라 달라도 정상인 부분
```

사용자 이름, PID, 날짜/시간, 일부 버전 문자열, 임시 경로처럼 달라질 수 있는 값은 필요한 경우 `달라도 정상`이라고 명시합니다.

---

## 10. Copy & Paste 안전 기준

입문자용 실행 블록은 **그대로 복사했을 때 불필요한 문자가 섞이지 않는 것**을 원칙으로 합니다.

```text
[ ] Shell prompt의 `$`, `#`를 실행 명령처럼 포함하지 않는다.
[ ] 명령과 예상 출력을 같은 실행 블록에 섞지 않는다.
[ ] 설명 문장을 실행 블록에 넣지 않는다.
[ ] 사용자별 값은 <PLACEHOLDER>처럼 눈에 띄게 표시한다.
[ ] Placeholder를 실제 값으로 바꿔야 하는지 바로 아래에서 설명한다.
[ ] 여러 명령을 한 줄에 과도하게 묶어 실패 지점을 숨기지 않는다.
```

예:

```bash
cd "$HOME/codyssey"
pwd
```

좋지 않은 예:

```text
$ cd /home/park/codyssey     # 여기로 이동하세요
/home/park/codyssey          # 예상 출력
```

실행 명령과 해설·출력은 분리합니다.

---

## 11. 재실행 안전성(Rerun Safety)

상태를 바꾸는 명령은 필요한 경우 다음 중 하나로 표시합니다.

```text
🟢 SAFE TO RERUN
→ 반복 실행해도 같은 안전한 상태를 유지하거나 부작용이 거의 없음

🟡 CHECK BEFORE RERUN
→ 현재 상태를 확인한 후 반복 실행

🔴 DO NOT RERUN BLINDLY
→ 데이터/설정/History/비용에 영향을 줄 수 있어 상태 확인 없이 반복 금지
```

예:

```bash
mkdir -p "$HOME/codyssey"
```

```text
🟢 SAFE TO RERUN
→ 이미 폴더가 있어도 -p 때문에 일반적으로 오류 없이 유지됩니다.
```

반면 `git reset --hard`, `rm`, DB destructive migration, SSH/UFW 변경, Cloud Create/Delete는 기본적으로 현재 상태·백업·영향 범위를 확인한 뒤 실행합니다.

---

## 12. R01 적용 수준

R01에서는 입문자가 따라할 수 있도록 상세도를 높입니다.

```text
Shell: 실행 가능한 모든 명령 줄 설명
Python/JavaScript: 의미 있는 코드 줄 설명
SQL: 주요 절/행 설명
설정 파일: 의미 있는 directive/key 설명
문법 종료만 담당하는 줄: 논리 단위로 묶어서 설명 가능
Copy/Paste: 실행본과 해설/출력 분리
Output: 정상 범위와 변동 가능 값 구분
Rerun: 상태 변경 명령은 필요한 경우 안전 등급 표시
```

R02 이후에는 반복되는 기본 명령/문법의 설명을 줄이고 Hint 중심으로 전환할 수 있습니다.

---

## 13. 감사 기준

`BEGINNER READY`를 판정할 때 다음을 확인합니다.

```text
[ ] 학습자가 직접 실행하는 Shell 명령은 각 줄의 목적이 설명되어 있다.
[ ] 중요한 옵션/인자의 의미가 설명되어 있다.
[ ] 의미 있는 Python/JavaScript 코드 줄을 설명할 수 있다.
[ ] SQL의 주요 절과 데이터 변화가 설명되어 있다.
[ ] 설정 파일의 핵심 directive/key가 설명되어 있다.
[ ] 긴 블록은 논리 단위로 나눠 해설되어 있다.
[ ] 단순 괄호/종료 태그에 불필요한 반복 설명을 강제하지 않는다.
[ ] 실행 블록에 prompt/설명/예상 출력이 섞여 있지 않다.
[ ] Placeholder를 바꿔야 하는지 분명하다.
[ ] 예상 결과에서 정확 조건과 달라도 정상인 값을 구분한다.
[ ] 상태 변경 명령의 재실행 안전성을 필요한 경우 표시한다.
[ ] 해설이 예상 결과·검증과 연결되어 있다.
[ ] 위험 명령과 Secret에 대한 안전 기준을 지킨다.
```

---

## 14. 관련 기준

- [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md) — 입문자 훈련·문서 생성 상위 기준
- [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md) — 15개 미션 문서 품질 감사
- [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md) — 한글·영어 용어 표기
- [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md) — 환경/Secret/검증 기준
