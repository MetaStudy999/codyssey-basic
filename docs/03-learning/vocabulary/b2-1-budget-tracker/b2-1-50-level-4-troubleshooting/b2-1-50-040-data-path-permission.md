---
mission: B2-1
stage: level-4-troubleshooting
order: 40
unit: Data Path and Permission Failure
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 040. Data Path / Permission Failure

## 증상
데이터 디렉터리를 만들거나 파일을 열고/쓰는 단계에서 실패한다.

## 관찰
`--data-dir` 실제 값, 디렉터리 존재 여부, 읽기/쓰기 가능 여부, stderr의 OS 오류를 확인한다.

## 실패 층·가설
`DataPaths.initialize()`와 각 Store의 파일 I/O에서 `OSError`가 발생할 수 있고, `@cli_guard`는 파일 작업 오류를 사용자 메시지와 non-zero exit로 변환한다.

## 최소 수정
올바른 writable 경로를 지정하고 필요한 최소 권한만 교정한다. 권한 문제를 해결하려고 무조건 root 실행으로 우회하지 않는다.

## 재검증
동일 `--data-dir`에서 category/list/add 중 원래 실패했던 명령을 다시 실행한다.

## Before/After Evidence
경로, 권한/존재 상태, 오류 메시지, 정상 실행 결과를 비교한다.

## Troubleshooting Gate
content corruption과 path/permission 오류를 구분할 수 있는가?

[← 이전](./b2-1-50-030-persistent-file-corruption.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-050-missing-transaction-id.md)
