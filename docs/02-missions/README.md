# 02. Missions

Codyssey AI/SW Basic의 B1-1~B7-2를 **Mission 중심**으로 관리하는 V3 진입점이다.

이 디렉터리는 개별 Mission Repository의 코드를 복제하지 않는다. Control Tower에서 필요한 공식 구분, Repository, 현재 Gate, 핵심 학습 연결, Evaluation/Evidence 링크, 후속 성장 경로를 요약한다.

## Mission Map

```text
B1 Linux & OS
  ├─ B1-1 System Monitor
  └─ B1-2 Linux Troubleshooting
        ↓
B2 Python & Git
  ├─ B2-1 Budget Tracker
  └─ B2-2 Git Team Collaboration
        ↓
B3 Data Structures & Algorithms
  ├─ B3-1 Mini Redis
  └─ B3-2 Mini Git
        ↓
B4 Web & Front-end
  ├─ B4-1 Portfolio
  └─ B4-2 React SPA
        ↓
B5 Database & Back-end
  ├─ B5-1 SQL Database
  ├─ B5-2 FastAPI CRUD
  └─ B5-3 Auth & Relations
        ↓
B6 Cloud & AI API
  ├─ B6-1 Cloud Deployment
  └─ B6-2 AI Git Assistant
        ↓
B7 Term Project
  ├─ B7-1 Web AI Chatbot
  └─ B7-2 Advanced AI Chatbot
```

## Source of Truth

기계 판독 가능한 Mission 상태와 Gate 원본은 `config/missions.yaml`이다.

```text
config/missions.yaml
  ├─ official_requirement
  ├─ status
  ├─ learning
  ├─ current_gate
  └─ G1~G8
```

이 디렉터리의 Markdown은 설명/Navigation Layer이며 Mission 상태를 독립적으로 수정하는 원본이 아니다.

## Mission Summary Contract

각 Mission 문서는 가능하면 다음 순서를 사용한다.

1. Mission Identity
2. Official Requirement / Repository
3. Current Execution & Learning Status
4. Core Goal
5. Core Terms / Concepts
6. Architecture / Flow Summary
7. Evaluation / Evidence
8. Learning Links
9. Dependencies / Bridges
10. Growth Extensions — EXPLORE / ADVANCED / PRO
11. Project Lineage

상세 공식 Source, 코드, 테스트, Runtime Evidence의 원본은 개별 Mission Repository에서 관리한다.

## Growth Rule

```text
CORE
공식 Mission + 이해 + Evidence

EXPLORE
관련 기술/Study/Seminar/Opportunity 탐색

ADVANCED
선택 영역의 Architecture/Test/Security/Performance/Experiment 심화

PRO
실사용자/Production/OSS/Research/Industry로 확장

EXPERT
해당 기술이 실제로 필요한지 판단하고 Trade-off 설명
```

모든 Mission이 PRO/EXPERT까지 승격되어야 하는 것은 아니다. 장기 Project Lineage에 중요한 Mission만 선택적으로 성장시킨다.

## Migration Status

이 디렉터리는 V3 Physical Migration 중 생성되었다. 기존 `docs/02-domains`는 새 경로의 내용과 링크 검증이 끝날 때까지 삭제하지 않는다.
