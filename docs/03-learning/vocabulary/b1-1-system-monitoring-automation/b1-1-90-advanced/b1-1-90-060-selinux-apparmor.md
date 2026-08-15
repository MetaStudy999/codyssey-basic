---
mission: B1-1
stage: advanced
order: 60
unit: SELinux and AppArmor
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# SELinux / AppArmor — 추가 보안 계층

## 한 줄 설명

SELinux와 AppArmor는 기본 Unix permission/ACL 외에 추가 정책으로 접근을 제한할 수 있는 Mandatory Access Control 계층이다.

## B1-1과의 연결

B1-1에서는 먼저 User / Group / Permission / ACL을 이해한다. 그런데 권한이 맞아 보이는데도 `Permission denied`가 계속될 경우 환경에 따라 추가 보안 계층을 점검해야 할 수 있다.

## 핵심 관계

```text
Unix Permission / ACL
        +
MAC Security Policy
        ↓
최종 접근 허용/차단에 추가 영향
```

## 원칙

- 기본 권한 문제를 확인하기 전에 SELinux/AppArmor부터 원인으로 단정하지 않는다.
- 원본 미션이 필수로 요구하지 않으므로 Advanced 진단 후보로만 다룬다.

## Advanced Gate

- [ ] DAC/ACL과 MAC의 역할 차이를 대략 설명한다.
- [ ] `Permission denied`에서 여러 계층이 원인이 될 수 있음을 안다.
- [ ] B1-1 기본 권한 실습을 먼저 수행해야 하는 이유를 설명한다.

[← cgroups](./b1-1-90-050-cgroups.md) · [Index](./b1-1-90-000-index.md) · [다음: Metrics →](./b1-1-90-070-metrics-time-series.md)
