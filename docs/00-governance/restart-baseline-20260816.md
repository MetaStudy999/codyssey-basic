# 2026-08-16 New Baseline · Mission Recovery Plan

## 목적

기존 B1-1~B7-2 작업은 짧은 시간에 병렬·급행으로 진행되어 현재 상태, 과거 Workcell 상태, Dashboard 상태가 서로 다르게 보일 수 있었다. 새 기준에서는 과거 작업을 삭제하지 않고 **History로 보존**하되, 현재 진도는 B1-1부터 다시 검증한다.

## 절대 원칙

1. **과거 작업은 참고자료이지 현재 진행상태가 아니다.**
2. **새 기준 이후 실제로 다시 검증한 것만 현재 PASS/CLEAR로 인정한다.**
3. 기존 코드와 문서는 무조건 버리지 않고 `KEEP / REUSE / REWRITE / ARCHIVE`로 판정한다.
4. 사용자 Dashboard에는 현재 상태만 기본 표시한다.
5. 개별 Mission Repository의 과거 `.live/mission-status.json`은 새 기준으로 reset하기 전까지 현재 상태로 사용하지 않는다.
6. 한 번에 여러 Mission을 클리어하려 하지 않고 현재 Mission 하나만 ACTIVE로 둔다.
7. 필수 Mission을 먼저 완료하고 선택 Mission은 그 다음에 수행한다.

## 현재 실행 순서

### Phase 1 · 필수 미션

`B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2 → B4-1 → B5-1 → B6-1 → B6-2 → B7-1`

### Phase 2 · 선택 미션

`B4-2 → B5-2 → B5-3`

### Phase 3 · 고도화·확장

`B7-2 → Growth / Portfolio / Research / Open Source / Career / Venture`

> B7-2의 Mission PDF 자체에는 필수/선택 구분이 명시되지 않으므로 현재 Control Tower에서는 별도 확장 단계로 표시한다.

## Mission 하나의 표준 진행

`G1 SOURCE → G2 BUILD → G3 TEST → G4 REVIEW → G5 RUNTIME → G6 EVIDENCE → G7 LEARN → G8 MERGE`

화면에는 다음 쉬운 이름을 우선 사용한다.

1. 미션 이해하기
2. 필수 기능 만들기
3. 테스트하기
4. 빠진 것 검토하기
5. 실제로 실행하기
6. 증빙 남기기
7. 핵심만 이해하기
8. 미션 완료 반영하기

## 현재 Source of Truth

- 현재 Mission/Gate 상태: `config/missions.yaml`
- 현재 수행 순서/ACTIVE Mission: `config/cycles/current.yaml`
- 과거 결과: `config/history/pre-restart-20260816.yaml`
- 이전 메인 전체 Snapshot: `archive/pre-restart-20260816-main`
- Dashboard 생성 데이터: `site/data/missions.json`, `site/data/cycle.json`

과거 `config/waves/*`, `site/data/workcells.json`, 개별 Repo의 기존 `.live/mission-status.json`은 **현재 Dashboard의 Source of Truth가 아니다.**

## 각 Mission Repository 재정리 절차

각 Repo는 해당 Mission을 시작할 때 다음 순서로 정리한다.

1. 현재 `main`을 `archive/pre-restart-20260816` 브랜치로 보존
2. 공식 Mission PDF / Markdown / Evaluation 재확인
3. 기존 파일을 `KEEP / REUSE / REWRITE / ARCHIVE`로 분류
4. `.live/mission-status.json`을 새 Cycle schema로 reset
5. `README / START HERE / Requirements / Tests / Evidence / Handoff`를 최소 표준으로 정리
6. G1부터 실제 수행
7. 필수 평가항목이 충족되면 Mission Clear
8. 다음 Mission으로 이동

## 속도 원칙

매 파일 변경마다 중간 확인하지 않는다. 다음 네 Checkpoint에서만 통합 검증한다.

- 설계 완료
- 필수 구현/테스트 완료
- Runtime/Evidence 완료
- Mission Clear

실제 사용자 개입은 OS/Cloud/Account/협업처럼 사람이 반드시 필요한 Runtime에서만 요청한다.

## STOP Rule

공식 요구사항, 필수 테스트, Runtime, Evidence, 평가 대응이 충족되면 먼저 Mission을 Clear한다. 선택 기능과 전문 고도화는 필수 Mission 완료를 지연시키지 않는다.
