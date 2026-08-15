# AGENTS.md

## 역할

이 저장소는 Codyssey AI/SW Basic 전체 과정을 관리하는 **Codyssey Developer Growth OS Control Tower**다. 개별 Mission의 실제 구현은 각 독립 Repository에서 수행한다.

Control Tower는 다음을 통합 관리한다.

- 공식 Mission / Evaluation / Evidence
- Mission Progress와 G1~G8 Gate
- Learning / Vocabulary / Explain
- Growth Stage와 12개 Competency Axis
- Community / Project / Opportunity
- Research / Open Source / Career / Venture / Portfolio
- Dashboard / Automation / Templates

## V3 핵심 원칙

1. **Master Map First** — 미래 전체 구조는 먼저 설계한다.
2. **Progressive Repository** — 실제 폴더는 현재 필요한 만큼만 만든다.
3. **Logical First, Physical Later** — Map/Config에서 먼저 정의하고 실제 결과물이 생길 때 물리 구조를 확장한다.
4. **Folder = Domain, Stage = Metadata** — `core/advanced/pro/` 같은 단계 폴더를 만들지 않는다.
5. **Evidence-based Growth** — 학습/성장 판정은 가능한 한 Evidence로 뒷받침한다.
6. **Mission PASS before Overengineering** — 비필수 고도화가 공식 Mission 완료를 지연시키지 않는다.

세부 정책은 `docs/00-governance/repository-policy.md`를 따른다.

## 서로 섞지 않는 4개 축

- **Growth Stage**: `CORE → EXPLORE → ADVANCED → PRO → EXPERT`
- **Activity Status**: `PLANNED → READY → ACTIVE → DONE` + `BLOCKED / ARCHIVED`
- **Priority**: `REQUIRED / RECOMMENDED / OPTIONAL`
- **Domain**: Mission / Learning / Community / Project / Opportunity / Research / Open Source / Career / Venture / Portfolio / Impact

Growth Stage와 Activity Status, Priority, Domain을 서로 대체하거나 혼합하지 않는다.

## Source of Truth 우선순위

공식 Mission 요구사항을 판단할 때 Source 우선순위는 다음과 같다.

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

외부 책·논문·사이트·뉴스는 공식 요구사항을 대체하지 않는다. 이해·검증·확장에만 사용한다.

## Source Discovery 규칙

- G1 SOURCE 시작 전에 Mission과 Evaluation 후보를 확장자와 파일명에 관계없이 먼저 탐색한다.
- PDF, Markdown, 기타 텍스트 Source를 실제 내용 기준으로 확인한다.
- 파일이 존재해도 0바이트, 공백뿐, 제목/placeholder뿐이면 `EMPTY`로 본다.
- 텍스트 추출이 안 되는 PDF는 이미지 기반일 수 있으므로 곧바로 `EMPTY`로 판정하지 않는다.
- Source는 `VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED` 중 하나로 분류한다.
- 자료 상태에 따라 `FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT` 모드로 진행한다.
- 상위 Source가 없거나 비어 있다고 하위 자료나 AI 일반지식으로 공식 요구사항을 만들어내지 않는다.
- Source Gap과 불명확한 요구는 실제 근거가 생기기 전까지 공식 요구사항이나 PASS 근거로 사용하지 않는다.
- 세부 규칙은 `docs/00-governance/source-discovery-fallback-protocol.md`를 따른다.

## V3 Source of Truth 분리

### Mission — `config/missions.yaml`

- 공식 Mission 메타데이터
- 수행 상태
- 학습 상태
- 현재 Gate
- G1~G8 상태

### Growth — `config/growth.yaml`

- Growth Stage
- 공통 Activity Status
- Priority
- 12개 Competency Axis 정의

### Skill — `config/skills.yaml`

- Skill Level 정의
- 12개 Competency Axis
- Evidence 기반 현재 Skill Assessment

### Activity — `config/activities.yaml`

- Study / Review / Debugging / Hackathon 등 실제 활동
- Growth Stage / Status / Priority

### Project — `config/projects.yaml`

- Project Lineage
- Mission Origin
- Growth Stage / Status / Priority

### Opportunity — `config/opportunities.yaml`

- 외부 기회의 Availability
- 사용자 적합도(Fit)
- 권장 Growth Stage / Priority

### Resource — `config/resources.yaml`

- 공식문서 / 서적 / 논문 / 강의 / 사이트 등 학습·연구 참고자료 Registry

한 Config에 모든 개념을 몰아넣지 않는다.

## 생성 결과물 규칙

### Mission Pipeline

`config/missions.yaml`과 `config/waves/*.yaml`을 수정 원본으로 사용한다.

`python scripts/sync_progress.py`

생성 결과물:

- `README.md`의 `AUTO:MISSION_PROGRESS` 영역
- `docs/01-master-map/mission-progress.md` — Canonical Mission Progress View
- `site/data/missions.json`
- `site/data/workcells.json`

### Growth OS Pipeline

`config/growth.yaml`, `skills.yaml`, `activities.yaml`, `projects.yaml`, `opportunities.yaml`을 수정 원본으로 사용한다.

`python scripts/sync_growth.py`

생성 결과물:

- `docs/01-master-map/current-state.md`
- `site/data/growth.json`
- `site/data/skills.json`
- `site/data/activities.json`
- `site/data/projects.json`
- `site/data/opportunities.json`

생성 결과물에서 상태를 직접 수정하지 않는다.

`PASS`와 `MASTERED`는 같은 의미가 아니며 Mission 완료와 Learning 숙련도도 분리한다.

## Growth Stage 정의

### CORE
기본을 이해하고 직접 완성한다.

### EXPLORE
넓게 경험하고 다음 심화 방향을 찾는다.

### ADVANCED
선택한 영역을 깊게 파고들고 개선한다.

### PRO
실제 환경에서 전문적으로 결과를 만들고 책임진다.

### EXPERT
고난도 문제에서 Judgment와 Trade-off를 수행한다.

EXPERT 이후는 Tech Lead/Principal, Architect/SRE, AI/Researcher, Open Source, Educator/Mentor, Founder 등 전문 경로로 분기하며 최종 목표는 IMPACT다.

## Learning Macro / Micro 규칙

V3의 `ADVANCED`는 **Macro Growth Stage**다.

기존 Vocabulary의 `90-advanced`는 Mission 내부의 **Micro Optional Deepening**이다. 둘을 같은 진행 상태로 해석하지 않는다.

- Macro: `CORE → EXPLORE → ADVANCED → PRO → EXPERT`
- Micro: `Level 0~5 → Review → Optional Deepening`

세부 모델은 `docs/03-learning/macro-micro-model.md`를 따른다.

## 병렬 Mission Workcell / 직렬 통합 규칙

- B1-1~B7-2의 개별 Mission Repository는 서로 분리된 채팅 Workcell에서 병렬 실행할 수 있다.
- 병렬 Workcell은 시작 시 동일한 Control Tower `main` commit SHA를 Baseline으로 기록한다.
- Mission Workcell에서 이 대표 Repository는 `READ ONLY`다.
- Mission Workcell은 자신의 Mission Repository만 수정하며 다른 Mission Repository를 수정하지 않는다.
- 모든 Workcell은 G1 SOURCE에서 Source Discovery를 먼저 수행하고 구현 전 `Mission Work Packet`을 확정한다.
- 활성 Wave는 `config/waves/`의 현재 ACTIVE/READY Manifest에서 확인한다.
- 각 Workcell은 `docs/00-governance/work-packets/<mission-id-lower>.md`의 Starter Packet을 읽고 실제 Source와 재대조한다.
- Starter Packet은 사전 구조일 뿐 최종 Requirement가 아니다.
- 후속 Mission이 선행 Mission의 실제 결과를 재사용해야 할 때만 G2 BUILD 직전에 Dependency를 확인한다. 공식 Dependency와 운영상 권장 관계를 구분한다.
- Mission이 끝나면 `HANDOFF.md`와 `mission-result.yaml`을 남기고 대표 Repository 상태를 직접 갱신하지 않는다.
- 대표 Repository 반영은 `B1-1 → B1-2 → ... → B7-2` 순서로 한 번에 하나의 Handoff만 검증·통합한다.
- 대표 상태 통합 시 `config/missions.yaml`만 Mission 상태 수정 원본으로 사용한다.
- 세부 규칙은 `docs/00-governance/parallel-mission-execution.md`를 따른다.

## 대표 Repository 통합 순서

`B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2 → B4-1 → B4-2 → B5-1 → B5-2 → B5-3 → B6-1 → B6-2 → B7-1 → B7-2`

개별 Mission 실행은 병렬화할 수 있지만 대표 Repository 상태 반영과 통합은 위 순서대로 한다.

## Completion Gate

- G1 SOURCE
- G2 BUILD
- G3 TEST
- G4 REVIEW
- G5 RUNTIME
- G6 EVIDENCE
- G7 LEARN
- G8 MERGE

## Mission 상태 정의

- TODO: 미구현/미실행
- IMPLEMENTED: 코드·설정 존재, 실제 실행 미검증
- TESTED: 자동화 또는 신뢰 가능한 테스트 완료
- PASS: 구현 + 실제 검증 + 필수 증빙 완료
- NEEDS-RUNTIME: 사용자/운영환경 실행 확인 필요
- BLOCKED: 외부 환경 조건으로 진행 차단

## Mission Lifecycle

한 Mission을 한 번 제출하고 버리지 않는다.

`COMPLETE → UNDERSTAND → BREAK → DEBUG → COLLABORATE → EXPLORE → ADVANCE → PRO`

- COMPLETE: 공식 요구를 빠르게 완성
- UNDERSTAND: 용어·개념·흐름 설명
- BREAK: 의도적으로 오류 발생
- DEBUG: 증거 기반 원인 분석/복구
- COLLABORATE: Issue/PR/Review
- EXPLORE: 인접 기술/활동 탐색
- ADVANCE: 선택 영역 심화
- PRO: 실제 사용자/Production/OSS/연구/기업·고객 환경 적용

## Repository 생성/확장 규칙

새 세부 폴더는 기본적으로 활동이 `ACTIVE`가 되고 실제 산출물이 생길 때 생성한다.

다음 조건 중 2개 이상이면 독립 폴더 생성을 고려한다.

- 파일이 3개 이상 생길 가능성이 높다.
- 여러 주에 걸쳐 지속된다.
- 독립적인 결과물이 있다.
- 별도 Evidence가 필요하다.
- 별도 팀/담당자가 있다.
- 코드·데이터·실험 결과가 발생한다.
- 다른 활동에서 재사용된다.

한 Markdown 문서로 충분하면 새 폴더를 만들지 않는다.

## 작업 철학 / Stop Rule

먼저 빠르게 완성하고, 최소 검증으로 정확성을 확보하고, 완성된 결과물로 깊게 학습한다.

현재 Mission의 공식 요구, 필수 테스트, Runtime, Evidence, 평가 대응이 충족되면 CORE 완료를 우선한다.

비필수 아이디어는 다음처럼 처리한다.

- 현재 완료를 직접 앞당김 → DO
- 가치 있지만 지금 필요 없음 → DEFER
- 복리 효과가 낮음 → DROP

전문화 아이디어를 `professional-growth/` 또는 `advanced/` 같은 단계 폴더로 보내지 않는다. 관련 Domain의 Map/Backlog/Registry에 기록하고 `growth_stage` Metadata로 관리한다.

## V3 Validation Gate

Cutover 전에 최소 다음을 검증한다.

1. `python scripts/sync_progress.py --check`
2. `python scripts/sync_growth.py --check`
3. V3 필수 Config/Docs/JSON 존재성
4. V3 Markdown 내부 링크
5. Dashboard 필수 DOM/JS/Data 연결
6. 기존 Mission G1~G8 기능 회귀
7. 수동 Mission Refresh + 5분 Cooldown 회귀
8. GitHub Pages 실제 렌더링

## V3 Rebuild Safety

- `archive/pre-growth-os-v3`에 이전 기준본을 보존한다.
- `rebuild/growth-os-v3`에서 새 구조를 병렬 구축한다.
- 기존 파일은 `KEEP / MERGE / REWRITE / ARCHIVE / DROP` Audit 후에만 이동/삭제한다.
- 새 Target이 검증되기 전 Old Path를 삭제하지 않는다.
- 실제 Cutover는 Draft PR Review와 Validation 완료 후 수행한다.

참조:

- `docs/01-master-map/migration-plan.md`
- `docs/01-master-map/migration-matrix.md`
- `docs/01-master-map/dashboard-v3.md`
