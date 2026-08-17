# Beginner Documentation Audit — 입문자 문서 품질 감사

이 문서는 Codyssey Basic의 **15개 Mission/Term Project 입문자 가이드가 실제 수행 경로로 연결되어 있고, 현재 상태·환경·공식 요구와 모순 없이 입문자가 따라갈 수 있는지 관리하는 감사표**입니다.

> 이 문서는 코디세이 공식 Mission/Evaluation을 대체하지 않습니다. `BEGINNER READY`는 내부 문서 품질 상태이며 공식 Mission `CLEAR`와 별개입니다.

## 1. 감사 목표

메인 Control Tower에서 각 미션을 선택한 뒤 다른 검색 없이 다음 흐름으로 이동할 수 있어야 합니다.

```text
메인 README의 미션 지도
→ 저장소(Repository)
→ 입문자 따라하기(BEGINNER-GUIDE.md)
→ Quick Start 또는 상세 시작 경로
→ 실제 수행(Runtime)
→ 검증(Verify)
→ 증빙(Evidence)
→ 완료(CLEAR)
```

각 `BEGINNER-GUIDE.md`는 최소한 다음을 충족해야 합니다.

```text
현재 상태/환경 정합성
+ 공식 요구사항 연결
+ 쉬운 한글 설명
+ 한글 + 영어 원어
+ 긴 문서이면 클릭 가능한 목차
+ 실행형 문서이면 안전한 Quick Start 또는 동등한 빠른 진입 경로
+ 실제 따라하기
+ 실행 위치/Preflight
+ 실행 가능한 Shell 명령 각 줄 해설
+ 의미 있는 코드/SQL/설정 줄 해설
+ 중요한 옵션·인자·입력값 설명
+ Copy/Paste 안전
+ 정상 결과와 달라도 정상인 값 구분
+ Rerun Safety
+ STOP / GO
+ 필요한 Checkpoint / Recovery
+ 환경/Tool 설치가 있으면 필수·선택·권한·설치위치·Verify 설명
+ 공용/관리형 Mac이면 no-admin 대안 설명
+ Cloud/API/AI면 비용·자원·Cleanup 설명
+ 오류 복구
+ 완료 확인
+ 평가/증빙 연결
```

## 2. 현재 15개 가이드 존재 및 연결 상태

2026-08-18 기준으로 각 Mission Repository의 `training/round-01-clear/BEGINNER-GUIDE.md` 존재를 확인했습니다. 메인 README에서는 각 미션의 `시작` 행에서 Repository와 Beginner Guide로 직접 이동하도록 관리합니다.

| 실행 순번 | 미션 | 구분 | Beginner Guide | 문서 내용 감사 | 우선순위 |
|---:|---|---|---|---|---|
| 1 | B1-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | **P0 — 현재 미션** |
| 2 | B1-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 3 | B2-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 4 | B2-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 5 | B3-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 6 | B3-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 7 | B4-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 8 | B5-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 9 | B6-1 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 10 | B6-2 | 필수 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 11 | B7-1 | 필수 Term Project | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P1 |
| 12 | B4-2 | 선택 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P2 |
| 13 | B5-2 | 선택 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P2 |
| 14 | B5-3 | 선택 | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P2 |
| 15 | B7-2 | 선택 Term Project | ✅ 존재 / 메인 직접 연결 | 🟡 정합성·탐색·줄별 해설·실행안전 감사 필요 | P2 |

`🟡 정합성·탐색·줄별 해설·실행안전 감사 필요`는 가이드가 없다는 뜻이 아닙니다. **가이드는 이미 존재하지만 과거 Phase/Runtime/OS 표현, 현재 실행 경로, 목차/Quick Start 적합성, 명령·코드 설명의 상세도와 실행 안전 계층을 다시 확인해야 한다는 뜻**입니다.

## 3. 알려진 Documentation Drift 유형

기존 가이드에는 다음과 같은 과거 상태 표현 또는 설명 부족이 남아 있을 수 있습니다.

```text
Phase A — REFERENCE BUILD
과거 Runtime 상태
과거 Ubuntu 버전 또는 과거 Golden Path
현재 Control Tower와 다른 Active/Not Started 표현
긴 문서인데 클릭 가능한 목차가 없음
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
개발도구를 설치하라고만 하고 필수/선택/권한/설치 위치/Verify를 설명하지 않음
공용 Mac에서 관리자 권한을 전제하고 no-admin 대안을 제공하지 않음
Cloud/API/AI 비용 가능성이나 Cleanup 절차가 없음
```

따라서 단순히 `BEGINNER-GUIDE.md`가 존재한다는 이유만으로 `BEGINNER READY`로 판정하지 않습니다.

현재 상태는 다음 우선순위로 판단합니다.

```text
공식 Mission / Evaluation
→ 현재 Repository 실제 상태
→ Control Tower 현재 상태
→ 환경/문서 표준
→ Beginner Guide
```

## 4. 미션별 감사 체크리스트

각 미션을 실제 Runtime으로 시작하기 전에 아래 12항목을 확인합니다.

| # | 감사 항목 | PASS 기준 |
|---:|---|---|
| 1 | 상태/환경 정합성 | 현재 Runtime/OS/경로와 모순 없음 |
| 2 | 공식 Source | Mission/Evaluation/제공 파일과 연결됨 |
| 3 | 한글+영어 용어 | 핵심 용어 첫 등장 병기 |
| 4 | 쉬운 설명 | 입문자가 한 문장으로 의미를 파악 가능 |
| 5 | 구조/탐색 | 복잡한 흐름은 도식이 있고, 긴 문서는 클릭 가능한 목차가 있으며 실행형 문서는 Quick Start/빠른 진입 경로가 적합함 |
| 6 | 최소 예제 | 본 실습 전에 필요한 작은 예가 있으면 제공 |
| 7 | 실제 따라하기 | 실행 위치/Preflight가 명확하고 명령·코드·UI 경로가 구체적이며 실행 가능 |
| 8 | 명령·코드 줄별 해설 | 실행 가능한 Shell 명령은 각 줄의 목적을 설명하고, 중요한 옵션·인자·입력값과 의미 있는 Python/JavaScript/SQL/설정 줄을 입문자가 자기 말로 설명할 수 있음 |
| 9 | 정상 결과 | 성공 조건과 환경에 따라 달라도 정상인 값을 구분할 수 있음 |
| 10 | 오류 복구 | 증상→원인→확인→수정→재검증 및 필요한 Recovery 경로 제공 |
| 11 | 완료 확인 | STOP/GO, Rerun Safety, Checkpoint를 필요한 Step에서 판정 가능 |
| 12 | 평가/증빙 연결 | Requirement→Verify→Evidence 관계가 보이고 비용 자원은 Cleanup까지 연결 |

### 4.1 줄별 해설 세부 판정

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

### 4.2 개발환경·개발 Tool Setup 세부 판정

미션 가이드나 환경 문서에서 도구 설치/설정을 요구하면 다음도 확인합니다.

```text
[ ] 이 도구가 무엇인지 한 문장으로 설명한다.
[ ] 왜 현재 미션에 필요한지 설명한다.
[ ] 필수 / 권장 / 선택 여부를 표시한다.
[ ] 관리자 권한이 필요한지 여부를 설명한다.
[ ] Host에 설치하는지 Ubuntu Runtime에 설치하는지 구분한다.
[ ] 설치 위치 또는 Repository-local 위치를 설명한다.
[ ] 설치 명령의 각 실행 줄과 중요한 옵션을 설명한다.
[ ] 설치 후 command/version/서비스 등으로 정상 여부를 확인한다.
[ ] 설치 실패 시 최소 복구 경로를 제공한다.
[ ] 공용·관리형 Mac이면 sudo/MDM 우회 없이 가능한 사용자 영역/Remote/CLI 대안을 제공한다.
[ ] 대체 IDE를 써도 Repository/Terminal/Git/Python Runtime 계약이 유지된다.
[ ] Google Antigravity를 쓰는 경우 IDE와 CLI 역할을 구분하고, CLI의 사용자 영역 설치 경로를 설명한다.
```

상세 기준은 [DEVELOPMENT-TOOLSET-STANDARD.md](DEVELOPMENT-TOOLSET-STANDARD.md)와 [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md)를 따릅니다.

### 4.3 실행 안전 7원칙 세부 판정

핵심 실행 Step에는 필요한 범위에서 다음을 확인합니다.

```text
[ ] 실행 위치(Context): Host/Terminal/Repository/Branch/권한/venv를 혼동하지 않는다.
[ ] Preflight: 실행 전에 PWD, command, Git 상태, 권한 등 필요한 선행 조건을 확인한다.
[ ] STOP / GO: 필수 조건 또는 Verify가 실패하면 다음 Step으로 진행하지 않는다.
[ ] Rerun Safety: 상태를 바꾸는 명령은 반복 실행 영향을 판단할 수 있다.
[ ] Copy & Paste: 실행 블록에 prompt/설명/예상 출력이 섞이지 않고 Placeholder가 명확하다.
[ ] Output Variation: 정확히 같아야 하는 조건과 사용자명/PID/시간/버전 등 달라도 정상인 값을 구분한다.
[ ] Checkpoint / Recovery: 위험하거나 긴 변경은 되돌아갈 상태를 확보하고 실패 시 복구 경로가 있다.
```

Cloud/API/AI Provider가 포함되면 추가로 확인합니다.

```text
[ ] Account / Project / Region을 확인한다.
[ ] 비용/무료 한도 또는 유료 API 사용 가능성을 확인한다.
[ ] 생성할 Resource 수를 확인한다.
[ ] Cleanup/Stop/Delete 절차를 실행 전에 알 수 있다.
[ ] 실습 종료 후 실제 자원 삭제/중지 여부를 확인한다.
```

### 4.4 목차·Quick Start 세부 판정

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
```

## 5. 운영 우선순위

15개 가이드를 표준 변경만을 이유로 한꺼번에 기계적으로 다시 쓰지 않습니다.

```text
P0 현재 Active Mission
→ Runtime을 막거나 오판정을 만드는 문서 오류 즉시 수정
→ 목차/Quick Start를 실제 문서 역할에 맞게 적용
→ 명령·코드 줄별 해설도 실제 실행 직전 기준에 맞춤
→ 실행 위치/Preflight/STOP-GO/Rerun Safety를 실제 흐름에 적용
→ 필요한 개발 Tool Setup도 권한/설치위치/Verify까지 확인

P1 다음 필수 미션
→ 해당 미션 진입 직전 Beginner Documentation Audit
→ 필요한 부분만 교정

P2 선택 미션
→ Stage 2 진입 전에 순차 감사
```

즉, **모든 가이드의 존재와 진입 링크는 확보하되, 내용 감사·교정은 실제 실행 순서에 맞춰 깊게 수행**합니다.

## 6. BEGINNER READY 판정

다음 조건을 충족해야 해당 미션의 대표 입문자 경로를 `BEGINNER READY`로 볼 수 있습니다.

```text
메인 README에서 한 번에 찾을 수 있음
+ 긴 문서이면 클릭 가능한 목차가 있음
+ 실행형 문서이면 안전한 Quick Start/빠른 진입 경로가 있음
+ Beginner Guide가 실제 수행 순서를 제공함
+ 현재 상태/환경과 모순 없음
+ 필요한 개발도구의 설치 위치/권한/Verify를 이해할 수 있음
+ 실행 위치와 Preflight를 스스로 확인할 수 있음
+ 실행 명령과 의미 있는 코드 줄을 자기 말로 설명할 수 있음
+ 실패 시 STOP하고 최소 복구 후 재검증할 수 있음
+ 위험 명령의 재실행 가능 여부를 판단할 수 있음
+ 예상 출력의 변동 가능 값을 실패로 오판하지 않음
+ 필요한 Checkpoint/Recovery가 있음
+ Cloud/API/AI면 비용과 Cleanup 경로를 알 수 있음
+ 외부 비공식 검색 없이 핵심 경로 수행 가능
+ 평가/증빙까지 연결됨
```

`BEGINNER READY`가 되더라도 실제 Runtime/Evidence가 없다면 Mission `CLEAR`가 아닙니다.

## 7. 관련 기준

- [BEGINNER-TRAINING-STANDARD.md](BEGINNER-TRAINING-STANDARD.md) — 입문자 훈련·문서 생성 표준
- [DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md](DOCUMENT-NAVIGATION-QUICK-START-STANDARD.md) — 목차 / Quick Start / 빠른 진입 기준
- [COMMAND-CODE-EXPLANATION-STANDARD.md](COMMAND-CODE-EXPLANATION-STANDARD.md) — 명령어·코드 한 줄 해설 표준
- [DEVELOPMENT-TOOLSET-STANDARD.md](DEVELOPMENT-TOOLSET-STANDARD.md) — 개발 Tool Set / no-admin 기준
- [ENVIRONMENT-STANDARD.md](ENVIRONMENT-STANDARD.md) — 환경 표준
- [README-INFORMATION-ARCHITECTURE-STANDARD.md](README-INFORMATION-ARCHITECTURE-STANDARD.md) — README 정보 구조와 직접 진입 기준
- [TERMINOLOGY-STANDARD.md](TERMINOLOGY-STANDARD.md) — 한글·영어 용어 표기
- [CANONICAL-REFERENCE-STANDARD.md](CANONICAL-REFERENCE-STANDARD.md) — Requirement/Reference/Verify/Evidence 기준
