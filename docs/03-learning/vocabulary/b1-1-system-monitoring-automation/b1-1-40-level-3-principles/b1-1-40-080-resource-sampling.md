---
mission: B1-1
level: 3
order: 80
unit: Resource Sampling and Thresholds
lifecycle: DEEPEN
gate: WHY-HOW
visual_learning: DEFERRED
---

# 자원 관제와 주기적 샘플링 (Resource Sampling)

## 한 줄 설명

CPU·메모리·디스크 관제는 한 번의 숫자를 보는 것이 아니라 같은 방식으로 반복 수집해 시간 흐름을 비교하는 과정이다.

## 기본 흐름

```text
상태 수집
→ 수치 계산
→ Threshold 비교
→ Warning
→ Log 기록
```

B1-1 경고 기준:

```text
CPU > 20%
MEM > 10%
DISK_USED > 80%
```

현재 구현은 CPU에 `/proc/stat`, Memory에 `/proc/meminfo`, Disk에 `df -P /`를 사용한다. 이는 현재 구현 방식이며 핵심 학습점은 **동일한 기준으로 반복 관찰한다는 것**이다.

## 왜 필요한가

단일 측정값은 순간 상태일 뿐이다. 매분 기록이 쌓이면 변화 추세와 오류 전후 상태를 비교할 수 있다.

## 초미니 확인

CPU가 21%이면 Agent Health 실패로 종료하는가?  
→ 아니다. B1-1에서는 WARNING을 남기고 관제를 계속한다.

## WHY/HOW Gate

- [ ] Health와 Resource Warning을 구분할 수 있다.
- [ ] 반복 샘플링과 로그 누적의 관계를 설명할 수 있다.

[← Failure Policy](./b1-1-40-070-preflight-failure-policy.md) · [Index](./b1-1-40-000-index.md) · [다음 → Log Traceability](./b1-1-40-090-log-traceability.md)
