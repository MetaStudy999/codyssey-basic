# B1-1 System Monitoring Automation

**한국어 미션명:** 시스템 관제 자동화 스크립트 개발  
**학습용 표현:** 컴퓨터가 알아서 자기 상태를 점검하게 만들기  
**분야:** Linux와 OS  
**학습시간:** 40시간  
**학습 구조:** Level 0 → Level 1 → Level 2 → Level 3 → Level 4 → Level 5 → Review → Advanced

> 이 디렉터리는 B1-1 학습 자료의 공식 진입점이다. 파일명은 항상 `b1-1-`로 시작하고, 순서 번호를 사용해 GitHub·Linux·WSL·macOS에서 동일한 정렬 순서를 유지한다. Level 1부터 `한 파일 = 한 용어` Pilot을 적용한다.

---

## 1. 이 디렉터리를 먼저 여는 이유

B1-1 자료를 한 파일에 계속 누적하면 선수지식, 핵심 개념, 실행, 원리, 트러블슈팅, 평가 준비가 섞이기 쉽다. 이 구조는 학습 단계와 파일 구조를 일치시킨다.

```text
00 전체 지도
   ↓
10 Level 0 — 선수지식
   ↓
20 Level 1 — 핵심 개념 / Top Core / 개별 용어 파일
   ↓
30 Level 2 — 실제 구현·실행
   ↓
40 Level 3 — 구조·동작 원리
   ↓
50 Level 4 — 검증·트러블슈팅
   ↓
60 Level 5 — 평가·자기 설명
   ↓
70 Review — 통합 복습 / V1~V5
   ↓
90 Advanced — 선택 심화
```

`80`은 향후 실전 모의평가, 추가 랩, 프로젝트 확장 자료를 끼워 넣기 위한 예약 구간이다.

---

## 2. 학습 파일 순서

| 순서 | 파일 | 목적 | 완료 기준 |
|---:|---|---|---|
| 00 | [b1-1-00-index.md](./b1-1-00-index.md) | 전체 지도와 Source of Truth 확인 | 다음 파일을 스스로 선택할 수 있음 |
| 10 | [b1-1-10-level-0-prerequisite.md](./b1-1-10-level-0-prerequisite.md) | Linux/CLI/File/Process/Network 선수지식 | V1 인지 |
| 20 | [b1-1-20-level-1-core/](./b1-1-20-level-1-core/b1-1-20-000-index.md) | Top Core 28개를 개별 용어 파일로 학습 | V2 이해 + V3 관계 |
| 30 | [b1-1-30-level-2-execution.md](./b1-1-30-level-2-execution.md) | 실제 명령·파일·설정 수행 | V4 실제 위치·적용 |
| 40 | [b1-1-40-level-3-principles.md](./b1-1-40-level-3-principles.md) | 권한·SSH·소켓·관제·cron·로그 원리 | WHY/HOW 설명 |
| 50 | [b1-1-50-level-4-troubleshooting.md](./b1-1-50-level-4-troubleshooting.md) | 장애 분리·검증·복구·Evidence | 오류 상황에서 확인 순서 설명 |
| 60 | [b1-1-60-level-5-evaluation.md](./b1-1-60-level-5-evaluation.md) | 평가 답변과 자기 설명 | V5 설명 |
| 70 | [b1-1-70-review-pack.md](./b1-1-70-review-pack.md) | 복습 카드·구두 퀴즈·최종 Gate | LEARNING READY |
| 90 | [b1-1-90-advanced.md](./b1-1-90-advanced.md) | 현재 미션 범위를 넘는 선택 심화 | 필요 시 선택 학습 |

기존 [`b1-1-20-level-1-core.md`](./b1-1-20-level-1-core.md)는 전체 Level 1 용어와 관계를 한 번에 보는 요약 문서로 유지한다. Top Core를 한 용어씩 학습할 때는 새 Level 1 디렉터리의 `000-index`를 사용한다.

---

## 3. Source of Truth

학습 문서보다 미션 원본이 우선한다.

1. B1-1 원본 Mission PDF / Mission Markdown
2. B1-1 Evaluation
3. 현재 B1-1 구현 저장소의 실제 코드·설정·테스트
4. 이 디렉터리의 Level별 학습 문서
5. Advanced 보조 자료

현재 구현 저장소:

- <https://github.com/MetaStudy999/codyssey-basic-b1-1-system-monitor>

이 학습 디렉터리는 원본 요구사항을 임의로 변경하지 않는다. Ubuntu 24.04에서 관찰한 `ssh.socket` 동작처럼 특정 실습 환경에서만 확인된 사항은 **구현 관찰값**으로 표시하고 원본 미션의 보편 요구사항으로 승격하지 않는다.

---

## 4. B1-1 핵심 고정값

| 항목 | 원본 기준 핵심값 |
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

환경 변수 5개:

```text
AGENT_HOME
AGENT_PORT
AGENT_UPLOAD_DIR
AGENT_KEY_PATH
AGENT_LOG_DIR
```

현재 학습 가이드에서 사용하는 재현용 표준 예시는 다음과 같다.

```text
AGENT_HOME=/home/agent-admin/agent-app
AGENT_PORT=15034
AGENT_UPLOAD_DIR=/home/agent-admin/agent-app/upload_files
AGENT_KEY_PATH=/home/agent-admin/agent-app/api_keys/t_secret.key
AGENT_LOG_DIR=/var/log/agent-app
```

경로 예시는 현재 저장소의 재현성을 위한 구현 선택이며, 미션 원본의 고정 요구와 구분해서 이해한다.

---

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

B1-1에서 가장 중요한 네 가지 구분:

```text
설정값 ≠ 실제 동작
프로세스 존재 ≠ 서비스 정상
명령 성공 메시지 ≠ 최종 상태 검증
문서 작성 ≠ Runtime PASS
```

---

## 6. 학습 상태와 실제 미션 상태를 분리한다

```text
LEARNING READY
= Level 0~5 + Review에서 용어·관계·적용·설명을 통과

RUNTIME VERIFIED
= 실제 SSH / Firewall / Agent / monitor / cron / logrotate가 명령·로그로 검증됨

MISSION PASS
= 원본 평가 기준과 제출 Evidence까지 충족
```

따라서 학습 문서 체크박스를 모두 채웠다고 실제 미션 PASS로 처리하지 않는다.

---

## 7. 공통 Vocabulary Gate

| Gate | 질문 |
|---|---|
| V1 — Seen | 핵심 용어를 보고 알아볼 수 있는가? |
| V2 — Meaning | 쉬운 말로 의미를 설명할 수 있는가? |
| V3 — Relation | 다른 개념과의 선후·원인·관계를 설명할 수 있는가? |
| V4 — Locate / Apply | 실제 파일·설정·명령에서 해당 개념을 찾고 적용할 수 있는가? |
| V5 — Explain | 평가자에게 원리·선택 이유·검증 근거까지 설명할 수 있는가? |

---

## 8. 관련 상위 문서

- [Codyssey Basic 전체 용어 인덱스](../README.md)
- [미션 용어 학습 체계 기획](../../vocabulary-learning-plan.md)
- [개별 용어 파일 표준](../../term-file-standard.md)
- [Basic Master Vocabulary](../../basic-master-vocabulary.md)
- [전체 용어 품질 감사](../../vocabulary-quality-audit.md)
- [04. Learning](../../README.md)

---

## 9. 다음 학습

처음 학습한다면 다음 파일로 이동한다.

➡️ [B1-1 Level 0 — Prerequisite](./b1-1-10-level-0-prerequisite.md)
