# Status Model

Growth Stage와 진행 상태를 분리한다. `CORE / EXPLORE / ADVANCED / PRO / EXPERT`는 성장 수준이고, 아래 값은 실제 진행 상태다.

## Canonical Status

### PLANNED
미래 계획. 아직 시작 조건을 충족하지 않았거나 우선순위상 대기 중이다.

### READY
선행조건과 최소 준비가 충족되어 지금 시작할 수 있다.

### ACTIVE
현재 실제 수행 중이다. 시간과 작업 자원이 투입되고 있다.

### BLOCKED
외부 의존성, 권한, 환경, 입력 자료, 팀 상황 등으로 진행할 수 없다.

### DONE
해당 활동의 정의된 완료 기준과 Evidence를 충족했다.

### ARCHIVED
과거 활동, 종료된 시도, 더 이상 진행하지 않는 항목을 보존한다.

## 상태 전이

기본 흐름:

`PLANNED → READY → ACTIVE → DONE`

예외 흐름:

- `READY → BLOCKED → READY`
- `ACTIVE → BLOCKED → ACTIVE`
- `PLANNED/READY/ACTIVE/DONE → ARCHIVED`

## Mission 상태와의 관계

기존 Mission 실행 상태는 유지한다.

`TODO → IMPLEMENTED → TESTED → PASS`

예외:
- `NEEDS-RUNTIME`
- `BLOCKED`

Mission Gate와 Growth Activity Status는 다른 목적을 가진다.

- Mission Gate: 공식 미션의 실행/검증 상태
- Growth Status: 학습, 커뮤니티, 연구, 대외활동, 프로젝트 등 전체 활동의 운영 상태

## Dashboard 원칙

Dashboard는 최소한 다음을 따로 보여준다.

1. 성장 단계: CORE / EXPLORE / ADVANCED / PRO / EXPERT
2. 현재 진행 상태: PLANNED / READY / ACTIVE / BLOCKED / DONE / ARCHIVED
3. Mission Gate: G1~G8
4. 중요도: REQUIRED / RECOMMENDED / OPTIONAL

'현재 수준'과 '현재 작업'을 같은 값으로 표현하지 않는다.
