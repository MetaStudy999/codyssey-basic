# B2-1 Budget Tracker Learning Index

**한국어 미션명:** 나만의 용돈 기입장 프로그램 만들기  
**분야:** Python과 Git 심화  
**학습시간:** 60시간

> 이 디렉터리는 B2-1 학습 자료의 공식 진입점이다. 기존 `b2-1.md`는 전체 Vocabulary Summary와 기존 URL 호환용으로 유지한다.

## Source Lock

1. **원본 `b2-1-mission.pdf` 9쪽을 authoritative Source로 사용한다.** 현재 학습 구조화 작업에서 9쪽 전체를 렌더링해 시각 검토했다.
2. `b2-1-mission.md`는 PDF 문장과 요구를 Markdown으로 옮긴 보조 Source다. 표·하이픈 등 변환 과정의 서식 손실 가능성이 있으므로 충돌 시 PDF를 우선한다.
3. `b2-1-evaluation.md`는 현재 Mission Work Packet에서 `VALID` 평가 기준으로 등록되어 있으며 Mission과 충돌 없음으로 기록되어 있다.
4. 현재 구현 저장소는 `MetaStudy999/codyssey-basic-b2-1-budget-tracker`다. 구현 사실은 학습 연결에 사용하되 Mission이 선택지를 허용한 부분을 원본 고정 요구로 바꾸지 않는다.

### Source 내 표기 충돌

원본 PDF 3쪽의 실행 요구는 Linux long option을 `--help`, `--limit`, `--from`, `--to`, `--month`처럼 **두 개의 하이픈(`--`)** 으로 명시한다. 반면 PDF 7쪽 제약사항의 CLI 규칙에는 한 개의 하이픈처럼 보이는 표기가 있다. 따라서 이 학습 자료에서는 이 차이를 숨기지 않고 **Source 표기 불일치**로 기록하며, 실제 명령 계약은 PDF 3쪽의 구체 예시와 현재 `argparse` 구현의 `--` long option을 기준으로 학습한다.

## 현재 구현 선택 — Mission 고정값과 구분

현재 구현은 다음을 선택했다.

```text
Application store: JSONL
Interchange: CSV
Data files: transactions.jsonl / categories.jsonl / budgets.jsonl
Default data dir: ./data, override: --data-dir
Initial categories: 자동 생성
update: option-based
safe rewrite: temp file + os.replace()
malformed import: 전체 검증 후 전체 반영, 오류 시 rollback
cross-cutting error boundary: @cli_guard
```

이 선택 중 JSONL, 기본 카테고리 자동 생성, option-based update는 Mission이 허용한 선택지의 **현재 구현 결정**이지 모든 정답에 강제되는 유일한 방식은 아니다.

## 학습 순서

| 순서 | 단계 | 목적 | 상태 |
|---:|---|---|---|
| 00 | 현재 Index / Source Lock | Source·선택지·구현 경계 고정 | ✅ |
| 10 | [Level 0 — Prerequisite](./b2-1-10-level-0-prerequisite/b2-1-10-000-index.md) | 선수 용어 45개, V1 | ✅ |
| 20 | [Level 1 — Top Core](./b2-1-20-level-1-core/b2-1-20-000-index.md) | 핵심 개념 40개, V2~V3 | ✅ |
| 30 | [Level 2 — Execution](./b2-1-30-level-2-execution/b2-1-30-000-index.md) | CLI·저장·CRUD·검색·요약·입출력 12개 실행 단위, V4 | ✅ |
| 40 | [Level 3 — Principles](./b2-1-40-level-3-principles/b2-1-40-000-index.md) | Persistence·Generator·Layer·Atomicity·Integrity 등 12개 WHY/HOW 단위 | ✅ |
| 50 | [Level 4 — Troubleshooting](./b2-1-50-level-4-troubleshooting/b2-1-50-000-index.md) | 입력·파일·ID·category·CSV·atomic rewrite·error exit 12개 장애 진단 단위 | ✅ |
| 60 | [Level 5 — Evaluation](./b2-1-60-level-5-evaluation/b2-1-60-000-index.md) | 공식 평가 4개 영역을 12개 자기설명 단위로 구조화, V5 | ✅ |
| 70 | Review | 통합 회상 | NEXT |
| 90 | Advanced | 원본 Bonus 선택 심화 | 이후 |

## Mission 핵심

```text
CLI 입력
→ Transaction 모델
→ Validation
→ File-based persistence
→ CRUD / Search / Summary / Budget / Category
→ Import / Export
→ Generator streaming
→ Decorator / Type Hint / Module separation
→ Error handling + non-zero exit
→ Evidence + Explanation
```

## Level 1 핵심 연결

```text
Transaction
→ Data Model / dataclass
→ Validation
→ Persistent File Storage
→ CRUD / Search / Summary
→ Generator / yield / Streaming
→ Decorator / Type Contract
→ Model / Repository / Service / CLI
→ Data Integrity / File Atomicity / Exception Handling
```

## Level 2 실행 연결

```text
--help / --data-dir
→ 3-file initialization
→ add + validation + persistence
→ list/search + generator
→ update/delete + atomic rewrite
→ category integrity
→ budget/summary
→ CSV export/import rollback
→ error non-zero exit
→ full tests + evidence
→ V4 Gate
```

## Level 3 원리 연결

```text
Model Invariant
→ Persistence / Data Lifecycle
→ JSONL vs CSV Role Separation
→ Generator / yield / Lazy Evaluation
→ Streaming vs Materialization
→ Layered Responsibility
→ File Atomicity
→ Referential Integrity
→ Decorator / Cross-cutting Concern
→ Type Contract
→ Import All-or-Nothing Safety
→ WHY/HOW Gate
```

## Level 4 장애 진단 연결

```text
Invalid Input
→ Persistent File Corruption / Path-Permission
→ Missing ID / Category Integrity
→ Search Empty
→ CSV Export / Import-Rollback
→ Atomic Rewrite
→ Error Exit / Evidence
→ Troubleshooting Gate
```

공통 진단은 `Symptom → Observe → Layer → Hypothesis → Smallest Fix → Reverify → Recovery → Evidence`를 따른다. 현재 구현의 generator·atomic rewrite·rollback·error code 동작은 실제 코드와 테스트를 근거로 하되, 구조 문서가 개인 실습 완료를 대신하지 않는다.

## Level 5 평가 설명 연결

```text
Functions + Persistence
→ Exception / Exit Contract
→ Module / Class Responsibility
→ Safe Rewrite + Integrity
→ Generator / Streaming
→ Decorator / Cross-cutting Concern
→ Type Hint / Type Contract
→ JSONL / CSV Trade-offs
→ 100k Scalability
→ CSV Import Trust Policy
→ V5 Gate
```

공식 평가 문항의 4개 영역을 `WHAT → WHY → HOW → PROOF → LIMIT / ENVIRONMENT → FOLLOW-UP`으로 설명한다. 기존 18/18 테스트 Evidence는 구현 근거로 사용하되 개인 평가 준비 완료나 Mission PASS와 동일하게 취급하지 않는다.

## 상태 경계

```text
EVALUATION STRUCTURE READY
≠ PERSONAL EVALUATION READY
≠ PERSONAL MASTERED
≠ RUNTIME REVERIFIED BY LEARNER
≠ MISSION PASS
```

## Visual Learning

Visual Learning은 **DEFERRED**다.

## 다음 작업

`Review — Mission Map → 핵심 기능/구조 회상 → V1~V5 혼합 회수 → Troubleshooting Scenario → Evidence Mapping → 1분/3~5분 설명 → LEARNING READY 판정으로 통합`

[← B1-2 Advanced](../b1-2-linux-process-resource-troubleshooting/b1-2-90-advanced/b1-2-90-000-index.md) · [전체 Vocabulary](../README.md) · [Level 5 →](./b2-1-60-level-5-evaluation/b2-1-60-000-index.md)
