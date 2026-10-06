# B1-1 — 쉽게 보는 실행·검토 요약

## 한 문장

**B1-1은 먼저 필수 과제(CORE)를 완료하고, 공식 보너스 4개(BONUS)를 별도로 새 검증한 뒤, APOS 자체 품질 보완(APOS-ENHANCEMENT)을 추가하는 구조로 수행합니다.**

## 1. 어디서 관리하고 어디서 작업하나요?

| 구분 | 위치 | 역할 |
|---|---|---|
| 중앙관리 | `codyssey-basic/training/apos/round-03/B1-1/` | 계획·상태·계약·검토 |
| 실제 작업 | `codyssey-basic-web-portfolio/training/round-03-apos/` | 실제 HTML/CSS/JS·테스트·증빙 |
| 과거 자료 | `training/round-02-clear/` | 참고만 사용 |

## 2. 세 가지 작업 구분

| 구분 | 뜻 | 공식 CLEAR 영향 |
|---|---|---|
| **CORE** | 공식 필수 과제 | 예 |
| **BONUS** | 공식 보너스 과제 | 필수 CORE와 분리 |
| **APOS-ENHANCEMENT** | APOS가 품질 향상을 위해 추가한 검증·문서·보안·발표 보완 | 공식 요구와 분리 |

## 3. 공식 보너스 4개

| 번호 | 보너스 | Round 03에서 확인할 것 |
|---|---|---|
| 1 | 언어별 프로젝트 필터 | 버튼 클릭 → 목록·개수 변경 |
| 2 | Hero 타이핑 효과 | 최초 로드 타이핑 + Reduced Motion |
| 3 | Formspree 실제 전송 | 실제 전송 + 성공/실패 UI + 외부 연동 |
| 4 | 시스템 다크 모드 감지 | System/Light/Dark + 시스템 테마 반응 |

**중요:** Round 02에서 이미 PASS였어도 Round 03에서는 새로 실행하고 새 Evidence를 남깁니다.

## 4. 실제 수행 순서

```text
① 사전점검
↓
② 공식 요구사항·평가 확인
↓
③ CORE 최소 통과 구현
↓
④ CORE 테스트·실행 검증
↓
⑤ BONUS 4개 새 실행·검증
↓
⑥ APOS 품질 보완
↓
⑦ Evidence 정리
↓
⑧ 평가 답변·발표 준비
↓
⑨ QA_SEC 독립 검증
↓
⑩ CLEAR
```

## 5. 제가 확인하면 되는 핵심 체크표

### 시작 전
- [ ] PR #96 QA_SEC 검증 완료
- [ ] Naming/Directory Standard 확정
- [ ] B1-1 공식 PDF 다시 확인
- [ ] 공식 Evaluation 다시 확인
- [ ] 실제 iMac/OrbStack/Ubuntu 환경 확인
- [ ] Owner Start Approval

### CORE
- [ ] 필수 요구사항 표 작성
- [ ] HTML 구현
- [ ] CSS 구현
- [ ] JavaScript 구현
- [ ] Desktop 확인
- [ ] Mobile 확인
- [ ] 오류/Negative Test
- [ ] Secret 없음

### BONUS
- [ ] BONUS-01 언어별 프로젝트 필터
- [ ] BONUS-02 Hero 타이핑 효과
- [ ] BONUS-03 Formspree 실제 전송
- [ ] BONUS-04 시스템 다크 모드 감지

### 종료 전
- [ ] 새 Round 03 Evidence
- [ ] Tested Commit SHA 일치
- [ ] 평가 10초/30초/1분 답변
- [ ] 발표자료 = 실제 구현
- [ ] QA_SEC PASS

## 6. 상태 의미

```text
NOT_STARTED
아직 시작 안 함

PREFLIGHT_READY
시작 준비만 완료

IN_PROGRESS
실제 구현 시작

EVALUATION_READY
구현·검증 완료, 평가 준비

CLEAR
QA까지 통과한 최종 완료
```

현재 B1-1 상태는 **NOT_STARTED**입니다.
