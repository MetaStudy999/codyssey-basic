---
mission: B2-1
stage: level-2-execution
order: 110
unit: Full Test and Evidence
gate: V4
visual_learning: DEFERRED
---

# Full Test & Evidence

## 실행 목표

B2-1 전체 자동 테스트를 실행하고, 개별 기능이 어떤 Evidence 파일로 증명되는지 연결한다.

## 현재 구현의 테스트 명령

```bash
python -m unittest discover -s tests -v
```

현재 구현 저장소에 저장된 `evidence/test-results.txt`는 다음 결과를 기록한다.

```text
Ran 18 tests in 18.176s
OK
```

즉 저장된 Evidence 기준으로는 18개 테스트가 모두 통과했다. 이 값은 기존 구현의 기록이며 학습자의 새 실행 결과는 환경과 시점에 따라 달라질 수 있다.

## Evidence 지도

```text
evidence/test-results.txt
→ 기능/오류/영속성/generator/rollback 자동 테스트

evidence/cli-transcript.txt
→ add/list/search/budget/summary/export/update/error의 대표 CLI 실행

evidence/sample-export.csv
→ UTF-8 + header + fixed CSV schema

evidence/review.txt
→ 독립 review 기록

mission-result.yaml
→ 해당 구현 Workcell의 최종 gate/result 기록
```

현재 `mission-result.yaml`은 구현 Workcell의 Mission status를 `PASS`, tests를 `18/18`, G8을 PASS로 기록한다. **이 기록은 구현 저장소의 과거 검증 결과이지, 현재 학습자의 개인 숙달이나 재실행을 대신하지 않는다.**

## 검증

- 직접 실행한 test output을 저장된 Evidence와 비교한다.
- 실패가 생기면 기존 Evidence를 정답처럼 사용하지 말고 현재 실패를 우선한다.
- 테스트 이름을 Mission 요구와 연결한다.
- 수동 CLI 확인이 필요한 항목과 자동 테스트가 충분한 항목을 구분한다.

## V4 Gate

전체 테스트를 한 번 실행하고 최소 5개 테스트 이름을 해당 기능 요구와 연결해 말할 수 있다.

[← 100](./b2-1-30-100-error-exit-decorator.md) · [Level 2 Index](./b2-1-30-000-index.md) · [120 →](./b2-1-30-120-v4-execution-gate.md)
