---
mission: B2-1
stage: advanced
order: 60
unit: Console Table Formatter
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# Console Table Formatter

## 한 줄 설명

외부 라이브러리 없이 Python 문자열 포맷팅만으로 list/search 결과를 열 단위로 정렬한다.

## Source 연결

원본 Bonus는 `외부 라이브러리 없이 문자열 정렬`을 사용해 콘솔 가독성을 높이는 것을 요구한다. 미션 전체 제약도 표준 라이브러리만 허용한다.

## Formatter 분리

```text
Transaction Data
→ Formatter
→ 문자열 Row
→ CLI print
```

CLI가 직접 폭 계산·문자열 조립까지 모두 담당하지 않게 분리하면 출력 정책을 테스트하기 쉽다.

## 기본 예

```python
f"{tx.id:<10} | {tx.date:<10} | {tx.type:<7} | {tx.category:<12} | {tx.amount:>10}"
```

이 코드는 개념 예시이며 현재 구현의 고정 정답이 아니다.

## 확인할 점

- 숫자는 오른쪽 정렬이 읽기 쉬운가?
- 긴 memo는 자르거나 별도 열로 둘 것인가?
- 빈 값은 어떻게 표시할 것인가?

## Advanced Gate

데이터 계산과 출력 포맷팅을 분리하고, 외부 패키지 없이 정렬할 수 있다.

[← 050](./b2-1-90-050-recurring-generation-safety.md) · [Advanced Index](./b2-1-90-000-index.md) · [070 →](./b2-1-90-070-unicode-display-width.md)
