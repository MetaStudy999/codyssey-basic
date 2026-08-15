# 03. Learning

V3 Learning은 **Macro Growth Stage**와 **Micro Learning Level**을 분리한다.

## Macro Growth

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

장기적인 개발자 성장 위치를 나타낸다.

## Micro Learning

`Prerequisite → Core → Execution → Principles → Troubleshooting → Evaluation → Review → Optional Deepening`

하나의 Mission 또는 지식 단위를 어떻게 배우고 검증할지 나타낸다.

- [Macro Growth vs Micro Learning](./macro-micro-model.md)
- [Vocabulary Index](./vocabulary-index.md)
- [Micro Learning Package 상세](./micro-learning-packages.md)
- [Master Vocabulary](./basic-master-vocabulary.md)
- [Vocabulary Learning Plan](./vocabulary-learning-plan.md)
- [Term File Standard](./term-file-standard.md)
- [Vocabulary Quality Audit](./vocabulary-quality-audit.md)
- [Visual Learning Backlog](./visual-learning-backlog.md)
- [Learning / Research Resources](./resources/README.md)

## 중요한 구분

- Mission `PASS` ≠ Learning `MASTERED`
- Learning `MASTERED` ≠ Growth Stage `ADVANCED`
- 기존 `90-advanced`는 V3 Macro `ADVANCED`가 아니라 **Micro Optional Deepening**이다.
- 학습 문서의 구조화 완료와 개인 Runtime Evidence 완료를 같은 상태로 보지 않는다.

## Vocabulary Canonical Path

V3의 학습 자산 Canonical Path는 다음과 같다.

```text
docs/03-learning/
├── vocabulary/
├── basic-master-vocabulary.md
├── vocabulary-learning-plan.md
├── term-file-standard.md
├── vocabulary-quality-audit.md
├── visual-learning-backlog.md
└── micro-learning-packages.md
```

기존 Learning Compatibility 자산은 동일 Git 객체를 재사용하여 이 경로에 배치했다. 따라서 콘텐츠를 다시 작성하거나 기존 학습 이력을 초기화하지 않는다.

## Compatibility Migration

현재는 **Canonical Copy 완료 / Legacy Compatibility 유지** 단계다.

```text
Legacy Learning Path
        ↓ 동일 자산을 V3 경로에 배치
새 docs/03-learning Canonical Path
        ↓ 링크·Mission 문서·자동 검증 전환
Active Reference 0
        ↓
Legacy Learning Path 제거
```

기존 경로는 Cleanup Gate가 통과할 때까지만 유지한다. 새 문서와 신규 링크는 `docs/03-learning`을 사용한다.
