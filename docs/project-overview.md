# 프로젝트 개요

이 문서는 `giec-homepage` 저장소를 처음 열었을 때 빠르게 맥락을 잡기 위한 공통 문서다.  
역할별 문서에 들어가기 전에 이 문서로 현재 구조, 데이터, 리스크, 검증 상태를 먼저 읽는 것을 기본으로 한다.

## 1. 프로젝트 한 줄 요약

- `GI전자` 회사 홈페이지를 위한 `Create React App` 기반 단일 페이지 웹앱이다.
- 현재는 프론트엔드만 존재하며, 제품 정보와 회사 소개가 주된 콘텐츠다.
- 제품 데이터는 일부 공용 상수로 모아져 있지만, 대부분의 문구와 구조는 각 컴포넌트 내부에 하드코딩되어 있다.

## 2. 현재 기술 스택

- 앱 프레임워크: `Create React App`
- UI 런타임: `react@18.3.1`, `react-dom@18.3.1`
- 라우팅: `react-router-dom@7.1.5`
- 테스트: `@testing-library/react`, `jest-dom`, `user-event`
- 배포 방식: `gh-pages`를 통한 GitHub Pages 배포

## 3. 핵심 파일 지도

### 앱 진입과 셸

- `src/index.js`
  - `ReactDOM.createRoot`로 앱을 마운트한다.
- `src/App.js`
  - `HashRouter`와 `Routes`를 정의한다.
  - 모든 페이지 위에 `Menu_v2`, 아래에 `Footer`를 공통으로 렌더링한다.

### 실제 사용 중인 페이지

- `src/components/Dashboard.js`
  - 홈 화면
  - 히어로, 제품 카드, 문의 CTA로 구성
- `src/components/companyInfo/CompanyInfo.js`
  - 회사 소개 메인
- `src/components/companyInfo/AboutUs.js`
  - 회사 소개 본문
- `src/components/companyInfo/CompanyHistory.js`
  - 연혁
- `src/components/ProductIntroduction.js`
  - 제품 목록 페이지
- `src/components/Technology.js`
  - 기술 현황 페이지
- `src/components/Board.js`
  - 게시판 소개용 임시 페이지

### 공통 컴포넌트

- `src/components/Menu_v2.js`
  - 상단 네비게이션
  - 모바일 메뉴 토글
  - 현재 페이지별 헤더 클래스 적용
- `src/components/Footer.js`
  - 회사 정보와 하단 링크

### 공용 데이터 및 자산

- `src/components/Constant/Products.js`
  - 제품 목록 공용 정적 데이터
- `src/components/img/**`
  - 제품/기술/대시보드용 이미지
- `public/**`
  - 파비콘, 매니페스트 등 공개 자산

### 현재 미사용 또는 레거시 성격이 강한 파일

- `src/App.css`
- `src/ProductInfo.js`
- `src/components/Header.js`
- `src/components/Header.css`
- `src/components/MainContent.js`
- `src/components/Products.js`
- `src/components/ProductOverview.js`
- `src/components/TechStatus.js`
- `src/components/Community.js`

## 4. 라우트 맵

현재 `src/App.js`에 정의된 실제 라우트는 다음과 같다.

| 경로 | 렌더 컴포넌트 | 비고 |
| --- | --- | --- |
| `/` | `Dashboard` | 메인 랜딩 |
| `/company` | `CompanyInfo` | 회사 소개 |
| `/company/history` | `CompanyHistory` | 연혁 |
| `/product` | `ProductIntroduction` | 제품 목록 |
| `/tech` | `Technology` | 기술 현황 |
| `/board` | `Board` | 게시판 소개 |

주의:

- `src/components/Menu_v2.js`에는 위 라우트보다 더 많은 하위 메뉴가 정의되어 있다.
- 예: `company/intro`, `product/controller`, `tech/overview`, `board/notice`
- 하지만 이들에 대응하는 `Route`는 현재 없다.

## 5. 데이터와 콘텐츠 구조

현재 데이터 구조는 세 층으로 나뉜다.

### 5.1 공용 정적 데이터

- `src/components/Constant/Products.js`
  - `PRODUCTS` 배열을 관리한다.
  - `Dashboard.js`와 `ProductIntroduction.js`가 함께 사용한다.

현재 필드:

- `id`
- `code`
- `discription`
- `name`
- `description`
- `imageUrl`
- `detailUrl`

주의:

- `discription`은 오타 필드다.
- `description`에는 HTML 문자열이 섞여 있다.
- `ProductIntroduction.js`는 이를 `dangerouslySetInnerHTML`로 출력한다.

### 5.2 컴포넌트 내부 정적 문구

- `Dashboard.js`: 히어로 문구, 문의 CTA
- `Technology.js`: 기술 설명 본문
- `CompanyInfo.js`: 소개 제목과 짧은 설명
- `CompanyHistory.js`: 연혁 배열
- `Footer.js`: 주소, 연락처, 링크

### 5.3 외부/절대 경로 의존

- `Technology.js`는 `/builder_images/technology_title_k.gif`를 직접 참조한다.
- `Footer.js`의 링크는 모두 `#` placeholder다.
- `src/components/Constant/Products.js`의 `detailUrl`은 외부 JSP 상세 페이지를 가리킨다.

## 6. 스타일 구조

주요 스타일 파일은 다음과 같다.

- `src/index.css`
- `src/components/Dashboard.css`
- `src/components/Menu_v2.css`
- `src/components/Footer.css`
- `src/components/ProductIntroduction.css`
- `src/components/Technology.css`
- `src/components/companyInfo/AboutUs.css`
- `src/components/companyInfo/CompanyHistory.css`

현재 특징:

- 전역 `body` 스타일이 `src/index.css`, `src/App.css`, `src/components/Dashboard.css`에 분산돼 있다.
- `Menu_v2.css`, `Technology.js`, 일부 페이지는 `position`, 픽셀 기반 크기, 임시 `paddingTop: "71.5px"`에 의존한다.
- 반응형 처리는 일부만 존재하며, 구조적으로 일관되게 정리되어 있지 않다.

## 7. 현재 확인된 리스크

### 구조 리스크

- 실제 라우트와 메뉴 링크가 일치하지 않는다.
- 미사용 파일이 많아 수정 시 잘못된 파일을 건드릴 위험이 있다.
- 공용 콘텐츠가 데이터 파일과 컴포넌트 내부에 분산돼 있다.

### UI 리스크

- 고정 폭, 절대 위치, 인라인 스타일 의존이 많다.
- 푸터 연락처와 주소가 임시 데이터처럼 보인다.
- 접근성 경고가 있는 링크와 alt 텍스트가 있다.

### 자산 리스크

- `public/index.html`은 `%PUBLIC_URL%/2000-00459_logo.png`를 참조하지만 저장소에는 `public/2000-00459_logo.jpg`만 확인된다.
- `Technology.js`의 `/builder_images/...` 경로는 저장소 안에 없다.

### 테스트 및 배포 리스크

- 기본 셸의 `node v8.17.0`에서는 modern dependency syntax를 해석하지 못한다.
- `react-router-dom@7.1.5`와 현재 CRA/Jest 조합은 테스트에서 모듈 해석 문제가 있다.
- 루트 `static/**`와 `asset-manifest.json`, `index.html`, `manifest.json`, `robots.txt`는 Git 추적 대상이지만 `build/`는 `.gitignore`에 포함되어 있어, 빌드 산출물 관리가 혼재돼 있다.

## 8. 실제 검증 결과

### 기본 셸 기준

- `node -v` -> `v8.17.0`
- `npm -v` -> `6.13.4`
- `npm test` -> `SyntaxError: Unexpected token {`
- `npm run build` -> `SyntaxError: Unexpected token {`

원인:

- 현재 기본 셸의 Node 버전이 의존성들이 사용하는 최신 문법을 처리하지 못한다.

### Node 20 기준

다음 환경으로 다시 검증했다.

```bash
PATH=$HOME/.nvm/versions/node/v20.17.0/bin:$PATH
```

결과:

- `npm run build` -> 성공
- `CI=true npm test -- --watch=false` -> 실패

세부:

- 빌드는 성공했지만 ESLint 경고가 남아 있다.
- 테스트는 `Cannot find module 'react-router-dom' from 'src/App.js'`로 실패한다.
- 현재 `react-router-dom@7.1.5`는 설치되어 있으므로, 문제는 설치 누락보다 CRA/Jest와의 호환성 또는 테스트 환경 구성 쪽에 가깝다.

## 9. 역할별로 어디를 먼저 봐야 하나

- 요구사항 정리: [docs/roles/planner.md](roles/planner.md)
- UI 구현: [docs/roles/frontend.md](roles/frontend.md)
- 데이터/API 경계: [docs/roles/integration.md](roles/integration.md)
- 테스트/회귀: [docs/roles/qa.md](roles/qa.md)
- 빌드/배포: [docs/roles/release.md](roles/release.md)

## 10. 다음 작업의 우선순위 제안

1. `App.js`와 `Menu_v2.js`의 라우팅 정합성부터 맞춘다.
2. `Products.js` 데이터 구조와 HTML 문자열 의존을 정리한다.
3. 테스트 환경을 `Node 20` 기준으로 고정하고, `App.test.js`를 실제 화면 기준 테스트로 교체한다.
4. `public/index.html`의 잘못된 이미지 참조와 `Technology.js`의 누락 자산 경로를 정리한다.
5. 미사용 레거시 파일을 정리하거나 명시적으로 보관 구역으로 분리한다.
