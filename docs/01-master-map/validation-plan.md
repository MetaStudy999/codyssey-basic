# V3 Validation Plan

Codyssey Developer Growth OS V3는 구조 변경 자체가 목적이 아니라 **기존 Mission 수행 기능을 깨뜨리지 않으면서 Growth Layer를 추가하는 것**이 목적이다.

검증은 **Pre-Cutover**와 **Post-Cutover Production**으로 분리한다.

---

## 1. Structural / Generated Data Validation

Cutover 후보 commit에서 다음을 검증한다.

```bash
python -m pip install pyyaml
python scripts/sync_progress.py --check
python scripts/sync_growth.py --check
python scripts/validate_v3.py
```

`validate_v3.py` 검증 범위:

- V3 필수 Config/Docs/Site 파일 존재
- B1-1~B7-2 15개 Mission Summary 존재
- `CORE/EXPLORE/ADVANCED/PRO/EXPERT` 단계 폴더가 생성되지 않았는지 확인
- Growth Stage / Status / Priority 계약 확인
- 생성 JSON의 `generated_from` 확인
- V3 Markdown 상대 링크 확인
- Dashboard Growth DOM/JS/Data 연결 확인
- Mission 수동 Refresh 핸들러와 5분 Cooldown 계약 확인
- `sync_progress.py --check`
- `sync_growth.py --check`

현재 CI에서 **PASS**했다.

---

## 2. Chromium Browser + Live Telemetry Validation

`python scripts/browser_smoke.py --live`는 로컬 정적 서버에서 실제 Chromium으로 `site/`를 렌더링하고, Mission Repository의 raw telemetry까지 실제 네트워크로 조회한다.

검증 항목:

- Growth Stage 카드 5개
- Skill Axis 카드 12개
- Domain 카드 7개
- Mission 카드 15개
- Official G1~G8 Gate Cell 120개
- CORE/EXPLORE/ADVANCED/PRO/EXPERT 텍스트 렌더링
- 초기 수동 갱신 버튼 활성 상태
- 5분 Cooldown 적용 시 버튼 비활성 상태
- Live Mission Telemetry 실제 요청
- 성공한 Telemetry의 Live Gate UI 렌더링
- Browser Console / Page JavaScript Error 0

### 최신 Evidence

Workflow Run `31906314961`: **SUCCESS**

```text
Growth Stage Cards          5
Skill Axis Cards           12
Domain Cards                7
Mission Cards              15
Official Gate Cells       120
Live Telemetry           15/15
5-minute Cooldown UI      PASS
Browser Console Errors       0
```

Artifacts:

- Browser screenshot: `growth-os-v3-browser-smoke`
  - ID `9252442515`
- Static site preview: `growth-os-v3-site-preview`
  - ID `9252442654`

즉, **정적 렌더링뿐 아니라 실제 15개 Mission Repository Telemetry 네트워크 경로까지 검증 완료**다.

---

## 3. Dashboard Wiring Contract

`site/index.html`에는 다음 요소가 존재해야 한다.

- `#growth-os`
- `#growth-stage-grid`
- `#growth-registry-summary`
- `#growth-skill-grid`
- `./js/growth-os.js`

`growth-os.js`는 다음 Generated Data를 읽는다.

- `growth.json`
- `skills.json`
- `activities.json`
- `projects.json`
- `opportunities.json`

Mission Layer는 기존 `app.js` / `missions.json` / `workcells.json` 흐름을 유지한다.

---

## 4. Source of Truth Contract

다음 규칙을 깨뜨리면 Cutover하지 않는다.

```text
Mission 상태        -> config/missions.yaml
Growth 단계         -> config/growth.yaml
Skill               -> config/skills.yaml
Activity            -> config/activities.yaml
Project Lineage     -> config/projects.yaml
Opportunity         -> config/opportunities.yaml
Resource            -> config/resources.yaml
```

다음은 생성/표현 결과물이다.

```text
README Mission 자동 영역
docs/01-master-map/current-state.md
site/data/*.json
site/ Dashboard
```

생성 결과물에서 상태를 직접 관리하지 않는다.

---

## 5. Legacy Compatibility Gate

V3 Target이 완전히 대체하기 전에는 다음 Legacy 자산을 삭제하지 않는다.

- `docs/03-progress/progress.md`
- 기존 `docs/04-learning` 대규모 Vocabulary
- 기존 `docs/09-opportunities`
- 기존 `docs/10-professional-growth`
- 기존 `docs/11-advanced`

Vocabulary는 `docs/03-learning/vocabulary-index.md`에서 Bridge하여 V3 진입점을 제공한다.

Old Path 제거 전 조건:

1. 새 Target에 핵심 내용 Migration 완료
2. Legacy Reference Scan 완료
3. Markdown/HTML/JS 링크 검사 PASS
4. 자동 생성 검사 PASS
5. Chromium Browser/Live Telemetry PASS
6. PR Review 완료

`docs/03-progress`와 `docs/04-learning`은 회귀 위험이 높아 마지막까지 Compatibility Layer로 보존한다.

---

# 6. Pre-Cutover Gate

Production GitHub Pages는 `main`에서 실제 배포되므로, Production URL 검증을 merge의 선행 조건으로 만들면 순환 의존이 생긴다. 따라서 Cutover 전에 검증 가능한 범위를 다음과 같이 정의한다.

```text
V3 STRUCTURE PASS
      +
MISSION STATIC REGRESSION PASS
      +
GROWTH SYNC PASS
      +
V3 LINK PASS
      +
BROWSER SMOKE PASS
      +
LIVE TELEMETRY 15/15 PASS
      +
STATIC SITE PREVIEW ARTIFACT PASS
      +
LEGACY REFERENCE SCAN PASS
      +
PR REVIEW PASS
      =
PRE-CUTOVER READY
```

현재 이미 PASS한 항목:

- Structure
- Mission Static Regression
- Growth Sync
- V3 Relative Link
- Browser Smoke
- Live Telemetry 15/15
- Static Site Preview Artifact

남은 핵심은 Legacy Reference Scan과 PR Review다.

---

# 7. Post-Cutover Production Gate

사용자 승인 후 `main`으로 Cutover한 직후 다음을 검증한다.

```text
PAGES WORKFLOW PASS
      +
PRODUCTION URL LOAD PASS
      +
GROWTH DASHBOARD PASS
      +
MISSION G1~G8 PASS
      +
LIVE TELEMETRY PASS
      =
PRODUCTION VALIDATED
```

Production Gate 실패 시:

1. 원인과 영향범위 확인
2. 즉시 수정 가능하면 Hotfix
3. 핵심 Control Tower 기능이 깨졌다면 Revert/Rollback
4. `archive/pre-growth-os-v3`와 Git history를 복구 근거로 사용

---

# 8. Cutover 승인 원칙

자동 검증이 모두 PASS하더라도 `main` 병합은 자동으로 수행하지 않는다.

> **Pre-Cutover Ready → Draft PR Review → 사용자 승인 → main Cutover → Production Validation**

순서를 유지한다.
