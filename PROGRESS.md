# Overall Progress

현재 Active Round: **R01 — CLEAR**

현재 작업 모드: **Phase A — REFERENCE BUILD**

> Phase A에서는 B1-1~B7-2의 기준 구현·학습자료·검증계획을 먼저 준비할 수 있습니다. 단, 실제 Runtime/Evidence가 완료되지 않은 미션은 `✅ CLEAR`로 변경하지 않습니다.

## 2026-08-16 Repository Audit

이번 현황은 통합 저장소의 기존 표만 보지 않고 각 미션 저장소의 `training/round-01-clear/` 실제 내용을 기준으로 재점검했습니다.

### Phase A Reference Build 현황

| 미션 | Reference Build 판정 | 핵심 근거 | 다음 조치 |
|---|---|---|---|
| B1-1 | **상당 부분 완료** | 상세 Beginner Guide/Checklist, `REFERENCE-BUILD.md`, `monitor.sh`, environment/docs/evidence 존재 | Beginner Guide 전체 Runtime Step 마감 + 자체검토 |
| B1-2 | **기준본 준비 완료 기록** | 기존 Phase A 기록 기준 | Phase B에서 canonical 문서 정합성 재검토 |
| B2-1 | **기준본 준비 완료 기록** | 기존 Phase A 기록 기준 | Phase B에서 canonical 문서 정합성 재검토 |
| B2-2 | **기준본 준비 완료 기록** | 기존 Phase A 기록 기준 | Phase B에서 실제 팀 협업/PR Evidence 요구 별도 확인 |
| B3-1 | **기준본 준비 완료 기록** | 기존 Phase A 기록 기준 | Phase B에서 canonical 문서 정합성 재검토 |
| B3-2 | **Reference 구조 진행** | `REFERENCE-BUILD.md`, reference/docs/environment/evidence 존재 | 구현/가이드/체크리스트 완성도 감사 |
| B4-1 | **Reference 구조 진행** | `REFERENCE-BUILD.md`, reference/docs/environment/evidence 존재 | 포트폴리오 구현/배포 검증 계획 완성도 감사 |
| B4-2 | **부분 완료** | `REFERENCE-BUILD.md`, reference 존재, Beginner Guide/Checklist는 scaffold 성격 | React/Supabase 또는 Firebase 기준 구현·가이드 완성 |
| B5-1 | **Reference 구조 진행** | `REFERENCE-BUILD.md`, reference/docs/environment/evidence 존재 | SQL 15개/샘플/검증 산출물 완성도 감사 |
| B5-2 | **초기 골격** | R01 README/BEGINNER-GUIDE/CHECKLIST 중심 | FastAPI CRUD 기준 구현 전체 작성 필요 |
| B5-3 | **초기 골격** | R01 README/BEGINNER-GUIDE/CHECKLIST 중심 | 인증/인가/연관관계 기준 구현 전체 작성 필요 |
| B6-1 | **Reference 자료 진행** | AWS Reference 설계·환경·문서·검증 자료가 작성된 상태 | canonical guide/checklist 동기화 및 전체 감사 |
| B6-2 | **핵심 기준본 준비 완료** | `REFERENCE-STATUS.md`에서 collector/client/CLI/validator/tests/verify/secret scan 완료 표시 | 실제 Provider/API Runtime은 Phase C |
| B7-1 | **핵심 기준본 준비 완료** | `REFERENCE-STATUS.md`에서 인증/AI/DB/log/docs/verify 기준본 완료 표시 | 실제 AI/브라우저/팀협업/배포는 Phase C |
| B7-2 | **초기 골격** | R01 README/BEGINNER-GUIDE/CHECKLIST만 확인 | Project B 전체 Reference Build 필요 |

### Phase A 요약

- **핵심 기준본 준비 완료 또는 완료 기록:** B1-2, B2-1, B2-2, B3-1, B6-2, B7-1
- **상당 부분/Reference 구조 진행:** B1-1, B3-2, B4-1, B5-1, B6-1
- **부분 완료:** B4-2
- **초기 골격:** B5-2, B5-3, B7-2

> 위 분류는 Mission Runtime 상태가 아닙니다. Reference 문서나 코드가 존재해도 실제 실행·검증·Evidence가 없으면 CLEAR가 아닙니다.

## Runtime Mission 상태

| 순서 | 미션 | 구분 | 상태 |
|---:|---|---|---|
| 1 | B1-1 | 필수 | 🟡 ACTIVE |
| 2 | B1-2 | 필수 | ⬜ NOT STARTED |
| 3 | B2-1 | 필수 | ⬜ NOT STARTED |
| 4 | B2-2 | 필수 | ⬜ NOT STARTED |
| 5 | B3-1 | 필수 | ⬜ NOT STARTED |
| 6 | B3-2 | 필수 | ⬜ NOT STARTED |
| 7 | B4-1 | 필수 | ⬜ NOT STARTED |
| 8 | B5-1 | 필수 | ⬜ NOT STARTED |
| 9 | B6-1 | 필수 | ⬜ NOT STARTED |
| 10 | B6-2 | 필수 | ⬜ NOT STARTED |
| 11 | B7-1 | 필수 Term Project | ⬜ NOT STARTED |
| 12 | B4-2 | 선택 | ⬜ NOT STARTED |
| 13 | B5-2 | 선택 | ⬜ NOT STARTED |
| 14 | B5-3 | 선택 | ⬜ NOT STARTED |
| 15 | B7-2 | 선택 Term Project / 고도화 | ⬜ NOT STARTED |

## 지금부터의 Phase A 작업 순서

미완성도가 높은 항목부터 먼저 닫습니다.

1. **B5-2** — FastAPI CRUD Reference Complete
2. **B5-3** — 인증/인가/연관관계 Reference Complete
3. **B7-2** — Project B Reference Complete
4. **B4-2** — React CRUD/원격 데이터/배포 Reference 마감
5. **B1-1** — Beginner Guide 전체 Runtime Step 및 자체검토 마감
6. **B3-2 / B4-1 / B5-1 / B6-1** — 기존 Reference 구조 완성도 감사 및 누락 보완
7. **B1-2 / B2-1 / B2-2 / B3-1 / B6-2 / B7-1** — canonical 문서/상태 정합성 최종 감사

이 순서가 끝나면 **Phase B — Cross-Mission Audit**로 이동합니다.

## R01 작업 흐름

1. **Phase A — Reference Build**: 15개 기준본 선제 준비
2. **Phase B — Cross-Mission Audit**: 환경·포트·버전·Secret·의존성·선후관계 전체 검토
3. **Phase C — Runtime CLEAR**: B1-1부터 실제 실행·검증·Evidence 후 순차 CLEAR

## 상태 정의

- ⬜ `NOT STARTED`: 아직 해당 미션 Runtime 수행을 시작하지 않음
- 🟡 `ACTIVE`: 현재 실제 수행/검증 중인 미션
- ⛔ `BLOCKED`: 실제 의존성 때문에 진행 불가
- ✅ `CLEAR`: 구현·실제 검증·필요 Evidence 완료

문서, Reference 구현 또는 폴더가 존재한다는 이유만으로 CLEAR로 변경하지 않습니다.
