# AGENTS.md

## 역할

이 저장소는 Codyssey AI/SW Basic 전체 과정을 관리하는 **Control Tower**다. 개별 Mission의 실제 구현은 각 독립 Mission Repository에서 수행한다.

현재 운영 기준은 **2026-08-16 New Baseline**이다.

핵심 문서: `docs/00-governance/restart-baseline-20260816.md`

## 가장 중요한 현재 원칙

1. **과거 작업은 참고자료이지 현재 진행상태가 아니다.**
2. **2026-08-16 이후 실제로 다시 검증한 결과만 현재 PASS/CLEAR로 인정한다.**
3. 현재 ACTIVE Mission은 한 번에 하나만 둔다.
4. 필수 Mission을 먼저 완료한 뒤 선택 Mission을 수행한다.
5. 선택 기능·고도화가 필수 Mission Clear를 지연시키지 않는다.
6. 기존 코드는 삭제부터 하지 않고 `KEEP / REUSE / REWRITE / ARCHIVE`로 판정한다.
7. 실제 Runtime이 필요한 결과를 문서·정적검사만으로 PASS 처리하지 않는다.

## 현재 수행 순서

### Phase 1 · 필수

`B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2 → B4-1 → B5-1 → B6-1 → B6-2 → B7-1`

### Phase 2 · 선택

`B4-2 → B5-2 → B5-3`

### Phase 3 · 고도화·확장

`B7-2 → Growth / Portfolio / Research / Open Source / Career / Venture`

B7-2는 Mission PDF 자체에서 필수/선택 구분이 명시되지 않으므로 별도 확장 단계로 표시한다. 공식 Source가 갱신되면 그때 재분류한다.

## Source of Truth

### 현재 Mission/Gate

`config/missions.yaml`

- 수행 상태
- 학습 상태
- 현재 Gate
- G1~G8
- 공식 필수/선택 메타데이터

### 현재 수행 Cycle

`config/cycles/current.yaml`

- 현재 ACTIVE Mission
- 필수 → 선택 → 확장 순서
- 입문자용 쉬운 G1~G8 표현
- 다음 행동

### 과거 기록

`config/history/pre-restart-20260816.yaml`

전체 이전 메인 Snapshot:

`archive/pre-restart-20260816-main`

과거 `config/waves/*`, `site/data/workcells.json`, 각 Mission Repository의 기존 `.live/mission-status.json`은 새 기준으로 reset하기 전까지 **현재 Dashboard의 Source of Truth가 아니다.**

## 공식 Source 우선순위

공식 Mission 요구사항 판단은 다음 순서를 따른다.

1. Mission PDF
2. Mission Markdown
3. 공식 Evaluation / 평가문항
4. 직접 관련된 공식 운영자료
5. 요구사항-증빙 매핑
6. README / 학습 문서
7. 코드 / 테스트 / 보고서 / Evidence

하위 자료나 AI 일반지식으로 상위 공식 요구사항을 임의 복원하지 않는다.

Source 상태는 필요할 때 다음으로 구분한다.

`VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED`

## Mission 표준 Gate

`G1 SOURCE → G2 BUILD → G3 TEST → G4 REVIEW → G5 RUNTIME → G6 EVIDENCE → G7 LEARN → G8 MERGE`

입문자 화면에서는 다음처럼 표시한다.

1. 미션 이해하기
2. 필수 기능 만들기
3. 테스트하기
4. 빠진 것 검토하기
5. 실제로 실행하기
6. 증빙 남기기
7. 핵심만 이해하기
8. 미션 완료 반영하기

## Mission 상태

- `TODO`: 새 기준에서 아직 검증 시작 전
- `IMPLEMENTED`: 필수 코드/설정 존재
- `TESTED`: 신뢰 가능한 테스트 통과
- `PASS`: 구현 + 테스트 + 필요한 Runtime + Evidence 충족
- `NEEDS-RUNTIME`: 사용자/실환경 확인 필요
- `BLOCKED`: 외부 조건으로 진행 차단

Learning 상태는 별도다.

`NOT-STUDIED → PRACTICED → EXPLAINABLE → MASTERED`

`PASS`와 `MASTERED`는 같은 의미가 아니다.

## 각 Mission Repository를 새로 시작할 때

해당 Mission이 ACTIVE가 되면 다음 순서로 진행한다.

1. 현재 Mission Repo `main`을 `archive/pre-restart-20260816` 브랜치로 보존
2. Mission PDF / Markdown / Evaluation 재확인
3. 기존 파일을 `KEEP / REUSE / REWRITE / ARCHIVE`로 분류
4. `.live/mission-status.json`을 새 Cycle schema로 reset
5. README / Start Here / Requirements / Tests / Evidence / Handoff를 최소 표준으로 정리
6. G1부터 실제 수행
7. Checkpoint 단위로 검증
8. G8 완료 후 Control Tower의 `config/missions.yaml`과 `config/cycles/current.yaml` 반영

## Checkpoint 운영

매 파일 변경마다 반복 확인하지 않는다. 다음 네 시점에 통합 검증한다.

1. 설계 완료
2. 필수 구현·테스트 완료
3. Runtime·Evidence 완료
4. Mission Clear

사용자 개입은 실제 OS/Cloud/Account/협업 등 사람이 반드시 필요한 Runtime에서만 요청하는 것을 기본으로 한다.

## 생성 파이프라인

### Mission

수정 원본:

- `config/missions.yaml`
- `config/cycles/current.yaml`
- `config/history/pre-restart-20260816.yaml`

실행:

```bash
python scripts/sync_progress.py
```

생성 결과:

- README Mission Progress 영역
- `docs/01-master-map/mission-progress.md`
- `docs/01-master-map/mission-clear-cycle.md`
- `site/data/missions.json`
- `site/data/cycle.json`

생성 파일을 직접 상태 수정 원본으로 사용하지 않는다.

### Growth

기존 Growth Registry는 유지하지만 현재 Mission Clear보다 우선하지 않는다.

- `config/growth.yaml`
- `config/skills.yaml`
- `config/activities.yaml`
- `config/projects.yaml`
- `config/opportunities.yaml`
- `config/resources.yaml`

Growth Stage:

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

## Dashboard 원칙

Dashboard의 첫 화면은 다음 세 질문에 즉시 답해야 한다.

1. 지금 어디인가?
2. 지금 무엇을 해야 하는가?
3. 필수 미션 중 얼마나 완료했는가?

기본 Dashboard는 `site/data/missions.json`과 `site/data/cycle.json`만 현재 진행 데이터로 사용한다.

개별 Repo의 과거 `.live/mission-status.json`을 자동 조회하여 현재 진도처럼 표시하지 않는다.

수동 상태 새로고침은 현재 Control Tower 데이터만 다시 읽으며 5분 Cooldown을 유지한다.

## Repository / Growth 원칙

- Master Map First
- Progressive Repository
- Logical First, Physical Later
- Folder = Domain, Stage = Metadata
- Evidence-based Growth
- Mission PASS before Overengineering

Stage 폴더(`core/`, `advanced/`, `pro/`)는 만들지 않는다.

## STOP Rule

현재 Mission의 공식 요구, 필수 테스트, 필요한 Runtime, Evidence, 평가 대응이 충족되면 먼저 Mission을 Clear한다.

- 현재 Clear를 직접 앞당김 → DO
- 가치 있지만 지금 불필요 → DEFER
- 중복·복리효과 낮음 → DROP 또는 ARCHIVE

## 최소 검증

```bash
python scripts/sync_progress.py --check
python scripts/sync_growth.py --check
python scripts/validate_v3.py
```

PR에서는 추가로 Chromium Browser Smoke와 모바일 Overflow를 검증한다.

실제 OS/Cloud/User Runtime은 자동 검증이 성공해도 별도 Evidence가 필요하다.
