---
mission: B2-1
stage: level-4-troubleshooting
order: 120
unit: Troubleshooting Gate
gate: TROUBLESHOOTING-READY-CHECK
visual_learning: DEFERRED
---
# 120. Troubleshooting Gate

## 판정 목표
다음 장애를 답을 보지 않고 진단 순서로 설명한다.

1. invalid transaction input
2. corrupted JSONL row
3. data path / permission failure
4. missing transaction ID
5. category integrity failure
6. search/list unexpected empty
7. export filter/path failure
8. CSV schema/encoding/row failure
9. import rollback verification
10. atomic rewrite / error-exit Evidence failure

## 공통 답변 틀
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

## 통과 기준
- 수정 전에 실패 층을 먼저 말한다.
- 한 번에 한 변수만 바꾼다.
- 같은 명령/검증으로 Before/After를 비교한다.
- 원본 요구와 현재 구현 선택을 구분한다.
- 기존 repository Evidence와 개인 재실행 Evidence를 구분한다.

## 상태 경계
```text
TROUBLESHOOTING STRUCTURE READY
≠ PERSONAL TROUBLESHOOTING READY
≠ EVALUATION READY
≠ MISSION PASS
```

## Troubleshooting Gate
10개 장애 축 중 최소 8개를 위 흐름으로 1~2분 안에 설명하고, 나머지도 어디서 확인할지 말할 수 있는가?

[← 이전](./b2-1-50-110-error-exit-evidence.md) · [Index](./b2-1-50-000-index.md) · [Mission Index](../b2-1-00-index.md)
