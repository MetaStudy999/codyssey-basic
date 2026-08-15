# Evidence & Traceability Model

기존 `docs/06-evaluation`의 핵심 역할을 V3 Governance에 흡수한다.

## 기본 Traceability Chain

```text
Official Source
  ↓
Requirement
  ↓
Implementation
  ↓
Test
  ↓
Review
  ↓
Runtime
  ↓
Evidence
  ↓
PASS
```

## 핵심 원칙

1. 일반적인 Best Practice를 공식 요구사항처럼 추가하지 않는다.
2. 실제 실행이 필요한 항목은 문서만으로 PASS하지 않는다.
3. 평가문항, 코드, 테스트, Runtime, Evidence가 서로 모순되지 않아야 한다.
4. 공식 Source가 부족하면 Source Gap을 기록하고 추정 내용을 PASS 근거로 사용하지 않는다.
5. 개선 아이디어가 CORE Mission PASS를 지연시키면 EXPLORE/ADVANCED Backlog로 이동한다.

## 대표 Repository와 Mission Repository 역할

### Mission Repository

- Requirement ID
- 구현 위치
- Test
- Runtime Evidence
- 평가 답변
- Troubleshooting

등 세부 추적성을 관리한다.

### Control Tower

- Mission 단위 상태
- G1~G8 Gate
- Growth Stage
- Skill/Activity/Project 연결
- Portfolio/External Result 연결

을 요약한다.

## Growth Evidence

Mission PASS 이후에는 다른 종류의 Evidence도 기록한다.

- EXPLORE: 활동 참여, 비교 기록, 선택 근거
- ADVANCED: ADR, Experiment, Benchmark, Security/Performance 개선
- PRO: Real User, Production, OSS Contribution, Research/Industry Result
- EXPERT: Trade-off Decision, Leadership, New Method, Cross-project Impact

Mission Evidence와 Growth Evidence를 구분하되 Project Lineage에서 연결한다.
