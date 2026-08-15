---
mission: B2-1
stage: level-2-execution
order: 10
unit: CLI Help and Data Initialization
gate: V4
visual_learning: DEFERRED
---

# CLI Help & Data Initialization

## 실행 목표

`python -m budget_app` 진입점과 `--help`를 확인하고, 격리된 데이터 디렉터리에 B2-1의 영속 파일 3개가 생성되는 것을 검증한다.

## Source / 현재 구현

Mission은 Python 3.10+, `python -m budget_app <command> [options]`, 모든 명령의 도움말, 거래/카테고리/예산을 포함한 **3개 이상 영속 파일**을 요구한다.

현재 구현은 `--data-dir` 기본값을 `./data`로 두고 다음 파일을 만든다.

```text
transactions.jsonl
categories.jsonl
budgets.jsonl
```

카테고리 파일이 없거나 비어 있으면 현재 구현은 `food / transport / rent / salary / other`를 자동 생성한다. 이는 Mission이 허용한 초기화 선택지 중 현재 구현의 선택이다.

## 실행

```bash
rm -rf /tmp/b2-1-learn
python -m budget_app --help
python -m budget_app --data-dir /tmp/b2-1-learn category list
ls -l /tmp/b2-1-learn
```

## 검증

- `--help`에서 주요 command와 `--data-dir`을 확인한다.
- `/tmp/b2-1-learn`에 3개 JSONL 파일이 있는지 확인한다.
- `category list`에서 현재 구현의 기본 카테고리가 보이는지 확인한다.
- 프로그램을 다시 실행해도 같은 파일을 재사용하는지 확인한다.

현재 저장소의 `test_initializes_three_persistent_files_and_defaults`, `test_all_command_help_paths_work`가 이 흐름을 자동 검증한다.

## V4 Gate

다음 문장을 실제 결과와 함께 설명할 수 있으면 통과다.

> `BudgetService` 생성 시 `DataPaths.initialize()`가 데이터 폴더와 3개 저장 파일을 준비하고, CLI의 `--data-dir`로 실습 데이터를 격리할 수 있다.

[← Level 2 Index](./b2-1-30-000-index.md) · [020 →](./b2-1-30-020-transaction-validation-add.md)
