---
mission: B2-1
stage: principles
order: 120
unit: WHY HOW Principle Gate
gate: WHY-HOW
visual_learning: DEFERRED
---
# 120. WHY/HOW Principle Gate

**목표:** Level 3의 11개 원리를 명령 암기가 아니라 구조·메커니즘·트레이드오프로 설명한다.

## 백지 복원

다음을 보지 않고 연결한다.

```text
Transaction invariant
→ Persistence
→ JSONL / CSV 역할
→ Generator / Lazy Evaluation
→ Streaming / Materialization
→ Layer responsibility
→ Atomic rewrite
→ Referential integrity
→ Decorator
→ Type contract
→ Import rollback
```

## 필수 자기설명

1. 왜 generator가 대용량 조회에 유리하지만 전체 확장성 문제를 모두 해결하지 않는가?
2. 왜 Model/Service/Repository/CLI 책임을 나누는가?
3. 왜 update/delete에서 temp + replace가 직접 덮어쓰기보다 안전한가?
4. 왜 사용 중 category 삭제를 막는가?
5. 왜 `@cli_guard`가 cross-cutting concern인가?
6. 타입 힌트와 런타임 검증은 어떻게 다른가?
7. CSV import 전체 rollback 정책의 장단점은 무엇인가?
8. JSONL과 CSV를 서로 다른 역할에 사용한 이유와 10만 건 시 병목은 무엇인가?

## Source 경계 체크

- 현재 구현 선택을 Mission 유일 정답으로 말하지 않는다.
- README의 확장성 개선안은 **향후 후보**이지 현재 구현 완료 기능으로 말하지 않는다.
- 기존 18/18 테스트 Evidence를 학습자의 직접 원리 설명 통과로 대체하지 않는다.

## 판정

```text
PRINCIPLE STRUCTURE READY
≠ PERSONAL WHY/HOW READY
≠ EVALUATION PASS
≠ MISSION PASS
```

11개 원리 중 최소 80%를 1분 내 핵심 관계로 설명하고, 3개 이상은 실제 코드 위치까지 연결하면 다음 Level 4로 이동한다.

[← 이전](./b2-1-40-110-import-all-or-nothing.md) · [Index](./b2-1-40-000-index.md) · [Mission Index](../b2-1-00-index.md)
