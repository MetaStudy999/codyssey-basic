---
mission: B1-2
stage: execution
level: 2
order: 110
unit: Issue Report Validation
gate: V4
visual_learning: DEFERRED
---

# 110. GitHub Issue형 리포트 검증

## 실행 목표
OOM / CPU / Deadlock 3개 보고서를 동일한 증거 기반 구조로 완성하고 정적 검증한다.

## 필수 구조
```text
Description
→ Evidence & Logs
→ Root Cause Analysis
→ Workaround & Verification
→ Before & After
```

현재 구현 저장소의 결과 위치:
```text
reports/oom.md
reports/cpu.md
reports/deadlock.md
```

정적 검증:
```bash
python3 scripts/validate_reports.py
```

## 중요한 구분
`validate_reports.py` PASS는 문서 구조가 맞다는 뜻이지, 새로 수행한 Runtime 자체를 자동으로 PASS시키는 것은 아니다. Runtime/Evidence는 별도로 확인한다.

## 작성 원칙
- 증거에서 확인한 사실과 기술적 추론을 분리
- 임시 Workaround와 근본 해결 제안을 분리
- 실제 build와 다른 예시 로그를 강제로 맞추지 않음
- 바이너리 내부 코드를 역추론하여 특정 코드 라인을 단정하지 않음

## V4 확인
- [ ] 3개 리포트가 모두 같은 필수 구조를 가진다.
- [ ] 각 주장에 Evidence path 또는 실제 출력이 연결된다.
- [ ] 정적 검증과 Runtime 검증을 구분한다.

[← 100](./b1-2-30-100-evidence-curation.md) · [Level 2 Index](./b1-2-30-000-index.md) · [120 →](./b1-2-30-120-v4-execution-gate.md)
