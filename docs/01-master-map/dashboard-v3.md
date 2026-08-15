# Dashboard V3.1 — Beginner First Design

Dashboard V3.1의 첫 번째 사용자는 **진도가 아직 0이고, 어디서부터 시작해야 할지 모르는 입문자**다.

Dashboard의 최우선 성공 기준은 다음 세 질문에 5초 안에 답하는 것이다.

1. 나는 지금 어디에 있는가?
2. 지금 무엇을 해야 하는가?
3. 전체 중 얼마나 진행했는가?

전문 관리 정보는 보존하지만 첫 화면의 우선순위를 차지하지 않는다.

## 1. Beginner First Principle

첫 화면에서는 다음을 크게 보여준다.

```text
현재 Mission
현재 단계
다음 행동 1개
전체 새 도전 진행률
쉬운 설명
막혔을 때 도움
```

처음 시작하는 학습자에게 Growth Stage, Workcell, Telemetry, Governance, Dependency를 먼저 읽도록 요구하지 않는다.

## 2. Current Mission Clear Cycle

새 도전 상태의 Source of Truth:

`config/cycles/current.yaml`

현재 기준:

```text
Cycle: 새 미션 클리어 도전
Current Mission: B1-1
Current Step: 1 / 8
Mission Clear: 0 / 15
```

기존 검증 결과는 삭제하지 않고 `config/history/`와 기존 Official Integration 상태로 보존한다.

따라서 다음 두 개념을 섞지 않는다.

```text
Current Mission Clear Cycle
≠
Previous Official Integration / History
```

## 3. Easy Gate Labels

내부 G1~G8 이름은 정확한 검증 계약으로 유지한다.

화면에서는 다음과 같이 쉬운 한국어를 우선 표시한다.

| Internal | Beginner Label |
|---|---|
| G1 SOURCE | 1. 미션 이해하기 |
| G2 BUILD | 2. 직접 만들기 |
| G3 TEST | 3. 테스트하기 |
| G4 REVIEW | 4. 검토하기 |
| G5 RUNTIME | 5. 실제로 실행하기 |
| G6 EVIDENCE | 6. 증빙 남기기 |
| G7 LEARN | 7. 이해하고 설명하기 |
| G8 MERGE | 8. 완료 반영하기 |

각 단계에는 반드시 다음 네 가지가 있다.

- 무엇을 하는가
- 왜 하는가
- 지금 해야 할 행동
- 완료 기준

## 4. One Next Action

한 화면에서 여러 작업을 동시에 지시하지 않는다.

예:

```text
지금 할 일은 이것 하나입니다.

B1-1 미션 PDF와 평가 기준을 대조하여
통과 조건부터 확인합니다.
```

다른 활동은 현재 행동이 끝난 뒤 다음 단계로 노출한다.

## 5. Beginner Help Path

첫 화면에는 항상 다음 두 도움 경로를 제공한다.

### 쉬운 설명
- 왜 이 단계를 하는지
- 무엇을 확인해야 하는지
- 완료 기준이 무엇인지

### 막혔어요

```text
현재 단계 확인
→ 정상 결과 확인
→ 가장 흔한 원인 확인
→ 다시 시도
```

오류를 학습 흐름 이탈로 취급하지 않고 정상적인 Debugging 진입점으로 사용한다.

## 6. Home Information Architecture

권장 상단 순서:

```text
[간단한 시작 문장]

[현재 Mission / 현재 단계]
[다음 행동 1개]
[시작하기 / 쉬운 설명 / 막혔어요]

[새 도전 요약]
0/15 | B1-1 | 1/8

[현재 Mission 8단계]

[B1~B7 전체 여행 지도]

[15개 Mission 새 도전 상태]

────────────
여기부터 개발자용 상세 정보
────────────

[Growth]
[Official Mission Control]
[Dependency]
[Governance]
```

## 7. Mission State Labels

Beginner UI:

```text
NOT_STARTED → 시작 전
READY       → 시작 가능
ACTIVE      → 진행 중
CLEAR       → 미션 완료
BLOCKED     → 문제 해결 필요
```

내부 Mission 상태:

```text
TODO / IMPLEMENTED / TESTED / PASS / NEEDS-RUNTIME / BLOCKED
```

두 상태 모델은 목적이 다르므로 서로 대체하지 않는다.

## 8. Previous History

과거 PASS를 현재 새 도전 진행률에 포함하지 않는다.

예:

```text
B2-1
새 도전: 시작 전 · 0/8
이전 수행 기록: PASS
```

이전 결과를 숨기거나 삭제하지 않으면서도 현재 학습 Cycle을 명확히 유지한다.

## 9. 전체 여행 지도

입문자 화면에서는 먼저 큰 흐름만 보여준다.

```text
B1 Linux & OS
↓
B2 Python & Git
↓
B3 Data Structures & Algorithms
↓
B4 Web & Front-end
↓
B5 Database & Back-end
↓
B6 Cloud & AI API
↓
B7 Term Project
```

세부 기술과 전문 용어는 해당 단계에 도착했을 때 학습한다.

## 10. Professional Detail Layer

Beginner First 화면 아래에 기존 전문 정보를 유지한다.

### Growth
`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

### Mission Control
- Official Mission Status
- G1~G8
- Workcell Live Status
- Repository Telemetry
- Evidence

### Skill
12개 Competency Axis

### Dependency
운영상 권장 선후관계

### Governance
Source / Evidence / Parallel-Serial 규칙

초보자는 이 영역을 읽지 않아도 현재 Mission을 진행할 수 있어야 한다.

## 11. Refresh Policy

기존 정책을 유지한다.

- 자동 30초 Polling 사용 안 함
- 사용자가 수동 갱신
- 마지막 Refresh 후 5분 동안 버튼 비활성화
- Live Telemetry와 현재 Mission Clear Cycle은 서로 다른 데이터 흐름

## 12. Data Sources

### Mission Clear Cycle

```text
config/cycles/current.yaml
config/history/pre-v3-mission-history.yaml
        ↓
scripts/sync_progress.py
        ├─ docs/01-master-map/mission-clear-cycle.md
        └─ site/data/cycle.json
```

### Official Mission Pipeline

```text
config/missions.yaml
config/waves/*.yaml
        ↓
scripts/sync_progress.py
        ├─ README Mission Table
        ├─ docs/01-master-map/mission-progress.md
        ├─ site/data/missions.json
        └─ site/data/workcells.json
```

### Growth Pipeline

```text
config/growth.yaml ─────────────┐
config/skills.yaml ─────────────┤
config/activities.yaml ─────────┤
config/projects.yaml ───────────┼─> sync/build layer ─> site/data/*.json
config/opportunities.yaml ──────┤
config/resources.yaml ──────────┘
```

## 13. Responsive UI

### Desktop
- 현재 Mission과 진행 요약을 상단 2영역으로 표시
- 8단계는 최대 4열
- 전체 Mission은 최대 3열

### Mobile
- 현재 Mission과 `시작하기` 버튼이 첫 화면에서 확인 가능해야 한다.
- 모든 주요 카드 1열 전환
- 버튼은 충분한 터치 영역 확보
- Beginner First 영역에는 수평 스크롤이 없어야 한다.

## 14. Validation

자동 검증 항목:

- Current Mission = B1-1
- New Clear = 0/15
- Step = 1/8
- Beginner Step Card = 8
- Journey Card = 7
- Mission Card = 15
- B2-1 Previous PASS는 History로 표시
- B2-1 New Cycle은 0/8
- 쉬운 설명 버튼 동작
- 막혔어요 버튼 동작
- 모바일 Beginner 영역 Overflow 없음
- 기존 Growth/Mission Control 회귀 없음
- 수동 Refresh + 5분 Cooldown 유지
- Live Telemetry 회귀 없음

## 15. Implementation Rule

새 Dashboard 값은 UI에서 임의 생성하지 않는다.

```text
데이터 정의
→ Source of Truth
→ Sync/Generation
→ Beginner UI
→ Professional Detail UI
→ Validation
```

이 순서를 유지한다.
