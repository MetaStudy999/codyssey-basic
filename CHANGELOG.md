# Changelog

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
