---
mission: B1-2
stage: advanced
order: 90
unit: Trade-off and Architecture Fit
source_scope: SOURCE_LINKED_BONUS
gate: TRADEOFF-ARCHITECTURE
visual_learning: DEFERRED
---

# Trade-off & Architecture Fit

## 목적

원본 Bonus가 요구한 `기술적 장단점 + 어떤 성격의 서비스에 적합한가`를 정리한다.

## 비교 관점

| 후보 | 장점 관점 | 단점 관점 | 서비스 적합성 질문 |
|---|---|---|---|
| Round-Robin | 공평성·응답 기회 | 잦은 전환 비용 가능 | 여러 요청에 빠른 응답 기회가 중요한가? |
| FCFS | 단순성·순차 처리 | 앞 작업이 길면 뒤 작업 대기 | 순차 처리와 처리량이 더 중요한가? |
| Priority | 중요한 작업 우선 | 낮은 우선순위 대기 위험 | 긴급/중요 작업 차등이 필요한가? |

## 원본 Mission 연결

원본 PDF는 `실시간 응답이 중요한 웹 서버`와 `처리량이 중요한 배치 서버`를 예시 비교 대상으로 제시한다.

따라서 보고서에서는 다음 구조로 작성한다.

```text
추론 알고리즘
→ 기술적 장점
→ 기술적 단점
→ 응답성 / 처리량 / 공평성 관점
→ 어떤 서비스 성격에 더 적합한지
→ 이유
```

## Advanced Gate

선택한 후보 알고리즘의 장점·단점·적합 서비스 유형을 각각 한 문장 이상으로 연결하면 통과한다.

[← 080](./b1-2-90-080-priority-inference.md) · [Advanced Index](./b1-2-90-000-index.md) · [100 →](./b1-2-90-100-scheduling-inference-report.md)
