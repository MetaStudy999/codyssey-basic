# Changelog

## [3.0.0] - 2026-08-16

### Growth OS V3
- 성장 모델을 `CORE → EXPLORE → ADVANCED → PRO → EXPERT`로 확정
- Growth Stage / Status / Priority / Domain을 독립 축으로 분리
- `Master Map + Progressive Repository`, `Folder = Domain, Stage = Metadata` 원칙 확정
- 12개 Competency Axis와 Growth/Skill/Activity/Project/Opportunity Registry 도입

### Canonical Repository
- `docs/00-governance`부터 `docs/12-impact`까지 13개 V3 Domain을 Canonical 구조로 확정
- B1-1~B7-2 15개 Mission Summary를 `docs/02-missions`로 통합
- Learning/Vocabulary 전체 자산을 `docs/03-learning`으로 이관
- Mission Progress를 `docs/01-master-map/mission-progress.md`로 이관
- Completion Gate와 Workcell Status를 Governance로 이관
- Portfolio / Resources / Evaluation Traceability / Mission Dependency를 V3 Domain에 통합

### Dashboard / Automation
- Growth Stage, 12개 Skill Axis, Activity/Project/Opportunity를 Dashboard Layer에 추가
- 기존 Mission G1~G8, 수동 Refresh, 5분 Cooldown 정책 유지
- `sync_progress.py`와 `sync_growth.py`를 분리된 Source of Truth에 연결
- Chromium Browser Smoke와 Live Mission Telemetry 검증 추가
- 삭제된 V1/V2 Legacy Path가 다시 운영 참조로 들어오지 않도록 CI Gate 추가

### Migration / Cleanup
- PR #73: Growth OS V3 Foundation 및 main Cutover
- PR #74: Opportunities / Professional Growth / Advanced Legacy Cleanup
- PR #75: Learning Canonical Migration
- PR #76: Progress Canonical Migration
- PR #77: 남은 Overview / Domains / Architecture / Evaluation / Portfolio / Resources V2 구조 제거
- V3 이전 기준본은 `archive/pre-growth-os-v3`, Git history, PR history에서 추적

### Stable Operation
- active Master Map과 Governance에서는 Migration 과정 대신 현재 Canonical 운영 규칙만 유지
- 단순 과거 감사·이관 자료는 active docs에서 제거하고 Git history를 역사 보존 수단으로 사용
- `scripts/validate_v3.py`를 Cutover 검증기가 아니라 Stable V3 Contract 검증기로 전환

## [1.6.0] - 2026-08-09

### Added
- GitHub Pages에 `Workcell Live Status` 대시보드 추가
- Active Wave ledger에서 `workcell_status`와 `integration_status`를 생성하는 `site/data/workcells.json` 파이프라인 추가
- Workcell 카드에서 Mission Repo, Prompt, checkpoint 문서로 바로 이동 가능

### Changed
- `scripts/sync_progress.py`가 공식 Mission 상태와 병렬 Workcell 상태를 각각 생성하도록 확장
- `config/waves/**` 변경 시 Progress Sync와 GitHub Pages가 자동 갱신되도록 workflow trigger 확장
- Active Wave의 확인된 실제 상태를 정리: B2-1 `COMPLETE/INTEGRATED`, B3-1 `COMPLETE/PENDING`, B4-1 `PARTIAL/PENDING`, B5-2 `COMPLETE/PENDING`

### Policy
- 공식 Mission Progress SSOT는 계속 `config/missions.yaml`
- 병렬 Workcell Live Status SSOT는 Active Wave `config/waves/*.yaml`
- Workcell 완료와 공식 Serial Integration 완료를 웹에서 별도 상태로 표시

## [1.5.0] - 2026-08-09

### Changed
- GitHub Pages 홈을 현재 Control Tower 운영 모델에 맞게 갱신
- Active Wave `20260808-01`, frozen baseline, 병렬 Workcell / 직렬 통합 구조를 첫 화면에 표시
- 7개 Domain 카드에 Mission PASS 및 Gate 통합 진행률 표시
- Mission 카드에 공식 구분, 한국어 제목, 통합 Gate 진행률, 개별 Workcell Prompt 링크 추가
- Progress Summary에 전체 Gate PASS 수와 TODO 상태 추가
- Workcell / Governance 섹션에서 one-line launcher, Starter Packet, Active Wave, Source Discovery, Multi-Agent, Parallel/Serial 규칙으로 바로 이동 가능

### Policy
- 웹의 Mission 진행 상태는 계속 `config/missions.yaml` → `site/data/missions.json` 경로를 Single Source of Truth로 사용
- 개별 Workcell에서 작업 중인 상태는 대표 repo에 Serial Integration된 뒤에만 공식 Mission Progress로 표시

## [1.4.0] - 2026-08-08

### Added
- `docs/00-governance/workcell-prompts/`에 B1-1~B7-2 15개 Mission별 전용 Chat Workcell 실행 프롬프트
- `docs/00-governance/workcell-prompts/README.md`에 새 채팅용 15개 한 줄 launcher

### Changed
- Active Wave `config/waves/20260808-01.yaml`에 각 Workcell의 `prompt` 경로를 추가
- Governance index에서 Mission별 prompt와 one-line launcher를 직접 탐색하도록 연결

### Policy
- Workcell prompt는 현재 `main`에서 읽는 launcher이며, Mission Governance와 Requirement 판단은 Active Wave의 frozen baseline 및 G1 SOURCE 결과를 따른다.
- 한 줄 launcher만 새 채팅에 입력해도 해당 Mission의 전체 수행 규칙을 불러오도록 구성한다.

## [1.3.0] - 2026-08-08

### Added
- `docs/00-governance/work-packets/`에 B1-1~B7-2 15개 Mission별 Starter Work Packet
- `config/waves/20260808-01.yaml` 첫 15-Workcell 병렬 실행 Wave manifest
- `config/waves/README.md` Wave Ledger 운영 규칙

### Changed
- 각 Workcell이 Active Wave에서 baseline SHA와 Mission별 packet/repository를 찾도록 `templates/mission-chat-start.md` 보강
- `AGENTS.md`에 Active Wave와 Mission별 Starter Packet 사용 규칙 추가
- Governance index에서 15개 Work Packet과 Active Wave를 직접 탐색할 수 있도록 연결

### Policy
- Starter Packet의 Mission-derived Scope는 G1 SOURCE 재검증 전까지 확정 Requirement가 아님
- Evaluation은 각 Workcell에서 다시 탐색하며 발견 전 `UNVERIFIED`
- 병렬 Workcell은 대표 Repository를 READ ONLY로 유지하고 자신의 Mission Repository에만 `MISSION-WORK-PACKET.md`를 확정

## [1.2.0] - 2026-08-08

### Added
- `docs/00-governance/parallel-mission-execution.md` 병렬 Mission Workcell / 직렬 대표 통합 운영 규격
- `templates/mission-chat-start.md` 새 Mission 채팅 시작 프롬프트
- `templates/mission-work-packet.md` Mission 실행 계약 템플릿
- `templates/mission-handoff.md` 사람용 Mission Handoff 템플릿
- `templates/mission-result.yaml` 기계 판독용 Mission 결과 계약
- `templates/parallel-wave.yaml` B1-1~B7-2 15개 병렬 Workcell Wave 운영 Ledger

### Changed
- 개별 Mission Repository는 병렬 실행할 수 있고 대표 Repository 상태 반영은 순차 통합하도록 `AGENTS.md` 정책 확장
- 병렬 Workcell에서 대표 Repository를 READ ONLY로 유지하고 동일 Control Tower baseline SHA를 사용하도록 규정
- Source Discovery·Work Packet·Dependency-Gated Build·Handoff 기반의 실행/통합 경계를 명확화

## [1.1.0] - 2026-08-08

### Added
- `config/missions.yaml` 기반 G1~G8 미션 진행 상태 메타데이터
- `scripts/sync_progress.py` 진행 현황 생성기와 `--check` 검증 모드
- GitHub Pages용 `site/data/missions.json` 자동 생성
- `Sync Mission Progress` GitHub Actions workflow

### Changed
- README, Progress Dashboard, GitHub Pages가 하나의 진행 상태 원본을 사용하도록 연결
- GitHub Pages의 하드코딩된 `TODO` 표시를 JSON 기반 동적 렌더링으로 교체

## [1.0.0] - 2026-08-07

### Added
- 대표 저장소를 Basic 과정 Control Tower 구조로 정의
- 7개 기술 대분류 기반 정보구조
- B1-1 ~ B7-2 전체 실행 단위 인덱스
- 수행 상태와 8단계 Completion Gate
- FAST TRACK / LEARNING TRACK
- Portfolio, Resources, Opportunities, Professional Growth, Advanced 구조
- GitHub Pages 포트폴리오 기본 골격
- `missions.yaml`, `resources.yaml`, `opportunities.yaml` 데이터 원본

### Policy
- 필수/선택 여부로 폴더를 분리하지 않음
- 필수/선택은 메타데이터로만 관리
- 개별 미션 소스코드는 대표 저장소에 복제하지 않음
- v1.0 구조는 실제 수행 중 필요가 확인될 때만 변경
