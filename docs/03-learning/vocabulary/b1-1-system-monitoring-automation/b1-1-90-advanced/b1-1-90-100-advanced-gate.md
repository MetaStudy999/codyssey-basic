---
mission: B1-1
stage: advanced
order: 100
unit: Advanced Gate
source_scope: OPTIONAL_INTEGRATION
visual_learning: DEFERRED
---

# B1-1 Advanced Gate

## 목적

Advanced를 많이 했는지가 아니라 **필수 / Bonus / 추가 심화를 구분하고 설명할 수 있는지**를 확인한다.

## 1. 필수와 선택 구분

다음 세 칸을 분리해서 말할 수 있어야 한다.

```text
필수 B1-1
→ monitor.sh / cron / logrotate / SSH / ACL / Agent runtime

원본 Bonus
→ report.sh 통계 / 오래된 로그 압축·Archive·삭제

추가 Advanced
→ systemd / journald / cgroups / MAC / Metric / Prometheus / Grafana
```

## 2. 통합 설명 질문

- `monitor.log`가 `report.sh` 통계로 어떻게 이어지는가?
- Log Rotation과 Retention/Archive는 무엇이 다른가?
- cron과 systemd timer를 왜 구분해야 하는가?
- Permission/ACL이 맞는데도 접근이 막힐 수 있는 추가 계층은 무엇인가?
- B1-1 Resource Log를 Metric/Time-Series로 확장하면 무엇이 좋아지는가?
- Prometheus와 Grafana의 역할 차이는 무엇인가?

## 3. STOP RULE 재확인

필수 B1-1 Runtime/Evidence가 불충분하다면 Advanced 완료를 이유로 미션 PASS를 주장하지 않는다.

## 최종 판정

- [ ] SOURCE-LINKED BONUS와 SUPPLEMENTAL ADVANCED를 구분한다.
- [ ] 최소 한 개 Advanced 주제를 B1-1 필수 구조와 연결해 설명한다.
- [ ] 추가 기술이 원본 요구를 대체하지 않는다는 점을 설명한다.
- [ ] 실제 수행하지 않은 Advanced 프로젝트는 완료로 표시하지 않는다.

판정 문구:

```text
ADVANCED STRUCTURE READY
```

이 판정은 `MISSION PASS` 또는 `RUNTIME VERIFIED`와 동일하지 않다.

[← Mini Projects](./b1-1-90-090-advanced-mini-projects.md) · [Index](./b1-1-90-000-index.md) · [B1-2 →](../../b1-2-linux-process-resource-troubleshooting/b1-2-00-index.md)
