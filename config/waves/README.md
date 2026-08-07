# Parallel Mission Waves

이 디렉터리는 B1-1~B7-2 병렬 Mission Workcell 실행에서 사용하는 **운영 Wave Ledger**를 보관한다.

## 원칙

- 공식 Mission 진행 상태의 Single Source of Truth는 계속 `config/missions.yaml`이다.
- Wave 파일의 `workcell_status`와 `integration_status`는 병렬 실행 조정용 상태이며 공식 PASS를 의미하지 않는다.
- 각 Wave는 모든 Workcell이 공유할 Control Tower `baseline_sha`를 하나만 사용한다.
- Mission Workcell은 대표 Repository를 READ ONLY로 사용한다.
- Workcell 종료 후 대표 통합은 `integration_order`에 따라 한 Mission씩 수행한다.
- Mission별 Starter Packet은 `docs/00-governance/work-packets/`에서 관리한다.

현재 실행 Wave는 `20260808-01.yaml`을 사용한다.
