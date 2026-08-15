# Legacy Cleanup Reference Report

이 문서는 Growth OS V3 Cutover 이후 Legacy Path 정리 결과와 삭제 Gate를 기록한다.

## 1. 1차 Cleanup 대상

```text
docs/09-opportunities
docs/10-professional-growth
docs/11-advanced
```

각 Legacy Directory에는 `README.md` 한 개만 남아 있었으며 내용은 이미 V3 Target에 흡수되어 있었다.

| Legacy | V3 Target |
|---|---|
| `docs/09-opportunities` | `docs/06-opportunities` + `config/opportunities.yaml` |
| `docs/10-professional-growth` | V3 Domain 분산 + Growth Stage Metadata |
| `docs/11-advanced` | Project/Research/Operations Domain + `growth_stage` Metadata |

## 2. 기존 Blocker

기존 Scan에서는 `docs/00-governance/multi-agent-mission-engineering.md`가 Mission 이후 개선을 Old Path로 보내는 실제 운영 Routing을 포함하고 있었다.

이 Routing은 Post-Cutover Cleanup에서 제거하고 다음 V3 원칙으로 교체했다.

```text
Mission 이후 개선
  ↓
Domain 분류
  ↓
Growth Stage
  ↓
Status
  ↓
Priority
  ↓
Registry / 실제 Domain 문서
```

즉 `advanced/`, `professional-growth/` 같은 성장단계형 물리 폴더로 보내지 않는다.

## 3. Scanner 강화

`scripts/scan_legacy_refs.py`는 다음을 구분한다.

### Non-blocking history/migration references

- Migration Plan
- Migration Matrix
- Legacy Path Map
- Legacy Reference Report
- Growth Routing
- Cutover Readiness
- Audit 문서
- 새 Opportunity 문서의 Migration 설명

이 문서들은 과거 경로를 **설명**하지만 Runtime/Navigation/Operational dependency가 아니다.

### Blocking active references

그 외 운영 문서, Config, Script, Site, Navigation 등이 Legacy Path를 실제 목적지로 사용하는 경우 Cleanup Blocker로 처리한다.

PR Validation은 다음을 강제한다.

```bash
python scripts/scan_legacy_refs.py --fail-on-active
```

Active Reference가 하나라도 있으면 Validation이 실패한다.

## 4. Validation Evidence

Post-Cutover Cleanup PR의 최초 강화 Gate Run `31907518480`에서 다음이 모두 PASS했다.

- Mission generated output check
- Growth generated output check
- V3 structural/link/dashboard validation
- **Active Legacy Reference Gate**
- Chromium browser smoke
- Live Mission telemetry
- Static preview artifact

이후 1차 Legacy README 3개를 Cleanup Branch에서 삭제했고, 삭제 후 동일 Validation을 다시 수행하도록 했다.

## 5. 삭제된 Compatibility Layer

Cleanup Branch에서 다음 파일을 제거했다.

```text
docs/09-opportunities/README.md
docs/10-professional-growth/README.md
docs/11-advanced/README.md
```

Git은 빈 Directory를 저장하지 않으므로 위 세 Legacy Directory도 결과적으로 제거된다.

삭제 전 내용은 Git History와 `archive/pre-growth-os-v3` Snapshot에서 추적할 수 있다.

## 6. 아직 유지하는 Legacy

이번 1차 Cleanup 대상이 아니다.

```text
docs/03-progress
docs/04-learning
```

이유:

- `docs/03-progress` — 기존 Mission Generator / Dashboard Compatibility
- `docs/04-learning` — 대규모 Vocabulary / 학습 자료와 V3 Bridge가 사용 중

이 두 영역은 **기능 대체 → Reference Scan → Browser/Runtime Regression → 별도 Cleanup PR** 순서로 마지막에 정리한다.

## 7. 현재 판정

```text
V3 MAIN CUTOVER                 COMPLETE
Old Operational Routing        FIXED
Active Legacy Ref Gate         ENFORCED
Legacy 09/10/11 Migration      COMPLETE
Legacy 09/10/11 Files          DELETED IN CLEANUP PR
Legacy 03-progress             HOLD
Legacy 04-learning             HOLD
```

1차 Cleanup의 목적은 과거 흔적을 모두 지우는 것이 아니라 **실제 운영 의존성이 제거된 Legacy만 안전하게 삭제하고, 아직 기능적 가치가 있는 Compatibility Layer는 보존하는 것**이다.
