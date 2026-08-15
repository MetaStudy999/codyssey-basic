---
mission: B1-1
stage: advanced
order: 50
unit: Control Groups
source_scope: SUPPLEMENTAL_ADVANCED
visual_learning: DEFERRED
---

# cgroups — Process Resource Control

## 한 줄 설명

Control Groups(cgroups)는 프로세스 그룹의 CPU·Memory 등 자원 사용을 관찰하고 제한하는 Linux 기능이다.

## B1-1과의 연결

B1-1 필수는 CPU/MEM/DISK 상태를 수집하고 Warning을 기록하는 수준이다. cgroups는 그 다음 단계에서 자원 제한과 격리를 이해하기 위한 심화 개념이다.

## 핵심 관계

```text
Process
→ cgroup에 소속
→ CPU / Memory 등 resource accounting
→ 필요 시 limit / isolation
```

## 어디로 이어지는가

- container resource management
- service isolation
- resource limit
- multi-tenant server 운영

## 주의

`monitor.sh`에서 자원을 관찰하는 것과 cgroups로 자원을 제한하는 것은 다른 작업이다.

## Advanced Gate

- [ ] Monitoring과 Resource Limit을 구분한다.
- [ ] cgroups가 Process 단위보다 큰 그룹 정책을 적용할 수 있음을 설명한다.
- [ ] B1-1 필수 기능을 cgroups 구현으로 바꾸지 않는다.

[← journald](./b1-1-90-040-journald-syslog.md) · [Index](./b1-1-90-000-index.md) · [다음: MAC Security →](./b1-1-90-060-selinux-apparmor.md)
