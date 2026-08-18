# Standards Registry — 기준 관리

이 디렉터리는 Codyssey Basic에서 **문서·훈련·환경·Reference를 새로 만들거나 수정할 때 적용하는 공통 기준(Source of Truth)**을 관리합니다.

목표는 문서마다 기준이 달라지는 것을 막고, 입문자가 어느 미션을 열어도 같은 원칙으로 이해·실행·검증할 수 있게 하는 것입니다.

## 한눈에 보기(Quick Read)

기준을 사용할 때 가장 중요한 순서는 다음입니다.

```text
공식 Source 확인
→ 현재 실제 상태 확인
→ 문서 역할 판단
→ 필요한 기준만 적용
→ 실제 대상 문서 수정
→ 다시 열어 검증(VERIFY)
```

즉 **기준을 많이 적용하는 것보다 필요한 기준을 실제 문서와 실행 환경(Runtime)에 정확히 적용하는 것**을 우선합니다.

Control Tower 문서별 적용 현황은 다음 문서에서 관리합니다.

- [`../docs/CONTROL-TOWER-DOCUMENT-MAP.md`](../docs/CONTROL-TOWER-DOCUMENT-MAP.md) — Root/docs/environments/training/standards 문서 적용 지도

## 📑 목차

- [기준 적용 우선순위](#priority)
- [1. 입문자 훈련·문서 생성](#beginner-training)
- [2. README 정보 구조](#readme-ia)
- [2.1 목차·빠른 시작](#navigation)
- [2.2 긴 입문자 가이드 모듈화](#guide-modularization)
- [3. 입문자 문서 품질 감사](#beginner-audit)
- [4. 명령어·코드 한 줄 해설](#command-code)
- [5. 개발환경·개발 Tool Set](#toolset)
- [5.1 주요 LLM/AI CLI](#ai-cli)
- [6. 한글·영어 용어](#terminology)
- [7. Canonical Reference](#canonical)
- [8. 환경](#environment)
- [9. Cross-platform Git/File](#cross-platform)
- [10. VS Code Remote Ubuntu](#vscode)
- [새 입문자 문서 생성 흐름](#creation-flow)
- [문서 역할 분리](#roles)
- [문서 품질과 Mission 진행의 관계](#quality-progress)
- [금지](#forbidden)
- [관리 원칙](#management)

---

<a id="priority"></a>
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

<a id="beginner-training"></a>
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
→ 실행 위치(Context) / 실행 전 점검(Preflight)
→ 실제 따라하기
→ 명령·코드 해설
→ 정상 결과와 정상 범위
→ 재실행 안전성(Rerun Safety) / STOP-GO
→ 오류 복구 / 중간 저장점(Checkpoint)
→ 완료 확인
→ 평가 연결
```

입문자 실행 안전 7원칙:

```text
1. 실행 위치(Context)
2. 실행 전 점검(Preflight) + STOP / GO
3. 재실행 안전성(Rerun Safety)
4. 복사·붙여넣기 안전(Copy & Paste Safety)
5. 출력 변동(Output Variation)
6. 중간 저장점(Checkpoint) / 복구(Recovery)
7. 비용·자원 보호(Cost / Resource Guard)
```

문서 품질 내부 판정은 `BEGINNER READY`를 사용하며, 이는 공식 Mission CLEAR와 별개입니다.

<a id="readme-ia"></a>
### 2. README 정보 구조

[README-INFORMATION-ARCHITECTURE-STANDARD.md](README-INFORMATION-ARCHITECTURE-STANDARD.md)

루트 README와 Mission README를 **입문자 우선(Beginner First)**으로 설계할 때 적용합니다.

핵심 원칙:

```text
저장소 목적
→ 지금 할 일
→ 첫 명령과 정상 결과
→ 현재 미션(Active Mission) / 입문자 가이드(Beginner Guide)
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

<a id="navigation"></a>
### 2.1 목차·빠른 시작(Quick Start)

[DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md)

입문자가 긴 문서에서 길을 잃지 않고, 이미 한 번 수행한 사람은 빠르게 재진입할 수 있도록 **문서 상단 탐색 구조와 빠른 시작(Quick Start) 기준**을 관리합니다.

핵심 원칙:

```text
문서 제목
→ 한 문장 목적
→ 실행형 문서면 🚀 빠른 시작(Quick Start)
→ 길거나 여러 섹션이면 📑 클릭 가능한 목차
→ 상세 따라하기
→ 검증(Verification) / 완료 확인
```

적용 원칙:

- `README`, `BEGINNER-GUIDE`, `START-HERE`, 환경 설정·검증(Setup/Verification), Hands-on 문서에는 안전한 빠른 시작(Quick Start) 또는 동등한 빠른 진입 경로를 우선합니다.
- 긴 문서나 여러 H2/H3 섹션이 있는 문서는 클릭 가능한 목차를 우선합니다.
- 짧은 체크리스트·단일 Reference·순수 Standard 문서에는 형식만을 위해 Quick Start/목차를 강제하지 않습니다.
- Standard/Glossary/ADR 같은 비실행 문서는 `Quick Start` 대신 `요약`, `이 문서를 언제 보는가`, `핵심 원칙`을 사용할 수 있습니다.
- Quick Start는 실행 전 점검(Preflight), STOP/GO, 재실행 안전성(Rerun Safety), Secret/비용 보호를 우회하지 않습니다.
- 위험한 삭제·Reset·Firewall·DB destructive 작업·고비용 Cloud/API 명령을 Quick Start에 무분별하게 넣지 않습니다.

즉 **모든 문서는 빠르게 진입할 수 있어야 하지만, 모든 문서에 동일한 Quick Start 명령 블록을 기계적으로 넣지는 않습니다.**

<a id="guide-modularization"></a>
### 2.2 긴 입문자 가이드 모듈화 — 필수

[BEGINNER-GUIDE-MODULARIZATION-STANDARD.md](BEGINNER-GUIDE-MODULARIZATION-STANDARD.md)

긴 `BEGINNER-GUIDE.md`를 한 파일에 계속 누적하지 않고 **중앙 허브(Hub) + `guide/` 학습 모듈(Module)** 구조로 관리합니다.

모듈화 판정(Trigger) 중 하나라도 해당하면 **필수(MUST)**입니다.

```text
실행 STEP 8개 이상
또는 100KB 이상
또는 1,000줄 이상
또는 여러 기술 관심사가 한 파일에 혼재
또는 입문자가 현재 위치를 잃을 정도로 복잡함
```

Trigger에 해당하는데 상세 STEP 전체가 한 파일에 남아 있으면 `BEGINNER READY`로 판정하지 않습니다.

```text
BEGINNER-GUIDE.md = Quick Start + 전체 지도 + 모듈 링크

guide/*.md         = 실제 상세 따라하기
```

분할은 내용 삭제가 아니라 구조 리팩터링(Refactoring)이며, STEP/요구사항/명령/복구/증빙 연결을 보존해야 합니다.

<a id="beginner-audit"></a>
### 3. 입문자 문서 품질 감사

[BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)

15개 Mission/Term Project의 `BEGINNER-GUIDE.md`가 존재하는지뿐 아니라, **현재 상태·환경·공식 요구와 정합하고 실제 따라하기로 기능하는지** 관리합니다.

핵심 원칙:

```text
가이드 존재 확인
→ 메인 README 직접 연결
→ 현재 상태/환경 정합성
→ 빠른 시작(Quick Start) / 목차 적합성
→ 실제 따라하기
→ 실행 위치(Context) / 실행 전 점검(Preflight)
→ 명령·코드 줄별 해설
→ 복사·붙여넣기(Copy/Paste) / 출력 변동(Output Variation)
→ 재실행 안전성(Rerun Safety) / STOP-GO
→ 중간 저장점(Checkpoint) / 복구(Recovery)
→ 정상 결과/오류 복구
→ 평가/증빙/비용 자원 정리(Cleanup) 연결
→ BEGINNER READY 판정
```

현재 미션(Active Mission)을 P0로 두고, 다음 필수 미션(P1), 선택 미션(P2) 순서로 실제 실행 전에 감사·교정합니다. 표준 변경만을 이유로 15개 문서를 기계적으로 한꺼번에 다시 쓰지 않습니다.

<a id="command-code"></a>
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
→ 예상 결과와 정상 범위
→ 복사·붙여넣기 안전(Copy/Paste Safety)
→ 재실행 안전성(Rerun Safety)
→ 오류/복구
```

R01에서는 다음을 우선합니다.

- Shell: 학습자가 직접 실행하는 모든 명령 줄의 목적 설명
- Python/JavaScript: 의미 있는 코드 줄 설명
- SQL: 주요 절과 데이터 변화 설명
- Nginx/systemd/YAML/JSON 등: 핵심 directive/key 설명
- 빈 줄·단순 닫는 괄호·종료 태그: 독립 의미가 없으면 논리 단위로 묶어서 설명
- 실행 블록 안에 과도한 주석을 섞기보다 **실행본 + 바로 아래 줄별 해설**을 기본 형식으로 사용
- Shell prompt/설명/예상 출력은 실행 블록에 섞지 않음
- 상태 변경 명령은 필요한 경우 재실행 안전 등급을 표시

<a id="toolset"></a>
### 5. 개발환경·개발 Tool Set

[DEVELOPMENT-TOOLSET-STANDARD.md](DEVELOPMENT-TOOLSET-STANDARD.md)

입문자가 개발도구를 무작정 많이 설치하지 않고 **필수 / 미션별 / 권장 / 대체 IDE / AI 도구**로 구분하고, 공용·관리형 Mac에서 관리자 권한 없이 가능한 경로를 선택하도록 관리합니다.

핵심 원칙:

```text
Host/권한 확인
→ Linux 실행 환경(Runtime)
→ 기본 Editor/IDE
→ Git/GitHub
→ Ubuntu 공통 환경 초기 준비(Bootstrap)
→ 미션 도구(Mission Tool)
→ 프로젝트 의존성(Project Dependency)
→ 검증(Verification)
```

포함 기준:

- macOS + OrbStack Ubuntu 24.04
- Windows 11 Pro + WSL2 Ubuntu 24.04
- VS Code + Remote-SSH 기본 경로
- Cursor / Windsurf / JetBrains / Google Antigravity IDE를 대체 개발환경으로 분류
- OpenAI Codex CLI / Anthropic Claude Code / Google Gemini CLI / Antigravity CLI를 선택 AI CLI로 분류
- 공용 Mac의 no-admin 사용자 영역 설치 기준
- OrbStack no-admin 경로
- VS Code Portable/User-space 경로
- 관리자 암호·MDM·보안정책 우회 금지

입문자 실제 설치·설정 순서는 [`../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md`](../environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md)를 사용합니다.

<a id="ai-cli"></a>
### 5.1 주요 LLM/AI CLI

[AI-CLI-TOOLSET-STANDARD.md](AI-CLI-TOOLSET-STANDARD.md)

Codex CLI, Claude Code, Gemini CLI, Antigravity CLI의 **공식 설치·인증·no-admin·Remote/SSH·검증·동시 사용 안전 기준**을 관리합니다.

핵심 원칙:

```text
AI CLI 하나 선택
→ 사용자 영역/Ubuntu에 설치
→ 공식 계정 인증
→ 작업 전 pwd / git status / branch 확인
→ 분석·계획부터 시작
→ 한 Worktree 한 실제 수정 Agent
→ 변경 비교(Diff) / 테스트(Test) / 검증(Verification)
→ 실제 증빙(Evidence)만 기록
```

공용 Mac에서는 시스템 권한을 우회하지 않고 사용자 영역 또는 OrbStack Ubuntu 경로를 우선합니다.

<a id="terminology"></a>
### 6. 한글·영어 용어

[TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)

핵심 기술·운영 용어는 첫 등장 시 다음 형식을 우선합니다.

```text
한글 의미(English Original)
```

명령어, 경로, 파일명, 코드 식별자, 제품 공식명은 임의 번역하지 않습니다.

<a id="canonical"></a>
### 7. Canonical Reference

[CANONICAL-REFERENCE-STANDARD.md](CANONICAL-REFERENCE-STANDARD.md)

각 미션의 Reference, Beginner Guide, Checklist, 검증(Verification), 증빙(Evidence)이 어떤 역할을 갖는지 관리합니다.

<a id="environment"></a>
### 8. 환경

[ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md)

Ubuntu 개발환경, Mission package, `.venv`, Secret, 설정(Setup)/검증(Verification)/초기화(Reset), 공용 Mac no-admin 원칙과 실행 위치/실행 전 점검(Preflight)/중간 저장점(Checkpoint)/비용 자원 보호를 관리합니다.

<a id="cross-platform"></a>
### 9. Cross-platform Git/File

[CROSS-PLATFORM-GIT-STANDARD.md](CROSS-PLATFORM-GIT-STANDARD.md)

UTF-8, LF, `.gitattributes`, `.editorconfig`, executable bit, Windows/macOS/Linux 간 파일 차이를 관리합니다.

<a id="vscode"></a>
### 10. VS Code Remote Ubuntu

[VS-CODE-REMOTE-UBUNTU-STANDARD.md](VS-CODE-REMOTE-UBUNTU-STANDARD.md)

macOS/Windows의 VS Code UI와 Ubuntu 실제 Workspace/Terminal/Git/Python 실행 위치를 구분하는 기준입니다.

---

<a id="creation-flow"></a>
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
5. DOCUMENT-NAVIGATION-QUICK-START-STANDARD로 Quick Start/목차 적용 여부 결정
        ↓
6. 실행 위치 / 실행 전 점검(Preflight) / STOP-GO / 재실행 안전성(Rerun Safety) 확인
        ↓
7. 명령/코드가 있으면 COMMAND-CODE-EXPLANATION-STANDARD 적용
        ↓
8. 개발환경/Tool 문서라면 DEVELOPMENT-TOOLSET-STANDARD 적용
        ↓
9. AI CLI를 다루면 AI-CLI-TOOLSET-STANDARD 적용
        ↓
10. README라면 README-INFORMATION-ARCHITECTURE-STANDARD 적용
        ↓
11. TERMINOLOGY-STANDARD 적용
        ↓
12. 필요한 Environment/Canonical Standard 적용
        ↓
13. 링크·명령·경로·상태 정합성 확인
        ↓
14. 실제 대상 문서를 다시 열어 검증(VERIFY)
        ↓
15. Beginner Documentation Audit
        ↓
16. BEGINNER READY 또는 보완 필요
```

---

<a id="roles"></a>
## 문서 역할 분리

가능하면 다음 역할을 유지합니다.

| 문서 | 기본 역할 |
|---|---|
| `README.md` | 처음 진입, 지금 할 일, Quick Start/대표 경로, 탐색(Navigation) |
| `BEGINNER-GUIDE.md` | Quick Start + 실제 수행의 대표 학습 경로 |
| `START-HERE-DEVELOPMENT-ENVIRONMENT.md` | 개발환경 Quick Start + 처음부터 끝까지 시작 경로 |
| `DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md` | 모든 문서의 목차/빠른 진입 적용 기준 |
| `CONTROL-TOWER-DOCUMENT-MAP.md` | 통합 레포 문서별 역할·적용·검증 상태 |
| `AI-CLI-TOOLSET-STANDARD.md` | 주요 AI CLI 설치·인증·안전 사용 기준 |
| `START-CHECK.md` | 선행 조건·선행 지식 확인 |
| `prerequisites.md` | 실행 전 환경·도구 준비 |
| `TROUBLESHOOTING.md` 또는 동등 문서 | 빠른 진단 + 오류 원인·확인·복구 |
| `EVALUATION-GUIDE.md` 또는 동등 문서 | 빠른 평가 확인 + 평가 요구와 수행 결과 연결 |
| `requirements-mapping.md` | Requirement → Implementation → Verification → Evidence |

필요 없는 파일은 형식 때문에 만들지 않습니다. 대신 대표 실행 문서에서 필요한 정보로 바로 이동할 수 있어야 합니다.

---

<a id="quality-progress"></a>
## 문서 품질과 Mission 진행의 관계

문서 표준은 학습 품질을 높이기 위한 내부 기준입니다.

```text
기준 누락/문서 오류가 실제 실행(Runtime)·안전·평가를 잘못 이끔
→ 즉시 최소 수정
→ 실제 문서 재확인
→ 재검증

현재 실제 실행과 무관한 형식/고도화
→ 후속 개선 후보
→ 미션 실행 계속
```

**진도와 기준은 경쟁 관계가 아닙니다. 기준은 잘못된 진도를 막는 안전 레일이며, 기준 설계 자체가 끝없는 병목이 되지 않도록 실제 사용 순서에 맞춰 적용합니다.**

---

<a id="forbidden"></a>
## 금지

- 공식 Source를 확인하지 않고 Mission 요구를 추정하여 작성
- 과거 Phase/OS/경로를 현재 상태처럼 복사
- 영어 용어만 연속 사용하여 입문자 이해를 전제
- 실행형 긴 문서에 목차/빠른 진입 경로 없이 정보만 누적
- 모든 짧은 Reference/Standard에 형식만을 위해 동일한 Quick Start 명령을 강제
- Quick Start에서 실행 전 점검(Preflight)/STOP-GO/재실행 안전성(Rerun Safety)을 생략하여 속도를 안전보다 우선
- 위험한 삭제/Reset/Firewall/DB destructive/고비용 Cloud 명령을 Quick Start에 무분별하게 배치
- 실행 위치가 불명확한 상태에서 Host/Ubuntu/Cloud 명령을 섞어 안내
- 실행 전 점검(Preflight) 실패 후에도 다음 Step으로 계속 진행하도록 안내
- 여러 실행 명령을 제시하고 일부 핵심 명령만 설명하여 나머지를 입문자가 추측하게 함
- 중요한 옵션·인자·입력값의 의미를 생략
- 의미 있는 코드/SQL/설정 줄을 설명하지 않은 채 전체 코드만 제공
- 명령/설명/예상 출력을 하나의 복사용 코드 블록에 섞음
- 위험 명령의 반복 실행 영향을 설명하지 않음
- 모든 괄호/빈 줄/종료 태그까지 기계적으로 반복 설명하여 핵심 흐름을 가림
- 공용/관리형 Mac에서 관리자 암호·sudo·MDM/보안정책 우회를 정상 설치 절차로 안내
- no-admin 환경에서 시스템 전역 설치만 제시하고 사용자 영역/Remote/CLI 대안을 제공하지 않음
- 여러 AI CLI가 같은 Worktree를 동시에 수정하게 하여 변경 충돌을 만드는 운영
- AI가 만든 결과를 실제 검증 없이 PASS/CLEAR/증빙(Evidence)으로 취급
- Cloud/API/AI 유료 자원을 만들게 하면서 비용 가능성과 정리(Cleanup)를 설명하지 않음
- 외부 블로그·영상이 없으면 수행할 수 없는 문서 구조
- README 첫 화면에 운영자용 상세 정책을 과도하게 노출
- 각 미션을 나열하면서 Beginner Guide 직접 진입 링크를 제공하지 않음
- 동일한 상세 정책을 README와 하위 문서에 반복 복제
- 실제 실행하지 않은 결과를 PASS/CLEAR/증빙(Evidence)으로 표현
- Secret, Token, Password, Private Key를 문서·로그·Evidence에 기록
- 형식을 맞추기 위해 불필요한 파일을 대량 생성

---

<a id="management"></a>
## 관리 원칙

기준을 변경할 때는 다음 순서를 사용합니다.

```text
기준 문서 수정
→ 관련 표준과 충돌 확인
→ 현재 미션(Active Mission)에 미치는 영향 확인
→ 실제 대상 문서에 적용(APPLY)
→ 대상 문서를 다시 검증(VERIFY)
→ 실제 실행 차단 문제(Runtime blocker)/오판정은 즉시 교정
→ 나머지 기존 문서는 실제 사용 순서로 순차 반영
```

15개 미션 전체를 기준 변경만을 이유로 기계적으로 한 번에 재작성하지 않습니다. 대신 [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)에서 현재 미션부터 실행 순서에 맞춰 감사·교정합니다.