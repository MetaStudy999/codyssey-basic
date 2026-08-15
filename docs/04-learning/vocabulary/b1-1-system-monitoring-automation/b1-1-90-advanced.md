# B1-1 Advanced — Optional Deepening

**역할:** B1-1 필수 통과 범위를 넘는 선택 심화  
**원칙:** 필수 요구사항과 혼동하지 않는다. 현재 미션 수행·평가를 지연시키면서까지 먼저 학습하지 않는다.

---

## 1. Advanced 용어

- systemd (System and Service Manager)
- systemd 서비스 유닛 (systemd Service Unit)
- systemd 타이머 (systemd Timer)
- 저널 데몬 (systemd-journald)
- 시스템 로그 프로토콜 (Syslog Protocol)
- 제어 그룹 (Control Groups, cgroups)
- SELinux (Security-Enhanced Linux)
- AppArmor (Application Armor)
- 메트릭 (Metric)
- 시계열 데이터 (Time-Series Data)
- Prometheus
- Grafana

---

## 2. systemd

systemd는 Linux에서 서비스·socket·timer·runtime directory 등 여러 운영 객체를 관리하는 대표적인 service manager다.

B1-1 필수 요구는 systemd 자체를 깊게 구현하는 것이 아니다. 다만 현재 Ubuntu 24.04 실습에서 SSH의 `ssh.service`, `ssh.socket`, `RuntimeDirectory=sshd` 같은 동작을 이해하는 데 도움이 된다.

선택 확인:

```bash
systemctl status ssh.service --no-pager || true
systemctl status ssh.socket --no-pager || true
systemctl cat ssh.service
systemctl cat ssh.socket
```

### systemd Timer

cron과 비슷하게 정기 작업을 실행할 수 있지만 B1-1 원본은 cron/crontab 학습을 요구하므로 systemd timer로 임의 대체하지 않는다.

---

## 3. journald / Syslog

B1-1은 `/var/log/agent-app/monitor.log` 누적을 핵심으로 다룬다.

심화에서는 Linux 로그가 다음처럼 여러 경로로 관리될 수 있음을 이해한다.

```text
Application file log
systemd-journald
Syslog daemon
Central log collector
```

이 내용은 현재 `monitor.log` 요구를 대체하지 않는다.

---

## 4. cgroups

Control Groups는 process 그룹의 CPU·Memory 등 resource 사용을 제한·관찰하는 Linux 기능이다.

B1-1에서는 CPU/MEM/DISK를 직접 수집하고 warning을 발생시키는 수준이 필수다. cgroups는 다음 단계에서:

- process resource limit
- container resource management
- service isolation

을 이해할 때 유용하다.

---

## 5. SELinux / AppArmor

기본 Unix permission과 ACL 외에 Mandatory Access Control 계층을 추가할 수 있는 보안 기술이다.

B1-1에서 `Permission denied`가 발생했을 때 chmod/ACL만으로 설명되지 않는 환경에서는 이런 보안 계층이 추가 원인일 수 있다.

하지만 원본 미션이 필수로 요구하지 않으므로 현재 기본 권한 실습을 먼저 완성한다.

---

## 6. Metric / Time-Series Data

B1-1의 CPU·MEM·DISK 로그는 장기적으로 metric/time-series 관점으로 확장할 수 있다.

```text
Timestamp + Metric Name + Metric Value
```

예:

```text
2026-08-15T09:00:00 CPU 12.3
2026-08-15T09:00:00 MEM 41.2
2026-08-15T09:00:00 DISK 63
```

B1-1의 고정 로그 형식은 원본 요구에 맞추고, 별도 심화 프로젝트에서 구조화된 metric 형식을 설계한다.

---

## 7. Prometheus / Grafana

### Prometheus

시스템·애플리케이션 metric을 수집하고 조회하는 monitoring platform으로 확장할 수 있다.

### Grafana

수집된 metric을 dashboard와 graph로 시각화하는 데 사용할 수 있다.

B1-1에서는 Bash + file log + cron + logrotate 흐름을 먼저 이해한다. Prometheus/Grafana를 도입해 필수 요구를 가리는 방식은 피한다.

---

## 8. Advanced 학습 순서

```text
B1-1 필수 Runtime Verified
        ↓
systemd service/socket 이해
        ↓
journald/syslog
        ↓
cgroups / MAC security
        ↓
metric / time-series
        ↓
Prometheus / Grafana
```

---

## 9. 선택 미니 프로젝트

필수 미션과 별도 branch에서 다음을 확장할 수 있다.

1. `monitor.sh` 결과를 구조화된 metric 파일로 추가 저장
2. systemd service로 Agent 실행 관리 실험
3. systemd timer와 cron 차이 비교
4. journald에서 SSH/Agent 관련 로그 추적
5. Prometheus textfile exporter 형식으로 resource metric 변환
6. Grafana에서 CPU/MEM/DISK graph 설계

이 작업들은 **B1-1 필수 PASS와 분리**한다.

---

## 10. STOP RULE

다음 조건이면 Advanced를 중단하고 필수 학습으로 돌아간다.

- SSH `20022` / Root 차단을 아직 설명하지 못함
- User/Group/ACL 권한을 아직 실제로 검증하지 못함
- Agent READY / `15034 LISTEN` Evidence가 없음
- `monitor.sh` 정상/실패 시나리오가 미검증
- cron 실제 log growth가 미검증
- `10MB / 10개` 정책 설명이 불가능

---

## 11. 기억 문장

> **Advanced는 필수 미션을 대신하는 기술이 아니라, 필수 구조를 이해한 뒤 같은 운영 문제를 더 큰 규모에서 푸는 확장 단계다.**

---

[← Review Pack](./b1-1-70-review-pack.md) · [B1-1 Index](./b1-1-00-index.md)
