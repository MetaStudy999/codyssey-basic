# Ubuntu 24.04 Package Model

## 목적

Codyssey Basic의 Ubuntu 24.04 환경을 **공통 최소 패키지 → 미션별 시스템 패키지 → 프로젝트 내부 의존성**의 3계층으로 관리합니다.

```text
Layer 1 — Ubuntu Base
공통 최소 시스템 도구

Layer 2 — Mission System Packages
현재 미션에 필요한 APT 패키지만 추가

Layer 3 — Project Dependencies
Python .venv / pyproject.toml / requirements.txt / package.json 등
```

Docker는 별도 선택 Training Layer이며 Ubuntu 패키지 모델의 기본 Gate가 아닙니다.

## 핵심 원칙

1. 15개 미션에서 쓸 수 있다는 이유만으로 모든 패키지를 한 번에 설치하지 않습니다.
2. 설치 전에 현재 상태를 먼저 확인합니다.
3. `apt`는 OS/System package에만 사용합니다.
4. Python 라이브러리는 프로젝트 `.venv` 안에 설치합니다.
5. Node 패키지는 `package.json`과 lock file로 관리합니다.
6. 미션별 추가 APT 패키지는 각 미션 저장소의 `training/round-01-clear/environment/ubuntu-packages.txt`가 Source of Truth입니다.
7. 실제 Mission/Evaluation이 특정 도구·버전을 요구하면 공식 요구가 최우선입니다.

## 기본 흐름

```text
새 Ubuntu 24.04
→ Base 상태 확인
→ Base 부족분만 설치
→ 현재 Mission 선택
→ Mission package list 확인
→ 부족분만 설치
→ Project environment 구성
→ Verify
→ Mission Runtime
```

## 파일

- `base-packages.txt` — 공통 최소 APT 패키지
- `BASE-PACKAGES.md` — 공통 패키지 설명과 운영 원칙
- `MISSION-PACKAGE-MATRIX.md` — B1-1~B7-2의 Ubuntu/System/Project dependency 지도
- `verify-base.sh` — 공통 패키지 설치 여부 확인
- `setup-base.sh` — 공통 패키지 중 누락된 것만 설치
- `setup-mission-packages.sh` — 각 미션의 `ubuntu-packages.txt`를 검사/설치하는 공통 helper

## 실행 예

Control Tower에서 Base 확인:

```bash
bash environments/ubuntu/verify-base.sh
```

필요할 때만 Base 설치:

```bash
bash environments/ubuntu/setup-base.sh
```

현재 Mission 저장소의 추가 패키지 확인:

```bash
bash ~/codyssey/codyssey-basic/environments/ubuntu/setup-mission-packages.sh \
  training/round-01-clear/environment/ubuntu-packages.txt --check
```

부족분만 설치:

```bash
bash ~/codyssey/codyssey-basic/environments/ubuntu/setup-mission-packages.sh \
  training/round-01-clear/environment/ubuntu-packages.txt --install
```

`setup-mission-packages.sh`는 package list의 주석과 빈 줄을 무시합니다.

## Project Dependency와 분리

예를 들어 FastAPI 미션에서는 다음처럼 분리합니다.

```text
APT
└─ python3, python3-venv 같은 System Runtime

Repository
└─ .venv
   └─ FastAPI / SQLAlchemy / 기타 Python package
```

Node 미션은 Node runtime/version 정책과 `package.json`을 사용하며 모든 Node 패키지를 APT로 설치하지 않습니다.

## 안전 원칙

- `apt install` 전에 누락 여부 확인
- 기존 package 제거/다운그레이드 자동화 금지
- `apt autoremove` 자동 실행 금지
- System Python에 프로젝트 package 전역 설치 금지
- 미션 간 `.venv` 공유 금지
- package 설치와 Mission 기능 변경은 가능한 한 분리
- 실제 버전은 Runtime 시점에 확인하고 Evidence에 필요한 경우만 기록
