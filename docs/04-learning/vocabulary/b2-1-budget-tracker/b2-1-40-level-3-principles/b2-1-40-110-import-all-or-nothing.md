---
mission: B2-1
stage: principles
order: 110
unit: Import All-or-Nothing Safety
gate: WHY-HOW
visual_learning: DEFERRED
---
# 110. Import All-or-Nothing Safety

**한 줄 설명:** CSV를 한 줄씩 즉시 저장하지 않고 전체 행을 먼저 검증하면 뒤쪽의 깨진 행 때문에 일부만 반영되는 상태를 피할 수 있다.

## 현재 구현

`import_csv()`는 CSV 헤더와 각 행을 읽어 `pending`에 정상 `Transaction`을 모은다. 모든 행이 검증된 뒤에만 `add_many(pending)`을 호출한다. 중간 행에서 오류가 나면 기존 거래 파일은 변경하지 않는다.

```text
CSV open
→ header validation
→ row 2 validate
→ row 3 validate
→ ...
→ 모두 성공?
   ├─ yes: add_many
   └─ no: 전체 취소 + 오류 행/힌트
```

## 왜 사용자 신뢰와 연결되는가

100행 import 중 73행만 반영되고 실패하면 사용자는 어디까지 저장됐는지 다시 확인해야 한다. 전체 취소 정책은 결과를 예측 가능하게 만든다.

## 트레이드오프

이 방식은 pending 전체를 메모리에 들고 있으므로 매우 큰 파일에서는 비용이 커질 수 있다. 원본 평가 문항도 부분 성공/롤백/리포트 정책을 설명하도록 요구하므로, 중요한 것은 선택한 정책과 근거를 명확히 하는 것이다.

## WHY/HOW Gate

`부분 성공`과 `전체 rollback`의 장단점을 비교하고 현재 구현이 후자를 택한 이유를 설명한다.

[← 이전](./b2-1-40-100-type-contract.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-120-principle-gate.md)
