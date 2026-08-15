---
mission: B2-1
stage: review
order: 80
unit: Troubleshooting Scenarios
gate: TROUBLESHOOTING-RETRIEVAL
visual_learning: DEFERRED
---

# 080 — Troubleshooting Scenarios

## 복습 목표

증상을 보자마자 수정하지 않고 실패 층을 구분해 진단한다.

## 공통 알고리즘 회상

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

## 시나리오

자료를 보지 않고 각 항목의 첫 관찰 2개와 최소 수정 1개를 적는다.

1. `add`에 잘못된 날짜를 넣었더니 실패한다.
2. `transactions.jsonl`의 한 행이 손상되어 조회가 실패한다.
3. `--data-dir`에 쓸 수 없다.
4. 존재하지 않는 ID를 삭제한다.
5. 사용 중 category를 삭제한다.
6. 데이터가 있는데 search 결과가 0건이다.
7. export에 필요한 filter가 빠졌다.
8. CSV schema/encoding/행 데이터가 잘못되었다.
9. update/delete 재작성 중 파일 교체가 실패한다.
10. 오류인데 exit code가 0이거나 traceback이 노출된다.

## 통합 Gate

**PASS:** 최소 8개 시나리오에서 `Observe → Layer → Smallest Fix → Reverify`를 말할 수 있다.

[← 070](./b2-1-70-070-csv-import-export-recall.md) · [Review Index](./b2-1-70-000-index.md) · [090 →](./b2-1-70-090-evidence-evaluation-mapping.md)
