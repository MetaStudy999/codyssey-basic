# Growth OS Current State

> V3 Registry 초기 상태 Snapshot. 이후 `scripts/sync_growth.py`가 자동 생성하도록 전환한다.

## Growth Stage

| Stage | Status | Meaning |
|---|---|---|
| CORE | ACTIVE | 기본 Mission과 학습을 직접 완성하는 현재 중심 단계 |
| EXPLORE | READY | Community/외부활동/인접 기술 탐색 가능 |
| ADVANCED | PLANNED | 선택 영역 심화 준비 단계 |
| PRO | PLANNED | 실사용·Production·외부 성과 단계 |
| EXPERT | PLANNED | 고난도 판단·Trade-off·전문경로 단계 |

## Registry Summary

- Activities: 등록 항목 없음
- Projects: PLANNED 1
- Opportunities: 등록 항목 없음
- Skill Assessment: Evidence 기반 판정 전

## Current Physical Migration

- `02-missions`: B1~B7 Target 구조 생성 완료
- `03-learning`~`12-impact`: Domain Index 생성 완료
- Growth/Skill/Activity/Project/Opportunity Config 분리 완료
- Learning Macro/Micro Model 생성 완료
- Architecture/Evaluation 핵심 개념 재배치 완료
- Portfolio/Resources 모델 이관 시작
- Sync Growth Script 추가 완료

## Next

1. Dashboard가 `growth.json`, `skills.json`, `activities.json`, `projects.json`, `opportunities.json`을 읽도록 확장
2. 기존 수동 Mission Refresh + 5분 Cooldown 유지
3. GitHub Actions에서 Mission Sync와 Growth Sync를 함께 실행하도록 연결
4. 링크/자동생성 회귀 검증 후 Legacy Path 정리

## Reading Rule

- Growth Stage = 장기 성장 위치
- Mission G1~G8 = 공식 Mission 수행 위치
- Skill Level = 특정 역량의 Evidence 수준
- Activity/Project Status = 현재 실제 작업 상태
- Opportunity Availability = 외부 기회가 열려 있는지 여부
