---
mission: B1-2
stage: principles
level: 3
order: 110
unit: Reproducibility and Before After Comparison
gate: WHY-HOW
visual_learning: DEFERRED
---

# 재현 가능성과 전후 비교 — Reproducibility / Before & After

## 한 줄 설명

같은 조건에서 장애를 다시 만들 수 있고 핵심 변수 하나만 바꿔 결과가 달라지는지 비교하면, 그 변수와 현상 사이의 관계를 더 명확하게 검증할 수 있다.

## B1-2의 세 단일 변수

```text
OOM      : MEMORY_LIMIT
CPU      : CPU_MAX_OCCUPY
Deadlock : MULTI_THREAD_ENABLE
```

## 핵심 관계

```text
Baseline / Before
→ 한 변수만 변경
→ 같은 관찰 방식으로 재실행
→ After
→ 차이 비교
```

## 왜 여러 변수를 동시에 바꾸면 안 되는가

동시에 여러 설정을 바꾸면 결과 차이가 어느 변수 때문인지 분리하기 어려워진다. B1-2 Level 2에서 단일 변수 변경을 기본 원칙으로 둔 이유다.

## 실제 Runtime과 연결

현재 구현 저장소의 OOM, CPU, Deadlock 보고서는 각각 대응 환경 변수를 변경한 Before/After Evidence를 보존한다. 해당 값은 참고 관측값이지 다른 학습자가 복사할 정답은 아니다.

## WHY/HOW Gate

- [ ] Reproduction과 Verification의 차이를 설명한다.
- [ ] 단일 변수 변경이 왜 인과 추론에 유리한지 설명한다.
- [ ] Before와 After의 관찰 방식이 가능하면 같아야 하는 이유를 설명한다.

[← Evidence → RCA](./b1-2-40-100-evidence-causality-rca.md) · [Level 3 Index](./b1-2-40-000-index.md) · [다음: WHY/HOW Gate →](./b1-2-40-120-why-how-gate.md)
