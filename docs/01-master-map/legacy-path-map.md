# Legacy Path → V3 Target Map

이 문서는 V3 Cutover 전 Old Path 제거 순서와 대체 위치를 명확히 하기 위한 Migration Reference다.

| Legacy Path | V3 Target | Migration | Old Path 제거 시점 |
|---|---|---|---|
| `docs/01-overview` | `docs/01-master-map` | MERGE | Master Map 링크 검증 후 |
| `docs/02-domains` | `docs/02-missions` | REWRITE/MERGE | 15개 Mission Summary 검증 후 |
| `docs/03-progress` | `docs/01-master-map/current-state.md` + Dashboard | LEGACY COMPATIBILITY | V3 자동화가 완전 대체한 뒤 |
| `docs/04-learning` | `docs/03-learning` | KEEP + STAGED MIGRATION | Vocabulary 링크/자동화 검증 후 |
| `docs/05-architecture` | `01-master-map` / `02-missions` / `05-projects` | SPLIT/MERGE | Dependency/Architecture 링크 검증 후 |
| `docs/06-evaluation` | `00-governance/evidence-traceability.md` + Mission | MERGE | Evaluation Traceability 검증 후 |
| `docs/07-portfolio` | `docs/11-portfolio` | REWRITE/MERGE | Case Study/Evidence 링크 검증 후 |
| `docs/08-resources` | `docs/03-learning/resources` + `config/resources.yaml` | MERGE | Resource Registry 검증 후 |
| `docs/09-opportunities` | `docs/06-opportunities` + `config/opportunities.yaml` | MERGE | Opportunity V3 검증 후 |
| `docs/10-professional-growth` | 관련 V3 Domain + Growth Routing | SPLIT | Domain별 흡수 완료 후 |
| `docs/11-advanced` | 관련 V3 Domain + `growth_stage: ADVANCED` | SPLIT | Advanced Backlog Routing 완료 후 |

## 핵심 원칙

Old Path를 단순 Rename하지 않는다.

```text
Old Content
   ↓
KEEP / MERGE / REWRITE / ARCHIVE / DROP
   ↓
V3 Domain에 의미 기준으로 배치
   ↓
Link / Automation / Page 검증
   ↓
Old Path 제거
```

## 현재 제거 금지

다음은 아직 Legacy Compatibility 역할이 있으므로 즉시 삭제하지 않는다.

- `docs/03-progress`
- `docs/04-learning`
- `docs/09-opportunities`
- `docs/10-professional-growth`
- `docs/11-advanced`

## 우선 제거 후보

새 Target의 내용이 충분하고 링크 검증이 끝난 경우 아래부터 순차 정리한다.

1. `docs/09-opportunities`
2. `docs/10-professional-growth`
3. `docs/11-advanced`
4. `docs/05-architecture`
5. `docs/06-evaluation`
6. `docs/07-portfolio`
7. `docs/08-resources`
8. `docs/01-overview`
9. `docs/02-domains`

`docs/04-learning`과 `docs/03-progress`는 가장 마지막에 다룬다. 두 영역은 대규모 Vocabulary와 기존 자동화 의존성이 있어 회귀 위험이 가장 높다.
