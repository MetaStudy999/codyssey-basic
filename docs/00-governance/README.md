# 00. Governance

Codyssey Developer Growth OS 전체의 기준, Source of Truth, Workcell, 상태, 성장 단계, Repository 확장 규칙을 관리한다.

## 1. 핵심 원칙

1. Mission PDF와 공식 Evaluation을 최우선 Source로 사용한다.
2. 외부 참고자료는 공식 요구사항을 변경하지 않는다.
3. 필수/선택은 폴더 구조가 아니라 Metadata로 관리한다.
4. 실제 검증되지 않은 결과를 PASS로 표시하지 않는다.
5. Mission/Evaluation Source는 파일 존재 여부가 아니라 실제 내용 유효성을 확인한다.
6. 개별 Mission 실행은 병렬화할 수 있지만 대표 Repository 상태 통합은 직렬로 수행한다.
7. Growth Stage, Status, Priority, Domain을 서로 섞지 않는다.
8. 미래 전체 Map은 먼저 설계하되 실제 폴더는 필요한 시점에만 만든다.
9. 비필수 고도화가 CORE Mission PASS를 지연시키지 않는다.
10. 단순 역사 보존은 active docs보다 Git history/보존 branch를 우선한다.

## 2. Growth Governance

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

## 3. 공식 Source 우선순위

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

## 4. Source Discovery & Fallback

- [Source Discovery & Fallback Protocol](./source-discovery-fallback-protocol.md)
- [Source Registry](./source-registry.md)

주요 상태:

`VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED`

수행 모드:

`FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT`

## 5. Evidence & Traceability

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

`PASS`, Learning `MASTERED`, Growth Stage 승격은 서로 다른 판정이다.

## 6. Multi-Agent Mission Engineering

- [Multi-Agent Mission Engineering Playbook](./multi-agent-mission-engineering.md)

핵심 관심사:

- Prompt Engineering
- Context Engineering
- Harness Engineering
- Loop Engineering
- Fusion Engineering
- Primary Builder / Independent Reviewer / Human Runtime 역할 분리

특정 AI 제품명보다 **역할, 검증 책임, Evidence**를 우선한다.

## 7. Parallel Mission Execution

- [Parallel Mission Execution & Serial Integration](./parallel-mission-execution.md)

기본 원칙:

- B1-1~B7-2 Workcell은 병렬 실행 가능
- 공통 Control Tower Baseline SHA 사용
- Mission Workcell에서는 대표 Repository READ ONLY
- G1 SOURCE와 Mission Work Packet 우선
- Dependency-Gated Build
- `HANDOFF.md` + `mission-result.yaml` 표준 전달
- 대표 상태는 B1-1 → B7-2 순으로 직렬 통합
- Mission 상태 수정 원본은 `config/missions.yaml`

### Mission Work Packets

- [Starter Packet Index](./work-packets/README.md)
- `work-packets/b1-1.md ~ b7-2.md`

### Mission Workcell Prompts

- [Workcell Prompt Index](./workcell-prompts/README.md)
- `workcell-prompts/b1-1.md ~ b7-2.md`

### Workcell Status

- [Workcell Status Index](./workcell-status/README.md)

### Templates

- `templates/mission-chat-start.md`
- `templates/mission-work-packet.md`
- `templates/mission-handoff.md`
- `templates/mission-result.yaml`
- `templates/parallel-wave.yaml`

## 8. Source of Truth 분리

### Mission

`config/missions.yaml`

- Mission 메타데이터
- 공식 필수/선택
- 수행 상태
- 학습 상태
- G1~G8

### Growth

`config/growth.yaml`

- Growth Stage
- Activity Status
- Priority
- 12개 Competency Axis 정의

### Registries

- `config/skills.yaml`
- `config/activities.yaml`
- `config/projects.yaml`
- `config/opportunities.yaml`
- `config/resources.yaml`
- `config/waves/*.yaml`

한 Config에 모든 개념을 몰아넣지 않는다.

## 9. Mission Completion Gate

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

## 10. Mission Lifecycle

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

## 11. 변경 분류 규칙

```text
무엇에 관한가?        → Domain
얼마나 성장했는가?     → Growth Stage
지금 어디까지 왔는가?  → Status
반드시 해야 하는가?    → Priority
```

전문가 역량이나 고도화 기술을 `professional-growth/`, `advanced/` 같은 단계 폴더로 고정하지 않는다. 실제 내용의 Domain에 배치하고 Stage Metadata로 관리한다.

세부 Routing: [Growth Routing Guide](../01-master-map/growth-routing.md)

## 12. Stable Validation

Repository 변경은 최소 다음 계약을 지켜야 한다.

```bash
python scripts/sync_progress.py --check
python scripts/sync_growth.py --check
python scripts/validate_v3.py
```

PR Validation은 추가로 다음을 확인한다.

- Canonical docs 구조
- B1-1~B7-2 Mission Summary
- Markdown 내부 링크
- Dashboard DOM/JS/Data 연결
- 삭제된 Legacy Path 재도입 여부
- Chromium Browser Smoke
- Live Mission Telemetry
- 수동 Mission Refresh + 5분 Cooldown

실제 환경에서만 확인 가능한 결과는 자동 검증이 성공해도 별도 Runtime Evidence가 필요하다.

## 13. 역사 보존

V3 재구축 과정의 이전 기준본은 `archive/pre-growth-os-v3`와 Git history, PR #73~#77에서 추적한다.

현재 운영 문서는 과거 Migration 과정을 반복 설명하지 않고 **현재 Canonical 규칙**만 유지한다.
