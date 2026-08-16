# Environment Standard

환경설정도 코드처럼 **재현 가능하고 검증 가능**해야 합니다.

## Golden Path

Round 01은 미션별 기준 환경 하나를 우선합니다. 여러 OS/VM/Container 조합을 동시에 지원하여 가이드를 복잡하게 만들지 않습니다.

## 필요한 경우의 구조

```text
environment/
├── README.md
├── prerequisites.md
├── versions.md
├── setup.sh
├── verify.sh
├── reset.sh
├── .env.example
└── config/
```

필요하지 않은 파일·폴더는 만들지 않습니다.

## 역할

- `prerequisites.md`: 시작 조건과 필요한 도구
- `versions.md`: 실제 검증한 버전
- `setup.sh`: 환경 재현용 구축 스크립트
- `verify.sh`: 환경 정상 여부 확인
- `reset.sh`: **현재 Round에서 만든 자원만** 안전하게 제거
- `.env.example`: 실제 Secret이 없는 예제 설정

Round 01에서는 가이드의 명령을 직접 따라 이해하는 것을 본 훈련으로 하고, 자동 setup은 재현·복구 보조 수단으로 사용합니다.

## 시스템 설정 변경

`현재 상태 확인 → 백업 → 변경 → 문법 검사 → 적용 → 검증 → Evidence`

광범위한 `rm -rf`, 무차별 사용자 삭제, 시스템 전체 초기화 같은 위험한 reset은 금지합니다.

## Secret

Repository 및 Evidence에 다음 실제 값을 저장하지 않습니다.

- `.env`
- `*.key`
- Password
- API Key
- Access Token
- Private Key
- 기타 Secret

예제 파일에는 실제 값 대신 Placeholder를 사용합니다.

## 검증 출력

가능하면 다음 형식으로 통일합니다.

```text
[PASS] 조건 A
[PASS] 조건 B
[FAIL] 조건 C
Result: 2 PASS / 1 FAIL
```

사용자가 실패 지점만 쉽게 전달할 수 있어야 합니다.
