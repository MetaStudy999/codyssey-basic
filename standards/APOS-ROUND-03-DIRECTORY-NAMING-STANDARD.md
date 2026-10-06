# APOS Round 03 Directory & Naming Standard — 디렉터리·이름 표준

> 상태: APOS 내부 운영 표준 제안/적용용
>
> 적용 범위: CODYSSEY Round 02 / 제2기의 현재 15개 Mission(B1-1 ~ B7-2, B6-3 포함)
>
> 공식 Mission 내용·평가기준은 공식 제2기 Mission 자료가 최우선이며, 이 문서는 APOS의 Control Plane(제어 계층)과 Execution Plane(실행 계층)을 표준화한다.

## 1. 핵심 원칙

```text
Mission ID        = 현재 교육과정 번호(변경 가능)
Stable Topic      = 주제 기반 안정 식별자
Canonical Repo    = codyssey-basic-<stable-topic>
Control Root      = training/apos/round-03/<MISSION-ID>/
Execution Root    = training/round-03-apos/
APOS Window       = Wxxx
```

서로 다른 의미의 Round를 혼동하지 않는다.

- CODYSSEY Generation: `Round 02 / 제2기`
- APOS Execution Round: `round-03-apos`
- APOS Session/Window: `W168` 같은 세션 번호

`round-03-apos`의 03은 CODYSSEY 제3기가 아니라 **세 번째 내부 수행본(Execution Round)** 이다.

## 2. 중앙 Control Plane

Canonical Control Repository:

```text
MetaStudy999/codyssey-basic
```

표준 경로:

```text
training/apos/round-03/
├── README.md
├── _shared/
├── _registry/
├── B1-1/
├── B1-2/
├── B2-1/
├── B2-2/
├── B3-1/
├── B3-2/
├── B4-1/
├── B4-2/
├── B5-1/
├── B5-2/
├── B6-1/
├── B6-2/
├── B6-3/
├── B7-1/
└── B7-2/
```

기존 `training/apos-round01/`은 Historical(과거 이력)로 보존하고 강제 이동·재작성하지 않는다.

## 3. 각 Mission Execution Plane

모든 Canonical Mission Repository의 APOS 신규 수행 루트는 동일하게 사용한다.

```text
training/round-03-apos/
```

예:

```text
MetaStudy999/codyssey-basic-web-portfolio/
└── training/
    ├── round-01-clear/      # 과거 자료
    ├── round-02-clear/      # 기존 제2기 수행 자료
    └── round-03-apos/       # APOS 신규 수행 공간
```

과거 Round는 삭제·덮어쓰기하지 않는다.

## 4. Execution Layout

논리적 표준 구조:

```text
training/round-03-apos/
├── README.md
├── CHECKLIST.md
├── mission.yml
├── 01-mission/
├── 02-research/
├── 03-design/
├── 04-src/
├── 05-tests/
├── 06-evidence/
├── 07-evaluation/
├── 08-presentation/
└── 09-handoff/
```

단, **빈 디렉터리를 형식상 대량 생성하지 않는다.**

최소 생성 계약:

```text
README.md
CHECKLIST.md
mission.yml
```

나머지는 실제 Mission 요구와 산출물이 생길 때 생성한다.

## 5. 중앙 Mission Control 최소 계약

각 `training/apos/round-03/<MISSION-ID>/`에는 실제 소스코드를 복제하지 않는다.

권장 파일:

```text
README.md
mission.yml
status.yml
evidence-index.yml
```

Control Plane은 위치·상태·Evidence Index(증빙 색인)를 관리하고 실제 구현은 Canonical Mission Repository가 보유한다.

## 6. Composite Mission Identity

APOS는 Mission ID 하나만으로 실행 위치를 결정하지 않는다.

```text
generation
+ mission_id
+ stable_topic
+ canonical_repository
+ execution_round
```

위 5개 값이 일치해야 실행 대상으로 인정한다.

## 7. mission.yml 필수 필드

```yaml
generation: "CODYSSEY Round 02 / 제2기"
mission_id: B1-1
stable_topic: web-portfolio
canonical_repository: MetaStudy999/codyssey-basic-web-portfolio
execution_round: round-03-apos
execution_root: training/round-03-apos
status: NOT_STARTED
owner_start_approval: PENDING
```

## 8. 상태 규칙

```text
NOT_STARTED
→ PREFLIGHT_READY
→ IN_PROGRESS
→ EVALUATION_READY
→ CLEAR
```

문서나 폴더가 존재한다는 이유만으로 `IN_PROGRESS`, `EVALUATION_READY`, `CLEAR`를 선언하지 않는다.

## 9. 보안·복구 공통 규칙

모든 Mission은 최소 다음을 확인한다.

- Secret/API Key/Token 비노출
- Runtime identity(실행 환경 식별)
- 최소 권한(Least Privilege)
- destructive action 전 backup/rollback
- 실제 Verification(검증)과 Evidence(증빙) 연결
- PASS/FAIL/INSUFFICIENT_EVIDENCE 명시
- Owner 승인 필요한 Mutation은 HITL(Human-in-the-Loop, 사람 승인) 유지

## 10. 적용 전략

1. 중앙 Control Plane 표준을 먼저 확정한다.
2. B1-1 Preflight에서 `round-03-apos` scaffold(골격)를 최초 검증한다.
3. 검증된 템플릿만 다음 Mission에 재사용한다.
4. 15개 Repository에 빈 폴더를 한 번에 생성하지 않는다.
5. Mission별 특성은 `_shared/MISSION-QUALITY-PROFILES.md`를 따른다.

> 핵심: **중앙은 관리하고, 각 Mission Repository는 실행한다. 경로는 표준화하되 실제 내용은 Mission 특성에 맞게 다르게 한다.**


## 11. Five-Contract Mission Gate

모든 Mission은 실제 실행 전에 다음 5개 Contract(계약)를 중앙 Control Plane에 정의할 수 있다.

```text
MISSION-CONTRACT
→ 무엇을 해야 하는가

ENVIRONMENT-CONTRACT
→ 어디서 무엇으로 실행하는가

VERIFICATION-CONTRACT
→ 무엇을 확인해야 PASS인가

EVIDENCE-CONTRACT
→ 어떤 실제 증빙을 남겨야 하는가

EVALUATION-CONTRACT
→ 무엇을 자기 말로 설명할 수 있어야 하는가
```

첫 적용 대상은 B1-1이며, B1-1에서 유효성을 검증한 후 다음 Mission에 점진적으로 적용한다.

Contract가 존재한다는 사실만으로 Mission을 시작하거나 PASS/CLEAR를 선언하지 않는다.

## 12. Profile Binding

각 Mission Registry는 다음 내부 Profile을 가질 수 있다.

```yaml
quality_profile: ...
risk_level: LOW | MEDIUM | HIGH
security_profile: ...
evidence_profile: ...
recommended_predecessors: [...]
```

- `quality_profile`: 기술 분야별 품질 보완
- `security_profile`: 권한·Secret·Trust Boundary 등 보안 검증
- `evidence_profile`: Mission 특성에 맞는 증빙 종류
- `recommended_predecessors`: APOS 내부 학습/재사용 권고 관계이며 공식 선행조건이 아님

세부 정의는 `training/apos/round-03/_shared/` 문서를 따른다.
