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

| 미션 | 판정 | 핵심 근거 / Runtime 잔여 |
|---|---|---|
| B1-1 | **CORE READY** | safe SSH/UFW, permission model, strict verify, hardened monitor, full guide/status. Runtime 잔여 |
| B1-2 | **CORE READY** | Runtime Safety, controlled experiment, diagnostic monitor, runtime verify/status. 장애 Runtime 잔여 |
| B2-1 | **CORE READY** | CLI/persistence/generator/atomic rewrite, boundaries, verify/status. CLI Runtime 잔여 |
| B2-2 | **CORE READY** | team skeleton, collaboration policy, local verify, GitHub runtime audit/status. 팀 협업 Runtime 잔여 |
| B3-1 | **CORE READY** | custom DLL/HashMap/MinHeap, LRU/TTL/OOM edges, verify/status. REPL Runtime 잔여 |
| B3-2 | **CORE READY** | Mini Git DAG/branch/index/custom sort/BFS, edge tests, Guide/status. REPL Runtime 잔여 |
| B4-1 | **CORE READY** | Vanilla HTML/CSS/JS, explicit STATE, API states, responsive/static/runtime gates. Browser/API/Pages 잔여 |
| B5-1 | **CORE READY** | SQLite 4-table schema, PK/FK/constraints, 10+ rows, Q01~Q16, strict verify, runner/Guide/status. SQL Runtime 잔여 |
| B6-1 | **CORE READY** | AWS VPC/Public Subnet/IGW/Route/SG/EC2/Nginx/IAM/Cleanup reference, read-only runtime verify, Guide/status. Cloud Runtime 잔여 |
| B6-2 | **CORE READY** | collector/client/CLI/validator/tests/verify/secret scan. 실제 AI API Runtime 잔여 |
| B7-1 | **CORE READY** | auth/AI/DB/log/docs/verify 핵심 기준본. browser/AI/deploy Runtime 잔여 |
| B4-2 | **CORE READY** | React SPA/Supabase CRUD/routes/components/hooks/form/state/deploy/evidence. Runtime 잔여 |
| B5-2 | **CORE READY** | FastAPI CRUD/PRG/SQLite/SQLAlchemy/Guide/verify/mapping/evidence. Runtime 잔여 |
| B5-3 | **CORE READY** | Session auth/Depends/relations/state transition/Guide/verify/mapping/evidence. Runtime 잔여 |
| B7-2 | **CORE READY** | Full-stack REST/auth/user-scoped AI Chat/ownership/docs/deploy/evidence. Runtime 잔여 |

## 집계

- **CORE READY:** 15개
- **ADVANCED:** 0개
- **PARTIAL:** 0개
- **SCAFFOLD:** 0개
- **Runtime CLEAR:** 0개

## 마지막 자체감사 핵심

### B6-1 ADVANCED → CORE READY

- 공식 필수 Region을 `ap-northeast-2`로 고정
- VPC→Public Subnet→IGW→Route→SG→EC2→Nginx 흐름과 외부/내부 검증 분리
- HTTP 80 public, SSH 22 learner CIDR-only, all-traffic public 금지
- read-only verifier에 Route Table↔Subnet, EC2↔Subnet/SG, Public IPv4 검증 추가
- external `/health`, Runtime Evidence, architecture PNG/PDF, Troubleshooting/Cleanup actual-completion gate 추가
- Beginner Guide / Checklist / Status / Root README 동기화
- 실제 AWS Runtime/과금 정리는 PASS 처리하지 않음

### B5-1 ADVANCED → CORE READY

- 공식 Query 범위를 Q01~Q16으로 명시
- BASIC 4 / JOIN 4 / INNER 2+ / LEFT 1+ / AGGREGATE 3 / SUBQUERY / UPDATE / DELETE / INDEX 직접 매핑
- PK/FK/NOT NULL/UNIQUE를 실제 SQLite 실패 경로까지 검사하도록 verifier 강화
- index 요구를 Q16에 포함하고 Query Plan 추가
- runtime evidence runner, ERD, detailed Guide/Checklist/Status 동기화

### B4-1 / B3-2 / B3-1 / B2-2 / B2-1 / B1-2 / B1-1

각 미션의 핵심 구현, 실패 경계, 자동 검증, Evidence 계획, 설명형 평가를 CORE READY 수준으로 보완했습니다.

## Phase A 종료 Gate 결과

| Gate | 결과 |
|---|---|
| Source 분석 | PASS |
| 필수/선택/Runtime 분리 | PASS |
| 최소 충분 Reference 구현 | PASS |
| 자동/정적 검증 설계 | PASS |
| Secret 정책 | PASS |
| Requirement→Implementation→Verification→Evidence | PASS |
| Beginner Guide / Checklist 정합성 | PASS |
| 허위 Runtime PASS 없음 | PASS |
| Runtime 항목 별도 분리 | PASS |
| Phase A BLOCKER/MAJOR | **0** |

**Phase A Reference Build는 15/15 CORE READY로 닫습니다.**

단, 이는 공식 미션 통과가 아닙니다. 실제 Runtime CLEAR는 여전히 0/15입니다.

## 다음 단계

1. **Canonical Final Consistency Audit** — 15개 저장소에서 명칭·상태·경로·검증 Gate 최종 정합성 검사
2. **Phase B — Cross-Mission Audit** — OS/Python/Node/DB/Port/Secret/Cloud/선후관계/재사용 환경 충돌 검사
3. **Phase C — Runtime CLEAR** — B1-1부터 실제 실행·Evidence 후 순차 CLEAR
