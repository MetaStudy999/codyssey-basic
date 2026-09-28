# Round 02 — 제2기 AI 도구학습 실행 허브

> **기준 레포(Canonical Control Repository):** `MetaStudy999/codyssey-basic`
>
> 현재 제2기 신규 수행의 기본 작업 Round는 `round-02-clear`이다. 기존 `round-01-clear`는 참고자료로 보존한다.

## 기준

공식 미션 번호·제목·내용은 **제2기 현재 Mission PDF**를 최우선으로 사용한다.

운영 순서:

```text
제2기 Mission PDF
→ 제2기 오리엔테이션
→ CURRENT-MISSION-MAP 운영 매핑 확인
→ 동일 주제 Mission Repository
→ 기존 Mission/Evaluation
→ round-01-clear 참고
→ round-02-clear 신규 수행
```

공통 수행 표준:

- [Round 02 미션 수행·평가 표준](../../standards/ROUND-02-MISSION-EXECUTION-STANDARD.md)
- [작업 운영 룰](../../WORKING-RULES.md)
- [현재 Mission Map](../../CURRENT-MISSION-MAP.md)
- [2주 초압축 수행 계획](ACCELERATED-2WEEK-PLAN.md)
- [Round 02 진행 매트릭스](PROGRESS-MATRIX.md)
- [Round 02 발표자료 생성 표준](../../standards/ROUND-02-PRESENTATION-STANDARD.md)
- [Figma Master Template Specification](../../templates/presentations/FIGMA-MASTER-TEMPLATE-SPEC.md)

## 현재 실행 템플릿 버전

- Stable: **Mission Execution Template v1.0.0**
- Current: [templates/mission-execution/CURRENT.md](../../templates/mission-execution/CURRENT.md)
- Next Candidate: [templates/mission-execution/NEXT.md](../../templates/mission-execution/NEXT.md)
- Version Registry: [templates/mission-execution/README.md](../../templates/mission-execution/README.md)

현재 Active Mission부터 v1.0.0을 적용한다. 이후 개선점은 NEXT에 누적하고 실제 Mission에서 검증한 뒤 새 버전으로 승격한다. 기존 Mission 전체를 한 번에 일괄 재작성하지 않는다.

## 가장 빠른 실행 흐름

v1.0.0의 기본 흐름:

```text
01 기준 확정
→ 02 요구사항·평가항목 매핑
→ 03 Minimum Passing Path
→ 04 핵심 기능 통합 구현
→ 05 통합 Runtime 검증
→ 06 UX·포트폴리오 고도화
→ 07 공식 Bonus / Optional
→ 08 Troubleshooting
→ 09 최종 회귀검증
→ 10 Evidence·문서화
→ 11 평가 설명 준비
→ 12 모의평가
→ 13 CLEAR
```

상세 절차는 CURRENT 템플릿을 기준으로 하고, 다음 버전 후보는 NEXT에서 관리한다.

## 초압축 시간 목표

```text
필수 11개  ≈ 100h
선택 4개   ≈ 50h
전체 15개  ≈ 150h
```

이는 공식 학습시간을 대체하지 않는 내부 실행 목표다. 자세한 미션별 시간 예산과 단축 금지 항목은 [ACCELERATED-2WEEK-PLAN.md](ACCELERATED-2WEEK-PLAN.md)를 따른다.

## 15개 Mission/Project

| 현재 ID | 미션 | Repository |
|---|---|---|
| B1-1 | 나를 소개하는 웹페이지 처음부터 만들기 | codyssey-basic-web-portfolio |
| B1-2 | 버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기 | codyssey-basic-react-spa |
| B2-1 | 나만의 용돈 기입장 프로그램 만들기 | codyssey-basic-budget-tracker |
| B2-2 | 친구 3~5명과 함께 프로그램 만드는 법 연습하기 | codyssey-basic-git-collaboration |
| B3-1 | 내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기 | codyssey-basic-cloud-infrastructure |
| B3-2 | 내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기 | codyssey-basic-ai-git-assistant |
| B4-1 | 컴퓨터가 알아서 자기 상태를 점검하게 만들기 | codyssey-basic-system-monitor |
| B4-2 | 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기 | codyssey-basic-system-troubleshooting |
| B5-1 | 정보를 엄청 빠르게 찾아주는 작은 저장소 만들기 | codyssey-basic-mini-redis |
| B5-2 | 파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기 | codyssey-basic-mini-git |
| B6-1 | 정보를 깔끔하게 정리하는 디지털 서랍장 만들기 | codyssey-basic-sql-database |
| B6-2 | 글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기 | codyssey-basic-fastapi-crud |
| B6-3 | 로그인이 되고 회원끼리 연결되는 웹 서비스 만들기 | codyssey-basic-fastapi-auth |
| B7-1 | 웹 기반 AI 챗봇 서비스 개발 프로젝트 | codyssey-basic-ai-chatbot |
| B7-2 | 웹 기반 AI 챗봇 서비스 고도화 프로젝트 | codyssey-basic-ai-chatbot-fullstack |

## 상태 원칙

```text
NOT STARTED
→ ACTIVE
→ Runtime PASS
→ Verification PASS
→ Evidence Complete
→ Evaluation Ready
→ CLEAR
```

문서가 있다는 이유만으로 PASS/CLEAR 처리하지 않는다. Round 02의 실제 실행 결과만 Round 02의 PASS/Evidence로 사용한다.
