---
mission: B1-1
level: 4
order: 110
unit: Before and After Evidence
lifecycle: DEEPEN
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Before / After Evidence

## 한 줄 설명

장애 해결은 수정 명령을 실행한 것으로 끝나지 않고 **동일한 실패 검증을 다시 실행해 정상 복귀를 증명**해야 한다.

## Evidence Template

```text
Symptom:
Time:
Environment:
Execution user:
Last successful state:
First observation command:
Layer:
Hypothesis:
Verification result:
Root cause:
Smallest fix:
Recovery:
Reverification:
Evidence path:
Prevention:
```

## 핵심 원칙

```text
Before = 실패 상태의 객관적 증거
Fix    = 최소 변경
After  = 같은 검증에서 정상 상태 확인
```

비밀 키 값은 Evidence에 포함하지 않는다.

## 초미니 확인

설정 파일을 고쳤다면 무엇을 남겨야 하는가?

- 수정 내용만이 아니라 **수정 전 실패와 수정 후 재검증 결과**를 함께 남긴다.

## Gate

- [ ] Before/After가 같은 검증 축을 사용한다.
- [ ] secret을 노출하지 않는다.
- [ ] root cause와 prevention을 구분해 기록한다.

[← Resource Warning / Log Growth](./b1-1-50-100-resource-warning-log-growth.md) · [Level 4 Index](./b1-1-50-000-index.md) · [다음: Troubleshooting Gate →](./b1-1-50-120-troubleshooting-gate.md)
