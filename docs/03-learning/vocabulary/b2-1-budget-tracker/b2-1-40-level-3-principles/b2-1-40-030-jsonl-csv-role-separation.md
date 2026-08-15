---
mission: B2-1
stage: principles
order: 30
unit: JSONL and CSV Role Separation
gate: WHY-HOW
visual_learning: DEFERRED
---
# 030. JSONL과 CSV 역할 분리

**한 줄 설명:** 현재 구현은 애플리케이션 내부 영속 저장에는 JSONL, 외부 교환에는 CSV를 사용해 서로 다른 목적을 분리한다.

## 현재 선택의 이유

README 기준 JSONL은 한 줄 한 레코드라 순차 처리와 `tags` 리스트 보존에 편리하다. CSV는 표 형태와 스프레드시트 교환에 유리하다.

```text
Application Persistence → JSONL
External Interchange    → CSV
```

## 트레이드오프

JSONL은 사람이 표처럼 보기 어렵고, 현재 인덱스가 없어서 id 검색·summary·rewrite에 O(n) 순회가 생긴다. CSV는 교환에는 좋지만 중첩/리스트 표현이 제한적이어서 `tags`를 쉼표 문자열로 직렬화한다.

## 10만 건 연결

Generator는 조회 메모리 사용을 줄이지만, 현재 id 생성·update/delete/import 재작성·summary는 전체 파일 비용이 남을 수 있다. README는 향후 메타데이터 분리, 월 파티셔닝, append journal + compaction, DB/인덱스를 개선 후보로 든다.

## 경계

JSONL은 현재 구현 선택이다. Mission이 허용하는 저장 포맷을 유일한 정답으로 바꾸지 않는다.

## WHY/HOW Gate

JSONL과 CSV를 `목적/장점/단점/확장성` 4축으로 비교한다.

[← 이전](./b2-1-40-020-model-invariants-validation.md) · [Index](./b2-1-40-000-index.md) · [다음 →](./b2-1-40-040-generator-yield-lazy-evaluation.md)
