# 06. Opportunities

공모전, 해커톤, 경진대회, 세미나, 학회, 오픈소스, 연구, 취업, 창업 지원 프로그램 등 **외부 기회 자체**를 관리한다.

## 핵심 분리

Opportunity와 Activity를 같은 상태로 관리하지 않는다.

- Opportunity Availability: `OPEN / UPCOMING / WATCH / CLOSED / ARCHIVED`
- Opportunity Fit: `UNREVIEWED / REVIEW / CANDIDATE / SELECTED / SKIP`
- 사용자 실제 수행 상태: `config/activities.yaml`의 `PLANNED / READY / ACTIVE / BLOCKED / DONE / ARCHIVED`

`SELECTED` 후 실제 참가·수행을 시작하면 별도 Activity를 만든다.

## 카테고리

- Competition / Contest / Challenge
- Hackathon
- Seminar / Conference / Meetup
- Call for Papers / Projects / Participants
- Research Opportunity
- Open Source Opportunity
- Grant / Government Support
- Startup / Accelerator / Demo Day
- Job Opportunity

## 등록 기준

각 기회는 가능한 한 다음을 기록한다.

- 공식 URL
- 기회 유형
- 신청 마감일
- 행사 시작/종료일
- 마지막 확인일
- 관련 Mission
- 관련 Skill
- 재사용 가능한 기존 Project/Artifact
- 기대 Evidence
- Opportunity Score

기계 판독용 Schema는 `config/opportunities.yaml`을 따른다.

## 선택 원칙

현재 Mission과의 연결, Portfolio 가치, 학습 가치, 협업 가치, 결과 가능성, Career/Venture 연결성을 평가한다.

```text
기회 발견
  ↓
Availability 확인
  ↓
Fit 평가
  ↓
CANDIDATE
  ↓
SELECTED
  ↓
Activity 생성
  ↓
Evidence / Retrospective
```

## Mission 연결 예

- B3 → Algorithm / Coding Competition
- B4+B5 → Web / App Hackathon
- B6 → Cloud / AI Challenge
- B7 → Generative AI Hackathon / Capstone / Startup Competition

과거 기회가 CLOSED가 되어도 영상·슬라이드·Proceedings·문제·평가 기준 등 재사용 가치가 있으면 Learning/Research Resource로 연결한다.

## V3 Migration

기존 `docs/09-opportunities/README.md`의 카테고리·Mission 연결 원칙은 이 문서와 `config/opportunities.yaml`에 흡수했다. Old Path는 Cutover 검증 전까지 Legacy Compatibility 용도로 보존한다.
