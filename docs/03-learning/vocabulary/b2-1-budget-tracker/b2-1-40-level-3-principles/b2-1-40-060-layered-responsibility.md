---
mission: B2-1
stage: principles
order: 60
unit: Layered Responsibility
gate: WHY-HOW
visual_learning: DEFERRED
---
# 060. 계층별 책임 분리

**한 줄 설명:** 입력·업무 규칙·저장·데이터 모델을 분리하면 한 기능의 변경이 전체 코드로 번지는 것을 줄이고 평가 시 책임을 설명하기 쉬워진다.

## 현재 구조

```text
CLI        → argparse, input, output
Service    → 업무 규칙, 검색, 요약, CSV
Repository → 거래 파일 읽기/쓰기, id, rewrite
Store      → category/budget persistence
Model      → Transaction 구조와 기본 validation
Decorator  → 공통 오류 경계
```

## WHY

예를 들어 category 사용 여부 확인은 단순 파일 쓰기 문제가 아니라 거래와 category 사이의 업무 규칙이므로 Service에 있다. 반면 JSONL 행을 어떻게 읽을지는 Repository 책임이다.

## HOW

상위 계층은 하위 세부 구현을 직접 반복하지 않고 메서드 호출로 위임한다. 이 구조는 테스트 범위와 변경 지점을 좁히는 데도 도움이 된다.

## 경계

이 계층 이름은 현재 구현 설계다. Mission의 본질은 모듈/클래스 책임을 나누고 설명할 수 있는지에 있으며 특정 아키텍처 명칭 자체가 정답은 아니다.

## WHY/HOW Gate

`add` 한 건이 CLI→Service→Model→Repository로 이동하는 흐름을 설명한다.

[← 이전](./b2-1-40-050-streaming-vs-materialization.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-070-file-atomicity.md)
