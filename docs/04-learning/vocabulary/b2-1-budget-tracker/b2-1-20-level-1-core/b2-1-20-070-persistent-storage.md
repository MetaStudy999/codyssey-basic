---
mission: B2-1
stage: level-1
order: 70
term: Persistent Storage
lifecycle: NEW
gate: V2-V3
visual_learning: DEFERRED
---
# 영구 저장 (Persistent Storage)

**쉬운 뜻:** 프로그램이 종료된 뒤에도 데이터가 남도록 저장하는 것이다.

**B2-1 위치:** 거래·카테고리·예산을 최소 3개 파일에 보존한다.

**핵심 관계:** write file → process exit → data survives restart.

**미니 확인:** 메모리 변수에만 거래를 두면 영구 저장인가?

**Gate:** persistence를 재실행 후 데이터 유지로 설명한다.

[← 060](./b2-1-20-060-dataclass.md) · [Level 1 Index](./b2-1-20-000-index.md) · [080 →](./b2-1-20-080-file-based-storage.md)
