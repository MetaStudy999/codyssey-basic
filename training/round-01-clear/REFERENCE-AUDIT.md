# R01 — Reference Build Audit

감사일: 2026-08-16

## 목적

Phase A에서 B1-1~B7-2 기준 구현·학습자료·검증계획이 어디까지 준비되었는지 **15개 미션 저장소의 현재 `main`**과 `training/round-01-clear/` 실제 구조를 기준으로 점검합니다.

이 문서의 `Reference Build` 판정은 Runtime Mission 상태와 다릅니다.

- Reference 자료가 있어도 실제 실행·검증·Evidence가 없으면 `✅ CLEAR`가 아닙니다.
- 과거 실행 결과는 현재 R01 Runtime PASS로 승계하지 않습니다.
- 실제 Runtime 상태는 `PROGRESS.md`의 네 가지 상태만 사용합니다.

## 판정 기준

### CORE READY
기준 구현, 검증 도구, 요구사항 매핑, 학습/증빙 자료가 핵심적으로 준비되어 있고 저장소 내부 `REFERENCE-STATUS` 등에서 Phase C Runtime만 남았음이 명확한 상태.

### ADVANCED
`REFERENCE-BUILD.md`와 실제 reference/docs/environment/evidence 또는 상당한 Beginner Guide/Checklist가 존재하지만, canonical 문서 동기화·구현 내용 자체감사·최종 품질 Gate가 남은 상태.

### PARTIAL
Reference 설계 또는 일부 구현은 있으나 요구사항 전체 기준본이 닫히지 않은 상태.

### SCAFFOLD
R01 README/BEGINNER-GUIDE/CHECKLIST 골격 중심으로, 실제 기준 구현을 새로 채워야 하는 상태.

## 15개 저장소 감사 결과

| 미션 | 분류 | 판정 | 현재 `main`에서 확인한 근거 | Phase A 잔여 작업 |
|---|---|---|---|---|
| B1-1 | 필수 | **ADVANCED** | 상세 Beginner Guide/Checklist, `REFERENCE-BUILD.md`, `monitor.sh`, environment/docs/evidence | 전체 Runtime Step 구체화, agent archive 확인, 자체감사 |
| B1-2 | 필수 | **ADVANCED** | 23KB Beginner Guide, 4.8KB Checklist, `REFERENCE-BUILD.md`, docs/environment/evidence, `monitor.sh` | 장애 3종 Reference 내용/증빙 템플릿 최종 자체감사 |
| B2-1 | 필수 | **ADVANCED** | 23KB Beginner Guide, 4.3KB Checklist, `REFERENCE-BUILD.md`, reference/docs/environment/evidence | CLI/저장/검색/요약/import-export 기준 구현 자체감사 |
| B2-2 | 필수 | **ADVANCED** | 19KB Beginner Guide, 5.1KB Checklist, `REFERENCE-BUILD.md`, reference/docs/environment/evidence | 실제 팀 협업·PR·리뷰 Runtime과 Reference 자료 분리 최종검토 |
| B3-1 | 필수 | **ADVANCED** | 15KB Beginner Guide, 3.9KB Checklist, `REFERENCE-BUILD.md`, reference/docs/environment/evidence | 자료구조/명령/TTL/LRU 테스트 및 가이드 자체감사 |
| B3-2 | 필수 | **ADVANCED** | `REFERENCE-BUILD.md`, reference/docs/environment/evidence 존재 | Mini Git 구현·알고리즘·가이드/체크리스트 완성도 감사 |
| B4-1 | 필수 | **ADVANCED** | `REFERENCE-BUILD.md`, reference/docs/environment/evidence 존재 | 포트폴리오/GitHub API/Pages 기준본 자체감사 |
| B5-1 | 필수 | **ADVANCED** | `REFERENCE-BUILD.md`, reference/docs/environment/evidence 존재 | SQL 스키마·샘플·15개 쿼리·검증 산출물 자체감사 |
| B6-1 | 필수 | **ADVANCED** | `REFERENCE-BUILD.md`, reference/docs/environment/evidence 존재. Beginner Guide/Checklist는 아직 scaffold 크기 | AWS Reference 구현과 canonical 가이드/체크리스트 동기화 |
| B6-2 | 필수 | **CORE READY** | `REFERENCE-STATUS.md`: collector/client/CLI/validator/tests/verify/secret scan 등 완료 표시 | canonical 문서 최종 동기화; 실제 Provider/API는 Phase C |
| B7-1 | 필수 Term Project | **CORE READY** | `REFERENCE-STATUS.md`: auth/AI/DB/log/docs/verify 기준본 완료 표시 | 실제 AI/브라우저/팀 협업/외부 배포는 Phase C |
| B4-2 | 선택 | **PARTIAL** | `REFERENCE-BUILD.md`, reference 존재. Beginner Guide/Checklist는 scaffold 크기 | React CRUD/remote backend/state/form/deploy 기준본 완성 |
| B5-2 | 선택 | **SCAFFOLD** | R01 README/BEGINNER-GUIDE/CHECKLIST만 확인 | FastAPI CRUD 전체 Reference Build |
| B5-3 | 선택 | **SCAFFOLD** | R01 README/BEGINNER-GUIDE/CHECKLIST만 확인 | 인증/인가/3모델 연관관계/상태변경 전체 Reference Build |
| B7-2 | 선택 Term Project | **SCAFFOLD** | R01 README/BEGINNER-GUIDE/CHECKLIST만 확인 | Project B 풀스택/소유권/REST/배포/기술문서 전체 Reference Build |

## 집계

- **CORE READY:** 2개 — B6-2, B7-1
- **ADVANCED:** 9개 — B1-1, B1-2, B2-1, B2-2, B3-1, B3-2, B4-1, B5-1, B6-1
- **PARTIAL:** 1개 — B4-2
- **SCAFFOLD:** 3개 — B5-2, B5-3, B7-2
- **Runtime CLEAR:** 0개

이 집계는 'Reference 준비도'이며, 공식 미션 통과율이 아닙니다.

## 우선순위

### Priority 1 — Scaffold → 실제 Reference
1. B5-2
2. B5-3
3. B7-2

### Priority 2 — Partial 마감
4. B4-2

### Priority 3 — Advanced 자체감사/동기화
5. B1-1
6. B1-2
7. B2-1
8. B2-2
9. B3-1
10. B3-2
11. B4-1
12. B5-1
13. B6-1

### Priority 4 — Core Ready 최종 정합성 검사
14. B6-2
15. B7-1

## Phase A 종료 Gate

15개 미션 모두에 대해 다음이 충족되어야 Phase B로 이동합니다.

- Source of Truth 분석 완료
- 필수/선택/실제환경 요구 분리
- 최소 충분 Reference 구현 준비
- 자동 검증 가능한 테스트/verify 준비
- Secret 정책 확인
- Requirement → Implementation → Verification → Evidence 매핑
- 입문자 가이드가 실제 구현과 일치
- 실제 실행하지 않은 항목에 허위 PASS 없음
- Runtime 전용 항목을 명확히 분리
- 자체검토에서 BLOCKER/MAJOR 없음

그 다음 **Phase B — Cross-Mission Audit**에서 15개를 횡단하여 버전·포트·환경·DB·Secret·배포·선후관계 충돌을 점검합니다.
