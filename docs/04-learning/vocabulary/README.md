# Codyssey Basic 전체 용어 인덱스

B1-1부터 B7-2까지 15개 수행 단위의 미션별 용어 목록과 학습 확장 자료를 관리한다.

- 표기: `한글 용어 (English Term, 약어)`
- 각 미션은 Level 0~5 + Advanced, Top Core 구조를 사용한다.
- 상세 작성 규칙은 [미션 용어 학습 체계 기획](../vocabulary-learning-plan.md)을 따른다.
- 개별 용어/실행/원리/장애 진단/평가 설명 단위 규칙은 [개별 용어 파일 표준](../term-file-standard.md)을 따른다.
- 시각 학습은 [Visual Learning Backlog](../visual-learning-backlog.md)에서 관리하며 현재 **DEFERRED**다.
- 중복·최초 등장·재사용·Priority·K 수준·Lifecycle은 [Basic Master Vocabulary](../basic-master-vocabulary.md)에서 관리한다.

## 디렉터리·파일명 표준

```text
{mission-number}-{english-mission-slug}/
├── {mission-number}-00-index.md
├── {mission-number}-10-level-0-prerequisite/
│   ├── {mission-number}-10-000-index.md
│   └── {mission-number}-10-010-{term-slug}.md ...
├── {mission-number}-20-level-1-core/
│   ├── {mission-number}-20-000-index.md
│   └── {mission-number}-20-010-{term-slug}.md ...
├── {mission-number}-30-level-2-execution/
│   ├── {mission-number}-30-000-index.md
│   └── {mission-number}-30-010-{execution-unit}.md ...
├── {mission-number}-40-level-3-principles/
│   ├── {mission-number}-40-000-index.md
│   └── {mission-number}-40-010-{principle-unit}.md ...
├── {mission-number}-50-level-4-troubleshooting/
│   ├── {mission-number}-50-000-index.md
│   └── {mission-number}-50-010-{troubleshooting-unit}.md ...
├── {mission-number}-60-level-5-evaluation/
│   ├── {mission-number}-60-000-index.md
│   └── {mission-number}-60-010-{evaluation-unit}.md ...
├── {mission-number}-70-review-pack.md
└── {mission-number}-90-advanced.md
```

원칙:

- 파일명은 항상 해당 미션 번호로 시작한다.
- Level 내부는 `010 / 020 / ...` 순서로 정렬하고 `000-index`를 진입점으로 둔다.
- Level 0·1은 한 용어, Level 2는 실행·검증 단위, Level 3는 WHY/HOW 원리, Level 4는 장애 진단 흐름, Level 5는 평가 설명 단위로 묶는다.
- `80`은 실전 모의평가·추가 Lab용으로 예약한다.

## 진행 현황

| 순서 | 미션 | 용어/학습 진입점 | 상태 |
|---:|---|---|---|
| 1 | B1-1 | [System Monitoring Automation](./b1-1-system-monitoring-automation/b1-1-00-index.md) | **Level 0~5 구조화 완료, Review NEXT** |
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
- [10 — Level 0 Index](./b1-1-system-monitoring-automation/b1-1-10-level-0-prerequisite/b1-1-10-000-index.md) — 29개
- [20 — Level 1 Index](./b1-1-system-monitoring-automation/b1-1-20-level-1-core/b1-1-20-000-index.md) — 28개
- [30 — Level 2 Index](./b1-1-system-monitoring-automation/b1-1-30-level-2-execution/b1-1-30-000-index.md) — 12개
- [40 — Level 3 Index](./b1-1-system-monitoring-automation/b1-1-40-level-3-principles/b1-1-40-000-index.md) — 12개
- [50 — Level 4 Index](./b1-1-system-monitoring-automation/b1-1-50-level-4-troubleshooting/b1-1-50-000-index.md) — 12개
- [60 — Level 5 Index](./b1-1-system-monitoring-automation/b1-1-60-level-5-evaluation/b1-1-60-000-index.md) — 12개
- [70 — Review Pack](./b1-1-system-monitoring-automation/b1-1-70-review-pack.md)
- [90 — Advanced](./b1-1-system-monitoring-automation/b1-1-90-advanced.md)

기존 Level별 단일 파일은 전체 복습·기존 URL 호환용으로 유지한다.

## 통합 자산 상태

- Mission Vocabulary B1-1~B7-2: **완료**
- Basic Master Vocabulary: **v1 완료**
- Vocabulary Gate V1~V5: **공통 기준 완료**
- B1-1 Level 0 선수 용어 29개: **완료**
- B1-1 Level 1 Top Core 28개: **완료**
- B1-1 Level 2 실행 단위 12개: **완료**
- B1-1 Level 3 원리 단위 12개: **완료**
- B1-1 Level 4 장애 진단 단위 12개: **완료**
- B1-1 Level 5 평가 설명 단위 12개: **완료**
- Visual Learning: **DEFERRED / Backlog 관리**
- 다음: **B1-1 Review 통합 점검 → B1-2 동일 구조 확장**

## 누적 학습 원칙

`NEW → REVIEW → APPLY → DEEPEN → INTEGRATE`
