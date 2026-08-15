---
mission: B2-1
stage: level-1
order: 330
term: Model Layer
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 모델 계층 (Model Layer)

**쉬운 뜻:** 핵심 데이터 구조와 그 데이터 자체의 기본 규칙을 담당하는 영역이다.

**B2-1 위치:** 현재 구현에서는 `models.py`의 Transaction이 중심이다.

**핵심 관계:** Model → valid domain data → repository/service.

**미니 확인:** Transaction 필드 정의는 어느 계층 책임인가?

**Gate:** Model이 데이터 구조 중심임을 설명한다.

[← 320](./b2-1-20-320-separation-of-responsibilities.md) · [Level 1 Index](./b2-1-20-000-index.md) · [340 →](./b2-1-20-340-repository-layer.md)
