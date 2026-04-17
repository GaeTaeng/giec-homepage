# Project Documentation Index

이 문서는 `giec-homepage` 저장소를 운영할 때 가장 먼저 여는 상위 목차다.  
역할별 문서와 공통 개요 문서를 빠르게 찾고, 어떤 순서로 읽어야 하는지 안내한다.

## 1. 가장 먼저 읽을 문서

- [프로젝트 개요](docs/project-overview.md)
  - 현재 기술 스택, 라우팅, 데이터 소스, 자산 구조, 검증 상태를 한 번에 파악할 때 사용
- [팀 에이전트 구성](TEAM_AGENTS.md)
  - 어떤 역할이 어떤 범위를 맡는지 확인할 때 사용

## 2. 역할별 운영 문서

| 역할 | 문서 | 이 문서를 먼저 열어야 하는 상황 | 핵심 파일 |
| --- | --- | --- | --- |
| PM / Planner | [docs/roles/planner.md](docs/roles/planner.md) | 요구사항을 범위, 우선순위, 완료 기준으로 정리해야 할 때 | `src/App.js`, `src/components/Menu_v2.js`, `src/components/Dashboard.js` |
| Frontend Engineer | [docs/roles/frontend.md](docs/roles/frontend.md) | 라우팅, UI, 스타일, 자산, 컴포넌트 구조를 수정할 때 | `src/App.js`, `src/components/**`, `src/components/companyInfo/**` |
| Integration / Backend Engineer | [docs/roles/integration.md](docs/roles/integration.md) | 정적 데이터 구조를 API나 데이터 계층으로 분리하려 할 때 | `src/components/Constant/Products.js`, `src/App.js`, `package.json` |
| QA / Test Engineer | [docs/roles/qa.md](docs/roles/qa.md) | 테스트 우선순위, 회귀 범위, 수동 점검 루틴을 잡아야 할 때 | `src/App.test.js`, `src/setupTests.js`, `src/App.js` |
| Release / DevOps Engineer | [docs/roles/release.md](docs/roles/release.md) | 빌드, GitHub Pages 배포, 정적 자산 경로를 점검해야 할 때 | `package.json`, `public/index.html`, `.gitignore` |

## 3. 디자인 리뉴얼 문서

- [레퍼런스 분석](docs/design/reference-analysis.md)
  - 제공된 시안에서 무엇을 계승하고, 무엇을 복제하면 안 되는지 정리
- [구현 블루프린트](docs/design/implementation-blueprint.md)
  - 현재 React 코드베이스에 어떤 순서로 적용할지 정리

## 4. 권장 읽기 순서

### 새 작업을 시작할 때

1. [프로젝트 개요](docs/project-overview.md)
2. [PM / Planner 운영 문서](docs/roles/planner.md)
3. 해당 역할 문서

### UI를 수정할 때

1. [프로젝트 개요](docs/project-overview.md)
2. [Frontend Engineer 운영 문서](docs/roles/frontend.md)
3. [QA / Test Engineer 운영 문서](docs/roles/qa.md)
4. 변경이 배포 경로에 영향을 주면 [Release / DevOps 운영 문서](docs/roles/release.md)

### 데이터 구조나 API 연동을 준비할 때

1. [프로젝트 개요](docs/project-overview.md)
2. [Integration / Backend Engineer 운영 문서](docs/roles/integration.md)
3. [Frontend Engineer 운영 문서](docs/roles/frontend.md)
4. [QA / Test Engineer 운영 문서](docs/roles/qa.md)

### 배포 직전 점검할 때

1. [Release / DevOps 운영 문서](docs/roles/release.md)
2. [QA / Test Engineer 운영 문서](docs/roles/qa.md)
3. [프로젝트 개요](docs/project-overview.md)

## 5. 현재 프로젝트에서 가장 먼저 봐야 할 사실

- 현재 앱은 `Create React App + React 18 + react-router-dom 7` 조합의 단일 SPA다.
- 라우팅 기준 파일은 `src/App.js`, 메뉴 기준 파일은 `src/components/Menu_v2.js`다.
- 공용 데이터는 거의 전부 `src/components/Constant/Products.js`와 각 컴포넌트 내부 하드코딩 문자열에 있다.
- 기본 셸의 `node v8.17.0`에서는 `npm test`, `npm run build`가 바로 실패한다.
- `node v20.17.0`에서는 `npm run build`가 성공하지만 경고가 있고, `npm test`는 `react-router-dom` 모듈 해석 문제로 실패한다.
- 저장소에는 현재 라우팅과 맞지 않는 하위 메뉴, 미사용 레거시 컴포넌트, 누락 가능성이 있는 정적 자산 경로가 섞여 있다.

## 6. 문서 사용 원칙

- 작업 전에 공통 개요를 먼저 확인하고, 그 다음 담당 역할 문서를 연다.
- 디자인 변경 작업은 [레퍼런스 분석](docs/design/reference-analysis.md)과 [구현 블루프린트](docs/design/implementation-blueprint.md)를 먼저 확인한다.
- 역할 문서는 실제 파일 경로 기준으로 유지한다.
- 새 기능이 추가되면 가장 먼저 이 목차 문서의 링크 구조와 읽기 순서를 갱신한다.
- 문서와 코드가 어긋나면 코드를 기준으로 다시 확인한 뒤 문서를 즉시 수정한다.
