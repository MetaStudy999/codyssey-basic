---
mission: B2-1
stage: level-1
order: 270
term: Decorator
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 데코레이터 (Decorator)

**쉬운 뜻:** 원래 함수의 핵심 코드를 직접 반복 수정하지 않고 바깥에서 공통 동작을 감싸 추가하는 Python 구조다.

**B2-1 위치:** 원본은 예외 처리·로그·시간 측정 같은 공통 기능 중 하나 이상을 decorator로 실제 적용하게 한다.

**핵심 관계:** function → decorator wrapper → cross-cutting behavior.

**미니 확인:** 현재 구현의 공통 CLI 오류 경계 decorator 이름은?

**Gate:** decorator와 공통 관심사 분리 이유를 설명한다.

[← 260](./b2-1-20-260-lazy-evaluation.md) · [Level 1 Index](./b2-1-20-000-index.md) · [280 →](./b2-1-20-280-cross-cutting-concern.md)
