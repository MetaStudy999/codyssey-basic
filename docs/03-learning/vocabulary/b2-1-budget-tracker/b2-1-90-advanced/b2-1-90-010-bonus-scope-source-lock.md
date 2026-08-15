---
mission: B2-1
stage: advanced
order: 10
unit: Bonus Scope and Source Lock
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# Bonus Scope & Source Lock

## 목적

B2-1의 **필수 요구**와 **선택 Bonus**를 섞지 않는다.

## 원본 Bonus

```text
Backup
Recurring Transactions
Console Table Formatting
Stronger Atomic Rewrite
```

이 4개는 선택 과제다. 수행하지 않아도 원본 필수 기능의 충족 여부와는 별개로 판정해야 한다.

## Source 경계

- Backup의 명시 요구: `backup` 실행 시 timestamp 포함 백업 파일 생성.
- 반복 내역의 명시 요구: 반복 규칙 등록 + 특정 월 자동 생성.
- 표 정렬의 명시 요구: 외부 라이브러리 없이 문자열 정렬로 가독성 개선.
- 원자성 강화의 명시 요구: 임시 파일에 쓰고 rename/교체.

복구 drill, idempotency key, Unicode 폭 계산, 디렉터리 `fsync` 등은 학습상 유용하지만 원본의 고정 요구로 추가하지 않는다.

## Advanced Gate

- [ ] 필수 요구와 Bonus를 구분해 말할 수 있다.
- [ ] `SOURCE_LINKED_BONUS`와 `SUPPLEMENTAL_ADVANCED`를 구분한다.
- [ ] 구조화 완료를 Bonus 실행 완료로 표시하지 않는다.

[← Advanced Index](./b2-1-90-000-index.md) · [Advanced Index](./b2-1-90-000-index.md) · [020 →](./b2-1-90-020-backup-snapshot.md)
