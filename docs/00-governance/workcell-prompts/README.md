# Mission Workcell Chat Prompts

> 새 ChatGPT 채팅창에서 B1-1~B7-2 Mission Workcell을 한 줄로 시작하기 위한 전용 프롬프트 모음이다.

## 사용법

1. 아래 표에서 해당 Mission의 **한 줄 시작 프롬프트**를 복사한다.
2. 새 채팅창의 첫 메시지로 그대로 보낸다.
3. ChatGPT는 지정된 Mission prompt를 현재 `main`에서 읽는다.
4. prompt가 지시하는 대로 `config/waves/20260808-01.yaml`의 frozen Control Tower baseline을 적용한다.
5. 대표 Repository는 READ ONLY이고, 해당 Mission Repository만 WRITE한다.
6. 종료 시 Mission Repository에 `HANDOFF.md`와 `mission-result.yaml`을 남긴다.

> 이 launcher prompt 파일들은 실행 편의를 위한 현재 `main` 문서다. Mission 요구사항과 Governance 판단은 Active Wave가 지정한 frozen baseline 및 실제 G1 SOURCE 결과를 따른다.

## 한 줄 시작 프롬프트

| Chat | Mission | 한 줄 프롬프트 |
|---:|---|---|
| 01 | B1-1 | `Codyssey Basic B1-1 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b1-1.md를 읽고 그 지시를 그대로 실행하세요.` |
| 02 | B1-2 | `Codyssey Basic B1-2 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b1-2.md를 읽고 그 지시를 그대로 실행하세요.` |
| 03 | B2-1 | `Codyssey Basic B2-1 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b2-1.md를 읽고 그 지시를 그대로 실행하세요.` |
| 04 | B2-2 | `Codyssey Basic B2-2 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b2-2.md를 읽고 그 지시를 그대로 실행하세요.` |
| 05 | B3-1 | `Codyssey Basic B3-1 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b3-1.md를 읽고 그 지시를 그대로 실행하세요.` |
| 06 | B3-2 | `Codyssey Basic B3-2 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b3-2.md를 읽고 그 지시를 그대로 실행하세요.` |
| 07 | B4-1 | `Codyssey Basic B4-1 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b4-1.md를 읽고 그 지시를 그대로 실행하세요.` |
| 08 | B4-2 | `Codyssey Basic B4-2 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b4-2.md를 읽고 그 지시를 그대로 실행하세요.` |
| 09 | B5-1 | `Codyssey Basic B5-1 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b5-1.md를 읽고 그 지시를 그대로 실행하세요.` |
| 10 | B5-2 | `Codyssey Basic B5-2 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b5-2.md를 읽고 그 지시를 그대로 실행하세요.` |
| 11 | B5-3 | `Codyssey Basic B5-3 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b5-3.md를 읽고 그 지시를 그대로 실행하세요.` |
| 12 | B6-1 | `Codyssey Basic B6-1 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b6-1.md를 읽고 그 지시를 그대로 실행하세요.` |
| 13 | B6-2 | `Codyssey Basic B6-2 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b6-2.md를 읽고 그 지시를 그대로 실행하세요.` |
| 14 | B7-1 | `Codyssey Basic B7-1 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b7-1.md를 읽고 그 지시를 그대로 실행하세요.` |
| 15 | B7-2 | `Codyssey Basic B7-2 Workcell을 시작해 주세요. MetaStudy999/codyssey-basic의 docs/00-governance/workcell-prompts/b7-2.md를 읽고 그 지시를 그대로 실행하세요.` |

## 공통 종료 결과

각 Workcell은 다음 결과를 자신의 Mission Repository에 남긴다.

- `MISSION-WORK-PACKET.md`
- Mission 구현/테스트/학습/Evidence
- Mission PR 및 merge 결과
- `HANDOFF.md`
- `mission-result.yaml`

대표 Repository의 `config/missions.yaml`은 Workcell이 수정하지 않는다. 모든 Mission 종료 후 별도의 Serial Integration 단계에서 B1-1부터 하나씩 반영한다.
