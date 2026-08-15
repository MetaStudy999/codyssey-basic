# Detailed Audit — Progress / Automation / Dashboard

V3 전환에서 기존 Mission Progress 자동화는 폐기 대상이 아니라 **핵심 기반 자산**이다. 현재 구조를 유지하면서 Growth/Skill/Activity 데이터 레이어를 추가하는 방향이 가장 안전하다.

## 1. Current Data Flow

현재 구조:

```text
config/missions.yaml
config/waves/*.yaml
        ↓
scripts/sync_progress.py
        ├─ README.md Mission Table
        ├─ docs/03-progress/progress.md
        ├─ site/data/missions.json
        └─ site/data/workcells.json
```

### Audit Decision

- `config/missions.yaml`: **KEEP**
- `config/waves/`: **KEEP + REVIEW**
- `scripts/sync_progress.py`: **KEEP + REFACTOR**
- `docs/03-progress/`: **KEEP + EXPAND**
- `site/data/missions.json`: **GENERATED / KEEP**
- `site/data/workcells.json`: **GENERATED / KEEP**

Mission Progress는 V3에서도 독립 레이어로 유지한다.

## 2. sync_progress.py

현재 스크립트는 다음 책임을 가진다.

- Mission Config 검증
- Domain/Mission Flatten
- README 자동 Mission Table 생성
- G1~G8 Progress Markdown 생성
- Mission JSON 생성
- Active Wave → Workcell JSON 생성

### Decision

**REFACTOR, not replace.**

기존 Mission Generator를 유지하고 V3 데이터는 별도 함수/모듈로 추가한다.

권장 목표:

```text
scripts/
├── sync_progress.py          # Orchestrator
└── lib/
    ├── mission_progress.py
    ├── growth_progress.py
    ├── activity_progress.py
    └── validators.py
```

초기에는 파일 분리를 강제하지 않는다. 기능이 커져 유지보수 필요가 확인될 때 분리한다.

## 3. GitHub Actions

### sync-progress.yml

현재 `main`에서 아래 변경 시 실행한다.

- `config/missions.yaml`
- `config/waves/**`
- `scripts/sync_progress.py`

생성 파일 변경 시 Bot Commit을 수행한다.

### V3 Decision

**KEEP + EXPAND.**

V3에서 실제 Registry가 추가되면 Trigger Path를 순차 확장한다.

예:

```text
config/growth.yaml
config/skills.yaml        # 실제 도입 시
config/activities.yaml    # 실제 도입 시
config/projects.yaml      # 실제 도입 시
config/opportunities.yaml
```

미래 Config가 아직 사용되지 않는데 Trigger만 먼저 추가하지 않는다.

### pages.yml

현재 Mission/Wave/Script/Site 변경 시 Data Generate 후 `site/`를 GitHub Pages에 배포한다.

**KEEP + EXPAND.**

V3 Dashboard가 구현되면 Growth Data가 배포 Artifact에 포함되는지 검증한다.

## 4. Current Dashboard JavaScript

현재 `site/js/app.js`에는 이미 다음 중요한 자산이 있다.

- Domain/Mission Rendering
- Mission Control Grid
- G1~G8 Gate Matrix
- Workcell 상태
- 선후관계 기반 추천 상태
- Mobile Menu
- Live Telemetry Cache
- **수동 조회**
- **5분 Poll Cooldown (`5 * 60 * 1000`)**

따라서 과거 UI를 전부 폐기하고 다시 작성할 필요는 없다.

### Decision

`app.js`: **REWRITE IN PLACE / COMPONENTIZE LATER**

기존 Mission Control과 수동 Refresh 로직을 보존하고 상단에 Growth Layer를 추가한다.

## 5. Refresh Policy

V3에서도 다음 정책을 공식 유지한다.

```text
자동 30초 Polling 사용 안 함
        ↓
사용자 수동 Refresh
        ↓
5분 Cooldown
        ↓
Cooldown 중 버튼 Disabled
```

이 정책은 GitHub API 호출량과 Dashboard 변동성을 줄이고 사용자가 갱신 시점을 통제하게 한다.

## 6. Hard-coded Dependencies

현재 `site/js/app.js`에는 Mission Dependencies가 JavaScript 상수로 정의되어 있다.

### Risk

Dependency Source of Truth가 UI 코드에 직접 존재하면:

- 문서/Config와 불일치 가능
- Mission Map 변경 시 JS 수정 필요
- Dashboard가 자체 판단 원본이 됨

### V3 Decision

**MOVE TO DATA SOURCE.**

권장 방향:

```text
config/missions.yaml 또는 별도 dependency metadata
        ↓
sync/build
        ↓
site/data/missions.json
        ↓
UI
```

단, 현재 동작을 먼저 보존하고 Migration 후 옮긴다.

## 7. V3 Target Data Flow

```text
config/missions.yaml ─────────┐
config/growth.yaml ───────────┤
config/opportunities.yaml ────┤
future skills.yaml ───────────┤
future activities.yaml ───────┼─> Generator/Validator
future projects.yaml ─────────┤          ↓
config/waves/*.yaml ──────────┘      site/data/*.json
                                      ↓
                                 Dashboard V3
```

각 Source는 자신의 역할을 유지하며 Presentation JSON에서 결합한다.

## 8. Dashboard V3 Migration Order

### Step 1 — Preserve
- 기존 Mission cards
- G1~G8 2열 Gate UI
- Manual Refresh + 5분 Cooldown
- Mobile Navigation

### Step 2 — Add Growth
- CORE / EXPLORE / ADVANCED / PRO / EXPERT Stage Rail
- Current / Next / Planned / Blocked Summary

### Step 3 — Add Skill/Activity
- 12 Competency Axes
- Activity Registry

### Step 4 — Add Project/External
- Project Lineage
- Opportunities
- Research / OSS / Career / Venture Evidence

## 9. Regression Gates

V3 Dashboard 병합 전 다음을 검증한다.

- [ ] README Auto Marker 유지
- [ ] `sync_progress.py --check` 통과
- [ ] `docs/03-progress/progress.md` 생성 정상
- [ ] `site/data/missions.json` 생성 정상
- [ ] `site/data/workcells.json` 생성 정상
- [ ] GitHub Pages Build 정상
- [ ] B1~B7 Domain 표시 정상
- [ ] G1~G8 표시 정상
- [ ] Mobile Menu 정상
- [ ] 수동 Refresh 정상
- [ ] 5분 Cooldown 정상
- [ ] Growth Layer 추가 후 Mission Layer 회귀 없음

## Audit Result

기존 Progress/Automation/Dashboard는 **보존 후 확장**한다. 전면 재구축의 대상은 정보 구조와 데이터 모델이며, 이미 검증된 Mission Sync/Refresh/Gate UI까지 불필요하게 다시 만들지 않는다.
