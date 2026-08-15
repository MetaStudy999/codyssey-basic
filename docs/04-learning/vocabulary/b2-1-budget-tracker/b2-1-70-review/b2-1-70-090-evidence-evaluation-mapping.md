---
mission: B2-1
stage: review
order: 90
unit: Evidence and Evaluation Mapping
gate: EVIDENCE-RETRIEVAL
visual_learning: DEFERRED
---

# 090 — Evidence & Evaluation Mapping

## 복습 목표

평가 문항마다 어떤 Evidence가 필요한지 역으로 연결한다.

## 평가 4영역 회상

1. 기능 및 예외 처리
2. 모듈 및 클래스 설계
3. 제너레이터·데코레이터·타입 힌트
4. 저장 포맷 및 확장성

## 매핑 과제

각 평가 영역에 다음 Evidence를 배치한다.

- CLI 정상 출력
- CLI 오류 출력과 non-zero exit
- 재실행 후 데이터 유지
- category 사용 중 삭제 방지
- CSV UTF-8/schema round trip
- broken CSV rollback
- generator 객체/iteration 검증
- 모듈·클래스 코드 위치
- `@cli_guard` 적용 위치
- type hint가 보이는 함수/메서드
- 10만 건에서 예상되는 O(n) scan/rewrite 분석

## 중요한 경계

```text
TEST PASSED
→ 특정 동작의 근거

EXPLANATION
→ 설계 이유와 한계의 근거

둘 다 있어야 평가 설명이 강해진다.
```

기존 18/18 테스트는 참고할 수 있지만 개인 재실행 Evidence와 동일하지 않다.

## 통합 Gate

**PASS:** 공식 평가 4영역 각각에 최소 2개의 구체 Evidence를 연결한다.

[← 080](./b2-1-70-080-troubleshooting-scenarios.md) · [Review Index](./b2-1-70-000-index.md) · [100 →](./b2-1-70-100-oral-explanation-practice.md)
