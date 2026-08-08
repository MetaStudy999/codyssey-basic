# Mission Work Packet

> 이 파일은 하나의 Mission Workcell이 구현 전에 확정하는 실행 계약이다. 대표 Repository는 READ ONLY이며, 실제 수정은 현재 Mission Repository에서만 수행한다.

## 1. Identity

- Mission ID: `<B?-?>`
- Mission Title: `<TITLE>`
- Mission Repository: `<OWNER/REPO>`
- Workcell: `<CHAT/SESSION LABEL>`
- Started At: `<DATE/TIME>`

## 2. Control Tower Baseline

- Control Tower Repository: `MetaStudy999/codyssey-basic`
- Baseline SHA: `<CONTROL_TOWER_BASELINE_SHA>`
- Baseline Rule: 현재 Workcell 동안 임의 변경하지 않는다.

### Required Control Tower Context

- `AGENTS.md`
- `docs/00-governance/multi-agent-mission-engineering.md`
- `docs/00-governance/source-discovery-fallback-protocol.md`
- `docs/00-governance/parallel-mission-execution.md`
- `config/missions.yaml`

## 3. Read / Write Boundary

### READ

- Control Tower baseline
- 현재 Mission Repository
- 현재 Mission의 공식 Source

### WRITE

- 현재 Mission Repository만

### DO NOT WRITE

- `MetaStudy999/codyssey-basic`
- 다른 Mission Repository

## 4. Source Inventory

| Source Candidate | Type | State | Location | Notes |
|---|---|---|---|---|
| Mission | PDF/MD/etc | `<STATE>` | `<PATH/URL>` | |
| Evaluation | PDF/MD/etc | `<STATE>` | `<PATH/URL>` | |
| Official Operation Doc | | `<STATE>` | | |

Allowed Source State:

`VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED`

- Source Mode: `<FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT>`
- Source Confidence: `<HIGH / MEDIUM / LOW>`
- Source Gaps:
  - `<GAP>`

## 5. Mission Contract

### Goal

`<공식 Source가 확인한 Mission 목표>`

### Required Deliverables

- [ ] `<DELIVERABLE>`

### Required Functions / Behaviors

- [ ] `<REQUIREMENT>`

### Constraints

- `<CONSTRAINT>`

### Explicit Non-scope

- `<NOT REQUIRED OR DEFERRED ITEM>`

## 6. Requirement Traceability

| ID | Requirement | Source | Location | Confidence | Implementation | Test | Evidence | Status |
|---|---|---|---|---|---|---|---|---|
| REQ-001 | | | | | | | | TODO |

확인되지 않은 내용은 공식 Requirement로 생성하지 않는다.

## 7. Evaluation Mapping

| Evaluation ID | Criterion | Related Requirement | Validation | Evidence | Status |
|---|---|---|---|---|---|
| EVA-001 | | | | | TODO |

Evaluation Source가 없거나 비어 있으면 Gap으로 남긴다.

## 8. Repository Baseline

- Default Branch: `<BRANCH>`
- Baseline Commit: `<SHA>`
- Work Branch: `<mission/<id> or approved branch>`
- Runtime / Language: `<ENV>`
- Dependency Manager: `<TOOL>`
- Existing Tests: `<YES/NO/PARTIAL>`

### Repository Inventory

```text
<tree or concise structure>
```

### Existing Implementation

- 이미 충족: `<ITEM>`
- 부분 충족: `<ITEM>`
- 누락: `<ITEM>`
- 잘못 구현: `<ITEM>`

## 9. Mission-specific TOC

공통 목차를 그대로 복사하는 것이 아니라 공식 Source가 실제로 요구하는 기술·기능 구조를 반영한다.

```text
<MISSION-SPECIFIC TOC>
```

## 10. Engineering Plan

### Prompt Engineering

- ROLE: `<ROLE>`
- GOAL: `<CURRENT GATE GOAL>`
- SCOPE: `<SCOPE>`
- OUTPUT CONTRACT: `<OUTPUT>`
- STOP CONDITION: `<STOP>`

### Context Engineering

현재 Gate에 필요한 Source/코드/Test만 제공한다.

### Harness Engineering

- Git boundary: `<BRANCH>`
- Test commands: `<COMMANDS>`
- Secret boundary: `<RULE>`
- Evidence boundary: 실제/예상 출력 구분

### Loop Engineering

- Self review: 1회
- Independent review: 기본 1회
- Re-validation: 발견된 BLOCKER/MAJOR 수정 범위만

### Fusion Engineering

충돌 판정 기준:

`Source → Test → Runtime → Evidence`

## 11. Agent Routing

- Orchestrator / Integrator: `ChatGPT`
- Primary Builder: `<Codex or assigned builder>`
- Independent Reviewer: `<Copilot or assigned reviewer>`
- Claude: `<OFF / CONDITIONAL / ACTIVE>`
- Gemini: `<OFF / CONDITIONAL / ACTIVE>`
- Grok: `<OFF / CONDITIONAL / ACTIVE>`
- Runtime Authority: `Human`

## 12. Dependency / Drift Check

- Upstream Dependency: `<NONE / REQUIRED / RECOMMENDED / UNVERIFIED>`
- Related Mission: `<ID or NONE>`
- Control Tower Drift: `<NONE / FOUND>`
- Source Drift: `<NONE / FOUND>`
- Action: `<CONTINUE / WAIT / REBASE_CONTEXT / RECHECK_SOURCE>`

Dependency는 공식 Requirement와 운영상 권장 관계를 구분한다.

## 13. Test Plan

| Test | Requirement | Command / Method | Expected | Actual | Status |
|---|---|---|---|---|---|
| | | | | | TODO |

## 14. Runtime Plan

| Runtime Check | AI 가능 | Human 필요 | Evidence | Status |
|---|---|---|---|---|
| | | | | TODO |

AI가 실제 수행할 수 없는 항목은 `NEEDS-RUNTIME`으로 표시한다.

## 15. Evidence Plan

| Evidence | Requirement / Evaluation | Capture Method | Location | Status |
|---|---|---|---|---|
| | | | | TODO |

## 16. Completion Gates

| Gate | Exit Condition | Status |
|---|---|---|
| G1 SOURCE | Source 상태·Mode·Gap·Requirement provenance 확정 | TODO |
| G2 BUILD | 필수 구현 존재 | TODO |
| G3 TEST | 필요한 자동/신뢰 가능한 Test 통과 | TODO |
| G4 REVIEW | BLOCKER=0, MAJOR=0 | TODO |
| G5 RUNTIME | 실제 환경 검증 완료 또는 정확한 NEEDS-RUNTIME | TODO |
| G6 EVIDENCE | 필수 Evidence 완성 | TODO |
| G7 LEARN | 학습 결과 기록 | TODO |
| G8 MERGE | Mission Repository PR/merge 완료 | TODO |

## 17. STOP Rule

다음을 만족하면 미션 완료를 위한 추가 구현·검토를 중단한다.

- 공식 필수 Requirement 충족
- Evaluation 충족 또는 Evaluation Gap 명시
- BLOCKER=0
- MAJOR=0
- 필요한 Test 통과
- Runtime 요구 충족
- Evidence 충족
- G8 MERGE 완료

고도화 아이디어는 Backlog로 이동한다.

## 18. Handoff Contract

Mission 종료 시 다음을 작성한다.

- `HANDOFF.md`
- `mission-result.yaml`

대표 Repository를 직접 갱신하지 않는다. Handoff만 전달하고 Serial Integration 단계에서 대표 상태를 갱신한다.

## 19. Live Telemetry Contract

각 Mission Repository는 다음 파일을 유지한다.

```text
.live/mission-status.json
```

필수 원칙:

- G1~G8 중 하나의 상태가 바뀔 때마다 같은 논리적 변경 안에서 telemetry를 갱신한다.
- `mission`, `repository`, `updated_at`, `workcell_status`, `current_gate`, `gates`를 기록한다.
- 실제 검증 전에는 `PASS`를 기록하지 않는다.
- Live telemetry는 대표 Repository의 공식 상태를 변경하지 않는다.
- 공식 상태의 SSOT는 계속 `config/missions.yaml`이다.
- Dashboard는 자동 polling하지 않는다. 사용자가 수동 갱신할 때만 Mission Repository를 조회한다.
- 수동 polling 후 300초 동안 재조회가 잠긴다.
