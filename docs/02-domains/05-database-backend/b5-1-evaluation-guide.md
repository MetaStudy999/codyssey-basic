# B5-1 평가·학습 가이드

> 대상 Mission: **B5-1 — 정보를 깔끔하게 정리하는 디지털 서랍장 만들기**
>
> 이 문서는 Control Tower에서 B5-1의 공식 평가 범위와 Mission Repository의 상세 학습 자료를 연결하는 안내서다. B5-1의 실제 구현·Evidence·상세 모범답안은 Mission Repository를 기준으로 한다.

## 1. 공식 평가 범위

B5-1 공식 평가문항은 크게 다음 네 영역을 확인한다.

### 항목 1 — SQL 결과물과 실제 동작

- 최소 4개 테이블과 각 PK
- FK 기반 1:N 관계 최소 2개 및 존재하지 않는 참조 차단
- 각 테이블 최소 10행 이상의 샘플 데이터
- 총 15개 SQL query
  - 기본 조회 4
  - JOIN 4
  - 집계 3
  - subquery 1
  - UPDATE/DELETE 2
  - index 1
- 각 query 실행 결과 Evidence

### 항목 2 — 데이터 모델 설계 설명

- 테이블을 분리한 이유와 각 역할
- FK 기반 1:N의 실제 도메인 의미
- 컬럼 타입 선택 이유
- 인덱스 대상 컬럼과 선택 이유

### 항목 3 — 관계형 DB 핵심 개념 설명

- Database와 Excel의 차이
- PK / FK / 1:N
- INNER JOIN / LEFT JOIN
- GROUP BY / COUNT / SUM / AVG

### 항목 4 — 문제 해결 설명

- 가장 복잡했던 query의 단계별 풀이
- 미션 수행 중 가장 어려웠던 부분과 해결 과정

## 2. 현재 B5-1 구현과 연결

Mission Repository의 현재 구현은 학습 도서 대여 도메인을 사용한다.

```text
categories 1 ─── N books
members    1 ─── N rentals
books      1 ─── N rentals
```

핵심 구현 파일:

- `sql/01_schema.sql` — table, PK/FK, NOT NULL, UNIQUE, CHECK
- `sql/02_seed.sql` — 관계형 sample data
- `sql/03_queries.sql` — Q01~Q15
- `scripts/verify.py` — clean SQLite 재구축과 자동 검증
- `evidence/*.txt` — 실제 실행 결과

## 3. 평가 답변 학습 자료

상세 질문·전문 모범답안은 Mission Repository에 별도 문서로 관리한다.

- [B5-1 평가 질문·모범답안](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design/blob/main/docs/evaluation-qa.md)
- [B5-1 구현 기반 학습 노트](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design/blob/main/docs/learning-notes.md)
- [B5-1 Evaluation 원문](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design/blob/main/b5-1-evaluation.md)
- [B5-1 Mission Repository](https://github.com/MetaStudy999/codyssey-basic-b5-1-database-design)

상세 Q&A 문서는 공식 평가영역을 현재 구현과 Evidence에 연결하여 설명하고, 이해도를 높이기 위한 추가 심화 질문은 **공식 요구사항과 구분하여** 표시한다.

## 4. 평가 답변 권장 구조

평가에서는 정의만 암기하기보다 다음 순서를 권장한다.

```text
개념
→ 현재 B5-1의 실제 table/column/query
→ 왜 그렇게 설계했는가
→ test/evidence로 어떻게 확인했는가
```

예:

```text
FK는 다른 table의 PK를 참조하는 키입니다.
현재 구현에서는 rentals.member_id → members.id가 FK입니다.
존재하지 않는 member_id=999를 INSERT했을 때
FOREIGN KEY constraint failed가 발생하는 것까지 검증했습니다.
```

## 5. 학습 완료와 수행 완료의 구분

Repository에 모범답안이 존재하는 것과 학습자가 실제로 설명할 수 있는 것은 동일하지 않다.

- SQL 구현·자동 검증·Evidence: Repository에서 검증 가능
- 구두 설명 능력: Human Runtime에서 확인
- 학습자료 작성: 학습 준비 완료
- 실제 학습·설명: 별도 확인 필요

따라서 이 문서와 Mission Repository의 Q&A는 **평가 준비 자료**이며, 학습 상태를 자동으로 `MASTERED`로 변경하는 근거가 아니다.

## 6. Control Tower 상태 원칙

이 학습 가이드 추가는 B5-1의 공식 진행 상태를 직접 변경하지 않는다. 과정 진행 상태는 `config/missions.yaml` 및 Serial Integration 절차를 따른다.
