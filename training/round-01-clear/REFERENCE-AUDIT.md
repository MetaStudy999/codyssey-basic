# R01 — Reference Build Audit

감사일: 2026-08-16

## 목적

Phase A에서 B1-1~B7-2 기준 구현·학습자료·검증계획이 어디까지 준비되었는지 **15개 미션 저장소의 현재 `main`**과 `training/round-01-clear/` 실제 구조를 기준으로 점검합니다.

Reference Build 판정은 Runtime Mission 상태와 다릅니다. 실제 실행·검증·Evidence가 없으면 `✅ CLEAR`가 아닙니다.

## 판정 기준

- **CORE READY**: 기준 구현, 검증 도구, 요구사항 매핑, 학습/증빙 자료가 핵심적으로 준비되고 Runtime 항목이 명확히 분리됨
- **ADVANCED**: 실제 Reference 구조가 있으나 canonical 문서 동기화·자체감사·품질 Gate가 남음
- **PARTIAL**: 일부 구현/설계는 있으나 요구사항 전체 기준본이 닫히지 않음
- **SCAFFOLD**: 기본 README/Guide/Checklist 골격 중심

## 15개 저장소 감사 결과

| 미션 | 판정 | 핵심 근거 / 잔여 |
|---|---|---|
| B1-1 | **ADVANCED** | 상세 Guide/Checklist, REFERENCE-BUILD, monitor/environment/docs/evidence. Runtime Step/agent archive/자체감사 잔여 |
| B1-2 | **ADVANCED** | 상세 Guide/Checklist, REFERENCE-BUILD, docs/environment/evidence. 최종 자체감사 잔여 |
| B2-1 | **ADVANCED** | 상세 Guide/Checklist, REFERENCE-BUILD, reference/docs/environment/evidence. 기준 구현 자체감사 잔여 |
| B2-2 | **ADVANCED** | 상세 Guide/Checklist, REFERENCE-BUILD, reference/docs/environment/evidence. 팀 협업 Runtime 분리 최종검토 |
| B3-1 | **ADVANCED** | 상세 Guide/Checklist, REFERENCE-BUILD, reference/docs/environment/evidence. 자료구조 테스트/가이드 자체감사 |
| B3-2 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. Mini Git 완성도 감사 |
| B4-1 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. Portfolio/API/Pages 자체감사 |
| B5-1 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. SQL 산출물 자체감사 |
| B6-1 | **ADVANCED** | AWS Reference 구조 존재. canonical Guide/Checklist 동기화 필요 |
| B6-2 | **CORE READY** | collector/client/CLI/validator/tests/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **PARTIAL** | REFERENCE-BUILD/reference 존재. React CRUD/remote/deploy 마감 필요 |
| B5-2 | **CORE READY** | Memo CRUD, PRG, SQLite/SQLAlchemy, Guide/verify/mapping/evidence/status 준비 |
| B5-3 | **CORE READY** | Session auth, Depends 보호, User/Project/Task 관계, 상태변경, Guide/verify/mapping/evidence/status 준비 |
| B7-2 | **CORE READY** | Full-stack REST, password hash/token auth, user-scoped Chat, Post ownership, frontend, ERD/API/Architecture, cloud/collaboration/evidence/runtime plans 준비 |

## 집계

- **CORE READY:** 5개 — B5-2, B5-3, B6-2, B7-1, B7-2
- **ADVANCED:** 9개
- **PARTIAL:** 1개 — B4-2
- **SCAFFOLD:** 0개
- **Runtime CLEAR:** 0개

## 최근 변경

### B5-2 SCAFFOLD → CORE READY
Memo 단일 도메인 FastAPI/Jinja2/SQLAlchemy/SQLite CRUD, 303 PRG, 레이어 분리, verify/setup/reset/DB inspect, Requirements Mapping, Evaluation Q&A, Evidence/Beginner Guide/Checklist를 준비했습니다.

### B5-3 SCAFFOLD → CORE READY
세션 기반 인증, `Depends(require_username)` 보호, 로그인 전/후 UI, User→Project→Task 두 1:N 관계, `back_populates`, cascade 정책, Task 상태 전환 Service, Jinja2 SSR/SQLite, verify/setup/reset/DB inspect, Mapping/Q&A/Evidence/Guide/Checklist를 준비했습니다.

### B7-2 SCAFFOLD → CORE READY
회원가입/PBKDF2 password hash, Bearer access token/logout revoke, User-scoped ChatSession/Message, 타 사용자 Chat 404, Post REST CRUD와 작성자 403, REST frontend client, env-only AI client, ERD/API/Architecture, collaboration/deployment/cleanup/evidence 계획과 검증 도구를 준비했습니다.

세 미션 모두 실제 Runtime/Evidence는 Phase C에서만 PASS 처리합니다.

## 우선순위

1. **B4-2** — 마지막 PARTIAL을 Reference Complete 수준으로 마감
2. B1-1 및 ADVANCED 9개 자체감사/동기화
3. B5-2/B5-3/B6-2/B7-1/B7-2 CORE READY 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## Phase A 종료 Gate

15개 미션 모두에서 Source 분석, 필수/선택/Runtime 분리, 최소 충분 Reference 구현, 자동 검증 도구, Secret 정책, Requirement→Implementation→Verification→Evidence 매핑, Beginner Guide 정합성, 허위 PASS 없음, Runtime 항목 분리, BLOCKER/MAJOR 0을 확인한 뒤 Phase B로 이동합니다.
