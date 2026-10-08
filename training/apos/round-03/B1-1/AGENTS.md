# B1-1 중앙 Control 규칙
## 입력
현재 B1-1/mission.yml, 실제 `MetaStudy999/codyssey-basic-web-portfolio` main의 `training/round-03-apos/mission.yml`, PR/Runtime/Evidence.
## 실행
실제 상태에서 verified CORE만 CLEAR로 기재하고 BONUS, Round 03 Golden Deck, 독립 QA, 학습자 MASTER, 범용 하네스는 분리한다.
## Exit Gate
정확한 Mission candidate/runtime Run/학습 Gate/배포 URL와 mission repo main SHA를 재확인하고 독립 QA 후 병합한다.
## 금지
Round 01/02 결과 복사, 본 중앙 Control에 실제 소스 중복 저장, PR #16 후보를 APOS 전역 완료로 표시 금지.

## 필수 자동 재검증 — QA Repair
- 중앙관리 상태를 `CLEAR`로 유지/변경할 때 아래 둘을 반드시 실행한다.
  1. `node --test training/apos/round-03/B1-1/verify-reconciliation.test.mjs`
  2. `node training/apos/round-03/B1-1/verify-reconciliation.mjs`
- 첫 명령은 잘못된 CLEAR·SHA·Mission ID 등 고의 실패를 검증한다. 둘째 명령은 GitHub 실제 main/PR #15/병합 후 Run을 조회하므로 네트워크/API 오류도 FAIL-CLOSED다.
- `.github/workflows/round03-control-reconciliation.yml`의 `verify-round03-control`을 현 PR **정확한 HEAD**에서 성공시킨다. 이전 HEAD의 PASS를 재사용하지 않는다.
- 이 자동검증은 원본 아티팩트 Binary 해시·B1-1 범용 Harness·학습 개선 검증까지 인증하지 않는다. 독립 QA_SEC 전 병합 금지.
- 중앙·미션 저장소의 실제 main 보호가 비활성 상태면 독립 QA에서 보호 위험을 별도 Finding으로 기록한다. Maker는 Ruleset을 변경하지 않는다.
