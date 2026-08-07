# 00. Governance

과정 전체의 기준과 변경을 관리한다.

## 핵심 원칙

1. Mission PDF와 공식 Evaluation이 최우선이다.
2. 외부 참고자료는 공식 요구사항을 변경하지 않는다.
3. 필수/선택은 폴더 구조가 아니라 메타데이터다.
4. 실제 검증되지 않은 결과를 PASS로 표시하지 않는다.
5. v1.0 구조 변경은 실제 필요가 확인된 경우에만 수행한다.
6. Mission/Evaluation Source는 파일 존재 여부뿐 아니라 실제 내용 유효성을 확인한 뒤 사용한다.

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

## 변경 분류

- 현재 미션에 필수: 해당 미션 Repository
- 학습자료: `08-resources`
- 대외활동: `09-opportunities`
- 전문가 역량: `10-professional-growth`
- 고도화 기술: `11-advanced`
