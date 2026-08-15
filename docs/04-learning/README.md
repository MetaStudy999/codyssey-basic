# 04. Learning

## FAST TRACK
Mission 분석 → 최소 충분 설계 → 구현 → 테스트 → 리뷰 → 실제 실행 → Evidence → PASS.

## LEARNING TRACK
완성 결과물 → 개념 이해 → 구조 이해 → 명령/코드 읽기 → 직접 실행 → 일부 수정 → 오류 해결 → 자기 설명 → 복습.

## 학습 설계 문서
- [Codyssey Basic 전체 용어 인덱스](./vocabulary/README.md)
  - B1-1~B7-2 미션별 용어 페이지와 작성 진행 현황
  - 각 미션의 Level 0~5 + Advanced 및 Top Core 목록
- [Codyssey Basic 미션 용어 학습 체계 기획](./vocabulary-learning-plan.md)
  - B1-1~B7-2 전체 미션의 한글+영어 용어 표기 규칙
  - Level 0~5 + Advanced 분류
  - CORE / REQUIRED / REFERENCE 중요도
  - Top Core, K1~K4 이해 수준, 20:60:20 학습 원칙
  - NEW → REVIEW → APPLY → DEEPEN → INTEGRATE 누적 학습
  - Dependency Map 및 Vocabulary Gate 설계
- [Codyssey Basic 전체 용어 품질 감사](./vocabulary-quality-audit.md)
  - 15개 Mission Vocabulary의 원본 주요 요구 영역 대조
  - 구조 일관성, 중요도, K1~K4, Lifecycle, Dependency Map, Vocabulary Gate 감사
  - Basic Master Vocabulary로 이어지는 보완 우선순위와 다음 작업 순서
- [Codyssey Basic Master Vocabulary](./basic-master-vocabulary.md)
  - 15개 미션의 반복·핵심 용어 정규화
  - First Seen / Reuse / CORE·REQUIRED·REFERENCE / K1~K4 / Lifecycle 통합 관리
  - 전체 Dependency Backbone 및 Vocabulary Gate V1~V5 공통 체크리스트
  - B1-1부터 쉬운 설명·비유·도식·실습으로 이어지는 다음 학습 단계 기준
- [B1-1 Top Core 입문자 학습 가이드](./vocabulary/b1-1-top-core-learning-guide.md)
  - B1-1 Top Core 28개 쉬운 한 줄 설명과 생활 비유
  - 사용자·권한 → SSH·방화벽 → 프로세스·포트 → 관제·로그·cron의 Dependency Map
  - 초미니 실습 8개, 고의 오류·복구 8개, 평가 예상 질문 10개
  - B1-1 전용 Vocabulary Gate V1~V5 체크리스트
- [B1-1 Level 2 입문자 무오류 실행 가이드](./vocabulary/b1-1-level2-execution-guide.md)
  - 사전점검 → 사용자/그룹 → ACL → SSH → UFW → Agent → monitor.sh → cron → logrotate → Evidence의 안전 순서
  - 각 단계의 `[GO] / [STOP] / 복구 / 재검증` 기준
  - 원본 Mission 요구사항과 현재 B1-1 저장소 구현 예시를 분리
  - 실제 제공 앱 파일명과 `AGENT_PROCESS_PATTERN`을 맞추는 절차 포함
- [B1-1 Level 3~5 통합 학습 가이드](./vocabulary/b1-1-level3-5-learning-guide.md)
  - Linux 권한 모델, ACL, SSH/Port/Firewall, Health Check, cron, 로그 수명주기의 구조·원리
  - `증상 → 조회 → 계층 분리 → 최소 수정 → 재검증 → Evidence` 트러블슈팅 알고리즘
  - 평가 항목을 `WHAT → WHY → HOW → PROOF` 4문장 답변 구조로 연결
  - V3~V5 관계·실제 위치·자기 설명 Gate 및 20분 압축 복습 포함
- [B1-1 통합 복습 패키지](./vocabulary/b1-1-review-pack.md)
  - 한 장 핵심 복습 카드와 핵심 관계 카드 12장
  - 5분 백지 복습, Stage A~D 실전 구두 퀴즈
  - 평가 항목별 `WHAT → WHY → HOW → PROOF` 답변 훈련
  - 공식 평가 영역 기반 최종 체크시트와 Vocabulary Gate V1~V5 최종 판정
  - `LEARNING READY ≠ RUNTIME VERIFIED` 원칙과 B1-2 연결

## B1-1 학습 확장 상태

`Mission Vocabulary → Top Core → Level 2 실행 → Level 3~5 → 통합 복습`까지 **학습 콘텐츠 패키지 작성 완료**.

다음 학습 확장 대상은 **B1-2**다.

## 자기 설명 기준
- 핵심 용어를 한 문장으로 정의
- 1분 설명
- 3~5분 구조 설명
- 백지에서 흐름도 그리기
- 오류 상황에서 확인 순서 말하기

## 원칙
완벽하게 공부한 뒤 만드는 것이 아니라, 먼저 작동하는 결과를 확보하고 그 결과를 이용해 깊게 학습한다.
