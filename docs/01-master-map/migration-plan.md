# V3 Migration Plan

Codyssey Developer Growth OS V3는 기존 main을 직접 파괴하지 않고 **Greenfield Rebuild + Safe Cutover** 방식으로 전환한다.

## Branch Strategy

- `main`: 현재 운영 기준본
- `archive/pre-growth-os-v3`: V3 이전 Snapshot 보존
- `rebuild/growth-os-v3`: V3 재구축 작업 브랜치

## Migration 원칙

기존 구조를 그대로 복사하지 않는다. 각 자료를 아래 다섯 가지로 분류한다.

### KEEP
현재 위치와 역할이 V3에서도 적합하다.

### MERGE
여러 문서에 중복된 내용을 하나의 기준 문서로 통합한다.

### REWRITE
내용은 가치가 있지만 V3 분류와 용어에 맞게 다시 작성한다.

### ARCHIVE
현재 운영에는 필요 없지만 역사적/참고 가치가 있다. 가능하면 main의 별도 archive 폴더보다 Git history/branch를 우선 사용한다.

### DROP
중복, 임시, 오래된 규칙, 상충하는 기준으로 재사용 가치가 낮다.

## Cutover 단계

1. **Snapshot** — 기존 main 보존
2. **Foundation** — Growth/Status/Priority/Repository Policy 확정
3. **Master Map** — 미래 전체 구조와 관계 정의
4. **Inventory** — 기존 docs/config/scripts/site/templates 감사
5. **Migration Matrix** — KEEP/MERGE/REWRITE/ARCHIVE/DROP 판정
6. **Content Migration** — 검증된 콘텐츠만 새 구조에 이관
7. **Config Refactor** — Source of Truth 역할 분리
8. **Dashboard Refactor** — Growth/Mission/Skill/Activity 계층 분리
9. **Validation** — 링크, 생성 스크립트, GitHub Pages, Mission Gate 검증
10. **Review** — PR에서 비교 검토
11. **Cutover** — 승인 후 main에 병합
12. **Post-cutover Cleanup** — 불필요한 과거 구조 제거 및 문서 링크 정리

## 현재 진행 상황

### Phase A — Foundation

- [x] archive branch 생성
- [x] rebuild branch 생성
- [x] `config/growth.yaml`
- [x] Growth Model
- [x] Status Model
- [x] Priority Model
- [x] Repository Policy
- [x] Master Growth Map
- [x] Repository Map
- [x] V3 README 정보구조 초안
- [x] AGENTS.md V3 운영원칙 반영
- [x] 기존 구조 고수준 Inventory
- [x] 1차 Migration Matrix
- [x] Dashboard V3 상세 설계
- [ ] 파일 단위 Detailed Audit

### Phase B — Migration 준비

- [ ] `docs/00-governance` 상세 Audit
- [ ] `docs/02-domains` → `02-missions` Migration 설계
- [ ] `docs/03-progress` 보존/확장 설계
- [ ] `docs/04-learning` 재분류 설계
- [ ] `05-architecture` / `06-evaluation` 재배치 설계
- [ ] `07-portfolio` / `08-resources` 이동 설계
- [ ] `09-opportunities` 상태 모델 정렬
- [ ] `10-professional-growth` 분해 설계
- [ ] `11-advanced` 분해 설계

### Phase C — System Refactor

- [ ] Config 역할 분리
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

- Foundation 검증 전 기존 파일을 삭제하지 않는다.
- `config/missions.yaml`과 기존 G1~G8 Mission Gate는 우선 보존 대상으로 본다.
- 공식 Mission 요구사항과 기존 Evidence를 구조 개편 과정에서 잃지 않는다.
- 자동 생성 파일과 수동 편집 파일의 Source of Truth를 반드시 구분한다.
- 새 구조가 기존 기능을 대체할 때만 과거 구조를 제거한다.
- 기존 자료의 단순 삭제보다 `KEEP / MERGE / REWRITE / ARCHIVE / DROP` 판정을 먼저 수행한다.

## 다음 작업

다음 단계는 **파일 단위 Detailed Audit**이다.

우선순위:
1. `docs/00-governance`
2. `docs/03-progress` + `scripts/sync_progress.py`
3. `site/` + `.github/workflows`
4. `docs/04-learning`
5. 나머지 Domain Migration

Detailed Audit이 끝나기 전에는 기존 주요 폴더를 실제로 삭제하거나 이름을 바꾸지 않는다.
