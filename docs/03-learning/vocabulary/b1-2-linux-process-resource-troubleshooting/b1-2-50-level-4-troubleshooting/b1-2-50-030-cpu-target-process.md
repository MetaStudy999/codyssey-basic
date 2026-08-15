---
mission: B1-2
stage: troubleshooting
order: 30
unit: CPU Target Process Diagnosis
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# CPU — 대상 프로세스 진단

## 증상

CPU 사용률이 높아졌다는 말은 있지만 어떤 프로세스가 원인인지 불명확하다.

## 관찰

1. tcp/15034 listener PID를 식별한다.
2. `ps`, `top`, 필요하면 `/proc/<pid>/stat` interval 측정으로 대상 PID를 관찰한다.
3. 시스템 전체 CPU와 대상 PID CPU를 분리한다.

## 실패 층·가설

B1-2의 핵심은 `시스템이 느리다 → 앱이 원인이다`가 아니라 다음 근거 사슬이다.

```text
Target PID identified
→ target CPU rises
→ app telemetry rises
→ protection evidence appears
```

## 최소 수정

관찰 대상 PID를 먼저 바로잡는다. 원인 확인 전에 불필요한 서비스나 프로세스를 종료하지 않는다.

## 재검증

같은 PID 기준 또는 같은 listener 식별 방식으로 CPU 추이를 반복 측정한다.

## Evidence

PID, 측정 간격, 측정 도구, 최고 관측값을 함께 기록한다. 서로 정의가 다른 OS interval CPU와 앱 내부 `Current Load`를 같은 숫자라고 주장하지 않는다.

## Gate

`시스템 CPU가 높다`와 `agent-leak-app 대상 PID CPU가 높다`를 구분해 증명할 수 있어야 한다.

[← 이전](./b1-2-50-020-oom-memory-growth.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-040-cpu-protection-termination.md)
