---
mission: B2-1
stage: principles
order: 70
unit: File Atomicity
gate: WHY-HOW
visual_learning: DEFERRED
---
# 070. File Atomicity — 안전한 파일 교체

**한 줄 설명:** 기존 파일을 직접 덮어쓰는 대신 새 임시 파일을 완성한 뒤 교체하면 중간 실패로 기존 파일이 반쯤 써진 상태가 될 위험을 줄일 수 있다.

## 현재 구현

`DataPaths._write_jsonl_atomic()`은 같은 디렉터리에 임시 파일을 만들고 모든 JSONL 행을 쓴 뒤 `flush()`, `os.fsync()`, `os.replace()` 순으로 대상 파일을 교체한다. 예외가 나면 남은 temp 파일 삭제를 시도한다.

```text
old.jsonl 유지
→ temp 생성
→ 전체 새 내용 write
→ flush/fsync
→ os.replace(temp, old)
```

## 왜 필요한가

update/delete는 기존 레코드 일부만 물리적으로 고치는 방식이 아니라 전체 결과를 다시 작성한다. 직접 대상 파일을 비우고 쓰다가 실패하면 기존 정상 데이터도 잃을 수 있다.

## 경계

이 패턴은 단일 파일 rewrite 안전성을 높이지만, 여러 파일을 하나의 ACID 트랜잭션으로 묶거나 모든 OS/하드웨어 장애를 완전히 해결한다는 뜻은 아니다.

## WHY/HOW Gate

`직접 덮어쓰기`와 `temp → replace`의 실패 시나리오를 비교한다.

[← 이전](./b2-1-40-060-layered-responsibility.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-080-referential-integrity.md)
