---
mission: B1-1
level: 5
order: 70
unit: cron and Log Lifecycle Evaluation
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# cron / Log Rotation 평가 설명

## cron WHAT

`agent-admin` crontab에서 `monitor.sh`를 매분 실행한다.

## cron PROOF

```bash
sudo -u agent-admin crontab -l
stat /var/log/agent-app/monitor.log
sleep 65
stat /var/log/agent-app/monitor.log
tail -n 5 /var/log/agent-app/monitor.log
```

등록 문자열만으로 자동 실행 성공이라고 판단하지 않는다. 실제 시간이 지난 뒤 로그 증가를 본다.

## Log Rotation WHAT

원본 핵심 정책은 `10MB / 10개`다. 현재 구현은 logrotate로 책임을 분리한다.

```text
monitor.sh → 상태 수집·append
cron       → 반복 실행
logrotate  → 회전·보관·압축
```

## WHY

상태 수집과 로그 수명주기를 분리하면 각각의 책임과 검증 지점이 명확해진다.

## 예상 꼬리질문

- 터미널에서 되는데 cron에서 실패할 수 있는 이유는?
- 회전 후 새 로그에 쓰기가 안 되면 무엇을 보는가?
- 7일 압축/30일 삭제는 필수인가 Bonus인가?

## V5 Gate

- [ ] crontab 존재와 실제 cron 실행을 구분한다.
- [ ] 필수 `10MB/10개`와 Bonus retention을 구분한다.

[← 이전](./b1-1-60-060-resource-monitoring-evaluation.md) · [Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-080-implementation-choices.md)
