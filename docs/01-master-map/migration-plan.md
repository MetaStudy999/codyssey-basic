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

## Foundation 완료 기준

아래가 먼저 완성되어야 대규모 이동/삭제를 시작한다.

- [x] archive branch 생성
- [x] rebuild branch 생성
- [x] `config/growth.yaml`
- [x] Growth Model
- [x] Status Model
- [x] Priority Model
- [x] Repository Policy
- [x] Master Growth Map
- [x] Repository Map
- [ ] 기존 구조 Inventory
- [ ] Migration Matrix
- [ ] 새 README 정보 구조
- [ ] Dashboard V3 설계

## 안전 규칙

- Foundation 검증 전 기존 파일을 삭제하지 않는다.
- `config/missions.yaml`과 기존 G1~G8 Mission Gate는 우선 보존 대상으로 본다.
- 공식 Mission 요구사항과 기존 Evidence를 구조 개편 과정에서 잃지 않는다.
- 자동 생성 파일과 수동 편집 파일의 Source of Truth를 반드시 구분한다.
- 새 구조가 기존 기능을 대체할 때만 과거 구조를 제거한다.

## 다음 작업

다음 단계는 **Existing Repository Inventory**다. 현재 `docs/00~11`, `config`, `scripts`, `site`, `templates`, root 문서를 전수 분류하여 Migration Matrix를 작성한다.
