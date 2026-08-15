---
mission: B2-1
stage: level-4-troubleshooting
order: 100
unit: Atomic Rewrite Failure
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 100. Atomic Rewrite Failure

## 증상
update/delete/category/budget 저장 중 파일 쓰기 또는 교체 단계에서 실패한다.

## 관찰
stderr의 OS 오류, 대상 디렉터리 권한/공간/경로, 원본 파일 상태, 임시 파일 흔적을 확인한다.

## 실패 층·가설
현재 `_write_jsonl_atomic()`은 같은 디렉터리에 temp 파일을 만들고 `flush → fsync → os.replace()`로 교체하며 예외 시 temp 삭제를 시도한다. 이 구조는 직접 덮어쓰기보다 손상 위험을 줄이지만 모든 외부 장애를 제거한다고 과장하지 않는다.

## 최소 수정
원본을 보존한 채 실제 원인(path/permission/storage)을 먼저 해결한다. 실패 직후 원본을 임의로 지우지 않는다.

## 재검증
동일 update/delete를 다시 수행하고 파일이 정상 JSONL이며 대상 변화만 반영됐는지 확인한다.

## Before/After Evidence
원본 상태, 오류, 수정 후 파일 및 조회 결과를 남긴다.

## Troubleshooting Gate
`원자적 교체 설계`와 `절대 실패하지 않음`이 다른 개념임을 설명할 수 있는가?

[← 이전](./b2-1-50-090-csv-import-rollback.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-110-error-exit-evidence.md)
