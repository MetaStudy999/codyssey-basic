# AGENTS.md

## 역할

이 저장소는 Codyssey AI/SW Basic 전체 과정을 관리하는 **Codyssey Developer Growth OS Control Tower**다. 개별 Mission의 실제 구현은 각 독립 Repository에서 수행한다.

Control Tower는 다음을 통합 관리한다.

- 공식 Mission / Evaluation / Evidence
- Mission Progress와 G1~G8 Gate
- Learning / Vocabulary / Explain
- Growth Stage
- Community / Project / Opportunity
- Research / Open Source / Career / Venture / Portfolio
- Dashboard / Automation / Templates

## V3 핵심 원칙

1. **Master Map First** — 미래 전체 구조는 먼저 설계한다.
2. **Progressive Repository** — 실제 폴더는 현재 필요한 만큼만 만든다.
3. **Logical First, Physical Later** — Map/Config에서 먼저 정의하고 ACTIVE가 될 때 물리 폴더를 만든다.
4. **Folder = Domain, Stage = Metadata** — `core/advanced/pro/` 같은 단계 폴더를 만들지 않는다.
5. **Evidence-based Growth** — 학습/성장 판정은 가능한 한 Evidence로 뒷받침한다.
6. **Mission PASS before Overengineering** — 비필수 고도화가 공식 Mission 완료를 지연시키지 않는다.

세부 정책은 `docs/00-governance/repository-policy.md`를 따른다.

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
- Source가 부족해도 Repository Inventory, 환경 확인, 기존 코드·테스트 분석 등 안전한 작업은 계속할 수 있다.
- Source Gap과 불명확한 요구는 명시적으로 기록하고, 실제 근거가 생기기 전까지 공식 요구사항이나 PASS 근거로 사용하지 않는다.
- 세부 규칙은 `docs/00-governance/source-discovery-fallback-protocol.md`를 따른다.

## Source of Truth 분리

V3에서는 모든 상태를 한 파일에 몰아넣지 않는다.

### Mission

`config/missions.yaml`

- 공식 Mission 메타데이터
- 수행 상태
- 학습 상태
- 현재 Gate
- G1~G8 상태

### Growth

`config/growth.yaml`

- `CORE → EXPLORE → ADVANCED → PRO → EXPERT`
- 공통 Progress Status
- Priority
- 12개 Competency Axis

### Opportunity / Resource

- `config/opportunities.yaml`
- `config/resources.yaml`

향후 실제 필요가 생길 때만 다음 Registry를 추가한다.

- `skills.yaml`
- `activities.yaml`
- `projects.yaml`

각 데이터는 역할별 Source of Truth를 유지한다.

## 생성 결과물 규칙

현재 Mission 진행 자동 생성 흐름은 유지한다.

- `README.md`의 `AUTO:MISSION_PROGRESS` 영역
- `docs/03-progress/progress.md`
- `site/data/missions.json`
- `site/data/workcells.json`

이 파일들은 직접 상태를 수정하지 않는다. Mission 상태 변경은 `config/missions.yaml`을 수정한 뒤 `python scripts/sync_progress.py`로 동기화한다.

수행 상태와 학습 상태는 분리한다. `PASS`가 곧 `MASTERED`를 의미하지 않는다.

## Growth Stage

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

성장 단계는 폴더 이름으로 사용하지 않고 Metadata로 관리한다.

## Growth Activity Status

Mission 실행 상태와 별개로 일반 활동은 다음 상태를 사용한다.

`PLANNED → READY → ACTIVE → DONE`

예외:
- `BLOCKED`
- `ARCHIVED`

## Priority

- `REQUIRED`
- `RECOMMENDED`
- `OPTIONAL`

Growth Stage와 Priority를 섞지 않는다.

예: `EXPLORE + OPTIONAL + ACTIVE + Hackathon`

## 병렬 Mission Workcell / 직렬 통합 규칙

- B1-1~B7-2의 개별 Mission Repository는 서로 분리된 채팅 Workcell에서 병렬 실행할 수 있다.
- 병렬 Workcell은 시작 시 동일한 Control Tower `main` commit SHA를 Baseline으로 기록한다.
- Mission Workcell에서 이 대표 Repository는 `READ ONLY`다.
- Mission Workcell은 자신의 Mission Repository만 수정하며 다른 Mission Repository를 수정하지 않는다.
- 모든 Workcell은 G1 SOURCE에서 Source Discovery를 먼저 수행하고, 구현 전 `Mission Work Packet`을 확정한다.
- 활성 Wave는 `config/waves/`의 현재 ACTIVE/READY Manifest에서 확인한다.
- 각 Workcell은 `docs/00-governance/work-packets/<mission-id-lower>.md`의 Mission별 Starter Packet을 읽고, G1 결과로 현재 Mission Repository의 `MISSION-WORK-PACKET.md`를 확정한다.
- Starter Packet은 사전 구조일 뿐 최종 Requirement가 아니며, 실제 Mission/Evaluation Source와 반드시 재대조한다.
- Source Discovery·Repository Inventory·Requirement Mapping·TOC·Mission Contract는 병렬 수행할 수 있다.
- 후속 Mission이 선행 Mission의 실제 결과를 재사용해야 할 때만 G2 BUILD 직전에 Dependency를 확인한다. 공식 Dependency와 운영상 권장 관계를 구분한다.
- Mission이 끝나면 `HANDOFF.md`와 `mission-result.yaml`을 남기고 대표 Repository 상태를 직접 갱신하지 않는다.
- 대표 Repository 반영은 `B1-1 → B1-2 → ... → B7-2` 순서로 한 번에 하나의 Handoff만 검증·통합한다.
- 대표 상태 통합 시 `config/missions.yaml`만 Mission 상태 수정 원본으로 사용하고 생성 결과물을 직접 편집하지 않는다.
- 세부 규칙은 `docs/00-governance/parallel-mission-execution.md`를 따른다.

## 대표 Repository 통합 순서

`B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2 → B4-1 → B4-2 → B5-1 → B5-2 → B5-3 → B6-1 → B6-2 → B7-1 → B7-2`

개별 Mission 실행은 병렬화할 수 있지만, 대표 Repository 상태 반영과 통합은 위 순서대로 한 실행 단위를 완료·병합한 뒤 다음 단위로 이동한다.

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

새 폴더는 기본적으로 활동이 `ACTIVE`가 될 때 생성한다.

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

전문화 아이디어를 특정 `professional-growth/` 또는 `advanced/` 폴더로 보내는 대신, 관련 Domain의 Backlog/Map에 기록하고 `growth_stage: ADVANCED/PRO/EXPERT`로 관리한다.

## V3 Rebuild Safety

V3 구조 재구축 중에는 다음을 지킨다.

- `archive/pre-growth-os-v3`에 이전 기준본을 보존한다.
- `rebuild/growth-os-v3`에서 새 구조를 병렬 구축한다.
- 기존 파일은 `KEEP / MERGE / REWRITE / ARCHIVE / DROP` Audit 후에만 이동/삭제한다.
- Foundation과 자동화 검증 전 기존 Mission/Gate/Evidence 자산을 삭제하지 않는다.
- 실제 Cutover는 Draft PR Review 후 수행한다.

참조:
- `docs/01-master-map/migration-plan.md`
- `docs/01-master-map/migration-matrix.md`
