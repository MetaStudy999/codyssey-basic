# Codyssey Basic 개별 용어 파일 표준

## 1. 목적

Codyssey Basic 학습 자료를 `Mission → Level → Term / Execution Unit / Principle Unit / Troubleshooting Unit / Evaluation Unit` 단위로 탐색할 수 있도록 디렉터리·파일명·메타데이터·링크 규칙을 정의한다.

이 표준의 목적은 파일 수를 늘리는 것이 아니라 다음을 가능하게 하는 것이다.

- 한 파일에서 하나의 학습 초점에 집중
- GitHub/CLI 정렬만으로 학습 순서 파악
- 선수·후행 관계 연결
- `NEW → REVIEW → APPLY → DEEPEN → INTEGRATE` 추적
- 향후 Knowledge Graph, 자동 퀴즈, 학습 대시보드로 확장

## 2. 구조

```text
vocabulary/
└── {mission-number}-{english-mission-slug}/
    ├── {mission-number}-00-index.md
    ├── {mission-number}-10-level-0-prerequisite/
    ├── {mission-number}-20-level-1-core/
    ├── {mission-number}-30-level-2-execution/
    ├── {mission-number}-40-level-3-principles/
    ├── {mission-number}-50-level-4-troubleshooting/
    ├── {mission-number}-60-level-5-evaluation/
    ├── {mission-number}-70-review-pack.md
    └── {mission-number}-90-advanced.md
```

각 Level 디렉터리의 `000-index`가 학습 진입점이다. 내부 항목은 `010, 020, 030 ...`처럼 10 단위로 배치하고, 중간 삽입이 필요하면 `015`, `025`처럼 기존 파일명을 바꾸지 않고 추가한다.

## 3. 파일명 규칙

```text
Level 0·1: {mission}-{level}-{order}-{term-slug}.md
Level 2:   {mission}-30-{order}-{execution-unit-slug}.md
Level 3:   {mission}-40-{order}-{principle-unit-slug}.md
Level 4:   {mission}-50-{order}-{troubleshooting-unit-slug}.md
Level 5:   {mission}-60-{order}-{evaluation-unit-slug}.md
```

예:

```text
b1-1-10-010-linux.md
b1-1-20-070-acl.md
b1-1-30-030-permissions-acl.md
b1-1-40-050-ssh-listen-firewall.md
b1-1-50-020-permission-denied.md
b1-1-60-020-ssh-firewall-evaluation.md
```

원칙:

- 파일명은 항상 미션 번호로 시작한다.
- slug는 짧고 안정적인 영어 kebab-case를 사용한다.
- 제목은 한국어 중심으로 하고 핵심 영어 원문을 병기한다.

## 4. Level별 분할 원칙

### Level 0 — Prerequisite

**한 파일 = 한 선수 용어**, Gate는 V1이다.

### Level 1 — Core

**한 파일 = 한 핵심 용어**, Gate는 V2 의미 + V3 관계다.

### Level 2 — Execution

**한 파일 = 하나의 독립적으로 수행·검증 가능한 실행 학습 단위**다.

분리 기준:

- 하나의 명확한 실행 목표가 있는가?
- 입력/명령/설정과 검증 결과가 한 흐름으로 이어지는가?
- 독립적으로 V4를 판정할 수 있는가?

### Level 3 — Principles

**한 파일 = 하나의 구조·원리 질문**을 기본으로 한다.

분리 기준:

- 하나의 WHY/HOW 질문으로 설명 가능한가?
- Level 2의 명령을 재나열하지 않고 구조·메커니즘을 설명하는가?
- 원본 요구와 현재 구현 관찰을 구분하는가?

### Level 4 — Troubleshooting

**한 파일 = 하나의 독립 장애 진단 흐름**을 기본으로 한다.

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

분리 기준:

- 하나의 명확한 실패 증상 또는 장애 축으로 시작하는가?
- 수정 전에 상태 조회와 실패 층 분리가 가능한가?
- 최소 수정 뒤 동일 검증으로 정상 복귀를 증명할 수 있는가?
- Before/After Evidence를 남길 수 있는가?

### Level 5 — Evaluation

**한 파일 = 하나의 독립 평가 설명 단위**를 기본으로 한다.

기본 답변 구조:

```text
WHAT
→ WHY
→ HOW
→ PROOF
→ LIMIT / ENVIRONMENT
→ FOLLOW-UP
```

분리 기준:

- 하나의 평가 주제나 예상 질문군을 독립적으로 설명할 수 있는가?
- 구현 사실, 선택 이유, 구현 위치, 실제 검증을 연결하는가?
- 원본 필수 요구와 현재 구현 선택을 구분하는가?
- 실제 Runtime Evidence가 없는 항목을 PASS로 과장하지 않는가?
- 1분 답변과 3~5분 확장 설명으로 이어질 수 있는가?

## 5. 최소 구조

### Level 0·1 용어 파일

```text
Front Matter
H1
한 줄 설명
현재 미션에서의 위치
핵심 관계
초미니 확인
Gate
이전 / Index / 다음
```

### Level 2 실행 단위

```text
Front Matter
H1
실행 목표
원본/현재 구현 위치
핵심 명령·설정
검증
V4 Gate
이전 / Index / 다음
```

### Level 3 원리 단위

```text
Front Matter
H1
한 줄 설명
구조/위치
핵심 관계·메커니즘
왜 필요한가
WHY/HOW Gate
이전 / Index / 다음
```

### Level 4 장애 진단 단위

```text
Front Matter
H1
증상
관찰
실패 층·가설
최소 수정
재검증
Before/After Evidence
Troubleshooting Gate
이전 / Index / 다음
```

### Level 5 평가 설명 단위

```text
Front Matter
H1
핵심 질문
WHAT
WHY
HOW
PROOF
LIMIT / ENVIRONMENT
예상 꼬리질문
V5 Gate
이전 / Index / 다음
```

설명·비유·연습은 학습 보조 자료이며 Mission 요구사항으로 승격하지 않는다. 원본이 고정한 숫자·경로·조건은 그대로 보존한다.

## 6. Front Matter 예

```yaml
---
mission: B1-1
level: 5
order: 20
unit: SSH and Firewall Evaluation
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---
```

근거 없이 `priority`, `knowledge_level`, `prerequisites`, `reuse`를 채우지 않는다.

## 7. 중복·재등장 정책

같은 용어가 여러 미션에 등장해도 내용을 그대로 복사하지 않는다.

```text
B1-1 Process → NEW: 의미와 기본 관계
B1-2 Process → REVIEW/DEEPEN: 관찰·원인 분석·장애 진단
B6-1 Process → APPLY: 배포 서버에서 서비스 상태 검증
```

같은 미션 안에서는 깊이를 분리한다.

```text
V1 인지
→ V2 의미
→ V3 관계
→ V4 실제 적용
→ WHY/HOW 구조·원리
→ Troubleshooting 장애 진단
→ V5 평가 설명
```

## 8. 링크 규칙

각 파일 하단에는 최소 다음 링크를 둔다.

```text
← 이전 · Level Index · 다음 →
```

과거 URL을 참조할 수 있는 기존 요약 파일은 즉시 삭제하지 않고 호환 진입점 또는 전체 요약으로 유지할 수 있다.

## 9. Source of Truth

1. 원본 Mission PDF / Mission Markdown
2. 공식 Evaluation
3. 실제 구현 코드·설정·명령·파일 구조
4. 검증·트러블슈팅·평가 자료
5. 학습용 설명·비유·연습

Source가 지원하지 않는 내용을 원본 요구사항처럼 작성하지 않는다.

## 10. 시각 학습 정책

최종적으로 다음 구성을 목표로 한다.

```text
Cover
→ One-line
→ Where
→ Key Relation
→ Mini Check
→ Gate
→ One-page Summary
```

현재 이미지 생성 및 GitHub 반영 작업은 **DEFERRED**다. 시각 자료가 없어도 텍스트, 실습, 원리, 트러블슈팅, 평가, Gate 작업을 계속 진행한다. 상세 기준은 [Visual Learning Backlog](./visual-learning-backlog.md)를 따른다.

## 11. 검증 체크리스트

- [ ] 디렉터리와 파일이 번호순으로 정렬되는가?
- [ ] `000-index`에서 모든 내부 파일로 이동할 수 있는가?
- [ ] 모든 파일에 이전/Index/다음 링크가 있는가?
- [ ] 원본 고정값·제약이 변형되지 않았는가?
- [ ] 학습 보조 설명과 원본 요구가 구분되는가?
- [ ] Level 2는 실행·검증 단위인가?
- [ ] Level 3는 WHY/HOW 원리 단위인가?
- [ ] Level 4는 장애 진단·재검증·Evidence 흐름인가?
- [ ] Level 5는 WHAT/WHY/HOW/PROOF/LIMIT 구조인가?
- [ ] Runtime Evidence 없이 PASS를 주장하지 않는가?
- [ ] Visual Learning이 비시각 학습 작업을 막지 않는가?

## 12. 적용 상태와 다음 순서

```text
B1-1 Level 0 개별 용어 구조화   ✅ 29 terms + 000-index
B1-1 Level 1 개별 용어 구조화   ✅ 28 Top Core terms + 000-index
B1-1 Level 2 실행 단위 구조화   ✅ 12 execution units + 000-index
B1-1 Level 3 원리 단위 구조화   ✅ 12 principle units + 000-index
B1-1 Level 4 장애 진단 구조화   ✅ 12 troubleshooting units + 000-index
B1-1 Level 5 평가 설명 구조화   ✅ 12 evaluation units + 000-index
Visual Learning                  DEFERRED
B1-1 Review 통합 점검           NEXT
B1-2 동일 구조 적용             이후
```

만화 작업은 별도 재개 결정 전까지 현재 Critical Path에서 제외한다.
