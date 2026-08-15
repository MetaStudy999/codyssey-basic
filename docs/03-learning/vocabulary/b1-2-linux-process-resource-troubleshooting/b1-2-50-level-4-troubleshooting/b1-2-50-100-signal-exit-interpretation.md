---
mission: B1-2
stage: troubleshooting
order: 100
unit: Signal and Exit Interpretation
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# Signal / Exit 해석 진단

## 증상

프로세스가 종료됐지만 종료 원인을 로그와 exit code 중 무엇으로 설명해야 할지 혼란스럽다.

## 관찰

각 Evidence를 별도로 적는다.

- 애플리케이션이 실제 출력한 마지막 로그
- shell/launcher에서 관찰한 exit code
- PID 소멸 시점
- 필요하면 OS 수준 signal 해석

## 실패 층·가설

Reference CPU Runtime에서는 `CPU Threshold Violated!` 뒤 exit `143`이 관찰됐다. 이것은 SIGTERM 계열 종료 해석과 일치하지만 앱 로그에 literal `SIGTERM`이 있었다는 뜻은 아니다.

OOM Reference Runtime은 `MemoryGuard`의 self-termination 로그가 직접 존재했다.

## 최소 수정

보고서 문장을 실제 Evidence 수준으로 낮춘다. `확인됨`, `일치함`, `추정됨`을 구분한다.

## 재검증

같은 종료를 다시 재현해 동일한 보호 로그/exit 패턴이 반복되는지 확인한다.

## Gate

로그 문자열과 OS exit 의미를 합쳐서 존재하지 않은 사실을 만들지 않아야 한다.

[← 이전](./b1-2-50-090-before-after-inconclusive.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-110-issue-report-troubleshooting.md)
