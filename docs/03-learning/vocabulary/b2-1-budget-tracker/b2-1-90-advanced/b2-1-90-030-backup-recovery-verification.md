---
mission: B2-1
stage: advanced
order: 30
unit: Backup Recovery Verification
source_scope: SOURCE_LINKED_BONUS
visual_learning: DEFERRED
---

# Backup Recovery Verification

## 한 줄 설명

백업의 배움 포인트인 **복구 가능성**은 실제로 읽을 수 있는 사본인지 확인해야 의미가 있다.

## Source 연결

원본은 backup 파일 생성을 요구하고 배움 포인트로 `복구 가능성`을 제시한다. **restore 명령 자체는 원본의 추가 필수 요구가 아니다.** 이 단위는 backup이 유효한지 검증하기 위한 학습 과제다.

## 복구 Drill 예

```text
1. 테스트용 data-dir 준비
2. 정상 데이터 입력
3. backup 생성
4. 원본 중 한 파일을 별도 테스트 환경에서 손상시킴
5. backup 사본을 복구용 data-dir에 배치
6. list/category/summary로 읽기 검증
```

실제 개인 데이터에서 고의 손상을 만들지 말고 격리된 테스트 디렉터리를 사용한다.

## Evidence

- backup 생성 시각
- 백업 파일 목록
- 복구 전 실패 증상
- 복구 후 정상 조회 결과

## Advanced Gate

`backup exists`와 `backup is recoverable`이 다른 판정이라는 점을 설명한다.

[← 020](./b2-1-90-020-backup-snapshot.md) · [Advanced Index](./b2-1-90-000-index.md) · [040 →](./b2-1-90-040-recurring-rule-model.md)
