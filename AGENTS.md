# AGENTS.md

## 역할

이 저장소는 Codyssey AI/SW Basic B1-1~B7-2 전체를 관리하는 **Codyssey Developer Growth OS Control Tower**다. 개별 Mission 구현은 각 독립 Mission Repository에서 수행한다.

Control Tower가 관리하는 것:

- 공식 Mission / Evaluation / Evidence
- Official Mission Progress와 G1~G8
- 새 Mission Clear Cycle
- Learning / Vocabulary / Explain
- Growth Stage / Skill / Activity / Project / Opportunity
- Research / Open Source / Career / Venture / Portfolio / Impact
- Dashboard / Automation / Templates

## V3.1 핵심 원칙

1. **Beginner First** — 진도 0인 사용자가 Dashboard만 보고 B1-1의 첫 행동을 찾을 수 있어야 한다.
2. **One Next Action** — 현재 단계에서 가장 먼저 할 행동 하나를 우선 제시한다.
3. **History ≠ Current Cycle** — 과거 PASS와 현재 새 도전 진행률을 섞지 않는다.
4. **Master Map First** — 전체 방향은 먼저 설계한다.
5. **Progressive Repository** — 실제 폴더는 필요한 만큼만 만든다.
6. **Folder = Domain, Stage = Metadata** — 성장 단계별 폴더를 만들지 않는다.
7. **Evidence-based Growth** — Mission/학습/성장 판정은 실제 Evidence로 뒷받침한다.
8. **Mission PASS before Overengineering** — 비필수 고도화가 공식 Mission 완료를 지연시키지 않는다.

## 서로 섞지 않는 상태 체계

### Current Mission Clear Cycle

`NOT_STARTED → READY → ACTIVE → CLEAR`

예외: `BLOCKED`

화면 표시:

- NOT_STARTED → 시작 전
- READY → 시작 가능
- ACTIVE → 진행 중
- CLEAR → 미션 완료
- BLOCKED → 문제 해결 필요

Source of Truth: `config/cycles/current.yaml`

### Official Mission Status

`TODO → IMPLEMENTED → TESTED → PASS`

예외: `NEEDS-RUNTIME`, `BLOCKED`

Source of Truth: `config/missions.yaml`

### Learning

`NOT-STUDIED → PRACTICED → EXPLAINABLE → MASTERED`

### Growth

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

Current Cycle, Official PASS, Learning MASTERED, Growth Stage는 서로 다른 판정이다.

## 현재 새 Cycle 기준

현재 Cycle:

- ID: `growth-os-v3-20260816`
- Current Mission: `B1-1`
- New Clear: `0/15`
- Beginner Step: `1/8 · 미션 이해하기`

이전 B2-1 PASS는 삭제하지 않고 `config/history/pre-v3-mission-history.yaml`에 보존한다. 새 Cycle의 B2-1은 시작 전으로 표시한다.

## Beginner Gate 표시

내부 G1~G8 이름은 변경하지 않는다.

| Internal | Beginner UI |
|---|---|
| G1 SOURCE | 1. 미션 이해하기 |
| G2 BUILD | 2. 직접 만들기 |
| G3 TEST | 3. 테스트하기 |
| G4 REVIEW | 4. 검토하기 |
| G5 RUNTIME | 5. 실제로 실행하기 |
| G6 EVIDENCE | 6. 증빙 남기기 |
| G7 LEARN | 7. 이해하고 설명하기 |
| G8 MERGE | 8. 완료 반영하기 |

각 단계는 `무엇 / 왜 / 다음 행동 / 완료 기준`을 제공한다.

## Source of Truth 우선순위

공식 Mission 요구사항 판단 순서:

1. Mission PDF
2. Mission Markdown
3. 공식 Evaluation / 평가문항
4. 직접 관련된 공식 운영자료
5. 요구사항-증빙 매핑
6. README
7. 학습 문서
8. 코드
9. 테스트
10. 보고서
11. Evidence

외부 책·논문·사이트·뉴스는 공식 요구사항을 대체하지 않는다.

## Source Discovery 규칙

- G1 SOURCE 전에 Mission/Evaluation 후보를 실제 내용 기준으로 탐색한다.
- 파일이 있어도 0바이트, 공백, placeholder뿐이면 `EMPTY`다.
- 텍스트 추출이 안 되는 PDF는 이미지 기반일 수 있으므로 즉시 EMPTY로 판정하지 않는다.
- Source 상태: `VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED`
- 수행 모드: `FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT`
- Source Gap을 AI 일반지식으로 임의 보완하여 공식 Requirement/PASS 근거로 만들지 않는다.

세부 규칙: `docs/00-governance/source-discovery-fallback-protocol.md`

## Source of Truth 분리

### Current Cycle

`config/cycles/current.yaml`

- 현재 Mission
- Beginner 상태
- 쉬운 Gate 설명
- 다음 행동
- 도움말

### History

`config/history/*.yaml`

- 이전 Cycle/수행 결과
- 현재 Cycle과 섞지 않는 보존 기록

### Official Mission

`config/missions.yaml`

- Mission 메타데이터
- Official Status
- Learning Status
- Current Gate
- G1~G8

### Growth / Skill / Activity / Project / Opportunity

- `config/growth.yaml`
- `config/skills.yaml`
- `config/activities.yaml`
- `config/projects.yaml`
- `config/opportunities.yaml`
- `config/resources.yaml`

## 생성 결과물

### Mission + Cycle Pipeline

수정 원본:

- `config/missions.yaml`
- `config/cycles/current.yaml`
- `config/history/*.yaml`
- `config/waves/*.yaml`

실행:

```bash
python scripts/sync_progress.py
```

생성 결과물:

- `README.md`의 `AUTO:MISSION_PROGRESS` 영역
- `docs/01-master-map/mission-progress.md`
- `docs/01-master-map/mission-clear-cycle.md`
- `site/data/missions.json`
- `site/data/workcells.json`
- `site/data/cycle.json`

생성 결과물은 직접 수정하지 않는다.

### Growth Pipeline

실행:

```bash
python scripts/sync_growth.py
```

생성 결과물:

- `docs/01-master-map/current-state.md`
- `site/data/growth.json`
- `site/data/skills.json`
- `site/data/activities.json`
- `site/data/projects.json`
- `site/data/opportunities.json`

## 병렬 Mission Workcell / 직렬 통합

- Mission Repository는 분리된 Workcell에서 병렬 실행할 수 있다.
- 시작 시 동일 Control Tower `main` SHA를 Baseline으로 기록한다.
- Mission Workcell에서는 대표 Repository를 READ ONLY로 취급한다.
- Workcell은 자신의 Mission Repository만 수정한다.
- 모든 Workcell은 G1 SOURCE에서 Source Discovery를 먼저 수행한다.
- Starter Packet은 `docs/00-governance/work-packets/`에서 읽고 실제 Source와 재대조한다.
- Mission 완료 후 `HANDOFF.md`와 `mission-result.yaml`을 남긴다.
- 대표 Repository Official 상태 통합은 B1-1 → B7-2 순서로 한 번에 하나씩 검증한다.
- Official 상태 수정 원본은 `config/missions.yaml`이다.
- Beginner Current Mission 이동은 `config/cycles/current.yaml`에서 별도로 관리한다.

세부 규칙: `docs/00-governance/parallel-mission-execution.md`

## 대표 순서

`B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2 → B4-1 → B4-2 → B5-1 → B5-2 → B5-3 → B6-1 → B6-2 → B7-1 → B7-2`

## Mission Lifecycle

`COMPLETE → UNDERSTAND → BREAK → DEBUG → COLLABORATE → EXPLORE → ADVANCE → PRO`

현재 Mission의 공식 요구, 필수 테스트, Runtime, Evidence, 평가 대응이 충족되면 CORE 완료를 우선한다.

- 현재 완료를 직접 앞당김 → DO
- 가치 있지만 지금 필요 없음 → DEFER
- 복리 효과가 낮음 → DROP

## Dashboard 원칙

첫 화면은 초보자용이다.

반드시 먼저 보여야 하는 것:

1. 현재 Mission
2. 현재 1~8 단계
3. 다음 행동 하나
4. 새 Clear 진행률
5. 쉬운 설명
6. 막혔어요
7. 전체 B1~B7 여행 지도

Growth, Official Mission Control, Dependency, Governance는 아래의 상세 정보 영역에 둔다.

`V3 REBUILD ACTIVE` 같은 개발 내부 상태 문구를 일반 학습자 첫 화면에 노출하지 않는다.

## Refresh 정책

- 자동 30초 polling 금지
- 사용자가 Mission Live 상태를 수동 갱신
- 갱신 후 5분 Cooldown
- Current Cycle과 Live Telemetry는 별도 데이터 흐름

## Stable Validation Gate

Repository 변경 후 최소 검증:

```bash
python scripts/sync_progress.py --check
python scripts/sync_growth.py --check
python scripts/validate_v3.py
```

PR Validation 추가 확인:

1. Current Mission = B1-1
2. New Clear = 0/15
3. Beginner Step = 1/8
4. Beginner Step Cards = 8
5. Journey Cards = 7
6. Mission Cards = 15
7. Previous B2-1 PASS는 History로 표시
8. B2-1 New Cycle은 0/8
9. 쉬운 설명 / 막혔어요 버튼
10. Mobile Beginner UI overflow
11. 기존 Growth/Mission G1~G8 회귀
12. 수동 Refresh + 5분 Cooldown
13. Chromium Browser Smoke
14. Live Mission Telemetry

실제 OS/Cloud/Account/User 환경에서만 확인 가능한 결과는 `NEEDS-RUNTIME` 또는 별도 Evidence로 남긴다.

## Repository History

V3 이전 기준본과 재구축 과정은 다음에서 추적한다.

- `archive/pre-growth-os-v3`
- Git history
- PR #73~#77

새 작업은 현재 Canonical V3/V3.1 구조를 기준으로 설계한다.
