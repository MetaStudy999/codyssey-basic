# Mission Dependency Map

Curriculum 흐름, Mission 간 기술 의존, 통합 프로젝트 연결을 V3 Master Map에서 관리한다.

## Curriculum Flow

```text
B1 Linux & OS
      ↓
B2 Python & Git
      ↓
B3 Data Structures & Algorithms
      ↓
B4 Web & Front-end
      ↓
B5 Database & Back-end
      ↓
B6 Cloud & AI API
      ↓
B7 Term Project
```

이 흐름은 **학습 서사**이며 모든 미션이 강제 직렬 의존이라는 뜻은 아니다.

## 직접적으로 강한 연결

```text
B4-1 → B4-2
B5-1 → B5-2 → B5-3
B7-1 → B7-2
```

## 통합 연결

B7 계열은 다음 역량을 통합한다.

- B1: 운영·장애·Linux 기본
- B2: Python 구조화·Git 협업
- B3: 자료구조·알고리즘·내부 원리
- B4: Web UI
- B5: Database/Backend/Auth
- B6: Cloud/AI API

## Dependency 종류

V3 Dashboard에서는 의존성을 다음처럼 구분한다.

- `OFFICIAL`: 공식 Source에서 직접 요구하는 선행 조건
- `TECHNICAL`: 실제 구현 재사용 때문에 필요한 기술 의존
- `RECOMMENDED`: 학습 효율을 위한 권장 순서
- `INTEGRATION`: B7 등 통합 프로젝트에서 재사용되는 역량 연결

단순한 화살표를 공식 필수 조건처럼 과장하지 않는다.

## Technology Progression

```text
사용
→ 구현
→ 연결
→ 운영
→ 측정
→ 고도화
→ 판단
```

기술을 독립 목록으로 외우기보다, 각 Mission이 다음 Mission에서 어떤 능력으로 재사용·심화되는지를 설명한다.

## Growth 연결

Mission Dependency는 `CORE` 수행 순서를 돕고, Project Lineage는 그 결과를 `EXPLORE → ADVANCED → PRO`로 확장할 때 사용한다.

실제 System Architecture와 ADR은 Master Map의 추상 화살표가 아니라 해당 Mission/Project 문맥에 둔다.
