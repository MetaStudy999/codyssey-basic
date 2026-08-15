---
mission: B1-1
stage: advanced
order: 10
unit: report.sh Statistics
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# report.sh 통계 — Average / Maximum / Minimum / Sample Count

## 한 줄 설명

`report.sh`는 누적된 `monitor.log`를 읽어 CPU/MEM/DISK 값을 요약 통계로 정리하는 원본 Bonus 확장이다.

## Source 연결

B1-1 Bonus에서는 `report.sh`와 평균값, 최댓값, 최솟값, 표본 수, 시간 구간 같은 보고 기능을 선택 과제로 다룬다.

## 핵심 관계

```text
monitor.log
→ 시간 구간 선택
→ 값 추출
→ Average / Maximum / Minimum / Sample Count
→ 요약 보고
```

## 입문자 체크

예를 들어 CPU 값이 `10, 20, 30`이라면 평균은 `20`, 최댓값은 `30`, 최솟값은 `10`, 표본 수는 `3`이다.

## 주의

- 이 기능은 B1-1 필수 `monitor.sh`를 대체하지 않는다.
- 통계값은 실제 로그에서 계산해야 하며 임의 숫자를 Evidence처럼 사용하지 않는다.
- 시간 구간을 명시하지 않으면 서로 다른 실행 구간이 섞일 수 있다.

## Advanced Gate

- [ ] `monitor.log → 숫자 추출 → 통계 계산 → 출력` 흐름을 설명할 수 있다.
- [ ] Average / Maximum / Minimum / Sample Count 차이를 설명할 수 있다.
- [ ] Bonus와 필수 PASS를 구분할 수 있다.

[← Index](./b1-1-90-000-index.md) · [다음: Log Archive →](./b1-1-90-020-log-compression-archive.md)
