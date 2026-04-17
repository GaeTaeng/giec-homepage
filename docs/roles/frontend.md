# Frontend Engineer 운영 문서

이 문서는 이 저장소를 Frontend Engineer 관점에서 운영하기 위한 실전 가이드다. 현재 코드는 CRA 기반 React 앱이며, 실제 화면 진입과 라우팅은 `src/App.js`를 중심으로 구성되어 있다. UI 작업 시에는 `src/**`만 우선 다루고, 다른 에이전트가 작업 중인 파일은 되돌리지 않는다.

## 1. 현재 라우팅

- 진입점: [`src/App.js`](../../src/App.js)
- 라우터: `HashRouter`
- 전역 셸: `Menu_v2` 상단 고정, `Footer` 하단 고정

현재 라우트 맵은 다음과 같다.

- `/` -> `Dashboard`
- `/company` -> `CompanyInfo`
- `/company/history` -> `CompanyHistory`
- `/product` -> `ProductIntroduction`
- `/tech` -> `Technology`
- `/board` -> `Board`

주의할 점:

- `Menu_v2.js` 안의 하위 메뉴 링크들 (`company/intro`, `product/controller`, `board/notice` 등)은 `App.js`에 라우트가 없다.
- `NavLink`가 상대 경로 문자열을 사용하고 있어, 라우팅 구조가 커지면 링크 해석이 흔들릴 수 있다.
- `Footer`는 모든 라우트에서 항상 렌더링된다.

## 2. 컴포넌트 구조

### 실제 렌더 경로

- [`src/App.js`](../../src/App.js): 라우팅 조립, `isNewMenu` 상태 보유
- [`src/components/Menu_v2.js`](../../src/components/Menu_v2.js): 상단 네비게이션, 모바일 토글, 현재 페이지 클래스 계산
- [`src/components/Dashboard.js`](../../src/components/Dashboard.js): 메인 랜딩 화면
- [`src/components/ProductIntroduction.js`](../../src/components/ProductIntroduction.js): 제품 목록 테이블 렌더
- [`src/components/Technology.js`](../../src/components/Technology.js): 기술현황 섹션
- [`src/components/Board.js`](../../src/components/Board.js): 게시판 소개 화면
- [`src/components/companyInfo/CompanyInfo.js`](../../src/components/companyInfo/CompanyInfo.js): 회사소개 진입
- [`src/components/companyInfo/CompanyHistory.js`](../../src/components/companyInfo/CompanyHistory.js): 연혁
- [`src/components/companyInfo/AboutUs.js`](../../src/components/companyInfo/AboutUs.js): 회사소개 본문
- [`src/components/Footer.js`](../../src/components/Footer.js): 하단 정보/링크

### 화면 내부 구성

- `Dashboard.js`
  - `HeroSection`
  - `ProductSection`
  - `ContactSection`
- `Menu_v2.js`
  - 상단 로고
  - 메인 메뉴
  - 데스크톱 호버용 2차 메뉴
  - 모바일 메뉴 토글
- `CompanyInfo.js`
  - 제목/소개 문구
  - `AboutUs`
- `CompanyHistory.js`
  - 로컬 배열 `historyData`를 `map`으로 렌더

### 레거시/중복 컴포넌트

- [`src/components/Header.js`](../../src/components/Header.js)
- [`src/components/MainContent.js`](../../src/components/MainContent.js)
- [`src/components/Products.js`](../../src/components/Products.js)
- [`src/components/ProductOverview.js`](../../src/components/ProductOverview.js)
- [`src/components/TechStatus.js`](../../src/components/TechStatus.js)
- [`src/components/Community.js`](../../src/components/Community.js)

이 파일들은 현재 `App.js`에서 연결되지 않는다.

## 3. 스타일 구조

### 사용 중인 스타일

- [`src/index.css`](../../src/index.css): 전역 `body`, `code`
- [`src/components/Dashboard.css`](../../src/components/Dashboard.css): 홈 히어로/제품/문의 섹션
- [`src/components/Menu_v2.css`](../../src/components/Menu_v2.css): 상단 메뉴, 드롭다운, 모바일 반응형
- [`src/components/Footer.css`](../../src/components/Footer.css): 푸터
- [`src/components/ProductIntroduction.css`](../../src/components/ProductIntroduction.css): 제품 소개 테이블
- [`src/components/Technology.css`](../../src/components/Technology.css): 기술현황 레이아웃
- [`src/components/companyInfo/AboutUs.css`](../../src/components/companyInfo/AboutUs.css): 회사소개 본문
- [`src/components/companyInfo/CompanyHistory.css`](../../src/components/companyInfo/CompanyHistory.css): 연혁

### 현재 문제

- `src/App.css`는 존재하지만 어디에서도 import되지 않는다.
- `src/components/Header.css`도 `Header.js`가 미연결이라 현재는 미사용이다.
- `Dashboard.css`와 `index.css` 모두 `body`를 만져서 전역 스타일 충돌 가능성이 있다.
- `Menu_v2.css`와 `Dashboard.css`는 고정 px, 절대 위치, 고정 높이를 많이 사용한다.

## 4. 재사용 데이터

### 공용 데이터 소스

- [`src/components/Constant/Products.js`](../../src/components/Constant/Products.js)

`PRODUCTS` 배열이 사실상 현재 프로젝트의 유일한 공용 콘텐츠 데이터다.

사용처:

- [`src/components/Dashboard.js`](../../src/components/Dashboard.js): 카드형 제품 그리드
- [`src/components/ProductIntroduction.js`](../../src/components/ProductIntroduction.js): 제품 상세 목록

데이터 특성:

- `id`, `name`, `imageUrl`, `detailUrl`, `description`, `code`를 사용한다.
- `discription` 오타 필드가 있지만 현재 화면에서는 쓰이지 않는다.
- `description`은 HTML 문자열을 포함하고 있고, `ProductIntroduction.js`는 `dangerouslySetInnerHTML`로 렌더한다.

### 지역 데이터

- `CompanyHistory.js`의 `historyData`는 컴포넌트 내부 로컬 배열이다.
- `Menu_v2.js`의 `pathToClass`는 현재 페이지 클래스 매핑용 로컬 오브젝트다.

## 5. 사용 중 / 미사용 파일

### 현재 사용 중

- `src/App.js`
- `src/index.js`
- `src/index.css`
- `src/components/Dashboard.js`
- `src/components/Dashboard.css`
- `src/components/Menu_v2.js`
- `src/components/Menu_v2.css`
- `src/components/Footer.js`
- `src/components/Footer.css`
- `src/components/ProductIntroduction.js`
- `src/components/ProductIntroduction.css`
- `src/components/Technology.js`
- `src/components/Technology.css`
- `src/components/Board.js`
- `src/components/companyInfo/CompanyInfo.js`
- `src/components/companyInfo/AboutUs.js`
- `src/components/companyInfo/AboutUs.css`
- `src/components/companyInfo/CompanyHistory.js`
- `src/components/companyInfo/CompanyHistory.css`
- `src/components/Constant/Products.js`
- `src/components/img/2000-00459_cat_1_large_img1.jpg`
- `src/components/img/2000-00459_cat_2_large_img1.jpg`
- `src/components/img/2000-00459_cat_3_large_img1.jpg`
- `src/components/img/2000-00459_cat_4_large_img1.jpg`
- `src/components/img/2000-00459_cat_5_large_img1.jpg`
- `src/components/img/2000-00459_cat_6_large_img1.jpg`
- `src/components/img/2000-00459_logo.jpg`
- `src/components/img/2000-00459_tech_1_k.jpg`
- `src/components/img/2000-00459_tech_2_k.jpg`
- `src/components/img/2000-00459_tech_3_k.jpg`
- `src/components/img/Dashboard.png`
- `src/components/img/contact_bg.png`

### 현재 미사용 또는 사실상 레거시

- `src/App.css`
- `src/components/Header.js`
- `src/components/Header.css`
- `src/components/MainContent.js`
- `src/components/Products.js`
- `src/components/ProductOverview.js`
- `src/components/TechStatus.js`
- `src/components/Community.js`
- `src/logo.svg`
- `public/2000-00459_logo.jpg`
- `public/logo192.png`
- `public/logo512.png`

### 주의가 필요한 자산

- `src/components/Technology.js`의 `/builder_images/technology_title_k.gif`는 저장소 내 경로가 아니다.
- `src/components/ProductOverview.js`의 `img/2000-00459_intro_1_k.jpg`, `img/2000-00459_intro_2_k.jpg`는 현 코드 기준으로 연결되지 않는다.

## 6. UI 리스크

- `Menu_v2.js`의 링크 구조와 `App.js`의 라우트가 서로 완전히 맞지 않는다.
- `Menu_v2.js`의 하위 메뉴는 실제 페이지가 없어서 클릭 시 깨질 가능성이 높다.
- `Technology.js`는 `position: absolute`, 고정 좌표, 외부 이미지 경로를 사용한다.
- `ProductIntroduction.js`는 `<table>` 기반 레이아웃과 HTML 문자열 렌더링에 의존한다.
- `Dashboard.js`는 `hero` 배경과 카드 레이아웃을 px 중심으로 잡고 있어 모바일 대응이 취약하다.
- `App.js`의 `isNewMenu` 상태는 현재 어디에서도 소비되지 않는다.
- `App.test.js`는 기본 CRA 예제 문구를 찾고 있어 현재 화면과 맞지 않을 가능성이 높다.
- `Footer.js`의 전화번호/주소는 임시값처럼 보이며, 실제 운영 문구와 분리되어 있지 않다.

## 7. 작업 체크리스트

1. `App.js`와 `Menu_v2.js`의 라우트 목록을 먼저 일치시킨다.
2. 없는 하위 메뉴는 제거하거나 실제 라우트로 구현한다.
3. `PRODUCTS` 같은 공용 콘텐츠는 한 군데에서만 관리한다.
4. `dangerouslySetInnerHTML`은 입력 출처를 고정하거나 마크업을 제거한다.
5. `paddingTop: "71.5px"` 같은 임시 오프셋을 공통 레이아웃 토큰으로 바꾼다.
6. 절대 위치와 고정 폭을 줄이고 모바일 브레이크포인트를 다시 점검한다.
7. 미사용 컴포넌트와 CSS는 제거 후보로 분류한다.
8. `App.test.js`를 실제 라우트/문구 기준으로 갱신한다.
9. 외부 경로(`/builder_images/...`)와 로컬 자산의 존재를 배포 환경에서 검증한다.

## 8. 운영 기준

- UI 수정은 `src/**` 범위에서 우선 처리한다.
- 기존 에이전트의 변경은 덮어쓰지 않는다.
- 리팩터링보다 우선순위가 높은 것은 실제 링크 깨짐, 자산 누락, 모바일 레이아웃 붕괴다.
