---
mission: B2-1
stage: advanced
order: 40
unit: Recurring Transaction Rule Model
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# Recurring Transaction Rule Model

## 한 줄 설명

월급·월세 같은 반복 거래를 매번 직접 입력하지 않고 **규칙을 저장하고 특정 월의 실제 거래를 생성**하는 선택 기능이다.

## Source 연결

원본 Bonus는 반복 내역을 등록하고 특정 월에 자동 생성하도록 요구한다.

## 규칙과 실제 거래를 분리한다

```text
Recurring Rule
→ 특정 월에 적용
→ Transaction 생성
→ 기존 Repository에 저장
```

다음 필드는 설계 예시이며 원본 고정 스키마가 아니다.

```text
rule_id
kind: income/expense
category
amount
day_of_month
memo/tags
start_month / end_month
enabled
```

## 왜 분리하는가

반복 규칙 자체와 실제 발생한 거래가 같은 레코드라면 수정·중단·과거 기록 보존의 의미가 섞인다.

## 예외 질문

- 31일 규칙을 2월에 어떻게 처리할 것인가?
- category가 삭제되면 어떻게 할 것인가?
- 같은 달에 이미 생성되었다면 어떻게 할 것인가?

이 정책은 설계자가 명시해야 하며 원본이 하나의 정답을 고정하지 않는다.

## Advanced Gate

`Rule ≠ Transaction` 관계와 특정 월 생성 흐름을 설명할 수 있다.

[← 030](./b2-1-90-030-backup-recovery-verification.md) · [Advanced Index](./b2-1-90-000-index.md) · [050 →](./b2-1-90-050-recurring-generation-safety.md)
