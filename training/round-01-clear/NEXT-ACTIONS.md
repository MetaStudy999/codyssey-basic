# R01 Phase C — Next Actions

현재 목표는 **B1-1부터 실제 Runtime/Evidence를 확보해 순차적으로 `✅ CLEAR`하는 것**입니다.

현재 운영 모드: **FAST EXECUTE**

> Phase A/B에서 설계·Reference·Audit·Runbook 준비를 완료했습니다. Phase C에서는 새로운 설계를 반복하지 않고 `Runtime → Verify → Evidence → CLEAR`를 우선합니다.

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

## 전체 Runtime 순서

```text
B1-1 → B1-2 → B2-1 → B2-2 → B3-1 → B3-2
→ B4-1 → B5-1 → B6-1 → B6-2 → B7-1
→ B4-2 → B5-2 → B5-3 → B7-2
```

상세 실행 계약은 `PHASE-C-RUNBOOK.md`, 공통 시작 Gate는 `PHASE-C-PREFLIGHT.md`, 선후관계는 `MISSION-DEPENDENCY-MAP.md`를 사용합니다.
