# Mission Round Template

> **기준 레포(Canonical Control Repository):** `MetaStudy999/codyssey-basic`  
> 현재 제2기 신규 수행은 `training/round-02-clear/`를 사용한다. `round-01-clear`는 참고자료로 보존한다.
>
> **Versioned Mission Execution Template:** [mission-execution/CURRENT.md](mission-execution/CURRENT.md)
>
> 이 파일은 기존 호환 진입점이다. 신규 Active Mission의 실행 순서는 버전형 CURRENT 템플릿을 우선 참고하고, 개선 후보는 mission-execution/NEXT.md에 기록한다.

## Round Metadata

- Current Mission ID:
- Current Title:
- Repository:
- Previous Mission ID:
- Round: `round-02-clear`
- Required / Optional:
- Official Source:
- Legacy Evaluation:
- Official Learning Time:
- Accelerated Target:
- Status: `NOT STARTED | ACTIVE | BLOCKED | CLEAR`

## 초압축 모드

- 공통 계획: [ACCELERATED-2WEEK-PLAN.md](../training/round-02-clear/ACCELERATED-2WEEK-PLAN.md)
- 공식 학습시간은 그대로 기록한다.
- Accelerated Target은 내부 시간 예산이며 공식 요구를 축소하지 않는다.

## 가장 효율적인 실행 순서

1. **기준 확정** — 제2기 Mission PDF → 오리엔테이션 → Repository → 기존 Mission/Evaluation → R01
2. **평가항목 먼저** — Requirement → Implementation → Verification → Evidence → Evaluation
3. **최소 통과 경로** — 필수 요구만 우선
4. **적시 학습(JIT Learning)** — 지금 필요한 개념만 학습
5. **한 단계씩 실행** — 실제 출력 확인 후 다음 단계
6. **검증 + Evidence 동시 확보**
7. **평가 설명 준비** — WHAT → WHY → HOW → VERIFY → LIMITATION
8. **모의평가 + 최종 CLEAR 점검**

## Round 02 최소 파일

```text
training/round-02-clear/
├── README.md
└── CHECKLIST.md
```

필요할 때만 `BEGINNER-GUIDE.md`, `docs/`, `environment/`, `evidence/`를 추가한다.

## Step Template

### Step N — 제목

**지금 무엇을 하나요?**

**왜 필요한가요?**

**핵심 용어**

**실행 위치(Context)**

**실행 전 확인(Preflight)**

**복사 가능한 명령 또는 코드**

**명령·코드 설명**

**예상 결과**

**PASS / FAIL 기준**

**오류가 발생하면**

**평가와의 연결**

**완료 확인**
