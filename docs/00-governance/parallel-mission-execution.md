# Parallel Mission Execution & Serial Integration

> B1-1부터 B7-2까지 15개 Mission Repository를 여러 ChatGPT 채팅창에서 병렬로 수행하고, 완료 결과는 대표 Repository에 한 번에 하나씩 순차 통합하기 위한 운영 규격이다.

## 0. 목적

이 문서는 다음 실행 모델을 정의한다.

```text
codyssey-basic (Control Tower)
        │
        │ 동일 Baseline을 읽음
        ▼
15 Parallel Mission Workcells
B1-1 / B1-2 / ... / B7-2
        │
        │ 각 Mission Repository만 수정
        ▼
Mission Handoff
        │
        │ B1-1 → B1-2 → ... → B7-2
        ▼
Serial Control-Tower Integration
        │
        ▼
config/missions.yaml → sync → README / Progress / Pages
```

핵심 원칙은 **실행은 병렬화하고, 대표 상태 통합은 직렬화한다**이다.

---

## 1. 실행 모델

### 1.1 Parallel Workcells

각 채팅창은 하나의 Mission만 담당한다.

- Chat 01 → B1-1
- Chat 02 → B1-2
- ...
- Chat 15 → B7-2

각 Workcell은 자신의 Mission Repository 안에서만 구현·테스트·문서·Evidence를 다룬다.

### 1.2 Serial Integration

Mission Workcell이 완료된 뒤 대표 Repository 반영은 반드시 하나씩 수행한다.

```text
B1-1 HANDOFF 검증 → 대표 repo 반영 → merge
B1-2 HANDOFF 검증 → 대표 repo 반영 → merge
...
B7-2 HANDOFF 검증 → 대표 repo 반영 → merge
```

두 Mission의 대표 상태를 동시에 수정하지 않는다.

---

## 2. Control Tower Baseline Freeze

15개 채팅을 시작하기 직전에 대표 Repository `main`의 commit SHA를 하나 고정한다.

```yaml
control_tower:
  repository: MetaStudy999/codyssey-basic
  baseline_sha: <START_SHA>
```

모든 Workcell은 동일한 SHA를 기준으로 다음 문서를 읽는다.

1. `AGENTS.md`
2. `docs/00-governance/multi-agent-mission-engineering.md`
3. `docs/00-governance/source-discovery-fallback-protocol.md`
4. `docs/00-governance/parallel-mission-execution.md`
5. `config/missions.yaml`
6. 자신의 Mission index와 직접 관련된 공식 자료

### Baseline Freeze의 목적

- 채팅마다 서로 다른 규칙을 읽는 Context Drift 방지
- 중간에 대표 repo가 바뀌어도 실행 기준을 재현 가능하게 유지
- Handoff 시 어떤 기준으로 작업했는지 추적

중대한 공식 자료 변경이 발견되면 Workcell이 임의로 Baseline을 바꾸지 않고 `CONTROL_TOWER_DRIFT`로 기록한다.

---

## 3. Read / Write Boundary

병렬 실행 중 대표 Repository는 기본적으로 **READ ONLY**다.

```text
READ:
- MetaStudy999/codyssey-basic
- 현재 Mission 공식 Source

WRITE:
- 현재 Mission Repository

DO NOT WRITE:
- MetaStudy999/codyssey-basic
- 다른 Mission Repository
```

예외는 사용자가 명시적으로 대표 Repository 통합을 지시한 **Serial Integration 단계**뿐이다.

### 금지

- Mission Workcell이 `config/missions.yaml`을 직접 수정
- Mission Workcell이 대표 README/Progress/Site 상태 직접 변경
- 다른 Workcell의 파일 수정
- 같은 Mission 파일을 여러 AI가 동시에 수정

---

## 4. Source Discovery는 모든 Workcell의 첫 작업이다

각 Workcell은 G1 SOURCE에서 파일 이름이나 확장자를 가정하지 않는다.

Mission/Evaluation Source를 찾아 다음 상태로 분류한다.

```text
VALID
PARTIAL
EMPTY
MISSING
UNREADABLE
DUPLICATE
CONFLICT
HISTORICAL
UNVERIFIED
```

그리고 수행 Mode를 선택한다.

```text
FULL SOURCE
MISSION-LED
EVALUATION-LED
PARTIAL SOURCE
SOURCE GAP
SOURCE CONFLICT
```

PDF/Markdown/빈 파일/누락 파일 처리 규칙은 `source-discovery-fallback-protocol.md`를 따른다.

---

## 5. Mission Work Packet

각 Workcell은 구현 전에 자신의 `Mission Work Packet`을 확정한다.

필수 구성:

1. Identity
2. Control Tower Baseline
3. Source Inventory
4. Source Mode / Confidence / Gaps
5. Mission Contract
6. Requirement Traceability
7. Evaluation Mapping
8. Repository Baseline
9. Mission-specific TOC
10. Scope / Non-scope
11. Agent Routing
12. Test Plan
13. Runtime Plan
14. Evidence Plan
15. Dependency / Drift Check
16. G1~G8 Checklist
17. STOP Rule
18. Handoff Contract

템플릿: `templates/mission-work-packet.md`

---

## 6. Parallel Discovery, Dependency-Gated Build

### 기본 허용

15개 Workcell은 다음 작업을 동시에 수행할 수 있다.

```text
Source Discovery
Repository Inventory
Requirement Mapping
Evaluation Mapping
Mission Contract
Mission-specific TOC
Test/Runtime/Evidence Plan
```

### BUILD Dependency

후속 Mission이 선행 Mission의 실제 산출물·설계·환경을 재사용해야 하는 경우 G2 BUILD 직전에 Dependency를 확인한다.

중요:

- Dependency는 **공식 요구사항**과 **운영상 권장 관계**를 구분한다.
- 공식 Source가 명시하지 않은 선행 조건을 공식 요구사항으로 만들지 않는다.
- 선행 결과가 없어도 독립 구현 가능한 Mission은 불필요하게 대기시키지 않는다.

대표적으로 연결 가능성이 높은 계열:

```text
B4-1 → B4-2
B5-1 → B5-2 → B5-3
B5/B6 계열 → B7-1 → B7-2
```

이 관계는 Source와 실제 Repository 상태를 확인한 뒤 `REQUIRED / RECOMMENDED / NONE / UNVERIFIED`로 분류한다.

---

## 7. Agent Routing

각 Workcell은 `Selective Multi-Agent Harness`를 사용한다.

기본 경로:

```text
ChatGPT Orchestrator
      ↓
Primary Builder (기본 Codex)
      ↓
Automated Test Harness
      ↓
Independent Reviewer 1개
      ↓
ChatGPT Fusion
      ↓
Human Runtime (필요한 경우)
```

Claude/Gemini/Grok은 Trigger가 있을 때만 Specialist로 호출한다.

- 긴 문서·설계 충돌 → Claude 후보
- PDF·이미지·멀티모달 대조 → Gemini 후보
- 반례·실패 경로 집중 검토 → Grok 후보
- IDE의 국소 수정·짧은 검토 → Copilot 후보
- Repository 구현·테스트 → Codex 후보

모든 AI를 매 단계 동시에 호출하지 않는다.

---

## 8. Gate 실행

각 Mission은 독립적으로 다음 Gate를 통과한다.

```text
G1 SOURCE
G2 BUILD
G3 TEST
G4 REVIEW
G5 RUNTIME
G6 EVIDENCE
G7 LEARN
G8 MERGE
```

### 상태 원칙

- 실제 실행하지 않은 결과를 `PASS`로 표시하지 않는다.
- AI가 수행할 수 없는 실제 OS/브라우저/클라우드/계정 검증은 `NEEDS-RUNTIME`으로 남긴다.
- `PASS`와 `MASTERED`는 별도 상태다.
- BLOCKER=0, MAJOR=0, 필수 요구·테스트·Evidence가 충족되면 과도한 검토를 종료한다.

---

## 9. Mission Handoff Envelope

Workcell이 종료되면 대화 전체를 대표 채팅으로 복사하지 않는다.

대신 Mission Repository에 표준 Handoff를 남긴다.

권장 파일:

```text
HANDOFF.md
mission-result.yaml
```

필수 정보:

- Mission ID
- Control Tower baseline SHA
- Mission final commit SHA
- PR URL / merge 상태
- Source Mode / Confidence / Gaps
- Requirement 충족 결과
- G1~G8 상태
- Test 결과
- BLOCKER / MAJOR 수
- Runtime 결과
- Evidence 위치
- Learning 상태
- 대표 repo 반영 요청 상태
- 남은 Risk / Backlog

템플릿:

- `templates/mission-handoff.md`
- `templates/mission-result.yaml`

---

## 10. Serial Integration Protocol

대표 repo 반영 채팅에서는 한 번에 하나의 Handoff만 처리한다.

### Step 1 — Handoff 재검증

다음을 읽는다.

```text
Mission HANDOFF.md
mission-result.yaml
Mission PR / final commit
Test result
Runtime result
Evidence
```

Handoff의 주장과 실제 Repository 상태가 다르면 Repository 상태가 우선한다.

### Step 2 — 판정

가능한 판정:

```text
ACCEPT
PARTIAL
NEEDS-RUNTIME
BLOCKED
REJECT
```

### Step 3 — 대표 상태 수정

대표 진행 상태의 유일한 수정 원본은 `config/missions.yaml`이다.

직접 수정 금지:

- README 자동 영역
- `docs/03-progress/progress.md`
- `site/data/missions.json`

### Step 4 — Sync

```bash
python scripts/sync_progress.py
python scripts/sync_progress.py --check
```

### Step 5 — 대표 repo PR

한 Mission 통합당 하나의 논리적 변경으로 PR을 만들고 `main`에 merge한다.

### Step 6 — 다음 Mission

현재 Mission의 대표 통합이 완료된 뒤 다음 Handoff를 처리한다.

---

## 11. Drift & Conflict Protocol

### Control Tower Drift

Workcell이 시작된 뒤 대표 기준이 바뀌면:

```text
기존 Baseline 유지
→ 변경사항 비교
→ 현재 Mission에 영향 여부 판정
→ 영향 없음: 계속
→ 영향 있음: REBASE_CONTEXT 요청
```

### Source Drift

새 공식 Mission/Evaluation 자료가 추가되면:

```text
Source Discovery 재실행
→ Requirement Diff
→ Test/Evidence 영향 분석
→ 필요한 Gate만 재개방
```

전체 Mission을 처음부터 다시 하지 않는다.

### Cross-Workcell Conflict

두 Workcell의 결론이 충돌해도 서로의 repo를 수정하지 않는다.

충돌은 Handoff에 기록하고 Serial Integration 단계에서 Source/Test/Runtime/Evidence 기준으로 해결한다.

---

## 12. Wave Manifest

15개 채팅의 시작·완료·통합 상태를 한 번에 관리하려면 `Parallel Wave Manifest`를 사용한다.

템플릿: `templates/parallel-wave.yaml`

Wave Manifest는 실행 현황을 위한 보조 Ledger다. 과정 공식 진행 상태의 Single Source of Truth는 여전히 `config/missions.yaml`이다.

---

## 13. 새 채팅 시작 규격

각 채팅창 첫 요청은 `templates/mission-chat-start.md`를 기준으로 한다.

반드시 포함할 것:

```text
Mission ID
Mission Repository
Control Tower Repository
Control Tower Baseline SHA
대표 repo READ ONLY
현재 Mission repo만 WRITE
G1 SOURCE부터 시작
Source Discovery 우선
최종 Handoff 작성
```

---

## 14. 실패 방지 규칙

다음 패턴을 금지한다.

1. 15개 채팅이 대표 repo를 동시에 수정
2. 서로 다른 대표 repo commit을 기준으로 실행
3. Source 확인 전에 구현 시작
4. 빈 MD를 정상 요구사항 문서로 간주
5. 후속 Mission이 선행 Mission을 무조건 기다림
6. 반대로 실제 Dependency를 무시하고 독립 구현
7. Chat transcript 자체를 최종 Evidence로 사용
8. Handoff 없이 대표 진행 상태를 갱신
9. 여러 Mission 상태를 한 PR에서 뒤섞어 통합
10. Mission 완료 후 끝없는 AI 재검토

---

## 15. 최종 운영 규칙

```text
15 Mission Chats
     = Parallel Execution Layer

Mission Repositories
     = Work + Test + Runtime + Evidence Layer

HANDOFF / mission-result.yaml
     = Transfer Contract

codyssey-basic
     = Serial Integration + Progress Ledger + Portfolio Control Tower
```

이 구조에서는 속도는 병렬로 확보하고, 기준·상태·증빙의 일관성은 직렬 통합으로 보호한다.
