# Round 02 미션 수행·평가 표준

> 적용 범위: CODYSSEY AI 올인원 제2기 AI 도구학습 B1-1 ~ B7-2
>
> **기준 레포(Canonical Control Repository):** `MetaStudy999/codyssey-basic`
>
> 이 저장소는 미션 번호·Repository 연결, 공통 작업 방식, Round 운영, 검증·증빙·평가 준비의 **운영 기준**이다.  
> 단, 공식 미션의 번호·제목·내용·요구사항은 **제2기 현재 Mission PDF**가 최우선 기준(Source of Truth)이다.

## 1. 기준 우선순위

자료가 충돌하면 다음 순서를 적용한다.

```text
제2기 현재 Mission PDF
→ 제2기 오리엔테이션 PDF
→ 동일 주제 Mission Repository의 기존 Mission
→ 기존 Evaluation
→ training/round-01-clear 참고자료
→ 일반 지식·외부 자료
```

- 과거 파일명이나 1기 Mission ID만으로 현재 번호를 판단하지 않는다.
- 현재 Mission ID와 제목은 제2기 PDF를 기준으로 한다.
- `CURRENT-MISSION-MAP.md`는 제2기 기준을 Repository 운영에 반영하는 **운영 매핑표**이며 공식 PDF보다 우선하지 않는다.
- 번호보다 **미션 주제(Topic)** 를 이용해 기존 1기 자료와 연결한다.

## 2. Round 운영

```text
training/round-01-clear/
= 기존 1기 수행·학습·평가 참고자료

training/round-02-clear/
= 제2기 현재 Mission PDF 기준 신규 수행 공간
```

Round는 Repository 내부 **훈련 차수(Training Round)** 이며 코디세이 공식 제1기·제2기와 동일한 개념이 아니다.

Round 01은 삭제·덮어쓰기하지 않는다. Round 02는 기존 자료를 참고하되 실제 실행(Runtime Execution), 검증(Verification), 증빙(Evidence)을 새로 수행한다.

## 3. 초압축 수행 모드

2주 집중 수행이 필요한 경우 [2주 초압축 수행 계획](../training/round-02-clear/ACCELERATED-2WEEK-PLAN.md)을 함께 적용한다.

- 공식 학습시간은 변경하지 않는다.
- 내부 목표는 필수 11개 약 100시간, 선택 4개 약 50시간, 전체 15개 약 150시간이다.
- 시간 단축은 Round 01 재사용·중복 제거·최소 통과 경로 집중으로 달성한다.
- Runtime, Verification, Evidence, Secret 점검, 평가 설명은 시간 단축 대상으로 삼지 않는다.

## 4. 가장 효율적인 미션 수행 순서

모든 미션은 다음 8단계를 기본 흐름으로 사용한다.

### Gate 1 — 기준 확정
제2기 PDF → 오리엔테이션 → Repository → 기존 Mission/Evaluation → Round 01을 확인한다.

확정할 것:
- 현재 Mission ID와 제목
- 필수/선택 여부
- 공식 요구사항과 산출물
- 연결 Repository
- 기존 평가자료 존재 여부
- 과거 Mission ID

### Gate 2 — 평가항목 먼저
구현 전에 평가 대상을 먼저 정리한다.

```text
Requirement(요구사항)
→ Implementation(구현)
→ Verification(검증)
→ Evidence(증빙)
→ Evaluation Explanation(평가 설명)
```

기존 Evaluation이 현재 제2기 요구와 실질적으로 같으면 재사용한다. 충돌하는 항목은 제2기 PDF를 따른다. AI가 추가한 예상 질문은 공식 평가항목으로 표시하지 않는다.

### Gate 3 — 최소 통과 경로
공식 요구와 평가에 필요한 **최소 구현 경로(Minimum Passing Path)** 를 먼저 확정한다.

- 필수 기능 우선
- 선택 고도화·대규모 리팩터링은 CLEAR 이후
- 현재 평가와 무관한 기능 확장은 뒤로 미룬다

### Gate 4 — 필요한 개념만 학습
적시 학습(Just-In-Time Learning, JIT Learning)을 사용한다. 발표자료에서 다시 학습할 수 있도록 핵심 용어·개념·구조를 동시에 정리한다.

```text
쉬운 한 문장
→ 필요 시 비유
→ 정확한 정의
→ 이번 미션의 역할
→ 작은 예
→ 실제 적용
```

기술 용어 첫 등장 시 가능하면 `한글명(English Full Name, 약어)` 형식을 사용한다.

추가 학습 산출물:

```text
핵심 용어
→ 쉬운 한 문장
→ 정확한 정의
→ 왜 필요한가
→ 이번 미션 적용
→ 관련 Class/Method/Function
→ 어려운 개념은 4컷 만화
```

4컷 만화는 개념 설명용이며 실제 Evidence로 사용하지 않는다.

### Gate 5 — 한 단계씩 실제 수행
한 번에 하나의 의미 있는 Step만 진행한다.

```text
무엇을 하는가
→ 왜 필요한가
→ 실행 위치
→ 실행 전 확인(Preflight)
→ 복사 가능한 명령/코드
→ 옵션·코드 설명
→ 사용자가 실제 실행
→ 실제 출력 확인
→ PASS/FAIL
```

사용자의 실제 출력 없이 PASS/CLEAR를 추정하지 않는다.

### Gate 6 — 검증과 증빙을 동시에
구현 완료 후가 아니라 **검증하는 순간 Evidence도 함께 확보**한다.

Round 02 Evidence는 필요할 때 다음 아래에 저장한다.

```text
training/round-02-clear/evidence/
```

예상 출력이나 Round 01의 과거 PASS를 Round 02의 실제 Evidence로 사용하지 않는다.

### Gate 7 — 평가 설명 준비
각 평가 항목은 다음 순서로 준비한다.

```text
평가자가 확인하려는 것
→ 관련 개념
→ 내 구현 파일/함수/설정
→ 시연 방법
→ 검증 결과
→ Evidence
→ 10초 답변
→ 30초 답변
→ 1분 답변
→ 예상 추가 질문
```

답변 구조:

```text
WHAT(무엇)
→ WHY(왜)
→ HOW(어떻게)
→ VERIFY(검증)
→ LIMITATION(한계)
```

### Gate 8 — 모의평가와 최종 점검
모의평가는 한 번에 질문 하나만 한다.

```text
기본 개념
→ 기존 평가 항목
→ WHY 질문
→ 코드/명령 설명
→ 오류 상황
→ 대안 비교
→ 실제 시연
```

최종 CLEAR 준비 조건:

```text
공식 요구사항
+ 실제 구현
+ 실제 Runtime
+ Verification PASS
+ 필요한 Evidence
+ 자기 말로 평가 설명 가능
+ Secret 노출 없음
```

### Gate 9 — 발표자료 패키지
미션이 CLEAR 또는 Evaluation Ready가 되면 [Round 02 발표자료 생성 표준](ROUND-02-PRESENTATION-STANDARD.md)을 적용한다.

```text
Repository Evidence
→ OUTLINE
→ EVIDENCE-MAP
→ SCRIPT
→ Diagram / Image Asset
→ Figma Master
→ PDF/PPT Export
```

일반 미션은 12~14장 Learning & Evaluation Core Deck, B7 Term Project는 15~18장을 기본으로 한다. 발표 시간이 짧으면 슬라이드를 합칠 수 있으나 Mission Map, 용어·개념, 구조, 데이터 흐름, 코드, 정상/오류 흐름, 보안, Troubleshooting, Verification/Evidence, Evaluation 설명 정보는 유지한다. 실제 Screenshot/Evidence를 우선하며 AI 생성 이미지와 4컷 만화는 개념 설명용으로만 사용한다.

## 4.1 버전형 실행 템플릿

실제 Mission 수행 순서를 반복 개선하기 위해 다음 Versioned Template을 사용한다.

- Registry: [templates/mission-execution/README.md](../templates/mission-execution/README.md)
- Current Stable: [templates/mission-execution/CURRENT.md](../templates/mission-execution/CURRENT.md)
- Next Candidate: [templates/mission-execution/NEXT.md](../templates/mission-execution/NEXT.md)
- Changelog: [templates/mission-execution/CHANGELOG.md](../templates/mission-execution/CHANGELOG.md)
- Immutable Versions: `templates/mission-execution/versions/`

운영 원칙:

```text
현재 Stable Version
→ Active Mission 적용
→ 실제 Runtime에서 개선점 발견
→ NEXT 후보 기록
→ 다음 Mission 또는 재실행에서 검증
→ 검증된 변경만 새 Version으로 승격
→ 과거 Snapshot 보존
```

- 현재 기준을 모든 Mission에 한 번에 일괄 반영하지 않는다.
- 현재 Active Mission과 다음 Active Mission 순서로 점진 적용한다.
- 문서 버전 변경만으로 Runtime / Evidence / CLEAR 상태를 변경하지 않는다.
- 공식 Mission PDF / Evaluation은 Versioned Template보다 항상 우선한다.
- 과거 Version Snapshot은 수정하지 않는다.

## 5. Round 02 최소 문서 계약

각 Mission Repository의 `training/round-02-clear/`는 처음에는 최소한 다음만 둔다.

```text
README.md      # 현재 미션·기준·진행 방법
CHECKLIST.md   # Gate별 진행 상태
```

실제 필요할 때만 추가한다.

```text
BEGINNER-GUIDE.md
docs/
environment/
evidence/
```

빈 형식을 맞추기 위해 디렉터리와 Evidence를 미리 대량 생성하지 않는다.

## 6. 오류 처리

오류 발생 시 무조건 재설치하지 않는다.

```text
오류 확인
→ 실행 위치 확인
→ 환경 확인
→ 원인 후보
→ 확인 명령
→ 최소 수정
→ 재실행
→ 검증
→ 원인 설명
```

기존 환경을 최대한 보존한다.

## 7. 보안

Password, API Key, Token, Private Key, Secret, Cloud Credential을 Repository·Chat·Evidence에 노출하지 않는다.

예시는 `<API_KEY>`, `<TOKEN>`, `<SECRET>` 같은 Placeholder를 사용한다.

## 8. 운영 책임 분리

```text
제2기 Mission PDF
= 공식 미션 내용 기준

제2기 오리엔테이션
= 과정 구조·필수/선택·학습 목표·평가 운영 기준

MetaStudy999/codyssey-basic
= 전체 운영 기준 레포(Control Tower)

각 Mission Repository
= 구현·실행·검증·증빙·기존 평가자료 보관소

round-01-clear
= 과거 참고자료

round-02-clear
= 현재 제2기 신규 수행자료
```

## 9. 최종 원칙

> **평가 기준을 먼저 알고 → 필요한 것만 구현하고 → 한 단계씩 실제 실행하고 → 검증하면서 증빙을 같이 모으고 → 마지막에 자기 말로 설명할 수 있게 만든다.**
