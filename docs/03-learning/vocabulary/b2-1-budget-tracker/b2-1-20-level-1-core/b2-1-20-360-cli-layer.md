---
mission: B2-1
stage: level-1
order: 360
term: CLI Layer
lifecycle: DEEPEN
gate: V2-V3
visual_learning: DEFERRED
---
# CLI 계층 (CLI Layer)

**쉬운 뜻:** 사용자의 명령·옵션·대화형 입력을 받아 서비스 기능을 호출하고 결과를 출력하는 영역이다.

**B2-1 위치:** 현재 구현의 `cli.py`가 argparse, 입력, 출력 연결을 맡는다.

**핵심 관계:** user command → CLI parse/input → service → output.

**미니 확인:** CLI는 데이터 파일 포맷 세부를 직접 관리해야 하는가?

**Gate:** CLI 책임을 입력/출력 경계로 설명한다.

[← 350](./b2-1-20-350-service-layer.md) · [Level 1 Index](./b2-1-20-000-index.md) · [370 →](./b2-1-20-370-input-validation.md)
