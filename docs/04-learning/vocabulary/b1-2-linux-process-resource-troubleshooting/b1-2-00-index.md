# B1-2 Linux Process & Resource Troubleshooting

**한국어 미션명:** 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기  
**분야:** Linux와 OS  
**학습시간:** 40시간

> 이 디렉터리는 B1-2 학습 자료의 공식 진입점이다. B1-1에서 배운 공통 개념은 다시 NEW로 외우기보다 REVIEW/DEEPEN한다.

## 미션 핵심

```text
OOM Crash / CPU Latency / Deadlock
→ monitor.sh + ps/top 등
→ Log / PID / CPU / MEM / Thread Evidence
→ Root Cause Analysis
→ Environment Variable Workaround
→ Before & After
→ GitHub Issue 3건
```

## 학습 순서

| 순서 | 단계 | 목적 | 상태 |
|---:|---|---|---|
| 00 | 현재 Index | 전체 지도·Source of Truth | ✅ |
| 10 | [Level 0 — Prerequisite Term Index](./b1-2-10-level-0-prerequisite/b1-2-10-000-index.md) | 선수 용어 35개, V1 | ✅ |
| 20 | [Level 1 — Top Core Term Index](./b1-2-20-level-1-core/b1-2-20-000-index.md) | 핵심 용어 30개, V2~V3 | ✅ |
| 30 | [Level 2 — Execution Unit Index](./b1-2-30-level-2-execution/b1-2-30-000-index.md) | 12개 장애 재현·관제·Evidence 실행 단위 | ✅ |
| 40 | [Level 3 — Principle Unit Index](./b1-2-40-level-3-principles/b1-2-40-000-index.md) | 12개 Memory/CPU/Thread/Deadlock/RCA WHY-HOW 원리 단위 | ✅ |
| 50 | [Level 4 — Troubleshooting Unit Index](./b1-2-50-level-4-troubleshooting/b1-2-50-000-index.md) | 12개 증상·진단·최소수정·재검증 단위 | ✅ |
| 60 | [Level 5 — Evaluation Unit Index](./b1-2-60-level-5-evaluation/b1-2-60-000-index.md) | 12개 Evidence 기반 평가 설명 단위 | ✅ |
| 70 | [Integrated Review Index](./b1-2-70-review/b1-2-70-000-index.md) | 12개 회상·통합·LEARNING READY 판정 단위 | ✅ |
| 70 | [Review Full Pack](./b1-2-70-review-pack.md) | 한 페이지 전체 복습 | ✅ |
| 90 | [Advanced — Scheduling Inference Index](./b1-2-90-advanced/b1-2-90-000-index.md) | 원본 Bonus 스케줄링 알고리즘 역추론 10개 단위 | ✅ / 선택 |
| 90 | [Advanced Full Summary](./b1-2-90-advanced.md) | 선택 Bonus 한 페이지 요약 | ✅ / 선택 |

기존 [`b1-2.md`](../b1-2.md)는 전체 Vocabulary Summary와 기존 URL 호환용으로 유지한다.

## Source of Truth / Source 상태

1. **B1-2 원본 Mission PDF — authoritative**
2. 실제 제공 `agent-app-leak.zip`과 실제 Runtime Evidence
3. 현재 B1-2 구현 저장소의 코드·스크립트·보고서·검증 기록
4. `b1-2-mission.md` — 구현 저장소 Work Packet에서 사전조건 표 변환 충돌이 기록되어 있으므로 충돌 시 PDF 우선
5. `b1-2-evaluation.md` — 현재 구현 저장소 기준 official provenance가 확인되지 않은 `UNVERIFIED` provisional rubric
6. 현재 학습 디렉터리와 보조 설명

구현 저장소: <https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting>

## 원본 핵심 조건

- 대상 앱: `agent-leak-app`
- 일반 사용자(non-root) 실행
- `0.0.0.0:15034` 바인딩 가능
- `MEMORY_LIMIT`: 정수 `50~512` MB
- `CPU_MAX_OCCUPY`: 정수 `10~100` %
- `MULTI_THREAD_ENABLE`: `true/false` 계열 값
- `AGENT_HOME`, `AGENT_PORT`, `AGENT_UPLOAD_DIR`, `AGENT_KEY_PATH`, `AGENT_LOG_DIR` 준비
- key 경로 아래 `secret.key`, 테스트 문자열 `agent_api_key_test`
- OOM / CPU / Deadlock 리포트 3건
- 각 리포트: Description → Evidence & Logs → Root Cause Analysis → Workaround & Verification
- OOM은 `MEMORY_LIMIT`, CPU는 `CPU_MAX_OCCUPY`, Deadlock은 `MULTI_THREAD_ENABLE` 변경 전후 비교
- 바이너리 디컴파일·리버스 엔지니어링 금지

## 원본 Bonus — Scheduling Algorithm Inference

원본 Mission PDF의 선택 Bonus는 다음 흐름을 요구한다.

```text
Log Timestamp
→ 실행 순서·교체 주기 패턴화
→ Round-Robin / FCFS / Priority 비교
→ 논리적 알고리즘 역추론
→ 기술적 장단점
→ 서비스 아키텍처 적합성
→ Scheduling Inference Report
```

원본 PDF의 Round-Robin 예시는 정답이 아니라 참고 예시다. 실제 Advanced 수행에서는 본인이 수집한 로그 Evidence를 우선한다.

## 누적 학습 흐름

```text
B1-1 정상 관제
→ B1-2 Level 0/1 개념
→ Level 2 실제 실행/Evidence
→ Level 3 WHY/HOW
→ Level 4 장애 진단
→ Level 5 평가 설명
→ Review 통합 복원
→ Advanced 선택 Bonus
→ B2-1
```

## 상태 경계

```text
B1-2 NON-VISUAL LEARNING STRUCTURE READY
≠ PERSONAL MASTERED
≠ ADVANCED TASK EXECUTED
≠ RUNTIME VERIFIED
≠ MISSION PASS
```

학습 문서 구조가 완성되었다는 사실은 실제 Runtime Evidence나 평가 PASS를 의미하지 않는다.

## Visual Learning

Visual Learning은 **DEFERRED**다. 만화·도식 작업은 별도 Backlog에 유지하며 현재 비시각 학습 구조를 막지 않는다.

## 다음 작업

`B2-1 — 기존 1차 Vocabulary Summary를 Source Lock한 뒤 Level 0~5 + Review + Advanced 구조로 확장`

[← B1-1 Advanced](../b1-1-system-monitoring-automation/b1-1-90-advanced/b1-1-90-000-index.md) · [전체 Vocabulary Index](../README.md) · [Advanced →](./b1-2-90-advanced/b1-2-90-000-index.md)
