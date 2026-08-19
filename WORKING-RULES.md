# Codyssey Basic 작업 룰(Working Rules)

이 문서는 메인 레포(Control Tower)에서 사용하는 작업 운영 규칙의 **진입점(Entry Point)**입니다.

## 빠른 적용(Quick Apply)

작업을 시작할 때 다음 순서를 사용합니다.

```text
공식 Mission / Evaluation / 제공 파일 확인
→ 현재 Repository main 확인
→ 상위 작업 운영 표준 확인
→ 현재 Active Mission의 WORKING-RULES.md 확인
→ BEGINNER-GUIDE / CHECKLIST / environment / evidence 확인
→ 실제 실행(Runtime Execution)
→ 검증(Verification)
→ 증빙 자료(Evidence)
→ 평가(Evaluation)
→ 조건 충족 시에만 Mission CLEAR
```

## 📑 목차

- [상위 작업 운영 표준](#standard)
- [메인 레포의 역할](#control-tower)
- [각 미션 레포 적용 방식](#mission-adapter)
- [상태 관리](#status)
- [변경 관리](#change)

<a id="standard"></a>
## 상위 작업 운영 표준

- [`standards/CODYSSEY-WORKING-OPERATING-STANDARD.md`](standards/CODYSSEY-WORKING-OPERATING-STANDARD.md)

이 문서가 메인 레포와 각 미션 레포에서 공통으로 사용하는 상위 작업 운영 기준입니다.

세부 문서 표준은 `standards/` 아래의 전문 표준을 사용합니다.

<a id="control-tower"></a>
## 메인 레포의 역할

메인 레포는 다음을 관리합니다.

```text
공통 작업 표준
환경 계약과 Runtime Profile
미션 실행 순서 / 선후관계
현재 Active Mission
공통 환경 Closeout / Freeze
문서 품질 감사
미션 상태 집계
```

공식 미션 요구 자체는 각 미션 레포의 공식 Mission/Evaluation/제공 파일이 우선합니다.

<a id="mission-adapter"></a>
## 각 미션 레포 적용 방식

각 미션 레포의 루트 `WORKING-RULES.md`는 상위 표준의 **얇은 어댑터(Thin Adapter)** 역할을 합니다.

```text
Control Tower 상위 표준
        ↓
Mission WORKING-RULES.md
        ↓
Mission 공식 Source
        ↓
README / BEGINNER-GUIDE / CHECKLIST
        ↓
Runtime / Verification / Evidence / Evaluation / CLEAR
```

상위 표준 전문을 각 미션에 복사하지 않습니다. 미션 레포에는 링크와 미션별 차이만 둡니다.

<a id="status"></a>
## 상태 관리

```text
Documentation Ready
≠ BEGINNER READY
≠ Runtime PASS
≠ Verification PASS
≠ Evidence Complete
≠ Mission CLEAR
```

실제 수행 결과가 없는 상태에서 PASS/CLEAR를 기록하지 않습니다.

<a id="change"></a>
## 변경 관리

```text
POLICY
→ APPLY
→ VERIFY
```

변경 전에는 최신 `main`과 대상 파일을 확인하고, 변경 후에는 실제 GitHub `main`을 다시 열어 링크·경로·상태를 확인합니다.
