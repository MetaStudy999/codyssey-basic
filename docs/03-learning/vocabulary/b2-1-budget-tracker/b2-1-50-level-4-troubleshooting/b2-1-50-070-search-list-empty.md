---
mission: B2-1
stage: level-4-troubleshooting
order: 70
unit: Search or List Unexpected Empty
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 070. Search/List Unexpected Empty

## 증상
거래가 있다고 생각했는데 `list` 또는 `search`가 `데이터 없음`을 출력한다.

## 관찰
`--data-dir`, `--limit`, 기간, category, type, `--q`, tag 조건을 하나씩 확인한다.

## 실패 층·가설
현재 search는 모든 지정 조건을 순차 적용한다. 조건 하나가 맞지 않아도 해당 거래는 제외된다. 시작일이 종료일보다 늦으면 별도 오류다.

## 최소 수정
필터를 모두 제거한 `list`부터 확인하고, 조건을 하나씩 다시 추가해 결과가 사라지는 지점을 찾는다.

## 재검증
원하는 거래가 포함되는 최소 조건 조합으로 다시 검색한다.

## Before/After Evidence
각 단계의 명령과 결과 개수를 기록한다.

## Troubleshooting Gate
`검색 실패`와 `검색 결과 0건`을 구분할 수 있는가?

[← 이전](./b2-1-50-060-category-integrity.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-080-csv-export-failure.md)
