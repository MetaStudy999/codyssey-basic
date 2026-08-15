---
mission: B1-2
stage: evaluation
level: 5
order: 10
unit: Evaluation Answer Framework
gate: V5
visual_learning: DEFERRED
---

# Evaluation Answer Framework

## 핵심 질문

장애 분석 결과를 평가자에게 어떻게 짧고 검증 가능하게 설명할 것인가?

## WHAT

먼저 `무슨 현상이 있었는가`를 한 문장으로 말한다. 예: 메모리 증가 후 보호 종료, 특정 PID의 CPU 상승 후 보호 종료, PID는 살아 있지만 thread 진행이 멈춘 상태.

## WHY

그 현상이 왜 운영상 문제인지 설명한다. 자원 고갈, latency 증가, 업무 thread 정지처럼 영향과 연결한다.

## HOW

`재현 조건 → 관찰 도구 → 핵심 Evidence → 단일 변수 변경 → 재검증` 순서로 말한다.

## PROOF

최소 다음 중 실제 존재하는 것을 제시한다.

- PID
- timestamp
- RSS / CPU / thread 상태
- 실제 애플리케이션 로그
- Before/After 환경변수와 결과

## LIMIT / ENVIRONMENT

Mission 예시와 실제 build가 다를 수 있음을 밝히고, 관측하지 않은 내부 구현은 추측하지 않는다. 현재 `b1-2-evaluation.md`는 공식 provenance가 확인되지 않은 provisional rubric이다.

## FOLLOW-UP

꼬리질문은 `왜 그 도구를 썼나`, `다른 원인일 가능성은`, `근본 해결은`, `운영 환경이라면` 네 방향으로 준비한다.

## V5 Gate

- [ ] 30초 안에 WHAT/WHY/HOW/PROOF를 말할 수 있다.
- [ ] Evidence와 추론을 구분한다.
- [ ] 확인하지 않은 사항을 사실처럼 말하지 않는다.

[← Index](./b1-2-60-000-index.md) · [다음 →](./b1-2-60-020-oom-evaluation.md)
