# Document Navigation & Quick Start Standard — 목차·빠른 시작 표준

Codyssey Basic의 입문자 문서는 **처음 보는 사람은 길을 잃지 않고, 이미 한 번 수행한 사람은 빠르게 다시 시작할 수 있도록** 문서 상단의 탐색 구조와 빠른 시작(Quick Start)을 일관되게 제공합니다.

> 이 표준은 모든 문서에 같은 모양을 기계적으로 강제하기 위한 규칙이 아닙니다. 문서의 역할에 맞게 `목차`, `빠른 시작`, `요약`, `바로가기`를 적용하되, 입문자의 실행 안전성과 문서 탐색성을 우선합니다.

---

## 1. 핵심 원칙

문서는 가능하면 다음 진입 흐름을 사용합니다.

```text
문서 제목
→ 이 문서가 무엇을 위한 것인지 한 문장
→ 🚀 빠른 시작(Quick Start) — 실행형 문서인 경우
→ 📑 목차(Table of Contents) — 길거나 여러 섹션이 있는 경우
→ 처음부터 상세 따라하기
→ Verify / 완료 확인
→ 관련 문서
```

두 종류의 독자를 동시에 지원합니다.

```text
처음 수행하는 입문자
→ 상세 설명 / Preflight / Step-by-Step 사용

이미 환경과 개념을 이해한 학습자
→ Quick Start / Verify 중심으로 빠르게 재진입
```

Quick Start는 상세 가이드를 대체하지 않습니다.

---

## 2. 목차(Table of Contents) 적용 기준

### 2.1 목차를 기본적으로 넣는 문서

다음 중 하나에 해당하면 **클릭 가능한 목차**를 기본으로 제공합니다.

- `README.md`가 여러 역할·섹션을 포함함
- `BEGINNER-GUIDE.md`
- `START-HERE-*.md`
- 환경 설치·설정 가이드
- Troubleshooting 문서가 여러 증상/복구 절차를 포함함
- Evaluation/Evidence 가이드가 여러 평가 항목을 포함함
- 문서를 읽을 때 스크롤 이동이 반복될 정도로 긴 문서
- H2/H3 섹션이 여러 개여서 현재 위치를 잃기 쉬운 문서

### 2.2 목차를 생략할 수 있는 문서

다음은 짧고 목적이 하나라면 목차를 생략할 수 있습니다.

- 한 화면 또는 짧은 분량의 단일 목적 문서
- 간단한 `START-CHECK.md`
- 매우 짧은 체크리스트
- 단일 표/단일 설정값만 제공하는 Reference
- 자동 생성된 짧은 상태 파일

**목차가 없는 것이 더 읽기 쉬운 짧은 문서에 형식만을 위해 목차를 넣지 않습니다.**

### 2.3 목차 작성 규칙

- 문서의 실제 H2/H3 구조와 일치해야 합니다.
- 클릭 가능한 Markdown anchor를 사용합니다.
- 문서에서 삭제된 섹션 링크를 남기지 않습니다.
- 너무 깊은 4~5단계 목차를 만들지 않습니다.
- 입문자에게 필요한 흐름을 기준으로 1~2단계 깊이를 우선합니다.
- 목차 이름은 본문 제목과 가능한 한 동일하게 유지합니다.

권장 예:

```md
## 📑 목차

- [0. 실행 안전 규칙](#0-실행-안전-규칙)
- [1. 내 환경 선택](#1-내-환경-선택)
- [2A. macOS + OrbStack](#2a-macos--orbstack)
- [2B. Windows + WSL2](#2b-windows--wsl2)
- [3. 공통 Ubuntu 단계](#3-공통-ubuntu-단계)
- [4. Mission별 도구](#4-mission별-도구)
- [5. 최종 Verify](#5-최종-verify)
```

GitHub의 자동 anchor 생성 규칙이 제목 문자에 따라 달라질 수 있으므로, 링크를 만든 뒤 실제 클릭 이동을 확인합니다.

---

## 3. 빠른 시작(Quick Start) 적용 기준

### 3.1 Quick Start를 기본적으로 넣는 문서

**실제로 무엇인가를 실행·설정·검증하는 학습자용 문서**에는 Quick Start를 기본 제공합니다.

대표 대상:

- Root/Mission `README.md` — 지금 바로 할 첫 행동이 있는 경우
- `BEGINNER-GUIDE.md`
- `START-HERE-DEVELOPMENT-ENVIRONMENT.md`
- 환경 Setup/Verify 가이드
- 실행 가능한 Tutorial/Hands-on 문서
- 반복 수행하는 Verification/Evidence 절차

### 3.2 Quick Start가 필요하지 않은 문서

다음 문서는 Quick Start 대신 `요약`, `이 문서를 언제 보는가`, `핵심 원칙`을 사용하는 것이 더 적절할 수 있습니다.

- 기준(Standard) 문서
- Glossary/Terminology 문서
- 순수 Reference 자료
- 설계 결정 기록(ADR)
- 역사/상태 기록
- 단순 Audit 데이터

즉 **“모든 문서에 Quick Start 명령을 넣는다”가 아니라, 모든 문서가 빠르게 진입할 수 있는 상단 구조를 갖도록 하고, 실행형 문서에는 Quick Start를 필수에 가깝게 적용**합니다.

---

## 4. Quick Start의 안전 계약

Quick Start는 속도를 위해 안전을 희생하지 않습니다.

### 4.1 누가 사용하는지 먼저 표시

Quick Start 바로 위 또는 아래에 다음을 알려 줍니다.

```text
사용 대상
→ 기본 Runtime/도구가 이미 준비된 사람

처음 시작하는 사람
→ Quick Start를 건너뛰고 상세 STEP 1부터 진행
```

### 4.2 위험한 작업을 Quick Start에 넣지 않기

기본적으로 다음 작업은 Quick Start에서 직접 실행시키지 않습니다.

- `rm -rf`
- `git reset --hard`
- 강제 push
- SSH/UFW/firewall의 파괴적 변경
- DB destructive migration
- Cloud Resource 대량 생성/삭제
- 비용이 큰 API/AI 작업
- Secret 출력

필요하면 Quick Start는 **상태 확인 → 안전한 Setup → Verify**까지만 제공합니다.

### 4.3 Rerun Safety 유지

Quick Start의 각 명령도 다음을 만족해야 합니다.

```text
🟢 SAFE TO RERUN
또는
🟡 CHECK BEFORE RERUN + 분기 설명
```

이미 존재하는 Repository를 다시 `git clone`하는 것처럼 재실행 시 실패하는 명령은 분기합니다.

예:

```text
폴더 없음 → git clone
폴더 있음 → cd → git status → 필요 시 update 판단
```

### 4.4 실패하면 상세 가이드로 전환

Quick Start는 실패를 숨기지 않습니다.

```text
Quick Start 실행
→ PASS면 계속
→ FAIL이면 STOP
→ 해당 상세 STEP / Troubleshooting으로 이동
→ 수정 후 다시 Verify
```

---

## 5. Quick Start 권장 구조

실행형 문서의 Quick Start는 가능한 한 다음 5요소를 포함합니다.

```text
① 사용 대상
② 실행 위치(Context)
③ 최소 명령 또는 최소 UI 경로
④ 정상 기준
⑤ 실패 시 어디로 이동할지
```

예:

```md
## 🚀 빠른 시작(Quick Start)

> 이미 Ubuntu Runtime과 Git이 준비된 분을 위한 경로입니다.
> 처음 설치하는 분은 [상세 따라하기](#상세-따라하기)부터 진행하세요.

📍 Ubuntu Bash에서 실행:

```bash
cd "$HOME/codyssey/codyssey-basic"
bash environments/ubuntu/bootstrap.sh --check
bash environments/ubuntu/verify-user-identity.sh
```

정상 기준:

```text
Bootstrap required 항목 PASS
+ Repository 위치 정상
+ Git/GitHub 사용자 상태 확인
```

실패하면 다음 단계로 진행하지 말고 해당 상세 STEP에서 복구합니다.
```

---

## 6. Root README / Mission README 기준

README의 상단은 다음 순서를 우선합니다.

```text
Repository 목적
→ 지금 할 일
→ 🚀 Quick Start 또는 첫 행동
→ 📑 목차
→ Beginner Guide / 상세 문서
→ 전체 구조 / 운영 정보
```

단, Root README가 단순 Navigation 역할만 하고 실제 실행 명령이 다른 `START-HERE`에 집중되어 있다면 Quick Start는 다음처럼 **대표 시작 링크**가 될 수 있습니다.

```text
🚀 Quick Start
1. 개발환경 처음 준비 → START-HERE-DEVELOPMENT-ENVIRONMENT.md
2. 환경 준비됨 → NEXT-ACTIONS.md
3. 현재 미션 → ▶ BEGINNER-GUIDE.md
```

즉 README마다 중복된 긴 명령 블록을 복사하지 않습니다.

---

## 7. BEGINNER-GUIDE 기준

각 `BEGINNER-GUIDE.md`는 가능하면 상단에 다음을 둡니다.

```text
이 미션의 한 문장 목표
→ 선행 조건
→ 🚀 Quick Start
→ 📑 목차
→ 상세 학습/실습
```

Quick Start에는 해당 미션의 **가장 짧은 안전 경로**만 둡니다.

미션 특성상 팀 작업, Cloud Console, 수동 Review처럼 한 블록으로 빠르게 실행할 수 없는 경우에는 명령어 Quick Start 대신 다음을 사용할 수 있습니다.

```text
Quick Start Checklist
→ Issue 생성
→ Branch
→ 구현
→ PR
→ Review
→ Verify
```

즉 Quick Start는 반드시 Shell 명령일 필요는 없습니다.

---

## 8. Troubleshooting / Evaluation 문서 기준

### Troubleshooting

상단에 다음을 둘 수 있습니다.

```text
빠른 진단(Quick Diagnosis)
→ 증상별 목차
→ 상세 원인/복구
```

### Evaluation / Evidence

상단에 다음을 둘 수 있습니다.

```text
빠른 평가 준비(Quick Check)
→ 평가 항목 목차
→ Requirement → Verify → Evidence 상세
```

문서 역할에 맞게 `Quick Start`라는 명칭 대신 `Quick Diagnosis`, `Quick Check`, `At a Glance`를 사용할 수 있습니다.

---

## 9. 문서 상단 과밀 방지

상단에 다음을 모두 길게 넣어 첫 실제 내용을 아래로 밀어내지 않습니다.

```text
긴 소개
+ 긴 배지 목록
+ 긴 Quick Start
+ 긴 목차
+ 긴 운영 정책
```

권장:

```text
한 문장 목적
→ 5~12줄 정도의 Quick Start
→ 1~2단계 목차
→ 바로 본문
```

Quick Start가 길어지면 상세 가이드가 된 것이므로 줄입니다.

---

## 10. BEGINNER READY 감사 기준

실행형 입문자 문서를 `BEGINNER READY`로 판정할 때 다음을 확인합니다.

```text
[ ] 문서가 길거나 여러 섹션이면 클릭 가능한 목차가 있다.
[ ] 목차 링크가 실제 본문으로 이동한다.
[ ] 실행형 문서에는 안전한 Quick Start 또는 동등한 빠른 진입 경로가 있다.
[ ] Quick Start의 사용 대상과 실행 위치가 명확하다.
[ ] 처음 시작하는 사람은 상세 경로로 이동할 수 있다.
[ ] Quick Start가 Preflight/STOP-GO/Rerun Safety를 무력화하지 않는다.
[ ] 위험 명령·Secret·고비용 작업을 무분별하게 Quick Start에 넣지 않는다.
[ ] Quick Start가 실패하면 상세 복구 위치를 알 수 있다.
[ ] 짧은 Reference 문서에는 불필요한 목차/Quick Start를 기계적으로 강제하지 않는다.
```

---

## 11. 적용 우선순위

기존 문서를 표준 변경만으로 한꺼번에 기계적으로 수정하지 않습니다.

```text
현재 Active Mission
→ 사용자가 실제로 먼저 여는 Start Here / Root README
→ 다음 필수 Mission Beginner Guide
→ 다음 실행 예정 문서
→ 나머지 문서는 실제 사용/수정 시 순차 적용
```

새로 만드는 입문자용 실행 문서는 처음부터 이 기준을 적용합니다.

---

## 12. 관련 기준

- [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md) — 입문자 학습·실행 상위 기준
- [README-INFORMATION-ARCHITECTURE-STANDARD.md](README-INFORMATION-ARCHITECTURE-STANDARD.md) — README 정보 구조
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령 설명 / Copy-Paste / Rerun Safety
- [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md) — BEGINNER READY 감사

