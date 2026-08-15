---
mission: B2-1
stage: level-5-evaluation
order: 10
unit: Evaluation Answer Framework
gate: V5
visual_learning: DEFERRED
---
# 010. Evaluation Answer Framework

## 핵심 질문
평가 질문을 구현 사실·설계 이유·증거·한계까지 포함해 어떻게 답할 것인가?

## WHAT
먼저 기능 또는 설계 요소를 한 문장으로 정의한다.

## WHY
그 선택이 해결하려는 문제를 말한다. 단순히 “좋아서”가 아니라 데이터 안전성, 책임 분리, 메모리 사용, 사용자 경험 같은 이유를 연결한다.

## HOW
현재 구현에서 실제 파일·클래스·함수·명령의 위치를 짚는다.

## PROOF
테스트명, CLI 출력, 저장 파일, Evidence를 제시한다. 기존 Evidence와 본인의 재실행 여부를 구분한다.

## LIMIT / ENVIRONMENT
현재 파일 기반 구현의 범위, O(n) 비용, 구현 선택과 Mission 요구의 경계를 말한다.

## FOLLOW-UP
대안 설계, 10만 건 확장, 데이터베이스 전환 같은 꼬리질문으로 확장한다.

## V5 Gate
임의의 평가 질문 하나를 위 6단계로 1분 안에 답하고, 3~5분 버전으로 확장할 수 있는가?

[Level 5 Index](./b2-1-60-000-index.md) · [다음 →](./b2-1-60-020-functions-persistence.md)
