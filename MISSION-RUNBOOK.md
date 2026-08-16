# Mission Runbook

모든 미션은 같은 흐름으로 진행합니다. 상세 내부 검증은 필요에 따라 수행하되, 입문자 화면은 아래 6단계로 단순화합니다.

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
2. 입문자는 `BEGINNER-GUIDE.md` Step 순서대로 수행
3. 이해하기 어려운 코드와 명령에는 목적을 설명하는 주석 제공
4. 현재 미션 통과와 관계없는 고도화는 뒤로 미룸

## 4. VERIFY

1. 가능한 자동 테스트 수행
2. 실제 환경이 필요한 항목은 실제 실행으로 확인
3. `PASS / FAIL` 판정을 명확히 표시
4. 실패 시 원인 → 확인 → 해결 → 재검증 순서 사용

## 5. EVIDENCE

평가 요구사항과 증빙을 1:1로 연결합니다.

`Requirement → Implementation → Verification → Evidence`

Secret, Token, Password, Private Key는 증빙에서도 노출하지 않습니다.

## 6. CLEAR

다음 조건을 모두 만족해야 CLEAR입니다.

- 공식 요구사항 충족
- 구현 완료
- 자동 검증 가능한 항목 PASS
- 필요한 실제 환경 검증 완료
- 필요한 Evidence 확보
- Round 01에서는 입문자 재현 가이드 완성

## 상태

- `NOT STARTED`
- `ACTIVE`
- `BLOCKED`
- `CLEAR`

한 미션을 CLEAR한 뒤 다음 미션으로 이동합니다.
