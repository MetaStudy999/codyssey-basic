---
mission: B1-2
stage: evaluation
level: 5
order: 70
unit: Evidence RCA Defense
gate: V5
visual_learning: DEFERRED
---

# Evidence / RCA Defense

## 핵심 질문

관찰 사실에서 Root Cause Analysis까지 얼마나 강하게 말할 수 있는가?

## 답변 구조

```text
Evidence
→ Fact
→ Pattern
→ Hypothesis
→ Controlled Comparison
→ Supported Cause
→ Remaining Limits
```

## OOM 예

Fact: RSS/Heap 증가와 `MemoryGuard` self-termination이 관찰됐다.  
Supported Cause: 직접 종료 주체는 앱의 MemoryGuard 보호 정책이다.  
Limit: 실제 누수 코드 라인은 확인하지 않았다.

## CPU 예

Fact: 대상 process family의 CPU 상승과 `CPU Threshold Violated!`, exit 143이 이어졌다.  
Supported Cause: 현재 build의 CPU 보호 정책과 종료가 연결된다.  
Limit: literal SIGTERM 앱 로그는 없으며 exit 143만으로 내부 구현을 단정하지 않는다.

## Deadlock 예

Fact: 각 Worker가 서로 상대 lock을 기다렸고 futex wait가 관찰됐다.  
Supported Cause: circular wait가 업무 진행 정지와 연결된다.  
Limit: 소스 내부 구현은 역공학하지 않았다.

## 평가 방어 문장

`제가 확인한 사실은 A이고, B라고 판단한 이유는 C Evidence입니다. 다만 D는 직접 확인하지 않았으므로 단정하지 않습니다.`

## V5 Gate

Evidence, 추론, 확인되지 않은 부분을 세 칸으로 나누어 답할 수 있다.

[← 060](./b1-2-60-060-os-principles-evaluation.md) · [Index](./b1-2-60-000-index.md) · [080 →](./b1-2-60-080-workaround-vs-root-cause.md)
