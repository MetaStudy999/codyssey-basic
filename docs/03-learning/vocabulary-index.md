# V3 Vocabulary Index

V3 Learning의 Canonical Vocabulary Path는 `docs/03-learning/vocabulary`다. 기존 `docs/04-learning/vocabulary` 자산은 콘텐츠를 다시 작성하지 않고 동일 Git 객체를 재사용하여 새 경로에 배치했다.

## 원칙

- Macro Growth: `CORE → EXPLORE → ADVANCED → PRO → EXPERT`
- Micro Learning: `Level 0~5 → Review → Optional Deepening`
- 기존 `90-advanced`는 Micro Optional Deepening이며 V3 Macro `ADVANCED`와 같은 상태가 아니다.
- 학습 자료가 준비되었다고 Runtime/PASS가 자동 충족되는 것은 아니다.

## Mission Vocabulary 진입점

| Mission | 학습 자산 | 상태 |
|---|---|---|
| B1-1 | [System Monitoring Automation](./vocabulary/b1-1-system-monitoring-automation/b1-1-00-index.md) | Level 0~5 + Review + Optional Deepening 구조화 완료 |
| B1-2 | [Linux Process & Resource Troubleshooting](./vocabulary/b1-2-linux-process-resource-troubleshooting/b1-2-00-index.md) | Level 0~5 + Review + Optional Deepening 구조화 완료 |
| B2-1 | [Budget Tracker](./vocabulary/b2-1-budget-tracker/b2-1-00-index.md) | Level 0~5 + Review + Optional Deepening 구조화 완료 |
| B2-2 | [Git Team Collaboration](./vocabulary/b2-2.md) | 1차 Vocabulary 완료 / 구조화 진행 대상 |
| B3-1 | [Mini Redis](./vocabulary/b3-1.md) | 1차 Vocabulary 완료 |
| B3-2 | [Mini Git](./vocabulary/b3-2.md) | 1차 Vocabulary 완료 |
| B4-1 | [Portfolio](./vocabulary/b4-1.md) | 1차 Vocabulary 완료 |
| B4-2 | [React SPA](./vocabulary/b4-2.md) | 1차 Vocabulary 완료 |
| B5-1 | [Database Design](./vocabulary/b5-1.md) | 1차 Vocabulary 완료 |
| B5-2 | [FastAPI CRUD](./vocabulary/b5-2.md) | 1차 Vocabulary 완료 |
| B5-3 | [FastAPI Auth / Relations](./vocabulary/b5-3.md) | 1차 Vocabulary 완료 |
| B6-1 | [Cloud Deployment](./vocabulary/b6-1.md) | 1차 Vocabulary 완료 |
| B6-2 | [AI Git Assistant](./vocabulary/b6-2.md) | 1차 Vocabulary 완료 |
| B7-1 | [Web AI Chatbot](./vocabulary/b7-1.md) | 1차 Vocabulary 완료 |
| B7-2 | [Advanced AI Chatbot](./vocabulary/b7-2.md) | 1차 Vocabulary 완료 |

## Reference Packs

현재 완성도가 높은 Micro Learning Pack은 B1-1, B1-2, B2-1이다.

```text
Prerequisite
  ↓
Core
  ↓
Execution
  ↓
Principles
  ↓
Troubleshooting
  ↓
Evaluation
  ↓
Review
  ↓
Optional Deepening
```

이 세 Mission을 이후 Mission 학습 패키지 품질 기준으로 사용한다.

## Compatibility Cleanup Gate

현재는 새 경로가 Canonical이며 기존 `docs/04-learning`은 임시 Compatibility Layer다.

```text
새 Canonical Path 사용
   ↓
Mission/README/운영 링크 전환
   ↓
Legacy Reference Scan
   ↓
Active Reference 0
   ↓
기존 docs/04-learning 제거
```

신규 문서는 반드시 `docs/03-learning` 경로를 사용한다.

## 전체 Vocabulary

[전체 Vocabulary Index](./vocabulary/README.md)
