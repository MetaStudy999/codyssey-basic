---
mission: B2-1
stage: level-4-troubleshooting
order: 110
unit: Error Exit and Evidence Failure
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 110. Error Exit & Evidence Failure

## 증상
오류는 보이는데 종료 코드가 확인되지 않거나, traceback이 노출되거나, 재현 Evidence가 부족하다.

## 관찰
stdout/stderr를 분리하고 shell exit code를 확인한다. 현재 `@cli_guard`는 예상 `BudgetError`를 사용자 오류/힌트와 non-zero code로 변환한다.

## 실패 층·가설
오류 자체와 오류 **표현 계약**을 분리한다. 평가 요구는 잘못된 입력/파일 오류에서 stack trace 없이 원인과 힌트가 나오고 종료 코드가 0이 아닌지 확인하는 것이다.

## 최소 수정
실패 명령, stderr, exit code를 한 세트로 다시 수집한다. 없는 Evidence를 추정해서 작성하지 않는다.

## 재검증
정상 입력은 0, 의도적으로 만든 대표 오류는 non-zero이며 traceback이 없는지 확인한다.

## Before/After Evidence
`command + stdout + stderr + exit code + relevant file state`를 최소 Evidence 단위로 남긴다.

## Troubleshooting Gate
기능 오류와 오류 처리 품질을 별도로 평가할 수 있는가?

[← 이전](./b2-1-50-100-atomic-rewrite-failure.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-120-troubleshooting-gate.md)
