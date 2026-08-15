---
mission: B2-1
stage: level-1
order: 390
term: File Atomicity
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 파일 원자성 (File Atomicity)

**쉬운 뜻:** 파일 변경이 중간 상태로 보이지 않고 성공하면 전체 변경, 실패하면 기존 상태 보존처럼 다뤄지는 성질이다.

**B2-1 위치:** update/delete에서 임시 파일에 쓴 뒤 rename/replace하는 안전 전략과 연결된다.

**핵심 관계:** temp write → complete → atomic replace → reduce partial-write risk.

**미니 확인:** 현재 구현은 safe rewrite에서 어떤 표준 라이브러리 함수를 사용하는가?

**Gate:** atomicity가 partial write 위험을 줄이는 이유를 설명한다.

[← 380](./b2-1-20-380-data-integrity.md) · [Level 1 Index](./b2-1-20-000-index.md) · [400 →](./b2-1-20-400-exception-handling.md)
