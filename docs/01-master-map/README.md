# Codyssey Developer Growth OS — Master Map

이 디렉터리는 V3의 전체 성장 지도, 현재 위치, Migration, Validation을 관리한다.

## 성장 단계

`CORE → EXPLORE → ADVANCED → PRO → EXPERT`

EXPERT 이후에는 단일 서열이 아니라 전문 경로로 분기하고 최종적으로 IMPACT를 지향한다.

## 핵심 지도

- `growth-map.md` — 전체 성장 단계와 전문 경로
- `current-state.md` — Config에서 생성되는 현재 Growth/Registry 상태
- `mission-dependency-map.md` — Mission 선후관계와 운영상 권장 Dependency
- `growth-routing.md` — 기존 Professional Growth/Advanced 내용을 V3 Domain으로 보내는 기준
- `repository-map.md` — 미래 논리 Repo 구조와 점진 확장 원칙

## Migration

- `migration-plan.md` — 기존 구조에서 V3로 안전하게 전환하는 계획
- `migration-matrix.md` — 기존 자료의 KEEP/MERGE/REWRITE/ARCHIVE/DROP 판정
- `legacy-path-map.md` — Old Path → V3 Target 대응표와 제거 순서
- `legacy-reference-report.md` — Cleanup 후보 Old Path의 실제 참조 Scan과 차단/비차단 판정

## Dashboard / Validation

- `dashboard-v3.md` — Growth/Mission/Skill/Activity 계층 Dashboard 설계
- `validation-plan.md` — Pre-Cutover / Post-Cutover 검증 Gate
- `scripts/validate_v3.py` — V3 구조/링크/자동생성/Dashboard Wiring 검증기
- `scripts/browser_smoke.py` — Chromium Dashboard / Live Telemetry Smoke Test
- `scripts/scan_legacy_refs.py` — Legacy Cleanup 전 Reference Scanner

## Audit 기록

구조 재설계 과정에서 기존 영역을 즉시 삭제하지 않고 역할을 분석한 Audit 문서를 보존한다.

- Governance
- Overview / Templates
- Domains / Missions
- Progress / Automation
- Learning
- Architecture / Evaluation / Portfolio / Resources
- Opportunities / Professional Growth / Advanced

Audit는 과거 구조를 그대로 유지하기 위한 문서가 아니라 **왜 V3 Target으로 이동·통합·분해했는지 설명하는 Migration Evidence**다.

## 읽는 법

1. Growth Stage는 장기 성장 수준을 의미한다.
2. Mission Gate는 공식 Mission 수행 위치를 의미한다.
3. Skill Level은 특정 역량의 Evidence 수준을 의미한다.
4. Activity/Project Status는 실제 작업의 진행 상태를 의미한다.
5. Opportunity Availability는 외부 기회 자체의 상태를 의미한다.
6. Priority는 수행 중요도를 의미한다.
7. Domain은 Mission, Learning, Community, Research 등 활동의 성격을 의미한다.
8. Cutover Readiness와 Legacy Deletion Readiness는 별도 Gate로 판단한다.

이 축들을 분리하여 README, Config, Dashboard, 자동화가 동일한 의미를 사용하도록 한다.
