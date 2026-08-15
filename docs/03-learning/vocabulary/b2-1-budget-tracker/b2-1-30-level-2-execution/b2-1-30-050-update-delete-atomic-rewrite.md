---
mission: B2-1
stage: level-2-execution
order: 50
unit: Update Delete and Atomic Rewrite
gate: V4
visual_learning: DEFERRED
---

# Update/Delete & Atomic Rewrite

## 실행 목표

ID 기반 update/delete를 실행하고, 현재 구현이 JSONL 파일을 어떻게 안전하게 다시 쓰는지 확인한다.

## Source / 현재 구현

Mission은 `delete --id <id>`를 요구하고 update는 option 방식 또는 대화형 방식 중 하나를 문서에 고정하도록 허용한다. 파일 기반 update/delete에는 전체 재작성, 임시 파일, 원자적 교체 같은 안정성 고려가 필요하다.

현재 구현은 **option-based update**를 선택했다.

```bash
python -m budget_app --data-dir /tmp/b2-1-learn update --id <실제-ID> --amount 13000 --memo "수정됨"
python -m budget_app --data-dir /tmp/b2-1-learn delete --id <실제-ID>
```

현재 `storage.py`의 안전 재작성 흐름:

```text
기존 거래 읽기
→ 수정/삭제된 새 목록 구성
→ tempfile.mkstemp()
→ UTF-8 쓰기
→ flush + os.fsync()
→ os.replace(tmp, target)
→ 실패 시 임시 파일 정리
```

## 검증

- update 후 같은 ID의 값만 바뀌었는가?
- delete 후 해당 ID가 사라졌는가?
- 존재하지 않는 ID는 성공으로 처리되지 않는가?
- `_write_jsonl_atomic()`에서 temp file과 `os.replace()` 위치를 찾았는가?

주의: 현재 구현의 add/update/delete는 정렬된 JSONL을 유지하기 위해 필요한 경우 전체 거래 목록을 재작성한다. `generator 조회`와 `rewrite 수정`은 서로 다른 경로다.

현재 저장소의 `test_update_delete_and_missing_id`가 자동 검증한다.

## V4 Gate

실제 ID 한 건을 update하고 결과를 확인한 뒤, 테스트용 거래 한 건을 delete한다. 그 과정과 `_write_jsonl_atomic()`의 원자 교체를 연결해서 설명한다.

[← 040](./b2-1-30-040-search-filter-streaming.md) · [Level 2 Index](./b2-1-30-000-index.md) · [060 →](./b2-1-30-060-category-integrity.md)
