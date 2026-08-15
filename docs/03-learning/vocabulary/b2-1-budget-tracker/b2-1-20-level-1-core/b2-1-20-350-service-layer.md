---
mission: B2-1
stage: level-1
order: 350
term: Service Layer
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 서비스 계층 (Service Layer)

**쉬운 뜻:** 사용자가 원하는 기능의 업무 규칙과 여러 저장 동작을 조합하는 영역이다.

**B2-1 위치:** 현재 구현의 `services.py`가 검색·요약·CSV 입출력 등 기능 규칙을 담당한다.

**핵심 관계:** CLI request → service rules → repository/model.

**미니 확인:** 월별 summary 계산 규칙은 저장소보다 어느 계층에 두는 것이 자연스러운가?

**Gate:** Service가 업무 규칙을 담당한다고 설명한다.

[← 340](./b2-1-20-340-repository-layer.md) · [Level 1 Index](./b2-1-20-000-index.md) · [360 →](./b2-1-20-360-cli-layer.md)
