# 통합 레포 문서 적용 지도(Control Tower Document Map)

이 문서는 `MetaStudy999/codyssey-basic`의 사람용 Markdown 문서를 **역할에 따라 분류하고, 목차·빠른 시작(Quick Start)·요약·현재 상태 정합성·한글/영어 용어 기준이 실제 어디까지 적용되었는지** 관리합니다.

핵심 목적은 기준을 많이 만드는 것이 아니라 다음을 구분하는 것입니다.

```text
정책(POLICY)
기준이 존재함
        ↓
적용(APPLY)
실제 대상 문서에 적용함
        ↓
검증(VERIFY)
파일을 다시 열어 실제 반영을 확인함
```

## 🚀 빠른 읽기(Quick Read)

현재 우선순위:

```text
1. 사용자가 처음 여는 진입 문서
2. 현재 R01 / B1-1 실행 문서
3. 공통 개발환경 문서
4. 현재 상태/Audit 문서
5. Reference/Standard/Template
```

문서 유형별 적용 원칙:

```text
긴 실행형 문서
→ 빠른 시작(Quick Start) + 클릭 가능한 목차

긴 상태/감사/정책 문서
→ 빠른 상태(Quick Status) / 감사 요약(Audit Summary) / 한눈에 보기(At a Glance) + 목차

짧은 단일 목적 문서
→ 불필요한 목차/Quick Start를 강제하지 않음

Script / JSON / TXT / machine-readable file
→ 문서 탐색·한영 서술 형식을 기계적으로 적용하지 않음
```

### 현재 용어 정합성 원칙

사람이 읽는 현재 문서는 다음을 우선합니다.

```text
한국어 문장/제목은 한국어 중심
첫 등장 핵심 용어 = 한글 의미(English Original)
명사 단계/제목 = 검증(Verification)
동사 개념 = 검증하다(Verify)
실제 파일/명령 = verify.sh 그대로 유지
공식 UI 문자열 = 원문 유지 + 한국어 설명
```

역사적 Audit/Reference 문서는 당시 기록의 의미를 바꾸지 않기 위해 원문을 보존할 수 있습니다. 현재 실행 지시와 혼동되지 않도록 현재 Hand-off만 명확히 합니다.

## 📑 목차

- [상태 정의](#status)
- [Root 문서](#root)
- [docs 문서](#docs)
- [environments 문서](#environments)
- [training/round-01-clear 문서](#training)
- [standards 문서](#standards)
- [templates / machine-readable 파일](#templates)
- [적용 우선순위](#priority)
- [완료 판정 규칙](#done)

---

<a id="status"></a>
## 상태 정의

### 탐색/상단 구조 상태

| 상태 | 의미 |
|---|---|
| `✅ APPLIED & VERIFIED` | 역할에 맞는 탐색/Quick Start/요약을 적용하고 다시 확인함 |
| `🟡 REVIEW / JIT` | 문서는 유효하지만 실제 사용 시 세부 정합성·탐색을 추가 감사함 |
| `⚪ NO CHANGE BY DESIGN` | 짧거나 단일 목적이어서 형식 추가가 오히려 불필요함 |
| `🔧 MACHINE FILE` | script/config/txt/json 등으로 문서 탐색 규칙 대상이 아님 |

### 용어 정합성 상태

| 상태 | 의미 |
|---|---|
| `✅ TERM APPLIED` | 현재 사람용 설명을 한국어 중심 + 필요한 영어 원어 병기로 교정하고 다시 확인 대상에 포함함 |
| `🟡 TERM REVIEW` | 현재 문서이나 용어 세부 감사가 아직 남음 |
| `⚪ HISTORICAL PRESERVED` | 역사적 기록의 당시 의미를 보존하며 현재 실행 지시는 별도로 연결함 |
| `🔧 MACHINE EXCLUDED` | 명령·코드·JSON/TXT 등 machine-readable 성격이라 서술형 용어 교정 대상에서 제외함 |

`✅ APPLIED & VERIFIED`와 `✅ TERM APPLIED`는 **문서 품질/표현 적용 상태**입니다. Mission `CLEAR` 또는 실제 실행 환경(Runtime) 검증 완료를 뜻하지 않습니다.

---

<a id="root"></a>
## Root 문서

| 파일 | 역할 | 탐색/상단 구조 | 용어 정합성 |
|---|---|---|---|
| `README.md` | 전체 첫 진입 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `MISSION-INDEX.md` | 15개 미션 색인 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `MISSION-RUNBOOK.md` | R01 전체 수행 계약 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `PROGRESS.md` | 전체 진행 상태 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `TRAINING-ROUNDS.md` | 장기 훈련 로드맵 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `ADVANCED-BRIDGE.md` | 짧은 Advanced 진입 Gate 참고 | ⚪ NO CHANGE BY DESIGN | ✅ TERM APPLIED |

---

<a id="docs"></a>
## `docs/` 문서

| 파일 | 역할 | 탐색/상단 구조 | 용어 정합성 |
|---|---|---|---|
| `docs/R01-OPERATING-MODEL.md` | 내부 Phase/FAST TRACK 용어 설명 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `docs/CONTROL-TOWER-DOCUMENT-MAP.md` | Control Tower 문서 적용 지도 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |

---

<a id="environments"></a>
## `environments/` 문서

| 파일 | 역할 | 탐색/상단 구조 | 용어 정합성 |
|---|---|---|---|
| `environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md` | 입문자 개발환경 기준 실행 경로(Golden Path) | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/README.md` | 환경 시스템 진입 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/RUNTIME-PROFILES.md` | 실행 환경 프로필(Runtime Profile) Reference | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/DOCKER-POLICY.md` | Docker 선택 정책 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/MISSION-LAB-MATRIX.md` | 15개 환경/Lab Matrix | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/ubuntu/README.md` | Ubuntu Bootstrap 진입 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/ubuntu/BASE-PACKAGES.md` | Package Layer Reference | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/ubuntu/MISSION-PACKAGE-MATRIX.md` | 15개 Mission package 지도 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `environments/ubuntu/ENVIRONMENT-CLOSEOUT.md` | 공통 환경 동결(Common Environment Freeze) Gate | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |

`environments/ubuntu/*.sh`, `*.txt`는 실행/데이터 파일이므로 Markdown 목차·빠른 시작(Quick Start)과 서술형 한영 용어 교정을 강제하지 않습니다. 실제 명령·파일명은 원문을 보존합니다.

---

<a id="training"></a>
## `training/round-01-clear/` 문서

| 파일 | 역할 | 탐색/상단 구조 | 용어 정합성 |
|---|---|---|---|
| `NEXT-ACTIONS.md` | 지금 해야 할 일 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `PHASE-C-PREFLIGHT.md` | 모든 미션 공통 시작 Gate | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `PHASE-C-RUNBOOK.md` | 15개 실제 실행(Runtime) 색인 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `MISSION-DEPENDENCY-MAP.md` | 필수/권장 선행 관계 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `PROGRESS.md` | R01 진행 상태 | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `REFERENCE-AUDIT.md` | Phase A 역사적 감사 | ✅ APPLIED & VERIFIED | ⚪ HISTORICAL PRESERVED |
| `CANONICAL-AUDIT.md` | Canonical 역사적 감사 | ✅ APPLIED & VERIFIED | ⚪ HISTORICAL PRESERVED |
| `CROSS-MISSION-AUDIT.md` | Phase B 교차 감사 | ✅ APPLIED & VERIFIED | ⚪ HISTORICAL PRESERVED |
| `REFERENCE-PROGRESS.md` | Phase A 짧은 상태 기록 | ✅ APPLIED & VERIFIED | ⚪ HISTORICAL PRESERVED |

역사적 Audit 문서는 당시 결과를 바꾸지 않습니다. 과거의 `다음 단계` 문구가 현재 작업 지시로 오해되지 않도록 **현재 Hand-off**를 명시합니다.

---

<a id="standards"></a>
## `standards/` 문서

| 파일 | 역할 | 탐색/역할 판단 | 용어 정합성 |
|---|---|---|---|
| `standards/README.md` | 모든 기준 Registry | ✅ APPLIED & VERIFIED | ✅ TERM APPLIED |
| `DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md` | 목차/빠른 진입 적용 기준 | ✅ ACTIVE STANDARD | ✅ TERM APPLIED |
| `BEGINNER-DOCUMENTATION-AUDIT.md` | 15개 Beginner Guide 품질 감사 | 🟡 REVIEW / JIT | ✅ TERM APPLIED |
| `BEGINNER-TRAINING-STANDARD.md` | 입문자 문서 상위 기준 | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `COMMAND-CODE-EXPLANATION-STANDARD.md` | 명령/코드 설명 기준 | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `ENVIRONMENT-STANDARD.md` | 환경 기준 | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `DEVELOPMENT-TOOLSET-STANDARD.md` | 개발 Tool Set/no-admin 기준 | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `AI-CLI-TOOLSET-STANDARD.md` | Codex/Claude/Gemini/Antigravity CLI | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `README-INFORMATION-ARCHITECTURE-STANDARD.md` | README 정보 구조 | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `CANONICAL-REFERENCE-STANDARD.md` | Canonical 역할/Gate | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `CROSS-PLATFORM-GIT-STANDARD.md` | UTF-8/LF/Git 파일 계약 | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |
| `TERMINOLOGY-STANDARD.md` | 한글/영어 용어 | ✅ ACTIVE STANDARD | ✅ TERM SOURCE |
| `VS-CODE-REMOTE-UBUNTU-STANDARD.md` | VS Code Remote Ubuntu | 🟡 ROLE-BASED REVIEW | ✅ TERM APPLIED |

표준 문서 자체는 **실행형 문서가 아니므로 Quick Start 명령을 일괄 삽입하지 않습니다.** 길고 자주 참조되는 표준에는 필요할 때 `한눈에 보기 + 목차`를 적용합니다.

---

<a id="templates"></a>
## `templates/` / machine-readable 파일

| 파일/유형 | 처리 | 용어 정합성 |
|---|---|---|
| `templates/DUAL-RUNTIME-LAB-TEMPLATE.md` | 학습용 Markdown Template | ✅ TERM APPLIED |
| JSON / shell / txt / config Template | machine-readable 형식 보존 | 🔧 MACHINE EXCLUDED |

문서 기준을 지키기 위해 실행 파일의 문법이나 데이터 구조를 훼손하지 않습니다.

---

<a id="priority"></a>
## 적용 우선순위

```text
P0 — 현재 사용자/입문자가 바로 여는 문서
README / START-HERE / NEXT-ACTIONS / B1-1 BEGINNER-GUIDE

P1 — 현재 실제 실행(Runtime) 안전·환경 문서
PHASE-C-PREFLIGHT / PHASE-C-RUNBOOK / ENVIRONMENT-CLOSEOUT / environment docs

P2 — 상태·감사·Reference
PROGRESS / AUDIT / MATRIX / standards registry

P3 — 이후 미션/Template/Advanced Reference
실제 사용 직전에 JIT 감사
```

기준 변경만을 이유로 파일을 대량 재작성하지 않습니다. 하지만 **현재 문서의 오래된 상태가 사용자를 잘못된 단계로 보내거나, 긴 실행형 문서에 탐색이 없어 수행 오류를 만드는 경우에는 현재 진도와 관계없이 즉시 교정**합니다.

---

<a id="done"></a>
## 완료 판정 규칙

Control Tower 문서 적용은 다음을 모두 만족해야 완료로 보고합니다.

```text
1. 문서 역할 판단
2. 필요한 경우 빠른 시작(Quick Start) / 빠른 읽기(Quick Read) / 빠른 상태(Quick Status) 결정
3. 필요한 경우 클릭 가능한 목차 적용
4. 현재 Phase/Runtime/경로의 문서 불일치(Drift) 교정
5. 한글 중심 + 필요한 영어 원어 병기 적용
6. 실제 파일 수정
7. 다시 fetch하여 실제 반영 확인
8. 링크/anchor/현재 상태의 주요 정합성 확인
```

즉:

```text
기준에 적혀 있음
≠ 적용 완료

Commit 성공
≠ 검증 완료

실제 대상 파일 수정 + 재확인
= APPLIED & VERIFIED
```

### 예외를 지혜롭게 처리

```text
실제 명령/파일명/UI 문자열
→ 원문 보존

역사적 Audit/Reference
→ 당시 기록을 훼손하지 않음
→ 현재 Hand-off로 현행 상태와 구분

machine-readable 파일
→ 서술 문서 규칙을 강제하지 않음
```

이 원칙으로 **기준 준수 자체가 목적이 아니라 입문자의 이해·실행 정확도를 높이는 것**을 최종 목표로 합니다.
