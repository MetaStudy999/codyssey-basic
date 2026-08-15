# Repository Policy

V3는 `Master Map + Progressive Repository`를 기본 원칙으로 사용한다.

## 1. Master Map First

미래 전체 구조와 성장 경로는 먼저 논리적으로 설계한다. 그러나 설계도에 존재한다는 이유만으로 모든 폴더와 파일을 즉시 생성하지 않는다.

## 2. Logical First, Physical Later

먼저 문서와 Registry/Config에서 개념과 관계를 정의하고, 실제 활동이 시작될 때 물리 폴더를 만든다.

예:

- Research Track이 PLANNED이면 Map/Config에만 등록
- 실제 연구가 ACTIVE가 되면 `docs/07-research/<topic>/` 생성

## 3. Folder = Domain, Stage = Metadata

다음과 같은 단계별 폴더를 만들지 않는다.

`core/`, `explore/`, `advanced/`, `pro/`, `expert/`

폴더는 내용의 성격으로 나눈다.

예:
- missions
- learning
- community
- projects
- opportunities
- research
- open-source
- career
- venture
- portfolio

성장 수준은 `growth_stage` 메타데이터로 관리한다.

## 4. Just-in-Time Folder Creation

새 폴더는 기본적으로 활동이 ACTIVE가 될 때 생성한다.

다음 조건 중 2개 이상이면 독립 폴더 생성을 고려한다.

- 파일이 3개 이상 생길 가능성이 높다.
- 여러 주에 걸쳐 지속된다.
- 독립적인 결과물이 있다.
- 별도 Evidence가 필요하다.
- 별도 팀/담당자가 있다.
- 코드·데이터·실험 결과가 발생한다.
- 다른 활동에서 재사용된다.

한 문서로 충분하면 새 디렉터리를 만들지 않는다.

## 5. Source of Truth 분리

- `config/missions.yaml`: 공식 Mission 실행 상태
- `config/growth.yaml`: Growth Model과 공통 상태/우선순위 정의
- 향후 `activities.yaml`: 커뮤니티/대외 활동
- 향후 `skills.yaml`: Skill Matrix
- 향후 `projects.yaml`: Project Lineage
- 향후 `opportunities.yaml`: 외부 기회

한 파일에 모든 개념을 억지로 넣지 않는다.

## 6. Safe Rebuild

대규모 구조 변경 시 main을 직접 파괴하지 않는다.

1. 현재 main을 archive branch로 보존
2. rebuild branch에서 새 구조 설계
3. 기존 콘텐츠를 KEEP / MERGE / REWRITE / ARCHIVE / DROP으로 감사
4. 필요한 콘텐츠만 이관
5. 자동화와 링크 검증
6. PR Review 후 main 전환

## 7. Stop Rule

현재 Mission의 필수 요구, 테스트, Runtime, Evidence, 평가 대응이 충족되면 CORE 완료로 판단한다. 비필수 고도화는 현재 완료를 늦추지 않고 다음 단계 Backlog로 보낸다.
