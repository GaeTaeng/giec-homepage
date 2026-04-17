# Integration / Backend Engineer 운영 문서

## 1. 역할 범위

이 저장소에서 Integration / Backend Engineer의 책임은 `데이터 소스와 UI의 경계`를 유지하는 것이다.

- 현재는 정적 React SPA이므로, 데이터는 컴포넌트 내부 상수와 정적 이미지에 직접 연결된다.
- 향후 API가 도입되면, UI 컴포넌트는 `렌더링`만 담당하고 데이터 로딩/변환은 별도 적층으로 분리해야 한다.
- 빌드, 배포, 라우팅, 외부 링크, 정적 자산 경로가 바뀌는 지점은 통합 관점에서 함께 관리한다.

## 2. 현재 데이터 소스 현황

현재 저장소에는 별도 서버나 API 클라이언트가 없다. 사실상 데이터 소스는 다음 3종이다.

1. 컴포넌트 내부의 하드코딩 문자열
   - `src/components/Dashboard.js`
   - `src/components/ProductIntroduction.js`
   - `src/components/Board.js`
   - `src/components/companyInfo/CompanyInfo.js`
   - `src/components/companyInfo/CompanyHistory.js`
   - `src/components/Footer.js`
2. 정적 제품 데이터
   - `src/components/Constant/Products.js`
3. 로컬 이미지 및 공용 정적 파일
   - `src/components/img/*`
   - `public/*`

라우팅 진입점은 `src/App.js`이고, 전체 마운트는 `src/index.js`에서 `ReactDOM.createRoot(...).render(<App />)`로 시작한다.

## 3. 정적 데이터 구조

### 3.1 제품 데이터

`src/components/Constant/Products.js`의 `PRODUCTS` 배열이 현재 가장 중요한 데이터 구조다.

각 항목은 다음 필드를 가진다.

- `id`
- `code`
- `discription`  // 오타가 있는 현재 필드명
- `name`
- `description`
- `imageUrl`
- `detailUrl`

실제 소비 위치는 다음과 같다.

- `src/components/Dashboard.js`
  - `PRODUCTS.map(...)`로 카드 목록 렌더링
  - `product.imageUrl`, `product.name`, `product.code` 사용
- `src/components/ProductIntroduction.js`
  - `PRODUCTS.map(...)`로 테이블 렌더링
  - `dangerouslySetInnerHTML`로 `product.description` 삽입
  - `product.detailUrl`로 외부 상세 페이지 이동

### 3.2 정적 콘텐츠

현재 아래 컴포넌트는 API가 아니라 내부 고정 문구에 의존한다.

- `src/components/Dashboard.js`
  - 히어로 문구, 문의 CTA, 제품 소개 문구
- `src/components/Technology.js`
  - 기술 설명 텍스트와 이미지
- `src/components/companyInfo/CompanyHistory.js`
  - 회사 연혁 배열 `historyData`
- `src/components/Footer.js`
  - 주소, 전화번호, 이메일, 저작권 문구

### 3.3 라우팅/내비게이션 메타

라우팅은 `src/App.js`가 정의하고, 메뉴는 `src/components/Menu_v2.js`가 담당한다.

- `src/App.js`
  - `/`
  - `/company`
  - `/company/history`
  - `/product`
  - `/tech`
  - `/board`
- `src/components/Menu_v2.js`
  - `NavLink`로 라우트 연결
  - `useLocation()`으로 현재 페이지 클래스 계산
  - 로고 링크는 `/giec-homepage/`로 고정

## 4. 향후 API 연동 지점

API가 도입되면 우선 연동되어야 할 지점은 명확하다.

1. 제품 카탈로그
   - 현재 구현: `src/components/Constant/Products.js`
   - 대상 화면: `src/components/Dashboard.js`, `src/components/ProductIntroduction.js`
   - 예상 API: 제품 목록, 제품 상세, 대표 이미지, 요약 설명, 분류, 외부 상세 링크
2. 회사 정보와 연혁
   - 현재 구현: `src/components/companyInfo/CompanyInfo.js`, `src/components/companyInfo/CompanyHistory.js`
   - 예상 API: 회사 소개 본문, 연혁 이벤트, 사업영역, 연락처 정보
3. 게시판/공지
   - 현재 구현: `src/components/Board.js`
   - 예상 API: 공지사항 목록, 게시글 상세, 첨부파일 메타
4. 문의/연락 폼
   - 현재 구현: `src/components/Dashboard.js`의 `ContactSection`
   - 예상 API: 문의 접수, 유효성 검사, 전송 상태, 문의 완료 응답
5. 기술 콘텐츠
   - 현재 구현: `src/components/Technology.js`
   - 예상 API: 기술 소개 문서, 이미지 세트, 적용 범위, 섹션 순서

권장 구현 방식은 `UI 컴포넌트 -> view model adapter -> API client -> transport` 순으로 분리하는 것이다. 컴포넌트가 직접 API 응답 구조를 알지 않도록 해야 한다.

## 5. 계약 설계 제안

### 5.1 기본 원칙

- API 응답은 화면 친화적 문장보다 `도메인 데이터` 중심으로 만든다.
- 프론트는 응답을 그대로 출력하지 말고, 필요한 형태로 매핑한다.
- 문자열 HTML은 기본 금지하고, 필요한 경우에만 명시적으로 허용한다.
- 첨부 이미지와 외부 상세 링크는 절대 경로 또는 안정적인 CDN 경로로 제공한다.

### 5.2 제안 DTO

제품 예시는 다음과 같은 형태가 적절하다.

```ts
type ProductSummary = {
  id: number;
  code: string;
  name: string;
  summary: string;
  description: string[];
  image: {
    src: string;
    alt: string;
  };
  detailUrl?: string;
  category?: string;
};
```

회사 연혁은 다음처럼 분리하는 편이 안전하다.

```ts
type HistoryEntry = {
  id: string;
  date: string;
  title: string;
  body?: string;
};
```

문의는 전송용 명세를 따로 둔다.

```ts
type ContactRequest = {
  name: string;
  phone?: string;
  email?: string;
  message: string;
};
```

### 5.3 응답 규약

- 성공 응답은 `data` 중심으로 통일한다.
- 실패 응답은 `code`, `message`, `details`를 포함한다.
- 목록 API는 `items`, `total`, `updatedAt` 같은 메타를 함께 제공한다.
- 데이터 버전은 `schemaVersion` 또는 URL 버전(`/api/v1/...`)으로 관리한다.

### 5.4 검증 제안

이 저장소에는 `ajv`, `ajv-keywords`가 이미 설치되어 있다. 따라서 향후 API 계약 검증은 다음 방식이 적절하다.

- 런타임 응답 검증: JSON Schema + AJV
- UI 진입 전 변환 검증: adapter에서 필수 필드 체크
- 배포 전 샘플 응답 검증: mock payload fixture 기반 테스트

## 6. 런타임 및 배포 경계

현재 런타임은 `Create React App` 기반 정적 SPA다.

- 실행 진입점: `src/index.js`
- 앱 루트: `src/App.js`
- 라우터: `HashRouter` 사용
- 빌드: `npm run build`
- 정적 배포: `gh-pages -d build`
- 배포 대상 경로: `homepage`의 `https://gaetaeng.github.io/giec-homepage/`

실무적으로 주의할 경계는 다음과 같다.

- `HashRouter`를 쓰므로 서버 리라이트 없이 GitHub Pages에 배포 가능하다.
- 하지만 `Menu_v2.js`의 로고 링크는 `/giec-homepage/`로 하드코딩되어 있어, 배포 베이스 경로 변경 시 함께 수정해야 한다.
- `src/components/Technology.js`의 `"/builder_images/technology_title_k.gif"`처럼 `public` 루트를 직접 참조하는 경로는 배포 환경에서 깨질 수 있으므로 검토가 필요하다.
- `src/components/ProductIntroduction.js`의 `detailUrl`은 외부 JSP 링크이므로, 프론트 앱과 별도 운영 도메인으로 간주해야 한다.

## 7. 기술부채

현재 기준에서 우선순위가 높은 기술부채는 다음과 같다.

1. 정적 데이터가 컴포넌트에 분산되어 있다.
   - 제품은 `src/components/Constant/Products.js`
   - 회사 연혁은 `src/components/companyInfo/CompanyHistory.js`
   - 공지와 소개 문구는 각 화면 컴포넌트 내부에 흩어져 있다
2. 필드명과 데이터 형태가 불안정하다.
   - `discription` 오타가 존재한다
   - `description`에는 HTML 문자열이 섞여 있다
3. 렌더링과 데이터가 결합되어 있다.
   - `src/components/ProductIntroduction.js`는 `dangerouslySetInnerHTML` 사용
   - `src/components/Dashboard.js`는 카드 문구를 코드에 직접 보유
4. 라우팅과 링크가 불완전하다.
   - `Menu_v2.js`의 일부 하위 메뉴는 주석 처리되어 있다
   - footer 링크는 `#` placeholder다
5. 배포 경로 의존성이 명시적이지 않다.
   - `homepage` 값과 정적 링크가 함께 움직여야 한다

## 8. 도입 순서

API 연동은 아래 순서로 도입하는 것이 가장 안전하다.

1. 데이터 어댑터 계층 추가
   - `src/data/` 또는 `src/lib/` 아래에 정규화 함수 분리
   - `PRODUCTS`를 직접 참조하는 부분을 adapter 경유로 변경
2. 제품 목록부터 API화
   - `Dashboard`와 `ProductIntroduction`을 동일한 제품 API에 붙인다
   - 기존 정적 배열은 mock fallback으로 유지한다
3. 회사 정보와 연혁 API 분리
   - `CompanyInfo`, `CompanyHistory`를 CMS형 콘텐츠로 전환
4. 게시판과 문의 기능 연동
   - 목록 조회, 상세 조회, 작성 요청을 분리
5. 스키마 검증과 테스트 추가
   - 샘플 응답 fixture
   - 계약 불일치 시 렌더 차단 또는 fallback UI
6. 배포 경로 및 외부 링크 정리
   - `homepage`, 로고 링크, `public` 자산 경로 점검

## 9. 이 저장소에서의 실행 기준

- 다른 에이전트의 변경을 되돌리지 않는다.
- 통합 작업은 UI 스타일 변경과 분리해서 처리한다.
- 실제 파일 경로와 컴포넌트명을 기준으로 영향 범위를 적는다.
- 새 API가 생기면 먼저 계약과 mock을 만들고, 그다음 컴포넌트를 연결한다.
- 변경 보고에는 항상 수정 파일과 런타임 영향, 남은 기술부채를 함께 적는다.

