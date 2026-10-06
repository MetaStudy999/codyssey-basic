# APOS Mission Quality Profiles — 미션별 보완 프로파일

> 이 문서는 **APOS 내부 품질 보완 기준**이다. 공식 Mission 요구사항이나 Evaluation(평가)을 추가·대체하지 않는다.
>
> 공식 요구를 먼저 만족한 뒤, 아래 항목은 학습·검증·발표·재현성을 높이는 보완 기준으로 사용한다.

## 공통 품질 기준

모든 Mission은 가능하면 다음 Traceability(추적성)를 유지한다.

```text
Requirement
→ Design
→ Implementation
→ Test
→ Runtime Verification
→ Evidence
→ Evaluation Answer
→ Presentation
```

공통 보완:
- 쉬운 핵심 용어 + 정확한 정의
- Architecture/Data Flow(구조·데이터 흐름)
- 정상 흐름 + 오류 흐름
- 최소 1개 Negative Test(실패/오류 검증)
- Security(보안) 관점
- Recovery/Rollback(복구/되돌리기)
- Evidence Index(증빙 색인)
- 10초/30초/1분 평가 답변
- 재현 가능한 실행 명령과 환경 정보

## Mission별 보완

| Mission | Profile | APOS 내부 보완 포인트 |
|---|---|---|
| **B1-1** | WEB_STATIC | Semantic HTML(의미 구조), Responsive(반응형), Accessibility(접근성), 링크/폼 검증, 브라우저·모바일 확인, 배포 Smoke Test |
| **B1-2** | WEB_SPA | Component 경계, Routing/State 흐름, Build 재현성, Loading/Error 상태, 접근성, 성능 기본 측정 |
| **B2-1** | PYTHON_DATA_APP | 데이터 모델, 입력 검증, 저장/불러오기, 경계값 테스트, 파일 손상/예외 처리, 단위 테스트 |
| **B2-2** | GIT_COLLAB | Branch 전략, Issue→Commit→PR→Review 추적, Conflict 해결 증빙, 역할 분담, CODEOWNERS/보호 규칙 개념 |
| **B3-1** | CLOUD_INFRA | Architecture Diagram, Network/Security Boundary, 배포/접속 검증, Secret 관리, 비용 확인, Backup/Rollback |
| **B3-2** | AI_DEV_TOOL | 입력/출력 Contract, Prompt/Model 경계, Diff 안전성, API Key 보호, Hallucination(환각) 실패 처리, Human Approval |
| **B4-1** | SYSTEM_MONITOR | Metric/Threshold 정의, 로그, Schedule/Service, Least Privilege, 장애 감지 시나리오, 복구·알림 검증 |
| **B4-2** | TROUBLESHOOTING | Symptom→Hypothesis→Measurement→Fix 절차, 재현 가능한 장애, before/after 지표, 최소 수정, 원인 설명 |
| **B5-1** | DATA_STRUCTURE_SERVER | 자료구조·명령 Contract, TTL/경계값, 동시성 고려, 오류 입력, Benchmark(성능 측정), 메모리 관점 |
| **B5-2** | VERSION_CONTROL_CORE | Object/Hash/Tree/Commit 모델, Staging 흐름, 무결성 검증, 손상/중복 입력, 실제 Git과 비교 |
| **B6-1** | SQL_DATABASE | Schema/ERD, 정규화, PK/FK/Constraint, Index, Query Plan, Transaction, Backup/Restore |
| **B6-2** | BACKEND_CRUD | REST/API Contract, Validation, HTTP 오류 코드, DB Transaction, 테스트 격리, API 문서, 보안 기본 |
| **B6-3** | BACKEND_AUTH | Password Hash, Authentication/Authorization 구분, Session/JWT 수명, 관계 모델, 권한 Negative Test, Secret/CSRF 고려 |
| **B7-1** | AI_SERVICE | End-to-End Architecture, Prompt/Model/RAG 경계(해당 시), Safety, Evaluation Dataset, Observability, 비용/지연 측정 |
| **B7-2** | AI_FULLSTACK | B7-1 전체 + Front/Back 계약, Streaming/Async, Auth, 데이터·Vector 계층(해당 시), 성능/부하, 보안, 배포/롤백 |

## B7 Term Project 추가 규칙

B7-1/B7-2는 일반 Mission보다 다음을 강화한다.

- Problem Statement(문제 정의)
- 사용자 시나리오와 Acceptance Criteria(수용 기준)
- End-to-End Architecture
- 데이터/모델/외부 API Provenance(출처)
- 기능 평가 + 품질 평가
- Failure Mode(실패 모드)
- Security/Privacy
- Observability(관측성: 로그·메트릭·트레이스)
- 성능·비용
- Demo Script
- Limitations & Future Work
- 15~18장 수준의 Term Project 발표 구조

## 적용 원칙

각 Mission Preflight에서:
1. 공식 요구사항을 읽는다.
2. 해당 `quality_profile`을 Registry에서 찾는다.
3. 공식 요구와 충돌하지 않는 보완 항목만 채택한다.
4. 불필요한 고도화는 CLEAR 이후로 미룬다.
5. 보완 항목을 수행하지 않았다는 이유만으로 공식 Mission FAIL을 선언하지 않는다.
