# R01 Phase B — Next Actions

현재 목표는 **15개 CORE READY 기준본을 실제 Runtime에서 충돌 없이 순차 실행할 수 있도록 전체 실행 계약을 고정하는 것**입니다.

## 완료

- [x] Phase A Reference Build — 15/15 CORE READY
- [x] Canonical Final Consistency Audit — PASS 15/15
- [x] Cross-Mission Environment Matrix
- [x] Python/Node/DB isolation 1차 감사
- [x] Port/Service 충돌 정책
- [x] Secret/API variable naming 1차 감사
- [x] B7-1 dependency bounded range 교정
- [x] B7-1 `.env.example` 추가
- [x] B1-2 isolated fault-lab 정책 유지
- [x] B6-1 mission-only cloud cleanup 정책 유지

## 즉시 진행 순서

1. **15개 Runtime command / working-directory / verify 경로 통합**
2. **Evidence 최종 경로/파일명 계약 통합**
3. **Mission Dependency Map 최종 확정**
4. **Phase C Preflight — Secret / Port / Process 사전점검 계약**
5. **Phase C Runtime Runbook Freeze**
6. B1-1부터 실제 Runtime CLEAR

## Phase B 완료 Gate

- [x] 각 미션 Golden Path가 Cross-Mission Matrix에 정리됨
- [x] 공통 OS/Shell 전제가 분리됨
- [x] Python/Node/DB 격리 방안 명확
- [x] Local Port 충돌 방지 정책 명확
- [x] Secret 이름과 저장 금지 정책 명확
- [x] GitHub 실제 협업이 필요한 미션 구분
- [x] Cloud/외부 배포 미션 구분
- [ ] Runtime command/verify 경로 한 장 통합
- [ ] Runtime Evidence 위치/이름 규칙 통합
- [ ] Mission dependency/reuse map 최종 확정
- [ ] Phase C 실제 실행 순서 Runbook 확정
- [ ] Runtime 이전 BLOCKER 0 / MAJOR 0 최종 확인

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
