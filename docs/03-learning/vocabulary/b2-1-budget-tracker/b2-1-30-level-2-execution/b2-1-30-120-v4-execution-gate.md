---
mission: B2-1
stage: level-2-execution
order: 120
unit: V4 Execution Gate
gate: V4
visual_learning: DEFERRED
---

# V4 Execution Gate

## 목표

Level 2에서 본 명령을 읽기만 한 것이 아니라, **격리된 데이터로 직접 실행하고 결과·코드 위치·Evidence를 연결할 수 있는지** 최종 점검한다.

## 백지 실행 순서

아래 흐름을 문서를 보지 않고 복원한다.

```text
--help / --data-dir
→ 3-file init
→ add + validation + ID
→ list + limit + generator
→ search + filters
→ update/delete + atomic rewrite
→ category integrity
→ budget/summary
→ export schema
→ import rollback
→ error non-zero
→ full tests / evidence
```

## V4 체크

- [ ] 새 `--data-dir`에서 3개 영속 파일을 만들었다.
- [ ] 정상 Transaction을 add하고 재실행 후 persistence를 확인했다.
- [ ] list의 최신순/limit와 generator 위치를 확인했다.
- [ ] search 조건을 2개 이상 조합했다.
- [ ] update/delete 후 JSONL 결과를 확인했다.
- [ ] temp file + `os.replace()` atomic rewrite 위치를 찾았다.
- [ ] 사용 중 category 삭제 방지 흐름을 재현했다.
- [ ] budget/summary를 손으로 검산했다.
- [ ] UTF-8 CSV export의 header/schema를 확인했다.
- [ ] 깨진 CSV import rollback을 재현했다.
- [ ] 오류에서 non-zero exit + no traceback + hint를 확인했다.
- [ ] 전체 test suite를 실행하고 Evidence와 비교했다.

## 설명 Gate

다음 4문장을 자기 말로 설명한다.

1. 왜 list/search는 generator를 사용하고 update/delete는 파일 재작성이 필요한가?
2. 왜 category 삭제 전에 Transaction 참조를 확인해야 하는가?
3. 왜 import는 현재 구현에서 모든 행을 먼저 검증한 뒤 commit하는가?
4. 왜 `LEVEL 2 STRUCTURE READY`와 `내가 직접 V4를 통과함`은 다른 상태인가?

## 판정

```text
12개 실행 흐름 직접 수행 + 검증 가능
→ V4 READY

일부 명령만 읽거나 기존 Evidence만 확인
→ REVIEW REQUIRED
```

Level 2 완료는 다음 Level 3의 WHY/HOW 원리 학습으로 넘어갈 준비 상태다.

[← 110](./b2-1-30-110-full-test-evidence.md) · [Level 2 Index](./b2-1-30-000-index.md) · [Mission Index](../b2-1-00-index.md)
