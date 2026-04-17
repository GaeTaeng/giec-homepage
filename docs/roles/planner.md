# PM / Planner 운영 문서

이 문서는 `giec-homepage`를 PM/Planner 관점에서 운영하기 위한 실전 기준 문서다.  
이 저장소는 Create React App 기반의 회사 홈페이지이며, 현재 구조는 `src/App.js`의 라우팅과 `src/components/**` 하위 페이지 컴포넌트로 구성되어 있다.

## 1. 현재 프로젝트 구조

- 앱 진입점: `src/index.js`, `src/App.js`
- 전역 스타일: `src/index.css`, `src/App.css`
- 라우팅: `HashRouter` 기반, `src/App.js`에서 `Routes` 관리
- 공통 레이아웃:
  - 상단 메뉴: `src/components/Menu_v2.js`, `src/components/Menu_v2.css`
  - 하단 푸터: `src/components/Footer.js`, `src/components/Footer.css`
- 메인 페이지:
  - 홈: `src/components/Dashboard.js`, `src/components/Dashboard.css`
  - 회사소개: `src/components/companyInfo/CompanyInfo.js`
  - 회사연혁: `src/components/companyInfo/CompanyHistory.js`
  - 제품소개: `src/components/ProductIntroduction.js`, `src/components/ProductIntroduction.css`
  - 기술현황: `src/components/Technology.js`, `src/components/Technology.css`
  - 게시판: `src/components/Board.js`
- 데이터 소스:
  - 제품 정적 데이터: `src/components/Constant/Products.js`
  - 이미지 에셋: `src/components/img/**`, `public/**`

## 2. 사용자 가치

- 방문자가 회사의 정체성, 제품, 기술 역량을 빠르게 이해하게 한다.
- 제품별 설명과 이미지를 통해 문의 전환 가능성을 높인다.
- 회사 연혁과 소개를 통해 신뢰도를 확보한다.
- 추후 게시판, 상세 제품 페이지, 문의 흐름으로 확장 가능한 정보 구조를 만든다.

## 3. 페이지 흐름

- 공통 진입점은 `src/components/Menu_v2.js`와 `src/components/Footer.js`이다.
- 라우팅 흐름은 다음과 같이 읽는다.
  - `/` -> `src/components/Dashboard.js`
  - `/company` -> `src/components/companyInfo/CompanyInfo.js`
  - `/company/history` -> `src/components/companyInfo/CompanyHistory.js`
  - `/product` -> `src/components/ProductIntroduction.js`
  - `/tech` -> `src/components/Technology.js`
  - `/board` -> `src/components/Board.js`
- 홈 화면의 핵심 흐름은 `Dashboard -> ProductSection -> ContactSection`이다.
- 제품 화면의 핵심 흐름은 `Menu_v2 -> ProductIntroduction -> PRODUCTS 데이터`이다.
- 회사 소개 화면의 핵심 흐름은 `CompanyInfo -> AboutUs`다.
- 연혁 화면은 별도 라우트 `/company/history`에서 `CompanyHistory`로 진입한다.

## 4. 요구사항 정리 포인트

- 요구사항은 항상 화면 단위가 아니라 “사용자 목적” 기준으로 정리한다.
- 새 요청이 오면 아래를 먼저 분리한다.
  - 무엇을 보여줄 것인가
  - 어떤 사용자가 보는가
  - 어디서 진입하는가
  - 완료 시 어떤 행동을 기대하는가
  - 기존 라우트/컴포넌트 중 무엇을 재사용할 수 있는가
- 실제 파일 기준으로 영향 범위를 명시한다.
  - 예: 메뉴 수정 -> `src/components/Menu_v2.js`, `src/components/Menu_v2.css`, `src/App.js`
  - 예: 제품 목록 수정 -> `src/components/Constant/Products.js`, `src/components/ProductIntroduction.js`
- 콘텐츠 변경 요청은 디자인 변경과 분리한다.
- 정적 텍스트 수정인지, 정보 구조 변경인지, 새 페이지 추가인지 반드시 구분한다.

## 5. 우선순위 기준

1. 사용자 전환에 직접 영향이 큰 항목
   - 홈, 제품소개, 문의 유도, 회사 신뢰 정보
2. 탐색 가능성을 높이는 항목
   - 메뉴 구조, 라우팅 정합성, 하위 페이지 연결
3. 신뢰성과 유지보수성
   - 하드코딩 제거, 중복 콘텐츠 정리, 정적 데이터 구조화
4. 시각적 완성도
   - CSS 정리, 반응형, 자산 로딩 최적화
5. 확장성
   - 상세 페이지, 게시판, 문의 폼, 다국어 가능성

## 6. 리스크

- `HashRouter` 기반이라 외부 링크 공유 시 URL 전략을 명확히 해야 한다.
- `Menu_v2.js`의 하위 메뉴는 일부가 실제 라우트로 연결되지 않은 상태라, UX 기대와 구현이 어긋날 수 있다.
- `ProductIntroduction.js`는 `<table>`과 `dangerouslySetInnerHTML`을 사용하므로 콘텐츠 입력 시 보안과 레이아웃 안정성을 함께 봐야 한다.
- `Technology.js`, `ProductOverview.js`, `MainContent.js`, `ProductInfo.js`처럼 현재 라우팅에서 미사용 또는 중복 성격의 컴포넌트가 있어 소유 범위를 잘못 잡으면 혼선이 생긴다.
- 이미지와 정적 문구가 많아 변경 시 시각 회귀와 콘텐츠 누락 가능성이 높다.

## 7. 운영 원칙

- 다른 에이전트의 변경은 되돌리지 않는다.
- 요구사항이 애매하면 먼저 질문하거나, 최소 가정치를 명시한 뒤 진행한다.
- 구현 전에 반드시 완료 기준과 검증 항목을 문서화한다.
- 파일명과 컴포넌트명을 기준으로 작업 브리프를 작성한다.
- 변경 범위가 넓을수록 개발과 QA를 분리해 검증한다.

## 8. 다음 단계 백로그

### P0

- `src/App.js`와 `src/components/Menu_v2.js`의 라우팅 정합성 점검
- `src/components/Constant/Products.js` 데이터 구조 정리
- 홈 화면 `src/components/Dashboard.js`의 문의 전환 동선 정의

### P1

- `src/components/companyInfo/CompanyInfo.js`와 `src/components/companyInfo/CompanyHistory.js`의 콘텐츠 정리
- `src/components/ProductIntroduction.js`의 리스트 렌더링 구조 개선
- `src/components/Technology.js`의 하드코딩 이미지/문구 정리

### P2

- 실제 게시판 요구사항 확정 후 `src/components/Board.js` 확장
- 제품 상세 페이지 라우트 신설 여부 검토
- 반응형/접근성 기준 정립 및 공통 CSS 규칙 정리

## 9. 실무용 체크리스트

- 새 요청이 들어오면 대상 페이지와 관련 파일을 먼저 적는다.
- “텍스트 수정”과 “정보 구조 수정”을 분리해 범위를 적는다.
- 완료 기준에는 최소 1개 이상의 검증 방법을 포함한다.
- 이미지, 문구, 라우트, CSS 변경이 섞이면 회귀 위험으로 표시한다.
- 미사용 컴포넌트는 삭제보다 우선 소유권과 활용 여부를 확인한다.
