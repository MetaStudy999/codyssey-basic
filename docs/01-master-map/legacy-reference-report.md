# Legacy Cleanup Reference Report

이 문서는 V3 Cutover와 Legacy Path 삭제를 **서로 다른 작업**으로 판단하기 위한 Reference Scan 결과다.

## Scan Evidence

Workflow Run `31906491100`에서:

```bash
python scripts/scan_legacy_refs.py
```

를 실행했다.

검사 대상은 우선 Cleanup 후보인 다음 세 경로다.

- `docs/09-opportunities`
- `docs/10-professional-growth`
- `docs/11-advanced`

결과: **문자열 참조 5건**.

## 분류

### 1. `docs/09-opportunities` — 1건

`docs/06-opportunities/README.md`의 Migration 설명에서 Old Path 이름을 기록하고 있다.

판정: **INFORMATIONAL / NON-BLOCKING**

새 문서가 과거 경로에서 무엇을 흡수했는지 설명하는 Migration Evidence다. 실제 링크나 Runtime dependency가 아니다.

### 2. `docs/10-professional-growth` — 2건

- `docs/01-master-map/growth-routing.md`
  - Old Path를 V3 Domain으로 분해하는 Migration 설명
  - 판정: **INFORMATIONAL / NON-BLOCKING**
- `docs/00-governance/multi-agent-mission-engineering.md`
  - 기본 Mission 이후 개선사항을 Old Path로 보내라는 실제 운영 문장
  - 판정: **ACTIONABLE LEGACY ROUTING / CLEANUP BLOCKER**

### 3. `docs/11-advanced` — 2건

- `docs/01-master-map/growth-routing.md`
  - Migration 설명
  - 판정: **INFORMATIONAL / NON-BLOCKING**
- `docs/00-governance/multi-agent-mission-engineering.md`
  - 실제 운영 Routing
  - 판정: **ACTIONABLE LEGACY ROUTING / CLEANUP BLOCKER**

## 결론

현재 상태는 다음과 같다.

```text
V3 CUTOVER
  → Legacy Path를 그대로 Compatibility Layer로 유지하면 영향 없음
  → Reference Scan 결과 때문에 Cutover 자체를 막을 필요 없음

LEGACY 09/10/11 DELETE
  → 아직 NO
  → multi-agent-mission-engineering.md Routing 교정 후 다시 Scan 필요
```

즉 **Cutover Readiness**와 **Legacy Deletion Readiness**를 분리한다.

## Cleanup Gate

Legacy `09/10/11` 실제 삭제 전에:

1. `multi-agent-mission-engineering.md`의 Old Routing을 V3 Domain/Registry Routing으로 변경
2. Migration 설명 문서는 필요하면 Old Path 이름을 역사 정보로 유지
3. `scan_legacy_refs.py --fail-on-active`를 Cleanup 의미에 맞게 적용
4. 상대 링크 및 Browser Smoke 재검증
5. Production Pages 검증 후 최종 삭제

## Vocabulary / Progress

다음 두 Legacy 영역은 이번 Cleanup 대상이 아니다.

- `docs/03-progress`
- `docs/04-learning`

이들은 기존 Mission 자동화와 대규모 Vocabulary의 Compatibility Layer이므로 가장 마지막에 정리한다.
