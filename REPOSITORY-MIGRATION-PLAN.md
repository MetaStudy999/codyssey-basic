# Repository Migration Plan — 번호 기반 → 주제 기반 저장소 전환

## 현재 상태

- 기준일: 2026-09-03
- 대상 Owner(소유자): `MetaStudy999`
- 대상: Codyssey Basic Mission/Project Repository 15개
- 목표: 미션 번호가 변경되어도 Repository URL을 유지할 수 있도록 **주제 기반 이름**으로 전환
- 중복 검사: **PASS**
- 실제 Rename: **PASS — 15개 Repository 주제 기반 이름 변경 완료**
- Mission ID 재편: **반영 중 — 현재 번호 기준은 `CURRENT-MISSION-MAP.md`**

> Repository Naming 정책은 [`standards/REPOSITORY-NAMING-STANDARD.md`](standards/REPOSITORY-NAMING-STANDARD.md), 현재 Mission ID의 단일 기준은 [`CURRENT-MISSION-MAP.md`](CURRENT-MISSION-MAP.md)를 따른다.

---

## 1. Repository Rename 완료 매핑

| 과거 ID | 과거 Repository | 현재 Canonical Repository | Rename |
|---|---|---|---|
| B1-1 | `codyssey-basic-b1-1-system-monitor` | `codyssey-basic-system-monitor` | PASS |
| B1-2 | `codyssey-basic-b1-2-linux-troubleshooting` | `codyssey-basic-system-troubleshooting` | PASS |
| B2-1 | `codyssey-basic-b2-1-budget-tracker` | `codyssey-basic-budget-tracker` | PASS |
| B2-2 | `codyssey-basic-b2-2-git-team-collaboration` | `codyssey-basic-git-collaboration` | PASS |
| B3-1 | `codyssey-basic-b3-1-fast-data-store` | `codyssey-basic-mini-redis` | PASS |
| B3-2 | `codyssey-basic-b3-2-file-change-tracker` | `codyssey-basic-mini-git` | PASS |
| B4-1 | `codyssey-basic-b4-1-portfolio` | `codyssey-basic-web-portfolio` | PASS |
| B4-2 | `codyssey-basic-b4-2-interactive-web-app` | `codyssey-basic-react-spa` | PASS |
| B5-1 | `codyssey-basic-b5-1-database-design` | `codyssey-basic-sql-database` | PASS |
| B5-2 | `codyssey-basic-b5-2-fastapi-crud-app` | `codyssey-basic-fastapi-crud` | PASS |
| B5-3 | `codyssey-basic-b5-3-fastapi-auth-service` | `codyssey-basic-fastapi-auth` | PASS |
| B6-1 | `codyssey-basic-b6-1-cloud-deployment` | `codyssey-basic-cloud-infrastructure` | PASS |
| B6-2 | `codyssey-basic-b6-2-ai-code-summarizer` | `codyssey-basic-ai-git-assistant` | PASS |
| B7-1 | `codyssey-basic-b7-1-web-ai-chatbot` | `codyssey-basic-ai-chatbot` | PASS |
| B7-2 | `codyssey-basic-b7-2-advanced-ai-chatbot` | `codyssey-basic-ai-chatbot-fullstack` | PASS |

---

## 2. 현재 Mission ID 재매핑

Repository 이름 변경 이후 교육과정 Mission ID가 다음과 같이 재편되었다.

| 현재 ID | 미션 주제 | 이전 ID | Canonical Repository |
|---|---|---|---|
| **B1-1** | 나를 소개하는 웹페이지 처음부터 만들기 | B4-1 | `codyssey-basic-web-portfolio` |
| **B1-2** | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | B4-2 | `codyssey-basic-react-spa` |
| **B2-1** | 나만의 용돈 기입장 프로그램 만들기 | B2-1 | `codyssey-basic-budget-tracker` |
| **B2-2** | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | B2-2 | `codyssey-basic-git-collaboration` |
| **B3-1** | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | B6-1 | `codyssey-basic-cloud-infrastructure` |
| **B3-2** | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | B6-2 | `codyssey-basic-ai-git-assistant` |
| **B4-1** | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | B1-1 | `codyssey-basic-system-monitor` |
| **B4-2** | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | B1-2 | `codyssey-basic-system-troubleshooting` |
| **B5-1** | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | B3-1 | `codyssey-basic-mini-redis` |
| **B5-2** | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | B3-2 | `codyssey-basic-mini-git` |
| **B6-1** | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | B5-1 | `codyssey-basic-sql-database` |
| **B6-2** | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | B5-2 | `codyssey-basic-fastapi-crud` |
| **B6-3** | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | B5-3 | `codyssey-basic-fastapi-auth` |
| **B7-1** | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | B7-1 | `codyssey-basic-ai-chatbot` |
| **B7-2** | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | B7-2 | `codyssey-basic-ai-chatbot-fullstack` |

핵심 변경:

```text
기존 B5-3 → 현재 B6-3
```

---

## 3. 전환 원칙

```text
Repository = 주제 기반 Stable Identity(안정 식별자)
Mission ID = 현재 교육과정의 가변 번호
Control Tower = Mission ID ↔ Repository 매핑의 단일 기준
```

과거 Commit/PR/Issue에 남아 있는 B1-1, B2-1 등의 번호는 당시 기록이므로 History Rewrite(이력 재작성)하지 않는다.

번호 변경으로 Runtime/CLEAR 상태를 초기화하지 않는다. 예를 들어 기존 B1-1 시스템 관제 미션의 진행 상태는 현재 **B4-1 시스템 관제 미션**으로 이어진다.

---

## 4. 현재 Reference Migration 범위

Repository Rename은 완료되었지만 현재 운영 문서에는 과거 번호 기반 URL이나 옛 Mission ID가 남아 있을 수 있다.

대표 갱신 대상:

- `README.md`
- `MISSION-INDEX.md`
- `PROGRESS.md`
- `MISSION-RUNBOOK.md`
- `training/round-01-clear/**`
- Workcell Prompt
- `environments/**`
- `standards/**`
- 발표/평가 템플릿
- 각 Mission Repository의 현재 Mission Metadata

역사적 Migration 문서에서 과거 Repository 이름을 설명하기 위한 표기는 유지할 수 있다.

---

## 5. 로컬 clone 사용자의 Remote 갱신

기존 clone은 GitHub Redirect로 동작할 수 있으나 명시적으로 새 주소를 설정하는 것을 권장한다.

예:

```bash
cd "$HOME/codyssey/codyssey-basic-b2-1-budget-tracker"
git remote -v
git remote set-url origin https://github.com/MetaStudy999/codyssey-basic-budget-tracker.git
git remote -v
```

로컬 디렉터리 이름은 Git 동작에 필수 조건이 아니므로 즉시 변경하지 않아도 된다.

---

## 6. 완료 Gate

### Gate A — Naming Audit

- [x] Mission/Project Repository 15개 확인
- [x] Stable Topic Slug 정의
- [x] 이름 중복 검사
- [x] 이름 충돌 없음 확인

### Gate B — Repository Rename

- [x] 15개 Repository 실제 Rename
- [x] 새 Canonical Repository 15개 존재 확인
- [x] 기존 Repository ID 유지 확인
- [x] main 브랜치 유지 확인

### Gate C — Mission ID Remap

- [x] 현재 Mission ID 15개 매핑 정의
- [x] B5-3 → B6-3 변경 반영
- [x] `CURRENT-MISSION-MAP.md` 생성
- [x] `MISSION-INDEX.md` 현재 번호 기준으로 갱신

### Gate D — Reference Migration

- [ ] Control Tower의 모든 현재 링크 갱신
- [ ] Workcell Prompt의 현재 ID/Repository 갱신
- [ ] Quick Start / clone 명령 갱신
- [ ] 각 Mission Repository 현재 Metadata 갱신
- [ ] 과거 URL 잔존 검색 후 역사 기록과 현행 참조 구분

### Gate E — Verification

- [x] Canonical Repository 15개 존재 확인
- [ ] README 첫 진입 링크 현재 번호와 일치
- [ ] Mission Index 전체 링크 최종 확인
- [ ] 주요 Runbook/Progress 링크 최종 확인
- [ ] 현행 링크 404 없음 확인

---

## 7. 현재 판정

```text
NAMING POLICY      : PASS
COLLISION AUDIT    : PASS
REPOSITORY RENAME  : PASS
MISSION ID REMAP   : IMPLEMENTED
REFERENCE MIGRATION: IN PROGRESS
OVERALL            : IMPLEMENTED / NEEDS-REFERENCE-CLEANUP
```

Repository 이름은 더 이상 Mission ID 변경에 맞춰 Rename하지 않는다. 이후 번호가 바뀌면 `CURRENT-MISSION-MAP.md`와 현재 운영 Metadata를 갱신한다.
