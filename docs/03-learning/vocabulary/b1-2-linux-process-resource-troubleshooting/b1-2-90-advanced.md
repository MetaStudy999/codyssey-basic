# B1-2 Advanced Full Summary — Scheduling Algorithm Inference

**상태:** 선택 Bonus 학습 요약  
**source_scope:** `SOURCE_LINKED_BONUS`  
**원본 근거:** B1-2 Mission PDF `5. 보너스 과제 (선택)`

## 한 페이지 흐름

```text
1. 정상 실행 로그 수집
2. Timestamp / Worker / Progress 표 작성
3. 실행 순서 패턴화
4. 교체 주기 패턴화
5. Round-Robin / FCFS / Priority 비교
6. 가장 강한 가설 선택
7. 지지·반증 Evidence 기록
8. 관측 한계 기록
9. 기술적 장단점 분석
10. 웹 서버 / 배치 서버 등 서비스 적합성 분석
11. Scheduling Inference Report 작성
```

## 반드시 지킬 경계

- 원본 PDF의 스케줄링 예시는 참고 예시이며 실제 정답으로 복사하지 않는다.
- 실제 로그가 Round-Robin 예시와 다르면 실제 Evidence를 우선한다.
- 로그의 Timestamp 간격을 실제 OS Time Quantum의 정확한 값과 동일시하지 않는다.
- Worker 로그만으로 OS 내부 스케줄러 구현 전체를 확정했다고 주장하지 않는다.
- 바이너리 디컴파일·리버스 엔지니어링은 금지한다.
- Advanced 수행 여부는 필수 B1-2 Mission PASS와 분리한다.

## 후보 비교 핵심

```text
Round-Robin
→ 완료 전 교체 + 재개 + 비교적 공평한 순환 패턴

FCFS
→ 먼저 온 작업을 완료하고 다음 작업으로 넘어가는 순차 패턴

Priority
→ 특정 작업이 반복적으로 먼저/더 자주 선택되는 편향 패턴
```

## 최종 보고 구조

```text
OBSERVATION
→ EVIDENCE
→ PATTERN
→ CANDIDATE COMPARISON
→ INFERENCE
→ TRADE-OFF
→ ARCHITECTURE FIT
→ LIMITS
```

[Advanced Structured Index](./b1-2-90-advanced/b1-2-90-000-index.md) · [B1-2 Index](./b1-2-00-index.md) · [Review](./b1-2-70-review/b1-2-70-000-index.md)
