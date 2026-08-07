# Source Discovery & Fallback Protocol

> Mission 파일과 Evaluation/평가항목 파일의 형식·존재 여부·내용 상태가 일정하지 않아도 요구사항을 지어내지 않고 가능한 범위까지 계속 진행하기 위한 공통 Source 복구 규격이다.

## 0. 목적

각 미션을 시작할 때 파일 이름이나 확장자를 가정하지 않는다.

Mission 또는 Evaluation 자료는 다음 중 어느 상태일 수 있다.

- PDF만 존재
- Markdown만 존재
- PDF와 Markdown 모두 존재
- 파일은 있으나 비어 있음
- 제목/목차만 있고 실질 내용이 없음
- 일부 내용만 존재
- 서로 내용이 다름
- 파일이 없음
- PDF가 이미지 기반이라 텍스트 추출은 어렵지만 시각적으로는 내용이 존재

이 프로토콜의 목표는 **자료 상태를 먼저 판정한 뒤, 그 상태에 맞는 수행 모드로 전환**하는 것이다.

---

## 1. 절대 원칙

1. 파일이 존재한다고 해서 유효한 Source로 간주하지 않는다.
2. 빈 Markdown, 제목만 있는 Markdown, 0바이트 파일은 `EMPTY`로 분류한다.
3. 텍스트 추출이 안 되는 PDF를 곧바로 `EMPTY`로 판정하지 않는다. 이미지 기반 PDF일 수 있으므로 시각 확인이 필요하다.
4. 없는 요구사항을 README·코드·AI 일반지식으로 보충하여 공식 요구사항처럼 만들지 않는다.
5. 자료가 부족해도 할 수 있는 Repository Inventory, 환경 확인, 기존 코드 분석 등은 계속한다.
6. Source Gap이 해결되지 않은 상태에서 추정한 내용을 `공식 요구사항` 또는 `PASS 근거`로 사용하지 않는다.
7. 모든 Requirement에는 가능하면 Source 위치를 추적할 수 있게 한다.

핵심 규칙:

```text
존재 여부 확인
    ↓
내용 유효성 확인
    ↓
Source 상태 분류
    ↓
수행 Mode 선택
    ↓
가능한 작업 진행
    ↓
미확인 사항은 Gap으로 유지
```

---

## 2. Source of Truth 우선순위

자료가 실제로 존재하고 유효할 때 다음 우선순위를 사용한다.

1. Mission PDF
2. Mission Markdown
3. 공식 Evaluation / 평가문항
4. 직접 관련된 공식 운영자료
5. 요구사항–증빙 매핑
6. README
7. 학습 문서
8. 코드
9. 테스트
10. 보고서
11. Evidence

단, **상위 Source가 `MISSING`, `EMPTY`, `UNREADABLE`이라고 해서 하위 Source를 상위 Source의 내용으로 추정 복원하지 않는다.**

하위 자료는 해당 자료가 실제로 말하는 범위에서만 사용한다.

---

## 3. Source Discovery

G1 SOURCE를 시작하면 먼저 Repository와 현재 제공된 자료에서 후보 파일을 찾는다.

### 3.1 Mission 후보

예시 검색어:

```text
mission
미션
requirements
requirement
과제
project
term-project
```

예시 확장자:

```text
.pdf
.md
.txt
```

### 3.2 Evaluation 후보

예시 검색어:

```text
evaluation
evaluate
rubric
criteria
assessment
평가
평가항목
평가문항
검증
```

### 3.3 검색 범위

우선 다음을 확인한다.

```text
Repository root
├── docs/
├── mission/
├── missions/
├── evaluation/
├── evaluations/
├── requirements/
└── 기타 실제 존재하는 관련 디렉터리
```

필요하면 다음도 확인한다.

- 현재 프로젝트에 제공된 공식 첨부 파일
- 대표 Repository의 Source Registry
- 해당 미션 Repository의 Git history에서 이전에 존재했던 공식 Source 파일

Git history에서 발견한 삭제 파일은 자동으로 현재 공식 Source라고 간주하지 않고 `HISTORICAL`로 표시한다.

---

## 4. Source 상태 분류

각 후보 파일은 아래 상태 중 하나로 분류한다.

| 상태 | 의미 |
|---|---|
| `VALID` | 실질적인 요구/평가 내용이 확인됨 |
| `PARTIAL` | 일부 요구나 일부 페이지만 확인 가능 |
| `EMPTY` | 0바이트, 공백뿐, 제목/목차만 있고 실질 내용 없음 |
| `MISSING` | 관련 파일을 찾지 못함 |
| `UNREADABLE` | 파일은 있으나 현재 도구로 내용을 신뢰성 있게 읽지 못함 |
| `DUPLICATE` | 다른 Source와 실질 내용이 동일함 |
| `CONFLICT` | 둘 이상의 공식 Source가 서로 다른 요구를 제시함 |
| `HISTORICAL` | Git history 등 과거 기록에서만 발견됨 |
| `UNVERIFIED` | 후보이지만 공식 자료인지 확인되지 않음 |

### Markdown 유효성 예

다음은 `EMPTY`로 볼 수 있다.

```markdown
# B1-1 Mission
```

또는 TODO placeholder만 존재하는 문서.

반대로 요구사항, 조건, 제출물, 평가기준 중 하나라도 실질적인 내용이 있으면 `PARTIAL` 또는 `VALID`로 분류한다.

### PDF 유효성 예

- 텍스트가 정상적으로 읽힘 → 내용 검토 후 `VALID/PARTIAL`
- 텍스트 추출 결과가 거의 없음 → 이미지 기반 PDF 가능성을 먼저 확인
- 실제 페이지가 비어 있음 → `EMPTY`
- 파일 손상/암호화 등으로 내용을 확인할 수 없음 → `UNREADABLE`

---

## 5. Adaptive Source Mode

자료 상태에 따라 다음 수행 모드 중 하나를 선택한다.

### Mode A — FULL SOURCE

조건:

```text
Mission VALID
Evaluation VALID
```

수행:

- Mission 요구사항 추출
- Evaluation과 Requirement 매핑
- Acceptance Criteria 작성
- Evidence 계획 작성
- G1 SOURCE 완료 가능

### Mode B — MISSION-LED

조건:

```text
Mission VALID
Evaluation MISSING / EMPTY / UNREADABLE
```

수행:

- Mission에서 확인되는 요구사항을 기준으로 설계 가능
- Evaluation 부재를 `Source Gap`으로 기록
- Evaluation 내용을 추정하지 않음
- Repository Inventory, 설계, 테스트 계획 진행 가능
- 최종 PASS 전 Evaluation이 새로 제공되면 반드시 재대조

공식 Evaluation이 실제로 제공되지 않는 미션임이 확인되면 그 사실 자체를 기록하고 Mission 기준으로 진행한다.

### Mode C — EVALUATION-LED

조건:

```text
Mission MISSING / EMPTY / UNREADABLE
Evaluation VALID
```

수행:

- Evaluation이 명시하는 항목만 확정 요구로 사용
- Mission의 목적·세부 조건을 Evaluation 밖에서 만들어내지 않음
- Repository Inventory와 위험 없는 준비 작업은 진행
- Mission Source Gap을 유지
- G1 SOURCE는 원칙적으로 닫지 않고 Source 복구를 계속 시도

### Mode D — PARTIAL SOURCE

조건:

```text
Mission 또는 Evaluation이 PARTIAL
```

수행:

- 확인된 부분만 `CONFIRMED`
- 불명확한 부분은 `UNKNOWN`
- 구현에 영향을 주지 않는 작업은 진행
- UNKNOWN을 임의 요구사항으로 변환하지 않음

### Mode E — SOURCE GAP

조건:

```text
Mission MISSING/EMPTY
AND
Evaluation MISSING/EMPTY
```

수행 가능:

- Repository tree 조사
- 기존 README/코드/테스트 현황 조사
- 개발환경 확인
- 현재 구현된 기능 목록 작성
- Source 후보 및 Git history 탐색
- 질문 목록 작성

수행 금지:

- 공식 요구사항 창작
- 임의 Acceptance Criteria 확정
- G1 PASS 선언
- 미션 PASS 판정

이 경우 전체 수행 상태는 필요하면 `BLOCKED`로 둘 수 있지만, **Source와 무관한 안전한 분석 작업까지 중단하지 않는다.**

### Mode F — SOURCE CONFLICT

조건:

```text
둘 이상의 유효한 공식 Source가 서로 충돌
```

수행:

1. Source of Truth 우선순위 적용
2. 충돌 항목을 별도 표로 기록
3. 더 낮은 Source의 상충 요구를 자동 삭제하지 않고 `CONFLICT`로 보존
4. 공식 supersede/version 정보가 있으면 그것을 우선
5. 해결되지 않으면 사용자 확인 또는 운영자료 확인

---

## 6. Source Confidence

Source 상태와 별도로 신뢰도를 기록한다.

```text
HIGH      공식 Mission + Evaluation 모두 확인
MEDIUM    공식 Source 일부만 확인되지만 핵심 요구 추적 가능
LOW       부분 자료만 존재하여 미확인 범위가 큼
UNKNOWN   공식 Source를 확인하지 못함
```

신뢰도는 `PASS/FAIL`을 대신하지 않는다. 현재 판단의 근거 강도를 표시할 뿐이다.

---

## 7. Requirement Provenance

가능하면 각 요구사항을 다음처럼 관리한다.

```text
REQ-B1-1-001
Requirement : SSH 포트를 20022로 변경
Source      : mission.pdf
Location    : p.3 / SSH section
Confidence  : HIGH
Status      : CONFIRMED
```

평가항목도 동일하게 추적한다.

```text
EVAL-B1-1-004
Criterion   : 실제 SSH 접속 확인
Source      : evaluation.md
Location    : 항목 2
Status      : CONFIRMED
```

Source 위치가 확인되지 않은 내용은 `INFERRED`가 아니라 `UNKNOWN` 또는 `UNVERIFIED`로 둔다.

---

## 8. Source Inventory 기록 형식

각 미션의 Context Pack 또는 Mission Contract에 다음 메타데이터를 둘 수 있다.

```yaml
source_inventory:
  mission:
    pdf:
      path: null
      state: MISSING
    markdown:
      path: docs/mission.md
      state: EMPTY

  evaluation:
    pdf:
      path: evaluation.pdf
      state: VALID
    markdown:
      path: null
      state: MISSING

source_mode: EVALUATION_LED
source_confidence: MEDIUM
source_gaps:
  - Mission 원문을 아직 확인하지 못함
```

파일명은 미션마다 다를 수 있으므로 실제 Repository 구조를 먼저 확인한다.

---

## 9. G1 SOURCE 동적 판정

G1은 단순히 `PDF 파일이 있다`로 완료하지 않는다.

### G1 완료 조건

최소한 다음이 확인되어야 한다.

- Source 후보 탐색 완료
- 각 Source의 상태 분류 완료
- 사용 가능한 공식 Source의 요구사항 추출 완료
- Source Gap 기록 완료
- 충돌이 있으면 충돌 기록 완료
- 현재 Source Mode와 Confidence 기록 완료
- 요구사항을 임의로 보충하지 않았음

### G1을 닫지 않는 대표 사례

- Mission과 Evaluation이 모두 없음/비어 있음
- Mission 원문이 필요한데 Evaluation만으로 핵심 조건을 확정할 수 없음
- 핵심 공식 Source가 손상되어 읽을 수 없음
- 해결되지 않은 Source 충돌이 구현 방향을 바꿈

단, G1이 열려 있어도 안전한 Repository 분석 작업은 병행할 수 있다.

---

## 10. Agent Routing

Source 상태에 따라서도 Agent를 선택한다.

```text
PDF/이미지 기반 Source 판독 필요
→ 멀티모달 Source Reviewer

Markdown/PDF 내용 비교
→ Context Reviewer

Repository와 Source 매핑
→ Repository Builder/Inspector

Source 충돌
→ Independent Reviewer + ChatGPT Fusion

자료 없음
→ ChatGPT가 Source Gap 기록 및 다음 안전 작업 결정
```

제품명보다 역할 슬롯을 기준으로 한다. 현재 환경에서는 필요에 따라 Gemini, Claude, Codex, Copilot, Grok 등을 해당 슬롯에 배정할 수 있다.

---

## 11. AI가 절대 해서는 안 되는 보정

다음은 금지한다.

```text
"보통 이런 미션은 이것도 요구하므로 공식 요구사항일 것이다"
"README에 있으니 Mission 요구사항일 것이다"
"코드가 구현되어 있으니 평가항목에도 있을 것이다"
"이전 미션에서 요구했으니 이번 미션에도 요구할 것이다"
```

일반 지식이나 Best Practice가 유용하면 반드시 다음처럼 분리한다.

```text
OFFICIAL REQUIREMENT
RECOMMENDED IMPROVEMENT
ADVANCED BACKLOG
```

---

## 12. 미션 시작 표준 흐름

앞으로 B1-1~B7-2는 모두 다음 순서로 시작한다.

```text
1. Repository 확인
2. Mission/Evaluation 후보 검색
3. PDF/MD/기타 형식 식별
4. 빈 파일 여부 확인
5. 내용 유효성 확인
6. VALID/PARTIAL/EMPTY/MISSING/... 분류
7. Source Mode 선택
8. Source Gap 기록
9. Requirement Provenance 작성
10. Context Pack 생성
11. 목차/Mission Contract 확정
12. G1 판정
13. 다음 안전한 Gate/작업으로 이동
```

이 흐름으로 **PDF가 있든 Markdown만 있든, 파일이 비어 있든, 일부만 있든, 아예 없든 상태를 먼저 명시적으로 판정한 뒤 가능한 범위까지 진행한다.**
