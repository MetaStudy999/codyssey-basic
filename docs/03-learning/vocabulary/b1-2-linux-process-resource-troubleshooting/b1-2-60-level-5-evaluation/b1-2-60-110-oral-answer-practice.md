---
mission: B1-2
stage: evaluation
level: 5
order: 110
unit: Oral Answer Practice
gate: V5
visual_learning: DEFERRED
---

# Oral Answer Practice

## 1분 답변 구조

```text
10초 WHAT      — 어떤 장애였는가
10초 WHY       — 왜 문제인가
20초 HOW       — 어떻게 재현·관찰했는가
15초 PROOF     — 핵심 Evidence / Before&After
5초 LIMIT      — 무엇은 확인하지 않았는가
```

## 3~5분 답변 구조

1. 재현 조건과 환경 변수
2. PID/Port 식별과 관찰 도구
3. 시간 순서 Evidence
4. 원리와 RCA
5. 단일 변수 Before/After
6. Workaround와 근본 해결 구분
7. 실제 build 차이와 측정 한계
8. 운영 환경 개선 제안

## 연습 질문

- OOM이 OS OOM Killer가 아니라 MemoryGuard 종료라고 판단한 이유는?
- CPU 문제에서 왜 대상 PID를 식별했는가?
- Deadlock에서 PID와 Port가 살아 있어도 장애라고 판단한 이유는?
- 가장 강한 Evidence와 가장 약한 추론은 각각 무엇인가?
- 다시 수행한다면 Evidence 수집 순서를 어떻게 개선할 것인가?

## 자기 채점

- 숫자와 로그를 외워 말하는 데 그치지 않는가?
- 명령어를 `왜` 사용했는지 설명하는가?
- 실제 관찰과 일반 원리를 구분하는가?
- 없는 로그나 확인하지 않은 원인을 만들어내지 않는가?

## V5 Gate

OOM/CPU/Deadlock 중 임의의 하나를 골라 1분 답변 후, 꼬리질문 2개를 3~5분 구조로 확장한다.

[← 100](./b1-2-60-100-multi-failure-priority.md) · [Index](./b1-2-60-000-index.md) · [120 →](./b1-2-60-120-v5-evaluation-gate.md)
