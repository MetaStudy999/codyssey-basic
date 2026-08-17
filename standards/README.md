# Standards Registry — 기준 관리

이 디렉터리는 Codyssey Basic에서 **문서·훈련·환경·Reference를 새로 만들거나 수정할 때 적용하는 공통 기준(Source of Truth)**을 관리합니다.

목표는 문서마다 기준이 달라지는 것을 막고, 입문자가 어느 미션을 열어도 같은 원칙으로 이해·실행·검증할 수 있게 하는 것입니다.

## 기준 적용 우선순위

```text
공식 Codyssey Mission / Evaluation / 제공 파일
        ↓
현재 Repository의 실제 상태와 파일
        ↓
Control Tower의 현재 운영 상태
        ↓
이 standards/ 공통 기준
        ↓
각 Mission의 README / BEGINNER-GUIDE / docs
```

공식 요구와 공통 표준이 충돌하면 **공식 Mission/Evaluation이 우선**합니다.

---

## 문서 생성 시 반드시 보는 기준

### 1. 입문자 훈련·문서 생성

[BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md)

새 `README.md`, `BEGINNER-GUIDE.md`, `START-CHECK.md`, `prerequisites.md`, Troubleshooting, Evaluation Guide 등을 만들거나 크게 수정할 때 적용합니다.

핵심 원칙:

```text
Self-contained First
→ 쉬운 한글 설명
→ 한글 + 영어 원어
→ 개념/도식
→ 최소 예제
→ 실제 따라하기
→ 명령·코드 해설
→ 정상 결과
→ 오류 복구
→ 완료 확인
→ 평가 연결
```

문서 품질 내부 판정은 `BEGINNER READY`를 사용하며, 이는 공식 Mission CLEAR와 별개입니다.

### 2. README 정보 구조

[README-INFORMATION-ARCHITECTURE-STANDARD.md](README-INFORMATION-ARCHITECTURE-STANDARD.md)

루트 README와 Mission README를 **입문자 우선(Beginner First)**으로 설계할 때 적용합니다.

핵심 원칙:

```text
저장소 목적
→ 지금 할 일
→ 첫 명령과 정상 결과
→ 현재 Mission / Beginner Guide
→ 전체 미션 지도
→ 각 Mission Beginner Guide 직접 진입
→ 현재 진행 상태
→ 필요할 때만 상세 운영 정보
```

긴 README는 다음을 우선합니다.

- 클릭 가능한 목차
- `1부 — 처음 시작하는 분 / 2부 — 전체 미션 지도 / 3부 — 상세 운영 정보` 또는 동등한 3계층 구조
- 처음 볼 문서 3개 이내
- 상세 운영 정보의 Progressive Disclosure(`<details>` 등)
- 좁은 화면에서도 읽기 쉬운 표
- 미션 정보가 많은 경우 미션당 3행(`미션 / 과정 / 시작`) 구조
- `시작` 행에서 저장소(Repository) + `▶ 입문자 따라하기(Beginner Guide)` 직접 연결

### 3. 입문자 문서 품질 감사

[BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)

15개 Mission/Term Project의 `BEGINNER-GUIDE.md`가 존재하는지뿐 아니라, **현재 상태·환경·공식 요구와 정합하고 실제 따라하기로 기능하는지** 관리합니다.

핵심 원칙:

```text
가이드 존재 확인
→ 메인 README 직접 연결
→ 현재 상태/환경 정합성
→ 실제 따라하기
→ 명령·코드 줄별 해설
→ 정상 결과/오류 복구
→ 평가/증빙 연결
→ BEGINNER READY 판정
```

현재 Active Mission을 P0로 두고, 다음 필수 미션(P1), 선택 미션(P2) 순서로 실제 실행 전에 감사·교정합니다. 표준 변경만을 이유로 15개 문서를 기계적으로 한꺼번에 다시 쓰지 않습니다.

### 4. 명령어·코드 한 줄 해설

[COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md)

입문자가 명령과 코드를 단순 복사하지 않고 **실행 가능한 Shell 명령 한 줄과 의미 있는 코드 한 줄의 역할을 자기 말로 설명할 수 있도록 하는 기준**입니다.

핵심 원칙:

```text
깨끗한 실행본
→ 각 실행 줄 해설
→ 중요한 옵션/인자 해설
→ 의미 있는 코드/SQL/설정 줄 해설
→ 전체 흐름
→ 예상 결과
→ 오류/복구
```

R01에서는 다음을 우선합니다.

- Shell: 학습자가 직접 실행하는 모든 명령 줄의 목적 설명
- Python/JavaScript: 의미 있는 코드 줄 설명
- SQL: 주요 절과 데이터 변화 설명
- Nginx/systemd/YAML/JSON 등: 핵심 directive/key 설명
- 빈 줄·단순 닫는 괄호·종료 태그: 독립 의미가 없으면 논리 단위로 묶어서 설명
- 실행 블록 안에 과도한 주석을 섞기보다 **실행본 + 바로 아래 줄별 해설**을 기본 형식으로 사용

### 5. 개발환경·개발 Tool Set

[DEVELOPMENT-TOOLSET-STANDARD.md](DEVELOPMENT-TOOLSET-STANDARD.md)

입문자가 개발도구를 무작정 많이 설치하지 않고 **필수 / 미션별 / 권장 / 대체 IDE / AI 도구**로 구분하고, 공용·관리형 Mac에서 관리자 권한 없이 가능한 경로를 선택하도록 관리합니다.

핵심 원칙:

```text
Host/권한 확인
→ Linux Runtime
→ 기본 Editor/IDE
→ Git/GitHub
→ Ubuntu Bootstrap
→ Mission Tool
→ Project Dependency
→ Verify
```

포함 기준:

- macOS + OrbStack Ubuntu 24.04
- Windows 11 Pro + WSL2 Ubuntu 24.04
- VS Code + Remote-SSH 기본 경로
- Cursor / Windsurf / JetBrains / Google Antigravity IDE를 대체 개발환경으로 분류
- ChatGPT / Codex / Claude / Gemini / Antigravity CLI를 선택 AI 도구로 분류
- 공용 Mac의 no-admin 사용자 영역 설치 기준
- OrbStack no-admin 경로
- VS Code Portable/User-space 경로
- Antigravity CLI의 `~/.local/bin/agy` 사용자 영역 경로
- 관리자 암호·MDM·보안정책 우회 금지

입문자 실제 설치·설정 순서는 [`../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`](../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 사용합니다.

### 6. 한글·영어 용어

[TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)

핵심 기술·운영 용어는 첫 등장 시 다음 형식을 우선합니다.

```text
한글 의미(English Original)
```

명령어, 경로, 파일명, 코드 식별자, 제품 공식명은 임의 번역하지 않습니다.

### 7. Canonical Reference

[CANONICAL-REFERENCE-STANDARD.md](CANONICAL-REFERENCE-STANDARD.md)

각 미션의 Reference, Beginner Guide, Checklist, Verify, Evidence가 어떤 역할을 갖는지 관리합니다.

### 8. 환경

[ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md)

Ubuntu 개발환경, Mission package, `.venv`, Secret, Setup/Verify/Reset, 공용 Mac no-admin 원칙을 관리합니다.

### 9. Cross-platform Git/File

[CROSS-PLATFORM-GIT-STANDARD.md](CROSS-PLATFORM-GIT-STANDARD.md)

UTF-8, LF, `.gitattributes`, `.editorconfig`, executable bit, Windows/macOS/Linux 간 파일 차이를 관리합니다.

### 10. VS Code Remote Ubuntu

[VS-CODE-REMOTE-UBUNTU-STANDARD.md](VS-CODE-REMOTE-UBUNTU-STANDARD.md)

macOS/Windows의 VS Code UI와 Ubuntu 실제 Workspace/Terminal/Git/Python 실행 위치를 구분하는 기준입니다.

---

## 새 입문자 문서 생성 흐름

```text
1. 공식 Source 확인
        ↓
2. 현재 Repository/Runtime 상태 확인
        ↓
3. 문서 역할 결정
        ↓
4. BEGINNER-TRAINING-STANDARD 적용
        ↓
5. 명령/코드가 있으면 COMMAND-CODE-EXPLANATION-STANDARD 적용
        ↓
6. 개발환경/Tool 문서라면 DEVELOPMENT-TOOLSET-STANDARD 적용
        ↓
7. README라면 README-INFORMATION-ARCHITECTURE-STANDARD 적용
        ↓
8. TERMINOLOGY-STANDARD 적용
        ↓
9. 필요한 Environment/Canonical Standard 적용
        ↓
10. 링크·명령·경로·상태 정합성 확인
        ↓
11. Beginner Documentation Audit
        ↓
12. BEGINNER READY 또는 보완 필요
```

---

## 문서 역할 분리

가능하면 다음 역할을 유지합니다.

| 문서 | 기본 역할 |
|---|---|
| `README.md` | 처음 진입, 지금 할 일, 대표 경로, 탐색(Navigation) |
| `BEGINNER-GUIDE.md` | 실제 수행의 대표 학습 경로 |
| `START-HERE-DEVELOPMENT-ENVIRONMENT.md` | 개발환경/도구 처음부터 끝까지 시작 경로 |
| `START-CHECK.md` | 선행 조건·선행 지식 확인 |
| `prerequisites.md` | 실행 전 환경·도구 준비 |
| `TROUBLESHOOTING.md` 또는 동등 문서 | 오류 원인·확인·복구 |
| `EVALUATION-GUIDE.md` 또는 동등 문서 | 평가 요구와 수행 결과 연결 |
| `requirements-mapping.md` | Requirement → Implementation → Verification → Evidence |

필요 없는 파일은 형식 때문에 만들지 않습니다. 대신 대표 실행 문서에서 필요한 정보로 바로 이동할 수 있어야 합니다.

---

## 문서 품질과 Mission 진행의 관계

문서 표준은 학습 품질을 높이기 위한 내부 기준입니다.

```text
문서 오류가 Runtime/평가를 막음
→ 즉시 최소 수정
→ 재검증

문서 개선이 현재 Runtime과 무관함
→ 개선 후보로 기록
→ 미션 실행 계속
```

문서 품질 개선 때문에 이미 준비된 실제 미션 수행을 불필요하게 중단하지 않습니다.

---

## 금지

- 공식 Source를 확인하지 않고 Mission 요구를 추정하여 작성
- 과거 Phase/OS/경로를 현재 상태처럼 복사
- 영어 용어만 연속 사용하여 입문자 이해를 전제
- 여러 실행 명령을 제시하고 일부 핵심 명령만 설명하여 나머지를 입문자가 추측하게 함
- 중요한 옵션·인자·입력값의 의미를 생략
- 의미 있는 코드/SQL/설정 줄을 설명하지 않은 채 전체 코드만 제공
- 명령만 제시하고 정상 결과/의미/복구 방법을 생략
- 모든 괄호/빈 줄/종료 태그까지 기계적으로 반복 설명하여 핵심 흐름을 가림
- 공용/관리형 Mac에서 관리자 암호·sudo·MDM/보안정책 우회를 정상 설치 절차로 안내
- no-admin 환경에서 시스템 전역 설치만 제시하고 사용자 영역/Remote/CLI 대안을 제공하지 않음
- 외부 블로그·영상이 없으면 수행할 수 없는 문서 구조
- README 첫 화면에 운영자용 상세 정책을 과도하게 노출
- 긴 README에 탐색용 목차 없이 정보만 누적
- 각 미션을 나열하면서 Beginner Guide 직접 진입 링크를 제공하지 않음
- 동일한 상세 정책을 README와 하위 문서에 반복 복제
- 실제 실행하지 않은 결과를 PASS/CLEAR/Evidence로 표현
- Secret, Token, Password, Private Key를 문서·로그·Evidence에 기록
- 형식을 맞추기 위해 불필요한 파일을 대량 생성

---

## 관리 원칙

기준을 변경할 때는 다음 순서를 사용합니다.

```text
기준 문서 수정
→ 관련 표준과 충돌 확인
→ 현재 Active Mission에 미치는 영향 확인
→ Runtime blocker만 즉시 교정
→ 나머지 기존 문서는 순차 반영
```

15개 미션 전체를 기준 변경만을 이유로 기계적으로 한 번에 재작성하지 않습니다. 대신 [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)에서 현재 Active Mission부터 실행 순서에 맞춰 감사·교정합니다.
