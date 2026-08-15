---
mission: B1-2
stage: evaluation
level: 5
order: 20
unit: OOM Evaluation
gate: V5
visual_learning: DEFERRED
---

# OOM Evaluation

## 핵심 질문

메모리 장애를 어떻게 재현했고, 무엇이 실제 종료 원인이었으며, `MEMORY_LIMIT` 변경이 어떤 차이를 만들었는가?

## WHAT

실제 Runtime에서는 동일 PID의 RSS와 앱 Heap 값이 시간에 따라 증가했고, `MemoryGuard`가 `Memory limit exceeded`와 `Self-terminating` 로그를 남긴 뒤 프로세스가 종료됐다.

## WHY

메모리가 계속 해제되지 않고 증가하면 시스템 가용 메모리를 압박한다. 이번 build에서는 Linux OOM Killer가 개입하기 전에 애플리케이션 내부 보호 정책이 종료했다.

## HOW

`monitor.sh` / `ps` / 애플리케이션 로그로 증가 추이를 확인하고, `MEMORY_LIMIT`만 바꾸어 두 실행을 비교했다.

## PROOF

Reference Runtime:

- Before: `MEMORY_LIMIT=64`, PID `2080`, 생존 약 `8초`, 마지막 Heap `75MB`
- After: `MEMORY_LIMIT=128`, PID `2337`, 생존 약 `18초`, 마지막 Heap `150MB`
- 종료 signature: `Memory limit exceeded` + `Self-terminating`

이 값은 실제 관측 사례이며 복사할 정답값이 아니다.

## LIMIT / ENVIRONMENT

증거는 지속적인 증가와 보호 종료를 보여 주지만, 디컴파일하지 않았으므로 특정 코드 라인을 누수 원인으로 단정하지 않는다.

## 예상 꼬리질문

- OS OOM Killer와 MemoryGuard를 어떻게 구분했는가?
- `MEMORY_LIMIT`을 높이는 것이 왜 근본 해결이 아닌가?
- 운영 서버라면 증가율을 어떻게 조기 탐지할 것인가?

## V5 Gate

OOM을 `현상 → 실제 종료 주체 → Before/After → 임시 조치와 근본 해결` 순서로 1분 안에 설명한다.

[← 010](./b1-2-60-010-evaluation-answer-framework.md) · [Index](./b1-2-60-000-index.md) · [030 →](./b1-2-60-030-cpu-evaluation.md)
