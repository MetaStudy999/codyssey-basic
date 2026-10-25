# Round 04 Agent 미션 파일 경로 표준 (2026-10-25)

## 대상

제2기 B1-1~B7-2 공식 미션 15개를 **각 전용 저장소**에서 `training/round-04-agent/`에 새로 작성합니다. 중앙 저장소의 `training/round-04-agent/`는 미션 등록·색인·제어 자료만 관리합니다.

## 기준 위치

- 신규 소스: `training/round-04-agent/04-src/`
- 전체 계획·승인: `training/round-04-agent/00-plan/`
- 공식 요구·평가 기준: `training/round-04-agent/01-requirements/`
- 기존 코드·환경·증빙 비교: `training/round-04-agent/02-analysis/`
- 신규 소스·화면·인터페이스 설계: `training/round-04-agent/03-design/`
- 시험: `training/round-04-agent/05-tests/`
- 실제 증빙: `training/round-04-agent/06-evidence/`
- 평가: `training/round-04-agent/07-evaluation/`
- 발표 PPTX/PDF: `training/round-04-agent/08-presentation/`
- 인계: `training/round-04-agent/09-handoff/`

## 승인·보존 원칙

- 2026-10-25 승인된 것은 **경로 설정 및 계획 문서 생성**입니다. 각 미션 구현·실행·배포·병합은 여전히 개별 승인 범위를 따릅니다.
- 기존 Round 01~03 및 저장소 루트의 기존 소스와 PASS 이력 보존. 새 폴더가 비어 있다는 이유로 과거 검증을 무효화하지 않습니다. 반대로 과거 결과를 새 Round PASS로 전이하지 않습니다.
- 새 Round 상태는 기본 `NOT_STARTED`; Runtime·CLEAR는 `NOT_VERIFIED`. 불확실한 것은 실패가 아니라 미검증으로 표시.
- 공식 미션 요건과 평가가 최우선. AWS·Discord·iMac은 별도 지시까지 보류.
- `round-04-agent`는 신규 에이전트 협업 작업 폴더명이고 이전 `TRAINING-ROUNDS.md`의 R04 HARDEN 학습 단계와 구별됩니다.

## 정합성 검사

각 저장소는 `README.md`, `AGENTS.md`, `mission.yml`, 10개 하위 작업 폴더(00~09) README의 존재 및 등록표 `mission_id`·`repository`·`authoring_root` 일치를 확인해야 합니다. 각 단계별 PASS/FAIL은 **파일이 아닌 실제 검증 결과**에서만 부여합니다.

## 경로 완전성 원칙 (2026-10-26)

신규 미션에서는 00 → 01 → 02 → 03 → 04 → 05 → 06 → 07 → 08 → 09 순서로 구획을 명시합니다. 각 미션 저장소에 `01-requirements/README.md`, `02-analysis/README.md`, `03-design/README.md`를 포함하며, `mission.yml`의 `requirements_root`, `analysis_root`, `design_root`와 실제 파일 경로가 일치해야 합니다. 중간 번호를 건너뛰지 않습니다.

폴더·관리 문서 생성 자체는 B1-1~B7-2 미션 개발 착수나 신규 기능 검증을 뜻하지 않습니다. 기존 PASS와 이전 차수 데이터는 그대로 보존합니다.
