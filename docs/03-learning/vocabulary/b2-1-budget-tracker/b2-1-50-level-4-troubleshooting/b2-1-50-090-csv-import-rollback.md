---
mission: B2-1
stage: level-4-troubleshooting
order: 90
unit: CSV Import and Rollback Failure
gate: TROUBLESHOOTING
visual_learning: DEFERRED
---
# 090. CSV Import / Rollback Failure

## 증상
`import`가 파일 없음, UTF-8 문제, 필수 헤더 누락, 잘못된 행, 미등록 category 등으로 취소된다.

## 관찰
파일 경로, encoding, header, 오류가 지목한 행 번호와 category를 확인한다.

## 실패 층·가설
현재 구현은 CSV 전체를 먼저 검증해 `pending`에 모으고 모든 행이 정상일 때만 `add_many()` 한다. 따라서 한 행 오류 시 기존 거래는 변경되지 않아야 한다.

## 최소 수정
지목된 schema/행만 교정하고, 미등록 category라면 먼저 등록한다.

## 재검증
import 전 거래 수와 실패 후 거래 수가 같은지 확인한 뒤, 수정한 CSV를 다시 import한다.

## Before/After Evidence
실패 전/후 거래 수, 오류 행, 성공 후 imported 수를 남긴다.

## Troubleshooting Gate
부분 성공이 아니라 현재 구현의 all-or-nothing 정책을 검증할 수 있는가?

[← 이전](./b2-1-50-080-csv-export-failure.md) · [Index](./b2-1-50-000-index.md) · [다음 →](./b2-1-50-100-atomic-rewrite-failure.md)
