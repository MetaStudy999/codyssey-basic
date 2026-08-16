# R01 Phase C — Next Actions

현재 목표는 **B1-1부터 실제 Runtime/Evidence를 확보해 순차적으로 `✅ CLEAR`하는 것**입니다.

현재 운영 모드: **FAST EXECUTE**

현재 실행 경로: **FAST TRACK — 필수 11개 → 선택 4개**

> Phase A/B에서 설계·Reference·Audit·Runbook 준비를 완료했습니다. Phase C에서는 새로운 설계를 반복하지 않고 `Runtime → Verify → Evidence → CLEAR`를 우선합니다.

## FAST TRACK 실행 순서

```text
Stage 1 — REQUIRED CLEAR
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1

Stage 2 — OPTIONAL CLEAR
B4-2 → B5-2 → B5-3 → B7-2
```

FAST TRACK은 선택 미션을 건너뛰는 경로가 아닙니다. **필수 11개를 먼저 모두 CLEAR한 뒤 선택 4개를 수행하여 R01 전체 15개를 완료**합니다.

`FAST EXECUTE`는 한 미션 안에서 불필요한 재설계를 줄이는 운영 방식이고, `FAST TRACK`은 R01의 미션 실행 순서입니다.

## Phase A/B 완료

- [x] Phase A Reference Build — 15/15 CORE READY
- [x] Canonical Final Consistency Audit — PASS 15/15
- [x] Cross-Mission Audit — COMPLETE / BLOCKER 0
- [x] 15개 Runtime command / working-directory / verify / Evidence root 통합
- [x] Mission Dependency Map 동결
- [x] Phase C Preflight 동결
- [x] Phase C Runtime Runbook Freeze
- [x] B5-1 Q01~Q16 문서 drift 교정

## Phase C 실행 우선 원칙

실행 중 새 문제나 개선 아이디어가 생기면 먼저 다음을 판단합니다.

```text
현재 B1-1 CLEAR를 막는가?

YES
→ 원인 확인
→ 최소 수정
→ 재검증
→ 계속 실행

NO
→ Runtime을 멈추지 않음
→ 후속 개선 후보로 미룸
```

즉시 수정 대상은 공식 요구사항 누락, Runtime BLOCKER, Secret/보안, SSH/Data/Cloud 안전 문제, Verify/Evidence 오판정입니다. 현재 CLEAR와 무관한 리팩터링·문서 미세개선·UI 고도화·미래 Round 확장은 뒤로 미룹니다.

운영 비중은 **실행 80~90% / 설계 보정 10~20%**를 지향합니다.

## 현재 Runtime 대상

**B1-1 — 컴퓨터가 알아서 자기 상태를 점검하게 만들기**

Mission 상태: **🟡 ACTIVE**

FAST TRACK 상태:

- Stage 1 Required: **B1-1 진행 중 / 0 of 11 CLEAR**
- Stage 2 Optional: **대기 / 0 of 4 CLEAR**

## B1-1 즉시 실행 순서

1. `PHASE-C-PREFLIGHT.md` 공통 Gate 확인
2. B1-1 repository root / branch / local changes 확인
3. `training/round-01-clear/BEGINNER-GUIDE.md` STEP 01 baseline 수행
4. SSH 20022 safe migration
5. UFW final policy
6. users/groups/effective permission
7. 제공 `agent-app.zip`의 실제 CPU architecture/파일 확인
8. 실제 Agent Boot 5/5 + `Agent READY` + `15034 LISTEN`
9. `monitor.sh` 정상/실패/Warning/rotation
10. `agent-admin` cron 매분 + 실제 log growth
11. `sudo bash training/round-01-clear/environment/verify.sh`
12. `training/round-01-clear/evidence/` 실제 Evidence 연결
13. Evaluation 설명 + Secret 최종 확인
14. 조건 충족 시에만 `✅ B1-1 CLEAR`
15. B1-2를 `🟡 ACTIVE`로 전환

## B1-1 안전 제한

- `t_secret.key` 실제 값은 GitHub/채팅/log/Evidence에 출력하지 않음
- SSH 설정은 backup → syntax/effective check → reload → 새 세션 확인 순서
- UFW active 환경에서는 20022를 먼저 허용하고 새 SSH 세션 성공 전 기존 접근 경로를 제거하지 않음
- 제공 archive 실행 파일 이름/architecture를 추측하지 않음
- `verify.sh`는 실제 시스템 검증이므로 Runtime 구성 이후 `sudo`로 실행
- Runtime 결과를 받기 전에 PASS/CLEAR로 표시하지 않음

## Stage 전환 규칙

- B1-1부터 B7-1까지 필수 11개가 모두 `✅ CLEAR`되기 전에는 Stage 2를 정식 Runtime 대상으로 전환하지 않습니다.
- 필수 미션 수행 중 선택 미션의 지식이 필요하면 `START-CHECK`와 관련 개념만 참고할 수 있지만, 선택 미션 Runtime 자체는 Stage 2에서 수행합니다.
- B7-1 CLEAR 후 B4-2를 `🟡 ACTIVE`로 전환합니다.
- B4-2 → B5-2 → B5-3 → B7-2 순서로 선택 미션을 완료합니다.

상세 실행 계약은 `PHASE-C-RUNBOOK.md`, 공통 시작 Gate는 `PHASE-C-PREFLIGHT.md`, 선후관계는 `MISSION-DEPENDENCY-MAP.md`, 전체 순서는 루트 `MISSION-INDEX.md`를 사용합니다.
