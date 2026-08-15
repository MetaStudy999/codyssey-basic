---
mission: B2-1
stage: principles
order: 50
unit: Streaming versus Materialization
gate: WHY-HOW
visual_learning: DEFERRED
---
# 050. Streaming과 Materialization

**한 줄 설명:** Streaming은 데이터를 흐르는 대로 처리하고, Materialization은 결과를 메모리에 모아서 이후 작업에 사용한다.

## 현재 구현의 두 방식

`search`는 generator를 직접 순회하며 출력한다. `list`는 Service에서 limit까지 generator로 제한한 뒤 CLI에서 `list(...)`로 최대 제한 건수만 materialize한다. 반면 update/delete는 전체 거래를 list로 만든 뒤 새 파일을 구성한다.

```text
Streaming:       read → filter → yield → print
Materialization: read → collect list → transform/sort/rewrite
```

## 왜 둘 다 필요한가

검색은 한 건씩 판단해 바로 내보낼 수 있지만, 전체 정렬·수정·삭제 후 원자적 재작성처럼 전체 결과 집합이 필요한 작업은 materialization이 단순하고 안전한 구현이 될 수 있다.

## 확장성 관점

Streaming은 **조회 메모리**를 줄이는 데 도움되지만 전체 파일 스캔 자체를 없애지는 않는다. 데이터가 커지면 인덱스/파티셔닝/DB 같은 다른 구조가 필요할 수 있다.

## WHY/HOW Gate

B2-1의 list/search/update를 Streaming/Materialization 기준으로 분류하고 이유를 설명한다.

[← 이전](./b2-1-40-040-generator-yield-lazy-evaluation.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-060-layered-responsibility.md)
