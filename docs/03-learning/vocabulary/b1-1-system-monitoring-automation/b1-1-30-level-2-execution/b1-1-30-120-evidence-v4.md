---
mission: B1-1
level: 2
order: 120
unit: Evidence and V4
lifecycle: APPLY
gate: V4
visual_learning: DEFERRED
---
# B1-1 — Evidence & V4

## 한 줄 설명
설정 파일이 존재한다는 사실이 아니라 실제 사용자·권한·소켓·방화벽·Agent·monitor·cron·logrotate 상태를 Evidence로 묶어 V4를 판정한다.

## 핵심 관계
```text
Expected ≠ Actual
Config ≠ Runtime
Document ≠ PASS
Actual command/log output → Evidence
```

최소 확인 범주:
```text
Users/Groups
SSH effective config + 20022 LISTEN + no 22
Firewall active + 20022/15034
Agent process + READY + 15034 LISTEN
monitor.sh owner/group/mode + exit code + monitor.log
cron entry + actual log growth
logrotate config
```

비밀 키 값은 Evidence에 포함하지 않는다.

## V4 최종 Gate
- [ ] 사용자/그룹을 실제 명령에서 찾을 수 있다.
- [ ] 권한/ACL을 실제 허용·차단 시험까지 검증할 수 있다.
- [ ] SSH 설정과 실제 LISTEN을 따로 확인할 수 있다.
- [ ] UFW 활성 상태와 허용 포트를 확인할 수 있다.
- [ ] 원본 `AGENT_*` 5개와 구현 선택값을 구분할 수 있다.
- [ ] Agent process와 15034 LISTEN을 확인할 수 있다.
- [ ] monitor.sh 정상/실패 종료 코드를 확인할 수 있다.
- [ ] cron 등록이 아니라 실제 로그 증가를 확인할 수 있다.
- [ ] logrotate의 `size 10M`, `rotate 10`을 확인할 수 있다.
- [ ] 실제 실행하지 않은 항목은 `PASS` 대신 `NEEDS-RUNTIME`으로 남긴다.

## 기억 문장
> 바꾸기 전에 확인하고, 한 층씩 변경하고, 곧바로 검증하고, 실패하면 그 층만 복구한 뒤 실제 Evidence를 남긴다.

[← logrotate](./b1-1-30-110-logrotate.md) · [Index](./b1-1-30-000-index.md) · [다음: Level 3 →](../b1-1-40-level-3-principles.md)
