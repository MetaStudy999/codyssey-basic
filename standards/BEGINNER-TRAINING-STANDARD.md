# Beginner Training & Document Standard — 입문자 훈련·문서 생성 표준

Codyssey Basic의 입문자 문서는 **처음 접하는 학습자가 다른 블로그·영상·검색 결과에 의존하지 않고, 저장소 안의 공식 Source와 학습 문서만으로 핵심 개념을 이해하고 실제 미션을 수행할 수 있게 하는 것**을 기본 목표로 합니다.

이 표준은 `README.md`, `BEGINNER-GUIDE.md`, `START-CHECK.md`, `prerequisites.md`, 환경 안내, Troubleshooting, Evaluation Guide 등 **입문자가 실제로 읽는 문서를 새로 만들거나 수정할 때 적용하는 문서 생성 기준(Source of Truth)**입니다.

> 이 표준은 코디세이 공식 Mission/Evaluation을 대체하지 않습니다. 공식 요구가 항상 최우선이며, 학습 문서는 공식 요구를 쉽게 이해하고 수행하도록 설명하는 역할을 합니다.

---

## 1. 최우선 목표 — Self-contained First

입문자는 다음 질문에 현재 문서 또는 저장소 내부의 직접 연결 문서만으로 답할 수 있어야 합니다.

```text
1. 지금 무엇을 하는가?
2. 왜 하는가?
3. 모르는 용어는 무슨 뜻인가?
4. 전체 구조에서 어디에 해당하는가?
5. 무엇을 입력하거나 클릭해야 하는가?
6. 정상이라면 무엇이 보여야 하는가?
7. 오류가 나면 무엇부터 확인하는가?
8. 어디까지 하면 완료인가?
9. 이 결과가 평가 요구와 어떻게 연결되는가?
```

다음 활동이 **미션 수행의 필수 전제**가 되어서는 안 됩니다.

```text
Google 검색
YouTube 검색
개인 블로그 검색
다른 사람의 README 검색
AI에게 개념을 처음부터 다시 설명해 달라고 요청
```

외부 자료는 심화 학습용 보조 자료일 수 있지만, 기본 수행 경로를 완성하기 위해 필수여서는 안 됩니다.

### 예외 — 빠르게 변하는 외부 서비스

GitHub, AWS, AI Provider, Cloud/PaaS처럼 UI·가격·정책·API가 바뀌는 서비스는 저장소 문서만으로 현재 화면을 영구 고정할 수 없습니다.

이 경우 문서는 다음까지 자체 제공해야 합니다.

- 핵심 개념
- 현재 기준 실행 흐름
- 메뉴/화면에서 찾아야 할 대상
- 입력해야 할 값의 의미
- 정상 결과
- 오류 확인 순서

그리고 최신 확인이 필요한 부분만 **공식 서비스 문서**를 보조 Source로 연결합니다. 개인 블로그를 기준 Source로 삼지 않습니다.

---

## 2. Source of Truth와 문서 정합성

문서를 생성하거나 수정하기 전에 다음 순서로 기준을 확인합니다.

```text
공식 Mission / Evaluation / 제공 파일
        ↓
현재 Repository의 실제 파일·구조
        ↓
현재 Control Tower 상태·실행환경
        ↓
Canonical Reference / Environment Standard
        ↓
Beginner 문서
```

### 반드시 지킬 것

- 공식 Mission/Evaluation의 요구를 임의로 삭제·완화·대체하지 않습니다.
- 실제 존재하지 않는 공식 Evaluation 파일을 있다고 쓰지 않습니다.
- Reference 예시를 실제 Runtime 결과처럼 표현하지 않습니다.
- 과거 Phase, 과거 Ubuntu 버전, 과거 Runtime 상태를 현재 상태처럼 남기지 않습니다.
- 현재 상태를 문서에 넣을 경우 작성/수정 시점의 실제 기준과 일치하는지 확인합니다.
- 변동 가능성이 큰 상태는 가능한 한 현재 상태 Source로 연결하고, 학습 개념 문서에 불필요하게 하드코딩하지 않습니다.

### 문서 상태 드리프트(Documentation Drift) 점검

다음이 서로 모순되면 입문자 문서를 `BEGINNER READY`로 판정하지 않습니다.

- README의 현재 미션
- Control Tower의 현재 상태
- `BEGINNER-GUIDE.md`의 Phase/Runtime 상태
- 실행환경/OS 버전
- Package/Command 기준
- 실제 파일 경로
- 실행 순서

---

## 3. 설명의 기본 사다리

새 개념은 가능하면 다음 순서로 설명합니다.

```text
쉬운 한 문장
→ 필요하면 생활 비유
→ 정확한 기술 정의
→ 한글 + 영어 원어
→ 그림/도식
→ 이번 미션에서 어디에 쓰는지
→ 아주 작은 예제
→ 본 미션 실습
```

예:

```text
커밋(Commit)
= 지금까지의 변경을 하나의 기록 단위로 저장하는 것입니다.

비유
= 게임의 저장 지점처럼, 나중에 특정 시점의 변경을 추적할 수 있게 합니다.

기술적으로
= Git이 staged change를 부모 commit과 연결된 새 snapshot으로 기록하는 작업입니다.

이번 미션에서는
= 팀원이 어떤 변경을 언제 남겼는지 협업 이력을 만들 때 사용합니다.
```

비유가 오히려 기술적 의미를 왜곡하면 사용하지 않습니다.

---

## 4. 한 Step의 표준 — 12요소

R01의 핵심 Hands-on Step은 아래 요소를 기준으로 작성합니다.

1. **지금 무엇을 배우는가**
2. **왜 필요한가**
3. **쉬운 설명 또는 생활 비유** — 도움이 될 때만
4. **핵심 용어** — 한글 의미(English Original)
5. **그림/도식 또는 흐름** — 구조 이해에 도움이 될 때
6. **기술적으로 정확한 핵심 개념**
7. **이번 미션에서 어디에 쓰이는가**
8. **최소 예제(Minimal Example)** — 본 실습 전에 필요한 경우
9. **실제 따라하기** — 명령어, 코드 또는 UI 클릭 경로
10. **명령어·코드·입력값의 의미** — 실행 가능한 Shell 각 줄과 의미 있는 코드 줄을 입문자가 자기 말로 설명할 수 있도록 해설
11. **정상 결과 + 실패 결과 + 오류 복구**
12. **완료 확인 + 자기 말로 설명하기**

모든 Step에 12개 제목을 기계적으로 붙일 필요는 없습니다. 내용이 짧으면 합칠 수 있지만, 입문자가 수행에 필요한 정보는 빠지지 않아야 합니다.

### 실행 안전 계층은 12요소 위에 겹쳐 적용

12요소를 20개 제목으로 늘리지 않습니다. 대신 실제 실행이 있는 Step에는 다음 안전 정보를 필요한 만큼 함께 제공합니다.

```text
📍 실행 위치(Context)
→ 🔍 사전 점검(Preflight)
→ 깨끗한 실행본
→ 예상 결과와 정상 범위
→ 재실행 안전 여부(Rerun Safety)
→ STOP / GO 판정
→ 필요 시 Checkpoint / Recovery
→ Cloud/API/AI면 Cost / Resource Guard
```

입문자 화면에서는 이를 다음 6개 묶음으로 단순하게 보여 줄 수 있습니다.

```text
이해하기
→ 실행 전 확인
→ 따라하기
→ 결과 확인
→ 문제 해결
→ 완료 확인
```

### 기존 10항목 Canonical Guide와의 관계

기존의 다음 흐름은 계속 유효합니다.

```text
왜 → 무엇 → 용어/개념 → 실행 → 예상 결과 → 의미 → 오류 해결 → 완료 확인
```

12요소 표준은 여기에 **쉬운 설명/비유, 도식, 최소 예제, 자기 설명**을 보강한 확장 기준입니다.

---

## 5. 용어 작성 기준

용어는 필요한 시점에 JIT(Just-in-Time) 방식으로 제공합니다.

첫 등장 시 [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)를 따릅니다.

```text
한글 의미(English Original)
```

가능하면 다음 다섯 가지를 설명합니다.

- 한 줄 정의
- 쉬운 설명
- 왜 필요한가
- 현재 미션 어디에서 사용하는가
- 관련 용어

용어 전체를 미션 시작 전에 외우게 하여 진도를 막지 않습니다.

---

## 6. 명령어·코드 설명 기준

입문자는 명령을 복사하는 것뿐 아니라 **무슨 작업을 했는지 자기 말로 설명할 수 있어야 합니다.** 상세 작성 규칙은 [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md)를 따릅니다.

R01의 기본 형식은 다음입니다.

```text
깨끗한 실행본
→ 실행 가능한 Shell 명령 각 줄 해설
→ 중요한 옵션/인자 해설
→ 의미 있는 Python/JavaScript/SQL/설정 줄 해설
→ 전체 흐름
→ 예상 정상 결과
→ 오류/복구
```

예:

```bash
git switch -c feature/login
```

```text
git              → Git 프로그램 실행
switch           → 작업할 브랜치를 전환
-c               → 새 브랜치를 만들면서 전환
feature/login    → 새 브랜치 이름
```

### Shell

- 학습자가 직접 실행하는 **모든 실행 가능한 명령 줄의 목적을 설명**합니다.
- 처음 등장하거나 중요한 옵션·인자의 의미를 설명합니다.
- pipe, redirection, `&&`, `||`, loop 등 복합 구문은 주요 기호와 전체 동작을 설명합니다.
- 파괴적 명령은 위험 범위와 복구 가능성을 설명합니다.
- `sudo`가 필요한 이유를 설명합니다.
- Secret을 출력하는 명령을 예제로 사용하지 않습니다.

### Python / JavaScript

학습 의미가 있는 코드 줄은 가능한 한 줄별로 설명합니다.

- 변수와 데이터의 역할
- 함수의 입력/출력
- 조건과 반복
- 상태(State) 변화
- I/O
- 예외 처리
- API/DB 호출의 입력과 결과

### SQL

- Query 전체 목적을 먼저 설명합니다.
- `SELECT`, `FROM`, `JOIN`, `WHERE`, `GROUP BY`, `ORDER BY` 등 주요 절을 줄 또는 논리 단위로 설명합니다.
- `INSERT`, `UPDATE`, `DELETE`는 어떤 데이터가 추가·변경·삭제되는지 설명합니다.

### HTML / CSS / 설정 파일

- 의미 있는 element/attribute, selector/property, directive/key를 설명합니다.
- Nginx, systemd, YAML, JSON 등은 핵심 설정의 역할과 실제 동작을 연결합니다.

### 설명을 묶어도 되는 줄

빈 줄, 단순 닫는 괄호, 단순 종료 태그처럼 독립적인 학습 의미가 없는 줄은 인접한 논리 단위와 묶어 설명할 수 있습니다.

즉, **모든 물리적 줄에 기계적으로 주석을 붙이는 것이 목표가 아니라, 모든 실행 줄과 의미 있는 코드 줄을 이해 가능하게 만드는 것이 목표**입니다.

---

## 7. UI 따라하기 기준

GitHub/AWS/Cloud Console처럼 GUI 작업이 필요한 경우 `버튼을 누르세요`만 적지 않습니다.

가능하면 다음 형식을 사용합니다.

```text
현재 위치
→ 이동할 메뉴
→ 클릭할 버튼
→ 입력할 필드
→ 입력값의 의미
→ 저장/적용
→ 정상 화면
→ 버튼이 없거나 비활성화됐을 때 확인할 것
```

예:

```text
Repository
→ Settings
→ Rules / Branch protection 관련 메뉴
→ main 대상 규칙 생성
→ PR을 통한 변경 요구
→ 최소 승인 조건 설정
→ 저장
→ main 직접 push가 제한되는지 확인
```

외부 서비스 UI 이름이 변할 수 있으면 특정 위치를 영구 사실처럼 단정하지 않고, **찾아야 할 기능의 목적과 공식 명칭**을 함께 설명합니다.

---

## 8. 정상 결과와 오류 복구 기준

모든 핵심 실행 단계는 가능하면 정상 결과를 제공합니다.

```text
명령/행동
→ 예상 정상 결과
→ 그 결과의 의미
```

오류 설명은 다음 순서를 권장합니다.

```text
증상(Symptom)
→ 가능한 원인(Cause)
→ 확인(Check)
→ 최소 수정(Fix)
→ 재검증(Re-verify)
```

단순히 `오류가 나면 설정을 확인하세요`라고 끝내지 않습니다.

### 복구 절차

시스템 설정, SSH, UFW, Cloud Resource, DB처럼 영향이 큰 작업은 가능한 경우 다음도 제공합니다.

- 변경 전 확인
- 백업 또는 현재값 기록
- 안전한 적용 순서
- 실패 시 되돌릴 위치
- 재검증 방법

### 8.1 실행 안전 7원칙

입문자 문서의 목표는 오류가 절대 발생하지 않는다고 약속하는 것이 아니라, **오류를 예방하고 실패 지점에서 즉시 멈춘 뒤 최소 수정으로 복구할 수 있게 하는 것**입니다.

#### 1) 실행 위치(Context) 표시

명령·코드·UI 조작 전에 필요한 경우 다음을 명확히 표시합니다.

```text
📍 실행 위치
Host       : macOS / Windows / Ubuntu / Cloud
Terminal   : Ubuntu Bash / PowerShell / macOS Terminal
Repository : $HOME/codyssey/<repo>
Branch     : 현재 작업 Branch
권한       : 일반 사용자 / sudo 필요
venv       : 활성 / 비활성 / 해당 없음
```

문서에서는 필요에 따라 `[MAC]`, `[UBUNTU]`, `[WINDOWS]`, `[WSL]`, `[REPOSITORY ROOT]`, `[VENV]`, `[AWS CONSOLE]`, `[GITHUB WEB]` 같은 짧은 위치 표시를 사용할 수 있습니다.

#### 2) 사전 점검(Preflight) + STOP / GO

핵심 Step 전에 현재 위치·필수 명령·Branch·변경사항·권한 등을 확인합니다.

```text
실행
↓
확인
↓
PASS?
├─ YES → 다음 단계
└─ NO  → STOP → 복구 → 재검증
```

필수 조건이 실패했는데 다음 Step을 계속 진행하도록 안내하지 않습니다.

#### 3) 재실행 안전성(Rerun Safety)

반복 실행 가능 여부를 필요한 명령에 표시합니다.

```text
🟢 SAFE TO RERUN
다시 실행해도 안전

🟡 CHECK BEFORE RERUN
현재 상태를 확인한 뒤 재실행

🔴 DO NOT RERUN BLINDLY
현재 상태/백업을 확인하지 않고 반복 실행 금지
```

특히 삭제, Git history 변경, SSH/UFW, DB migration, Cloud 자원 변경에는 반드시 재실행 영향을 검토합니다.

#### 4) Copy & Paste 안전

복사 가능한 실행 블록에는 가능한 한 **실제로 입력할 명령만** 둡니다.

```text
코드 블록에 Shell prompt `$`/`#`를 실행문처럼 포함하지 않음
명령과 예상 출력을 같은 코드 블록에 섞지 않음
설명 문장을 실행 블록에 섞지 않음
사용자가 바꿀 값은 <PLACEHOLDER>로 명확히 표시
<PLACEHOLDER>를 그대로 입력하면 안 되는 경우 바로 아래에서 설명
```

#### 5) 예상 출력의 정상 범위(Output Variation)

예상 출력은 `정확히 같아야 하는 값`과 `환경에 따라 달라도 정상인 값`을 구분합니다.

예:

```text
정확히 확인할 것
→ 경로가 $HOME/codyssey 아래인가

달라도 정상
→ 사용자 이름
→ PID
→ 날짜/시간
→ 일부 버전 문자열
```

화면이 예시와 조금 다르다는 이유만으로 실패로 오판하지 않게 합니다.

#### 6) Checkpoint / Recovery Point

긴 실습 또는 위험한 변경 전후에는 필요한 경우 중간 저장점을 둡니다.

```text
CHECKPOINT
→ 현재 상태 확인
→ 필요한 설정/파일 백업
→ 변경
→ Verify
→ 실패 시 백업/이전 상태로 복구
```

Git clean 상태, 설정 백업, Cloud 자원 목록처럼 실제로 되돌아갈 수 있는 근거를 사용합니다.

#### 7) 비용·자원 보호(Cost / Resource Guard)

AWS/Cloud/API/AI Provider처럼 비용이나 외부 자원이 발생할 수 있는 Step은 실행 전에 다음을 확인합니다.

```text
[ ] 비용/무료 한도 여부를 확인했다.
[ ] Region / Account / Project를 확인했다.
[ ] 생성할 Resource 수를 확인했다.
[ ] 자동 결제 또는 유료 API 사용 가능성을 확인했다.
[ ] Cleanup 절차를 먼저 읽었다.
```

실습 종료 흐름은 가능하면 다음으로 닫습니다.

```text
Create
→ Verify
→ Evidence
→ 더 이상 필요 없음
→ Cleanup
→ 삭제/중지 확인
```

---

## 9. 개념도와 시각화 기준

- 짧고 단순한 관계는 가로형을 사용할 수 있습니다.
- 가로로 길어지면 세로형을 우선합니다.
- 개념도 아래에는 반드시 쉬운 설명을 추가합니다.
- 화면 폭이 좁아도 읽을 수 있도록 복잡한 7~10열 표를 남발하지 않습니다.
- 한 개체의 정보가 많으면 `미션 / 과정 / 저장소`처럼 세로 그룹화를 우선 검토합니다.
- 그림이 미션 수행에 도움이 되지 않으면 억지로 만들지 않습니다.

---

## 10. 문서 분리와 Progressive Disclosure

`BEGINNER-GUIDE.md` 하나에 모든 이론을 복사해 수천 줄로 만들지 않습니다.

권장 구조:

```text
README.md
   ↓
BEGINNER-GUIDE.md          ← 대표 실행 경로
   │
   ├─ 용어를 더 알고 싶음
   │   → docs/LEARN-TERMS.md 또는 동등 문서
   │
   ├─ 개념을 더 알고 싶음
   │   → docs/LEARN-CONCEPTS.md 또는 동등 문서
   │
   ├─ 코드 상세 해설이 너무 길어짐
   │   → docs/LEARN-CODE.md 또는 동등 문서
   │
   ├─ 오류 발생
   │   → docs/TROUBLESHOOTING.md 또는 동등 문서
   │
   └─ 평가 준비
       → docs/EVALUATION-GUIDE.md 또는 동등 문서
```

파일 이름은 미션 특성에 따라 달라도 됩니다. **필요 없는 파일을 형식 때문에 만들지 않습니다.**

핵심 조건:

> `BEGINNER-GUIDE.md`만 읽어도 **지금 무엇을 해야 하는지는 알 수 있어야 하며**, 연결 문서는 더 깊은 이해·코드 상세 해설·오류 해결·평가 준비를 위한 보조 계층이어야 합니다.

---

## 11. README의 Beginner First 기준

입문자 진입 README는 첫 화면에서 다음을 우선합니다.

```text
이 저장소는 무엇인가
→ 지금 무엇을 해야 하는가
→ 첫 명령/첫 행동
→ 현재 미션
→ 대표 Beginner Guide 링크
```

다음과 같은 운영·관리 정보는 아래 상세 계층으로 내립니다.

- 내부 Phase 정의
- 운영 Mode
- 전체 Audit 상태
- Runtime Profile 전체 비교
- 미래 Round/Advanced 구조

입문자가 운영 체계를 먼저 공부해야 미션을 시작할 수 있는 구조를 만들지 않습니다.

---

## 12. 평가와 학습 연결

각 핵심 Step은 가능한 범위에서 다음 연결을 보여 줍니다.

```text
공식 Requirement
→ 지금 배우는 개념
→ 실제 Implementation
→ Verification
→ Evidence
```

입문자는 `왜 이 실습을 하는지`뿐 아니라 `이 결과가 어떤 평가 요구를 증명하는지`도 알 수 있어야 합니다.

실제로 수행하지 않은 Evidence를 예시 출력이나 과거 기록으로 대신하지 않습니다.

---

## 13. 외부 검색 불필요 기준

문서를 `BEGINNER READY`로 보기 위한 목표는 다음입니다.

> **공식 Mission 원본 + 해당 Repository 내부 문서만으로 핵심 경로를 이해하고 수행할 수 있다.**

다만 다음은 예외적으로 공식 외부 문서를 확인할 수 있습니다.

- 현재 Cloud 가격/프리티어 조건
- 최신 GitHub/AWS UI 위치
- 최신 AI Provider API 사양
- 현재 보안/서비스 정책

이 경우에도 저장소 문서는 **무엇을 확인해야 하는지와 왜 확인하는지**를 먼저 설명해야 합니다.

---

## 14. Beginner Documentation Audit — 문서 품질 점검

문서를 새로 만들거나 큰 수정 후에는 아래 12항목을 점검합니다.

| # | 점검 항목 | 기준 |
|---:|---|---|
| 1 | 상태/환경 정합성 | 현재 Phase/Runtime/OS/경로와 모순 없음 |
| 2 | 한글+영어 용어 | 핵심 용어 첫 등장 병기 |
| 3 | 쉬운 설명 | 처음 보는 사람이 한 문장으로 의미 파악 가능 |
| 4 | 개념 연결 | 전체 구조에서 역할을 설명 |
| 5 | 도식/시각화 | 필요할 때 구조를 눈으로 이해 가능 |
| 6 | 최소 예제 | 복잡한 본 실습 전 작은 예가 필요한 경우 제공 |
| 7 | 실제 따라하기 | 실행 위치·Preflight가 명확하고 명령/코드/UI 경로가 실행 가능 |
| 8 | 명령·코드 줄별 해설 | Shell 실행 줄, 중요한 옵션/인자, 의미 있는 코드/SQL/설정 줄을 입문자가 자기 말로 설명 가능 |
| 9 | 정상 결과 | 성공 조건과 환경에 따라 달라도 정상인 값을 구분할 수 있음 |
| 10 | 오류 복구 | 증상→원인→확인→수정→재검증 및 필요한 Recovery 경로 제공 |
| 11 | 완료 확인 | STOP/GO, Rerun Safety, Checkpoint를 필요한 Step에서 판정 가능 |
| 12 | 평가 연결 | Requirement→Verify→Evidence 관계를 알 수 있고 비용 자원은 Cleanup까지 연결 |

### 판정

```text
BEGINNER READY
= 핵심 수행 경로에 치명적 누락 없음
+ 현재 상태와 문서가 모순되지 않음
+ 실행 명령과 의미 있는 코드 줄을 설명할 수 있음
+ 실행 위치/Preflight/STOP-GO/Rerun Safety를 필요한 Step에서 판단할 수 있음
+ 외부 비공식 검색 없이 기본 수행 가능
```

`BEGINNER READY`는 **문서 품질을 위한 내부 상태**이며 코디세이 공식 Mission CLEAR를 대신하지 않습니다.

문서 품질 문제가 실제 Runtime을 막지 않는다면 현재 미션 실행을 무조건 중단하는 별도 공식 Gate로 사용하지 않습니다. 다만 잘못된 환경/명령/평가 설명처럼 실행 실패나 오판정을 유발하는 문서 오류는 즉시 수정합니다.

---

## 15. 문서 생성·수정 체크리스트

새 문서를 생성하거나 기존 입문자 문서를 큰 폭으로 수정할 때 최소한 다음을 확인합니다.

```text
[ ] 공식 Source를 먼저 확인했다.
[ ] 현재 Repository 구조와 경로를 확인했다.
[ ] 현재 Runtime/환경 상태와 모순되는 과거 문구가 없다.
[ ] 한글+영어 용어 표준을 적용했다.
[ ] 처음 보는 사람에게 필요한 선행 개념을 설명했다.
[ ] 실행 위치(Host/Terminal/Repository/Branch/권한/venv)가 필요한 Step에서 명확하다.
[ ] 실행 전 Preflight와 실패 시 STOP 조건이 필요한 Step에 있다.
[ ] 실행 명령/코드/UI 경로가 구체적이다.
[ ] 학습자가 직접 실행하는 Shell 명령 각 줄의 목적을 설명했다.
[ ] 중요한 옵션/인자/입력값을 설명했다.
[ ] 의미 있는 Python/JavaScript/SQL/설정 줄을 이해할 수 있게 설명했다.
[ ] 복사 가능한 코드 블록에 prompt/출력/설명 문장을 섞지 않았다.
[ ] Placeholder를 실제 값으로 바꿔야 하는지 명확히 설명했다.
[ ] 예상 출력에서 정확히 같아야 할 값과 달라도 정상인 값을 구분했다.
[ ] 위험하거나 상태를 바꾸는 명령은 재실행 안전 여부를 검토했다.
[ ] 긴/위험 실습은 필요한 Checkpoint/Recovery Point가 있다.
[ ] Cloud/API/AI 비용 가능 Step은 비용·자원·Cleanup을 설명했다.
[ ] 정상 결과를 제공했다.
[ ] 핵심 오류의 복구 경로를 제공했다.
[ ] Secret을 노출하지 않는다.
[ ] 완료 조건과 평가 연결을 설명했다.
[ ] 외부 자료가 필수라면 공식 Source만 연결하고 이유를 적었다.
[ ] BEGINNER READY 기준을 검토했다.
```

---

## 16. 문서 우선순위와 대량 수정 원칙

기존 15개 미션의 문서를 표준 변경만을 이유로 한꺼번에 기계적으로 재작성하지 않습니다.

우선순위:

```text
현재 Active Mission의 대표 실행 문서
→ Runtime을 막거나 혼동시키는 문서
→ 다음 실행 예정 미션
→ 신규/수정 문서
→ 나머지 기존 문서 순차 개선
```

즉, **학습 품질은 표준화하되 실제 미션 진행을 불필요하게 멈추지 않습니다.**

---

## 17. Round에 따른 독립성

- **R01 — CLEAR:** 상세 설명, 줄별 명령·코드 해설, 최소 예제, 오류 복구, 실행 위치/Preflight/STOP-GO/Rerun Safety, 기준 실행 경로를 충분히 제공합니다.
- **R02:** 반복되는 기본 명령/문법의 해설을 줄이고 요구사항을 먼저 제시하며 필요 시 Hint를 제공합니다.
- **R03+:** 가이드 의존도를 줄이고 문제 해결, 설계 판단, 성능·보안·운영 Trade-off 설명을 늘립니다.

같은 미션이라도 Round가 올라갈수록 정답 경로 의존은 줄이고 독립적인 판단 능력을 강화합니다.

---

## 18. 관련 표준

- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령어·코드 한 줄 해설
- [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md) — 한글·영어 용어 표기
- [CANONICAL-REFERENCE-STANDARD.md](CANONICAL-REFERENCE-STANDARD.md) — 미션 Reference/Guide/Verify/Evidence 최소 계약
- [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md) — 환경 재현·검증·Secret 원칙
- [CROSS-PLATFORM-GIT-STANDARD.md](CROSS-PLATFORM-GIT-STANDARD.md) — 파일/Line Ending/Git 공통 기준
- [VS-CODE-REMOTE-UBUNTU-STANDARD.md](VS-CODE-REMOTE-UBUNTU-STANDARD.md) — Remote Ubuntu 개발환경 기준
