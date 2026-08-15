---
mission: B1-1
stage: top-core
order: 270
term: Log Rotation
lifecycle: NEW
---
# B1-1 — 로그 로테이션 (Log Rotation)

## 한 줄 설명
로그가 무한히 커지지 않도록 일정 기준에서 새 파일로 넘기고 이전 로그를 제한된 수만큼 보관하는 운영 방식이다.

## B1-1에서의 위치
필수 기준은 최대 `10MB`, 보관 `10개`다. 구현 방식은 원본이 자유롭게 허용한다.

## 핵심 관계
`Log 계속 누적 → Size 기준 도달 → Rotate → 정해진 개수 보관`.

## 초미니 확인
로그를 영구히 한 파일에만 추가할 때 어떤 운영 문제가 생기는지 설명한다.

## Gate
- [ ] V2: Log Rotation의 목적을 설명한다.
- [ ] V3: Logging과 Rotation을 서로 다른 역할로 구분한다.

[← crontab](./b1-1-20-260-crontab.md) · [Index](./b1-1-20-000-index.md) · [다음: Exit Status →](./b1-1-20-280-exit-status.md)
