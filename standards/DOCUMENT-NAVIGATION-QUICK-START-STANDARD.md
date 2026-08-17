# Document Navigation & Quick Start Standard — 목차·빠른 시작 표준

Codyssey Basic의 입문자 문서는 **처음 보는 사람은 길을 잃지 않고, 이미 한 번 수행한 사람은 빠르게 다시 시작할 수 있도록** 문서 상단의 탐색 구조와 빠른 시작(Quick Start)을 일관되게 제공합니다.

> 이 표준은 모든 문서에 같은 모양을 기계적으로 강제하기 위한 규칙이 아닙니다. 문서의 역할과 실제 사용 흐름을 먼저 판단하고 `목차`, `Quick Start`, `요약`, `바로가기` 중 필요한 것을 적용합니다.

---

## 1. 핵심 원칙

권장 진입 흐름:

```text
문서 제목
→ 한 문장 목적
→ 🚀 빠른 시작(실행형 문서)
→ 📑 목차(긴 문서/다중 섹션)
→ 상세 따라하기 또는 본문
→ Verify / 완료 확인
→ 관련 문서
```

두 독자를 함께 지원합니다.

```text
처음 수행하는 입문자
→ 상세 설명 / Preflight / Step-by-Step

이미 한 번 수행한 학습자
→ Quick Start / Verify 중심 재진입
```

Quick Start는 상세 가이드를 대체하지 않습니다.

---

## 2. 목차(Table of Contents) 적용 기준

다음 문서는 클릭 가능한 목차를 기본으로 합니다.

- 여러 역할·섹션을 가진 `README.md`
- `BEGINNER-GUIDE.md`
- `START-HERE-*.md`
- 긴 환경 설치·설정 가이드
- 여러 증상을 다루는 Troubleshooting
- 여러 평가 항목을 다루는 Evaluation/Evidence 가이드
- H2/H3가 많아 현재 위치를 잃기 쉬운 문서

다음은 짧고 단일 목적이면 생략할 수 있습니다.

- 한 화면 수준의 짧은 문서
- 간단한 `START-CHECK.md`
- 짧은 체크리스트
- 단일 표/단일 값 Reference
- 짧은 상태 파일

### 목차 작성 규칙

```text
실제 본문 구조와 일치
→ 클릭 가능한 anchor
→ 1~2단계 깊이 우선
→ 삭제된 섹션 링크 제거
→ 수정 후 실제 파일에서 다시 확인
```

목차를 만들었다는 사실보다 **실제로 원하는 섹션으로 이동할 수 있는지**가 더 중요합니다.

---

## 3. 빠른 시작(Quick Start) 적용 기준

실제로 실행·설정·검증하는 학습자용 문서에는 Quick Start 또는 동등한 빠른 진입 경로를 기본으로 둡니다.

대표 대상:

- Root/Mission `README.md`에 즉시 할 행동이 있는 경우
- `BEGINNER-GUIDE.md`
- `START-HERE-DEVELOPMENT-ENVIRONMENT.md`
- Setup/Verify 가이드
- Hands-on/Tutorial
- 반복 수행하는 Verification/Evidence 절차

다음 문서는 Quick Start 명령보다 `요약`, `핵심 원칙`, `이 문서를 언제 보는가`가 더 적합할 수 있습니다.

- Standard
- Glossary/Terminology
- 순수 Reference
- ADR
- 역사/상태 기록
- 단순 Audit 데이터

즉 **모든 문서가 빠르게 진입 가능해야 하지만, 모든 문서에 같은 Quick Start 명령 블록을 강제하지 않습니다.**

---

## 4. Quick Start 안전 계약

Quick Start는 속도를 위해 안전을 생략하지 않습니다.

먼저 사용 대상을 구분합니다.

```text
환경과 기본 도구가 이미 준비됨
→ Quick Start 사용

처음 시작함 / 상태를 잘 모름
→ 상세 STEP 1부터 진행
```

Quick Start는 가능한 한 다음 5요소를 갖습니다.

```text
① 사용 대상
② 실행 위치(Context)
③ 최소 명령 또는 최소 UI 경로
④ 정상 기준
⑤ 실패 시 이동할 상세 단계
```

상태를 크게 바꾸는 작업은 Quick Start에서 직접 처리하기보다 **상태 확인 → 안전한 Setup → Verify**까지만 제공하고 상세 단계로 연결합니다.

재실행 영향이 있는 명령은 `SAFE TO RERUN` 또는 `CHECK BEFORE RERUN` 판단을 함께 제공합니다.

실패하면:

```text
FAIL
→ STOP
→ 해당 상세 STEP / Troubleshooting
→ 최소 수정
→ 다시 Verify
```

---

## 5. 문서 유형별 권장 상단 구조

### Root/Mission README

```text
Repository 목적
→ 지금 할 일
→ Quick Start 또는 대표 시작 링크
→ 목차
→ Beginner Guide / 전체 구조
```

Root README가 Navigation 중심이면 긴 명령을 복제하지 않고 Start Here / Next Actions / 현재 Beginner Guide로 바로 연결합니다.

### BEGINNER-GUIDE

```text
한 문장 목표
→ 선행 조건
→ Quick Start
→ 목차
→ 상세 학습/실습
→ Verify / Evidence
```

팀 협업, Cloud Console, 수동 Review 중심 미션은 Shell 명령 대신 Quick Start Checklist를 사용할 수 있습니다.

### Troubleshooting

```text
Quick Diagnosis
→ 증상별 목차
→ 상세 원인/복구
```

### Evaluation / Evidence

```text
Quick Check
→ 평가 항목 목차
→ Requirement → Verify → Evidence 상세
```

---

## 6. 상단 과밀 방지

다음을 모두 길게 넣어 첫 실제 내용을 아래로 밀어내지 않습니다.

```text
긴 소개 + 긴 Quick Start + 긴 목차 + 긴 운영정책
```

권장:

```text
짧은 목적
→ 짧은 Quick Start
→ 1~2단계 목차
→ 바로 본문
```

Quick Start가 상세 가이드만큼 길어지면 줄입니다.

---

## 7. 기준 적용의 완료 정의 — POLICY → APPLY → VERIFY

이 프로젝트에서는 **기준 문서에 규칙을 적은 것과 실제 문서에 반영한 것을 구분**합니다.

```text
POLICY
기준 정의
        ↓
APPLY
실제 대상 문서 수정
        ↓
VERIFY
대상 문서를 다시 열어 실제 반영 여부 확인
```

상태는 다음처럼 구분합니다.

```text
POLICY ONLY
→ 기준만 있음

APPLIED / VERIFY PENDING
→ 대상 문서를 수정했지만 재확인 전

APPLIED & VERIFIED
→ 대상 문서를 다시 확인했고 핵심 섹션/링크가 실제 존재함
```

사용자에게 `반영 완료`라고 보고할 때는 원칙적으로 **APPLIED & VERIFIED** 상태만 사용합니다.

### 적용 전 판단

기준을 기계적으로 적용하지 않고 먼저 판단합니다.

```text
누가 읽는가?
→ 실행형인가 참고형인가?
→ 문서가 길어 실제 탐색 문제가 있는가?
→ Quick Start가 도움이 되는가?
→ 현재 Active Mission과 관련 있는가?
```

판단 예:

```text
긴 실행형 문서
→ 목차 + 안전한 Quick Start

긴 Standard/Reference
→ 목차 + 핵심 요약/바로가기

짧은 단일 목적 문서
→ 불필요한 형식 추가 안 함

위험 작업 중심 문서
→ Quick Start보다 Quick Check / Preflight 우선
```

### 적용 후 반드시 재확인

```text
[ ] 실제 파일 상단에 의도한 섹션이 존재한다.
[ ] 목차가 현재 본문과 일치한다.
[ ] anchor가 실제 대상 섹션과 연결된다.
[ ] Quick Start와 상세 절차가 모순되지 않는다.
[ ] 과거 Phase/OS/경로가 함께 남아 혼동을 만들지 않는다.
[ ] 문서 수정만으로 Runtime/CLEAR 상태를 과장하지 않는다.
```

**정책 준수와 실제 사용성은 같은 것이 아닙니다.** 사용자가 찾기 어렵거나 시작점을 모르겠다고 느끼면 대상 문서를 먼저 다시 확인하고 최소 수정합니다.

---

## 8. BEGINNER READY 감사 기준

```text
[ ] 긴 문서/다중 섹션 문서에 클릭 가능한 목차가 있다.
[ ] 목차가 실제 본문과 일치한다.
[ ] 실행형 문서에 안전한 Quick Start 또는 동등한 진입 경로가 있다.
[ ] Quick Start의 대상과 실행 위치가 분명하다.
[ ] 처음 수행자는 상세 경로로 갈 수 있다.
[ ] 실패 시 STOP하고 복구 위치를 찾을 수 있다.
[ ] 재실행 영향을 판단할 수 있다.
[ ] 짧은 Reference에는 형식을 기계적으로 강제하지 않는다.
[ ] 적용 후 대상 파일을 다시 확인했다.
```

---

## 9. 적용 우선순위

기존 모든 문서를 한꺼번에 기계적으로 수정하지 않습니다.

```text
현재 Active Mission의 실제 진입 문서
→ Start Here / Root README
→ 현재 Mission Beginner Guide
→ 다음 필수 Mission
→ 나머지는 실제 사용/수정 시 순차 적용
```

새로 만드는 입문자 실행 문서는 처음부터 이 기준을 적용합니다.

---

## 10. 관련 기준

- [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md)
- [README-INFORMATION-ARCHITECTURE-STANDARD.md](README-INFORMATION-ARCHITECTURE-STANDARD.md)
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md)
- [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)
