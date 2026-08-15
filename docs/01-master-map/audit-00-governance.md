# Detailed Audit — docs/00-governance

V3 전환을 위한 `docs/00-governance` 상세 판정이다.

## 결론

`00-governance`는 **대부분 보존 가치가 높은 핵심 자산**이다. 폴더 자체를 폐기하지 않는다. 다만 V1 분류(`08-resources / 09-opportunities / 10-professional-growth / 11-advanced`)를 직접 참조하는 부분과 V3 Growth/Status/Priority 정책을 모르는 부분은 재작성한다.

## File / Group Decisions

| Current | Decision | Action |
|---|---|---|
| `README.md` | REWRITE | V3 Governance Index로 재작성. Growth/Status/Priority/Repository Policy 링크 추가, 과거 폴더 분류 규칙 제거 |
| `source-discovery-fallback-protocol.md` | KEEP | 공식 Source 해석 안전장치로 유지. V3 구조와 직접 충돌 없음 |
| `source-registry.md` | KEEP + REVIEW | Source Registry 역할 유지. Mission Source와 일반 Resource Registry를 구분하는 문장 보완 |
| `parallel-mission-execution.md` | KEEP + REVIEW | 병렬 Workcell/직렬 통합 원칙 유지. Active Wave 경로와 V3 Control Tower 용어만 정렬 |
| `multi-agent-mission-engineering.md` | KEEP + REVIEW | Agent/Harness 운영 자산으로 보존. 제품명 중심 규칙보다 역할/검증 책임 중심으로 정리 검토 |
| `work-packets/README.md` | KEEP | Mission Starter Packet Index 유지 |
| `work-packets/b1-1.md ~ b7-2.md` | KEEP + SOURCE RECHECK | 15개 Starter Packet은 보존하되 실제 Mission/Evaluation Source와의 최종 일치 여부는 각 Workcell G1에서 검증 |
| `workcell-prompts/README.md` | KEEP | Launcher/Prompt Index 유지 |
| `workcell-prompts/b1-1.md ~ b7-2.md` | KEEP + REVIEW | V3 AGENTS/Growth 정책을 상위 Governance로 상속하도록 정렬 |

## V3 Governance Index

`00-governance`의 권장 최종 역할:

```text
00-governance/
├── README.md
├── growth-model.md
├── status-model.md
├── priority-model.md
├── repository-policy.md
├── source-discovery-fallback-protocol.md
├── source-registry.md
├── multi-agent-mission-engineering.md
├── parallel-mission-execution.md
├── work-packets/
└── workcell-prompts/
```

별도 `workcell-standard.md`는 기존 `parallel-mission-execution.md`, Work Packet/Prompt 문서와 중복 여부를 먼저 확인한 뒤 필요할 때만 만든다.

## Deprecated References to Remove

V3에서는 다음 식의 분류 규칙을 Governance에서 제거한다.

```text
학습자료 → 08-resources
대외활동 → 09-opportunities
전문가 역량 → 10-professional-growth
고도화 기술 → 11-advanced
```

대신 다음 원칙으로 통일한다.

```text
Domain = 무엇에 관한 것인가
Growth Stage = 어느 수준인가
Status = 현재 진행 상태
Priority = 수행 중요도
```

예:

```text
Open Source PR
Domain: Open Source
growth_stage: ADVANCED
status: ACTIVE
priority: RECOMMENDED
```

## Important Compatibility Rule

기존 Workcell은 `config/missions.yaml`, G1~G8, Work Packet/Handoff를 사용한다. V3 전환 중 이 계약을 깨지 않는다.

따라서 Governance Migration은:

1. 문서 용어 정렬
2. 링크 정렬
3. Growth Policy 추가
4. 자동화/Workcell 회귀 검증

순서로 진행한다.

## Audit Result

- Governance Folder: **KEEP**
- 기존 핵심 프로토콜: **KEEP**
- V1 경로/분류 표현: **REWRITE**
- Mission Work Packet/Prompt 자산: **KEEP + 각 Mission Source 재검증**
- 대규모 삭제 필요: **없음**
