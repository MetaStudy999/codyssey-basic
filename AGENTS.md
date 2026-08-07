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

## 진행 상태 Single Source of Truth

- 과정 진행 메타데이터의 유일한 수정 원본은 `config/missions.yaml`이다.
- `README.md`의 `AUTO:MISSION_PROGRESS` 영역, `docs/03-progress/progress.md`, `site/data/missions.json`은 생성 결과물이다.
- 생성 결과물을 직접 수정하지 말고 `python scripts/sync_progress.py`로 동기화한다.
- 수행 상태와 학습 상태는 분리한다. `PASS`가 곧 `MASTERED`를 의미하지 않는다.

## 수행 순서

B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2 → B4-1 → B4-2 → B5-1 → B5-2 → B5-3 → B6-1 → B6-2 → B7-1 → B7-2

한 실행 단위를 완료·병합한 뒤 다음 단위로 이동한다.

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
