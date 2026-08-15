---
mission: B1-2
stage: evaluation
level: 5
order: 80
unit: Workaround vs Root Cause
gate: V5
visual_learning: DEFERRED
---

# Workaround vs Root Cause

## 핵심 질문

환경변수 조정과 근본 해결을 어떻게 구분할 것인가?

## OOM

- Workaround: `MEMORY_LIMIT` 조정으로 보호 종료 시점을 바꾼다.
- Root fix 제안: 정상 소스에서 객체/버퍼 수명, 해제, 누수 경로를 수정한다.

## CPU

- Workaround: 이번 build에서는 `CPU_MAX_OCCUPY`를 낮추어 부하가 보호 임계치에 접근하기 전에 cooldown하도록 했다.
- Root fix 제안: CPU intensive loop를 줄이고 backoff, rate limit, concurrency limit 등을 적용한다.

## Deadlock

- Workaround: `MULTI_THREAD_ENABLE=false`로 동시 실행 경로를 회피한다.
- Root fix 제안: lock acquisition order 통일, 복수 lock 회피, timeout/try-lock 정책을 설계한다.

## WHY

환경변수는 장애 표현을 완화하거나 위험 경로를 회피할 수 있지만, 원인 코드 자체를 제거했다고 보장하지 않는다.

## PROOF

Before/After는 workaround가 관측 결과에 영향을 주었다는 Evidence다. 그것만으로 근본 원인이 완전히 제거됐다고 주장하지 않는다.

## V5 Gate

세 장애 각각에 대해 `임시 조치 1개 + 근본 해결 1개 + 왜 둘이 다른지`를 설명한다.

[← 070](./b1-2-60-070-evidence-rca-defense.md) · [Index](./b1-2-60-000-index.md) · [090 →](./b1-2-60-090-operations-improvement.md)
