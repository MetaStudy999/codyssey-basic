---
mission: B1-2
stage: execution
level: 2
order: 10
unit: Source and Safety Preflight
gate: V4
visual_learning: DEFERRED
---

# 010. Source / Safety Preflight

## 실행 목표
실습 전에 무엇이 공식 요구이고 무엇이 예시·보조 자료인지 구분하고, 안전 규칙을 잠근다.

## Source 우선순위
1. B1-2 Mission PDF
2. 실제 제공 runtime artifact와 실제 실행 Evidence
3. 구현 저장소의 검증 문서/스크립트
4. `b1-2-evaluation.md`는 현재 구현 저장소 기준 `UNVERIFIED` provisional rubric
5. 학습용 설명

구현 저장소의 Work Packet은 `b1-2-mission.md`의 사전조건 표 변환에 충돌이 있어 **PDF가 우선**한다고 기록한다.

## 안전 규칙
- non-root 일반 사용자로 실행
- 격리된 Linux/VM/컨테이너 우선
- `0.0.0.0:15034` 노출 범위 확인
- 디컴파일/리버스 엔지니어링 금지
- 장애 직후 PID·로그·자원 상태를 먼저 저장
- Mission PDF 예시 문구를 실제 Evidence로 복사하지 않음

## V4 확인
- [ ] 현재 사용 중인 Source의 우선순위를 말할 수 있다.
- [ ] 예시 출력과 실제 runtime 출력의 차이를 구분한다.
- [ ] 금지 사항 2개 이상을 설명한다.

[← Level 2 Index](./b1-2-30-000-index.md) · [다음: Runtime Environment →](./b1-2-30-020-runtime-environment.md)
