# R01 — Reference Build Audit

감사일: 2026-08-17

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
| B1-1 | **CORE READY** | safe SSH/UFW, `/opt/agent-app` permission model, strict verify, hardened monitor, full guide/status. Runtime만 잔여 |
| B1-2 | **CORE READY** | Runtime Safety, controlled experiment matrix, diagnostic monitor, runtime verify/status. 실제 장애 Runtime만 잔여 |
| B2-1 | **CORE READY** | CLI/JSONL persistence/generator/atomic rewrite, boundary tests, side-effect-light verify/status. Runtime만 잔여 |
| B2-2 | **CORE READY** | team skeleton, collaboration policies/templates, local verify, GitHub runtime audit/status. 실제 팀 Runtime만 잔여 |
| B3-1 | **CORE READY** | custom DLL/HashMap/MinHeap, LRU/TTL/OOM edge tests, hardened verify/status. 실제 REPL만 잔여 |
| B3-2 | **CORE READY** | Mini Git DAG/branches/indexes/custom merge sort/BFS, no-path/tie/multi-parent tests, detailed Guide/verify/status. 실제 REPL만 잔여 |
| B4-1 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. Portfolio/API/Pages 자체감사 필요 |
| B5-1 | **ADVANCED** | REFERENCE-BUILD, reference/docs/environment/evidence. SQL 산출물 자체감사 필요 |
| B6-1 | **ADVANCED** | AWS Reference 구조 존재. canonical Guide/Checklist 동기화 필요 |
| B6-2 | **CORE READY** | collector/client/CLI/validator/tests/verify/secret scan 완료 기록 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본 완료 기록 |
| B4-2 | **CORE READY** | React SPA, Supabase remote CRUD, routes/components/hooks/form/state/deploy/evidence 준비 |
| B5-2 | **CORE READY** | Memo CRUD, PRG, SQLite/SQLAlchemy, Guide/verify/mapping/evidence 준비 |
| B5-3 | **CORE READY** | Session auth, Depends 보호, relations/state transition, Guide/verify/mapping/evidence 준비 |
| B7-2 | **CORE READY** | Full-stack REST, auth/token, user-scoped Chat, ownership/frontend/docs/deploy/evidence 준비 |

## 집계

- **CORE READY:** 12개 — B1-1, B1-2, B2-1, B2-2, B3-1, B3-2, B4-2, B5-2, B5-3, B6-2, B7-1, B7-2
- **ADVANCED:** 3개 — B4-1, B5-1, B6-1
- **PARTIAL:** 0개
- **SCAFFOLD:** 0개
- **Runtime CLEAR:** 0개

## 최근 자체감사 핵심

### B3-2 ADVANCED → CORE READY

공식 Mission/Evaluation과 현재 Mini Git Reference를 대조해 다음을 보완했습니다.

- INIT/main/HEAD/current user 및 branch pointer 구조 재검토
- 50개 commit의 session unique hash test
- diverged branch에서 parent-before-child LOG 검증
- first commit 전 branch 분기로 disconnected roots를 만들고 `No path` 검증
- multi-parent DAG에서 equal-distance PATH의 lexicographic tie-break 검증
- multi-parent ANCESTORS의 모든 조상/중복 제거 검증
- keyword lowercase + repeated-token duplicate suppression, author case-insensitive index 검증
- stable merge sort equal-key 상대 순서, date/author sort, invalid sort 검증
- malformed quote, Invalid args, Unknown branch/commit/command boundary 강화
- verifier를 AST syntax parse로 변경하고 `sorted()`/`.sort()`/graph library/Secret-pattern scan 강화
- Phase C `--runtime` Evidence Gate 추가
- Evaluation Q&A에 10배 규모 병목, parent-only PATH, dependency-aware author ordering, counter/random hash trade-off 반영
- `REFERENCE-STATUS.md`, 상세 Beginner Guide/Checklist/Mapping/Evidence/canonical README 동기화
- 실제 Runtime 결과는 하나도 PASS로 기록하지 않음

### B3-1 ADVANCED → CORE READY

- 자료구조 collision/resize/LRU/TTL/OOM edge tests, 금지 API verifier, Evaluation 확장 질문과 status 동기화

### B2-2 ADVANCED → CORE READY

- 실제 GitHub activity와 Reference template 분리, server-side collaboration Runtime Audit 강화

### B2-1 ADVANCED → CORE READY

- persistence/generator/atomic rewrite/import-export/error boundaries와 side-effect-light verifier 강화

### B1-2 / B1-1

- isolated fault Runtime Safety / controlled experiment와 safe SSH/UFW/effective permission/monitor validation Gate를 준비

## 우선순위

1. **B4-1** — ADVANCED 자체감사/정합성 마감
2. **B5-1 / B6-1** — ADVANCED → CORE READY
3. 현재 CORE READY 12개 — canonical 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## Phase A 종료 Gate

15개 미션 모두에서 Source 분석, 필수/선택/Runtime 분리, 최소 충분 Reference 구현, 자동 검증 도구, Secret 정책, Requirement→Implementation→Verification→Evidence 매핑, Beginner Guide 정합성, 허위 PASS 없음, Runtime 항목 분리, BLOCKER/MAJOR 0을 확인한 뒤 Phase B로 이동합니다.
