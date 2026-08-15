---
mission: B1-1
level: 4
order: 100
unit: Resource Warning and Log Growth
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Resource Warning / Log Growth

## 한 줄 설명

CPU·MEM·DISK 경고는 Agent Health 실패와 구분하고, 로그 급증은 삭제부터 하지 말고 증가 원인과 disk 영향을 먼저 확인한다.

## B1-1 경고 기준

```text
CPU > 20%  → WARNING
MEM > 10%  → WARNING
DISK > 80% → WARNING
```

## 핵심 관계

```text
Health = process + service port
Resource = 운영 위험 신호
```

경고가 나왔다고 `monitor.sh` 자체가 실패한 것은 아니며, 자원 수치가 낮다고 Agent가 정상이라는 뜻도 아니다.

## 로그 급증 대응

```text
현재 disk 사용률 확인
→ 증가 중인 로그 확인
→ 폭증 원인 확인
→ logrotate 상태 확인
→ 안전한 공간 확보
→ 원인 수정/retention 재검토
```

운영 로그 전체 삭제를 첫 조치로 사용하지 않는다.

## Gate

- [ ] Health와 Resource Warning을 구분한다.
- [ ] 로그 급증 시 원인 확인 전 전체 삭제하지 않는다.
- [ ] 단기 대응과 중기 재발 방지를 구분한다.

[← logrotate](./b1-1-50-090-logrotate-failure.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: Before/After Evidence →](./b1-1-50-110-before-after-evidence.md)
