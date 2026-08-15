# Detailed Audit — docs/04-learning

`docs/04-learning`은 V3에서 **가장 우선적으로 보호해야 할 기존 자산 중 하나**다. 현재 구조는 단순 용어집이 아니라 Mission별로 선수 용어, 핵심 용어, 실행, 원리, Troubleshooting, Evaluation, Review, 선택 심화를 연결하는 학습 시스템이다.

## 결론

- Folder: **KEEP** — `04-learning` 경로 유지
- Vocabulary Assets: **KEEP**
- Level 0~5 + Review 체계: **KEEP**
- `90-advanced`: **KEEP + TERMINOLOGY CLARIFICATION**
- Visual Learning: **DEFERRED 유지**, 실제 Critical Path가 될 때 활성화
- 미래 concepts/labs/explain 등의 물리 하위 폴더: **필요 시 JIT 생성**

V3 Growth Stage를 도입한다고 기존 Learning Level을 없애거나 1:1로 치환하지 않는다.

## 1. 현재 학습 구조의 가치

기존 학습 체계는 다음 두 Track을 분리한다.

```text
FAST TRACK
Mission 분석 → 최소 충분 설계 → 구현 → 테스트 → 리뷰 → 실제 실행 → Evidence → PASS

LEARNING TRACK
완성 결과물 → 개념 이해 → 구조 이해 → 코드/명령 읽기 → 직접 실행
→ 수정 → 오류 해결 → 자기 설명 → 복습 → 선택 심화
```

이 분리는 V3의 `Mission PASS before Overengineering` 원칙과 직접 호환된다.

## 2. 기존 Vocabulary 구조

현재 표준:

```text
vocabulary/
└── {mission}/
    ├── 00-index
    ├── 10-level-0-prerequisite/
    ├── 20-level-1-core/
    ├── 30-level-2-execution/
    ├── 40-level-3-principles/
    ├── 50-level-4-troubleshooting/
    ├── 60-level-5-evaluation/
    ├── 70-review/
    └── 90-advanced/
```

각 단계의 의미:

| Learning Level | 의미 | V3 판단 |
|---|---|---|
| Level 0 | 선수 용어 | KEEP |
| Level 1 | 핵심 용어 | KEEP |
| Level 2 | 실행 가능한 학습 단위 | KEEP |
| Level 3 | WHY/HOW 원리 | KEEP |
| Level 4 | Troubleshooting | KEEP |
| Level 5 | Evaluation 설명 | KEEP |
| Review | Retrieval + Integration | KEEP |
| Level 90 | 선택 심화/Bonus | KEEP + 명칭 관계 명확화 |

## 3. Macro Growth와 Micro Learning을 분리

V3에는 두 개의 서로 다른 성장 축이 있다.

### Macro Growth Stage

```text
CORE → EXPLORE → ADVANCED → PRO → EXPERT
```

개발자의 전체 성장 수준을 나타낸다.

### Micro Learning Level

```text
Prerequisite → Core Term → Execution → Principle
→ Troubleshooting → Evaluation → Review → Optional Deepening
```

하나의 Mission 또는 지식 단위를 **어떻게 학습할 것인가**를 나타낸다.

둘은 1:1 대응하지 않는다.

예:

```text
CORE
 ├─ Level 0
 ├─ Level 1
 ├─ Level 2
 ├─ Level 3
 ├─ Level 4
 ├─ Level 5
 └─ Review

EXPLORE
 └─ 인접 기술/활동을 넓게 경험

ADVANCED
 └─ 선택된 Level 90/Experiment/Architecture 등을 실제 심화

PRO
 └─ 실서비스/외부 기여 Evidence

EXPERT
 └─ 판단/Trade-off/Teaching/Leadership
```

Level 90을 끝냈다고 자동으로 ADVANCED가 되는 것은 아니다. 반대로 ADVANCED Project가 기존 Level 90보다 더 큰 실험/설계를 요구할 수도 있다.

## 4. `90-advanced` 명칭 처리

현재 경로와 URL을 대규모로 바꾸면 많은 내부 링크가 깨질 수 있다. 따라서 V3 Cutover 초기에는 **물리 경로를 유지**한다.

다만 문서상 의미를 다음처럼 고정한다.

```text
Level 90 Advanced
= Optional Deepening / Bonus Learning Unit
≠ V3 Macro Growth Stage ADVANCED 그 자체
```

신규 문서에서는 가능하면 제목을:

`Level 90 — Optional Deepening`

으로 표시하고 기존 파일명/경로는 호환성을 위해 유지한다.

향후 링크 안정성이 확보된 뒤 실제 rename 필요성을 재평가한다.

## 5. Source Scope 분리 유지

기존 Level 90의 다음 구분은 매우 좋은 설계이므로 그대로 유지한다.

- `SOURCE_LINKED_BONUS`
- `SUPPLEMENTAL_ADVANCED`
- `MIXED_OPTIONAL`

이 구분은 공식 Mission과 AI/보조 심화 지식을 섞지 않게 해 준다.

V3에서는 이를 Priority와 함께 사용할 수 있다.

예:

```yaml
learning_unit: optional-deepening
growth_stage: ADVANCED
priority: OPTIONAL
source_scope: SOURCE_LINKED_BONUS
```

## 6. Troubleshooting / Evaluation 구조 유지

### Troubleshooting

기존 표준:

```text
Symptom
→ Observe
→ Layer
→ Hypothesis
→ Smallest Fix
→ Reverify
→ Recovery
→ Evidence
```

이는 V3의 Debug 역량과 Failure Lab의 기본 패턴으로 확장할 수 있다.

### Evaluation

기존 표준:

```text
WHAT
→ WHY
→ HOW
→ PROOF
→ LIMIT / ENVIRONMENT
→ FOLLOW-UP
```

이는 Mission 평가뿐 아니라 Interview, Presentation, Code Review 설명에도 재사용할 수 있다.

둘 다 V3의 핵심 교육 자산으로 보존한다.

## 7. Review / Retrieval 유지

기존 Review는 새 지식 추가보다 Retrieval과 Integration에 집중한다.

V3에서도 Review의 역할을 확대한다.

```text
Recall
→ Reconstruct
→ Apply
→ Debug
→ Explain
→ Evidence Check
→ Next Stage Decision
```

Review 종료 시 다음을 구분한다.

- LEARNING READY
- TROUBLESHOOTING READY
- EVALUATION READY
- RUNTIME VERIFIED
- MISSION PASS

이 구분을 Growth Dashboard의 Evidence 판단에도 활용할 수 있다.

## 8. 기존 핵심 파일 판정

| Current | Decision | Notes |
|---|---|---|
| `README.md` | REWRITE | V3 Macro/Micro 관계와 현재 학습 진입점을 간결하게 정리 |
| `basic-master-vocabulary.md` | KEEP + REVIEW | 전체 Vocabulary 자산으로 유지 |
| `term-file-standard.md` | KEEP + V3 APPEND | 기존 파일 표준 유지, Macro Growth와의 관계 추가 |
| `vocabulary-learning-plan.md` | KEEP + REVIEW | 학습 운영계획 보존 |
| `vocabulary-quality-audit.md` | KEEP | 품질 검증 자산 |
| `visual-learning-backlog.md` | KEEP / DEFER | Critical Path가 아니면 구현 지연 |
| `vocabulary/` | KEEP | URL과 학습 자산 보호 |

## 9. 현재 학습 진행 자산 보호

현재 README 기준으로 다음 Mission은 이미 큰 학습 패키지가 구축되어 있다.

```text
B1-1  Level 0~5 + Review + Optional Deepening
B1-2  Level 0~5 + Review + Optional Deepening
B2-1  Level 0~5 + Review + Optional Deepening
B2-2  Source Lock + Level 0~1 → NEXT
```

V3 Migration에서 이 진행 이력을 초기화하거나 새 폴더 구조 때문에 다시 작성하지 않는다.

## 10. 미래 학습 확장 폴더

논리적으로는 다음 학습 영역이 필요할 수 있다.

```text
04-learning/
├── vocabulary/        # 현재 유지
├── concepts/          # 필요 시
├── labs/              # 필요 시
├── troubleshooting/   # Mission 공통 Lab이 생길 때
├── explain/           # 공통 발표/설명 훈련이 축적될 때
└── visual/            # Visual Learning 활성화 시
```

하지만 지금 빈 폴더를 전부 만들지 않는다.

Mission별 학습 자료가 기존 `vocabulary/{mission}` 구조에서 충분히 관리된다면 그 안에서 계속 진행한다.

## 11. File Explosion 방지

기존 `term-file-standard.md`가 이미 명시하듯 목표는 파일 수 증가가 아니다.

새 파일은 다음 중 하나를 만족해야 한다.

- 독립 학습 초점이 있다.
- 독립 실행/검증이 가능하다.
- 독립 Troubleshooting 흐름이 있다.
- 독립 평가 설명 단위다.
- 반복 Review 가치가 있다.

그렇지 않으면 기존 문서에 통합한다.

## 12. V3 Learning Gate

CORE Mission 학습의 최소 권장 종료 기준:

```text
용어 이해
+ 구조 이해
+ 직접 실행
+ 오류 해결
+ 자기 설명
+ Evaluation 설명
+ Evidence 연결
```

그 이후 탐색은 EXPLORE로, 선택 심화는 ADVANCED로 보낸다.

## Audit Result

`04-learning`은 **대규모 재구축 대상이 아니라 보호·정렬 대상**이다.

가장 좋은 방법은:

1. 현재 Vocabulary/Level 시스템 보존
2. V3 Macro Growth와 의미를 분리
3. `90-advanced`를 Optional Deepening으로 명확화
4. B2-2 이후 Mission 학습 패키지를 기존 표준에 따라 계속 확장
5. Visual/Concept/Lab 공통 폴더는 실제 필요가 생길 때만 생성

이다.
