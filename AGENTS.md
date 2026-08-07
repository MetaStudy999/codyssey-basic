# AGENTS.md

## 역할

이 저장소는 Codyssey AI/SW Basic 전체 과정을 관리하는 Control Tower다. 개별 미션의 실제 구현은 각 독립 Repository에서 수행한다.

## Source of Truth 우선순위

1. Mission PDF
2. Mission Markdown
3. 공식 Evaluation / 평가문항
4. 직접 관련된 공식 운영자료
5. 요구사항-증빙 매핑
6. README
7. 학습 문서
8. 코드
9. 테스트
10. 보고서
11. Evidence

외부 책·논문·사이트·뉴스는 공식 요구사항을 대체하지 않는다. 이해·검증·확장에만 사용한다.

## Source Discovery 규칙

- G1 SOURCE 시작 전에 Mission과 Evaluation 후보를 확장자와 파일명에 관계없이 먼저 탐색한다.
- PDF, Markdown, 기타 텍스트 Source를 실제 내용 기준으로 확인한다.
- 파일이 존재해도 0바이트, 공백뿐, 제목/placeholder뿐이면 `EMPTY`로 본다.
- 텍스트 추출이 안 되는 PDF는 이미지 기반일 수 있으므로 곧바로 `EMPTY`로 판정하지 않는다.
- Source는 `VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED` 중 하나로 분류한다.
- 자료 상태에 따라 `FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT` 모드로 진행한다.
- 상위 Source가 없거나 비어 있다고 하위 자료나 AI 일반지식으로 공식 요구사항을 만들어내지 않는다.
- Source가 부족해도 Repository Inventory, 환경 확인, 기존 코드·테스트 분석 등 안전한 작업은 계속할 수 있다.
- Source Gap과 불명확한 요구는 명시적으로 기록하고, 실제 근거가 생기기 전까지 공식 요구사항이나 PASS 근거로 사용하지 않는다.
- 세부 규칙은 `docs/00-governance/source-discovery-fallback-protocol.md`를 따른다.

## 병렬 Mission Workcell / 직렬 통합 규칙

- B1-1~B7-2의 개별 Mission Repository는 서로 분리된 채팅 Workcell에서 병렬 실행할 수 있다.
- 병렬 Workcell은 시작 시 동일한 Control Tower `main` commit SHA를 Baseline으로 기록한다.
- Mission Workcell에서 이 대표 Repository는 `READ ONLY`다.
- Mission Workcell은 자신의 Mission Repository만 수정하며 다른 Mission Repository를 수정하지 않는다.
- 모든 Workcell은 G1 SOURCE에서 Source Discovery를 먼저 수행하고, 구현 전 `Mission Work Packet`을 확정한다.
- Source Discovery·Repository Inventory·Requirement Mapping·TOC·Mission Contract는 15개 Workcell에서 병렬 수행할 수 있다.
- 후속 Mission이 선행 Mission의 실제 결과를 재사용해야 할 때만 G2 BUILD 직전에 Dependency를 확인한다. 공식 Dependency와 운영상 권장 관계를 구분한다.
- Mission이 끝나면 `HANDOFF.md`와 `mission-result.yaml`을 남기고 대표 Repository 상태를 직접 갱신하지 않는다.
- 대표 Repository 반영은 `B1-1 → B1-2 → ... → B7-2` 순서로 한 번에 하나의 Handoff만 검증·통합한다.
- 대표 상태 통합 시 `config/missions.yaml`만 수정 원본으로 사용하고 생성 결과물을 직접 편집하지 않는다.
- 세부 규칙은 `docs/00-governance/parallel-mission-execution.md`를 따른다.

## 진행 상태 Single Source of Truth

- 과정 진행 메타데이터의 유일한 수정 원본은 `config/missions.yaml`이다.
- `README.md`의 `AUTO:MISSION_PROGRESS` 영역, `docs/03-progress/progress.md`, `site/data/missions.json`은 생성 결과물이다.
- 생성 결과물을 직접 수정하지 말고 `python scripts/sync_progress.py`로 동기화한다.
- 수행 상태와 학습 상태는 분리한다. `PASS`가 곧 `MASTERED`를 의미하지 않는다.

## 대표 Repository 통합 순서

B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2 → B4-1 → B4-2 → B5-1 → B5-2 → B5-3 → B6-1 → B6-2 → B7-1 → B7-2

개별 Mission 실행은 병렬화할 수 있지만, 대표 Repository 상태 반영과 통합은 위 순서대로 한 실행 단위를 완료·병합한 뒤 다음 단위로 이동한다.

## Completion Gate

- G1 SOURCE
- G2 BUILD
- G3 TEST
- G4 REVIEW
- G5 RUNTIME
- G6 EVIDENCE
- G7 LEARN
- G8 MERGE

## 상태 정의

- TODO: 미구현/미실행
- IMPLEMENTED: 코드·설정 존재, 실제 실행 미검증
- TESTED: 자동화 또는 신뢰 가능한 테스트 완료
- PASS: 구현 + 실제 검증 + 필수 증빙 완료
- NEEDS-RUNTIME: 사용자/운영환경 실행 확인 필요
- BLOCKED: 외부 환경 조건으로 진행 차단

## 작업 철학

먼저 빠르게 완성하고, 최소 검증으로 정확성을 확보하고, 완성된 결과물로 깊게 학습한다.

전문화 아이디어가 기본 미션을 지연시키면 `docs/10-professional-growth` 또는 `docs/11-advanced`로 보낸다.
