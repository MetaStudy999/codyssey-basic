---
mission: B2-1
stage: level-5-evaluation
order: 60
unit: Generator and Streaming
gate: V5
visual_learning: DEFERRED
---
# 060. Generator & Streaming

## 핵심 질문
`list/search`를 generator로 처리한 방식과 이점·한계를 어떻게 설명할 것인가?

## WHAT
Repository는 거래 파일을 한 행씩 읽어 `yield`하고, list/search는 iterator 흐름을 이용한다.

## WHY
조회 전에 모든 레코드를 메모리에 올리지 않고 필요한 만큼 순차 처리할 수 있기 때문이다.

## HOW
`iter_transactions()`가 generator를 만들고, 검색 필터는 순회하면서 조건을 적용한다. `list --limit`은 제한에 도달하면 더 읽지 않을 수 있다.

## PROOF
`test_add_list_newest_first_and_generator`, `test_search_filters_and_streams`와 구현 코드를 연결한다.

## LIMIT / ENVIRONMENT
Generator는 조회 메모리 사용을 줄이지만 O(n) 검색, 전체 재작성, summary 비용까지 없애지 않는다.

## FOLLOW-UP
인덱스, 월 파티셔닝, 데이터베이스를 도입했을 때 generator의 역할이 어떻게 달라지는지 설명한다.

## V5 Gate
Lazy Evaluation의 이점과 “전체 확장성 해결이 아니다”라는 한계를 함께 말할 수 있는가?

[← 이전](./b2-1-60-050-safe-rewrite-integrity.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-070-decorator-cross-cutting.md)
