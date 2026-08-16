# Canonical Reference Standard

R01 Reference Build의 **공통 정합성 기준**입니다. 모든 미션을 동일한 기술 스택이나 동일한 파일 개수로 강제하지 않고, 사용자가 어느 미션을 열어도 같은 위치에서 학습·검증·Evidence 흐름을 찾을 수 있도록 최소 계약만 정의합니다.

## 1. Canonical 진입점

각 미션의 R01 기준 진입점은 다음입니다.

```text
training/round-01-clear/
├── README.md
├── REFERENCE-BUILD.md
├── REFERENCE-STATUS.md
├── BEGINNER-GUIDE.md
├── CHECKLIST.md
├── docs/          # 필요한 경우
├── environment/   # 필요한 경우
├── evidence/      # 필요한 경우
└── reference/     # 구현 기준본이 필요한 경우
```

미션 특성에 따라 `monitor.sh`, SQL, Web app, Cloud config 등 별도 핵심 산출물이 추가될 수 있습니다. 필요 없는 파일·폴더를 형식 때문에 만들지 않습니다.

## 2. 파일 역할

- `README.md`: 현재 Round의 짧은 안내와 canonical 시작 위치
- `REFERENCE-BUILD.md`: 공식 Source, 설계 결정, Reference Complete Path, Runtime 분리
- `REFERENCE-STATUS.md`: Reference 준비도와 실제 Runtime 상태를 분리 기록
- `BEGINNER-GUIDE.md`: 입문자가 실제 수행할 때 사용하는 **대표 학습 경로**
- `CHECKLIST.md`: Reference 준비 항목과 실제 Runtime/CLEAR 항목을 구분
- `docs/requirements-mapping.md`: Requirement → Implementation → Verification → Evidence
- `environment/verify.sh`: 자동 확인 가능한 범위를 검증
- `evidence/README.md`: 실제 Evidence 종류와 수집 기준

## 3. Source of Truth 규칙

1. 공식 Source 목록은 **실제로 저장소에 존재하는 공식 파일만** 적습니다.
2. 공식 Evaluation 파일이 없으면 없는 것으로 명시하고 Mission 자체를 검증 기준으로 사용합니다.
3. `docs/evaluation-qa.md`처럼 Reference Build 과정에서 작성한 설명 연습 자료는 공식 평가 원본이라고 부르지 않습니다.
4. 공식 PDF/MD의 요구사항을 Reference 문서가 임의로 삭제·완화하지 않습니다.

## 4. Beginner Guide 규칙

Canonical `BEGINNER-GUIDE.md`는 제목만 있는 scaffold가 아니라 실제 수행 경로여야 합니다.

Phase C의 각 hands-on Step은 다음 10개 항목을 사용합니다.

1. 왜 하는가
2. 무엇을 하는가
3. 이번 단계에서 알아야 할 용어
4. 필요한 핵심 개념
5. 실행할 명령어 또는 코드
6. 명령어/코드의 입문자용 주석
7. 예상되는 정상 결과
8. 그 결과가 의미하는 것
9. 자주 발생하는 오류와 해결 방법
10. 완료 확인

용어는 JIT 방식으로 필요한 시점에 제공하며 `한국어 (English)`를 함께 사용합니다.

## 5. Checklist / Status 규칙

Reference Build와 Runtime Mission 상태를 혼합하지 않습니다.

```text
Reference Build: CORE READY
Runtime Mission: ⬜ NOT STARTED
Runtime CLEAR: 아님
```

Reference 구현·문서·테스트 설계가 존재해도 실제 환경 실행과 필요한 Evidence가 없으면 `✅ CLEAR`가 아닙니다.

## 6. Verify 규칙

가능하면 다음 출력 형식을 사용합니다.

```text
[PASS] item
[PASS] item
[FAIL] item
Result: N PASS / N FAIL
```

`verify.sh`는 검증 역할만 담당합니다. 실제 Cloud/API/Browser/협업처럼 자동화 스크립트만으로 증명할 수 없는 요구사항은 Runtime Gate로 남깁니다.

## 7. Environment 규칙

환경은 미션별 Golden Path 하나를 우선합니다.

- `setup.sh`: 구축/재현 보조
- `verify.sh`: 확인만 수행
- `reset.sh`: 현재 Mission/Round에서 만든 자원만 안전하게 제거

시스템 설정 변경은 `현재 상태 → 백업 → 변경 → 문법 검사 → 적용 → 검증 → Evidence` 순서를 사용합니다.

## 8. Secret 규칙

Repository, Chat, Log, Evidence에 실제 Secret을 저장하지 않습니다.

- `.env`
- `*.key`
- Password
- API Key
- Access Token
- Private Key
- Cloud Secret/Session Token

예시는 Placeholder만 사용합니다.

## 9. Evidence 규칙

Evidence는 임의의 screenshot 모음이 아니라 다음 연결을 증명합니다.

```text
Requirement
→ Implementation
→ Verification
→ Evidence
```

실제로 수행하지 않은 결과를 과거 실행 기록이나 Reference 예시로 대신하지 않습니다.

## 10. Canonical Gate

미션을 Canonical Reference로 인정하려면 최소한 다음을 만족해야 합니다.

- 실제 공식 Source와 Source 목록 일치
- canonical Beginner Guide가 실질적인 실행 경로
- canonical Checklist가 Reference/Runtime을 구분
- Reference Status와 통합 Progress가 모순되지 않음
- Requirement Mapping 존재 또는 동등한 추적 구조 존재
- 검증 가능한 항목의 Verify 경로 존재
- Runtime-only 항목이 명확함
- Secret 정책 준수
- 허위 Runtime PASS 없음

동일한 파일 수나 동일한 기술 선택은 Canonical Gate가 아닙니다.
