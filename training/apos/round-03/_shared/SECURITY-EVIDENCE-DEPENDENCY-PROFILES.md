# Security / Evidence / Dependency Profiles

> APOS Round 03 내부 실행 보완 기준.
>
> 공식 CODYSSEY Mission 요구사항·평가기준을 추가하거나 대체하지 않는다.
> `recommended_predecessors`는 APOS 내부 기술 학습 순서 권고이며 공식 선행조건이 아니다.

## 1. Security Profile(보안 프로파일)

| Profile | 핵심 검증 |
|---|---|
| WEB_PUBLIC_BASELINE | 공개 페이지 Secret 비노출, 외부 링크/폼 안전성, 기본 입력 검증 |
| SPA_PUBLIC_BASELINE | WEB 기본 + 클라이언트 상태/외부 API·환경변수 노출 확인 |
| LOCAL_DATA_BASELINE | 로컬 파일 입력 검증, 경로·데이터 손상 예외 처리 |
| SCM_COLLAB_GOVERNANCE | Branch/PR 권한, 리뷰 흐름, Secret Commit 방지 |
| CLOUD_IAM_NETWORK | IAM 최소권한, Network Boundary, 공개 포트, Credential 보호, 비용 영향 |
| AI_API_HITL | API Key 보호, 모델 출력 비신뢰, Diff 검토, Human-in-the-Loop(HITL, 사람 승인) |
| HOST_PRIVILEGE_MONITOR | sudo/root 최소화, 서비스·cron·방화벽 변경 Gate, 로그·복구 |
| HOST_DIAGNOSTIC_SAFETY | 장애 재현 격리, 파괴적 명령 금지/승인, 최소 수정, 복구 |
| SERVICE_MEMORY_SAFETY | 입력 제한, 메모리/TTL 경계, 자원 고갈·비정상 명령 |
| VCS_INTEGRITY | Hash/Object 무결성, 경로 안전, 손상 입력 처리 |
| DATABASE_INTEGRITY | Constraint, Transaction, SQL Injection 기본 방어, Backup/Restore |
| API_INPUT_DB | 입력 검증, 오류코드, DB Transaction, Secret/CORS 기본 점검 |
| AUTHN_AUTHZ_HIGH | Password Hash, Authentication/Authorization 분리, Session/JWT, 권한 Negative Test |
| AI_SERVICE_SAFETY | AI API/Prompt/Data 경계, Safety, Privacy, Rate/Cost, Observability |
| AI_FULLSTACK_HIGH | AI_SERVICE + Front/Back/Auth/DB/Streaming/Cloud 전체 Trust Boundary |

## 2. Evidence Profile(증빙 프로파일)

| Profile | 최소 APOS 증빙 방향 |
|---|---|
| WEB_RUNTIME_VISUAL | Desktop/Mobile Screenshot + 브라우저 Runtime + 링크/폼/배포 확인 |
| SPA_BUILD_RUNTIME | Build 결과 + SPA Runtime + 상태/라우팅 + Loading/Error 화면 |
| DATA_APP_TEST | 정상/경계/오류 입력 + 저장/불러오기 + 단위 테스트 |
| GIT_COLLAB_TRACE | Issue → Branch → Commit → PR → Review → Merge/Conflict trace |
| CLOUD_DEPLOYMENT | Architecture + 실제 Endpoint + Network/Security 설정 + 배포/복구 증빙 |
| AI_DIFF_RUNTIME | 입력→모델 출력→Diff→사람 승인 흐름 + 실패/환각 사례 |
| HOST_MONITOR_RUNTIME | Metric/Log/Threshold/Schedule + 정상/장애 감지 + 복구 |
| TROUBLESHOOT_BEFORE_AFTER | 장애 전 지표 → 진단 → 최소 수정 → 수정 후 지표 |
| DATA_STRUCTURE_BENCHMARK | 명령 결과 + 경계값 + Benchmark + 자원 사용 관찰 |
| VCS_OBJECT_INTEGRITY | Object/Tree/Commit 생성·조회 + Hash/손상 검증 |
| DB_SCHEMA_QUERY | ERD/Schema + CRUD/Join/Constraint + Query Plan + Transaction |
| API_CRUD_RUNTIME | API Contract + 정상/오류 HTTP + DB 반영/롤백 |
| AUTH_SECURITY_RUNTIME | 로그인/로그아웃 + 권한 성공/실패 + Session/JWT + 비밀번호 저장 검증 |
| AI_SERVICE_E2E | 사용자 입력→API→모델/데이터→응답 E2E + 평가 Dataset + 로그/지연/비용 |
| AI_FULLSTACK_E2E | B7-1 전체 + Front/Back/Auth/Streaming/DB/Deploy 전체 흐름 |

## 3. Dependency Profile(선행관계 프로파일)

Registry의 `recommended_predecessors`는 다음 목적에만 사용한다.

```text
학습 재사용
→ 기존 개념/Artifact 재사용 후보 탐색
→ Preflight에서 현재 Mission 요구와 다시 대조
```

현재 내부 권고:

```text
B1-1 → B1-2
B1-1 → B3-1

B2-2 → B3-2
B4-1 → B4-2
B2-2 → B5-2

B6-1 → B6-2 → B6-3

B1-1 + B3-2 + B6-1 → B7-1
B7-1 + B1-2 + B6-3 → B7-2
```

이는 공식 Mission 선행조건을 의미하지 않는다.

## 4. Risk Level(위험도)

- **LOW**: 주로 로컬/정적 결과물. 외부 계정·시스템 변경 영향이 작음.
- **MEDIUM**: 협업·서비스·상태·데이터 무결성에 영향.
- **HIGH**: Cloud, Host, Auth, AI API, 공개 서비스 등 권한·비용·보안 영향이 큼.

위험도가 높을수록 다음을 강화한다.

```text
Fresh Readback
+ Explicit Scope
+ HITL Approval
+ Backup/Rollback
+ Negative Test
+ Evidence
+ Independent QA
```
