---
mission: B2-1
stage: advanced
order: 90
unit: Durability Boundary
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# Durability Boundary

## 목적

`atomicity`와 `durability`를 같은 말로 취급하지 않는다.

## 현재 구현에서 확인되는 것

```text
write temp
→ flush
→ fsync(temp file)
→ os.replace()
```

이는 매우 유용한 안전 패턴이다. 그러나 파일 교체 후 디렉터리 메타데이터가 물리 저장장치에 언제 확정되는지는 OS/filesystem 환경에 따라 별도 문제다.

## Supplemental 심화

POSIX 계열에서는 매우 엄격한 power-loss durability가 필요할 때 교체 후 parent directory의 `fsync`까지 검토할 수 있다. 이 내용은 **원본 Bonus의 필수 요구가 아니며**, 플랫폼별 동작 차이 때문에 일반화해 강제하지 않는다.

## 핵심 구분

```text
Atomicity
→ 중간 상태 노출 최소화 / 교체 단위

Durability
→ 완료했다고 응답한 데이터가 장애 후에도 남는가
```

## Advanced Gate

`os.replace()`와 file `fsync()`가 왜 유용한지, 그리고 그것만으로 모든 환경의 power-loss durability를 단정하면 안 되는 이유를 설명한다.

[← 080](./b2-1-90-080-atomic-rewrite-deepening.md) · [Advanced Index](./b2-1-90-000-index.md) · [100 →](./b2-1-90-100-optional-bonus-integration-gate.md)
