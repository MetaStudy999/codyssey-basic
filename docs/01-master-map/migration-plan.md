# V3 Migration Plan

Codyssey Developer Growth OS V3는 기존 `main`을 직접 파괴하지 않고 **Greenfield Rebuild + Safe Cutover** 방식으로 전환한다.

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
12. Post-cutover Production Validation / Cleanup

## 현재 진행 상황

### Phase A — Foundation ✅

- [x] archive/rebuild branch 생성
- [x] Growth / Status / Priority / Repository Policy
- [x] Master Growth Map / Repository Map
- [x] V3 README / AGENTS 운영원칙
- [x] 기존 구조 고수준 Inventory와 Migration Matrix
- [x] Dashboard V3 상세 설계
- [x] 구조 단위 Detailed Audit

> 구조 Audit 완료는 주요 디렉터리와 기능의 역할 판정이 끝났다는 뜻이다. Mission/Vocabulary 세부 내용의 Source 검증은 각 Workcell에서 계속한다.

### Phase B — Migration 설계 ✅

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

- [x] `02-missions` B1~B7 Target 구조 생성 및 15개 Mission Summary 이관
- [x] `03-learning`~`12-impact` Target Index 생성
- [x] Learning Macro Growth / Micro Level 모델 분리
- [x] V3 Vocabulary Bridge Index 추가 — 기존 대규모 Vocabulary를 이동 전 안정적으로 연결
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
- [x] `scripts/browser_smoke.py` Chromium 기반 Dashboard + Live Telemetry Smoke Test 추가
- [x] Legacy Path → V3 Target Map 작성
- [x] GitHub Actions에서 Mission + Growth Sync 연결
- [x] GitHub Pages Workflow에 Growth Generator / V3 Validator 연결
- [x] Pull Request용 `Validate Growth OS V3` Workflow 추가
- [x] V3 정적 Site Preview Artifact 생성 자동화
- [ ] 기존 Vocabulary의 실제 대량 경로 Migration — 현재는 **KEEP + Bridge** 전략
- [ ] Professional Growth/Advanced Legacy Path 최종 정리

## Phase D — Pre-Cutover Validation

- [x] `sync_progress.py --check` PASS
- [x] `sync_growth.py --check` PASS
- [x] `validate_v3.py` PASS
- [x] V3 Markdown 상대 링크 / 구조 검증 PASS
- [x] Mission/Growth Generated Output 동기화 검증 PASS
- [x] Growth Dashboard Chromium 렌더링 PASS
- [x] 7 Domain / 15 Mission / G1~G8 Official Gate 브라우저 렌더링 PASS
- [x] 5분 Cooldown UI 브라우저 회귀 PASS
- [x] Live Mission Telemetry 실제 네트워크 갱신 **15/15 PASS**
- [x] Static Site Preview Artifact 생성 PASS
- [ ] Legacy Cleanup Reference Scan PASS
- [ ] Draft PR 종합 Review
- [ ] 사용자 Cutover 승인

## Phase E — Post-Cutover Production Validation

실제 GitHub Pages는 `main` 배포 Workflow가 기준이므로, **production Pages URL 자체의 최종 검증은 Cutover 직후 수행하는 운영 Gate**로 분리한다.

- [ ] PR → `main` Cutover
- [ ] GitHub Pages Production Workflow PASS
- [ ] Production URL Growth Dashboard 렌더링 PASS
- [ ] Production URL Mission G1~G8 회귀 PASS
- [ ] Production URL Live Telemetry PASS
- [ ] 문제 발생 시 즉시 rollback/revert 판단
- [ ] 검증 후 Legacy Path Cleanup

이렇게 분리하면 “배포 전 Production URL을 검증해야만 병합 가능”이라는 순환 의존을 피하면서도, 실제 서비스 검증을 생략하지 않는다.

## 최신 CI / Browser Evidence

최신 검증 Workflow:

- Workflow: `Validate Growth OS V3`
- Run ID: `31906314961`
- 검증 Head: `b65eca3429cdc70e3b7f6fb22605ed0e7f143b19`
- Result: **SUCCESS**

실제 성공 항목:

```text
sync_progress.py --check                PASS
sync_growth.py --check                  PASS
validate_v3.py                          PASS
Chromium static browser smoke           PASS
Live Mission telemetry                 15/15 PASS
Browser screenshot artifact             PASS
Static site preview artifact            PASS
```

### Browser 검증 수량

```text
Growth Stage Cards          5
Skill Axis Cards           12
Domain Cards                7
Mission Cards              15
Official Gate Cells       120  # 15 × G1~G8
Live Telemetry Repos     15/15
5-minute Cooldown UI      PASS
Browser Console Errors       0
```

### Artifacts

- Browser Screenshot: `growth-os-v3-browser-smoke`
  - Artifact ID `9252442515`
- Static Site Preview: `growth-os-v3-site-preview`
  - Artifact ID `9252442654`

Static Preview는 V3 `site/` 21개 파일을 패키징한 Pre-Cutover 결과물이다. Production GitHub Pages 배포와는 구분한다.

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
        +
browser_smoke.py --live
        ↓
STRUCTURE / DATA / LINK / BROWSER / LIVE TELEMETRY GATE
```

- `sync-progress.yml`: `main`에서 Mission + Growth generated output 동기화
- `pages.yml`: Production 배포 전에 두 Generator와 Validator 실행
- `v3-validate.yml`: PR에서 Read-only 검증 + Browser/Live Telemetry Smoke + Preview Artifact 생성

## Legacy 제거 전략

Old Path 제거는 `docs/01-master-map/legacy-path-map.md`를 따른다.

특히 다음은 마지막까지 보존한다.

- `docs/03-progress` — Mission Sync Legacy Compatibility
- `docs/04-learning` — 대규모 Vocabulary와 학습 링크

기존 Vocabulary는 `docs/03-learning/vocabulary-index.md`를 통해 V3에서 접근 가능하다. 대량 Rename/Move보다 학습 연속성과 링크 안정성을 우선한다.

`docs/09-opportunities`, `docs/10-professional-growth`, `docs/11-advanced`는 새 Target에 핵심 개념을 이미 흡수했으므로 **Reference Scan 후 우선 Cleanup 후보**다.

## 안전 규칙

- `config/missions.yaml`과 기존 G1~G8 Mission Gate는 우선 보존한다.
- 공식 Mission 요구사항과 기존 Evidence를 구조 개편 과정에서 잃지 않는다.
- 자동 생성 파일과 수동 편집 파일의 Source of Truth를 구분한다.
- 새 구조가 기존 기능을 대체할 때만 과거 구조를 제거한다.
- 새 Target이 검증되기 전 Old Path를 삭제하지 않는다.
- 자동 Validator PASS, Local/CI Browser PASS, Live Telemetry PASS, Production Pages PASS를 서로 다른 Gate로 관리한다.
- `main` 병합은 사용자 승인 없이 수행하지 않는다.

## 다음 Critical Path

1. Legacy Path Reference Scanner 추가 및 Cleanup 후보(`09/10/11`) 의존성 검사
2. 안전한 Legacy 문서 정리 범위 확정
3. Draft PR 전체 변경사항 Review
4. Cutover Readiness 최종 판정
5. 사용자 승인 후에만 `main` 병합
6. 병합 직후 Production Pages Validation
