# V3 Migration Plan

Codyssey Developer Growth OS V3는 기존 main을 직접 파괴하지 않고 **Greenfield Rebuild + Safe Cutover** 방식으로 전환한다.

## Branch Strategy

- `main`: 현재 운영 기준본
- `archive/pre-growth-os-v3`: V3 이전 Snapshot 보존
- `rebuild/growth-os-v3`: V3 재구축 작업 브랜치

## Migration 원칙

기존 구조를 그대로 복사하지 않는다. 각 자료를 `KEEP / MERGE / REWRITE / ARCHIVE / DROP`으로 판정한다.

## Cutover 단계

1. Snapshot
2. Foundation
3. Master Map
4. Inventory
5. Migration Matrix
6. Content Migration
7. Config Refactor
8. Dashboard Refactor
9. Validation
10. Review
11. Cutover
12. Post-cutover Cleanup

## 현재 진행 상황

### Phase A — Foundation

- [x] archive/rebuild branch 생성
- [x] Growth / Status / Priority / Repository Policy
- [x] Master Growth Map / Repository Map
- [x] V3 README / AGENTS 운영원칙
- [x] 기존 구조 고수준 Inventory와 Migration Matrix
- [x] Dashboard V3 상세 설계
- [x] 구조 단위 Detailed Audit

> 구조 Audit 완료는 주요 디렉터리와 기능의 역할 판정이 끝났다는 뜻이다. Mission/Vocabulary 세부 내용의 Source 검증은 각 Workcell에서 계속한다.

### Phase B — Migration 설계

- [x] Governance
- [x] Overview → Master Map
- [x] Domains → Missions
- [x] Progress / Sync / Dashboard 자동화
- [x] Learning 보존/재분류
- [x] Architecture / Evaluation 재배치
- [x] Portfolio / Resources
- [x] Opportunities 상태/가용성 분리
- [x] Professional Growth / Advanced 분해
- [x] Templates 보존/확장 정책

### Phase C — Physical Migration / System Refactor

- [x] `02-missions` B1~B7 Target 구조 생성 및 Mission Summary 이관
- [x] `03-learning`~`12-impact` Target Index 생성
- [x] Learning Macro Growth / Micro Level 모델 분리
- [x] 기존 `90-advanced`와 V3 `ADVANCED` 용어 충돌 규칙 정리
- [x] Architecture Curriculum/Dependency를 Master Map에 흡수
- [x] Evaluation Traceability를 Governance에 흡수
- [x] Portfolio Model을 `11-portfolio`에 이관
- [x] Resources Model을 `03-learning/resources`에 이관
- [x] Professional Growth/Advanced Routing Map 작성
- [x] Opportunity Domain 핵심 카테고리·Mission 연결 원칙을 `06-opportunities`와 Config에 흡수
- [x] `config/skills.yaml` Skill Matrix 모델 추가
- [x] `config/activities.yaml` Activity Registry 모델 추가
- [x] `config/projects.yaml` Project Lineage 모델 추가
- [x] `config/opportunities.yaml` V3 Availability/Fit Schema로 전환
- [x] `scripts/sync_growth.py` 추가 — 기존 Mission Sync와 분리된 V3 Registry Generator
- [x] Growth/Skill/Activity/Project/Opportunity Generated JSON을 Generator 형식과 정렬
- [x] `current-state.md`를 Growth Registry Generator 형식과 정렬
- [x] Dashboard에 Growth Stage / Registry Summary / 12 Skill Axis Layer 추가
- [x] 기존 Mission 수동 Refresh + 5분 Cooldown UI 보존
- [x] `scripts/validate_v3.py` 구조/링크/자동생성/Dashboard Wiring 검증기 추가
- [x] Legacy Path → V3 Target Map 작성
- [x] GitHub Actions에서 Mission + Growth Sync 연결
- [x] GitHub Pages Workflow에 Growth Generator / V3 Validator 연결
- [x] Pull Request / rebuild branch용 `Validate Growth OS V3` Workflow 추가
- [x] CI에서 `sync_progress.py --check` PASS
- [x] CI에서 `sync_growth.py --check` PASS
- [x] CI에서 `validate_v3.py` PASS
- [ ] 기존 대규모 Vocabulary 파일의 실제 경로 Migration
- [ ] Professional Growth/Advanced 개별 콘텐츠 Domain별 이동 또는 Legacy 제거
- [ ] GitHub Pages 실제 배포 검증

### Phase D — Cutover

- [x] 자동 Validator 실제 실행 PASS
- [x] V3 Markdown 상대 링크 / 구조 검증 PASS
- [x] Mission/Growth Generated Output 동기화 검증 PASS
- [ ] Mission Gate 브라우저 회귀 검증 PASS
- [ ] Dashboard 브라우저 검증 PASS
- [ ] GitHub Pages 실제 배포 검증 PASS
- [ ] Draft PR Review
- [ ] main Cutover
- [ ] Post-cutover Cleanup

## CI Validation Evidence

`Validate Growth OS V3` Workflow가 `rebuild/growth-os-v3`에서 실제 실행되었고 다음 단계가 모두 성공했다.

```text
Install validation dependency          PASS
Verify Mission generated outputs      PASS
Verify Growth OS generated outputs    PASS
Validate V3 structure/links/wiring    PASS
```

검증된 commit:

`19f90806e6ce68d30c4801901ad77ca1bed341b1`

Workflow Run:

`31905851028`

이 검증은 구조·데이터·링크·Dashboard Wiring 수준의 자동 검증이다. 실제 브라우저 렌더링과 GitHub Pages 배포 검증을 대신하지 않는다.

## 자동화 현재 상태

### Mission Pipeline

```text
config/missions.yaml + config/waves/*
        ↓
scripts/sync_progress.py
        ↓
README / legacy progress / missions.json / workcells.json
```

### Growth Pipeline

```text
config/growth.yaml
config/skills.yaml
config/activities.yaml
config/projects.yaml
config/opportunities.yaml
        ↓
scripts/sync_growth.py
        ↓
current-state.md + growth/skills/activities/projects/opportunities JSON
```

### Validation Pipeline

```text
sync_progress.py --check
        +
sync_growth.py --check
        +
validate_v3.py
        ↓
V3 STRUCTURE / DATA / LINK / DASHBOARD WIRING GATE
```

`sync-progress.yml`은 main에서 Mission/Growth generated output을 동기화하고, `pages.yml`은 배포 전에 두 Generator와 Validator를 실행한다. `v3-validate.yml`은 rebuild branch와 PR에서 read-only 검증을 수행한다.

## Legacy 제거 전략

Old Path 제거는 `docs/01-master-map/legacy-path-map.md`를 따른다.

특히 다음은 마지막까지 보존한다.

- `docs/03-progress` — Mission Sync Legacy Compatibility
- `docs/04-learning` — 대규모 Vocabulary와 학습 링크

`docs/09-opportunities`, `10-professional-growth`, `11-advanced`는 새 Target에 핵심 개념을 이미 흡수했지만 실제 Pages/브라우저 회귀 검증 전에는 제거하지 않는다.

## 안전 규칙

- `config/missions.yaml`과 기존 G1~G8 Mission Gate는 우선 보존한다.
- 공식 Mission 요구사항과 기존 Evidence를 구조 개편 과정에서 잃지 않는다.
- 자동 생성 파일과 수동 편집 파일의 Source of Truth를 구분한다.
- 새 구조가 기존 기능을 대체할 때만 과거 구조를 제거한다.
- 새 Target이 검증되기 전 Old Path를 삭제하지 않는다.
- 자동 Validator PASS와 브라우저/운영환경 PASS는 서로 다른 Gate다.

## 다음 Critical Path

1. Growth Dashboard 실제 브라우저 렌더링 검증
2. Mission 수동 Refresh + 5분 Cooldown + G1~G8 브라우저 회귀 검증
3. Legacy Vocabulary 링크 영향도 검사 및 단계적 Migration
4. Professional Growth/Advanced Legacy Path 최종 정리
5. GitHub Pages 실제 배포 검증
6. Draft PR 종합 Review
7. main Cutover 여부 판단
