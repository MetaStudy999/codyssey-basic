# Detailed Audit — docs/02-domains → docs/02-missions

현재 `docs/02-domains`는 7개 기술 대분류 아래에 B1-1~B7-2 Mission 요약 문서를 두고 있다. 내용 자체는 V3에서도 핵심 자산이지만, 폴더명이 `Domain`만 강조하여 **Mission Control Tower의 중심 엔트리**라는 역할이 덜 드러난다.

## 결론

- 콘텐츠: **KEEP + REWRITE**
- 구조: **RENAME/MIGRATE to `02-missions`**
- 기술 Domain 정보: 각 B 그룹의 Metadata/README로 유지
- Mission별 문서: 개별 Mission Repository의 Canonical 문서와 중복되지 않도록 Control Tower 요약/연결 역할로 한정

## Current Structure

```text
02-domains/
├── 01-linux-os/
│   ├── b1-1-system-monitor.md
│   └── b1-2-linux-troubleshooting.md
├── 02-python-git/
│   ├── b2-1-budget-cli.md
│   └── b2-2-git-collaboration.md
├── 03-data-structures-algorithms/
│   ├── b3-1-mini-redis.md
│   └── b3-2-mini-git.md
├── 04-web-frontend/
│   ├── b4-1-portfolio.md
│   └── b4-2-react-spa.md
├── 05-database-backend/
│   ├── b5-1-database-design.md
│   ├── b5-1-evaluation-guide.md
│   ├── b5-2-fastapi-crud.md
│   └── b5-3-auth-relations.md
├── 06-cloud-ai-api/
│   ├── b6-1-cloud-deployment.md
│   └── b6-2-ai-git-assistant.md
└── 07-term-project/
    ├── b7-1-web-ai-chatbot.md
    └── b7-2-advanced-ai-chatbot.md
```

## V3 Target

```text
02-missions/
├── README.md
├── b1-linux-os/
│   ├── README.md
│   ├── b1-1.md
│   └── b1-2.md
├── b2-python-git/
│   ├── README.md
│   ├── b2-1.md
│   └── b2-2.md
├── b3-data-structures-algorithms/
│   ├── README.md
│   ├── b3-1.md
│   └── b3-2.md
├── b4-web-frontend/
│   ├── README.md
│   ├── b4-1.md
│   └── b4-2.md
├── b5-database-backend/
│   ├── README.md
│   ├── b5-1.md
│   ├── b5-2.md
│   └── b5-3.md
├── b6-cloud-ai-api/
│   ├── README.md
│   ├── b6-1.md
│   └── b6-2.md
└── b7-term-project/
    ├── README.md
    ├── b7-1.md
    └── b7-2.md
```

## Naming Rule

Mission 파일명은 Control Tower에서 ID 중심으로 단순화한다.

```text
b5-2.md
```

문서 내부 Metadata/Heading에 정식 제목과 Repository URL을 기록한다. 파일명에 긴 구현 이름을 반복하지 않는다.

## Mission Summary Contract

각 Control Tower Mission 문서는 실제 구현 문서 전체를 복제하지 않는다. 다음 역할만 가진다.

```text
# Bx-y — Mission Title

Official Requirement
Repository
Growth Stage
Status / Gate
Prerequisites / Recommended Dependencies
Core Terms
Core Concepts
Architecture Summary
Evaluation Summary
Evidence Links
Learning Links
Explore / Advanced / Pro Extensions
Project Lineage
```

상세 Source, 코드, 테스트, Evidence 원본은 개별 Mission Repository에 둔다.

## Special Case — Evaluation Documents

현재 `b5-1-evaluation-guide.md`처럼 Mission 옆에 별도 Evaluation 문서가 존재한다.

V3에서는 다음 우선순위로 정리한다.

1. Evaluation이 Mission 문서의 요약이면 `b5-1.md`에 링크/요약으로 MERGE
2. 독립적 공통 평가 가이드이면 Governance/Templates로 이동
3. 공식 평가 원문이면 Source Registry와 개별 Mission Repo의 Source 위치를 기준으로 참조

중복 평가문서를 Mission 폴더마다 무제한 증가시키지 않는다.

## Domain Metadata

`B1`, `B2` 등의 기술 Domain은 제거하지 않는다.

예:

```yaml
id: B5
name: 데이터베이스와 백엔드
name_en: Database & Back-end
missions: [B5-1, B5-2, B5-3]
```

이 정보의 기계 판독 원본은 `config/missions.yaml`을 유지한다.

## Growth Integration

각 Mission 문서에는 다음을 동일하게 적용할 수 있다.

```text
CORE      공식 Mission + 이해 + Evidence
EXPLORE   관련 Study/Seminar/Technology/Opportunity
ADVANCED  Architecture/Test/Security/Performance/Experiment
PRO       Real User/Production/OSS/Research/Industry
EXPERT    Judgment/Trade-off/Leadership
```

단, 모든 Mission이 PRO/EXPERT까지 가야 하는 것은 아니다. 필요한 Mission/Project만 승격한다.

## Migration Method

실제 이동 시:

1. 새 `02-missions` 구조 생성
2. 기존 문서 내용 Audit
3. Mission Summary Contract에 맞춰 새 파일 작성
4. README/사이트/내부 링크 갱신
5. Link Check
6. 기존 `02-domains` 제거

기존 경로를 먼저 삭제하지 않는다.

## Audit Result

- 7개 Domain: **KEEP as metadata/grouping**
- 15개 Mission summary: **KEEP + REWRITE**
- Folder: **MIGRATE `02-domains` → `02-missions`**
- 개별 Mission Repository와 중복 콘텐츠: **줄이고 링크 중심으로 전환**
- `config/missions.yaml`: **KEEP as canonical machine-readable Mission map**
