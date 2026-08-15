# Codyssey Basic 전체 용어 인덱스

B1-1부터 B7-2까지 15개 수행 단위의 미션별 용어 목록과 학습 확장 자료를 관리한다.

- 표기: `한글 용어 (English Term, 약어)`
- 최초 목록 단계에서는 용어 설명을 넣지 않는다.
- 각 미션은 Level 0~5 + Advanced, Top Core 구조를 사용한다.
- 상세 작성 규칙은 [미션 용어 학습 체계 기획](../vocabulary-learning-plan.md)을 따른다.
- 15개 미션 작성 완료 후의 품질 판정은 [전체 용어 품질 감사](../vocabulary-quality-audit.md)를 따른다.
- 중복 제거·최초 등장·재사용·Priority·K 수준·Lifecycle의 통합 기준은 [Basic Master Vocabulary](../basic-master-vocabulary.md)에서 관리한다.

## 디렉터리·파일명 표준

B1-1부터 다음 표준 구조를 적용한다. 후속 미션도 학습 확장 단계에서 같은 규칙으로 순차 전환한다.

```text
{mission-number}-{english-mission-slug}/
├── {mission-number}-00-index.md
├── {mission-number}-10-level-0-prerequisite.md
├── {mission-number}-20-level-1-core.md
├── {mission-number}-30-level-2-execution.md
├── {mission-number}-40-level-3-principles.md
├── {mission-number}-50-level-4-troubleshooting.md
├── {mission-number}-60-level-5-evaluation.md
├── {mission-number}-70-review-pack.md
└── {mission-number}-90-advanced.md
```

원칙:

- 디렉터리명은 `미션 번호 + 짧은 영어 slug`를 사용한다.
- 파일명은 항상 해당 미션 번호로 시작한다.
- `00 / 10 / 20 / ... / 90` 순서 번호로 GitHub·CLI 정렬과 학습 선후관계를 일치시킨다.
- `80` 구간은 향후 실전 모의평가·추가 랩 등 확장 자료용으로 예약한다.
- 문서 제목과 설명은 한국어를 중심으로 하되 핵심 전문 용어는 영어 원문을 함께 표기한다.

## 진행 현황

| 순서 | 미션 | 용어/학습 진입점 | 상태 |
|---:|---|---|---|
| 1 | B1-1 | [System Monitoring Automation](./b1-1-system-monitoring-automation/b1-1-00-index.md) | **Level별 구조 전환 + 학습 확장 완료** |
| 2 | B1-2 | [리눅스 프로세스 및 시스템 리소스 트러블슈팅](./b1-2.md) | 1차 용어 작성 완료 |
| 3 | B2-1 | [나만의 용돈 기입장 프로그램 만들기](./b2-1.md) | 1차 용어 작성 완료 |
| 4 | B2-2 | [친구 3~5명과 함께 프로그램 만드는 법 연습하기](./b2-2.md) | 1차 용어 작성 완료 |
| 5 | B3-1 | [정보를 엄청 빠르게 찾아주는 작은 저장소 만들기](./b3-1.md) | 1차 용어 작성 완료 |
| 6 | B3-2 | [파일이 언제 어떻게 바뀌었는지 기록하는 작은 프로그램 만들기](./b3-2.md) | 1차 용어 작성 완료 |
| 7 | B4-1 | [나를 소개하는 웹페이지 처음부터 만들기](./b4-1.md) | 1차 용어 작성 완료 |
| 8 | B4-2 | [버튼 누르면 화면이 스르륵 바뀌는 요즘 웹사이트 만들기](./b4-2.md) | 1차 용어 작성 완료 |
| 9 | B5-1 | [정보를 깔끔하게 정리하는 디지털 서랍장 만들기](./b5-1.md) | 1차 용어 작성 완료 |
| 10 | B5-2 | [글을 쓰고·보고·고치고·지울 수 있는 게시판형 웹 서비스 만들기](./b5-2.md) | 1차 용어 작성 완료 |
| 11 | B5-3 | [로그인이 되고 회원끼리 연결되는 웹 서비스 만들기](./b5-3.md) | 1차 용어 작성 완료 |
| 12 | B6-1 | [내가 만든 웹사이트를 인터넷에 올려 누구나 쓰게 하기](./b6-1.md) | 1차 용어 작성 완료 |
| 13 | B6-2 | [내가 고친 코드 설명을 AI가 대신 써주는 도우미 만들기](./b6-2.md) | 1차 용어 작성 완료 |
| 14 | B7-1 | [웹 기반 AI 챗봇 서비스 개발 프로젝트](./b7-1.md) | 1차 용어 작성 완료 |
| 15 | B7-2 | [웹 기반 AI 챗봇 서비스 고도화 프로젝트](./b7-2.md) | 1차 용어 작성 완료 |

**전체 Mission Vocabulary: 15 / 15 완료**

## B1-1 학습 구조

- [00 — Index](./b1-1-system-monitoring-automation/b1-1-00-index.md)
- [10 — Level 0 Prerequisite](./b1-1-system-monitoring-automation/b1-1-10-level-0-prerequisite.md)
- [20 — Level 1 Core](./b1-1-system-monitoring-automation/b1-1-20-level-1-core.md)
- [30 — Level 2 Execution](./b1-1-system-monitoring-automation/b1-1-30-level-2-execution.md)
- [40 — Level 3 Principles](./b1-1-system-monitoring-automation/b1-1-40-level-3-principles.md)
- [50 — Level 4 Troubleshooting](./b1-1-system-monitoring-automation/b1-1-50-level-4-troubleshooting.md)
- [60 — Level 5 Evaluation](./b1-1-system-monitoring-automation/b1-1-60-level-5-evaluation.md)
- [70 — Review Pack](./b1-1-system-monitoring-automation/b1-1-70-review-pack.md)
- [90 — Advanced](./b1-1-system-monitoring-automation/b1-1-90-advanced.md)

## 통합 자산 상태

- Mission Vocabulary B1-1~B7-2: **완료**
- 원본 주요 요구 영역 대조: **PASS**
- Level 0~5 + Advanced + Top Core: **PASS**
- 20:60:20: **PASS**
- 한글+영어 표기: **PASS**
- 전체 용어 품질 감사: **완료**
- [Basic Master Vocabulary](../basic-master-vocabulary.md): **v1 완료**
- CORE / REQUIRED / REFERENCE 통합 기준: **적용**
- K1~K4 통합 기준: **적용**
- First Seen / Reuse / Lifecycle: **핵심 반복 용어에 적용**
- 상위 Dependency Map: **완료**
- Vocabulary Gate V1~V5 공통 체크리스트: **완료**
- **B1-1 Level별 학습 콘텐츠 패키지: 완료**
- 다음 학습 확장 대상: **B1-2**

## 누적 학습 원칙

`NEW → REVIEW → APPLY → DEEPEN → INTEGRATE`

각 용어의 최초 등장 미션과 후속 미션의 재사용을 연결하여 전체 기초과정을 하나의 누적 학습 경로로 관리한다.
