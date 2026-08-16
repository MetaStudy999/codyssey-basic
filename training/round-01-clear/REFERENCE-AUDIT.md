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
| B1-1 | **CORE READY** | 15-Step Guide, `/opt/agent-app` 권한 모델, strict UFW/effective-permission verify, hardened monitor, mapping/Q&A/evidence/status. Runtime만 잔여 |
| B1-2 | **CORE READY** | Runtime Safety, controlled experiment matrix, hardened diagnostic monitor, 3 report/verify/mapping/status. 실제 장애 Runtime만 잔여 |
| B2-1 | **CORE READY** | full CLI/JSONL 3-file persistence/generator/atomic rewrite, boundary unit tests, side-effect-light verify/status. 실제 CLI/Evidence만 잔여 |
| B2-2 | **ADVANCED** | 상세 Guide/Checklist, REFERENCE-BUILD, reference/docs/environment/evidence. 팀 협업 Runtime 분리 최종검토 |
| B3-1 | **ADVANCED** | 상세 Guide/Checklist, REFERENCE-BUILD, reference/docs/environment/evidence. 자료구조 테스트/가이드 자체감사 |
| B3-2 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. Mini Git 완성도 감사 |
| B4-1 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. Portfolio/API/Pages 자체감사 |
| B5-1 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. SQL 산출물 자체감사 |
| B6-1 | **ADVANCED** | AWS Reference 구조 존재. canonical Guide/Checklist 동기화 필요 |
| B6-2 | **CORE READY** | collector/client/CLI/validator/tests/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **CORE READY** | React SPA, Supabase remote CRUD, routes/components/hooks/form/state/deploy/evidence 기준본 준비 |
| B5-2 | **CORE READY** | Memo CRUD, PRG, SQLite/SQLAlchemy, Guide/verify/mapping/evidence/status 준비 |
| B5-3 | **CORE READY** | Session auth, Depends 보호, User/Project/Task 관계, 상태변경, Guide/verify/mapping/evidence/status 준비 |
| B7-2 | **CORE READY** | Full-stack REST, password hash/token auth, user-scoped Chat, Post ownership, frontend, ERD/API/Architecture, cloud/collaboration/evidence/runtime plans 준비 |

## 집계

- **CORE READY:** 9개 — B1-1, B1-2, B2-1, B4-2, B5-2, B5-3, B6-2, B7-1, B7-2
- **ADVANCED:** 6개 — B2-2, B3-1, B3-2, B4-1, B5-1, B6-1
- **PARTIAL:** 0개
- **SCAFFOLD:** 0개
- **Runtime CLEAR:** 0개

## 최근 자체감사 핵심

### B2-1 ADVANCED → CORE READY

- transaction/category/budget 3종 재오픈 persistence 테스트
- list/search 실제 generator 계약 테스트
- invalid date/type/category/amount와 missing ID 오류 경계
- atomic rewrite temp 잔존/재오픈 검증
- import partial-success row reason, export date-range/조건 검사
- AST parse + `PYTHONDONTWRITEBYTECODE`로 verify 부작용 최소화
- root/subcommand help, `--` option, README/3-file store 자동 점검

### B1-2 ADVANCED → CORE READY

- 전용 장애 실험 환경 Safety Gate
- 동일 host/binary + 핵심 변수 1개 우선 변경하는 experiment matrix
- monitor PID/interval validation + sample/exit markers
- Runtime Evidence minimum, PID/time-series/Secret check
- Deadlock은 PID만으로 단정하지 않고 resource/log/thread 근거 요구

### B1-1 ADVANCED → CORE READY

- `/opt/agent-app` 공유/민감 권한 모델
- effective permission/UFW strict verify
- canonical `agent-app` + `pgrep -x`
- SSH 안전 전환 순서
- safe failure/Warning/10MB rotation validation

### B4-2 / B5-2 / B5-3 / B7-2

이전 Phase A에서 각각 React/Supabase, FastAPI CRUD, Authentication/Relationship, Full-stack AI Chat 기준본을 CORE READY로 전환했습니다.

위 미션 모두 실제 Runtime/Evidence는 Phase C에서만 PASS 처리합니다.

## 우선순위

1. **B2-2** — ADVANCED 자체감사/정합성 마감
2. B3-1 / B3-2 / B4-1 / B5-1 / B6-1 — ADVANCED → CORE READY
3. 현재 CORE READY 9개 — canonical 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## Phase A 종료 Gate

15개 미션 모두에서 Source 분석, 필수/선택/Runtime 분리, 최소 충분 Reference 구현, 자동 검증 도구, Secret 정책, Requirement→Implementation→Verification→Evidence 매핑, Beginner Guide 정합성, 허위 PASS 없음, Runtime 항목 분리, BLOCKER/MAJOR 0을 확인한 뒤 Phase B로 이동합니다.
