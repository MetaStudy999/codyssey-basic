---
mission: B1-2
stage: advanced
order: 10
unit: Bonus Scope and Source Lock
source_scope: SOURCE_LINKED_BONUS
gate: BONUS-SCOPE-LOCK
visual_learning: DEFERRED
---

# Bonus Scope & Source Lock

## 목적

Advanced에서 무엇이 원본 Bonus이고 무엇이 추가 설명인지 먼저 구분한다.

## 원본 Mission이 직접 요구하는 것

원본 PDF `5. 보너스 과제 (선택)`은 다음 세 축을 요구한다.

1. 로그 Timestamp를 기반으로 실행 순서와 교체 주기를 패턴화
2. 패턴을 근거로 Round-Robin / FCFS / Priority 중 무엇인지 논리적으로 추론
3. 추론한 알고리즘의 장단점과 서비스 아키텍처 적합성 분석

## 원본 예시의 위치

원본 PDF는 Worker Thread의 Timestamp/Progress 로그 예시와 Round-Robin 추론 예시를 제공하지만, 결과 예시는 정답이 아니라 참고 예시라고 명시한다.

따라서 학습 규칙은 다음과 같다.

```text
예시 결론 복사 X
실제 로그 수집 O
패턴 근거 기록 O
후보별 지지/반증 O
관측 한계 명시 O
```

## 제약 유지

바이너리 디컴파일·리버스 엔지니어링은 금지한다. 관찰 가능한 로그와 허용된 시스템 도구를 사용해 추론한다.

## Advanced Gate

`필수 B1-2`와 `선택 Bonus`의 차이, 그리고 Bonus의 세 요구를 보지 않고 설명할 수 있으면 통과한다.

[← Advanced Index](./b1-2-90-000-index.md) · [Advanced Index](./b1-2-90-000-index.md) · [020 →](./b1-2-90-020-log-observation-dataset.md)
