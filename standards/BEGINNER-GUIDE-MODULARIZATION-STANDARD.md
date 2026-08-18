# 입문자 가이드 모듈화 표준(Beginner Guide Modularization Standard)

Codyssey Basic의 긴 입문자 가이드(Beginner Guide)는 **한 파일에 모든 실행 단계와 설명을 계속 누적하지 않고, 중앙 허브(Hub) + 학습 모듈(Module)** 구조로 분리합니다.

> 이 표준은 코디세이 공식 미션(Mission), 평가(Evaluation), 제공 파일을 변경하지 않습니다. 공식 요구사항이 항상 우선하며, 이 표준은 입문자가 길을 잃지 않고 단계별로 이해·실행·검증할 수 있도록 문서 구조만 관리합니다.

## 1. 필수 적용 원칙

모든 Mission/Term Project의 `training/round-01-clear/BEGINNER-GUIDE.md`는 아래 **모듈화 판정(Trigger)**을 확인해야 합니다.

다음 중 하나라도 해당하면 **모듈화는 필수(MUST)**입니다.

```text
[ ] 실행 STEP이 8개 이상이다.
[ ] BEGINNER-GUIDE.md가 100KB 이상이다.
[ ] BEGINNER-GUIDE.md가 1,000줄 이상이다.
[ ] 한 파일 안에서 서로 다른 기술 관심사(예: SSH/UFW, DB/API, AI/Cloud, Git/협업)가 여러 묶음으로 나뉜다.
[ ] 입문자가 목차를 사용해도 현재 위치·이전/다음 행동을 자주 잃을 정도로 길거나 복잡하다.
```

판정 결과 하나라도 해당하면 단순히 클릭 목차만 추가하는 것으로 완료하지 않습니다.

```text
BEGINNER-GUIDE.md = 중앙 허브(Hub)
+
guide/*.md         = 상세 학습·실행 모듈(Module)
```

이 구조를 갖추지 않으면 해당 미션은 내부 문서 품질 상태인 `BEGINNER READY`로 판정하지 않습니다.

## 2. 기본 디렉터리 구조

권장 기본형:

```text
training/round-01-clear/
├── BEGINNER-GUIDE.md
├── guide/
│   ├── 00-OVERVIEW.md
│   ├── 01-<TOPIC>.md
│   ├── 02-<TOPIC>.md
│   ├── ...
│   └── NN-FINAL-CLEAR.md
├── CHECKLIST.md
├── environment/
├── docs/
└── evidence/
```

`BEGINNER-GUIDE.md`에는 전체 상세 명령을 다시 복제하지 않습니다. 상세 내용의 단일 기준은 해당 `guide/*.md` 모듈입니다.

## 3. 중앙 허브(BEGINNER-GUIDE.md) 필수 요소

중앙 허브는 **전체 지도와 진입점** 역할만 합니다.

```text
문서 제목
→ 한 문장 목적
→ 현재 상태/실행 환경(Runtime)
→ 선행 조건
→ 안전한 빠른 시작(Quick Start)
→ 학습 모듈 지도
→ STEP 진행 범위
→ Primary / Secondary 실행 환경 구분
→ 공식 기준(Source of Truth) 링크
→ CHECKLIST / Evidence / Evaluation 링크
```

허브에서 상세 명령과 긴 줄별 해설을 반복하지 않습니다.

## 4. 모듈(Module) 분리 기준

모듈은 단순히 STEP 번호만으로 기계적으로 하나씩 쪼개지 않습니다.

서로 강하게 연결된 기술 흐름을 한 모듈로 묶습니다.

예:

```text
실행 전 점검 + 기준 상태(Baseline)
SSH + 방화벽(Firewall)
사용자 + 그룹 + 접근 제어 목록(Access Control List, ACL)
Agent 준비 + 실제 실행(Runtime)
모니터링 + 로그 + cron
검증(Verification) + 증빙 자료(Evidence)
최종 완료(CLEAR)
```

기본 권장 크기:

```text
한 모듈 = 관련 STEP 1~4개
```

다만 기술적으로 하나의 흐름인 경우 4개를 넘을 수 있고, 위험 작업이 독립적으로 길면 STEP 하나만 별도 모듈로 둘 수 있습니다.

## 5. 각 모듈의 필수 구조

각 `guide/*.md`는 다음을 갖습니다.

```text
모듈 제목
→ 허브로 돌아가기
→ 현재 모듈의 목적
→ 모듈 목차(여러 STEP일 때)
→ 상세 STEP
→ 실행 위치(Context)
→ 실행 전 점검(Preflight)
→ 명령/코드 해설
→ 정상 기준
→ STOP / GO
→ 재실행 안전성(Rerun Safety)
→ 필요한 중간 저장점(Checkpoint) / 복구(Recovery)
→ 완료 확인
→ 이전 모듈 ← / → 다음 모듈
```

Cloud/API/AI 비용이 있으면 비용·자원 보호와 정리(Cleanup)까지 포함합니다.

## 6. 파일 이름 규칙

파일 이름은 진행 순서를 정렬할 수 있도록 두 자리 번호를 앞에 둡니다.

```text
00-OVERVIEW.md
01-PREFLIGHT-AND-BASELINE.md
02-SSH-AND-FIREWALL.md
03-USERS-GROUPS-ACL.md
04-AGENT-RUNTIME.md
05-MONITOR-AND-CRON.md
06-VERIFICATION-AND-EVIDENCE.md
07-FINAL-CLEAR.md
```

미션 성격에 따라 `<TOPIC>`은 변경할 수 있지만 번호 순서와 역할은 명확해야 합니다.

## 7. 내용 보존(Content Integrity) — 필수

기존 긴 가이드를 분할할 때는 **내용 삭제가 아니라 구조 리팩터링(Refactoring)**으로 수행합니다.

```text
기존 본문
→ 모듈 경계 결정
→ 원문을 해당 모듈로 이동
→ 허브에서 모듈 링크 연결
→ 누락/중복 검사
→ 실제 링크 검증
```

필수 확인:

```text
[ ] 공식 요구사항이 사라지지 않았다.
[ ] STEP이 누락되지 않았다.
[ ] 명령·코드가 임의로 축약되지 않았다.
[ ] STOP/GO·복구·재실행 안전성이 유지된다.
[ ] Secret 값은 새 문서에도 노출되지 않는다.
[ ] 기존 실제 Runtime/Evidence/CLEAR 상태를 문서 이동만으로 변경하지 않는다.
```

기존 단일 파일의 백업 스냅샷은 마이그레이션 중 임시로 둘 수 있으나 **학습자의 주 진입 문서로 계속 사용하지 않습니다.**

## 8. 탐색(Navigation) 계약

허브와 모듈은 양방향으로 연결합니다.

```text
BEGINNER-GUIDE.md
→ 00 → 01 → 02 → ... → FINAL

각 Module
→ 허브
→ 이전 Module
→ 다음 Module
```

여러 STEP이 있는 모듈은 클릭 가능한 내부 목차를 둡니다.

## 9. 용어 표기

모듈화 후에도 [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)를 그대로 적용합니다.

첫 등장 핵심 용어의 기본형:

```text
한글 의미(English Full Name, ABBR)
```

약어를 일반적으로 사용하지 않는 용어는:

```text
검증(Verification)
실행 환경(Runtime)
증빙 자료(Evidence)
```

처럼 씁니다.

## 10. BEGINNER READY 강제 판정

다음 중 하나라도 해당하면 `BEGINNER READY = FAIL`입니다.

```text
모듈화 Trigger에 해당하지만 한 파일에 상세 STEP 전체가 남아 있음
허브에서 모듈로 이동할 수 없음
모듈의 이전/다음 이동 경로가 없음
분할 과정에서 STEP/요구사항/복구 내용이 누락됨
허브와 상세 모듈에 서로 다른 명령이 중복되어 기준이 갈림
```

새로 만드는 미션 가이드와 크게 수정하는 가이드는 커밋 전에 이 기준을 적용합니다.

기존 15개 미션은 다음 순서로 적용합니다.

```text
현재 미션(Active Mission)
→ 다음 필수 미션(Required Mission)
→ 나머지 필수 미션
→ 선택 미션(Optional Mission)
```

각 미션은 **실제 Runtime 진입 전에 모듈화 Trigger를 판정하고 필요한 경우 분할을 완료**합니다.

## 11. 정책(POLICY) → 적용(APPLY) → 검증(VERIFY)

```text
POLICY
메인 standards/에서 기준 정의
        ↓
APPLY
각 Mission Repository의 BEGINNER-GUIDE.md / guide/ 반영
        ↓
VERIFY
실제 GitHub main을 다시 열어 링크·누락·중복 확인
```

`반영 완료`는 원칙적으로 `APPLIED & VERIFIED` 상태에서만 사용합니다.

## 12. B1-1 기준 예시

B1-1은 다음 구성을 기준 예시(Reference Pattern)로 사용합니다.

```text
BEGINNER-GUIDE.md                 = 중앙 허브

guide/00-OVERVIEW.md             = 미션 개요 / 공식 기준 / 전체 흐름
guide/01-PREFLIGHT-AND-BASELINE.md = STEP 01~02
guide/02-SSH-AND-FIREWALL.md      = STEP 03~04
guide/03-USERS-GROUPS-ACL.md      = STEP 05
guide/04-AGENT-RUNTIME.md         = STEP 06~07
guide/05-MONITOR-AND-LOG-ROTATION.md = STEP 08~09
guide/06-CRON-FAILURE-WARNING.md  = STEP 10~11
guide/07-VERIFICATION-AND-EVIDENCE.md = STEP 12~14
guide/08-FINAL-CLEAR.md           = STEP 15 + 최종 상태 판정
```

다른 미션은 기술 흐름에 맞춰 모듈 이름과 묶음을 조정하되, **허브 + 모듈 + 양방향 탐색 + 내용 보존 + BEGINNER READY 강제 판정** 원칙은 반드시 지킵니다.

## 13. 관련 기준

- [DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md)
- [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md)
- [BEGINNER-DOCUMENTATION-AUDIT.md](BEGINNER-DOCUMENTATION-AUDIT.md)
- [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md)
