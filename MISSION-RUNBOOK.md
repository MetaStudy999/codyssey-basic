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

B1-1부터 순서대로 사용자가 실제 환경에서 직접 실행합니다.

`이해 → 직접 실행 → 검증 → 오류 해결 → Evidence → 평가 확인 → CLEAR`

한 미션이 실제 `CLEAR`된 뒤 다음 미션의 Runtime으로 이동합니다.

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

## 3. BUILD

1. ChatGPT가 먼저 최소 통과 경로를 끝까지 설계
2. Reference Build에서는 실제 환경 없이 만들 수 있는 기준 구현을 먼저 완성
3. 입문자는 Runtime 단계에서 `BEGINNER-GUIDE.md` Step 순서대로 수행
4. 이해하기 어려운 코드와 명령에는 목적을 설명하는 주석 제공
5. 현재 미션 통과와 관계없는 고도화는 뒤로 미룸

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
3. 실패 시 원인 → 확인 → 해결 → 재검증 순서 사용
4. 예상 출력과 실제 출력을 구분

## 5. EVIDENCE

평가 요구사항과 증빙을 1:1로 연결합니다.

`Requirement → Implementation → Verification → Evidence`

Secret, Token, Password, Private Key는 증빙에서도 노출하지 않습니다.

Reference Build 단계에서는 Evidence **계획과 저장 위치**만 준비할 수 있으며, 실제 실행하지 않은 결과를 Evidence로 만들지 않습니다.

## 6. CLEAR

다음 조건을 모두 만족해야 CLEAR입니다.

- 공식 요구사항 충족
- 구현 완료
- 자동 검증 가능한 항목 PASS
- 필요한 실제 환경 검증 완료
- 필요한 Evidence 확보
- Round 01 입문자 재현 가이드 완성

## 상태

Mission 상태는 아래 네 가지만 사용합니다.

- `⬜ NOT STARTED`
- `🟡 ACTIVE`
- `⛔ BLOCKED`
- `✅ CLEAR`

Reference Build 진행 여부는 Mission 상태를 임의로 변경하는 근거가 아닙니다.
