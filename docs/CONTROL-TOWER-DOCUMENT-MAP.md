# Control Tower Document Map — 통합 레포 문서 적용 지도

이 문서는 `MetaStudy999/codyssey-basic`의 사람용 Markdown 문서를 **역할에 따라 분류하고, 목차·Quick Start·요약·현재 상태 정합성 기준이 실제 어디까지 적용되었는지** 관리합니다.

핵심 목적은 기준을 많이 만드는 것이 아니라 다음을 구분하는 것입니다.

```text
POLICY
기준이 존재함
        ↓
APPLY
실제 대상 문서에 적용함
        ↓
VERIFY
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
→ Quick Start + 클릭 가능한 목차

긴 상태/감사/정책 문서
→ Quick Status / Audit Summary / At a Glance + 목차

짧은 단일 목적 문서
→ 불필요한 목차/Quick Start를 강제하지 않음

Script / JSON / TXT / machine-readable file
→ 이 문서 탐색 형식을 적용하지 않음
```

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

| 상태 | 의미 |
|---|---|
| `✅ APPLIED & VERIFIED` | 역할에 맞는 탐색/Quick Start/요약을 적용하고 다시 확인함 |
| `🟡 REVIEW / JIT` | 문서는 유효하지만 실제 사용 시 세부 정합성·탐색을 추가 감사함 |
| `⚪ NO CHANGE BY DESIGN` | 짧거나 단일 목적이어서 형식 추가가 오히려 불필요함 |
| `🔧 MACHINE FILE` | script/config/txt/json 등으로 문서 탐색 규칙 대상이 아님 |

`✅ APPLIED & VERIFIED`는 **문서 탐색/상단 구조 적용 상태**입니다. Mission `CLEAR` 또는 해당 문서 내용 전체의 Runtime 검증 완료를 뜻하지 않습니다.

---

<a id="root"></a>
## Root 문서

| 파일 | 역할 | 적용 방식 | 상태 |
|---|---|---|---|
| `README.md` | 전체 첫 진입 | 안전한 Quick Start + 클릭 목차 + 현재 B1-1 직접 진입 | ✅ APPLIED & VERIFIED |
| `MISSION-INDEX.md` | 15개 미션 색인 | Quick Navigation + 목차 + 실제 저장소 링크 | ✅ APPLIED & VERIFIED |
| `MISSION-RUNBOOK.md` | R01 전체 수행 계약 | Quick Start + 목차 + 단계별 anchor | ✅ APPLIED & VERIFIED |
| `PROGRESS.md` | 전체 진행 상태 | Quick Status + 목차 + 현재 Next Action 링크 | ✅ APPLIED & VERIFIED |
| `TRAINING-ROUNDS.md` | 장기 훈련 로드맵 | At a Glance + 목차; 명령 Quick Start는 사용하지 않음 | ✅ APPLIED & VERIFIED |
| `ADVANCED-BRIDGE.md` | 짧은 Advanced 진입 Gate 참고 | 단일 목적 Reference이므로 형식 추가 생략 | ⚪ NO CHANGE BY DESIGN |

---

<a id="docs"></a>
## `docs/` 문서

| 파일 | 역할 | 적용 방식 | 상태 |
|---|---|---|---|
| `docs/R01-OPERATING-MODEL.md` | 내부 Phase/FAST TRACK 용어 설명 | At a Glance + 클릭 목차 + 현재 행동 링크 | ✅ APPLIED & VERIFIED |
| `docs/CONTROL-TOWER-DOCUMENT-MAP.md` | Control Tower 문서 적용 지도 | Quick Read + 목차 + POLICY/APPLY/VERIFY 상태 관리 | ✅ APPLIED & VERIFIED |

---

<a id="environments"></a>
## `environments/` 문서

| 파일 | 역할 | 적용 방식 | 상태 |
|---|---|---|---|
| `environments/START-HERE-DEVELOPMENT-ENVIRONMENT.md` | 입문자 개발환경 Golden Path | 안전한 Quick Start + 클릭 목차 + Mac/Windows 상세 경로 | ✅ APPLIED & VERIFIED |
| `environments/README.md` | 환경 시스템 진입 | Quick Start + 목차 | ✅ APPLIED & VERIFIED |
| `environments/RUNTIME-PROFILES.md` | Runtime Profile Reference | Quick Read + 목차 | ✅ APPLIED & VERIFIED |
| `environments/DOCKER-POLICY.md` | Docker 선택 정책 | Quick Read + 목차 | ✅ APPLIED & VERIFIED |
| `environments/MISSION-LAB-MATRIX.md` | 15개 환경/Lab Matrix | Quick Read + 목차 | ✅ APPLIED & VERIFIED |
| `environments/ubuntu/README.md` | Ubuntu Bootstrap 진입 | 안전한 Quick Start + 목차 | ✅ APPLIED & VERIFIED |
| `environments/ubuntu/BASE-PACKAGES.md` | Package Layer Reference | Quick Read + 목차 | ✅ APPLIED & VERIFIED |
| `environments/ubuntu/MISSION-PACKAGE-MATRIX.md` | 15개 Mission package 지도 | Quick Read + 목차 | ✅ APPLIED & VERIFIED |
| `environments/ubuntu/ENVIRONMENT-CLOSEOUT.md` | Common Environment Freeze Gate | Quick Check + 목차 + 실제 Gate 상태 | ✅ APPLIED & VERIFIED |

`environments/ubuntu/*.sh`, `*.txt`는 실행/데이터 파일이므로 Markdown 목차·Quick Start 형식을 적용하지 않습니다.

---

<a id="training"></a>
## `training/round-01-clear/` 문서

| 파일 | 역할 | 적용 방식 | 상태 |
|---|---|---|---|
| `NEXT-ACTIONS.md` | 지금 해야 할 일 | Quick Start + 목차 + 실제 Gate 상태 | ✅ APPLIED & VERIFIED |
| `PHASE-C-PREFLIGHT.md` | 모든 미션 공통 시작 Gate | Quick Preflight + 목차 | ✅ APPLIED & VERIFIED |
| `PHASE-C-RUNBOOK.md` | 15개 Runtime 실행 색인 | Quick Start + 목차 | ✅ APPLIED & VERIFIED |
| `MISSION-DEPENDENCY-MAP.md` | 필수/권장 선행 관계 | Quick Read + 목차; 명령 Quick Start 없음 | ✅ APPLIED & VERIFIED |
| `PROGRESS.md` | R01 진행 상태 | Quick Status + 목차 | ✅ APPLIED & VERIFIED |
| `REFERENCE-AUDIT.md` | Phase A 역사적 감사 | Audit Summary + 목차 + 현재 Hand-off | ✅ APPLIED & VERIFIED |
| `CANONICAL-AUDIT.md` | Canonical 역사적 감사 | Audit Summary + 목차 + 현재 Hand-off | ✅ APPLIED & VERIFIED |
| `CROSS-MISSION-AUDIT.md` | Phase B 교차 감사 | Audit Summary + 목차 + 현재 Phase C 링크 | ✅ APPLIED & VERIFIED |
| `REFERENCE-PROGRESS.md` | Phase A 짧은 상태 기록 | 한눈에 보기 + 현재 Hand-off; 별도 목차는 생략 | ✅ APPLIED & VERIFIED |

역사적 Audit 문서는 당시 결과를 바꾸지 않습니다. 대신 과거의 `다음 단계` 문구가 현재 작업 지시로 오해되지 않도록 **현재 Hand-off**를 명시합니다.

---

<a id="standards"></a>
## `standards/` 문서

### Registry / 운영 표준

| 파일 | 역할 | 현재 판단 |
|---|---|---|
| `standards/README.md` | 모든 기준 Registry | Quick Read + 클릭 목차 + Control Tower Document Map 연결 | ✅ APPLIED & VERIFIED |
| `DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md` | 목차/빠른 진입 적용 기준 | POLICY → APPLY → VERIFY 기준 적용 완료 | ✅ ACTIVE STANDARD |
| `BEGINNER-DOCUMENTATION-AUDIT.md` | 15개 Beginner Guide 품질 감사 | 현재 B1-1부터 JIT 감사 | 🟡 REVIEW / JIT |
| `BEGINNER-TRAINING-STANDARD.md` | 입문자 문서 상위 기준 | 기준 문서; 명령 Quick Start를 기계적으로 요구하지 않음 | 🟡 ROLE-BASED REVIEW |
| `COMMAND-CODE-EXPLANATION-STANDARD.md` | 명령/코드 설명 기준 | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `ENVIRONMENT-STANDARD.md` | 환경 기준 | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `DEVELOPMENT-TOOLSET-STANDARD.md` | 개발 Tool Set/no-admin 기준 | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `AI-CLI-TOOLSET-STANDARD.md` | Codex/Claude/Gemini/Antigravity CLI | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `README-INFORMATION-ARCHITECTURE-STANDARD.md` | README 정보 구조 | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `CANONICAL-REFERENCE-STANDARD.md` | Canonical 역할/Gate | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `CROSS-PLATFORM-GIT-STANDARD.md` | UTF-8/LF/Git 파일 계약 | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `TERMINOLOGY-STANDARD.md` | 한글/영어 용어 | 기준 문서 | 🟡 ROLE-BASED REVIEW |
| `VS-CODE-REMOTE-UBUNTU-STANDARD.md` | VS Code Remote Ubuntu | 기준 문서 | 🟡 ROLE-BASED REVIEW |

표준 문서 자체는 **실행형 문서가 아니므로 Quick Start 명령을 일괄 삽입하지 않습니다.** 길고 자주 참조되는 표준에는 필요할 때 `한눈에 보기 + 목차`를 적용합니다.

---

<a id="templates"></a>
## `templates/` / machine-readable 파일

다음 원칙을 사용합니다.

```text
Markdown 학습 Template
→ 실제 Template 사용성을 보고 탐색 구조 적용

JSON / shell / txt / config Template
→ machine-readable 형식을 보존
→ 목차/Quick Start 문구를 넣지 않음
```

문서 기준을 지키기 위해 실행 파일의 문법이나 데이터 구조를 훼손하지 않습니다.

---

<a id="priority"></a>
## 적용 우선순위

```text
P0 — 현재 사용자/입문자가 바로 여는 문서
README / START-HERE / NEXT-ACTIONS / B1-1 BEGINNER-GUIDE

P1 — 현재 Runtime 안전·환경 문서
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
2. 필요한 경우 Quick Start / Quick Read / Quick Status 결정
3. 필요한 경우 클릭 가능한 목차 적용
4. 현재 Phase/Runtime/경로 Drift 교정
5. 실제 파일 수정
6. 다시 fetch하여 실제 반영 확인
7. 링크/anchor/현재 상태의 주요 정합성 확인
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
