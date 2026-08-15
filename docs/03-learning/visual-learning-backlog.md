# Codyssey Basic Visual Learning Backlog

**상태:** DEFERRED  
**결정:** 이미지 생성·GitHub 반영 자동화는 현재 학습 콘텐츠 진행의 차단 요소로 사용하지 않는다. 비시각 학습 자료를 우선 계속 확장한다.

## 1. 목적

각 용어를 입문자가 글만 읽지 않고 장면으로 이해할 수 있도록, 향후 `한 용어 = 시각 학습 세트`를 추가한다. 시각 자료는 Mission/Evaluation의 요구사항이 아니라 **학습 보조 자료**다.

## 2. 용어별 목표 시각 세트

각 개별 용어 파일에는 최종적으로 다음 시각 자료를 연결하는 것을 목표로 한다.

1. **만화 표지 (Cover)** — 용어의 핵심 이미지를 한 장면으로 기억
2. **한 줄 설명 장면 (One-line)** — 쉬운 한 문장을 장면으로 표현
3. **미션 위치 장면 (Where)** — 현재 미션의 어느 설정·코드·흐름에 등장하는지 표현
4. **핵심 관계 장면 (Key Relation)** — 선수·후행·원인·결과 관계를 표현
5. **초미니 확인 장면 (Mini Check)** — 한 문제 또는 한 행동으로 확인
6. **Vocabulary Gate 장면 (Gate)** — V1~V5 중 해당 단계의 통과 기준 표현
7. **한 장 요약 만화 (Summary)** — 위 요소를 한 화면에서 다시 연결

실제 제작 시 1~6을 여러 장으로 만들지, 4~6컷 한 장으로 압축할지는 품질·관리 비용을 검토한 뒤 결정한다. **학습 의미와 검증 항목은 유지하고 이미지 장수는 나중에 최적화할 수 있다.**

## 3. 파일명 초안

```text
assets/
├── {term-file-stem}-01-cover.webp
├── {term-file-stem}-02-one-line.webp
├── {term-file-stem}-03-where.webp
├── {term-file-stem}-04-relation.webp
├── {term-file-stem}-05-mini-check.webp
├── {term-file-stem}-06-gate.webp
└── {term-file-stem}-07-summary.webp
```

예:

```text
b1-1-20-070-acl-01-cover.webp
b1-1-20-070-acl-04-relation.webp
b1-1-20-070-acl-07-summary.webp
```

## 4. Source Lock

이미지에 다음이 들어가면 생성 전에 원본 Mission/Evaluation에서 값을 잠근다.

- 포트
- 사용자/그룹
- 파일·디렉터리 경로
- 권한 숫자
- 환경변수
- 임계값
- 실행 주기
- 평가/통과 기준

B1-1 예:

```text
SSH              20022/tcp
Agent            15034/tcp
Users            agent-admin / agent-dev / agent-test
Groups           agent-common / agent-core
monitor.sh mode  750
cron             every minute
CPU warning      >20%
MEM warning      >10%
DISK warning     >80%
log rotation     10MB / 10 files
```

그림이 Source와 충돌하면 설명이 보기 좋아도 게시하지 않는다.

## 5. 이미지 제작 QA

```text
Source 값 잠금
→ 장면 기획
→ 이미지 생성
→ 사람이 읽는 방식으로 시각 검토
→ 숫자/경로/계정/관계 재검증
→ Markdown 상대 링크 확인
→ GitHub 브랜치에서 렌더링 확인
→ PR
→ main
```

검증하지 않은 이미지는 `main`에 게시하지 않는다.

## 6. 현재 B1-1 상태

- Linux: 기존 Pilot 이미지가 `main`에 있음
- User / Group: 차후 재검토
- ACL: 차후 교정
- SSH: 차후 재검토
- Process: 차후 교정
- Level 1 전체 Summary: 차후 재검토
- 나머지 Level 0~5: 미생성

기존 이미지가 있다는 이유만으로 시각 학습이 완료된 것으로 판단하지 않는다.

## 7. 재개 조건

- [ ] 이미지 생성 결과가 요청 용어와 안정적으로 일치
- [ ] GitHub 바이너리 업로드 절차가 재현 가능
- [ ] Markdown 이미지 링크 검증 절차가 확립
- [ ] Source 값 자동/수동 대조 체크리스트가 준비
- [ ] 3~5개 Pilot에서 오류 없이 반복 성공

## 8. 현재 우선순위

```text
개별 용어 텍스트 구조화
→ Level별 Index
→ 선수·후행 관계
→ 실습/트러블슈팅/평가
→ V1~V5 Gate
→ 미션 간 Lifecycle 연결
→ Visual Learning (DEFERRED)
```

따라서 만화가 없어도 B1-1 → B1-2 → 이후 미션의 학습 콘텐츠 작업은 계속 진행한다.
