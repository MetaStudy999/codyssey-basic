# Round 04 Agent 미션 파일 경로 표준 (2026-10-25)

## 대상

제2기 B1-1~B7-2 공식 미션 15개를 **각 전용 저장소**에서 `training/round-04-agent/`에 새로 작성합니다. 중앙 저장소의 `training/round-04-agent/`는 미션 등록·색인·제어 자료만 관리합니다.

## 기준 위치

- 신규 소스: `training/round-04-agent/04-src/`
- 계획: `training/round-04-agent/00-plan/`
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

각 저장소는 `README.md`, `AGENTS.md`, `mission.yml`, 7개 하위 작업 폴더 README의 존재 및 등록표 `mission_id`·`repository`·`authoring_root` 일치를 확인해야 합니다. 각 단계별 PASS/FAIL은 **파일이 아닌 실제 검증 결과**에서만 부여합니다.
