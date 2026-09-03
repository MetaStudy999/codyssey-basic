# Beginner Documentation Audit — 입문자 문서 품질 감사

이 문서는 Codyssey Basic의 **15개 Mission/Term Project 입문자 가이드가 실제 수행 경로로 연결되어 있고, 현재 상태·환경·공식 요구와 모순 없이 입문자가 따라갈 수 있는지 관리하는 감사표**입니다.

> 이 문서는 코디세이 공식 Mission/Evaluation을 대체하지 않습니다. `BEGINNER READY`는 내부 문서 품질 상태이며 공식 Mission `CLEAR`와 별개입니다.
>
> 현재 Mission ID(미션 번호)의 단일 기준은 [`../CURRENT-MISSION-MAP.md`](../CURRENT-MISSION-MAP.md)입니다. 2026-08-19에 작성된 개별 감사 기록은 당시 Mission ID를 역사적 식별자로 보존하되, 현재 ID와 함께 표기합니다.

## 1. 감사 목표

메인 Control Tower에서 각 미션을 선택한 뒤 다른 검색 없이 다음 흐름으로 이동할 수 있어야 합니다.

```text
메인 README의 미션 지도
→ 저장소(Repository)
→ 입문자 따라하기(BEGINNER-GUIDE.md)
→ 전체 중앙 허브(Global Hub)
→ 모듈 목차(Module Table of Contents, Module TOC)
→ 세부 학습 문서(Learning Unit)
→ 현재 실행 환경(Current Runtime Context) 선택
→ 빠른 시작(Quick Start) 또는 상세 시작 경로
→ 실제 수행(Runtime)
→ 검증(Verification)
→ 증빙(Evidence)
→ 플랫폼별 Runtime Record
→ 완료(CLEAR)
```

각 `BEGINNER-GUIDE.md`는 최소한 다음을 충족해야 합니다.

```text
현재 상태/환경 정합성
+ 공식 요구사항 연결
+ 쉬운 한글 설명
+ 한글 + 영어 원어
+ 영어 원어의 명사/동사 품사 정합성
+ 긴 문서이면 클릭 가능한 목차
+ 모듈화 Trigger에 해당하면 전체 허브 + 모듈 README 지역 목차 + 세부 학습 문서의 3계층 구조
+ 모듈 내부 세분화 Trigger 판정
+ 실행형 문서이면 안전한 빠른 시작(Quick Start) 또는 동등한 빠른 진입 경로
+ 실제 따라하기
+ 실행 위치(Execution Context) / 실행 전 점검(Preflight)
+ 현재 Runtime Profile(MAC-V / WIN-V) 식별
+ 실행 가능한 Shell 명령 각 줄 해설
+ 의미 있는 코드/SQL/설정 줄 해설
+ 중요한 옵션·인자·입력값 설명
+ 복사·붙여넣기 안전(Copy/Paste Safety)
+ 정상 결과와 달라도 정상인 값 구분
+ 재실행 안전성(Rerun Safety)
+ STOP / GO
+ 필요한 중간 저장점(Checkpoint) / 복구(Recovery)
+ 환경/Tool 설치가 있으면 필수·선택·권한·설치위치·검증(Verification) 설명
+ 공용/관리형 Mac이면 관리자 권한 없는 대안(no-admin)과 Reset 대응 설명
+ Windows 11 Persistent 환경이면 불필요한 재설치 방지 설명
+ Cloud/API/AI면 비용·자원·정리(Cleanup) 설명
+ 오류 복구
+ 완료 확인
+ 평가/증빙 연결
```

## 2. 현재 15개 가이드 존재 및 연결 상태

2026-08-19 기준으로 각 Mission Repository의 `training/round-01-clear/BEGINNER-GUIDE.md` 존재를 확인했습니다. 2026-09-04에는 미션 주제를 유지한 채 현재 Mission ID로 재매핑했습니다. 메인 README에서는 각 미션의 `시작` 행에서 Repository와 Beginner Guide로 직접 이동하도록 관리합니다.

| 실행 순번 | 현재 미션 | 구분 | Beginner Guide | 문서 내용 감사 | 우선순위/현재 상태 |
|---:|---|---|---|---|---|
| 1 | B4-1 | 필수 | ✅ 존재 / 메인 직접 연결 | ✅ **3계층 구조 APPLIED & VERIFIED / Runtime 진입을 잘못 이끄는 blocker 수준 Documentation Drift 없음. 전체 용어·줄별 해설 polishing은 JIT 감사로 지속** | ⏸ PAUSED / READY TO RESUME |
| 2 | B4-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 3 | B2-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 4 | B2-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | **P0 — CURRENT ACTIVE** |
| 5 | B5-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 6 | B5-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 7 | B1-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 8 | B6-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 9 | B3-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 10 | B3-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 11 | B7-1 | 필수 Term Project | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P1 |
| 12 | B1-2 | 선택 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P2 |
| 13 | B6-2 | 선택 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P2 |
| 14 | B6-3 | 선택 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P2 |
| 15 | B7-2 | 선택 Term Project | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·용어·줄별 해설·실행안전·3계층 구조 감사 필요 | P2 |

### 이전 B1-1 → 현재 B4-1 시스템 관제 실제 적용 확인 — 2026-08-19

이 절은 2026-08-19 당시 **B1-1**로 관리되던 시스템 관제 미션의 감사 기록입니다. 현재 Mission ID는 **B4-1**이며 Canonical Repository는 `codyssey-basic-system-monitor`입니다. 당시 감사 사실과 실제 적용 이력은 보존하고, 현재 운영 상태는 `PROGRESS.md`와 `CURRENT-MISSION-MAP.md`를 따릅니다.

당시 B1-1(현재 B4-1)은 기준만 추가한 상태가 아니라 실제 `BEGINNER-GUIDE.md`, 모듈 목차, 세부 학습 문서를 수정하고 GitHub `main`에서 재확인했습니다.

```text
APPLIED & VERIFIED — 당시 B1-1 / 현재 B4-1 시스템 관제
- 안전한 Quick Start 추가
- 전체 중앙 허브에서 모듈 README로 직접 이동
- 00~08 모듈별 README 지역 목차(Local TOC) 생성
- 연관 개념과 STEP을 모듈별로 분류
- STEP 01~15를 실행형 모듈 내부 Learning Unit으로 물리 분리
- 기존 평면 상세 문서는 상세 본문을 중복하지 않는 호환 경로(Compatibility Path)로 축소
- 모듈 README → Learning Unit 직접 링크 재검증
- Learning Unit → 모듈 README / 이전·다음 학습 단위 이동 경로 재검증
- Phase A 표현을 현재 Phase C / FAST EXECUTE 흐름으로 교정
- MAC-V와 WIN-V를 동등한 지원 실행 환경(Supported Runtime)으로 정의
- Current Runtime Context를 작업 시작 시 사용자가 지정하도록 교정
- MAC-V는 Resettable / CHECK BEFORE INSTALL로 정의
- WIN-V는 Persistent / VERIFY BEFORE REINSTALL로 정의
- 플랫폼별 Runtime Record와 Mission CLEAR를 분리
- 두 환경 실제 PASS 시 CROSS-PLATFORM VERIFIED를 별도 내부 품질 상태로 정의
- Docker를 선택 Lab으로 구분
- 공통 Bootstrap과 시스템 관제 Mission package 계층 구분
- Quick Start에서 SSH/UFW 변경을 하지 않도록 제한
- SSH 변경은 backup → 20022 사전 허용 → sshd 문법/최종 설정 검증 → reload → 실제 새 세션 → 기존 경로 정리 순서로 고정
- UFW 변경은 체크포인트 → 20022/15034 선허용 → 기본 정책 → 활성화/재적용 → 실제 20022 유지 → 불필요 ALLOW IN 개별 정리 순서로 고정
- Secret은 값이 아니라 존재·소유권·권한 등 메타데이터만 검증하도록 제한
- Verification / Evidence / Evaluation / CLEAR 상태를 서로 분리
```

이 2026-08-19 감사 대상의 **3계층 정보 구조(Information Architecture, IA) 마이그레이션은 완료**되었습니다. 중앙 허브 → 00~08 모듈 README → 실행형 세부 학습 문서가 연결되며, STEP 01~15의 주 학습 경로는 새 Learning Unit입니다. 기존 평면 파일은 오래된 링크가 즉시 깨지지 않게 하는 호환 안내만 유지합니다.

또한 당시 실제 Runtime 진입 직전 blocker 수준 감사에서 **시스템 관제 미션 실행을 잘못 이끌 수 있는 상태/환경/경로/SSH·UFW 안전/Secret/Verification·Evidence 판정 Drift는 발견되지 않았습니다.** 따라서 공통 환경 마무리(Common Environment Closeout)의 Gate 1은 당시 blocker 기준으로 PASS할 수 있었습니다.

단, **Gate 1 blocker PASS가 현재 B4-1 전체 `BEGINNER READY`, 플랫폼별 Runtime PASS 또는 Mission `CLEAR`를 뜻하지는 않습니다.** 한국어 중심 용어와 영어 원어의 세부 품사, 모든 비위험 설명 줄의 표현 일관성, 추가적인 가독성 polishing은 실제 실행 중 JIT 감사 대상으로 계속 관리합니다. 실제 Runtime/Verification/Evidence가 없으면 플랫폼 PASS와 Mission CLEAR도 아닙니다.

2026-08-19 당시 Runtime 기록은 다음과 같았습니다.

```text
MAC-V = NOT RUN
WIN-V = NOT RUN
CROSS-PLATFORM = NOT VERIFIED
Mission = ACTIVE / NOT CLEAR
```

현재 운영 상태는 별도로 관리합니다.

```text
B4-1 시스템 관제 = ⏸ PAUSED / READY TO RESUME
B2-2 Git 협업     = 🟡 ACTIVE
Runtime CLEAR     = 0 / 15
```

## 3. 알려진 Documentation Drift 유형

기존 가이드에는 다음과 같은 과거 상태 표현 또는 설명 부족이 남아 있을 수 있습니다.

```text
Phase A — REFERENCE BUILD
과거 Runtime 상태
과거 Ubuntu 버전 또는 과거 Golden Path
현재 Control Tower와 다른 Active/Not Started 표현
MAC-V를 CLEAR 우선 Primary, WIN-V를 단순 Secondary로 표현하는 과거 정책
Current Runtime Context 없이 Host별 명령을 섞어 안내
학교 Mac Reset 가능성을 무시하고 기존 설치를 현재 상태로 가정
WIN-V Persistent 환경에서 정상 상태인데도 매번 재설치하도록 안내
"최종 Verify"처럼 한국어 문장에 핵심 영어 용어만 단독 삽입
"검증(Verify)"처럼 명사 문맥에 영어 동사형을 병기
첫 등장 핵심 용어의 한글(English Original) 병기 누락
긴 문서인데 클릭 가능한 목차가 없음
모듈화 Trigger에 해당하지만 전체 허브 → 모듈 README → 세부 학습 문서 구조가 없음
모듈 README가 파일 이름만 나열하고 연관 개념·STEP을 분류하지 않음
모듈 내부 세분화 Trigger에 해당하는 상세 문서가 계속 비대함
실행형 문서인데 Quick Start 또는 빠른 진입 경로가 없음
Quick Start가 상세 Preflight/STOP-GO를 우회함
여러 줄의 실행 명령을 제시하고 일부 명령만 설명
중요한 옵션/인자 설명 누락
의미 있는 코드/SQL/설정 줄의 역할 설명 누락
실행 위치를 표시하지 않아 Host와 Ubuntu를 혼동할 수 있음
Preflight 없이 바로 변경 명령을 실행함
실패했는데도 다음 Step으로 진행할 수 있게 되어 있음
재실행 위험 명령의 반복 실행 영향 설명 누락
예상 출력의 변동 가능 값을 실패로 오판할 수 있음
Checkpoint/Recovery 없이 SSH/UFW/Cloud/DB를 변경함
개발도구를 설치하라고만 하고 필수/선택/권한/설치 위치/검증을 설명하지 않음
공용 Mac에서 관리자 권한을 전제하고 no-admin 대안을 제공하지 않음
Cloud/API/AI 비용 가능성이나 Cleanup 절차가 없음
```

따라서 단순히 `BEGINNER-GUIDE.md`가 존재한다는 이유만으로 `BEGINNER READY`로 판정하지 않습니다.

현재 상태는 다음 우선순위로 판단합니다.

```text
공식 Mission / Evaluation
→ 현재 Repository 실제 상태
→ Control Tower 현재 상태
→ 상위 작업 운영 표준
→ 환경/문서 표준
→ Beginner Guide
```

## 4. 미션별 감사 체크리스트

각 미션을 실제 Runtime으로 시작하기 전에 아래 12항목을 확인합니다.

| # | 감사 항목 | PASS 기준 |
|---:|---|---|
| 1 | 상태/환경 정합성 | Current Runtime Context, Runtime Profile, OS/경로와 모순 없음 |
| 2 | 공식 Source | Mission/Evaluation/제공 파일과 연결됨 |
| 3 | 한글+영어 용어 | 핵심 용어 첫 등장 병기, 한국어 중심 문장, 영어 원어 품사 일치 |
| 4 | 쉬운 설명 | 입문자가 한 문장으로 의미를 파악 가능 |
| 5 | 구조/탐색 | 복잡한 흐름은 도식이 있고, 긴 문서는 클릭 가능한 목차가 있으며, 모듈화 Trigger 해당 시 **전체 허브 → 모듈 `README.md` 지역 목차 → 세부 학습 문서** 3계층과 양방향 이동이 있고, 실행형 문서는 Quick Start/빠른 진입 경로가 적합함 |
| 6 | 최소 예제 | 본 실습 전에 필요한 작은 예가 있으면 제공 |
| 7 | 실제 따라하기 | 실행 위치/Preflight가 명확하고 명령·코드·UI 경로가 구체적이며 실행 가능 |
| 8 | 명령·코드 줄별 해설 | 실행 가능한 Shell 명령은 각 줄의 목적을 설명하고, 중요한 옵션·인자·입력값과 의미 있는 Python/JavaScript/SQL/설정 줄을 입문자가 자기 말로 설명할 수 있음 |
| 9 | 정상 결과 | 성공 조건과 환경에 따라 달라도 정상인 값을 구분할 수 있음 |
| 10 | 오류 복구 | 증상→원인→확인→수정→재검증 및 필요한 Recovery 경로 제공 |
| 11 | 완료 확인 | STOP/GO, Rerun Safety, Checkpoint를 필요한 Step에서 판정 가능 |
| 12 | 평가/증빙 연결 | Requirement→Verification→Evidence 관계가 보이고 Runtime Profile/Commit을 추적하며 비용 자원은 Cleanup까지 연결 |

### 4.0 긴 입문자 가이드 모듈화 판정

상세 기준은 [BEGINNER-GUIDE-MODULARIZATION-STANDARD.md](BEGINNER-GUIDE-MODULARIZATION-STANDARD.md)를 따릅니다.

```text
[ ] STEP 수 / 파일 크기 / 줄 수 / 기술 관심사 복잡도를 확인했다.
[ ] Trigger에 해당하면 BEGINNER-GUIDE.md는 전체 중앙 허브 역할만 한다.
[ ] 각 모듈 디렉터리에 README.md 지역 목차(Local TOC)가 있다.
[ ] 모듈 README가 연관된 개념·STEP을 학습 흐름 순서로 분류한다.
[ ] 실행형 모듈은 최소 1개 이상의 세부 학습 문서(Learning Unit)로 연결된다.
[ ] 단일 상세 문서의 50KB / 700줄 / 독립 STEP 3개 / 분리 기술 개념 / 탐색 곤란 여부를 확인했다.
[ ] 허브 → 모듈 README → 세부 학습 문서 이동 경로가 있다.
[ ] 모듈 README → 허브/이전/다음 모듈 이동 경로가 있다.
[ ] 세부 학습 문서 → 모듈 README/이전/다음 학습 단위 이동 경로가 있다.
[ ] 분할 전 STEP/공식 요구/명령/Recovery/Evidence 연결이 누락되지 않았다.
[ ] 기존 평면 문서를 단계적으로 마이그레이션 중이면 완료 상태와 혼동하지 않는다.
```

Trigger에 해당하면서 단일 대형 가이드가 유지되거나, 모듈 README 지역 목차가 없거나, 세부 학습 문서 연결이 끊기면 `BEGINNER READY = FAIL`입니다.

### 4.1 한글·영어 용어 세부 판정

상세 기준은 [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md)를 따릅니다.

```text
[ ] 제목과 한국어 설명 문장에서 핵심 개념이 영어 단독으로 튀어나오지 않는다.
[ ] 핵심 용어 첫 등장은 한글 의미(English Original) 형식이다.
[ ] 명사 개념은 영어 명사형, 동작은 영어 동사형으로 문맥에 맞게 병기한다.
[ ] "개발환경 최종 Verify"가 아니라 "개발환경 최종 검증(Verification)"처럼 쓴다.
[ ] "검증(Verify) 단계"가 아니라 "검증(Verification) 단계"처럼 쓴다.
[ ] `verify.sh`, `git status` 같은 실제 파일명·명령어는 원문 그대로 둔다.
[ ] 실제 UI 영문 문자열은 보존하되 한국어 설명을 붙인다.
[ ] 같은 문서에서 첫 병기 후에는 불필요한 영어 반복보다 한국어를 우선한다.
```

### 4.2 줄별 해설 세부 판정

다음은 `#8 명령·코드 줄별 해설`의 세부 기준입니다.

```text
[ ] 학습자가 직접 실행하는 Shell 명령은 각 실행 줄의 목적이 설명되어 있다.
[ ] 처음 등장하거나 중요한 옵션/인자의 의미가 설명되어 있다.
[ ] pipe, redirection, &&, ||, loop 같은 복합 Shell 구문은 주요 기호의 의미가 설명되어 있다.
[ ] 의미 있는 Python/JavaScript 코드 줄은 변수·입력·출력·조건·반복·I/O·예외 흐름을 이해할 수 있다.
[ ] SQL은 주요 절과 조회/추가/수정/삭제되는 데이터가 설명되어 있다.
[ ] Nginx/systemd/YAML/JSON 등 설정 파일은 핵심 directive/key의 역할이 설명되어 있다.
[ ] 빈 줄·단순 닫는 괄호·단순 종료 태그처럼 독립 의미가 없는 줄은 논리 단위로 묶어 설명할 수 있다.
[ ] 먼저 깨끗한 실행본을 제공하고 바로 아래에 줄별 해설을 두어 복사·실행 가능성을 해치지 않는다.
[ ] 위험 명령과 Secret 관련 명령은 안전 범위와 비노출 원칙을 함께 설명한다.
```

상세 기준은 [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md)를 따릅니다.

### 4.3 개발환경·개발 Tool Setup 세부 판정

미션 가이드나 환경 문서에서 도구 설치/설정을 요구하면 다음도 확인합니다.

```text
[ ] 이 도구가 무엇인지 한 문장으로 설명한다.
[ ] 왜 현재 미션에 필요한지 설명한다.
[ ] 필수 / 권장 / 선택 여부를 표시한다.
[ ] 관리자 권한이 필요한지 여부를 설명한다.
[ ] Host에 설치하는지 Ubuntu Runtime에 설치하는지 구분한다.
[ ] 현재 Runtime Context가 MAC-V 또는 WIN-V인지 구분한다.
[ ] MAC-V는 Resettable 특성을 고려해 Check Before Install을 사용한다.
[ ] WIN-V는 Persistent 특성을 고려해 Verify Before Reinstall을 사용한다.
[ ] 설치 위치 또는 Repository-local 위치를 설명한다.
[ ] 설치 명령의 각 실행 줄과 중요한 옵션을 설명한다.
[ ] 설치 후 command/version/서비스 등으로 정상 여부를 검증한다.
[ ] 설치 실패 시 최소 복구 경로를 제공한다.
[ ] 공용·관리형 Mac이면 sudo/MDM 우회 없이 가능한 사용자 영역/Remote/CLI 대안을 제공한다.
[ ] 대체 IDE를 써도 Repository/Terminal/Git/Python Runtime 계약이 유지된다.
[ ] Google Antigravity를 쓰는 경우 IDE와 CLI 역할을 구분하고, CLI의 사용자 영역 설치 경로를 설명한다.
```

상세 기준은 [DEVELOPMENT-TOOLSET-STANDARD.md](DEVELOPMENT-TOOLSET-STANDARD.md)와 [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md)를 따릅니다.

### 4.4 실행 안전 7원칙 세부 판정

핵심 실행 Step에는 필요한 범위에서 다음을 확인합니다.

```text
[ ] 실행 위치(Context): Runtime Profile/Host/Terminal/Repository/Branch/Commit/권한/venv를 혼동하지 않는다.
[ ] 실행 전 점검(Preflight): 실행 전에 PWD, command, Git 상태, 권한 등 필요한 선행 조건을 확인한다.
[ ] STOP / GO: 필수 조건 또는 검증이 실패하면 다음 Step으로 진행하지 않는다.
[ ] 재실행 안전성(Rerun Safety): 상태를 바꾸는 명령은 반복 실행 영향을 판단할 수 있다.
[ ] 복사·붙여넣기(Copy & Paste): 실행 블록에 prompt/설명/예상 출력이 섞이지 않고 Placeholder가 명확하다.
[ ] 출력 변동(Output Variation): 정확히 같아야 하는 조건과 사용자명/PID/시간/버전 등 달라도 정상인 값을 구분한다.
[ ] 중간 저장점(Checkpoint) / 복구(Recovery): 위험하거나 긴 변경은 되돌아갈 상태를 확보하고 실패 시 복구 경로가 있다.
```

Cloud/API/AI Provider가 포함되면 추가로 확인합니다.

```text
[ ] Account / Project / Region을 확인한다.
[ ] 비용/무료 한도 또는 유료 API 사용 가능성을 확인한다.
[ ] 생성할 Resource 수를 확인한다.
[ ] Cleanup/Stop/Delete 절차를 실행 전에 알 수 있다.
[ ] 실습 종료 후 실제 자원 삭제/중지 여부를 확인한다.
```

### 4.5 목차·Quick Start 세부 판정

상세 기준은 [DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md)를 따릅니다.

```text
[ ] 문서가 길거나 여러 섹션이면 클릭 가능한 목차가 있다.
[ ] 목차 링크가 현재 본문의 실제 위치로 이동한다.
[ ] 실행형 문서에는 안전한 Quick Start 또는 동등한 빠른 진입 경로가 있다.
[ ] Quick Start는 이미 준비된 학습자용인지, 처음 시작하는 학습자용인지 구분한다.
[ ] 처음 시작하는 사람은 상세 Step으로 바로 이동할 수 있다.
[ ] Quick Start의 실행 위치와 정상 기준이 명확하다.
[ ] Quick Start 실패 시 STOP하고 상세 복구 위치로 이동한다.
[ ] Quick Start가 Rerun Safety, Secret, 비용 보호를 우회하지 않는다.
[ ] Standard/Glossary/짧은 Reference에는 형식만을 위해 Quick Start 명령을 강제하지 않는다.
[ ] 기준만 작성한 것이 아니라 실제 대상 문서를 다시 열어 적용 여부를 확인했다.
```

## 5. 운영 우선순위

15개 가이드를 표준 변경만을 이유로 한꺼번에 기계적으로 다시 쓰지 않습니다.

```text
P0 현재 Active Mission = B2-2
→ Runtime을 막거나 오판정을 만드는 문서 오류 즉시 수정
→ Current Runtime Context / Supported Runtime 정합성 확인
→ 목차/Quick Start를 실제 문서 역할에 맞게 적용
→ 모듈화 Trigger 및 3계층 구조 판정
→ 모듈 README 지역 목차와 Learning Unit 연결 확인
→ 한글·영어 용어와 영어 품사를 실제 문장 문맥에 맞게 적용
→ 적용 후 실제 대상 문서를 다시 열어 확인
→ 명령·코드 줄별 해설도 실제 실행 직전 기준에 맞춤
→ 실행 위치/Preflight/STOP-GO/Rerun Safety를 실제 흐름에 적용
→ 필요한 개발 Tool Setup도 권한/설치위치/검증까지 확인

P1 다음 필수 미션
→ 해당 미션 진입 직전 Beginner Documentation Audit
→ 필요한 부분만 교정

P2 선택 미션
→ Stage 2 진입 전에 순차 감사
```

> `P0 현재 Active Mission` 값은 고정된 표준이 아니라 현재 운영 상태입니다. 향후 Workcell이 바뀌면 `PROGRESS.md`를 기준으로 갱신합니다.

즉, **모든 가이드의 존재와 진입 링크는 확보하되, 내용 감사·교정은 실제 실행 순서에 맞춰 깊게 수행**합니다.

## 6. BEGINNER READY 판정

다음 조건을 충족해야 해당 미션의 대표 입문자 경로를 `BEGINNER READY`로 볼 수 있습니다.

```text
메인 README에서 한 번에 찾을 수 있음
+ 긴 문서이면 클릭 가능한 목차가 있음
+ 모듈화 Trigger 해당 시 전체 허브 → 모듈 README 지역 목차 → 세부 학습 문서 3계층 구조가 완성됨
+ 모듈 내부 세분화 Trigger가 판정됨
+ 실행형 문서이면 안전한 Quick Start/빠른 진입 경로가 있음
+ Beginner Guide가 실제 수행 순서를 제공함
+ 현재 상태/환경과 모순 없음
+ MAC-V/WIN-V를 Primary/Secondary 합격 등급으로 오해하게 하지 않음
+ Current Runtime Context를 작업 시작 시 식별할 수 있음
+ 플랫폼별 Runtime Record와 Mission CLEAR를 구분함
+ 핵심 용어가 한국어 중심으로 설명되고 영어 원어의 품사가 맞음
+ 필요한 개발도구의 설치 위치/권한/검증 방법을 이해할 수 있음
+ 실행 위치와 Preflight를 스스로 확인할 수 있음
+ 실행 명령과 의미 있는 코드 줄을 자기 말로 설명할 수 있음
+ 실패 시 STOP하고 최소 복구 후 재검증할 수 있음
+ 위험 명령의 재실행 가능 여부를 판단할 수 있음
+ 예상 출력의 변동 가능 값을 실패로 오판하지 않음
+ 필요한 Checkpoint/Recovery가 있음
+ Cloud/API/AI면 비용과 Cleanup 경로를 알 수 있음
+ 외부 비공식 검색 없이 핵심 경로 수행 가능
+ 평가/증빙까지 연결됨
+ 기준 적용 후 실제 대상 파일을 다시 확인함
```

`BEGINNER READY`가 되더라도 실제 Runtime/Evidence가 없다면 플랫폼 Runtime PASS나 Mission `CLEAR`가 아닙니다.

## 7. 관련 기준

- [CODYSSEY-WORKING-OPERATING-STANDARD.md](CODYSSEY-WORKING-OPERATING-STANDARD.md) — 전체 작업 운영 표준
- [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md) — 입문자 훈련·문서 생성 표준
- [BEGINNER-GUIDE-MODULARIZATION-STANDARD.md](BEGINNER-GUIDE-MODULARIZATION-STANDARD.md) — 전체 허브 / 모듈 목차 / 세부 학습 문서 3계층 표준
- [DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md) — 목차 / Quick Start / 빠른 진입 기준
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령어·코드 한 줄 해설 표준
- [DEVELOPMENT-TOOLSET-STANDARD.md](DEVELOPMENT-TOOLSET-STANDARD.md) — 개발 Tool Set / no-admin 기준
- [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md) — 환경 표준
- [README-INFORMATION-ARCHITECTURE-STANDARD.md](README-INFORMATION-ARCHITECTURE-STANDARD.md) — README 정보 구조와 직접 진입 기준
- [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md) — 한글·영어 용어 및 영어 품사 표기 기준
- [CANONICAL-REFERENCE-STANDARD.md](CANONICAL-REFERENCE-STANDARD.md) — Requirement/Reference/Verification/Evidence 기준
- [`../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md`](../training/round-01-clear/RUNTIME-EXECUTION-MATRIX.md) — MAC-V/WIN-V 실제 수행 상태
