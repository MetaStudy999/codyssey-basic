# Codyssey Basic 템플릿 허브(Template Hub)

코디세이 AI/SW 기초과정에서 반복해서 사용하는 공통 템플릿을 관리합니다.

> 원칙: 공통 기준은 이 디렉터리에서 한 번만 관리하고, 각 미션 저장소에는 필요한 링크와 미션별 결과물만 둡니다.
>
> 현재 Mission ID와 Canonical Repository는 [`../CURRENT-MISSION-MAP.md`](../CURRENT-MISSION-MAP.md)를 기준으로 합니다. 템플릿은 번호가 아니라 미션 주제와 실제 요구사항에 맞춰 적용합니다.

## 빠른 시작(Quick Start)

평가 발표자료를 만들려면 다음 경로에서 시작합니다.

1. [`../CURRENT-MISSION-MAP.md`](../CURRENT-MISSION-MAP.md)에서 현재 Mission ID와 Canonical Repository를 확인합니다.
2. [`presentations/README.md`](presentations/README.md)를 엽니다.
3. 실전 발표는 `Codyssey_Mission_Evaluation_Core_22slides.pptx`를 복사해서 시작합니다.
4. 전체 설계 기준이 필요하면 `Codyssey_B1-B7_Mission_Evaluation_Master_Template.pptx`를 참고합니다.
5. 공식 Mission / Evaluation과 실제 증빙 자료(Evidence)에 맞게 필요한 슬라이드만 남깁니다.

## 목차

- [평가 발표 템플릿(Presentation Templates)](presentations/README.md)
- [버전형 미션 실행 템플릿(Versioned Mission Execution Template)](mission-execution/README.md) — CURRENT / NEXT / immutable versions 관리
- [미션 라운드 템플릿(Mission Round Template)](MISSION-ROUND-TEMPLATE.md) — 기존 호환 진입점
- [이중 실행환경 실습 템플릿(Dual Runtime Lab Template)](DUAL-RUNTIME-LAB-TEMPLATE.md)
- [VS Code Remote Linux 설정](vscode-remote-linux-settings.json)

## 운영 원칙

```text
공식 Mission / Evaluation
→ CURRENT-MISSION-MAP에서 현재 Mission ID / Canonical Repository 확인
→ 공통 Template
→ 현재 Mission 내용 적용
→ 실제 실행(Runtime)
→ 검증(Verification)
→ 증빙 자료(Evidence)
→ 평가 발표
```

템플릿이 존재한다는 사실만으로 구현·검증·평가 상태를 PASS 또는 CLEAR로 기록하지 않습니다.


## 버전형 실행 템플릿 운영

현재 안정 버전은 [mission-execution/CURRENT.md](mission-execution/CURRENT.md)에서 확인합니다.

개선사항은 현재 Active Mission에서 실제로 검증한 뒤 [mission-execution/NEXT.md](mission-execution/NEXT.md)에 후보로 기록하고, 충분히 검증된 변경만 새 Stable Version으로 승격합니다.

```text
CURRENT
→ Active Mission 적용
→ 개선 후보 발견
→ NEXT
→ 재검증
→ versions/vX.Y.Z.md
→ CURRENT 갱신
```

기준 변경만을 이유로 모든 Mission Repository를 한 번에 일괄 수정하지 않습니다.
