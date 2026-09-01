# 코디세이 AI/SW 기초 미션 평가 발표 기준 템플릿 가이드

대상: B1-1 ~ B7-2  
용도: 미션 평가, 학부 프로젝트 발표, 석·박사 과정 프로젝트 발표, 연구실 내부 발표, 학회형 기술 발표  
화면비: 16:9  
기본 글꼴: Noto Sans CJK KR

---

## 빠른 시작(Quick Start)

1. 실제 발표는 `Codyssey_Mission_Evaluation_Core_22slides.pptx` 복사본으로 시작합니다.
2. 공식 Mission / Evaluation에서 **필수 결과물·기능·제약·증빙·설명 항목**을 먼저 추출합니다.
3. 아래 기준 목차에서 필요한 슬라이드만 선택하여 일반적으로 12~16장으로 구성합니다.
4. 각 PASS 판단에는 실제 실행 결과 또는 추적 가능한 증빙 자료(Evidence)를 연결합니다.
5. 발표 대상과 시간에 따라 기술 깊이를 조정합니다.

## 목차

- [1. 기준 목차](#1-기준-목차--1218장)
- [2. 발표 대상별 깊이 조정](#2-발표-대상별-깊이-조정)
- [3. B1-1 ~ B7-2 미션별 강조 슬라이드](#3-b1-1--b7-2-미션별-강조-슬라이드)
- [4. 슬라이드 제목 작성 규칙](#4-슬라이드-제목-작성-규칙)
- [5. Master Prompt](#5-master-prompt--실제-미션-발표자료-생성용)
- [6. 디자인 규격](#6-디자인-규격)
- [7. 발표 전 최종 체크리스트](#7-발표-전-최종-체크리스트)

---

## 1. 기준 목차 — 12~18장

### 필수 코어
1. 표지
2. Executive Summary(핵심 결론)
3. Mission Brief(미션 요약)
4. Requirement → Evidence Matrix(요구사항-증빙 매트릭스)
5. Problem → Objective(문제와 목표)
6. Solution Overview(전체 해결 흐름)
7. Architecture(아키텍처)
8. Technical Deep Dive(핵심 코드/설계)
9. Core Logic / Data Flow(핵심 로직/데이터 흐름)
10. Demo Flow + Evidence(데모와 증빙)
11. Test Strategy + Verification Dashboard(테스트/검증)
12. Results / Before & After(결과)
13. Troubleshooting(문제 해결)
14. Learning Outcomes / Evaluation Q&A(학습성과/평가질문)
15. Limitation / Next(한계와 고도화)
16. Conclusion
17. Q&A

### 선택 슬라이드
- Security / Reliability(보안/신뢰성)
- Collaboration / Git(협업/Git)
- 정량 비교
- 코드 상세
- API 명세
- ERD(Entity-Relationship Diagram, 개체-관계도)
- 사용자 흐름(User Journey)
- 성능/복잡도 분석

---

## 2. 발표 대상별 깊이 조정

### 학부 / 입문 평가
- 무엇을 만들었는가
- 어떻게 동작하는가
- 실제로 실행했는가
- 핵심 개념을 자기 말로 설명할 수 있는가

### 석사·박사 / 연구실
- 왜 이 구조를 선택했는가
- 다른 대안은 무엇이었는가
- 어떤 Trade-off(트레이드오프, 상충관계)가 있는가
- 검증 설계가 충분한가
- 재현성(Reproducibility, 재현 가능성)이 있는가

### 연구원 / 학회 발표
- 핵심 주장 1문장
- 문제의 차별점 / Gap(갭, 기존 한계)
- Method(방법)와 Evaluation(평가) 구조
- Result(결과)의 의미
- Limitation(한계)과 Generalizability(일반화 가능성)

---

## 3. B1-1 ~ B7-2 미션별 강조 슬라이드

| 미션 | 핵심 발표 포인트 | 반드시 시각화할 것 |
|---|---|---|
| B1-1 | Linux/OS, 권한, SSH/UFW, monitor.sh, cron, 로그 | 시스템 구성도, 권한표, 관제 로그, 자동화 흐름 |
| B1-2 | OOM, CPU Spike, Deadlock, Root Cause Analysis | 시간축 로그, Before/After, 원인-조치-검증 |
| B2-1 | Python CLI, 파일 영속화, Generator, Decorator, Type Hint | CLI 실행, 계층 구조, 오류 처리, import/export |
| B2-2 | GitHub Flow, PR, Review, Conflict | Issue→Branch→PR→Review→Merge, 충돌 해결 증빙 |
| B3-1 | Hash Map, Doubly Linked List, Heap, LRU, TTL | 자료구조 연결도, 복잡도, 불변조건 |
| B3-2 | DAG, BFS/탐색, 정렬, Inverted Index | 커밋 그래프, 탐색 경로, 복잡도 |
| B4-1 | HTML/CSS/JS, DOM, GitHub API, Responsive | 모바일/데스크톱 화면, 이벤트→DOM 흐름 |
| B4-2 | React, SPA, Routing, State, useEffect, CRUD | Component tree, Event→State→Render 흐름 |
| B5-1 | SQL, PK/FK, JOIN, GROUP BY, Integrity | ERD, 핵심 SQL, 실행 결과 |
| B5-2 | FastAPI, SSR, ORM, CRUD, PRG, Layering | Request→Router→Service→Repository→DB |
| B5-3 | Authentication/Authorization, Relationship, State Change | 인증/인가 흐름, 보호 경로, ERD, 상태 변경 |
| B6-1 | VPC, Subnet, Route, IGW, EC2, SG, IAM | 클라우드 아키텍처, 트래픽 흐름, 최소권한 |
| B6-2 | AI API, git diff, Prompt, Parameters, Error Handling | Git diff→Prompt→API→Validation 파이프라인 |
| B7-1 | AI Chatbot, FastAPI, Auth, DB Log, Team Collaboration | End-to-End 서비스 파이프라인, 팀 역할/PR |
| B7-2 | Full-stack, User Ownership, Board CRUD, REST, Cloud | 전체 아키텍처, ERD, API, 배포, 데이터 소유권 |

---

## 4. 슬라이드 제목 작성 규칙

나쁜 제목:
- 아키텍처
- 테스트 결과
- 문제 해결

좋은 제목:
- Router–Service–Repository 분리로 요청 흐름을 추적 가능하게 만들었다
- 필수 요구사항 12개를 자동 테스트와 실환경 검증으로 모두 확인했다
- 403 오류를 인증 의존성 경로로 좁혀 회귀 테스트까지 추가했다

원칙: 제목만 읽어도 발표 논리가 이어져야 한다.

---

## 5. Master Prompt — 실제 미션 발표자료 생성용

```text
[역할]
당신은 대학원 연구발표 수준의 소프트웨어 엔지니어링 발표자료 설계자다.
평가자가 짧은 시간 안에 요구사항 충족, 설계의 타당성, 구현의 완성도, 실제 검증 증거,
학습자의 이해 수준을 확인할 수 있는 PowerPoint를 설계한다.

[입력]
- 미션: B?-?
- 공식 Mission PDF / Evaluation
- GitHub Repository
- README
- 핵심 코드
- 테스트 결과
- 실제 실행 로그 및 스크린샷
- 발표 시간: __분
- 발표 대상: 코디세이 평가자 / 학부 / 대학원 / 연구원 / 학회

[Source of Truth]
1. 공식 Mission PDF
2. 공식 Evaluation
3. 실제 Repository와 실행 결과
4. README / Evidence
일반적인 모범사례가 공식 요구사항을 바꾸지 않게 한다.

[발표 원칙]
1. 한 슬라이드 = 한 주장
2. 제목만 읽어도 발표 논리가 이어지게 작성
3. 기능 나열보다 Requirement → Design → Implementation → Verification → Evidence 흐름
4. 실제 실행하지 않은 것은 PASS라고 표시하지 않음
5. 문단보다 다이어그램, 비교표, 코드 일부, 실행 캡처 사용
6. 스크린샷마다 “이 화면이 무엇을 증명하는지” 캡션 작성
7. 핵심 코드만 10~18줄 이내로 사용
8. 기술 선택에는 반드시 Why를 포함
9. 영문 용어는 한글(English, 약어)로 병기
10. 부록에는 세부 코드, 로그, ERD, API, 테스트 결과 배치

[기본 목차]
1. Cover
2. Executive Summary
3. Mission Brief
4. Requirement → Evidence Matrix
5. Problem → Objective
6. Solution Overview
7. Architecture
8. Technical Deep Dive
9. Core Logic / Data Flow
10. Demo Flow
11. Demo Evidence
12. Test Strategy
13. Verification Dashboard
14. Results / Before & After
15. Troubleshooting
16. Security / Reliability (필요 시)
17. Collaboration / Git (필요 시)
18. Learning Outcomes / Evaluation Q&A
19. Limitations / Next
20. Conclusion
21. Q&A

[출력]
각 슬라이드마다 다음을 작성한다.
- Slide No.
- 주장형 제목
- 핵심 메시지 1문장
- 들어갈 시각 자료
- 본문 3~5개 이내
- 발표자가 말할 핵심 설명
- 필요한 실제 증빙 파일/링크
- 예상 평가 질문 1~2개

마지막에:
- 10분 발표용 축약안
- 15분 발표용 권장안
- 부록 구성
- 발표 전 최종 체크리스트
를 작성한다.
```

---

## 6. 디자인 규격

- Navy #081B2F: 표지 / Conclusion / Q&A
- Blue #2F80ED: 핵심 구조 / 검증
- Teal #19A89D: 구현 / 데이터 흐름
- Amber #F3A61D: 주의 / Trade-off / 실환경
- Red #D95D58: 오류 / 위험 / 실패
- Green #2FA66A: PASS / 성공
- 배경: #F6F8FB

권장 글자 크기:
- 표지 제목 30~34pt
- 일반 슬라이드 제목 25~29pt
- 카드 제목 13~17pt
- 본문 10~14pt
- 캡션 8~10pt

---

## 7. 발표 전 최종 체크리스트

- 공식 요구사항 누락이 없는가
- 모든 PASS에 실제 증빙이 있는가
- 예상 결과와 실제 결과를 구분했는가
- 각 슬라이드 제목이 결론형 문장인가
- 코드가 너무 작지 않은가
- 캡처의 핵심 지점이 보이는가
- 민감정보가 가려졌는가
- Q&A용 부록이 있는가
- 10분/15분 시간에 맞춰 리허설했는가

---

상위 안내: [`README.md`](README.md)
