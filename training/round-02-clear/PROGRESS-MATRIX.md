# Round 02 진행 매트릭스

> **기준 레포:** `MetaStudy999/codyssey-basic`  
> **Round:** `round-02-clear`  
> **목표:** 제2기 B1-1 ~ B7-2를 초압축 방식으로 수행하면서 실제 시간과 CLEAR 상태를 추적한다.
>
> 시간 예산은 공식 학습시간을 대체하지 않는 내부 목표다.

## 상태 정의

```text
NOT STARTED
→ ACTIVE
→ RUNTIME PASS
→ VERIFICATION PASS
→ EVIDENCE COMPLETE
→ EVALUATION READY
→ CLEAR
```

## 전체 진행표

| Mission | 구분 | 공식시간 | 목표시간 | 실제시간 | 상태 | 비고 |
|---|---|---:|---:|---:|---|---|
| B1-1 | 필수 | 80h | 9h | - | NOT STARTED | 첫 속도 보정 기준 |
| B1-2 | 선택 | 80h | 12h | - | NOT STARTED |  |
| B2-1 | 필수 | 60h | 9h | - | NOT STARTED |  |
| B2-2 | 필수 | 20h | 5h | - | NOT STARTED | 3~5인 팀 외부 의존 |
| B3-1 | 필수 | 40h | 8h | - | NOT STARTED | Cloud 비용/정리 주의 |
| B3-2 | 필수 | 40h | 7h | - | NOT STARTED | AI API Key 보호 |
| B4-1 | 필수 | 40h | 7h | - | NOT STARTED |  |
| B4-2 | 필수 | 40h | 7h | - | NOT STARTED |  |
| B5-1 | 필수 | 80h | 13h | - | NOT STARTED |  |
| B5-2 | 필수 | 80h | 13h | - | NOT STARTED |  |
| B6-1 | 필수 | 40h | 6h | - | NOT STARTED |  |
| B6-2 | 선택 | 60h | 10h | - | NOT STARTED |  |
| B6-3 | 선택 | 60h | 10h | - | NOT STARTED | B6-2 재사용 효과 큼 |
| B7-1 | 필수 | 120h | 16h | - | NOT STARTED | 팀·PR·배포 외부 의존 |
| B7-2 | 선택 | 120h | 18h | - | NOT STARTED | B7-1 기반 고도화 |
| **합계** |  | **960h** | **150h** | **-** |  | 필수 목표 100h + 선택 목표 50h |

## 시간 보정 규칙

B1-1 완료 후:

```text
보정계수 = B1-1 실제시간 / 9h
```

예:
- 실제 6h → 0.67배
- 실제 9h → 1.00배
- 실제 12h → 1.33배

이 계수는 다음 미션 계획을 조정하는 참고값이며, 각 미션의 기술적 난이도 차이를 고려한다.

## 운영 규칙

- 목표시간 초과가 예상되면 먼저 보너스·고도화·비필수 리팩터링을 중단한다.
- Runtime, Verification, Evidence, Secret 점검, 평가 설명은 삭제하지 않는다.
- B2-2/B7-1/B7-2의 팀·PR·외부 배포 대기시간은 개인 작업시간과 별도로 기록할 수 있다.
- 한 미션이 빨리 끝난 시간은 다음 미션으로 이월한다.
- CLEAR 판정은 시간 소진 여부가 아니라 공식 요구 충족 여부로 판단한다.

## 관련 문서

- [Round 02 실행 허브](README.md)
- [2주 초압축 수행 계획](ACCELERATED-2WEEK-PLAN.md)
- [Round 02 미션 수행·평가 표준](../../standards/ROUND-02-MISSION-EXECUTION-STANDARD.md)
