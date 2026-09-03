# Repository Naming Standard — 미션 저장소 이름 표준

## 1. 목적

코디세이 AI/SW 기초과정의 Mission ID(미션 번호: B1-1, B2-1 등)는 교육과정 개편에 따라 변경될 수 있다.
따라서 Mission Repository(미션 저장소)의 영구 식별자를 **미션 번호가 아닌 미션의 핵심 주제(Stable Topic)** 로 관리한다.

핵심 원칙:

> **Mission ID는 가변 메타데이터(Metadata), Repository 이름은 안정적인 주제 식별자(Stable Topic Slug)로 관리한다.**

이 기준은 기존 Git History(깃 변경 이력), Pull Request(PR, 풀 리퀘스트), Issue(이슈), Evidence(증빙), 외부 링크의 지속성을 높이는 것을 목표로 한다.

현재 Mission ID의 단일 기준은 [`CURRENT-MISSION-MAP.md`](../CURRENT-MISSION-MAP.md)이다.

---

## 2. 표준 Repository 이름

```text
codyssey-basic-<stable-topic-slug>
```

예:

```text
codyssey-basic-system-monitor
codyssey-basic-budget-tracker
codyssey-basic-mini-redis
codyssey-basic-fastapi-crud
```

### 사용하지 않는 기본 형식

현재 기준 Repository 이름에는 미션 번호를 넣지 않는다.

```text
codyssey-basic-b2-1-budget-tracker   # 과거 번호 종속형
codyssey-basic-b5-2-fastapi-crud-app # 과거 번호 종속형
```

미션 번호는 Repository 주소가 아니라 Control Tower의 매핑 정보와 각 미션의 현재 Metadata에서 관리한다.

---

## 3. Stable Topic Slug 선정 기준

Stable Topic Slug(안정 주제 슬러그)는 다음 우선순위를 따른다.

1. 미션의 최종 결과물을 짧게 식별할 수 있어야 한다.
2. 미션 번호가 바뀌어도 의미가 유지되어야 한다.
3. 공식 제목의 문구가 일부 바뀌어도 가능하면 유지할 수 있어야 한다.
4. 지나치게 긴 제목 번역보다 기술적 핵심을 사용한다.
5. 동일 계정 안에서 다른 Repository와 중복되지 않아야 한다.
6. 소문자 영문과 하이픈(`-`)을 기본으로 사용한다.

좋은 예:

```text
budget-tracker
mini-redis
mini-git
react-spa
fastapi-auth
ai-git-assistant
```

피하는 예:

```text
b2-1
mission-2
final-version
new-project
```

---

## 4. Mission ID 관리

Mission ID(미션 번호)는 현재 교육과정에서의 위치를 나타내는 **가변 값**이다.

예:

```yaml
stable_id: web-portfolio
current_mission_id: B1-1
previous_mission_ids:
  - B4-1
repository: codyssey-basic-web-portfolio
```

향후 번호가 다시 변경되면 Repository 이름은 유지하고 `current_mission_id`, `previous_mission_ids`, Control Tower 매핑만 변경한다.

과거 Commit(커밋) 메시지와 PR/Issue의 옛 미션 번호는 당시 기록이므로 강제로 재작성하지 않는다.

---

## 5. Control Tower 역할

`MetaStudy999/codyssey-basic`은 다음 관계의 Source of Truth(단일 기준원) 역할을 한다.

```text
현재 Mission ID
      ↓
Stable Topic ID
      ↓
Canonical Repository
```

즉, Mission ID가 Repository를 소유하는 구조가 아니라 Control Tower가 현재 Mission ID를 안정적인 Repository에 연결한다.

현재 번호 기준표:

- [`CURRENT-MISSION-MAP.md`](../CURRENT-MISSION-MAP.md)
- [`MISSION-INDEX.md`](../MISSION-INDEX.md)

---

## 6. 2026-09-03 현재 표준 매핑

| 현재 Mission ID | 이전 ID | 핵심 주제 | Canonical Repository |
|---|---|---|---|
| **B1-1** | B4-1 | 웹 포트폴리오 | `codyssey-basic-web-portfolio` |
| **B1-2** | B4-2 | React SPA | `codyssey-basic-react-spa` |
| **B2-1** | B2-1 | 파일 기반 가계부 | `codyssey-basic-budget-tracker` |
| **B2-2** | B2-2 | Git 팀 협업 | `codyssey-basic-git-collaboration` |
| **B3-1** | B6-1 | 클라우드 인프라 | `codyssey-basic-cloud-infrastructure` |
| **B3-2** | B6-2 | AI Git 자동화 도우미 | `codyssey-basic-ai-git-assistant` |
| **B4-1** | B1-1 | 시스템 관제 자동화 | `codyssey-basic-system-monitor` |
| **B4-2** | B1-2 | 시스템 리소스 장애 분석 | `codyssey-basic-system-troubleshooting` |
| **B5-1** | B3-1 | Mini Redis | `codyssey-basic-mini-redis` |
| **B5-2** | B3-2 | Mini Git | `codyssey-basic-mini-git` |
| **B6-1** | B5-1 | SQL 데이터베이스 | `codyssey-basic-sql-database` |
| **B6-2** | B5-2 | FastAPI CRUD | `codyssey-basic-fastapi-crud` |
| **B6-3** | B5-3 | FastAPI 인증/인가·연관관계 | `codyssey-basic-fastapi-auth` |
| **B7-1** | B7-1 | 웹 AI 챗봇 | `codyssey-basic-ai-chatbot` |
| **B7-2** | B7-2 | 풀스택 AI 챗봇 고도화 | `codyssey-basic-ai-chatbot-fullstack` |

### 번호 변경에서 확인해야 할 핵심

```text
기존 B5-3 → 현재 B6-3
```

따라서 신규 운영 문서에서 FastAPI 인증 미션을 B5-3으로 새로 표기하지 않는다.

---

## 7. Repository Rename 완료 상태

2026-09-03에 15개 Mission/Project Repository의 주제 기반 이름 전환을 수행했다.

현재 연결된 GitHub 저장소 목록으로 다음을 확인했다.

```text
[PASS] 15개 Canonical Repository 존재
[PASS] 번호가 제거된 주제 기반 이름 적용
[PASS] 기존 Repository ID 유지 확인
[PASS] main 브랜치 유지
```

예:

```text
과거: codyssey-basic-b2-1-budget-tracker
현재: codyssey-basic-budget-tracker
```

Repository Rename은 새 저장소를 생성한 것이 아니라 기존 저장소의 이름만 변경한 것이므로 Commit/PR/Issue 이력을 그대로 유지한다.

---

## 8. Rename 이후 필수 후속 작업

Repository 이름을 실제 변경한 뒤 현재 운영 문서에서 다음을 갱신한다.

1. Control Tower의 Repository 링크
2. `README.md`의 clone/guide 링크
3. Workcell Prompt(워크셀 프롬프트)의 Repository 경로와 현재 Mission ID
4. Quick Start(빠른 시작)의 `git clone` 명령
5. 문서 내부의 GitHub URL
6. 로컬 clone의 `origin` Remote URL(원격 주소)
7. CI/CD(지속적 통합/배포) 또는 GitHub Actions에서 고정 Repository 이름을 참조하는 부분
8. 제출 문서의 Repository URL
9. 각 Mission Repository의 현재 Mission Metadata

로컬 Remote URL 예:

```bash
git remote set-url origin https://github.com/MetaStudy999/codyssey-basic-budget-tracker.git
```

---

## 9. Git 이력 보존 원칙

Repository Rename과 Mission ID 변경은 과거 이력을 재작성하는 작업이 아니다.

다음 항목을 보존한다.

- Commit History(커밋 이력)
- Branch(브랜치)
- Pull Request(PR)
- Issue(이슈)
- Tag(태그)
- Release(릴리스, 존재하는 경우)
- 과거 증빙에서 당시 사용된 Mission ID

과거 번호가 포함된 Commit/PR/Issue를 최신 번호로 강제 수정하지 않는다.

---

## 10. 현재 완료 기준

Repository 이름 체계 자체는 전환되었다. 전체 Reference Migration(참조 마이그레이션)은 아래가 모두 만족될 때 완료한다.

```text
[x] 목표 이름 중복 없음
[x] 실제 Repository Rename 완료
[x] 현재 Mission ID ↔ Repository 기준표 정의
[ ] Control Tower 모든 현재 링크 갱신
[ ] 문서/Quick Start/Workcell 링크 갱신
[ ] 각 Mission Repository 현재 Metadata 갱신
[ ] 로컬 Remote URL 갱신 가이드 확인
[x] GitHub 기존 PR/Issue/Commit 이력 유지 원칙 확인
[ ] 주요 링크 404 없음 확인
```

현재 판정:

```text
NAMING POLICY     : PASS
REPOSITORY RENAME : PASS
MISSION REMAP     : IMPLEMENTED
REFERENCE MIGRATION: IN PROGRESS
```
