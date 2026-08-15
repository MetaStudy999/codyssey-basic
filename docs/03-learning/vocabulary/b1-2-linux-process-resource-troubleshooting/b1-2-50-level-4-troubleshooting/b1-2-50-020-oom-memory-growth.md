---
mission: B1-2
stage: troubleshooting
order: 20
unit: OOM and Memory Growth
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---

# OOM / Memory Growth 진단

## 증상

프로세스 메모리가 계속 증가하거나 일정 시점에 종료된다.

## 관찰

- 동일 PID의 RSS 추이를 시간 순서로 기록한다.
- 애플리케이션 Heap 로그와 MemoryGuard 관련 로그를 함께 본다.
- 종료 직전 PID와 시각을 보존한다.

현재 구현 저장소의 실제 Reference Runtime에서는 RSS/Heap이 증가했고 `Memory limit exceeded`와 `Self-terminating`이 관찰됐다. 이는 OS OOM Killer와 구분되는 앱 자체 보호 종료였다.

## 실패 층·가설

```text
지속적 Memory Growth
→ MEMORY_LIMIT 도달
→ MemoryGuard 보호 정책
→ Self-Termination
```

다만 증거만으로 내부 누수 코드 위치를 단정하지 않는다.

## 최소 수정

Mission 요구에 따라 `MEMORY_LIMIT`만 범위 `50~512` 안에서 변경한다.

## 재검증

같은 관찰 시간/방법으로 RSS, Heap, 생존 시간, 종료 로그를 다시 수집한다.

## Before / After Evidence

실제 Reference Runtime의 `64 → 128`과 `8초 → 18초`는 관찰 예시다. 학습자는 자신의 실행값을 기록해야 한다.

## Gate

`메모리 증가`, `보호 임계치`, `종료 원인`, `내부 누수 위치`를 서로 구분해서 설명할 수 있어야 한다.

[← 이전](./b1-2-50-010-troubleshooting-algorithm.md) · [Index](./b1-2-50-000-index.md) · [다음 →](./b1-2-50-030-cpu-target-process.md)
