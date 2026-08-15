# B1-2 Linux Process & Resource Troubleshooting

**한국어 미션명:** 컴퓨터가 갑자기 느려지거나 멈췄을 때 원인 찾아 고치기  
**분야:** Linux와 OS  
**학습시간:** 40시간

> 이 디렉터리는 B1-2 학습 자료의 공식 진입점이다. 원본 Mission/Evaluation을 Source of Truth로 두고, B1-1에서 배운 공통 개념은 다시 NEW로 외우기보다 REVIEW/DEEPEN한다.

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
| 20 | Level 1 — Top Core | 핵심 용어 30개, V2~V3 | NEXT |
| 30 | Level 2 — Execution | 세 장애 재현·관제·Evidence 수집 | 이후 |
| 40 | Level 3 — Principles | Memory/CPU/Deadlock 원리 | 이후 |
| 50 | Level 4 — Troubleshooting | 장애 진단·비교 검증 | 이후 |
| 60 | Level 5 — Evaluation | 평가 답변·기술 보고 | 이후 |
| 70 | Review | 통합 복습·후행 연결 | 이후 |
| 90 | Advanced | 스케줄링 알고리즘 추론 | 선택 |

기존 [`b1-2.md`](../b1-2.md)는 전체 Vocabulary Summary와 기존 URL 호환용으로 유지한다.

## Source of Truth

1. B1-2 원본 Mission PDF / `b1-2-mission.md`
2. `b1-2-evaluation.md`
3. 현재 B1-2 구현 저장소의 실제 코드·설정·Evidence
4. 현재 학습 디렉터리
5. 학습 보조 설명

구현 저장소: <https://github.com/MetaStudy999/codyssey-basic-b1-2-linux-troubleshooting>

## 원본 핵심 조건

- 대상 앱: `agent-leak-app`
- 일반 사용자(non-root) 실행
- `0.0.0.0:15034` 바인딩 가능
- `MEMORY_LIMIT`: 정수 `50~512` MB
- `CPU_MAX_OCCUPY`: 정수 `10~100` %
- `MULTI_THREAD_ENABLE`: `true/false` 계열 값
- `$AGENT_HOME/api_keys/secret.key` 존재
- OOM / CPU / Deadlock 리포트 3건
- 각 리포트: Description → Evidence & Logs → Root Cause Analysis → Workaround & Verification
- OOM은 `MEMORY_LIMIT`, CPU는 `CPU_MAX_OCCUPY`, Deadlock은 `MULTI_THREAD_ENABLE` 변경 전후 비교
- 바이너리 디컴파일·리버스 엔지니어링 금지

## B1-1 → B1-2 누적 학습

```text
B1-1: Process / PID / CPU / Memory / Log / Monitoring / Evidence
                       ↓
                 REVIEW / DEEPEN
                       ↓
B1-2: Memory Leak / OOM / CPU Spike / Thread / Lock / Deadlock / RCA
```

B1-1이 정상 상태의 관제와 운영 기반을 만들었다면, B1-2는 비정상 상태를 증거로 진단하는 능력으로 확장한다.

## Visual Learning

Visual Learning은 **DEFERRED**다. 만화·도식 작업은 별도 Backlog에 유지하며 현재 비시각 학습 구조를 막지 않는다.

## 다음 작업

`Level 1 — Top Core 30개 개별 용어 구조화`

[← B1-1 Review](../b1-1-system-monitoring-automation/b1-1-70-review/b1-1-70-000-index.md) · [전체 Vocabulary Index](../README.md) · [Level 0 →](./b1-2-10-level-0-prerequisite/b1-2-10-000-index.md)
