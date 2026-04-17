# QA / Test Engineer 운영 문서

## 역할 범위

이 저장소에서 QA/Test Engineer는 `src/**/*.test.js`를 기준으로 자동화 테스트를 설계하고, 라우팅/렌더링/데이터 노출/링크 이동의 회귀를 먼저 잡는다. 구현 수정이 들어오면 기능보다 먼저 깨질 가능성이 높은 화면과 경로를 검증하고, 릴리스 전에는 `npm test`와 `npm run build` 결과를 기준으로 배포 가능 여부를 판단한다.

주요 확인 대상 파일은 `src/App.js`, `src/components/Menu_v2.js`, `src/components/Dashboard.js`, `src/components/ProductIntroduction.js`, `src/components/Technology.js`, `src/components/companyInfo/CompanyInfo.js`, `src/components/companyInfo/CompanyHistory.js`, `src/components/Board.js`, `src/components/Footer.js`, `src/components/Constant/Products.js`, `src/App.test.js`, `src/setupTests.js` 이다.

## 현재 테스트 상태

- 자동화 테스트는 사실상 최소 상태다. 현재 확인된 테스트 파일은 `src/App.test.js` 하나뿐이며, 내용은 `learn react` 문구를 찾는 오래된 기본 CRA 테스트다.
- 기본 셸의 `npm test` 는 실행 단계에서 즉시 실패한다. 실패 지점은 `node_modules/jest/...` 내부의 `SyntaxError: Unexpected token {` 이며, 실제 앱 테스트까지 도달하지 못한다.
- 기본 셸의 `npm run build` 도 동일하게 즉시 실패한다. 실패 지점은 `node_modules/fs-extra/...` 내부의 `SyntaxError: Unexpected token {` 이다.
- 확인된 기본 셸 런타임은 `node v8.17.0`, `npm 6.13.4` 이다. 현재 의존성 조합은 이 버전과 호환되지 않는다.
- `PATH=$HOME/.nvm/versions/node/v20.17.0/bin:$PATH` 환경에서는 `npm run build` 가 성공한다.
- 같은 Node 20 환경에서 `CI=true npm test -- --watch=false` 는 `Cannot find module 'react-router-dom' from 'src/App.js'` 로 실패한다.
- 현재 `react-router-dom@7.1.5` 는 설치되어 있으므로, 테스트 실패는 단순 설치 누락보다 `CRA + Jest + react-router-dom 7` 조합 호환성 또는 테스트 설정 문제로 보는 것이 맞다.

## 핵심 회귀 시나리오

1. 메인 진입과 라우팅
   - `src/App.js` 의 `HashRouter` 기준으로 `/`, `/company`, `/company/history`, `/product`, `/tech`, `/board` 가 각각 올바른 화면을 렌더링하는지 확인한다.
   - 잘못된 경로로 진입했을 때 기본 화면이 깨지지 않는지 확인한다.

2. 상단 메뉴와 네비게이션
   - `src/components/Menu_v2.js` 의 메뉴 토글이 모바일에서 열리고 닫히는지 확인한다.
   - `NavLink` 대상인 `company`, `product`, `tech`, `board` 이동이 실제 경로와 맞는지 확인한다.
   - `currentPage` 클래스 매핑이 `dashboard`, `company-info`, `company-history`, `product-introduction`, `technology`, `board` 로 정상 반영되는지 확인한다.

3. 대시보드 콘텐츠
   - `src/components/Dashboard.js` 의 히어로 섹션, 제품 카드 목록, 문의 섹션이 렌더링되는지 확인한다.
   - `src/components/Constant/Products.js` 의 `PRODUCTS` 데이터 개수와 화면 카드 개수가 일치하는지 확인한다.
   - 제품 이미지, 제품명, 코드, 설명이 누락되지 않는지 확인한다.

4. 제품 소개 화면
   - `src/components/ProductIntroduction.js` 에서 제품 리스트가 모두 출력되는지 확인한다.
   - `detailUrl` 과 `imageUrl` 이 깨지지 않는지 확인한다.
   - `dangerouslySetInnerHTML` 로 주입되는 설명 문자열에 불필요한 마크업 깨짐이 없는지 확인한다.

5. 기술 현황 화면
   - `src/components/Technology.js` 의 3개 기술 이미지와 본문 텍스트가 정상 노출되는지 확인한다.
   - `/builder_images/technology_title_k.gif` 같은 외부 경로 자산이 배포 환경에서 404 없이 동작하는지 확인한다.

6. 회사 소개와 연혁
   - `src/components/companyInfo/CompanyInfo.js` 의 `AboutUs` 포함 렌더링이 깨지지 않는지 확인한다.
   - `src/components/companyInfo/CompanyHistory.js` 의 연혁 항목 3개가 순서대로 노출되는지 확인한다.

7. 게시판과 푸터
   - `src/components/Board.js` 의 제목/설명 문구가 누락되지 않는지 확인한다.
   - `src/components/Footer.js` 의 주소, 연락처, 정책 링크가 보이는지 확인한다.

## 자동화 우선순위

1. 라우팅 스모크 테스트
   - `src/App.js` 에서 각 route 가 올바른 컴포넌트로 연결되는지 우선 추가한다.
   - 최소한 `/`, `/company`, `/company/history`, `/product`, `/tech`, `/board` 를 커버한다.

2. 메뉴 동작 테스트
   - `src/components/Menu_v2.js` 의 메뉴 토글, `NavLink` 클릭, 현재 페이지 클래스 적용을 검증한다.
   - 모바일 `menuOpen` 상태와 하위 메뉴 표시 조건을 분리해서 테스트한다.

3. 데이터 기반 렌더링 테스트
   - `src/components/Dashboard.js` 와 `src/components/ProductIntroduction.js` 에서 `PRODUCTS` 수와 렌더링 카드 수가 일치하는지 검증한다.
   - `src/components/Constant/Products.js` 의 `id`, `name`, `detailUrl` 누락을 회귀 포인트로 본다.

4. 정적 콘텐츠 스냅샷성 검증
   - `src/components/Technology.js`, `src/components/companyInfo/CompanyHistory.js`, `src/components/Footer.js` 는 텍스트/링크 누락 여부를 우선 검증한다.
   - 시각 스냅샷보다 DOM 텍스트와 자산 경로 검증을 먼저 둔다.

## 실패 가능 지점

- `src/App.test.js` 는 현재 화면 구조와 맞지 않는 오래된 테스트다. 새 UI 기준의 스모크 테스트로 교체하지 않으면 테스트가 의미를 잃는다.
- `src/components/Menu_v2.js` 는 `NavLink to="company"` 같이 상대 경로를 사용한다. 현재 라우팅 구조와 조합에 따라 예상치 못한 중첩 경로가 생길 수 있다.
- `src/components/Technology.js` 는 `/builder_images/technology_title_k.gif` 같은 절대 경로를 직접 사용한다. 배포 환경에서 정적 파일 경로가 다르면 바로 깨진다.
- `src/components/ProductIntroduction.js` 는 `dangerouslySetInnerHTML` 을 사용한다. 입력 데이터가 바뀌면 마크업 깨짐이나 XSS 검토가 필요하다.
- `src/components/Constant/Products.js` 는 이미지와 외부 상세 링크에 강하게 의존한다. 파일 누락이나 링크 변경이 있으면 카드 전체가 회귀한다.
- 현재 로컬 Node `v8.17.0` 은 modern dependency syntax 와 맞지 않는다. 같은 환경에서 테스트 실패가 반복되면 먼저 런타임 버전을 의심해야 한다.
- Node 20으로 올려도 테스트는 `react-router-dom` 모듈 해석 단계에서 실패하므로, 단순히 런타임만 올리는 것으로는 테스트가 안정화되지 않는다.

## 수동 점검 체크리스트

- 메인 화면(`/`)에서 히어로, 제품 카드, 문의 영역이 보이는지 확인한다.
- 상단 메뉴에서 `회사소개`, `제품소개`, `기술현황`, `게시판` 클릭 시 각 화면이 전환되는지 확인한다.
- `/company/history` 진입 시 연혁 3개 항목이 보이는지 확인한다.
- `/product` 진입 시 제품 목록이 모두 보이고 각 항목의 이미지와 설명 링크가 살아 있는지 확인한다.
- `/tech` 진입 시 기술 이미지 3장과 본문 문단이 잘리는지 확인한다.
- `/board` 진입 시 제목과 설명 문구가 보이는지 확인한다.
- 푸터의 주소, 전화, 이메일, 정책 링크가 렌더링되는지 확인한다.
- 모바일 폭에서 메뉴 버튼이 보이고, 메뉴 열기/닫기가 가능한지 확인한다.
- 이미지가 깨지거나 콘솔 에러가 발생하지 않는지 확인한다.

## 빌드 전 검증 루틴

1. 환경 확인
   - `node -v` 로 Node 버전을 확인한다.
   - 이 저장소는 현재 기본 셸 `v8.17.0` 에서 실패하므로, 빌드 전에 호환 가능한 Node 버전으로 전환한다.
   - 현재 검증 기준선은 `v20.17.0` 이다.

2. 테스트 기준선 확인
   - `CI=true npm test -- --watch=false` 로 테스트를 돌린다.
   - 현재는 Node 20에서도 `react-router-dom` 모듈 해석 실패가 먼저 발생한다.
   - 실패 시 assertion 이전의 런타임/의존성 문제인지 먼저 분리한다.

3. 빌드 기준선 확인
   - `npm run build` 로 프로덕션 번들을 생성한다.
   - Node 20 기준으로는 빌드가 성공하므로, 그 다음부터는 정적 자산 경로와 경고를 본다.
   - 정적 자산 경로, 외부 이미지, 상대 링크가 빌드에서 깨지지 않는지 확인한다.

4. 릴리스 전 수동 점검
   - `/`, `/company`, `/company/history`, `/product`, `/tech`, `/board` 를 순서대로 열어 렌더링을 확인한다.
   - 상단 메뉴와 푸터 링크를 클릭해 경로 이동이 맞는지 확인한다.

5. 변경 범위별 추가 확인
   - `src/components/Menu_v2.js` 변경 시 메뉴 토글과 NavLink 대상만 별도 점검한다.
   - `src/components/Constant/Products.js` 변경 시 제품 카드 수와 상세 링크를 집중 점검한다.
   - `src/components/Technology.js` 변경 시 이미지 경로와 본문 텍스트를 집중 점검한다.

## 권장 테스트 추가 순서

- 1차: `src/App.js` 라우팅 스모크 테스트.
- 2차: `src/components/Menu_v2.js` 토글 및 링크 테스트.
- 3차: `src/components/Dashboard.js` 와 `src/components/ProductIntroduction.js` 의 `PRODUCTS` 기반 렌더링 테스트.
- 4차: `src/components/companyInfo/CompanyHistory.js`, `src/components/Technology.js`, `src/components/Footer.js` 텍스트/링크 검증 테스트.
- 5차: Node 버전 상향 후 `npm test` 와 `npm run build` 를 다시 고정 검증.
- 6차: `react-router-dom` 테스트 호환성을 해결한 뒤 스모크 테스트를 CI 기준선으로 고정.
