# Codyssey Basic 개별 용어 파일 표준

## 1. 목적

Codyssey Basic 학습 자료를 `Mission → Level → Term` 단위로 탐색할 수 있도록 개별 용어 파일의 디렉터리·파일명·메타데이터·링크 규칙을 정의한다.

이 표준의 목적은 파일 수를 늘리는 것이 아니라 다음을 가능하게 하는 것이다.

- 한 파일에서 한 용어에 집중
- GitHub/CLI 정렬만으로 학습 순서 파악
- 선수·후행 용어 연결
- 같은 용어의 NEW → REVIEW → APPLY → DEEPEN → INTEGRATE 추적
- 향후 Knowledge Graph, 자동 퀴즈, 학습 대시보드로 확장

## 2. 구조

```text
vocabulary/
└── {mission-number}-{english-mission-slug}/
    ├── {mission-number}-00-index.md
    ├── {mission-number}-20-level-1-core/
    │   ├── {mission-number}-20-000-index.md
    │   ├── {mission-number}-20-010-{term-slug}.md
    │   ├── {mission-number}-20-020-{term-slug}.md
    │   └── ...
    └── ...
```

Level 디렉터리의 `000-index`는 그 Level의 학습 지도다. 개별 용어는 `010, 020, 030 ...`처럼 10 단위로 배치한다. 중간 삽입이 필요하면 `015`, `025`처럼 기존 파일명을 바꾸지 않고 추가할 수 있다.

## 3. 파일명 규칙

```text
{mission}-{level-order}-{term-order}-{english-term-slug}.md
```

예:

```text
b1-1-20-010-linux.md
b1-1-20-070-acl.md
b1-1-20-090-ssh.md
b1-1-20-220-health-check.md
```

원칙:

- 파일명은 항상 미션 번호로 시작한다.
- 용어 slug는 짧고 안정적인 영어 kebab-case를 사용한다.
- 약어가 현업 표준이면 `acl`, `ssh`, `pid`처럼 약어를 사용할 수 있다.
- 제목은 한국어 + 영어 원문을 병기한다.

## 4. 개별 용어 파일의 최소 구조

```text
Front Matter
H1: 한글 용어 (English Term, ABBR)
1. 한 줄 설명
2. 현재 미션에서의 위치
3. 핵심 관계
4. 초미니 확인/실습
5. Vocabulary Gate
6. 이전 / Level Index / 다음 링크
```

설명·비유·연습은 학습 보조 자료이며 Mission 요구사항으로 승격하지 않는다. 원본이 고정한 숫자·경로·조건은 그대로 보존한다.

## 5. 최소 Front Matter

```yaml
---
mission: B1-1
stage: top-core
order: 70
term: Access Control List
abbreviation: ACL
lifecycle: NEW
---
```

필요한 경우 `priority`, `knowledge_level`, `prerequisites`, `reuse`를 추가할 수 있지만, 근거 없이 메타데이터를 채우지 않는다.

## 6. 중복 용어 정책

같은 용어가 여러 미션에 등장해도 파일 내용을 복사하지 않는다.

예:

```text
B1-1 Process → NEW: 프로세스의 의미와 기본 관계
B1-2 Process → REVIEW/DEEPEN: 관찰·원인 분석·장애 진단
B6-1 Process → APPLY: 배포 서버에서 서비스 상태 검증
```

각 미션 파일은 **그 미션에서 새로 배우는 관점**만 추가한다. 통합 정의와 First Seen/Reuse는 `basic-master-vocabulary.md`가 관리한다.

## 7. 링크 규칙

개별 용어 파일 하단에는 최소 다음 링크를 둔다.

```text
← 이전 용어 · Level Index · 다음 용어 →
```

Level Index는 상위 Mission Index와 이전/다음 Level도 연결한다. 외부에서 과거 URL을 참조할 수 있는 기존 요약 파일은 즉시 삭제하기보다 호환 진입점 또는 요약 문서로 유지할 수 있다.

## 8. Source of Truth

우선순위는 기존 학습 체계와 같다.

1. 원본 Mission PDF / Mission Markdown
2. 공식 Evaluation
3. 실제 구현에 필요한 코드·설정·명령·파일 구조
4. 검증·트러블슈팅·평가 자료
5. 학습용 설명·비유·연습

Source가 지원하지 않는 내용을 원본 요구사항처럼 작성하지 않는다.

## 9. 검증 체크리스트

- [ ] 디렉터리와 파일이 번호순으로 정렬되는가?
- [ ] `000-index`에서 모든 개별 용어 파일로 이동할 수 있는가?
- [ ] 모든 용어 파일에 이전/Index/다음 링크가 있는가?
- [ ] 링크 대상 파일이 실제 존재하는가?
- [ ] 원본의 고정값·제약이 변형되지 않았는가?
- [ ] 학습 보조 설명과 원본 요구가 구분되는가?
- [ ] 같은 용어의 미션 간 역할이 복사본이 아니라 Lifecycle로 구분되는가?

## 10. Pilot

첫 적용은 **B1-1 Level 1 Top Core 28개**다.

- Mission: `b1-1-system-monitoring-automation`
- Level Directory: `b1-1-20-level-1-core/`
- Entry: `b1-1-20-000-index.md`
- Term files: `010` ~ `280`

Pilot 검증 후 같은 규칙을 Level 0/2/3/4/5 및 B1-2 이후 미션으로 확대한다.
