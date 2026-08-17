# Ubuntu 24.04 Base Packages

## 목적

R01의 Ubuntu 24.04 Machine에서 모든 미션이 공통으로 기대할 수 있는 **최소 시스템 도구**만 관리합니다.

현재 Base는 다음 세 패키지입니다.

```text
ca-certificates
curl
git
```

선정 원칙:

- 여러 미션과 GitHub 연동에서 반복적으로 사용
- 프로젝트별 라이브러리가 아님
- 버전 충돌 가능성이 비교적 낮음
- Ubuntu 24.04의 기본 APT 흐름에서 관리 가능

다음은 Base에 넣지 않습니다.

- Python Web framework
- SQLAlchemy 등 Python library
- Node package
- SQLite/Nginx/UFW/ACL 등 특정 미션 중심 도구
- AWS/AI Provider별 도구
- Docker/Kubernetes

이들은 각 미션 또는 별도 선택 Training Layer에서 관리합니다.

## 검사

```bash
bash environments/ubuntu/verify-base.sh
```

## 설치

누락된 경우에만:

```bash
bash environments/ubuntu/setup-base.sh
```

`setup-base.sh`는 기존 패키지를 제거하거나 다운그레이드하지 않습니다.
