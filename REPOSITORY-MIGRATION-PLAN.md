# Repository Migration Plan — 번호 기반 → 주제 기반 저장소 전환

## 현재 상태

- 기준일: 2026-09-03
- 대상 Owner(소유자): `MetaStudy999`
- 대상: Codyssey Basic Mission/Project Repository 15개
- 목표: 미션 번호가 변경되어도 Repository URL을 유지할 수 있도록 **주제 기반 이름**으로 전환
- 중복 검사: **PASS — 목표 이름과 정확히 동일한 기존 Repository 없음**
- 실제 Rename: **PENDING — Repository 이름 변경 작업 전**

> 이 문서는 이름 변경 작업의 실행 체크리스트다. 정책 기준은 [`standards/REPOSITORY-NAMING-STANDARD.md`](standards/REPOSITORY-NAMING-STANDARD.md)를 따른다.

---

## 1. 전환 매핑

| 순서 | 현재 ID | 현재 Repository | 변경 목표 Repository | 충돌 | Rename |
|---:|---|---|---|---|---|
| 1 | B1-1 | `codyssey-basic-b1-1-system-monitor` | `codyssey-basic-system-monitor` | 없음 | PENDING |
| 2 | B1-2 | `codyssey-basic-b1-2-linux-troubleshooting` | `codyssey-basic-system-troubleshooting` | 없음 | PENDING |
| 3 | B2-1 | `codyssey-basic-b2-1-budget-tracker` | `codyssey-basic-budget-tracker` | 없음 | PENDING |
| 4 | B2-2 | `codyssey-basic-b2-2-git-team-collaboration` | `codyssey-basic-git-collaboration` | 없음 | PENDING |
| 5 | B3-1 | `codyssey-basic-b3-1-fast-data-store` | `codyssey-basic-mini-redis` | 없음 | PENDING |
| 6 | B3-2 | `codyssey-basic-b3-2-file-change-tracker` | `codyssey-basic-mini-git` | 없음 | PENDING |
| 7 | B4-1 | `codyssey-basic-b4-1-portfolio` | `codyssey-basic-web-portfolio` | 없음 | PENDING |
| 8 | B4-2 | `codyssey-basic-b4-2-interactive-web-app` | `codyssey-basic-react-spa` | 없음 | PENDING |
| 9 | B5-1 | `codyssey-basic-b5-1-database-design` | `codyssey-basic-sql-database` | 없음 | PENDING |
| 10 | B5-2 | `codyssey-basic-b5-2-fastapi-crud-app` | `codyssey-basic-fastapi-crud` | 없음 | PENDING |
| 11 | B5-3 | `codyssey-basic-b5-3-fastapi-auth-service` | `codyssey-basic-fastapi-auth` | 없음 | PENDING |
| 12 | B6-1 | `codyssey-basic-b6-1-cloud-deployment` | `codyssey-basic-cloud-infrastructure` | 없음 | PENDING |
| 13 | B6-2 | `codyssey-basic-b6-2-ai-code-summarizer` | `codyssey-basic-ai-git-assistant` | 없음 | PENDING |
| 14 | B7-1 | `codyssey-basic-b7-1-web-ai-chatbot` | `codyssey-basic-ai-chatbot` | 없음 | PENDING |
| 15 | B7-2 | `codyssey-basic-b7-2-advanced-ai-chatbot` | `codyssey-basic-ai-chatbot-fullstack` | 없음 | PENDING |

---

## 2. 전환 원칙

```text
Repository = 주제 기반 Stable Identity(안정 식별자)
Mission ID = 현재 교육과정의 가변 번호
Control Tower = Mission ID ↔ Repository 매핑의 단일 기준
```

과거 Commit/PR/Issue에 남아 있는 B1-1, B2-1 등의 번호는 당시 기록이므로 History Rewrite(이력 재작성)하지 않는다.

---

## 3. 실제 Rename 실행 순서

이름 변경은 한 번에 모두 바꾸고 나중에 수습하지 않는다. 다음 순서로 **저장소 1개씩** 처리한다.

```text
1. 목표 Repository 이름 재확인
2. 동일 이름 중복 재확인
3. GitHub Repository Rename
4. 새 URL 접속 확인
5. 기존 URL Redirect 확인
6. Control Tower 링크 갱신
7. 해당 Mission Repository 내부의 자기참조 URL 갱신
8. Quick Start / clone 명령 갱신
9. 주요 문서 링크 404 검사
10. 다음 Repository 진행
```

---

## 4. Control Tower에서 갱신해야 할 대표 위치

현재 번호 기반 URL이 존재할 가능성이 높은 대표 파일:

- `README.md`
- `MISSION-INDEX.md`
- `PROGRESS.md`
- `training/round-01-clear/**`
- `docs/00-governance/workcell-prompts/**`
- `environments/**`
- `standards/**`
- 발표/평가 템플릿 및 Repository 링크 문서

실제 Rename 후에는 전체 검색으로 옛 Repository URL을 찾아 교체한다.

예:

```bash
rg 'codyssey-basic-b[1-7]-[1-3]-' .
```

단, **역사적 기록을 설명하는 Migration 문서 자체**의 기존 이름은 교체 대상에서 제외할 수 있다.

---

## 5. 로컬 clone 사용자의 Remote 갱신

기존 clone은 GitHub Redirect로 일정 기간 동작할 수 있으나 명시적으로 새 주소를 설정한다.

예:

```bash
cd "$HOME/codyssey/codyssey-basic-b2-1-budget-tracker"
git remote -v
git remote set-url origin https://github.com/MetaStudy999/codyssey-basic-budget-tracker.git
git remote -v
```

로컬 디렉터리 이름은 Git 동작에 필수 조건이 아니므로 즉시 변경하지 않아도 된다. 필요하면 별도 정리한다.

---

## 6. 완료 Gate

### Gate A — Naming Audit

- [x] 현재 Mission Repository 15개 확인
- [x] 목표 Stable Topic Slug 정의
- [x] `MetaStudy999` 계정 내 정확한 이름 중복 검사
- [x] 이름 충돌 없음 확인

### Gate B — Repository Rename

- [ ] 15개 Repository 실제 Rename
- [ ] 새 URL 접근 확인
- [ ] 기존 URL Redirect 확인
- [ ] PR/Issue/Commit 이력 유지 확인

### Gate C — Reference Migration

- [ ] Control Tower 링크 일괄 갱신
- [ ] Workcell Prompt 링크 갱신
- [ ] Quick Start / clone 명령 갱신
- [ ] 각 Mission Repository 자기참조 링크 갱신
- [ ] 옛 URL 잔존 검색 및 의도된 역사 기록만 제외

### Gate D — Verification

- [ ] 주요 Repository 링크 15개 모두 정상 접근
- [ ] README의 첫 미션 링크 정상
- [ ] Mission Index 전체 링크 정상
- [ ] 대표 clone 명령 검증
- [ ] 404 없음 확인

---

## 7. 현재 판정

```text
NAMING POLICY : IMPLEMENTED
COLLISION AUDIT: PASS
RENAME         : PENDING
LINK MIGRATION : PENDING
OVERALL        : IMPLEMENTED / NEEDS-RENAME
```

Repository 실제 이름이 변경되고 링크 검증까지 끝난 뒤에만 전체 전환을 `PASS`로 변경한다.
