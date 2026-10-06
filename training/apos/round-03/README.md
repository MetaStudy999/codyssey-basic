# APOS Round 03 Control Workspace

이 디렉터리는 CODYSSEY Round 02 / 제2기 Mission을 APOS로 수행할 때 사용하는 **중앙 Control Plane(제어 계층)** 이다.

## 표준 경로

- Central Control Root: `training/apos/round-03/`
- Mission Control: `training/apos/round-03/<MISSION-ID>/`
- Mission Execution Root: 각 Canonical Repository의 `training/round-03-apos/`

## 역할 분리

```text
codyssey-basic/training/apos/round-03/<MISSION-ID>/
= Mission Mapping + Status + Evidence Index + Handoff

각 Mission Repository/training/round-03-apos/
= 실제 구현 + 실행 + 테스트 + 증빙 + 평가 + 발표
```

## 현재 시작 Mission

```text
Generation: CODYSSEY Round 02 / 제2기
Mission: B1-1
Stable Topic: web-portfolio
Repository: MetaStudy999/codyssey-basic-web-portfolio
Execution Root: training/round-03-apos/
Mission Execution: NOT_STARTED
```

B1-1 실제 실행은 별도 Start Gate와 Owner 승인 후 진행한다.

## Registry

- `_registry/missions.yml`: 15개 Mission의 현재 ID, Stable Topic, Canonical Repository, 실행 루트
- `_shared/MISSION-QUALITY-PROFILES.md`: Mission별 APOS 내부 품질 보완 프로파일
- `../../../standards/APOS-ROUND-03-DIRECTORY-NAMING-STANDARD.md`: 디렉터리·이름 표준

기존 `training/apos-round01/`은 과거 수행 이력으로 보존한다.


## B1-1 Pilot Documents

B1-1은 APOS Round 03 Harness(하네스, 반복 실행 틀)의 첫 검증 Pilot이다.

- `B1-1/MISSION-CONTRACT.yml`
- `B1-1/ENVIRONMENT-CONTRACT.yml`
- `B1-1/VERIFICATION-CONTRACT.yml`
- `B1-1/EVIDENCE-CONTRACT.yml`
- `B1-1/EVALUATION-CONTRACT.yml`
- `B1-1/EXECUTION-PLAN.md`

공통 Profile:

- `_shared/MISSION-QUALITY-PROFILES.md`
- `_shared/SECURITY-EVIDENCE-DEPENDENCY-PROFILES.md`

B1-1의 실제 Mission Repository `training/round-03-apos/` 생성·구현은 Owner Start Approval 후 별도 단계에서 수행한다.
