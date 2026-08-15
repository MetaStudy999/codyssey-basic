# V3 Migration Matrix — Initial Audit

이 문서는 `main`의 현재 구조를 V3로 옮기기 위한 **1차 고수준 감사 결과**다. 세부 파일별 판정은 후속 Audit에서 보완한다.

판정값:
- `KEEP`: 현재 역할을 거의 그대로 유지
- `MERGE`: 다른 문서/영역과 통합
- `REWRITE`: 내용은 보존하되 V3 구조/용어로 재작성
- `ARCHIVE`: 운영 기준에서는 제거하고 Git history/branch에 보존
- `DROP`: 중복·임시·상충으로 재사용 가치가 낮음

## Root / Automation

| Current | Decision | V3 Target | Notes |
|---|---|---|---|
| `README.md` | REWRITE | `README.md` | V3 전체 지도, 현재 위치, Mission, Dashboard 진입점 중심으로 재작성 |
| `AGENTS.md` | KEEP + REVIEW | `AGENTS.md` | 기존 Agent 운영 원칙 보존, V3 Growth/Repository Policy와 충돌 여부 점검 |
| `CHANGELOG.md` | KEEP | `CHANGELOG.md` | V3 Cutover 기록 추가 |
| `.github/workflows/pages.yml` | KEEP + TEST | 동일 | GitHub Pages 배포 검증 후 유지 |
| `.github/workflows/sync-progress.yml` | REWRITE + TEST | 동일 | Growth/Skill/Activity 동기화가 필요하면 확장 |
| `scripts/sync_progress.py` | REWRITE | `scripts/sync_progress.py` 또는 분리 스크립트 | 기존 Mission Gate 생성은 유지하고 V3 데이터 레이어 추가 |
| `site/` | REWRITE | `site/` | 기존 UI 자산 보존, Growth/Mission/Skill/Activity 4층 Dashboard로 재구성 |
| `templates/` | KEEP + MERGE | `templates/` | Mission 관련 템플릿 유지, Growth/Activity/Project 템플릿 추가 검토 |

## config/

| Current | Decision | V3 Target | Notes |
|---|---|---|---|
| `config/missions.yaml` | KEEP | 동일 | 공식 Mission Source of Truth. G1~G8 및 Mission/Learning 상태 보존 |
| `config/opportunities.yaml` | REWRITE | 동일 | 기존 `NOW/NEXT/WATCH/ARCHIVE`를 V3 Status와 정렬하고 Priority/Growth Stage 필드 추가 검토 |
| `config/resources.yaml` | KEEP + REVIEW | 동일 | `docs/14-resources`와 연결 |
| `config/waves/` | KEEP + REVIEW | 동일 또는 Activity/Execution 설정 | 병렬 Mission 실행 기능과 V3 WIP/Stage 정책 충돌 여부 확인 |
| `config/growth.yaml` | NEW | 동일 | V3 Growth/Status/Priority/Competency 기준 |

## docs/

| Current | Decision | V3 Target | Notes |
|---|---|---|---|
| `00-governance/` | KEEP + MERGE | `00-governance/` | 기존 Source/Agent/Workcell 정책과 새 Growth/Status/Priority/Repository Policy 통합 |
| `01-overview/` | MERGE | `01-master-map/` | 기존 Overview를 V3 Master Map의 입문 설명으로 흡수 |
| `02-domains/` | REWRITE | `02-missions/` | 7개 기술 Domain 정보는 보존하되 B1~B7 Mission 중심 구조로 재정리 |
| `03-progress/` | KEEP + REWRITE | `03-progress/` | 기존 G1~G8 진행표는 핵심 자산. Growth/Skill/Activity 진행층을 추가 |
| `04-learning/` | KEEP + REWRITE | `04-learning/` | 용어/학습 자료는 핵심 자산. terminology/concepts/labs/troubleshooting/explain 구조로 정리 |
| `05-architecture/` | MERGE | Mission / Learning / Project | Architecture는 독립 성장 단계가 아니라 여러 Domain을 가로지르는 역량으로 재배치 |
| `06-evaluation/` | MERGE | Governance / Mission / Templates | 평가 규칙은 Mission과 운영 정책 가까이에 배치 |
| `07-portfolio/` | REWRITE / MOVE | `12-portfolio/` | Evidence → Case Study → Narrative 3층으로 확장 |
| `08-resources/` | MOVE | `14-resources/` | 참고자료 전용 영역으로 유지 |
| `09-opportunities/` | REWRITE / MOVE | `07-opportunities/` | 공모전/해커톤/세미나/학회/프로그램을 Growth Stage + Status + Priority로 관리 |
| `10-professional-growth/` | SPLIT / MERGE | 여러 V3 Domain | Open Source, Research, Career, Community, Project, Impact 등으로 분해. `Professional Growth` 자체는 전체 시스템 개념으로 유지 |
| `11-advanced/` | SPLIT / MERGE | 여러 V3 Domain | `ADVANCED`를 폴더가 아니라 Growth Stage로 전환. 기존 기술 Backlog는 관련 Domain/Project/Research로 분배 |

## V3 New Logical Domains

아래는 새로 정의되지만 실제 세부 폴더는 ACTIVE가 될 때 생성한다.

| V3 Domain | Initial Status | Physical Creation |
|---|---|---|
| `05-community/` | READY | Code Review/Debugging/Study가 실제 운영될 때 |
| `06-projects/` | READY | Mission 결과물을 장기 Project로 승격할 때 |
| `07-opportunities/` | READY | 기존 09-opportunities Migration 시 |
| `08-research/` | PLANNED | 실제 Research Question/Experiment 시작 시 |
| `09-open-source/` | READY | 실제 OSS 탐색/Contribution 기록 시작 시 |
| `10-career/` | READY | Career Evidence/직무탐색을 독립 관리할 때 |
| `11-venture/` | PLANNED | User Research/MVP/PoC가 ACTIVE가 될 때 |
| `12-portfolio/` | READY | 기존 Portfolio Migration 시 |
| `13-impact/` | PLANNED | 실제 외부 영향 Evidence가 생길 때 |
| `14-resources/` | READY | 기존 Resources Migration 시 |

## High-value Assets to Protect

V3 재구축 중 우선 보호 대상으로 본다.

1. `config/missions.yaml`의 B1-1~B7-2 Mission/Status/Gate 데이터
2. `docs/03-progress/`의 G1~G8 Progress 체계
3. `docs/04-learning/`의 용어·학습 기준 및 Vocabulary 자산
4. `docs/00-governance/`의 Workcell/Source/Agent 운영 문서
5. `scripts/sync_progress.py`와 `site/data/`의 자동 생성/표시 흐름
6. `.github/workflows/`의 Pages 및 Sync 자동화
7. `templates/`의 Mission 수행/증빙 템플릿
8. `09-opportunities`, `10-professional-growth`, `11-advanced` 안의 검증된 확장 아이디어

## Next Audit

다음 순서로 파일 단위 Audit을 진행한다.

1. `docs/00-governance`
2. `docs/02-domains`
3. `docs/03-progress` + `scripts/sync_progress.py`
4. `docs/04-learning`
5. `site/` + `.github/workflows`
6. `templates/`
7. `09-opportunities` / `10-professional-growth` / `11-advanced`

각 파일을 KEEP/MERGE/REWRITE/ARCHIVE/DROP으로 확정한 후 실제 이동·삭제를 시작한다.
