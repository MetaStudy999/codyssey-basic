# Growth Model

Codyssey Developer Growth OS의 공통 성장 단계는 다음 5단계로 고정한다.

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

이 단계는 폴더 이름이 아니라 **성장 수준 메타데이터**다. 동일한 프로젝트가 CORE에서 시작해 ADVANCED와 PRO로 성장할 수 있으므로 파일을 단계별 디렉터리로 이동하지 않는다.

## 1. CORE

**정의:** 기본을 이해하고 직접 완성하는 단계.

**핵심 질문:** 무엇이며, 내가 직접 할 수 있는가?

주요 활동:
- 공식 Mission Source 확인
- 필수 용어와 개념 학습
- 구조/흐름 도식화
- 입문자 따라하기
- 직접 구현
- 테스트
- 오류 재현과 Debugging
- Git 기록과 기본 협업
- 평가 대응
- Evidence 확보
- 자기 말로 설명

CORE에서는 공식 Mission PASS를 우선한다. ADVANCED 기능 때문에 CORE 완료를 늦추지 않는다.

## 2. EXPLORE

**정의:** 여러 가능성을 넓게 경험하고 다음 심화 방향을 찾는 단계.

**핵심 질문:** 무엇이 가능하며, 무엇을 더 깊게 볼 것인가?

예시:
- Study / Seminar / Meetup
- 작은 Hackathon / Competition
- Open Source 탐색
- 대안 기술 비교
- 직무/기업 탐색
- 논문 읽기와 연구 분야 탐색
- 사용자 문제 탐색

EXPLORE는 폭(Breadth)의 단계다. 무제한 탐색을 금지하고 Time Box를 둔다. 한 Mission 또는 한 주제에서 후보를 넓게 보되 실제 실행은 1~2개로 제한한다.

EXPLORE 종료 시 다음을 기록한다.
1. 무엇을 경험했는가?
2. 무엇이 가치 있었는가?
3. 현재 Mission/Project와 어떻게 연결되는가?
4. ADVANCED로 가져갈 1~2개는 무엇인가?

## 3. ADVANCED

**정의:** 선택한 영역을 깊게 파고들고 구조와 품질을 개선하는 단계.

**핵심 질문:** 어떻게 더 잘 만들고, 왜 이 방법을 선택하는가?

예시:
- Refactoring
- Architecture / ADR
- Testing 강화
- Security
- Performance
- Docker / CI/CD
- Logging / Monitoring / Observability
- Benchmark / Experiment
- 대안 기술 비교와 Trade-off

ADVANCED는 깊이(Depth)의 단계다. EXPLORE에서 선택한 1~2개 영역에 집중한다.

## 4. PRO

**정의:** 실제 환경에서 전문적으로 결과를 만들고 책임지는 단계.

**핵심 질문:** 실제 사용자와 환경에서 결과를 책임질 수 있는가?

PRO의 기준은 기술 난이도가 아니라 **실제성**이다.

Evidence 예시:
- 실제 사용자
- Production 배포
- 실제 팀 협업
- 실제 장애 및 Incident 대응
- 실제 성능/보안 문제 해결
- 외부 Code Review
- 기업 프로젝트 / PoC
- Open Source Contribution
- 실제 연구 발표/투고
- 고객 또는 유료 사용자

## 5. EXPERT

**정의:** 고난도 문제에서 올바른 판단을 하고 Trade-off를 설명하는 단계.

**핵심 질문:** 무엇을 선택해야 하며 왜 그런가?

EXPERT의 핵심은 `Judgment + Trade-off`다. 특정 기술을 잘 사용하는 수준을 넘어, 그 기술이 필요한지부터 판단한다.

예:
- Redis를 사용할 것인가?
- Cache/Session/Queue 중 실제 문제는 무엇인가?
- 복잡도, 비용, Latency, Consistency, 운영 부담은 무엇인가?
- 더 단순한 대안으로 해결할 수 있는가?

## EXPERT 이후

EXPERT 이후는 단일 서열이 아니라 전문 경로로 분기한다.

- Tech Lead / Principal
- Architect / SRE
- AI / Researcher
- Open Source Maintainer
- Educator / Mentor
- Founder

최종 목표는 칭호보다 **IMPACT**다. 사람, 제품, 조직, 연구, 오픈소스, 시장 또는 사회에 실제 변화를 남긴다.

## 다른 축과의 관계

성장 단계는 아래 개념과 섞지 않는다.

- 진행 상태: `PLANNED / READY / ACTIVE / BLOCKED / DONE / ARCHIVED`
- 중요도: `REQUIRED / RECOMMENDED / OPTIONAL`
- 영역: Mission / Learning / Community / Project / Opportunity / Research / Open Source / Career / Venture / Portfolio 등

예: `AI Hackathon = EXPLORE + ACTIVE + OPTIONAL + Opportunity`

이 분리를 V3의 기본 데이터 모델로 사용한다.
