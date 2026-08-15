# Detailed Audit — Overview / Templates / Root Support Files

대상:

- `docs/01-overview/README.md`
- `templates/`
- Root support files that are not already covered by the Progress/Automation audit

---

# 1. `docs/01-overview`

현재 Overview는 다음을 설명한다.

- 전체 과정 구조
- B1-1~B7-2 순차 통합 원칙
- FAST TRACK → LEARNING TRACK
- 실행, 장애분석, 테스트, 배포, 설명, 협업, 증빙까지의 목표

## Decision

`01-overview`: **MERGE into `01-master-map` and retire old folder after link migration**

내용은 삭제하지 않는다.

V3 Target:

```text
01-master-map/README.md
01-master-map/growth-map.md
01-master-map/repository-map.md
```

기존 Overview의 단순 과정 소개는 새 Master Map Index의 입문 섹션으로 흡수한다.

---

# 2. `templates/`

현재 Template 자산:

```text
evidence.md
learning.md
mission-chat-start.md
mission-handoff.md
mission-plan.md
mission-result.yaml
mission-work-packet.md
parallel-wave.yaml
requirements.md
traceability.md
```

## Decision

Folder: **KEEP**

현재 Template들은 Mission Workcell과 Evidence/Traceability 계약을 지원하므로 V3에서도 핵심 자산이다.

| Template | Decision | V3 Role |
|---|---|---|
| `evidence.md` | KEEP + REVIEW | Mission/Project Evidence 공통 기반 |
| `learning.md` | KEEP + REVIEW | Mission Learning 기록 |
| `mission-chat-start.md` | KEEP | Workcell Launcher 지원 |
| `mission-handoff.md` | KEEP | 사람용 통합 Handoff |
| `mission-plan.md` | KEEP + MERGE REVIEW | Work Packet과 역할 중복 여부 점검 |
| `mission-result.yaml` | KEEP | 기계 판독용 Mission 결과 계약 |
| `mission-work-packet.md` | KEEP | G1 이후 실행 계약 |
| `parallel-wave.yaml` | KEEP | 병렬 Workcell Wave Ledger |
| `requirements.md` | KEEP | Requirement 추적 |
| `traceability.md` | KEEP | Source→Requirement→Evidence 연결 |

## Future Templates — JIT Only

향후 필요성이 확인되면 다음 Template을 추가할 수 있다.

```text
activity.md
project.md
experiment.md
adr.md
opportunity.yaml
research.md
portfolio-case-study.md
```

그러나 해당 Domain이 ACTIVE가 되기 전에 빈 Template을 대량 생성하지 않는다.

---

# 3. CHANGELOG

`CHANGELOG.md`: **KEEP**

V3 Cutover 시 다음을 기록한다.

- Growth OS V3 도입
- Repository Map 변경
- Source of Truth 변경/추가
- Deprecated Path
- Migration Compatibility

---

# 4. Root README / AGENTS

이미 V3 rebuild branch에서 다음을 재작성했다.

- `README.md`: V3 사용자 진입점
- `AGENTS.md`: V3 Agent/Governance 실행 계약

## Decision

둘 다 **V3 CANONICAL ENTRYPOINT**로 유지한다.

README는 사람이 읽는 시스템 지도, AGENTS는 Agent가 따라야 할 운영 계약이다.

---

# 5. `.github/` / `scripts/` / `site/`

세 영역은 `audit-progress-automation.md`의 판정을 따른다.

- 기존 Mission Sync: KEEP
- GitHub Pages: KEEP
- Manual Refresh + 5분 Cooldown: KEEP
- Dashboard Information Architecture: V3로 REWRITE/EXPAND
- hard-coded Dependency: 향후 Config/Data Source로 이동

---

# Audit Result

- `01-overview`: **MERGE → 01-master-map**
- `templates`: **KEEP**
- Root README/AGENTS: **V3 canonical entrypoints**
- CHANGELOG: **KEEP + V3 Cutover record**
- 새로운 Domain Template: **Just-in-Time 생성**

이로써 V3의 주요 Root/Docs/Config/Automation 영역에 대한 1차 상세 구조 Audit이 완료되었다. 이후 단계는 Target 구조를 실제로 만들고 콘텐츠를 안전하게 이관하는 **Physical Migration**이다.
