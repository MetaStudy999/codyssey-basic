---
mission: B2-1
stage: level-4-troubleshooting
order: 10
unit: Troubleshooting Algorithm
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 010. Troubleshooting Algorithm

## 증상
기능이 실패했을 때 곧바로 코드를 바꾸거나 데이터를 삭제하고 싶어진다.

## 관찰
먼저 명령, 입력값, `--data-dir`, stdout/stderr, exit code, 관련 파일 존재 여부를 기록한다.

## 실패 층·가설
```text
CLI / argparse
→ Model Validation
→ Service Rule
→ Repository / File I/O
→ CSV Boundary
→ Error Boundary
```

## 최소 수정
한 번에 한 변수만 바꾼다. 입력 문제라면 입력만, path 문제라면 path만 교정한다.

## 재검증
실패했던 **같은 명령**을 다시 실행해 정상 복귀를 확인한다.

## Before/After Evidence
명령, stderr/stdout, exit code, 관련 파일 상태를 전후로 남긴다.

## Troubleshooting Gate
문제 상황을 보고 `증상 → 관찰 → 실패 층 → 가설 → 최소 수정 → 동일 재검증`을 말할 수 있는가?

[← Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-020-invalid-transaction-input.md)
