---
mission: B1-2
stage: troubleshooting
order: 110
unit: Issue Report Troubleshooting
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Issue Report 진단

## 증상

실험은 했지만 다른 사람이 같은 장애를 이해하거나 재현하기 어려운 보고서가 만들어진다.

## 관찰

각 OOM / CPU / Deadlock 보고서가 다음 4개 필수 구역을 갖는지 확인한다.

1. Description
2. Evidence & Logs
3. Root Cause Analysis
4. Workaround & Verification

또한 PID, timestamp, 설정값, Evidence 경로, Before/After를 추적할 수 있어야 한다.

## 실패 층·가설

보고서의 문제는 기술적 원인 분석이 틀린 경우뿐 아니라 Evidence와 결론의 연결이 끊긴 경우에도 발생한다.

## 최소 수정

누락된 가장 작은 연결을 보완한다.

```text
Symptom
→ Evidence
→ Interpretation
→ RCA
→ Workaround
→ Reverification
```

## 재검증

구현 저장소의 `python3 scripts/validate_reports.py` 같은 정적 validator는 형식 확인에 유용하다. 그러나 정적 PASS만으로 Runtime Evidence PASS가 되지는 않는다.

## Gate

제3자가 보고서만 보고 `무엇을 봤고, 왜 그렇게 판단했고, 무엇을 바꿔 다시 확인했는지` 추적할 수 있어야 한다.

[← 이전](./b1-2-50-100-signal-exit-interpretation.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-120-troubleshooting-gate.md)
