# Workcell Status Snapshots

이 디렉터리는 병렬 Mission Workcell의 운영 상태·검증 메모를 보존한다.

## 역할 분리

- 공식 Mission 상태 Source of Truth: `config/missions.yaml`
- 병렬 Wave/Workcell Ledger: `config/waves/*.yaml`
- Workcell 상태 상세 문서: 이 디렉터리
- 생성 Dashboard Payload: `site/data/workcells.json`

Workcell 상태 문서는 공식 Mission 상태를 자동 승격하지 않는다. 실제 Handoff와 Serial Integration 검증 후에만 `config/missions.yaml`을 갱신한다.

## 현재 보존 문서

- [B3-1 Workcell Status](./b3-1.md)
- [B4-1 Workcell Status](./b4-1.md)
- [B5-2 Workcell Status](./b5-2.md)

새 상태 문서가 필요할 때는 `config/waves/*.yaml`의 `status_doc` 필드도 함께 연결한다.
