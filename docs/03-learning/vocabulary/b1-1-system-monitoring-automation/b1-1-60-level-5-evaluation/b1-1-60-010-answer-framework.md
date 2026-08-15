---
mission: B1-1
level: 5
order: 10
unit: Evaluation Answer Framework
lifecycle: INTEGRATE
gate: V5
visual_learning: DEFERRED
---

# 평가 답변 공식 — WHAT / WHY / HOW / PROOF / LIMIT

## 한 줄 설명

평가 답변은 `했습니다`가 아니라 **무엇을, 왜, 어떻게 했고, 무엇으로 증명했으며, 어디까지가 검증 범위인지** 말하는 구조다.

## 답변 공식

```text
WHAT  무엇을 구현했는가?
WHY   왜 그렇게 설계했는가?
HOW   어떤 파일·명령·코드로 구현했는가?
PROOF 무엇으로 실제 동작을 확인했는가?
LIMIT 환경 차이·미확보 Evidence는 무엇인가?
```

## B1-1 예시

```text
WHAT  SSH를 20022로 변경하고 Root 원격 로그인을 차단했습니다.
WHY   미션 요구와 최소 권한 원칙을 충족하기 위해서입니다.
HOW   sshd 설정에서 Port 20022와 PermitRootLogin no를 적용했습니다.
PROOF sshd -T와 ss -lntp로 해석값과 LISTEN 상태를 확인합니다.
LIMIT Ubuntu 24.04의 ssh.socket 동작은 현재 실습 환경의 구현 차이입니다.
```

## 초미니 확인

`Firewall 20022/15034`를 같은 5문장 틀로 설명해 본다.

## V5 Gate

- [ ] WHAT과 PROOF를 구분할 수 있다.
- [ ] 학습 문서 존재를 Runtime PASS로 말하지 않는다.
- [ ] 구현 선택과 원본 필수 요구를 구분한다.

[Index](./b1-1-60-000-index.md) · [다음 →](./b1-1-60-020-ssh-firewall-evaluation.md)
