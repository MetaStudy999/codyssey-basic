---
mission: B2-1
stage: advanced
order: 100
unit: Optional Bonus Integration Gate
source_scope: MIXED_OPTIONAL
visual_learning: DEFERRED
---

# Optional Bonus Integration Gate

## 목적

B2-1 Bonus를 **선택 과제**로 수행하고 실제 Evidence가 있는 항목만 완료로 표시한다.

## Bonus Matrix

| Bonus | Source-linked 최소 결과 | Evidence 예 |
|---|---|---|
| Backup | timestamp 포함 backup 파일 | command output + 파일 목록 |
| Recurring | 규칙 등록 + 특정 월 자동 생성 | rule + 생성 전/후 거래 |
| Table | 외부 패키지 없이 정렬된 출력 | Before/After terminal output |
| Atomic Rewrite | temp 작성 후 교체 | 코드 위치 + 실패/정상 테스트 |

## Integration 질문

1. 어느 Bonus를 실제 수행했는가?
2. 필수 미션 기능을 깨뜨리지 않았는가?
3. 정상/오류 동작 Evidence가 있는가?
4. 추가 심화를 원본 요구처럼 표현하지 않았는가?
5. 현재 구현 Evidence와 학습자 개인 실행을 구분했는가?

## 상태 판정

```text
ADVANCED STRUCTURE READY
→ 문서 구조만 준비됨

BONUS TASK EXECUTED
→ 선택한 Bonus를 직접 구현/실행함

BONUS EVIDENCE VERIFIED
→ 출력/파일/테스트로 확인함

MISSION PASS
→ 별도 공식 필수 평가 판정
```

## Advanced Gate

선택한 Bonus에 대해 `WHAT → WHY → HOW → PROOF → LIMIT`로 설명할 수 있을 때만 개인 완료로 표시한다.

[← 090](./b2-1-90-090-durability-boundary.md) · [Advanced Index](./b2-1-90-000-index.md) · [Mission Index](../b2-1-00-index.md)
