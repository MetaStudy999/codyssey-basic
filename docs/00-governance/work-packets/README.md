# Mission Work Packets — Parallel Workcell Starter Set

> B1-1부터 B7-2까지 15개 독립 채팅 Workcell을 같은 기준으로 시작하기 위한 Mission별 사전 수행내역이다.

## 사용 원칙

이 디렉터리의 파일은 **사전 채움 Starter Packet**이다. 최종 Requirement 문서가 아니다.

각 Mission 채팅은 시작 즉시 다음 순서를 따른다.

1. 활성 Wave의 Control Tower `baseline_sha`를 확인한다.
2. Baseline SHA 기준으로 `AGENTS.md`와 Governance 문서를 읽는다.
3. 대표 Repository는 `READ ONLY`, 현재 Mission Repository만 `WRITE`로 유지한다.
4. 현재 Mission Repository와 사용 가능한 Project Source에서 Mission/Evaluation 자료를 다시 탐색한다.
5. PDF/Markdown/빈 파일/누락/충돌 여부를 `Source Discovery & Fallback Protocol`로 판정한다.
6. 이 Starter Packet의 항목을 실제 Source와 Repository 상태에 맞게 수정·확정하여 현재 Mission Repository의 `MISSION-WORK-PACKET.md`로 남긴다.
7. G1 SOURCE가 확정된 뒤 G2 BUILD로 이동한다.
8. 종료 시 `HANDOFF.md`와 `mission-result.yaml`을 현재 Mission Repository에 남긴다.
9. Workcell은 대표 Repository의 `config/missions.yaml`을 수정하지 않는다.
10. 모든 Workcell 종료 후 대표 Repository 반영은 B1-1 → B7-2 순으로 한 번에 하나씩 수행한다.

## Source 주의

- 아래 Packet의 **Mission-derived Scope**는 Control Tower 작성 시점에 제공된 2026 Mission PDF 내용을 기준으로 사전 구조화한 것이다.
- 각 Workcell은 해당 내용을 공식 Requirement로 바로 확정하지 말고 G1 SOURCE에서 실제 접근 가능한 Source와 다시 대조한다.
- Evaluation/평가항목은 각 Mission Repository 또는 제공 Source에서 다시 탐색하며, 발견 전 상태는 `UNVERIFIED`다.
- 빈 Markdown, placeholder, 0-byte 파일은 유효 Source가 아니다.
- Source가 부족하면 Repository Inventory와 기존 코드 분석은 계속하되, 없는 요구사항을 생성하지 않는다.

## 공통 실행 규격

- [Multi-Agent Mission Engineering Playbook](../multi-agent-mission-engineering.md)
- [Source Discovery & Fallback Protocol](../source-discovery-fallback-protocol.md)
- [Parallel Mission Execution & Serial Integration](../parallel-mission-execution.md)
- [Mission Chat Start Prompt](../../../templates/mission-chat-start.md)
- [Mission Work Packet Template](../../../templates/mission-work-packet.md)
- [Mission Handoff Template](../../../templates/mission-handoff.md)
- [Mission Result YAML Template](../../../templates/mission-result.yaml)

## 15개 Mission Packet

| Chat | Mission | Starter Packet | Target Repository |
|---:|---|---|---|
| 01 | B1-1 | [System Monitor](./b1-1.md) | `codyssey-basic-b1-1-system-monitor` |
| 02 | B1-2 | [Linux Troubleshooting](./b1-2.md) | `codyssey-basic-b1-2-linux-troubleshooting` |
| 03 | B2-1 | [Budget CLI](./b2-1.md) | `codyssey-basic-b2-1-budget-tracker` |
| 04 | B2-2 | [Git Team Collaboration](./b2-2.md) | `codyssey-basic-b2-2-git-team-collaboration` |
| 05 | B3-1 | [Mini Redis](./b3-1.md) | `codyssey-basic-b3-1-fast-data-store` |
| 06 | B3-2 | [Mini Git](./b3-2.md) | `codyssey-basic-b3-2-file-change-tracker` |
| 07 | B4-1 | [Portfolio](./b4-1.md) | `codyssey-basic-b4-1-portfolio` |
| 08 | B4-2 | [React SPA](./b4-2.md) | `codyssey-basic-b4-2-interactive-web-app` |
| 09 | B5-1 | [SQL Database](./b5-1.md) | `codyssey-basic-b5-1-database-design` |
| 10 | B5-2 | [FastAPI CRUD](./b5-2.md) | `codyssey-basic-b5-2-fastapi-crud-app` |
| 11 | B5-3 | [FastAPI Auth & Relations](./b5-3.md) | `codyssey-basic-b5-3-fastapi-auth-service` |
| 12 | B6-1 | [Cloud Deployment](./b6-1.md) | `codyssey-basic-b6-1-cloud-deployment` |
| 13 | B6-2 | [AI Git Assistant](./b6-2.md) | `codyssey-basic-b6-2-ai-code-summarizer` |
| 14 | B7-1 | [Web AI Chatbot](./b7-1.md) | `codyssey-basic-b7-1-web-ai-chatbot` |
| 15 | B7-2 | [Advanced AI Chatbot](./b7-2.md) | `codyssey-basic-b7-2-advanced-ai-chatbot` |

## 병렬/의존성 원칙

모든 채팅은 G1 SOURCE, Repository Inventory, Requirement/Evaluation Mapping, TOC, Test/Runtime/Evidence 계획까지 병렬로 진행할 수 있다.

후속 Mission이 선행 Mission의 실제 결과를 재사용해야 할 때만 G2 BUILD 직전에 Dependency를 확인한다. 운영상 권장 연계는 공식 선행 요구사항과 구분한다.

주요 권장 연계:

```text
B4-1 → B4-2
B5-1 → B5-2 → B5-3
B5-3 + B6-1 + B6-2 → B7-1 → B7-2
```

이 연계는 Source가 명시하지 않은 경우 공식 Requirement로 승격하지 않는다.
