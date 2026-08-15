---
mission: B2-1
stage: advanced
order: 80
unit: Atomic Rewrite Deepening
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# Atomic Rewrite Deepening

## Source 연결

원본 Bonus 4는 update/delete 시 `임시 파일에 쓰고 rename으로 교체`하는 저장 원자성 강화를 제시한다.

## 현재 구현 Evidence

현재 `budget_app/storage.py`의 `_write_jsonl_atomic()`은 다음 흐름을 실제 사용한다.

```text
tempfile.mkstemp
→ 임시 파일 쓰기
→ flush
→ os.fsync(file)
→ os.replace(temp, target)
→ 실패 시 temp cleanup
```

즉 현재 구현은 단순 직접 덮어쓰기보다 강한 경계를 이미 사용한다.

## 왜 필요한가

직접 target 파일을 열어 truncate한 뒤 쓰다가 중간 실패하면 원본과 새 데이터가 모두 불완전해질 수 있다. 임시 파일을 완성한 뒤 교체하면 **불완전한 새 내용이 target 이름으로 보이는 구간을 줄일 수 있다.**

## 주의

`os.replace()`가 사용되었다고 해서 모든 전원 장애 상황에서 영구 보존까지 자동 보장된다고 단정하지 않는다. Atomic name replacement와 durable persistence는 구분한다.

## Advanced Gate

현재 구현의 atomic rewrite 흐름을 코드 위치와 함께 설명하고 직접 덮어쓰기보다 안전한 이유를 말한다.

[← 070](./b2-1-90-070-unicode-display-width.md) · [Advanced Index](./b2-1-90-000-index.md) · [090 →](./b2-1-90-090-durability-boundary.md)
