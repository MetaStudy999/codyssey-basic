# Repository Naming Standard — 미션 저장소 이름 표준

## 1. 목적

코디세이 AI/SW 기초과정의 미션 번호(B1-1, B2-1 등)는 교육과정 개편에 따라 변경될 수 있다.
따라서 Mission Repository(미션 저장소)의 영구 식별자를 **미션 번호가 아닌 미션의 핵심 주제(Stable Topic)** 로 관리한다.

핵심 원칙:

> **Mission ID는 가변 메타데이터(Metadata), Repository 이름은 안정적인 주제 식별자(Stable Topic Slug)로 관리한다.**

이 기준은 기존 Git History(깃 변경 이력), Pull Request(PR, 풀 리퀘스트), Issue(이슈), Evidence(증빙), 외부 링크의 지속성을 높이는 것을 목표로 한다.

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

### 금지하는 기본 형식

새로 정리하는 기준 Repository 이름에는 미션 번호를 넣지 않는다.

```text
codyssey-basic-b2-1-budget-tracker   # 사용 중단 방향
codyssey-basic-b5-2-fastapi-crud-app # 사용 중단 방향
```

미션 번호는 Repository 주소가 아니라 Control Tower의 매핑 정보와 각 미션 문서에서 관리한다.

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
stable_id: budget-tracker
current_mission_id: B2-1
repository: codyssey-basic-budget-tracker
```

향후 번호가 변경되면 Repository 이름은 유지하고 `current_mission_id`와 Control Tower 매핑만 변경한다.

예:

```yaml
stable_id: budget-tracker
current_mission_id: B3-1
previous_mission_ids:
  - B2-1
repository: codyssey-basic-budget-tracker
```

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

---

## 6. 2026-09-03 기준 표준 매핑

| 현재 Mission ID | 핵심 주제 | 기존 Repository | 표준 Repository |
|---|---|---|---|
| B1-1 | 시스템 관제 자동화 | `codyssey-basic-b1-1-system-monitor` | `codyssey-basic-system-monitor` |
| B1-2 | 시스템 리소스 장애 분석 | `codyssey-basic-b1-2-linux-troubleshooting` | `codyssey-basic-system-troubleshooting` |
| B2-1 | 파일 기반 가계부 | `codyssey-basic-b2-1-budget-tracker` | `codyssey-basic-budget-tracker` |
| B2-2 | Git 팀 협업 | `codyssey-basic-b2-2-git-team-collaboration` | `codyssey-basic-git-collaboration` |
| B3-1 | Mini Redis | `codyssey-basic-b3-1-fast-data-store` | `codyssey-basic-mini-redis` |
| B3-2 | Mini Git | `codyssey-basic-b3-2-file-change-tracker` | `codyssey-basic-mini-git` |
| B4-1 | 웹 포트폴리오 | `codyssey-basic-b4-1-portfolio` | `codyssey-basic-web-portfolio` |
| B4-2 | React SPA | `codyssey-basic-b4-2-interactive-web-app` | `codyssey-basic-react-spa` |
| B5-1 | SQL 데이터베이스 | `codyssey-basic-b5-1-database-design` | `codyssey-basic-sql-database` |
| B5-2 | FastAPI CRUD | `codyssey-basic-b5-2-fastapi-crud-app` | `codyssey-basic-fastapi-crud` |
| B5-3 | FastAPI 인증/인가 | `codyssey-basic-b5-3-fastapi-auth-service` | `codyssey-basic-fastapi-auth` |
| B6-1 | 클라우드 인프라 | `codyssey-basic-b6-1-cloud-deployment` | `codyssey-basic-cloud-infrastructure` |
| B6-2 | AI Git 자동화 도우미 | `codyssey-basic-b6-2-ai-code-summarizer` | `codyssey-basic-ai-git-assistant` |
| B7-1 | 웹 AI 챗봇 | `codyssey-basic-b7-1-web-ai-chatbot` | `codyssey-basic-ai-chatbot` |
| B7-2 | 풀스택 AI 챗봇 고도화 | `codyssey-basic-b7-2-advanced-ai-chatbot` | `codyssey-basic-ai-chatbot-fullstack` |

---

## 7. 이름 변경 전 중복 검사

Repository Rename(저장소 이름 변경) 전 반드시 같은 Owner(소유자) 아래에서 목표 이름의 중복 여부를 확인한다.

검사 대상:

```text
MetaStudy999/<target-repository-name>
```

판정:

```text
목표 이름 없음      → RENAME READY
동일 이름 이미 존재 → BLOCKED, 내용 비교 후 별도 결정
유사 이름만 존재    → 수동 의미 검토
```

2026-09-03 연결된 GitHub 계정의 `MetaStudy999` 소유 Repository 전체를 점검한 결과, 위 15개 **표준 Repository 이름과 정확히 동일한 기존 Repository 이름은 발견되지 않았다.**

따라서 이름 충돌 관점에서는 15개 모두 `RENAME READY`이다.

---

## 8. Rename 이후 필수 후속 작업

Repository 이름을 실제 변경한 뒤 다음을 갱신한다.

1. Control Tower의 Repository 링크
2. `README.md`의 clone/guide 링크
3. Workcell Prompt(워크셀 프롬프트)의 Repository 경로
4. Quick Start(빠른 시작)의 `git clone` 명령
5. 문서 내부의 GitHub URL
6. 로컬 clone의 `origin` Remote URL(원격 주소)
7. CI/CD(지속적 통합/배포) 또는 GitHub Actions에서 고정 Repository 이름을 참조하는 부분
8. 제출 문서의 Repository URL

로컬 Remote URL 예:

```bash
git remote set-url origin https://github.com/MetaStudy999/codyssey-basic-budget-tracker.git
```

---

## 9. Git 이력 보존 원칙

Repository Rename은 기존 Repository 자체를 유지하는 방식으로 수행한다.

다음 항목을 보존한다.

- Commit History(커밋 이력)
- Branch(브랜치)
- Pull Request(PR)
- Issue(이슈)
- Tag(태그)
- Release(릴리스, 존재하는 경우)

새 Repository를 만든 뒤 파일만 복사하는 방식은 특별한 이유가 없으면 사용하지 않는다.

---

## 10. 완료 기준

Repository 이름 체계 전환은 아래가 모두 만족될 때 완료한다.

```text
[ ] 목표 이름 중복 없음
[ ] 실제 Repository Rename 완료
[ ] Control Tower 매핑 갱신
[ ] 문서/Quick Start/Workcell 링크 갱신
[ ] 로컬 Remote URL 갱신 가이드 확인
[ ] GitHub 기존 PR/Issue/Commit 이력 유지 확인
[ ] 주요 링크 404 없음 확인
```

이 기준을 충족하기 전에는 이름 변경 작업을 `PASS`로 표시하지 않는다.
