---
mission: B2-1
stage: level-5-evaluation
order: 100
unit: 100k Record Scalability
gate: V5
visual_learning: DEFERRED
---
# 100. 100k Record Scalability

## 핵심 질문
거래가 10만 건으로 늘어나면 현재 구조의 병목은 어디이며 어떻게 개선할 것인가?

## WHAT
현재 파일 기반 구조는 여러 경로에서 선형 탐색 또는 전체 파일 재작성을 수행한다.

## WHY
레코드 수가 커질수록 id 탐색, summary, update/delete, 정렬/재작성 비용이 누적되기 때문이다.

## HOW
현재 README가 지적하는 병목은 최대 id 탐색, add/update/delete/import 재작성, 월 summary의 O(n) 순회다.

## PROOF
실제 repository/service 흐름과 README의 확장성 섹션을 근거로 제시한다.

## LIMIT / ENVIRONMENT
10만이라는 숫자만으로 즉시 DB 전환을 단정하지 않는다. 데이터 크기, 명령 빈도, 동시성, 지연 요구를 함께 봐야 한다.

## FOLLOW-UP
id metadata 분리, 월 파티셔닝, append journal+compaction, database/index 도입을 단계별 대안으로 비교한다.

## V5 Gate
현재 병목 3개와 각각의 개선안 1개 이상을 비용 구조와 함께 설명할 수 있는가?

[← 이전](./b2-1-60-090-storage-format-tradeoffs.md) · [Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-110-csv-import-trust-policy.md)
