# V3 Validation Plan

Codyssey Developer Growth OS V3는 구조 변경 자체가 목적이 아니라 **기존 Mission 수행 기능을 깨뜨리지 않으면서 Growth Layer를 추가하는 것**이 목적이다.

## 1. 자동 검증

Cutover 후보 commit에서 다음을 실행한다.

```bash
python -m pip install pyyaml
python scripts/sync_progress.py --check
python scripts/sync_growth.py --check
python scripts/validate_v3.py
```

`validate_v3.py`는 다음을 확인한다.

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

## 2. Chromium Browser Smoke

`python scripts/browser_smoke.py`는 로컬 정적 서버를 띄운 뒤 실제 Chromium으로 `site/`를 렌더링한다.

검증 항목:

- Growth Stage 카드 5개
- Skill Axis 카드 12개
- Domain 카드 7개
- Mission 카드 15개
- Official G1~G8 Gate Cell 120개
- CORE/EXPLORE/ADVANCED/PRO/EXPERT 텍스트 렌더링
- 초기 수동 갱신 버튼 활성 상태
- 5분 Cooldown localStorage 적용 시 버튼 비활성 상태
- Browser Console / Page JavaScript Error 0

Smoke Test는 Live Mission API를 호출하지 않는다. Cooldown은 localStorage 값을 주입하여 네트워크 독립적으로 검증한다.

### 현재 Evidence

Workflow Run `31906025614`: **PASS**

Screenshot Artifact:

- `growth-os-v3-browser-smoke`
- Artifact ID `9252363546`

## 3. Dashboard 정적 검증

`site/index.html`에서 다음 요소가 존재해야 한다.

- `#growth-os`
- `#growth-stage-grid`
- `#growth-registry-summary`
- `#growth-skill-grid`
- `./js/growth-os.js`

`growth-os.js`는 다음 JSON을 읽어야 한다.

- `growth.json`
- `skills.json`
- `activities.json`
- `projects.json`
- `opportunities.json`

## 4. Mission Layer 브라우저 회귀

현재 Chromium Smoke에서 다음 정적 회귀는 검증한다.

- B1~B7 Domain 카드 로드
- 15개 Mission 카드 로드
- 각 Mission의 G1~G8 Official 상태 렌더링
- Growth Layer와 Mission Layer가 동시에 JavaScript 오류 없이 로드
- 5분 Cooldown UI

추가 운영 검증이 필요한 항목:

- Mission 상태 수동 갱신 시 실제 Mission Repository Telemetry 응답
- 실제 네트워크 실패/부분 성공 시 UI 동작
- GitHub Pages 운영 URL에서 동일한 렌더링
- 모바일 실기기 UX

## 5. Source of Truth 검증

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

`site/data/*.json`, `README` 자동 영역, `current-state.md`는 생성 결과물이다.

## 6. Legacy Compatibility 검증

V3 Target이 완전히 대체하기 전에는 다음 Legacy 자산을 삭제하지 않는다.

- `docs/03-progress/progress.md`
- 기존 `docs/04-learning` 대규모 Vocabulary
- 기존 `docs/09-opportunities`
- 기존 `docs/10-professional-growth`
- 기존 `docs/11-advanced`

Vocabulary는 현재 `docs/03-learning/vocabulary-index.md`에서 Bridge하여 V3 진입점을 제공한다.

Old Path 제거는 다음 조건을 모두 만족한 뒤 수행한다.

1. 새 Target에 핵심 내용 Migration 완료
2. Markdown/HTML/JS 링크 검사 PASS
3. 자동 생성 검사 PASS
4. Chromium Browser Smoke PASS
5. GitHub Pages 운영 검증 PASS
6. PR Review 완료

## 7. Cutover Gate

```text
V3 STRUCTURE PASS
      +
MISSION STATIC REGRESSION PASS
      +
GROWTH SYNC PASS
      +
LINK PASS
      +
BROWSER SMOKE PASS
      +
LIVE TELEMETRY PASS
      +
PAGES PASS
      +
PR REVIEW PASS
      =
MAIN CUTOVER READY
```

하나라도 충족되지 않으면 Draft PR을 유지한다.
