# 00. Governance

과정 전체의 기준과 변경을 관리한다.

## 핵심 원칙

1. Mission PDF와 공식 Evaluation이 최우선이다.
2. 외부 참고자료는 공식 요구사항을 변경하지 않는다.
3. 필수/선택은 폴더 구조가 아니라 메타데이터다.
4. 실제 검증되지 않은 결과를 PASS로 표시하지 않는다.
5. v1.0 구조 변경은 실제 필요가 확인된 경우에만 수행한다.
6. Mission/Evaluation Source는 파일 존재 여부뿐 아니라 실제 내용 유효성을 확인한 뒤 사용한다.
7. 개별 Mission 실행은 병렬화할 수 있지만 대표 Repository의 상태 통합은 한 번에 하나씩 수행한다.

## Source of Truth

Mission PDF → Mission Markdown → Evaluation → 공식 운영자료 → 요구사항/증빙 매핑 → README → 학습문서 → 코드 → 테스트 → 보고서 → Evidence

상위 Source가 없거나 비어 있거나 읽을 수 없을 때는 하위 Source로 내용을 추정 복원하지 않는다. 확인 가능한 범위만 사용하고 Source Gap을 기록한다.

## Source Discovery & Fallback

- [Source Discovery & Fallback Protocol](./source-discovery-fallback-protocol.md)
  - PDF / Markdown / 기타 Source 탐색
  - `VALID / PARTIAL / EMPTY / MISSING / UNREADABLE / DUPLICATE / CONFLICT / HISTORICAL / UNVERIFIED` 상태 분류
  - `FULL SOURCE / MISSION-LED / EVALUATION-LED / PARTIAL SOURCE / SOURCE GAP / SOURCE CONFLICT` 적응형 수행 모드
  - Source Confidence와 Requirement Provenance
  - 자료가 부족해도 안전하게 계속할 수 있는 작업과 금지되는 추정 작업 구분

## Multi-Agent Mission Engineering

- [Multi-Agent Mission Engineering Playbook](./multi-agent-mission-engineering.md)
  - Prompt Engineering
  - Context Engineering
  - Harness Engineering
  - Loop Engineering
  - Fusion Engineering
  - ChatGPT / Codex / GitHub Copilot / Claude / Gemini / Grok 역할 분리와 선택적 Agent Routing

## Parallel Mission Execution

- [Parallel Mission Execution & Serial Integration](./parallel-mission-execution.md)
  - B1-1~B7-2를 15개 독립 Chat Workcell에서 병렬 실행
  - 모든 Workcell이 동일 Control Tower baseline SHA 사용
  - 병렬 실행 중 대표 Repository는 READ ONLY
  - Source Discovery와 Mission Work Packet 우선 작성
  - Dependency-Gated Build
  - `HANDOFF.md` + `mission-result.yaml` 표준 결과 전달
  - 대표 Repository는 B1-1 → B7-2 순으로 직렬 통합
  - 진행 상태는 `config/missions.yaml`만 수정

### Mission Work Packets

- [B1-1~B7-2 Starter Packet Index](./work-packets/README.md)
  - 15개 Mission별 사전 수행내역
  - Mission-specific TOC
  - G1~G8 실행 체크포인트
  - Runtime/Evidence 계획
  - 각 Workcell이 G1에서 실제 Source와 재대조 후 `MISSION-WORK-PACKET.md`로 확정
- Active Wave: `config/waves/20260808-01.yaml`
  - Mission → Repository → Starter Packet → Workcell Prompt 매핑
  - 공통 Control Tower baseline SHA
  - Workcell 상태와 Serial Integration 순서

### Mission Workcell Chat Prompts

- [B1-1~B7-2 One-line Launcher & Prompt Index](./workcell-prompts/README.md)
  - 15개 Mission별 전용 실행 프롬프트
  - 새 채팅창에 넣는 한 줄 launcher 제공
  - launcher는 현재 `main`에서 읽고, 실제 Governance는 Active Wave의 frozen baseline을 적용

### 병렬 실행 템플릿

- `templates/mission-chat-start.md` — 새 Mission 채팅 시작 프롬프트 템플릿
- `templates/mission-work-packet.md` — Workcell 실행 계약
- `templates/mission-handoff.md` — 사람용 Handoff
- `templates/mission-result.yaml` — 기계 판독용 결과 계약
- `templates/parallel-wave.yaml` — 15개 Workcell Wave 운영 Ledger

## 변경 분류

- 현재 미션에 필수: 해당 미션 Repository
- 학습자료: `08-resources`
- 대외활동: `09-opportunities`
- 전문가 역량: `10-professional-growth`
- 고도화 기술: `11-advanced`
