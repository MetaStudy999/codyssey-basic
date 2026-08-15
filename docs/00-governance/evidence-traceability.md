# Evidence & Traceability Model

Evaluation은 독립 성장 Domain이 아니라 모든 Mission과 Project에 적용되는 **Governance + Traceability 계약**으로 관리한다.

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
5. 개선 아이디어가 CORE Mission PASS를 지연시키면 관련 Domain의 EXPLORE/ADVANCED Backlog로 이동한다.
6. `PASS`는 공식 Mission 충족 판정이며 `MASTERED`나 Growth Stage 승격과 동일하지 않다.

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

## 평가 답변 권장 구조

```text
개념
→ 현재 구현의 실제 예
→ 왜 그렇게 설계했는가
→ Test/Runtime/Evidence로 어떻게 확인했는가
```

평가 준비 문서나 모범답안의 존재 자체는 실제 설명 능력의 Evidence가 아니다. 필요한 구두 설명·환경 검증은 Human Runtime에서 확인한다.
