# Learning & Research Resources

외부 자료는 공식 Mission 요구사항을 대체하지 않고 **이해·검증·확장**에 사용한다. V3에서는 Resource를 독립 성장 단계로 취급하지 않고 Learning/Research를 지원하는 Reference Layer로 관리한다.

## Resource Categories

1. Official Documentation / Standards / RFC
2. Books / Textbooks
3. Bookstores / Acquisition Channels
4. Foundational / Landmark / Recent Papers
5. Award-linked Research / Major Research Lineage
6. Digital Libraries / Academic Search
7. MOOC / University Courses
8. Conference Talks / Technical Videos / Keynotes
9. Professional Organizations / Developer Communities
10. Engineering Blogs / Postmortems
11. Datasets / Benchmarks / Leaderboards
12. Technology / Research News
13. Resource Map by Domain / Mission / Level
14. Research Lineage

## Growth Stage와 Priority 분리

Resource 자체의 중요도와 사용 시점을 섞지 않는다.

### Growth Stage

`CORE / EXPLORE / ADVANCED / PRO / EXPERT`

### Priority

- `REQUIRED`: 현재 Mission/Project 수행에 직접 필요한 자료
- `RECOMMENDED`: 개념·구현·검증을 강화하는 자료
- `OPTIONAL`: 필요할 때 선택적으로 사용하는 확장 자료

예를 들어 EXPLORE 단계의 자료가 현재 진로 탐색에 중요하면 `growth_stage: EXPLORE`, `priority: RECOMMENDED`로 기록할 수 있다.

## Resource Quality

가능하면 다음 순서를 우선한다.

```text
Official Docs / Standard / RFC
→ Primary Research
→ Reputable Technical Organization
→ High-quality Engineering Source
→ Secondary Explanation
```

최신성이 중요한 자료는 `last_checked`를 기록한다. 장기간 안정적인 표준·기초 문헌과 빠르게 변하는 제품/서비스 문서를 구분한다.

## 대표 전문 사이트

- ACM
- IEEE Computer Society
- USENIX
- IETF / RFC Editor
- W3C
- WHATWG
- Linux Foundation
- CNCF
- OWASP
- MDN
- GitHub Skills
- AWS Architecture Center
- Hugging Face
- OpenAI Developers

링크 자체보다 **공식성·관련 Mission·사용 목적·마지막 확인일**을 함께 관리하는 것을 우선한다.

## 전자도서관·학술검색

RISS, ScienceON, KCI, arXiv, Google Scholar, Semantic Scholar, ACM Digital Library, IEEE Xplore 등을 Mission/Research Question에 연결한다.

## MOOC / 강의

K-MOOC, MIT OpenCourseWare, Coursera, edX 등은 전체 강좌를 무조건 수강하기보다 현재 Mission 또는 Skill Gap에 필요한 Chapter 중심으로 사용한다.

## 영상

공식 기술 채널, 대학 강의, 논문 저자 발표, Conference Talk, Keynote, 주요 연구자 강연을 우선한다.

## 도서 구매 경로

교보문고, YES24, 알라딘 등은 구매·접근 경로로만 취급한다. 판매순위나 서점 노출과 자료의 학습 품질을 동일하게 보지 않는다.

## Registry

기계 판독용 Resource Registry는 `config/resources.yaml`을 사용한다.

권장 Metadata:

```yaml
id:
title:
type:
source_url:
source_authority:
related_missions: []
related_skills: []
growth_stage: CORE | EXPLORE | ADVANCED | PRO | EXPERT
priority: REQUIRED | RECOMMENDED | OPTIONAL
status: PLANNED | READY | ACTIVE | DONE | ARCHIVED
last_checked:
notes:
```

모든 Resource에 모든 필드를 강제하지 않는다. 자동화와 Dashboard에서 실제로 필요한 필드부터 사용한다.
