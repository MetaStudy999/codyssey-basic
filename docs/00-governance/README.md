# 00. Governance

Codyssey Developer Growth OS 전체의 기준, Source of Truth, Workcell, 상태, 성장 단계, Repository 확장 규칙을 관리한다.

## 1. 핵심 원칙

1. **Beginner First** — 진도 0인 학습자도 첫 화면에서 B1-1의 다음 행동을 찾을 수 있어야 한다.
2. **One Next Action** — 현재 단계에서 가장 먼저 할 행동 하나를 우선 제시한다.
3. **History ≠ Current Cycle** — 과거 PASS와 현재 새 도전 진행률을 섞지 않는다.
4. Mission PDF와 공식 Evaluation을 최우선 Source로 사용한다.
5. 외부 참고자료는 공식 요구사항을 변경하지 않는다.
6. 필수/선택은 폴더 구조가 아니라 Metadata로 관리한다.
7. 실제 검증되지 않은 결과를 PASS로 표시하지 않는다.
8. Mission/Evaluation Source는 파일 존재 여부가 아니라 실제 내용 유효성을 확인한다.
9. 개별 Mission 실행은 병렬화할 수 있지만 대표 Repository 상태 통합은 직렬로 수행한다.
10. Growth Stage, Status, Priority, Domain을 서로 섞지 않는다.
11. 미래 전체 Map은 먼저 설계하되 실제 폴더는 필요한 시점에만 만든다.
12. 비필수 고도화가 CORE Mission PASS를 지연시키지 않는다.
13. 단순 역사 보존은 active docs보다 Git history/보존 branch를 우선한다.

## 2. Beginner Mission Clear Cycle

현재 새 도전의 Source of Truth:

`config/cycles/current.yaml`

현재 기준:

- Current Mission: `B1-1`
- Beginner Step: `1/8 · 미션 이해하기`
- New Clear: `0/15`

화면 상태:

`시작 전 → 시작 가능 → 진행 중 → 미션 완료`

예외: `문제 해결 필요`

내부 값:

`NOT_STARTED → READY → ACTIVE → CLEAR`, 예외 `BLOCKED`

이전 수행 결과는 `config/history/*.yaml`에 보존한다. 기존 Official Integration의 PASS를 새 Cycle의 CLEAR로 자동 환산하지 않는다.

## 3. Beginner Gate 표현

내부 G1~G8 계약은 변경하지 않는다. 학습자 화면에서만 쉬운 표현을 우선 사용한다.

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

각 단계는 `무엇을 하는가 / 왜 하는가 / 다음 행동 / 완료 기준`을 제공한다.

## 4. Growth Governance

### Growth Stage

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

- [Growth Model](./growth-model.md)

### Activity Status

`PLANNED → READY → ACTIVE → DONE`

예외: `BLOCKED`, `ARCHIVED`

- [Status Model](./status-model.md)

### Priority

`REQUIRED / RECOMMENDED / OPTIONAL`

- [Priority Model](./priority-model.md)

### Repository Policy

- Master Map First
- Progressive Repository
- Logical First, Physical Later
- Folder = Domain, Stage = Metadata
- Just-in-Time Folder Creation

- [Repository Policy](./repository-policy.md)

## 5. 공식 Source 우선순위

```text
Mission PDF
  ↓
Mission Markdown
  ↓
Official Evaluation
  ↓
공식 운영자료
  ↓
요구사항/증빙 매핑
  ↓
README
  ↓
학습문서
  ↓
코드
  ↓
테스트
  ↓
보고서
  ↓
Evidence
```

상위 Source가 없거나 비어 있거나 읽을 수 없을 때 하위 Source나 AI 일반지식으로 공식 요구사항을 임의 복원하지 않는다. 확인 가능한 범위만 사용하고 Source Gap을 기록한다.

## 6. Source Discovery & Fallback

- [Source Discovery & Fallback Protocol](./source-discovery-fallback-protocol.md)
- [Source Registry](./source-registry.md)

주요 상태:

`VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED`

수행 모드:

`FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT`

## 7. Evidence & Traceability

- [Evidence & Traceability Model](./evidence-traceability.md)

```text
Official Source
→ Requirement
→ Implementation
→ Test
→ Review
→ Runtime
→ Evidence
→ PASS
```

Current Cycle `CLEAR`, Official `PASS`, Learning `MASTERED`, Growth Stage 승격은 서로 다른 판정이다.

## 8. Multi-Agent Mission Engineering

- [Multi-Agent Mission Engineering Playbook](./multi-agent-mission-engineering.md)

핵심 관심사:

- Prompt Engineering
- Context Engineering
- Harness Engineering
- Loop Engineering
- Fusion Engineering
- Primary Builder / Independent Reviewer / Human Runtime 역할 분리

특정 AI 제품명보다 **역할, 검증 책임, Evidence**를 우선한다.

## 9. Parallel Mission Execution

- [Parallel Mission Execution & Serial Integration](./parallel-mission-execution.md)

기본 원칙:

- B1-1~B7-2 Workcell은 병렬 실행 가능
- 공통 Control Tower Baseline SHA 사용
- Mission Workcell에서는 대표 Repository READ ONLY
- G1 SOURCE와 Mission Work Packet 우선
- Dependency-Gated Build
- `HANDOFF.md` + `mission-result.yaml` 표준 전달
- 대표 Official 상태는 B1-1 → B7-2 순으로 직렬 통합
- Official Mission 상태 수정 원본은 `config/missions.yaml`
- Beginner Current Mission 이동은 `config/cycles/current.yaml`에서 별도로 관리

### Mission Work Packets

- [Starter Packet Index](./work-packets/README.md)
- `work-packets/b1-1.md ~ b7-2.md`

### Mission Workcell Prompts

- [Workcell Prompt Index](./workcell-prompts/README.md)
- `workcell-prompts/b1-1.md ~ b7-2.md`

### Workcell Status

- [Workcell Status Index](./workcell-status/README.md)

## 10. Source of Truth 분리

### Current Cycle

`config/cycles/current.yaml`

- 현재 Mission
- Beginner 상태
- 다음 행동
- 쉬운 Gate 설명

### History

`config/history/*.yaml`

- 이전 수행 결과
- Previous PASS / Learning 기록

### Official Mission

`config/missions.yaml`

- Mission 메타데이터
- 공식 필수/선택
- 수행 상태
- 학습 상태
- G1~G8

### Growth / Registries

- `config/growth.yaml`
- `config/skills.yaml`
- `config/activities.yaml`
- `config/projects.yaml`
- `config/opportunities.yaml`
- `config/resources.yaml`
- `config/waves/*.yaml`

한 Config에 모든 개념을 몰아넣지 않는다.

## 11. Mission Completion Gate

```text
G1 SOURCE
  ↓
G2 BUILD
  ↓
G3 TEST
  ↓
G4 REVIEW
  ↓
G5 RUNTIME
  ↓
G6 EVIDENCE
  ↓
G7 LEARN
  ↓
G8 MERGE
```

상세 정의: [Mission Gates](./mission-gates.md)

## 12. Mission Lifecycle

```text
COMPLETE
→ UNDERSTAND
→ BREAK
→ DEBUG
→ COLLABORATE
→ EXPLORE
→ ADVANCE
→ PRO
```

한 Mission을 제출 후 폐기하지 않고 학습·문제해결·협업·외부성과로 확장한다.

## 13. Dashboard Policy

첫 화면은 다음만 우선한다.

1. 현재 Mission
2. 현재 1~8 단계
3. 다음 행동 하나
4. 새 Clear 진행률
5. 쉬운 설명
6. 막혔어요
7. B1~B7 전체 여행

Growth, Official Mission Control, Dependency, Governance는 상세 레이어에 둔다.

Mission Live 상태는 자동 polling하지 않는다. 사용자가 수동 갱신하며 갱신 후 5분 Cooldown을 유지한다.

## 14. Stable Validation

Repository 변경은 최소 다음 계약을 지켜야 한다.

```bash
python scripts/sync_progress.py --check
python scripts/sync_growth.py --check
python scripts/validate_v3.py
```

PR Validation은 추가로 확인한다.

- Current Mission B1-1 / New Clear 0/15 / Step 1/8
- Beginner 8 Step / 7 Journey / 15 Mission Card
- Previous B2-1 PASS와 New Cycle 0/8 분리
- 쉬운 설명 / 막혔어요 동작
- 모바일 Beginner UI 가독성
- 기존 Growth / Official G1~G8 회귀
- Chromium Browser Smoke
- Live Mission Telemetry
- 수동 Mission Refresh + 5분 Cooldown

실제 환경에서만 확인 가능한 결과는 자동 검증이 성공해도 별도 Runtime Evidence가 필요하다.

## 15. 역사 보존

V3 재구축 과정의 이전 기준본은 `archive/pre-growth-os-v3`와 Git history, PR #73~#77에서 추적한다.

현재 운영 문서는 과거 Migration 과정을 반복 설명하지 않고 **현재 Canonical 규칙**만 유지한다.
