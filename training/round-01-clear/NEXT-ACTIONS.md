# R01 Phase A — Next Actions

현재 목표는 Runtime을 시작하는 것이 아니라 **15개 미션의 Reference Complete Version을 먼저 닫는 것**입니다.

## 즉시 진행 순서

1. B5-2 — FastAPI CRUD Reference Complete
2. B5-3 — FastAPI 인증/인가/연관관계 Reference Complete
3. B7-2 — Advanced AI Chatbot Project B Reference Complete
4. B4-2 — React SPA CRUD Reference 마감
5. B1-1 — Runtime Beginner Guide 전체 Step 마감 + 자체감사
6. B3-2 / B4-1 / B5-1 / B6-1 — 기존 Advanced Reference 자체감사
7. B1-2 / B2-1 / B2-2 / B3-1 / B6-2 / B7-1 — canonical 정합성 최종 감사
8. Phase B — Cross-Mission Audit
9. Phase C — B1-1부터 Runtime CLEAR

## 공통 미션별 Reference 완료 Gate

- [ ] 공식 Mission/Evaluation 분석
- [ ] 필수 결과물/기능/제약조건/증빙 분리
- [ ] Reference Complete Path
- [ ] 최소 충분 기준 구현
- [ ] 자동검증 가능한 테스트/verify
- [ ] 실제 환경 전용 항목 NEEDS-RUNTIME 분리
- [ ] Requirement Mapping
- [ ] Evaluation Q&A
- [ ] Evidence Guide
- [ ] Beginner Guide
- [ ] Checklist
- [ ] Secret scan 정책
- [ ] 자체검토 — BLOCKER 0 / MAJOR 0 목표
- [ ] 허위 Runtime PASS 없음

## Runtime 규칙

Phase A에서 코드와 문서를 준비해도 다음은 완료 처리하지 않습니다.

- 실제 SSH/Firewall/ACL
- 실제 브라우저 UI
- 실제 외부 배포 URL
- 실제 Cloud 리소스
- 실제 AI API Key와 Provider 호출
- 실제 팀 PR/Review/Branch Protection
- 실제 Evidence

이 항목은 Phase C에서 사용자가 직접 수행·확인한 결과만 PASS/CLEAR에 사용합니다.
