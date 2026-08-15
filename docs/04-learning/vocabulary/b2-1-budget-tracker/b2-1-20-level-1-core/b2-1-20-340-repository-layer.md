---
mission: B2-1
stage: level-1
order: 340
term: Repository Layer
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 저장소 계층 (Repository Layer)

**쉬운 뜻:** 데이터를 실제 저장 매체에서 읽고 쓰는 세부 작업을 담당하는 영역이다.

**B2-1 위치:** 현재 구현의 `storage.py`가 JSONL I/O, generator, atomic rewrite를 담당한다.

**핵심 관계:** service ↔ repository ↔ files.

**미니 확인:** JSONL 파일 열기와 재작성 세부사항은 CLI보다 어느 계층에 두는가?

**Gate:** Repository의 저장 책임을 설명한다.

[← 330](./b2-1-20-330-model-layer.md) · [Level 1 Index](./b2-1-20-000-index.md) · [350 →](./b2-1-20-350-service-layer.md)
