---
mission: B2-1
stage: advanced
order: 20
unit: Timestamped Backup Snapshot
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# Timestamped Backup Snapshot

## 한 줄 설명

`backup`은 현재 영속 데이터를 **timestamp가 포함된 별도 백업 사본**으로 남겨 복구 가능성을 높이는 선택 기능이다.

## Source 연결

원본 Bonus는 `backup` 실행 시 timestamp 포함 백업 파일 생성을 요구한다.

## 설계 질문

B2-1은 최소 `transactions`, `categories`, `budgets`의 3개 영속 파일을 사용한다. 따라서 안전한 backup은 한 파일만 복사하기보다 **같은 시점의 데이터 세트**를 식별할 수 있게 만드는 편이 낫다.

예시 설계는 학습용이며 원본 고정 형식이 아니다.

```text
backup/
└── 20260815-232800/
    ├── transactions.jsonl
    ├── categories.jsonl
    └── budgets.jsonl
```

## 검증

- 원본 파일과 백업 파일의 개수/크기를 확인한다.
- timestamp가 서로 다른 두 번의 backup을 구분한다.
- backup 과정이 원본 파일을 수정하지 않는지 확인한다.

## 필수와의 경계

백업 위치, 이름 형식, 디렉터리 구조는 원본이 고정하지 않았다. 위 구조는 한 가지 안전한 예다.

## Advanced Gate

`backup → timestamped snapshot → verify → original unchanged` 흐름을 설명할 수 있다.

[← 010](./b2-1-90-010-bonus-scope-source-lock.md) · [Advanced Index](./b2-1-90-000-index.md) · [030 →](./b2-1-90-030-backup-recovery-verification.md)
