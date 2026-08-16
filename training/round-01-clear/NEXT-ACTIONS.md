# R01 Phase B — Next Actions

현재 목표는 **실제 Runtime을 바로 시작하는 것이 아니라 15개 CORE READY 기준본을 서로 충돌 없이 실행할 수 있도록 전체 시스템을 정리하는 것**입니다.

## 완료

- [x] Phase A Reference Build — 15/15 CORE READY
- [x] Canonical Final Consistency Audit — PASS 15/15
- [x] B6-2/B7-1 canonical scaffold 및 잘못된 Source 표기 교정

## 즉시 진행 순서

1. Cross-Mission Environment Matrix 작성
2. Python / Node / DB version 및 package isolation 감사
3. Port / local service 충돌 감사
4. Secret / `.env` / API variable naming 감사
5. Git / GitHub collaboration dependency 감사
6. AWS / deployment / cleanup dependency 감사
7. 필수/선택 Mission dependency와 환경 재사용 Map 확정
8. Phase C Runtime Runbook Freeze
9. B1-1부터 실제 Runtime CLEAR

## Phase B 완료 Gate

- [ ] 각 미션 Golden Path가 한 표에 정리됨
- [ ] 공통 OS/Shell 전제가 모순되지 않음
- [ ] Python/Node/DB 버전 충돌 또는 격리 방안 명확
- [ ] Local Port 충돌 방지 정책 명확
- [ ] Secret 이름과 저장 금지 정책 명확
- [ ] GitHub 실제 협업이 필요한 미션 구분
- [ ] Cloud/외부 배포가 필요한 미션 구분
- [ ] Runtime Evidence 위치와 이름 규칙 정리
- [ ] 필수 미션 우선 순서와 선택 미션 연결관계 정리
- [ ] 공통 환경 재사용 범위와 미션별 격리 범위 확정
- [ ] Phase C에서 사용자가 실제 실행할 순서 확정
- [ ] Runtime 이전 BLOCKER 0 / MAJOR 0

## Runtime으로 미루는 항목

Phase B에서도 다음은 PASS 처리하지 않습니다.

- 실제 SSH/Firewall/ACL
- 실제 CLI/REPL 결과
- 실제 Browser UI
- 실제 DB Runtime 결과
- 실제 외부 배포 URL
- 실제 AWS 리소스
- 실제 AI API Key/Provider 호출
- 실제 팀 PR/Review/Branch Protection/commit 수
- 실제 Evidence

이 항목은 Phase C에서 사용자가 직접 수행·확인한 결과만 CLEAR에 사용합니다.
