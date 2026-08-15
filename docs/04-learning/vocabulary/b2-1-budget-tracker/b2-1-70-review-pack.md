# B2-1 Integrated Review Full Pack

이 문서는 B2-1 Level 0~5를 한 번에 복습할 때 사용하는 전체 Review Pack이다. 새 지식을 추가하기보다 **회상 → 연결 → 진단 → Evidence → 설명**을 반복한다.

## 1. Mission Map

자료를 가리고 아래 흐름을 백지에서 재현한다.

```text
CLI
→ Transaction Model / Validation
→ Repository / Persistent Files
→ Service / Business Rules
→ CRUD / Search / Summary / Category / Budget
→ Generator Streaming
→ CSV Import / Export
→ Atomicity / Referential Integrity
→ Decorator / Error Boundary / non-zero Exit
→ Troubleshooting
→ Evidence
→ Evaluation
```

## 2. Source 경계

```text
Mission / Evaluation Requirement
≠ Current Implementation Choice
≠ Existing Repository Evidence
≠ Personal PASS
```

현재 구현의 JSONL, `os.replace()`, rollback import, `@cli_guard`는 구현 선택이다. 기존 18/18 테스트는 저장소 Evidence이며 개인 재실행을 대신하지 않는다.

## 3. V1~V5 혼합 회상

- V1: persistence, generator, decorator, type hint, atomicity, integrity를 알아본다.
- V2: 각 용어를 한 문장으로 설명한다.
- V3: `Model → Repository → Service → CLI`와 데이터 흐름 관계를 설명한다.
- V4: add/list/search/update/delete/category/budget/import/export를 직접 찾아 실행·검증한다.
- V5: `WHAT → WHY → HOW → PROOF → LIMIT / ENVIRONMENT → FOLLOW-UP`으로 설명한다.

## 4. 공식 평가 4영역

현재 평가 자료의 범위는 다음이다.

1. 기능 및 예외 처리
2. 모듈 및 클래스 설계
3. 제너레이터·데코레이터·타입 힌트
4. 저장 포맷 및 확장성

각 영역마다 최소 2개의 코드 위치 또는 테스트/Evidence를 연결한다.

## 5. Troubleshooting

```text
Symptom
→ Observe
→ Layer
→ Hypothesis
→ Smallest Fix
→ Reverify
→ Recovery
→ Evidence
```

연습 장애: invalid input, file corruption, path/permission, missing ID, category integrity, unexpected empty search, CSV export, CSV import/rollback, atomic rewrite, error exit/evidence.

## 6. 1분 설명

다섯 문장으로 제한한다.

1. 무엇을 만들었는가.
2. 데이터가 어떻게 영속되는가.
3. 구조를 왜 나눴는가.
4. 안전성과 오류 처리를 어떻게 확보했는가.
5. 어떤 Evidence와 한계가 있는가.

## 7. 5분 백지 복원

기능 → 구조 → 원리 → 장애 → 평가 → Evidence 순서로 한 장에 그린다.

## 8. 최종 판정

```text
Mission Map
+ Source Boundary
+ Data Flow
+ V1~V5
+ Troubleshooting
+ Evidence Mapping
+ Oral Explanation
+ Blank Reconstruction
→ LEARNING READY
```

`LEARNING READY`는 개인 학습 준비도일 뿐 `RUNTIME VERIFIED`, `EVALUATION PASS`, `MISSION PASS`와 동일하지 않다.

[Review Index](./b2-1-70-review/b2-1-70-000-index.md) · [Mission Index](./b2-1-00-index.md)
