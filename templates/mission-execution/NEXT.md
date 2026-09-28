# Mission Execution Template — NEXT

- Base Version: **v1.0.0**
- Status: **CANDIDATE**
- Promotion Target: **v1.1.0 or later**

> 실제 Active Mission에서 발견한 개선 후보를 기록하는 공간이다. 여기에 적힌 내용은 아직 Stable Standard가 아니다.

## Candidate Queue

| ID | 발견 Mission | 문제 / 관찰 | 개선 후보 | 검증 필요 | 상태 |
|---|---|---|---|---|---|
| C-001 | B1-1 | 구현 중 UI·문서·검증을 너무 자주 왕복하면 시간이 늘어남 | 관련 기능 묶음 구현 → 통합 검증 → FAIL만 수정 방식 유지 | B1-2에서 재검증 | OPEN |
| C-002 | B1-1 | Troubleshooting이 실제 평가 설명에 매우 유용함 | Runtime 오류가 발생한 Mission은 Troubleshooting 기록을 Evaluation Prep에 연결 | B1-2~B2-1에서 재검증 | OPEN |
| C-003 | B1-1 | Bonus 구현이 필수 CLEAR 흐름과 섞이면 상태 판단이 복잡해짐 | Required / Bonus 상태표를 분리 | B1-2에서 선택 과제 존재 시 검증 | OPEN |
| C-004 | B1-1 | 브라우저·OS·외부 SaaS 문제는 코드만 봐서는 해결이 늦음 | Troubleshooting에서 Source → Browser → OS → External Service 경계를 우선 분리 | 다음 환경 문제에서 재검증 | OPEN |

## 후보 작성 형식

### C-NNN — 제목

- 발견 Mission:
- 현재 Version:
- 실제 문제:
- 기존 방식:
- 개선 제안:
- 기대 효과:
- 위험:
- 검증 방법:
- 다음 검증 Mission:
- 상태: `OPEN | TESTING | ACCEPTED | REJECTED`

## 승격 규칙

`ACCEPTED` 후보만 다음 Stable Version에 포함한다.

```text
OPEN
→ TESTING
→ 실제 Runtime 검증
→ ACCEPTED / REJECTED
→ CHANGELOG
→ versions/vX.Y.Z.md
→ CURRENT 갱신
```

단순 아이디어만으로 Stable Version을 변경하지 않는다.
