# README Information Architecture Standard — README 정보 구조 표준

Codyssey Basic의 루트 `README.md`와 각 Mission `README.md`를 **입문자 우선(Beginner First)**으로 구성하기 위한 정보 구조(Information Architecture) 기준입니다.

이 표준은 [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md)의 Self-contained First 원칙을 README에 구체적으로 적용합니다.

## 1. 최우선 원칙

README를 처음 연 입문자는 1~2분 안에 다음을 알 수 있어야 합니다.

```text
1. 이 저장소는 무엇인가?
2. 나는 지금 무엇을 해야 하는가?
3. 어떤 환경에서 실행하는가?
4. 첫 명령/첫 행동은 무엇인가?
5. 현재 미션은 무엇인가?
6. 다음에 어떤 문서를 보면 되는가?
```

운영 용어를 먼저 공부해야만 시작할 수 있는 README를 만들지 않습니다.

## 2. 권장 3부 구조

루트 README는 다음 3부 구조를 우선합니다.

```text
1부 — 처음 시작하는 분
2부 — 전체 미션 지도
3부 — 상세 운영 정보
```

### 1부 — 처음 시작하는 분

첫 화면에서 다음만 우선 노출합니다.

- 저장소 목적
- 현재 미션
- 환경 확인
- 첫 실행 명령
- 정상 결과
- 지금 할 일
- 대표 Beginner Guide
- 처음 볼 문서 3개 이내

### 2부 — 전체 미션 지도

- 전체 미션 순서
- 필수/선택/Term Project 구분
- 선행 관계
- 각 미션 Repository 링크
- 각 미션 `BEGINNER-GUIDE.md` 직접 링크
- `START-CHECK.md`가 실제로 존재하고 선행 확인이 필요하면 시작 점검 링크
- 입문자가 가로 스크롤 없이 읽을 수 있는 구조

정보가 많은 미션 표는 **미션당 3행**을 우선합니다.

```text
미션
과정
시작
```

`시작` 행은 최소한 다음 두 진입점을 제공합니다.

```text
저장소(Repository)
+ ▶ 입문자 따라하기(Beginner Guide)
```

따라서 학습자가 미션 제목을 확인한 뒤 다른 문서나 검색을 거치지 않고 **한 번의 클릭으로 실제 따라하기 문서에 진입**할 수 있어야 합니다.

`START-CHECK.md`가 필요한 미션은 `시작` 행에 추가할 수 있지만, 존재하지 않는 파일 링크를 형식상 만들지 않습니다.

### 3부 — 상세 운영 정보

다음은 입문자 첫 화면 아래로 내립니다.

- Round/Phase 운영 모델
- FAST EXECUTE / FAST TRACK
- Runtime Profile 비교
- Audit 상태
- Design Freeze / JIT Design
- 환경 정책
- 문서/훈련 기준
- 고도화/미래 Round

## 3. 목차 기준

README가 길어지면 상단에 **클릭 가능한 목차**를 제공합니다.

권장 항목 수는 약 6~8개입니다.

예:

```text
1. 처음 시작하기
2. 지금 내 위치
3. 개발환경
4. 처음 볼 문서
5. 전체 미션
6. 현재 진행 상태
7. 상세 운영 정보
8. 문서·훈련 기준
```

목차는 운영자 내부 명칭보다 학습자가 찾는 질문을 기준으로 작성합니다.

## 4. Progressive Disclosure — 필요한 만큼만 먼저 보여주기

상세 운영 정보가 길면 GitHub의 `<details>`를 사용할 수 있습니다.

```html
<details>
<summary><strong>상세 운영 정보 보기</strong></summary>

상세 내용

</details>
```

입문자가 처음부터 모든 정책을 읽게 하지 않습니다.

다만 다음 정보는 접지 않습니다.

- 현재 해야 할 일
- 첫 명령
- 정상 결과
- 현재 미션
- Beginner Guide 링크
- 필수 안전 주의사항

## 5. 첫 문서 링크 제한

첫 진입 영역에서는 **최대 3개 정도의 대표 문서**만 우선 안내합니다.

권장:

```text
환경 준비
→ 다음 작업
→ 현재 Mission Beginner Guide
```

나머지 문서는 `상세 문서`, `운영 문서`, `더 알아보기` 영역으로 분리합니다.

단, **전체 미션 지도에서는 각 미션의 Beginner Guide 직접 링크를 모두 제공**합니다. 이는 첫 화면의 문서 수를 늘리는 것이 아니라, 사용자가 특정 미션을 선택했을 때 바로 수행 경로로 이동하도록 하기 위한 탐색(Navigation) 기능입니다.

## 6. 한글 + 영어 표기

[TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)를 따릅니다.

```text
실행 환경(Runtime)
검증(Verify)
증빙 자료(Evidence)
완료(CLEAR)
저장소(Repository)
입문자 따라하기(Beginner Guide)
```

명령어, 파일명, 경로, 제품명은 임의 번역하지 않습니다.

## 7. 명령어 제시 기준

첫 실행 명령을 제시하면 반드시 가능한 범위에서 다음을 함께 제공합니다.

```text
명령
→ 무엇을 확인/실행하는지
→ 예상 정상 결과
→ 실패 시 다음 행동
```

복사 명령만 제공하지 않습니다.

## 8. 상태 정보 기준

현재 상태를 README에 직접 적는 경우 다음 Source와 모순되지 않아야 합니다.

- 현재 Control Tower 상태
- 현재 Active Mission
- 실행환경
- Mission Repository 상태
- `PROGRESS.md` 또는 동등한 현재 상태 문서

변경 가능성이 큰 상태를 여러 문서에 중복 하드코딩하지 않습니다.

## 9. 긴 README의 역할 분리

루트 README는 **Landing Page + Navigation** 역할을 우선합니다.

상세 정책은 이미 별도 문서가 있으면 README에 모두 복제하지 않고 연결합니다.

```text
README
→ PROGRESS
→ NEXT-ACTIONS
→ Mission Index
→ 각 Mission Beginner Guide
→ Environment
→ Standards
→ Detailed Runbook
```

중복 설명이 길어져 README가 운영 매뉴얼 전체가 되지 않도록 합니다.

## 10. 문서 작성자용 체크리스트

```text
[ ] 첫 1~2분 안에 저장소 목적이 보인다.
[ ] 현재 해야 할 행동이 첫 화면에 있다.
[ ] 첫 명령과 정상 결과가 있다.
[ ] 현재 Mission과 Beginner Guide가 바로 연결된다.
[ ] 전체 미션 지도에서 각 Mission의 Beginner Guide로 직접 이동할 수 있다.
[ ] 미션당 3행을 쓰는 경우 `미션 / 과정 / 시작` 구조이며 시작 행에 Repository + Beginner Guide가 있다.
[ ] 존재하지 않는 START-CHECK 링크를 형식상 만들지 않았다.
[ ] 처음 볼 문서는 3개 이내로 제한했다.
[ ] 클릭 가능한 목차가 있다(긴 README인 경우).
[ ] 1부/2부/3부 또는 동등한 계층이 명확하다.
[ ] 전체 미션 표는 좁은 화면에서도 읽기 쉽다.
[ ] 한글+영어 병기 표준을 따른다.
[ ] 상세 운영 정보는 아래 또는 접힘 영역으로 이동했다.
[ ] 현재 상태가 실제 Source와 모순되지 않는다.
[ ] 동일한 상세 정책을 README에 불필요하게 중복하지 않는다.
[ ] 문서·훈련 기준 Registry로 연결된다.
```

## 11. README BEGINNER READY 판정

다음 조건을 만족하면 README를 `BEGINNER READY`로 볼 수 있습니다.

```text
저장소 목적을 이해할 수 있음
+ 지금 할 일을 알 수 있음
+ 첫 실행을 시작할 수 있음
+ 정상/실패 여부를 판단할 수 있음
+ 현재 미션으로 이동할 수 있음
+ 전체 미션 지도를 볼 수 있음
+ 각 미션의 Beginner Guide로 한 번에 이동할 수 있음
+ 운영 상세를 필요할 때만 열어볼 수 있음
```

`BEGINNER READY`는 내부 문서 품질 기준이며 공식 Mission `CLEAR`와는 별개입니다.

관련 내용 감사는 [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)에서 관리합니다.
