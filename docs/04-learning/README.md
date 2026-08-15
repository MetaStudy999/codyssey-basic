# 04. Learning

## FAST TRACK
Mission 분석 → 최소 충분 설계 → 구현 → 테스트 → 리뷰 → 실제 실행 → Evidence → PASS.

## LEARNING TRACK
완성 결과물 → 개념 이해 → 구조 이해 → 명령/코드 읽기 → 직접 실행 → 일부 수정 → 오류 해결 → 자기 설명 → 복습.

## 학습 설계 문서

- [Codyssey Basic 전체 용어 인덱스](./vocabulary/README.md)
  - B1-1~B7-2 미션별 용어 페이지와 작성 진행 현황
  - 미션 디렉터리 및 Level별 파일 네이밍 표준
- [Codyssey Basic 미션 용어 학습 체계 기획](./vocabulary-learning-plan.md)
  - 한글+영어 용어 표기 규칙
  - Level 0~5 + Advanced
  - CORE / REQUIRED / REFERENCE
  - Top Core, K1~K4, 20:60:20
  - NEW → REVIEW → APPLY → DEEPEN → INTEGRATE
  - Dependency Map 및 Vocabulary Gate V1~V5
- [Codyssey Basic 개별 용어 파일 표준](./term-file-standard.md)
  - `Mission → Level → Term` 디렉터리 구조
  - `{mission}-{level}-{term-order}-{english-term-slug}.md` 파일 규칙
  - `000-index`, 010 단위 정렬, 링크·Lifecycle·중복 용어 정책
- [Visual Learning Backlog](./visual-learning-backlog.md)
  - 용어별 `Cover → One-line → Where → Relation → Mini Check → Gate → Summary` 시각 학습 형식
  - Source Lock, 이미지 QA, GitHub 반영 검증 기준
  - 현재 상태: **DEFERRED** — 비시각 학습 진행을 막지 않음
- [Codyssey Basic 전체 용어 품질 감사](./vocabulary-quality-audit.md)
  - 15개 Mission Vocabulary의 원본 주요 요구 영역 대조
  - 구조 일관성·중요도·K1~K4·Lifecycle·Dependency·Gate 감사
- [Codyssey Basic Master Vocabulary](./basic-master-vocabulary.md)
  - 15개 미션의 반복·핵심 용어 정규화
  - First Seen / Reuse / Priority / K1~K4 / Lifecycle 통합 관리
  - 전체 Dependency Backbone

## B1-1 — System Monitoring Automation

B1-1은 **미션별 영어 디렉터리 + 미션 번호가 포함된 Level 구조**를 사용한다. Level 1 Top Core 28개는 개별 용어 파일 Pilot까지 적용했다.

- [00 — B1-1 Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-00-index.md)
  - 전체 학습 지도, Source of Truth, 고정값, Vocabulary Gate
- [10 — Level 0 Prerequisite](./vocabulary/b1-1-system-monitoring-automation/b1-1-10-level-0-prerequisite.md)
  - Linux/CLI/File/User/Process/Network 선수 용어와 V1
- [20 — Level 1 Top Core Term Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-20-level-1-core/b1-1-20-000-index.md)
  - Top Core 28개를 `010 ~ 280` 개별 용어 파일로 학습, V2~V3
- [20 — Level 1 Summary](./vocabulary/b1-1-system-monitoring-automation/b1-1-20-level-1-core.md)
  - 전체 Level 1 용어와 관계를 한 페이지에서 보는 요약
- [30 — Level 2 Execution](./vocabulary/b1-1-system-monitoring-automation/b1-1-30-level-2-execution.md)
  - Preflight → User/Group → ACL → SSH → Firewall → Agent → monitor → cron → logrotate → Evidence
- [40 — Level 3 Principles](./vocabulary/b1-1-system-monitoring-automation/b1-1-40-level-3-principles.md)
  - Linux 권한 모델, ACL, SSH/Port/Firewall, Health, cron, Log lifecycle 원리
- [50 — Level 4 Troubleshooting](./vocabulary/b1-1-system-monitoring-automation/b1-1-50-level-4-troubleshooting.md)
  - `증상 → 조회 → 계층 분리 → 최소 수정 → 재검증 → Evidence`
- [60 — Level 5 Evaluation](./vocabulary/b1-1-system-monitoring-automation/b1-1-60-level-5-evaluation.md)
  - 평가 항목과 `WHAT → WHY → HOW → PROOF` 자기 설명
- [70 — Review Pack](./vocabulary/b1-1-system-monitoring-automation/b1-1-70-review-pack.md)
  - 복습 카드, 백지 복습, Stage A~D 구두 퀴즈, V1~V5 최종 판정
- [90 — Advanced](./vocabulary/b1-1-system-monitoring-automation/b1-1-90-advanced.md)
  - systemd, journald, cgroups, SELinux/AppArmor, Metric, Prometheus/Grafana 선택 심화

## B1-1 학습 확장 상태

```text
00 Mission Index
  ↓
10 Level 0
  ↓
20 Level 1 Index → 28 individual Top Core term files
  ↓
30 Level 2
  ↓
40 Level 3
  ↓
50 Level 4
  ↓
60 Level 5
  ↓
70 Review
  ↓
90 Advanced (Optional)
```

현재 우선순위:

```text
B1-1 Level 0 개별 용어 구조화
→ B1-1 Level 2 개별 실행 용어 구조화
→ Level 3~5 관계/진단/평가 정교화
→ B1-2 동일 구조 확장
```

**Visual Learning은 별도 Backlog로 이동했으며, 이미지가 없어도 위 작업을 계속 진행한다.**

## 자기 설명 기준

- 핵심 용어를 한 문장으로 정의
- 1분 설명
- 3~5분 구조 설명
- 백지에서 흐름도 그리기
- 오류 상황에서 확인 순서 말하기

## 원칙

완벽하게 공부한 뒤 만드는 것이 아니라, 먼저 작동하는 결과를 확보하고 그 결과를 이용해 깊게 학습한다.
