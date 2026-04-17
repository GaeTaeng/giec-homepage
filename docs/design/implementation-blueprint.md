# GI전자 리뉴얼 구현 블루프린트

이 문서는 레퍼런스 분석을 현재 React 코드베이스에 실제로 옮기기 위한 구현 기준 문서다.

## 1. 현재 코드와 레퍼런스의 간극

현재 저장소는 아래 상태에 가깝다.

- 메인: 단순 `Dashboard` 섹션 3개
- 헤더: `Menu_v2.js` 중심의 기본 메뉴
- 서브페이지: 템플릿이 통일되어 있지 않음
- 제품소개: 테이블 + HTML 문자열 렌더링
- 게시판: 더미 텍스트 수준
- 푸터: 임시 정보 포함

반면 레퍼런스는 아래를 요구한다.

- 몰입형 히어로 슬라이드
- 공통 서브페이지 배너와 탭
- 제품 카드 허브와 상세 구조
- 공지/게시판 리스트/상세/작성 템플릿
- 전체 화면 메뉴
- 브랜드 토큰 일관성

즉 `현재 구조 보정`이 아니라 `구조 재설계`에 가깝다.

## 2. 현재 코드에서 우선 손봐야 할 파일

### 최우선

- `src/App.js`
  - 라우트 재정의
  - 제품군/상세 라우트 추가
- `src/components/Menu_v2.js`
  - 정보구조 재설계
  - 전체메뉴 오버레이 추가
  - 상대 경로 정리
- `src/components/Menu_v2.css`
  - 헤더, 오버레이, 반응형 메뉴 재작성
- `src/components/Dashboard.js`
  - 히어로, 제품 허브, 뉴스, CTA 구조 재작성
- `src/components/Dashboard.css`
  - 랜딩페이지 전용 시스템 재작성
- `src/components/Footer.js`
  - 실제 정보, 링크, 시각 위계 재정리
- `src/components/Footer.css`
  - 다크 푸터 기준 재설계

### 두 번째 우선순위

- `src/components/companyInfo/CompanyInfo.js`
- `src/components/companyInfo/CompanyHistory.js`
- `src/components/ProductIntroduction.js`
- `src/components/Technology.js`
- `src/components/Board.js`

이 영역은 공통 서브 템플릿을 먼저 만든 뒤 갈아끼우는 편이 안정적이다.

## 3. 새로 만드는 것이 좋은 공통 구조

권장 디렉터리 구조:

```text
src/
  components/
    common/
      HeroSlider.js
      SectionHeading.js
      ActionButton.js
      ProductCard.js
      NewsList.js
    layout/
      SiteHeader.js
      SiteFooter.js
      MegaMenu.js
      PageHero.js
      PageTabs.js
    board/
      BoardTable.js
      BoardSearch.js
      BoardDetail.js
      BoardForm.js
  data/
    productCatalog.js
    companyTimeline.js
    boardMock.js
  pages/
    HomePage.js
    CompanyIntroPage.js
    CompanyHistoryPage.js
    CompanyLocationPage.js
    ProductHubPage.js
    ProductFamilyPage.js
    ProductDetailPage.js
    NoticeListPage.js
    NoticeDetailPage.js
    FreeBoardListPage.js
    FreeBoardDetailPage.js
    FreeBoardWritePage.js
  styles/
    tokens.css
    base.css
```

현재 저장소를 크게 흔들기 어렵다면 기존 `components` 폴더 안에서 점진적으로 나눠도 된다.  
하지만 `레이아웃`, `공통`, `페이지`, `데이터`는 역할 분리를 시작하는 편이 좋다.

## 4. 디자인 토큰으로 먼저 고정할 것

### 색상

- 다크 배경
- 라이트 배경
- 브랜드 블루
- 브랜드 블루 소프트
- 텍스트 강/중/약
- 보더
- 보조 액센트

### 타이포

- Hero
- Page title
- Section title
- Body large
- Body base
- Meta
- Menu

### 공간

- 페이지 최대 폭
- 섹션 상하 패딩
- 카드 간격
- 헤더 높이
- 서브 배너 높이

이 세 가지가 먼저 고정되지 않으면 이후 페이지별 구현이 계속 흔들린다.

## 5. 페이지별 구현 전략

## 5.1 메인

반드시 구현해야 할 흐름:

- 히어로 슬라이드
- 대표 제품군 허브
- 뉴스/공지 요약
- 문의 CTA

레퍼런스의 핵심은 “보여주기용 슬라이드”보다 “브랜드 메시지와 제품 진입”이다.  
따라서 히어로만 고급스럽고 아래가 약하면 실패다.

## 5.2 회사소개 묶음

공통 구조:

- 공통 PageHero
- 회사소개 탭
- 본문 콘텐츠

개별 차이:

- 인사말: 텍스트 + 이미지 + 서명
- 연혁: 연대기 컴포넌트
- 오시는길: 지도 + 주소 + 연락처 + 교통안내

## 5.3 제품소개

구현 순서:

1. 제품 허브
2. 제품군 라우트
3. 제품 상세
4. 레거시 원문 참조

현재 `PRODUCTS`는 임시 시드로 보고, `제품군 / 제품 / 상세 섹션` 모델로 정규화하는 것이 맞다.

## 5.4 공지 / 자유게시판

반드시 공통화할 것:

- 리스트 레이아웃
- 검색 행
- 페이지네이션
- 상세 레이아웃

공지와 자유게시판의 차이는 `쓰기 가능 여부`, `강조 표시`, `폼 존재` 정도로만 두는 편이 유지보수에 유리하다.

## 5.5 전체메뉴

추천 방식:

- 헤더의 햄버거 클릭
- 전체 화면 오버레이
- 대분류와 하위 페이지를 동시에 노출
- 모바일에서는 아코디언 또는 한 단계 드릴다운

## 6. 제품소개 데이터 구조 전환

현재 문제:

- `src/components/Constant/Products.js`에 제품군 개념이 없다
- `description`이 HTML 문자열이다
- `discription` 오타가 있다
- `detailUrl`이 반복되고 외부 원문과 앱 정보가 섞여 있다

권장 전환:

- 제품군과 제품을 분리
- 요약과 상세 본문을 분리
- 적용분야와 스펙을 배열/오브젝트로 분리
- 원문 참조는 `legacy` 필드로 보존

## 7. 단계별 실행 계획

### Phase 1. 브랜드 토큰과 셸

- `tokens.css`
- 공통 헤더
- 공통 푸터
- 전체메뉴
- 버튼/타이틀/섹션 패턴

### Phase 2. 메인페이지 리뉴얼

- HeroSlider
- 제품 허브
- 뉴스 요약
- CTA

### Phase 3. 회사소개 서브 템플릿

- PageHero
- PageTabs
- 인사말/연혁/오시는길

### Phase 4. 제품소개 정보구조 재설계

- 새 product data model
- 제품 허브
- 제품군
- 제품 상세

### Phase 5. 게시판 템플릿

- 공지 리스트/상세
- 자유게시판 리스트/상세/작성

### Phase 6. QA / 접근성 / 반응형 보강

- 모바일 메뉴
- 카드 그리드 반응형
- 게시판 테이블 대응
- 키보드 접근성
- 명도 대비

## 8. 주요 리스크

- 메인과 서브의 톤이 분리되지 않으면 브랜드가 산만해진다
- 제품 데이터 정규화 없이 UI만 바꾸면 나중에 다시 갈아엎게 된다
- 기존 라우트와 메뉴를 동시에 안 맞추면 네비게이션이 쉽게 깨진다
- 보조색을 과도하게 쓰면 레퍼런스의 절제감이 사라진다
- 게시판을 페이지별로 따로 만들면 유지보수가 급격히 나빠진다

## 9. 가장 현실적인 첫 구현 범위

한 번에 전부 바꾸기보다 아래 순서가 현실적이다.

1. `SiteHeader + HeroSlider + Footer` 재구성
2. 메인 랜딩 완성
3. 공통 서브 템플릿 구축
4. 제품 허브/상세 구조 전환
5. 게시판 템플릿 적용

이 순서면 레퍼런스의 인상을 가장 빨리 회수하면서도, 이후 서브페이지를 같은 시스템 위에 얹을 수 있다.
