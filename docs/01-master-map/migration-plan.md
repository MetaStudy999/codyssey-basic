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
- [ ] GitHub Actions에서 `sync_growth.py` / `validate_v3.py` 자동 실행 연결
- [ ] 기존 대규모 Vocabulary 파일의 실제 경로 Migration
- [ ] Professional Growth/Advanced 개별 콘텐츠 Domain별 이동 또는 Legacy 제거
- [ ] GitHub Pages 실제 배포 검증
- [ ] 자동 생성 파일 실제 실행 회귀 검증

### Phase D — Cutover

- [ ] 자동 Validator 실제 실행 PASS
- [ ] 링크/경로 전체 검증 PASS
- [ ] Mission Gate 회귀 검증 PASS
- [ ] Dashboard 브라우저 검증 PASS
- [ ] GitHub Pages 검증 PASS
- [ ] Draft PR Review
- [ ] main Cutover
- [ ] Post-cutover Cleanup

## 자동화 현재 상태

기존 Mission 자동화는 그대로 유지한다.

```text
config/missions.yaml + config/waves/*
        ↓
scripts/sync_progress.py
        ↓
README / legacy progress / missions.json / workcells.json
```

V3 Growth 자동화는 Generator와 생성 결과물까지 구현했다.

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

Cutover Validator:

```text
sync_progress.py --check
        +
sync_growth.py --check
        +
validate_v3.py
        ↓
V3 STRUCTURE / DATA / LINK / DASHBOARD WIRING GATE
```

GitHub Actions Workflow 파일 변경은 현재 연결 도구의 보안 제한으로 자동 반영하지 못한 상태다. 따라서 Workflow 연결은 **PENDING**이며 main Cutover 전에 반드시 해결·검증한다.

## Legacy 제거 전략

Old Path 제거는 `docs/01-master-map/legacy-path-map.md`를 따른다.

특히 다음은 마지막까지 보존한다.

- `docs/03-progress` — Mission Sync Legacy Compatibility
- `docs/04-learning` — 대규모 Vocabulary와 학습 링크

`docs/09-opportunities`, `10-professional-growth`, `11-advanced`는 새 Target에 핵심 개념을 이미 흡수했지만 링크 검증 전에는 제거하지 않는다.

## 안전 규칙

- `config/missions.yaml`과 기존 G1~G8 Mission Gate는 우선 보존한다.
- 공식 Mission 요구사항과 기존 Evidence를 구조 개편 과정에서 잃지 않는다.
- 자동 생성 파일과 수동 편집 파일의 Source of Truth를 구분한다.
- 새 구조가 기존 기능을 대체할 때만 과거 구조를 제거한다.
- 새 Target이 검증되기 전 Old Path를 삭제하지 않는다.
- Validator가 존재한다는 것과 Validator를 실제 실행해 PASS했다는 것은 구분한다.

## 다음 Critical Path

1. `sync_progress.py --check`, `sync_growth.py --check`, `validate_v3.py` 실제 실행 환경 확보
2. Growth Dashboard 브라우저 렌더링 검증
3. GitHub Actions에 Growth Sync/Validation 연결
4. Legacy Vocabulary 링크 영향도 검사
5. Professional Growth/Advanced Legacy Path 최종 정리
6. GitHub Pages + Mission G1~G8 회귀 검증
7. Draft PR Review 후 Cutover 여부 판단
