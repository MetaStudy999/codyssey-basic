# B1-2 Integrated Review Full Pack

이 문서는 B1-2 Level 0~5를 한 페이지에서 빠르게 복습하기 위한 전체 요약이다. 단계별 회상 훈련은 [`b1-2-70-review/000-index`](./b1-2-70-review/b1-2-70-000-index.md)에서 진행한다.

## 1. Mission 한 줄

```text
OOM / CPU / Deadlock
→ 관찰
→ 실제 Evidence
→ RCA
→ 환경변수 단일 변경
→ Before & After
→ 재현 가능한 기술 리포트
```

## 2. 세 장애 핵심 매핑

| 장애 | 핵심 관찰 | 비교 변수 | 핵심 검증 |
|---|---|---|---|
| OOM | Memory/RSS/Heap growth + termination | `MEMORY_LIMIT` | 생존 시간·증가 패턴 Before/After |
| CPU | Target PID CPU + protection termination | `CPU_MAX_OCCUPY` | CPU/보호 동작 Before/After |
| Deadlock | PID alive + progress stall + thread/lock wait | `MULTI_THREAD_ENABLE` | stalled/progressing Before/After |

## 3. Source-locked 조건

- non-root 실행
- `0.0.0.0:15034`
- `MEMORY_LIMIT`: integer 50~512 MB
- `CPU_MAX_OCCUPY`: integer 10~100 %
- `MULTI_THREAD_ENABLE`: true/false 계열
- `AGENT_HOME`, `AGENT_PORT`, `AGENT_UPLOAD_DIR`, `AGENT_KEY_PATH`, `AGENT_LOG_DIR`
- `secret.key`, 테스트 문자열 `agent_api_key_test`
- decompilation / reverse engineering 금지

## 4. Troubleshooting

```text
Symptom
→ Observe
→ Layer
→ Hypothesis
→ Smallest Fix
→ Reverify
→ Recovery
→ Evidence
```

수정 전에 관찰하고, 한 번에 핵심 변수 하나만 바꾸며, 같은 방법으로 재검증한다.

## 5. 평가 설명

```text
WHAT
→ WHY
→ HOW
→ PROOF
→ LIMIT / ENVIRONMENT
→ FOLLOW-UP
```

현재 구현 저장소의 `b1-2-evaluation.md`는 official provenance가 확인되지 않았으므로 공식 PASS rubric으로 취급하지 않는다.

## 6. Reference Runtime 주의

현재 구현 저장소에는 실제 OOM/CPU/Deadlock Runtime Evidence가 있다. CPU build는 literal `[WATCHDOG]`/`SIGTERM` 앱 로그 대신 `CPU Threshold Violated!`와 exit 143이 관측됐다. 실제 관측값은 학습 참고이며 복사할 정답값이 아니다.

## 7. Review 종료 기준

```text
V1/V2 Recall
→ V3 Relation
→ V4 Apply
→ WHY/HOW
→ Troubleshooting
→ V5 Explain
→ Blank Recall
→ Evidence Mapping
→ LEARNING READY Decision
```

`LEARNING READY ≠ PERSONAL MASTERED ≠ RUNTIME VERIFIED ≠ MISSION PASS`를 유지한다.

## 8. 다음

Review 다음은 B1-2 Advanced다. 원본 Mission Bonus의 scheduling algorithm inference를 필수 요구와 분리해 선택 심화로 구조화한다.

[Review Unit Index](./b1-2-70-review/b1-2-70-000-index.md) · [Mission Index](./b1-2-00-index.md) · [Level 5](./b1-2-60-level-5-evaluation/b1-2-60-000-index.md)
