# R01 — Reference Build Audit

감사일: 2026-08-16

## 목적

Phase A에서 B1-1~B7-2 기준 구현·학습자료·검증계획이 어디까지 준비되었는지 각 미션 저장소의 현재 `main`을 기준으로 점검합니다.

이 문서의 `Reference Build` 판정은 Runtime Mission 상태와 다릅니다.

- Reference 자료가 있어도 실제 실행·검증·Evidence가 없으면 `✅ CLEAR`가 아닙니다.
- 과거 실행 결과는 현재 R01 Runtime PASS로 승계하지 않습니다.
- 실제 Runtime 상태는 `PROGRESS.md`의 네 가지 상태만 사용합니다.

## 판정 기준

### CORE READY
공식 Mission/Evaluation 기반의 기준 구현, 검증 도구, 요구사항 매핑, 학습/증빙 자료가 핵심적으로 준비되어 있고 Phase C Runtime만 남은 상태.

### ADVANCED
Reference 구현과 docs/environment/evidence 구조가 실제로 만들어져 있으나 canonical 가이드·체크리스트 동기화나 자체감사가 남은 상태.

### PARTIAL
Reference 설계 또는 일부 구현은 있으나 요구사항 전체 기준본이 닫히지 않은 상태.

### SCAFFOLD
R01 README/BEGINNER-GUIDE/CHECKLIST 골격 중심으로, 실제 기준 구현을 새로 채워야 하는 상태.

## 현재 감사 결과

| 미션 | 분류 | 판정 | 확인 근거 | Phase A 잔여 작업 |
|---|---|---|---|---|
| B1-1 | 필수 | ADVANCED | 상세 Beginner Guide/Checklist, REFERENCE-BUILD, monitor.sh, environment/docs/evidence | 전체 Runtime Step 구체화, archive/agent 확인, 자체감사 |
| B1-2 | 필수 | CORE READY 기록 | 통합 진행 기록상 기준본 준비 완료 | 저장소 canonical 구조 재검증 |
| B2-1 | 필수 | CORE READY 기록 | 통합 진행 기록상 기준본 준비 완료 | 저장소 canonical 구조 재검증 |
| B2-2 | 필수 | CORE READY 기록 | 통합 진행 기록상 기준본 준비 완료 | 실제 팀 협업/PR 요구와 Reference 분리 확인 |
| B3-1 | 필수 | CORE READY 기록 | 통합 진행 기록상 기준본 준비 완료 | 저장소 canonical 구조 재검증 |
| B3-2 | 필수 | ADVANCED | REFERENCE-BUILD, reference/docs/environment/evidence 존재 | 구현/가이드/체크리스트 자체감사 |
| B4-1 | 필수 | ADVANCED | REFERENCE-BUILD, reference/docs/environment/evidence 존재 | 포트폴리오/Pages 기준본 자체감사 |
| B5-1 | 필수 | ADVANCED | REFERENCE-BUILD, reference/docs/environment/evidence 존재 | SQL 산출물/검증/가이드 자체감사 |
| B6-1 | 필수 | ADVANCED | AWS Reference 설계 및 다수 환경/문서/검증 자료 준비 | canonical 문서 동기화, 리소스 정리·과금 검토 |
| B6-2 | 필수 | CORE READY | REFERENCE-STATUS에 collector/client/CLI/validator/tests/verify/secret scan 완료 | Phase B canonical 동기화, 실제 API는 Phase C |
| B7-1 | 필수 Term Project | CORE READY | REFERENCE-STATUS에 auth/AI/DB/log/docs/verify 기준본 완료 | 실제 팀 협업/AI/외부 배포는 Phase C |
| B4-2 | 선택 | PARTIAL | REFERENCE-BUILD/reference 존재, 가이드/체크리스트는 scaffold 성격 | React CRUD/remote backend/deploy 기준본 완성 |
| B5-2 | 선택 | SCAFFOLD | R01 README/BEGINNER-GUIDE/CHECKLIST 중심 | FastAPI CRUD 전체 Reference Build |
| B5-3 | 선택 | SCAFFOLD | R01 README/BEGINNER-GUIDE/CHECKLIST 중심 | Auth/Authorization/relationships 전체 Reference Build |
| B7-2 | 선택 Term Project | SCAFFOLD | R01 README/BEGINNER-GUIDE/CHECKLIST 중심 | Project B 풀스택/소유권/REST/배포/문서 전체 Reference Build |

## 우선순위

### Priority 1 — Scaffold를 실제 Reference로 전환
1. B5-2
2. B5-3
3. B7-2

### Priority 2 — Partial 마감
4. B4-2

### Priority 3 — Advanced 자체감사/동기화
5. B1-1
6. B3-2
7. B4-1
8. B5-1
9. B6-1

### Priority 4 — Core Ready 최종 정합성 검사
10. B1-2
11. B2-1
12. B2-2
13. B3-1
14. B6-2
15. B7-1

## Phase A 종료 Gate

15개 미션 모두에 대해 아래가 충족되어야 Phase B로 이동합니다.

- Source of Truth 분석 완료
- 필수/선택/실제환경 요구 분리
- 최소 충분 Reference 구현 준비
- 자동 검증 가능한 테스트/verify 준비
- Secret 정책 확인
- Requirement → Implementation → Verification → Evidence 매핑
- 입문자 가이드가 실제 구현과 일치
- 실제 실행하지 않은 항목에 허위 PASS 없음
- Runtime 전용 항목을 NEEDS-RUNTIME으로 분리

그 다음 Phase B에서 15개 미션을 횡단하여 버전·포트·환경·DB·Secret·배포·선후관계 충돌을 점검합니다.
