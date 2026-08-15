# B1-1 System Monitoring Automation

**한국어 미션명:** 시스템 관제 자동화 스크립트 개발  
**학습용 표현:** 컴퓨터가 알아서 자기 상태를 점검하게 만들기  
**분야:** Linux와 OS  
**학습시간:** 40시간  
**학습 구조:** Level 0 → Level 1 → Level 2 → Level 3 → Level 4 → Level 5 → Review → Advanced

> 이 디렉터리는 B1-1 학습 자료의 공식 진입점이다. 파일명은 항상 `b1-1-`로 시작하고 순서 번호를 사용한다. Level 0·1은 `한 파일 = 한 용어`, Level 2는 `한 파일 = 독립 실행 학습 단위`, Level 3는 `한 파일 = 독립 원리 학습 단위`, Level 4는 `한 파일 = 독립 장애 진단 단위`를 적용한다.

## 1. 현재 작업 정책

비시각 학습 콘텐츠를 우선한다.

```text
용어 구조화
→ 선수·후행 관계
→ 실습
→ 원리 이해
→ 트러블슈팅
→ 평가 설명
→ V1~V5 Gate
→ 미션 간 연결
→ Visual Learning (DEFERRED)
```

만화·도식 제작은 현재 **DEFERRED**이며 학습 콘텐츠 진행을 막지 않는다. 향후 형식, Source Lock, 이미지 QA, GitHub 반영 기준은 [Visual Learning Backlog](../../visual-learning-backlog.md)에 보존한다.

## 2. 학습 순서

| 순서 | 단계 | 목적 | Gate | 상태 |
|---:|---|---|---|---|
| 00 | 현재 Index | 전체 지도·Source of Truth | 다음 학습 선택 | ✅ |
| 10 | [Level 0 — Prerequisite Term Index](./b1-1-10-level-0-prerequisite/b1-1-10-000-index.md) | 선수 용어 29개 개별 파일 | V1 | ✅ |
| 20 | [Level 1 — Core Terms](./b1-1-20-level-1-core/b1-1-20-000-index.md) | Top Core 28개 개별 용어 | V2 + V3 | ✅ |
| 30 | [Level 2 — Execution Unit Index](./b1-1-30-level-2-execution/b1-1-30-000-index.md) | 12개 실행 학습 단위 | V4 | ✅ |
| 40 | [Level 3 — Principle Unit Index](./b1-1-40-level-3-principles/b1-1-40-000-index.md) | 12개 구조·원리 학습 단위 | WHY/HOW | ✅ |
| 50 | [Level 4 — Troubleshooting Unit Index](./b1-1-50-level-4-troubleshooting/b1-1-50-000-index.md) | 12개 장애 진단·복구 학습 단위 | Evidence 기반 진단 | ✅ |
| 60 | [Level 5 — Evaluation](./b1-1-60-level-5-evaluation.md) | 평가 답변·자기 설명 | V5 | NEXT |
| 70 | [Review Pack](./b1-1-70-review-pack.md) | 통합 복습·최종 Gate | LEARNING READY | 문서 존재 |
| 90 | [Advanced](./b1-1-90-advanced.md) | 선택 심화 | 필요 시 | 문서 존재 |

기존 [Level 0 요약](./b1-1-10-level-0-prerequisite.md), [Level 1 요약](./b1-1-20-level-1-core.md), [Level 2 전체 실행 가이드](./b1-1-30-level-2-execution.md), [Level 3 전체 원리 가이드](./b1-1-40-level-3-principles.md), [Level 4 전체 트러블슈팅 가이드](./b1-1-50-level-4-troubleshooting.md)는 기존 URL 호환과 한 페이지 요약용으로 유지한다. `80`은 향후 실전 모의평가·추가 Lab 삽입을 위한 예약 구간이다.

## 3. Source of Truth

1. B1-1 원본 Mission PDF / Mission Markdown
2. B1-1 Evaluation
3. 현재 B1-1 구현 저장소의 실제 코드·설정·테스트
4. 이 디렉터리의 Level별 학습 문서
5. Advanced / Visual Learning 보조 자료

현재 구현 저장소: <https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor>

학습 자료가 원본 요구사항을 임의로 변경하지 않는다.

## 4. B1-1 핵심 고정값

| 항목 | 원본 기준 |
|---|---|
| SSH | TCP `20022` |
| Agent | TCP `15034` |
| 사용자 | `agent-admin`, `agent-dev`, `agent-test` |
| 그룹 | `agent-common`, `agent-core` |
| `agent-common` | admin + dev + test |
| `agent-core` | admin + dev |
| Agent 로그 디렉터리 | `/var/log/agent-app` |
| monitor 로그 | `/var/log/agent-app/monitor.log` |
| `monitor.sh` 소유자 | `agent-dev` |
| `monitor.sh` 그룹 | `agent-core` |
| `monitor.sh` 권한 | `750` |
| cron 실행자 | `agent-admin` |
| cron 주기 | 매분 |
| CPU 경고 | `> 20%` |
| MEM 경고 | `> 10%` |
| DISK 경고 | `> 80%` |
| 로그 회전 | `10MB / 10개` |

환경 변수:

```text
AGENT_HOME
AGENT_PORT
AGENT_UPLOAD_DIR
AGENT_KEY_PATH
AGENT_LOG_DIR
```

## 5. 전체 Dependency Map

```text
Linux / CLI / File / Directory
        ↓
User / Group / Permission / ACL / PoLP
        ↓
SSH / sshd / TCP / Port / Firewall
        ↓
Environment Variable / Bash / Shell Script
        ↓
Process / PID / LISTEN
        ↓
System Monitoring / Health Check
        ↓
CPU / Memory / Disk
        ↓
Log / Append / Timestamp
        ↓
cron / crontab
        ↓
Log Rotation
        ↓
Verification / Troubleshooting / Evidence
        ↓
Evaluation Explanation
```

중요한 구분:

```text
설정값 ≠ 실제 동작
프로세스 존재 ≠ 서비스 정상
명령 성공 메시지 ≠ 최종 상태 검증
문서 작성 ≠ Runtime PASS
```

## 6. Vocabulary Gate

| Gate | 질문 |
|---|---|
| V1 — Seen | 용어를 보고 알아볼 수 있는가? |
| V2 — Meaning | 쉬운 말로 설명할 수 있는가? |
| V3 — Relation | 다른 개념과의 관계를 설명할 수 있는가? |
| V4 — Locate / Apply | 실제 파일·설정·명령에서 찾고 적용할 수 있는가? |
| WHY/HOW | 구조가 왜 필요한지와 어떻게 연결되는지 설명할 수 있는가? |
| Troubleshooting | 실패 층을 분리하고 최소 수정·재검증·Evidence로 복구를 증명할 수 있는가? |
| V5 — Explain | 평가자에게 원리·선택 이유·검증 근거까지 설명할 수 있는가? |

## 7. 관련 문서

- [전체 용어 인덱스](../README.md)
- [미션 용어 학습 체계](../../vocabulary-learning-plan.md)
- [개별 용어 파일 표준](../../term-file-standard.md)
- [Visual Learning Backlog](../../visual-learning-backlog.md)
- [Basic Master Vocabulary](../../basic-master-vocabulary.md)
- [전체 용어 품질 감사](../../vocabulary-quality-audit.md)

## 8. 다음 비시각 작업

```text
B1-1 Level 0 개별 용어 구조화    ✅
B1-1 Level 1 개별 용어 구조화    ✅
B1-1 Level 2 실행 단위 구조화    ✅
B1-1 Level 3 원리 단위 구조화    ✅
B1-1 Level 4 장애 진단 구조화    ✅
→ Level 5 평가 설명 구조 세분화
→ Review 통합 점검
→ B1-2 동일 구조 확장
```

➡️ [B1-1 Level 4 — Troubleshooting Unit Index](./b1-1-50-level-4-troubleshooting/b1-1-50-000-index.md)
