# Mission Runbook

모든 미션은 같은 원칙으로 진행합니다. Round 01은 속도와 학습 품질을 함께 확보하기 위해 **Reference Build와 Runtime CLEAR를 분리**합니다.

## Round 01 — 3-Phase 운영

### Phase A — REFERENCE BUILD

B1-1부터 B7-2까지 공식 Mission/Evaluation을 기준으로 기준 구현과 학습 자료를 먼저 준비합니다.

이 단계에서 수행합니다.

1. 공식 Mission PDF/MD/Evaluation/제공 파일 확인
2. 필수/선택 요구사항 분리
3. Requirement → Implementation → Verification → Evidence 설계
4. ChatGPT Reference Complete Path 설계
5. 코드·설정·문서·검증 도구 중 실제 환경 없이 준비 가능한 항목 구현
6. `BEGINNER-GUIDE.md`, `CHECKLIST.md` 구체화
7. Secret 노출 점검
8. 실제 Runtime이 필요한 항목을 명시적으로 남김

**중요:** Reference Build가 완료되어도 실제 Runtime과 Evidence가 없으면 Mission을 `CLEAR`로 변경하지 않습니다.

Reference Build는 다음 미션의 기준본을 미리 준비하는 작업이며, 사용자가 해당 미션의 Runtime 수행을 시작했다는 의미가 아닙니다.

### Phase B — CROSS-MISSION AUDIT

15개 미션의 Reference Build가 준비된 뒤 전체 연결성을 한 번 검토합니다.

- 공통 개발환경과 버전
- 포트/서비스 충돌
- Python/Node/DB/Cloud 구성
- Secret 정책
- Git/브랜치 운영
- 미션 간 선후관계와 재사용 가능 환경
- B5/B6/B7 연결 구조
- 중복 설정과 불필요한 반복

현재 미션 통과와 관계없는 고도화는 별도 후속 Round로 미룹니다.

### Phase C — RUNTIME CLEAR

Phase C는 **FAST EXECUTE** 모드입니다. 이미 준비된 Reference, Preflight, Runbook, Beginner Guide를 실제 환경에서 실행하여 Mission을 `✅ CLEAR`로 전환합니다.

`이해 → 직접 실행 → 검증 → 오류 해결 → Evidence → 평가 확인 → CLEAR`

현재 미션의 Runtime에 집중하며 한 번에 여러 미션의 실행 상태를 섞지 않습니다.

## Phase C — Design Freeze / Just-in-Time Design

Phase A/B에서 전체 설계와 교차감사를 완료했으므로 Phase C에서는 새로운 설계를 계속 확장하지 않습니다.

실행 중 문제가 발견되면 먼저 다음을 판단합니다.

```text
이 문제가 현재 Mission CLEAR를 막는가?

YES
→ 원인 확인
→ 필요한 범위만 최소 수정
→ 재검증
→ Evidence
→ Runtime 계속

NO
→ 현재 Runtime 유지
→ 후속 개선 후보로 미룸
```

실행 80~90%, 설계 보정 10~20%를 지향합니다. 이는 엄격한 시간 배분이 아니라 **설계 루프로 되돌아가 실제 CLEAR가 지연되는 것을 방지하기 위한 운영 기준**입니다.

### Phase C에서 즉시 수정해야 하는 경우

- 공식 Mission/Evaluation 요구사항 충족을 막는 문제
- Runtime 진행 자체가 불가능한 BLOCKER
- Secret/Token/Password 노출 위험
- SSH lockout, 데이터 손실, Cloud 과금/삭제 등 안전 문제
- Verify가 실제 결과를 잘못 판정하는 문제
- Evidence가 공식 평가 요구와 연결되지 않는 문제

### Phase C에서 후속으로 미루는 경우

- 현재 CLEAR와 무관한 리팩터링
- UI/UX 고도화
- 폴더/문서 구조의 미세한 개선
- 선택 기능 확장
- 다음 Round에서 다룰 심화 기술
- 미래 프로젝트를 위한 선행 최적화

즉, **실패하지 않도록 길을 만드는 일은 Phase A/B에서 하고, Phase C에서는 이미 만든 길을 실제로 끝까지 통과합니다.**

---

## R01 Dual-Runtime Lab 정책

R01은 현재 두 Host 계열만 지원합니다.

```text
macOS + OrbStack
├─ MAC-D: Docker
└─ MAC-V: Ubuntu 24.04 Linux Machine

Windows 11 Pro + WSL2 Ubuntu 24.04
├─ WIN-D: Docker
└─ WIN-V: Ubuntu 24.04 direct Linux Runtime
```

상세 계약은 `environments/RUNTIME-PROFILES.md`, Mission별 설계는 `environments/MISSION-LAB-MATRIX.md`를 사용합니다.

### CLEAR와 Lab을 분리한다

각 Mission에는 두 가지 층이 있습니다.

```text
Mission CLEAR
= 공식 Mission/Evaluation
+ 실제 Runtime
+ Verify
+ Evidence

Dual-Runtime Lab
= Docker/VM/Linux 환경 차이를 익히는 학습·Portability Coverage
```

같은 Mission을 네 Runtime Profile에서 처음부터 끝까지 반복하지 않습니다. 각 Mission은 **Primary Runtime 1개**에서 CLEAR를 먼저 확보하고, 다른 환경에서는 핵심 기능 1~3개와 환경 차이만 Twin Lab으로 확인합니다.

기본 선택 원칙:

- OS/SSH/UFW/users/ACL/cron/troubleshooting 중심 → `MAC-V` Primary
- Python/Web/DB/API/AI application 중심 → `MAC-D` Primary
- Windows portability → `WIN-V` 또는 `WIN-D`
- GitHub/AWS/실제 배포/실제 AI Provider Evidence → local Docker/VM이 대체하지 않음

Dual-Runtime Lab 미완료를 Mission `⛔ BLOCKED`의 이유로 만들지 않습니다. Lab Coverage는 Mission 상태와 별도 체크로 관리합니다.

---

## 1. UNDERSTAND

1. 공식 Mission PDF 확인
2. Mission MD 확인
3. Evaluation이 있으면 확인
4. 필수/선택 요구사항 분리
5. 현재 Step에 필요한 용어 설명
6. 핵심 개념 및 필요한 개념도 제공

## 2. PREPARE

1. 기준 환경(Golden Path) 확인
2. 버전과 사전조건 확인
3. 환경설정 전 현재 상태 확인
4. 시스템 파일 변경 시 백업
5. Secret은 Repository에 저장하지 않음
6. `START-CHECK.md`가 있는 미션은 필수 선행과 현재 보유 지식을 먼저 확인
7. 현재 Mission의 Primary Runtime Profile과 Twin Lab 범위를 확인

## 3. BUILD

1. Phase A에서 준비된 최소 통과 경로를 기본값으로 사용
2. Reference Build에서는 실제 환경 없이 만들 수 있는 기준 구현을 먼저 완성
3. 입문자는 Runtime 단계에서 `BEGINNER-GUIDE.md` Step 순서대로 수행
4. 이해하기 어려운 코드와 명령에는 목적을 설명하는 주석 제공
5. 현재 미션 통과와 관계없는 고도화는 뒤로 미룸
6. Runtime 중 새 설계가 필요하면 CLEAR를 막는 범위까지만 수정
7. Docker/VM 실습은 공통 Source를 재사용하고 환경별 코드 복제는 최소화

## 4. VERIFY

검증은 둘로 분리합니다.

### Reference Build 검증

- 요구사항 누락 확인
- 문법/정적 검사 가능한 항목
- 코드·문서 일치성
- Secret 노출
- 실제 실행하지 않은 항목을 PASS로 표시하지 않았는지 확인

### Runtime 검증

1. 실제 환경이 필요한 항목을 직접 실행
2. `PASS / FAIL` 판정을 명확히 표시
3. 실패 시 원인 → 확인 → 최소 해결 → 재검증 순서 사용
4. 예상 출력과 실제 출력을 구분
5. Runtime 결과가 정상이라면 불필요한 추가 리팩터링 없이 Evidence로 이동
6. Twin Lab 결과를 Primary CLEAR Evidence와 혼동하지 않음

## 5. EVIDENCE

평가 요구사항과 증빙을 1:1로 연결합니다.

`Requirement → Implementation → Verification → Evidence`

Secret, Token, Password, Private Key는 증빙에서도 노출하지 않습니다.

Reference Build 단계에서는 Evidence **계획과 저장 위치**만 준비할 수 있으며, 실제 실행하지 않은 결과를 Evidence로 만들지 않습니다.

Docker/VM Twin Lab의 학습 결과는 Portability Note로 기록할 수 있지만, 공식 요구사항의 실제 Evidence를 대체하지 않습니다.

## 6. CLEAR

다음 조건을 모두 만족해야 CLEAR입니다.

- 공식 요구사항 충족
- 구현 완료
- 자동 검증 가능한 항목 PASS
- 필요한 실제 환경 검증 완료
- 필요한 Evidence 확보
- Round 01 입문자 재현 가이드 완성

CLEAR 뒤에 발견한 비필수 개선은 다음 미션 Runtime을 막지 않고 후속 개선/심화 Round에서 처리합니다.

## 상태

Mission 상태는 아래 네 가지만 사용합니다.

- `⬜ NOT STARTED`
- `🟡 ACTIVE`
- `⛔ BLOCKED`
- `✅ CLEAR`

Reference Build 진행 여부나 Dual-Runtime Lab Coverage는 Mission 상태를 임의로 변경하는 근거가 아닙니다.
