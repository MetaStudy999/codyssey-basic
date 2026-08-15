# B2-1 Advanced — Full Summary

B2-1 원본 Mission의 선택 Bonus를 한 번에 보는 요약 문서다. 상세 학습은 [Advanced Structured Index](./b2-1-90-advanced/b2-1-90-000-index.md)를 사용한다.

## 원본 Bonus 4개

```text
1. Backup
   backup → timestamped backup file
   배움: 복구 가능성

2. Recurring Transactions
   반복 규칙 등록 → 특정 월 자동 생성
   배움: 규칙 기반 데이터 생성 + 예외 처리

3. Console Table Formatting
   외부 라이브러리 없이 문자열 정렬
   배움: 콘솔 UX + formatter 분리

4. Stronger Atomic Rewrite
   temp file → rename/replace
   배움: 파일 기반 transaction / atomicity
```

## 현재 구현 연결

현재 `budget_app/storage.py`의 저장 재작성은 이미 다음 패턴을 사용한다.

```text
tempfile
→ write
→ flush
→ fsync(file)
→ os.replace
→ cleanup on failure
```

따라서 Atomic Rewrite Bonus는 현재 구현에서 직접 분석할 Evidence가 있다. 다른 Bonus의 개인 수행 완료는 별도 실행 Evidence 없이는 주장하지 않는다.

## Supplemental Advanced

- Unicode terminal display width
- Atomicity vs durability / power-loss boundary

이 항목들은 학습 확장용이며 원본 Bonus 요구로 승격하지 않는다.

## 최종 경계

```text
SOURCE_LINKED_BONUS
≠ SUPPLEMENTAL_ADVANCED
≠ BONUS TASK EXECUTED
≠ MISSION PASS
```

[Advanced Structured Index](./b2-1-90-advanced/b2-1-90-000-index.md) · [B2-1 Mission Index](./b2-1-00-index.md)
