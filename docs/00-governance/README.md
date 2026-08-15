# 00. Governance

Codyssey Developer Growth OS 전체의 기준, Source of Truth, Workcell, 상태, 성장 단계, Repository 확장 규칙을 관리한다.

## 1. 핵심 원칙

1. Mission PDF와 공식 Evaluation을 최우선 Source로 사용한다.
2. 외부 참고자료는 공식 요구사항을 변경하지 않는다.
3. 필수/선택은 폴더 구조가 아니라 Metadata로 관리한다.
4. 실제 검증되지 않은 결과를 PASS로 표시하지 않는다.
5. Mission/Evaluation Source는 파일 존재 여부가 아니라 실제 내용 유효성을 확인한다.
6. 개별 Mission 실행은 병렬화할 수 있지만 대표 Repository의 상태 통합은 직렬로 수행한다.
7. Growth Stage, Status, Priority, Domain을 서로 섞지 않는다.
8. 미래 전체 Map은 먼저 설계하되 실제 폴더는 필요한 시점에만 만든다.
9. 비필수 고도화가 CORE Mission PASS를 지연시키지 않는다.
10. 구조 변경은 `KEEP / MERGE / REWRITE / ARCHIVE / DROP` Audit 후 수행한다.

---

## 2. V3 Growth Governance

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

---

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

---

## 4. Source Discovery & Fallback

- [Source Discovery & Fallback Protocol](./source-discovery-fallback-protocol.md)

주요 상태:

`VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED`

수행 모드:

`FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT`

자료가 부족해도 Repository Inventory, 환경 확인, 기존 코드·테스트 분석 등 안전한 작업은 계속할 수 있다. 근거가 없는 요구사항 생성은 금지한다.

- [Source Registry](./source-registry.md)

---

## 5. Multi-Agent Mission Engineering

- [Multi-Agent Mission Engineering Playbook](./multi-agent-mission-engineering.md)

핵심 관심사:

- Prompt Engineering
- Context Engineering
- Harness Engineering
- Loop Engineering
- Fusion Engineering
- Primary Builder / Independent Reviewer / Human Runtime Verification 역할 분리

특정 AI 제품명보다 **역할, 검증 책임, Evidence**를 우선한다.

---

## 6. Parallel Mission Execution

- [Parallel Mission Execution & Serial Integration](./parallel-mission-execution.md)

기본 원칙:

- B1-1~B7-2 Mission Workcell은 병렬 실행 가능
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

Starter Packet은 사전 구조다. 각 Workcell의 G1 SOURCE에서 실제 Mission/Evaluation Source와 재대조한 뒤 확정한다.

### Mission Workcell Prompts

- [Workcell Prompt Index](./workcell-prompts/README.md)
- `workcell-prompts/b1-1.md ~ b7-2.md`

### 병렬 실행 Templates

- `templates/mission-chat-start.md`
- `templates/mission-work-packet.md`
- `templates/mission-handoff.md`
- `templates/mission-result.yaml`
- `templates/parallel-wave.yaml`

---

## 7. Source of Truth 분리

### Mission

`config/missions.yaml`

관리 항목:
- Mission 메타데이터
- 공식 필수/선택
- 수행 상태
- 학습 상태
- G1~G8

### Growth

`config/growth.yaml`

관리 항목:
- Growth Stage
- Activity Status
- Priority
- 12개 Competency Axis

### External / Resource

- `config/opportunities.yaml`
- `config/resources.yaml`

향후 실제 필요가 생길 때만 `skills.yaml`, `activities.yaml`, `projects.yaml`을 추가한다.

---

## 8. Mission Completion Gate

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

Mission PASS와 Learning MASTERED는 별도 상태다.

---

## 9. Mission Lifecycle

한 Mission을 제출 후 폐기하지 않는다.

```text
COMPLETE
  ↓
UNDERSTAND
  ↓
BREAK
  ↓
DEBUG
  ↓
COLLABORATE
  ↓
EXPLORE
  ↓
ADVANCE
  ↓
PRO
```

이 Lifecycle은 공식 Mission 완료와 이후 학습/성장 확장을 연결한다.

---

## 10. 변경 분류 규칙

V3에서는 다음과 같이 판단한다.

```text
무엇에 관한가?        → Domain
얼마나 성장했는가?     → Growth Stage
지금 어디까지 왔는가?  → Status
반드시 해야 하는가?    → Priority
```

예:

```text
AI Hackathon
Domain: Opportunity
growth_stage: EXPLORE
status: ACTIVE
priority: OPTIONAL
```

전문가 역량이나 고도화 기술을 `professional-growth/`, `advanced/` 같은 단계 폴더로 고정하지 않는다. 실제 내용의 Domain에 배치하고 Stage Metadata로 관리한다.

---

## 11. V3 Rebuild Safety

- 이전 기준본: `archive/pre-growth-os-v3`
- 재구축: `rebuild/growth-os-v3`
- 기존 자료는 Audit 후 이동/삭제
- Mission/Gate/Evidence 자산은 우선 보존
- 자동화 검증 전 기존 경로를 파괴하지 않음
- Draft PR을 통해 Cutover 검토

참조:

- [`../01-master-map/migration-plan.md`](../01-master-map/migration-plan.md)
- [`../01-master-map/migration-matrix.md`](../01-master-map/migration-matrix.md)
- [`../01-master-map/audit-00-governance.md`](../01-master-map/audit-00-governance.md)
