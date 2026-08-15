---
mission: B1-2
stage: review
order: 20
unit: Constraints and Environment Recall
gate: RETRIEVAL-PRACTICE
visual_learning: DEFERRED
---

# Constraints & Environment Recall

## 복습 목표

B1-2의 고정 조건과 환경변수를 빈칸에서 복원한다.

## 먼저 회상

1. 실행 권한: root인가, non-root인가?
2. 앱 포트와 바인딩 주소는?
3. `MEMORY_LIMIT` 허용 범위는?
4. `CPU_MAX_OCCUPY` 허용 범위는?
5. Deadlock 비교에 사용하는 환경변수는?
6. B1-1에서 이어받는 `AGENT_*` 환경변수 5개는?
7. 키 파일명과 테스트 문자열은?
8. 금지된 분석 행위는?

## Source-locked 확인

```text
실행             non-root
bind             0.0.0.0:15034
MEMORY_LIMIT     integer 50~512 MB
CPU_MAX_OCCUPY   integer 10~100 %
Deadlock axis    MULTI_THREAD_ENABLE
AGENT_*          AGENT_HOME / AGENT_PORT / AGENT_UPLOAD_DIR / AGENT_KEY_PATH / AGENT_LOG_DIR
key file         secret.key
test string      agent_api_key_test
금지             decompilation / reverse engineering
```

## 관계 회상

```text
MEMORY_LIMIT        → OOM Before/After
CPU_MAX_OCCUPY      → CPU Before/After
MULTI_THREAD_ENABLE → Deadlock Before/After
```

값을 외우는 목적은 숫자 암기가 아니라 **어떤 장애를 어떤 한 축으로 비교했는지** 복원하는 데 있다.

## Gate

고정 조건 8개를 자료 없이 말하고, 세 환경변수와 세 장애를 정확히 연결하면 통과 후보다.

[← 010](./b1-2-70-010-mission-map-recall.md) · [Review Index](./b1-2-70-000-index.md) · [030 →](./b1-2-70-030-oom-chain-recall.md)
