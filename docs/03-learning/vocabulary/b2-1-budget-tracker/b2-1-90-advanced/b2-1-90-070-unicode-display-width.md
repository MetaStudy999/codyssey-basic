---
mission: B2-1
stage: advanced
order: 70
unit: Unicode Display Width
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# Unicode Display Width

## 목적

한글과 ASCII가 섞인 콘솔 표에서 `len()`만으로 계산한 폭과 실제 터미널 표시 폭이 다를 수 있음을 이해한다.

## 왜 Supplemental인가

원본 Bonus는 문자열 정렬만 요구한다. **Unicode 표시 폭을 정밀하게 맞추는 것은 추가 심화**다.

## 문제

```text
food      10000
식비      15000
```

문자 수와 화면 셀 폭이 항상 같다고 가정하면 terminal/font에 따라 열이 어긋날 수 있다.

## 표준 라이브러리 범위

`unicodedata.east_asian_width()`를 이용해 Wide/Fullwidth 문자를 더 넓게 취급하는 보정 함수를 만들어 볼 수 있다. 다만 combining character, emoji, terminal별 렌더링까지 완벽히 해결하는 보편 해법은 아니다.

## 경계

외부 라이브러리 도입은 원본의 `표준 라이브러리만 사용` 제약과 충돌하므로 필수/Bonus 구현에 임의로 추가하지 않는다.

## Advanced Gate

`문자열 길이 ≠ 실제 terminal display width`가 될 수 있는 이유를 설명한다.

[← 060](./b2-1-90-060-console-table-formatter.md) · [Advanced Index](./b2-1-90-000-index.md) · [080 →](./b2-1-90-080-atomic-rewrite-deepening.md)
