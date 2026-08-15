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
- [x] `config/skills.yaml` Skill Matrix 모델 추가
- [x] `config/activities.yaml` Activity Registry 모델 추가
- [x] `config/projects.yaml` Project Lineage 모델 추가
- [x] `config/opportunities.yaml` V3 Availability/Fit Schema로 전환
- [ ] 새 Target Domain Index 전체 생성
- [ ] 기존 Learning 자산 V3 Macro/Micro 용어 정렬
- [ ] Architecture/Evaluation 내용 재배치
- [ ] Portfolio/Resources 새 경로 Migration
- [ ] Professional Growth/Advanced 내용 Domain별 분해
- [ ] Sync script V3 확장
- [ ] Dashboard Growth/Mission/Skill/Activity 4층 구조 구현
- [ ] GitHub Pages 검증
- [ ] 자동 생성 파일 검증

### Phase D — Cutover

- [ ] 링크/경로 전체 검증
- [ ] Mission Gate 회귀 검증
- [ ] Draft PR Review
- [ ] main Cutover
- [ ] Post-cutover Cleanup

## 안전 규칙

- `config/missions.yaml`과 기존 G1~G8 Mission Gate는 우선 보존한다.
- 공식 Mission 요구사항과 기존 Evidence를 구조 개편 과정에서 잃지 않는다.
- 자동 생성 파일과 수동 편집 파일의 Source of Truth를 구분한다.
- 새 구조가 기존 기능을 대체할 때만 과거 구조를 제거한다.
- 새 Target이 검증되기 전 Old Path를 삭제하지 않는다.

## 다음 작업

1. `03-learning`~`12-impact` Target Index를 README 수준으로 생성
2. 기존 `04-learning`의 대규모 Vocabulary 자산을 **이동보다 먼저** V3 Macro/Micro 용어와 연결
3. Architecture/Evaluation을 Governance/Mission/Project로 흡수
4. Portfolio/Resources/Opportunity를 새 Domain으로 이관
5. Professional Growth/Advanced를 Domain별로 분해
6. Config/Sync/Dashboard를 V3 Source of Truth에 연결
7. 회귀 검증 후 Old Path 제거
