# Mission Execution Template — Version Registry

> 목적: CODYSSEY 미션 수행 절차를 한 번에 고정하지 않고, 실제 Mission Runtime에서 검증된 개선사항을 버전 단위로 축적한다.
>
> 공통 기준은 `MetaStudy999/codyssey-basic`에서 관리하고, 각 Mission Repository에는 현재 미션에 필요한 적용 결과만 둔다.

## Current Stable

- Current Version: **v1.0.0**
- Current Template: [CURRENT.md](CURRENT.md)
- Immutable Snapshot: [versions/v1.0.0.md](versions/v1.0.0.md)
- Next Candidate: [NEXT.md](NEXT.md)
- Change History: [CHANGELOG.md](CHANGELOG.md)

## 버전 운영 원칙

```text
현재 안정 버전(CURRENT)
        ↓
Active Mission 실제 적용
        ↓
문제·개선 후보 발견
        ↓
NEXT에 후보 기록
        ↓
다음 Mission에서 재검증
        ↓
검증된 변경만 새 버전으로 승격
        ↓
versions/vX.Y.Z.md 스냅샷 보존
        ↓
CURRENT 갱신
```

### 핵심 원칙

1. **현재 버전을 한 번에 모든 Mission에 강제 적용하지 않는다.**
2. 현재 Active Mission부터 적용하고 실제 Runtime으로 검증한다.
3. 개선 아이디어는 즉시 CURRENT를 덮어쓰기보다 우선 `NEXT.md`에 기록한다.
4. 다음 Mission 또는 재실행에서 유효성이 확인되면 새 버전으로 승격한다.
5. `versions/` 아래의 과거 버전은 수정하지 않는 **불변 스냅샷(Immutable Snapshot)** 으로 보존한다.
6. 문서 버전이 올라가도 과거 Runtime/Evidence/CLEAR 상태를 자동 변경하지 않는다.
7. 공식 Mission PDF / Evaluation / 제공 파일이 템플릿보다 항상 우선한다.

## 버전 번호

Semantic Versioning 원칙을 단순화하여 사용한다.

- **MAJOR**: 수행 구조 자체가 크게 변경됨
- **MINOR**: Gate/검증/평가 흐름에 의미 있는 단계가 추가·개선됨
- **PATCH**: 문구, 체크리스트, 링크, 표현 오류 등 비구조적 수정

예:

```text
v1.0.0  최초 안정 표준
v1.1.0  다음 Mission에서 검증된 개선 단계 추가
v1.1.1  설명·링크·오탈자 보정
v2.0.0  전체 수행 모델을 재설계
```

## 적용 단위

템플릿 변경은 다음 순서로 적용한다.

```text
Canonical Template
→ 현재 Active Mission
→ Runtime Verification
→ Evidence
→ Evaluation Review
→ 다음 Active Mission
```

15개 Mission 전체를 기준 변경만으로 일괄 재작성하지 않는다.

## 승격 조건

NEXT 후보를 새 Stable Version으로 승격하려면 최소한 다음을 확인한다.

- 실제 Active Mission에서 사용했는가?
- 실행 시간을 줄이거나 오류를 줄였는가?
- Requirement → Verification → Evidence 연결이 더 명확해졌는가?
- 입문자가 현재 위치를 더 쉽게 이해하는가?
- 기존 공식 요구를 축소하거나 왜곡하지 않는가?
- Secret / 비용 / 파괴적 작업 위험을 증가시키지 않는가?
- 사용자가 자기 말로 설명하는 데 도움이 되는가?

조건을 만족하면 새 버전으로 승격하고 `CHANGELOG.md`에 이유를 기록한다.
