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
| B1-1 | **CORE READY** | 15-Step Guide, `/opt/agent-app` 권한 모델, strict UFW/effective-permission verify, hardened monitor, mapping/Q&A/evidence/status 준비. Runtime만 잔여 |
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
| B4-2 | **CORE READY** | React SPA, Supabase remote CRUD, routes/components/hooks/form/state/deploy/evidence 기준본 준비 |
| B5-2 | **CORE READY** | Memo CRUD, PRG, SQLite/SQLAlchemy, Guide/verify/mapping/evidence/status 준비 |
| B5-3 | **CORE READY** | Session auth, Depends 보호, User/Project/Task 관계, 상태변경, Guide/verify/mapping/evidence/status 준비 |
| B7-2 | **CORE READY** | Full-stack REST, password hash/token auth, user-scoped Chat, Post ownership, frontend, ERD/API/Architecture, cloud/collaboration/evidence/runtime plans 준비 |

## 집계

- **CORE READY:** 7개 — B1-1, B4-2, B5-2, B5-3, B6-2, B7-1, B7-2
- **ADVANCED:** 8개 — B1-2, B2-1, B2-2, B3-1, B3-2, B4-1, B5-1, B6-1
- **PARTIAL:** 0개
- **SCAFFOLD:** 0개
- **Runtime CLEAR:** 0개

## 최근 변경

### B1-1 ADVANCED → CORE READY

자체감사에서 실제 Runtime 실패 가능성이 있던 설계를 보완했습니다.

- `AGENT_HOME=/opt/agent-app` Golden Path로 상위 경로/공유 권한 모순 해소
- upload는 `agent-common`, api_keys/log는 `agent-core`로 분리하고 `runuser`로 effective access 검증
- 제공 실행 파일을 canonical `agent-app`으로 설치하고 `pgrep -x` 사용
- UFW active 환경에서 `20022` 사전 허용 후 `sshd -t`/`sshd -T`/reload/새 접속/최종 Firewall 정리 순서 확정
- UFW default deny incoming + 필수 두 포트 + extra ALLOW IN 없음까지 verify
- Process/Port failure와 Warning을 안전한 environment override로 재현
- `/tmp` 격리 경로에서 실제 10MB/10개 회전 검증
- Beginner Guide STEP 01~15, Checklist, Reference Status, Mapping/Q&A 동기화

### B4-2 PARTIAL → CORE READY
React/Vite/Router, routes, reusable components, custom hooks, form/state UX, Supabase remote CRUD/schema/env, deploy/evidence 기준본을 준비했습니다.

### B5-2 SCAFFOLD → CORE READY
Memo 단일 도메인 FastAPI/Jinja2/SQLAlchemy/SQLite CRUD, 303 PRG, 레이어 분리, verify/setup/reset/DB inspect, Mapping/Q&A/Evidence/Guide/Checklist를 준비했습니다.

### B5-3 SCAFFOLD → CORE READY
세션 기반 인증, `Depends` 보호, User→Project→Task 관계, `back_populates`, cascade, Task 상태 전환 Service와 검증/학습 자료를 준비했습니다.

### B7-2 SCAFFOLD → CORE READY
회원가입/password hash, token auth/logout revoke, User-scoped ChatSession/Message, Post ownership REST, frontend, ERD/API/Architecture, collaboration/deployment/evidence 계획을 준비했습니다.

위 미션 모두 실제 Runtime/Evidence는 Phase C에서만 PASS 처리합니다.

## 우선순위

1. **B1-2** — ADVANCED 자체감사/정합성 마감
2. B2-1 / B2-2 / B3-1 / B3-2 / B4-1 / B5-1 / B6-1 — ADVANCED → CORE READY
3. B1-1 / B4-2 / B5-2 / B5-3 / B6-2 / B7-1 / B7-2 — CORE READY canonical 최종 정합성 검사
4. **Phase B — Cross-Mission Audit**
5. **Phase C — B1-1부터 Runtime CLEAR**

## Phase A 종료 Gate

15개 미션 모두에서 Source 분석, 필수/선택/Runtime 분리, 최소 충분 Reference 구현, 자동 검증 도구, Secret 정책, Requirement→Implementation→Verification→Evidence 매핑, Beginner Guide 정합성, 허위 PASS 없음, Runtime 항목 분리, BLOCKER/MAJOR 0을 확인한 뒤 Phase B로 이동합니다.
