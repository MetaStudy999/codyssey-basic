# Training Rounds

이 문서는 Codyssey Basic의 장기 훈련 차수(Round)를 **기초 완주 → 재구축 → 디버깅/운영 → 통합 → 전문화 → 외부 기여**로 확장하는 로드맵입니다.

## 한눈에 보기(At a Glance)

현재 활성 Round는 **R01 — CLEAR**입니다. 다음 Round를 미리 수행하지 않고, 현재 Round를 검증 가능한 상태로 완료한 뒤 다음 단계로 이동합니다.

```text
FOUNDATION
R01 CLEAR → R02 REBUILD
        ↓
ENGINEERING
R03 DEBUG & TEST → R04 HARDEN → R05 PRODUCTION
        ↓
ADVANCED
R06 INTEGRATE → R07 ADVANCED BRIDGE
        ↓
PROFESSIONAL
R08 SPECIALIZE → R09 CHALLENGE → R10 CREATE
        ↓
EXPERT TRACK
R11 DEEP MASTERY → R12 ARCHITECT → R13 CONTRIBUTE → R14 EXPERT VALIDATION
        ↓
IMPACT CYCLE
```

현재 실제 실행은 [NEXT-ACTIONS.md](training/round-01-clear/NEXT-ACTIONS.md)와 [PROGRESS.md](PROGRESS.md)를 확인합니다.

## 📑 목차

- [운영 원칙](#principles)
- [Phase 1 — FOUNDATION](#phase-1)
- [Phase 2 — ENGINEERING](#phase-2)
- [Phase 3 — ADVANCED](#phase-3)
- [Phase 4 — PROFESSIONAL](#phase-4)
- [Phase 5 — EXPERT TRACK](#phase-5)
- [Expert 이후 — Impact Cycle](#impact-cycle)
- [권장 범위 축소](#scope-reduction)

---

<a id="principles"></a>
## 운영 원칙

- **현재 Round 하나만 활성화**합니다.
- 다음 Round의 실제 폴더는 해당 Round를 시작할 때 생성합니다.
- 차수가 올라갈수록 미션 수는 줄이고 독립성·난이도·깊이는 높입니다.
- Round 완료는 횟수가 아니라 검증된 역량으로 판정합니다.
- 기준(Standard)은 현재 Round에서 학습자의 실패·오판을 줄이는 데 사용하고, 미래 Round의 과도한 설계로 현재 실행을 지연시키지 않습니다.

<a id="phase-1"></a>
## Phase 1 — FOUNDATION

### R01 — CLEAR
입문자가 상세 가이드를 따라 필수 → 선택 전체 미션을 완료합니다.

### R02 — REBUILD
완성본 의존도를 줄이고 요구사항을 보고 다시 구축합니다.

<a id="phase-2"></a>
## Phase 2 — ENGINEERING

### R03 — DEBUG & TEST
오류를 재현하고 원인을 찾으며 자동/수동 검증 능력을 훈련합니다.

### R04 — HARDEN
리팩터링, 보안, 성능, 신뢰성, 유지보수성을 높입니다.

### R05 — PRODUCTION
배포, 환경, Secret, CI/CD, 모니터링, 로그, 백업·복구 등 운영 역량을 훈련합니다.

<a id="phase-3"></a>
## Phase 3 — ADVANCED

### R06 — INTEGRATE
Web, Backend, DB, Cloud, AI 등 여러 기술을 하나의 시스템으로 연결합니다.

### R07 — ADVANCED BRIDGE
가이드 없이 문제를 분석하고 설계·구현·검증할 수 있는지 확인합니다. 완료 시 `ADVANCED READY` Gate를 검토합니다.

<a id="phase-4"></a>
## Phase 4 — PROFESSIONAL

### R08 — SPECIALIZE
주 전문 분야를 선택해 깊이를 높입니다.

### R09 — CHALLENGE
해커톤, 경진대회, 공모전, OSS, 외부 프로젝트 등 외부 문제를 해결합니다.

### R10 — CREATE
문제를 직접 정의하고 독립 프로젝트를 설계·제작·공개합니다.

<a id="phase-5"></a>
## Phase 5 — EXPERT TRACK

### R11 — DEEP MASTERY
전문 분야의 내부 원리, 대안, Benchmark, Failure Mode, Trade-off를 깊게 다룹니다.

### R12 — ARCHITECT
요구사항에서 시스템 설계, 기술 선택, 보안·성능·비용·확장성 판단까지 수행합니다.

### R13 — CONTRIBUTE
연구, OSS, 교육, 기술 문서, 커뮤니티 등 외부 생태계에 검증 가능한 기여를 남깁니다.

### R14 — EXPERT VALIDATION
독립 문제 해결, Production, Architecture, Contribution, 반복 성과를 외부 Evidence로 검증합니다. R14 수행만으로 Expert를 자동 부여하지 않습니다.

<a id="impact-cycle"></a>
## Expert 이후 — Impact Cycle

- **IC01 — Principal Practice**: 대형·복합 시스템의 기술 책임
- **IC02 — Field Leadership**: 팀·사람·기술 방향 리딩
- **IC03 — Original Contribution**: 새로운 지식·기술·방법 창출
- **IC04 — Ecosystem Building**: 플랫폼·커뮤니티·생태계 구축
- **IC05 — Impact**: 산업·연구·사업·사회에 측정 가능한 결과
- **IC06 — Stewardship**: 사람·지식·시스템이 지속되도록 만드는 단계

`IC`는 **Impact Cycle**을 의미합니다. Expert 이후에는 Codyssey 미션을 반복하기보다 대표 프로젝트·연구·OSS·조직·제품 단위로 운영합니다.

<a id="scope-reduction"></a>
## 권장 범위 축소

| Round | 권장 대상 |
|---|---|
| R01 | 전체 15개 |
| R02 | 약 8~10개 대표/취약 미션 |
| R03 | 약 6~8개 |
| R04 | 약 4~6개 |
| R05 | 약 3~5개 |
| R06 | 약 2~3개 통합 프로젝트 |
| R07 | 약 1~2개 독립 프로젝트 |
| R08~R10 | 전문 프로젝트 중심 |
| R11~R14 | 전문 분야 1개 중심 |
