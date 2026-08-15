---
mission: B2-1
stage: level-2-execution
order: 100
unit: Error Exit and Decorator
gate: V4
visual_learning: DEFERRED
---

# Error Exit & Decorator

## 실행 목표

의도적인 오류를 발생시켜 사용자 메시지, 해결 힌트, stderr, non-zero exit code, traceback 억제를 검증하고 `@cli_guard`와 연결한다.

## Source / 현재 구현

Mission은 예상 가능한 오류에서 stack trace 대신 이해 가능한 오류 메시지와 해결 힌트를 출력하고, 오류 종료 코드는 `0`이 아니어야 한다고 요구한다.

현재 구현의 `@cli_guard`는 다음과 같이 처리한다.

```text
BudgetError      → stderr, [오류] + [힌트], return 2
KeyboardInterrupt → stderr, return 130
OSError           → stderr, return 3
```

정확한 숫자 `2/130/3`은 현재 구현 선택이며 Mission의 핵심 요구는 **오류에서 non-zero**다.

## 실행

존재하지 않는 ID로 오류를 만든다.

```bash
python -m budget_app --data-dir /tmp/b2-1-learn delete --id TX-999999
printf 'exit_code=%s\n' "$?"
```

현재 저장소의 실제 CLI transcript에는 다음 상태가 기록되어 있다.

```text
[오류] 거래 id를 찾을 수 없습니다: TX-999999
[힌트] list 또는 search로 id를 확인해 주세요.
exit_code=2
```

## 검증

- 정상 command는 exit 0인가?
- 예상 오류는 non-zero인가?
- traceback이 사용자 화면에 노출되지 않는가?
- 원인과 해결 힌트가 분리되어 있는가?
- `decorators.py`의 `cli_guard`에서 예외→exit 변환을 찾았는가?

현재 저장소의 `test_error_is_nonzero_without_traceback_and_has_hint`, `test_invalid_add_is_nonzero_without_traceback`가 이를 검증한다.

## V4 Gate

서로 다른 오류 2개를 직접 발생시켜 exit code와 메시지를 기록하고, 왜 decorator가 공통 관심사인지 코드 위치로 설명한다.

[← 090](./b2-1-30-090-csv-import-rollback.md) · [Level 2 Index](./b2-1-30-000-index.md) · [110 →](./b2-1-30-110-full-test-evidence.md)
