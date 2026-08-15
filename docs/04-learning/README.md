# 04. Learning

## FAST TRACK
Mission 분석 → 최소 충분 설계 → 구현 → 테스트 → 리뷰 → 실제 실행 → Evidence → PASS.

## LEARNING TRACK
완성 결과물 → 개념 이해 → 구조 이해 → 명령/코드 읽기 → 직접 실행 → 일부 수정 → 오류 해결 → 자기 설명 → 복습 → 선택 심화.

## 학습 설계 문서

- [Codyssey Basic 전체 용어 인덱스](./vocabulary/README.md)
- [Codyssey Basic 미션 용어 학습 체계 기획](./vocabulary-learning-plan.md)
- [Codyssey Basic 개별 용어 파일 표준](./term-file-standard.md)
- [Visual Learning Backlog](./visual-learning-backlog.md) — 현재 **DEFERRED**
- [Codyssey Basic 전체 용어 품질 감사](./vocabulary-quality-audit.md)
- [Codyssey Basic Master Vocabulary](./basic-master-vocabulary.md)

## B1-1 — System Monitoring Automation

- [00 — B1-1 Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-00-index.md)
- [10 — Level 0 Prerequisite Term Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-10-level-0-prerequisite/b1-1-10-000-index.md) — 29개, V1
- [20 — Level 1 Top Core Term Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-20-level-1-core/b1-1-20-000-index.md) — 28개, V2~V3
- [30 — Level 2 Execution Unit Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-30-level-2-execution/b1-1-30-000-index.md) — 12개, V4
- [40 — Level 3 Principle Unit Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-40-level-3-principles/b1-1-40-000-index.md) — 12개, WHY/HOW
- [50 — Level 4 Troubleshooting Unit Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-50-level-4-troubleshooting/b1-1-50-000-index.md) — 12개
- [60 — Level 5 Evaluation Unit Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-60-level-5-evaluation/b1-1-60-000-index.md) — 12개
- [70 — Integrated Review Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-70-review/b1-1-70-000-index.md) — 12개
- [70 — Review Full Pack](./vocabulary/b1-1-system-monitoring-automation/b1-1-70-review-pack.md)
- [90 — Advanced Structured Index](./vocabulary/b1-1-system-monitoring-automation/b1-1-90-advanced/b1-1-90-000-index.md) — 10개 Optional
- [90 — Advanced Full Summary](./vocabulary/b1-1-system-monitoring-automation/b1-1-90-advanced.md) — 전체 요약/호환

B1-1 비시각 학습 패키지는 **Level 0~5 + Review + Advanced 구조화 완료** 상태다. Advanced는 원본 Bonus와 추가 심화를 분리하며 필수 PASS를 대체하지 않는다.

## B1-2 — Linux Process & Resource Troubleshooting

- [00 — B1-2 Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-00-index.md)
- [10 — Level 0 Prerequisite Term Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-10-level-0-prerequisite/b1-2-10-000-index.md) — 35개, V1 ✅
- [20 — Level 1 Top Core Term Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-20-level-1-core/b1-2-20-000-index.md) — 30개, V2~V3 ✅
- [30 — Level 2 Execution Unit Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-30-level-2-execution/b1-2-30-000-index.md) — 12개, V4 ✅
- [40 — Level 3 Principle Unit Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-40-level-3-principles/b1-2-40-000-index.md) — 12개, WHY/HOW ✅
- [50 — Level 4 Troubleshooting Unit Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-50-level-4-troubleshooting/b1-2-50-000-index.md) — 12개 ✅
- [60 — Level 5 Evaluation Unit Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-60-level-5-evaluation/b1-2-60-000-index.md) — 12개, V5 ✅
- [70 — Integrated Review Index](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-70-review/b1-2-70-000-index.md) — 12개 ✅
- [70 — Review Full Pack](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-70-review-pack.md) — 전체 요약 ✅
- [기존 B1-2 Vocabulary Summary](./vocabulary/b1-2.md) — 기존 URL 호환·전체 용어 지도

```text
B1-1 Level 0~5 + Review + Advanced ✅
        ↓
B1-2 Level 0~5 + Review ✅
        ↓
B1-2 Advanced → NEXT
```

B1-2 Review는 `RECALL → RELATE → DIAGNOSE → EVIDENCE → EXPLAIN → RETRIEVE AGAIN → LEARNING READY` 흐름으로 Level 0~5를 다시 꺼내 쓰게 한다. OOM/CPU/Deadlock의 핵심 변수·Evidence·Before&After·Troubleshooting·V5 자기 설명을 통합하고, `b1-2-evaluation.md`는 official provenance 미확인 provisional practice rubric으로만 유지한다.

## 자기 설명 기준

- 핵심 용어를 한 문장으로 정의
- 1분 설명
- 3~5분 구조 설명
- 백지에서 흐름도 그리기
- 오류 상황에서 확인 순서 말하기
- `WHAT → WHY → HOW → PROOF → LIMIT`로 평가 답변하기
- `LEARNING READY`, `TROUBLESHOOTING READY`, `EVALUATION READY`, `RUNTIME VERIFIED`, `MISSION PASS`를 구분하기
- Advanced에서는 `필수 / 원본 Bonus / 추가 심화`를 구분하기

## 원칙

완벽하게 공부한 뒤 만드는 것이 아니라, 먼저 작동하는 결과를 확보하고 그 결과를 이용해 깊게 학습한다. Visual Learning은 별도 Backlog이며 현재 Critical Path가 아니다.
