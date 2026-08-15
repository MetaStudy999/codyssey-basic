---
mission: B1-1
stage: advanced
order: 20
unit: Log Compression and Archive
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# 로그 압축·Archive — 7일 압축 / 30일 삭제

## 한 줄 설명

오래된 로그를 계속 쌓아 두지 않고 일정 기간이 지나면 압축·보관하고 더 오래된 Archive는 삭제하는 Bonus 운영 흐름이다.

## Source 연결

기존 B1-1 Advanced 문서가 원본 Bonus와 연결해 보존한 기준은 다음 흐름이다.

```text
오래된 로그
→ 7일 조건
→ Compression / gzip
→ Archive
→ 30일 조건
→ Deletion
```

## 핵심 개념

- Compression: 저장 공간을 줄이기 위해 파일을 압축한다.
- Archive: 현재 운영 로그와 오래된 보관 로그를 분리한다.
- Retention Period: 얼마 동안 보관할지 정한 기간이다.

## 실습 사고법

삭제부터 하지 않는다.

```text
대상 확인
→ 날짜/조건 확인
→ 압축 결과 확인
→ Archive 이동 확인
→ 삭제 조건 확인
→ 삭제
```

## 주의

- 실제 로그 경로와 보존 정책을 확인하기 전에 광범위한 `rm`을 사용하지 않는다.
- 이 Bonus 정책은 필수 `10MB / 10개` 로그 회전 요구와 별개다.

## Advanced Gate

- [ ] Log Rotation과 Retention/Archive 차이를 설명할 수 있다.
- [ ] 7일·30일 조건을 서로 바꾸지 않고 설명할 수 있다.
- [ ] 삭제 전에 대상 검증이 필요한 이유를 설명할 수 있다.

[← report.sh](./b1-1-90-010-report-sh-statistics.md) · [Index](./b1-1-90-000-index.md) · [다음: systemd →](./b1-1-90-030-systemd-service-timer.md)
