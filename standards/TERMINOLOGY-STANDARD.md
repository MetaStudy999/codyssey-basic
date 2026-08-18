# 한글·영어 병기 표준(Terminology Standard)

Codyssey Basic의 입문자 문서는 **한글로 먼저 이해하고, 실제 개발 현장에서 사용하는 영어 원어도 함께 익힐 수 있도록** 작성합니다.

## 1. 기본 원칙

처음 등장하는 핵심 기술·운영 용어는 다음 형식을 기본으로 합니다.

```text
한글 의미(English Original)
```

예:

```text
실행 환경(Runtime)
검증(Verification)
증빙 자료(Evidence)
미션 완료(CLEAR)
현재 미션(Active Mission)
필수 미션(Required Mission)
선택 미션(Optional Mission)
실행 전 점검(Preflight)
빠른 실행 경로(FAST TRACK)
개발환경 초기 준비(Bootstrap)
공통 환경 동결(Common Environment Freeze)
```

입문자가 뜻을 먼저 이해하고, 이후 로그·문서·IDE·GitHub·클라우드에서 같은 영어 원어를 알아볼 수 있게 하는 것이 목적입니다.

### 핵심 문장 규칙

입문자용 한국어 문장과 제목에서는 **한국어가 문장의 중심어**가 되어야 합니다.

```text
권장: 개발환경 최종 검증(Verification)
권장: 검증이 끝나면 다음 단계로 이동합니다.

비권장: 개발환경 최종 Verify
비권장: Verify가 끝나면 다음 단계로 이동합니다.
```

영어가 익숙하다는 이유만으로 한국어 문장 중간에 핵심 개념을 영어 단독으로 삽입하지 않습니다.

---

## 2. 영어 원어의 품사까지 맞춥니다

한글 의미와 영어 원어를 병기할 때 **영어의 명사·동사 형태를 문맥에 맞게 사용**합니다.

### 검증 관련 표준

| 문맥 | 권장 표기 | 설명 |
|---|---|---|
| 개념·단계·제목 | 검증(Verification) | 명사 |
| 동작 자체를 영어 동사로 가르칠 때 | 검증하다(Verify) | 동사 |
| 실제 파일명 | `verify.sh` | 파일명은 그대로 유지 |
| 실제 명령 | `bash verify.sh` | 명령은 그대로 유지 |
| 실제 UI 버튼 이름이 `Verify`인 경우 | `Verify` 버튼(검증) | 공식 UI 문자열을 먼저 보존 가능 |

따라서 다음과 같이 구분합니다.

```text
개발환경 최종 검증(Verification)       O
검증(Verification) 단계               O
다시 검증합니다.                      O
검증하다(Verify)라는 동작              O
verify.sh를 실행합니다.                O

개발환경 최종 Verify                   X
검증(Verify) 단계                      X  ← 명사 자리에 동사 원형 사용
```

같은 원칙을 다른 용어에도 적용합니다. 예를 들어 명사 문맥에서는 `Validation`, `Installation`, `Configuration`처럼 명사형을 쓰고, 동작 설명에서만 `Validate`, `Install`, `Configure` 같은 동사형을 사용합니다.

> `Verification`과 `Validation`은 기술 문맥에 따라 의미가 다를 수 있으므로 임의로 서로 바꾸지 않습니다. 현재 문서가 요구사항 충족 여부를 확인하는 의미라면 기본적으로 **검증(Verification)**을 사용합니다.

---

## 3. 첫 등장과 반복 표기

### 첫 등장

한글 뜻과 영어 원어를 함께 적습니다.

```text
실행 환경(Runtime)
브랜치(Branch)
커밋(Commit)
검증(Verification)
```

### 같은 문서에서 반복

문맥이 충분히 형성된 뒤에는 **한국어만 사용하는 것을 우선**합니다.

예:

```text
첫 등장: 개발환경 최종 검증(Verification)
이후: 다시 검증합니다.
이후: 검증 결과를 확인합니다.
```

영어 원어를 반복해야 학습상 의미가 있거나 실제 UI·로그·코드와 연결해야 하는 경우에만 다시 병기합니다.

단, 입문자용 `README.md`, `BEGINNER-GUIDE.md`, `START-CHECK.md`, `prerequisites.md`에서는 의미가 혼동될 수 있는 핵심 용어는 병기를 우선합니다.

---

## 4. 번역하지 않고 유지하는 것

명령어, 파일명, 경로, 코드 식별자, 제품·서비스의 공식 고유명은 임의 번역하지 않습니다.

```text
git status
gh auth login
verify.sh
README.md
BEGINNER-GUIDE.md
package.json
pyproject.toml
GitHub
Ubuntu
Docker
FastAPI
VS Code
OrbStack
```

필요하면 옆에 한국어 설명만 덧붙입니다.

예:

```text
NEXT-ACTIONS.md — 다음 작업 안내
PHASE-C-PREFLIGHT.md — 실행 전 사전 점검
BEGINNER-GUIDE.md — 입문자 따라하기 가이드
ENVIRONMENT-CLOSEOUT.md — 공통환경 마무리 점검
verify.sh — 자동 검증 스크립트
```

---

## 5. 공식 UI 문자열 예외

GitHub, AWS, VS Code, Cloud Console 등에서 사용자가 **실제 화면에서 찾아야 하는 버튼·메뉴 이름**은 공식 영어 문자열을 보존할 수 있습니다.

예:

```text
`Settings` 메뉴(설정)
`Verify` 버튼(검증)
`Create pull request` 버튼(풀 리퀘스트 생성)
```

이 경우에도 설명 문장은 한국어로 작성합니다.

```text
`Verify` 버튼(검증)을 클릭합니다.
→ 검증 결과가 성공인지 확인합니다.
```

즉, **공식 UI 이름 보존**과 **한국어 설명 우선**을 동시에 지킵니다.

---

## 6. 약어 표기

약어는 처음 등장할 때 가능하면 **영문 원문 + 한글 의미**를 함께 제공합니다.

```text
CLI(Command-Line Interface, 명령줄 인터페이스)
API(Application Programming Interface, 응용 프로그램 인터페이스)
SSH(Secure Shell, 보안 원격 접속)
ACL(Access Control List, 접근 제어 목록)
CRUD(Create, Read, Update, Delete — 생성·조회·수정·삭제)
```

약어의 공식 확장형이 문서 목적상 과도하게 길거나 오히려 혼란을 주는 경우에는 한글 의미 + 약어만 병기할 수 있습니다.

---

## 7. 운영 용어 표준

| 권장 표기 | 의미 |
|---|---|
| 훈련 차수(Round) | 같은 기준으로 수행하는 훈련 단위 |
| 현재 미션(Active Mission) | 지금 실제로 수행 중인 미션 |
| 필수 미션(Required Mission) | 우선 완료해야 하는 핵심 미션 |
| 선택 미션(Optional Mission) | 필수 이후 진행하는 선택 미션 |
| 실행 환경(Runtime) | 프로그램·서비스를 실제 실행하는 환경 |
| 실제 실행(Runtime Execution) | 준비물이 아니라 실제 시스템에서 동작시키는 단계 |
| 검증(Verification) | 요구사항이 실제로 충족됐는지 확인하는 단계 |
| 검증하다(Verify) | 실제로 확인 동작을 수행한다는 동사 표현 |
| 증빙 자료(Evidence) | 실행·검증 결과를 확인할 수 있는 기록 |
| 완료(CLEAR) | 요구·검증·증빙까지 충족된 상태 |
| 실행 전 점검(Preflight) | 실제 실행(Runtime) 전에 위험·누락을 확인하는 단계 |
| 빠른 실행 방식(FAST EXECUTE) | 불필요한 재설계를 줄이고 현재 미션 완료에 집중하는 방식 |
| 빠른 실행 경로(FAST TRACK) | 미션 수행 순서를 정한 내부 실행 경로 |
| 시작 점검(START-CHECK) | 선행 지식·필수 조건을 확인하는 단계 |
| 기준 구현(Reference Build) | 수행 기준으로 참고하는 구현·가이드 준비 |
| 전체 교차 점검(Cross-Mission Audit) | 여러 미션 간 충돌·일관성을 확인 |
| 공통 환경 초기 준비(Bootstrap) | 새 Ubuntu에서 공통 개발도구를 준비·검증하는 과정 |
| 공통 환경 동결(Common Environment Freeze) | 공통 환경 확장을 멈추고 미션 실행을 우선하는 상태 |

---

## 8. 개발 용어 표준 예시

| 권장 표기 | 비고 |
|---|---|
| 저장소(Repository) | Git 저장소 |
| 브랜치(Branch) | Git 작업 분기 |
| 커밋(Commit) | Git 변경 기록 |
| 풀 리퀘스트(Pull Request, PR) | GitHub 병합 요청 |
| 이슈(Issue) | GitHub 작업·문제 추적 단위 |
| 가상환경(Virtual Environment, `.venv`) | Python 프로젝트 의존성 격리 |
| 의존성(Dependency) | 프로젝트가 필요로 하는 패키지·구성요소 |
| 패키지(Package) | 설치·배포 단위 |
| 서비스(Service) | 백그라운드에서 동작하는 시스템 프로그램 |
| 프로세스(Process) | 실행 중인 프로그램 인스턴스 |
| 포트(Port) | 네트워크 서비스 접속 번호 |
| 로그(Log) | 실행 상태·오류 기록 |
| 환경 변수(Environment Variable) | 실행 시 참조하는 설정 값 |
| 비밀정보(Secret) | 키·토큰·비밀번호 등 공개하면 안 되는 값 |

---

## 9. 제목·목차·흐름도 표기 기준

제목과 목차는 특히 입문자가 처음 보는 위치이므로 영어 단독 핵심 용어를 남발하지 않습니다.

권장:

```text
PART 6 — 개발환경 최종 검증(Verification)
빠른 시작(Quick Start)
실행 전 점검(Preflight)
복구(Recovery)
증빙 자료(Evidence)
```

비권장:

```text
PART 6 — 개발환경 최종 Verify
Verify / Evidence
Recovery Step
```

흐름도도 가능하면 처음에는 다음처럼 씁니다.

```text
생성(Create)
→ 검증(Verification)
→ 증빙(Evidence)
→ 정리(Cleanup)
```

문서 안에서 의미가 충분히 형성된 뒤에는 한국어 중심으로 줄일 수 있습니다.

---

## 10. 문서 작성 순서

입문자 문서는 다음 순서를 우선합니다.

```text
쉬운 한글 설명
→ 영어 원어 병기
→ 실제 명령어/파일명
→ 실행 예
→ 검증 방법
```

예:

```text
실행 전 점검(Preflight)을 먼저 수행합니다.

bash training/round-01-clear/PHASE-C-PREFLIGHT.sh

이 단계는 실제 미션 실행(Runtime) 전에 환경 누락이나 충돌을 찾기 위한 것입니다.
```

---

## 11. 피해야 할 표현

```text
X 영어 용어만 연속해서 사용
X 한국어 문장 중간에 핵심 개념을 영어 단독으로 삽입
X 명사 자리에 영어 동사 원형을 병기
X 같은 용어를 문서마다 다르게 번역
X 명령어·파일명·제품명을 임의 한글화
X 한글 번역만 남겨 실제 영어 원어를 알아보기 어렵게 작성
X 한 문장에 모든 영어를 억지로 병기하여 가독성을 떨어뜨림
```

특히 다음 패턴은 감사 시 교정 대상으로 봅니다.

```text
최종 Verify
Verify가 끝나면
Verify / Evidence
Setup 후 Verify
```

권장 교정:

```text
최종 검증(Verification)
검증이 끝나면
검증(Verification) / 증빙(Evidence)
설정(Setup) 후 검증(Verification)
```

---

## 12. 적용 범위

이 표준은 다음 문서에 우선 적용합니다.

```text
메인 README.md
각 Mission README.md
BEGINNER-GUIDE.md
START-CHECK.md
prerequisites.md
NEXT-ACTIONS.md
환경/훈련 안내 문서
신규 학습 문서
```

공식 Mission PDF/MD, Evaluation 원문, 제공 파일의 공식 문구는 임의로 번역해 원문을 바꾸지 않습니다. 필요한 경우 원문을 유지하고 별도의 입문자 설명에서 한글·영어 병기를 제공합니다.

---

## 13. 적용 완료 기준 — 용어도 정책(POLICY) → 적용(APPLY) → 검증(VERIFY)

용어 기준도 문서에 적어 두는 것만으로 완료하지 않습니다.

```text
정책(POLICY)
한글·영어 표기 기준 정의
        ↓
적용(APPLY)
현재 사용자가 읽는 문서에 실제 적용
        ↓
검증(VERIFY)
다시 열어 영어 단독 핵심 용어와 품사 오류 확인
```

특히 새로 수정한 입문자 문서는 마지막에 다음을 확인합니다.

```text
[ ] 제목에 영어 단독 핵심 용어가 남아 있지 않은가?
[ ] 첫 등장 핵심 용어가 한글(영어)로 되어 있는가?
[ ] 명사 문맥에 동사형 영어를 잘못 쓰지 않았는가?
[ ] `verify.sh` 같은 실제 파일명은 변경하지 않았는가?
[ ] 실제 UI 영문은 보존하되 한글 설명을 붙였는가?
[ ] 반복 문장에서는 불필요한 영어 병기를 줄였는가?
```

---

## 14. 운영 원칙

기존 15개 미션의 모든 문장을 한 번에 대량 수정하는 것은 피합니다. 현재 실제 실행(Runtime)을 막지 않는 기존 문서는 보존하고, **사용자가 실제로 읽는 입문자 경로와 새로 수정하는 문서부터 이 표준을 적용**합니다.

```text
새 문서/현재 수정 문서
→ 한글·영어 병기 표준(Terminology Standard) 적용
→ 실제 파일 재확인

기존 문서
→ 실제 실행 차단 문제(Runtime blocker)/학습 혼동이 있으면 우선 교정
→ 그 외에는 미션 진행을 멈추지 않고 순차 교정
```

이 방식으로 문서 정합성과 실제 미션 진행 속도를 함께 유지합니다.
